import { site } from '../data'
import { Icon } from './icons'

/* ==========================================================================
   NAVBAR
   ========================================================================== */

/** Home variant — logo on the left, register/login/lang on the right. */
export function NavbarHome({ loggedIn = false }: { loggedIn?: boolean }) {
  return (
    <header class="navbar">
      <div class="navbar-fixed">
        <div class="navbar__content">
          <div class="navbar__content-left">
            <a href="/" aria-label={`${site.brand.name} home`}>
              <img class="logo" src={site.brand.logo} alt={site.brand.name} />
            </a>
          </div>

          <div class="navbar__content-right">
            <div class="pc-header">
              {loggedIn ? (
                <>
                  <a class="balance" href="/account" aria-label="Wallet balance">
                    <span class="amount num">₹0.00</span>
                    <img class="add" src="/assets/img/ui/service.png" alt="" />
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

              <button class="lang" type="button" data-lang-toggle aria-label="Change language">
                <img src={site.brand.flag} alt="" />
                <span>{site.brand.lang}</span>
              </button>
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
   FLOATING ENTRIES + CUSTOMER BUBBLE
   ========================================================================== */
export function FloatButtons() {
  return (
    <div class="float" id="floatStack">
      {site.floats.map((f) => (
        <a
          class={`float-entry ${f.key}`}
          href={f.href}
          aria-label={f.label}
          title={f.label}
          data-float={f.key}
        ></a>
      ))}
    </div>
  )
}

export function CustomerBubble() {
  return (
    <a class="customer" id="customerBubble" href="/support" aria-label="Customer service">
      <img src="/assets/img/ui/service.png" alt="Customer service" />
    </a>
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
