import {
  G as f,
  R as g,
  H as l,
  aA as $,
  I as y,
  J as t,
  Q as s,
  O as u,
  ax as w,
  ao as v,
  P as p,
  N as x,
  z as A,
  r as m,
  C as I,
} from "./common.modules-cecf9b0d.js";
import {
  b as z,
  _ as P,
  A as b,
  bp as C,
  bq as h,
} from "./page-activity-ActivityDetail-6713f46c.js";
const B = { class: "about-container" },
  N = { class: "about-container-header" },
  j = { class: "about-container-header-belly" },
  L = { alt: "" },
  M = { class: "about-container-content" },
  T = { class: "about-container-content-item-title" },
  D = { class: "about-container-content-item-title" },
  O = f({
    __name: "index",
    setup(k) {
      const a = g();
      function i(o) {
        a.push({ name: "About-AboutDetail", state: { paramValue: o } });
      }
      return (o, e) => {
        const c = l("NavBar"),
          n = l("svg-icon"),
          r = l("van-icon"),
          _ = $("lazy");
        return (
          x(),
          y("div", B, [
            t("div", N, [
              s(
                c,
                {
                  title: `${o.$t("aboutTitle")}`,
                  class: "main",
                  "left-arrow": "",
                  onClickLeft: e[0] || (e[0] = (d) => u(a).go(-1)),
                },
                null,
                8,
                ["title"]
              ),
              t("div", j, [
                w(t("img", L, null, 512), [[_, u(z)("main", "aboutBg")]]),
              ]),
            ]),
            t("div", M, [
              t(
                "div",
                {
                  class: "about-container-content-item ar-1px-b",
                  onClick: e[1] || (e[1] = (d) => i("Protocols")),
                },
                [
                  t("div", T, [
                    s(n, { name: "privacyIcon" }),
                    v(
                      ` <img v-lazy="getIcons('main', 'privacyIcon')" alt="" /> `
                    ),
                    t("span", null, p(o.$t("pravicyProtocal")), 1),
                  ]),
                  s(r, {
                    name: "arrow",
                    size: "18px",
                    color: "var(--text_color_L2)",
                  }),
                ]
              ),
              t(
                "div",
                {
                  class: "about-container-content-item ar-1px-b",
                  onClick: e[2] || (e[2] = (d) => i("Agreement")),
                },
                [
                  t("div", D, [
                    s(n, { name: "riskProtocal" }),
                    v(
                      ` <img v-lazy="getIcons('main', 'riskProtocal')" alt="" /> `
                    ),
                    t("span", null, p(o.$t("riskProtocal")), 1),
                  ]),
                  s(r, {
                    name: "arrow",
                    size: "18px",
                    color: "var(--text_color_L2)",
                  }),
                ]
              ),
            ]),
          ])
        );
      };
    },
  });
const S = P(O, [
    ["__scopeId", "data-v-6616fdfe"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/About/index.vue",
    ],
  ]),
  J = Object.freeze(
    Object.defineProperty({ __proto__: null, default: S }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  V = { class: "about-container" },
  G = ["innerHTML"],
  H = f({
    __name: "index",
    setup(k) {
      const { t: a } = A(),
        i = m(a("pravicyProtocal")),
        o = g(),
        e = history.state.paramValue,
        c = m();
      return (
        I(async () => {
          i.value = a(e === "Protocols" ? "pravicyProtocal" : "riskProtocal");
          const n = e === "Protocols" ? await b(C()) : await b(h());
          n &&
            (c.value = e === "Protocols" ? n.data.protocols : n.data.agreement);
        }),
        (n, r) => {
          const _ = l("NavBar");
          return (
            x(),
            y("div", V, [
              s(
                _,
                {
                  title: i.value,
                  "left-arrow": "",
                  onClickLeft: r[0] || (r[0] = (d) => u(o).go(-1)),
                },
                null,
                8,
                ["title"]
              ),
              t(
                "div",
                { class: "about-container-content", innerHTML: c.value },
                null,
                8,
                G
              ),
            ])
          );
        }
      );
    },
  });
const R = P(H, [
    ["__scopeId", "data-v-19d4c048"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/About/AboutDetail/index.vue",
    ],
  ]),
  Q = Object.freeze(
    Object.defineProperty({ __proto__: null, default: R }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { Q as a, J as i };
