import { totalBalance } from '../lib/wallet'
import { ludoPrize, type LudoConfig } from '../lib/ludo'
import { LUDO_HTML } from './ludo-html'

/* ==========================================================================
   LUDO — the board game that is actually playable (unlike the catalogue
   entries, which only render a reference thumbnail).

   The whole game screen comes from LUDO_HTML (the standalone build, verbatim);
   this page only hands it real account data:

     wallet   the logged-in user's balance, straight from their own record
     fee/prize CONFIG/LUDO, so the price on screen is the price the API charges
     avatar   the player's own profile avatar (the opponents get random ones
              from the site's own avatar set)

   The route is behind the account gate, so a guest can never even see it.
   ========================================================================== */

/** The avatar a player wears — the profile one, normalised exactly like the
 *  profile page does (a missing/foreign value falls back to the default). */
function avatarOf(user: any): string {
  const a = String(user?.profile?.avatar || '')
  if (!a || a === '/assets/img/avatar/avatar-original.png' || !/^\/assets\/img\/avatar\//.test(a))
    return '/assets/img/avatar/avatar.png'
  return a
}

export function LudoPage({ user, cfg }: { user: any; cfg: LudoConfig }) {
  return (
    <div
      id="ludoPage"
      class="ludo-page"
      /* the game paints its own UI — the site translator keeps its hands off */
      data-i18n-skip="1"
      data-balance={String(totalBalance(user))}
      data-fee={String(cfg.entryFee)}
      data-prize2={String(ludoPrize(cfg, 2))}
      data-prize4={String(ludoPrize(cfg, 4))}
      data-name={String(user?.profile?.name || 'You')}
      data-avatar={avatarOf(user)}
      dangerouslySetInnerHTML={{ __html: LUDO_HTML }}
    />
  )
}
