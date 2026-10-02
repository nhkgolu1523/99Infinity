/**
 * Inline SVG sprite. Each glyph is a <symbol> that any <Icon name="..." /> can
 * reference, so strokes/fills stay themeable via `currentColor`.
 * Add a new glyph by appending a <symbol> below — nothing else to wire up.
 */

const GLYPHS: Record<string, string> = {
  'chevron-right': '<path d="M9 6l6 6-6 6" />',
  'chevron-left': '<path d="M15 6l-6 6 6 6" />',
  'chevron-down': '<path d="M6 9l6 6 6-6" />',
  'chevron-up': '<path d="M6 15l6-6 6 6" />',
  'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6" />',
  'arrow-left': '<path d="M19 12H5M11 18l-6-6 6-6" />',
  close: '<path d="M18 6L6 18M6 6l12 12" />',
  check: '<path d="M20 6L9 17l-5-5" />',
  plus: '<path d="M12 5v14M5 12h14" />',
  minus: '<path d="M5 12h14" />',
  search: '<circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />',
  user: '<circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />',
  wallet:
    '<rect x="3" y="6" width="18" height="13" rx="2.5" /><path d="M3 10h18M16.5 14.5h1.5" />',
  bell: '<path d="M6 9a6 6 0 1112 0c0 4 1.5 5.5 1.5 5.5h-15S6 13 6 9z" /><path d="M10 18.5a2 2 0 004 0" />',
  gift:
    '<rect x="3" y="8" width="18" height="13" rx="2" /><path d="M3 13h18M12 8v13M12 8S10.5 3 8 3a2.5 2.5 0 000 5M12 8s1.5-5 4-5a2.5 2.5 0 010 5" />',
  trophy:
    '<path d="M7 4h10v5a5 5 0 01-10 0V4z" /><path d="M7 6H4.5A2.5 2.5 0 007 10.5M17 6h2.5A2.5 2.5 0 0117 10.5" /><path d="M12 14v4M8 21h8" />',
  home: '<path d="M4 10.5L12 4l8 6.5V20H4z" /><path d="M9.5 20v-6h5v6" />',
  fire: '<path d="M12 3s5 4.5 5 9a5 5 0 01-10 0c0-1.5.8-2.8 1.6-3.6" /><path d="M12 20a2.5 2.5 0 002.5-2.5c0-1.6-2.5-4-2.5-4s-2.5 2.4-2.5 4A2.5 2.5 0 0012 20z" />',
  gamepad:
    '<rect x="2.5" y="7" width="19" height="10" rx="5" /><path d="M7 10v4M5 12h4" /><circle cx="15.5" cy="11" r="0.9" fill="currentColor" stroke="none" /><circle cx="17.5" cy="13" r="0.9" fill="currentColor" stroke="none" />',
  headset:
    '<path d="M4 13v-1a8 8 0 1116 0v1" /><rect x="2.5" y="13" width="4" height="6" rx="2" /><rect x="17.5" y="13" width="4" height="6" rx="2" />',
  'shield-check':
    '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" />',
  info: '<circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" />',
  logout: '<path d="M15 4h3a2 2 0 012 2v12a2 2 0 01-2 2h-3" /><path d="M10 8l-4 4 4 4M6 12h9" />',
  settings:
    '<circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.6 1.6 0 009 19.4a1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H3a2 2 0 110-4h.1A1.6 1.6 0 004.6 9a1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H9a1.6 1.6 0 001-1.5V3a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V9a1.6 1.6 0 001.5 1H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z" />',
  history:
    '<path d="M3.5 12a8.5 8.5 0 108.5-8.5A8.5 8.5 0 005 8" /><path d="M3.5 4.5V8H7" /><path d="M12 8v4.5l3 1.8" />',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 012-2h9" />',
  eye: '<path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6z" /><circle cx="12" cy="12" r="2.6" />',
  'eye-off':
    '<path d="M3 3l18 18" /><path d="M10.6 6.2A9.6 9.6 0 0112 6c6.4 0 10 6 10 6a17 17 0 01-3.4 4M6.3 7.9A17 17 0 002 12s3.6 6 10 6a9.8 9.8 0 004-.8" />',
  backspace:
    '<path d="M9 5h11.5A1.5 1.5 0 0122 6.5v11a1.5 1.5 0 01-1.5 1.5H9l-6.5-7L9 5z" /><path d="M12 9.5l5 5M17 9.5l-5 5" />',
  'calendar-check':
    '<rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M3 10h18M8 3v4M16 3v4M9 15.5l2 2 4-4" />',
  clock: '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />',
  camera:
    '<path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" />',
  qrcode:
    '<rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3h-3z" /><path d="M20 14h1M14 20h1M20 20h1" />',
  dharmachakra:
    '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2.4" /><path d="M12 3v6.6M12 14.4V21M3 12h6.6M14.4 12H21M5.64 5.64l4.67 4.67M13.69 13.69l4.67 4.67M18.36 5.64l-4.67 4.67M10.31 13.69l-4.67 4.67" />',
  lock: '<rect x="4.5" y="10" width="15" height="11" rx="2.5" /><path d="M8 10V7a4 4 0 018 0v3" />',
  phone:
    '<rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M10.5 18.5h3" />',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7l8.5 6 8.5-6" />',
  globe: '<circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17M12 3a15 15 0 000 18M12 3a15 15 0 010 18" />',
  star: '<path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 10l6.1-.9z" />',
  'arrow-up': '<path d="M12 19V5M6 11l6-6 6 6" />',
  'arrow-down': '<path d="M12 5v14M6 13l6 6 6-6" />',
  refresh:
    '<path d="M20 11a8 8 0 10-2.3 5.7" /><path d="M20 5v6h-6" />',
  play: '<path d="M7 4.5l12 7.5-12 7.5z" />',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />',
  ticket:
    '<path d="M3 8.5A2.5 2.5 0 015.5 6h13A2.5 2.5 0 0121 8.5v1a2.5 2.5 0 000 5v1A2.5 2.5 0 0118.5 18h-13A2.5 2.5 0 013 15.5v-1a2.5 2.5 0 000-5z" /><path d="M12 7v10" />',
}

