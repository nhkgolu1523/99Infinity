/* ==========================================================================
   WINGO — the colour-prediction lottery: period math, the payout table and the
   server-side result generator.

   The rules are the original WinGo engine's, number for number:

     • a period is fixed WALL-CLOCK time (1 / 3 / 5 / 10 minutes), so every
       player everywhere is in the SAME round with the SAME countdown — the
       browser never counts on its own clock, it counts to a server timestamp;
     • a round's number is DECIDED AND WRITTEN THE MOMENT THE ROUND STARTS, into
       GAME_RESULTS/WINGO/<MODE>/<issue>. The value read when the round ends is
       therefore the value that was always there — nobody can move it afterwards
       (this generator never overwrites a value that already exists, so a manual
       edit in the Firebase console is the one and only truth);
     • 2% house fee: realAmount = stake × 0.98, and a winning bet pays
       stake × 0.98 × multiplier;
     • payouts: number 9× · red/green 2× (1.5× when the number is 0/5, because
       those two carry violet as well) · violet 4.5× · Big 2× (5-9) ·
       Small 2× (0-4).

   Every money rule lives in CONFIG/WINGO, so the admin can re-price the game
   from Firebase without a redeploy — the page and the API both read the numbers
   from here, so the price on screen can never disagree with the price charged.
   ========================================================================== */

import { dbGet, dbPatch, dbPut, increment } from './backend'
import { walletSplit } from './wallet'

export type WingoMode = 1 | 2 | 3 | 4

export type WingoType = {
  typeID: WingoMode
  typeName: string
  /** seconds per period */
  iv: number
  /** issue sequence marker (the original app's, kept so ids look identical) */
  seq: string
  /** zero-padding of the in-day period index */
  len: number
  /** seconds before the end during which betting is closed ("draw") */
  draw: number
  sort: number
  /** the stake options offered per single bet — 1|10|100|1000 */
  scope: string
  /** the quantity shortcuts — X1|X5|X10|X20|X50|X100 */
  betMultiple: string
}

/* Verbatim from the original engine (wingo-engine.js → TYPES) except for `draw`,
   which is the only rule we changed on purpose: betting closes 5 SECONDS before a
   period ends (the original shipped 15), so a player can keep betting 55 of every
   60 seconds. The durations MUST stay in step with the labels:
   1 → Win Go 1Min, 2 → 3Min, 3 → 5Min, 4 → 10Min. */
export const WINGO_TYPES: Record<WingoMode, WingoType> = {
  4: { typeID: 4, iv: 600, seq: '10004', len: 4, draw: 5, sort: 4, typeName: 'Win Go 10Min', scope: '1|10|100|1000', betMultiple: '1|5|10|20|50|100' },
  1: { typeID: 1, iv: 60, seq: '10001', len: 4, draw: 5, sort: 3, typeName: 'Win Go 1Min', scope: '1|10|100|1000', betMultiple: '1|5|10|20|50|100' },
  2: { typeID: 2, iv: 180, seq: '100020', len: 3, draw: 5, sort: 2, typeName: 'Win Go 3Min', scope: '1|10|100|1000', betMultiple: '1|5|10|20|50|100' },
  3: { typeID: 3, iv: 300, seq: '10101', len: 4, draw: 5, sort: 1, typeName: 'Win Go 5Min', scope: '1|10|100|1000', betMultiple: '1|5|10|20|50|100' },
}

/** The tab order the original app shows (10Min first, then 1 / 3 / 5). */
export const WINGO_ORDER: WingoMode[] = [4, 1, 2, 3]

/** The Firebase branch this game owns. Nothing outside it is ever touched. */
export const WINGO_RESULT_BRANCH = 'GAME_RESULTS/WINGO'

/** mode → the node name under GAME_RESULTS/WINGO (the original's naming). */
export const WINGO_MODE_KEY: Record<WingoMode, string> = {
  1: '1MIN',
  2: '3MIN',
  3: '5MIN',
  4: '10MIN',
}

/** How many finished results are kept per mode (the original's window). */
export const WINGO_KEEP = 50

/** How many result keys go into one Firebase write. Small multi-path writes are
 *  the reliable shape: a single 270-key PATCH can come back 200 and still drop
 *  the tail of the map, which is how a gap survives a "successful" backfill. */
