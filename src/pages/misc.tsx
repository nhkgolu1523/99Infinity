import { site } from '../data'
import { NavbarInner } from '../components/layout'
import { SUPPORT_CHANNELS, SUPPORT_FAQS } from '../components/dialogs'
import { Icon } from '../components/icons'

/* ==========================================================================
   GAMES  (gm-* — gold theme catalogue with search + provider filter)
   ========================================================================== */
export function GamesPage() {
  const all: { src: string; cat: string; label: string }[] = []
  for (const [prov, list] of Object.entries(site.games as Record<string, string[]>)) {
    for (const src of list) {
      const label =
        src
          .split('/')
          .pop()!
          .replace(/\.[^.]+$/, '')
          .replace(/[_-]+/g, ' ')
          .replace(/[0-9a-f]{14,}$/i, '')
          .trim() || 'Game'
      all.push({ src, cat: prov, label })
    }
  }

  const cats = Object.keys(site.games as Record<string, string[]>)

  return (
    <div class="gm-page">
      <header class="ac-header">
        <a class="ac-header__btn" href="/" aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <span class="ac-header__title">Games</span>
      </header>

      <main class="gm-content">
        <div class="gm-search">
          <Icon name="search" size="0.384rem" class="gm-search__icon" />
          <input type="search" placeholder="Search games" data-game-search aria-label="Search games" />
        </div>

        <div class="gm-tabs" data-tabs="games">
          <div class="gm-tab active" data-tab="all">All</div>
          {cats.map((c) => (
            <div class="gm-tab" data-tab={c}>
              {c.replace(/_/g, ' ').toUpperCase()}
            </div>
          ))}
        </div>

        <div class="gm-grid" data-games-grid>
          {all.map((g) => (
            <a class="gm-card" href="/games" data-game data-cat={g.cat} data-name={g.src} data-requires-auth>
              <img src={g.src} alt={g.label} loading="lazy" />
              <span class="gm-card__title">{g.label}</span>
            </a>
          ))}
        </div>

        <div class="gm-empty hidden" data-games-empty>
          <Icon name="search" size="0.864rem" />
          <span>No games matched your search.</span>
        </div>
      </main>
    </div>
  )
}

/* ==========================================================================
   SUPPORT
   ========================================================================== */
export function SupportPage() {
  const channels = SUPPORT_CHANNELS

  const faqs = SUPPORT_FAQS

  return (
    <div class="cs-page">
      <header class="cs-header">
        <a class="cs-header__back" href="/" data-back aria-label="Back">
          <Icon name="chevron-left" size="0.52rem" />
        </a>
        <h1 class="cs-header__title">Customer service</h1>
      </header>

      <main class="cs-content">
        {channels.map((c) => (
          <a class="cs-card" href={c.href}>
            <span class="cs-card__icon">
              <Icon name={c.icon} size="0.46rem" />
            </span>
            <span class="cs-card__body">
              <span class="cs-card__title">{c.title}</span>
              <span class="cs-card__desc">{c.desc}</span>
            </span>
            <Icon name="chevron-right" size="0.32rem" class="cs-card__arrow" />
          </a>
        ))}

        <section class="cs-faq">
          <h2 class="cs-faq__heading">Frequently asked questions</h2>
          <div class="cs-faq__list">
            {faqs.map((f) => (
              <div class="cs-faq__item">
                <div class="cs-faq__q">
                  <span>{f.q}</span>
                  <Icon name="chevron-right" size="0.32rem" class="cs-faq__arrow" />
                </div>
                <div class="cs-faq__a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

/* ==========================================================================
   404
   ========================================================================== */
export function NotFoundPage() {
  return (
    <main class="notfound">
      <div class="notfound__code">404</div>
      <p class="notfound__text">The page you are looking for does not exist.</p>
      <a class="btn-primary" href="/">
        Back to home
      </a>
    </main>
  )
}
