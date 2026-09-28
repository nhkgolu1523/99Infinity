import { useRequestContext } from 'hono/jsx-renderer'
import { Icon } from '../components/icons'
import { inr, walletSplit, walletTotals } from '../lib/wallet'

/* ==========================================================================
   WALLET — overview of the account's money.

   Two buckets, both stored in the DB:
     • Main wallet      — real money (deposits, and later the money won
                          inside the games).
     • 3rd party wallet — everything the user collected by CLAIMING: lucky-wheel
                          winnings, the daily login reward, free-game prizes.
   The balance banner counts the lifetime deposit / withdrawal amounts from the
   transaction log, so nothing on this page is hardcoded.
   ========================================================================== */

export function WalletOverviewPage() {
  const c = useRequestContext()
  const user = c.get('user') as any
  const w = walletSplit(user)
  const totals = walletTotals(user)

  return (
    <div class="ac-page wl-page" id="walletPage">
      <header class="ac-header">
        <a class="ac-header__btn" href="/account" aria-label="Back">
          <Icon name="chevron-left" size="0.37rem" />
        </a>
        <span class="ac-header__title">Wallet</span>
      </header>

      <main class="ac-content">
        {/* ---------- balance banner ---------- */}
        <div class="wl-banner">
          <div class="wl-banner__icon">
            <Icon name="wallet" size="0.92rem" />
          </div>

          <div class="wl-banner__amount num" data-wallet-total>
            {inr(w.total)}
          </div>
          <div class="wl-banner__label">Total balance</div>

          <div class="wl-banner__stats">
            <div class="wl-stat">
              <div class="wl-stat__value num" data-wallet-withdrawn>
                {inr(totals.withdrawTotal)}
              </div>
              <div class="wl-stat__label">Total Withdrawal Amount</div>
            </div>
            <div class="wl-stat">
              <div class="wl-stat__value num" data-wallet-deposited>
                {inr(totals.depositTotal)}
              </div>
              <div class="wl-stat__label">Total deposit amount</div>
            </div>
          </div>
        </div>

        {/* ---------- wallets + actions ---------- */}
        <div class="wl-card">
          <div class="wl-circles">
            <div class="wl-circle-wrap">
              <div class="wl-ring" style={`--wl-pct:${w.mainPct}`}>
                <span class="wl-ring__inner num" data-wallet-main-pct>
                  {w.mainPct}%
                </span>
              </div>
              <div class="wl-circle-value num" data-wallet-main>
                {inr(w.main)}
              </div>
              <div class="wl-circle-label">Main wallet</div>
            </div>

            <div class="wl-circle-wrap">
              <div class="wl-ring wl-ring--promo" style={`--wl-pct:${w.promoPct}`}>
                <span class="wl-ring__inner num" data-wallet-promo-pct>
                  {w.promoPct}%
                </span>
              </div>
              <div class="wl-circle-value num" data-wallet-promo>
                {inr(w.promo)}
              </div>
              <div class="wl-circle-label">3rd party wallet</div>
            </div>
          </div>

          {/* money that came from claims lives in the 3rd-party wallet — the
              transfer button is the way into the withdrawal screen */}
          <a class="wl-transfer" href="/account/withdraw">
            Main wallet transfer
          </a>

          <div class="wl-grid">
            <a class="wl-action" href="/account/deposit">
              <span class="wl-action__icon wl-action__icon--deposit">
                <Icon name="wallet" size="0.56rem" />
              </span>
              <span class="wl-action__label">Deposit</span>
            </a>

            <a class="wl-action" href="/account/withdraw">
              <span class="wl-action__icon wl-action__icon--withdraw">
                <Icon name="fa-credit-card" size="0.56rem" />
              </span>
              <span class="wl-action__label">Withdraw</span>
            </a>

            <a class="wl-action" href="/account/deposit-history">
              <span class="wl-action__icon wl-action__icon--dep">
                <Icon name="fa-arrow-down" size="0.56rem" />
              </span>
              <span class="wl-action__label">Deposit history</span>
            </a>

            <a class="wl-action" href="/account/withdraw-history">
              <span class="wl-action__icon wl-action__icon--wd">
                <Icon name="fa-arrow-up" size="0.56rem" />
                <span class="wl-action__badge">
                  <Icon name="check" size="0.2rem" />
                </span>
              </span>
              <span class="wl-action__label">Withdrawal history</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
