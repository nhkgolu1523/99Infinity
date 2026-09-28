import { site } from '../data'
import { Icon } from './icons'

/* ==========================================================================
   NAVBAR
   ========================================================================== */

/** Home variant — logo on the left, wallet chip (logged in) or register/login/lang on the right. */
export function NavbarHome({
  loggedIn = false,
  balance = 0,
}: {
  loggedIn?: boolean
  balance?: number
}) {
  const amount = '₹' + Number(balance || 0).toFixed(2)
  return (
    <header class="navbar">
      <div class="navbar-fixed">
        <div class="navbar__content">
          <div class="navbar__content-left">
            <a href="/" aria-label={`${site.brand.name} home`}>
              <img class="logo" src={site.brand.logo} alt={site.brand.name} />
            </a>
            {/* brand wordmark — small, right of the logo badge */}
            <img
              class="logo-text"
              src="/assets/img/brand/logo-text.png"
              alt={site.brand.name}
            />
          </div>

          <div class="navbar__content-right">
            <div class="pc-header">
              {loggedIn ? (
                <>
                  <a class="balance wallet-chip" href="/account/wallet" aria-label="Wallet balance">
                    <span class="amount num" data-nav-balance>
                      {amount}
                    </span>
                    <span class="balance__plus">
                      <Icon name="plus" size="0.36rem" />
                    </span>
                  </a>
                  <a class="icon-btn" href="/messages" aria-label="Notifications">
                    <Icon name="bell" size="0.88rem" />
                    <span class="dot"></span>
                  </a>
                </>
              ) : (
                <>
                  <a class="btn register" href="/register">Register</a>
                  <a class="btn login" href="/login">Log in</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/** Inner-page variant — centred title with a back button. */
export function NavbarInner({
  title,
  right,
  back = '/',
}: {
  title: string
  right?: any
  back?: string
}) {
  return (
    <header class="navbar navbar--main">
      <div class="navbar-fixed">
        <div class="navbar__content">
          <div class="navbar__content-left">
            <a class="navbar__back" href={back} aria-label="Back" data-back>
              <Icon name="chevron-left" size="0.48rem" />
            </a>
          </div>
          <div class="navbar__content-center">
            <span class="navbar__title">{title}</span>
          </div>
          <div class="navbar__content-right">{right}</div>
        </div>
      </div>
    </header>
  )
}

/* ==========================================================================
   FOOTER — game providers + social + legal copy
   ========================================================================== */
export function SiteFooter() {
  return (
    <footer class="partner-logos">
      <h2 class="partner-logos__title">Game Providers</h2>

      <div class="partner-logos__grid">
        {site.partners.map((p) => (
          <div class="partner-logos__grid-item">
            <img src={p.src} alt={p.alt} loading="lazy" />
          </div>
        ))}
      </div>

      <div class="partner-logos__social">
        {site.social.map((s) => (
          <img src={s.src} alt={s.alt} loading="lazy" />
        ))}
      </div>

      <div class="partner-logos__text">
        {site.footerText.map((t) => (
          <p class="partner-logos__text-item">
            <span class="dot"></span>
            <span>{t}</span>
          </p>
        ))}
        <p class="partner-logos__text-warning">
          {site.footerWarning.map((w, i) => (
            <>
              {i > 0 && <br />}
              {w}
            </>
          ))}
        </p>
      </div>
    </footer>
  )
}

/* ==========================================================================
   PAGE SHELL
   ========================================================================== */
export function Page({
  children,
  pad = true,
  bg = false,
}: {
  children: any
  pad?: boolean
  bg?: boolean
}) {
  return (
    <>
      {bg && <div class="page__bg"></div>}
      <main class={pad ? 'page' : 'page page--plain'}>{children}</main>
    </>
  )
}
