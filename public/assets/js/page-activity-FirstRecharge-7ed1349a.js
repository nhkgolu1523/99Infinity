import {
  G as R,
  B as y,
  N as p,
  I as m,
  J as t,
  az as F,
  P as l,
  ao as P,
  z as B,
  r as I,
  H as L,
  aA as T,
  K as x,
  M as j,
  Q as w,
  av as W,
  aB as M,
  O as _,
  ap as O,
  ax as $,
  R as V,
  C as G,
} from "./common.modules-cecf9b0d.js";
import { r as H } from "./page-activity-DailySignIn-7bda4bcc.js";
import {
  _ as C,
  m as z,
  n as E,
  c as A,
  g as N,
  b as J,
} from "./page-activity-ActivityDetail-6713f46c.js";
const K = { key: 0, class: "step" },
  Q = R({
    __name: "Progress",
    props: {
      strokeWidth: { type: Number, default: 12 },
      total: { type: Number, default: 0 },
      numerical: { type: Number, default: 0 },
      color: { type: String, default: "var(--text_color_L4)" },
      trackColor: { type: String, default: "var(--bg_color_L1)" },
      isShowStep: { type: Boolean, default: !0 },
    },
    setup(f) {
      const e = f,
        u = y(() => ({
          background: e.trackColor,
          height: `${e.strokeWidth}px`,
          "border-radius": `${e.strokeWidth}px`,
        })),
        a = y(() => {
          let n = "0";
          return (
            e.numerical == 0 || e.total == 0
              ? (n = "0")
              : e.numerical > e.total
              ? (n = "100")
              : (n = String(((e.numerical / e.total) * 100).toFixed(2))),
            {
              background: e.color,
              width: `${n}%`,
              height: `${e.strokeWidth}px`,
              "border-radius": `${e.strokeWidth}px`,
            }
          );
        }),
        g = y(() => `${e.numerical}/${e.total}`);
      return (n, k) => (
        p(),
        m(
          "div",
          { class: "progress", style: F(u.value) },
          [
            t("div", { class: "line", style: F(a.value) }, null, 4),
            f.isShowStep ? (p(), m("div", K, l(g.value), 1)) : P("v-if", !0),
          ],
          4
        )
      );
    },
  });
