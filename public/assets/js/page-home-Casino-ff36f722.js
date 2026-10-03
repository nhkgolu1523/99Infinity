import {
  A as B,
  r as h,
  C as I,
  G as g,
  aS as D,
  X as W,
  aA as x,
  N as s,
  I as t,
  J as e,
  P as c,
  K as m,
  M as b,
  ax as y,
  O as l,
  ao as v,
  aq as A,
  aC as P,
  aD as j,
  B as z,
  R as G,
  Q as $,
} from "./common.modules-cecf9b0d.js";
import {
  A as S,
  aH as F,
  aI as H,
  i as L,
  b as C,
  aJ as O,
  c as R,
  _ as k,
  aK as N,
  aL as T,
} from "./page-activity-ActivityDetail-6713f46c.js";
function M() {
  const a = B({
      Original: [],
      HotGames: [],
      Lottery: [],
      Slot: [],
      Casino: [],
      Chess: [],
      Fish: [],
      Sport: [],
    }),
    i = h([]),
    r = async () => {
      try {
        const { data: n } = await S(F());
        n &&
          ((a.Original = n.flash),
          (a.HotGames = n.popular.platformList),
          (a.Lottery = n.lottery),
          (a.Casino = n.video),
          (a.Slot = n.slot),
          (a.Chess = n.chess),
          (a.Fish = n.fish),
          (a.Sport = n.sport));
      } catch {}
    },
    d = async () => {
      const n = await S(H());
      n && (i.value = n.data);
    };
  return (
    I(() => {
      r(), d();
    }),
    { gameData: a, gameTypeList: i }
  );
}
const V = { class: "luckyWinners__container" },
  U = { class: "luckyWinners__container-wrapper" },
  J = { class: "luckyWinners__container-wrapper__item-img" },
  K = { class: "luckyWinners__container-wrapper__item-info" },
  q = { class: "luckyWinners__container-wrapper__item-winType" },
  E = { class: "luckyWinners__container-wrapper__item-winAmount" },
  Q = g({
    __name: "index",
    setup(a) {
      const { homeState: i, getWinInfoDetail: r, getWinInfo: d } = L(),
        n = h(null),
        u = h(null);
      return (
        I(async () => {
          await r(),
            D(u.value),
            i.winInfoList.length > 0 &&
              (n.value = setInterval(async () => {
                i.winInfoList.unshift(i.winInfoList.pop());
              }, 3e3));
        }),
        W(() => {
          clearInterval(n.value);
        }),
        (o, _) => {
          const f = x("lazy");
          return (
            s(),
            t("div", V, [
              e("h1", null, c(o.$t("winningDetal")), 1),
              e("div", U, [
                e(
                  "div",
                  { ref_key: "wrapperRef", ref: u },
                  [
                    (s(!0),
                    t(
                      m,
                      null,
                      b(
                        l(d).slice(0, 6),
                        (p) => (
                          s(),
                          t(
                            "div",
                            {
                              class: "luckyWinners__container-wrapper__item",
                              key: p,
                            },
                            [
                              e("div", J, [
                                y(e("img", null, null, 512), [
                                  [
                                    f,
                                    l(C)("main/Avatar", p.userPhoto) ||
                                      l(C)("home", "avatar"),
                                  ],
                                ]),
                              ]),
                              e("div", K, [
                                e("h1", null, c(l(O)(p.nickName)), 1),
                              ]),
                              e("div", q, [
                                y(e("img", null, null, 512), [[f, p.imgUrl]]),
                              ]),
                              e("div", E, [
                                e(
                                  "h1",
                                  null,
                                  c(o.$t("titleGot")) +
                                    " " +
                                    c(l(R)(p.amount || 0)),
                                  1
                                ),
                                e("span", null, c(o.$t("winningAmount")), 1),
                              ]),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const X = k(Q, [
    ["__scopeId", "data-v-ffb14677"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Home/LuckyWinners/index.vue",
    ],
  ]),
  Z = "/assets/png/First-1a9152b9.png",
  Y = "/assets/png/Second-b37e1d4b.png",
  ee = "/assets/png/Third-82965e16.png",
  w = (a) => (P("data-v-74b37c48"), (a = a()), j(), a),
  ne = { class: "mainContainer" },
  ae = { key: 0, class: "mainContainer_profitContainer_medal" },
  se = w(() => e("span", null, [e("img", { src: Z })], -1)),
  te = [se],
  ie = w(() =>
    e(
      "div",
      { class: "mainContainer_profitContainer_medal" },
      [e("span", null, [e("img", { src: Y })])],
      -1
    )
  ),
  oe = w(() =>
    e(
      "div",
      { class: "mainContainer_profitContainer_medal" },
      [e("span", null, [e("img", { src: ee })])],
      -1
    )
  ),
  re = { class: "mainContainer_profitContainer_medal" },
  ce = { class: "numberMedal" },
  _e = { class: "mainContainer_profitContainer_img" },
  le = { class: "mainContainer_profitContainer_title" },
  de = { class: "mainContainer_profitContainer_amount" },
  ue = A(
    '<div class="mainContainer_profitContainer_bg" data-v-74b37c48><svg xmlns="http://www.w3.org/2000/svg" width="219" height="121" viewBox="0 0 219 121" fill="none" data-v-74b37c48><g filter="url(#filter0_b_2662_26708)" data-v-74b37c48><path d="M45.5192 0.460938H203.298C211.73 0.460938 218.565 7.29628 218.565 15.7281V105.423C218.565 113.855 211.73 120.69 203.298 120.69H0.0534668L23.1907 60.5754L45.5192 0.460938Z" data-v-74b37c48></path></g><defs data-v-74b37c48><filter id="filter0_b_2662_26708" x="-7.58012" y="-7.17265" width="233.779" height="135.494" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-74b37c48><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-74b37c48></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="3.81679" data-v-74b37c48></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2662_26708" data-v-74b37c48></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2662_26708" result="shape" data-v-74b37c48></feBlend></filter></defs></svg></div>',
    1
  ),
  pe = g({
    __name: "ProfitRanking",
    setup(a) {
      const { homeState: i } = L(),
        { desensitizeString: r } = N();
      return (d, n) => {
        const u = x("lazy");
        return (
          s(),
          t("div", ne, [
            (s(!0),
            t(
              m,
              null,
              b(
                l(i).rankList.slice(0, 9),
                (o, _) => (
                  s(),
                  t("div", { class: "mainContainer_profitContainer", key: _ }, [
                    v(" Rank 1 "),
                    _ == 0
                      ? (s(), t("div", ae, te))
                      : _ == 1
                      ? (s(), t(m, { key: 1 }, [v(" Rank 2 "), ie], 2112))
                      : _ == 2
                      ? (s(), t(m, { key: 2 }, [v(" Rank 3 "), oe], 2112))
                      : (s(),
                        t(
                          m,
                          { key: 3 },
                          [
                            v(" Rank All "),
                            e("div", re, [e("span", ce, c(_ + 1), 1)]),
                          ],
                          2112
                        )),
                    e("div", _e, [
                      y(e("img", null, null, 512), [
                        [u, l(C)("main/Avatar", o.userPhoto)],
                      ]),
                    ]),
                    e("div", le, c(l(r)(o.nickName)), 1),
                    e("div", de, c(l(R)(o.price || 0)), 1),
                    ue,
                  ])
                )
              ),
              128
            )),
          ])
        );
      };
    },
  });
const me = k(pe, [
    ["__scopeId", "data-v-74b37c48"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Home/goGame/ProfitRanking.vue",
    ],
  ]),
  ve = { class: "originalmainContainer" },
  fe = { class: "originalmainContainer_title" },
  he = { class: "GameContainer" },
  ge = { class: "GameContainer_games" },
  ke = ["src", "onClick"],
  ye = { class: "WinningContainer" },
  Ce = { class: "Winningdata" },
  be = { class: "profitRanking" },
  we = g({
    __name: "index",
    setup(a) {
      const { goGame: i } = T(),
        { gameData: r } = M(),
        d = z(() => r.Casino),
        n = G(),
        u = () => {
          n.push("/");
        };
      return (o, _) => (
        s(),
        t(
          m,
          null,
          [
            e("div", ve, [
              e("div", { class: "backSvg", onClick: u }),
              e("div", fe, c(o.$t("live")), 1),
            ]),
            v(" Games images containers starts from here "),
            e("div", he, [
              e("div", ge, [
                (s(!0),
                t(
                  m,
                  null,
                  b(
                    d.value,
                    (f, p) => (
                      s(),
                      t(
                        "img",
                        { key: p, src: f.vendorImg, onClick: (We) => l(i)(f) },
                        null,
                        8,
                        ke
                      )
                    )
                  ),
                  128
                )),
              ]),
              $(X),
            ]),
            v(" Today's Profit Ranking "),
            e("div", ye, c(o.$t("homename1")), 1),
            e("div", Ce, [e("div", be, [$(me)])]),
          ],
          64
        )
      );
    },
  });
const $e = k(we, [
    ["__scopeId", "data-v-e152b4a0"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/home/Casino/index.vue",
    ],
  ]),
  je = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $e },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Se = { class: "header" },
  Ie = { class: "l1" },
  xe = { class: "header_title" },
  Ge = { key: 0, class: "l2" },
  Le = { class: "inputDom" },
  Re = ["v-model"],
  Be = g({
    __name: "index",
    setup(a) {
      const i = G(),
        r = h(!1),
        d = h(""),
        n = () => {
          i.push({ name: "Casino" });
        },
        u = () => {
          (d.value = ""), (r.value = !1);
        };
      return (o, _) => (
        s(),
        t("div", Se, [
          e("div", Ie, [
            e("div", { class: "backSvg", onClick: n }),
            e("div", xe, c(o.$t("live")), 1),
            e("div", {
              class: "searchIcon",
              onClick: _[0] || (_[0] = (f) => (r.value = !0)),
            }),
          ]),
          r.value
            ? (s(),
              t("div", Ge, [
                e("div", Le, [
                  e(
                    "input",
                    {
                      type: "text",
                      "v-model": d.value,
                      placeholder: "Search games……",
                    },
                    null,
                    8,
                    Re
                  ),
                ]),
                e("div", { class: "close", onClick: u }, "Close"),
              ]))
            : v("v-if", !0),
        ])
      );
    },
  });
const De = k(Be, [
    ["__scopeId", "data-v-1aca5679"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/home/Casino/Detail/index.vue",
    ],
  ]),
  ze = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: De },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { X as L, me as P, ze as a, je as i, M as u };
