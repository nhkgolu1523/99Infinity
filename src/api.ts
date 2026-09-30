/* ==========================================================================
   API — every dynamic action of the site. The browser NEVER talks to Firebase
   directly; it only talks to these endpoints. Session cookie + server-side
   validation on every call.
   ========================================================================== */

import { Hono } from 'hono'
import { site } from './data'
import {
  DEFAULT_DAILY_CONFIG,
  DEFAULT_LIMITS_CONFIG,
  DEFAULT_SPIN_CONFIG,
  DEPOSIT_MIN,
  WITHDRAW_MAX,
  WITHDRAW_MIN,
  WITHDRAW_QUICK,
  cycleDay,
  dayKeyAt,
  money,
  nextResetAt,
  normaliseLimits,
  pickWeighted,
  resetLabel,
  streakRewardOf,
  type LimitsConfig,
  type SpinSegment,
} from './lib/rewards'
import { loadMessages, loadNotice } from './lib/site-content'
import {
  dbGet,
  dbPatch,
  dbPut,
  dbDelete,
  dbPutConditional,
  increment,
  createSessionToken,
  readSessionToken,
  sessionCookieHeader,
  clearSessionCookieHeader,
  genSessionId,
  getCookie,
  reserveUniqueUid,
  reservePhone,
  genTxId,
  autoUsername,
  isPlaceholderName,
} from './lib/backend'
import { walletSplit, walletTotals, totalBalance } from './lib/wallet'
import {
  PAYMENT_WINDOW_SECONDS,
  createFamOrder,
  expirePaymentOrder,
  famConfigured,
  getPaymentOrder,
  loadPaymentConfig,
  orderPath,
  settlePayment,
  verifyFamOrder,
  verifyFamSignature,
  type PaymentOrder,
} from './lib/payments'
import {
  isLudoMode,
  loadLudoConfig,
  ludoDebitPlan,
  ludoPrize,
  validLudoMatchId,
} from './lib/ludo'

export type UserNode = {
  uid: string
  auth?: { phone: string; password: string }
  profile?: Record<string, any>
  status?: { code?: string; message?: string }
  balance?: { total?: number; deposit?: number; withdraw?: number }
  stats?: Record<string, number>
  settings?: Record<string, boolean>
  pending?: { withdrawTotal?: number; depositCount?: number }
  rewards?: Record<string, any>
  transactions?: Record<string, any>
}

/* ------------------------------------------------------------------ shared */
/* every user node carries a slice of platform config so admins can tune the
   wheel / daily reward straight from Firebase without a redeploy */

const CONFIG_TTL = 60 * 1000
const configCache: Record<string, { at: number; value: any }> = {}

async function loadConfig<T>(env: any, path: string, defaults: T, ttl = CONFIG_TTL): Promise<T> {
  const hit = configCache[path]
  const now = Date.now()
  if (hit && now - hit.at < ttl) return hit.value as T
  let stored: any = null
  try {
    stored = await dbGet(env, path)
  } catch {
    stored = null
  }
  if (!stored || typeof stored !== 'object') {
    /* first run — seed the defaults so the admin can see/edit them */
    try {
      await dbPut(env, path, defaults as any)
    } catch {
      /* best effort */
    }
    configCache[path] = { at: now, value: defaults }
    return defaults
  }
  const value = { ...(defaults as any), ...stored } as T
  configCache[path] = { at: now, value }
  return value
}


/* ------------------------------------------------------------------ devices */
/* Every login creates one record in USERS/<uid>/devices/<sid>. That list IS the
   "Active Devices" page, and deleting a record logs that device out on its very
   next request — real data, no placeholders. */

export type DeviceRecord = {
  sid: string
  label: string
  platform: string
  browser: string
  type: 'mobile' | 'tablet' | 'desktop'
  city: string
  country: string
  ip: string
  createdAt: number
  lastSeen: number
}

const COUNTRY_NAMES: Record<string, string> = {
  IN: 'India',
  US: 'United States',
  GB: 'United Kingdom',
  AE: 'United Arab Emirates',
  SA: 'Saudi Arabia',
  PK: 'Pakistan',
  BD: 'Bangladesh',
  NP: 'Nepal',
  LK: 'Sri Lanka',
  SG: 'Singapore',
  MY: 'Malaysia',
  ID: 'Indonesia',
  TH: 'Thailand',
  PH: 'Philippines',
  VN: 'Vietnam',
  CN: 'China',
  JP: 'Japan',
  KR: 'South Korea',
  AU: 'Australia',
  CA: 'Canada',
  DE: 'Germany',
  FR: 'France',
  IT: 'Italy',
  ES: 'Spain',
  NL: 'Netherlands',
  RU: 'Russia',
  BR: 'Brazil',
  ZA: 'South Africa',
  NG: 'Nigeria',
  EG: 'Egypt',
  TR: 'Turkey',
  HK: 'Hong Kong',
}

