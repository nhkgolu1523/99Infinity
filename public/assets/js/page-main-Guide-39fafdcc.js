import {
  G as s,
  R as i,
  r,
  C as d,
  H as c,
  I as _,
  Q as l,
  O as u,
  J as p,
  N as f,
} from "./common.modules-cecf9b0d.js";
import {
  A as m,
  bI as v,
  _ as g,
} from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const x = { class: "guide-container" },
  k = ["innerHTML"],
  w = s({
    __name: "index",
    setup(y) {
      const a = i(),
        t = r();
      return (
        d(async () => {
          const e = await m(v());
          e && (t.value = e.data.playingGuide);
        }),
        (e, n) => {
          const o = c("NavBar");
          return (
            f(),
            _("div", x, [
              l(
                o,
                {
                  title: e.$t("guideTitle"),
                  "left-arrow": "",
                  onClickLeft: n[0] || (n[0] = (B) => u(a).go(-1)),
                },
                null,
                8,
                ["title"]
              ),
              p(
                "div",
                { class: "guide-container-content", innerHTML: t.value },
                null,
                8,
                k
              ),
            ])
          );
        }
      );
    },
  });
const H = g(w, [
  ["__scopeId", "data-v-99f1dd99"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/Guide/index.vue",
  ],
]);
export { H as default };
