/* ==========================================================================
   SITE CONTENT (DB driven) — everything the admin panel writes:
     CONFIG/NOTICE  : the scrolling notice bar on the home page
     MESSAGES       : the notification list (newest first)
   Both fall back to the static seed in src/data.ts when the DB has nothing.
   ========================================================================== */
import { dbGet } from './backend'
import { site } from '../data'

export type NoticeItem = {
  id: string
  title: string
  desc: string
  time: string
  tone?: string
  active?: number
}

/** Scrolling announcement on the home page.
 *  CONFIG/NOTICE.text (new admin panel) wins, then the plain-text CONFIG/notice
 *  key that an older admin schema used, then the static seed in src/data.ts. */
export async function loadNotice(env: any): Promise<string> {
  try {
    const node = await dbGet<any>(env, 'CONFIG/NOTICE')
    const text = String(node?.text || '').trim()
    if (text) return text
  } catch {
    /* offline — try the next source */
  }
  try {
    const legacy = String((await dbGet<any>(env, 'CONFIG/notice')) || '').trim()
    if (legacy) return legacy
  } catch {
    /* offline — fall through to the static seed */
  }
  return site.notice
}

/** Notification list: DB messages first, then the static seed as a fallback. */
export async function loadMessages(env: any): Promise<NoticeItem[]> {
  let dbItems: NoticeItem[] = []
  try {
    const node = await dbGet<Record<string, any>>(env, 'MESSAGES')
    if (node && typeof node === 'object') {
      dbItems = Object.entries(node)
        .map(([id, v]: [string, any]) => ({
          id,
          title: String(v?.title || ''),
          desc: String(v?.desc || ''),
          time: String(v?.time || ''),
          tone: String(v?.tone || ''),
          active: v?.active === false || Number(v?.active) === 0 ? 0 : 1,
        }))
        .filter((m) => m.active && m.title)
        .sort((a, b) => String(b.time).localeCompare(String(a.time)))
    }
  } catch {
    /* offline — static seed only */
  }
  const seed: NoticeItem[] = (site.messages as any[]).map((m, i) => ({
    id: 'seed-' + i,
    title: m.title,
    desc: m.desc,
    time: m.time,
    tone: '',
    active: 1,
  }))
  return [...dbItems, ...seed]
}
