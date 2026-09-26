import { Hono } from 'hono'
import { renderer } from './renderer'
import { site } from './data'

import { HomePage } from './pages/home'
import { MessagesPage } from './pages/messages'
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/auth'
import { ActivityPage, ActivityDetailPage, PromotionPage } from './pages/activity'
import { LuckyWheelPage } from './pages/spin'
import { DailyRewardPage } from './pages/daily'
import {
  AccountPage,
  WalletPage,
  WithdrawPage,
  HistoryPage,
  ProfilePage,
  SettingsPage,
  AboutPage,
  SecurityPage,
  ChangePasswordPage,
  TwoFactorPage,
  TransactionPinPage,
  DevicesPage,
  AntiPhishingPage,
  TermsPage,
  PrivacyPage,
} from './pages/account'
import { GamesPage, SupportPage, NotFoundPage } from './pages/misc'
import { DepositPage } from './pages/deposit'

const app = new Hono()

app.use(renderer)

/* --------------------------------------------------------------------------
   TABBED PAGES  (show the bottom navigation)
   -------------------------------------------------------------------------- */
app.get('/', (c) => c.render(<HomePage />, { title: 'Home', active: 'home' }))

app.get('/activity', (c) =>
  c.render(<ActivityPage />, { title: 'Activity', active: 'activity' })
)

/* lucky wheel — opened from the tabbar centre spin wheel */
app.get('/spin', (c) => c.render(<LuckyWheelPage />, { title: 'Lucky Wheel', showTabbar: false }))

/* daily reward — opened from the home "Your Daily Bonus Awaits" card */
app.get('/daily-reward', (c) =>
  c.render(<DailyRewardPage />, { title: 'Daily Reward', showTabbar: false })
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
  c.render(<DepositPage />, { title: 'Deposit', showTabbar: false })
)
app.get('/account/withdraw', (c) =>
  c.render(<WithdrawPage />, { title: 'Withdraw', showTabbar: false })
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
app.get('/account/about', (c) =>
  c.render(<AboutPage />, { title: 'About Us', showTabbar: false })
)
app.get('/account/security', (c) =>
  c.render(<SecurityPage />, { title: 'Security Center', showTabbar: false })
)
app.get('/account/security/password', (c) =>
  c.render(<ChangePasswordPage />, { title: 'Change Password', showTabbar: false })
)
app.get('/account/security/2fa', (c) =>
  c.render(<TwoFactorPage />, { title: 'Two-Factor Auth', showTabbar: false })
)
app.get('/account/security/pin', (c) =>
  c.render(<TransactionPinPage />, { title: 'Transaction PIN', showTabbar: false })
)
app.get('/account/security/devices', (c) =>
  c.render(<DevicesPage />, { title: 'Active Devices', showTabbar: false })
)
app.get('/account/security/antiphishing', (c) =>
  c.render(<AntiPhishingPage />, { title: 'Anti-Phishing Code', showTabbar: false })
)
app.get('/account/terms', (c) =>
  c.render(<TermsPage />, { title: 'Terms of Service', showTabbar: false })
)
app.get('/account/privacy', (c) =>
  c.render(<PrivacyPage />, { title: 'Privacy Policy', showTabbar: false })
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
