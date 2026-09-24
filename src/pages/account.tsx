import { site } from '../data'
import { NavbarInner, CustomerBubble, SiteFooter } from '../components/layout'
import { Icon } from '../components/icons'

/* ==========================================================================
   ACCOUNT
   ========================================================================== */
export function AccountPage() {
  const quick = [
    { icon: 'wallet', label: 'Deposit', href: '/account/deposit' },
    { icon: 'arrow-up', label: 'Withdraw', href: '/account/withdraw' },
    { icon: 'history', label: 'History', href: '/account/history' },
    { icon: 'gift', label: 'Bonus', href: '/activity' },
    { icon: 'ticket', label: 'Bet History', href: '/account/bets' },
    { icon: 'trophy', label: 'VIP', href: '/activity' },
    { icon: 'user', label: 'Profile', href: '/account/profile' },
    { icon: 'settings', label: 'Settings', href: '/account/settings' },
  ]

  const menu = [
    { icon: 'shield-check', label: 'Security Center', value: 'Protected' },
    { icon: 'globe', label: 'Language', value: site.brand.lang },
    { icon: 'info', label: 'About us', value: '' },
    { icon: 'headset', label: 'Customer service', value: '24/7' },
    { icon: 'history', label: 'Version', value: '1.0.0' },
  ]

  return (
    <>
      <NavbarInner
        title="Account"
        right={
          <a class="navbar__back" href="/support" aria-label="Support">
            <Icon name="headset" size="0.48rem" />
          </a>
        }
      />

      <main class="page">
        <section class="account-hero">
          <img class="account-hero__avatar" src="/assets/img/avatar/avatar-1.png" alt="" />
          <div class="grow">
            <div class="account-hero__name">Guest User</div>
            <div class="account-hero__id">ID: 00000000</div>
            <div class="account-hero__balance num">₹0.00</div>
          </div>
        </section>

        <div class="account-actions">
          <a class="btn-gold" href="/account/deposit">
            Deposit
          </a>
          <a class="btn-primary" href="/account/withdraw">
            Withdraw
          </a>
        </div>

        <nav class="account-grid" aria-label="Quick actions">
          {quick.map((q) => (
            <a class="account-grid__item" href={q.href}>
              <Icon name={q.icon} />
              <span>{q.label}</span>
            </a>
          ))}
        </nav>

        <div class="account-menu">
          {menu.map((m) => (
            <div class="list-row">
              <Icon name={m.icon} class="list-row__icon c-main" />
              <span class="list-row__label">{m.label}</span>
              {m.value && <span class="list-row__value">{m.value}</span>}
              <Icon name="chevron-right" size="0.32rem" class="list-row__chev" />
            </div>
          ))}
        </div>

        <button class="btn-ghost mt-12" style="width:100%;height:1.06667rem;color:var(--norm_red-color)" data-dialog-open="logout">
          Log out
        </button>

        <SiteFooter />
      </main>

      <CustomerBubble />
    </>
  )
}

/* ==========================================================================
   WALLET / DEPOSIT / WITHDRAW
   ========================================================================== */
const METHODS = [
  { key: 'upi', label: 'UPI', desc: 'Instant · No fee', icon: 'phone' },
  { key: 'bank', label: 'Bank Transfer', desc: '1–30 minutes', icon: 'wallet' },
  { key: 'usdt', label: 'USDT (TRC20)', desc: 'Crypto · Low fee', icon: 'grid' },
  { key: 'card', label: 'Debit / Credit Card', desc: 'Visa · Mastercard', icon: 'ticket' },
]