/** Browser + OS + a friendly device name from the request's User-Agent. */
function describeAgent(ua: string): Pick<DeviceRecord, 'label' | 'platform' | 'browser' | 'type'> {
  const s = String(ua || '')

  /* ---- browser (order matters: Edge/Opera/Samsung all contain "Chrome") */
  const versionOf = (re: RegExp) => {
    const m = re.exec(s)
    return m && m[1] ? ' ' + m[1].split('.')[0] : ''
  }
  let browser = 'Browser'
  if (/Edg[EA]?\//.test(s)) browser = 'Edge' + versionOf(/Edg[EA]?\/([\d.]+)/)
  else if (/OPR\/|Opera/.test(s)) browser = 'Opera' + versionOf(/(?:OPR|Opera)\/([\d.]+)/)
  else if (/SamsungBrowser/.test(s))
    browser = 'Samsung Internet' + versionOf(/SamsungBrowser\/([\d.]+)/)
  else if (/CriOS\//.test(s)) browser = 'Chrome (iOS)' + versionOf(/CriOS\/([\d.]+)/)
  else if (/FxiOS\//.test(s)) browser = 'Firefox (iOS)' + versionOf(/FxiOS\/([\d.]+)/)
  else if (/Chrome\//.test(s)) browser = 'Chrome' + versionOf(/Chrome\/([\d.]+)/)
  else if (/Firefox\//.test(s)) browser = 'Firefox' + versionOf(/Firefox\/([\d.]+)/)
  else if (/Version\/[\d.]+.*Safari/.test(s)) browser = 'Safari' + versionOf(/Version\/([\d.]+)/)

  /* ---- OS + device model */
  const ios = /(iPhone|iPad|iPod);?.*?OS ([\d_]+)/.exec(s)
  const android = /Android ([\d.]+)/.exec(s)
  const androidModel = /Android[\d.\s]*;\s*([^;)]+?)(?:\s+Build|[;)])/.exec(s)

  if (/iPhone|iPod/.test(s))
    return {
      label: 'iPhone',
      platform: 'iOS' + (ios ? ' ' + ios[2].replace(/_/g, '.') : ''),
      browser,
      type: 'mobile',
    }
  if (/iPad/.test(s))
    return {
      label: 'iPad',
      platform: 'iPadOS' + (ios ? ' ' + ios[2].replace(/_/g, '.') : ''),
      browser,
      type: 'tablet',
    }
  if (android) {
    const model = (androidModel ? androidModel[1] : '').trim()
    let label = model || 'Android Device'
    if (/SM-|Samsung|Galaxy/i.test(model || s)) label = 'Samsung Galaxy'
    else if (/Redmi|POCO|Xiaomi|MI\s?\d/i.test(model || s)) label = 'Xiaomi Redmi'
    else if (/Pixel/i.test(model || s)) label = 'Google Pixel'
    else if (/ONEPLUS|OnePlus/i.test(s)) label = 'OnePlus'
    else if (/vivo/i.test(model || s)) label = 'Vivo'
    else if (/OPPO|CPH\d/i.test(model || s)) label = 'Oppo'
    else if (/realme/i.test(model || s)) label = 'Realme'
    else if (/moto|Motorola/i.test(model || s)) label = 'Motorola'
    else if (/Infinix/i.test(model || s)) label = 'Infinix'
    else if (/Tecno/i.test(model || s)) label = 'Tecno'
    if (!model) label = 'Android Device'
    return {
      label,
      platform: 'Android ' + android[1],
      browser,
      type: /Mobile/i.test(s) ? 'mobile' : 'tablet',
    }
  }
  if (/Windows NT 10|Windows NT 11/.test(s))
    return { label: 'Windows PC', platform: 'Windows 10/11', browser, type: 'desktop' }
  if (/Windows/.test(s)) return { label: 'Windows PC', platform: 'Windows', browser, type: 'desktop' }
  if (/Macintosh|Mac OS X/.test(s)) {
    const v = /Mac OS X ([\d_]+)/.exec(s)
    return {
      label: 'Mac',
      platform: 'macOS' + (v ? ' ' + v[1].replace(/_/g, '.') : ''),
      browser,
      type: 'desktop',
    }
  }
  if (/CrOS/.test(s)) return { label: 'Chromebook', platform: 'ChromeOS', browser, type: 'desktop' }
  if (/Linux|X11/.test(s)) return { label: 'Linux PC', platform: 'Linux', browser, type: 'desktop' }
  return { label: 'Unknown Device', platform: 'Unknown OS', browser, type: 'desktop' }
}

/** City / country of this request — Cloudflare puts the geo on the request. */
export function geoOf(c: any): { city: string; country: string; ip: string } {
  const header = (n: string) => String(c.req.header(n) || '').trim()
  const city = header('cf-ipcity') || header('cf-city') || header('cf-region') || ''
  const code = (header('cf-ipcountry') || '').toUpperCase()
  const country = code && code !== 'XX' ? COUNTRY_NAMES[code] || code : ''
  const ip = header('cf-connecting-ip') || header('x-forwarded-for').split(',')[0].trim()
  return { city, country, ip }
}

/** Builds the record saved under USERS/<uid>/devices/<sid> at login time. */
export function deviceFromRequest(c: any, sid: string): DeviceRecord {
  const info = describeAgent(c.req.header('user-agent') || '')
  const geo = geoOf(c)
  const now = Date.now()
  return { sid, ...info, ...geo, createdAt: now, lastSeen: now }
}

/** Public (client-safe) shape of one device. */
export function publicDevice(d: any, currentSid: string) {
  return {
    sid: String(d?.sid || ''),
    label: String(d?.label || 'Unknown Device'),
    platform: String(d?.platform || ''),
    browser: String(d?.browser || ''),
    type: String(d?.type || 'desktop'),
    location: [d?.city, d?.country].filter(Boolean).join(', '),
    ip: String(d?.ip || ''),
    createdAt: Number(d?.createdAt || 0),
    lastSeen: Number(d?.lastSeen || 0),
    current: String(d?.sid || '') === currentSid,
  }
}

/** Sorted (current first, then most recent activity) device list of a user. */
export function deviceList(node: any, currentSid: string) {
  const stored = (node && node.devices) || {}
  return Object.values(stored)
    .map((d) => publicDevice(d, currentSid))
    .sort((a, b) => (b.current ? 1 : 0) - (a.current ? 1 : 0) || b.lastSeen - a.lastSeen)
}

/* ------------------------------------------------------------------ session middleware */

/** Loads the logged-in user (if any) into the request context.
 *  A session is only valid while its device record still exists — that is how
 *  "log out this device" from the Active Devices page really logs it out. */
export const sessionMiddleware = async (c: any, next: () => Promise<void>) => {
  c.set('user', null as UserNode | null)
  c.set('deviceSid', null as string | null)
  c.set('device', null as DeviceRecord | null)
  const token = getCookie(c, 'vg_session')
  if (token) {
    const session = await readSessionToken(c.env, token)
    if (session && session.uid && session.sid) {
      const user = await dbGet<any>(c.env, `USERS/${session.uid}`)
      const device = user && user.devices ? user.devices[session.sid] : null
      if (user && device) {
        /* accounts created before auto-usernames still carry the placeholder
           "Guest User" (or no name at all) — name them once, on the first
           request after this deploy, and never touch a user-chosen name again */
        const profile = user.profile || {}
        if (isPlaceholderName(profile.name)) {
          const name = autoUsername(session.uid)
          profile.name = name
          user.profile = profile
          try {
            await dbPatch(c.env, { [`USERS/${session.uid}/profile/name`]: name })
          } catch {
            /* the page still renders — the next request retries the rename */
          }
        }
        c.set('user', { ...user, uid: session.uid })
        c.set('deviceSid', session.sid)
        c.set('device', device as DeviceRecord)
        /* keep "last active" fresh — at most one write per minute, per device */
        if (Date.now() - Number(device.lastSeen || 0) > 60 * 1000) {
          const geo = geoOf(c)
          c.set('device', { ...device, ...geo, lastSeen: Date.now() } as DeviceRecord)
          try {
            await dbPatch(c.env, {
              [`USERS/${session.uid}/devices/${session.sid}/lastSeen`]: Date.now(),
              [`USERS/${session.uid}/devices/${session.sid}/city`]: geo.city,
              [`USERS/${session.uid}/devices/${session.sid}/country`]: geo.country,
              [`USERS/${session.uid}/devices/${session.sid}/ip`]: geo.ip,
            })
          } catch {
            /* the page must still render if the touch fails */
          }
        }
      }
    }
  }
  await next()
}

/** Public-safe user shape — passwordHash is NEVER sent to any client. */
function safeUser(u: UserNode) {
  const { auth, ...rest } = u
  const profile = rest.profile || {}
  /* legacy default avatar that no longer exists on disk */
  if (profile.avatar === '/assets/img/avatar/avatar-original.png')
    profile.avatar = '/assets/img/avatar/avatar.png'
  return {
    uid: u.uid,
    profile: rest.profile || {},
    status: rest.status || { code: 'active', message: '' },
    balance: rest.balance || { total: 0, deposit: 0, withdraw: 0 },
    stats: rest.stats || {},
    settings: rest.settings || { push: true, promo: false, loginAlerts: true, sound: true },
    phone: auth?.phone || '',
  }
}

/** Blocks suspended / under-investigation accounts on every sensitive call. */
function statusBlock(user: UserNode): { code: string; message: string } | null {
  const code = user.status?.code || 'active'
  if (code === 'active') return null
  const message =
    user.status?.message ||
    (code === 'suspended'
      ? 'Your Account Is Suspended!'
      : code === 'investigation'
        ? 'Your Account Is Under Investigation!'
        : 'Your account is restricted')
  return { code, message }
}

export const apiApp = new Hono()

/** Money limits straight from CONFIG/LIMITS (admin panel) — sanitised.
 *  Short cache: the admin panel expects the new numbers to bite immediately. */
const LIMITS_TTL = 5 * 1000
async function loadLimits(env: any): Promise<LimitsConfig> {
  const raw = await loadConfig(env, 'CONFIG/LIMITS', DEFAULT_LIMITS_CONFIG, LIMITS_TTL)
  return normaliseLimits(raw)
}

/* ------------------------------------------------------------------ public config */

/** Live platform config (wheel + daily reward + money limits) — public, no
 *  personal data. The browser reads the withdrawal limits from here so the page
 *  can never disagree with the server. */
apiApp.get('/config/rewards', async (c) => {
  const spin = await loadConfig(c.env, 'CONFIG/SPIN', DEFAULT_SPIN_CONFIG)
  const daily = await loadConfig(c.env, 'CONFIG/DAILY', DEFAULT_DAILY_CONFIG)
  const limits = await loadLimits(c.env)
  const pay = await loadPaymentConfig(c.env)
  return c.json({
    ok: true,
    spin,
    daily,
    withdraw: { min: limits.withdrawMin, max: limits.withdrawMax, quick: limits.withdrawQuick },
    deposit: { min: limits.depositMin },
    /* UPI gateway state — the deposit page reads this instead of guessing */
    payments: {
      enabled: pay.enabled,
      configured: famConfigured(c.env),
      autoCredit: pay.autoCredit,
      windowSeconds: PAYMENT_WINDOW_SECONDS,
    },
    resetHour: 4,
    timezone: 'Asia/Kolkata',
  })
})

/* ------------------------------------------------------------------ register */

apiApp.post('/auth/register', async (c) => {
  const body = await c.req.json().catch(() => ({} as any))
  const phone = String(body.phone || '').replace(/\D/g, '')
  const password = String(body.password || '')

  if (phone.length !== 10) return c.json({ error: 'Enter a valid 10-digit phone number' }, 400)
  if (password.length < 6) return c.json({ error: 'Password must be at least 6 characters' }, 400)

  /* phone already registered? */
  const existing = await dbGet(c.env, `PHONE_INDEX/${phone}`)
  if (existing) return c.json({ error: 'This phone number is already registered', code: 'phone-taken' }, 409)

  /* claim a collision-proof unique UID (conditional PUT, retry on 412) */
  let uid: string
  try {
    uid = await reserveUniqueUid(c.env, phone)
  } catch {
    return c.json({ error: 'Could not create account, please try again' }, 503)
  }

  /* claim the phone with the same guarantee — if lost, another device
     registered this phone a moment ago: release the uid and report */
  const phoneClaimed = await reservePhone(c.env, phone, uid)
  if (!phoneClaimed) {
    await dbDelete(c.env, `UID_INDEX/${uid}`)
    return c.json({ error: 'This phone number is already registered', code: 'phone-taken' }, 409)
  }

  const now = Date.now()
  const user: Record<string, any> = {
    uid,
    auth: { phone, password },
    profile: {
      /* every account is born with a real username — user + 4 digits of its UID */
      name: autoUsername(uid),
      email: '',
      avatar: '/assets/img/avatar/avatar.png',
      language: 'en',
      vip: 0,
      invite: String(body.invite || ''),
      createdAt: now,
      lastLogin: now,
    },
    status: { code: 'active', message: '' },
    balance: { total: 0, deposit: 0, withdraw: 0 },
    stats: { totalDeposit: 0, totalWithdraw: 0, totalWager: 0, totalWon: 0, totalLost: 0, bets: 0 },
    pending: { withdrawTotal: 0, depositCount: 0 },
    settings: { push: true, promo: false, loginAlerts: true, sound: true },
  }

  try {
    await dbPut(c.env, `USERS/${uid}`, user)
  } catch {
    /* roll back the reservations so nothing is left dangling */
    await dbDelete(c.env, `UID_INDEX/${uid}`)
    await dbDelete(c.env, `PHONE_INDEX/${phone}`)
    return c.json({ error: 'Could not create account, please try again' }, 503)
  }

  /* the very first device/session of this account — also shown on the
     Active Devices page, so a fresh account already has a real entry */
  const sid = genSessionId()
  try {
    await dbPatch(c.env, { [`USERS/${uid}/devices/${sid}`]: deviceFromRequest(c, sid) })
  } catch {
    /* the account itself is fine — the session record is best effort */
  }

  const token = await createSessionToken(c.env, uid, sid)
  c.header('Set-Cookie', sessionCookieHeader(token))
  /* token also goes in the body — the client keeps it in localStorage so the
     login can be restored when the phone's browser wipes its cookies */
  return c.json({
    ok: true,
    uid,
    token,
    message: 'Account created successfully!',
    user: safeUser({ ...user, uid }),
  })
})

/* ------------------------------------------------------------------ login */

apiApp.post('/auth/login', async (c) => {
  const body = await c.req.json().catch(() => ({} as any))
  const phone = String(body.phone || '').replace(/\D/g, '')
  const password = String(body.password || '')

  if (phone.length !== 10 || !password)
    return c.json({ error: 'Enter your phone number and password' }, 400)

  const uid = await dbGet<string>(c.env, `PHONE_INDEX/${phone}`)
  if (!uid) return c.json({ error: 'No account found with this phone number' }, 401)

  const user = await dbGet<UserNode>(c.env, `USERS/${uid}`)
  if (!user) return c.json({ error: 'Account data not found, contact support' }, 401)

  const ok = String(user.auth?.password || '') === password
  if (!ok) return c.json({ error: 'Incorrect password' }, 401)

  /* suspended / investigation accounts are stopped right at login */
  const block = statusBlock({ ...user, uid: String(uid) })
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  /* every login is its own session/device record — the Active Devices page
     lists exactly these, and deleting one logs that device out */
  const sid = genSessionId()
  const device = deviceFromRequest(c, sid)
  await dbPatch(c.env, {
    [`USERS/${uid}/profile/lastLogin`]: Date.now(),
    [`USERS/${uid}/devices/${sid}`]: device,
  })
  const token = await createSessionToken(c.env, String(uid), sid)
  c.header('Set-Cookie', sessionCookieHeader(token))
  /* token also goes in the body — the client keeps it in localStorage so the
     login can be restored when the phone's browser wipes its cookies */
  return c.json({
    ok: true,
    message: 'Logged in successfully!',
    token,
    user: safeUser({ ...user, uid: String(uid) }),
  })
})

/** Remember-me restore — some phone browsers (and Chrome's own "clear on exit"
 *  settings) wipe cookies when the browser restarts, which forced a fresh login
 *  even though the account was still valid. The client keeps a copy of the
 *  session token in localStorage and trades it here for a real cookie again.
 *  The token is only honoured while its device record still exists, so
 *  "log out this device" (and the admin's device logout) kills the remembered
 *  login as well — the restore is exactly as strong as the cookie was. */
apiApp.post('/auth/restore', async (c) => {
  const body = await c.req.json().catch(() => ({} as any))
  const session = await readSessionToken(c.env, String(body.token || ''))
  if (!session) return c.json({ ok: false, error: 'Session expired, please log in' }, 401)

  const user = await dbGet<any>(c.env, `USERS/${session.uid}`)
  const device = user && user.devices ? user.devices[session.sid] : null
  if (!user || !device)
    return c.json({ ok: false, error: 'Session expired, please log in' }, 401)

  /* suspended / investigation accounts are stopped here too */
  const block = statusBlock({ ...user, uid: session.uid })
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  /* roll the session forward — the fresh token restarts the 30-day window */
  const token = await createSessionToken(c.env, session.uid, session.sid)
  c.header('Set-Cookie', sessionCookieHeader(token))
  return c.json({ ok: true, token, user: safeUser({ ...user, uid: session.uid }) })
})

/* ------------------------------------------------------------------ logout */

/** Ends THIS session only: the device record is deleted, so the cookie that is
 *  still lying around anywhere cannot be used again. */
apiApp.post('/auth/logout', async (c) => {
  const user = c.get('user') as UserNode | null
  const sid = c.get('deviceSid') as string | null
  if (user && sid) {
    try {
      await dbDelete(c.env, `USERS/${user.uid}/devices/${sid}`)
    } catch {
      /* logging out must never fail because of the DB */
    }
  }
  c.header('Set-Cookie', clearSessionCookieHeader())
  return c.json({ ok: true, message: 'Logged out' })
})

/* ------------------------------------------------------------------ active devices */

/** Real devices this account is signed in on (current one flagged). */
apiApp.get('/devices', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Not logged in' }, 401)

  let node: any = user
  try {
    node = (await dbGet(c.env, `USERS/${user.uid}`)) || user
  } catch {
    /* fall back to the node the middleware already loaded */
  }
  const devices = deviceList(node, String(c.get('deviceSid') || ''))
  return c.json({ ok: true, count: devices.length, devices })
})

/** Logs out one device. Logging out the CURRENT device also clears the cookie. */
apiApp.post('/devices/logout', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Not logged in' }, 401)

  const body = await c.req.json().catch(() => ({} as any))
  const sid = String(body.sid || '').trim()
  if (!sid) return c.json({ error: 'Device not specified' }, 400)

  const self = sid === String(c.get('deviceSid') || '')
  await dbDelete(c.env, `USERS/${user.uid}/devices/${sid}`)
  if (self) c.header('Set-Cookie', clearSessionCookieHeader())

  return c.json({
    ok: true,
    self,
    message: self ? 'Logged out from this device' : 'Device logged out successfully!',
  })
})

/** Logs out every device except this one. */
apiApp.post('/devices/logout-others', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Not logged in' }, 401)

  const current = String(c.get('deviceSid') || '')
  let stored: Record<string, any> = {}
  try {
    stored = (await dbGet(c.env, `USERS/${user.uid}/devices`)) || {}
  } catch {
    stored = {}
  }

  const patch: Record<string, any> = {}
  for (const sid of Object.keys(stored)) {
    if (sid !== current) patch[`USERS/${user.uid}/devices/${sid}`] = null
  }
  if (Object.keys(patch).length) await dbPatch(c.env, patch)

  return c.json({
    ok: true,
    removed: Object.keys(patch).length,
    message: Object.keys(patch).length
      ? 'Logged out from all other devices'
      : 'No other devices to log out',
  })
})

