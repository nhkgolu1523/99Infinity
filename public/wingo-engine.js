/* ==========================================================================
   WINGO BRIDGE — the SAME seam your wingo-engine.js used, wired to the real
   backend.

   index.html is untouched: it still loads `./wingo-engine.js` right before the
   module bundle, so this file simply IS that hook. What changed is where the
   answers come from:

     before   a local engine: a fake wallet in localStorage, bets in
              localStorage, results generated + read from Firebase in the page
     now      THIS app's own Worker: the real account wallet, real bets settled
              server-side, results written by the Cloudflare cron trigger into
              GAME_RESULTS/WINGO/<MODE> (see src/lib/wingo.ts)

   Nothing about the UI changes — same endpoints, same envelopes
   ({code, msg, msgCode, serviceNowTime, data}), same XHR/fetch hook points, same
   `page()` / `statRow()` / `ruleText()` shapes. The screen cannot tell the
   difference, except that the money is now real.

   HOW IT TALKS
     Every request is translated into this app's own endpoints:
       /api/webapi/GetGameIssue             → GET  /api/wingo/state
       /api/webapi/GetNoaverageEmerdList    → GET  /api/wingo/state   (history)
       /api/webapi/GetMyEmerdList           → GET  /api/wingo/state   (my bets)
       /api/webapi/GetBalance               → GET  /api/wingo/state   (balance)
       /api/webapi/GameBetting              → POST /api/wingo/bet
       /api/webapi/GetWinTheLotteryResult   → POST /api/wingo/result
       settings / rules / token             answered here (no money involved)

     Those five share ONE cached snapshot, so however often the screen polls they
     collapse into a single request every SNAPSHOT_MS.

   A guest is bounced to /login (every money endpoint is server-protected, so the
   page cannot spend anything on its own).
   ========================================================================== */
