import { Icon } from '../components/icons'

/* ==========================================================================
   LUCKY WHEEL  (lw-* — spin page opened from the tabbar centre wheel)
   Segments order MUST match the SEGMENTS config in public/js/app.js
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

        <button class="lw-spin" type="button" data-spin-btn>
          <Icon name="refresh" size="0.432rem" /> SPIN NOW
        </button>

        <div class="lw-info" data-wheel-info>Tap the button to spin the wheel!</div>
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
