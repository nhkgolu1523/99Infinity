import { useRequestContext } from 'hono/jsx-renderer'
import { Icon } from '../components/icons'
import { cycleDay, dayKeyAt } from '../lib/rewards'

/* ==========================================================================
   DAILY REWARD  (dr-* — opened from the home "Your Daily Bonus Awaits" card)
   The streak is stored in Firebase and resets for everybody at 04:00 AM IST;
   a missed day drops the user back to Day 1 automatically.
   ========================================================================== */
const TOTAL_DAYS = 30
const UNLOCK_DAY = 7
const WEEK_STARTS = [1, 8, 15, 22, 29]

function CalendarGrid({ day, claimedToday }: { day: number; claimedToday: boolean }) {
  const cells: any[] = []
  for (let d = 1; d <= TOTAL_DAYS; d++) {
    if (WEEK_STARTS.includes(d)) {
      const weekNum = Math.ceil(d / 7)
      cells.push(
        <div class={`dr-divider ${weekNum === 1 ? 'dr-divider--first' : 'dr-divider--rest'}`}>
          {weekNum === 1 && <Icon name="star" size="0.24rem" />}
          <span>
            Week {weekNum} — {weekNum === 1 ? 'Streak Building' : 'Free Game Daily'}
          </span>
        </div>
      )
    }

    const state =
      d < day
        ? 'dr-day--completed'
        : d === day
          ? claimedToday
            ? 'dr-day--completed'
            : 'dr-day--today'
          : d > UNLOCK_DAY
            ? 'dr-day--unlocked'
            : ''

    cells.push(
      <div class={`dr-day ${state}`} data-dr-day={d}>
        <span class="dr-day__label">Day {d}</span>
        <span class="dr-day__reward">
          {d > UNLOCK_DAY ? (
            <Icon name="gift" size="0.288rem" />
          ) : d >= day && !(d === day && claimedToday) ? (
            <Icon name="lock" size="0.24rem" />
          ) : null}
        </span>
      </div>
    )
  }
  return (
    <div class="dr-grid" data-dr-grid data-dr-today={day}>
      {cells}
    </div>
  )
}

