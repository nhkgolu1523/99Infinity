/* ==========================================================================
   LUDO — regenerate the site copy of the game from the standalone build.

     node tools/split-ludo.cjs          both (default)
     node tools/split-ludo.cjs css      public/css/ludo.css
     node tools/split-ludo.cjs html     src/pages/ludo-html.ts

   Ludo.html is the design source (it is also how the game is played offline).
   Its <style> becomes a stylesheet scoped under .ludo-page so none of the game
   rules can leak into the rest of the site, and its <body> becomes the markup
   string the Ludo page renders.

   NOT generated: public/js/ludo.js. The game script is hand-ported from the same
   file — it has the real wallet, avatars and API calls wired in (see the header
   of that file). Redo those few spots by hand if you re-port the game logic.
   ========================================================================== */
const fs = require('fs')
const path = require('path')

const html = fs.readFileSync('Ludo.html', 'utf8')
const TICK = String.fromCharCode(96)
const mode = process.argv[2] || 'both'

/* ------------------------------------------------------------------ css */
const cssStart = html.indexOf('<style>') + '<style>'.length
const cssRaw = html.slice(cssStart, html.indexOf('</style>', cssStart))
if (!cssRaw) throw new Error('no <style> block found in Ludo.html')
/* the document frame rule is replaced by body.ludo-body below */
const css = cssRaw.replace(/html,\s*body\s*\{[^}]*\}\s*/, '')

/** split a selector list on top-level commas only */
function splitSelectors(sel) {
  const out = []
  let depth = 0
  let cur = ''
  for (const ch of sel) {
    if (ch === '(') depth++
    else if (ch === ')') depth--
    if (ch === ',' && depth === 0) {
      out.push(cur)
      cur = ''
    } else cur += ch
  }
  out.push(cur)
  return out
}

/** one selector → the scoped version (html/body ARE the game root) */
function scopeOne(sel) {
  const s = sel.trim()
  if (!s) return s
  if (s === 'html' || s === 'body') return '.ludo-page'
  if (/^body\b/.test(s) || /^html\b/.test(s)) return '.ludo-page' + s.slice(4)
  if (s === '*') return '.ludo-page, .ludo-page *'
  return '.ludo-page ' + s
}

/** prefix every selector of a stylesheet, leaving at-rules intact */
function scope(sheet) {
  let out = ''
  let i = 0
  while (i < sheet.length) {
    const open = sheet.indexOf('{', i)
    if (open === -1) {
      out += sheet.slice(i)
      break
    }
    const head = sheet.slice(i, open)
    /* nesting-aware matching close brace */
    let depth = 0
    let close = -1
    for (let j = open; j < sheet.length; j++) {
      if (sheet[j] === '{') depth++
      else if (sheet[j] === '}' && --depth === 0) {
        close = j
        break
      }
    }
    const body = sheet.slice(open + 1, close)
    const trimmed = head.trim()
    if (/^@/.test(trimmed)) {
      const nested = /^@(media|supports|layer|container|scope)/i.test(trimmed)
      out += head + '{' + (nested ? scope(body) : body) + '}'
    } else {
      out += splitSelectors(head).map(scopeOne).join(',') + '{' + body + '}'
    }
    i = close + 1
  }
  return out
}

