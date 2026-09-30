/* ==========================================================================
   LUDO — the game itself (ludo.js). Same board, same dice, same audio as the
   standalone build; only the numbers are real now:

     - balance           the logged-in account wallet (SSR'd onto the page and
                         refreshed by the API after every fee / prize)
     - entry fee, prizes CONFIG/LUDO — admin-tunable, SSR'd onto #ludoPage
     - opponents         real names + random avatars from /assets/img/avatar
     - money             POST /api/ludo/enter and /api/ludo/finish; every rupee
                         moves server-side, the browser only displays it

   One match costs ONE entry fee: /enter debits it, a win credits the prize and
   a loss or a quit only forfeits that stake — the balance is therefore painted
   from the API answer on every path (roll, capture, win, quit, back).

   RELOAD RESUMES, BACK ASKS. A running match is mirrored into localStorage and
   GET /api/ludo/state confirms the server still has that match open, so a reload
   (the phone reloading itself included) puts the player back on the same board —
   the match is never cut mid-game by a reload.

   Back is the only way out, and it never leaves silently: a sentinel history
   entry parked on top of this document keeps the game on screen, and the pop-up
   asks first — while a paid match is running it shows the entry fee that is at
   stake (quitting forfeits it, the match is over); with nothing at stake it is a
   plain "leave the game?". Leaving drops a marker in localStorage so the site
   that opens behind the game re-reads the wallet instead of showing the balance
   from before the match.

   The page is always loaded with a full document navigation (never an SPA
   swap), so one document = one game instance, exactly like the standalone file.
   ========================================================================== */
