# 99infinity H5 — UI rebuild

A pixel-focused rebuild of the mobile H5 gaming UI from the supplied reference zip.
**Everything is written from scratch** — no file from the reference bundle is reused
as-is. Every image, colour, animation, button and page is an independent, editable
file so any single detail can be changed later without touching the rest.

## Project Overview

- **Goal**: reproduce the reference UI exactly, but as a clean, hand-written codebase.
- **Stack**: Hono + TypeScript (JSX) on Cloudflare Pages, plain CSS, zero-dependency JS.
- **Scope**: UI only. No gambling/betting logic, no wagering, no real-money flow.

## URLs

- **Local dev**: `http://localhost:3000`
- **API**: `/api/health`, `/api/config`

## Pages built

### From the reference (exact replicas)

| Page | Route | Reference source |
|---|---|---|
| Home | `/` | `front page home page ui` |
| Notifications | `/messages` | `Ye notification ka ui hai…` |
| Login-required alert | overlay, opened from any guest-gated tap | `LOGIN KE LIYE ALERT AYAG USKA UI` |

### Home page sections (top → bottom)

1. **Navbar** — logo, Register / Log in buttons, language pill (`navbar`)
2. **Banner swiper** — 5 slides, looping, autoplay, dots, touch-drag (`swiper_box`)
3. **Notice bar** — speaker icon, infinite marquee, `Detail` button (`noticeBar__container`)
4. **Activity cards** — 2-up promo tiles with art (`activity-cards`)
5. **Top Games** — 3×2 grid, gold crowns for top 3, `NO4–NO6` rank ribbons, paged (`top-games`)
6. **Play and Win hub** — 4 large + 4 small category cards (`game-hub`)
7. **Game sections** — Lottery, Popular, Mini games, Slots, Fishing, PVC, Casino, Sports — 8 paged grids (`game-section`)
8. **Super Jackpot** banner (`jackpot-banner`)
9. **Winning information** ticker (`winners`)
10. **Game Providers** footer + 18+/Telegram/WhatsApp + legal copy (`partner-logos`)
11. **Floating entries** — 5 draggable round buttons (`float`)
12. **Customer service** bubble (`customer`)
13. **Tabbar** — 4 tabs + raised centre "Get ₹500" button (`tabbar`)

### Pages not shown in the references (designed in the same visual language)

| Page | Route |
|---|---|
| Games catalogue (search + category filter) | `/games` |
| **Ludo — playable game** | `/games/ludo` (login only) |
| Activity list | `/activity` |
| Activity detail | `/activity/:slug` |
| Promotion | `/promotion` |
| Account | `/account` |
| Deposit | `/account/deposit` |
| Withdraw | `/account/withdraw` |
| Transaction history | `/account/history` |
| Bet history | `/account/bets` |
| Profile | `/account/profile` |
| Settings | `/account/settings` |
| Customer service / FAQ | `/support` |
| **Support chat** | `/support/live-chat` |
| Log in | `/login` |
| Register | `/register` |
| Reset password | `/forgot-password` |
| 404 | any unknown route (returns HTTP 404) |

## Data architecture

- **`src/data.ts`** — the single content source. **Auto-generated** from the assets
  actually on disk by `tools/gen-data.py`, so no image path can dangle.
  Re-run after adding/removing images:
  ```bash
  python3 tools/gen-data.py
  ```
- **Activity banner art** goes through `tools/make-activity-images.ps1` and always
  comes out at exactly **16:9**. The activity cards (`.at-card__media`,
  `.activity-card__media`) paint with `object-fit: cover`, and the letters/logos
  baked into these banners sit hard against the frame edge — so a 1.5:1 or a
  differently-cropped source would clip them. The script also drops the 1280 px
  2.5 MB PNGs to 1280×720 JPEGs (~250–300 KB).
  The home-page 2-up tiles and the promotion tiles are **not** touched: they keep
  their own small square icons (`activity/bonus.png`, `activity/wheel.png`) —
  those slots paint into a ~72px box, where a cropped wide banner looks wrong.
  ```powershell
  powershell -ExecutionPolicy Bypass -File tools\make-activity-images.ps1
  ```
  Source folder defaults to `Desktop\Activity images`; the file names are mapped
  to `daily-bonus.jpg`, `lucky-wheel.jpg`, `super-jackpot.jpg`,
  `invite-friends.jpg`, `winning-streak.jpg`, `vip-wheel.jpg`.
  Anything that is not 16:9 gets defocused edge-extended wings that fade into the
  card background, so nothing is ever cropped.