const WINGO_WRITE_CHUNK = 50

/** How many results a first-ever run seeds, so history/trend are not empty. */
const WINGO_SEED = 50

export function isWingoMode(mode: any): mode is WingoMode {
  const n = Number(mode)
  return n === 1 || n === 2 || n === 3 || n === 4
}

export function wingoType(mode: WingoMode): WingoType {
  return WINGO_TYPES[mode] || WINGO_TYPES[1]
}
/* -------------------------------------------------------------- config */

export type WingoConfig = {
  /** smallest stake accepted (₹) */
  minBet: number
  /** largest single stake option — the cap on the `scope` chips (₹) */
  maxBet: number
  /** house fee, percent — 2% in the original */
  feePercent: number
  /** seconds before a period ends when betting closes */
  drawSeconds: number
  /** highest quantity the +/- stepper allows */
  quantityMax: number
  /** hard ceiling on ONE bet: maxBet × quantityMax unless overridden */
  maxStake: number
  /** the X1…X100 chips multiply the quantity instead of setting it */
  multiplierMultiplies: boolean
  /** how often the game screen re-reads state (ms) */
  pollMs: number
  /** per-mode on/off switch */
  modes: Record<string, boolean>
}

export const DEFAULT_WINGO_CONFIG: WingoConfig = {
  minBet: 1,
  maxBet: 1000,
  feePercent: 2,
  /* betting closes 5 seconds before the draw (the original shipped 15 — the
     admin can still re-price this in CONFIG/WINGO, see LEGACY_DRAW_SECONDS) */
  drawSeconds: 5,
  quantityMax: 100,
  maxStake: 100000,
  multiplierMultiplies: false,
  pollMs: 4000,
  modes: { '1': true, '2': true, '3': true, '4': true },
}

/** A stored CONFIG/WINGO that was hand-edited to nonsense must not break the
 *  game: every field falls back to the default, and the money fields are
 *  clamped to something playable (a fee above 50% or a max bet under the
 *  minimum would make the game unplayable, not "configured"). */
export function normaliseWingoConfig(raw: any): WingoConfig {
  const num = (v: any, fallback: number, min: number, max: number) => {
    const n = Number(v)
    if (!Number.isFinite(n)) return fallback
    return Math.min(max, Math.max(min, n))
  }
  const minBet = num(raw?.minBet, DEFAULT_WINGO_CONFIG.minBet, 1, 100000)
  const maxBet = Math.max(minBet, num(raw?.maxBet, DEFAULT_WINGO_CONFIG.maxBet, 1, 10000000))
  const quantityMax = Math.round(num(raw?.quantityMax, DEFAULT_WINGO_CONFIG.quantityMax, 1, 10000))
  const modes: Record<string, boolean> = {}
  for (const m of WINGO_ORDER) {
    /* Firebase stores numeric keys 1-4 as an ARRAY, so `modes[1]` and the
       string form both have to work. The `m1`…`m4` aliases are accepted too,
       because an array in the console gives no clue which index is 1Min — the
       admin panel writes the numeric keys, a hand-edit can use either. */
    const v =
      raw?.modes?.[String(m)] ?? raw?.modes?.[m] ?? raw?.modes?.['m' + m]
    modes[String(m)] = v === undefined || v === null ? true : !!v
  }
  return {
    minBet,
    maxBet,
    feePercent: num(raw?.feePercent, DEFAULT_WINGO_CONFIG.feePercent, 0, 50),
    drawSeconds: Math.round(num(raw?.drawSeconds, DEFAULT_WINGO_CONFIG.drawSeconds, 1, 300)),
    quantityMax,
    maxStake: Math.max(maxBet, num(raw?.maxStake, maxBet * quantityMax, maxBet, 100000000)),
    multiplierMultiplies: !!raw?.multiplierMultiplies,
    pollMs: Math.round(num(raw?.pollMs, DEFAULT_WINGO_CONFIG.pollMs, 1500, 60000)),
    modes,
  }
}

const CACHE_TTL = 60 * 1000
let cached: { at: number; value: WingoConfig } | null = null

/** The draw window this game shipped with before the 5-second rule. A stored
 *  CONFIG/WINGO still holding it is treated as "never configured" and moved to
 *  the current default — the old value was never a decision, just the default. */
