import { site } from '../data'
import { NavbarInner, SiteFooter } from '../components/layout'
import { Icon } from '../components/icons'
import { SPRITE_SYMBOLS } from '../components/account-sprite'

/* ==========================================================================
   ACCOUNT – exact copy of the client reference (Account Tab.html):
   gradient hero + avatar/UID, total balance card, quick actions,
   financial-services cards, settings list, service-center grid + logout.
   ========================================================================== */
export function AccountPage() {
  const quick = [
    { icon: 'icon-wallets', label: 'Wallet', href: '/account/history' },
    { icon: 'icon-rechargeIcon', label: 'Deposit', href: '/account/deposit' },
    { icon: 'icon-widthdrawBlue', label: 'Withdraw', href: '/account/withdraw' },
    { icon: 'icon-VipIcon', label: 'VIP', href: '/activity' },
  ]

  const financial = [
    { icon: 'icon-betHistory', title: 'Game History', desc: 'My game history', href: '/account/bets' },
    { icon: 'icon-tradeHistory', title: 'Transaction', desc: 'My transaction history', href: '/account/history' },
    { icon: 'icon-rechargeHistory', title: 'Deposit', desc: 'My deposit history', href: '/account/deposit-history' },
    { icon: 'icon-myWithdrawHistory', title: 'Withdraw', desc: 'My withdraw history', href: '/account/withdraw-history' },
  ]

  const panel = [
    { icon: 'icon-notification', label: 'Notification', href: '/messages' },
    { icon: 'icon-gifts', label: 'Gifts', href: '/daily-reward' },
    { icon: 'icon-login_list_icon', label: 'My Top-Up Coupons', href: '/activity' },
    { icon: 'icon-statsIcon', label: 'Game statistics', href: '/account/bets' },
    { icon: 'fa-shield', label: 'Security Center', href: '/account/security' },
    { icon: 'user', label: 'Personal information', href: '/account/profile' },
    { icon: 'icon-language', label: 'Language', value: 'English', href: '/account/settings' },
  ]

  const service = [
    { icon: 'icon-settingCenter', label: 'Settings', href: '/account/settings' },
    { icon: 'icon-feedback', label: 'Feedback', href: '/support' },
    { icon: 'icon-notificationCenter', label: 'Announcement', href: '/messages' },
    { icon: 'icon-serverTicket', label: 'Customer Service', href: '/support' },
    { icon: 'icon-guide', label: "Beginner's Guide", href: '/support' },
    { icon: 'icon-about', label: 'About us', href: '/account/about' },
  ]

  return (
    <div class="acct-page">
      {/* client SVG icon sprite — exact copy from the Account Tab reference.
          (dangerouslySetInnerHTML cannot go on <svg> itself in Hono JSX, so
          each <symbol> is rendered as its own node, like icons.tsx does.) */}
      <svg style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">
        {SPRITE_SYMBOLS.map((s) => (
          <symbol
            {...s.attrs}
            key={s.id}
            dangerouslySetInnerHTML={{ __html: s.body }}
          />
        ))}
      </svg>

      {/* gradient hero – avatar, nickname, UID, last login */}
      <div class="userInfo__container">
        <div class="userInfo__container-content">
          <div class="userInfo__container-content-wrapper">
            <div class="userInfo__container-content__avatar">
              <img class="userAvatar" src="/assets/img/account/avatar.png" alt="" />
            </div>
            <div class="userInfo__container-content__name">
              <div class="userInfo__container-content-nickname">
                <h3>Guest</h3>
                <div class="n0" style="background-image:url('/assets/img/account/vip-0.png')"></div>
              </div>
              <div class="userInfo__container-content-uid">
                <span>UID</span>
                <span>|</span>
                <span>1426676</span>
                <svg class="svg-icon icon-copy" data-copy="1426676" data-copy-toast="UID Copied!">
                  <use href="#icon-copy"></use>
                </svg>
              </div>
              <div class="userInfo__container-content-logintime">
                <span>Last login:&nbsp;</span>
                <span>2026-09-26 20:51:03</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="userinfo-content">
        {/* total balance + quick actions */}
        <div class="totalSavings__container">
          <div class="totalSavings__container-header">
            <div class="totalSavings__container-header-box ar-1px-b">
              <div class="balance_info">
                <div class="totalSavings__container-header__title">
                  <span>Total balance</span>
                </div>
                <p class="totalSavings__container-header__subtitle">
                  <span>₹0.00</span>
                  <svg class="svg-icon icon-refreshBalance" data-toast="Balance refreshed!">
                    <use href="#icon-refreshBalance"></use>
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div class="totalSavings__container-content">
            {quick.map((q) => (
              <div class="totalSavings__container-content-item">
                <a href={q.href}>
                  <svg class={`svg-icon ${q.icon}`}>
                    <use href={`#${q.icon}`}></use>
                  </svg>
                  <span>{q.label}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* game / transaction / deposit / withdraw history cards */}
        <div class="financialServices__container">
          <div class="financialServices__container-box">
            {financial.map((f) => (
              <a href={f.href}>
                <svg class={`svg-icon ${f.icon}`}>
                  <use href={`#${f.icon}`}></use>
                </svg>
                <div class="financialServices__container-box-para">
                  <h3>{f.title}</h3>
                  <span>{f.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* notification / gifts / coupons / statistics / language */}
        <div class="settingPanel__container">
          <div class="settingPanel__container-items">
            {panel.map((p) => (
              <a class="settingPanel__container-items__item ar-1px-b" href={p.href}>
                <div class="settingPanel__container-items__title">
                  {p.icon.startsWith('icon-') ? (
                    <svg class={`svg-icon ${p.icon}`}>
                      <use href={`#${p.icon}`}></use>
                    </svg>
                  ) : (
                    <Icon name={p.icon} size="0.8rem" />
                  )}
                  <span>{p.label}</span>
                </div>
                <div class="settingPanel__container-items-right">
                  {p.value && <span>{p.value}</span>}
                  <i class="van-icon-arrow">
                    <Icon name="chevron-right" size="0.4rem" />
                  </i>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* service center grid + logout */}
        <div class="serviceCenter-wrap">
          <div class="serviceCenter__container">
            <h1>Service center</h1>
            <div class="serviceCenter__container-items">
              {service.map((s) => (
                <a class="serviceCenter__container-items__item" href={s.href}>
                  <svg class={`svg-icon ${s.icon}`}>
                    <use href={`#${s.icon}`}></use>
                  </svg>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div class="serviceCenter-wrap-header">
            <button data-dialog-open="logout">
              <Icon name="fa-logout" size="0.64rem" /> Log out
            </button>
          </div>
        </div>
      </div>

      {/* floating customer-service button */}
      <a class="customer" href="/support" aria-label="Customer service">
        <img src="/assets/img/account/customer-float.png" alt="" />
      </a>
    </div>
  )
}
/* ==========================================================================
   WALLET / DEPOSIT / WITHDRAW
   ========================================================================== */
const METHODS = [
  { key: 'upi', label: 'UPI', desc: 'Instant · No fee', icon: 'phone' },
  { key: 'bank', label: 'Bank Transfer', desc: '1—30 minutes', icon: 'wallet' },
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

    </>
  )
}

/* ==========================================================================
   WITHDRAW (dark-green redesign)
   ========================================================================== */
export function WithdrawPage() {
  return (
    <div class="ac-page" id="wdPage">
      <header class="ac-header">
        <a class="ac-header__btn" href="/account" aria-label="Back">
          <Icon name="chevron-left" size="0.37rem" />
        </a>
        <span class="ac-header__title">Withdraw</span>
      </header>

      <main class="ac-content">
        {/* balance + amount */}
        <div class="wd-card">
          <div class="wd-balance">
            <span>Available balance</span>
            <div class="wd-balance__amount">
              <Icon name="fa-rupee" size="0.31rem" /> 0.00
            </div>
          </div>

          <div class="wd-input">
            <span class="wd-input__symbol">₹</span>
            <input
              type="text"
              id="wdAmount"
              class="wd-input__field"
              placeholder="Enter amount"
              inputmode="numeric"
              autocomplete="off"
            />
          </div>

          <div class="wd-quick">
            {[100, 500, 1000, 5000].map((v) => (
              <button class="wd-quick__btn" type="button" data-wd-quick={v}>
                ₹{v}
              </button>
            ))}
          </div>

          <button class="wd-request" type="button" id="wdRequest">
            Request withdrawal
          </button>
        </div>

        {/* payment methods */}
        <div class="wd-card">
          <div class="wd-methods-title">Payment methods</div>

          {/* UPI */}
          <div class="wd-method selected" data-wd-method="upi">
            <div class="wd-method__item">
              <span class="wd-method__left">
                <span class="wd-method__icon">
                  <Icon name="fa-mobile" size="0.43rem" />
                </span>
                <span class="wd-method__info">
                  <h4>UPI</h4>
                  <p>Instant · No fee</p>
                </span>
              </span>
              <Icon name="chevron-right" size="0.31rem" class="wd-method__chev" />
            </div>
            <div class="wd-inline">
              <div class="wd-inline__inner">
                <div class="wd-form">
                  <div class="wd-group">
                    <label class="wd-label" for="wdUpi">UPI ID</label>
                    <input type="text" class="wd-field" id="wdUpi" placeholder="yourname@upi" />
                    <div class="wd-hint">
                      <Icon name="fa-circle-info" size="0.23rem" /> Example: 9876543210@paytm, user@okaxis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Transfer */}
          <div class="wd-method" data-wd-method="bank">
            <div class="wd-method__item">
              <span class="wd-method__left">
                <span class="wd-method__icon">
                  <Icon name="fa-building-columns" size="0.43rem" />
                </span>
                <span class="wd-method__info">
                  <h4>Bank Transfer</h4>
                  <p>1—30 minutes</p>
                </span>
              </span>
              <Icon name="chevron-right" size="0.31rem" class="wd-method__chev" />
            </div>
            <div class="wd-inline">
              <div class="wd-inline__inner">
                <div class="wd-form">
                  <div class="wd-group">
                    <label class="wd-label" for="wdBankName">Account Holder Name</label>
                    <input type="text" class="wd-field" id="wdBankName" placeholder="Enter full name as per bank" />
                  </div>
                  <div class="wd-group">
                    <label class="wd-label" for="wdBankAcc">Account Number</label>
                    <input type="text" class="wd-field" id="wdBankAcc" placeholder="Enter account number" inputmode="numeric" />
                  </div>
                  <div class="wd-group">
                    <label class="wd-label" for="wdBankAccConfirm">Confirm Account Number</label>
                    <input type="text" class="wd-field" id="wdBankAccConfirm" placeholder="Re-enter account number" inputmode="numeric" />
                  </div>
                  <div class="wd-group">
                    <label class="wd-label" for="wdBankIfsc">IFSC Code</label>
                    <input type="text" class="wd-field" id="wdBankIfsc" placeholder="e.g., SBIN0001234" />
                  </div>
                  <div class="wd-group">
                    <label class="wd-label" for="wdBankBank">Bank Name</label>
                    <input type="text" class="wd-field" id="wdBankBank" placeholder="e.g., State Bank of India" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* USDT */}
          <div class="wd-method" data-wd-method="usdt">
            <div class="wd-method__item">
              <span class="wd-method__left">
                <span class="wd-method__icon">
                  <Icon name="fa-coins" size="0.43rem" />
                </span>
                <span class="wd-method__info">
                  <h4>USDT (TRC20)</h4>
                  <p>Crypto · Low fee</p>
                </span>
              </span>
              <Icon name="chevron-right" size="0.31rem" class="wd-method__chev" />
            </div>
            <div class="wd-inline">
              <div class="wd-inline__inner">
                <div class="wd-form">
                  <div class="wd-group">
                    <label class="wd-label" for="wdUsdt">Wallet Address</label>
                    <input type="text" class="wd-field" id="wdUsdt" placeholder="Enter TRC20 wallet address" />
                    <div class="wd-hint wd-hint--warn">
                      <Icon name="fa-triangle-exclamation" size="0.23rem" /> Only TRC20 network is supported. Wrong network may result in loss.
                    </div>
                  </div>
                  <div class="wd-group">
                    <label class="wd-label" for="wdUsdtConfirm">Confirm Wallet Address</label>
                    <input type="text" class="wd-field" id="wdUsdtConfirm" placeholder="Re-enter wallet address" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Debit / Credit Card */}
          <div class="wd-method" data-wd-method="card">
            <div class="wd-method__item">
              <span class="wd-method__left">
                <span class="wd-method__icon">
                  <Icon name="fa-credit-card" size="0.43rem" />
                </span>
                <span class="wd-method__info">
                  <h4>Debit / Credit Card</h4>
                  <p>Visa · Mastercard</p>
                </span>
              </span>
              <Icon name="chevron-right" size="0.31rem" class="wd-method__chev" />
            </div>
            <div class="wd-inline">
              <div class="wd-inline__inner">
                <div class="wd-form">
                  <div class="wd-group">
                    <label class="wd-label" for="wdCardNum">Card Number</label>
                    <input type="text" class="wd-field" id="wdCardNum" placeholder="1234 5678 9012 3456" maxlength="19" inputmode="numeric" />
                  </div>
                  <div class="wd-group">
                    <label class="wd-label" for="wdCardName">Name on Card</label>
                    <input type="text" class="wd-field" id="wdCardName" placeholder="Full name as on card" />
                  </div>
                  <div class="wd-form__row">
                    <div class="wd-group">
                      <label class="wd-label" for="wdCardExp">Expiry Date</label>
                      <input type="text" class="wd-field" id="wdCardExp" placeholder="MM/YY" maxlength="5" inputmode="numeric" />
                    </div>
                    <div class="wd-group">
                      <label class="wd-label" for="wdCardCvv">CVV</label>
                      <input type="password" class="wd-field" id="wdCardCvv" placeholder="•••" maxlength="4" inputmode="numeric" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* confirmation modal */}
      <div
        class="dialog-host dialog-host--center"
        id="withdrawConfirm"
        data-dialog="withdrawConfirm"
        role="dialog"
        aria-modal="true"
      >
        <div class="dialog-host__overlay" data-dialog-close></div>
        <div class="dialog-host__content">
          <div class="wd-modal">
            <div class="wd-modal__icon">
              <Icon name="fa-arrow-up-from-bracket" size="0.46rem" />
            </div>
            <h3 class="wd-modal__title">Confirm Withdrawal</h3>
            <p class="wd-modal__text" id="wdConfirmText">Are you sure you want to withdraw ₹0?</p>
            <div class="wd-modal__buttons">
              <button class="wd-modal__btn wd-modal__btn--no" type="button" data-dialog-close>
                Cancel
              </button>
              <button class="wd-modal__btn wd-modal__btn--yes" type="button" id="wdConfirm" data-dialog-close>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ==========================================================================
   HISTORY / TRANSACTIONS  (th-* – gold theme list, header shared with ac-*)
   ========================================================================== */
export function HistoryPage({
  mode = 'all',
}: {
  mode?: 'all' | 'deposit' | 'withdraw' | 'bets'
}) {
  const titles: Record<string, string> = {
    all: 'Transaction history',
    deposit: 'Deposit history',
    withdraw: 'Withdraw history',
    bets: 'Bet history',
  }

  const rows = [
    { type: 'Deposit', method: 'UPI', date: '2026-09-20 14:22', amount: '+₹500.00', dir: 'credit', icon: 'arrow-down', cat: 'deposit' },
    { type: 'Bet', method: 'Aviator', date: '2026-09-20 14:30', amount: '-₹50.00', dir: 'debit', icon: 'fa-dice', cat: 'bets' },
    { type: 'Win', method: 'Win Go 30S', date: '2026-09-20 14:41', amount: '+₹180.00', dir: 'credit', icon: 'trophy', cat: 'bets' },
    { type: 'Withdraw', method: 'Bank', date: '2026-09-21 09:02', amount: '-₹300.00', dir: 'debit', icon: 'arrow-up', cat: 'withdraw' },
    { type: 'Deposit', method: 'USDT', date: '2026-09-21 11:15', amount: '+₹1,000.00', dir: 'credit', icon: 'arrow-down', cat: 'deposit' },
    { type: 'Bet', method: 'Plinko', date: '2026-09-21 12:44', amount: '-₹200.00', dir: 'debit', icon: 'fa-dice', cat: 'bets' },
    { type: 'Withdraw', method: 'UPI', date: '2026-09-22 08:30', amount: '-₹750.00', dir: 'debit', icon: 'arrow-up', cat: 'withdraw' },
  ]

  return (
    <div class="th-page">
      <header class="ac-header">
        <a class="ac-header__btn" href="/account" aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <span class="ac-header__title">{titles[mode]}</span>
      </header>

      <main class="th-content">
        <div class="th-tabs" data-tabs="txhistory">
          <div class={`th-tab${mode === 'all' ? ' active' : ''}`} data-tab="all">All</div>
          <div class={`th-tab${mode === 'deposit' ? ' active' : ''}`} data-tab="deposit">Deposit</div>
          <div class={`th-tab${mode === 'withdraw' ? ' active' : ''}`} data-tab="withdraw">Withdraw</div>
          <div class={`th-tab${mode === 'bets' ? ' active' : ''}`} data-tab="bets">Bets</div>
        </div>

        <div class="th-list" data-tab-panel="txhistory">
          {rows.map((r) => (
            <div class="th-card" data-tab-item={r.cat}>
              <div class="th-card__left">
                <span class={`th-card__icon ${r.dir}`}>
                  <Icon name={r.icon} size="0.384rem" />
                </span>
                <span class="th-card__info">
                  <span class="th-card__title">
                    <span class="th-card__type">{r.type}</span>
                    <span class="th-card__method"> · {r.method}</span>
                  </span>
                  <span class="th-card__date">{r.date}</span>
                </span>
              </div>
              <span class={`th-card__amount ${r.dir}`}>{r.amount}</span>
            </div>
          ))}
        </div>

        <div class="th-empty" data-tab-empty="txhistory">
          <Icon name="history" size="1.008rem" />
          <p>No transactions found.</p>
        </div>
      </main>
    </div>
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

    </>
  )
}

export function SettingsPage() {
  const toggles = [
    { label: 'Push notifications', on: true },
    { label: 'Promotional messages', on: false },
    { label: 'Login alerts', on: true },
    { label: 'Sound & Vibration', on: true },
  ]

  return (
    <div class="ac-page">
      <header class="ac-subheader">
        <a class="ac-header__btn" href="/account" aria-label="Back">
          <Icon name="chevron-left" size="0.37rem" />
        </a>
        <h2 class="ac-subheader__title">Settings</h2>
      </header>

      <main class="ac-content">
        <div class="ac-card">
          {toggles.map((t) => (
            <label class="ac-settings-item ac-settings-item--toggle">
              <span class="ac-settings-item__label">{t.label}</span>
              <input type="checkbox" class="ac-toggle" checked={t.on} />
            </label>
          ))}
        </div>

        <div class="ac-card">
          <div class="ac-settings-item" data-toast="Cache cleared successfully!">
            <span class="ac-settings-item__label">Clear cache</span>
            <Icon name="chevron-right" size="0.28rem" class="ac-settings-item__chev" />
          </div>
        </div>

        <div class="ac-card">
          <a class="ac-settings-item" href="/account/terms">
            <span class="ac-settings-item__label">Terms of Service</span>
            <Icon name="chevron-right" size="0.28rem" class="ac-settings-item__chev" />
          </a>
          <a class="ac-settings-item" href="/account/privacy">
            <span class="ac-settings-item__label">Privacy Policy</span>
            <Icon name="chevron-right" size="0.28rem" class="ac-settings-item__chev" />
          </a>
        </div>

        <button class="ac-logout-btn" data-dialog-open="logout">
          <Icon name="fa-logout" size="0.42rem" /> Log out
        </button>

        <div class="ac-version">Version 1.0.0</div>
      </main>
    </div>
  )
}

/* ==========================================================================
   ABOUT US
   ========================================================================== */
export function AboutPage() {
  return (
    <div class="ac-page">
      <header class="ac-subheader">
        <a class="ac-header__btn" href="/account" aria-label="Back">
          <Icon name="chevron-left" size="0.37rem" />
        </a>
        <h2 class="ac-subheader__title">About Us</h2>
      </header>

      <main class="ac-content">
        <div class="ac-about-hero">
          <h1>99infinity</h1>
          <p>India's Leading Interactive Entertainment Platform</p>
        </div>

        <div class="ac-stats">
          <div class="ac-stat">
            <h3>250M+</h3>
            <p>Users</p>
          </div>
          <div class="ac-stat">
            <h3>$100M</h3>
            <p>Funding</p>
          </div>
          <div class="ac-stat">
            <h3>2018</h3>
            <p>Launched</p>
          </div>
        </div>

        <div class="ac-legal">
          <p>
            99infinity is India's leading interactive entertainment platform, bringing together
            Games, Esports, and a lot more on a single app. Launched in 2018, 99infinity has grown
            into a cultural phenomenon with a vibrant community of 250 Million+ users. With its
            mission to democratize entertainment for Bharat, 99infinity is redefining how India
            engages digitally.
          </p>
          <p>
            99infinity, a Series-C funded venture, has raised $100 million from Marquee gaming and
            entertainment investors such as Griffin Gaming Partners, Courtside Ventures, Maker's
            Fund, all of whom made their first investment in the Indian start-up ecosystem through
            99infinity.
          </p>
        </div>
      </main>
    </div>
  )
}

/* ==========================================================================
   SECURITY CENTER
   ========================================================================== */
export function SecurityPage() {
  const items = [
    { icon: 'fa-key', label: 'Change Password', href: '/account/security/password' },
    { icon: 'fa-mobile', label: 'Two-Factor Auth (2FA)', badge: 'Off', red: true, href: '/account/security/2fa' },
    { icon: 'fa-lock', label: 'Transaction PIN', badge: 'Set', gold: true, href: '/account/security/pin' },
    { icon: 'fa-laptop', label: 'Active Devices', badge: '1 Device', href: '/account/security/devices' },
    { icon: 'fa-envelope', label: 'Anti-Phishing Code', href: '/account/security/antiphishing' },
  ]

  return (
    <div class="ac-page">
      <header class="ac-subheader">
        <a class="ac-header__btn" href="/account" aria-label="Back">
          <Icon name="chevron-left" size="0.37rem" />
        </a>
        <h2 class="ac-subheader__title">Security Center</h2>
      </header>

      <main class="ac-content">
        <div class="ac-security-status">
          <div class="ac-security-icon">
            <img src="/assets/img/avatar/guest.svg" alt="" />
          </div>
          <h2>Your Account is Secure</h2>
          <p>All security measures are active</p>
        </div>

        <div class="ac-list">
          {items.map((m) => (
            <a class="ac-list__item" href={m.href}>
              <span class="ac-list__left">
                <span class="ac-list__icon">
                  <Icon name={m.icon} size="0.4rem" />
                </span>
                <span class="ac-list__label">{m.label}</span>
              </span>
              <span class="ac-list__right">
                {m.badge && (
                  <span class={`ac-badge${m.gold ? ' gold' : ''}${m.red ? ' red' : ''}`}>
                    {m.badge}
                  </span>
                )}
                <Icon name="chevron-right" size="0.28rem" class="ac-list__chev" />
              </span>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

/* ==========================================================================
   SECURITY TOOLS (sec-*) – Change Password / 2FA / PIN / Devices / Phishing
   ========================================================================== */
function SecShell({ title, children }: { title: string; children: any }) {
  return (
    <div class="ac-page">
      <header class="ac-subheader">
        <a class="ac-header__btn" href="/account/security" aria-label="Back">
          <Icon name="chevron-left" size="0.37rem" />
        </a>
        <h2 class="ac-subheader__title">{title}</h2>
      </header>
      <main class="ac-content">{children}</main>
    </div>
  )
}

function SecEye() {
  return (
    <button type="button" class="sec-eye" data-toggle-password aria-label="Show password">
      <Icon name="eye" size="0.4rem" />
    </button>
  )
}

export function ChangePasswordPage() {
  return (
    <SecShell title="Change Password">
      <p class="sec-info">
        Choose a strong password to keep your account safe. Password should be at least 8 characters
        long with a mix of letters, numbers, and symbols.
      </p>

      <form data-sec-form="password">
        <div class="sec-group">
          <label class="sec-label">Current Password</label>
          <div class="sec-input">
            <Icon name="lock" size="0.43rem" class="sec-input__icon" />
            <input type="password" name="current" placeholder="Enter current password" data-sec-current />
            <SecEye />
          </div>
        </div>

        <div class="sec-group">
          <label class="sec-label">New Password</label>
          <div class="sec-input">
            <Icon name="fa-key" size="0.43rem" class="sec-input__icon" />
            <input type="password" name="new" placeholder="Enter new password" data-pass-strength />
            <SecEye />
          </div>
          <div class="sec-strength" data-strength-bars>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="sec-strength__text" data-strength-text>Enter a password</div>
        </div>

        <div class="sec-group">
          <label class="sec-label">Confirm New Password</label>
          <div class="sec-input">
            <Icon name="fa-key" size="0.43rem" class="sec-input__icon" />
            <input type="password" name="confirm" placeholder="Re-enter new password" />
            <SecEye />
          </div>
        </div>

        <button class="sec-btn" type="submit">Update Password</button>
      </form>
    </SecShell>
  )
}

export function TwoFactorPage() {
  return (
    <SecShell title="Two-Factor Auth (2FA)">
      <p class="sec-info">
        Add an extra layer of security to your account. Scan the QR code with{' '}
        <strong>Google Authenticator</strong> or <strong>Authy</strong> app.
      </p>

      <div class="sec-qr">
        <div class="sec-qr__pattern">
          <span>QR CODE</span>
        </div>
      </div>

      <div class="sec-step">
        <span class="sec-step__num">1</span>
        <p class="sec-step__text">Open your authenticator app and tap the <strong>"+"</strong> icon.</p>
      </div>

      <div class="sec-step">
        <span class="sec-step__num">2</span>
        <p class="sec-step__text">Scan the QR code above, or enter this code manually:</p>
      </div>

      <div class="sec-secret">
        <span>JBSW Y3DP EHPK 3PXP</span>
        <button type="button" data-copy="JBSWY3DPEHPK3PXP" aria-label="Copy secret code">
          <Icon name="copy" size="0.38rem" />
        </button>
      </div>

      <div class="sec-step">
        <span class="sec-step__num">3</span>
        <p class="sec-step__text">Enter the 6-digit code from your app to verify.</p>
      </div>

      <form data-sec-form="2fa">
        <div class="sec-group">
          <label class="sec-label">Verification Code</label>
          <div class="sec-input">
            <Icon name="shield-check" size="0.43rem" class="sec-input__icon" />
            <input
              type="text"
              name="code"
              placeholder="Enter 6-digit code"
              maxlength="6"
              inputmode="numeric"
              autocomplete="one-time-code"
            />
          </div>
        </div>

        <button class="sec-btn" type="submit">Verify &amp; Enable 2FA</button>
      </form>
    </SecShell>
  )
}

export function TransactionPinPage() {
  return (
    <SecShell title="Transaction PIN">
      <p class="sec-info sec-info--center">
        Set a 4-digit PIN to secure all your transactions. You will need to enter this PIN every time
        you withdraw funds.
      </p>

      <div class="sec-pin__title" data-pin-title>Enter your PIN</div>
      <div class="sec-pin__subtitle" data-pin-subtitle>Choose a 4-digit code you'll remember</div>

      <div class="sec-pin__dots" data-pin-dots>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="sec-pin__keypad" data-pin-keypad>
        {'123456789'.split('').map((n) => (
          <button class="sec-key" type="button" data-key={n}>{n}</button>
        ))}
        <span class="sec-key sec-key--empty"></span>
        <button class="sec-key" type="button" data-key="0">0</button>
        <button class="sec-key sec-key--del" type="button" data-pin-back aria-label="Delete">
          <Icon name="backspace" size="0.576rem" />
        </button>
      </div>
    </SecShell>
  )
}

export function DevicesPage() {
  return (
    <SecShell title="Active Devices">
      <p class="sec-info">
        You are currently logged in on <strong>2 devices</strong>. If you see any unfamiliar device,
        log it out immediately.
      </p>

      <div class="sec-device" data-device>
        <span class="sec-device__icon sec-device__icon--current">
          <Icon name="fa-mobile" size="0.48rem" />
        </span>
        <span class="sec-device__info">
          <h4>iPhone 14 Pro <span class="sec-device__tag">Current</span></h4>
          <p>Mumbai, India · 2026-09-25 12:30</p>
        </span>
      </div>

      <div class="sec-device" data-device>
        <span class="sec-device__icon">
          <Icon name="fa-laptop" size="0.48rem" />
        </span>
        <span class="sec-device__info">
          <h4>Windows PC</h4>
          <p>Delhi, India · 2026-09-20 18:15</p>
        </span>
        <button class="sec-device__logout" type="button" data-device-logout>Logout</button>
      </div>

      <button class="sec-btn-danger" type="button" data-logout-all>
        Log out from all other devices
      </button>
    </SecShell>
  )
}

export function AntiPhishingPage() {
  return (
    <SecShell title="Anti-Phishing Code">
      <div class="sec-alert">
        <Icon name="shield-check" size="0.48rem" />
        <p>
          Set a unique <strong>Anti-Phishing Code</strong> that will appear in all official emails
          from us. If an email doesn't contain this code, it's a phishing attempt.
        </p>
      </div>

      <form data-sec-form="phishing">
        <div class="sec-group">
          <label class="sec-label">Your Anti-Phishing Code</label>
          <div class="sec-input">
            <Icon name="mail" size="0.43rem" class="sec-input__icon" />
            <input
              type="text"
              name="code"
              placeholder="Enter a unique code"
              maxlength="20"
              data-charcount
            />
          </div>
          <div class="sec-count"><span data-charcount-out>0</span> / 20</div>
        </div>

        <p class="sec-hint">
          The code should be unique to you and easy to recognize. Do not share it with anyone.
          Example: <strong>RAHUL99</strong>, <strong>MYCODE123</strong>.
        </p>

        <button class="sec-btn" type="submit">Save Code</button>
      </form>
    </SecShell>
  )
}

/* ==========================================================================
   TERMS OF SERVICE
   ========================================================================== */
export function TermsPage() {
  return (
    <div class="ac-page">
      <header class="ac-subheader">
        <a class="ac-header__btn" href="/account/settings" aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <h2 class="ac-subheader__title">Terms of Service</h2>
      </header>

      <main class="ac-content">
        <div class="ac-legal">
          <p class="ac-legal__updated">Last Updated: October 2023</p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using the 99infinity platform, you agree to be bound by these Terms of
            Service. If you do not agree, you must not use our services.
          </p>

          <h3>2. Eligibility</h3>
          <p>
            You must be at least 18 years of age to create an account and participate in any games.
            We reserve the right to request proof of age at any time.
          </p>

          <h3>3. Account Responsibility</h3>
          <p>
            You are solely responsible for maintaining the confidentiality of your account
            credentials. Any activity conducted through your account is your responsibility. Notify
            us immediately of any unauthorized use.
          </p>

          <h3>4. Deposits and Withdrawals</h3>
          <p>
            All deposits must be made through authorized payment methods. Withdrawals are subject
            to verification and may take up to 24 hours to process. We reserve the right to refuse
            any transaction.
          </p>

          <h3>5. Fair Play</h3>
          <p>
            Cheating, collusion, or use of automated bots is strictly prohibited. Any account found
            violating these rules will be permanently banned, and funds may be forfeited.
          </p>

          <h3>6. Limitation of Liability</h3>
          <p>
            99infinity is not liable for any technical glitches, network issues, or financial
            losses incurred during gameplay. Play responsibly.
          </p>
        </div>
      </main>
    </div>
  )
}

/* ==========================================================================
   PRIVACY POLICY
   ========================================================================== */
export function PrivacyPage() {
  return (
    <div class="ac-page">
      <header class="ac-subheader">
        <a class="ac-header__btn" href="/account/settings" aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <h2 class="ac-subheader__title">Privacy Policy</h2>
      </header>

      <main class="ac-content">
        <div class="ac-legal">
          <p class="ac-legal__updated">Last Updated: October 2023</p>

          <h3>1. Information We Collect</h3>
          <p>
            We collect personal information such as your name, phone number, email address, and
            device data when you register and use our platform.
          </p>

          <h3>2. How We Use Your Data</h3>
          <p>
            Your data is used to process transactions, provide customer support, prevent fraud, and
            personalize your gaming experience.
          </p>

          <h3>3. Data Security</h3>
          <p>
            We implement industry-standard encryption and security measures to protect your data.
            Your password is stored using one-way hashing and is never visible to us.
          </p>

          <h3>4. Sharing with Third Parties</h3>
          <p>
            We do not sell your personal data. We may share information with payment gateways and
            regulatory authorities only when required by law.
          </p>

          <h3>5. Your Rights</h3>
          <p>
            You have the right to access, update, or request deletion of your personal data by
            contacting our customer support team.
          </p>

          <h3>6. Cookies</h3>
          <p>
            We use cookies to enhance your experience and analyze platform traffic. You can disable
            cookies in your browser settings.
          </p>
        </div>
      </main>
    </div>
  )
}
