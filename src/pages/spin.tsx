import { useRequestContext } from 'hono/jsx-renderer'
import { Icon } from '../components/icons'
import { dayKeyAt, nextResetAt } from '../lib/rewards'

/* ==========================================================================
   LUCKY WHEEL  (lw-* — spin page opened from the tabbar centre wheel)
   Segment order MUST match CONFIG/SPIN in Firebase + SEGMENTS in public/js/app.js
   One spin per user per day — the cut-off for everybody is 04:00 AM IST.
   ========================================================================== */
const SEGMENTS = [
  { lines: ['₹500'], cls: 'lw-label--dark' },
  { lines: ['BETTER', 'LUCK'], cls: 'lw-label--sm' },
  { lines: ['₹250'], cls: 'lw-label--dark' },
  { lines: ['BETTER', 'LUCK'], cls: 'lw-label--sm' },
  { lines: ['FREE', 'PLAY'], cls: 'lw-label--green lw-label--sm' },
  { lines: ['BETTER', 'LUCK'], cls: 'lw-label--sm' },
  { lines: ['₹100'], cls: 'lw-label--dark' },
  { lines: ['BETTER', 'LUCK'], cls: 'lw-label--sm' },
]

export function LuckyWheelPage() {
  /* real state of THIS user, read from the DB while the page renders */
  const c = useRequestContext()
  const user = c.get('user') as any
  const spin = user?.rewards?.spin || {}
  const now = Date.now()
  const claimedToday = !!user && Number(spin.dayKey) === dayKeyAt(now)
  const resetAt = nextResetAt(now)
  let resetLabel = '04:00 AM'
  try {
    resetLabel = new Date(resetAt).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
    })
  } catch {
    /* keep the fallback label */
  }
  const lastAmount = Number(spin.lastAmount || 0)
  const info = claimedToday
    ? `${lastAmount > 0 ? `You won ₹${lastAmount}. ` : ''}Next spin unlocks at 4:00 AM (${resetLabel})`
    : 'Tap the button to spin the wheel!'

  return (
    <div class="lw-page">
      <header class="ac-header">
        <a class="ac-header__btn" href="/" data-back aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <span class="ac-header__title">Lucky Wheel</span>
      </header>

      <main class="lw-content">
        <div class="lw-head">
          <h2 class="lw-head__title">Spin for Luck</h2>
          <p class="lw-head__sub">One spin could unlock your next big win.</p>
        </div>

        <div class="lw-wrap">
          <div class="lw-ring"></div>
          <div class="lw-dots">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                class="lw-dot"
                style={`transform: rotate(${(360 / 16) * i}deg) translateY(-4.08rem)`}
              />
            ))}
          </div>
          <div class="lw-pointer"></div>
          <div class="lw-wheel" data-wheel>
            {SEGMENTS.map((s, i) => (
              <div
                class={`lw-label ${s.cls}`}
                style={`transform: rotate(${i * 45 + 22.5}deg) translateY(-2.592rem)`}
              >
                {s.lines.map((line) => (
                  <span>{line}</span>
                ))}
              </div>
            ))}
          </div>
          <div class="lw-hub">
            <Icon name="dharmachakra" size="0.576rem" />
          </div>
        </div>

        <button
          class={`lw-spin${claimedToday ? ' is-done' : ''}`}
          type="button"
          data-spin-btn
          data-requires-auth
          disabled={claimedToday}
        >
          <Icon name="refresh" size="0.432rem" />{' '}
          <span data-spin-label>{claimedToday ? 'Already Claimed!' : 'SPIN NOW'}</span>
        </button>

        <div class="lw-info" data-wheel-info>
          {info}
        </div>
      </main>

      <div class="lw-modal" data-wheel-modal>
        <div class="lw-box">
          <div class="lw-box__icon" data-result-icon>🎉</div>
          <h3 class="lw-box__title" data-result-title>You Won!</h3>
          <p class="lw-box__msg" data-result-msg>Congratulations!</p>
          <button class="lw-box__btn" type="button" data-result-btn>Claim Reward</button>
        </div>
      </div>
    </div>
  )
}
