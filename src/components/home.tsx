import { site } from '../data'
import { Icon } from './icons'

/* ==========================================================================
   BANNER SWIPER  (looping, dots, autoplay — driven by /js/app.js)
   ========================================================================== */
export function BannerSwiper() {
  return (
    <section class="swiper_box" aria-label="Promotions" aria-roledescription="carousel">
      <div class="banner-swiper" data-swiper="banner" data-autoplay="4500" data-loop="true">
        <div class="swiper-wrapper">
          {site.banners.map((src, i) => (
            <div class="swiper-slide" data-index={i}>
              <img src={src} alt={`Promotion banner ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div class="swiper-button" data-swiper-dots="banner">
        {site.banners.map((_, i) => (
          <span class={i === 0 ? 'active' : ''} data-dot={i} role="button" aria-label={`Go to slide ${i + 1}`}></span>
        ))}
      </div>
    </section>
  )
}

/* ==========================================================================
   NOTICE BAR  (infinite marquee + Detail button)
   ========================================================================== */
export function NoticeBar() {
  const text = site.notice
  return (
    <div class="noticeBar__container">
      <span class="notice_svg" aria-hidden="true"></span>

      <div class="noticeBar__container-body">
        <div class="noticeBar__container-body-text">
          {/* duplicated so the marquee can loop seamlessly */}
          <span>{text}</span>
          <span aria-hidden="true">{text}</span>
        </div>
      </div>

      <button class="hotIcon" type="button" data-open-messages>
        Detail
      </button>
    </div>
  )
}

/* ==========================================================================
   ACTIVITY CARDS  (2-up promo tiles)
   ========================================================================== */
export function ActivityCards() {
  return (
    <div class="activity-cards">
      {site.activityCards.map((c) => (
        <a class="activity-cards__item" href={c.href}>
          <div class="info">
            <div class="title">{c.title}</div>
            <div class="desc">{c.desc}</div>
            <span class="arrow">
              <Icon name="chevron-right" size="0.26667rem" />
            </span>
          </div>
          <img class="art" src={c.art} alt="" loading="lazy" />
        </a>
      ))}
    </div>
  )
}

/* ==========================================================================
   SECTION HEAD  (title + arrows + optional "View All")
   ========================================================================== */
function SectionHead({
  icon,
  title,
  more,
  moreHref,
  navId,
  iconClass = 't-ico',
}: {
  icon: string
  title: string
  more?: boolean
  moreHref?: string
  navId?: string
  iconClass?: string
}) {
  return (
    <div class="section-head">
      <div class="t">
        <img class={iconClass} src={icon} alt="" loading="lazy" />
        {title}
      </div>

      {more && (
        <a class="more" href={moreHref || '/games'}>
          View All
        </a>
      )}

      {navId && (
        <div class="d">
          <button class="nav disabled" type="button" data-nav-prev={navId} aria-label="Previous">
            <Icon name="chevron-left" size="0.32rem" />
          </button>
          <button class="nav" type="button" data-nav-next={navId} aria-label="Next">
            <Icon name="chevron-right" size="0.32rem" />
          </button>
        </div>
      )}
    </div>
  )
}

/* ==========================================================================
   TOP GAMES  (3 per page, 2 pages, paginated)
   ========================================================================== */
export function TopGames() {
  const items = site.topGames
  const pages: (typeof items)[] = []
  for (let i = 0; i < items.length; i += 3) pages.push(items.slice(i, i + 3) as any)

  return (
    <section class="top-games">
      <SectionHead icon="/assets/img/title/top-games.png" title="Top Games" navId="topGames" />

      <div class="my-swipe" data-nav="topGames">
        <div class="swiper-track">
          {pages.map((page) => (
            <div class="swiper-page">
              <div class="top-games__list">
                {page.map((g: any) => (
                  <a class="top-games__item" href="/games">
                    <div class="cover">
                      <img src={g.cover} alt="" loading="lazy" />
                      {g.crown && <img class="crown crown1" src={g.crown} alt="" />}
                      {g.rank && <span class="rank">{g.rank}</span>}
                    </div>
                    <div class="btn">Play Now</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   GAME HUB  (category cards: 2 rows of 2 large + 1 row of 4 small)
   ========================================================================== */
export function GameHub() {
  const large = site.gameHub.filter((c) => !(c as any).small)
  const small = site.gameHub.filter((c) => (c as any).small)

  const largeRows: any[] = []
  for (let i = 0; i < large.length; i += 2) largeRows.push(large.slice(i, i + 2))

  return (
    <section class="game-hub">
      <div class="game-hub__title">
        <img class="t-ico" src="/assets/img/title/game-hub.png" alt="" loading="lazy" />
        Play and Win
      </div>

      {largeRows.map((row) => (
        <div class="game-hub__row">
          {row.map((c: any) => (
            <a class="game-hub__card" href="/games">
              <div class="text">
                <div class="name">{c.name}</div>
                <div class="count">{c.count}</div>
              </div>
              <img class="art" src={c.art} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      ))}

      <div class="game-hub__row">
        {small.map((c: any) => (
          <a class="game-hub__card small" href="/games">
            <div class="text">
              <div class="name">{c.name}</div>
              <div class="count">{c.count}</div>
            </div>
            <img class="art" src={c.art} alt="" loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  )
}

/* ==========================================================================
   GAME SECTIONS  (one per category, 3-col grid, paginated)
   ========================================================================== */
export function GameSections() {
  return (
    <>
      {site.sections.map((s) => (
        <GameSection key={s.key} section={s} />
      ))}
    </>
  )
}

function GameSection({ section }: { section: any }) {
  const items = section.items as string[]
  const pages: string[][] = []
  for (let i = 0; i < items.length; i += 6) pages.push(items.slice(i, i + 6))

  return (
    <section class="game-section">
      <div class="game-section__head section-head">
        <div class="t">
          <img class="t-ico" src={section.icon} alt="" loading="lazy" />
          {section.title}
        </div>
        {section.more && (
          <a class="more" href="/games">
            View All
          </a>
        )}
        <div class="d">
          <button class="nav disabled" type="button" data-nav-prev={section.key} aria-label="Previous">
            <Icon name="chevron-left" size="0.32rem" />
          </button>
          <button class="nav" type="button" data-nav-next={section.key} aria-label="Next">
            <Icon name="chevron-right" size="0.32rem" />
          </button>
        </div>
      </div>

      <div class="my-swipe" data-nav={section.key}>
        <div class="swiper-track">
          {pages.map((page) => (
            <div class="swiper-page">
              <div class="b">
                {page.map((src) => (
                  <a class="b-item" href="/games">
                    <img src={src} alt="" loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   JACKPOT BANNER
   ========================================================================== */
export function JackpotBanner() {
  return (
    <section class="jackpot-banner">
      <div class="jackpot-content">
        <div class="title">{site.jackpot.title}</div>
        <div class="desc">{site.jackpot.desc}</div>
        <a class="link" href="/activity">
          {site.jackpot.cta}
        </a>
      </div>
    </section>
  )
}

/* ==========================================================================
   WINNERS  (auto-scrolling ticker)
   ========================================================================== */
export function Winners() {
  const list = site.winners
  return (
    <section class="winners">
      <div class="winners__head">
        <img class="t-ico" src="/assets/img/title/winners.png" alt="" loading="lazy" />
        Winning information
      </div>

      <div class="winners__scroll">
        <div class="winners__track">
          {/* duplicated for a seamless loop */}
          {[...list, ...list].map((w, i) => (
            <article class="winners__item" key={i}>
              <div class="game">
                <img class="cover" src={w.cover} alt="" loading="lazy" />
                <div class="info">
                  <div class="name">{w.name}</div>
                  <div class="amount num">{w.amount}</div>
                </div>
              </div>
              <div class="user">
                <img class="avatar" src={w.avatar} alt="" loading="lazy" />
                <span class="nick">{w.nick}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
