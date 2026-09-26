import { site } from '../data'
import { NavbarInner, SiteFooter } from '../components/layout'
import { Icon } from '../components/icons'

/* ==========================================================================
   ACTIVITY  (at-* — gold theme cards, header shared with ac-*)
   ========================================================================== */
const ACTIVITIES = [
  {
    title: 'Daily Bonus',
    desc: 'Log in every day and claim free rewards instantly.',
    art: '/assets/img/activity/bonus.png',
    badge: 'Daily',
    badgeClass: 'daily',
    cat: 'daily',
    key: 'daily-bonus',
    href: '/daily-reward',
  },
  {
    title: 'Lucky Wheel',
    desc: 'One spin could unlock your next big win.',
    art: '/assets/img/activity/wheel.png',
    badge: 'Hot',
    badgeClass: 'hot',
    cat: 'daily',
    key: 'lucky-wheel',
    href: '/spin',
  },
  {
    title: 'Super Jackpot',
    desc: 'Win the super jackpot and receive additional rewards.',
    art: '/assets/img/float/reward-center.png',
    badge: 'Jackpot',
    badgeClass: 'jackpot',
    cat: 'events',
    key: 'super-jackpot',
  },
  {
    title: 'Invite Friends',
    desc: 'Earn commission for every friend who joins and plays.',
    art: '/assets/img/float/gift.png',
    badge: 'Bonus',
    badgeClass: 'bonus',
    cat: 'events',
    key: 'invite',
  },
  {
    title: 'Dragon Streak',
    desc: 'Ride the winning streak for extra cash rewards.',
    art: '/assets/img/float/changlong.svg',
    badge: 'Event',
    badgeClass: 'event',
    cat: 'events',
    key: 'changlong',
  },
  {
    title: 'VIP Wheel',
    desc: 'Exclusive spins for VIP members with bigger prizes.',
    art: '/assets/img/float/turntable.png',
    badge: 'VIP',
    badgeClass: 'vip',
    cat: 'events',
    key: 'vip',
  },
]

export function ActivityPage() {
  return (
    <div class="at-page">
      <header class="ac-header">
        <a class="ac-header__btn" href="/" aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <span class="ac-header__title">Activity</span>
      </header>

      <main class="at-content">
        <div class="at-tabs" data-tabs="activity">
          <div class="at-tab active" data-tab="all">All</div>
          <div class="at-tab" data-tab="daily">Daily</div>
          <div class="at-tab" data-tab="events">Events</div>
        </div>

        <div class="at-list" data-tab-panel="activity">
          {ACTIVITIES.map((a) => (
            <a class="at-card" href={a.href || `/activity/${a.key}`} data-tab-item={a.cat}>
              <div class="at-card__media">
                <img src={a.art} alt="" loading="lazy" />
                <span class={`at-badge at-badge--${a.badgeClass}`}>{a.badge}</span>
              </div>
              <div class="at-card__info">
                <h3 class="at-card__title">{a.title}</h3>
                <p class="at-card__desc">{a.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div class="at-empty" data-tab-empty="activity">
          <Icon name="history" size="0.864rem" />
          <p>No activities available right now.</p>
        </div>

        <SiteFooter />
      </main>
    </div>
  )
}

/* ==========================================================================
   ACTIVITY DETAIL
   ========================================================================== */
export function ActivityDetailPage({ slug }: { slug: string }) {
  const found = ACTIVITIES.find((a) => a.key === slug) || ACTIVITIES[0]

  return (
    <>
      <NavbarInner title={found.title} back="/activity" />

      <main class="page page--no-tabbar">
        <div class="activity-card__media panel" style="border-radius:var(--radius-lg);overflow:hidden">
          <img src={found.art} alt="" />
        </div>

        <section class="panel mt-12">
          <div class="panel__title">
            <span>{found.title}</span>
            <span class="tag-main">{found.badge}</span>
          </div>
          <p class="c-l2 t-md" style="line-height:1.6">
            {found.desc} Rewards are credited automatically to your wallet once the activity
            requirements are met. Please read the activity rules carefully before participating.
          </p>

          <a class="btn-primary mt-16" href="/login">
            Log in to participate
          </a>
        </section>

        <section class="panel mt-12">
          <div class="panel__title">Activity Rules</div>
          <div class="faq-item is-open">
            <div class="faq-item__q">
              How do I claim the reward?
              <Icon name="chevron-right" size="0.32rem" />
            </div>
            <div class="faq-item__a">
              Log in and tap the claim button on the activity page. The reward is credited
              instantly to your main wallet.
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-item__q">
              Is there a turnover requirement?
              <Icon name="chevron-right" size="0.32rem" />
            </div>
            <div class="faq-item__a">
              Yes. Each bonus carries a turnover requirement which is shown on the activity card
              before you claim.
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-item__q">
              Can I participate more than once?
              <Icon name="chevron-right" size="0.32rem" />
            </div>
            <div class="faq-item__a">
              Most activities run on a fixed cycle (daily, weekly or per event). Check the activity
              detail for the reset period.
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

/* ==========================================================================
   PROMOTION  (glass-gold cards + big percent watermark — pr-* classes)
   ========================================================================== */
const PROMOS = [
  {
    title: 'Welcome Bonus',
    desc: 'Double your first deposit up to ₹5,000.',
    percent: '100%',
    icon: '/assets/img/activity/bonus.png',
  },
  {
    title: 'Daily Reload',
    desc: 'Top up any day and get 20% extra.',
    percent: '20%',
    icon: '/assets/img/float/reward-center.png',
  },
  {
    title: 'Refer & Earn',
    desc: 'Earn up to 30% commission per friend.',
    percent: '30%',
    icon: '/assets/img/float/gift.png',
  },
  {
    title: 'Weekend Cashback',
    desc: 'Up to 10% cashback on weekend losses.',
    percent: '10%',
    icon: '/assets/img/float/turntable.png',
  },
  {
    title: 'VIP Exclusive',
    desc: 'Personal manager, higher limits and faster payouts.',
    percent: 'VIP',
    icon: '/assets/img/float/telegram.png',
  },
]

export function PromotionPage() {
  return (
    <div class="pr-page">
      <header class="pr-header">
        <a class="pr-header__back" href="/" data-back aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <span class="pr-header__title">Promotion</span>
      </header>

      <main class="pr-content">
        {PROMOS.map((p) => (
          <a class="pr-card" href="/activity" data-percent={p.percent}>
            <span class="pr-card__icon">
              <img src={p.icon} alt="" loading="lazy" />
            </span>
            <span class="pr-card__body">
              <span class="pr-card__title">{p.title}</span>
              <span class="pr-card__desc">{p.desc}</span>
            </span>
            <Icon name="chevron-right" size="0.336rem" class="pr-card__arrow" />
          </a>
        ))}

        <SiteFooter />
      </main>
    </div>
  )
}