/* ------------------------------------------------------------------ me */

apiApp.get('/me', async (c) => {
  const session = c.get('user') as UserNode | null
  if (!session) return c.json({ error: 'Not logged in' }, 401)

  /* live status from the DB — admin changes apply instantly */
  const fresh = await dbGet<UserNode>(c.env, `USERS/${session.uid}`)
  if (!fresh) return c.json({ error: 'Account data not found' }, 401)
  const u: UserNode = { ...fresh, uid: session.uid }

  const transactions = Object.entries((u as any).transactions || {})
    .map(([, v]) => v as any)
    .sort((a, b) => (b.time || 0) - (a.time || 0))
    .slice(0, 50)

  return c.json({
    ok: true,
    uid: u.uid,
    profile: u.profile || {},
    status: u.status || { code: 'active', message: '' },
    /* the spendable total = plain counter + every credited gateway deposit */
    balance: { ...(u.balance || { deposit: 0, withdraw: 0 }), total: totalBalance(u) },
    /* main wallet vs 3rd-party wallet (claims) — the wallet page renders this */
    wallet: walletSplit(u),
    walletTotals: walletTotals(u),
    stats: u.stats || {},
    settings: u.settings || { push: true, promo: false, loginAlerts: true, sound: true },
    pending: u.pending || { withdrawTotal: 0, depositCount: 0 },
    transactions,
  })
})

