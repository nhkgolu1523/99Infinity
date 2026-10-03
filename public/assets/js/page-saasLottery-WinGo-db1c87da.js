import {
  G as Z,
  N as o,
  I as n,
  J as e,
  aB as X,
  P as t,
  O as s,
  K as w,
  M as R,
  ap as f,
  aC as re,
  aD as ue,
  z as Le,
  r as N,
  B as O,
  H as V,
  Q as i,
  av as g,
  ao as y,
  ax as _e,
  Z as le,
  aF as Se,
  aW as Ne,
  $ as Y,
  au as K,
  C as ie,
  W as Me,
  V as Re,
  a7 as Ge,
  bw as We,
  ay as Pe,
  bm as De,
  aT as Ve,
  bl as He,
  T as Ee,
} from "./common.modules-cecf9b0d.js";
import {
  _ as q,
  c as Fe,
  y as ze,
} from "./page-activity-ActivityDetail-6713f46c.js";
import {
  u as ee,
  m as pe,
  j as Ae,
  E as me,
  v as fe,
  R as xe,
  T as Ue,
  L as je,
  o as Oe,
  W as Xe,
  c as Ze,
  p as qe,
  C as Ke,
} from "./page-saasLottery-D5-c991f6a0.js";
import {
  u as Je,
  a as ge,
  b as Qe,
} from "./page-saasLottery-VideoWinGo-2b067161.js";
import { M as Ye } from "./page-saasLottery-SaasChangLong-0d72bafc.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
import "./page-home-other-6d9782ba.js";
import "./page-home-Casino-ff36f722.js";
import "./page-home-AllGames-ebd16353.js";
import "./page-activity-Bonus-c94a181e.js";
import "./page-saasLottery-MotoRace-5b715646.js";
const be = (_) => (re("data-v-3cbad787"), (_ = _()), ue(), _),
  et = { class: "TimeLeft__C" },
  tt = be(() =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
      },
      [
        e("path", {
          d: "M23.67 3H12.33C6.66 3 5.25 4.515 5.25 10.56V27.45C5.25 31.44 7.44 32.385 10.095 29.535L10.11 29.52C11.34 28.215 13.215 28.32 14.28 29.745L15.795 31.77C17.01 33.375 18.975 33.375 20.19 31.77L21.705 29.745C22.785 28.305 24.66 28.2 25.89 29.52C28.56 32.37 30.735 31.425 30.735 27.435V10.56C30.75 4.515 29.34 3 23.67 3ZM11.67 18C10.845 18 10.17 17.325 10.17 16.5C10.17 15.675 10.845 15 11.67 15C12.495 15 13.17 15.675 13.17 16.5C13.17 17.325 12.495 18 11.67 18ZM11.67 12C10.845 12 10.17 11.325 10.17 10.5C10.17 9.675 10.845 9 11.67 9C12.495 9 13.17 9.675 13.17 10.5C13.17 11.325 12.495 12 11.67 12ZM24.345 17.625H16.095C15.48 17.625 14.97 17.115 14.97 16.5C14.97 15.885 15.48 15.375 16.095 15.375H24.345C24.96 15.375 25.47 15.885 25.47 16.5C25.47 17.115 24.96 17.625 24.345 17.625ZM24.345 11.625H16.095C15.48 11.625 14.97 11.115 14.97 10.5C14.97 9.885 15.48 9.375 16.095 9.375H24.345C24.96 9.375 25.47 9.885 25.47 10.5C25.47 11.115 24.96 11.625 24.345 11.625Z",
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  st = { class: "TimeLeft__C-name" },
  ot = { class: "TimeLeft__C-num" },
  nt = { class: "TimeLeft__C-id" },
  at = { class: "TimeLeft__C-text" },
  lt = { class: "TimeLeft__C-time" },
  it = be(() => e("div", null, ":", -1)),
  rt = Z({
    __name: "WinGoInfo",
    props: {
      issue: { type: String, default: "" },
      numbers: { type: Array, default: () => [0, 0, 0, 0, 0] },
      countdownTime: { type: Array, default: ["0", "0", ":", "0", "0"] },
      handleRule: { type: Function, default: () => {} },
    },
    setup(_) {
      const { currentGame: I } = ee();
      return (G, W) => {
        var B;
        return (
          o(),
          n("div", et, [
            e(
              "div",
              {
                onClick: W[0] || (W[0] = (p) => _.handleRule()),
                class: "TimeLeft__C-rule",
              },
              [tt, X(t(G.$t("binguo_playerRule")), 1)]
            ),
            e(
              "div",
              st,
              t(((B = s(I)) == null ? void 0 : B.gameName) || ""),
              1
            ),
            e("div", ot, [
              (o(!0),
              n(
                w,
                null,
                R(
                  _.numbers,
                  (p, u) => (
                    o(), n("div", { key: u, class: f(["n" + p]) }, null, 2)
                  )
                ),
                128
              )),
            ]),
            e("div", nt, t(_.issue), 1),
            e("div", at, t(G.$t("timeLeftToBuy")), 1),
            e("div", lt, [
              e("div", null, t(_.countdownTime[0]), 1),
              e("div", null, t(_.countdownTime[1]), 1),
              it,
              e("div", null, t(_.countdownTime[3]), 1),
              e("div", null, t(_.countdownTime[4]), 1),
            ]),
          ])
        );
      };
    },
  });
const ut = q(rt, [
    ["__scopeId", "data-v-3cbad787"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/WinGo/components/wingo3/WinGoInfo.vue",
    ],
  ]),
  ct = { class: "lottery-container" },
  dt = { class: "selection-text" },
  vt = { class: "content" },
  _t = { class: "amount-section" },
  pt = { class: "section-header" },
  mt = { class: "label" },
  ft = { class: "amount-buttons" },
  gt = ["onClick"],
  bt = { class: "multiplier-section" },
  ht = { class: "section-header" },
  yt = { class: "label" },
  Ct = { class: "m" },
  $t = { class: "multiplier-buttons" },
  wt = ["onClick"],
  kt = { class: "agreement" },
  Tt = { class: "footer" },
  Bt = Z({
    __name: "BettingPopup",
    props: { currentGame: { type: String, default: "" } },
    setup(_) {
      const { t: I } = Le(),
        G = (m) => {
          m === 1 ? u.value > 1 && u.value-- : u.value++;
        };
      N("1");
      const W = N(!0),
        {
          betDialog: B,
          betMultiples: p,
          betMultiple: u,
          amount: C,
          onBetting: L,
          betScopes: M,
          playBet: d,
          onClearBet: F,
        } = Je(),
        { balance: z } = ee(),
        A = N(!1),
        j = O(() => {
          let m = [1, 3, 7, 9],
            a = [2, 4, 6, 8];
          if (d.value === "violet") return "violet_bg";
          if (d.value === "small") return "small_bg";
          if (d.value === "big") return "big_bg";
          if (d.value === 0) return "zero_bg";
          if (d.value === 5) return "five_bg";
          if (m.includes(d.value) || d.value === "green") return "green_bg";
          if (a.includes(d.value) || d.value === "red") return "red_bg";
        }),
        b = Ae(),
        k = () => {
          if (u.value * C.value > z.value) return b.error(I("wfDesc3"));
          L();
        };
      return (m, a) => {
        const S = V("van-checkbox"),
          H = V("van-button"),
          v = V("van-popup");
        return (
          o(),
          n(
            w,
            null,
            [
              i(
                v,
                {
                  show: s(B),
                  "onUpdate:show":
                    a[6] || (a[6] = (r) => (le(B) ? (B.value = r) : null)),
                  position: "bottom",
                  round: "",
                },
                {
                  default: g(() => [
                    e("div", ct, [
                      y(" Curved Header "),
                      e(
                        "div",
                        { class: f(["header", j.value]) },
                        [
                          e("h1", null, t(_.currentGame), 1),
                          e("div", dt, [
                            e(
                              "span",
                              null,
                              t(s(I)("selectMay")) +
                                " " +
                                t(
                                  isNaN(Number(s(d)))
                                    ? s(I)(
                                        "bet" +
                                          (s(d).charAt(0).toUpperCase() +
                                            s(d).slice(1))
                                      )
                                    : s(d)
                                ),
                              1
                            ),
                          ]),
                        ],
                        2
                      ),
                      y(" Main Content "),
                      e("div", vt, [
                        y(" Amount Section "),
                        e("div", _t, [
                          e("div", pt, [
                            e("span", mt, t(s(I)("amount")), 1),
                            e("div", ft, [
                              (o(!0),
                              n(
                                w,
                                null,
                                R(
                                  s(M),
                                  (r) => (
                                    o(),
                                    n(
                                      "div",
                                      {
                                        key: r,
                                        class: f(
                                          s(C) === r
                                            ? `primary n_${s(d)}`
                                            : "default"
                                        ),
                                        onClick: (P) => (C.value = r),
                                      },
                                      t(r),
                                      11,
                                      gt
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                        ]),
                        y(" Multiplier Section "),
                        e("div", bt, [
                          e("div", ht, [
                            e("span", yt, t(m.$t("quantity")), 1),
                            e("div", Ct, [
                              e(
                                "div",
                                {
                                  class: f([`n_${s(d)}`]),
                                  onClick: a[0] || (a[0] = (r) => G(1)),
                                },
                                "-",
                                2
                              ),
                              _e(
                                e(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      a[1] ||
                                      (a[1] = (r) =>
                                        le(u) ? (u.value = r) : null),
                                    type: "number",
                                    onInput:
                                      a[2] ||
                                      (a[2] = (...r) =>
                                        m.enforceMaxValue &&
                                        m.enforceMaxValue(...r)),
                                  },
                                  null,
                                  544
                                ),
                                [[Se, s(u)]]
                              ),
                              e(
                                "div",
                                {
                                  class: f([`n_${s(d)}`]),
                                  onClick: a[3] || (a[3] = (r) => G(2)),
                                },
                                "+",
                                2
                              ),
                            ]),
                          ]),
                          e("div", $t, [
                            (o(!0),
                            n(
                              w,
                              null,
                              R(
                                s(p),
                                (r) => (
                                  o(),
                                  n(
                                    "div",
                                    {
                                      key: r,
                                      class: f(
                                        s(u) === r
                                          ? `primary n_${s(d)}`
                                          : "default"
                                      ),
                                      onClick: (P) => (u.value = r),
                                    },
                                    " X" + t(r),
                                    11,
                                    wt
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                        y(" Agreement Section "),
                        e("div", kt, [
                          i(
                            S,
                            {
                              modelValue: W.value,
                              "onUpdate:modelValue":
                                a[5] || (a[5] = (r) => (W.value = r)),
                              "checked-color": "var(--main-color)",
                            },
                            {
                              default: g(() => [
                                X(t(m.$t("agree")) + " ", 1),
                                e(
                                  "span",
                                  {
                                    class: "rules",
                                    onClick:
                                      a[4] ||
                                      (a[4] = Ne(
                                        (r) => (A.value = !0),
                                        ["stop"]
                                      )),
                                  },
                                  t(m.$t("presaleRules")),
                                  1
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["modelValue"]
                          ),
                        ]),
                      ]),
                      y(" Footer "),
                      e("div", Tt, [
                        i(
                          H,
                          { class: "cancel", onClick: s(F) },
                          { default: g(() => [X(t(s(I)("cancel")), 1)]), _: 1 },
                          8,
                          ["onClick"]
                        ),
                        i(
                          H,
                          {
                            class: f(`bet-amount n_${s(d)}`),
                            disabled: !W.value,
                            onClick: k,
                          },
                          {
                            default: g(() => [
                              X(
                                t(s(I)("totalAmount")) +
                                  " " +
                                  t(s(Fe)(s(u) * s(C) || 0)),
                                1
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class", "disabled"]
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show"]
              ),
              y(" 预售规则弹层 begin"),
              i(
                v,
                {
                  show: A.value,
                  "onUpdate:show": a[8] || (a[8] = (r) => (A.value = r)),
                  "close-on-click-overlay": !1,
                  round: "",
                },
                {
                  default: g(() => [
                    i(
                      s(pe),
                      {
                        title: s(I)("presaleRules"),
                        onClose: a[7] || (a[7] = (r) => (A.value = !1)),
                      },
                      { default: g(() => [X(t(m.$t("betPopTXT")), 1)]), _: 1 },
                      8,
                      ["title"]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["show"]
              ),
            ],
            64
          )
        );
      };
    },
  });
const It = q(Bt, [
    ["__scopeId", "data-v-d2f5ce8d"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/WinGo/components/wingo3/BettingPopup.vue",
    ],
  ]),
  te = (_) => (re("data-v-e06f81fe"), (_ = _()), ue(), _),
  Lt = { class: "record" },
  St = { class: "record-head" },
  Nt = { class: "record-body" },
  Mt = { key: 0 },
  Rt = { key: 1 },
  Gt = { class: "record-origin" },
  Wt = te(() => e("div", { class: "record-origin-I red" }, null, -1)),
  Pt = te(() => e("div", { class: "record-origin-I violet" }, null, -1)),
  Dt = { key: 1, class: "record-origin-I green" },
  Vt = { key: 2, class: "record-origin-I red" },
  Ht = te(() => e("div", { class: "record-origin-I green" }, null, -1)),
  Et = te(() => e("div", { class: "record-origin-I violet" }, null, -1)),
  Ft = {
    key: 0,
    class: "flex-center record-body-loading",
    style: { height: "100%" },
  },
  zt = { key: 1, class: "record-body-empty flex-center" },
  At = { key: 0, class: "record-foot" },
  xt = { class: "record-foot-page" },
  Ut = Z({
    __name: "record",
    setup(_) {
      const { gameCode: I } = ee(),
        { historyIssues: G, historyIssuesTotalPage: W } = ge(),
        B = N([]),
        p = N(!1),
        u = O(() => (B.value.length ? B.value : G.value)),
        C = N(W.value),
        L = N(10),
        M = N(1),
        d = () => {
          M.value < 2 || (M.value--, z());
        },
        F = () => {
          M.value++, !(M.value > C.value) && z();
        },
        z = async () => {
          try {
            p.value = !0;
            const { result: b, data: k } = await fe({
              gameCode: I.value,
              pageNo: M.value,
              pageSize: L.value,
            });
            b &&
              ((B.value = k.list || []),
              (M.value = k.pageNo || 1),
              (C.value = k.totalPage || 0));
          } catch {
          } finally {
            p.value = !1;
          }
        },
        A = (b) => parseInt(b, 10) % 2 !== 0,
        j = (b) => {
          let k = "";
          switch ((A(b) ? (k = "greenColor") : (k = "defaultColor"), b)) {
            case "0":
              k = "mixedColor0";
              break;
            case "5":
              k = "mixedColor5";
              break;
          }
          return k;
        };
      return (
        Y(G, () => {
          (B.value = []), (M.value = 1);
        }),
        Y(W, () => {
          C.value = W.value;
        }),
        (b, k) => {
          const m = V("van-col"),
            a = V("van-row"),
            S = V("van-loading"),
            H = V("van-icon");
          return (
            o(),
            n("div", Lt, [
              e("div", St, [
                i(a, null, {
                  default: g(() => [
                    i(
                      m,
                      { span: "10" },
                      {
                        default: g(() => [
                          e("span", null, t(b.$t("betIssue")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    i(
                      m,
                      { span: "5" },
                      {
                        default: g(() => [
                          e("span", null, t(b.$t("number")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    i(
                      m,
                      { span: "5" },
                      {
                        default: g(() => [
                          e("span", null, t(b.$t("bigOrSmall")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    i(
                      m,
                      { span: "4" },
                      {
                        default: g(() => [
                          e("span", null, t(b.$t("color")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              e("div", Nt, [
                (o(!0),
                n(
                  w,
                  null,
                  R(
                    u.value,
                    (v, r) => (
                      o(),
                      K(
                        a,
                        { key: r },
                        {
                          default: g(() => [
                            i(
                              m,
                              { span: "10" },
                              {
                                default: g(() => [X(t(v.issueNumber), 1)]),
                                _: 2,
                              },
                              1024
                            ),
                            i(
                              m,
                              { span: "5", class: "numcenter" },
                              {
                                default: g(() => [
                                  e(
                                    "div",
                                    {
                                      class: f([
                                        "record-body-num",
                                        j(v.number),
                                      ]),
                                    },
                                    t(v.number),
                                    3
                                  ),
                                ]),
                                _: 2,
                              },
                              1024
                            ),
                            i(
                              m,
                              { span: "5" },
                              {
                                default: g(() => [
                                  Number(v.number) > 4
                                    ? (o(), n("span", Mt, t(b.$t("betBig")), 1))
                                    : (o(),
                                      n("span", Rt, t(b.$t("betSmall")), 1)),
                                ]),
                                _: 2,
                              },
                              1024
                            ),
                            i(
                              m,
                              { span: "4" },
                              {
                                default: g(() => [
                                  e("div", Gt, [
                                    v.number == "0"
                                      ? (o(), n(w, { key: 0 }, [Wt, Pt], 64))
                                      : y("v-if", !0),
                                    v.number == "1" ||
                                    v.number == "3" ||
                                    v.number == "7" ||
                                    v.number == "9"
                                      ? (o(), n("div", Dt))
                                      : y("v-if", !0),
                                    v.number == "2" ||
                                    v.number == "4" ||
                                    v.number == "6" ||
                                    v.number == "8"
                                      ? (o(), n("div", Vt))
                                      : y("v-if", !0),
                                    v.number == "5"
                                      ? (o(), n(w, { key: 3 }, [Ht, Et], 64))
                                      : y("v-if", !0),
                                  ]),
                                ]),
                                _: 2,
                              },
                              1024
                            ),
                          ]),
                          _: 2,
                        },
                        1024
                      )
                    )
                  ),
                  128
                )),
                p.value
                  ? (o(),
                    n("section", Ft, [
                      i(S, { type: "spinner", color: "#FD565C" }),
                    ]))
                  : y("v-if", !0),
                u.value.length === 0 && !p.value
                  ? (o(), n("div", zt, [i(s(me))]))
                  : y("v-if", !0),
              ]),
              u.value.length
                ? (o(),
                  n("div", At, [
                    e(
                      "div",
                      {
                        class: f([
                          "record-foot-previous",
                          { disabled: M.value <= 1 },
                        ]),
                        onClick: d,
                      },
                      [
                        i(H, {
                          name: "arrow-left",
                          class: "record-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                    e("div", xt, t(M.value) + "/" + t(C.value), 1),
                    e(
                      "div",
                      {
                        class: f([
                          "record-foot-next",
                          { disabled: M.value >= C.value },
                        ]),
                        onClick: F,
                      },
                      [
                        i(H, {
                          name: "arrow",
                          class: "record-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                  ]))
                : y("v-if", !0),
            ])
          );
        }
      );
    },
  });
const jt = q(Ut, [
    ["__scopeId", "data-v-e06f81fe"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/WinGo/components/wingo3/record.vue",
    ],
  ]),
  Ot = { class: "t" },
  Xt = { class: "t_head" },
  Zt = { class: "t-b1" },
  qt = { class: "t-b1-l w" },
  Kt = { class: "w" },
  Jt = { class: "t-b1-l lottery" },
  Qt = { class: "t-b1-l-n" },
  Yt = { class: "t-b1-l" },
  es = { class: "t-b1-l-n" },
  ts = { class: "t-b1-l" },
  ss = { class: "t-b1-l-n" },
  os = { class: "t-b1-l" },
  ns = { class: "t-b1-l-n" },
  as = { class: "t-b1-l" },
  ls = { class: "t-b1-l-n" },
  is = { class: "t-b2" },
  rs = ["IssueNumber", "Number", "Colour", "rowId"],
  us = { class: "t-b2-i" },
  cs = { class: "t-b2-Num" },
  ds = ["id"],
  vs = { key: 0, class: "flex-center t-b2-loading", style: { height: "100%" } },
  _s = { key: 1, class: "t-b2-empty flex-center" },
  ps = { key: 0, class: "t-foot" },
  ms = { class: "t-foot-page" },
  fs = Z({
    __name: "trend",
    setup(_) {
      const {
          historyIssues: I,
          gameCode: G,
          historyIssuesTotalPage: W,
          issue: B,
        } = ge(),
        p = N([]),
        u = O(() => (p.value.length ? p.value : I.value)),
        C = N([]),
        L = N(1),
        M = N(10),
        d = N(!1),
        F = N(W.value);
      function z() {
        Re(() => {
          for (let a = 0; a < u.value.length; a++)
            u.value[a + 1] && A(a, u.value[a], u.value[a + 1]);
        });
      }
      function A(a, S, H) {
        let v = parseInt(S.number),
          r = parseInt(H.number);
        const P = document.getElementById("myCanvas" + a);
        if (P && P.getContext) {
          var c = P.getContext("2d");
          c.clearRect(0, 0, P.width, P.height),
            c.beginPath(),
            c.moveTo(v == 0 ? 20 : v * 29 + 20, 0),
            c.lineTo(r == 0 ? 20 : r * 29 + 20, P.height),
            (c.strokeStyle = "red"),
            c.stroke(),
            c.closePath();
        }
      }
      const j = () => {
          L.value < 2 || (L.value--, m());
        },
        b = () => {
          L.value++, !(L.value > F.value) && m();
        },
        k = async () => {
          const { result: a, data: S } = await xe({
            gameCode: G.value,
            pageNo: L.value,
            pageSize: 10,
          });
          a && (C.value = S);
        },
        m = async () => {
          try {
            d.value = !0;
            const { result: a, data: S } = await fe({
              gameCode: G.value,
              pageNo: L.value,
              pageSize: M.value,
            });
            a &&
              ((p.value = S.list || []),
              (L.value = S.pageNo || 1),
              (F.value = S.totalPage || 0));
          } catch {
          } finally {
            d.value = !1;
          }
        };
      return (
        ie(async () => {
          u.value.length && z(), await k();
        }),
        Me(() => {
          z(), k(), m();
        }),
        Y(B, () => {
          k();
        }),
        Y(u, () => {
          z();
        }),
        (a, S) => {
          const H = V("van-col"),
            v = V("van-row"),
            r = V("van-loading"),
            P = V("van-icon");
          return (
            o(),
            n("div", Ot, [
              e("div", Xt, [
                e("div", null, t(a.$t("betIssue")), 1),
                e("div", null, t(a.$t("number")), 1),
              ]),
              e("div", Zt, [
                e("div", qt, [
                  e("div", Kt, t(a.$t("w8")), 1),
                  e("div", null, t(a.$t("w9")), 1),
                ]),
                e("div", Jt, [
                  e("div", null, t(a.$t("w11")), 1),
                  e("div", Qt, [
                    (o(),
                    n(
                      w,
                      null,
                      R(10, (c) => e("div", { key: c }, t(c - 1), 1)),
                      64
                    )),
                  ]),
                ]),
                e("div", Yt, [
                  e("div", null, t(a.$t("trendDesc3")), 1),
                  e("div", es, [
                    (o(!0),
                    n(
                      w,
                      null,
                      R(
                        C.value,
                        (c, D) => (
                          o(), n("div", { key: "4" + D }, t(c.missingCount), 1)
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                e("div", ts, [
                  e("div", null, t(a.$t("trendDesc4")), 1),
                  e("div", ss, [
                    (o(!0),
                    n(
                      w,
                      null,
                      R(
                        C.value,
                        (c, D) => (
                          o(), n("div", { key: "2" + D }, t(c.avgMissing), 1)
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                e("div", os, [
                  e("div", null, t(a.$t("trendDesc5")), 1),
                  e("div", ns, [
                    (o(!0),
                    n(
                      w,
                      null,
                      R(
                        C.value,
                        (c, D) => (
                          o(), n("div", { key: "5" + D }, t(c.openCount), 1)
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                e("div", as, [
                  e("div", null, t(a.$t("trendDesc6")), 1),
                  e("div", ls, [
                    (o(!0),
                    n(
                      w,
                      null,
                      R(
                        C.value,
                        (c, D) => (
                          o(), n("div", { key: "3" + D }, t(c.maxContinuous), 1)
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
              e("div", is, [
                (o(!0),
                n(
                  w,
                  null,
                  R(
                    u.value,
                    (c, D) => (
                      o(),
                      n(
                        "div",
                        {
                          key: D,
                          IssueNumber: c.issueNumber,
                          Number: c.number,
                          Colour: c.colour,
                          rowId: D,
                          class: "t-b2-item",
                        },
                        [
                          i(
                            v,
                            null,
                            {
                              default: g(() => [
                                i(
                                  H,
                                  { span: "9" },
                                  {
                                    default: g(() => [
                                      e("div", us, t(c.issueNumber), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                i(
                                  H,
                                  { span: "15" },
                                  {
                                    default: g(() => [
                                      e("div", cs, [
                                        e(
                                          "canvas",
                                          {
                                            id: "myCanvas" + D,
                                            ref_for: !0,
                                            ref: "canvas",
                                            class: "line-canvas",
                                          },
                                          null,
                                          8,
                                          ds
                                        ),
                                        (o(),
                                        n(
                                          w,
                                          null,
                                          R(10, (U) =>
                                            e(
                                              "div",
                                              {
                                                class: f([
                                                  "t-b2-Num-item",
                                                  Number(c.number) == U - 1
                                                    ? "action" + (U - 1)
                                                    : "",
                                                ]),
                                                key: U,
                                              },
                                              t(U - 1),
                                              3
                                            )
                                          ),
                                          64
                                        )),
                                        e(
                                          "div",
                                          {
                                            class: f([
                                              "t-b2-Num-BS",
                                              { isB: Number(c.number) > 4 },
                                            ]),
                                          },
                                          t(Number(c.number) > 4 ? "B" : "S"),
                                          3
                                        ),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                              ]),
                              _: 2,
                            },
                            1024
                          ),
                        ],
                        8,
                        rs
                      )
                    )
                  ),
                  128
                )),
                d.value
                  ? (o(),
                    n("div", vs, [i(r, { type: "spinner", color: "#FD565C" })]))
                  : y("v-if", !0),
                u.value.length === 0 && !d.value
                  ? (o(), n("div", _s, [i(s(me))]))
                  : y("v-if", !0),
              ]),
              u.value.length
                ? (o(),
                  n("div", ps, [
                    e(
                      "div",
                      {
                        class: f([
                          "t-foot-previous",
                          { disabled: L.value <= 1 },
                        ]),
                        onClick: j,
                      },
                      [
                        i(P, {
                          name: "arrow-left",
                          class: "t-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                    e("div", ms, t(L.value) + "/" + t(F.value), 1),
                    e(
                      "div",
                      {
                        class: f([
                          "t-foot-next",
                          { disabled: L.value >= F.value },
                        ]),
                        onClick: b,
                      },
                      [i(P, { name: "arrow", class: "t-icon", size: "20" })],
                      2
                    ),
                  ]))
                : y("v-if", !0),
            ])
          );
        }
      );
    },
  });
const gs = q(fs, [
    ["__scopeId", "data-v-57322248"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/WinGo/components/wingo3/trend.vue",
    ],
  ]),
  bs = (_) => (re("data-v-b68febd5"), (_ = _()), ue(), _),
  hs = { class: "winGo3" },
  ys = { class: "Betting__C" },
  Cs = { class: "Betting__C-mark" },
  $s = { class: "Betting__C-head" },
  ws = ["onClick"],
  ks = { class: "Betting__C-numC" },
  Ts = ["onClick"],
  Bs = { class: "Betting__C-multiple" },
  Is = ["onClick"],
  Ls = { class: "Betting__C-foot" },
  Ss = { class: "history" },
  Ns = { class: "nav-box" },
  Ms = bs(() => e("p", { style: { height: "200px" } }, null, -1)),
  Rs = { class: "winner_box" },
  Gs = { class: "winner_result" },
  Ws = { key: 0, class: "flex-center", style: { height: "100%" } },
  Ps = ["innerHTML"],
  Ds = Z({
    __name: "index",
    setup(_) {
      const { getWebData: I, currentGame: G, lotteryCode: W } = ee(),
        { localStore: B } = Ze(),
        p = N("Record"),
        u = O(() => {
          switch (p.value) {
            case "Record":
              return jt;
            case "Trend":
              return gs;
            case "FollowBet":
              return Ue;
            case "MyRecord":
              return Ye;
            default:
              return null;
          }
        }),
        C = Qe();
      Ge("WinHook", C);
      const {
        randomNum: L,
        numbers: M,
        colors: d,
        bigSmalls: F,
        issue: z,
        countdownTime: A,
        betMultiples: j,
        betMultiple: b,
        getIssue: k,
        useProvide: m,
        getHistoryIssues: a,
        countdown: S,
        historyIssues: H,
        onBet: v,
        onRandom: r,
        showMark: P,
        winner: c,
        getIntroduce: D,
        introduceDialog: U,
        onSwitchIntroduce: ce,
        introduceHtml: de,
        introduceLoading: he,
        getlotteryissue: ye,
        setVoice: Ce,
        onClearBet: $e,
        setLotteryCode: we,
        VoiceType: ke,
      } = C;
      m(),
        ie(async () => {
          await Promise.all([k(!0), I()]), await a();
        });
      const Te = O(() => H.value.slice(0, 5).map((h) => h.number)),
        se = N(!1),
        Be = async (h) => {
          if (!se.value) {
            se.value = !0;
            try {
              $e(!0), we(h.gameCode), await ye();
            } catch {
            } finally {
              se.value = !1;
            }
          }
        },
        Ie = O(() =>
          S.value.seconds < 10 ? "0" + S.value.seconds : S.value.seconds + ""
        ),
        oe = N(null);
      return (
        ie(() => {
          if (!oe.value) return;
          let h = !1,
            $,
            J;
          const T = oe.value,
            Q = (x) => {
              (h = !0),
                (T.style.cursor = "grabbing"),
                ($ = x.pageX - T.offsetLeft),
                (J = T.scrollLeft);
            },
            l = () => {
              (h = !1), (T.style.cursor = "grab");
            },
            E = () => {
              (h = !1), (T.style.cursor = "grab");
            };
          setTimeout(() => {
            T.querySelector("div:first-child") && (T.scrollLeft = 0);
          }, 100);
          const ne = (x) => {
            if (!h) return;
            x.preventDefault();
            const ae = (x.pageX - T.offsetLeft - $) * 2;
            T.scrollLeft = J - ae;
          };
          T.addEventListener("mousedown", Q),
            T.addEventListener("mouseleave", l),
            T.addEventListener("mouseup", E),
            T.addEventListener("mousemove", ne),
            (T.style.cursor = "grab"),
            We(() => {
              const x = T.querySelector(".active");
              if (x) {
                const ve = x.offsetLeft + x.offsetWidth / 2,
                  ae = T.offsetWidth / 2;
                T.scrollLeft = ve - ae;
              }
            });
        }),
        (h, $) => {
          var Q;
          const J = V("van-loading"),
            T = V("van-popup");
          return (
            o(),
            n("div", hs, [
              i(
                s(je),
                {
                  showNav: !0,
                  onChangeSelectGame: Be,
                  onSetVoice: s(Ce),
                  VoiceType: s(ke),
                  countdown: s(S),
                },
                null,
                8,
                ["onSetVoice", "VoiceType", "countdown"]
              ),
              i(
                ut,
                {
                  handleRule: s(ce),
                  issue: s(z),
                  numbers: Te.value,
                  countdownTime: s(A),
                },
                null,
                8,
                ["handleRule", "issue", "numbers", "countdownTime"]
              ),
              e("div", ys, [
                _e(
                  e(
                    "div",
                    Cs,
                    [
                      (o(!0),
                      n(
                        w,
                        null,
                        R(Ie.value, (l) => (o(), n("div", null, t(l), 1))),
                        256
                      )),
                      y(" <div>{{ props.currentInfo.time4 || '0' }}</div>"),
                    ],
                    512
                  ),
                  [[Pe, s(P)]]
                ),
                e("div", $s, [
                  (o(!0),
                  n(
                    w,
                    null,
                    R(
                      s(d),
                      (l) => (
                        o(),
                        n(
                          "div",
                          {
                            class: f(["Betting__C-head-" + l.playBet]),
                            onClick: (E) => s(v)(l),
                          },
                          t(
                            h.$t(
                              `bet${
                                l.playBet.charAt(0).toUpperCase() +
                                l.playBet.slice(1)
                              }`
                            )
                          ),
                          11,
                          ws
                        )
                      )
                    ),
                    256
                  )),
                ]),
                e("div", ks, [
                  (o(!0),
                  n(
                    w,
                    null,
                    R(
                      s(M),
                      (l, E) => (
                        o(),
                        n(
                          "div",
                          {
                            key: E,
                            class: f([
                              s(L) == l.playBet ? "active" : "",
                              "Betting__C-numC-item" + E,
                            ]),
                            onClick: (ne) => s(v)(l),
                          },
                          null,
                          10,
                          Ts
                        )
                      )
                    ),
                    128
                  )),
                ]),
                e("div", Bs, [
                  e(
                    "div",
                    {
                      class: "Betting__C-multiple-l",
                      onClick: $[0] || ($[0] = (...l) => s(r) && s(r)(...l)),
                    },
                    t(h.$t("randomBet")),
                    1
                  ),
                  (o(!0),
                  n(
                    w,
                    null,
                    R(
                      s(j),
                      (l, E) => (
                        o(),
                        n(
                          "div",
                          {
                            key: E,
                            class: f([
                              "Betting__C-multiple-r",
                              { active: l == s(b) },
                            ]),
                            onClick: (ne) => (b.value = l),
                          },
                          " X" + t(l),
                          11,
                          Is
                        )
                      )
                    ),
                    128
                  )),
                ]),
                e("div", Ls, [
                  e(
                    "div",
                    {
                      onClick: $[1] || ($[1] = (l) => s(v)(s(F)[0])),
                      class: "Betting__C-foot-b",
                    },
                    t(h.$t("big")),
                    1
                  ),
                  e(
                    "div",
                    {
                      onClick: $[2] || ($[2] = (l) => s(v)(s(F)[1])),
                      class: "Betting__C-foot-s",
                    },
                    t(h.$t("small")),
                    1
                  ),
                ]),
              ]),
              i(
                It,
                { currentGame: (Q = s(G)) == null ? void 0 : Q.gameName },
                null,
                8,
                ["currentGame"]
              ),
              e("div", Ss, [
                e(
                  "div",
                  { class: "nav", ref_key: "navRef", ref: oe },
                  [
                    e(
                      "div",
                      {
                        class: f([
                          "nav-container",
                          { noScroll: !s(B).get("isOpenFollow") },
                        ]),
                      },
                      [
                        e(
                          "div",
                          {
                            class: f({ active: p.value === "Record" }),
                            onClick:
                              $[3] || ($[3] = (l) => (p.value = "Record")),
                          },
                          t(h.$t("gameRecords")),
                          3
                        ),
                        e(
                          "div",
                          {
                            class: f({ active: p.value === "Trend" }),
                            onClick:
                              $[4] || ($[4] = (l) => (p.value = "Trend")),
                          },
                          t(h.$t("chartTrends")),
                          3
                        ),
                        s(B).get("isOpenFollow")
                          ? (o(),
                            n(
                              "div",
                              {
                                key: 0,
                                class: f({ active: p.value === "FollowBet" }),
                                onClick:
                                  $[5] ||
                                  ($[5] = (l) => (p.value = "FollowBet")),
                              },
                              t(h.$t("fts")),
                              3
                            ))
                          : y("v-if", !0),
                        e(
                          "div",
                          {
                            class: f({ active: p.value === "MyRecord" }),
                            onClick:
                              $[6] || ($[6] = (l) => (p.value = "MyRecord")),
                          },
                          t(h.$t("myRecord")),
                          3
                        ),
                      ],
                      2
                    ),
                  ],
                  512
                ),
                e("div", Ns, [
                  (o(),
                  K(
                    He,
                    null,
                    [
                      (o(),
                      K(De, null, {
                        default: g(() => [(o(), K(Ve(u.value)))]),
                        fallback: g(() => [Ms]),
                        _: 1,
                      })),
                    ],
                    1024
                  )),
                ]),
              ]),
              i(Oe),
              i(
                s(Xe),
                { ref_key: "winner", ref: c },
                {
                  default: g(({ data: l }) => [
                    e("div", Rs, [
                      e("span", null, t(h.$t("winTips3")), 1),
                      e("div", Gs, [
                        e(
                          "div",
                          { class: f(`color_${l.color.replace(/,/g, "_")}`) },
                          [
                            (o(!0),
                            n(
                              w,
                              null,
                              R(
                                l.color.split(","),
                                (E) => (
                                  o(),
                                  n("span", null, t(h.$t("common." + E)), 1)
                                )
                              ),
                              256
                            )),
                          ],
                          2
                        ),
                        e(
                          "div",
                          { class: f(`color_${l.color}`) },
                          t(l.number),
                          3
                        ),
                        e(
                          "div",
                          { class: f(`color_${l.color}`) },
                          t(l.number > 4 ? h.$t("betBig") : h.$t("betSmall")),
                          3
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                512
              ),
              y(" 玩法说明"),
              i(
                T,
                {
                  onOpen: s(D),
                  show: s(U),
                  "onUpdate:show":
                    $[7] || ($[7] = (l) => (le(U) ? (U.value = l) : null)),
                  "close-on-click-overlay": !1,
                  round: "",
                },
                {
                  default: g(() => {
                    var l;
                    return [
                      i(
                        s(pe),
                        {
                          title: (l = s(de)) == null ? void 0 : l.title,
                          onClose: s(ce),
                        },
                        {
                          default: g(() => {
                            var E;
                            return [
                              s(he)
                                ? (o(),
                                  n("div", Ws, [
                                    i(J, { type: "spinner", color: "#FD565C" }),
                                  ]))
                                : (o(),
                                  n(
                                    "div",
                                    {
                                      key: 1,
                                      innerHTML:
                                        (E = s(de)) == null
                                          ? void 0
                                          : E.content,
                                    },
                                    null,
                                    8,
                                    Ps
                                  )),
                            ];
                          }),
                          _: 1,
                        },
                        8,
                        ["title", "onClose"]
                      ),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["onOpen", "show"]
              ),
            ])
          );
        }
      );
    },
  });
const Vs = q(Ds, [
    ["__scopeId", "data-v-b68febd5"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/WinGo/views/wingo3/index.vue",
    ],
  ]),
  Hs = Z({
    __name: "index",
    setup(_) {
      const I = Ee(),
        { useProvide: G, setLotteryCode: W } = qe(),
        B = I.query.gameCode;
      G(), W(B);
      const p = ze(),
        u = O(() => p.getIsShowLotteryDragon);
      return (C, L) => (
        o(),
        n(
          w,
          null,
          [i(Vs), u.value ? (o(), K(Ke, { key: 0 })) : y("v-if", !0)],
          64
        )
      );
    },
  }),
  Qs = q(Hs, [
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/saasLottery/WinGo/index.vue",
    ],
  ]);
export { Qs as default };
