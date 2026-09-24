import { site } from '../data'
import { NavbarInner, CustomerBubble } from '../components/layout'
import { Icon } from '../components/icons'

export function MessagesPage() {
  return (
    <>
      <NavbarInner
        title="Notifications"
        right={
          <>
            <Icon name="refresh" size="0.48rem" />
            <span style="margin-left:.16rem">Refresh</span>
          </>
        }
      />

      <div class="messages__container">
        <div class="messages__content">
          <div class="infiniteScroll" data-infinite-scroll>
            {site.messages.map((m) => (
              <article class="site-message-list__item" data-open-message>
                <div class="site-message-list__item-title">
                  <Icon name="bell" size="0.66667rem" class="c-main" />
                  <span>{m.title}</span>
                </div>
                <div class="site-message-list__item-desc">{m.desc}</div>
                <h5>{m.time}</h5>
              </article>
            ))}

            <div class="infiniteScroll__loading" data-scroll-sentinel>
              <span class="c-l3">— No more notifications —</span>
            </div>
          </div>
        </div>
      </div>

      <CustomerBubble />
    </>
  )
}