/* ------------------------------------------------------------------ settings */

apiApp.post('/settings', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Not logged in' }, 401)

  const block = statusBlock(user)
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  const body = await c.req.json().catch(() => ({} as any))
  const allowed = ['push', 'promo', 'loginAlerts', 'sound']
  const patch: Record<string, boolean> = {}
  for (const key of allowed) if (key in body) patch[key] = !!body[key]
  if (!Object.keys(patch).length) return c.json({ error: 'Nothing to update' }, 400)

  const dbPatchBody: Record<string, any> = {}
  for (const [k, v] of Object.entries(patch)) dbPatchBody[`USERS/${user.uid}/settings/${k}`] = v
  await dbPatch(c.env, dbPatchBody)
  return c.json({ ok: true, settings: { ...(user.settings || {}), ...patch } })
})

/* ------------------------------------------------------------------ profile */

/** Saves the user's editable profile — nickname, email and avatar preset. */
apiApp.post('/profile', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Not logged in' }, 401)

  const block = statusBlock(user)
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  const body = await c.req.json().catch(() => ({} as any))
  const patch: Record<string, any> = {}

  if (body.name !== undefined) {
    const name = String(body.name).trim().replace(/\s+/g, ' ').slice(0, 20)
    if (name.length < 2) return c.json({ error: 'Nickname must be at least 2 characters' }, 400)
    patch.name = name
  }
  if (body.email !== undefined) {
    const email = String(body.email).trim().slice(0, 80)
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return c.json({ error: 'Enter a valid email address' }, 400)
    patch.email = email
  }
  if (body.avatar !== undefined) {
    const avatar = String(body.avatar)
    if (!/^\/assets\/img\/avatar\/[A-Za-z0-9._-]+\.png$/.test(avatar))
      return c.json({ error: 'Invalid avatar' }, 400)
    patch.avatar = avatar
  }
  if (!Object.keys(patch).length) return c.json({ error: 'Nothing to update' }, 400)

  const dbPatchBody: Record<string, any> = {}
  for (const [k, v] of Object.entries(patch)) dbPatchBody[`USERS/${user.uid}/profile/${k}`] = v
  await dbPatch(c.env, dbPatchBody)

  const fresh = await dbGet<UserNode>(c.env, `USERS/${user.uid}`)
  return c.json({ ok: true, message: 'Profile updated successfully!', user: safeUser({ ...(fresh || user), uid: user.uid }) })
})

/* ------------------------------------------------------------------ password */

apiApp.post('/password', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Not logged in' }, 401)

  const block = statusBlock(user)
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  const body = await c.req.json().catch(() => ({} as any))
  const current = String(body.current || '')
  const next = String(body.password || '')

  if (String(user.auth?.password || '') !== current)
    return c.json({ error: 'Current password is incorrect' }, 400)
  if (next.length < 6) return c.json({ error: 'Password must be at least 6 characters' }, 400)

  await dbPatch(c.env, { [`USERS/${user.uid}/auth/password`]: next })
  return c.json({ ok: true, message: 'Password changed successfully!' })
})

/* ------------------------------------------------------------------ games */

/** Game key from its cover path: /assets/img/game/inout/plinko.png → inout_plinko
 *  RTDB keys cannot contain . $ # [ ] / — sanitized consistently everywhere. */
