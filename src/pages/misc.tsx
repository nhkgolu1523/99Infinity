import { site } from '../data'
import { playableGameOf } from '../lib/game-pages'
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
          {all.map((g) => {
            /* a really playable game owns its own key and its own screen; the
               artwork-only entries fall through to the catalogue gate */
            const game = playableGameOf(g.src)
            return (
              <a
                class="gm-card"
                href={game ? game.href : '/games'}
                data-game
                data-cat={g.cat}
                data-name={g.src}
                data-game-key={game ? game.key : undefined}
                data-full-nav={game ? '1' : undefined}
                data-requires-auth
              >
                <img src={g.src} alt={game ? game.label : g.label} loading="lazy" />
                <span class="gm-card__title">{game ? game.label : g.label}</span>
              </a>
            )
          })}
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
   LIVE CHAT — the Support team chat screen.

   The markup below is the standalone chat page verbatim (same classes, same
   structure, inside-out), so the chat reads exactly like the design. Two
   things had to change to become part of the site:

     * every class is prefixed `lc-` and every rule lives under `.lc-page` in
       public/css/live-chat.css, so the chat cannot touch the rest of the site;
     * Font Awesome is gone — the icons are the site's own inline SVG sprite
       (src/components/icons.tsx). The chat script builds the same markup when
       it appends a bubble, so see public/js/live-chat.js for the runtime side.

   The chat logic (bot knowledge base, typing indicator, quick topics) is
   public/js/live-chat.js, loaded by src/renderer.tsx for this route only.
   ========================================================================== */
const LICHAT_HTML = `
<header class="lc-header">
  <a class="lc-back" href="/support" data-back aria-label="Back">
    <svg class="icon" style="width:0.4rem;height:0.4rem;" aria-hidden="true"><use href="#i-chevron-left"></use></svg>
  </a>
  <div class="lc-bot-avatar">
    <svg class="icon" style="width:0.42rem;height:0.42rem;" fill="currentColor" aria-hidden="true"><use href="#i-fa-headset"></use></svg>
  </div>
  <div class="lc-head-info">
    <h1>Support Team</h1>
    <div class="lc-status">
      <svg class="icon" style="width:0.14rem;height:0.14rem;" fill="currentColor" aria-hidden="true"><use href="#i-fa-circle-dot"></use></svg>
      <span>Online &middot; Avg reply &lt; 2 min</span>
    </div>
  </div>
</header>

<div class="lc-chat" id="lcChat" data-i18n-skip>
  <div class="lc-date">Today</div>
</div>

<div class="lc-chips-panel" id="lcChips">
  <div class="lc-chips-inner">
    <div class="lc-chips-title">Quick topics</div>
    <div class="lc-chips-grid" id="lcChipsGrid">
      <div class="lc-chip" data-lc-topic="Deposit Issue">
        <svg class="icon" style="width:0.24rem;height:0.24rem;" fill="currentColor" aria-hidden="true"><use href="#i-fa-credit-card"></use></svg>
        <span>Deposit Issue</span>
      </div>
      <div class="lc-chip" data-lc-topic="Withdrawal Issue">
        <svg class="icon" style="width:0.24rem;height:0.24rem;" fill="currentColor" aria-hidden="true"><use href="#i-fa-arrow-up-from-bracket"></use></svg>
        <span>Withdrawal Issue</span>
      </div>
      <div class="lc-chip" data-lc-topic="Game Issue">
        <svg class="icon" style="width:0.24rem;height:0.24rem;" fill="currentColor" aria-hidden="true"><use href="#i-fa-dice"></use></svg>
        <span>Game Issue</span>
      </div>
      <div class="lc-chip" data-lc-topic="Account Issue">
        <svg class="icon" style="width:0.24rem;height:0.24rem;" fill="currentColor" aria-hidden="true"><use href="#i-fa-shield"></use></svg>
        <span>Account Issue</span>
      </div>
    </div>
  </div>
</div>

<div class="lc-input-area">
  <div class="lc-input-wrap">
    <button class="lc-plus" id="lcPlus" type="button" aria-label="Quick topics">
      <svg class="icon" style="width:0.36rem;height:0.36rem;stroke-width:2.4;" aria-hidden="true"><use href="#i-plus"></use></svg>
    </button>
    <input type="text" id="lcInput" placeholder="Type a message..." autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" aria-label="Message">
  </div>
  <button class="lc-send" id="lcSend" type="button" aria-label="Send">
    <svg class="icon" style="width:0.36rem;height:0.36rem;" fill="currentColor" aria-hidden="true"><use href="#i-fa-paper-plane"></use></svg>
  </button>
</div>
`

/** The support chat — a screen of its own (see LICHAT_HTML). */
export function LiveChatPage() {
  return (
    <div
      id="liveChat"
      class="lc-page"
      /* the chat paints its own UI — the site translator keeps its hands off */
      data-i18n-skip="1"
      dangerouslySetInnerHTML={{ __html: LICHAT_HTML }}
    />
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
          <a
            class="cs-card"
            href={c.href}
            {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <span class="cs-card__icon">
              <Icon name={c.icon} size="0.46rem" fill />
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
