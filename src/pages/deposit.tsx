import { Icon } from '../components/icons'

/* ==========================================================================
   DEPOSIT  (dp-* — step 1 amount → step 2 QR payment flow)
   ========================================================================== */
export function DepositPage() {
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
              <span class="dp-balance__amount">₹ 0.00</span>
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

            <div class="dp-quick">
              {[100, 500, 1000, 5000].map((v) => (
                <button class="dp-quick__btn" type="button" data-dp-quick={v}>
                  ₹{v}
                </button>
              ))}
            </div>

            <button class="dp-proceed" type="button" data-dp-proceed>
              Proceed to Pay
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
                Complete payment within <b class="dp-timer__count" data-dp-timer>10:00</b>
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
                <div class="dp-qr__placeholder">
                  <Icon name="qrcode" size="1.008rem" />
                  <span>QR Code Here</span>
                </div>
              </div>
              <div class="dp-qr__hint">Scan this QR with any UPI app</div>
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
                  <strong>Scan the QR code</strong> shown above.
                </li>
                <li>
                  Enter the exact amount <b class="dp-gold" data-dp-instr-amount>₹0</b> and complete
                  the payment.
                </li>
                <li>
                  <strong>Wait for payment confirmation</strong> in your UPI app.
                </li>
                <li>
                  Come back here and tap <strong>Verify Payment</strong> below.
                </li>
                <li>
                  Your balance will be credited within <strong>10 minutes</strong> after verification.
                </li>
              </ol>
            </div>

            <button class="dp-verify" type="button" data-dp-verify>
              <Icon name="fa-circle-check" size="0.384rem" />
              <span>Verify Payment</span>
            </button>

            <a class="dp-cancel" href="#" data-dp-cancel>
              Cancel &amp; Go Back
            </a>
          </div>
        </div>
      </main>

      {/* success modal */}
      <div class="dp-modal" data-dp-modal>
        <div class="dp-modal__box">
          <div class="dp-modal__icon">✅</div>
          <h3 class="dp-modal__title">Payment Submitted!</h3>
          <p class="dp-modal__text">
            We're verifying your payment. Your balance will be credited within 10 minutes.
          </p>
          <button class="dp-modal__btn" type="button" data-dp-modal-close>
            Great, Thanks!
          </button>
        </div>
      </div>
    </div>
  )
}
