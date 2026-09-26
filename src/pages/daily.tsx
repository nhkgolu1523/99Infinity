import { Icon } from '../components/icons'

/* ==========================================================================
   DAILY REWARD  (dr-* — opened from the home "Your Daily Bonus Awaits" card)
   Demo state: streak day 4 of 7 — JS advances it on claim
   ========================================================================== */
const TOTAL_DAYS = 30
const TODAY = 1
const UNLOCK_DAY = 7
const WEEK_STARTS = [1, 8, 15, 22, 29]

function CalendarGrid() {
  const cells: any[] = []
  for (let day = 1; day <= TOTAL_DAYS; day++) {
    if (WEEK_STARTS.includes(day)) {
      const weekNum = Math.ceil(day / 7)
      cells.push(
        <div class={`dr-divider ${weekNum === 1 ? 'dr-divider--first' : 'dr-divider--rest'}`}>
          {weekNum === 1 && <Icon name="star" size="0.24rem" />}
          <span>Week {weekNum} — {weekNum === 1 ? 'Streak Building' : 'Free Game Daily'}</span>
        </div>
      )
    }

    const state =
      day < TODAY ? 'completed' : day === TODAY ? 'today' : day > UNLOCK_DAY ? 'unlocked' : ''

    cells.push(
      <div class={`dr-day ${state}`} data-dr-day={day}>
        <span class="dr-day__label">Day {day}</span>
        <span class="dr-day__reward">
          {day > UNLOCK_DAY ? (
            <Icon name="gift" size="0.288rem" />
          ) : day >= TODAY ? (
            <Icon name="lock" size="0.24rem" />
          ) : null}
        </span>
      </div>
    )
  }
  return <div class="dr-grid" data-dr-grid data-dr-today={TODAY}>{cells}</div>
}

export function DailyRewardPage() {
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
              <div class="dr-hero__cal-top">DAY {TODAY} / 7</div>
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
          <div class="dr-status__icon is-locked" data-dr-status-icon>
            <span class="dr-status__icon-lock">
              <Icon name="lock" size="0.624rem" />
            </span>
            <span class="dr-status__icon-gift">
              <Icon name="gift" size="0.624rem" />
            </span>
          </div>
          <div class="dr-status__info">
            <div class="dr-status__label">Streak Progress</div>
            <h3 data-dr-status-title>0 / 7 Days Completed</h3>
            <p data-dr-status-text>Complete 7 more days to unlock daily free games.</p>
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
            <CalendarGrid />
            <div class="dr-collapse__fade"></div>
          </div>

          <button class="dr-toggle" type="button" data-dr-toggle>
            <span data-dr-toggle-text>View Full 30-Day Calendar</span>
            <Icon name="chevron-down" size="0.264rem" />
          </button>
        </div>

        {/* claim */}
        <button class="dr-claim" type="button" data-dr-claim>
          <Icon name="calendar-check" size="0.408rem" />
          <span data-dr-claim-text>Mark Today's Login</span>
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
