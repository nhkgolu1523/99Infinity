/* ==========================================================================
   REWARDS — shared time + config logic for the Lucky Wheel and the Daily
   Login Reward. Both reset every day at 04:00 AM IST, for every user, which
   is the "global limit" the platform works on.

   dayKey(ts)  → integer that only changes when the 04:00 AM IST cutoff passes
   nextResetAt → epoch ms of the next 04:00 AM IST
   ========================================================================== */

export const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000 /* UTC+5:30 */
export const RESET_HOUR = 4 /* 04:00 AM IST */
export const RESET_OFFSET_MS = RESET_HOUR * 60 * 60 * 1000

/** Day number of the running "reward day" (starts fresh at 4:00 AM IST). */
export function dayKeyAt(at: number = Date.now()): number {
  return Math.floor((at + IST_OFFSET_MS - RESET_OFFSET_MS) / 86400000)
}

/** Epoch ms of the next 4:00 AM IST reset. */
export function nextResetAt(at: number = Date.now()): number {
  return (dayKeyAt(at) + 1) * 86400000 - IST_OFFSET_MS + RESET_OFFSET_MS
}

/** "04:00 AM" style label for the next reset, in IST. */
export function resetLabel(at: number = Date.now()): string {
  return new Date(nextResetAt(at)).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  })
}

/* ------------------------------------------------------------------ money limits */

/** Withdrawal rules of the platform — a request can only be made from ₹1,000
 *  up to ₹10,000, and the quick-pick chips are 1K / 2K / 3K / 5K / 10K.
 *  These numbers are the single source of truth: the API validates with them,
 *  the withdraw page renders the chips from them and the browser reads the
 *  live copy from /api/config/rewards. */
export const WITHDRAW_MIN = 1000
export const WITHDRAW_MAX = 10000
export const WITHDRAW_QUICK = [1000, 2000, 3000, 5000, 10000]
export const DEPOSIT_MIN = 500

/** "1K" / "10K" label for the quick-pick chips (₹1,000 → 1K). */
export function quickLabel(v: number): string {
  return v >= 1000 && v % 1000 === 0 ? `${v / 1000}K` : String(v)
}

/** ₹1,000 / ₹10,000 — Indian grouping, used in error messages. */
export function money(v: number): string {
  return '₹' + Number(v || 0).toLocaleString('en-IN')
}

/* ------------------------------------------------------------------ limits (DB driven) */
/* These four numbers live in the database (CONFIG/LIMITS) so the admin panel can
   change them without a redeploy. The constants above are only the defaults that
   get seeded on first run. */

export type LimitsConfig = {
  withdrawMin: number
  withdrawMax: number
  withdrawQuick: number[]
  depositMin: number
}

export const DEFAULT_LIMITS_CONFIG: LimitsConfig = {
  withdrawMin: WITHDRAW_MIN,
  withdrawMax: WITHDRAW_MAX,
  withdrawQuick: WITHDRAW_QUICK,
  depositMin: DEPOSIT_MIN,
}

/** Sanitises admin input — a broken value can never break the money flows. */
export function normaliseLimits(raw: any): LimitsConfig {
  const d = DEFAULT_LIMITS_CONFIG
  const min = Math.max(1, Math.floor(Number(raw?.withdrawMin) || d.withdrawMin))
  const max = Math.max(min, Math.floor(Number(raw?.withdrawMax) || d.withdrawMax))
  const list = Array.isArray(raw?.withdrawQuick) ? raw.withdrawQuick : d.withdrawQuick
  const quick = list
    .map((v: any) => Math.floor(Number(v) || 0))
    .filter((v: number) => v > 0)
    .slice(0, 8)
  return {
    withdrawMin: min,
    withdrawMax: max,
    withdrawQuick: quick.length ? Array.from(new Set(quick)).sort((a, b) => a - b) : d.withdrawQuick,
    depositMin: Math.max(1, Math.floor(Number(raw?.depositMin) || d.depositMin)),
  }
}


/* ------------------------------------------------------------------ wheel */

export type SpinSegment = {
  index: number
  label: string
  amount: number
  weight: number
  bonus?: string
}

/** Prize table of the wheel — index MUST match the segment order of the
 *  wheel face in src/pages/spin.tsx (and SEGMENTS in public/js/app.js). */
export const DEFAULT_SPIN_SEGMENTS: SpinSegment[] = [
  { index: 0, label: '500', amount: 500, weight: 4 },
  { index: 1, label: 'BETTER LUCK', amount: 0, weight: 21 },
  { index: 2, label: '250', amount: 250, weight: 8 },
  { index: 3, label: 'BETTER LUCK', amount: 0, weight: 21 },
  { index: 4, label: 'FREE PLAY', amount: 0, weight: 12, bonus: 'freeGame' },
  { index: 5, label: 'BETTER LUCK', amount: 0, weight: 21 },
  { index: 6, label: '100', amount: 100, weight: 13 },
  { index: 7, label: 'BETTER LUCK', amount: 0, weight: 21 },
]

export const DEFAULT_SPIN_CONFIG = {
  enabled: 1,
  dailyLimit: 1,
  resetHour: RESET_HOUR,
  timezone: 'Asia/Kolkata',
  segments: DEFAULT_SPIN_SEGMENTS,
}

/* ------------------------------------------------------------------ daily */

export const DEFAULT_DAILY_CONFIG = {
  enabled: 1,
  resetHour: RESET_HOUR,
  timezone: 'Asia/Kolkata',
  cycleDays: 7,
  unlockDay: 7,
  freeGamePerDay: 1,
  /** money credited per streak day (0 = pure streak building, as the page says).
   *  Keys are day1…day7 — plain day numbers would be turned into an array by
   *  Firebase (it treats numeric keys as list indexes). */
  streakRewards: {
    day1: 0,
    day2: 0,
    day3: 0,
    day4: 0,
    day5: 0,
    day6: 0,
    day7: 0,
  } as Record<string, number>,
}

/** reward of a given streak day (1-based) from the config map. */
export function streakRewardOf(rewards: Record<string, number> | undefined, day: number): number {
  if (!rewards) return 0
  return Math.max(0, Math.floor(Number(rewards['day' + day]) || 0))
}

/* ------------------------------------------------------------------ pick */

/** Weighted random pick — used for the wheel so the server (not the browser)
 *  decides what the user wins. */
export function pickWeighted(list: SpinSegment[]): SpinSegment {
  const total = list.reduce((sum, s) => sum + Math.max(0, Number(s.weight) || 0), 0)
  if (total <= 0) return list[Math.floor(Math.random() * list.length)]
  let roll = Math.random() * total
  for (const s of list) {
    roll -= Math.max(0, Number(s.weight) || 0)
    if (roll <= 0) return s
  }
  return list[list.length - 1]
}

/** Cycle day shown on the 7-day / 30-day calendar (1 … cycleDays). */
export function cycleDay(streak: number, claimedToday: boolean, cycle = 7): number {
  const completed = Math.max(0, Number(streak) || 0)
  const base = claimedToday ? completed : completed + 1
  return ((base - 1) % cycle) + 1
}