(function () {
  'use strict'

  var W = window, LS = W.localStorage
  var API = '/api/wingo'

  /* the ORIGINAL fetch — `route()` must never go through the hook below */
  var realFetch = W.fetch ? W.fetch.bind(W) : null

  /* ---------------------------------------------------------------- helpers */
  function sget(k, d) { try { var v = LS.getItem(k); return (v === null || v === undefined) ? d : v; } catch (e) { return d; } }
  function sset(k, v) { try { LS.setItem(k, v); } catch (e) { } }
  function pad(n, l) { n = String(n); while (n.length < l) n = '0' + n; return n; }
  function fmtTime(ms) {
    var d = new Date(ms)
    return d.getFullYear() + '-' + pad(d.getMonth() + 1, 2) + '-' + pad(d.getDate(), 2) +
      ' ' + pad(d.getHours(), 2) + ':' + pad(d.getMinutes(), 2) + ':' + pad(d.getSeconds(), 2)
  }
  function nowStr() { return fmtTime(Date.now()) }
  function inr(v) { return '\u20b9' + (Math.round(Number(v || 0) * 100) / 100) }

  /* the screen's vocabulary — identical to the engine's table, with the one rule
     we changed on purpose: betting closes 5 SECONDS before a period ends (the
     original shipped 15), so 55 of every 60 seconds stay open. The server holds
     the same number (src/lib/wingo.ts → WINGO_TYPES / CONFIG/WINGO), so the
     countdown, the bet lock and the accepted/refused bet can never disagree. */
  var TYPES = {
    4: { iv: 600, seq: '10004', len: 4, draw: 5, sort: 4, name: 'Win Go 10Min', scope: '1|10|100|1000', betMultiple: '1|5|10|20|50|100' },
    1: { iv: 60, seq: '10001', len: 4, draw: 5, sort: 3, name: 'Win Go 1Min', scope: '1|10|100|1000', betMultiple: '1|5|10|20|50|100' },
    2: { iv: 180, seq: '100020', len: 3, draw: 5, sort: 2, name: 'Win Go 3Min', scope: '1|10|100|1000', betMultiple: '1|5|10|20|50|100' },
    3: { iv: 300, seq: '10101', len: 4, draw: 5, sort: 1, name: 'Win Go 5Min', scope: '1|10|100|1000', betMultiple: '1|5|10|20|50|100' }
  }
  var TYPE_ORDER = [4, 1, 2, 3]
  function cfgOf(t) { return TYPES[t] || TYPES[1] }
  function typeOfIssue(issue) {
    var s = String(issue), p5 = s.substr(8, 5), p6 = s.substr(8, 6)
    if (p6 === '100020') return 2
    if (p5 === '10101') return 3
    if (p5 === '10004') return 4
    if (p5 === '10001') return 1
    return 1
  }
  /* Every issue id is built in IST (UTC+5:30), never in the device's own
     timezone: the server that decides a round (the Cloudflare cron Worker runs
     in UTC) and the screen that displays it (a phone in India) must produce the
     SAME id for the same minute, or the results, the history and the bets stop
     lining up the moment the game is played from a different timezone. */
  var IST_MS = 5.5 * 60 * 60 * 1000
  function issueFor(t, startMs) {
    var c = cfgOf(t), d = new Date(startMs + IST_MS)
    var dayStart = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - IST_MS
    var idx = Math.floor((startMs - dayStart) / (c.iv * 1000)) + 1
    return '' + d.getUTCFullYear() + pad(d.getUTCMonth() + 1, 2) + pad(d.getUTCDate(), 2) + c.seq + pad(idx, c.len)
  }
  function periodAt(t, ms) {
    var iv = cfgOf(t).iv * 1000, start = Math.floor(ms / iv) * iv
    return { start: start, end: start + iv, issue: issueFor(t, start) }
  }
  function typeOfRoute(p) {
    var t = parseInt(p.typeId, 10)
    if (isNaN(t)) t = parseInt(p.type, 10)
    if (isNaN(t)) t = 1
    return TYPES[t] ? t : 1
  }

  /* The screen addresses each duration by a game code ("WinGo_1min" …) and asks
     the draw server for `<lotteryCode>/<gameCode>.json` at every round boundary.
     We answer that ourselves (see issueJsonOf/hIssueJson) so the countdown never
     waits on an outside host — and we hand the same code back in GetTypeList so a
     tab switch keeps a valid code instead of blanking it. */
  var GAME_LOTTERY = 'WinGo'
  var GAME_CODE = { 1: 'WinGo_1min', 2: 'WinGo_3min', 3: 'WinGo_5min', 4: 'WinGo_10min' }
  var LAST_TYPE = 1
  function gameCodeOf(t) { return GAME_CODE[t] || GAME_CODE[1] }
  function typeOfGameCode(code) {
    var s = String(code || '').toLowerCase()
    if (/10\s*min/.test(s)) return 4
    if (/3\s*min/.test(s)) return 2
    if (/5\s*min/.test(s)) return 3
    if (/1\s*min/.test(s)) return 1
    return 0
  }

  /** The period an issue id describes (the server's own arithmetic, mirrored). */
  function periodOfIssue(issue) {
    var t = typeOfIssue(issue), c = cfgOf(t), s = String(issue)
    if (s.length < 8 + c.seq.length + c.len) return null
    if (s.substr(8, c.seq.length) !== c.seq) return null
    var y = Number(s.substr(0, 4)), mo = Number(s.substr(4, 2)) - 1, da = Number(s.substr(6, 2))
    var idx = parseInt(s.substr(8 + c.seq.length), 10)
    if (!y || !isFinite(idx) || idx < 1) return null
    /* IST midnight of the id's own date — the mirror of issueFor above, which
       builds ids in IST no matter what timezone the device runs in */
    var start = Date.UTC(y, mo, da) - IST_MS + (idx - 1) * c.iv * 1000
    return { start: start, end: start + c.iv * 1000, issue: s, type: t }
  }

  /** The running issue: the snapshot's own when it is fresh (so we agree with the
   *  server even if this device's clock drifts), otherwise the wall clock. */
  function livePeriod(t) {
    var c = cfgOf(t), iv = c.iv * 1000, now = Date.now()
    var h = SNAP[String(t)]
    if (h && h.data && h.data.issue && now - h.at < 6000) {
      var p = periodOfIssue(h.data.issue)
      if (p && p.end > now) return p
    }
    var start = Math.floor(now / iv) * iv
    return { start: start, end: start + iv, issue: issueFor(t, start), type: t }
  }

  /** The screen's own issue record for a period. */
  function periodViewOf(p) {
    var c = cfgOf(p.type)
    return {
      issueNumber: p.issue,
      startTime: fmtTime(p.start),
      endTime: fmtTime(p.end),
      serviceTime: nowStr(),
      intervalM: c.iv / 60,
      intervalMinute: c.iv / 60,
      state: 0,
      gameCode: gameCodeOf(p.type),
      lotteryCode: GAME_LOTTERY
    }
  }

  /** `<lotteryCode>/<gameCode>.json` — the round-boundary issue feed. Built from
   *  the WALL CLOCK (each period is a fixed slot of the minute), so it is always
   *  the period the server is in and always answers instantly. */
  function hIssueJson(type) {
    var cur = livePeriod(type)
    var nxt = { start: cur.end, end: cur.end + cur.end - cur.start, issue: issueFor(type, cur.end), type: type }
    var view = periodViewOf(cur)
    return JSON.stringify({
      code: 0, msg: 'Succeed', msgCode: 0,
      serviceNowTime: nowStr(), serviceTime: Date.now(),
      state: 0,
      intervalMinute: view.intervalMinute,
      currentStartTime: view.startTime,
      currentEndTime: view.endTime,
      current: view,
      next: periodViewOf(nxt)
    })
  }

  /** Does this URL ask for the issue feed? Returns {type} or null. Only the
   *  wingo issue feed is claimed — the app's own JSON bundles AND its other
   *  `.json` endpoints (history, introduce, …) fall through untouched, because
   *  the last path segment must itself be a game code. */
  function issueJsonOf(url) {
    var s = String(url || '')
    var path = s.split('?')[0].split('#')[0]
    if (path.indexOf('/assets/') !== -1) return null
    var m = /\/([A-Za-z0-9_]*)\/([A-Za-z0-9_]+)\.json$/.exec(path)
    if (!m) return null
    var lottery = m[1], game = m[2]
    var t = typeOfGameCode(game)
    /* `undefined/undefined.json` is what the screen asks for when its route has
       no game code (an old bookmark) — claim that too and answer it correctly */
    var isBare = (game === 'undefined' || lottery === 'undefined')
    if (!t && !isBare) return null
    if (!t) {
      if (String(lottery + '/' + game).toLowerCase().indexOf('wingo') === -1) return null
      var q = /[?&]typeId=([1-4])/.exec(s)
      t = q ? Number(q[1]) : LAST_TYPE
    }
    return { type: TYPES[t] ? t : LAST_TYPE }
  }

  /* ------------------------------------------------------------- envelopes */
  /* `serviceNowTime` is the original's field (a formatted string). `serviceTime`
     is the same instant as epoch MILLISECONDS — the screen's time service reads
     that one and anchors its countdown to it, so every device counts down to the
     SERVER's period end instead of its own clock. */
  function ok(data) {
    return JSON.stringify({ code: 0, msg: 'Succeed', msgCode: 0, serviceNowTime: nowStr(), serviceTime: Date.now(), data: data })
  }
  function fail(code, msg) {
    return JSON.stringify({ code: code, msg: msg, msgCode: 0, serviceNowTime: nowStr(), serviceTime: Date.now(), data: null })
  }
  function page(list, p, defSize) {
    var pageNo = Math.max(1, parseInt(p.pageNo, 10) || 1)
    var size = Math.max(1, parseInt(p.pageSize, 10) || defSize || 10)
    var total = list.length
    return {
      list: list.slice((pageNo - 1) * size, pageNo * size),
      pageNo: pageNo,
      pageSize: size,
      totalPage: Math.max(1, Math.ceil(total / size)),
      totalCount: total
    }
  }
  function statRow(type, typeName, arr) {
    var o = { type: type, typeName: typeName, type_Number: 0 }
    for (var i = 0; i < 10; i++) o['number_' + i] = arr[i]
    return o
  }

  /* ======================= the live snapshot (our Worker) =================
     ONE /api/wingo/state answer carries the issue, the countdown, the history,
     this player's bets AND the real wallet balance — so GetGameIssue,
     GetNoaverageEmerdList, GetLastFiveIssueNumberResult, GetMyEmerdList,
     GetBalance and friends all read from the same fetch. The screen polls hard;
     this keeps it to one request per SNAPSHOT_MS per mode. */
  var SNAPSHOT_MS = 3000
  var SNAP = {}          /* typeId → { at, data, pending } */
  var ME = { at: 0, data: null, pending: null }
  var ME_MS = 15000
  var authLost = false

  function apiCall(method, url, body) {
    if (!realFetch) return Promise.reject({ code: -1, msg: 'offline' })
    return realFetch(url, {
      method: method,
      credentials: 'same-origin',
      cache: 'no-store',
      headers: body ? { 'content-type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      return r.text().then(function (txt) {
        var d = null
        try { d = JSON.parse(txt) } catch (e) { d = null }
        if (r.status === 401) { onAuthLost(); return Promise.reject({ code: 401, msg: 'Please log in first' }) }
        if (!r.ok) return Promise.reject({ code: r.status, msg: (d && d.error) || 'Request failed' })
        return d
      })
    })
  }

  /** every money endpoint is behind the site session — a guest is sent to log in */
  function onAuthLost() {
    if (authLost) return
    authLost = true
    location.replace('/login')
  }

  function snapshot(typeId, force) {
    if (TYPES[typeId]) LAST_TYPE = Number(typeId)
    var key = String(typeId)
    var h = SNAP[key]
    var now = Date.now()
    if (!force && h && h.data && now - h.at < SNAPSHOT_MS) return Promise.resolve(h.data)
    if (h && h.pending) return h.pending
    SNAP[key] = SNAP[key] || {}
    SNAP[key].pending = apiCall('GET', API + '/state?typeId=' + typeId)
      .then(function (d) {
        SNAP[key] = { at: Date.now(), data: d, pending: null }
        if (d && typeof d.balance === 'number') markWalletChanged(d.balance)
        return d
      })
      .catch(function (e) {
        if (SNAP[key] && SNAP[key].data) { SNAP[key].pending = null; return SNAP[key].data }
        SNAP[key] = { at: 0, data: null, pending: null }
        throw e
      })
    return SNAP[key].pending
  }

  /** /api/me — the profile, the phone number and the lifetime totals */
  function me(force) {
    var now = Date.now()
    if (!force && ME.data && now - ME.at < ME_MS) return Promise.resolve(ME.data)
    if (ME.pending) return ME.pending
    ME.pending = apiCall('GET', '/api/me')
      .then(function (d) { ME = { at: Date.now(), data: d, pending: null }; return d })
      .catch(function (e) { ME.pending = null; throw e })
    return ME.pending
  }

  /* the balance the whole screen shows — the last snapshot's real number */
  function lastBalance() {
    var best = null
    for (var k in SNAP) {
      var h = SNAP[k]
      if (h && h.data && typeof h.data.balance === 'number') {
        if (!best || h.at > best.at) best = { at: h.at, v: h.data.balance }
      }
    }
    return best ? best.v : 0
  }

  /** The newest snapshot of ANY mode (which one does not matter — they all carry
   *  the same wallet). Used by the handlers that only want the money. */
  function newestSnapshot() {
    var best = null
    for (var k in SNAP) {
      var h = SNAP[k]
      if (h && h.data && (!best || h.at > best.at)) best = h
    }
    return best
  }

  /** The wallet, asked for on purpose (the refresh button, the header, a wallet
   *  screen). The screen's own poll caches for SNAPSHOT_MS, but an explicit ask
   *  refreshes right away when that cache is more than `maxAge` old — so tapping
   *  refresh shows the real number instead of waiting out the poll window. */
  function freshSnapshot(typeId, maxAge) {
    var t = TYPES[typeId] ? Number(typeId) : LAST_TYPE
    var h = SNAP[String(t)]
    var age = h ? Date.now() - h.at : Infinity
    return snapshot(t, age > (maxAge || 1200)).catch(function () { return h ? h.data : null })
  }

  /* tell the site behind this page that the wallet moved — the same two keys the
     Ludo board uses, so public/js/app.js repaints the settled number instantly */
  function markWalletChanged(total) {
    try {
      LS.setItem('vg_ludo_wallet_at', String(Date.now()))
      if (isFinite(Number(total))) LS.setItem('vg_ludo_wallet_total', String(Number(total)))
    } catch (e) { }
  }

  /* ============================ read handlers ============================ */
  function hGetTypeList() {
    var enabled = null
    for (var k in SNAP) {
      var d = SNAP[k] && SNAP[k].data
      if (d && d.modes) { enabled = d.modes; break }
    }
    var list = TYPE_ORDER.filter(function (t) {
      if (!enabled) return true
      return enabled[String(t)] !== false
    }).map(function (t) {
      var c = TYPES[t]
      return {
        typeID: t,
        typeName: c.name,
        /* the tab switch hands this back to setLotteryCode, and the round-boundary
           refresh then asks for `<lotteryCode>/<gameCode>.json` — without it the
           screen would ask for `undefined/undefined.json` and freeze on the last
           second of every round */
        gameCode: gameCodeOf(t),
        lotteryCode: GAME_LOTTERY,
        intervalM: c.iv / 60,
        scope: c.scope,
        betMultiple: c.betMultiple,
        sort: c.sort
      }
    })
    return ok(list)
  }

  function hGetGameIssue(t) {
    LAST_TYPE = t
    /* Answered from the WALL CLOCK — the screen PAUSES its countdown while it
       waits for this, so a slow answer is exactly what made the timer sit on
       00:01 for a few seconds at every round change. Nothing here touches the
       network: the period a wall clock is in is the period the server is in. */
    var p = livePeriod(t)
    var c = cfgOf(t)
    return Promise.resolve(ok({
      issueNumber: p.issue,
      startTime: fmtTime(p.start),
      endTime: fmtTime(p.end),
      serviceTime: nowStr(),
      intervalM: c.iv / 60,
      gameCode: gameCodeOf(t),
      lotteryCode: GAME_LOTTERY
    }))
  }

  function hHistory(t, p) {
    return snapshot(t).then(function (s) {
      var list = (s.history || []).map(function (r) {
        return { issueNumber: r.issueNumber, number: r.number, colour: r.colour, premium: r.premium }
      })
      return ok(page(list, p, 10))
    })
  }


  /* the trend page's five rows — your engine's own arithmetic, computed here */
  function statsFrom(numbers) {
    var digits = numbers.slice(0, 100), i, d
    if (!digits.length) digits = [0]
    var freq = [], missing = [], avgGap = [], maxRun = [], run = []
    var gapSum = [], gapCnt = [], lastSeen = []
    for (i = 0; i < 10; i++) { freq[i] = 0; missing[i] = -1; avgGap[i] = 0; maxRun[i] = 0; run[i] = 0; gapSum[i] = 0; gapCnt[i] = 0; lastSeen[i] = -1 }
    for (i = 0; i < digits.length; i++) {
      d = digits[i]
      freq[d]++
      if (missing[d] === -1) missing[d] = i
      if (lastSeen[d] !== -1) { gapSum[d] += (i - lastSeen[d]); gapCnt[d]++ }
      lastSeen[d] = i
    }
    var rev = digits.slice().reverse(), v
    for (i = 0; i < 10; i++) run[i] = 0
    for (i = 0; i < rev.length; i++) {
      v = rev[i]
      if (i > 0 && rev[i - 1] === v) { run[v]++ } else { for (var z = 0; z < 10; z++) run[z] = 0; run[v] = 1 }
      if (run[v] > maxRun[v]) maxRun[v] = run[v]
    }
    for (i = 0; i < 10; i++) {
      avgGap[i] = gapCnt[i] ? Math.round(gapSum[i] / gapCnt[i]) : digits.length
      if (missing[i] === -1) missing[i] = digits.length
    }
    return { freq: freq, missing: missing, maxRun: maxRun, avgGap: avgGap }
  }

  function hStats(t) {
    return snapshot(t).then(function (s) {
      var numbers = (s.history || []).map(function (r) { return r.number })
      var st = statsFrom(numbers)
      return ok([
        statRow(5, 'Interval Number', st.avgGap),
        statRow(4, 'Avg Missing', st.avgGap),
        statRow(3, 'Max Continued', st.maxRun),
        statRow(2, 'Missing', st.missing),
        statRow(1, 'Frequency', st.freq)
      ])
    })
  }

  /* my bets, in the exact shape the My-bets tab renders */
  var SELECT_NAME = { 10: 'red', 11: 'green', 12: 'violet', 13: 'big', 14: 'small' }
  function selectName(selectType, gameType) {
    if (Number(gameType) === 1) return String(selectType)
    return SELECT_NAME[selectType] || String(selectType)
  }

  function hMyBets(t, p) {
    return snapshot(t).then(function (s) {
      var list = (s.myBets || []).map(function (b, idx) {
        var stake = Math.round(Number(b.stake) * 100) / 100
        var o = {
          orderNumber: idx,
          issueNumber: b.issue,
          amount: b.amount,
          betCount: b.betCount,
          realAmount: Math.round(stake * 0.98 * 100) / 100,
          fee: b.fee,
          selectType: selectName(b.selectType, b.gameType),
          /* 2 = still waiting for the draw, 1 = won, 0 = lost */
          state: b.state,
          addTime: fmtTime(b.time)
        }
        if (b.state !== 2) {
          o.number = b.number
          o.profitAmount = b.profitAmount
          o.premium = b.premium
          o.gameType = b.typeId
        }
        return o
      })
      return ok(page(list, p, 10))
    })
  }

  /* ---- the site's announcements: the SAME messages the Notifications screen
     shows, so the notice bar in the game carries what the admin actually sent.
     They arrive with the snapshot, so the bar paints on the first answer.
     The bar reads `res.data.list` (NoticeBar.vue: `setMessage(res.data.list)`),
     so the payload is the usual paged object — `{list, pageNo, pageSize,
     totalPage, totalCount}` — not a bare array. */
  function hSiteMessageList(t, p) {
    return snapshot(t).then(function (s) {
      var items = (s.messages || []).map(function (m) {
        return {
          id: m.id,
          title: m.title,
          siteMessage: m.siteMessage || m.title,
          addtime: m.addtime || '',
          isRead: Number(m.isRead) || 0
        }
      })
      return ok(page(items, p, 5))
    })
  }

  function hLastFive(t) {
    return snapshot(t).then(function (s) {
      return ok({ number: (s.lastFive || []).join(',') })
    })
  }

  /* ---- the round-over pop-up: the SERVER decides the money, we only report.
     The screen schedules this ask for the exact millisecond the period ends,
     computed from the countdown digits — which can land a beat BEFORE the
     period's last second is over. The server refuses to reveal a round that has
     not ended (`number: null`), and answering that as a settled bet would paint
     a "loss · ₹0" pop-up on a bet that may still win. So while the round is not
     published yet we retry for a couple of seconds; only when it stays
     unpublished do we answer nothing (no pop-up at all — never a wrong one). */
  function hWinResult(issue) {
    var t = typeOfIssue(issue)
    var tries = 0
    function once() {
      return apiCall('POST', API + '/result', { typeId: t, issue: String(issue) }).then(function (d) {
        if (d && typeof d.balance === 'number') markWalletChanged(d.balance)
        if (!d || !d.mine) return ok([])
        /* The screen's countdown drifts a couple of seconds ahead of the server
           (its ticker is a plain setInterval), so this ask can land 2–4s before
           the period has really ended. Poll until the round is published — the
           result appears the instant it is — and only give up (answering nothing,
           never a wrong "loss") after ~9 seconds. */
        if (d.number === null && tries < 36) {
          tries++
          return new Promise(function (res) { setTimeout(res, 250) }).then(once)
        }
        if (d.number === null) return ok([])
        return ok([{
          issueNumber: String(issue),
          number: d.number,
          colour: d.colour,
          winAmount: Number(d.winAmount) || 0,
          typeName: t,
          state: Number(d.state) || 0
        }])
      }).catch(function (e) {
        /* nothing of mine on that round, or the round is not drawn yet */
        return ok([])
      })
    }
    return once()
  }


  /* ---- platform settings: byte-for-byte what your engine answered ---- */
  function hHomeSettings() {
    return ok({
      isShowAppDownloadUp: true, isOpenInvitedWheel: true, invitedWheelTotalPrizeAmount: 300,
      isShowAppDownloadDown: true, isShowLotteryDragon: true, isSplitLocalEWallet: true,
      isShowRewardCenter: true, isOpenDownAppRewardSwitch: true, jackportMaxReswadAmount: 500,
      projectName: 'WINGO', projectLogo: '', languages: 'en|hd|ta|te', webIco: '', headLogo: '',
      dollarSign: '\u20b9', upperOrLower: '0', defaultCurrentLanguage: 'en',
      registerMobile: '1', registerEmail: '0', areaPhoneLenList: [{ area: '+91', len: '9-12' }],
      registerSms: '0', isOpenLoginChangeLanguage: '1', rewardValidityTime: 30,
      electronicWinRateExternalLink: '', electronicWinRateImgUrl: '',
      isShowElectronicWinRateExternalLink: false, isShowAppHandCodeWashingSwitch: true,
      isShowHotGameWinOdds: true, ossUrl: '', bigTurntableLink: null, telegramExternalLink: '',
      isOpenActivityAward: false, isOpenTurntable: true, isPartnerReward: true,
      isSelfCustomerService: true, webSiteUrl: '', isOpenFacebookEvent: true,
      isOpenRegisterPhoneFirstZeroSwitch: false, eventRegionConfigList: null,
      firstDepositRewardCodeAmount: '1', isOpenAdjustEvent: false,
      isShowBonusCenterExternalLink: true, isOpenBrowserConsoleDebug: false,
      homeBigTurntableSwitch: true
    })
  }

  function hLoadedSetting() {
    return ok({
      needPopupFirstRecharge: true, isExistGrandAward: false,
      children_Lv_RebateAmount_Yesterday: 0.00, returnAwards: 0.0, isARPay: true, isRSNPay: false,
      isLandingPageEnabled: false, landingPageUrl: null, isFinancePromptTextEnabled: false,
      financePromptText: null, isAppDownloadPromptTextEnabled: false, appDownloadPromptText: null,
      isAppForcedDownloadEnabled: false, appForcedDownloadUrl: null
    })
  }

  /* the rules modal — your engine's exact copy (currency sign left as-is) */
  function ruleText(t) {
    var c = cfgOf(t), order = c.iv - c.draw
    var head = c.name.replace('Win ', '') + ' 1 issue, ' + order + ' seconds to order, ' +
      c.draw + ' seconds waiting for the draw. It opens all day.'
    var f = 'font face="Arial, Microsoft YaHei, Malgun Gothic, Meiryo, sans-serif"'
    return '<p style=""><' + f + '>' + head + '</font><br></p>' +
      '<p style=""><' + f + '>If you spend 100 to trade, after deducting 2 service fee, your contract amount is 98:</font></p>' +
      '<p style=""><' + f + '>1.Select green: if the result shows 1,3,7,9 you will get (98*2) 196; If the result shows 5, you will get (98*1.5) 147</font></p>' +
      '<p style=""><' + f + '>2.Select red: if the result shows 2,4,6,8 you will get (98*2) 196; If the result shows 0, you will get (98*1.5) 147</font></p>' +
      '<p style=""><' + f + '>3.Select violet: if the result shows 0 or 5, you will get (98*4.5) 441</font></p>' +
      '<p style=""><' + f + '>4.Select a number: if the result shows the same number, you will get (98*9) 882</font></p>' +
      '<p style=""><' + f + '>5.Select big/small: if the result is 5-9 you will get (98*2) 196; if the result is 0-4 you will get (98*2) 196</font></p>'
  }

  function hLongDragon() {
    function game(type, name, seq, typeId, gtype, remark, scope, mult, bettingGameType) {
      var p = periodAt(typeId, Date.now())
      return {
        lotteryGameType: 0, issueNumber: p.issue, startTime: fmtTime(p.start), endTime: fmtTime(p.end),
        type: type, lotteryName: name, issue: seq, gameType: gtype, remark: remark,
        gameResult: 'L', intervalM: TYPES[typeId].iv / 60, scope: scope, betMultiple: mult,
        playRate: null, bettingGameType: bettingGameType
      }
    }
    return ok({
      list: [
        game(5, '5D 1 Minute', 5, 1, 0, 'BIG,SMALL', '1|10|100|1000', '1|5|10|20|50|100', 1),
        game(4, 'K3 Game', 5, 2, 4, 'TIE,BIG,SMALL', '5|10|100|1000', '1|5|10|20|50|100', 2),
        game(7, 'Wingo 1 Min', 5, 1, 2, 'TIE,BIG,SMALL', '10|50|100|500|1000', '1|2|5|10|20|50|100', 3)
      ],
      lotteryGameType: [], serviceTime: Date.now(), amount: null, isLogin: 0, isDaman: 0
    })
  }

  function generic(ep, p) {
    var n = String(ep)
    if (/List$/.test(n) || /Page$/.test(n)) return ok(page([], p, 10))
    if (n === 'GetMaintenanceInfo') return ok({ status: 0, isMaintenance: 0, showMaintenance: false })
    if (n === 'NeedPopupFirstRecharge' || n === 'GetPointMallState') return ok(0)
    if (n === 'GetActiveSetting') return ok({})
    return ok(null)
  }


  /* =========================== money handlers =========================== */
  /* The bet goes to the Worker. The browser sends an order id + a selection and
     the two numbers that make the stake — never a money value the server has to
     trust: /api/wingo/bet re-validates all of it, decides the round itself and
     charges the real wallet. One order id = one bet, so a double tap or a retry
     answers `replay` instead of charging twice. */
  function newOrderId() {
    return 'wg' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
  }

  function hBetting(t, p) {
    var unit = parseFloat(p.amount) || 0
    var cnt = parseInt(p.betCount, 10) || 1
    if (unit < 1) return Promise.resolve(fail(7, "Invalid value for parameter 'Amount'"))
    if (cnt < 1) return Promise.resolve(fail(7, "Invalid value for parameter 'BetCount'"))
    var selectType = parseInt(p.selectType, 10)
    var gameType = parseInt(p.gameType, 10)

    return apiCall('POST', API + '/bet', {
      order_id: newOrderId(),
      typeId: t,
      selectType: selectType,
      gameType: gameType,
      amount: Math.round(unit),
      betCount: cnt
    }).then(function (d) {
      /* the wallet really moved — paint it and tell the site behind us */
      if (d && typeof d.balance === 'number') {
        markWalletChanged(d.balance)
        if (SNAP[String(t)] && SNAP[String(t)].data) SNAP[String(t)].data.balance = d.balance
      }
      /* refresh the snapshot so the next poll already shows the new balance */
      snapshot(t, true).catch(function () { })
      return ok({ amount: d.stake, balance: d.balance })
    }).catch(function (e) {
      var msg = (e && e.msg) || 'Balance is not enough'
      /* the game's own wording for a closed round */
      if (e && e.code === 400 && /closed for this round/i.test(msg)) msg = 'The current period is settled'
      return fail(1, msg)
    })
  }

  /* ---- the account: profile + the REAL balance (main + bonus buckets) ---- */
  function hUserInfo() {
    return Promise.all([me(true), freshSnapshot(0, 1200)]).then(function (r) {
      var u = r[0] || {}
      var s = r[1]
      var bal = s && typeof s.balance === 'number' ? s.balance : lastBalance()
      var profile = u.profile || {}
      /* the account's own phone — /api/me answers it (falling back to the seeded
         placeholder so the header never renders "91undefined") */
      var phone = String(u.phone || sget('number', ''))
      var g = [11, 12, 15, 16, 17, 18, 19, 20], ga = [], ua = [], i
      for (i = 0; i < 8; i++) ga.push({ id: g[i], isShow: true })
      for (i = 0; i < 10; i++) ua.push(String(i))
      return ok({
        userId: Number(u.uid) || 0,
        userPhoto: '1',
        userName: '91' + phone,
        nickName: profile.name || ('user' + String(u.uid || '').slice(-4)),
        createdate: nowStr(),
        sign: '',
        amountofCode: 0.00,
        isWithdraw: null,
        message: null,
        withdrawCount: 0,
        addTime: fmtTime(Number(profile.createdAt) || Date.now()),
        userLoginDate: fmtTime(Number(profile.lastLogin) || Date.now()),
        startTime: null,
        endTime: null,
        fee: 0.0,
        unRead: 0,
        facebookAppID: null,
        googleAppID: null,
        twitterAppID: null,
        keyCode: null,
        trxRate: 10.0,
        uGold: 0.00,
        googleVerify: 0,
        isvalidator: 0,
        isRePwd: '1',
        integral: 0,
        isOpenPointMall: '0',
        isOpenAmountOfCode: '1',
        isOpenOfficialRechargeInputDialog: '0',
        isAllowUserAddUSDT: '1',
        isShowWalletTotalCT: '0',
        isShowRechargeBankList: '0',
        isPopupCommissionSwitch: '0',
        amount: bal,
        accountType: 1,
        number: phone,
        balance: bal,
        uRate: 93,
        verifyMethods: { mobile: '91' + phone, email: profile.email || '', google: '0' },
        groupDataShowAuth: ga,
        userGroupAuth: ua,
        bindReward: 0.0,
        isGoogle: '0',
        isOpenChampion: '0',
        isAllowWithdraw: 1,
        regType: 1
      })
    }).catch(function () {
      return fail(401, 'Please log in first')
    })
  }

  function hWalletList() {
    return Promise.all([freshSnapshot(0, 1200), me(false).catch(function () { return null })]).then(function (r) {
      var s = r[0], u = r[1] || {}
      var bal = s && typeof s.balance === 'number' ? s.balance : lastBalance()
      var totals = u.walletTotals || {}
      var vendors = ['Lottery', 'TB_Chess', 'Wickets9', 'CQ9', 'MG', 'JDB', 'DG', 'CMD', 'SaBa',
        'EVO_Video', 'JILI', 'Card365', 'V8Card', 'AG_Video', 'PG', 'TB', 'WM_Video']
      var list = vendors.map(function (v, i) {
        return { vendorCode: v, balance: i === 0 ? Math.round(bal) : 0 }
      })
      return ok({
        thidGameBalanceList: list,
        totalWithdraw: Number(totals.withdrawTotal) || 0,
        totalRecharge: Number(totals.depositTotal) || 0,
        amount: bal,
        balance: bal
      })
    }).catch(function () {
      return fail(401, 'Please log in first')
    })
  }

  function hAmount() {
    return freshSnapshot(0, 1200).then(function (s) {
      var bal = s && typeof s.balance === 'number' ? s.balance : lastBalance()
      return ok({ amount: bal, uRate: 93, uGold: 0, balance: bal })
    })
  }


  /* ============================= route table ============================= */
  /* the app sends issueNumber as an ARRAY of one id */
  function issueArg(v) {
    if (Array.isArray(v)) v = v[0]
    return (v === undefined || v === null) ? '' : String(v)
  }

  /** the endpoint name of a request, or null when it is not one of ours
   *  (anything else — images, the site's own API — is passed straight through) */
  function endpointOf(url) {
    var s = String(url || '')
    if (s.indexOf('/api/webapi/') === -1 && !/\.php(\?|$)/.test(s)) return null
    var m = /\/api\/webapi\/([A-Za-z0-9_]+)/.exec(s) || /\/([A-Za-z0-9_]+)\.php/.exec(s)
    return m ? m[1] : null
  }

  /* a short rolling log of what the screen asked for — `__WINGO_BRIDGE__.diag()`
     in the console, or `localStorage.wingoDebug = '1'` to also mirror it there */
  var DIAG = []
  function diag(what, url, p) {
    try {
      var extra = ''
      if (p && typeof p === 'object') {
        var bits = []
        if (p.typeId !== undefined) bits.push('typeId=' + p.typeId)
        if (p.gameCode !== undefined) bits.push('gameCode=' + p.gameCode)
        if (p.lotteryCode !== undefined) bits.push('lotteryCode=' + p.lotteryCode)
        if (p.selectType !== undefined) bits.push('selectType=' + p.selectType)
        if (p.issueNumber !== undefined) bits.push('issue=' + p.issueNumber)
        if (bits.length) extra = ' {' + bits.join(' ') + '}'
      }
      DIAG.push(Date.now() + ' ' + what + extra + ' ' + String(url).slice(-70))
      if (DIAG.length > 300) DIAG.shift()
      if (LS.getItem('wingoDebug') === '1') console.log('WINGO ' + DIAG[DIAG.length - 1])
    } catch (e) { }
  }

  /** Returns a Promise<string> (a JSON body), or null to pass the request
   *  through to the real network. */
  function route(method, url, body) {
    var ep = endpointOf(url)
    if (!ep) {
      /* the round-boundary issue feed — `<lotteryCode>/<gameCode>.json`: answered
         here, instantly, so the countdown never stalls waiting on a draw server
         that is not ours (the original app's own host is long gone) */
      var j = issueJsonOf(url)
      if (j) { diag('issue.json', url, null); return Promise.resolve(hIssueJson(j.type)) }
      return null
    }

    var p = {}
    if (body) {
      try { p = (typeof body === 'string') ? JSON.parse(body) : body } catch (e) { p = {} }
    }
    if (!p || typeof p !== 'object') p = {}
    diag(ep, url, p)

    var answer
    try {
      switch (ep) {
        case 'GetTypeList':                  answer = hGetTypeList(); break
        case 'GetGameIssue':                 answer = hGetGameIssue(typeOfRoute(p)); break
        case 'GetNoaverageEmerdList':        answer = hHistory(typeOfRoute(p), p); break
        case 'GetEmerdList':                 answer = hStats(typeOfRoute(p)); break
        case 'GetMyEmerdList':
        case 'GetNewMyEmerdList':            answer = hMyBets(typeOfRoute(p), p); break
        case 'GetWinTheLotteryResult':
          answer = hWinResult(issueArg(p.issueNumber !== undefined ? p.issueNumber : p.issuenumber)); break
        case 'GetLastFiveIssueNumberResult': answer = hLastFive(typeOfRoute(p)); break
        case 'GetLongDragon':                answer = hLongDragon(); break
        case 'GameBetting':                  answer = hBetting(typeOfRoute(p), p); break
        case 'GetRuleByTypeId':
          answer = ok({ typeID: typeOfRoute(p), gamePresentation: ruleText(typeOfRoute(p)) }); break

        /* platform settings — the app destructures / indexes these directly */
        case 'GetHomeSettings':              answer = hHomeSettings(); break
        case 'GetLoadedSetting':             answer = hLoadedSetting(); break
        case 'GetPwaDomainList':             answer = ok([]); break
        case 'GetSitePopMsgList':            answer = ok([]); break
        case 'GetSiteMessage':
        case 'GetSiteMessageList':
        case 'GetMessageList':             answer = hSiteMessageList(typeOfRoute(p), p); break
        case 'GetMaintenanceInfo':           answer = ok({ status: 0, isMaintenance: 0, showMaintenance: false }); break
        case 'GetActiveSetting':             answer = ok({}); break
        case 'NeedPopupFirstRecharge':       answer = ok(0); break

        case 'GetUserInfo':                  answer = hUserInfo(); break
        case 'GetBalance':
        case 'GetUserAmount':
        case 'GetSafeUserAmount':
        case 'GetWinsUserAmount':
        case 'GetBalanceByARGame':           answer = hAmount(); break
        case 'GetAllwallets':
        case 'GetSaasAllwallets':
        case 'GetARGameAndPlatWallets':      answer = hWalletList(); break

        case 'RefreshToken':
        case 'Login':
          answer = ok({
            token: sget('token', 'WE-LOCAL-TOKEN'),
            tokenHeader: 'Bearer ',
            refreshToken: sget('refreshToken', 'WE-LOCAL-REFRESH'),
            expiresIn: Math.floor(Date.now() / 1000) + 86400,
            passwordErrorNum: 0,
            passwordErrorMaxNum: 30
          })
          break
        case 'LoginOff':
        case 'SetUserLanguage':
        case 'UpdateOnlineStatus':
        case 'SetAllMessageState':
        case 'SetOneMessageState':
        case 'OneKeyMarkAllData':            answer = ok(null); break
        case 'RegisterState':
          answer = ok({ isOpenRegisterMobile: false, isOpenRegisterSMS: false, isOpenRegisterEmail: false })
          break

        default:                             answer = generic(ep, p)
      }
    } catch (e) {
      answer = fail(-1, 'Bridge error')
    }
    /* some handlers are async (they talk to the Worker) — normalise to a Promise */
    return (answer && typeof answer.then === 'function') ? answer : Promise.resolve(answer)
  }


  /* ==================== XHR interception (axios) ====================
     Exactly your engine's hook, except the answer may take a round-trip: the
     fake response is filled in when the Worker answers, not from memory. */
  var XHR = W.XMLHttpRequest && W.XMLHttpRequest.prototype
  if (XHR && XHR.open && XHR.send) {
    var _open = XHR.open, _send = XHR.send, _abort = XHR.abort

    XHR.open = function (m, u) {
      this.__we = { m: m, u: String(u) }
      return _open.apply(this, arguments)
    }

    XHR.abort = function () {
      if (this.__we) this.__we.aborted = true
      return _abort ? _abort.apply(this, arguments) : undefined
    }

    XHR.send = function (body) {
      var self = this, info = this.__we
      var pending = info ? route(info.m, info.u, body) : null
      /* not one of ours — the real request goes out untouched */
      if (!pending) return _send.apply(this, arguments)

      pending.then(
        function (res) { deliver(self, info, res) },
        function (e) { deliver(self, info, fail((e && e.code) || -1, (e && e.msg) || 'Request failed')) }
      )
    }
  }

  /** fill in a fake 200 response on a real XHR object (your engine's code) */
  function deliver(self, info, res) {
    if (!self || (info && info.aborted)) return
    var parsed = null
    try { parsed = JSON.parse(res) } catch (e) { parsed = null }
    setTimeout(function () {
      try {
        function def(k, v) { Object.defineProperty(self, k, { value: v, configurable: true }) }
        def('readyState', 4)
        def('status', 200)
        def('statusText', 'OK')
        def('responseText', res)
        def('response', parsed)
        def('responseURL', info ? info.u : '')
        self.getAllResponseHeaders = function () {
          return 'content-type: application/json; charset=utf-8\r\n'
        }
        self.getResponseHeader = function (n) {
          return String(n).toLowerCase() === 'content-type'
            ? 'application/json; charset=utf-8' : null
        }
        if (typeof self.onreadystatechange === 'function') {
          try { self.onreadystatechange(new Event('readystatechange')) } catch (e) { }
        }
        if (typeof self.onload === 'function') {
          try { self.onload(new Event('load')) } catch (e) { }
        }
        if (typeof self.onloadend === 'function') {
          try { self.onloadend(new Event('loadend')) } catch (e) { }
        }
        ;['readystatechange', 'load', 'loadend'].forEach(function (n) {
          try { self.dispatchEvent(new Event(n)) } catch (e) { }
        })
      } catch (e) { }
    }, 15)
  }

  /* ==================== fetch interception (safety net) ==================== */
  var _fetch = W.fetch
  W.fetch = function (input, init) {
    try {
      var url = (typeof input === 'string') ? input : ((input && input.url) || '')
      if (endpointOf(url)) {
        var method = (init && init.method) || (input && input.method) || 'GET'
        return route(method, url, (init && init.body) || null).then(
          function (res) {
            return new Response(res, { status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } })
          },
          function (e) {
            return new Response(fail((e && e.code) || -1, (e && e.msg) || 'Request failed'), {
              status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' }
            })
          }
        )
      }
    } catch (e) { }
    return _fetch ? _fetch.apply(this, arguments) : Promise.reject(new Error('offline'))
  }


  /* ============================= session =============================
     The SPA's own router guard runs:
        if (Number(localStorage.isToLogin) == 1) { set 2; next() }
        ... if (!store.token) return redirect('/login')
     Seeding these is enough that the game screen is what opens — the REAL
     account is the site's session cookie, and every money endpoint checks it. */
  function seedSession() {
    if (!sget('token', '')) sset('token', 'WE-LOCAL-TOKEN')
    if (!sget('tokenHeader', '')) sset('tokenHeader', 'Bearer ')
    if (!sget('refreshToken', '')) sset('refreshToken', 'WE-LOCAL-REFRESH')
    if (sget('number', null) === null) sset('number', '')
    if (!sget('numberType', '')) sset('numberType', '1')
    if (sget('email', null) === null) sset('email', '')
    sset('isToLogin', '1')
  }
  seedSession()
  setInterval(seedSession, 500)

  /* /wingo/?type=3 → open the 3Min tab (the Worker redirects here) */
  try {
    var tm = /[?&]type=([1-4])(&|$)/.exec(String(W.location.search || ''))
    var bootType = (tm && TYPES[Number(tm[1])]) ? Number(tm[1]) : 0
    if (bootType && String(W.location.hash || '').indexOf('gameCode=') === -1) {
      W.location.hash = '#/home/AllLotteryGames/WinGo?typeId=' + bootType + '&gameCode=' + gameCodeOf(bootType)
    }
  } catch (e) { }

  /* ------------------------- the route the screen lives on ----------------
     The WinGo view reads its game code from the query (`route.query.gameCode`)
     and hands it to setLotteryCode; that code is what the round-boundary refresh
     then asks the draw server for. So the route must always carry a VALID code —
     otherwise the screen asks for `undefined/undefined.json`, that ask fails, and
     the countdown freezes on the last second of every round. */
  function routeFor(type) {
    if (!TYPES[type]) type = 1
    return '#/home/AllLotteryGames/WinGo?typeId=' + type + '&gameCode=' + gameCodeOf(type)
  }
  function typeInHash(h) {
    var m = /typeId=([1-4])/.exec(String(h || ''))
    return m ? Number(m[1]) : 0
  }

  /* keep the app pinned to the game route — and to a valid mode + code */
  var BOOT_TYPE = 1
  try {
    var bm = typeInHash(W.location.hash)
    if (bm) BOOT_TYPE = bm
  } catch (e) { }
  setInterval(function () {
    var h = String(location.hash || '')
    if (h.indexOf('#/home/AllLotteryGames/WinGo') !== 0) location.replace(routeFor(BOOT_TYPE))
    else if (h.indexOf('gameCode=') === -1) location.replace(routeFor(typeInHash(h) || BOOT_TYPE))
  }, 400)

  /* ============ the site's own pages, wired into the game shell ============
     Three buttons of the shell belong to the ORIGINAL app, whose own wallet and
     notice screens are not part of this site:

       wallet bar  Withdraw → /account/withdraw
       wallet bar  Deposit  → /account/deposit
       notice bar  Detail   → /messages   (the Notifications screen)

     Each of those pages honours a `back` query, so its back button returns the
     player to the exact round they left (`/wingo.html?type=<mode>`).

     The click is caught in the CAPTURE phase on `document`, i.e. BEFORE the
     shell's own Vue listener on the button: stopPropagation() keeps the original
     handler from running, and the site page opens instead. The two route watches
     (hash + pushState) cover the other possibility — a button that navigates
     instead of reacting — so both shapes of the shell end up on our page. */
  function sitePageFor(word) {
    if (/withdraw/i.test(word)) return '/account/withdraw'
    if (/recharge|deposit/i.test(word)) return '/account/deposit'
    return '/messages'
  }

  /* where the back button of the site page must land: this very round. The mode
     rides in the HASH (`#/home/AllLotteryGames/WinGo?typeId=…&gameCode=…`),
     which the screen's own boot code reads and pins — a `?type=` query on the
     .html itself is not used here, because a query on a static file keeps some
     dev servers from serving the file at all. */
  function backHere() {
    var t = 0
    try { t = typeInHash(W.location.hash) } catch (e) { }
    return '/wingo.html' + routeFor(t || BOOT_TYPE)
  }

  function openSitePage(path) {
    try {
      W.location.href = path + '?back=' + encodeURIComponent(backHere())
    } catch (e) {
      W.location.href = path
    }
  }

  /* the label of the wallet-bar chip the click landed on ('' when it is not one
     of the two chips — the bet grid never says exactly "Deposit"/"Withdraw") */
  function chipWord(node) {
    var n = node
    for (var i = 0; i < 3 && n; i++) {
      if (n.classList && n.classList.contains('Wallet__C-balance-l3')) break
      var t = String(n.textContent || '').replace(/\s+/g, ' ').trim()
      if (t === 'Withdraw' || t === 'Deposit') return t
      n = n.parentElement
    }
    return ''
  }

  function onShellClick(ev) {
    var t = ev.target
    if (!t || !t.closest) return
    var word = chipWord(t)
    if (!word && t.closest('.Wallet__C')) word = chipWord(t.closest('.Wallet__C'))
    if (!word) {
      var hot = t.closest('button.hotIcon, .noticeBar__container')
      if (hot && /^Detail$/i.test(String(hot.textContent || '').replace(/\s+/g, ' ').trim())) word = 'Detail'
    }
    if (!word) return
    ev.preventDefault()
    ev.stopPropagation()
    if (ev.stopImmediatePropagation) ev.stopImmediatePropagation()
    openSitePage(sitePageFor(word))
  }
  document.addEventListener('click', onShellClick, true)

  /* a route change instead of a click (the shell's own wallet/notice routes) */
  W.addEventListener('hashchange', function () {
    var h = String(W.location.hash || '')
    if (/withdraw|recharge|deposit|notification|notice/i.test(h)) {
      var m = /withdraw|recharge|deposit|notification|notice/i.exec(h)
      openSitePage(sitePageFor(m[0]))
    }
  })
  ;['pushState', 'replaceState'].forEach(function (name) {
    var orig = history[name]
    if (typeof orig !== 'function') return
    history[name] = function (state, title, url) {
      var u = String(url == null ? '' : url)
      var m = /withdraw|recharge|deposit|notification|notice/i.exec(u)
      if (m) { openSitePage(sitePageFor(m[0])); return }
      return orig.apply(history, arguments)
    }
  })

  /* ====================== prime the first paint ====================== */
  snapshot(BOOT_TYPE, false).catch(function () { })
  me(false).catch(function () { })

  /* ================= the countdown must never freeze =================
     At every round boundary the screen asks for the next issue. If that ask is
     refused or slow, its own 1-second ticker pauses and stays stuck on the last
     second until something else wakes it. This watch compares the issue the
     SCREEN shows with the issue the wall clock says is running; when the screen
     has been showing a finished period for a couple of seconds it gives it a
     visibility nudge — the very signal the screen already listens to and reacts
     to by re-reading the issue. */
  function domIssue() {
    try {
      var el = document.querySelector('.TimeLeft__C-id')
      return el ? String(el.textContent || '').trim() : ''
    } catch (e) { return '' }
  }
  function nudgeVisibility() {
    try {
      var d = document, state = 'hidden'
      Object.defineProperty(d, 'visibilityState', { configurable: true, get: function () { return state } })
      Object.defineProperty(d, 'hidden', { configurable: true, get: function () { return state === 'hidden' } })
      d.dispatchEvent(new Event('visibilitychange'))
      setTimeout(function () {
        state = 'visible'
        d.dispatchEvent(new Event('visibilitychange'))
        try { delete d.visibilityState; delete d.hidden } catch (e) { }
      }, 80)
    } catch (e) { }
  }
  var watchIssue = '', watchStuck = 0, lastNudge = 0
  setInterval(function () {
    var dom = domIssue()
    if (!dom || dom === 'loading') { watchStuck = 0; watchIssue = ''; return }
    var t = typeOfIssue(dom)
    var iv = cfgOf(t).iv * 1000
    var expect = issueFor(t, Math.floor(Date.now() / iv) * iv)
    if (dom === expect) { watchStuck = 0; watchIssue = dom; return }
    if (dom !== watchIssue) { watchIssue = dom; watchStuck = 1; return }
    watchStuck++
    if (watchStuck >= 2 && Date.now() - lastNudge > 2000) {
      lastNudge = Date.now(); watchStuck = 0
      nudgeVisibility()
    }
  }, 1000)

  /* ===================== public hooks / helpers ===================== */
  W.__WINGO_BRIDGE__ = {
    route: route,
    snapshot: snapshot,
    balance: lastBalance,
    /* the account behind the screen — handy for debugging in the console */
    account: function () { return me(false) },
    refresh: function () { return snapshot(BOOT_TYPE, true) },
    /* what the screen has been asking for, newest last */
    diag: function () { return DIAG.slice() },
    /* the code the round-boundary feed is built for */
    type: function () { return LAST_TYPE },
    /* forget the cached snapshot + the fake session */
    reset: function () {
      SNAP = {}
      ME = { at: 0, data: null, pending: null }
      ;['token', 'tokenHeader', 'refreshToken', 'numberType'].forEach(function (k) {
        try { LS.removeItem(k) } catch (e) { }
      })
    }
  }
})()