function gameKeyFromSrc(src: string): string {
  return String(src)
    .replace(/^.*?\/assets\/img\/game\//, '')
    .replace(/\.(png|jpe?g|webp|gif)$/i, '')
    .replace(/[.$#\[\]/]/g, '_')
}

/** GAMES/<key> → 0 = "Comming Soon!", 1 = playable, 2 = the "Deposit to Play"
 *  popup. The three states are what the app understands; the plain word POPUP
 *  is accepted too, so either style can be typed straight into the Firebase
 *  console. Missing / '' / false / null all count as 0 (coming soon). */
export function gameStateValue(v: any): 0 | 1 | 2 {
  if (typeof v === 'string') {
    /* the Firebase console often keeps the quotes typed around a string */
    const word = v.trim().replace(/^["']+|["']+$/g, '').trim()
    if (/^popup$/i.test(word)) return 2
  }
  const n = Number(v)
  if (!n) return 0
  return n >= 2 ? 2 : 1
}

apiApp.get('/games', async (c) => {
  let games = await dbGet<Record<string, any>>(c.env, 'GAMES')
  if (!games || !Object.keys(games).length) {
    /* first run — every game of the catalogue is seeded OFF (0) until the
       admin turns it on from Firebase: GAMES/<gameKey> = 1 */
    const seed: Record<string, number> = {}
    for (const paths of Object.values(site.games as Record<string, string[]>)) {
      for (const src of paths) seed[gameKeyFromSrc(src)] = 0
    }
    for (const key of TOP_GAME_KEYS) seed[key] = 0
    if (Object.keys(seed).length) {
      try {
        await dbPut(c.env, 'GAMES', seed)
      } catch {
        /* seeding is best-effort — empty map still answers */
      }
    }
    games = seed
  }

  /* normalise to the three states the client renders: 0 coming soon,
     1 playable, 2 deposit popup */
  const normalised: Record<string, number> = {}
  for (const [k, v] of Object.entries(games)) normalised[k] = gameStateValue(v)

  return c.json({ ok: true, games: normalised, resetAt: Date.now() })
})

/** The three home "Top Games" tiles — their own switch inside GAMES. */
export const TOP_GAME_KEYS = ['ludo', 'chicken', 'fruit-slasher']

/** Live status of the given game keys (used on every tap, no stale cache).
 *  Answers with the raw state — 0 coming soon, 1 playable, 2 deposit popup. */
apiApp.get('/games/status', async (c) => {
  const wanted = String(c.req.query('keys') || '')
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean)
  const games = (await dbGet<Record<string, any>>(c.env, 'GAMES')) || {}
  const status: Record<string, number> = {}
  for (const key of wanted) status[key] = gameStateValue((games as any)[key])
  return c.json({ ok: true, status })
})

/* ------------------------------------------------------------------ ludo */
/* The board game is the first really playable game: wallet, entry fee and prize
   pool are all live. Money only ever moves here — the browser sends a match id,
   never an amount. */

/** Fresh wallet + live pricing for the Ludo screen.
 *
 *  Also hands back the player's still-open match (if any). The board itself lives
 *  in the browser, so a reload asks this endpoint "is my match still alive?" and
 *  only resumes when the server says yes — a match that was already closed (or a
 *  stale browser copy) can never be resurrected. */
apiApp.get('/ludo/state', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first', code: 'login' }, 401)
  const cfg = await loadLudoConfig(c.env)
  const split = walletSplit(user)

  let match: Record<string, any> | null = null
  const fresh = await dbGet<UserNode>(c.env, `USERS/${user.uid}`)
  const lastMatchId = String((fresh as any)?.ludo?.lastMatchId || '')
  if (validLudoMatchId(lastMatchId)) {
    const rec = await dbGet<any>(c.env, `USERS/${user.uid}/ludo/matches/${lastMatchId}`)
    if (rec && rec.status === 'active') {
      const m = isLudoMode(rec.mode) ? rec.mode : 2
      match = {
        matchId: lastMatchId,
        mode: m,
        fee: Number(rec.fee) || cfg.entryFee,
        prize: Number(rec.prize) || ludoPrize(cfg, m),
        startedAt: Number(rec.startedAt) || 0,
      }
    }
  }

  return c.json({
    ok: true,
    balance: split.total,
    main: split.main,
    promo: split.promo,
    entryFee: cfg.entryFee,
    prizes: cfg.prizes,
    match,
  })
})

/** POST /api/ludo/enter — pay the entry fee for ONE match.
 *
 *  The browser generates the match id; that id is the idempotency key. The
 *  first call claims `USERS/<uid>/ludo/matches/<matchId>` with an ETag-guarded
 *  write and only the winner of that race charges the fee, so a double tap, a
 *  retry or a second tab can never pay twice for the same match. */
apiApp.post('/ludo/enter', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first', code: 'login' }, 401)

  const body = await c.req.json().catch(() => ({}) as any)
  const matchId = String(body.match_id || '')
  const mode = Number(body.mode)
  if (!validLudoMatchId(matchId)) return c.json({ error: 'Invalid match id' }, 400)
  if (!isLudoMode(mode)) return c.json({ error: 'Invalid match mode' }, 400)

  const cfg = await loadLudoConfig(c.env)
  const prize = ludoPrize(cfg, mode)
  const path = `USERS/${user.uid}/ludo/matches/${matchId}`

  /* the session copy can be seconds old — read the wallet before charging */
  const fresh = (await dbGet<UserNode>(c.env, `USERS/${user.uid}`)) || user
  const split = walletSplit(fresh)
  if (split.total < cfg.entryFee)
    return c.json(
      { error: `You need at least ₹${cfg.entryFee} to enter`, code: 'balance', balance: split.total },
      400,
    )

  /* one match id = one entry fee. An existing node means the fee is already
     paid for that match (a double tap, a retry or a second tab), so the wallet
     is never touched again — the caller just gets the match it already owns. */
  const existing = await dbGet<any>(c.env, path)
  if (existing) {
    if (existing.status === 'active')
      return c.json({
        ok: true,
        replay: true,
        matchId,
        fee: Number(existing.fee) || cfg.entryFee,
        prize: Number(existing.prize) || prize,
        balance: split.total,
      })
    return c.json({ error: 'That match is already finished', code: 'match-done' }, 409)
  }

  /* the ETag write is the lock for two requests racing the same id: only the
     first PUT lands, the other one sees a stale ETag and loses */
  const claimed = await dbPutConditional(c.env, path, {
    mode,
    fee: cfg.entryFee,
    prize,
    status: 'active',
    startedAt: Date.now(),
  })
  if (!claimed) {
    const raced = await dbGet<any>(c.env, path)
    if (raced && raced.status === 'active')
      return c.json({
        ok: true,
        replay: true,
        matchId,
        fee: Number(raced.fee) || cfg.entryFee,
        prize: Number(raced.prize) || prize,
        balance: split.total,
      })
    return c.json({ error: 'That match is already finished', code: 'match-done' }, 409)
  }

  const plan = ludoDebitPlan(split, cfg.entryFee)
  const txId = genTxId()
  try {
    const patch: Record<string, any> = {
      [`USERS/${user.uid}/balance/total`]: increment(-cfg.entryFee),
      [`USERS/${user.uid}/stats/totalWager`]: increment(cfg.entryFee),
      [`USERS/${user.uid}/stats/bets`]: increment(1),
      [`USERS/${user.uid}/ludo/lastMatchId`]: matchId,
      [`${path}/txId`]: txId,
      [`USERS/${user.uid}/transactions/${txId}`]: {
        type: 'bet',
        source: 'Ludo',
        label: `${mode}-player match`,
        amount: -cfg.entryFee,
        status: 'placed',
        matchId,
        mode,
        time: Date.now(),
        uid: user.uid,
        balanceAfter: split.total - cfg.entryFee,
      },
    }
    if (plan.main > 0) patch[`USERS/${user.uid}/balance/main`] = increment(-plan.main)
    if (plan.promo > 0) patch[`USERS/${user.uid}/balance/promo`] = increment(-plan.promo)
    await dbPatch(c.env, patch)
  } catch (err) {
    /* the fee never moved — release the match so the player can try again */
    await dbDelete(c.env, path).catch(() => {})
    return c.json({ error: 'Could not start the match, please try again' }, 500)
  }

  return c.json({
    ok: true,
    matchId,
    mode,
    fee: cfg.entryFee,
    prize,
    txId,
    balance: split.total - cfg.entryFee,
    main: Math.max(0, split.main - plan.main),
    promo: Math.max(0, split.promo - plan.promo),
  })
})

/** POST /api/ludo/finish — close a match: win / lose / quit.
 *
 *  One match costs exactly ONE entry fee, and that fee is taken at /enter. This
 *  endpoint therefore never debits again: a win credits the pool, a loss or a
 *  quit just forfeits the stake that is already gone (the ledger keeps the single
 *  -fee entry and records how it ended).
 *
 *  The match record keeps its own final status, so a repeated call (a retry, a
 *  resumed board after a reload, or a racing beacon) is answered straight from
 *  the record and can never pay a prize twice. */
apiApp.post('/ludo/finish', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first', code: 'login' }, 401)

  const body = await c.req.json().catch(() => ({}) as any)
  const matchId = String(body.match_id || '')
  const result = String(body.result || '')
  if (!validLudoMatchId(matchId)) return c.json({ error: 'Invalid match id' }, 400)
  if (result !== 'win' && result !== 'lose' && result !== 'quit')
    return c.json({ error: 'Invalid result' }, 400)

  const path = `USERS/${user.uid}/ludo/matches/${matchId}`
  const match = await dbGet<any>(c.env, path)
  if (!match) return c.json({ error: 'Match not found' }, 404)

  const fresh = (await dbGet<UserNode>(c.env, `USERS/${user.uid}`)) || user
  const split = walletSplit(fresh)
  if (match.status !== 'active')
    return c.json({
      ok: true,
      replay: true,
      status: match.status,
      amount: Number(match.payout || 0),
      balance: split.total,
    })

  const cfg = await loadLudoConfig(c.env)
  const fee = Number(match.fee) || cfg.entryFee
  const mode = isLudoMode(match.mode) ? match.mode : 2
  const prize = Number(match.prize) || ludoPrize(cfg, mode)
  const txId = genTxId()
  const patch: Record<string, any> = { [`${path}/status`]: result, [`${path}/endedAt`]: Date.now() }

  let amount = 0
  let balanceAfter = split.total
  /* the stake that /enter already took — its ledger entry is turned into the
     match outcome instead of writing a second debit for the same money */
  const betTxId = String(match.txId || '')

  if (result === 'win') {
    /* the winner takes the pool — real money, so it can be withdrawn */
    amount = prize
    balanceAfter = split.total + prize
    patch[`USERS/${user.uid}/balance/total`] = increment(prize)
    patch[`USERS/${user.uid}/balance/main`] = increment(prize)
    patch[`USERS/${user.uid}/stats/totalWon`] = increment(prize)
    patch[`${path}/payout`] = prize
    if (betTxId) {
      patch[`USERS/${user.uid}/transactions/${betTxId}/status`] = 'won'
      patch[`USERS/${user.uid}/transactions/${betTxId}/wonAt`] = Date.now()
    }
    patch[`USERS/${user.uid}/transactions/${txId}`] = {
      type: 'ludo',
      source: 'Ludo',
      label: `${mode}-player match won`,
      amount: prize,
      status: 'won',
      matchId,
      time: Date.now(),
      uid: user.uid,
      balanceAfter,
    }
  } else {
    /* NO second debit: the entry fee left the wallet at /enter, so losing or
       quitting only forfeits the stake that is already gone. One match costs
       exactly one entry fee — the ledger keeps that single -fee entry and just
       records how it ended. */
    amount = 0
    balanceAfter = split.total
    patch[`USERS/${user.uid}/stats/totalLost`] = increment(fee)
    if (betTxId) {
      patch[`USERS/${user.uid}/transactions/${betTxId}/status`] =
        result === 'quit' ? 'quit' : 'lost'
      patch[`USERS/${user.uid}/transactions/${betTxId}/endedAt`] = Date.now()
      patch[`USERS/${user.uid}/transactions/${betTxId}/balanceAfter`] = balanceAfter
    } else {
      /* legacy match without a stake entry — record the forfeited fee */
      patch[`USERS/${user.uid}/transactions/${txId}`] = {
        type: 'ludo',
        source: 'Ludo',
        label: result === 'quit' ? 'Left a running match' : `${mode}-player match lost`,
        amount: -fee,
        status: result === 'quit' ? 'quit' : 'lost',
        matchId,
        time: Date.now(),
        uid: user.uid,
        balanceAfter,
      }
    }
  }

  await dbPatch(c.env, patch)
  return c.json({ ok: true, matchId, status: result, amount, balance: balanceAfter, txId })
})

/* ------------------------------------------------------------------ deposit */

apiApp.post('/deposit', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first' }, 401)

  const block = statusBlock(user)
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  const body = await c.req.json().catch(() => ({} as any))
  const amount = Math.floor(Number(body.amount) || 0)
  const limits = await loadLimits(c.env)
  if (amount < limits.depositMin)
    return c.json(
      { error: `Minimum deposit is ${money(limits.depositMin)}`, code: 'min-deposit' },
      400,
    )

  const txId = genTxId()
  const tx = {
    type: 'deposit',
    amount,
    method: String(body.method || 'UPI'),
    status: 'pending',
    time: Date.now(),
    uid: user.uid,
  }

  await dbPatch(c.env, {
    [`USERS/${user.uid}/transactions/${txId}`]: tx,
    [`depositRequests/${user.uid}/${txId}`]: tx,
    [`USERS/${user.uid}/pending/depositCount`]: increment(1),
  })

  return c.json({ ok: true, txId, message: 'Deposit request submitted! Balance updates after verification.' })
})

