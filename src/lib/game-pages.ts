/* ==========================================================================
   PLAYABLE GAMES — the one place that knows which catalogue entries are not
   just artwork: a game with a screen of its own.

   Every tile (the home carousel and the /games catalogue) carries the same
   identity: the key derived from its cover image. This module maps that key —
   an EXACT key or the name an image happens to have — to the screen that
   really plays it, PLUS the GAMES/<key> switch that gates it in Firebase:

     GAMES/<key> = 0   "Comming Soon!"   (the default for a new catalogue entry)
     GAMES/<key> = 1   playable
     GAMES/<key> = 2   "Deposit to Play" popup

   So an admin keeps full control (switching the key off hides the game again,
   and /games/wingo stays reachable only through the gate), while a playable
   game ships ENABLED rather than waiting for someone to flip its switch.
   ========================================================================== */

export type PlayableGame = {
  /** the GAMES/<key> switch that gates it */
  key: string
  /** where a tap goes — a full document navigation (its own css + js) */
  href: string
  /** the name shown on the tile */
  label: string
  /** which cover-image keys belong to it (tested against a normalised name) */
  match: RegExp
}

/* The image keys arrive in two shapes:
     home carousel  "ludo"                                          (basename)
     catalogue      "arlottery_WinGo_30S_20260909011825105"         (provider + name)
   so a match is done against a lowercased key with anything that is not a
   letter/digit/dash collapsed, which covers both. */
export const PLAYABLE_GAMES: PlayableGame[] = [
  { key: 'ludo', href: '/games/ludo', label: 'Ludo', match: /(^|[_-])ludo([_-]|$)/ },
  { key: 'wingo', href: '/games/wingo', label: 'WinGo', match: /(^|[_-])wingo/ },
]

/** `arlottery/WinGo_30S_x.jpg` → `arlottery_wingo_30s_x` — exactly how the
 *  catalogue gate (public/js/app.js → gameKeyFromName) derives a key, so the
 *  href this module hands out and the switch the gate reads agree. */
export function gameKeyOfImage(src: any): string {
  return String(src || '')
    .replace(/^.*?\/assets\/img\/game\//, '')
    .replace(/\.(png|jpe?g|webp|gif)$/i, '')
    .replace(/[.$#[\]/]/g, '_')
}

/** The playable game a tile is, or null for plain artwork. `rawKey` may be an
 *  exact key ("wingo") or an image path ("/assets/img/top/ludo.jpg"). */
export function playableGameOf(rawKey: any): PlayableGame | null {
  const key = String(rawKey || '').trim()
  if (!key) return null
  const exact = PLAYABLE_GAMES.find((g) => g.key === key.toLowerCase())
  if (exact) return exact
  const name = gameKeyOfImage(key).toLowerCase().replace(/[^a-z0-9]+/g, '_')
  return PLAYABLE_GAMES.find((g) => g.match.test(name)) || null
}

/** true when a GAMES key belongs to a game that really plays. Used to answer the
 *  tap gate for a key nobody has listed yet: a playable title is live, while an
 *  explicit 0 in Firebase still switches it off. */
export function isPlayableGameKey(key: any): boolean {
  const k = String(key || '').trim().toLowerCase()
  if (!k) return false
  if (PLAYABLE_GAMES.some((g) => g.key === k)) return true
  return !!playableGameOf(k)
}