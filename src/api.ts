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
import { walletSplit, walletTotals } from './lib/wallet'

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
  return c.json({
    ok: true,
    spin,
    daily,
    withdraw: { min: limits.withdrawMin, max: limits.withdrawMax, quick: limits.withdrawQuick },
    deposit: { min: limits.depositMin },
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
  return c.json({ ok: true, uid, message: 'Account created successfully!', user: safeUser({ ...user, uid }) })
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
  return c.json({ ok: true, message: 'Logged in successfully!', user: safeUser({ ...user, uid: String(uid) }) })
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
    balance: u.balance || { total: 0, deposit: 0, withdraw: 0 },
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

  /* normalise to strict 0 / 1 so the client only has to check truthiness */
  const normalised: Record<string, number> = {}
  for (const [k, v] of Object.entries(games)) normalised[k] = Number(v) ? 1 : 0

  return c.json({ ok: true, games: normalised, resetAt: Date.now() })
})

/** The three home "Top Games" tiles — their own switch inside GAMES. */
export const TOP_GAME_KEYS = ['ludo', 'chicken', 'fruit-slasher']

/** Live status of the given game keys (used on every tap, no stale cache). */
apiApp.get('/games/status', async (c) => {
  const wanted = String(c.req.query('keys') || '')
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean)
  const games = (await dbGet<Record<string, any>>(c.env, 'GAMES')) || {}
  const status: Record<string, number> = {}
  for (const key of wanted) status[key] = Number((games as any)[key]) ? 1 : 0
  return c.json({ ok: true, status })
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

/* ------------------------------------------------------------------ withdraw */

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

  /* server-side balance check — pending requests already count against it */
  const total = Number(user.balance?.total || 0)
  const reserved = Number(user.pending?.withdrawTotal || 0)
  if (amount > total - reserved)
    return c.json({ error: 'Insufficient balance', code: 'insufficient' }, 400)

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
  }

  await dbPatch(c.env, {
    [`USERS/${user.uid}/transactions/${txId}`]: tx,
    [`withdrawRequests/${user.uid}/${txId}`]: tx,
    [`USERS/${user.uid}/pending/withdrawTotal`]: increment(amount),
  })

  return c.json({
    ok: true,
    txId,
    message: 'Withdrawal of ' + money(amount) + ' requested! Wait for approval.',
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
  const balanceBefore = Number(user.balance?.total || 0)

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
  const balanceBefore = Number(user.balance?.total || 0)

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