- **No database.** The build is a static UI shell; there is no persistence, no
  accounts and no transactions. Adding D1 later is a drop-in: see below.

## File layout

```
webapp/
├── src/
│   ├── index.tsx              # Hono router (all routes)
│   ├── renderer.tsx           # HTML shell, rem scaling, tabbar, dialog mounts
│   ├── data.ts                # AUTO-GENERATED content
│   ├── components/
│   │   ├── icons.tsx          # inline SVG sprite (38 glyphs) + <Icon />
│   │   ├── layout.tsx         # navbar, footer, float buttons, page shell
│   │   ├── home.tsx           # every home-page section
│   │   └── dialogs.tsx        # login alert, notice dialogs, quick-actions sheet
│   └── pages/
│       ├── home.tsx  messages.tsx  auth.tsx  activity.tsx  account.tsx  misc.tsx
│       ├── ludo.tsx           # the playable game page (real wallet in, real UI out)
│       └── ludo-html.ts       # generated: the game's own markup (from Ludo.html)
├── Ludo.html                  # the standalone game — the design source
├── public/
│   ├── css/
│   │   ├── base.css           # tokens, reset, app frame, animations
│   │   ├── components.css     # navbar, swiper, cards, tabbar, dialogs, forms
│   │   ├── pages.css          # per-page composition
│   │   ├── ludo.css           # generated: the game skin, scoped to .ludo-page
│   │   └── live-chat.css      # the support chat skin, scoped to .lc-page
│   ├── js/app.js              # all interactions (14 opt-in modules)
│   ├── js/ludo.js             # the game itself, wired to the real wallet
│   ├── js/live-chat.js        # the support bot (knowledge base + typing + chips)
│   └── assets/img/            # 320 separate image files, semantic names
│       ├── brand/ banner/ tabbar/ title/ category/ activity/
│       ├── float/ partner/ avatar/ ui/
│       └── game/{jili,jdb,tb_chess,inplay…}  vendor/  fonts/
└── tools/
    ├── gen-data.py             # asset → data.ts generator
    ├── split-ludo.cjs          # Ludo.html → ludo.css + ludo-html.ts
    └── make-activity-images.ps1 # activity banners → 16:9 web JPEGs
```

## Editing guide (change one small thing, nothing else breaks)

| Want to change | Edit |
|---|---|
| Brand colour, gradients, radii, fonts | `public/css/base.css` → `:root` |
| A component's look | `public/css/components.css` (one clearly-named block per component) |
| A page's layout | `public/css/pages.css` |
| Any text / image / list item | `src/data.ts` |
| A section's markup | `src/components/home.tsx` |
| An icon | `src/components/icons.tsx` |
| A behaviour (swipe, autoplay, drag…) | `public/js/app.js` (one module per feature) |
| A new image | drop it in `public/assets/img/…` then re-run `tools/gen-data.py` |
| The 6 Activity banners | put the new art in `Desktop\Activity images`, run `tools/make-activity-images.ps1`, then `tools/gen-data.py` |

## Interactions implemented

Banner loop + autoplay + dots + touch drag · paged nav swipers with arrow state ·
tabs (pill + underline) · dialogs & bottom sheets · toast · FAQ accordions ·
game search + category filter · password show/hide · auth form validation ·
quick-amount chips (**deposit chips follow the live `CONFIG/LIMITS` minimum** —
`depositQuickAmounts`) · payment-method select · draggable float stack ·
**the account balance ↻ reads `/api/me` and repaints every wallet on the page**
(`initBalanceRefresh`) · **transaction status decides how the row looks** in the
history lists: a finished one (`completed`/`paid`/`won`) goes fully green — chip,
amount and the word, e.g. **"Withdraw Completed"** — while `pending` stays gold
(chip + amount keep the debit red) and `rejected` red · lazy images ·
marquees that pause on hover · `prefers-reduced-motion` respected.