/**
 * Solid (FontAwesome-style filled) glyphs. Rendered with fill="currentColor"
 * and no stroke, so they look like Font Awesome solid icons.
 */
const SOLID_GLYPHS: Record<string, string> = {
  'fa-house':
    '<path d="M12 2.7l10 8.3h-2.5V21h-6v-5h-3v5h-6V11H2z" />',
  'fa-chart':
    '<path d="M4 20v-8h4.5v8zM9.75 20V7h4.5v13zM15.5 20V3H20v17zM3 21.2h18v1.3H3z" />',
  'fa-gift':
    '<path d="M2 9.5h20v3.2H2z" /><path d="M3.5 14h17v7a1.3 1.3 0 01-1.3 1.3H4.8A1.3 1.3 0 013.5 21z" /><path d="M10.9 9.5h2.2V22h-2.2z" /><circle cx="7.7" cy="6.4" r="2.4" /><circle cx="16.3" cy="6.4" r="2.4" />',
  'fa-user':
    '<circle cx="12" cy="7.3" r="4.3" /><path d="M12 13.4c-4.6 0-8 2.6-8 6.6V22h16v-2c0-4-3.4-6.6-8-6.6z" />',
  'fa-headset':
    '<path d="M12 3a8 8 0 00-8 8v1H3.5A1.5 1.5 0 002 13.5v4A2.5 2.5 0 004.5 20H6a1 1 0 001-1v-8a1 1 0 00-1-1h-.9A7 7 0 0119 10h-.9a1 1 0 00-1 1v8a1 1 0 001 1h1.4a2.5 2.5 0 002.5-2.5v-4a1.5 1.5 0 00-1.5-1.5H20v-1a8 8 0 00-8-8z" />',
  'fa-envelope':
    '<path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v.3l-10 6.2L2 6.8z" /><path d="M2 8.9l9.4 5.8a1.2 1.2 0 001.2 0L22 8.9v8.6a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5z" />',
  'fa-telegram':
    '<path d="M21.4 4.1L2.5 11.4c-.9.35-.85 1.63.08 1.9l4.72 1.44 1.79 5.45c.28.86 1.38 1.03 1.9.3l2.5-3.42 4.62 3.4c.73.53 1.77.13 1.94-.76l2.44-13.7c.2-1.1-.92-1.97-1.96-1.6z" />',
  'fa-whatsapp':
    '<path fill-rule="evenodd" d="M12 2a10 10 0 00-8.55 15.18L2.1 21.9l4.87-1.28A10 10 0 1012 2zm0 3.4a6.6 6.6 0 015.55 10.15l-.45.68.5 1.93-1.95-.5-.66.38A6.6 6.6 0 1112 5.4z" /><path d="M9.1 7.9c.5-.4 1.2-.3 1.6.2l.8 1c.3.4.28.94-.06 1.3l-.42.46c.5 1.05 1.4 1.95 2.45 2.44l.46-.41c.36-.34.9-.36 1.3-.06l1 .8c.5.4.58 1.1.18 1.6-.62.76-1.68 1-2.57.6-2.15-.97-4.03-2.85-5-5-.4-.9-.15-1.95.6-2.57z" />',
  'fa-paper-plane':
    '<path d="M21.7 2.3a1 1 0 011.3 1.3l-7.2 18a1 1 0 01-1.86.06l-3-7.2-2.1-2.1-5.1 3.4a1 1 0 01-1.4-1.4zM10.4 13.6l1.1 2.6 3.9-9.7z" /><path d="M10.4 13.6l1.1 2.6 3.9-9.7z" />',
  'fa-circle-dot':
    '<path fill-rule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 5.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />',
  'fa-arrow-down':
    '<path d="M13 4v11.2l3.3-3.3 1.4 1.4-5.7 5.7-5.7-5.7 1.4-1.4 3.3 3.3V4z" />',
  'fa-arrow-up':
    '<path d="M11 20V8.8L7.7 12.1 6.3 10.7 12 5l5.7 5.7-1.4 1.4L13 8.8V20z" />',
  'fa-credit-card':
    '<path d="M2 7a3 3 0 013-3h14a3 3 0 013 3v1H2z" /><path d="M2 10h20v7a3 3 0 01-3 3H5a3 3 0 01-3-3z" />',
  'fa-external-link':
    '<path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L18.6 5H14z" /><path d="M5 5h6v2H7v10h10v-4h2v6H5z" />',
  'fa-clock':
    '<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5.4l-4 2.3-1-1.7 3-1.8V7z" />',
  'fa-dice':
    '<path fill-rule="evenodd" d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm2.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4.5 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4.5 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />',
  'fa-crown':
    '<path d="M5 19l-2-12 5.5 4L12 4l3.5 7L23 7l-2 12z" /><path d="M5 20h14v2H5z" />',
  'fa-shield':
    '<path d="M12 2l8 3v6.5c0 4.8-3.3 9-8 10.5-4.7-1.5-8-5.7-8-10.5V5z" />',
  'fa-logout':
    '<path d="M6 3h7a2 2 0 012 2v14a2 2 0 01-2 2H6a1 1 0 010-2h7V5H6a1 1 0 010-2z" /><path d="M18.6 12l-2.8-2.8 1.4-1.4L21.4 12l-4.2 4.2-1.4-1.4 2.8-2.8H9v-2z" />',
  'fa-key':
    '<path fill-rule="evenodd" d="M14 3a7 7 0 00-6.8 8.8L2 17v5h5l1-2h2v-2h2l1.2-1.2A7 7 0 1014 3zm3.5 7a2 2 0 110-4 2 2 0 010 4z" />',
  'fa-mobile':
    '<path fill-rule="evenodd" d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 16.6a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" />',
  'fa-lock':
    '<path fill-rule="evenodd" d="M12 3a5 5 0 015 5v3h1.5A1.5 1.5 0 0120 12.5v7A1.5 1.5 0 0118.5 21h-13A1.5 1.5 0 014 19.5v-7A1.5 1.5 0 015.5 11H7V8a5 5 0 015-5zm0 2a3 3 0 00-3 3v3h6V8a3 3 0 00-3-3z" />',
  'fa-laptop':
    '<path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v10H4z" /><path d="M2 17h20l-1 3H3z" />',
  'fa-rupee':
    '<path d="M6 3h12v2.5h-4.2c1 .7 1.7 1.6 2 2.8H18v2.4h-4.1c-.5 2.4-2.5 4-5.4 4.3l6.4 6H11.4l-6.3-6V12h2.7c2.4 0 3.9-.8 4.3-2.3H6V7.3h6.1C11.6 6 10.4 5.2 8.6 5.2H6z" />',
  'fa-circle-check':
    '<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.4l-4.2-4.2 1.4-1.4 2.8 2.8 6-6 1.4 1.4z" />',
  'fa-building-columns':
    '<path d="M12 1.5 1.5 7v2h21V7zM3.5 10.5h3v8h-3zM10.5 10.5h3v8h-3zM17.5 10.5h3v8h-3zM2 20h20v2.5H2z" />',
  'fa-coins':
    '<path d="M7 2a5 5 0 00-1.8 9.66 5 5 0 103.6 0A5 5 0 007 2zm10 3a5 5 0 00-1.8 9.66 5 5 0 103.6 0A5 5 0 0017 5zm0 2a3 3 0 110 6 3 3 0 010-6zM7 4a3 3 0 110 6 3 3 0 010-6zm-1.2 9.06A5 5 0 0112 17a5 5 0 01-6.2 4.06 5 5 0 000-8.12z" />',
  'fa-bolt':
    '<path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />',
  'fa-arrow-up-from-bracket':
    '<path d="M12 2.6l4.6 4.6-1.4 1.4L13 6.4V15h-2V6.4L8.8 8.6 7.4 7.2z" /><path d="M5 11h2v7h10v-7h2v9H5z" />',
  'fa-circle-info':
    '<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4.8a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zM10.8 10.5h2.4v6.4h-2.4z" />',
  'fa-triangle-exclamation':
    '<path fill-rule="evenodd" d="M12 1.8 23.2 21H.8L12 1.8zM11 9h2v5.4h-2V9zm0 7.2h2v2.2h-2v-2.2z" />',
}

