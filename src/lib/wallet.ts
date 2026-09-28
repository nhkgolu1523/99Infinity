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
 *  means a deposit credited by an admin (they only touch `balance.total`) can
 *  never hide inside the bonus bucket — real money always stays in main.
 */
export function walletSplit(user: any): WalletSplit {
  const b = user?.balance || {}
  const rawTotal = Math.max(0, Number(b.total || 0))
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

/** Lifetime deposit / withdrawal totals, read straight from the transactions. */
export function walletTotals(user: any): WalletTotals {
  const done = (status: any) => {
    const s = String(status || '').toLowerCase()
    return s === 'completed' || s === 'success' || s === 'approved' || s === 'paid'
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
    const paid = done(tx?.status)
    if (tx?.type === 'deposit') {
      if (paid) out.depositTotal += amount
      else out.depositPending += amount
    } else if (tx?.type === 'withdraw') {
      if (paid) out.withdrawTotal += amount
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
