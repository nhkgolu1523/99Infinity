import { site } from '../data'
import { NavbarHome, SiteFooter } from '../components/layout'
import { useRequestContext } from 'hono/jsx-renderer'
import {
  BannerSwiper,
  NoticeBar,
  ActivityCards,
  TopGames,
  GameHub,
  GameSections,
  JackpotBanner,
  Winners,
} from '../components/home'

export function HomePage({ notice }: { notice?: string }) {
  /* logged-in user (or null) — loaded server-side by the session middleware */
  const c = useRequestContext()
  const user = c.get('user') as any

  return (
    <>
      <NavbarHome loggedIn={!!user} balance={Number(user?.balance?.total || 0)} />

      <main class="pchome">
        <BannerSwiper />
        {/* announcement text comes from CONFIG/NOTICE (admin panel) — the static
            copy in src/data.ts is only the fallback */}
        <NoticeBar text={notice || site.notice} />
        <ActivityCards />
        <TopGames />
        <GameHub />
        <GameSections />
        <JackpotBanner />
        <Winners />
        <SiteFooter />
      </main>

    </>
  )
}
