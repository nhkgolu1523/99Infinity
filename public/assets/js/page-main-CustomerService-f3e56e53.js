import {
  G as B,
  C as L,
  H as k,
  aA as I,
  I as c,
  J as t,
  Q as i,
  av as b,
  O as e,
  ax as j,
  P as g,
  ao as M,
  N as a,
  aC as D,
  aD as P,
  A as U,
} from "./common.modules-cecf9b0d.js";
import {
  a1 as O,
  y as G,
  b as T,
  az as A,
  _ as N,
} from "./page-activity-ActivityDetail-6713f46c.js";
const r = (o) => (D("data-v-26935615"), (o = o()), P(), o),
  Z = { class: "customer-container" },
  E = { class: "customer-container-header" },
  J = r(() =>
    t(
      "path",
      {
        d: "M8.25 16.5V38.5H35.75V16.5L22 5.5L8.25 16.5Z",
        stroke: "white",
        "stroke-width": "3.66667",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      },
      null,
      -1
    )
  ),
  Q = r(() =>
    t(
      "path",
      {
        d: "M17.417 26.5833V38.4999H26.5837V26.5833H17.417Z",
        stroke: "white",
        "stroke-width": "3.66667",
        "stroke-linejoin": "round",
      },
      null,
      -1
    )
  ),
  q = r(() =>
    t(
      "path",
      {
        d: "M8.25 38.5H35.75",
        stroke: "white",
        "stroke-width": "3.66667",
        "stroke-linecap": "round",
      },
      null,
      -1
    )
  ),
  F = [J, Q, q],
  K = { class: "customer-container-header-belly" },
  R = { alt: "" },
  W = { key: 0, class: "cg" },
  X = { class: "cg2" },
  Y = { class: "til1" },
  ee = { class: "left" },
  te = r(() => t("div", { class: "err" }, null, -1)),
  se = { class: "til2" },
  oe = B({
    __name: "index",
    setup(o) {
      const {
          onItemClick: l,
          goBack: _,
          getList: d,
          ContactList: u,
          List: v,
          serviceGroup: s,
          getCustomerServiceGroup: p,
          onClickUrl: m,
        } = O({ ServerType: 2 }),
        f = G(),
        h = () => {
          A.push({ path: "/" });
        };
      return (
        L(() => {
          d(), p();
        }),
        (n, C) => {
          var y, w, S, x;
          const z = k("NavBar"),
            V = k("van-image"),
            H = I("lazy");
          return (
            a(),
            c("div", Z, [
              t("div", E, [
                i(
                  z,
                  {
                    title: `${n.$t("customerServiceTitle")}`,
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e(_),
                  },
                  {
                    right: b(() => [
                      (a(),
                      c(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "44",
                          height: "44",
                          viewBox: "0 0 44 44",
                          fill: "none",
                          class: "home",
                          onClick: h,
                        },
                        F
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["title", "onClickLeft"]
                ),
                t("div", K, [
                  j(t("img", R, null, 512), [[H, e(T)("main", "customerBg")]]),
                ]),
              ]),
              ((y = e(s)) == null ? void 0 : y.status) == 1
                ? (a(),
                  c("div", W, [
                    t("div", X, [
                      t("div", Y, [
                        t("div", ee, [
                          i(
                            V,
                            {
                              round: "",
                              width: "30",
                              height: "30",
                              src:
                                e(f).ossUrl +
                                "/" +
                                ((w = e(s)) == null ? void 0 : w.imageUrl),
                              fit: "cover",
                              position: "center",
                            },
                            { error: b(() => [te]), _: 1 },
                            8,
                            ["src"]
                          ),
                          t(
                            "p",
                            null,
                            g((S = e(s)) == null ? void 0 : S.mainTitle),
                            1
                          ),
                        ]),
                        t(
                          "div",
                          {
                            class: "btn",
                            onClick:
                              C[0] ||
                              (C[0] = (de) => {
                                var $;
                                return e(m)({
                                  url: ($ = e(s)) == null ? void 0 : $.url,
                                });
                              }),
                          },
                          g(n.$t("join")),
                          1
                        ),
                      ]),
                      t(
                        "div",
                        se,
                        g((x = e(s)) == null ? void 0 : x.subTitle),
                        1
                      ),
                    ]),
                  ]))
                : M("v-if", !0),
              i(e(v), { list: e(u), onOnClick: e(l) }, null, 8, [
                "list",
                "onOnClick",
              ]),
            ])
          );
        }
      );
    },
  });
const ie = N(oe, [
    ["__scopeId", "data-v-26935615"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/CustomerService/index.vue",
    ],
  ]),
  pe = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ie },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ne = { class: "customer-container" },
  ce = { class: "customer-container-header" },
  ae = { class: "customer-container-header-belly" },
  re = { alt: "" },
  le = B({
    __name: "index",
    setup(o) {
      const {
          goBack: l,
          onClickUrl: _,
          CollectionList: d,
          getServiceList: u,
          List: v,
        } = O({ ServerType: 2 }),
        s = history.state.itemId,
        p = U({ typeId: s });
      return (
        L(async () => {
          u(p);
        }),
        (m, f) => {
          const h = k("NavBar"),
            n = I("lazy");
          return (
            a(),
            c("div", ne, [
              t("div", ce, [
                i(
                  h,
                  {
                    title: `${m.$t("customerServiceTitle")}`,
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e(l),
                  },
                  null,
                  8,
                  ["title", "onClickLeft"]
                ),
                t("div", ae, [
                  j(t("img", re, null, 512), [[n, e(T)("main", "customerBg")]]),
                ]),
              ]),
              i(e(v), { list: e(d), onOnClick: e(_) }, null, 8, [
                "list",
                "onOnClick",
              ]),
            ])
          );
        }
      );
    },
  });
const _e = N(le, [
    ["__scopeId", "data-v-78d5a4a8"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/CustomerService/ServiceCollection/index.vue",
    ],
  ]),
  me = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _e },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { me as a, pe as i };
