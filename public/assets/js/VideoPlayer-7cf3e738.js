import {
  G as d,
  C as l,
  N as p,
  I as _,
  aC as m,
  aD as f,
  J as u,
} from "./common.modules-cecf9b0d.js";
import {
  r as v,
  i as y,
  a as h,
  b as g,
  c as x,
  l as P,
  d as S,
} from "./chunk.veplayer-6dcd0ea2.js";
import { U as V } from "./page-saasLottery-D5-c991f6a0.js";
import { _ as w } from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-home-other-6d9782ba.js";
import "./page-home-Casino-ff36f722.js";
import "./page-home-AllGames-ebd16353.js";
import "./page-activity-Bonus-c94a181e.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const k = (o) => (m("data-v-c823427d"), (o = o()), f(), o),
  I = { class: "video-container" },
  L = k(() => u("div", { id: "video" }, null, -1)),
  b = [L],
  B = d({
    __name: "VideoPlayer",
    setup(o) {
      v([y, h, g]);
      let a = null;
      async function i(e) {
        if (x()) {
          await r(e.flv);
          return;
        }
        r(e.rtm).then(function () {
          a.on(P.Events.ERROR, function (t) {
            r(e.hls);
          });
        });
      }
      async function r(e) {
        return (
          n(),
          S({
            url: e,
            lang: "en",
            id: "video",
            rtm: { enableFallback: !1 },
            controls: { play: !0 },
          }).then(function (t) {
            a = t;
          })
        );
      }
      function n() {
        a && (a.destroy(), (a = null));
      }
      const s = async () => {
        try {
          const { result: e, data: t } = await V({
            isOriginalStream: !1,
            transcodingStreamSuffix: "_hd",
            scheme: 2,
          });
          if (e) {
            const c = {
              rtm: t.replace(".flv", ".sdp"),
              flv: t,
              hls: t.replace(".flv", ".m3u8"),
            };
            await i(c);
          }
        } catch {}
      };
      return (
        l(async () => {
          await s();
        }),
        (e, t) => (p(), _("div", I, b))
      );
    },
  });
const J = w(B, [
  ["__scopeId", "data-v-c823427d"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/components/Video/VideoPlayer.vue",
  ],
]);
export { J as default };