export const LEGACY_DRAW_SECONDS = 15

/** CONFIG/WINGO, seeded with the defaults on the very first read (same pattern
 *  as the wheel, the daily reward and Ludo). */
export async function loadWingoConfig(env: any): Promise<WingoConfig> {
  if (cached && Date.now() - cached.at < CACHE_TTL) return cached.value
  let stored: any = null
  try {
    stored = await dbGet(env, 'CONFIG/WINGO')
  } catch {
    stored = null
  }
  if (!stored || typeof stored !== 'object') {
    try {
      await dbPut(env, 'CONFIG/WINGO', DEFAULT_WINGO_CONFIG as any)
    } catch {
      /* best effort — the in-memory default is still correct */
    }
    cached = { at: Date.now(), value: DEFAULT_WINGO_CONFIG }
    return DEFAULT_WINGO_CONFIG
  }
  const value = normaliseWingoConfig(stored)
  /* ONE-TIME MIGRATION: the 15-second window the game used to ship with is
     replaced by the 5-second rule (betting open until 55s of every minute).
     The old value was the default, never a decision, so it is corrected here —
     and written back once — so the countdown the player sees and the
     server-side bet check can never disagree. A value an admin typed on
     purpose (say 10) is left exactly as it is. */
  if (value.drawSeconds === LEGACY_DRAW_SECONDS) {
    const migrated = normaliseWingoConfig({ ...stored, drawSeconds: DEFAULT_WINGO_CONFIG.drawSeconds })
    try {
      await dbPatch(env, { 'CONFIG/WINGO/drawSeconds': DEFAULT_WINGO_CONFIG.drawSeconds })
    } catch {
      /* best effort — the value returned below is 5 either way */
    }
    cached = { at: Date.now(), value: migrated }
    return migrated
  }
  cached = { at: Date.now(), value }
  return value
}

/** The stake options of a mode, as numbers (the chips on the bet slip). */
export function wingoScope(mode: WingoMode): number[] {
  return wingoType(mode)
    .scope.split('|')
    .map((s) => Math.round(Number(s)))
    .filter((n) => Number.isFinite(n) && n > 0)
}

/** The quantity shortcuts of a mode, as numbers (the X1…X100 chips). */
export function wingoMultiples(mode: WingoMode): number[] {
  return wingoType(mode)
    .betMultiple.split('|')
    .map((s) => Math.round(Number(s)))
    .filter((n) => Number.isFinite(n) && n > 0)
}

/** Bet id generated by the browser — the idempotency key of one paid bet. */
export function validWingoOrderId(id: any): boolean {
  return /^[A-Za-z0-9_-]{6,48}$/.test(String(id || ''))
}

/** Two-decimal money, the engine's own rounding (never a float tail). */
export function r2(v: any): number {
  return Math.round(Number(v || 0) * 100) / 100
}

/* ------------------------------------------------------- period / issue */

function pad(n: number | string, len: number): string {
  let s = String(n)
  while (s.length < len) s = '0' + s
  return s
}

/** The issue id of the period starting at `startMs` — `YYYYMMDD` + sequence +
 *  the in-day period index, exactly as the original app builds it (e.g.
 *  20261003 + 10001 + 0042 for the 42nd minute of the day).
 *
 *  The date parts are always computed in IST (UTC+5:30), never in the runtime's
 *  own timezone: the cron trigger that decides a round runs inside a Cloudflare
 *  Worker (UTC) while the screen and the dev server run in IST, and one period
 *  must have ONE id everywhere — otherwise the history, the bets and the
 *  results stop lining up the moment the writer's timezone differs. */
export const WINGO_TZ_OFFSET_MS = 5.5 * 60 * 60 * 1000

export function wingoIssue(mode: WingoMode, startMs: number): string {
  const c = wingoType(mode)
  const d = new Date(startMs + WINGO_TZ_OFFSET_MS)
  const y = d.getUTCFullYear()
  const mo = d.getUTCMonth()
  const da = d.getUTCDate()
  /* IST midnight of the id's own date, in epoch milliseconds */
  const dayStart = Date.UTC(y, mo, da) - WINGO_TZ_OFFSET_MS
  const idx = Math.floor((startMs - dayStart) / (c.iv * 1000)) + 1
  return (
    String(y) +
    pad(mo + 1, 2) +
    pad(da, 2) +
    c.seq +
    pad(idx, c.len)
  )
}