(function () {
  'use strict'

  /* real account data — server-rendered onto the page by src/pages/ludo.tsx */
  var PAGE = document.getElementById('ludoPage')
  var CFG_FEE = Number((PAGE && PAGE.dataset.fee) || 0) || 100
  var CFG_PRIZE_2 = Number((PAGE && PAGE.dataset.prize2) || 0) || 200
  var CFG_PRIZE_4 = Number((PAGE && PAGE.dataset.prize4) || 0) || 400
  var YOU_AVATAR = (PAGE && PAGE.dataset.avatar) || '/assets/img/avatar/avatar.png'
  var YOU_NAME = (PAGE && PAGE.dataset.name) || 'You'
  var balance = Number((PAGE && PAGE.dataset.balance) || 0)
  /* the match that has been paid for: one entry fee, settled exactly once */
  var matchId = null
  var matchSettled = false
  var startBusy = false


  /* ═══════════ AUDIO URLS ═══════════ */
  const BASE_OLD = 'https://raw.githubusercontent.com/Golu1523/TEMP/558af47494d533f4abded9e2ce750ecc57a44bac/';
  const BASE_NEW = 'https://raw.githubusercontent.com/Golu1523/TEMP/2fc3f7a55c2e783a13dc258a041e427597a38558/';
  const BG_MUSIC_URL = 'https://raw.githubusercontent.com/Golu1523/TEMP/e302af5f8c43a331e60ad54feeed36d0da979e45/ludo_king.mp3';
  const ASSETS = [
    { key: 'win',   url: BASE_OLD + 'Ludo_Win.mp3' },
    { key: 'kill',  url: BASE_OLD + 'Ludo_Kill.mp3' },
    { key: 'home',  url: BASE_OLD + 'Ludo_Home.mp3' },
    { key: 'click', url: BASE_OLD + 'Btn_Click.mp3' },
    { key: 'dice',  url: BASE_OLD + 'Ludo_Dice_Roll.mp3' },
    { key: 'match', url: BASE_NEW + 'Match_Start.wav' }
  ];

  const Sound = (() => {
    const buffers = {};
    let enabled = true, bgMusic = null, matchMusic = null, bgStarted = false, priming = false;
    function initMusic() {
      if (!bgMusic) { bgMusic = new Audio(); bgMusic.preload='auto'; bgMusic.loop=true; bgMusic.volume=0.3; bgMusic.src=BG_MUSIC_URL; try{bgMusic.load();}catch(e){} }
      if (!matchMusic) { matchMusic = new Audio(); matchMusic.preload='auto'; matchMusic.loop=false; matchMusic.volume=0.5; matchMusic.src=BASE_NEW+'Match_Start.wav'; try{matchMusic.load();}catch(e){} }
    }
    initMusic();
    function preloadBgMusic() {
      return new Promise(resolve => {
        const m = bgMusic;
        if (!m || m.readyState >= 3) return resolve();
        let done = false;
        const finish = () => { if (done) return; done = true; resolve(); };
        m.addEventListener('canplay', finish, { once: true });
        m.addEventListener('canplaythrough', finish, { once: true });
        m.addEventListener('error', finish, { once: true });
        setTimeout(finish, 8000);
      });
    }
    function preloadAll(onProgress) {
      const total = ASSETS.length + 1;
      let doneCount = 0;
      const tick = () => { doneCount++; if (onProgress) onProgress(doneCount / total); };
      const tasks = ASSETS.map(a => new Promise(resolve => {
        const audio = new Audio(); audio.preload='auto'; audio.src=a.url;
        let done = false;
        const finish = () => { if (done) return; done = true; buffers[a.key]=audio; tick(); resolve(); };
        audio.addEventListener('canplaythrough', finish, { once: true });
        audio.addEventListener('loadeddata', finish, { once: true });
        audio.addEventListener('error', finish, { once: true });
        setTimeout(finish, 10000);
        audio.load();
      }));
      tasks.push(preloadBgMusic().then(tick));
      return Promise.all(tasks);
    }
    function unlock() {
      Object.values(buffers).forEach(a => {
        try { a.currentTime=0; const p=a.play(); if(p&&p.then) p.then(()=>a.pause()).catch(()=>{}); else a.pause(); } catch(e){}
      });
      initMusic();
      if (!priming && !bgStarted) {
        priming = true;
        try {
          const p = bgMusic.play();
          const done = () => { priming=false; if (!bgStarted) { try{bgMusic.pause(); bgMusic.currentTime=0;}catch(e){} } };
          if (p && p.then) p.then(done).catch(()=>{priming=false;});
          else done();
        } catch(e){priming=false;}
      }
    }
    function play(key, vol) {
      if (!enabled) return;
      const a = buffers[key]; if (!a) return;
      try { const clone=a.cloneNode(); clone.volume=(vol==null?1.0:vol); const p=clone.play(); if(p&&p.catch) p.catch(()=>{}); } catch(e){}
    }
    function playDice() {
      if (!enabled) return;
      const a = buffers['dice']; if (!a) return;
      try {
        const c1=a.cloneNode(); c1.volume=1.0; c1.play().catch(()=>{});
        const c2=a.cloneNode(); c2.volume=1.0; setTimeout(()=>c2.play().catch(()=>{}),25);
      } catch(e){}
    }
    function startBg() { if(!enabled)return; initMusic(); if(!bgStarted){ bgStarted=true; const p=bgMusic.play(); if(p&&p.catch) p.catch(()=>{bgStarted=false;}); } }
    function stopBg() { if(bgMusic){ bgMusic.pause(); bgMusic.currentTime=0; bgStarted=false; } }
    function playMatch() { if(!enabled)return; initMusic(); matchMusic.currentTime=0; matchMusic.play().catch(()=>{}); }
    function stopMatch() { if(matchMusic){ matchMusic.pause(); matchMusic.currentTime=0; } }
    function setEnabled(on) {
      enabled = on;
      if (!on) { stopBg(); stopMatch(); }
      else {
        if (document.getElementById('screenGame')?.classList.contains('hidden') &&
            document.getElementById('loadingScreen')?.style.display === 'none') { startBg(); }
      }
    }
    function isEnabled() { return enabled; }
    return { preloadAll, unlock, play, playDice, startBg, stopBg, playMatch, stopMatch, setEnabled, isEnabled };
  })();

  let audioUnlocked = false, loadingDone = false;
  function tryUnlock() {
    if (audioUnlocked) return;
    audioUnlocked = true; Sound.unlock();
    if (loadingDone && Sound.isEnabled()) Sound.startBg();
  }
  ['touchstart','pointerdown','click','keydown'].forEach(evt => document.addEventListener(evt, tryUnlock, { once: true, passive: true }));

  /* ═══════════ LOADING ═══════════ */
  const progressFill = document.getElementById('progressFill');
  const percentText  = document.getElementById('percentText');
  function setProgress(v) { v=Math.max(0,Math.min(100,Math.round(v))); progressFill.style.width=v+'%'; percentText.textContent=v+'%'; }
  async function startLoading() {
    const startTime = performance.now(); setProgress(5);
    await Sound.preloadAll(p => setProgress(10 + p * 85));
    setProgress(100);
    const MIN_TIME = 1200;
    const remaining = Math.max(0, MIN_TIME - (performance.now() - startTime));
    if (remaining) await new Promise(r => setTimeout(r, remaining));
    const ls = document.getElementById('loadingScreen');
    ls.style.transition='opacity .45s ease'; ls.style.opacity='0';
    if (audioUnlocked && Sound.isEnabled()) Sound.startBg();
    setTimeout(() => {
      ls.style.display='none';
      document.getElementById('mainGame').style.display='flex';
      loadingDone = true;
      if (audioUnlocked && Sound.isEnabled()) Sound.startBg();
    }, 450);
  }

  /* ═══════════ GAME CODE ═══════════ */
  /* entry fee + prize pool come from CONFIG/LUDO (via src/pages/ludo.tsx) */
  const ENTRY_FEE = CFG_FEE;
  const PRIZES = { 2: CFG_PRIZE_2, 4: CFG_PRIZE_4 };
  const U = 100 / 15;
  const PLAYERS = ['red', 'green', 'yellow', 'blue'];
  const RGB = { red:{solid:'211,47,47'}, green:{solid:'56,142,60'}, yellow:{solid:'251,192,45'}, blue:{solid:'25,118,210'} };
  const OPPOSITE = { red: 'yellow', yellow: 'red', green: 'blue', blue: 'green' };
  const ROT_MAP  = { blue: 0, red: 90, green: 180, yellow: 270 };
  const ARRANGEMENTS = {
    0:   { tl:'red',    tr:'green',  br:'yellow', bl:'blue' },
    90:  { tl:'green',  tr:'yellow', br:'blue',   bl:'red' },
    180: { tl:'yellow', tr:'blue',   br:'red',    bl:'green' },
    270: { tl:'blue',   tr:'red',    br:'green',  bl:'yellow' }
  };
  const COLOR_AVATAR = {
    blue:   { grad: 'radial-gradient(circle at 35% 28%, #60a5fa, #3b82f6 55%, #1e40af)', glow: 'rgba(96,165,250,.6)' },
    red:    { grad: 'radial-gradient(circle at 35% 28%, #f87171, #dc2626 55%, #991b1b)', glow: 'rgba(248,113,113,.6)' },
    green:  { grad: 'radial-gradient(circle at 35% 28%, #4ade80, #16a34a 55%, #14532d)', glow: 'rgba(74,222,128,.6)' },
    yellow: { grad: 'radial-gradient(circle at 35% 28%, #fde047, #fbbf24 55%, #b45309)', glow: 'rgba(251,191,36,.6)' }
  };
  const PATH = [
    [6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],
    [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],
    [8,14],[8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],
    [14,6],[13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[6,0]
  ];
  const START = { red: 0, green: 13, yellow: 26, blue: 39 };
  const SAFE  = new Set([0, 8, 13, 21, 26, 34, 39, 47]);
  const HOME_COL = {
    red:    [[7,1],[7,2],[7,3],[7,4],[7,5]],
    green:  [[1,7],[2,7],[3,7],[4,7],[5,7]],
    yellow: [[7,13],[7,12],[7,11],[7,10],[7,9]],
    blue:   [[13,7],[12,7],[11,7],[10,7],[9,7]]
  };
  const YARD = {
    red:    [[2,2],[2,4],[4,2],[4,4]],
    green:  [[2,11],[2,13],[4,11],[4,13]],
    yellow: [[11,11],[11,13],[13,11],[13,13]],
    blue:   [[11,2],[11,4],[13,2],[13,4]]
  };
  const HOME_SLOTS = {
    red:    [[7.45, 6.55], [7.55, 6.55], [7.45, 6.85], [7.55, 6.85]],
    green:  [[6.55, 7.45], [6.55, 7.55], [6.85, 7.45], [6.85, 7.55]],
    yellow: [[7.45, 8.45], [7.55, 8.45], [7.45, 8.15], [7.55, 8.15]],
    blue:   [[8.45, 7.45], [8.45, 7.55], [8.15, 7.45], [8.15, 7.55]]
  };
  const NAMES_POOL = ["Venkatesh","Mandeep","Sitaram","Anjaneyulu","Priyadarshana","Chakravarthy","Ranganathan","Vishwajeet","Biraj","Ujjwal","Ninan","Krishnayya","Shashi","Srinivasa","Harmanpreet","Manasvi","Ravikumar","Jagmeet","Nishant","Deepu","Vaibhav","Balakrishna","Harikrishna","Milkha","Kutumba Rao","Sonal","Mandar","Tanvi","Rama Devi","Divakar","Sambasiva Rao","Shirish","Aseem","Suryanarayana","Bhagwati","Prabhakar","Trilok","Sukhdev","Venkateswaran","Anjaiah","Vishwanath","Prasad","Arindam","Vem","Manpreet","Nalinaksha","Surender","Nathuram","Krishnamurti","Ishwar","Jigar","Raghava","Gangaram","Dorabjee","Sreedharan","Aryaman","Harsh Vardhan","Vamsi","Vishal","Trupti","Pradyut","Laxmikant","Ratnakar","Brijmohan","Keshavadasa","Vidyasagar","Nakusha","Chetan","Girraj","Seema","Naresh","Raghavan","Yamini","Siva Rao","Achyuta","Manikandan","Lakshmikantam","Keerti","Kunchan","Jagan","Bimal","Ravindranath","Santosh","Udaya","Swathi","Mriganka","Kuladhar","Sujana","Vallabha","Anish","Narendran","Nisith","Shaurya","Tapas","Alok","Avneet","Pratibha","Sukhjit","Suri","Jaisingrao","Pardeep","Pranay","Vishesh","Babu","Harbhajan","Vijay","Ramachandra Rao","Jayendra","Lakshmi","Mallikarjuna Rao","Ratilal","Nanubhai","Sikkil","Anamol","Keki","Latha","Shyam","Vikram","Chandramouli","Romesh","Prasanta","Ashish","Appayya","Mohinder","Saahil","Binod","Manu","Somayajulu","Deo","Shashank","Tanaji","Harit","Brijesh","Dharmpal","Venkata","Mrinal","Nachiketa","Ishaan","Divya","Lal","Balasubramaniam"];
  /* the site's own avatar set — the same files the profile picker offers, so a
     player always wears a real 99infinity avatar instead of an emoji */
  const AVATARS = ['/assets/img/avatar/avatar.png'].concat(
    Array.from({ length: 8 }, (_, i) => '/assets/img/avatar/avatar-' + (i + 1) + '.png')
  );

  function pickRandomPlayers(count) {
    const names = [...NAMES_POOL];
    for (let i = names.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [names[i],names[j]]=[names[j],names[i]]; }
    /* never hand an opponent the avatar the player is wearing themselves */
    const avs = AVATARS.filter(a => a !== YOU_AVATAR);
    for (let i = avs.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [avs[i],avs[j]]=[avs[j],avs[i]]; }
    const result = [];
    for (let i = 0; i < count; i++) result.push({ name: names[i], avatar: avs[i % avs.length] });
    return result;
  }

  /* ── wallet plumbing ──────────────────────────────────────────────────────
     balance is the account's real wallet: it comes SSR'd from the server and is
     refreshed from every API answer. The browser never invents money — the entry
     fee, the prize and the quit penalty all move inside src/api.ts. */
  function money(n) {
    const v = Math.max(0, Number(n) || 0);
    return v.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  }

  function newMatchId() {
    return 'lb' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  /* ── the wallet every other screen must see ───────────────────────────────
     This game is a document of its own: it is left the moment a match ends, so
     the site that opens behind it would render a balance from before the prize or
     the forfeit landed (and a page restored from the back/forward cache would
     keep showing that old number until its own /api/me came back — the "balance
     updates a second later" flash). Every money answer therefore drops the settled
     amount AND the timestamp in localStorage; the site paints that number straight
     away on boot/wake-up and only then confirms it with the server (see
     public/js/app.js — applyWalletHint / syncWalletOnShow). */
  var WALLET_KEY = 'vg_ludo_wallet_at';
  var WALLET_TOTAL_KEY = 'vg_ludo_wallet_total';
  function markWalletChanged(total) {
    try {
      localStorage.setItem(WALLET_KEY, String(Date.now()));
      const amount = Number(total);
      if (Number.isFinite(amount)) localStorage.setItem(WALLET_TOTAL_KEY, String(amount));
    } catch (e) {}
  }

  /* ── the running match survives a reload / a phone that reloads itself ─────
     The board lives in the browser, the paid match lives on the server, so both
     sides are needed to resume: this mirror holds the positions, whose turn it
     is and who the opponents are, while GET /api/ludo/state confirms the server
     still has that match open. A closed match is never resurrected. */
  var SAVE_KEY = 'vg_ludo_match';
  var ABANDON_KEY = 'vg_ludo_abandoned';
  var saveTimer = null;

  /** the match that was left without an answer, if any (see markAbandoned) */
  function abandonedId() {
    try {
      var mark = JSON.parse(localStorage.getItem(ABANDON_KEY) || 'null');
      return mark && mark.matchId ? String(mark.matchId) : null;
    } catch (e) { return null; }
  }

  function clearAbandoned() {
    try { localStorage.removeItem(ABANDON_KEY); } catch (e) {}
  }

  /** Remember a match that is being left with money still riding on it and no
   *  answer to the pop-up. Staying in the document is the pop-up's job (see the
   *  back guard), but a traversal the browser performs across documents cannot be
   *  cancelled by any page — so the next visit must at least not drop the player
   *  back onto a board they walked out of. A reload is the opposite: that is the
   *  player resuming on purpose, and `leftUnconfirmed` lets it through. */
  function markAbandoned() {
    if (leaving || reloading || !matchIsLive()) return;
    try { localStorage.setItem(ABANDON_KEY, JSON.stringify({ matchId: matchId, at: Date.now() })); } catch (e) {}
  }

  /** was `id` walked out of without an answer? */
  function leftUnconfirmed(id) {
    if (!id || abandonedId() !== String(id)) return false;
    var kind = '';
    try { kind = (performance.getEntriesByType('navigation')[0] || {}).type || ''; } catch (e) { kind = ''; }
    return kind !== 'reload';
  }

  /** close a match the player left behind: the fee that was already spent stays
   *  spent (see src/api.ts) and the board is not mirrored any more, so the next
   *  Play is a new game instead of a board they walked away from. */
  function abandonMatch(id) {
    clearSavedGame();
    clearAbandoned();
    matchId = null; matchSettled = false; state = null;
    showToast('Your last match was left unfinished — starting a new one', 'info');
    try {
      fetch('/api/ludo/finish', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ match_id: id, result: 'quit' }),
        keepalive: true,
      })
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (d && typeof d.balance === 'number') { balance = d.balance; markWalletChanged(balance); renderBalance(); }
        })
        .catch(() => {});
    } catch (e) {}
  }

  function saveGame() {
    /* only a match that is still open can be resumed — a finished one (won, lost,
       quit) is never mirrored, so a reload can never resurrect it */
    if (!state || !matchIsLive()) return;
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({
        matchId: matchId,
        mode: selectedMode,
        color: selectedColor,
        opponents: pickedOpponents,
        tokens: state.tokens,
        turnOrder: state.turnOrder,
        turnIdx: state.turnIdx,
        winner: state.winner,
        at: Date.now(),
      }));
    } catch (e) {}
  }
  /* renders run on every single animation step, so writes are coalesced */
  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveGame, 300);
  }
  function loadSavedGame() {
    try {
      var raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      return s && s.matchId && s.tokens ? s : null;
    } catch (e) { return null; }
  }
  function clearSavedGame() {
    clearTimeout(saveTimer);
    try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
  }

  /* ── the back gesture must never throw a match away ───────────────────────
     This document was opened with a real navigation, so the entry behind it is
     the page the player came from: a plain back press would simply leave the game
     — mid-match, with the fee already paid. Sentinel entries are therefore parked
     ON TOP of this document as soon as it opens, and one is re-parked after every
     back press. A back press then pops a sentinel instead of the game: a
     same-document traversal, the board stays on screen, and the pop-up gets to
     ask first. The sentinels survive a reload (history state does), so a reload
     neither doubles them nor loses them — and a reload never opens the pop-up, it
     resumes the board (see loadSavedGame / resumeMatch). */
  var GUARD = 'ludoGuard';        /* the history state that marks our sentinels */
  var GUARD_HASH = '#playing';    /* hash only → the traversal stays same-document */
  var guardOn = false;            /* the sentinels are parked and the pop-up asks */
  var guardSteps = 1;             /* entries to walk back when really leaving */
  var gameLevel = 1;              /* how far above the page we came from the game sits */
  var guardLevel = 1;             /* the level of the entry the player is standing on */
  var leaving = false;            /* the player is on the way to the site */
  var reloading = false;          /* the browser is reloading us — that is allowed */
  var backAsk = false;            /* the dialog was opened by the back gesture */
  /* a paid match older than this is somebody's leftover, not this session's */
  var RECENT_MATCH_MS = 6 * 60 * 60 * 1000;

  /** is there money riding on a match right now? (the fee is taken at /enter) */
  function matchIsLive() { return !!matchId && !matchSettled; }

  function guardUrl() { return location.pathname + location.search + GUARD_HASH; }

  /** park sentinel entries on top of the game — the back button hits them first.
   *  Two of them: a rushed double press (a phone's back gesture fires twice in a
   *  row) would otherwise reach the game entry itself and unload the document,
   *  which is exactly what must never happen mid-match. Every entry remembers how
   *  far above the page the player came from it sits (`level`) and where the game's
   *  own entry is (`game`), so a confirmed exit can walk back to exactly that page
   *  no matter how many times back was pressed before. */
  function parkGuard(count) {
    const n = count === undefined ? 1 : count;
    for (let i = 0; i < n; i++) {
      guardLevel += 1;
      try { history.pushState({ [GUARD]: 1, level: guardLevel, game: gameLevel }, '', guardUrl()); } catch (e) {}
    }
    guardSteps = guardLevel;
  }

  function armBackGuard() {
    if (guardOn) return;
    guardOn = true;
    var st = history.state;
    /* a reload lands ON a sentinel parked earlier — reuse it, do not stack more */
    if (st && st[GUARD]) {
      gameLevel = Number(st.game) || 1;
      guardLevel = Number(st.level) || gameLevel + 1;
      guardSteps = guardLevel;
      return;
    }
    /* the game's own entry sits one above the page the player came from (or is
       that page, when this tab was opened fresh) */
    gameLevel = history.length >= 2 ? 1 : 0;
    guardLevel = gameLevel;
    parkGuard(2);
  }

  /** the player means it — stop trapping and step out of the game for real.
   *  Walking back over the sentinel (and over the game entry itself) lands on the
   *  page they came from: a normal browser traversal, so that page keeps its own
   *  scroll/history and simply re-reads its wallet (see markWalletChanged). */
  function leaveGame() {
    guardOn = false;
    leaving = true;
    var steps = Math.max(1, Number(guardSteps) || 1);
    if (steps >= 2) {
      try { history.go(-steps); } catch (e) {}
      /* no entry behind us after all (opened in a fresh tab): navigate instead */
      setTimeout(function () { if (leaving) location.replace('/'); }, 300);
      return;
    }
    location.replace('/');
  }

  /* a page woken from the back/forward cache is not on its way out */
  window.addEventListener('pageshow', function (e) { if (e.persisted) leaving = false; });

  function onBackGesture() {
    if (!guardOn || leaving) return;  /* already leaving — let the browser work */
    var st = history.state;
    /* wherever a traversal put us, remember it: a confirmed exit walks back from
       exactly here to the page the player came from */
    guardLevel = st && st[GUARD] ? (Number(st.level) || gameLevel) : gameLevel;
    askBeforeLeavingByBack(true);     /* the sentinel was consumed — park it again */
  }
  window.addEventListener('popstate', onBackGesture);

  /** the back gesture with a match on the line: the board stays, the pop-up asks.
   *  It asks again (with a nudge) however often back is pressed — back itself is
   *  never an answer, only Quit/Exit is. */
  function askBeforeLeavingByBack(rePark) {
    if (!guardOn || leaving) return;
    if (rePark) parkGuard(2);         /* keep the buffer the browser may skip */
    var box = document.getElementById('quitOverlay');
    if (box && box.classList.contains('show')) { shakeQuitDialog(); return; }
    openQuitDialog(true);
  }

  /** "you are still holding the game" — the pop-up answers by shaking, not closing */
  function shakeQuitDialog() {
    var card = quitOverlay && quitOverlay.querySelector('.quit-box');
    if (!card || typeof card.animate !== 'function') return;
    try {
      card.animate(
        [{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' },
         { transform: 'translateX(7px)' }, { transform: 'translateX(-4px)' },
         { transform: 'translateX(0)' }],
        { duration: 300, easing: 'ease-in-out' }
      );
    } catch (e) {}
  }

  /* ── the back button may not walk out of a running match ──────────────────
     Sentinels alone cannot be trusted: a browser is free to skip entries a page
     pushed on its own when the player uses the back BUTTON/gesture (Chromium's
     history manipulation intervention — it does not touch history.back()), and
     that walked players straight out of a paid match. The Navigation API
     intercepts the traversal itself, so the history index does not move at all
     and the pop-up is raised from here. Browsers without it keep the sentinel
     dance above, and the unload guard below is the last line of defence. */
  (function trapBackTraversal() {
    var nav = window.navigation;
    if (!nav || typeof nav.addEventListener !== 'function') return;
    nav.addEventListener('navigate', function (e) {
      /* a reload is a legitimate move: the board is resumed from the mirror */
      if (e.navigationType === 'reload') { reloading = true; return; }
      if (e.navigationType !== 'traverse' || !guardOn || leaving) return;
      try { e.preventDefault(); } catch (err) {}
      askBeforeLeavingByBack(false); /* nothing was consumed — do not stack more */
    });
  })();

  /* the last line of defence: a live match may not be abandoned by an unload that
     neither trap could stop (an old browser, or an entry the browser skipped).
     Reloads and a confirmed exit are let through — those are deliberate. */
  window.addEventListener('beforeunload', function (e) {
    if (!guardOn || leaving || reloading || !matchIsLive()) return;
    e.preventDefault();
    /* a non-empty string is the legacy trigger — the browser never shows the text */
    e.returnValue = 'leave';
    return 'leave';
  });

  /* pays the entry fee. The match id is what makes it safe: a double tap or a
     retry lands on the SAME match instead of paying the fee twice. */
  async function startMatch(mode) {
    if (startBusy) return null;
    if (!matchId) matchId = newMatchId();
    startBusy = true;
    try {
      const res = await fetch('/api/ludo/enter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ match_id: matchId, mode: mode }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401) {
        showErrorToast('Please log in to continue');
        setTimeout(() => { leaving = true; location.href = '/login'; }, 900);
        return null;
      }
      if (!res.ok) {
        /* nothing was charged, so the next attempt gets a fresh match id — and the
           wallet the server has just read is adopted, so a stale-high balance can
           never keep offering a match that cannot be paid for */
        matchId = null;
        if (typeof data.balance === 'number') { balance = data.balance; renderBalance(); }
        showErrorToast(data.error || 'Could not start the match');
        return null;
      }
      if (typeof data.balance === 'number') { balance = data.balance; markWalletChanged(balance); renderBalance(); }
      matchSettled = false;
      /* the fee is gone — from here on the back gesture asks before it leaves */
      armBackGuard();
      return data;
    } catch (err) {
      matchId = null;
      showErrorToast('Network error, please try again');
      return null;
    } finally {
      startBusy = false;
    }
  }

  /* closes the paid match exactly once (win / lose / quit). The server decides
     the amount and answers with the new balance. The fee was taken at /enter, so
     closing a match either pays the prize or moves no money at all — the answer
     is nevertheless painted straight away, because the coins pill must never be
     behind the truth. The promise resolves once the answer is in, so the caller
     can wait for it before leaving the game (the site behind it then renders the
     settled balance). `keepalive` lets the request finish even if the player
     navigates away right after tapping Quit. */
  async function settleMatch(result) {
    if (!matchId || matchSettled) return false;
    matchSettled = true;
    /* the card is filled in from the local config the instant the match ends and
       then corrected by the server's answer below — the player never stares at an
       empty pop-up while the request is in flight */
    showOutcomeStats(result, null);
    const id = matchId;
    const body = JSON.stringify({ match_id: id, result: result });
    try {
      const res = await fetch('/api/ludo/finish', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: body,
        keepalive: true,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) matchSettled = false;
      if (typeof data.balance === 'number') { balance = data.balance; markWalletChanged(balance); renderBalance(); }
      /* what the match moved is shown on the win/lose card (prize or lost fee) */
      showOutcomeStats(result, data);
      /* the match is over — there is nothing left to resume */
      if (data.ok) clearSavedGame();
      return !!data.ok;
    } catch (err) {
      /* the match is still open on the server, so a retry is harmless */
      matchSettled = false;
      showOutcomeStats(result, null);
      return false;
    }
  }

  /* ── the win / lose card ─────────────────────────────────────────────────
     The player must be able to see what the match did to the wallet without
     leaving the board: the prize that was paid in (or the entry fee that was
     forfeited) and the balance that came out of it. The fee/prize come from the
     live CONFIG, the balance from the wallet this board already shows, so the two
     rows are right the instant the match ends and are then replaced by the
     server's own /api/ludo/finish answer — the same answer the coins pill is
     painted from. */
  const winStatsEl = document.getElementById('winStats');
  const winAmountEl = document.getElementById('winAmount');
  const winAmountLabelEl = document.getElementById('winAmountLabel');
  const winBalanceEl = document.getElementById('winBalance');

  function showOutcomeStats(result, data) {
    /* a quit is answered by its own dialog/exit toast, not by the win card */
    if (result === 'quit' || !winStatsEl) return;
    const won = result === 'win';
    /* `data` is the server's answer; without it (still in flight, or the request
       failed) the local config and the wallet this board is already showing are
       used, so the card is always complete. */
    const fee = (data && Number(data.entryFee)) || ENTRY_FEE;
    const paid = data ? Number(data.amount) : NaN;
    const amount = won ? (Number.isFinite(paid) ? paid : PRIZES[selectedMode] || 0) : fee;
    const after = data ? Number(data.balance) : NaN;
    const total = Number.isFinite(after) ? after : balance + (won ? amount : 0);
    if (winAmountLabelEl) winAmountLabelEl.textContent = won ? 'Prize Won' : 'Entry Fee Lost';
    if (winAmountEl) {
      winAmountEl.textContent = (won ? '+' : '-') + money(amount);
      winAmountEl.classList.toggle('down', !won);
    }
    if (winBalanceEl) winBalanceEl.textContent = '₹' + money(total);
    winStatsEl.classList.add('show');
  }

  function hideOutcomeStats() {
    if (winStatsEl) winStatsEl.classList.remove('show');
  }

  let selectedMode = 2, selectedColor = 'blue', soundOn = true;
  let pickedOpponents = [], ROT = 0;
  let AI = { red: true, green: true, yellow: true, blue: false };
  let state;
  let NAMES = { red: '', green: '', yellow: '', blue: '' };

  const screenPlayers = document.getElementById('screenPlayers');
  const screenColors  = document.getElementById('screenColors');
  const screenFinding = document.getElementById('screenFinding');
  const screenGame    = document.getElementById('screenGame');
  const balance1 = document.getElementById('balance1');
  const balance2 = document.getElementById('balance2');
  const balance3 = document.getElementById('balance3');
  const balanceGame = document.getElementById('balanceGame');
  const playerOpts = document.getElementById('playerOptions');
  const colorOpts  = document.getElementById('colorOptions');
  const howToPlay1El = document.getElementById('howToPlay1');
  const playersGridEl = document.getElementById('playersGrid');
  const nextBtn = document.getElementById('nextBtn');
  const playBtn = document.getElementById('playBtn');
  const findingStatusText = document.getElementById('findingStatusText');
  const progressFillBar   = document.getElementById('progressFillBar');
  const progressText      = document.getElementById('progressText');
  const confirmOverlay = document.getElementById('confirmOverlay');
  const cMode = document.getElementById('cMode');
  const cPrize = document.getElementById('cPrize');
  const cAfter = document.getElementById('cAfter');
  const cWin = document.getElementById('cWin');
  const btnBackC = document.getElementById('btnBack');
  const btnConfirm = document.getElementById('btnConfirm');
  const matchFound = document.getElementById('matchFound');
  const toastEl = document.getElementById('ludo-toast');
  const gameEl    = document.getElementById('game');
  const boardSvg  = document.getElementById('boardSvg');
  const diceEl    = document.getElementById('dice');
  const turnToast = document.getElementById('turnToast');
  const overlay   = document.getElementById('overlay');
  const winText   = document.getElementById('winText');
  const trayRowTop    = document.getElementById('trayRowTop');
  const trayRowBottom = document.getElementById('trayRowBottom');
  const royalFrame    = document.getElementById('royalFrame');

  const tokenEls = {}, trayEls = {};
  PLAYERS.forEach(pk => { trayEls[pk] = document.getElementById('tray-' + pk); });

  const quitOverlay = document.getElementById('quitOverlay');
  const homeBtnGame = document.getElementById('homeBtnGame');
  const stayBtn     = document.getElementById('stayBtn');
  const quitBtn     = document.getElementById('quitBtn');
  const exitToast   = document.getElementById('exitToast');
  /* the "-100" labels AND the two player-options follow the live config, so the
     price on the card is the price the API charges (and the admin re-prices the
     game straight from Firebase):
       Entry Fee 100 Get 200      /      Entry Fee 100 Get 400 */
  const cFeeEl = document.getElementById('cFee');
  const qFeeEl = document.getElementById('qFee');
  function renderFeeLabels() {
    const label = '-' + money(ENTRY_FEE);
    [cFeeEl, qFeeEl].forEach(el => { if (el) el.textContent = label; });
    [2, 4].forEach(mode => {
      const card = playerOpts.querySelector(`.option[data-value="${mode}"]`);
      if (!card) return;
      const sub = card.querySelector('.option-sub');
      if (sub) sub.textContent = `Entry Fee ${money(ENTRY_FEE)} Get ${money(PRIZES[mode])}`;
      const chip = card.querySelector('.prize-amount');
      if (chip) chip.textContent = money(PRIZES[mode]);
    });
  }

  const SVG_SOUND_ON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  const SVG_SOUND_OFF = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
  const soundBtns = [
    document.getElementById('soundBtn1'), document.getElementById('soundBtn2'),
    document.getElementById('soundBtn3'), document.getElementById('soundBtnGame')
  ];
  function renderSound() { soundBtns.forEach(b => { if (b) b.innerHTML = soundOn ? SVG_SOUND_ON : SVG_SOUND_OFF; }); }
  soundBtns.forEach(b => b && b.addEventListener('click', () => { soundOn = !soundOn; renderSound(); Sound.setEnabled(soundOn); }));
  renderSound();

  function renderBalance() {
    const shown = money(balance);
    balance1.textContent = shown;
    balance2.textContent = shown;
    balance3.textContent = shown;
    balanceGame.textContent = shown;
  }

  function renderHowToPlay() {
    /* every number here follows the live config (default 100 / 200 / 400) */
    const prize = PRIZES[selectedMode];
    const net = Math.max(0, prize - ENTRY_FEE);
    const fee = money(ENTRY_FEE);
    howToPlay1El.innerHTML = `
      <div class="htp-item"><span class="dot"></span><span><b>Entry Fee:</b> ${fee} coins deducted when you start</span></div>
      <div class="htp-item"><span class="dot"></span><span><b>Match:</b> You vs ${selectedMode === 2 ? '1 Player' : '3 Players'}</span></div>
      <div class="htp-item"><span class="dot"></span><span><b>Prize Pool:</b> ${money(prize)} coins for the winner</span></div>
      <div class="htp-item"><span class="dot"></span><span><b>If you win:</b> <span class="win">+${money(prize)} coins</span> (net <span class="win">+${money(net)}</span>)</span></div>
      <div class="htp-item"><span class="dot"></span><span><b>If you lose:</b> <span class="lose">-${fee} coins</span> (entry fee lost)</span></div>`;
  }

  playerOpts.addEventListener('click', e => {
    const opt = e.target.closest('.option'); if (!opt) return;
    Sound.play('click', 0.8);
    selectedMode = Number(opt.dataset.value);
    playerOpts.querySelectorAll('.option').forEach(o => o.classList.toggle('selected', o === opt));
    renderHowToPlay();
  });
  colorOpts.addEventListener('click', e => {
    const opt = e.target.closest('.color-opt'); if (!opt) return;
    Sound.play('click', 0.8);
    selectedColor = opt.dataset.color;
    colorOpts.querySelectorAll('.color-opt').forEach(o => o.classList.toggle('selected', o === opt));
  });

  let toastTimer;
  function showErrorToast(msg) {
    toastEl.innerHTML = `<span class="t-icon">⚠️</span>${msg}`;
    void toastEl.offsetWidth;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1800);
  }

  nextBtn.addEventListener('click', () => { Sound.play('click', 0.8); screenPlayers.classList.add('hidden'); screenColors.classList.remove('hidden'); });
  document.getElementById('backBtn').addEventListener('click', () => { Sound.play('click', 0.8); screenColors.classList.add('hidden'); screenPlayers.classList.remove('hidden'); });
  /* the top-left home button leaves the game for the page the player came from
     (the site home when they came through the tile). The guard is disarmed first,
     so the browser walks back over the game entry instead of forcing a reload. */
  document.getElementById('homeBtn1').addEventListener('click', () => {
    Sound.play('click', 0.8);
    leaveGame();
  });
  /* the finding screen's home button: the entry fee is ALREADY paid here, so it
     must ask exactly like the back gesture does — a tap here used to walk away
     from a paid match and leave it open on the server */
  document.getElementById('homeBtn3').addEventListener('click', () => {
    Sound.play('click', 0.8);
    if (matchIsLive()) { openQuitDialog(false); return; }
    timers.forEach(t => clearTimeout(t)); timers.length = 0;
    screenFinding.classList.add('hidden');
    screenColors.classList.remove('hidden');
  });

  playBtn.addEventListener('click', () => {
    Sound.play('click', 0.8);
    if (!selectedColor) { colorOpts.animate([{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}],{duration:250}); return; }
    /* no wallet, no match — the fee is never paid on credit */
    if (balance < ENTRY_FEE) {
      showErrorToast('Not enough balance — you need ₹' + money(ENTRY_FEE));
      return;
    }
    openConfirm();
  });

  function openConfirm() {
    const prize = PRIZES[selectedMode];
    const afterBal = Math.max(0, balance - ENTRY_FEE);
    cMode.textContent  = selectedMode === 2 ? '2 Players' : '4 Players';
    cPrize.textContent = '+' + money(prize);
    cAfter.textContent = money(afterBal);
    cWin.textContent   = '+' + money(prize);
    confirmOverlay.classList.add('show');
  }
  function closeConfirm() { confirmOverlay.classList.remove('show'); }
  btnBackC.addEventListener('click', () => { Sound.play('click', 0.8); closeConfirm(); });
  /* Confirm paying the entry fee — the money leaves the wallet server-side
     FIRST, and only a paid match moves on to the players search. */
  btnConfirm.addEventListener('click', async () => {
    Sound.play('click', 0.8);
    btnConfirm.disabled = true;
    const started = await startMatch(selectedMode);
    btnConfirm.disabled = false;
    if (!started) return; /* not enough balance / network — the overlay stays */
    closeConfirm();
    screenColors.classList.add('hidden');
    screenFinding.classList.remove('hidden');
    startFinding();
  });
  confirmOverlay.addEventListener('click', (e) => { if (e.target === confirmOverlay) closeConfirm(); });

  /* ═══════════ FINDING ═══════════ */
  let foundCount = 0;
  const timers = [];

  function buildFindingGrid() {
    playersGridEl.classList.remove('mode-2', 'mode-4');
    playersGridEl.classList.add(selectedMode === 2 ? 'mode-2' : 'mode-4');
    playersGridEl.innerHTML = '';
    playersGridEl.appendChild(makeYouCard());
    for (let i = 1; i < selectedMode; i++) playersGridEl.appendChild(makeSpinnerCard());
    foundCount = 1; updateProgress();
  }
  function makeYouCard() {
    const color = COLOR_AVATAR[selectedColor];
    const card = document.createElement('div');
    card.className = 'player-card found';
    /* the player's own profile avatar, straight from the account */
    card.innerHTML = `<div class="slot"><div class="avatar you" style="background: ${color.grad}; --user-glow: ${color.glow};"><img src="${YOU_AVATAR}" alt="" loading="eager"></div></div><div class="player-name">You</div><div class="player-status you-status">Ready</div>`;
    return card;
  }
  function makeSpinnerCard() {
    const card = document.createElement('div');
    card.className = 'player-card searching';
    card.innerHTML = `<div class="slot"><div class="spinner"></div><div class="spinner-inner"></div></div><div class="player-name">Searching...</div><div class="player-status wait-status">Please wait</div>`;
    return card;
  }
  function fillCard(card, player) {
    const slot = card.querySelector('.slot');
    const nameEl = card.querySelector('.player-name');
    const statusEl = card.querySelector('.player-status');
    slot.innerHTML = `<div class="avatar pop"><img src="${player.avatar}" alt="" loading="lazy"></div>`;
    setTimeout(() => { nameEl.textContent = player.name; statusEl.textContent = 'Ready'; statusEl.className = 'player-status found-status'; }, 80);
    card.classList.remove('searching'); card.classList.add('found');
    card.animate([{transform:'translateY(0) scale(1)'},{transform:'translateY(-4px) scale(1.03)'},{transform:'translateY(0) scale(1)'}],{duration:400,easing:'cubic-bezier(.34,1.56,.64,1)'});
  }
  function updateProgress() {
    const pct = (foundCount / selectedMode) * 100;
    progressFillBar.style.width = pct + '%';
    progressText.textContent = `${foundCount} / ${selectedMode} ready`;
  }
  function startFinding() {
    timers.forEach(t => clearTimeout(t)); timers.length = 0;
    progressFillBar.style.width = '0%';
    setTimeout(() => updateProgress(), 50);
    buildFindingGrid();
    findingStatusText.textContent = 'Searching';
    findingStatusText.style.color = '';
    progressText.style.color = '#ffd21f';
    const cards = playersGridEl.querySelectorAll('.player-card.searching');
    const total = cards.length;
    if (total === 0) { onAllFound(); return; }
    const pickedPlayers = pickRandomPlayers(total);
    pickedOpponents = pickedPlayers;
    cards.forEach((card, i) => {
      const delay = 1200 + Math.random() * 1800 + i * 400;
      const t = setTimeout(() => {
        fillCard(card, pickedPlayers[i]);
        foundCount++; updateProgress();
        if (foundCount === selectedMode) { const t2 = setTimeout(onAllFound, 500); timers.push(t2); }
      }, delay);
      timers.push(t);
    });
  }
  function onAllFound() {
    findingStatusText.textContent = 'All players ready!';
    findingStatusText.style.color = '#4ade80';
    progressText.textContent = `${selectedMode} / ${selectedMode} ready`;
    progressText.style.color = '#4ade80';
    Sound.stopBg(); Sound.playMatch();
    createConfetti();
    matchFound.classList.add('show');
    const t = setTimeout(() => {
      matchFound.classList.remove('show');
      screenFinding.classList.add('hidden');
      screenGame.classList.remove('hidden');
      startGame({ players: selectedMode, color: selectedColor, opponents: pickedOpponents });
    }, 2400);
    timers.push(t);
  }
  function createConfetti() {
    matchFound.querySelectorAll('.confetti').forEach(c => c.remove());
    const colors = ['#fbbf24','#f59e0b','#f87171','#4ade80','#60a5fa','#c084fc','#fde047'];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + '%';
      c.style.top = '-30px';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDelay = (Math.random() * 0.6) + 's';
      c.style.animationDuration = (1.8 + Math.random() * 1.2) + 's';
      c.style.width = (6 + Math.random() * 8) + 'px';
      c.style.height = (8 + Math.random() * 10) + 'px';
      matchFound.appendChild(c);
    }
  }

  /* ═══════════ GAME ═══════════ */
  function rotPt(r, c) {
    switch (ROT) {
      case 0: return [r, c];
      case 90: return [15 - c, r];
      case 180: return [15 - r, 15 - c];
      case 270: return [c, 15 - r];
    }
  }
  function tokenPoint(pk, prog, idx) {
    let r, c;
    if (prog <= 50) { const [pr,pc] = PATH[(START[pk] + prog) % 52]; r = pr + 0.5; c = pc + 0.5; }
    else if (prog <= 55) { const [pr,pc] = HOME_COL[pk][prog - 51]; r = pr + 0.5; c = pc + 0.5; }
    else { const [sr,sc] = HOME_SLOTS[pk][idx % 4]; return rotPt(sr, sc); }
    return rotPt(r, c);
  }
  function buildTokens() {
    gameEl.querySelectorAll('.token').forEach(t => t.remove());
    state.activeColors.forEach(pk => {
      tokenEls[pk] = [];
      for (let i = 0; i < 4; i++) {
        const t = document.createElement('div');
        t.className = 'token ' + pk;
        t.dataset.pk = pk; t.dataset.i = i;
        gameEl.appendChild(t); tokenEls[pk].push(t);
      }
    });
  }
  function cellKeyOf(r, c) { return r + ',' + c; }
  function buildBoard() {
    const COLOR = { red:'#d32f2f', green:'#388e3c', yellow:'#fbc02d', blue:'#1976d2' };
    const YARD_ORIGIN = { red:[0,0], green:[0,9], yellow:[9,9], blue:[9,0] };
    const START_IDX = { red:0, green:13, yellow:26, blue:39 };
    const startCellKey = {};
    PLAYERS.forEach(pk => { const [r,c] = PATH[START_IDX[pk]]; startCellKey[cellKeyOf(r,c)] = pk; });
    let svg = '<rect x="0" y="0" width="15" height="15" fill="#ffffff"/>';
    PLAYERS.forEach(pk => {
      const [r0, c0] = YARD_ORIGIN[pk];
      svg += `<rect x="${c0}" y="${r0}" width="6" height="6" fill="${COLOR[pk]}"/>`;
      svg += `<rect x="${c0+1}" y="${r0+1}" width="4" height="4" rx="0.15" fill="#ffffff"/>`;
    });
    PLAYERS.forEach(pk => { YARD[pk].forEach(([r,c]) => { svg += `<circle cx="${c}" cy="${r}" r="0.35" fill="${COLOR[pk]}" opacity="0.22"/>`; }); });
    PATH.forEach(([r,c]) => { const key = cellKeyOf(r,c); const startPk = startCellKey[key]; const fill = startPk ? COLOR[startPk] : '#ffffff'; svg += `<rect x="${c}" y="${r}" width="1" height="1" fill="${fill}" stroke="#6b7280" stroke-width="0.03"/>`; });
    PLAYERS.forEach(pk => { HOME_COL[pk].forEach(([r,c]) => { svg += `<rect x="${c}" y="${r}" width="1" height="1" fill="${COLOR[pk]}" stroke="#6b7280" stroke-width="0.03"/>`; }); });
    SAFE.forEach(idx => { const [r,c] = PATH[idx]; const startPk = startCellKey[cellKeyOf(r,c)]; const starColor = startPk ? '#ffffff' : '#8a94a3'; svg += `<text x="${c+0.5}" y="${r+0.62}" font-size="0.6" text-anchor="middle" fill="${starColor}" opacity="0.9">★</text>`; });
    svg += `<polygon points="6,6 9,6 7.5,7.5" fill="${COLOR.green}"/>`;
    svg += `<polygon points="9,6 9,9 7.5,7.5" fill="${COLOR.yellow}"/>`;
    svg += `<polygon points="9,9 6,9 7.5,7.5" fill="${COLOR.blue}"/>`;
    svg += `<polygon points="6,9 6,6 7.5,7.5" fill="${COLOR.red}"/>`;
    const svgRot = ROT === 90 ? -90 : ROT === 270 ? 90 : ROT;
    boardSvg.innerHTML = `<g transform="rotate(${svgRot} 7.5 7.5)">${svg}</g>`;
  }

  /* ⭐ Arrange trays: each tray sits above/below its yard corner. Dice in bottom center. */
  function arrangeTrays() {
    const arr = ARRANGEMENTS[ROT];

    // Detach all trays & royal frame from DOM (but don't destroy them)
    PLAYERS.forEach(pk => trayEls[pk].remove());
    if (royalFrame) royalFrame.remove();

    // Clear slot contents
    document.querySelectorAll('.tray-slot').forEach(s => { s.innerHTML = ''; });
    const rfs = document.getElementById('royalFrameSlot');
    if (rfs) rfs.innerHTML = '';

    // Place trays in correct corner slots
    const tlSlot = document.querySelector('.tl-slot');
    const trSlot = document.querySelector('.tr-slot');
    const blSlot = document.querySelector('.bl-slot');
    const brSlot = document.querySelector('.br-slot');
    if (tlSlot) tlSlot.appendChild(trayEls[arr.tl]);
    if (trSlot) trSlot.appendChild(trayEls[arr.tr]);
    if (blSlot) blSlot.appendChild(trayEls[arr.bl]);
    if (brSlot) brSlot.appendChild(trayEls[arr.br]);

    // Royal frame in center of bottom row
    if (royalFrame && rfs) {
      royalFrame.style.display = 'flex';
      rfs.appendChild(royalFrame);
    }

    // Hide inactive trays
    PLAYERS.forEach(pk => {
      trayEls[pk].style.display = state.activeColors.includes(pk) ? 'flex' : 'none';
    });

    trayRowTop.classList.toggle('mode-2', state.activeColors.length === 2);

    // Hide top row entirely if neither top tray active
    const topActive = state.activeColors.includes(arr.tl) || state.activeColors.includes(arr.tr);
    trayRowTop.style.display = topActive ? 'grid' : 'none';
  }

  function currentPlayer() { return state.turnOrder[state.turnIdx]; }
  function isAI(pk) { return AI[pk]; }

  const DOTS = { 1:[4], 2:[0,8], 3:[0,4,8], 4:[0,2,6,8], 5:[0,2,4,6,8], 6:[0,2,3,5,6,8] };
  function renderDice(v) {
    diceEl.innerHTML = '';
    const face = v == null ? 1 : v;
    for (let i = 0; i < 9; i++) {
      const d = document.createElement('div');
      d.className = 'dot' + (DOTS[face].includes(i) ? ' on' : '');
      diceEl.appendChild(d);
    }
  }

  const TOAST_ICONS = { info:'👤', warn:'⚠️', success:'✓', bad:'✕', win:'🏆' };
  function showToast(msg, type='info') {
    turnToast.className = 'turn-toast ' + type;
    turnToast.innerHTML = `<span class="toast-icon">${TOAST_ICONS[type]||''}</span><span class="toast-text">${msg}</span>`;
    void turnToast.offsetWidth;
    turnToast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => turnToast.classList.remove('show'), 1500);
  }

  function render() {
    const all = [];
    state.activeColors.forEach(pk => {
      state.tokens[pk].forEach((p, i) => {
        let pt;
        if (p === -1) { const [r,c] = YARD[pk][i]; pt = rotPt(r,c); }
        else if (p === 56) { const [sr,sc] = HOME_SLOTS[pk][i % 4]; pt = rotPt(sr,sc); }
        else { pt = tokenPoint(pk, p, i); }
        all.push({ pk, i, p, pt });
      });
    });
    const groups = new Map();
    all.forEach(t => {
      const key = t.pt[0].toFixed(2) + ',' + t.pt[1].toFixed(2);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(t);
    });
    const cur = currentPlayer();
    groups.forEach(arr => {
      const n = arr.length;
      arr.forEach((t, k) => {
        let [r, c] = t.pt;
        if (n > 1 && t.p !== 56) {
          const ang = (k / n) * Math.PI * 2 - Math.PI / 2;
          const rad = n === 2 ? 0.15 : (n === 3 ? 0.18 : 0.20);
          r += Math.sin(ang) * rad;
          c += Math.cos(ang) * rad;
        }
        const el = tokenEls[t.pk][t.i];
        el.style.left = (c * U) + '%';
        el.style.top  = (r * U) + '%';
        el.classList.toggle('at-home', t.p === 56);
        const movable = !state.winner && t.pk === cur && !isAI(t.pk) && state.pending.includes(t.i);
        el.classList.toggle('movable', movable);
      });
    });
    renderDice(state.dice);
    const human = !isAI(cur);
    const canRoll = human && !state.rolled && state.pending.length === 0 && !state.winner && !state.busy;
    diceEl.classList.toggle('active', canRoll);
    diceEl.classList.remove('rolling');
    const rgb = RGB[cur].solid;
    diceEl.style.setProperty('--glow-color', `rgba(${rgb},0.9)`);
    diceEl.style.setProperty('--glow-shadow', `rgba(${rgb},0.75)`);
    PLAYERS.forEach(pk => {
      const el = trayEls[pk];
      const isActive = (cur === pk) && !state.winner;
      el.classList.toggle('active', isActive);
      if (isActive) {
        el.style.setProperty('--tray-accent', `rgba(${RGB[pk].solid},0.65)`);
        el.style.setProperty('--tray-glow', `rgba(${RGB[pk].solid},0.28)`);
      } else {
        el.style.removeProperty('--tray-accent');
        el.style.removeProperty('--tray-glow');
      }
    });
    /* every render is a state change — keep the resume mirror in step */
    scheduleSave();
  }

  function getValidMoves(pk, v) {
    const res = [];
    const toks = state.tokens[pk];
    for (let i = 0; i < 4; i++) {
      const p = toks[i];
      if (p === 56) continue;
      if (p === -1) { if (v === 6) res.push(i); continue; }
      if (p + v <= 56) res.push(i);
    }
    return res;
  }

  function doRoll() {
    if (state.busy || state.rolled || state.winner) return;
    state.busy = true; state.rolled = true;
    Sound.playDice();
    render();
    diceEl.classList.add('rolling');
    let ticks = 0;
    const iv = setInterval(() => {
      renderDice(1 + Math.floor(Math.random() * 6));
      if (++ticks >= 8) {
        clearInterval(iv);
        const v = 1 + Math.floor(Math.random() * 6);
        state.dice = v; renderDice(v);
        diceEl.classList.remove('rolling');
        state.busy = false;
        handleRoll(v);
      }
    }, 60);
  }

  function handleRoll(v) {
    const pk = currentPlayer();
    if (v === 6) {
      state.sixCount++;
      if (state.sixCount >= 3) {
        state.sixCount = 0;
        showToast('Three 6s — Turn Skipped', 'bad');
        render();
        setTimeout(nextTurn, 600);
        return;
      }
    } else state.sixCount = 0;
    const moves = getValidMoves(pk, v);
    if (moves.length === 0) {
      if (!isAI(pk)) showToast(`No Moves for ${v}`, 'warn');
      render();
      if (v === 6) {
        setTimeout(() => { state.rolled = false; state.dice = null; state.pending = []; render(); if (isAI(pk)) setTimeout(doRoll, 700); }, 800);
      } else {
        setTimeout(nextTurn, 800);
      }
      return;
    }
    if (isAI(pk)) { const best = aiChoose(pk, moves, v); setTimeout(() => applyMove(pk, best, v), 400); }
    else if (moves.length === 1) { setTimeout(() => applyMove(pk, moves[0], v), 300); }
    else { state.pending = moves; render(); }
  }

  function animateToken(pk, i, fromProg, toProg, onComplete) {
    const toks = state.tokens[pk];
    const el = tokenEls[pk][i];
    if (fromProg === -1) {
      el.style.transitionDuration = '.28s';
      toks[i] = 0; render();
      setTimeout(() => { el.style.transitionDuration = ''; onComplete(); }, 300);
      return;
    }
    let current = fromProg;
    const stepDelay = 125;
    function step() {
      current++; toks[i] = current; render();
      if (current < toProg) setTimeout(step, stepDelay);
      else setTimeout(onComplete, 140);
    }
    setTimeout(step, stepDelay);
  }

  function animateCaptureBack(o, j) {
    const el = tokenEls[o][j];
    el.style.transitionDuration = '.45s';
    state.tokens[o][j] = -1;
    setTimeout(() => { el.style.transitionDuration = ''; }, 480);
  }

  function applyMove(pk, i, v) {
    state.pending = []; state.busy = true;
    const from = state.tokens[pk][i];
    const to = from === -1 ? 0 : from + v;
    animateToken(pk, i, from, to, () => { state.busy = false; finishMove(pk, i, v, from, to); });
  }

  function finishMove(pk, i, v, from, to) {
    let captured = false;
    const capturedTokens = [];
    if (to <= 50) {
      const abs = (START[pk] + to) % 52;
      if (!SAFE.has(abs)) {
        state.activeColors.forEach(o => {
          if (o === pk) return;
          state.tokens[o].forEach((op, j) => {
            if (op >= 0 && op <= 50 && (START[o] + op) % 52 === abs) { capturedTokens.push([o, j]); captured = true; }
          });
        });
      }
    }
    capturedTokens.forEach(([o, j]) => animateCaptureBack(o, j));
    render();
    const reachedHome = (to === 56);
    if (captured) { Sound.play('kill', 1.0); showToast('Token Captured!', 'success'); }
    else if (reachedHome) { Sound.play('home', 1.0); showToast('Token Reached Home!', 'success'); }
    if (state.tokens[pk].every(t => t === 56)) {
      setTimeout(() => {
        state.winner = pk;
        render();
        Sound.play('win', 1.0);
        winText.textContent = NAMES[pk] === 'You' ? 'You Win!' : `${NAMES[pk]} Wins!`;
        overlay.classList.add('show');
        showToast(NAMES[pk] === 'You' ? 'You Win!' : `${NAMES[pk]} Wins!`, 'win');
        /* the prize (or the loss) is booked server-side, then shown */
        settleMatch(NAMES[pk] === 'You' ? 'win' : 'lose');
      }, 350);
      return;
    }
    if (v === 6 || captured || reachedHome) {
      setTimeout(() => { state.rolled = false; state.dice = null; state.pending = []; render(); if (isAI(pk)) setTimeout(doRoll, 700); }, 550);
    } else {
      setTimeout(nextTurn, 550);
    }
  }

  function nextTurn() {
    if (state.winner) return;
    state.turnIdx = (state.turnIdx + 1) % state.turnOrder.length;
    state.sixCount = 0;
    beginRollPhase();
  }
  function beginRollPhase() {
    state.rolled = false; state.dice = null; state.pending = [];
    render();
    const pk = currentPlayer();
    if (!state.winner) {
      if (isAI(pk)) setTimeout(doRoll, 850);
      else showToast('Your Turn', 'info');
    }
  }
  function aiChoose(pk, moves, v) {
    let best = moves[0], bestScore = -Infinity;
    for (const i of moves) {
      const from = state.tokens[pk][i];
      const to = from === -1 ? 0 : from + v;
      let score = 0;
      if (to <= 50) {
        const abs = (START[pk] + to) % 52;
        if (!SAFE.has(abs)) {
          state.activeColors.forEach(o => {
            if (o === pk) return;
            state.tokens[o].forEach(op => { if (op >= 0 && op <= 50 && (START[o] + op) % 52 === abs) score += 130; });
          });
        }
        if (SAFE.has(abs)) score += 28;
      }
      if (to === 56) score += 100;
      if (from === -1) score += 70;
      if (from >= 51) score += 45;
      score += to * 0.7;
      if (from >= 0 && from <= 50) {
        const fAbs = (START[pk] + from) % 52;
        if (SAFE.has(fAbs) && to <= 50 && !SAFE.has((START[pk] + to) % 52)) score -= 22;
      }
      if (score > bestScore) { bestScore = score; best = i; }
    }
    return best;
  }

  diceEl.addEventListener('click', () => { if (diceEl.classList.contains('active')) doRoll(); });
  diceEl.addEventListener('touchstart', e => { if (diceEl.classList.contains('active')) { e.preventDefault(); doRoll(); } }, { passive: false });

  gameEl.addEventListener('click', e => {
    const el = e.target.closest('.token'); if (!el) return;
    if (state.winner || state.busy) return;
    const pk = el.dataset.pk; const i = Number(el.dataset.i);
    if (pk !== currentPlayer()) return;
    if (isAI(pk)) return;
    if (!state.pending.includes(i)) return;
    applyMove(pk, i, state.dice);
  });

  document.getElementById('againBtn').addEventListener('click', () => {
    Sound.play('click', 0.8); Sound.stopMatch();
    timers.forEach(t => clearTimeout(t)); timers.length = 0;
    overlay.classList.remove('show');
    hideOutcomeStats();   /* the next match shows its own numbers */
    screenGame.classList.add('hidden');
    screenPlayers.classList.remove('hidden');
    if (Sound.isEnabled()) Sound.startBg();
    /* the finished match is closed — the next one pays its own entry fee */
    matchId = null; matchSettled = false;
    state = null;
    clearSavedGame();
  });

  /* ═══════════ QUIT HANDLERS ═══════════
     ONE dialog, two meanings — and it is the only way out of the game:

       matchIsLive()   a paid match is being abandoned → the entry fee that is at
                       stake is shown, and "Quit" closes the match (fee lost)
       otherwise       nothing is at stake (setup screens, a finished match) →
                       "Exit", and nothing is deducted

     The back gesture (phone button, swipe, Alt+←) is what the pop-up answers, and
     the in-page home buttons open the very same box, so every exit asks first. */
  var QUIT_COPY = {
    quit: {
      title: 'Are You Sure?',
      msg: 'If you leave now your match is abandoned. The entry fee you already paid is not refunded — nothing else is deducted.',
      action: 'Quit',
    },
    leave: {
      title: 'Leave the Game?',
      msg: 'No match is running right now, so nothing will be deducted.',
      action: 'Exit',
    },
  };
  var quitMode = 'leave';   /* which copy the open dialog is showing */
  var quitBusy = false;

  function openQuitDialog(fromBack) {
    quitMode = matchIsLive() ? 'quit' : 'leave';
    backAsk = !!fromBack;
    const copy = QUIT_COPY[quitMode];
    const titleEl = quitOverlay.querySelector('.quit-title');
    const msgEl = quitOverlay.querySelector('.quit-msg');
    const costEl = quitOverlay.querySelector('.quit-cost');
    if (titleEl) titleEl.textContent = copy.title;
    if (msgEl) msgEl.textContent = copy.msg;
    if (quitBtn) quitBtn.textContent = copy.action;
    /* the coins row is an inline-flex box, so `hidden` cannot beat the stylesheet */
    if (costEl) costEl.style.display = quitMode === 'quit' ? '' : 'none';
    quitOverlay.classList.add('show');
  }
  function closeQuitDialog() {
    backAsk = false;
    quitOverlay.classList.remove('show');
  }

  /* the in-game home button asks first; `backAsk` only marks the back gesture */
  homeBtnGame.addEventListener('click', () => {
    Sound.play('click', 0.8);
    openQuitDialog(false);
  });
  stayBtn.addEventListener('click', () => {
    Sound.play('click', 0.8);
    closeQuitDialog();
  });
  quitOverlay.addEventListener('click', (e) => { if (e.target === quitOverlay) closeQuitDialog(); });

  quitBtn.addEventListener('click', async () => {
    Sound.play('click', 0.8);
    if (quitBusy) return;
    quitBusy = true;
    const abandoning = quitMode === 'quit';
    const wasBack = backAsk;
    closeQuitDialog();
    timers.forEach(t => clearTimeout(t)); timers.length = 0;
    Sound.stopMatch();
    overlay.classList.remove('show');

    if (abandoning) {
      /* the server closes the match and answers with the wallet: no second debit,
         the entry fee that was already taken is simply gone (see src/api.ts). The
         answer is awaited, so the page that opens next already knows the balance. */
      await settleMatch('quit');
      matchId = null; matchSettled = false; state = null;
      clearSavedGame();
    }
    quitBusy = false;

    if (wasBack) { leaveGame(); return; }

    /* the match was left through the in-page home button — back to the setup */
    screenGame.classList.add('hidden');
    screenPlayers.classList.remove('hidden');
    if (Sound.isEnabled()) Sound.startBg();
    exitToast.classList.add('show');
    setTimeout(() => exitToast.classList.remove('show'), 1800);
  });

  function startGame(config) {
    const userColor = config.color;
    const mode = config.players;
    const opponents = config.opponents || [];
    ROT = ROT_MAP[userColor];
    let activeColors, aiColors;
    if (mode === 2) { const opp = OPPOSITE[userColor]; activeColors = [userColor, opp]; aiColors = [opp]; }
    else { activeColors = PLAYERS.slice(); aiColors = PLAYERS.filter(c => c !== userColor); }
    PLAYERS.forEach(pk => { AI[pk] = aiColors.includes(pk); });
    NAMES[userColor] = 'You';
    aiColors.forEach((pk, idx) => { NAMES[pk] = (opponents[idx] && opponents[idx].name) || `Player ${idx + 1}`; });
    PLAYERS.forEach(pk => {
      const nameEl = trayEls[pk].querySelector('.tray-name');
      const subEl  = trayEls[pk].querySelector('.tray-sub');
      if (nameEl) nameEl.textContent = NAMES[pk] || 'Player';
      if (subEl) subEl.textContent = 'Online';
    });
    state = {
      tokens: { red:[-1,-1,-1,-1], green:[-1,-1,-1,-1], yellow:[-1,-1,-1,-1], blue:[-1,-1,-1,-1] },
      activeColors, turnOrder: [userColor, ...aiColors], turnIdx: 0,
      dice: null, rolled: false, sixCount: 0, pending: [], winner: null, busy: false
    };
    /* a resumed match: the positions and the turn come from the saved mirror, the
       money from the server's still-open match (nothing is charged twice) */
    const restore = config.restore;
    if (restore) {
      PLAYERS.forEach(pk => {
        const savedToks = restore.tokens && restore.tokens[pk];
        if (!Array.isArray(savedToks)) return;
        state.tokens[pk] = savedToks.slice(0, 4).map(t => { const n = Number(t); return Number.isFinite(n) ? n : -1; });
        while (state.tokens[pk].length < 4) state.tokens[pk].push(-1);
      });
      if (Number.isFinite(restore.turnIdx) && restore.turnIdx >= 0 && restore.turnIdx < state.turnOrder.length)
        state.turnIdx = restore.turnIdx;
      state.winner = restore.winner || null;
    }
    buildBoard(); buildTokens(); arrangeTrays(); render();
    armBackGuard();
    if (state.winner) {
      /* the board was already won before the reload — show it and make sure the
         money is booked (a repeated finish call can never pay twice) */
      winText.textContent = NAMES[state.winner] === 'You' ? 'You Win!' : `${NAMES[state.winner]} Wins!`;
      overlay.classList.add('show');
      settleMatch(NAMES[state.winner] === 'You' ? 'win' : 'lose');
      return;
    }
    showToast('Your Turn', 'info');
    beginRollPhase();
  }

  /* a reload, a crash or a phone that reloaded the page by itself: the board is
     restored instead of the match being thrown away. Only the server can allow
     it — a match that is already closed is never resurrected (see the caller). */
  function resumeMatch(saved) {
    selectedMode = saved.mode === 4 ? 4 : 2;
    selectedColor = PLAYERS.indexOf(saved.color) >= 0 ? saved.color : 'blue';
    pickedOpponents = Array.isArray(saved.opponents) ? saved.opponents : [];
    matchId = saved.matchId;
    matchSettled = false;
    screenPlayers.classList.add('hidden');
    screenColors.classList.add('hidden');
    screenFinding.classList.add('hidden');
    screenGame.classList.remove('hidden');
    if (Sound.isEnabled()) { Sound.stopBg(); Sound.playMatch(); }
    startGame({ players: selectedMode, color: selectedColor, opponents: pickedOpponents, restore: saved });
    showToast('Match resumed', 'info');
  }

  /* leaving with a paid, unfinished match no longer throws it away: the board is
     mirrored into localStorage and the match stays open on the server, so coming
     back — a reload, an accidental close, a phone that reloads itself — resumes
     the same board. Only a real Quit closes the match. */
  window.addEventListener('pagehide', () => { markAbandoned(); saveGame(); });
  /* the phone may freeze or kill a backgrounded tab without a pagehide at all —
     mirror the board whenever the game goes to the background as well */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { clearTimeout(saveTimer); saveGame(); }
  });
  document.addEventListener('freeze', () => { clearTimeout(saveTimer); saveGame(); });

  renderBalance();
  renderFeeLabels();
  renderHowToPlay();
  /* the document is guarded from the very first frame: on the setup screens a back
     press asks "leave the game?" (nothing is at stake), during a match it is the
     quit pop-up with the fee that is lost */
  armBackGuard();
  startLoading();

  /* the SSR'd balance is only as new as this document — ask once more in the
     background, because another device (or a deposit on another tab) may have
     changed the wallet since the page was rendered. The same answer is what makes
     a resume safe: the board is only restored when the server still has that paid
     match open (a finished match is never resurrected) and the mirror belongs to
     that very match id. */
  function syncLudoState(attempt) {
    /* A phone can lose the network without the request ever "failing": the fetch
       simply never answers. The deadline turns that into a retry — the alternative
       is a paid match the player cannot get back. */
    let ctrl = null, deadline = null;
    try { ctrl = new AbortController(); } catch (e) { ctrl = null; }
    if (ctrl) deadline = setTimeout(() => { try { ctrl.abort(); } catch (e) {} }, 7000);
    const stop = () => { if (deadline) { clearTimeout(deadline); deadline = null; } };

    fetch('/api/ludo/state', { cache: 'no-store', signal: ctrl ? ctrl.signal : undefined })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        stop();
        if (!d) { retryLudoState(attempt); return; }
        if (typeof d.balance === 'number') {
          balance = d.balance;
          renderBalance();
        }
        const saved = loadSavedGame();
        if (d.match) {
          /* a match the player walked out of without answering the pop-up is not
             dragged back onto the screen: the next Play is a new game */
          if (leftUnconfirmed(d.match.matchId)) { abandonMatch(d.match.matchId); return; }
          /* this match is already paid for — losing the board would cost the fee */
          if (saved && saved.matchId === d.match.matchId) { resumeMatch(saved); return; }
          /* the mirror belongs to an older match (or is gone: a reload inside the
             players search, cleared storage). A recent match is picked up on a fresh
             board — the fee is already paid, so the player gets a match either way —
             while an old one is somebody's leftover and is left alone. */
          if (saved) clearSavedGame();
          const age = Date.now() - (Number(d.match.startedAt) || 0);
          if (age < RECENT_MATCH_MS) {
            /* the colour is cosmetic here — the fee (and the prize) are the server's */
            resumeMatch({ matchId: d.match.matchId, mode: d.match.mode, color: 'blue', opponents: [] });
            return;
          }
        }
        /* no match open on the server — drop the stale mirror */
        if (saved) clearSavedGame();
        clearAbandoned();
      })
      .catch(() => { stop(); retryLudoState(attempt); });
  }

  /** A phone loses its network for a moment all the time. Without this retry that
   *  moment would drop the player on the setup screen with a paid match left behind
   *  — with it, the board simply comes back a second later. */
  function retryLudoState(attempt) {
    const tries = Number(attempt) || 0;
    if (tries >= 3) return;
    setTimeout(() => syncLudoState(tries + 1), 1200);
  }

  syncLudoState(0);

})()
