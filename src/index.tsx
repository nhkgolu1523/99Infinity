import { Hono } from 'hono'
import { renderer } from './renderer'
import { site } from './data'

import { HomePage } from './pages/home'
import { MessagesPage } from './pages/messages'
import { safeBack } from './components/layout'
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
  LanguagePage,
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
import { GamesPage, SupportPage, LiveChatPage, NotFoundPage } from './pages/misc'
import { LudoPage } from './pages/ludo'
import { WalletOverviewPage } from './pages/wallet'
import { DepositPage } from './pages/deposit'
import { apiApp, sessionMiddleware } from './api'
import { loadMessages, loadNotice } from './lib/site-content'
import { loadLudoConfig } from './lib/ludo'
import { loadLimitsConfig } from './lib/rewards'

const app = new Hono()

/* session middleware runs first — it loads the logged-in user into the
   request context so every SSR page (navbar balance etc.) can use it */
app.use('*', sessionMiddleware)

app.use(renderer)

/* backend endpoints — the browser only ever talks to these */
app.route('/api', apiApp)

/* account pages hold personal user data — guests never see them, the server
   itself sends them to the login page (covers first tap, direct URL, JS off) */
const accountGate = (c: any, next: () => Promise<void>) => {
  if (!c.get('user')) return c.redirect('/login')
  return next()
}
app.use('/account', accountGate)
app.use('/account/*', accountGate)

/* the playable game is personal too (it shows and spends the player's own
   wallet), so a guest is sent to the login page before the board ever loads */
app.use('/games/ludo', accountGate)

/* the lottery is personal too — it shows and spends the player's own wallet */
app.use('/games/wingo', accountGate)

/* --------------------------------------------------------------------------
   TABBED PAGES  (show the bottom navigation)
   -------------------------------------------------------------------------- */
app.get('/', async (c) =>
  c.render(<HomePage notice={await loadNotice(c.env)} />, { title: 'Home', active: 'home' })
)

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
app.get('/messages', async (c) =>
  c.render(
    <MessagesPage items={await loadMessages(c.env)} back={safeBack(c.req.query('back'), '/')} />,
    {
      title: 'Notifications',
      showTabbar: false,
    },
  ),
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

/* Ludo — the one really playable game. Full-screen: the board, its dice and its
   own loading screen are the whole page (no tabbar, no site chrome). */
app.get('/games/ludo', async (c) =>
  c.render(<LudoPage user={c.get('user')} cfg={await loadLudoConfig(c.env)} />, {
    title: 'Ludo',
    showTabbar: false,
    bodyClass: 'ludo-body',
    ludo: true,
  })
)

/* WinGo — the colour-prediction lottery. The screen is the ORIGINAL game build,
   served untouched: `public/wingo.html` plus its files in `public/assets/`, and
   `public/wingo-engine.js` — the same hook index.html already loaded, now talking
   to this Worker instead of its own local engine (see public/wingo-engine.js).

   The build asks for its own files from the SITE ROOT (`/assets/js/...`, its own
   guard says so), which is why the page and the engine sit at the root and the
   assets are merged into the site's `/assets/` — the names do not collide (the
   build only adds css/ js/ gif/ json/ mp3/ png/ svg/ webp/ woff2/ and img/wepay/).

   The files are served by the asset layer (see dist/_routes.json, which excludes
   them), so nothing here runs for a real page view. This route only gates it and
   hands over: ?type=1|2|3|4 opens that duration. */
const WINGO_PAGE = '/wingo.html'

app.get('/games/wingo', async (c) => {
  const type = String(c.req.query('type') || '').trim()
  const mode = /^[1-4]$/.test(type) ? `?type=${type}` : ''
  return c.redirect(`${WINGO_PAGE}${mode}`, 302)
})

/** the folder form of the same URL → the page (so an old link never 404s) */
app.get('/wingo', (c) => c.redirect(WINGO_PAGE + new URL(c.req.url).search, 302))
app.get('/wingo/', (c) => c.redirect(WINGO_PAGE + new URL(c.req.url).search, 302))

/* Safety net: the static tree is normally served by the asset layer, which
   dist/_routes.json excludes from the Worker. If a request ever does reach the
   Worker — a different deploy shape, a stale route manifest — the files are
   delegated to the ASSETS binding instead of falling into the site's 404 page. */
const serveAsset = async (c: any) => {
  const assets = (c.env as any)?.ASSETS
  if (assets && typeof assets.fetch === 'function') return assets.fetch(c.req.raw)
  return c.notFound()
}
app.get('/assets/*', serveAsset)

app.get('/support', (c) => c.render(<SupportPage />, { title: 'Support', showTabbar: false }))

/* the support chat is a screen of its own: a closed, self-contained screen
   (like the Ludo board) that ships its own css + script and keeps the site
   chrome off — so it is a full-screen route of its own, not a tab. */
app.get('/support/live-chat', (c) =>
  c.render(<LiveChatPage />, {
    title: 'Live Chat',
    showTabbar: false,
    bodyClass: 'live-chat-body',
    liveChat: true,
  })
)

/* wallet sub-pages */
/* wallet overview — the two wallets (main / 3rd party) + quick actions */
app.get('/account/wallet', (c) =>
  c.render(<WalletOverviewPage />, { title: 'Wallet', showTabbar: false })
)
app.get('/account/deposit', async (c) =>
  c.render(<DepositPage limits={await loadLimitsConfig(c.env)} />, {
    title: 'Deposit',
    showTabbar: false,
  })
)
app.get('/account/withdraw', (c) =>
  c.render(<WithdrawPage />, { title: 'Withdraw', showTabbar: false })
)
app.get('/account/history', (c) =>
  c.render(<HistoryPage />, { title: 'History', showTabbar: false })
)
app.get('/account/bets', (c) =>
  c.render(<HistoryPage mode="bets" />, { title: 'Bet history', showTabbar: false })
)
app.get('/account/deposit-history', (c) =>
  c.render(<HistoryPage mode="deposit" />, { title: 'Deposit history', showTabbar: false })
)
app.get('/account/withdraw-history', (c) =>
  c.render(<HistoryPage mode="withdraw" />, { title: 'Withdraw history', showTabbar: false })
)
app.get('/account/profile', (c) =>
  c.render(<ProfilePage />, { title: 'Profile', showTabbar: false })
)
app.get('/account/language', (c) =>
  c.render(<LanguagePage />, { title: 'Language', showTabbar: false })
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
