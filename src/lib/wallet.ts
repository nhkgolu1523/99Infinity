/* ==========================================================================
   WALLET — the money is kept in TWO buckets inside one account:

     main   : real money the user can withdraw — deposits + (later) whatever the
              user wins inside the games.
     promo  : everything that came from a CLAIM — lucky-wheel winnings, the
              daily login reward, free-game prizes. This is the "3rd party
              wallet" shown on the wallet page.

   `total` stays exactly what it always was (main + promo) so every existing
   check (withdrawal limit, order flows, admin tooling) keeps working.
   Accounts created before the split simply have `total` and no buckets — for
   them we treat the whole balance as `main`, so nobody's money ever moves into
   the bonus bucket behind their back.
   ========================================================================== */

/** Money that came in through the UPI gateway.
 *
 *  Every gateway deposit is stored under its own order id
 *  (`USERS/<uid>/balance/deposits/<orderId> = amount`), which makes a credit
 *  idempotent BY CONSTRUCTION: the webhook, the browser poll and a retried
 *  request can all write the same key and the wallet still gains the amount
 *  exactly once (see src/lib/payments.ts). The spendable total is therefore the
 *  plain counter plus the sum of these keys.
 */
export function depositCredits(user: any): number {
  const map = user?.balance?.deposits
  if (!map || typeof map !== 'object') return 0
  let sum = 0
  for (const v of Object.values<any>(map)) {
    const n = Number(v && typeof v === 'object' ? (v as any).amount : v)
    if (n > 0) sum += n
  }
  return Math.round(sum * 100) / 100
}

/** The one true balance: the plain counter + every credited gateway deposit.
 *  Everything that reads money (withdrawals, the wallet page, the navbar) must
 *  go through this, otherwise a deposit would look missing. */
export function totalBalance(user: any): number {
  return Math.max(0, Number(user?.balance?.total || 0)) + depositCredits(user)
}

export type WalletSplit = {
  main: number
  promo: number
  total: number
  mainPct: number
  promoPct: number
}

/** Balance of one account split into main wallet / 3rd-party wallet.
 *
 *  `promo` is only ever written by the claim endpoints (spin / daily), so it is
 *  always trustworthy. `main` is then "everything else in the account", which
 *  means real money — a gateway deposit or an admin credit — can never hide
 *  inside the bonus bucket.
 */
export function walletSplit(user: any): WalletSplit {
  const b = user?.balance || {}
  const rawTotal = totalBalance(user)
  const promo = Math.max(0, Number(b.promo ?? b.thirdParty ?? 0))
  const storedMain = b.main === undefined || b.main === null ? 0 : Number(b.main)
  /* the bigger of "what we stored" and "whatever the total does not explain" */
  const main = Math.max(storedMain, rawTotal - promo)
  const total = main + promo
  /* an empty wallet must not render NaN/Infinity */
  const mainPct = total > 0 ? Math.round((main / total) * 100) : 0
  return { main, promo, total, mainPct, promoPct: total > 0 ? 100 - mainPct : 0 }
}

export type WalletTotals = {
  depositTotal: number
  withdrawTotal: number
  depositPending: number
  withdrawPending: number
}

/* Lifetime deposit / withdrawal totals, read straight from the transactions.
 *
 *  The rule is "money that really moved":
 *    • a deposit counts once it is approved (a pending one has not arrived yet);
 *    • a withdrawal counts as soon as it is held — the wallet was debited the
 *      moment the request was made (see src/api.ts) — and also when it is paid;
 *    • a request that was closed without money (rejected, expired, a blocked
 *      duplicate) never counts on either side.
 *
 *  So a request that is still waiting for approval is already part of the
 *  lifetime withdrawal total, exactly as it is already missing from the balance. */
export function walletTotals(user: any): WalletTotals {
  /* done   → the money moved (or will move, for an approved request)
     pending→ still waiting for the bank or for an approval
     dead   → the request was closed without money (expired QR, rejected,
              a blocked duplicate) — it must not count as "on the way" */
  const stateOf = (status: any): 'done' | 'dead' | 'pending' => {
    const s = String(status || '').toLowerCase()
    if (s === 'completed' || s === 'success' || s === 'approved' || s === 'paid') return 'done'
    if (
      s === 'expired' ||
      s === 'rejected' ||
      s === 'cancelled' ||
      s === 'canceled' ||
      s === 'failed' ||
      s === 'duplicate'
    )
      return 'dead'
    return 'pending'
  }
  const out: WalletTotals = {
    depositTotal: 0,
    withdrawTotal: 0,
    depositPending: 0,
    withdrawPending: 0,
  }
  for (const tx of Object.values<any>(user?.transactions || {})) {
    const amount = Number(tx?.amount || 0)
    if (amount <= 0) continue
    const state = stateOf(tx?.status)
    if (state === 'dead') continue
    const paid = state === 'done'
    if (tx?.type === 'deposit') {
      if (paid) out.depositTotal += amount
      else out.depositPending += amount
    } else if (tx?.type === 'withdraw') {
      /* a held request already took the money out of the wallet, so it belongs to
         the lifetime total even while it waits; an older pending one (no `held`)
         has not been debited yet and only counts once the admin pays it */
      const gone = paid || Number(tx?.held?.main || 0) + Number(tx?.held?.promo || 0) > 0
      if (gone) out.withdrawTotal += amount
      else out.withdrawPending += amount
    }
  }
  return out
}

/** "₹1,23,456.78" — one formatter for every wallet surface. */
export function inr(n: any): string {
  return (
    '₹' +
    Number(n || 0).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  )
}
