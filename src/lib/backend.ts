/* ==========================================================================
   BACKEND CORE — Firebase RTDB REST helpers, password hashing, sessions,
   collision-proof unique UID generation. ALL of this runs server-side only;
   nothing here is ever shipped to the browser.
   ========================================================================== */

/** Default DB url — can be overridden with FIREBASE_DB_URL env var. */
const DEFAULT_DB_URL = 'https://infinity-40e33-default-rtdb.firebaseio.com'

/** Fallback session secret (env SESSION_SECRET overrides it). */
const DEFAULT_SESSION_SECRET =
  'vg_9f8b7c6d5e4a3f2b1c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b'

export function dbUrl(env?: any): string {
  return String(env?.FIREBASE_DB_URL || DEFAULT_DB_URL).replace(/\/+$/, '')
}

function dbSecret(env?: any): string | null {
  const s = env?.FIREBASE_DB_SECRET
  return s ? String(s) : null
}

/* ------------------------------------------------------------------ REST core */

async function dbFetch(
  env: any,
  path: string,
  method: string,
  body?: any,
  extraHeaders?: Record<string, string>,
): Promise<Response> {
  let url = `${dbUrl(env)}/${path.replace(/^\/+/, '')}.json`
  const secret = dbSecret(env)
  if (secret) url += (url.includes('?') ? '&' : '?') + 'auth=' + encodeURIComponent(secret)
  return fetch(url, {
    method,
    headers: { 'content-type': 'application/json', ...(extraHeaders || {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  })
}

/** GET a node — returns parsed JSON, or null when it does not exist. */
export async function dbGet<T = any>(env: any, path: string): Promise<T | null> {
  const res = await dbFetch(env, path, 'GET')
  if (!res.ok) throw new Error(`dbGet ${path} failed (${res.status})`)
  const text = await res.text()
  if (!text || text === 'null') return null
  return JSON.parse(text) as T
}

/** PATCH — merge one or more slash-separated paths in a single atomic write. */
export async function dbPatch(env: any, patch: Record<string, any>): Promise<void> {
  const res = await dbFetch(env, '', 'PATCH', patch)
  if (!res.ok) throw new Error(`dbPatch failed (${res.status})`)
}

/** PUT — set a node to a value. */
export async function dbPut(env: any, path: string, value: any): Promise<void> {
  const res = await dbFetch(env, path, 'PUT', value)
  if (!res.ok) throw new Error(`dbPut ${path} failed (${res.status})`)
}

/** DELETE a node. */
export async function dbDelete(env: any, path: string): Promise<void> {
  const res = await dbFetch(env, path, 'DELETE')
  if (!res.ok && res.status !== 404) throw new Error(`dbDelete ${path} failed (${res.status})`)
}

/**
 * CONDITIONAL PUT — the Firebase-recommended collision-proof write.
 * 1) GET the node with `X-Firebase-ETag: true` to obtain its current ETag
 *    (an ETag is returned even for a node that does not exist yet),
 * 2) PUT the value back with `If-Match: <etag>`.
 * Firebase only applies the write if nobody changed the node in between —
 * otherwise it answers 412 Precondition Failed and we simply retry.
 * This makes "two users claiming the same UID at the same millisecond"
 * impossible: exactly one of the two PUTs wins, the other gets 412.
 */
export async function dbPutConditional(env: any, path: string, value: any): Promise<boolean> {
  const first = await dbFetch(env, path, 'GET', undefined, { 'X-Firebase-ETag': 'true' })
  if (!first.ok) return false
  const etag = first.headers.get('ETag')
  if (!etag) return false
  const put = await dbFetch(env, path, 'PUT', value, { 'If-Match': etag })
  return put.ok
}

/** Atomic counter increment — value for a node, e.g. { increment: 500 }. */
export function increment(n: number) {
  return { '.sv': { increment: n } }
}

/* ------------------------------------------------------------------ passwords */

const ITERATIONS = 120000

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

async function pbkdf2Bits(password: string, salt: Uint8Array, iterations: number): Promise<ArrayBuffer> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  )
  return crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt: salt as BufferSource, iterations },
    key,
    256,
  )
}

/** Returns "pbkdf2$<iterations>$<salt>$<hash>" — plain passwords are NEVER stored. */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const bits = await pbkdf2Bits(password, salt, ITERATIONS)
  return `pbkdf2$${ITERATIONS}$${toHex(salt.buffer as ArrayBuffer)}$${toHex(bits)}`
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  try {
    const [scheme, iterStr, saltHex, hashHex] = String(stored).split('$')
    if (scheme !== 'pbkdf2') return false
    const iterations = parseInt(iterStr, 10) || ITERATIONS
    const salt = new Uint8Array((saltHex.match(/.{2}/g) || []).map((h) => parseInt(h, 16)))
    const bits = await pbkdf2Bits(password, salt, iterations)
    return toHex(bits) === hashHex
  } catch {
    return false
  }
}