export function DailyRewardPage() {
  /* real streak of THIS user — read from the DB while the page renders */
  const c = useRequestContext()
  const user = c.get('user') as any
  const stored = user?.rewards?.daily || {}
  const today = dayKeyAt(Date.now())
  const lastKey = Number(stored.lastClaimDayKey || 0)
  const streak = lastKey >= today - 1 ? Number(stored.streak || 0) : 0
  const claimedToday = !!user && lastKey === today
  const day = cycleDay(streak, claimedToday, UNLOCK_DAY)
  const unlocked = streak >= UNLOCK_DAY
  const remaining = Math.max(0, UNLOCK_DAY - streak)
  const statusTitle = unlocked ? 'Unlocked!' : `${streak} / ${UNLOCK_DAY} Days Completed`
  const statusText = unlocked
    ? 'You get 1 Free Game every day — keep logging in!'
    : `Complete ${remaining} more ${remaining === 1 ? 'day' : 'days'} to unlock daily free games.`

  return (
    <div class="dr-page">
      <header class="ac-header">
        <a class="ac-header__btn" href="/" data-back aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <span class="ac-header__title">Daily Reward</span>
      </header>

      <main class="dr-content">
        {/* hero */}
        <div class="dr-hero">
          <div class="dr-hero__wrap">
            <div class="dr-hero__cal">
              <div class="dr-hero__cal-top">DAY {day} / 7</div>
              <div class="dr-hero__cal-body">
                <Icon name="gamepad" size="0.624rem" />
              </div>
            </div>
          </div>
          <h2 class="dr-hero__title">Daily Login Reward</h2>
          <p class="dr-hero__sub">
            Complete a 7-day login streak to unlock 1 Free Game every day.
          </p>
        </div>

        {/* status card */}
        <div class="dr-status">
          <div class={`dr-status__icon${unlocked ? '' : ' is-locked'}`} data-dr-status-icon>
            <span class="dr-status__icon-lock">
              <Icon name="lock" size="0.624rem" />
            </span>
            <span class="dr-status__icon-gift">
              <Icon name="gift" size="0.624rem" />
            </span>
          </div>
          <div class="dr-status__info">
            <div class="dr-status__label">Streak Progress</div>
            <h3 data-dr-status-title>{statusTitle}</h3>
            <p data-dr-status-text>{statusText}</p>
          </div>
        </div>

        {/* calendar */}
        <div class="dr-calendar">
          <div class="dr-calendar__head">
            <div class="dr-calendar__head-left">
              <Icon name="fire" size="0.336rem" />
              <span>Login Streak</span>
            </div>
            <div class="dr-calendar__head-right">30 Days</div>
          </div>

          <div class="dr-collapse" data-dr-wrap>
            <CalendarGrid day={day} claimedToday={claimedToday} />
            <div class="dr-collapse__fade"></div>
          </div>

          <button class="dr-toggle" type="button" data-dr-toggle>
            <span data-dr-toggle-text>View Full 30-Day Calendar</span>
            <Icon name="chevron-down" size="0.264rem" />
          </button>
        </div>

        {/* claim */}
        <button
          class={`dr-claim${claimedToday ? ' is-done' : ''}`}
          type="button"
          data-dr-claim
          data-requires-auth
          disabled={claimedToday}
        >
          <Icon name="calendar-check" size="0.408rem" />
          <span data-dr-claim-text>{claimedToday ? 'Already Claimed!' : "Mark Today's Login"}</span>
        </button>

        {/* how it works */}
        <div class="dr-how">
          <div class="dr-how__title">
            <Icon name="info" size="0.36rem" />
            <span>How It Works</span>
          </div>

          <ul class="dr-rules">
            <li class="dr-rule">
              <div class="dr-rule__num">1</div>
              <div class="dr-rule__text">
                <strong>Log in daily</strong> to build your streak. Each day counts toward your
                7-day goal.
              </div>
            </li>
            <li class="dr-rule">
              <div class="dr-rule__num">2</div>
              <div class="dr-rule__text">
                <strong>No reward during days 1–7.</strong> The first 7 days are just to build the
                streak. Stay consistent!
              </div>
            </li>
            <li class="dr-rule">
              <div class="dr-rule__num">3</div>
              <div class="dr-rule__text">
                <strong>Miss a day = streak resets</strong> back to Day 1. So don't skip a day.
              </div>
            </li>
            <li class="dr-rule">
              <div class="dr-rule__num">4</div>
              <div class="dr-rule__text">
                <strong>Complete 7 days</strong> to unlock the special reward.
              </div>
            </li>
          </ul>

          <div class="dr-highlight">
            <Icon name="gift" size="0.432rem" />
            <div class="dr-highlight__text">
              <strong>After 7 days:</strong> Once your 7-day login streak is complete, you will get{' '}
              <strong>1 Free Game every day</strong> — as long as you keep logging in daily.
            </div>
          </div>
        </div>
      </main>

      {/* result modal */}
      <div class="dr-modal" data-dr-modal>
        <div class="dr-box" data-dr-box>
          <div class="dr-box__icon" data-dr-box-icon>✅</div>
          <h3 class="dr-box__title" data-dr-box-title>Login Marked!</h3>
          <p class="dr-box__sub" data-dr-box-sub>Keep going!</p>
          <div class="dr-box__reward is-hidden" data-dr-box-reward>
            <div class="dr-box__reward-label">Unlocked!</div>
            <div class="dr-box__reward-value">
              <Icon name="gamepad" size="0.48rem" />
              <span>1 Free Game / Day</span>
            </div>
          </div>
          <button class="dr-box__btn" type="button" data-dr-close>Got It</button>
        </div>
      </div>
    </div>
  )
}
