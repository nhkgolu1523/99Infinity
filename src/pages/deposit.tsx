import { useRequestContext } from 'hono/jsx-renderer'
import { Icon } from '../components/icons'
import { totalBalance } from '../lib/wallet'

/* ==========================================================================
   DEPOSIT  (dp-* — step 1 amount → step 2 live UPI QR payment)
   The QR, the UPI intent link and the status come from the real gateway
   (FamGateway) through /api/deposit/*; nothing here is a placeholder.
   ========================================================================== */
export function DepositPage() {
  /* the real balance, server-rendered so the page never flashes ₹0.00 */
  const c = useRequestContext()
  const user = c.get('user') as any
  const balance = '₹ ' + totalBalance(user).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <div class="dp-page">
      <header class="ac-header">
        <a class="ac-header__btn" href="/account" data-back data-dp-back aria-label="Back">
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
                min="100"
                data-dp-amount
              />
            </div>

            {/* shown only while the live gateway key is missing on the server */}
            <div class="dp-note" data-dp-note hidden>
              <Icon name="fa-circle-info" size="0.3rem" />
              <span>Live UPI payments are being set up. Please try again in a few minutes.</span>
            </div>

            <div class="dp-quick">
              {[100, 500, 1000, 5000].map((v) => (
                <button class="dp-quick__btn" type="button" data-dp-quick={v}>
                  ₹{v}
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

              {/* one tap on a phone — standard NPCI deep link into GPay / PhonePe / Paytm */}
              <a class="dp-upi" href="#" data-dp-upi hidden>
                <Icon name="fa-mobile" size="0.36rem" />
                <span>Pay via UPI App</span>
              </a>

              {/* the gateway's hosted checkout page — handy on desktop */}
              <a class="dp-open" href="#" data-dp-open target="_blank" rel="noopener" hidden>
                <Icon name="arrow-right" size="0.34rem" />
                <span>Open payment page</span>
              </a>

              {/* live state — the page polls the server every 3 seconds */}
              <div class="dp-status" data-dp-status="pending">
                <span class="dp-status__dot"></span>
                <span class="dp-status__text" data-dp-status-text>Waiting for payment confirmation…</span>
              </div>

              <div class="dp-ref" data-dp-ref hidden>
                <span class="dp-ref__label">Payment reference (UTR)</span>
                <span class="dp-ref__value" data-dp-utr>
                  —
                </span>
              </div>
            </div>

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
                  <strong>Scan the QR code</strong> above, or tap{' '}
                  <strong>Pay via UPI App</strong> on your phone.
                </li>
                <li>
                  Pay the exact amount <b class="dp-gold" data-dp-instr-amount>₹0</b> and complete the
                  transfer.
                </li>
                <li>
                  <strong>Keep this page open</strong> — it checks your payment automatically every few
                  seconds.
                </li>
                <li>
                  Your balance is added the moment the bank confirms, usually <strong>within a minute</strong>.
                </li>
              </ol>
            </div>

            <button class="dp-verify" type="button" data-dp-check>
              <Icon name="fa-circle-check" size="0.384rem" />
              <span>I have paid — Check status</span>
            </button>

            <button class="dp-retry" type="button" data-dp-retry hidden>
              <Icon name="refresh" size="0.36rem" />
              <span>Generate a new QR</span>
            </button>

            <a class="dp-cancel" href="#" data-dp-cancel>
              Cancel &amp; Go Back
            </a>
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