export type WingoPeriod = { start: number; end: number; issue: string }

/** The period `ms` falls in. Wall-clock-aligned, so every device is in the same
 *  round — no per-user countdown, no drift. */
export function wingoPeriod(mode: WingoMode, ms: number): WingoPeriod {
  const iv = wingoType(mode).iv * 1000
  const start = Math.floor(ms / iv) * iv
  return { start, end: start + iv, issue: wingoIssue(mode, start) }
}

/** The period an issue id describes, or null when the id is not one of ours. */
export function wingoPeriodFromIssue(mode: WingoMode, issue: any): WingoPeriod | null {
  const c = wingoType(mode)
  const s = String(issue || '')
  if (s.length < 8 + c.seq.length + c.len) return null
  if (s.substr(8, c.seq.length) !== c.seq) return null
  const y = Number(s.substr(0, 4))
  const mo = Number(s.substr(4, 2)) - 1
  const da = Number(s.substr(6, 2))
  const idx = parseInt(s.substr(8 + c.seq.length), 10)
  if (!y || !Number.isFinite(idx) || idx < 1) return null
  /* IST midnight of the id's own date — the mirror of wingoIssue above */
  const start = Date.UTC(y, mo, da) - WINGO_TZ_OFFSET_MS + (idx - 1) * c.iv * 1000
  return { start, end: start + c.iv * 1000, issue: s }
}

/** Betting is open until `draw` seconds before the period ends — the original's
 *  45-seconds-to-order / 15-seconds-to-draw rule. */
export function wingoBettingOpen(mode: WingoMode, cfg: WingoConfig, now = Date.now()): boolean {
  const p = wingoPeriod(mode, now)
  return now < p.end - cfg.drawSeconds * 1000
}

/** colourOf(n): 0 → red+violet, 5 → green+violet, odd → green, even → red. */
export function wingoColourOf(n: number): string {
  if (n === 0) return 'red,violet'
  if (n === 5) return 'green,violet'
  return n % 2 === 1 ? 'green' : 'red'
}

/** sizeOf(n): 5-9 Big, 0-4 Small. */
export function wingoSizeOf(n: number): 'Big' | 'Small' {
  return n >= 5 ? 'Big' : 'Small'
}

/** Deterministic 5-digit "premium" code, so one period always shows the same
 *  value (the original's own hash). */
export function wingoPremiumOf(issue: any, n: number): string {
  const s = String(issue || '')
  let hsh = 7
  for (let i = 0; i < s.length; i++) hsh = (hsh * 31 + s.charCodeAt(i)) % 100000
  return String(10000 + ((hsh * 7 + n * 997) % 90000))
}

export type WingoRow = {
  issueNumber: string
  number: number
  colour: string
  size: string
  premium: string
  start: number
  end: number
}

export function wingoRow(mode: WingoMode, issue: any, n: number): WingoRow | null {
  const p = wingoPeriodFromIssue(mode, issue)
  if (!p) return null
  return {
    issueNumber: String(issue),
    number: n,
    colour: wingoColourOf(n),
    size: wingoSizeOf(n),
    premium: wingoPremiumOf(issue, n),
    start: p.start,
    end: p.end,
  }
}

/* ------------------------------------------------------------- payouts */

/* The original app's bet vocabulary: gameType 0 = colour, 1 = exact number,
   2 = big/small; selectType 10-14 name the colour/size bets, 0-9 the numbers. */
export const WINGO_GAME_TYPE = { colour: 0, number: 1, size: 2 } as const

export const WINGO_SELECT_NAME: Record<number, string> = {
  10: 'Red',
  11: 'Green',
  12: 'Violet',
  13: 'Big',
  14: 'Small',
}

export const WINGO_SELECT = { red: 10, green: 11, violet: 12, big: 13, small: 14 } as const

/** A selectType the server accepts for the given gameType. */
export function validWingoSelect(gameType: number, selectType: number): boolean {
  if (gameType === 1) return Number.isInteger(selectType) && selectType >= 0 && selectType <= 9
  if (gameType === 0) return selectType === 10 || selectType === 11 || selectType === 12
  if (gameType === 2) return selectType === 13 || selectType === 14
  return false
}

