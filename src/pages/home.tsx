import { site } from '../data'
import { NavbarHome, FloatButtons, CustomerBubble, SiteFooter } from '../components/layout'
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

export function HomePage() {
  return (
    <>
      <NavbarHome />

      <main class="pchome">
        <BannerSwiper />
        <NoticeBar />
        <ActivityCards />
        <TopGames />
        <GameHub />
        <GameSections />
        <JackpotBanner />
        <Winners />
        <SiteFooter />
      </main>

      <FloatButtons />
      <CustomerBubble />
    </>
  )
}
