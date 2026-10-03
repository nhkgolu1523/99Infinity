import { useRequestContext } from 'hono/jsx-renderer'
import { Icon } from '../components/icons'
import { safeBack } from '../components/layout'
import { totalBalance } from '../lib/wallet'
import { DEFAULT_LIMITS_CONFIG, depositQuickAmounts, type LimitsConfig } from '../lib/rewards'

/* ==========================================================================
   DEPOSIT  (dp-* — step 1 amount → step 2 live UPI QR payment)
   The QR, the UPI intent link and the status come from the real gateway
   (FamGateway) through /api/deposit/*; nothing here is a placeholder.

   The minimum — and therefore the preset chips — come from CONFIG/LIMITS, so the
   page can never offer an amount the API would refuse (the client re-reads the
   same config live, see public/js/app.js — initDeposit).
   ========================================================================== */
export function DepositPage({ limits }: { limits?: LimitsConfig }) {
  /* the real balance, server-rendered so the page never flashes ₹0.00 */
  const c = useRequestContext()
  const user = c.get('user') as any
  const balance = '₹ ' + totalBalance(user).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const depositMin = Math.max(1, Math.floor(Number(limits?.depositMin) || DEFAULT_LIMITS_CONFIG.depositMin))
  const quickAmounts = depositQuickAmounts(depositMin)
  /* back to wherever the player came from (the game screen sends ?back=…), the
     wallet tab otherwise */
  const back = safeBack(c.req.query('back'), '/account')

  return (
    <div class="dp-page" data-deposit-min={depositMin}>
      <header class="ac-header">
        <a class="ac-header__btn" href={back} data-back data-dp-back aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <span class="ac-header__title" data-dp-title>Deposit</span>
      </header>

      <main class="dp-content">
        {/* step 1 — amount selection */}
        <div class="dp-step active" data-dp-step="1">
          <div class="dp-card">
            <div class="dp-balance">
              <span>Available balance</span>
              <span class="dp-balance__amount" data-user-balance>{balance}</span>
            </div>

            <div class="dp-input">
              <span class="dp-input__symbol">₹</span>
              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                inputmode="numeric"
                min={depositMin}
                data-dp-amount
              />
            </div>

            <div class="dp-quick">
              {quickAmounts.map((v) => (
                <button class="dp-quick__btn" type="button" data-dp-quick={v}>
                  ₹{v.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            <button class="dp-proceed" type="button" data-dp-proceed>
              <span data-dp-proceed-label>Proceed to Pay</span>
              <Icon name="arrow-right" size="0.36rem" />
            </button>
          </div>
        </div>

        {/* step 2 — QR payment */}
        <div class="dp-step" data-dp-step="2">
          <div class="dp-card">
            <div class="dp-timer">
              <Icon name="clock" size="0.336rem" />
              <span>
                Complete payment within <b class="dp-timer__count" data-dp-timer>05:00</b>
              </span>
            </div>

            <div class="dp-summary">
              <div class="dp-summary__label">Amount to Pay</div>
              <div class="dp-summary__value">
                ₹<span data-dp-pay-amount>0</span>
              </div>
            </div>

            <div class="dp-qr">
              <div class="dp-qr__wrap">
                <div class="dp-qr__placeholder" data-dp-qr-placeholder>
                  <Icon name="qrcode" size="1.008rem" />
                  <span>Generating QR…</span>
                </div>
                <img class="dp-qr__img" data-dp-qr-img alt="UPI QR code" hidden />
              </div>
              <div class="dp-qr__hint">Scan this QR with any UPI app</div>

              {/* live state — the page polls the server every 3 seconds */}
              <div class="dp-status" data-dp-status="pending">
                <span class="dp-status__dot"></span>
                <span class="dp-status__text" data-dp-status-text>Waiting for payment confirmation…</span>
              </div>
            </div>

            <button class="dp-verify" type="button" data-dp-check>
              <Icon name="fa-circle-check" size="0.384rem" />
              <span>Verify Payment</span>
            </button>

            <button class="dp-retry" type="button" data-dp-retry hidden>
              <Icon name="refresh" size="0.36rem" />
              <span>Generate a new QR</span>
            </button>

            <a class="dp-cancel" href="#" data-dp-cancel>
              Cancel &amp; Go Back
            </a>

            <div class="dp-instructions">
              <div class="dp-instructions__title">
                <Icon name="fa-circle-info" size="0.312rem" />
                <span>How to Pay</span>
              </div>
              <ol>
                <li>
                  <strong>Open any UPI app</strong> — Paytm, PhonePe, GPay, or your bank app.
                </li>
                <li>
                  <strong>Scan the QR code</strong> above and pay the exact amount{' '}
                  <b class="dp-gold" data-dp-instr-amount>₹0</b>.
                </li>
                <li>
                  <strong>Keep this page open</strong> — the payment is checked automatically every few
                  seconds, or tap <strong>Verify Payment</strong>.
                </li>
                <li>
                  Your balance is added the moment the bank confirms, usually <strong>within a minute</strong>.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      {/* success modal — filled by the poll that confirmed the payment */}
      <div class="dp-modal" data-dp-modal>
        <div class="dp-modal__box">
          <div class="dp-modal__icon">✅</div>
          <h3 class="dp-modal__title" data-dp-modal-title>Payment Received!</h3>
          <p class="dp-modal__text" data-dp-modal-text>
            Your wallet has been updated.
          </p>
          <p class="dp-modal__ref" data-dp-modal-ref hidden>UTR —</p>
          <button class="dp-modal__btn" type="button" data-dp-modal-close>
            Great, Thanks!
          </button>
        </div>
      </div>
    </div>
  )
}