/** Payout multiplier of one bet against the drawn number — identical to the
 *  original settlement engine (wingo-engine.js → multiplier). */
export function wingoMultiplier(selectType: number, gameType: number, n: number): number {
  if (gameType === 1) return selectType === n ? 9 : 0 /* exact number 9× */
  if (gameType === 0) {
    /* colour: red/green pay 1.5× on the shared 0 / 5, otherwise 2× */
    if (selectType === 10) return n === 0 ? 1.5 : n % 2 === 0 ? 2 : 0
    if (selectType === 11) return n === 5 ? 1.5 : n % 2 === 1 ? 2 : 0
    if (selectType === 12) return n === 0 || n === 5 ? 4.5 : 0
  }
  if (gameType === 2) {
    if (selectType === 13) return n >= 5 ? 2 : 0
    if (selectType === 14) return n <= 4 ? 2 : 0
  }
  return 0
}

/** What a stake of 1 pays — the "9×" / "4.5×" badges on the bet grid. */
export function wingoOddsLabel(selectType: number, gameType: number): string {
  if (gameType === 1) return '9×'
  if (gameType === 0) {
    if (selectType === 12) return '4.5×'
    return '2×'
  }
  return '2×'
}

/** What a bet returns: stake × 0.98 × multiplier (0 on a loss). */
export function wingoPayout(stake: number, multiplier: number, feePercent: number): number {
  return r2(stake * (1 - feePercent / 100) * (multiplier > 0 ? multiplier : 0))
}

/** The house fee taken out of a stake. */
export function wingoFeeOf(stake: number, feePercent: number): number {
  return r2(stake * (feePercent / 100))
}

/** Human label of a bet ("Red", "Big", "Number 7"). */
export function wingoSelectLabel(selectType: number, gameType: number): string {
  if (gameType === 1) return `Number ${selectType}`
  return WINGO_SELECT_NAME[selectType] || String(selectType)
}

/** The billboard rule line under the mode name (the original's own text):
 *  "1 issue, 45 seconds to order, 15 seconds to draw". */
export function wingoRuleText(mode: WingoMode, cfg: WingoConfig): string {
  const c = wingoType(mode)
  return `${c.typeName.replace('Win Go ', '')} 1 issue, ${c.iv - cfg.drawSeconds} seconds to order, ${cfg.drawSeconds} seconds to draw`
}

/** The number a period drew, or null when it has not been revealed yet.
 *
 *  A stored value is only ever handed out once the period has ENDED — that is
 *  what makes the drawn value unreadable in advance even though it exists in
 *  Firebase from the first second of the round (the original's own rule). */
export function wingoResultAt(
  mode: WingoMode,
  map: Record<string, number>,
  issue: any,
  now = Date.now(),
): WingoRow | null {
  const p = wingoPeriodFromIssue(mode, issue)
  if (!p) return null
  const raw = map[String(issue)]
  if (raw === undefined) return null
  if (p.end > now) return null /* decided, but not revealed */
  return wingoRow(mode, p.issue, Math.floor(Number(raw)))
}

/* ------------------------------------------------ results (GAME_RESULTS) */

/* The result map is read at most once every few seconds per isolate: the game
   screen polls, the settlement rides on that poll and the cron tick runs once a
   minute — all three share this cache, so Firebase sees a handful of reads a
   minute instead of one per player per poll. */
const RESULT_CACHE_TTL = 4000
const resultCache: Record<string, { at: number; map: Record<string, number> }> = {}

/** A result read must distinguish "the node is empty" from "Firebase could not
 *  be reached". Handing out an empty map for a failed read would make the
 *  generator believe every period is missing and re-roll the running round — the
 *  one thing this game must never do. */
export type WingoResultRead = { ok: boolean; map: Record<string, number> }

