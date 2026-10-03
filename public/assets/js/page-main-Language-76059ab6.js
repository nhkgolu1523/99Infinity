import {
  G as r,
  R as s,
  H as i,
  I as _,
  Q as t,
  O as p,
  N as c,
} from "./common.modules-cecf9b0d.js";
import { L as m } from "./page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js";
import { _ as l } from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-activity-Championship-c5772910.js";
import "./page-activity-Bonus-c94a181e.js";
import "./page-activity-PointMall-19e2176f.js";
import "./page-activity-DailySignIn-7bda4bcc.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const d = { class: "languages" },
  u = r({
    __name: "index",
    setup(f) {
      const o = s();
      return (n, e) => {
        const a = i("NavBar");
        return (
          c(),
          _("div", d, [
            t(
              a,
              {
                title: n.$t("selectLanguage"),
                "left-arrow": "",
                onClickLeft: e[0] || (e[0] = (g) => p(o).go(-1)),
              },
              null,
              8,
              ["title"]
            ),
            t(m),
          ])
        );
      };
    },
  });
const R = l(u, [
  ["__scopeId", "data-v-99fcc2d2"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/Language/index.vue",
  ],
]);
export { R as default };
