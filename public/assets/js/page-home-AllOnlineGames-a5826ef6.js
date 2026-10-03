import {
  G as P,
  r as l,
  R as W,
  T as Z,
  $ as M,
  aQ as X,
  aR as Y,
  C as ee,
  H as I,
  aA as ae,
  I as v,
  Q as A,
  av as p,
  au as w,
  J as s,
  K as L,
  M as b,
  N as n,
  P as _,
  ap as h,
  ax as B,
  aF as te,
  O as f,
  ao as se,
} from "./common.modules-cecf9b0d.js";
import {
  i as ne,
  A as le,
  aF as oe,
  aG as ie,
  _ as ue,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { F as re, a as ce } from "./page-home-AllGames-ebd16353.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const ve = { class: "onlineGames__container" },
  me = ["placeholder"],
  de = { class: "onlineGames__container-list" },
  _e = ["onClick"],
  pe = { key: 1 },
  fe = { class: "onlineGames__container-list miniGames" },
  ye = ["onClick"],
  ge = P({
    __name: "index",
    setup(ke) {
      const G = l(!1),
        U = W(),
        R = Z(),
        { onItemClick: $, getAllGame: j, homeState: E } = ne(),
        x = l(),
        m = l(0),
        y = l([]),
        d = l(0);
      M(m, (a) => {
        const e = o.value[a];
        (S.value = []), (d.value = 0), e && D(e.slotsTypeID);
      });
      const c = l(!1);
      M(c, (a) => {
        a
          ? setTimeout(() => {
              F.value.focus();
            }, 0)
          : (g.value = "");
      });
      const g = l("");
      X(
        g,
        (a) => {
          if (u.value)
            if (u.value.key === "fish" || u.value.key === "flash")
              (o.value = o.value.filter((e) =>
                e.gameNameEn.toLowerCase().includes(a)
              )),
                a.length === 0 &&
                  (o.value = sessionStorage.getItem("slotGamesList")
                    ? JSON.parse(sessionStorage.getItem("slotGamesList"))
                    : null);
            else {
              const e = o.value[m.value];
              D(e.slotsTypeID, a);
            }
        },
        { debounce: 300 }
      );
      const F = l(null),
        u = l(),
        o = l([]),
        S = l([]),
        q = Y(S, (a) =>
          c.value
            ? a.gameNameEn.toLowerCase().includes(g.value.toLowerCase())
            : a.customGameType === d.value
        );
      function H(a) {
        return a ? a.split(/(?=[A-Z])/).join(" ") : "";
      }
      function Q() {
        U.go(-1);
      }
      function O(a) {
        c.value = a;
      }
      const K = () => !G.value;
      async function D(a, e = "") {
        if (!G.value) {
          G.value = !0;
          try {
            const r = await le(oe({ type: a, gameNameEn: e }));
            if (r) {
              if (
                ((S.value = r.data.gameLists || []),
                (y.value = r.data.gameCustomTypeLists || []),
                !y.value.length)
              )
                return;
              d.value = y.value[0].customGameType;
            }
          } catch {
          } finally {
            G.value = !1;
          }
        }
      }
      return (
        ee(async () => {
          const a = R.query.game,
            e = R.query.vendorCode,
            r = sessionStorage.getItem("gameType")
              ? JSON.parse(sessionStorage.getItem("gameType"))
              : null;
          await j(),
            (u.value = a || r),
            E.allGameList[u.value] && (o.value = E.allGameList[u.value]);
          const T = JSON.parse(sessionStorage.getItem("clickedItem"));
          if (T || e) {
            const N = o.value.findIndex((k) =>
              e ? k.vendorCode === e : k.slotsTypeID === T.slotsTypeID
            );
            m.value = N !== -1 ? N : 0;
          }
          x.value && x.value.scrollTo(m.value);
          const C = o.value[m.value];
          C && (await D(C.slotsTypeID));
        }),
        (a, e) => {
          var V, J;
          const r = I("svg-icon"),
            T = I("NavBar"),
            C = I("van-tab"),
            N = I("van-tabs"),
            k = ae("lazy");
          return (
            n(),
            v("div", ve, [
              A(
                T,
                { class: "white", "left-arrow": "", onClickLeft: Q },
                {
                  center: p(() => {
                    var t;
                    return [
                      s(
                        "span",
                        { class: h({ active: c.value }) },
                        _((t = u.value) == null ? void 0 : t.title) +
                          _(a.$t("game")),
                        3
                      ),
                      B(
                        s(
                          "input",
                          {
                            type: "text",
                            placeholder: a.$t("searchGame"),
                            class: h({ active: c.value }),
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (i) => (g.value = i)),
                            ref_key: "searchBarRef",
                            ref: F,
                          },
                          null,
                          10,
                          me
                        ),
                        [[te, g.value]]
                      ),
                    ];
                  }),
                  right: p(() => [
                    A(
                      r,
                      {
                        name: "SearchTrx",
                        onClick: e[1] || (e[1] = (t) => O(!0)),
                        class: h({ active: c.value }),
                      },
                      null,
                      8,
                      ["class"]
                    ),
                    s(
                      "span",
                      {
                        class: h({ active: c.value }),
                        onClick: e[2] || (e[2] = (t) => O(!1)),
                      },
                      _(a.$t("cancel")),
                      3
                    ),
                  ]),
                  _: 1,
                }
              ),
              ((V = u.value) == null ? void 0 : V.key) !== "fish" &&
              ((J = u.value) == null ? void 0 : J.key) !== "flash"
                ? (n(),
                  w(
                    N,
                    {
                      key: 0,
                      class: "onlineGames__container-tabBar",
                      active: m.value,
                      "onUpdate:active": e[4] || (e[4] = (t) => (m.value = t)),
                      type: "card",
                      sticky: !0,
                      "offset-top": 46,
                      ref_key: "tabsRef",
                      ref: x,
                      "before-change": K,
                    },
                    {
                      default: p(() => [
                        (n(!0),
                        v(
                          L,
                          null,
                          b(
                            o.value,
                            (t, i) => (
                              n(),
                              w(
                                C,
                                { key: i },
                                {
                                  title: p(() => [
                                    A(
                                      r,
                                      { name: t.slotsName, class: "gameIcon" },
                                      null,
                                      8,
                                      ["name"]
                                    ),
                                    s("span", null, _(f(ie)(t.slotsName)), 1),
                                  ]),
                                  _: 2,
                                },
                                1024
                              )
                            )
                          ),
                          128
                        )),
                        !c.value || y.value.length === 0
                          ? (n(),
                            w(
                              f(re),
                              {
                                key: 0,
                                modelValue: d.value,
                                "onUpdate:modelValue":
                                  e[3] || (e[3] = (t) => (d.value = t)),
                                lineWidth: 0,
                              },
                              {
                                default: p(() => [
                                  (n(!0),
                                  v(
                                    L,
                                    null,
                                    b(
                                      y.value,
                                      (t, i) => (
                                        n(),
                                        w(
                                          f(ce),
                                          {
                                            name: i,
                                            key: i,
                                            class: h([
                                              {
                                                activeClassName:
                                                  d.value === t.customGameType,
                                              },
                                            ]),
                                            onClick: (z) =>
                                              (d.value = t.customGameType),
                                          },
                                          {
                                            default: p(() => [
                                              s(
                                                "span",
                                                null,
                                                _(t.customGameTypeName),
                                                1
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["name", "class", "onClick"]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ["modelValue"]
                            ))
                          : se("v-if", !0),
                        s("div", de, [
                          (n(!0),
                          v(
                            L,
                            null,
                            b(
                              f(q),
                              (t, i) => (
                                n(),
                                v(
                                  "div",
                                  {
                                    class: "onlineGames__container-list__item",
                                    key: i,
                                    onClick: (z) => f($)(t),
                                  },
                                  [
                                    B(s("img", null, null, 512), [[k, t.img]]),
                                    s("div", null, [
                                      s("span", null, _(H(t.gameNameEn)), 1),
                                    ]),
                                  ],
                                  8,
                                  _e
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["active"]
                  ))
                : (n(),
                  v("div", pe, [
                    s("div", fe, [
                      (n(!0),
                      v(
                        L,
                        null,
                        b(
                          o.value,
                          (t, i) => (
                            n(),
                            v(
                              "div",
                              {
                                class: "onlineGames__container-list__item",
                                key: i,
                                onClick: (z) => f($)(t),
                              },
                              [
                                B(s("img", null, null, 512), [[k, t.img]]),
                                s("div", null, [
                                  s("span", null, _(t.gameNameEn), 1),
                                ]),
                              ],
                              8,
                              ye
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ])),
            ])
          );
        }
      );
    },
  });
const we = ue(ge, [
  ["__scopeId", "data-v-0ffc3892"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/home/AllOnlineGames/index.vue",
  ],
]);
export { we as default };
