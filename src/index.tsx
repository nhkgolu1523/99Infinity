import { Hono } from 'hono'
import { renderer } from './renderer'
import { site } from './data'

import { HomePage } from './pages/home'
import { MessagesPage } from './pages/messages'
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/auth'
import { ActivityPage, ActivityDetailPage, PromotionPage } from './pages/activity'
import {
  AccountPage,
  WalletPage,
  HistoryPage,
  ProfilePage,
  SettingsPage,
} from './pages/account'
import { GamesPage, SupportPage, NotFoundPage } from './pages/misc'

const app = new Hono()

app.use(renderer)

/* --------------------------------------------------------------------------
   TABBED PAGES  (show the bottom navigation)
   -------------------------------------------------------------------------- */
app.get('/', (c) => c.render(<HomePage />, { title: 'Home', active: 'home' }))

app.get('/activity', (c) =>
  c.render(<ActivityPage />, { title: 'Activity', active: 'activity' })
)

app.get('/promotion', (c) =>
  c.render(<PromotionPage />, { title: 'Promotion', active: 'promotion' })
)

app.get('/account', (c) =>
  c.render(<AccountPage />, { title: 'Account', active: 'account' })
)

/* --------------------------------------------------------------------------
   FULL-SCREEN PAGES  (no bottom navigation)
   -------------------------------------------------------------------------- */
app.get('/messages', (c) =>
  c.render(<MessagesPage />, { title: 'Notifications', showTabbar: false })
)

app.get('/login', (c) => c.render(<LoginPage />, { title: 'Log in', showTabbar: false }))
app.get('/register', (c) =>
  c.render(<RegisterPage />, { title: 'Register', showTabbar: false })
)
app.get('/forgot-password', (c) =>
  c.render(<ForgotPasswordPage />, { title: 'Reset password', showTabbar: false })
)

app.get('/activity/:slug', (c) =>
  c.render(<ActivityDetailPage slug={c.req.param('slug')} />, {
    title: 'Activity',
    showTabbar: false,
  })
)

app.get('/games', (c) => c.render(<GamesPage />, { title: 'Games', showTabbar: false }))
app.get('/support', (c) => c.render(<SupportPage />, { title: 'Support', showTabbar: false }))

/* wallet sub-pages */
app.get('/account/deposit', (c) =>
  c.render(<WalletPage mode="deposit" />, { title: 'Deposit', showTabbar: false })
)
app.get('/account/withdraw', (c) =>
  c.render(<WalletPage mode="withdraw" />, { title: 'Withdraw', showTabbar: false })
)
app.get('/account/history', (c) =>
  c.render(<HistoryPage />, { title: 'History', showTabbar: false })
)
app.get('/account/bets', (c) =>
  c.render(<HistoryPage />, { title: 'Bet history', showTabbar: false })
)
app.get('/account/profile', (c) =>
  c.render(<ProfilePage />, { title: 'Profile', showTabbar: false })
)
app.get('/account/settings', (c) =>
  c.render(<SettingsPage />, { title: 'Settings', showTabbar: false })
)

/* --------------------------------------------------------------------------
   API
   -------------------------------------------------------------------------- */
app.get('/api/health', (c) => c.json({ ok: true, app: site.brand.name }))

app.get('/api/config', (c) =>
  c.json({
    brand: site.brand,
    banners: site.banners,
    tabbar: site.tabbar,
  })
)

/* --------------------------------------------------------------------------
   404
   -------------------------------------------------------------------------- */
app.notFound((c) => {
  c.status(404)
  return c.render(<NotFoundPage />, { title: 'Not found', showTabbar: false })
})

export default app