/* ------------------------------------------------------------------ deposit · live UPI */

/** POST /api/deposit/order — opens a REAL UPI order at the gateway.
 *  The merchant API key never leaves the server: the browser only receives the
 *  QR image URL, the UPI intent link and the order id it has to poll. */
apiApp.post('/deposit/order', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first' }, 401)

  const block = statusBlock(user)
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  const body = await c.req.json().catch(() => ({} as any))
  const amount = Math.floor(Number(body.amount) || 0)
  const limits = await loadLimits(c.env)
  if (amount < limits.depositMin)
    return c.json(
      { error: `Minimum deposit is ${money(limits.depositMin)}`, code: 'min-deposit' },
      400,
    )

  const pay = await loadPaymentConfig(c.env)
  if (!pay.enabled)
    return c.json(
      { error: 'Deposits are temporarily unavailable. Please try again later.', code: 'deposits-off' },
      503,
    )
  if (!famConfigured(c.env))
    return c.json(
      {
        error: 'The payment gateway is not configured yet. Please try again later.',
        code: 'gateway-missing',
      },
      503,
    )

  /* the callback + redirect always point back at whatever host served this
     request, so the same code works on workers.dev and on the custom domain */
  const origin = new URL(c.req.url).origin
  const profile = user.profile || {}
  const created = await createFamOrder(c.env, {
    amount,
    name: String(profile.name || ''),
    email: String(profile.email || ''),
    phone: String(user.auth?.phone || ''),
    webhookUrl: `${origin}/api/payment/webhook`,
    redirectUrl: `${origin}/account/deposit`,
  })
  if (!created.ok) return c.json({ error: created.error, code: created.code }, created.status as any)

  const d = created.data
  const txId = genTxId()
  const now = Date.now()
  const expiresAt = now + PAYMENT_WINDOW_SECONDS * 1000
  const payable = Math.max(0, Number(d.payableAmount) || amount)

  const order: PaymentOrder = {
    orderId: d.orderId,
    uid: user.uid,
    txId,
    amount,
    payable,
    status: 'pending',
    provider: 'famgateway',
    method: 'UPI',
    createdAt: now,
    expiresAt,
    counted: true,
  }
  const tx = {
    type: 'deposit',
    amount,
    method: 'UPI',
    status: 'pending',
    time: now,
    uid: user.uid,
    orderId: d.orderId,
    payable,
    label: 'UPI QR',
  }

  await dbPatch(c.env, {
    [`USERS/${user.uid}/transactions/${txId}`]: tx,
    [`depositRequests/${user.uid}/${txId}`]: tx,
    [`USERS/${user.uid}/pending/depositCount`]: increment(1),
    [orderPath(d.orderId)]: order,
  })

  return c.json({
    ok: true,
    txId,
    orderId: d.orderId,
    qrUrl: d.qrUrl,
    checkoutUrl: d.checkoutUrl,
    upiIntent: d.upiIntent,
    upiId: d.upiId,
    amount,
    payableAmount: payable,
    expiresAt,
    expiresAtIst: d.expiresAtIst,
    secondsLeft: PAYMENT_WINDOW_SECONDS,
  })
})
/** GET /api/deposit/status?order_id=… — authoritative check (server → gateway)
 *  and the place where a confirmed payment is credited — exactly once. */
apiApp.get('/deposit/status', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first' }, 401)

  const orderId = String(c.req.query('order_id') || '')
  const order = await getPaymentOrder(c.env, orderId)
  if (!order) return c.json({ error: 'Payment order not found', code: 'not-found' }, 404)
  if (order.uid !== user.uid)
    return c.json({ error: 'This payment order belongs to another account', code: 'forbidden' }, 403)

  /* live wallet snapshot for the success screen (balance + both buckets) */
  const snapshot = async () => {
    const fresh = await dbGet<UserNode>(c.env, `USERS/${user.uid}`)
    const u: any = fresh || user
    return {
      balance: { ...(u.balance || {}), total: totalBalance(u) },
      wallet: walletSplit(u),
      walletTotals: walletTotals(u),
    }
  }

  if (order.status === 'success')
    return c.json({
      ok: true,
      status: 'success',
      credited: Number(order.creditedAmount || 0) > 0,
      pendingApproval: order.credited === false,
      amount: Number(order.creditedAmount || order.amount) || order.amount,
      payableAmount: order.payable,
      utr: order.utr || '',
      senderName: order.senderName || '',
      ...(await snapshot()),
    })

  /* a blocked duplicate is final: that bank reference already paid another
     order, so this one must never be settled (ask again is pointless) */
  if (order.status === 'duplicate')
    return c.json({ ok: true, status: 'duplicate', payableAmount: order.payable })

  const live = await verifyFamOrder(c.env, order.orderId)

  /* the gateway is the money authority: a success settles even when we had
     already closed the order (the user paid the old QR from a screenshot) */
  if (live.status === 'success') {
    const settled = await settlePayment(c.env, {
      orderId: order.orderId,
      utr: live.utr,
      senderName: live.senderName,
      paidAmount: live.amount,
      paidAt: live.paidAt,
    })
    if (settled.reason === 'duplicate-utr')
      return c.json(
        {
          error: 'This bank reference was already used for another deposit.',
          code: 'duplicate-utr',
        },
        409,
      )

    /* the money write failed midway — keep the browser waiting, the next poll
       simply runs the (idempotent) settle again */
    if (settled.reason === 'write-failed')
      return c.json({
        ok: true,
        status: 'pending',
        retry: true,
        payableAmount: order.payable,
        secondsLeft: Math.max(0, Math.round((Number(order.expiresAt || 0) - Date.now()) / 1000)),
      })

    return c.json({
      ok: true,
      status: 'success',
      /* `already-settled` means the webhook (or a parallel poll) credited it a
         moment ago — the money IS in the wallet, so never tell the user to wait
         for verification in that case */
      credited: settled.reason === 'settled' || settled.reason === 'already-settled',
      pendingApproval: settled.reason === 'pending-approval',
      amount: Number(settled.amount || order.amount) || order.amount,
      payableAmount: order.payable,
      utr: live.utr,
      senderName: live.senderName,
      ...(await snapshot()),
    })
  }

  /* an order we already closed stays closed — no point asking again */
  if (order.status === 'expired')
    return c.json({ ok: true, status: 'expired', payableAmount: order.payable })

  /* the gateway says expired, or the local 5-minute window is long gone */
  const gracePassed = Number(order.expiresAt || 0) > 0 && Date.now() > Number(order.expiresAt) + 5 * 60 * 1000
  if (live.status === 'expired' || gracePassed) {
    await expirePaymentOrder(c.env, order.orderId)
    return c.json({ ok: true, status: 'expired', payableAmount: order.payable })
  }

  return c.json({
    ok: true,
    status: 'pending',
    checked: live.status !== 'unknown',
    payableAmount: order.payable,
    expiresAt: order.expiresAt,
    secondsLeft: Math.max(0, Math.round((Number(order.expiresAt || 0) - Date.now()) / 1000)),
  })
})



/* ------------------------------------------------------------------ withdraw */
/** POST /api/deposit/cancel — the user closed the QR without paying. The gateway
 *  kills the session itself after 5 minutes; this keeps our own books clean
 *  (no transaction left hanging in "pending" forever). */
apiApp.post('/deposit/cancel', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first' }, 401)

  const body = await c.req.json().catch(() => ({} as any))
  const orderId = String(body.order_id || '')
  const order = await getPaymentOrder(c.env, orderId)
  if (!order) return c.json({ error: 'Payment order not found', code: 'not-found' }, 404)
  if (order.uid !== user.uid)
    return c.json({ error: 'This payment order belongs to another account', code: 'forbidden' }, 403)

  if (order.status === 'pending') await expirePaymentOrder(c.env, order.orderId)
  return c.json({ ok: true })
})

