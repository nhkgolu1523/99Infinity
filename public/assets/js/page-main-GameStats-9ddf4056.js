import {
  G,
  z as L,
  R as $,
  r as I,
  A as D,
  C as H,
  H as g,
  aA as E,
  I as c,
  Q as _,
  O as i,
  J as e,
  av as P,
  P as o,
  au as z,
  K as N,
  M as k,
  w,
  u as F,
  N as r,
  ax as T,
} from "./common.modules-cecf9b0d.js";
import {
  N as R,
  bB as y,
  bC as V,
  bD as W,
  c as h,
  g as B,
  _ as j,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { E as J } from "./page-activity-Bonus-c94a181e.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const s = R.global.t;
s("lottery"),
  s("electronic"),
  s("sport"),
  s("live"),
  s("chess"),
  s("fishing"),
  s("miniGame");
const K = [
    { name: s("chess"), type: 5, icon: "iconChess", typeName: "chesscard" },
    { name: s("fishing"), type: 3, icon: "iconFishing", typeName: "fish" },
    {
      name: s("electronic"),
      type: 2,
      icon: "iconElectric",
      typeName: "electronic",
    },
    { name: s("lottery"), type: 0, icon: "iconLottery", typeName: "lottery" },
    { name: s("sport"), type: 4, icon: "iconPhysics", typeName: "sport" },
    { name: s("live"), type: 5, icon: "iconRealPerson", typeName: "video" },
    {
      name: s("miniGame"),
      type: 6,
      icon: "iconMiniGame",
      typeName: "smallgame",
    },
    { name: s("electronic"), type: 2, icon: "iconSlots", typeName: "slot" },
  ],
  O = { class: "gamestats-container" },
  Q = { class: "gamestats-container-header" },
  U = { class: "gamestats-container-banner" },
  X = { class: "gamestats-container-list-wrapper" },
  Z = { key: 1, class: "gamestats-container-items" },
  ee = { alt: "" },
  te = { class: "gamestats-container-item-content" },
  ae = { alt: "" },
  se = { class: "gamestats-container-item-content-list" },
  ne = G({
    __name: "index",
    setup(oe) {
      const { t: m } = L(),
        A = $(),
        v = I(0),
        C = [
          { title: m("today"), records: "hello" },
          { title: m("yesterday"), records: "hello" },
          { title: m("thisWeek"), records: "hello" },
          { title: m("thisMonth"), records: "hello" },
        ],
        p = (a) => {
          let t = { start: 0, end: 0 };
          switch (a) {
            case 0:
              t = y().today;
              break;
            case 1:
              t = y().yesterday;
              break;
            case 2:
              t = y().last7days;
              break;
            case 3:
              t = y().thisMonth;
              break;
          }
          return {
            startDate: w(t.start * 1e3).format("YYYY-MM-DD HH:mm:ss"),
            endDate: w(t.end * 1e3).format("YYYY-MM-DD HH:mm:ss"),
          };
        },
        u = D({ startDate: p(0).startDate, endDate: p(0).endDate }),
        M = (a) => {
          const t = K.find((d) => a.gameTypeName.toLowerCase() === d.typeName);
          return t == null ? void 0 : t.icon;
        },
        l = D({ list: [], sumBetAmount: 0 }),
        b = async () => {
          const [a, t] = await V(W(u));
          a && F({ message: a.msg, wordBreak: "break-word" }),
            t && ((l.list = t.gameStatis), (l.sumBetAmount = t.sumBetAmount));
        };
      H(() => {
        b();
      });
      const q = (a) => {
        (u.startDate = p(a).startDate), (u.endDate = p(a).endDate), b();
      };
      return (a, t) => {
        const d = g("NavBar"),
          S = g("van-tab"),
          Y = g("van-tabs"),
          f = E("lazy");
        return (
          r(),
          c("div", O, [
            _(
              d,
              {
                title: a.$t("gameStats"),
                "left-arrow": "",
                onClickLeft: t[0] || (t[0] = (n) => i(A).go(-1)),
              },
              null,
              8,
              ["title"]
            ),
            e("div", Q, [
              _(
                Y,
                {
                  active: v.value,
                  "onUpdate:active": t[1] || (t[1] = (n) => (v.value = n)),
                  type: "card",
                  onChange: q,
                },
                {
                  default: P(() => [
                    (r(),
                    c(
                      N,
                      null,
                      k(C, (n) => _(S, { title: n.title }, null, 8, ["title"])),
                      64
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["active"]
              ),
            ]),
            e("div", U, [
              e("h1", null, o(i(h)(l.sumBetAmount || 0)), 1),
              e("span", null, o(a.$t("totalBetAmount")), 1),
            ]),
            e("div", X, [
              l.list.length === 0
                ? (r(), z(J, { key: 0, style: { "margin-top": "40px" } }))
                : (r(),
                  c("div", Z, [
                    (r(!0),
                    c(
                      N,
                      null,
                      k(
                        l.list,
                        (n, x) => (
                          r(),
                          c(
                            "div",
                            { class: "gamestats-container-item", key: x },
                            [
                              e("h1", null, [
                                T(e("img", ee, null, 512), [
                                  [f, i(B)("main", M(n))],
                                ]),
                                e("span", null, o(n.gameTypeName), 1),
                              ]),
                              e("div", te, [
                                T(e("img", ae, null, 512), [
                                  [f, i(B)("main", "gameStatsSteps")],
                                ]),
                                e("div", se, [
                                  e("div", null, [
                                    e("h4", null, o(a.$t("betAmount")), 1),
                                    e("h5", null, o(i(h)(n.betAmount)), 1),
                                  ]),
                                  e("div", null, [
                                    e("h4", null, o(a.$t("betTimes")), 1),
                                    e("h5", null, o(n.betCount), 1),
                                  ]),
                                  e("div", null, [
                                    e("h4", null, o(a.$t("winningAmount")), 1),
                                    e(
                                      "span",
                                      null,
                                      o(i(h)(n.betWinLossAmount)),
                                      1
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ])),
            ]),
          ])
        );
      };
    },
  });
const de = j(ne, [
  ["__scopeId", "data-v-0fabbe57"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/GameStats/index.vue",
  ],
]);
export { de as default };
