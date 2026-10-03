import {
  G as p,
  H as m,
  I as u,
  Q as v,
  J as o,
  P as t,
  O as e,
  K as h,
  aC as g,
  aD as f,
  N as w,
} from "./common.modules-cecf9b0d.js";
import {
  y as x,
  az as S,
  _ as k,
} from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const c = "/icon-192x192.png",
  i = (s) => (g("data-v-fc8e6e00"), (s = s()), f(), s),
  I = { class: "iosTip" },
  N = { class: "text" },
  B = i(() => o("div", { class: "img i1" }, null, -1)),
  C = { class: "img i2" },
  y = i(() => o("img", { src: c, alt: "iOS Download Instructions" }, null, -1)),
  D = { class: "title" },
  j = { class: "c" },
  O = { class: "img i3" },
  P = i(() => o("img", { src: c, alt: "iOS Download Instructions" }, null, -1)),
  V = { class: "title" },
  $ = { class: "c" },
  b = p({
    __name: "index",
    setup(s) {
      const n = x(),
        _ = window.location.host,
        d = window.location.origin,
        l = () => {
          S.back();
        };
      return (a, z) => {
        const r = m("NavBar");
        return (
          w(),
          u(
            h,
            null,
            [
              v(
                r,
                { title: a.$t("e6"), "left-arrow": "", onClickLeft: l },
                null,
                8,
                ["title"]
              ),
              o("div", I, [
                o("div", N, t(a.$t("e5")), 1),
                B,
                o("div", C, [
                  y,
                  o("div", D, t(e(n).getProjectName), 1),
                  o("div", j, t(e(_)), 1),
                ]),
                o("div", O, [
                  P,
                  o("div", V, t(e(n).getProjectName), 1),
                  o("div", $, t(e(d)), 1),
                ]),
              ]),
            ],
            64
          )
        );
      };
    },
  });
const K = k(b, [
  ["__scopeId", "data-v-fc8e6e00"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/downloadCenter/ios/index.vue",
  ],
]);
export { K as default };
