import { site } from '../data'
import { NavbarInner, CustomerBubble } from '../components/layout'
import { Icon } from '../components/icons'

/* ==========================================================================
   GAMES  (full catalogue with search + category filter)
   ========================================================================== */
export function GamesPage() {
  const all: { src: string; cat: string }[] = []
  for (const [prov, list] of Object.entries(site.games as Record<string, string[]>)) {
    for (const src of list) all.push({ src, cat: prov })
  }

  const cats = Object.keys(site.games as Record<string, string[]>)

  return (
    <>
      <NavbarInner title="Games" back="/" />

      <main class="page page--no-tabbar">
        <div class="searchbar">
          <Icon name="search" />
          <input type="search" placeholder="Search games" data-game-search aria-label="Search games" />
        </div>

        <div class="tabs-line mt-12" data-tabs="games">
          <div class="tabs-line__item active" data-tab="all">All</div>
          {cats.map((c) => (
            <div class="tabs-line__item" data-tab={c}>
              {c.replace(/_/g, ' ').toUpperCase()}
            </div>
          ))}
        </div>

        <div class="games-grid" data-games-grid>
          {all.map((g) => (
            <a class="games-grid__item" href="/games" data-game data-cat={g.cat} data-name={g.src}>
              <img src={g.src} alt="" loading="lazy" />
            </a>
          ))}
        </div>

        <div class="empty hidden" data-games-empty>
          <Icon name="search" size="2.13333rem" />
          <span>No games matched your search.</span>
        </div>
      </main>

      <CustomerBubble />
    </>
  )
}

/* ==========================================================================
   SUPPORT
   ========================================================================== */
export function SupportPage() {
  const channels = [
    { icon: 'headset', title: 'Live chat', desc: 'Average reply under 2 minutes', href: '/support' },
    { icon: 'mail', title: 'Email support', desc: 'support@veergame.example', href: '/support' },
    { icon: 'ticket', title: 'Telegram channel', desc: 'Announcements and bonus codes', href: '/promotion' },
    { icon: 'phone', title: 'WhatsApp', desc: 'Chat with us directly', href: '/support' },
  ]

  const faqs = [
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

  return (
    <>
      <NavbarInner title="Customer service" back="/" />

      <main class="page page--no-tabbar">
        <div class="support-list" style="margin-top:0">
          {channels.map((c) => (
            <a class="support-card" href={c.href}>
              <span class="support-card__icon">
                <Icon name={c.icon} />
              </span>
              <span class="grow">
                <span class="support-card__title" style="display:block">
                  {c.title}
                </span>
                <span class="support-card__desc" style="display:block">
                  {c.desc}
                </span>
              </span>
              <Icon name="chevron-right" size="0.32rem" class="c-l3" />
            </a>
          ))}
        </div>

        <section class="panel mt-12">
          <div class="panel__title">Frequently asked questions</div>
          {faqs.map((f, i) => (
            <div class={`faq-item${i === 0 ? ' is-open' : ''}`}>
              <div class="faq-item__q">
                {f.q}
                <Icon name="chevron-right" size="0.32rem" />
              </div>
              <div class="faq-item__a">{f.a}</div>
            </div>
          ))}
        </section>
      </main>

      <CustomerBubble />
    </>
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
