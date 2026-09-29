import { Icon } from './icons'

/**
 * Bottom-sheet dialog shown when a guest taps a member-only feature.
 * Mirrors the reference "Event Rewards" login prompt.
 * Opened by /js/app.js via [data-dialog="login-alert"].
 */
export function LoginAlertDialog() {
  return (
    <div
      class="dialog-host dialog-host--bottom"
      id="loginAlertDialog"
      data-dialog="login-alert"
      role="dialog"
      aria-modal="true"
      aria-labelledby="loginAlertTitle"
    >
      <div class="dialog-host__overlay" data-dialog-close></div>

      <div class="dialog-host__content">
        <div class="event-rewards-login-dialog">
          <div class="event-rewards-login-dialog__panel" aria-hidden="true">
            <div class="event-rewards-login-dialog__panel-mask"></div>
          </div>

          <img
            class="event-rewards-login-dialog__gift"
            src="/assets/img/float/gift-big.png"
            alt=""
          />

          <div class="event-rewards-login-dialog__title-wrap">
            <span class="event-rewards-login-dialog__title-decor" aria-hidden="true"></span>
            <h2 class="event-rewards-login-dialog__title" id="loginAlertTitle">
              Event Rewards
            </h2>
            <span
              class="event-rewards-login-dialog__title-decor event-rewards-login-dialog__title-decor--right"
              aria-hidden="true"
            ></span>
          </div>

          <p class="event-rewards-login-dialog__description">
            <span>Log in to participate in the </span>
            <span class="event-rewards-login-dialog__highlight">event rewards</span>
            <span> and unlock all 8 exclusive rewards</span>
          </p>

          <a class="event-rewards-login-dialog__primary" href="/login">
            Log in now to participate
          </a>

          <button class="event-rewards-login-dialog__secondary" type="button" data-dialog-close>
            Don't log in yet, continue browsing
          </button>
        </div>
      </div>
    </div>
  )
}

/** Logout confirmation modal — dark-red theme matching the Account redesign. */
export function LogoutDialog() {
  return (
    <div
      class="dialog-host dialog-host--center"
      id="logout"
      data-dialog="logout"
      role="dialog"
      aria-modal="true"
      aria-labelledby="logoutTitle"
    >
      <div class="dialog-host__overlay" data-dialog-close></div>
      <div class="dialog-host__content">
        <div class="ac-modal">
          <div class="ac-modal__icon">
            <Icon name="fa-logout" size="0.64rem" />
          </div>
          <h3 class="ac-modal__title" id="logoutTitle">
            Log out
          </h3>
          <p class="ac-modal__text">
            Are you sure you want to log out? You will need to log in again to access your account.
          </p>
          <div class="ac-modal__buttons">
            <button class="ac-modal__btn ac-modal__btn--no" type="button" data-dialog-close>
              No
            </button>
            <button
              class="ac-modal__btn ac-modal__btn--yes"
              type="button"
              data-dialog-close
              data-logout-confirm
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Centred dialog used for generic notices / confirms. */
export function NoticeDialog({
  id,
  title,
  body,
  cta,
  href,
}: {
  id: string
  title: string
  body: string
  cta?: string
  href?: string
}) {
  return (
    <div class="dialog-host dialog-host--center" id={id} data-dialog={id} role="dialog" aria-modal="true">
      <div class="dialog-host__overlay" data-dialog-close></div>
      <div class="dialog-host__content">
        <div class="dialog-card">
          <div class="dialog-card__title">{title}</div>
          <p class="dialog-card__body">{body}</p>
          <div class="dialog-card__actions">
            <button class="btn-ghost grow" type="button" data-dialog-close>
              Close
            </button>
            {cta && (
              <a class="btn-primary grow" href={href || '/'}>
                {cta}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Shared support content — shown on the /support page (opened from the
 * customer-service bubble and the Settings / Account "Customer service" rows).
 */
export const SUPPORT_CHANNELS = [
  { icon: 'fa-headset', title: 'Live chat', desc: 'Average reply under 2 minutes', href: '/support' },
  { icon: 'fa-envelope', title: 'Email support', desc: 'support@99infinity.example', href: '/support' },
  { icon: 'fa-telegram', title: 'Telegram channel', desc: 'Announcements and bonus codes', href: '/promotion' },
  { icon: 'fa-whatsapp', title: 'WhatsApp', desc: 'Chat with us directly', href: '/support' },
]

export const SUPPORT_FAQS = [
  {
    q: 'How do I create an account?',
    a: 'Tap Register in the top bar, enter your phone number and a password, then confirm. Registration takes less than a minute.',
  },
  {
    q: 'How long do withdrawals take?',
    a: 'Most withdrawals are processed within 1–30 minutes. Bank transfers may take longer on weekends.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. All traffic is encrypted and your password is stored using one-way hashing. We never share your data with third parties.',
  },
  {
    q: 'What is the minimum deposit?',
    a: 'The minimum deposit is ₹500. There is no maximum limit on most payment methods.',
  },
]

/**
 * "Deposit to Play" popup — the client's design (coin icon + ₹ badge, gold
 * border, info line, green CTA).
 *
 * Opened by /js/app.js when a game tile whose Firebase value is 2 is tapped
 * (GAMES/<key> = 2, see src/api.ts → gameStateValue): the game itself is fine,
 * the player just needs a balance first. 0 keeps the plain "Comming Soon!"
 * toast, 1 opens the game, 2 shows this popup.
 *
 * Rendered globally from src/renderer.tsx (outside #app) so every page with
 * game tiles — home, /games, activity rewards — can show it.
 */
export function DepositAlertDialog() {
  return (
    <div
      class="dialog-host dialog-host--center dep-popup"
      id="depositAlert"
      data-dialog="deposit-alert"
      role="dialog"
      aria-modal="true"
      aria-labelledby="depositAlertTitle"
    >
      <div class="dialog-host__overlay" data-dialog-close></div>

      <div class="dialog-host__content">
        <div class="dep-popup__box">
          {/* coin + rupee badge */}
          <div class="dep-popup__icon-wrap">
            <div class="dep-popup__icon">
              <Icon name="fa-coins" size="0.93rem" />
            </div>
            <div class="dep-popup__badge">₹</div>
          </div>

          <h2 class="dep-popup__title" id="depositAlertTitle">
            Deposit to <span class="dep-popup__gold">Play</span>
          </h2>

          <p class="dep-popup__msg">
            You need some balance to start playing. Add your first deposit now and unlock all games
            instantly!
          </p>

          <div class="dep-popup__info">
            <div class="dep-popup__info-icon">
              <Icon name="fa-bolt" size="0.35rem" />
            </div>
            <div class="dep-popup__info-text">
              <span class="dep-popup__info-line">
                <strong>Instant credit</strong> · Minimum deposit{' '}
                {/* the real number comes from CONFIG/LIMITS via /api/config/rewards */}
                <strong data-dep-min>₹500</strong>
              </span>
              <span class="dep-popup__info-line dep-popup__info-line--sub">
                {'Safe & secure payments'}
              </span>
            </div>
          </div>

          <button class="dep-popup__cta" type="button" data-deposit-cta>
            <Icon name="wallet" size="0.4rem" />
            <span>Deposit Now</span>
          </button>

          <button class="dep-popup__cancel" type="button" data-dialog-close>
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