export async function readWingoResults(
  env: any,
  mode: WingoMode,
  fresh = false,
): Promise<WingoResultRead> {
  const key = WINGO_MODE_KEY[mode]
  const hit = resultCache[key]
  const now = Date.now()
  if (!fresh && hit && now - hit.at < RESULT_CACHE_TTL) return { ok: true, map: hit.map }

  let raw: any = null
  try {
    raw = await dbGet(env, `${WINGO_RESULT_BRANCH}/${key}`)
  } catch {
    /* keep serving the last good map if we have one — it is still the truth */
    if (hit) return { ok: true, map: hit.map }
    return { ok: false, map: {} }
  }

  const map: Record<string, number> = {}
  if (raw && typeof raw === 'object') {
    for (const [k, v] of Object.entries(raw)) {
      const n = Number(v)
      if (Number.isFinite(n) && n >= 0 && n <= 9) map[k] = Math.floor(n)
    }
  }
  resultCache[key] = { at: now, map }
  return { ok: true, map }
}

/** A fresh 0-9 drawn from the platform CSPRNG, with rejection sampling so the
 *  ten digits are exactly as likely as each other (the original's rnd10). */
export function randomDigit(): number {
  const a = new Uint32Array(1)
  const max = Math.floor(4294967296 / 10) * 10
  let v = 0
  do {
    crypto.getRandomValues(a)
    v = a[0]
  } while (v >= max)
  return v % 10
}

export type WingoGenReport = {
  mode: WingoMode
  key: string
  /** the period that is running right now */
  current: string
  /** how many values this run added */
  wrote: number
  /** how many older results were dropped by the trim */
  trimmed: number
  /** how many results the mode now holds */
  kept: number
  /** false when Firebase could not be read — nothing was generated */
  ok: boolean
}

/** Decide-and-write the results of one mode.
 *
 *  This IS the game's randomness source: for every period that has no value yet
 *  it draws a digit and PATCHes it in. PATCH merges, so the write can only ever
 *  ADD a key — an existing value (one this generator wrote a moment ago, or one
 *  typed into the Firebase console by hand) is never overwritten. That is what
 *  makes a hand-edited result authoritative.
 *
 *  `full` also backfills every gap since the last stored period, so a tick that
 *  was missed — a paused Worker, a first run on a fresh database — still leaves
 *  a continuous history the moment the next tick lands. */
