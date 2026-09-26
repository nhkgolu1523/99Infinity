import { site } from '../data'
import { Icon } from '../components/icons'

/* ==========================================================================
   NOTIFICATIONS  (nt-* — gold-accent cards, mark-as-read, refresh)
   ========================================================================== */
const ICONS = [
  { icon: 'bell', tone: 'gold' },
  { icon: 'gift', tone: 'green' },
  { icon: 'trophy', tone: 'red' },
]

export function MessagesPage() {
  return (
    <div class="nt-page">
      <header class="ac-header">
        <a class="ac-header__btn" href="/" data-back aria-label="Back">
          <Icon name="chevron-left" size="0.33rem" />
        </a>
        <span class="ac-header__title">Notifications</span>
        <button class="nt-refresh" type="button" data-nt-refresh>
          <Icon name="refresh" size="0.336rem" />
          <span>Refresh</span>
        </button>
      </header>

      <main class="nt-content">
        {site.messages.map((m, i) => (
          <article class={`nt-card ${i < 2 ? 'unread' : ''}`} data-nt-card>
            {i < 2 && <span class="nt-card__dot"></span>}
            <div class="nt-card__head">
              <span class={`nt-card__icon nt-card__icon--${ICONS[i % ICONS.length].tone}`}>
                <Icon name={ICONS[i % ICONS.length].icon} size="0.384rem" />
              </span>
              <span class="nt-card__title">{m.title}</span>
            </div>
            <p class="nt-card__msg">{m.desc}</p>
            <div class="nt-card__time">
              <Icon name="clock" size="0.24rem" />
              <span>{m.time}</span>
            </div>
          </article>
        ))}

        <div class="nt-end">— No more notifications —</div>

        <div class="nt-empty" data-nt-empty>
          <Icon name="bell" size="1.152rem" />
          <h3>No Notifications</h3>
          <p>You're all caught up! Check back later for new updates and rewards.</p>
        </div>
      </main>
    </div>
  )
}

