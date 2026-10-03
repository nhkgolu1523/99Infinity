import { rm } from 'node:fs/promises'
import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

/* ==========================================================================
   The build emits dist/_worker.js as a Cloudflare Worker. Besides the request
   handler the Worker needs a SCHEDULED handler, because WinGo's results are
   written by a cron trigger — the runtime only looks for `scheduled` on the
   module's DEFAULT EXPORT, so the generated entry is told to export both.

   The scheduled handler simply calls the app's own tick endpoint, so there is
   exactly ONE implementation of the tick and the cron can never drift away from
   what a manual call does (see src/api.ts → /api/wingo/tick).
   ========================================================================== */
export default defineConfig({
  plugins: [
    /* dist/ is never emptied between builds, so the static-route manifest the
       Cloudflare adapter writes would go stale the moment a new top-level
       directory appears (it skips the write when the file already exists) —
       which would leave /wingo/* routed to the Worker instead of to the files.
       Dropping it here makes the adapter regenerate it on every build. */
    {
      name: 'fresh-cloudflare-routes',
      apply: (_config: any, { command }: any) => command === 'build',
      async buildStart() {
        await rm('dist/_routes.json', { force: true })
      },
    },
    build({
      entryContentDefaultExportHook: (appName: string) => `const TICK_URL = 'https://wingo.internal/api/wingo/tick'
const TICK_INIT = { method: 'POST', headers: { 'x-wingo-force': '1' } }
export default {
  fetch: (request, env, ctx) => ${appName}.fetch(request, env, ctx),
  scheduled: (_event, env, ctx) => ${appName}.fetch(new Request(TICK_URL, TICK_INIT), env, ctx),
}`,
    }),
    devServer({
      adapter,
      entry: 'src/index.tsx',
    }),
  ],
})