export async function generateWingoResults(
  env: any,
  mode: WingoMode,
  full = false,
): Promise<WingoGenReport> {
  const key = WINGO_MODE_KEY[mode]
  const iv = wingoType(mode).iv * 1000
  const now = Date.now()
  const cur = wingoPeriod(mode, now)
  const report: WingoGenReport = {
    mode,
    key,
    current: cur.issue,
    wrote: 0,
    trimmed: 0,
    kept: 0,
    ok: false,
  }

  /* When we are NOT backfilling, the cached window is enough — but before
     setting a value for the running period we re-read once, so a stale cache can
     never overwrite a value that already exists (a manual edit in the console,
     or another isolate a moment ago). That keeps the promise the whole game
     rests on: a period's number never changes once written. */
  let read = await readWingoResults(env, mode, full)
  report.ok = read.ok
  if (!read.ok) return report
  let map = read.map
  report.kept = Object.keys(map).length

  const patch: Record<string, number> = {}
  /* the running period carries its value from its very first second */
  if (!full && map[cur.issue] === undefined) {
    const again = await readWingoResults(env, mode, true)
    if (again.ok) {
      map = again.map
      report.kept = Object.keys(map).length
    }
  }
  if (map[cur.issue] === undefined) patch[cur.issue] = randomDigit()

  if (full) {
    let newest = 0
    for (const k of Object.keys(map)) {
      const p = wingoPeriodFromIssue(mode, k)
      if (p && p.end <= now && p.start > newest) newest = p.start
    }
    if (newest > 0) {
      /* every period that ended while nobody was looking */
      for (let s = newest + iv; s < cur.start; s += iv) {
        const issue = wingoIssue(mode, s)
        if (map[issue] === undefined && patch[issue] === undefined) patch[issue] = randomDigit()
      }
    } else {
      /* a fresh node: seed the last window so history and trend have data */
      for (let i = WINGO_SEED; i >= 1; i--) {
        const issue = wingoIssue(mode, cur.start - i * iv)
        if (map[issue] === undefined) patch[issue] = randomDigit()
      }
    }
  }

  const issues = Object.keys(patch)
  if (issues.length) {
    /* One PATCH per small batch. A 270-key catch-up in a single multi-path write
       is the one shape Firebase's REST API quietly mishandles (the request comes
       back fine and the tail of the map never lands), which is exactly how a gap
       in the history can survive a "successful" backfill. Batches of 50 stay
       small enough to be reliable, and `wrote` reports only what really landed —
       so a gap that is still there after a tick is visible in the report instead
       of hiding behind a 0/None. A failed batch is simply retried by the next
       tick's backfill. */
    for (let i = 0; i < issues.length; i += WINGO_WRITE_CHUNK) {
      const slice = issues.slice(i, i + WINGO_WRITE_CHUNK)
      const body: Record<string, any> = {}
      for (const issue of slice) body[`${WINGO_RESULT_BRANCH}/${key}/${issue}`] = patch[issue]
      try {
        await dbPatch(env, body)
      } catch {
        continue
      }
      report.wrote += slice.length
      for (const issue of slice) map[issue] = patch[issue]
    }
    if (!report.wrote) return report
    resultCache[key] = { at: Date.now(), map }
  }

  /* keep the window bounded (the original keeps 50 per mode). Only ever drops
     the OLDEST keys, only once there is a comfortable margin above the window,
     and never a key it cannot parse — so a hand-written result is safe.

     The dropped keys are removed one by one, as `path: null` in a PATCH. A
     full-node PUT of the trimmed map would replace the whole branch, so a key
     added by a hand-edit (or by another isolate a moment ago) between our read
     and this write would be destroyed — and the promise the game rests on is
     that nothing here ever deletes a period it did not itself outdate. */
  if (full && Object.keys(map).length > WINGO_KEEP + 30) {
    const known: string[] = []
    const foreign: string[] = []
    for (const k of Object.keys(map)) (wingoPeriodFromIssue(mode, k) ? known : foreign).push(k)
    known.sort((a, b) => {
      const pa = wingoPeriodFromIssue(mode, a)
      const pb = wingoPeriodFromIssue(mode, b)
      return (pb ? pb.start : 0) - (pa ? pa.start : 0)
    })
    const keep = known.slice(0, WINGO_KEEP).concat(foreign)
    const keepSet: Record<string, true> = {}
    for (const k of keep) keepSet[k] = true
    const drop = Object.keys(map).filter((k) => !keepSet[k])
    try {
      for (let i = 0; i < drop.length; i += WINGO_WRITE_CHUNK) {
        const slice = drop.slice(i, i + WINGO_WRITE_CHUNK)
        const body: Record<string, any> = {}
        for (const k of slice) body[`${WINGO_RESULT_BRANCH}/${key}/${k}`] = null
        await dbPatch(env, body)
        report.trimmed += slice.length
        for (const k of slice) delete map[k]
      }
      report.kept = Object.keys(map).length
      resultCache[key] = { at: Date.now(), map }
    } catch {
      /* the trim is housekeeping — a failure must never fail the round, and the
         keys that were already deleted stay deleted (they are the oldest ones) */
    }
  }

  return report
}

/** Every mode in one go — what the cron trigger calls every minute. */
export async function tickWingo(env: any, full = true): Promise<WingoGenReport[]> {
  const out: WingoGenReport[] = []
  for (const mode of WINGO_ORDER) {
    try {
      out.push(await generateWingoResults(env, mode, full))
    } catch {
      out.push({
        mode,
        key: WINGO_MODE_KEY[mode],
        current: '',
        wrote: 0,
        trimmed: 0,
        kept: 0,
        ok: false,
      })
    }
  }
  return out
}

/* ------------------------------------------------------------ settlement */

/** The player's own bet node — one key per bet, keyed by the browser's order id
 *  (which is what makes a retry, a double tap or a second tab idempotent). */
export function wingoBetsPath(uid: string): string {
  return `USERS/${uid}/wingo/bets`
}

export type WingoWin = {
  orderId: string
  issue: string
  selectType: number
  gameType: number
  number: number
  colour: string
  stake: number
  multiplier: number
  /** what the wallet gained (stake × 0.98 × multiplier), 0 on a loss */
  profit: number
}

/** Settle every bet of this account that has a published result.
 *
 *  Called on every state poll (and on /api/me), so a win reaches the wallet
 *  within one poll of the round ending — the balance the player sees jump is
 *  the real wallet, not a game counter.
 *
 *  Idempotent by construction: the bet is marked `settled` in the SAME patch
 *  that credits the money, so a reload, a retry, a second device or a racing
 *  request can never pay the same bet twice. A loss credits nothing at all —
 *  the stake left the wallet when the bet was placed (see /api/wingo/bet). */