/* ------------------------------------------------------------------ gateway webhook */

/** POST /api/payment/webhook — FamGateway's own callback. The route is public
 *  (the gateway cannot log in) but the body is HMAC-SHA256 signed with the
 *  merchant key: a missing/incorrect `X-FamGateway-Signature` is a 401 and no
 *  money ever moves. This is the fast path — the browser poll is the safety net. */
apiApp.post('/payment/webhook', async (c) => {
  const raw = await c.req.text()
  const signature = c.req.header('x-famgateway-signature')
  if (!(await verifyFamSignature(c.env, raw, signature)))
    return c.json({ error: 'invalid signature' }, 401)

  let event: any = {}
  try {
    event = raw ? JSON.parse(raw) : {}
  } catch {
    return c.json({ error: 'invalid payload' }, 400)
  }

  const orderId = String(event?.order_id || '')
  if (!orderId) return c.json({ error: 'order_id missing' }, 400)

  const paid =
    String(event?.status || '').toLowerCase() === 'success' ||
    String(event?.event || '') === 'payment.success'
  if (!paid) return c.json({ ok: true, ignored: true })

  const settled = await settlePayment(c.env, {
    orderId,
    utr: event?.utr,
    senderName: event?.sender_name,
    paidAmount: Number(event?.amount) || 0,
    paidAt: event?.payment_time_ist,
  })

  return c.json({ ok: true, credited: settled.credited, reason: settled.reason })
})



apiApp.post('/withdraw', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first' }, 401)

  const block = statusBlock(user)
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  const body = await c.req.json().catch(() => ({} as any))
  const amount = Math.floor(Number(body.amount) || 0)
  const method = String(body.method || 'upi')

  const limits = await loadLimits(c.env)
  if (amount < limits.withdrawMin)
    return c.json(
      { error: `Minimum withdrawal is ${money(limits.withdrawMin)}`, code: 'min-withdraw' },
      400,
    )
  if (amount > limits.withdrawMax)
    return c.json(
      {
        error: `Maximum withdrawal is ${money(limits.withdrawMax)} at a time`,
        code: 'max-withdraw',
      },
      400,
    )

  /* ── the hold ────────────────────────────────────────────────────────────
     The money leaves the wallet the moment the request is created. A pending
     payout is not spendable, so the balance the player sees — and every game
     check (Ludo entry fee, bet, another withdrawal) — is already net of it.
     There is no "reserved but still visible" number to get stale.

     The payout empties the bonus wallet first, then main (the order the admin
     panel used before), and BOTH buckets are recorded on the request as `held`,
     so a rejection puts the money back exactly where it came from — see
     approveWithdraw / rejectWithdraw in the admin panel. */
  const fresh = (await dbGet<UserNode>(c.env, `USERS/${user.uid}`)) || user
  const split = walletSplit(fresh)
  if (amount > split.total)
    return c.json({ error: 'Insufficient balance', code: 'insufficient' }, 400)

  /* a double tap (or a retried request) must never hold the same money twice */
  const alreadyPending = Object.values<any>(fresh.transactions || {}).some(
    (t) =>
      t?.type === 'withdraw' &&
      String(t?.status || 'pending') === 'pending' &&
      Number(t?.amount) === amount &&
      Date.now() - Number(t?.time || 0) < 10000,
  )
  if (alreadyPending)
    return c.json({ error: 'That withdrawal is already pending', code: 'duplicate' }, 409)

  const fromPromo = Math.min(amount, split.promo)
  const fromMain = amount - fromPromo
  const held = { main: fromMain, promo: fromPromo }
  const balanceAfter = Math.max(0, split.total - amount)

  const details = body.details && typeof body.details === 'object' ? body.details : {}
  const txId = genTxId()
  const tx = {
    type: 'withdraw',
    amount,
    method,
    details,
    status: 'pending',
    time: Date.now(),
    uid: user.uid,
    /* where the money has to go back to if this request is rejected */
    held,
    balanceAfter,
  }

  const patch: Record<string, any> = {
    [`USERS/${user.uid}/transactions/${txId}`]: tx,
    [`withdrawRequests/${user.uid}/${txId}`]: tx,
    /* how much is still in flight (admin dashboard) — the money itself is
       already gone from the balance, so this is a status counter, not a hold */
    [`USERS/${user.uid}/pending/withdrawTotal`]: increment(amount),
    [`USERS/${user.uid}/balance/total`]: increment(-amount),
  }
  if (fromMain > 0) patch[`USERS/${user.uid}/balance/main`] = increment(-fromMain)
  if (fromPromo > 0) patch[`USERS/${user.uid}/balance/promo`] = increment(-fromPromo)
  await dbPatch(c.env, patch)

  return c.json({
    ok: true,
    txId,
    /* the new balance travels back with the answer, so the page can paint it
       without a second round-trip */
    balance: { total: balanceAfter, main: Math.max(0, split.main - fromMain) },
    message:
      'Withdrawal of ' +
      money(amount) +
      ' requested! ' +
      money(amount) +
      ' is on hold until it is paid.',
  })
})




/* ------------------------------------------------------------------ lucky wheel */

/** Prize table of the wheel — always 8 entries, matching the wheel face. */
function spinSegments(cfg: any): SpinSegment[] {
  const raw = Array.isArray(cfg?.segments) ? cfg.segments : []
  const list: SpinSegment[] = raw.length ? raw : DEFAULT_SPIN_CONFIG.segments
  return list.slice(0, 8).map((s: any, i: number) => ({
    index: Number(s?.index ?? i),
    label: String(s?.label ?? ''),
    amount: Math.max(0, Math.floor(Number(s?.amount) || 0)),
    weight: Math.max(0, Number(s?.weight) || 0),
    bonus: s?.bonus ? String(s.bonus) : undefined,
  }))
}

/** wheel state of the logged-in user (guest → canSpin false) */
apiApp.get('/spin', async (c) => {
  const user = c.get('user') as UserNode | null
  const cfg: any = await loadConfig(c.env, 'CONFIG/SPIN', DEFAULT_SPIN_CONFIG)
  const now = Date.now()
  const today = dayKeyAt(now)

  let state: any = {}
  if (user) state = (await dbGet(c.env, `USERS/${user.uid}/rewards/spin`)) || {}
  const claimedToday = Number(state.dayKey) === today
  const enabled = Number(cfg.enabled) !== 0

  return c.json({
    ok: true,
    loggedIn: !!user,
    enabled,
    dayKey: today,
    claimedToday,
    canSpin: !!user && enabled && !claimedToday,
    nextResetAt: nextResetAt(now),
    resetLabel: resetLabel(now),
    lastClaimAt: Number(state.lastClaimAt) || 0,
    lastSegment: state.lastSegment === undefined ? null : Number(state.lastSegment),
    lastLabel: String(state.lastLabel || ''),
    lastAmount: Number(state.lastAmount) || 0,
    totalWon: Number(state.totalWon) || 0,
    spins: Number(state.spins) || 0,
    segments: spinSegments(cfg),
  })
})

/** One spin per user per day. The SERVER picks the prize (weighted RNG in
 *  CONFIG/SPIN) and credits the balance instantly — the browser only animates
 *  the wheel to the segment it is told to stop on. Every win writes a
 *  transaction entry, which is what the balance history shows. */
