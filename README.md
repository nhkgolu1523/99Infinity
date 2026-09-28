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

## Notes / limitations

- **UI only.** No real money, wagering, payments, accounts or persistence exist.
  Buttons are wired to demo toasts and dialogs, not to a backend.
- Reference game thumbnails and provider logos are hosted third-party brand assets
  kept only so the layout matches the reference; replace them before any public use.
- The reference bundle's own JS/CSS was **not** copied — all styling is newly authored
  against the extracted measurements (rem values, gradients, radii, timings).

**Last updated**: 2026-09-24