export async function settleWingoBets(
  env: any,
  uid: string,
  user: any,
  cfg: WingoConfig,
): Promise<{ wins: WingoWin[]; won: number; balance: number }> {
  const out = { wins: [] as WingoWin[], won: 0, balance: walletSplit(user).total }
  const node = user?.wingo?.bets
  if (!node || typeof node !== 'object') return out

  const pending: { orderId: string; bet: any }[] = []
  for (const [orderId, bet] of Object.entries<any>(node)) {
    if (!bet || typeof bet !== 'object' || bet.settled) continue
    if (!isWingoMode(Number(bet.mode))) continue
    pending.push({ orderId, bet })
  }
  if (!pending.length) return out

  /* one read per distinct mode, shared with the generator's own cache */
  const maps: Record<string, Record<string, number>> = {}
  for (const mode of new Set(pending.map((p) => Number(p.bet.mode)))) {
    const read = await readWingoResults(env, mode as WingoMode)
    maps[String(mode)] = read.ok ? read.map : {}
  }

  const patch: Record<string, any> = {}
  const now = Date.now()
  let credit = 0
  let lost = 0

  for (const { orderId, bet } of pending) {
    const mode = Number(bet.mode) as WingoMode
    /* wingoResultAt refuses a period that has not ended yet, so a value that is
       already sitting in Firebase cannot settle a running round early */
    const row = wingoResultAt(mode, maps[String(mode)] || {}, bet.issue, now)
    if (!row) continue /* not drawn yet — the bet simply stays pending */

    const stake = r2(Number(bet.stake) || r2(Number(bet.amount) * Number(bet.betCount)))
    if (!(stake > 0)) continue
    const selectType = Number(bet.selectType)
    const gameType = Number(bet.gameType)
    const k = wingoMultiplier(selectType, gameType, row.number)
    const profit = k > 0 ? wingoPayout(stake, k, cfg.feePercent) : 0
    const path = `USERS/${uid}/wingo/bets/${orderId}`

    patch[`${path}/settled`] = true
    patch[`${path}/number`] = row.number
    patch[`${path}/colour`] = row.colour
    patch[`${path}/state`] = k > 0 ? 1 : 0
    patch[`${path}/realAmount`] = r2(stake * (1 - cfg.feePercent / 100))
    patch[`${path}/fee`] = wingoFeeOf(stake, cfg.feePercent)
    patch[`${path}/profitAmount`] = profit
    patch[`${path}/premium`] = row.premium
    patch[`${path}/settledAt`] = now

    const txId = String(bet.txId || '')
    if (k > 0) {
      credit += profit
      if (txId) {
        patch[`USERS/${uid}/transactions/${txId}/status`] = 'won'
        patch[`USERS/${uid}/transactions/${txId}/wonAt`] = now
        patch[`USERS/${uid}/transactions/${txId}/payout`] = profit
      }
      out.wins.push({
        orderId,
        issue: row.issueNumber,
        selectType,
        gameType,
        number: row.number,
        colour: row.colour,
        stake,
        multiplier: k,
        profit,
      })
      out.won += profit
    } else {
      /* NO debit: the stake was taken when the bet was placed, so losing only
         forfeits money that is already gone */
      lost += stake
      if (txId) patch[`USERS/${uid}/transactions/${txId}/status`] = 'lost'
    }
  }

  if (!Object.keys(patch).length) return out

  /* one counter per bucket for the whole batch — writing the increment inside
     the loop would let the later bets overwrite the earlier ones' credit */
  if (credit > 0) {
    patch[`USERS/${uid}/balance/total`] = increment(r2(credit))
    patch[`USERS/${uid}/balance/main`] = increment(r2(credit))
    patch[`USERS/${uid}/stats/totalWon`] = increment(r2(credit))
  }
  if (lost > 0) patch[`USERS/${uid}/stats/totalLost`] = increment(r2(lost))

  await dbPatch(env, patch)
  out.won = r2(out.won)
  out.balance = r2(walletSplit(user).total + out.won)
  return out
}
