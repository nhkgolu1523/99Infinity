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
