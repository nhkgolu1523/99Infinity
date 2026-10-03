import {
  G as S,
  R as P,
  z as j,
  r as C,
  C as z,
  H as $,
  I as _,
  Q as u,
  O as n,
  J as t,
  P as e,
  aB as B,
  au as F,
  ao as M,
  av as D,
  Z as G,
  aC as E,
  aD as V,
  N as c,
  aJ as K,
  K as A,
  M as x,
  B as Z,
} from "./common.modules-cecf9b0d.js";
import {
  $ as O,
  g as X,
  c as w,
  a0 as Y,
  _ as L,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { L as tt, r as et } from "./page-activity-DailySignIn-7bda4bcc.js";
import { D as nt } from "./page-activity-Championship-c5772910.js";
const st = "/assets/png/bg-9bfd9862.png",
  at = "/assets/png/zp-e42d4a86.png",
  lt = "/assets/png/btn-25f23fd7.png",
  ot = (v) => (E("data-v-8eaaa6b6"), (v = v()), V(), v),
  it = { class: "turntable-page" },
  rt = ot(() =>
    t(
      "div",
      { class: "turntable-page-header" },
      [t("img", { src: st, alt: "" })],
      -1
    )
  ),
  ut = { class: "turntable-wrap" },
  dt = { class: "turntable-back" },
  ct = { class: "turntable-rule" },
  _t = ["src"],
  pt = { class: "turntable-item" },
  vt = { class: "label" },
  bt = { class: "wallet" },
  ht = { class: "turntable-item" },
  ft = { class: "label" },
  gt = { class: "count" },
  mt = { class: "count-progress" },
  $t = { class: "turntable-entry" },
  yt = { class: "turntable-title" },
  wt = { class: "turntable-table" },
  kt = { class: "turntable-table-titlebox" },
  Tt = { class: "turntable-table-title" },
  Rt = { class: "turntable-table-title" },
  Ct = { class: "turntable-table-title" },
  St = { class: "rewardType" },
  Lt = { key: 0, class: "rotateNum" },
  Nt = { key: 1, class: "rotateNum" },
  It = { style: { "text-align": "center" } },
  Bt = { class: "rewardWin" },
  Dt = S({
    __name: "index",
    setup(v) {
      const p = P(),
        { t: d } = j(),
        b = C(),
        h = C(null),
        {
          getTurntabl: i,
          store: r,
          pull: f,
          prizes: a,
          recordQuery: m,
          getTurntablAmount: k,
          onEnd: y,
          onStart: N,
          myLucky: W,
          onClick: J,
        } = O(),
        Q = [
          {
            padding: "0px",
            imgs: [{ src: at, width: "100%", height: "100%", rotate: !0 }],
          },
        ],
        U = [
          {
            radius: "30%",
            pointer: !0,
            imgs: [
              { src: lt, top: -(204 / 4), width: 158 / 2, height: 204 / 2 },
            ],
          },
        ],
        q = { 1: d("amountReward"), 2: d("physicalReward") },
        I = async (l) => {
          p.push({ name: l });
        };
      return (
        z(() => {
          var T, g;
          const l = ((T = b.value) == null ? void 0 : T.offsetWidth) || 350,
            o = ((g = b.value) == null ? void 0 : g.offsetHeight) || 350;
          (h.value = { width: l, height: o }), i();
        }),
        (l, o) => {
          const T = $("NavBar"),
            g = $("svg-icon");
          return (
            c(),
            _("div", it, [
              u(
                T,
                {
                  title: l.$t("activityTurntable"),
                  class: "white",
                  placeholder: !1,
                  "left-arrow": "",
                  onClickLeft: n(J),
                },
                null,
                8,
                ["title", "onClickLeft"]
              ),
              rt,
              t("div", ut, [
                t("div", dt, [
                  t("div", ct, [
                    t("h3", null, e(l.$t("code9101")), 1),
                    t(
                      "img",
                      {
                        class: "svg",
                        src: n(X)("activity/Turntable", "frame", "svg"),
                        alt: "",
                      },
                      null,
                      8,
                      _t
                    ),
                  ]),
                  t("div", pt, [
                    t("span", vt, e(l.$t("depositMoney")), 1),
                    t("div", bt, [
                      t("span", null, e(n(w)(n(r).amount)), 1),
                      t(
                        "span",
                        {
                          class: "re",
                          onClick:
                            o[0] || (o[0] = (...s) => n(k) && n(k)(...s)),
                        },
                        [u(g, { name: "refresh" })]
                      ),
                    ]),
                  ]),
                  t("div", ht, [
                    t("span", ft, e(l.$t("turntableCount")), 1),
                    t("div", gt, [
                      t("span", mt, e(n(r).rotateCount), 1),
                      B("/" + e(n(r).count), 1),
                    ]),
                  ]),
                ]),
                t(
                  "div",
                  { class: "turntable-main", ref_key: "content", ref: b },
                  [
                    h.value
                      ? (c(),
                        F(
                          n(K),
                          {
                            key: 0,
                            ref_key: "myLucky",
                            ref: W,
                            onStart: n(N),
                            onEnd: n(y),
                            prizes: n(a),
                            width: h.value.width,
                            height: h.value.height,
                            buttons: U,
                            blocks: Q,
                            defaultConfig: {
                              offsetDegree: -20,
                              accelerationTime: 1e3,
                            },
                            defaultStyle: { lineHeight: 15 },
                          },
                          null,
                          8,
                          ["onStart", "onEnd", "prizes", "width", "height"]
                        ))
                      : M("v-if", !0),
                  ],
                  512
                ),
                t("ul", $t, [
                  t(
                    "li",
                    {
                      class: "turntable-entry-item",
                      onClick: o[1] || (o[1] = (s) => I("Turntable-Introduce")),
                    },
                    [
                      u(g, { name: "activityIntro" }),
                      t("p", null, e(l.$t("activityIntroduce")), 1),
                    ]
                  ),
                  t(
                    "li",
                    {
                      class: "turntable-entry-item",
                      onClick: o[2] || (o[2] = (s) => I("Turntable-Detail")),
                    },
                    [
                      u(g, { name: "activityDetail" }),
                      t("p", null, e(l.$t("eventDetails")), 1),
                    ]
                  ),
                  t(
                    "li",
                    {
                      class: "turntable-entry-item",
                      onClick: o[3] || (o[3] = (s) => I("Turntable-Rules")),
                    },
                    [
                      u(g, { name: "activityRule" }),
                      t("p", null, e(l.$t("firstSaveRule")), 1),
                    ]
                  ),
                ]),
                t("div", yt, [
                  u(g, { name: "historyHead" }),
                  t("span", null, e(l.$t("record")), 1),
                ]),
                t("div", wt, [
                  t("div", kt, [
                    t("div", Tt, e(l.$t("turntableTime")), 1),
                    t("div", Rt, e(l.$t("winType")), 1),
                    t("div", Ct, e(l.$t("turntableWin")), 1),
                  ]),
                  u(
                    tt,
                    {
                      distance: 300,
                      api: n(Y),
                      list: n(r).turntableRecord,
                      "onUpdate:list":
                        o[4] || (o[4] = (s) => (n(r).turntableRecord = s)),
                      "page-query": n(m),
                      "onUpdate:pageQuery":
                        o[5] || (o[5] = (s) => (G(m) ? (m.value = s) : null)),
                      isAutoLoad: !0,
                      ref_key: "pull",
                      ref: f,
                    },
                    {
                      content: D(() => [
                        t("ul", null, [
                          (c(!0),
                          _(
                            A,
                            null,
                            x(
                              n(r).turntableRecord,
                              (s, R) => (
                                c(),
                                _("li", { key: R }, [
                                  t("div", null, [
                                    t("p", null, e(s.drawTime), 1),
                                  ]),
                                  t("div", St, e(q[s.rewardType]), 1),
                                  s.rewardType === 1
                                    ? (c(),
                                      _("div", Lt, e(n(w)(s.rewardAmount)), 1))
                                    : (c(),
                                      _("div", Nt, e(s.rewardSetting), 1)),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["api", "list", "page-query"]
                  ),
                ]),
              ]),
              u(
                nt,
                {
                  show: n(r).dialog,
                  "onUpdate:show": o[6] || (o[6] = (s) => (n(r).dialog = s)),
                  "img-url": "succeed",
                  onConfirm: o[7] || (o[7] = (s) => (n(r).dialog = !1)),
                  "show-cancel-btn": !1,
                  confirmText: l.$t("sure"),
                  title: l.$t("succTip1"),
                },
                {
                  title: D(() => {
                    var s, R, H;
                    return [
                      t("div", It, [
                        B(e(l.$t("turntableWinTip")), 1),
                        t(
                          "span",
                          Bt,
                          e(
                            ((s = n(r).result) == null
                              ? void 0
                              : s.rewardType) === 1
                              ? n(w)(
                                  (R = n(r).result) == null
                                    ? void 0
                                    : R.rewardSetting
                                )
                              : (H = n(r).result) == null
                              ? void 0
                              : H.rewardSetting
                          ),
                          1
                        ),
                      ]),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["show", "confirmText", "title"]
              ),
            ])
          );
        }
      );
    },
  });
const jt = L(Dt, [
    ["__scopeId", "data-v-8eaaa6b6"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/activity/Turntable/index.vue",
    ],
  ]),
  ye = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zt = (v) => (E("data-v-938fabbd"), (v = v()), V(), v),
  Mt = { class: "turntable-detail" },
  At = { class: "turntable-detail-wrap" },
  xt = { class: "turntable-detail-hero" },
  Ot = { class: "turntable-detail-hero__wrapper" },
  Ht = { class: "turntable-detail-hero__wrapper-titlebox" },
  Pt = { class: "turntable-detail-hero__wrapper-title" },
  Et = { class: "turntable-detail-hero__wrapper-title" },
  Vt = { class: "turntable-detail-hero__wrapper-title" },
  Wt = { class: "targetAmount" },
  Jt = { class: "rotateNum" },
  Qt = zt(() => t("div", null, "00:00-23:59", -1)),
  Ut = { class: "turntable-detail-tips" },
  qt = ["innerHTML"],
  Ft = S({
    __name: "index",
    setup(v) {
      const { t: p } = j(),
        { getTurntablInfo: d, store: b, onClick: h } = O(),
        i = C([
          p("turntableRule2"),
          p("turntableRule3"),
          p("turntableRule4"),
          p("turntableRule5"),
        ]),
        r = { 1: p("singleDeposit"), 2: p("cumulativeDeposits") },
        f = Z(() => b.taskList[b.taskList.length - 1]);
      return (
        z(() => {
          d();
        }),
        (a, m) => {
          const k = $("NavBar");
          return (
            c(),
            _("div", Mt, [
              u(
                k,
                {
                  title: a.$t("activityDestitle"),
                  placeholder: !1,
                  "left-arrow": "",
                  onClickLeft: n(h),
                },
                null,
                8,
                ["title", "onClickLeft"]
              ),
              t("div", At, [
                t("div", xt, [
                  t("div", Ot, [
                    t("div", Ht, [
                      t("div", Pt, e(a.$t("turntableTask")), 1),
                      t("div", Et, e(a.$t("turntableCount")), 1),
                      t("div", Vt, e(a.$t("turntableTime")), 1),
                    ]),
                    t("ul", null, [
                      (c(!0),
                      _(
                        A,
                        null,
                        x(
                          n(b).taskList,
                          (y, N) => (
                            c(),
                            _("li", { key: N }, [
                              t("div", null, [
                                t("p", Wt, e(n(w)(y.targetAmount)), 1),
                                t(
                                  "p",
                                  null,
                                  e(r[y.taskType]) + e(a.$t("amount")),
                                  1
                                ),
                              ]),
                              t("div", Jt, "+" + e(y.rotateNum), 1),
                              Qt,
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                ]),
              ]),
              u(
                et,
                { name: a.$t("rule"), render: "html", tiplist: i.value },
                {
                  default: D(() => [
                    t("div", Ut, [
                      t("p", null, e(a.$t("example")) + "：", 1),
                      f.value
                        ? (c(),
                          _(
                            "p",
                            {
                              key: 0,
                              innerHTML: a.$t("turntableExample", [
                                n(w)(f.value.targetAmount),
                                f.value.rotateNum,
                              ]),
                            },
                            null,
                            8,
                            qt
                          ))
                        : M("v-if", !0),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["name", "tiplist"]
              ),
            ])
          );
        }
      );
    },
  });
const Gt = L(Ft, [
    ["__scopeId", "data-v-938fabbd"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/activity/Turntable/Detail/index.vue",
    ],
  ]),
  we = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Gt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Kt = { class: "turntable-pointRule" },
  Zt = { class: "turntable-pointRule-wrap" },
  Xt = { class: "turntable-pointRule__body" },
  Yt = { class: "turntable-pointRule__title" },
  te = { class: "note" },
  ee = { class: "turntable-pointRule__body" },
  ne = { class: "turntable-pointRule__title" },
  se = { class: "note" },
  ae = { class: "turntable-tips" },
  le = { class: "turntable-pointRule__body" },
  oe = { class: "turntable-pointRule__title" },
  ie = ["innerHTML"],
  re = { key: 0 },
  ue = S({
    __name: "index",
    setup(v) {
      const { getTurntablInfo: p, store: d, onClick: b, bindingTypes: h } = O();
      return (
        z(() => {
          p();
        }),
        (i, r) => {
          const f = $("NavBar"),
            a = $("svg-icon");
          return (
            c(),
            _("div", Kt, [
              u(
                f,
                {
                  title: i.$t("activityIntroduce"),
                  placeholder: !1,
                  "left-arrow": "",
                  onClickLeft: n(b),
                },
                null,
                8,
                ["title", "onClickLeft"]
              ),
              t("div", Zt, [
                t("div", Xt, [
                  t("div", Yt, [
                    t("span", null, [u(a, { name: "eventDescriptionArrow" })]),
                    t("span", null, e(i.$t("turntableActivityTime")), 1),
                  ]),
                  t("p", te, e(i.$t("turntableStart")), 1),
                ]),
                t("div", ee, [
                  t("div", ne, [
                    t("span", null, [u(a, { name: "eventDescriptionArrow" })]),
                    t("span", null, e(i.$t("validityPeriod")), 1),
                  ]),
                  t("p", se, e(i.$t("officialNotice")), 1),
                ]),
                t("div", ae, e(i.$t("turntableRule")) + "。", 1),
                t("div", le, [
                  t("div", oe, [
                    t("span", null, [u(a, { name: "eventDescriptionArrow" })]),
                    t("span", null, e(i.$t("turntableJoinRule")), 1),
                  ]),
                  t(
                    "p",
                    {
                      innerHTML: i.$t("turntableSatisfy", [
                        n(d).vipRating.join("、"),
                      ]),
                    },
                    null,
                    8,
                    ie
                  ),
                  [0, -1].includes(n(d).bindingType)
                    ? M("v-if", !0)
                    : (c(),
                      _("p", re, [
                        B(e(i.$t("turntableBind")) + " ", 1),
                        t("span", null, e(n(h)[n(d).bindingType] || ""), 1),
                      ])),
                  t("p", null, e(i.$t("turntablePrize")), 1),
                ]),
              ]),
            ])
          );
        }
      );
    },
  });
const de = L(ue, [
    ["__scopeId", "data-v-5165b274"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/activity/Turntable/Introduce/index.vue",
    ],
  ]),
  ke = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: de },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ce = { class: "turntable-rules" },
  _e = { class: "turntable-introduce" },
  pe = { class: "promotion-box__splitBorder" },
  ve = { class: "promotion-txt" },
  be = S({
    __name: "index",
    setup(v) {
      const p = P(),
        { t: d } = j(),
        b = C([
          { title: d("introduceTitle"), content: d("introduceContent") },
          { title: d("introduceTitle2"), content: d("introduceContent2") },
          { title: d("introduceTitle3"), content: d("introduceContent3") },
        ]);
      return (h, i) => {
        const r = $("NavBar"),
          f = $("svg-icon");
        return (
          c(),
          _("div", ce, [
            u(
              r,
              {
                title: h.$t("firstSaveRule"),
                placeholder: !1,
                "left-arrow": "",
                onClickLeft: i[0] || (i[0] = (a) => n(p).go(-1)),
              },
              null,
              8,
              ["title"]
            ),
            t("div", _e, [
              (c(!0),
              _(
                A,
                null,
                x(
                  b.value,
                  (a, m) => (
                    c(),
                    _("div", { class: "promotion-box", key: m }, [
                      t("div", pe, [
                        t("span", null, [
                          u(f, { name: "activityRulesBackground" }),
                          t("span", null, "0" + e(m + 1), 1),
                        ]),
                      ]),
                      t("div", ve, [
                        t("h3", null, e(a.title), 1),
                        t("p", null, e(a.content), 1),
                      ]),
                    ])
                  )
                ),
                128
              )),
            ]),
          ])
        );
      };
    },
  });
const he = L(be, [
    ["__scopeId", "data-v-0e3a0a02"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/activity/Turntable/Rules/index.vue",
    ],
  ]),
  Te = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: he },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { we as a, ke as b, Te as c, ye as i };