const U = C(Q, [
    ["__scopeId", "data-v-bff59ba2"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/Progress.vue",
    ],
  ]),
  q = { class: "head" },
  X = { class: "title" },
  Y = { class: "orange" },
  Z = { class: "description" },
  ee = { class: "foot" },
  te = ["onClick"],
  se = { class: "dialog-wrapper" },
  re = { class: "dialog-title" },
  ae = { class: "dialog-content" },
  oe = R({
    __name: "listItem",
    props: {
      list: { type: Array, default: () => [{ rewardAmount: 123 }] },
      isRule: { type: Boolean, default: !1 },
    },
    emits: ["gorecharge"],
    setup(f, { emit: e }) {
      const { t: u } = B(),
        a = I(!1),
        g = I("");
      let n = !1;
      const { receiveFirstRechargeReward: k, ActiveSotre: S } = z(),
        { closeFirstSave: b } = E(),
        d = (o, s) => {
          const { canReceive: c, isFinshed: i } = o;
          if (!c) return "n2" + (s ? " rule" : "");
          if (c && !i) return "n1" + (s ? " rule" : "");
          if (i) return "n3" + (s ? " rule" : "");
          if (!i) return "n2" + (s ? " rule" : "");
        },
        v = (o) => {
          const { canReceive: s, isFinshed: c } = o;
          return u(s ? (c ? "claimed" : "receive") : "torecharge");
        },
        h = async (o) => {
          const { canReceive: s, isFinshed: c } = o;
          if (!s) return e("gorecharge");
          if (c || n) return;
          n = !0;
          const i = await k(o.id);
          (n = !1),
            i &&
              ((S.value.receiveAmount = o.rewardAmount),
              (S.value.showReceiveDialog = !0),
              b());
        };
      return (o, s) => {
        const c = L("van-dialog"),
          i = T("lazy");
        return (
          p(),
          m(
            x,
            null,
            [
              (p(!0),
              m(
                x,
                null,
                j(
                  f.list,
                  (r, D) => (
                    p(),
                    m("div", { key: D, class: "first_list-item" }, [
                      t("div", q, [
                        t("div", X, [
                          M(l(o.$t("firstSave")), 1),
                          t("span", null, l(r.rechargeAmount), 1),
                        ]),
                        t("div", Y, "+ " + l(_(A)(r.rewardAmount)), 1),
                      ]),
                      t(
                        "div",
                        Z,
                        l(
                          o.$t("firstSaveT", [r.rechargeAmount, r.rewardAmount])
                        ),
                        1
                      ),
                      t("div", ee, [
                        w(
                          U,
                          {
                            "stroke-width": 16,
                            color: "var(--norm_secondary-color)",
                            total: r.rechargeAmount,
                            numerical: r.canReceive ? r.rechargeAmount : 0,
                          },
                          null,
                          8,
                          ["total", "numerical"]
                        ),
                        t(
                          "div",
                          {
                            class: O(["btn", [d(r, f.isRule)]]),
                            onClick: (ue) => h(r),
                          },
                          l(v(r)),
                          11,
                          te
                        ),
                      ]),
                    ])
                  )
                ),
                128
              )),
              w(
                c,
                {
                  show: a.value,
                  "onUpdate:show": s[2] || (s[2] = (r) => (a.value = r)),
                  "show-confirm-button": !1,
                  className: "noOverHidden",
                },
                {
                  default: W(() => [
                    t("div", se, [
                      $(t("img", null, null, 512), [
                        [i, _(N)("public", "succeed")],
                      ]),
                      t("div", re, l(o.$t("awardsReceived")), 1),
                      t("div", ae, [
                        $(t("img", null, null, 512), [
                          [i, _(N)("wallet", "balance")],
                        ]),
                        t("span", null, l(_(A)(g.value)), 1),
                      ]),
                      t(
                        "div",
                        {
                          class: "dialog-btn",
                          onClick: s[0] || (s[0] = (r) => (a.value = !1)),
                        },
                        l(o.$t("confirm")),
                        1
                      ),
                      t(
                        "div",
                        {
                          class: "dialog-footer",
                          onClick: s[1] || (s[1] = (r) => (a.value = !1)),
                        },
                        [
                          $(t("img", null, null, 512), [
                            [i, _(J)("activity/DailyTask", "close")],
                          ]),
                        ]
                      ),
                    ]),
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
const ne = C(oe, [
    ["__scopeId", "data-v-48dabef8"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Activity/FirstRecharge/listItem.vue",
    ],
  ]),
  ie = { class: "first_list" },
  le = R({
    __name: "index",
    setup(f) {
      const { ActiveSotre: e, getFirstRechargeList: u } = z(),
        { t: a } = B(),
        g = V(),
        n = y(() => {
          var d;
          return (d = e.value.FirstRechargeList) != null && d.length
            ? e.value.FirstRechargeList.reduce((v, h) =>
                Math.max(v.rewardAmount || v, h.rewardAmount)
              )
            : "0";
        }),
        k = sessionStorage.getItem("fa1") || "1.00",
        S = y(() => [
          a("firstSave1", [A(n.value)]),
          a("firstSave2"),
          a("firstSave3"),
          a("firstSave4", [k]),
          a("firstSave5"),
          a("firstSave6"),
        ]),
        b = () => {
          g.push({ name: "Recharge" });
        };
      return (
        G(() => {
          u();
        }),
        (d, v) => {
          const h = L("NavBar");
          return (
            p(),
            m(
              x,
              null,
              [
                w(
                  h,
                  {
                    title: d.$t("firstSaveTitle"),
                    "left-arrow": "",
                    onClickLeft: v[0] || (v[0] = (o) => _(g).go(-1)),
                  },
                  null,
                  8,
                  ["title"]
                ),
                t("div", ie, [
                  w(
                    ne,
                    { list: _(e).FirstRechargeList, onGorecharge: b },
                    null,
                    8,
                    ["list"]
                  ),
                ]),
                w(
                  H,
                  { name: d.$t("firstSaveRule"), tiplist: S.value },
                  null,
                  8,
                  ["name", "tiplist"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  });
const ce = C(le, [
    ["__scopeId", "data-v-c0418dcc"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/activity/FirstRecharge/index.vue",
    ],
  ]),
  fe = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ce },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { ne as f, fe as i };