export type IconName = keyof typeof GLYPHS | string

/** Full sprite — mount once, near the top of <body>. */
export function IconSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="position:absolute;width:0;height:0;overflow:hidden"
      aria-hidden="true"
      focusable="false"
    >
      {Object.entries(GLYPHS).map(([name, d]) => (
        <symbol
          id={`i-${name}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          dangerouslySetInnerHTML={{ __html: d }}
        />
      ))}
      {Object.entries(SOLID_GLYPHS).map(([name, d]) => (
        <symbol
          id={`i-${name}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          dangerouslySetInnerHTML={{ __html: d }}
        />
      ))}
    </svg>
  )
}

/**
 * Single glyph. Size follows font-size by default (1em), so text utilities
 * control it — pass `size` for an explicit value in rem/px.
 */
export function Icon({
  name,
  size,
  class: cls = '',
  fill = false,
  ...rest
}: {
  name: IconName
  size?: string
  class?: string
  fill?: boolean
  [k: string]: any
}) {
  const style = size ? `width:${size};height:${size};` : ''
  return (
    <svg
      class={`icon ${cls}`.trim()}
      style={style}
      aria-hidden="true"
      focusable="false"
      fill={fill ? 'currentColor' : 'none'}
      {...rest}
    >
      <use href={`#i-${name}`} />
    </svg>
  )
}
