import {
  G as J,
  r as g,
  B as oe,
  H as P,
  I as o,
  J as e,
  Q as b,
  av as j,
  O as t,
  N as l,
  K as R,
  M as X,
  au as Y,
  ao as $,
  ap as T,
  P as n,
  b0 as _e,
  b1 as he,
  aB as A,
  a_ as ie,
  R as Z,
  z as ge,
  a6 as re,
  A as $e,
  C as ce,
  aA as de,
  ax as F,
  aC as fe,
  aD as ye,
  ay as we,
  V as ke,
} from "./common.modules-cecf9b0d.js";
import {
  y as Te,
  A as B,
  cP as Ve,
  b as I,
  _ as K,
  a4 as L,
  g as D,
  c as M,
  cQ as me,
  cR as be,
  cS as Ce,
  bv as x,
  bw as O,
  cO as Se,
  G as Ie,
  bU as Re,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { E as De } from "./page-activity-Bonus-c94a181e.js";
const Ae = { class: "vip-content-card" },
  Ee = { class: "vip-content-card-item" },
  Me = { class: "itemInfo-right" },
  Ne = ["src"],
  Ue = { class: "itemInfo-head" },
  He = ["src"],
  Fe = ["src"],
  Pe = { class: "bgg" },
  Be = ["innerHTML"],
  We = { class: "itemInfo-bottom mt50" },
  ze = { class: "itemInfo-right" },
  Ge = ["src"],
  xe = { class: "itemInfo-head" },
  Oe = ["src"],
  je = ["src"],
  Xe = { class: "bgg" },
  Je = ["innerHTML"],
  Qe = { class: "mb8" },
  qe = { class: "itemInfo-bottom" },
  Ke = { class: "first" },
  Ye = { class: "left" },
  Ze = { class: "right" },
  Le = ["innerHTML"],
  es = { class: "itemInfo-right" },
  ss = ["src"],
  ns = { class: "itemInfo-head" },
  as = ["src"],
  ts = ["src"],
  ls = { class: "mb30" },
  os = ["innerHTML"],
  is = { class: "itemInfo-bottom" },
  rs = J({
    __name: "VipCard",
    props: { haspermission: { type: Boolean, default: () => !0 } },
    emits: ["changeLevel"],
    setup(S, { expose: E, emit: c }) {
      const k = g(0);
      let V = {
          1: "#748AAA",
          2: "#D67D26",
          3: "#F05C5C",
          4: "#32B6E8",
          5: "#EA6ACA",
          6: "#1EB18B",
          7: "#1B9458",
          8: "#3470E6",
          9: "#8038F5",
          10: "#EF7B27",
        },
        h = g();
      function C(a) {
        h = a;
      }
      const f = g(!0),
        _ = (a) => {
          f.value || c("changeLevel", i.value[a.activeIndex].id);
        },
        i = g([]);
      async function r() {
        var w;
        const a = await B(Ve());
        if (a) {
          i.value = a == null ? void 0 : a.data;
          let u = i.value.findIndex((N) => N.id == k.value);
          h.slideTo(u == -1 ? 0 : u);
          let s =
            i.value.length > 0
              ? (w = i.value[0]) == null
                ? void 0
                : w.amount
              : 1e3;
          sessionStorage.setItem("vipAmount", s);
        }
        f.value = !1;
      }
      function d(a, w) {
        return !w || !w ? 0 : a > w ? 100 : Math.round((a / w) * 1e4) / 100;
      }
      function v(a, w) {
        return a > w ? w : a;
      }
      const y = oe(() => Te().getDollarSign);
      return (
        E({ getVipUserLevelDetail: r, level: k }),
        (a, w) => {
          const u = P("van-progress");
          return (
            l(),
            o("div", Ae, [
              e("div", Ee, [
                b(
                  t(he),
                  {
                    class: "my-swipe",
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    "space-between": 20,
                    onSlideChangeTransitionEnd: _,
                    onSwiper: C,
                  },
                  {
                    default: j(() => [
                      (l(!0),
                      o(
                        R,
                        null,
                        X(
                          i.value,
                          (s) => (
                            l(),
                            Y(
                              t(_e),
                              { class: T(`itemInfo level${s.id}`), key: s.id },
                              {
                                default: j(() => [
                                  $("status:2 已达成"),
                                  (s == null ? void 0 : s.status) == 2 &&
                                  s.id != k.value
                                    ? (l(),
                                      o(
                                        R,
                                        { key: 0 },
                                        [
                                          e("div", Me, [
                                            e(
                                              "img",
                                              {
                                                src: t(I)(
                                                  "vip/swiper/logo",
                                                  `${s.id}`
                                                ),
                                              },
                                              null,
                                              8,
                                              Ne
                                            ),
                                          ]),
                                          e("div", Ue, [
                                            e("div", null, [
                                              e(
                                                "img",
                                                {
                                                  src: t(I)(
                                                    "vip/swiper/crown",
                                                    `${s.id != 1 ? 2 : s.id}`
                                                  ),
                                                },
                                                null,
                                                8,
                                                He
                                              ),
                                              e(
                                                "h1",
                                                {
                                                  class: T(
                                                    `level${
                                                      s.id != 1 ? 2 : s.id
                                                    }`
                                                  ),
                                                },
                                                n(s.vipName),
                                                3
                                              ),
                                              e(
                                                "img",
                                                {
                                                  src: t(I)(
                                                    "vip/swiper",
                                                    "HaveReached"
                                                  ),
                                                },
                                                null,
                                                8,
                                                Fe
                                              ),
                                              e(
                                                "span",
                                                Pe,
                                                n(a.$t("achieved")),
                                                1
                                              ),
                                            ]),
                                            e(
                                              "div",
                                              {
                                                class: T([
                                                  "border",
                                                  `level${s.id}`,
                                                ]),
                                              },
                                              [
                                                e(
                                                  "p",
                                                  {
                                                    innerHTML: a.$t("vipTip1", [
                                                      s.id,
                                                      s.id,
                                                    ]),
                                                  },
                                                  null,
                                                  8,
                                                  Be
                                                ),
                                              ],
                                              2
                                            ),
                                          ]),
                                          e("div", We, [
                                            s.upgradeStatus == 2
                                              ? (l(),
                                                o(
                                                  "h2",
                                                  {
                                                    key: 0,
                                                    class: T(`level${s.id}`),
                                                  },
                                                  n(a.$t("vipTip3", [s.id])),
                                                  3
                                                ))
                                              : (l(),
                                                o(
                                                  "h2",
                                                  {
                                                    key: 1,
                                                    class: T(`level${s.id}`),
                                                  },
                                                  n(a.$t("vipTip14", [s.id])),
                                                  3
                                                )),
                                          ]),
                                        ],
                                        64
                                      ))
                                    : $("v-if", !0),
                                  (s == null ? void 0 : s.id) == k.value
                                    ? (l(),
                                      o(
                                        R,
                                        { key: 1 },
                                        [
                                          e("div", ze, [
                                            e(
                                              "img",
                                              {
                                                src: t(I)(
                                                  "vip/swiper/logo",
                                                  `${s.id}`
                                                ),
                                              },
                                              null,
                                              8,
                                              Ge
                                            ),
                                          ]),
                                          e("div", xe, [
                                            e("div", null, [
                                              e(
                                                "img",
                                                {
                                                  src: t(I)(
                                                    "vip/swiper/crown",
                                                    `${s.id != 1 ? 2 : s.id}`
                                                  ),
                                                },
                                                null,
                                                8,
                                                Oe
                                              ),
                                              e(
                                                "h1",
                                                {
                                                  class: T(
                                                    `level${
                                                      s.id != 1 ? 2 : s.id
                                                    }`
                                                  ),
                                                },
                                                n(s.vipName),
                                                3
                                              ),
                                              e(
                                                "img",
                                                {
                                                  src: t(I)(
                                                    "vip/swiper",
                                                    "HaveReached"
                                                  ),
                                                },
                                                null,
                                                8,
                                                je
                                              ),
                                              e(
                                                "span",
                                                Xe,
                                                n(a.$t("achieved")),
                                                1
                                              ),
                                            ]),
                                            e(
                                              "div",
                                              {
                                                class: T([
                                                  "border mb25",
                                                  `level${s.id}`,
                                                ]),
                                              },
                                              [
                                                e(
                                                  "p",
                                                  {
                                                    innerHTML: a.$t("vipTip1", [
                                                      s.id,
                                                      s.id,
                                                    ]),
                                                  },
                                                  null,
                                                  8,
                                                  Je
                                                ),
                                              ],
                                              2
                                            ),
                                            e(
                                              "div",
                                              Qe,
                                              n(a.$t("vipcondition")),
                                              1
                                            ),
                                          ]),
                                          e("div", qe, [
                                            e("div", Ke, [
                                              e("div", Ye, [
                                                e(
                                                  "span",
                                                  {
                                                    class: T(
                                                      `level level${s.id}`
                                                    ),
                                                  },
                                                  n(
                                                    S.haspermission
                                                      ? v(
                                                          s.relegationExp,
                                                          s.relegation
                                                        )
                                                      : 0
                                                  ) +
                                                    "/" +
                                                    n(s.relegation),
                                                  3
                                                ),
                                              ]),
                                              e(
                                                "p",
                                                Ze,
                                                n(
                                                  a.$t("completed1", [
                                                    d(
                                                      S.haspermission
                                                        ? v(
                                                            s.relegationExp,
                                                            s.relegation
                                                          )
                                                        : 0,
                                                      s.relegation
                                                    ),
                                                  ])
                                                ),
                                                1
                                              ),
                                            ]),
                                            e("div", null, [
                                              b(
                                                u,
                                                {
                                                  class: T(`level${s.id}`),
                                                  percentage: d(
                                                    S.haspermission
                                                      ? v(
                                                          s.relegationExp,
                                                          s.relegation
                                                        )
                                                      : 0,
                                                    s.relegation
                                                  ),
                                                  "stroke-width": "8",
                                                  color:
                                                    "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                                                  "track-color": t(V)[s.id],
                                                  "show-pivot": !1,
                                                },
                                                null,
                                                8,
                                                [
                                                  "class",
                                                  "percentage",
                                                  "track-color",
                                                ]
                                              ),
                                            ]),
                                            e("div", null, [
                                              e(
                                                "span",
                                                {
                                                  innerHTML: a.$t("vipTip2", [
                                                    s.deductExp,
                                                  ]),
                                                },
                                                null,
                                                8,
                                                Le
                                              ),
                                            ]),
                                          ]),
                                        ],
                                        64
                                      ))
                                    : $("v-if", !0),
                                  $("status:1 未解锁"),
                                  (s == null ? void 0 : s.status) == 1 &&
                                  (s == null ? void 0 : s.id) != k.value
                                    ? (l(),
                                      o(
                                        R,
                                        { key: 2 },
                                        [
                                          e("div", es, [
                                            e(
                                              "img",
                                              {
                                                src: t(I)(
                                                  "vip/swiper/logo",
                                                  `${s.id}`
                                                ),
                                              },
                                              null,
                                              8,
                                              ss
                                            ),
                                          ]),
                                          e("div", ns, [
                                            e("div", null, [
                                              e(
                                                "img",
                                                {
                                                  src: t(I)(
                                                    "vip/swiper/crown",
                                                    `${s.id != 1 ? 2 : s.id}`
                                                  ),
                                                },
                                                null,
                                                8,
                                                as
                                              ),
                                              e(
                                                "h1",
                                                {
                                                  class: T(
                                                    `level${
                                                      s.id != 1 ? 2 : s.id
                                                    }`
                                                  ),
                                                },
                                                n(s.vipName),
                                                3
                                              ),
                                              e(
                                                "img",
                                                {
                                                  src: t(I)(
                                                    "vip/swiper",
                                                    "ununlocked"
                                                  ),
                                                },
                                                null,
                                                8,
                                                ts
                                              ),
                                              e(
                                                "span",
                                                null,
                                                n(a.$t("notUnlocked")),
                                                1
                                              ),
                                            ]),
                                            e("div", ls, [
                                              e(
                                                "p",
                                                {
                                                  innerHTML: a.$t(
                                                    "experience",
                                                    [
                                                      s.id,
                                                      s.upgrade - s.currentExp,
                                                    ]
                                                  ),
                                                },
                                                null,
                                                8,
                                                os
                                              ),
                                            ]),
                                            e(
                                              "div",
                                              {
                                                class: T([
                                                  "border",
                                                  `level${s.id}`,
                                                ]),
                                              },
                                              n(
                                                a.$t("experience1", [
                                                  y.value,
                                                  s.amount,
                                                ])
                                              ),
                                              3
                                            ),
                                          ]),
                                          e("div", is, [
                                            e("p", null, n(s.vipName), 1),
                                            e("div", null, [
                                              b(
                                                u,
                                                {
                                                  class: T(`level${s.id}`),
                                                  percentage: d(
                                                    S.haspermission
                                                      ? s.currentExp
                                                      : 0,
                                                    s.upgrade
                                                  ),
                                                  "stroke-width": "8",
                                                  color:
                                                    "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                                                  "track-color": t(V)[s.id],
                                                  "show-pivot": !1,
                                                },
                                                null,
                                                8,
                                                [
                                                  "class",
                                                  "percentage",
                                                  "track-color",
                                                ]
                                              ),
                                            ]),
                                            e("div", null, [
                                              e(
                                                "span",
                                                {
                                                  class: T(
                                                    `level level${s.id}`
                                                  ),
                                                },
                                                n(
                                                  S.haspermission
                                                    ? s.currentExp
                                                    : 0
                                                ) +
                                                  "/" +
                                                  n(s.upgrade),
                                                3
                                              ),
                                              e(
                                                "span",
                                                null,
                                                n(a.$t("upgrade", [s.upgrade])),
                                                1
                                              ),
                                            ]),
                                          ]),
                                        ],
                                        64
                                      ))
                                    : $("v-if", !0),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["class"]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const cs = K(rs, [
    ["__scopeId", "data-v-31cfa30d"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Vip/VipCard.vue",
    ],
  ]),
  ds = { class: "vip-content-weal" },
  vs = { key: 0, class: "vip-content-weal-head ar-1px-b" },
  ps = ["src"],
  us = { key: 0 },
  _s = { key: 1 },
  hs = { key: 0 },
  gs = ["src"],
  $s = { key: 1 },
  fs = { class: "max" },
  ys = J({
    __name: "Weal",
    setup(S, { expose: E }) {
      const { setLoading: c } = L(),
        k = g(0),
        V = oe(() => (k.value == 0 ? 1 : k.value)),
        h = g([]);
      async function C(_) {
        c(!0);
        const i = await B(me({ vipLevel: _ == 0 ? 1 : _ }));
        i &&
          (h.value = i.data.filter(
            (r) => (r.id > 2 && r.rate > 0) || r.id <= 2
          )),
          c(!1);
      }
      const f = (_) =>
        [1, 2].includes(_.id) && _.balance === 0 && _.integral === 0;
      return (
        E({ getListVipLevel: C, level: k }),
        (_, i) => {
          const r = P("svg-icon");
          return (
            l(),
            o("div", ds, [
              b(
                ie,
                { mode: "out-in" },
                {
                  default: j(() => [
                    (l(),
                    o("div", { class: "slide", key: k.value }, [
                      h.value.length
                        ? (l(),
                          o("div", vs, [
                            b(r, { name: "diamond" }),
                            e(
                              "h1",
                              null,
                              "VIP" + n(V.value) + " " + n(_.$t("wealTXT1")),
                              1
                            ),
                          ]))
                        : $("v-if", !0),
                      (l(!0),
                      o(
                        R,
                        null,
                        X(
                          h.value,
                          (d, v) => (
                            l(),
                            o(
                              "div",
                              {
                                class: T(
                                  `${f(d) ? "isShow" : "vip-content-weal-con"}`
                                ),
                                key: v,
                              },
                              [
                                e("div", null, [
                                  e(
                                    "img",
                                    { src: t(D)("main/weal", `${d.id}`) },
                                    null,
                                    8,
                                    ps
                                  ),
                                ]),
                                e("div", null, [
                                  d.id != 3
                                    ? (l(),
                                      o(
                                        "h2",
                                        us,
                                        n(_.$t(`wealName${d.id}`)),
                                        1
                                      ))
                                    : (l(),
                                      o(
                                        "h2",
                                        _s,
                                        n(_.$t(`wealName${d.id}_1`)),
                                        1
                                      )),
                                  e(
                                    "span",
                                    null,
                                    n(_.$t(`wealDescription${d.id}`)),
                                    1
                                  ),
                                ]),
                                d.id == 1 || d.id == 2
                                  ? (l(),
                                    o("div", hs, [
                                      e("p", null, [
                                        e(
                                          "img",
                                          { src: t(D)("main", "gold") },
                                          null,
                                          8,
                                          gs
                                        ),
                                        A(n(t(M)(d.balance, " ", 0)), 1),
                                      ]),
                                      e("p", null, [
                                        b(r, { name: "love" }),
                                        A(n(t(M)(d.integral, " ", 0)), 1),
                                      ]),
                                    ]))
                                  : (l(),
                                    o("div", $s, [
                                      e("p", fs, [
                                        b(r, { name: `weal${d.id}` }, null, 8, [
                                          "name",
                                        ]),
                                        A(n(d.rate) + "% ", 1),
                                      ]),
                                    ])),
                              ],
                              2
                            )
                          )
                        ),
                        128
                      )),
                    ])),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
      );
    },
  });
const ws = K(ys, [
    ["__scopeId", "data-v-9bb5e81c"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Vip/Weal.vue",
    ],
  ]),
  ks = { class: "vip-content-myWelfare" },
  Ts = { class: "vip-content-myWelfare-head ar-1px-b" },
  Vs = { class: "vip-content-myWelfare-con" },
  ms = { class: "card" },
  bs = { class: "card-head" },
  Cs = ["src"],
  Ss = { class: "card-head-mon" },
  Is = ["src"],
  Rs = ["src"],
  Ds = { class: "card-bottom" },
  As = { key: 0, class: "noActive" },
  Es = ["onClick"],
  Ms = { key: 1, class: "card" },
  Ns = { class: "card-head tilt" },
  Us = ["src"],
  Hs = { class: "card-head-mon" },
  Fs = ["src"],
  Ps = { class: "card-bottom" },
  Bs = { key: 0 },
  Ws = { key: 1 },
  zs = J({
    __name: "MyWelfare",
    emits: ["succeedDialog"],
    setup(S, { expose: E, emit: c }) {
      const k = Z(),
        { setLoading: V } = L(),
        h = g(0),
        C = g([]);
      async function f(i) {
        V(!0);
        const r = await B(be({ vipLevel: i }));
        r &&
          (C.value = r.data.filter(
            (d) => (d.rewardType > 2 && d.rate > 0) || d.rewardType <= 2
          )),
          V(!1);
      }
      async function _(i) {
        const r = await B(
          Ce({ receiveId: i.id, vipLevel: h.value, rewardType: i.rewardType })
        );
        r &&
          (f(h.value),
          r != null &&
            r.data &&
            c("succeedDialog", {
              integral: r == null ? void 0 : r.data.integral,
              balance: r == null ? void 0 : r.data.balance,
            }));
      }
      return (
        E({ getListVipUserRewards: f, levelMy: h }),
        (i, r) => {
          const d = P("svg-icon");
          return (
            l(),
            o("div", ks, [
              b(
                ie,
                { mode: "out-in" },
                {
                  default: j(() => [
                    (l(),
                    o("div", { class: "slideMy", key: h.value }, [
                      e("div", Ts, [
                        b(d, { name: "crown" }),
                        e("h1", null, n(i.$t("vipDesc1")), 1),
                      ]),
                      e("div", Vs, [
                        (l(!0),
                        o(
                          R,
                          null,
                          X(
                            C.value,
                            (v, y) => (
                              l(),
                              o("div", { class: "cards", key: y }, [
                                v.rewardType == 1 || v.rewardType == 2
                                  ? (l(),
                                    o(
                                      R,
                                      { key: 0 },
                                      [
                                        e("div", ms, [
                                          e("div", bs, [
                                            e(
                                              "img",
                                              {
                                                src: t(D)(
                                                  "main/myWelfare",
                                                  `welfare${v.rewardType}`
                                                ),
                                              },
                                              null,
                                              8,
                                              Cs
                                            ),
                                            e("div", Ss, [
                                              e("p", null, [
                                                e(
                                                  "img",
                                                  { src: t(D)("main", "gold") },
                                                  null,
                                                  8,
                                                  Is
                                                ),
                                                A(
                                                  n(t(M)(v.balance, " ", 0)),
                                                  1
                                                ),
                                              ]),
                                              e("p", null, [
                                                e(
                                                  "img",
                                                  {
                                                    src: t(D)("main", "love2"),
                                                  },
                                                  null,
                                                  8,
                                                  Rs
                                                ),
                                                A(
                                                  n(t(M)(v.integral, " ", 0)),
                                                  1
                                                ),
                                              ]),
                                            ]),
                                          ]),
                                          e("div", Ds, [
                                            e(
                                              "h1",
                                              null,
                                              n(
                                                i.$t(`wealName${v.rewardType}`)
                                              ),
                                              1
                                            ),
                                            e(
                                              "span",
                                              null,
                                              n(
                                                i.$t(
                                                  `wealDescription${v.rewardType}`
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                        ]),
                                        v.status == 2
                                          ? (l(),
                                            o(
                                              "button",
                                              As,
                                              n(i.$t("vipDesc4")),
                                              1
                                            ))
                                          : (l(),
                                            o(
                                              "button",
                                              {
                                                key: 1,
                                                class: "active",
                                                onClick: (a) => _(v),
                                              },
                                              n(i.$t("vipDesc7")),
                                              9,
                                              Es
                                            )),
                                      ],
                                      64
                                    ))
                                  : (l(),
                                    o("div", Ms, [
                                      e("div", Ns, [
                                        e(
                                          "img",
                                          {
                                            src: t(D)(
                                              "main/myWelfare",
                                              `welfare${v.rewardType}`
                                            ),
                                          },
                                          null,
                                          8,
                                          Us
                                        ),
                                        e("div", Hs, [
                                          e("p", null, [
                                            e(
                                              "img",
                                              { src: t(D)("main", "wallet1") },
                                              null,
                                              8,
                                              Fs
                                            ),
                                            A(n(v.rate) + "%", 1),
                                          ]),
                                        ]),
                                      ]),
                                      e("div", Ps, [
                                        v.rewardType != 3
                                          ? (l(),
                                            o(
                                              "h1",
                                              Bs,
                                              n(
                                                i.$t(`wealName${v.rewardType}`)
                                              ),
                                              1
                                            ))
                                          : (l(),
                                            o(
                                              "h1",
                                              Ws,
                                              n(
                                                i.$t(
                                                  `wealName${v.rewardType}_1`
                                                )
                                              ),
                                              1
                                            )),
                                        e(
                                          "span",
                                          null,
                                          n(
                                            i.$t(
                                              `wealDescription${v.rewardType}`
                                            )
                                          ),
                                          1
                                        ),
                                        v.rewardType == 5
                                          ? (l(),
                                            o(
                                              "div",
                                              {
                                                key: 2,
                                                class: "viewD",
                                                onClick:
                                                  r[0] ||
                                                  (r[0] = (a) =>
                                                    t(k).push({
                                                      name: "RebateDetails",
                                                    })),
                                              },
                                              n(i.$t("viewDetail")),
                                              1
                                            ))
                                          : $("v-if", !0),
                                      ]),
                                    ])),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ])),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
      );
    },
  });
const Gs = K(zs, [
    ["__scopeId", "data-v-4e842459"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Vip/MyWelfare.vue",
    ],
  ]),
  Q = (S) => (fe("data-v-eaa4a307"), (S = S()), ye(), S),
  xs = { class: "vip-content-recordVsrule" },
  Os = { class: "vip-content-recordVsrule-head" },
  js = { key: 0, class: "vip-content-recordVsrule-con" },
  Xs = { class: "item-left" },
  Js = { class: "green" },
  Qs = { class: "item-right" },
  qs = ["src"],
  Ks = ["src"],
  Ys = { class: "item-left" },
  Zs = { class: "red" },
  Ls = { class: "item-right" },
  en = Q(() => e("span", null, null, -1)),
  sn = Q(() => e("span", null, null, -1)),
  nn = { key: 2, class: "item-left" },
  an = { class: "yellow" },
  tn = { class: "item-left" },
  ln = { class: "blue" },
  on = { class: "item-right" },
  rn = Q(() => e("span", null, null, -1)),
  cn = Q(() => e("span", null, null, -1)),
  dn = { class: "green" },
  vn = { key: 4, class: "item-left" },
  pn = { class: "yellow" },
  un = { key: 1, class: "vip-content-recordVsrule-con" },
  _n = { class: "con-content" },
  hn = { class: "con-content__title" },
  gn = { class: "con-content__rules" },
  $n = { class: "con-content__rules-item__title" },
  fn = Q(() =>
    e("div", { class: "con-content__rules-item__titleRight" }, null, -1)
  ),
  yn = J({
    __name: "RecordVsrule",
    setup(S, { expose: E }) {
      const { t: c } = ge(),
        k = Z();
      let V = re("permission", null);
      V && (V = JSON.parse(V.value));
      const h = g(1);
      V && V[18] === !1 && (h.value = 2);
      const C = [
        {
          title: c("promotionCriteria"),
          content: c("rVsTip1", [sessionStorage.getItem("vipAmount") || 1e3]),
        },
        { title: c("promotionOrder"), content: c("rVsTip2") },
        { title: c("relegationRequirements"), content: c("rVsTip3") },
        { title: c("downgradeStandard"), content: c("rVsTip4") },
        { title: c("upgradeReward"), content: c("rVsTip5") },
        { title: c("wealName2"), content: c("rVsTip6") },
        { title: c("wealName3"), content: c("rVsTip7") },
        { title: c("wealName4"), content: c("rVsTip8") },
      ];
      function f(y, a) {
        switch (y) {
          case 1:
            return c("vipTip12");
          case 2:
            return c("vipTip13");
          case 3:
            return c("vipTip10");
          case 4:
            return c("vipTip11", [a]);
          case 5:
            return c("vipTip6", [a]);
          case 6:
            return c("vipTip7");
          case 7:
            return c("vipTip15", [a]);
          case 8:
            return c("vipTip17", [a]);
        }
      }
      function _(y) {
        h.value = y;
      }
      function i() {
        k.push({ name: "RecordVsruleHistory" });
      }
      const r = $e({ pageSize: 10, pageNo: 1 }),
        d = g([]);
      async function v() {
        const y = await B(Se(r));
        y && (d.value = y.data.list);
      }
      return (
        ce(() => {
          v();
        }),
        E({ getPageListVipUserRecord: v }),
        (y, a) => {
          const w = P("svg-icon"),
            u = de("haspermission");
          return (
            l(),
            o("div", xs, [
              e("div", Os, [
                F(
                  (l(),
                  o(
                    "button",
                    {
                      class: T({ active: h.value == 1 }),
                      onClick: a[0] || (a[0] = (s) => _(1)),
                    },
                    [A(n(y.$t("record")), 1)],
                    2
                  )),
                  [[u, 18]]
                ),
                e(
                  "button",
                  {
                    class: T({ active: h.value == 2 }),
                    onClick: a[1] || (a[1] = (s) => _(2)),
                  },
                  n(y.$t("rule")),
                  3
                ),
              ]),
              h.value == 1
                ? F(
                    (l(),
                    o("div", js, [
                      d.value.length > 0
                        ? (l(!0),
                          o(
                            R,
                            { key: 0 },
                            X(
                              d.value,
                              (s, N) => (
                                l(),
                                o("div", { class: "item ar-1px-b", key: N }, [
                                  s.type == 1 || s.type == 2
                                    ? (l(),
                                      o(
                                        R,
                                        { key: 0 },
                                        [
                                          e("div", Xs, [
                                            e(
                                              "span",
                                              Js,
                                              n(t(x)(t(O).VipType, s.type)),
                                              1
                                            ),
                                            e(
                                              "span",
                                              null,
                                              n(f(s.type, s.remark)),
                                              1
                                            ),
                                            e("span", null, n(s.createTime), 1),
                                          ]),
                                          e("div", Qs, [
                                            e("p", null, [
                                              e(
                                                "img",
                                                { src: t(D)("main", "gold") },
                                                null,
                                                8,
                                                qs
                                              ),
                                              A(
                                                n(t(M)(s.awardAmount, " ", 0)),
                                                1
                                              ),
                                            ]),
                                            e("p", null, [
                                              e(
                                                "img",
                                                { src: t(D)("main", "love") },
                                                null,
                                                8,
                                                Ks
                                              ),
                                              A(
                                                n(t(M)(s.bonusPoints, " ", 0)),
                                                1
                                              ),
                                            ]),
                                          ]),
                                        ],
                                        64
                                      ))
                                    : $("v-if", !0),
                                  s.type == 3 || s.type == 4
                                    ? (l(),
                                      o(
                                        R,
                                        { key: 1 },
                                        [
                                          e("div", Ys, [
                                            e(
                                              "span",
                                              Zs,
                                              n(t(x)(t(O).VipType, s.type)),
                                              1
                                            ),
                                            e(
                                              "span",
                                              null,
                                              n(f(s.type, s.remark)),
                                              1
                                            ),
                                            e("span", null, n(s.createTime), 1),
                                          ]),
                                          e("div", Ls, [
                                            en,
                                            sn,
                                            e(
                                              "span",
                                              null,
                                              n(s.experience) + " EXP",
                                              1
                                            ),
                                          ]),
                                        ],
                                        64
                                      ))
                                    : $("v-if", !0),
                                  s.type == 5
                                    ? (l(),
                                      o("div", nn, [
                                        e(
                                          "span",
                                          an,
                                          n(t(x)(t(O).VipType, s.type)),
                                          1
                                        ),
                                        e(
                                          "span",
                                          null,
                                          n(f(s.type, s.remark)),
                                          1
                                        ),
                                        e("span", null, n(s.createTime), 1),
                                      ]))
                                    : $("v-if", !0),
                                  s.type == 6
                                    ? (l(),
                                      o(
                                        R,
                                        { key: 3 },
                                        [
                                          e("div", tn, [
                                            e(
                                              "span",
                                              ln,
                                              n(t(x)(t(O).VipType, s.type)),
                                              1
                                            ),
                                            e(
                                              "span",
                                              null,
                                              n(f(s.type, s.remark)),
                                              1
                                            ),
                                            e("span", null, n(s.createTime), 1),
                                          ]),
                                          e("div", on, [
                                            rn,
                                            cn,
                                            e(
                                              "span",
                                              dn,
                                              n(s.experience) + " EXP",
                                              1
                                            ),
                                          ]),
                                        ],
                                        64
                                      ))
                                    : $("v-if", !0),
                                  [7, 8].includes(s.type)
                                    ? (l(),
                                      o("div", vn, [
                                        e(
                                          "span",
                                          pn,
                                          n(t(x)(t(O).VipType, s.type)),
                                          1
                                        ),
                                        e(
                                          "span",
                                          null,
                                          n(f(s.type, s.remark)),
                                          1
                                        ),
                                        e("span", null, n(s.createTime), 1),
                                      ]))
                                    : $("v-if", !0),
                                ])
                              )
                            ),
                            128
                          ))
                        : (l(), Y(De, { key: 1 })),
                      F(
                        (l(),
                        o("button", { onClick: i }, [
                          A(n(y.$t("viewAll")), 1),
                        ])),
                        [[u, 18]]
                      ),
                    ])),
                    [[u, 18]]
                  )
                : (l(),
                  o("div", un, [
                    e("div", _n, [
                      e("div", hn, [
                        e("h1", null, n(y.$t("vipPrivilege")), 1),
                        e("p", null, n(y.$t("vipRule")), 1),
                      ]),
                      e("div", gn, [
                        (l(),
                        o(
                          R,
                          null,
                          X(C, (s, N) =>
                            e(
                              "div",
                              {
                                class: "con-content__rules-item ruleHead",
                                key: N,
                              },
                              [
                                b(w, { name: "ruleHead" }),
                                e("div", $n, n(s.title), 1),
                                fn,
                                e("p", null, n(s.content), 1),
                              ]
                            )
                          ),
                          64
                        )),
                      ]),
                    ]),
                  ])),
            ])
          );
        }
      );
    },
  });
const wn = K(yn, [
    ["__scopeId", "data-v-eaa4a307"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Vip/RecordVsrule.vue",
    ],
  ]),
  kn = { class: "vip" },
  Tn = { class: "vip-header" },
  Vn = { class: "vip-header-wrapper" },
  mn = ["src"],
  bn = { class: "vip-header-wrapper-name" },
  Cn = { class: "vip-header-wrapper-name-nickName" },
  Sn = { class: "vip-content" },
  In = { class: "vip-content-empirical" },
  Rn = { class: "red" },
  Dn = ["innerHTML"],
  An = { class: "vip-content-tip" },
  En = { class: "succeed" },
  Mn = { class: "van-dialog__content-title" },
  Nn = { class: "van-dialog__content-note" },
  Un = { class: "main" },
  Hn = ["src"],
  Fn = { class: "yellow" },
  Pn = ["src"],
  Bn = ["innerHTML"],
  Wn = { class: "van-dialog__content-btn" },
  jn = J({
    __name: "index",
    setup(S) {
      const c = Ie().getUserInfo,
        k = g(I("main/Avatar", c.userPhoto)),
        V = Z(),
        { setLoading: h } = L(),
        C = g(!1),
        f = g(),
        _ = g(),
        i = g(),
        r = g(),
        d = g(),
        v = g(!1);
      function y() {
        V.push({ name: "Avatar" });
      }
      let a = re("permission", null);
      a && (a = JSON.parse(a.value));
      const w = g(!0);
      a && a[18] === !1 && (w.value = !1);
      const u = g();
      async function s() {
        var m, U, q, W, z, G;
        h(!0);
        const p = await B(Re());
        p &&
          p != null &&
          p.data &&
          ((u.value = p.data),
          (i.value.level = (m = u.value) == null ? void 0 : m.vipLevel),
          i.value.getListVipLevel((U = u.value) == null ? void 0 : U.vipLevel),
          ((q = u.value) == null ? void 0 : q.vipLevel) > 0 &&
            ((r.value.levelMy = (W = u.value) == null ? void 0 : W.vipLevel),
            r.value.getListVipUserRewards(
              (z = u.value) == null ? void 0 : z.vipLevel
            )),
          (_.value.level = (G = u.value) == null ? void 0 : G.vipLevel),
          await _.value.getVipUserLevelDetail(),
          (v.value = !0)),
          h(!1);
      }
      ce(() => {
        s();
      });
      function N(p) {
        ke(() => {
          var m;
          (i.value.level = p),
            i.value.getListVipLevel(p),
            p <= ((m = u.value) == null ? void 0 : m.vipLevel) &&
              ((r.value.levelMy = p), r.value.getListVipUserRewards(p));
        });
      }
      function ve(p) {
        (f.value = p), (C.value = !0);
      }
      function pe() {
        (C.value = !1), d.value.getPageListVipUserRecord();
      }
      const ue = (p, m) => {
        p = I("images", "avatar1");
        let U = document.querySelector(`.${m}`);
        U.src = p;
      };
      return (p, m) => {
        var z, G, ee, se, ne;
        const U = P("NavBar"),
          q = P("van-dialog"),
          W = de("lazy");
        return (
          l(),
          o("div", kn, [
            e("div", Tn, [
              b(U, {
                title: "VIP",
                class: "main",
                "left-arrow": "",
                onClickLeft: m[0] || (m[0] = (H) => t(V).go(-1)),
              }),
              e("div", Vn, [
                e("div", { class: "vip-header-wrapper-avatar", onClick: y }, [
                  $(
                    ` <img v-lazy="avatarUrl" :data-img="getIconsPublic('images', 'avatar1')" /> `
                  ),
                  e(
                    "img",
                    {
                      src: k.value,
                      class: "userAvatar",
                      onError:
                        m[1] || (m[1] = (H) => ue(k.value, "userAvatar")),
                    },
                    null,
                    40,
                    mn
                  ),
                ]),
                e("div", bn, [
                  e(
                    "div",
                    {
                      class: T([
                        "vip-header-wrapper-name-vip",
                        ["n" + ((z = u.value) == null ? void 0 : z.vipLevel)],
                      ]),
                    },
                    null,
                    2
                  ),
                  e("div", Cn, [
                    e(
                      "h3",
                      null,
                      n((G = u.value) == null ? void 0 : G.nickName),
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
            e("div", Sn, [
              e("div", In, [
                e("div", null, [
                  e(
                    "p",
                    Rn,
                    n(
                      p.$t("eightThousandEXP", [
                        w.value
                          ? (ee = u.value) == null
                            ? void 0
                            : ee.exp
                          : 0,
                      ])
                    ),
                    1
                  ),
                  e("p", null, n(p.$t("myExperience")), 1),
                ]),
                e("div", null, [
                  e(
                    "p",
                    {
                      class: "timeTop",
                      innerHTML: p.$t("fifteenDays", [
                        w.value
                          ? (se = u.value) == null
                            ? void 0
                            : se.settlementDate
                          : 0,
                      ]),
                    },
                    null,
                    8,
                    Dn
                  ),
                  e("p", null, n(p.$t("settlementTime")), 1),
                ]),
              ]),
              e("div", An, n(p.$t("vipTip18")), 1),
              $("vip卡片"),
              b(
                cs,
                {
                  ref_key: "vipCardRef",
                  ref: _,
                  haspermission: w.value,
                  onChangeLevel: N,
                },
                null,
                8,
                ["haspermission"]
              ),
              $("等级福利"),
              b(ws, { ref_key: "weal", ref: i }, null, 512),
              $("我的福利"),
              F(
                b(
                  Gs,
                  { onSucceedDialog: ve, ref_key: "myWelfare", ref: r },
                  null,
                  512
                ),
                [[we, ((ne = u.value) == null ? void 0 : ne.vipLevel) > 0]]
              ),
              $("记录规则"),
              v.value
                ? (l(),
                  Y(wn, { key: 0, ref_key: "recordVsrule", ref: d }, null, 512))
                : $("v-if", !0),
            ]),
            $("领取成功弹窗"),
            b(
              q,
              {
                show: C.value,
                "onUpdate:show": m[3] || (m[3] = (H) => (C.value = H)),
                "show-confirm-button": !1,
                "z-index": "99",
              },
              {
                default: j(() => {
                  var H, ae, te, le;
                  return [
                    F(e("img", En, null, 512), [
                      [W, t(D)("public", "succeed")],
                    ]),
                    e("div", Mn, n(p.$t("receivedSuccessfully")), 1),
                    e("div", Nn, [
                      e("div", null, [
                        e("p", Un, [
                          e("img", { src: t(D)("main", "love") }, null, 8, Hn),
                          A(
                            n(
                              t(M)(
                                (H = f.value) == null ? void 0 : H.integral,
                                " ",
                                0
                              )
                            ),
                            1
                          ),
                        ]),
                        e("p", Fn, [
                          e("img", { src: t(D)("main", "gold") }, null, 8, Pn),
                          A(
                            n(
                              t(M)(
                                (ae = f.value) == null ? void 0 : ae.balance,
                                " ",
                                0
                              )
                            ),
                            1
                          ),
                        ]),
                      ]),
                      e("div", null, [
                        e(
                          "p",
                          {
                            innerHTML: p.$t("vipTip4", [
                              (te = f.value) == null ? void 0 : te.integral,
                              (le = f.value) == null ? void 0 : le.balance,
                            ]),
                          },
                          null,
                          8,
                          Bn
                        ),
                        $(" <p>{{ $t('vipTip5') }}</p> "),
                      ]),
                    ]),
                    e("div", Wn, [
                      e("button", { onClick: pe }, n(p.$t("sure")), 1),
                    ]),
                    F(
                      e(
                        "img",
                        {
                          class: "close",
                          onClick: m[2] || (m[2] = (zn) => (C.value = !1)),
                        },
                        null,
                        512
                      ),
                      [[W, t(I)("main", "close")]]
                    ),
                  ];
                }),
                _: 1,
              },
              8,
              ["show"]
            ),
          ])
        );
      };
    },
  });
export { jn as _ };
