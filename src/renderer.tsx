import { jsxRenderer } from 'hono/jsx-renderer'
import { site } from './data'
import { IconSprite } from './components/icons'
import { LoginAlertDialog, QuickActionsSheet, NoticeDialog } from './components/dialogs'

/** Runtime viewport → rem scaling. Runs before paint to avoid FOUC. */
const REM_SCRIPT = `(function(){var d=document.documentElement;
function set(){var w=d.clientWidth||window.innerWidth||0;var h=window.innerHeight||0;
if(w>h&&w>500){d.classList.add('landscape');d.style.fontSize='9vh';return;}
d.classList.remove('landscape');
var f=Math.min(w,540)/10;d.style.fontSize=f+'px';}
set();window.addEventListener('resize',set);window.addEventListener('orientationchange',function(){setTimeout(set,120)});})();`

export const renderer = jsxRenderer(
  ({ children, title, showTabbar = true, active = '', bodyClass = '' }) => {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="google" content="notranslate" />
          <meta name="robots" content="noindex,nofollow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          />
          <meta name="theme-color" content="#111217" />
          <meta name="description" content={`${site.brand.name} — online gaming platform`} />
          <title>{title ? `${title} · ${site.brand.name}` : site.brand.name}</title>

          <link rel="icon" href="/assets/img/brand/logo.png" />

          {/* design system */}
          <link rel="stylesheet" href="/css/base.css" />
          <link rel="stylesheet" href="/css/components.css" />
          <link rel="stylesheet" href="/css/pages.css" />

          <script dangerouslySetInnerHTML={{ __html: REM_SCRIPT }} />
        </head>

        <body class={bodyClass}>
          <IconSprite />

          <div id="app" data-active={active}>
            {children}
          </div>

          {showTabbar && <TabbarMount active={active} />}

          {/* global overlays (outside #app so they cover the tabbar too) */}
          <LoginAlertDialog />
          <QuickActionsSheet />
          <NoticeDialog
            id="logout"
            title="Log out?"
            body="You will need to sign in again to access your wallet and bonuses."
            cta="Log in"
            href="/login"
          />
          <NoticeDialog
            id="deposit-confirm"
            title="Deposit"
            body="Enter an amount to continue. This is a UI demo — no real payment is processed."
            cta="Log in"
            href="/login"
          />
          <NoticeDialog
            id="withdraw-confirm"
            title="Withdraw"
            body="Withdrawals are processed within 1–30 minutes. This is a UI demo."
            cta="Log in"
            href="/login"
          />
          <NoticeDialog
            id="save-profile"
            title="Saved"
            body="Your profile details have been updated."
          />
          <NoticeDialog
            id="forgot-password"
            title="Forgot password"
            body="We will send a verification code to your registered phone number."
            cta="Continue"
            href="/forgot-password"
          />

          <div id="toast" class="toast" role="status" aria-live="polite"></div>

          <script src="/js/app.js" defer></script>
        </body>
      </html>
    )
  }
)

/* --------------------------------------------------------------------------
   Tabbar — rendered outside #app so it can sit above the page frame
   -------------------------------------------------------------------------- */
function TabbarMount({ active }: { active: string }) {
  const items = site.tabbar
  const left = items.slice(0, 2)
  const center = items[2]
  const right = items.slice(3)

  return (
    <nav class="tabbar" aria-label="Primary">
      <div class="tabbar__bar"></div>

      <a class="tabbar__center" href={center.href} aria-label={center.label}>
        <span
          class="tabbar__center-icon"
          style={`background-image:url('${'/assets/img/tabbar/center-wheel.png'}')`}
        ></span>
        <span class="tabbar__center-fg"></span>
        <span class={`tabbar__center-text${active === 'activity' ? ' active' : ''}`}>
          {center.label}
        </span>
      </a>

      <div class="tabbar__items">
        {left.map((t) => (
          <a
            class={`tabbar__items-tab${active === t.key ? ' active' : ''}`}
            href={t.href}
            aria-label={t.label}
          >
            <img
              class="tabbar__items-tab__icon"
              src={active === t.key ? t.activeIcon : t.icon}
              alt=""
            />
            <span>{t.label}</span>
          </a>
        ))}

        <div class="tabbar__items-tab placeholder" aria-hidden="true"></div>

        {right.map((t) => (
          <a
            class={`tabbar__items-tab${active === t.key ? ' active' : ''}`}
            href={t.href}
            aria-label={t.label}
          >
            <img
              class="tabbar__items-tab__icon"
              src={active === t.key ? t.activeIcon : t.icon}
              alt=""
            />
            <span>{t.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