## User guide

1. Open `/` — the home page renders the full reference layout.
2. Swipe the banner, use the arrows on Top Games / category rows to page through.
3. Tap **Detail** on the notice bar → notifications page.
4. Tap the raised **Get ₹500** tabbar button → quick-actions sheet.
5. Tap anything account-gated (deposit, claim, centre button) → the login alert.
6. `/games` has a live search box and category tabs.
7. Tap a game whose Firebase value is `GAMES/<key> = 2` → the **Deposit to Play**
   popup (coin icon, green *Deposit Now* → `/account/deposit`, red *Maybe later*).
   `0` keeps the "Comming Soon!" toast, `1` opens the game as usual.

## Deployment

- **Platform**: Cloudflare Pages (Hono worker + static assets)
- **Status**: runs locally and builds clean; not yet deployed
- **Build**: `npm run build` → `dist/` (`_worker.js` + `_routes.json` + assets)
- **Dev server**: `pm2 start ecosystem.config.cjs`

### Adding D1 later

The shell is ready for it — uncomment `d1_databases` in `wrangler.jsonc`, add
`migrations/`, then bind `DB` in `src/index.tsx` via `new Hono<{ Bindings: { DB: D1Database } }>()`.

## Admin panel (`ADMIN WEBSITE/index.html`)

A complete control room in **one static file** — no build step, no libraries, no server.
It talks straight to the same Firebase RTDB the app uses (the REST endpoint sends
`Access-Control-Allow-Origin: *`, so opening the file from disk works).

**Open it:** double-click `ADMIN WEBSITE/index.html` → password `admin123`
(change `ADMIN_PASSWORD` inside the file, and the DB URL field lets you point it at
another project; both are remembered in `localStorage`).

| Section | What you control |
|---|---|
| Dashboard | users, total balance (main + 3rd-party split), pending deposits/withdrawals, spins & daily claims today, latest transactions, top balances |
| Users | search by UID / phone / username / email, filters, pagination → per-user sheet: balance (credit/debit/set, logged as a transaction), profile (name, email, phone, VIP, language, invite), status (active / suspended / investigation + message), devices (per-device and “log out everywhere”), transactions (status + delete), rewards (streak, free games, spin total), danger zone (reset password — real PBKDF2 hash, clear log, delete account incl. the UID/phone indexes) |
| Deposits | approve (credits the **main** wallet, completes the transaction, clears the pending counter) or reject |
| UPI payments | the live gateway feed (`PAYMENT_ORDERS`): collected total, waiting/expired/replayed counters, one row per order (user, amount, state, bank UTR, age), a 1-click *Close* for a stuck order, per-order field dump for debugging, and the gateway switches — deposits on/off + auto-credit vs manual approval (`CONFIG/PAYMENTS`) |
| Withdrawals | the amount is **held out of the player's wallet the moment the request is made** (see *Money* below) — *mark paid* only confirms it, *reject* returns it to the exact buckets it came from. A request that predates the hold is debited once, at approval |
| Transactions | global log with type/status/text filters, delete rows |
| Notifications | write the home notice bar (`CONFIG/NOTICE`) and broadcast app notifications (`MESSAGES`) |
| Lucky Wheel | on/off, spins per day, reset hour, segment weights with a live chance column (`CONFIG/SPIN`) |
| Daily reward | on/off, cycle days, unlock day, free games per day, money per streak day 1–7 (`CONFIG/DAILY`) |
| Money limits | min/max withdrawal, quick chips, minimum deposit (`CONFIG/LIMITS`, live in ~5 s) |
| Games | enable/disable any `GAMES/<key>` switch, add or remove keys. Values: `0` = "Comming Soon!", `1` = playable, `2` = the "Deposit to Play" popup (the word `POPUP` works too) — for now `2` is typed straight into the Firebase console, the panel gets a third option later |
| Tools | raw node load/save/delete, seed or repair the config nodes, full JSON backup download |

Everything the panel writes is read back by the app itself: balances, transaction
statuses, pending counters, notifications, the notice bar, the wheel/daily config and
the money limits.

