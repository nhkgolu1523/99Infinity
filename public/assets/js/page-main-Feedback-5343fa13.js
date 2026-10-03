import {
  G as u,
  z as p,
  R as f,
  A as b,
  H as m,
  I as k,
  Q as v,
  O as n,
  J as e,
  ax as g,
  aF as h,
  P as c,
  u as w,
  F as x,
  N as y,
} from "./common.modules-cecf9b0d.js";
import {
  A as B,
  bA as A,
  g as F,
  _ as T,
} from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const I = { class: "feedback-container" },
  N = { class: "feedback-container-content" },
  S = { class: "feedback-container-content-text" },
  $ = { class: "feedback-container-content-text-wrapper" },
  C = ["placeholder"],
  R = { class: "feedback-container-content-describe" },
  M = ["src"],
  V = { class: "feedback-container-footer" },
  D = u({
    __name: "index",
    setup(P) {
      const { t: o } = p(),
        i = f(),
        d = o("feedbackPhTXT"),
        s = b({ content: "" });
      async function l() {
        if (!s.content) {
          w({ message: o("feedbackMsg"), wordBreak: "break-word" });
          return;
        }
        (await B(A(s))) && (x(o("submitSuccess")), i.go(-1));
      }
      return (t, a) => {
        const _ = m("NavBar");
        return (
          y(),
          k("div", I, [
            v(
              _,
              {
                title: t.$t("feedback"),
                "left-arrow": "",
                onClickLeft: a[0] || (a[0] = (r) => n(i).go(-1)),
              },
              null,
              8,
              ["title"]
            ),
            e("div", N, [
              e("div", S, [
                e("div", $, [
                  g(
                    e(
                      "textarea",
                      {
                        "onUpdate:modelValue":
                          a[1] || (a[1] = (r) => (s.content = r)),
                        name: "feedback",
                        id: "",
                        cols: "30",
                        rows: "10",
                        placeholder: n(d),
                      },
                      null,
                      8,
                      C
                    ),
                    [[h, s.content]]
                  ),
                ]),
              ]),
              e("div", R, [
                e("h5", null, c(t.$t("tipAcessableFeedback")), 1),
                e("h5", null, c(t.$t("tipWinMysteryRewards")), 1),
                e("div", null, [
                  e(
                    "img",
                    { src: n(F)("main", "feedbackImg"), alt: "" },
                    null,
                    8,
                    M
                  ),
                ]),
              ]),
            ]),
            e("div", V, [e("button", { onClick: l }, c(t.$t("submit")), 1)]),
          ])
        );
      };
    },
  });
const H = T(D, [
  ["__scopeId", "data-v-00fab4aa"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/Feedback/index.vue",
  ],
]);
export { H as default };