apiApp.post('/spin', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first', code: 'login' }, 401)

  const block = statusBlock(user)
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  const cfg: any = await loadConfig(c.env, 'CONFIG/SPIN', DEFAULT_SPIN_CONFIG)
  if (Number(cfg.enabled) === 0)
    return c.json({ error: 'Lucky Wheel is temporarily unavailable', code: 'disabled' }, 403)

  const now = Date.now()
  const today = dayKeyAt(now)

  const state = (await dbGet(c.env, `USERS/${user.uid}/rewards/spin`)) || {}
  if (Number((state as any).dayKey) === today)
    return c.json(
      {
        error: 'Already Claimed!',
        code: 'already-claimed',
        nextResetAt: nextResetAt(now),
        resetLabel: resetLabel(now),
      },
      429
    )

  const seg = pickWeighted(spinSegments(cfg))
  const amount = Number(seg.amount) || 0
  const freeGame = seg.bonus === 'freeGame'
  const balanceBefore = totalBalance(user)

  const txId = genTxId()
  const tx: Record<string, any> = {
    type: freeGame ? 'bonus' : 'spin',
    source: 'Lucky Spin',
    label: seg.label,
    amount,
    segment: seg.index,
    status: amount > 0 ? 'won' : freeGame ? 'bonus' : 'no-win',
    time: now,
    uid: user.uid,
    balanceAfter: balanceBefore + amount,
  }

  const patch: Record<string, any> = {
    [`USERS/${user.uid}/rewards/spin/dayKey`]: today,
    [`USERS/${user.uid}/rewards/spin/lastClaimAt`]: now,
    [`USERS/${user.uid}/rewards/spin/lastSegment`]: seg.index,
    [`USERS/${user.uid}/rewards/spin/lastLabel`]: seg.label,
    [`USERS/${user.uid}/rewards/spin/lastAmount`]: amount,
    [`USERS/${user.uid}/rewards/spin/spins`]: increment(1),
    [`USERS/${user.uid}/transactions/${txId}`]: tx,
    [`SPIN/${today}/count`]: increment(1),
  }

  if (amount > 0) {
    patch[`USERS/${user.uid}/rewards/spin/totalWon`] = increment(amount)
    patch[`USERS/${user.uid}/balance/total`] = increment(amount)
    /* wheel winnings are a CLAIM — they belong to the 3rd-party wallet */
    patch[`USERS/${user.uid}/balance/promo`] = increment(amount)
    patch[`USERS/${user.uid}/stats/totalWon`] = increment(amount)
    patch[`SPIN/${today}/paid`] = increment(amount)
  }
  if (freeGame) patch[`USERS/${user.uid}/rewards/freeGames`] = increment(1)

  await dbPatch(c.env, patch)

  return c.json({
    ok: true,
    txId,
    segment: seg.index,
    label: seg.label,
    amount,
    freeGame,
    won: amount > 0,
    message:
      amount > 0
        ? `You won ${amount}!`
        : freeGame
          ? 'You won 1 Free Game!'
          : 'Better luck next time!',
    balance: { total: balanceBefore + amount },
    nextResetAt: nextResetAt(now),
    resetLabel: resetLabel(now),
  })
})


/* ------------------------------------------------------------------ daily login reward */

/** Streak state of the logged-in user. 4:00 AM IST is the global cutoff for
 *  every account: a claim on the very next reward day continues the streak,
 *  a missed day drops the user back to Day 1 automatically. */
apiApp.get('/daily', async (c) => {
  const user = c.get('user') as UserNode | null
  const cfg: any = await loadConfig(c.env, 'CONFIG/DAILY', DEFAULT_DAILY_CONFIG)
  const now = Date.now()
  const today = dayKeyAt(now)

  let state: any = {}
  if (user) state = (await dbGet(c.env, `USERS/${user.uid}/rewards/daily`)) || {}

  const lastKey = Number(state.lastClaimDayKey) || 0
  const stored = Number(state.streak) || 0
  /* the streak only survives if the last claim was today or yesterday */
  const streak = lastKey >= today - 1 ? stored : 0
  const claimedToday = lastKey === today
  const cycleDays = Number(cfg.cycleDays) || 7
  const unlockDay = Number(cfg.unlockDay) || 7
  const nextStreak = claimedToday ? streak : lastKey === today - 1 ? streak + 1 : 1
  const nextReward = streakRewardOf(cfg.streakRewards, Math.min(nextStreak, cycleDays))

  return c.json({
    ok: true,
    loggedIn: !!user,
    enabled: Number(cfg.enabled) !== 0,
    dayKey: today,
    day: cycleDay(streak, claimedToday, cycleDays),
    claimedToday,
    canClaim: !!user && Number(cfg.enabled) !== 0 && !claimedToday,
    streak,
    nextStreak,
    nextReward,
    unlockDay,
    cycleDays,
    unlocked: streak >= unlockDay,
    freeGames: Number(state.freeGames) || 0,
    totalClaims: Number(state.totalClaims) || 0,
    totalReward: Number(state.totalReward) || 0,
    nextResetAt: nextResetAt(now),
    resetLabel: resetLabel(now),
  })
})

apiApp.post('/daily', async (c) => {
  const user = c.get('user') as UserNode | null
  if (!user) return c.json({ error: 'Please log in first', code: 'login' }, 401)

  const block = statusBlock(user)
  if (block) return c.json({ error: block.message, code: block.code }, 403)

  const cfg: any = await loadConfig(c.env, 'CONFIG/DAILY', DEFAULT_DAILY_CONFIG)
  if (Number(cfg.enabled) === 0)
    return c.json({ error: 'Daily reward is temporarily unavailable', code: 'disabled' }, 403)

  const now = Date.now()
  const today = dayKeyAt(now)
  const state: any = (await dbGet(c.env, `USERS/${user.uid}/rewards/daily`)) || {}

  const lastKey = Number(state.lastClaimDayKey) || 0
  const stored = Number(state.streak) || 0

  if (lastKey === today)
    return c.json(
      {
        error: 'Already Claimed!',
        code: 'already-claimed',
        streak: stored,
        nextResetAt: nextResetAt(now),
        resetLabel: resetLabel(now),
      },
      429
    )

  /* yesterday → streak + 1, otherwise the streak broke and restarts at Day 1 */
  const continued = lastKey === today - 1
  const streak = continued ? stored + 1 : 1
  const cycleDays = Number(cfg.cycleDays) || 7
  const unlockDay = Number(cfg.unlockDay) || 7
  const rewards = (cfg.streakRewards || {}) as Record<string, number>
  const day = cycleDay(streak, true, cycleDays)
  const unlocked = streak >= unlockDay
  /* after the 7-day unlock every further day keeps paying the day-7 reward */
  const rewardAmount = streakRewardOf(rewards, unlocked ? cycleDays : streak)
  const freeGames = unlocked ? Math.max(0, Number(cfg.freeGamePerDay) || 0) : 0
  const balanceBefore = totalBalance(user)

  const txId = genTxId()
  const tx: Record<string, any> = {
    type: 'daily',
    source: 'Daily Login Reward',
    label: `Day ${day} streak`,
    amount: rewardAmount,
    status: rewardAmount > 0 ? 'won' : 'streak',
    streak,
    time: now,
    uid: user.uid,
    balanceAfter: balanceBefore + rewardAmount,
  }

  const patch: Record<string, any> = {
    [`USERS/${user.uid}/rewards/daily/streak`]: streak,
    [`USERS/${user.uid}/rewards/daily/lastClaimDayKey`]: today,
    [`USERS/${user.uid}/rewards/daily/lastClaimAt`]: now,
    [`USERS/${user.uid}/rewards/daily/cycleDay`]: day,
    [`USERS/${user.uid}/rewards/daily/totalClaims`]: increment(1),
    [`USERS/${user.uid}/transactions/${txId}`]: tx,
    [`DAILY/${today}/claims`]: increment(1),
  }

  if (rewardAmount > 0) {
    patch[`USERS/${user.uid}/rewards/daily/totalReward`] = increment(rewardAmount)
    patch[`USERS/${user.uid}/balance/total`] = increment(rewardAmount)
    /* daily reward is a CLAIM — it belongs to the 3rd-party wallet */
    patch[`USERS/${user.uid}/balance/promo`] = increment(rewardAmount)
    patch[`DAILY/${today}/paid`] = increment(rewardAmount)
  }
  if (freeGames > 0) patch[`USERS/${user.uid}/rewards/freeGames`] = increment(freeGames)

  await dbPatch(c.env, patch)

  return c.json({
    ok: true,
    txId,
    streak,
    day,
    continued,
    unlocked,
    rewardAmount,
    freeGames,
    streakBroken: !continued && stored > 0,
    message: unlocked
      ? `Day ${streak} complete — ${freeGames} Free Game added!`
      : `Day ${streak} of ${unlockDay} marked!`,
    balance: { total: balanceBefore + rewardAmount },
    nextResetAt: nextResetAt(now),
    resetLabel: resetLabel(now),
  })
})

/* ------------------------------------------------------------------ language */

const LANGS = ['en', 'hi', 'ta', 'te']

/** The chosen language is part of the user's own record — it follows the
 *  account on every device and is restored on the next visit. */
apiApp.post('/language', async (c) => {
  const body = await c.req.json().catch(() => ({} as any))
  const language = String(body.language || '')
    .trim()
    .toLowerCase()
  if (!LANGS.includes(language)) return c.json({ error: 'Unsupported language' }, 400)

  const user = c.get('user') as UserNode | null
  if (!user)
    return c.json({ ok: true, saved: false, language, message: 'Language saved on this device' })

  await dbPatch(c.env, { [`USERS/${user.uid}/profile/language`]: language })
  return c.json({ ok: true, saved: true, language, message: 'Language saved' })
})

