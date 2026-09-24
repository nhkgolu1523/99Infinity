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

/** Bottom sheet listing quick actions — used by the centre tabbar button. */
export function QuickActionsSheet() {
  const actions = [
    { icon: 'gift', label: 'Daily Bonus', desc: 'Claim your free daily reward', href: '/activity' },
    { icon: 'trophy', label: 'Super Jackpot', desc: 'Win extra rewards on top', href: '/activity' },
    { icon: 'ticket', label: 'Promotions', desc: 'All active bonuses & events', href: '/promotion' },
    { icon: 'wallet', label: 'Deposit', desc: 'Add funds to your wallet', href: '/account' },
  ]

  return (
    <div class="dialog-host dialog-host--bottom" id="quickActionsSheet" data-dialog="quick-actions" role="dialog" aria-modal="true">
      <div class="dialog-host__overlay" data-dialog-close></div>
      <div class="dialog-host__content">
        <div class="sheet">
          <div class="sheet__handle"></div>
          <div class="sheet__title">Get ₹500</div>

          <div class="support-list" style="margin-top:0">
            {actions.map((a) => (
              <a class="support-card" href={a.href}>
                <span class="support-card__icon">
                  <Icon name={a.icon} />
                </span>
                <span class="grow">
                  <span class="support-card__title" style="display:block">
                    {a.label}
                  </span>
                  <span class="support-card__desc" style="display:block">
                    {a.desc}
                  </span>
                </span>
                <Icon name="chevron-right" size="0.32rem" class="c-l3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
