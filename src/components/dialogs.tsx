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
              data-toast="You have been logged out successfully!"
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
    a: 'The minimum deposit is ₹100. There is no maximum limit on most payment methods.',
  },
]