## Payments — real UPI deposits (`src/lib/payments.ts` + `/api/deposit/*`)

Deposits go through **[FamGateway](https://famgateway.in)** — a free, non-custodial
UPI gateway: it reserves an order, returns a dynamic UPI QR + intent link, watches
the merchant's bank credits and confirms the payment (webhook + polling).

### One-time setup

| Step | Where | What |
|---|---|---|
| 1 | FamGateway dashboard | connect the FamPay **Gmail + App Password + UPI ID** (their Integrations page; IMAP must be enabled in Gmail) |
| 2 | FamGateway → API Keys | copy the merchant API key |
| 3 | this project | run **`set-gateway-key.bat`** (double-click) — it logs you in, sets the secret and verifies it. Same thing by hand: `npx wrangler secret put FAMGATEWAY_API_KEY --name www` (the live Worker is **`www`**, not `99infinity`). Local dev: put `FAMGATEWAY_API_KEY=...` in `.dev.vars` |
| 4 | FamGateway → Webhooks (optional) | the app passes `webhook_url` per order, so nothing has to be registered — but adding `https://<your-domain>/api/payment/webhook` is a good backup |

Nothing else is needed: the callback URL and the redirect URL are derived from the
request host, so the same code works on `*.workers.dev` and on a custom domain.
`FAMGATEWAY_BASE` can override the gateway host (staging / an offline mock).

### “The payment gateway is not configured yet”

That toast is **not** a UI bug — it means the running Worker has no
`FAMGATEWAY_API_KEY`, so `/api/deposit/order` answers `503 gateway-missing`.
Local dev looks fine because `.dev.vars` supplies the key.

Check the live value (phone-friendly, plain JSON — `payments.configured` must be
`true`):

```
https://www.99infinity.workers.dev/api/config/rewards
```

The admin panel's **UPI payments** screen shows the same value as the
*Gateway key* KPI (green `LIVE` / red `MISSING`), read live from the app.

To fix it, set the secret on the project that actually serves the site —
**`www`** (`www.99infinity.workers.dev`), not `99infinity`:

- double-click `set-gateway-key.bat` (checks the login, sets the secret, then
  verifies `/api/config/rewards`), **or**
- dashboard → Workers & Pages → `www` → Settings → Variables and Secrets → add
  `FAMGATEWAY_API_KEY` (type *Secret*) → Deploy.

Secrets only reach the running code through a **new deployment**, so if
`configured` stays `false`, open Deployments → *Retry deployment* once. After
that, reopen the deposit page so the client re-reads the gateway flags.

The key is deliberately **never** stored in Firebase: the RTDB is world-readable,
so a key kept there could be lifted by anyone and used to fake orders/webhooks.

### Flow

1. **Step 1 (amount)** → `POST /api/deposit/order` — validates `CONFIG/LIMITS.depositMin`,
   opens the order at the gateway (`POST /api/create-order`), stores
   `PAYMENT_ORDERS/<order_id>` + a pending transaction and returns `orderId`, `qrUrl`,
   `checkoutUrl`, `upiIntent`, `payableAmount` and the 5-minute window.
   The **preset chips follow that same minimum**: the first chip *is* the minimum and
   every rung below it drops away, so a minimum of ₹200 offers
   ₹200 / ₹1,000 / ₹5,000 / ₹10,000 (`depositQuickAmounts`, server-rendered **and**
   re-applied from the live config by `public/js/app.js`), and the input itself
   carries `min="<the live minimum>"`.
2. **Step 2 (payment)** — the page renders the gateway's QR, a **Pay via UPI App**
   button (NPCI deep link) and a hosted-checkout link, then polls
   `GET /api/deposit/status?order_id=…` **every 3 seconds**. The *server* asks the
   gateway (`GET /api/verify-order.php`, API key stays server-side) and credits the
   wallet; the browser never sees the key.
3. **Webhook** — `POST /api/payment/webhook` (public route) verifies the
   `X-FamGateway-Signature` header (HMAC-SHA256 of the raw body, signed with the API
   key) and settles the order instantly. A wrong/missing signature is a `401`.
4. **Success** — the receipt dialog shows the amount + the bank **UTR**, the navbar
   and wallet refresh from `/api/me`, and the pending order is cleared from the device.
   **Expired** — the QR is greyed out and *Generate a new QR* appears.
   **Cancel / back** → `POST /api/deposit/cancel` closes the order (`expired`) so no
   transaction stays pending forever.

### Money safety

- **Exactly once, by construction.** The credit is a *keyed* entry —
  `USERS/<uid>/balance/deposits/<order_id> = amount` — written in the same atomic
  Firebase PATCH as the order, transaction and deposit-request updates. Writing the
  same order id twice stores the same number, so the webhook, a browser poll and a
  retried request can all run at the same instant and the wallet still gains the
  amount once.
  *(Measured before this design: 8 parallel polls of one paid order credited a plain
  counter up to 8 times — Firebase's `If-Match` conditional PUT does not reliably
  gate two writes that reach the server in the same instant. Do not "optimise" this
  back into an `increment`.)*
- The spendable total is therefore `balance.total + sum(balance.deposits)` —
  `totalBalance()` / `walletSplit()` in `src/lib/wallet.ts` are the only places that
  compute money, and the withdraw/spin/daily/navbar/account paths all use them.
- **A withdrawal is held, not promised.** `POST /api/withdraw` takes the amount out of
  the wallet in the same write that creates the request (`balance.total -= amount`, the
  bonus bucket first and then `balance.main`). Two consequences, both on purpose:
  the balance the player sees is already net of the request, so there is no "reserved
  but still visible" number to get stale, and **no game can spend it** — the Ludo entry
  fee and every other check read the same `walletSplit().total`. The request stores
  `held: { main, promo }` so the panel can put the money back exactly where it came from
  (`rejectWithdraw`) and *not* debit a second time on `approveWithdraw`. A same-amount
  request that is still pending is refused as `409 duplicate`, so a double tap can never
  hold twice. Requests created before a `held` was recorded are still debited once, at
  approval.
- **UTR idempotency.** A bank reference can only ever pay one order: `UTR_INDEX/<utr>`
  is checked first, a replay is marked `duplicate` and the caller gets
  `409 duplicate-utr`.
- **Never lose a real payment.** If the user pays a QR that we already closed (a
  cancel or an expired window), the next poll still settles it and credits the money.
- **Auto-credit switch.** `CONFIG/PAYMENTS` = `{ enabled, autoCredit }` — the admin
  panel can pause deposits or require manual approval (then a paid order lands in the
  Deposits queue as `paid` with the UTR attached).

### Files

| File | Role |
|---|---|
| `src/lib/payments.ts` | gateway client, `claim`-free idempotent settle, expiry, HMAC verify, `CONFIG/PAYMENTS` |
| `src/api.ts` | `/deposit/order`, `/deposit/status`, `/deposit/cancel`, `/payment/webhook`, `payments` block in `/config/rewards` |
| `src/pages/deposit.tsx` | SSR step 1/step 2 markup (QR, status, UTR, receipt dialog), server-rendered balance |
| `public/js/app.js` → `initDeposit()` | order creation, 3 s polling (one request at a time), resume after a reload, success/expired/rejected states |
| `src/lib/wallet.ts` | `depositCredits()`, `totalBalance()`, corrected `walletSplit()` |

### Testing without losing money

FamGateway is free and fee-free, so **deposit ₹1 live** from the deposit page — the
order appears in the admin panel's *UPI payments* view with pending → success and the
UTR. A mock gateway can be pointed at with `FAMGATEWAY_BASE` (that is how the flow
above was verified: create order → pay → 8 parallel polls → exactly one credit →
webhook replay rejected).


## Ludo — the playable game (`/games/ludo`)

Tapping the **Ludo** tile on the home page opens the real board game (the tile
carries `data-full-nav`, so it loads as its own document — the game's css/js live
in that page's `<head>`). It is a full screen of its own (no tabbar), gated on the
**server** (`app.use('/games/ludo', accountGate)`) and by the client tap gate, and
every rupee it moves is real.

| Surface | Where |
|---|---|
| Page — hands the real data over | `src/pages/ludo.tsx` |
| The game's markup (verbatim from `Ludo.html`) | `src/pages/ludo-html.ts` *(generated)* |
| The game skin, scoped under `.ludo-page` | `public/css/ludo.css` *(generated)* |
| The game itself + the wallet wiring | `public/js/ludo.js` |
| Pricing rules, defaults, debit split | `src/lib/ludo.ts` |
| Endpoints | `/api/ludo/state`, `/api/ludo/enter`, `/api/ludo/finish` |
| Regenerate css + markup after editing `Ludo.html` | `node tools/split-ludo.cjs` |

**Real numbers, not placeholders**

- the balance on the players/colours screens and in the coins pill is the logged-in
  account's wallet — server-rendered and refreshed by `/api/ludo/state` on load and
  by every API answer;
- the entry fee and the prize pools come from `CONFIG/LUDO` (seeded on first read
  with `{ "entryFee": 100, "prizes": { "2": 200, "4": 400 } }`, admin-editable).
  The page and the API read the same config, so the price shown is the price charged
  — the two player cards spell it out (`Entry Fee 100 Get 200` / `Entry Fee 100 Get
  400`), their prize chips, the `-100` confirm/quit labels and the How-To-Play list
  all follow that same live number;
- the players wear **real avatars** from `/assets/img/avatar/` (random per match,
  and never the avatar of the player themselves); "You" wears the account's own.

**Money rules** (all enforced in `src/api.ts`)

- `POST /api/ludo/enter` debits the entry fee. The browser sends a per-match id,
  which is the idempotency key: an existing `USERS/<uid>/ludo/matches/<id>` node
  means that match is already paid for, so a double tap, a retry or a second tab can
  never charge twice (an ETag-guarded write covers the two-requests-at-once case);
- `POST /api/ludo/finish` closes the match — `win` credits the prize pool to the
  **main** wallet (real money, withdrawable); `lose` / `quit` never debit again, they
  only forfeit the fee that `/enter` already took (one match = one entry fee, never
  two). The match record keeps its final status, so a repeated call can never pay
  twice;
- the fee comes out of the **main** wallet first and only then from the
  3rd-party/bonus wallet — the same main/promo split the wallet page shows;
- every money movement is written to `USERS/<uid>/transactions/<txId>` (type `bet`
  for the stake, `ludo` for a win) plus `stats/totalWager`, `stats/bets`,
  `stats/totalWon`, `stats/totalLost`, so bet history and the admin panel show the
  game like any other wager. A finished match **updates its own stake entry** with the
  outcome (`lost` / `quit` / `won`), so the history never shows the same fee twice;
- a running match is mirrored into `localStorage` and `GET /api/ludo/state` reports
  whether the server still has that match open, so a reload (or a phone that reloads
  itself) **resumes the same board** instead of throwing the fee away — a reload
  during the players search is picked up too (the fee is already paid, so a fresh
  board is dealt rather than losing the match). The state read has a 7s deadline and
  three retries (`syncLudoState`), so a request the phone's network simply drops
  cannot cost the player a paid match;
- **back never drops a match.** Three defences, because a browser is free to skip
  entries a page pushed on its own when the player uses the back *button* or gesture
  (Chromium's history manipulation intervention — it does not touch
  `history.back()`):
  1. the Navigation API cancels the traversal outright, so the history index never
     moves and the pop-up is raised where the player stands;
  2. where that is unavailable, sentinel entries are parked on top of the game and
     re-parked after every traversal, so back can only ever bounce between them;
  3. an unload neither of those could stop (a traversal that leaves the document
     cannot be cancelled by any page) is answered by the browser's own leave
     question while a paid match is running — a reload and a confirmed exit are let
     through.
  However often back is pressed, the pop-up stays and asks: it is *"Are You Sure?"* +
  the entry fee at stake with a paid match running, and a plain *"Leave the Game?"*
  with nothing at stake. Back never answers it — only **Quit/Exit** does, and that
  is the single way out of the document. A match that was left without an answer
  (`vg_ludo_abandoned`) is closed on the next visit instead of being served again,
  so a fresh tap on Ludo is a **new game** — while a reload resumes the same board;
- leaving the game drops two `localStorage` markers — `vg_ludo_wallet_at` (when the
  money moved) and `vg_ludo_wallet_total` (what the balance became). `/js/app.js`
  paints that settled number the moment a page boots or wakes up (bfcache restores
  included) and only then confirms it with `/api/me`, which is what clears the
  marker — so the navbar shows the fee, prize or forfeit **in the first frame**,
  never the number from before the match and never a second late;
- the win/lose card spells the money out: **Prize Won +200 / Wallet Balance** on a
  win, **Entry Fee Lost -100 / Wallet Balance** on a loss. Both numbers are painted
  from the live config the instant the match ends and are then replaced by the
  server's own answer to `/api/ludo/finish`, so the pop-up is never blank while the
  request is in flight;
- no wallet, no match: `Play` refuses under the entry fee with *"Not enough
  balance"* and the server refuses again on `/enter` (`code: 'balance'`), whose
  answer also corrects a client that was showing a stale-high balance.


## Support chat — the Live chat screen (`/support/live-chat`)

Tapping **Live chat** on the Customer service page (`/support`) opens the support
chat: a full screen of its own (no tabbar) whose markup is the standalone chat
page verbatim — same header, quick topics, composer and bot knowledge base. It is
a **document of its own**, like the Ludo board: the route ships its own css + js
and puts `live-chat-body` on `<body>`, so `/js/app.js` hands it to the browser
instead of running its SPA swap.

| Surface | Where |
|---|---|
| Page — the chat markup | `src/pages/misc.tsx` → `LiveChatPage` |
| The chat skin, scoped under `.lc-page` | `public/css/live-chat.css` |
| The bot itself (knowledge base, typing, topics) | `public/js/live-chat.js` |
| Loaded only on this route | `src/renderer.tsx` → `liveChat` (css + script + body class) |
| Route list the SPA router must not touch | `public/js/app.js` → `STANDALONE_ROUTES` |

**What the bot answers with**

- the knowledge base is the client's own list (~48 topics: deposits, withdrawals,
  games, OTP, KYC, bonuses, VIP, cashback, Hindi/Hinglish greetings…) matched by
  the **longest keyword** that appears in the message, with five rotating
  fallbacks for anything it does not know;
- deposits, withdrawals and games reply with the real platform rules (min ₹500 in,
  ₹100 out, withdrawals 1–30 minutes);
- the icons are the site's inline SVG sprite — **no Font Awesome, no CDN** — and
  the whole screen carries `data-i18n-skip`, so the site translator never rewrites
  the chat (bot replies, the header, the chips and the placeholder all stay put in
  every language).

**The Customer service page (`/support`)**

| Row | Goes to |
|---|---|
| Live chat | `/support/live-chat` |
| Email support | `mailto:99Infinity@gmail.com` (opens in a new tab) |
| Telegram channel | `https://t.me/trinomal` (opens in a new tab) |

The WhatsApp row was dropped. Both destinations live in
`src/components/dialogs.tsx` (`SUPPORT_EMAIL`, `SUPPORT_TELEGRAM`) so the copy and
the links can never drift apart.


## Notes / limitations

- **Live money paths:** accounts, sessions, the wallet (main + 3rd-party), the lucky
  wheel, the daily reward, notifications, deposit limits, **real UPI deposits**
  (FamGateway, see above) and **Ludo** (entry fee, prize pool) all read
  and write the live Firebase RTDB and are enforced server-side. Static reference
  copy for promotions/VIP and the other catalogue games is still presentation only
  (no wagering or game logic is wired yet).
- The spin/daily reward guard is a read-then-write (`rewards/spin/dayKey`): a truly
  parallel double tap could still claim twice. Deposits are protected by the keyed
  ledger above; do the same trick (or a Durable Object) before those two ever pay real
  money.
- Reference game thumbnails and provider logos are hosted third-party brand assets
  kept only so the layout matches the reference; replace them before any public use.
- The reference bundle's own JS/CSS was **not** copied — all styling is newly authored
  against the extracted measurements (rem values, gradients, radii, timings).

**Last updated**: 2026-09-29