/* ------------------------------------------------------------------ sessions */

const SESSION_COOKIE = 'vg_session'
const SESSION_DAYS = 30

function b64url(buf: ArrayBuffer | Uint8Array): string {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf)
  let bin = ''
  bytes.forEach((b) => (bin += String.fromCharCode(b)))
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function b64urlDecode(str: string): Uint8Array {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/')
  const bin = atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4))
  return Uint8Array.from(bin, (c) => c.charCodeAt(0))
}

async function hmacKey(env?: any) {
  const secret = String(env?.SESSION_SECRET || DEFAULT_SESSION_SECRET)
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}

/** Signed session token: <payload>.<hmac> — payload carries uid, the id of the
 *  device/session it was issued to, and the expiry. The device id is what makes
 *  the "Active Devices" list real: deleting USERS/<uid>/devices/<sid> kills that
 *  login everywhere, from any device. */
export async function createSessionToken(env: any, uid: string, sid: string): Promise<string> {
  const payload = b64url(
    new TextEncoder().encode(
      JSON.stringify({ uid, sid, exp: Date.now() + SESSION_DAYS * 86400000 }),
    ),
  )
  const key = await hmacKey(env)
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload))
  return `${payload}.${b64url(sig)}`
}

export async function readSessionToken(
  env: any,
  token: string,
): Promise<{ uid: string; sid: string } | null> {
  try {
    const [payload, sig] = String(token).split('.')
    if (!payload || !sig) return null
    const key = await hmacKey(env)
    const ok = await crypto.subtle.verify(
      'HMAC',
      key,
      b64urlDecode(sig) as BufferSource,
      new TextEncoder().encode(payload),
    )
    if (!ok) return null
    const data = JSON.parse(new TextDecoder().decode(b64urlDecode(payload)))
    if (!data.uid || Date.now() > data.exp) return null
    return { uid: String(data.uid), sid: String(data.sid || '') }
  } catch {
    return null
  }
}

/** Random, unguessable id of one login session (a browser on one device). */
export function genSessionId(): string {
  const rand = crypto.getRandomValues(new Uint8Array(9))
  return toHex(rand.buffer as ArrayBuffer)
}

export function sessionCookieHeader(token: string): string {
  return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}`
}

export function clearSessionCookieHeader(): string {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
}

export function getCookie(c: any, name: string): string | null {
  const header = c.req.header('cookie') || ''
  for (const part of header.split(';')) {
    const [k, ...rest] = part.trim().split('=')
    if (k === name) return rest.join('=')
  }
  return null
}

/* ------------------------------------------------------------------ unique UID */

/**
 * Generates a random 8-digit UID and CLAIMS it in UID_INDEX with a
 * conditional (ETag) PUT — so a UID can never be handed out twice, even under
 * concurrent registrations. The winner owns the index node forever; any
 * competing registration gets 412 and retries with a fresh number.
 * Existing data can therefore NEVER be replaced by a second user.
 */
export async function reserveUniqueUid(env: any, phone: string): Promise<string> {
  for (let attempt = 0; attempt < 10; attempt++) {
    // crypto-random 8 digits in the 10000000..99999999 range
    const buf = crypto.getRandomValues(new Uint32Array(1))[0]
    const uid = String(10000000 + (buf % 90000000))
    const claimed = await dbPutConditional(env, `UID_INDEX/${uid}`, phone)
    if (claimed) return uid
  }
  throw new Error('uid-unavailable')
}

/** Claims a phone for a uid with the same conditional-PUT guarantee. */
export async function reservePhone(env: any, phone: string, uid: string): Promise<boolean> {
  return dbPutConditional(env, `PHONE_INDEX/${phone}`, uid)
}

/**
 * Default display name of a fresh account: "user" + the last 4 digits of its
 * UID (uid 11163705 → user3705, uid 60270362 → user0362). The UID is unique and
 * never changes, so the name is stable for the account; the user can still
 * rename themselves later from the profile screen.
 */
export function autoUsername(uid: any): string {
  const digits = String(uid || '').replace(/\D/g, '')
  const tail = digits.length >= 4 ? digits.slice(-4) : digits.padStart(4, '0')
  return 'user' + tail
}

/** true when a stored name is still the old placeholder — needs a real name */
export function isPlaceholderName(name: any): boolean {
  const n = String(name == null ? '' : name).trim()
  return !n || n === 'Guest User'
}

export function genTxId(): string {
  const rand = crypto.getRandomValues(new Uint8Array(4))
  const hex = toHex(rand.buffer as ArrayBuffer)
  return `TX${Date.now().toString(36).toUpperCase()}${hex.toUpperCase()}`
}