const CSS_HEAD = `/* ==========================================================================
   LUDO — the standalone game skin, scoped under .ludo-page.

   Generated from Ludo.html by tools/split-ludo.cjs — do not hand-edit; change
   the game there and re-run the splitter. Every rule carries a .ludo-page
   prefix, so nothing here can touch the rest of the site: the game has its own
   reset, its own fixed full-screen frame and its own toast class.

     body.ludo-body   the document frame the game expects (no page scroll)
     .avatar img      real profile avatars instead of emoji placeholders
   ========================================================================== */

/* The document behind the full-screen canvas — see src/renderer.tsx (bodyClass).
   In the standalone file the game root WAS <body> ("html, body { height: 100% }"),
   so the board always filled the phone. On the site it is a <div> inside #app,
   and #app is only as tall as its own content — so the game painted on the top
   part of the screen and the rest stayed the site background (the "half screen"
   bug). These rules give the game its screen back: the frame (#app) stretches to
   the viewport and the game root fills the frame, exactly like the original
   document did, so every screen is centred and the background covers the phone. */
body.ludo-body,
body.ludo-body #app,
body.ludo-body .ludo-page {
  height: 100vh;
  height: 100dvh;
  min-height: 100vh;
  min-height: 100dvh;
}

body.ludo-body {
  overflow: hidden;
  background: #071a45;
}

body.ludo-body #app {
  width: 100%;
  max-width: none;
  overflow: hidden;
  background: #071a45;
}

/* the game's own .toast (its centre pop-up) must not share an id/class with the
   site-wide toast that /js/app.js writes into — only that one class is renamed,
   .toast-icon / .toast-text inside .turn-toast keep their names (the game script
   builds those class names) */
`
const CSS_TAIL = `
/* real avatars — the game paints .avatar itself, an <img> just fills it */
.ludo-page .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.ludo-page .avatar {
  overflow: hidden;
}
`

if (mode === 'css' || mode === 'both') {
  const out =
    CSS_HEAD +
    scope(css)
      /* rename ONLY the standalone toast rules (not .toast-icon / .toast-text) */
      .replace(/\.toast\{/g, '.ludo-toast{')
      .replace(/\.toast\.show/g, '.ludo-toast.show')
      .replace(/\.toast \.t-icon/g, '.ludo-toast .t-icon') +
    CSS_TAIL
  fs.writeFileSync(path.join('public', 'css', 'ludo.css'), out)
  console.log('public/css/ludo.css     ', out.length, 'bytes')
}

/* ------------------------------------------------------------------ markup */
if (mode === 'html' || mode === 'both') {
  const START = html.indexOf('<body>') + '<body>'.length
  let body = html
    .slice(START, html.lastIndexOf('<script>'))
    .replace(/\s+$/, '')
  if (!body) throw new Error('no <body> markup found in Ludo.html')
  if (body.includes(TICK)) throw new Error('backtick in the markup — it cannot be inlined')
  if (body.includes('</script')) throw new Error('script end tag in the markup')

  /* the "-100" labels follow the live entry fee, so they need ids */
  const before = body
  body = body
    .replace(
      /(<div class="fee-row"><span class="lbl">Entry Fee<\/span><span class="val red">[\s\S]*?)<span class="big-amount">-100<\/span>/,
      '$1<span class="big-amount" id="cFee">-100</span>',
    )
    .replace(/(<span class="amount")>-100<\/span>/, '$1 id="qFee">-100</span>')
    .replace(/<div class="toast" id="toast"><\/div>/, '<div class="ludo-toast" id="ludo-toast"></div>')
  if (body === before) throw new Error('markup patches did not apply — did the game change?')
  for (const id of ['cFee', 'qFee', 'ludo-toast']) {
    if (!body.includes(id)) throw new Error('missing patch: ' + id)
  }

  const esc = (s) =>
    s.replace(/\\/g, '\\\\').replace(new RegExp(TICK, 'g'), '\\' + TICK).replace(/\$\{/g, '\\${')

  const out = `/* ==========================================================================
   LUDO MARKUP — the standalone game's <body>, kept exactly as designed.

   Generated from Ludo.html by tools/split-ludo.cjs — do not hand-edit; change
   the game there and re-run the splitter. It lives here as a string because it
   is one closed, self-contained screen tree (boards, SVGs, overlays, templates
   — ~16 kB of markup), so rendering it verbatim through dangerouslySetInnerHTML
   keeps the game pixel-identical while src/pages/ludo.tsx hands over the real
   account data.

   Only three ids differ from the standalone file:
     cFee / qFee          the "-100" labels, filled with the live entry fee
     ludo-toast           the game's own toast (never the site-wide #toast)
   ========================================================================== */
export const LUDO_HTML = ${TICK}${esc(body)}${TICK}
`
  fs.writeFileSync(path.join('src', 'pages', 'ludo-html.ts'), out)
  console.log('src/pages/ludo-html.ts  ', out.length, 'bytes (markup', body.length + ')')
}
