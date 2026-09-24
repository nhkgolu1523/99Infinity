import { site } from '../data'
import { NavbarInner, CustomerBubble, SiteFooter } from '../components/layout'
import { Icon } from '../components/icons'

/* ==========================================================================
   ACTIVITY
   ========================================================================== */
const ACTIVITIES = [
  {
    title: 'Daily Bonus',
    desc: 'Log in every day and claim free rewards instantly.',
    art: '/assets/img/activity/bonus.png',
    badge: 'Daily',
    key: 'daily-bonus',
  },
  {
    title: 'Lucky Wheel',
    desc: 'One spin could unlock your next big win.',
    art: '/assets/img/activity/wheel.png',
    badge: 'Hot',
    key: 'lucky-wheel',
  },
  {
    title: 'Super Jackpot',
    desc: 'Win the super jackpot and receive additional rewards.',
    art: '/assets/img/float/reward-center.png',
    badge: 'Jackpot',
    key: 'super-jackpot',
  },
  {
    title: 'Invite Friends',
    desc: 'Earn commission for every friend who joins and plays.',
    art: '/assets/img/float/gift.png',
    badge: 'Bonus',
    key: 'invite',
  },
  {
    title: 'Dragon Streak',
    desc: 'Ride the winning streak for extra cash rewards.',
    art: '/assets/img/float/changlong.svg',
    badge: 'Event',
    key: 'changlong',
  },
  {
    title: 'VIP Rebate',
    desc: 'Climb the VIP tiers and unlock daily rebates.',
    art: '/assets/img/float/turntable.png',
    badge: 'VIP',
    key: 'vip',
  },
]

export function ActivityPage() {
  return (
    <>
      <NavbarInner title="Activity" back="/" />

      <main class="page">
        <div class="tabs" data-tabs="activity">
          <div class="tabs__item active" data-tab="all">All</div>
          <div class="tabs__item" data-tab="daily">Daily</div>
          <div class="tabs__item" data-tab="event">Events</div>
        </div>

        <div class="activity-grid" data-tab-panel="activity">
          {ACTIVITIES.map((a) => (
            <a class="activity-card" href={`/activity/${a.key}`} data-tab-item={a.key}>
              <div class="activity-card__media">
                <img src={a.art} alt="" loading="lazy" />
                <span class="activity-card__badge">{a.badge}</span>
              </div>
              <div class="activity-card__body">
                <div class="activity-card__title">{a.title}</div>
                <div class="activity-card__desc">{a.desc}</div>
              </div>
            </a>
          ))}
        </div>

        <SiteFooter />
      </main>

      <CustomerBubble />
    </>
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

      <CustomerBubble />
    </>
  )
}

/* ==========================================================================
   PROMOTION
   ========================================================================== */
const PROMOS = [
  {
    title: 'Welcome Bonus 100%',
    desc: 'Double your first deposit up to ₹5,000. New members only.',
    icon: '/assets/img/activity/bonus.png',
  },
  {
    title: 'Daily Reload 20%',
    desc: 'Top up any day of the week and receive a 20% reload bonus.',
    icon: '/assets/img/float/reward-center.png',
  },
  {
    title: 'Refer & Earn',
    desc: 'Get up to 30% commission for every friend you invite.',
    icon: '/assets/img/float/gift.png',
  },
  {
    title: 'Weekend Cashback',
    desc: 'Play on weekends and get up to 10% cashback on losses.',
    icon: '/assets/img/float/turntable.png',
  },
  {
    title: 'VIP Exclusive',
    desc: 'Personal account manager, higher limits and faster payouts.',
    icon: '/assets/img/float/telegram.png',
  },
]

export function PromotionPage() {
  return (
    <>
      <NavbarInner title="Promotion" back="/" />

      <main class="page page--no-tabbar">
        <div class="promo-list">
          {PROMOS.map((p) => (
            <a class="promo-item" href="/activity">
              <img class="promo-item__icon" src={p.icon} alt="" loading="lazy" />
              <div class="grow">
                <div class="promo-item__title">{p.title}</div>
                <div class="promo-item__desc">{p.desc}</div>
              </div>
              <Icon name="chevron-right" size="0.32rem" class="c-l3" />
            </a>
          ))}
        </div>

        <SiteFooter />
      </main>

      <CustomerBubble />
    </>
  )
}
