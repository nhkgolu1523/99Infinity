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
├── public/
│   ├── css/
│   │   ├── base.css           # tokens, reset, app frame, animations
│   │   ├── components.css     # navbar, swiper, cards, tabbar, dialogs, forms
│   │   └── pages.css          # per-page composition
│   ├── js/app.js              # all interactions (14 opt-in modules)
│   └── assets/img/            # 320 separate image files, semantic names
│       ├── brand/ banner/ tabbar/ title/ category/ activity/
│       ├── float/ partner/ avatar/ ui/
│       └── game/{jili,jdb,tb_chess,inplay…}  vendor/  fonts/
└── tools/gen-data.py          # asset → data.ts generator
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

## Interactions implemented

Banner loop + autoplay + dots + touch drag · paged nav swipers with arrow state ·
tabs (pill + underline) · dialogs & bottom sheets · toast · FAQ accordions ·
game search + category filter · password show/hide · auth form validation ·
quick-amount chips · payment-method select · draggable float stack ·
lazy images · marquees that pause on hover · `prefers-reduced-motion` respected.

## User guide

1. Open `/` — the home page renders the full reference layout.
2. Swipe the banner, use the arrows on Top Games / category rows to page through.
3. Tap **Detail** on the notice bar → notifications page.
4. Tap the raised **Get ₹500** tabbar button → quick-actions sheet.
5. Tap anything account-gated (deposit, claim, centre button) → the login alert.
6. `/games` has a live search box and category tabs.

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
| Withdrawals | mark paid (bonus money leaves the 3rd-party wallet first, the rest from main; pending cleared) or reject |
| Transactions | global log with type/status/text filters, delete rows |
| Notifications | write the home notice bar (`CONFIG/NOTICE`) and broadcast app notifications (`MESSAGES`) |
| Lucky Wheel | on/off, spins per day, reset hour, segment weights with a live chance column (`CONFIG/SPIN`) |
| Daily reward | on/off, cycle days, unlock day, free games per day, money per streak day 1–7 (`CONFIG/DAILY`) |
| Money limits | min/max withdrawal, quick chips, minimum deposit (`CONFIG/LIMITS`, live in ~5 s) |
| Games | enable/disable any `GAMES/<key>` switch, add or remove keys |
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


## Notes / limitations

- **Live money paths:** accounts, sessions, the wallet (main + 3rd-party), the lucky
  wheel, the daily reward, notifications, deposit limits and **real UPI deposits**
  (FamGateway, see above) all read and write the live Firebase RTDB and are enforced
  server-side. Static reference copy for promotions/VIP/games is still presentation
  only (no wagering or game logic is wired yet).
- The spin/daily reward guard is a read-then-write (`rewards/spin/dayKey`): a truly
  parallel double tap could still claim twice. Deposits are protected by the keyed
  ledger above; do the same trick (or a Durable Object) before those two ever pay real
  money.
- Reference game thumbnails and provider logos are hosted third-party brand assets
  kept only so the layout matches the reference; replace them before any public use.
- The reference bundle's own JS/CSS was **not** copied — all styling is newly authored
  against the extracted measurements (rem values, gradients, radii, timings).

**Last updated**: 2026-09-28
