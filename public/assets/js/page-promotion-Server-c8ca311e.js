import {
  G as p,
  C as u,
  H as m,
  aA as f,
  I as y,
  J as t,
  Q as o,
  O as e,
  ax as g,
  N as k,
  A as L,
} from "./common.modules-cecf9b0d.js";
import { a1 as x, _ as h } from "./page-activity-ActivityDetail-6713f46c.js";
const $ = { class: "customer-container" },
  B = { class: "customer-container-header" },
  O = { class: "customer-container-header-belly" },
  I = { alt: "" },
  w = p({
    __name: "index",
    setup(C) {
      const {
        onItemClick: n,
        goBack: s,
        getIcons: i,
        getList: r,
        ContactList: a,
        List: c,
      } = x({ ServerType: 1 });
      return (
        u(() => {
          r();
        }),
        (l, d) => {
          const _ = m("NavBar"),
            v = f("lazy");
          return (
            k(),
            y("div", $, [
              t("div", B, [
                o(
                  _,
                  {
                    title: l.$t("poxyServer"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e(s),
                  },
                  null,
                  8,
                  ["title", "onClickLeft"]
                ),
                t("div", O, [
                  g(t("img", I, null, 512), [
                    [v, e(i)("promotion", "serverbg")],
                  ]),
                ]),
              ]),
              o(e(c), { list: e(a), onOnClick: e(n) }, null, 8, [
                "list",
                "onOnClick",
              ]),
            ])
          );
        }
      );
    },
  });
const N = h(w, [
    ["__scopeId", "data-v-63a4fda1"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/promotion/Server/index.vue",
    ],
  ]),
  E = Object.freeze(
    Object.defineProperty({ __proto__: null, default: N }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  j = { class: "customer-container" },
  z = { class: "customer-container-header" },
  T = { class: "customer-container-header-belly" },
  M = { alt: "" },
  A = p({
    __name: "index",
    setup(C) {
      const {
          goBack: n,
          onClickUrl: s,
          CollectionList: i,
          getServiceList: r,
          getIcons: a,
          List: c,
        } = x({ ServerType: 1 }),
        l = history.state.itemId,
        d = L({ typeId: l });
      return (
        u(async () => {
          r(d);
        }),
        (_, v) => {
          const S = m("NavBar"),
            b = f("lazy");
          return (
            k(),
            y("div", j, [
              t("div", z, [
                o(
                  S,
                  {
                    title: _.$t("poxyServer"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e(n),
                  },
                  null,
                  8,
                  ["title", "onClickLeft"]
                ),
                t("div", T, [
                  g(t("img", M, null, 512), [
                    [b, e(a)("promotion", "serverbg")],
                  ]),
                ]),
              ]),
              o(e(c), { list: e(i), onOnClick: e(s) }, null, 8, [
                "list",
                "onOnClick",
              ]),
            ])
          );
        }
      );
    },
  });
const D = h(A, [
    ["__scopeId", "data-v-49bd7182"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/promotion/Server/ServiceCollection/index.vue",
    ],
  ]),
  G = Object.freeze(
    Object.defineProperty({ __proto__: null, default: D }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { G as a, E as i };