export function WalletPage({ mode }: { mode: 'deposit' | 'withdraw' }) {
  const isDeposit = mode === 'deposit'

  return (
    <>
      <NavbarInner title={isDeposit ? 'Deposit' : 'Withdraw'} back="/account" />

      <main class="page">
        <section class="panel">
          <div class="panel__title">
            <span>Available balance</span>
            <span class="c-secondary num">₹0.00</span>
          </div>

          <label class="field">
            <span class="field__suffix">₹</span>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              inputmode="decimal"
              min="0"
            />
          </label>

          <div class="row gap-8 mt-12">
            {[100, 500, 1000, 5000].map((v) => (
              <button class="btn-ghost grow" type="button" data-quick-amount={v}>
                ₹{v}
              </button>
            ))}
          </div>

          <button class="btn-primary mt-16" type="button" data-dialog-open={isDeposit ? 'deposit-confirm' : 'withdraw-confirm'}>
            {isDeposit ? 'Deposit now' : 'Request withdrawal'}
          </button>
        </section>

        <section class="panel mt-12">
          <div class="panel__title">Payment methods</div>
          <div class="support-list" style="margin-top:0">
            {METHODS.map((m) => (
              <div class="support-card" data-pay-method={m.key}>
                <span class="support-card__icon">
                  <Icon name={m.icon} />
                </span>
                <span class="grow">
                  <span class="support-card__title" style="display:block">
                    {m.label}
                  </span>
                  <span class="support-card__desc" style="display:block">
                    {m.desc}
                  </span>
                </span>
                <Icon name="chevron-right" size="0.32rem" class="c-l3" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <CustomerBubble />
    </>
  )
}

/* ==========================================================================
   HISTORY / TRANSACTIONS
   ========================================================================== */
export function HistoryPage() {
  const rows = [
    { label: 'Deposit · UPI', amount: '+₹500.00', time: '2026-09-20 14:22', ok: true },
    { label: 'Bet · Aviator', amount: '-₹50.00', time: '2026-09-20 14:30', ok: false },
    { label: 'Win · Win Go 30S', amount: '+₹180.00', time: '2026-09-20 14:41', ok: true },
    { label: 'Withdraw · Bank', amount: '-₹300.00', time: '2026-09-21 09:02', ok: false },
  ]

  return (
    <>
      <NavbarInner title="Transaction history" back="/account" />

      <main class="page">
        <div class="tabs-line" data-tabs="history">
          <div class="tabs-line__item active" data-tab="all">All</div>
          <div class="tabs-line__item" data-tab="deposit">Deposit</div>
          <div class="tabs-line__item" data-tab="withdraw">Withdraw</div>
          <div class="tabs-line__item" data-tab="bet">Bets</div>
        </div>

        <div class="panel panel--flat">
          {rows.map((r) => (
            <div class="list-row">
              <span class="grow">
                <span class="list-row__label" style="display:block">
                  {r.label}
                </span>
                <span class="list-row__value">{r.time}</span>
              </span>
              <span class={r.ok ? 'c-green num fw-6' : 'c-red num fw-6'}>{r.amount}</span>
            </div>
          ))}
        </div>
      </main>

      <CustomerBubble />
    </>
  )
}

/* ==========================================================================
   PROFILE / SETTINGS
   ========================================================================== */
export function ProfilePage() {
  return (
    <>
      <NavbarInner title="Profile" back="/account" />

      <main class="page">
        <section class="panel">
          <div class="row gap-6" style="align-items:flex-start">
            <img class="account-hero__avatar" src="/assets/img/avatar/avatar-2.png" alt="" />
            <div class="grow">
              <div class="account-hero__name">Guest User</div>
              <div class="account-hero__id">ID: 00000000</div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="field-group">
            <label class="field">
              <Icon name="user" class="field__icon" />
              <input type="text" name="nickname" placeholder="Nickname" />
            </label>
            <label class="field">
              <Icon name="mail" class="field__icon" />
              <input type="email" name="email" placeholder="Email address" />
            </label>
            <label class="field">
              <Icon name="phone" class="field__icon" />
              <input type="tel" name="phone" placeholder="Phone number" />
            </label>
          </div>

          <button class="btn-primary mt-16" type="button" data-dialog-open="save-profile">
            Save changes
          </button>
        </section>
      </main>

      <CustomerBubble />
    </>
  )
}

export function SettingsPage() {
  const toggles = [
    { label: 'Push notifications', on: true },
    { label: 'Promotional messages', on: false },
    { label: 'Login alerts', on: true },
  ]

  return (
    <>
      <NavbarInner title="Settings" back="/account" />

      <main class="page">
        <div class="account-menu" style="margin-top:0">
          {toggles.map((t) => (
            <div class="list-row">
              <span class="list-row__label">{t.label}</span>
              <label class="checkbox">
                <input type="checkbox" checked={t.on} data-toggle-switch />
              </label>
            </div>
          ))}
          <div class="list-row">
            <span class="list-row__label">Language</span>
            <span class="list-row__value">{site.brand.lang}</span>
            <Icon name="chevron-right" size="0.32rem" class="list-row__chev" />
          </div>
          <div class="list-row">
            <span class="list-row__label">Clear cache</span>
            <Icon name="chevron-right" size="0.32rem" class="list-row__chev" />
          </div>
        </div>
      </main>

      <CustomerBubble />
    </>
  )
}
