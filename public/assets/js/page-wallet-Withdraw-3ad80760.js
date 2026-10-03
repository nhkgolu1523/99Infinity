import {
  G as te,
  z as we,
  aP as Ct,
  C as ve,
  I as d,
  J as e,
  O as $,
  ao as y,
  aB as R,
  P as t,
  F as ze,
  N as s,
  R as pe,
  r as g,
  A as me,
  H as P,
  Q as _,
  K as H,
  M as ke,
  ap as se,
  au as $e,
  B as L,
  ax as ne,
  ay as lt,
  aF as he,
  T as Ue,
  aw as Tt,
  aA as Re,
  av as X,
  u as x,
  aC as Se,
  aD as Ne,
  ar as dt,
  $ as Pe,
  E as ct,
  aW as ft,
  a0 as Ft,
  bB as Et,
  X as xt,
  az as yt,
  bE as Ht,
  q as gt,
} from "./common.modules-cecf9b0d.js";
import {
  cf as Ze,
  a4 as We,
  A as J,
  c4 as $t,
  g as ye,
  c as le,
  b as et,
  _ as ae,
  bv as Zt,
  bw as Gt,
  L as De,
  dw as Kt,
  cN as Qt,
  y as Fe,
  dx as Ae,
  a1 as St,
  dy as Yt,
  a5 as Nt,
  a3 as tt,
  G as Wt,
  dz as Xt,
  dA as Jt,
  cZ as ea,
  aa as Ee,
  ab as ta,
  h as Je,
  dB as Me,
  cF as Le,
  bj as Ce,
  dC as aa,
  c0 as ut,
  dD as at,
  dE as na,
  dF as sa,
  dG as oa,
  dH as la,
  dI as ia,
  dJ as ra,
  dK as da,
  dL as At,
  di as It,
  dM as ca,
  dN as ua,
  cV as va,
  dO as pa,
  cH as _a,
  dP as ma,
  bC as ha,
  dQ as wa,
} from "./page-activity-ActivityDetail-6713f46c.js";
import {
  P as fa,
  v as Bt,
  c as Ut,
} from "./page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js";
import { E as Qe } from "./page-activity-Bonus-c94a181e.js";
import { L as ya } from "./page-activity-DailySignIn-7bda4bcc.js";
import { D as it } from "./page-activity-Championship-c5772910.js";
import { N as ga } from "./page-wallet-Recharge-15722c11.js";
import {
  u as Oe,
  S as Ve,
} from "./page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js";
import { S as $a } from "./page-promotion-MyInvitation-87fe6c0d.js";
const ka = { class: "balanceAssets" },
  ba = { class: "balanceAssets__header" },
  Ca = { class: "balanceAssets__header__left" },
  Ta = ["src"],
  Sa = { class: "balanceAssets__main" },
  Na = ["src"],
  Wa = te({
    __name: "BalanceAssetsW",
    props: {
      data_NewSetWithdrawal: { type: null, required: !0 },
      withdrawalsrule: { type: null, required: !0 },
    },
    setup(k) {
      const n = k,
        { t: r } = we();
      Ze();
      const { setLoading: m } = We(),
        i = Ct(n, "withdrawalsrule");
      async function c() {
        m(!0);
        const u = await J($t());
        u && ((i.value.amount = u.data.amount), ze(r("refreshSuccess"))), m(!1);
      }
      return (
        ve(async () => {
          const u = await J($t());
          u && (i.value.amount = u.data.amount);
        }),
        (u, o) => (
          s(),
          d("div", ka, [
            e("div", ba, [
              e("div", Ca, [
                e("img", { src: $(ye)("wallet", "balance") }, null, 8, Ta),
                y(" 可用余额 "),
                R(" " + t(u.$t("vailableBalance")), 1),
              ]),
            ]),
            e("div", Sa, [
              e("p", null, t($(le)(i.value.amount)), 1),
              e(
                "img",
                {
                  src: $(et)("wallet/recharge", "refresh"),
                  alt: "",
                  onClick: c,
                },
                null,
                8,
                Na
              ),
            ]),
          ])
        )
      );
    },
  });
const Aa = ae(Wa, [
    ["__scopeId", "data-v-0879c174"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/BalanceAssetsW.vue",
    ],
  ]),
  Ia = { class: "rechargeh__container" },
  Ba = { class: "rechargeh__container-head" },
  Ua = { class: "rechargeh__container-content" },
  Da = { class: "rechargeh__container-content__item-header ar-1px-b" },
  Pa = { class: "rechargeh__container-content__item-body" },
  Ra = { class: "rechargeh__container-footer" },
  Ma = te({
    __name: "WithdrawHistory",
    setup(k, { expose: n }) {
      const r = pe(),
        { setLoading: m } = We(),
        i = g([]),
        c = me({
          pageNo: 1,
          pageSize: 5,
          startDate: "",
          endDate: "",
          state: -1,
          type: -1,
        });
      function u() {
        r.push({ name: "WithdrawHistory" });
      }
      async function o() {
        m(!0);
        const v = await J(Kt(c));
        v && (i.value = v.data.list), m(!1);
      }
      return (
        ve(async () => {
          await o();
        }),
        n({ getWithdrawLog: o }),
        (v, h) => {
          const a = P("svg-icon");
          return (
            s(),
            d("div", Ia, [
              e("div", Ba, [
                _(a, { name: "historyHead" }),
                e("h1", null, t(v.$t("whTitle5")), 1),
              ]),
              e("div", Ua, [
                i.value.length > 0
                  ? (s(!0),
                    d(
                      H,
                      { key: 0 },
                      ke(
                        i.value,
                        (p, l) => (
                          s(),
                          d(
                            "div",
                            {
                              class: "rechargeh__container-content__item",
                              key: l,
                            },
                            [
                              y(
                                ' <div class="rechargeh__container-content__item-header ar-1px-b" @click="onToDetail(item.state)"> '
                              ),
                              e("div", Da, [
                                e("span", null, t(v.$t("withdraw")), 1),
                                e(
                                  "span",
                                  {
                                    class: se({
                                      stateR: p.state === 0,
                                      stateG: p.state === 1,
                                    }),
                                  },
                                  [
                                    R(
                                      t($(Zt)($(Gt).WithdrawState, p.state)) +
                                        " ",
                                      1
                                    ),
                                    y(' <van-icon name="arrow" /> '),
                                  ],
                                  2
                                ),
                              ]),
                              e("div", Pa, [
                                e("div", null, [
                                  e("span", null, t(v.$t("amount")), 1),
                                  e("span", null, t($(le)(p.price)), 1),
                                ]),
                                e("div", null, [
                                  e("span", null, t(v.$t("type")), 1),
                                  e("span", null, t(p.withdrawName), 1),
                                ]),
                                e("div", null, [
                                  e("span", null, t(v.$t("time")), 1),
                                  e("span", null, t(p.addTime), 1),
                                ]),
                                e("div", null, [
                                  e("span", null, t(v.$t("orderNo")), 1),
                                  e("span", null, t(p.withdrawNumber), 1),
                                  _(
                                    a,
                                    {
                                      onClick: (b) =>
                                        $(De)(p.withdrawNumber.toString()),
                                      name: "copy",
                                    },
                                    null,
                                    8,
                                    ["onClick"]
                                  ),
                                ]),
                              ]),
                            ]
                          )
                        )
                      ),
                      128
                    ))
                  : (s(), $e(Qe, { key: 1 })),
              ]),
              e("div", Ra, [
                e("button", { onClick: u }, t(v.$t("allRecords")), 1),
              ]),
            ])
          );
        }
      );
    },
  });
const rt = ae(Ma, [
    ["__scopeId", "data-v-30972a14"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/WithdrawHistory.vue",
    ],
  ]),
  La = { class: "withdrawWay" },
  Oa = ["src"],
  Va = ["src"],
  qa = { key: 0, class: "gift" },
  ja = ["src"],
  za = ["src"],
  Fa = ["src"],
  Ea = ["src"],
  xa = ["onClick"],
  Ha = ["src"],
  Za = ["src"],
  Ga = te({
    __name: "withdrawalTypes",
    props: {
      data_NewSetWithdrawal: { type: null, required: !0 },
      withdrawalTypeslist: { type: Array, required: !0 },
      c2cAward: { type: Number, required: !0 },
      maxRechargeRifts: { type: Number, required: !0 },
      ArRechargeRifts: { type: Number, required: !0 },
    },
    emits: ["onSelectWithdrawalType"],
    setup(k, { emit: n }) {
      const r = k,
        m = L(() => r.withdrawalTypeslist.find((o) => o.withdrawID == 20)),
        i = L(() => r.withdrawalTypeslist.find((o) => o.withdrawID == 21)),
        c = L(() => r.withdrawalTypeslist.find((o) => o.withdrawID == 22));
      function u(o) {
        n("onSelectWithdrawalType", o);
      }
      return (o, v) => (
        s(),
        d("div", La, [
          m.value
            ? (s(),
              d(
                "div",
                {
                  key: 0,
                  class: se([
                    "c2c",
                    { active: o.data_NewSetWithdrawal.type == 20 },
                  ]),
                  onClick: v[0] || (v[0] = (h) => u({ withdrawID: 20 })),
                },
                [
                  o.data_NewSetWithdrawal.type != m.value.withdrawID
                    ? (s(),
                      d(
                        "img",
                        { key: 0, src: m.value.withBeforeImgUrl },
                        null,
                        8,
                        Oa
                      ))
                    : (s(),
                      d(
                        "img",
                        { key: 1, src: m.value.withAfterImgUrl },
                        null,
                        8,
                        Va
                      )),
                  e("div", null, [
                    e("div", null, t(m.value.name), 1),
                    o.c2cAward > 0
                      ? (s(),
                        d(
                          H,
                          { key: 0 },
                          [
                            R(
                              t(
                                o.$t("c2cEGReward", [
                                  o.c2cAward ? $(Qt)(o.c2cAward, 100) : 0,
                                ])
                              ),
                              1
                            ),
                          ],
                          64
                        ))
                      : y("v-if", !0),
                  ]),
                ],
                2
              ))
            : y("v-if", !0),
          i.value
            ? (s(),
              d(
                "div",
                {
                  key: 1,
                  class: se([
                    "c2c Ar",
                    { active: o.data_NewSetWithdrawal.type == 21 },
                  ]),
                  onClick: v[1] || (v[1] = (h) => u({ withdrawID: 21 })),
                },
                [
                  o.maxRechargeRifts > 0 || o.ArRechargeRifts > 0
                    ? (s(),
                      d("div", qa, [
                        e(
                          "span",
                          null,
                          t(
                            o.maxRechargeRifts > 0
                              ? `${o.maxRechargeRifts}%`
                              : ""
                          ) +
                            t(
                              o.ArRechargeRifts > 0
                                ? `+${o.ArRechargeRifts}%`
                                : ""
                            ),
                          1
                        ),
                      ]))
                    : y("v-if", !0),
                  o.data_NewSetWithdrawal.type != i.value.withdrawID
                    ? (s(),
                      d(
                        "img",
                        { key: 1, src: i.value.withBeforeImgUrl },
                        null,
                        8,
                        ja
                      ))
                    : (s(),
                      d(
                        "img",
                        { key: 2, src: i.value.withAfterImgUrl },
                        null,
                        8,
                        za
                      )),
                  e("div", null, [
                    e("div", null, t(i.value.name), 1),
                    e(
                      "p",
                      null,
                      t(i.value.withdrawTip || o.$t("withdrawTip5")),
                      1
                    ),
                  ]),
                ],
                2
              ))
            : y("v-if", !0),
          c.value
            ? (s(),
              d(
                "div",
                {
                  key: 2,
                  class: se([
                    "c2c Ar",
                    { active: o.data_NewSetWithdrawal.type == 22 },
                  ]),
                  onClick: v[2] || (v[2] = (h) => u({ withdrawID: 22 })),
                },
                [
                  o.data_NewSetWithdrawal.type != c.value.withdrawID
                    ? (s(),
                      d(
                        "img",
                        { key: 0, src: c.value.withBeforeImgUrl },
                        null,
                        8,
                        Fa
                      ))
                    : (s(),
                      d(
                        "img",
                        { key: 1, src: c.value.withAfterImgUrl },
                        null,
                        8,
                        Ea
                      )),
                  e("div", null, [e("div", null, t(c.value.name), 1)]),
                ],
                2
              ))
            : y("v-if", !0),
          (s(!0),
          d(
            H,
            null,
            ke(
              o.withdrawalTypeslist,
              (h) => (
                s(),
                d(
                  H,
                  { key: h.withdrawID },
                  [
                    [20, 21, 22].includes(h.withdrawID)
                      ? y("v-if", !0)
                      : (s(),
                        d(
                          "div",
                          {
                            key: 0,
                            class: se({
                              select:
                                o.data_NewSetWithdrawal.type == h.withdrawID,
                            }),
                            onClick: (a) => u(h),
                          },
                          [
                            e("div", null, [
                              o.data_NewSetWithdrawal.type != h.withdrawID
                                ? (s(),
                                  d(
                                    "img",
                                    { key: 0, src: h.withBeforeImgUrl },
                                    null,
                                    8,
                                    Ha
                                  ))
                                : (s(),
                                  d(
                                    "img",
                                    { key: 1, src: h.withAfterImgUrl },
                                    null,
                                    8,
                                    Za
                                  )),
                            ]),
                            e("span", null, t(h.name), 1),
                          ],
                          10,
                          xa
                        )),
                  ],
                  64
                )
              )
            ),
            128
          )),
        ])
      );
    },
  });
const Ka = ae(Ga, [
    ["__scopeId", "data-v-9bae072d"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/withdrawalTypes.vue",
    ],
  ]),
  Qa = { class: "explain" },
  Ya = { key: 0, class: "Withdraw__content-paymoney" },
  Xa = { class: "Withdraw__content-paymoney__title" },
  Ja = { class: "Withdraw__content-paymoney__money-list" },
  en = ["onClick"],
  tn = { class: "amount" },
  an = { class: "input" },
  nn = { class: "place-div" },
  sn = ["placeholder"],
  on = { key: 1, class: "verify" },
  ln = { class: "balance bank" },
  rn = { class: "yellow" },
  dn = ["value"],
  cn = { class: "rightD" },
  un = { class: "yellow" },
  vn = { class: "explain usdt" },
  pn = { class: "head" },
  _n = ["src"],
  mn = { key: 0 },
  hn = { key: 1 },
  wn = { class: "input" },
  fn = { class: "place-div" },
  yn = ["placeholder"],
  gn = { key: 0, class: "verify" },
  $n = { key: 1, class: "verify" },
  kn = { key: 2, class: "input" },
  bn = ["placeholder"],
  Cn = { class: "place-div" },
  Tn = { class: "place-icon" },
  Sn = ["src"],
  Nn = { class: "balance usdt" },
  Wn = { class: "yellow" },
  An = ["value"],
  In = te({
    __name: "withdrawField",
    props: {
      data_NewSetWithdrawal: { type: null, required: !0 },
      withdrawalsrule: { type: null, required: !0 },
      withdrawalslist: { type: Array, required: !0 },
    },
    setup(k, { expose: n }) {
      const r = k,
        { t: m } = we(),
        i = L(() => Fe().getDollarSign),
        c = g(0),
        u = L({
          get() {
            return c.value != 0 ? c.value : "";
          },
          set(S) {
            c.value = S;
          },
        }),
        o = Ct(r, "data_NewSetWithdrawal"),
        v = L({
          get() {
            return o.value.amount != 0 ? o.value.amount : "";
          },
          set(S) {
            o.value.amount = S;
          },
        }),
        { withdrawalTypeslist: h } = Ae(),
        a = L(() => {
          var G;
          const S = h.value.find((B) => B.withdrawID == 2);
          return S
            ? S.recommandWithAmount
              ? (G = S.recommandWithAmount) == null
                ? void 0
                : G.split(",").map((B) => Number(B))
              : []
            : [];
        }),
        p = g(null),
        l = (S) => {
          p.value = S;
          const G = a.value[S];
          v.value = G;
        },
        b = (S) =>
          S >= 1e6
            ? (S / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
            : S >= 1e3
            ? (S / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
            : S + "",
        f = L(
          () =>
            !!(
              o.value.amount != 0 &&
              (([2].includes(o.value.type) && o.value.amount % 100 !== 0) ||
                o.value.amount > r.withdrawalsrule.canWithdrawAmount ||
                o.value.amount > r.withdrawalsrule.maxPrice ||
                o.value.amount < r.withdrawalsrule.minPrice ||
                r.withdrawalsrule.amountofCode > 0)
            )
        ),
        U = L(() => {
          if (o.value.amount != 0) {
            if ([2].includes(o.value.type) && o.value.amount % 100 !== 0)
              return m("withdrawAmount");
            if (r.withdrawalsrule.amountofCode > 0) return m("code128");
            if (o.value.amount > r.withdrawalsrule.canWithdrawAmount)
              return m("cashBalanceInsufficient");
            if (
              o.value.amount > r.withdrawalsrule.maxPrice ||
              o.value.amount < r.withdrawalsrule.minPrice
            )
              return m("wordWithdrawal", [
                le(r.withdrawalsrule.minPrice),
                le(r.withdrawalsrule.maxPrice),
              ]);
          }
        }),
        D = L(
          () =>
            o.value.type === 3 &&
            o.value.amount != 0 &&
            Number(o.value.amount) < 10
        );
      function I(S) {
        S.keyCode != 46 &&
          (S.keyCode < 48 || S.keyCode > 57) &&
          (S.returnValue = !1);
      }
      function C(S) {
        (S.keyCode < 48 || S.keyCode > 57) && (S.returnValue = !1);
      }
      function A() {
        (o.value.amount = Number(
          o.value.amount
            .toString()
            .replace(/[^\d.]/g, "")
            .replace(/^\./g, "")
            .replace(/\.{2,}/g, ".")
            .replace(".", "$#$")
            .replace(/\./g, "")
            .replace("$#$", ".")
        )),
          o.value.amount.toString().length > 11 &&
            (o.value.amount = Number(o.value.amount.toString().slice(0, 11)));
      }
      function V() {
        (o.value.amount = Math.floor(r.withdrawalsrule.canWithdrawAmount)),
          o.value.type === 3 && T();
      }
      function w() {
        c.value = Math.floor(c.value);
      }
      function T() {
        if (
          ((o.value.amount = Number(
            o.value.amount
              .toString()
              .replace(/[^\d.]/g, "")
              .replace(/\.{2,}/g, ".")
              .replace(".", "$#$")
              .replace(/\./g, "")
              .replace("$#$", ".")
              .replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3")
              .replace(/^\./g, "")
          )),
          o.value.amount.toString().length > 11 &&
            (o.value.amount = Number(o.value.amount.toString().slice(0, 11))),
          o.value.amount > 0)
        ) {
          let S = Number(o.value.amount) / r.withdrawalsrule.uRate;
          c.value = Math.floor(S * 100) / 100;
        } else c.value = 0;
      }
      function F() {
        if (
          (c.value.toString().length > 11 &&
            (c.value = Number(c.value.toString().slice(0, 11))),
          c.value > 0)
        ) {
          let S = c.value * r.withdrawalsrule.uRate;
          o.value.amount = Math.floor(Math.floor(S * 100) / 100);
        } else o.value.amount = 0;
      }
      const Z = L(() => {
        if (!o.value.amount) return 0;
        const {
          withMinPrice: S = 0,
          withMaxPrice: G = 0,
          fee: B,
        } = r.withdrawalsrule;
        return B > 0 && S <= o.value.amount && o.value.amount <= G
          ? o.value.amount - o.value.amount * B
          : o.value.amount;
      });
      return (
        n({ usdtCount: c, data: o, showValidate: f, showValidateUB: D }),
        (S, G) => {
          const B = P("svg-icon");
          return (
            s(),
            d(
              H,
              null,
              [
                ne(
                  e(
                    "div",
                    Qa,
                    [
                      a.value.length > 0 &&
                      o.value.type === 2 &&
                      S.withdrawalslist.length > 0
                        ? (s(),
                          d("div", Ya, [
                            e("div", Xa, [
                              _(B, { name: "saveWallet" }),
                              e("p", null, t(S.$t("withdrawalA")), 1),
                            ]),
                            e("div", Ja, [
                              (s(!0),
                              d(
                                H,
                                null,
                                ke(
                                  a.value,
                                  (z, Q) => (
                                    s(),
                                    d(
                                      "div",
                                      {
                                        class: se([
                                          "Withdraw__content-paymoney__money-list__item",
                                          p.value === Q ? "active" : "",
                                        ]),
                                        key: Q,
                                        onClick: (M) => l(Q),
                                      },
                                      [e("div", tn, t(b(Number(z))), 1)],
                                      10,
                                      en
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]))
                        : y("v-if", !0),
                      e("div", an, [
                        e("div", nn, t(i.value), 1),
                        ne(
                          e(
                            "input",
                            {
                              placeholder: S.$t("enterAmount"),
                              onInput: G[0] || (G[0] = (z) => A()),
                              class: "inp",
                              "onUpdate:modelValue":
                                G[1] || (G[1] = (z) => (v.value = z)),
                              onKeypress: G[2] || (G[2] = (z) => I(z)),
                            },
                            null,
                            40,
                            sn
                          ),
                          [[he, v.value]]
                        ),
                      ]),
                      f.value
                        ? (s(), d("div", on, t(U.value), 1))
                        : y("v-if", !0),
                      e("div", ln, [
                        e("div", null, [
                          e("span", null, [
                            R(t(S.$t("wfDesc1")) + " ", 1),
                            e(
                              "h6",
                              rn,
                              t(
                                $(le)(S.withdrawalsrule.canWithdrawAmount || 0)
                              ),
                              1
                            ),
                          ]),
                          e(
                            "input",
                            { type: "button", value: S.$t("all"), onClick: V },
                            null,
                            8,
                            dn
                          ),
                        ]),
                        e("div", null, [
                          e("span", null, t(S.$t("wfDesc2")), 1),
                          e("div", cn, [e("span", un, t($(le)(Z.value)), 1)]),
                        ]),
                      ]),
                    ],
                    512
                  ),
                  [[lt, [1, 2, 6, 8, 5].includes(o.value.type)]]
                ),
                ne(
                  e(
                    "div",
                    vn,
                    [
                      e("div", pn, [
                        e(
                          "img",
                          {
                            src: $(ye)(
                              "wallet/withdrawType",
                              String(o.value.type)
                            ),
                          },
                          null,
                          8,
                          _n
                        ),
                        o.value.type == 3
                          ? (s(), d("h1", mn, t(S.$t("selectUSDTNum")), 1))
                          : y("v-if", !0),
                        o.value.type == 10
                          ? (s(), d("h1", hn, t(S.$t("selectUSDTAmount")), 1))
                          : y("v-if", !0),
                      ]),
                      e("div", wn, [
                        e("div", fn, t(i.value), 1),
                        ne(
                          e(
                            "input",
                            {
                              type: "number",
                              placeholder: S.$t("enterWithdrawAmount"),
                              onInput: T,
                              class: "inp",
                              "onUpdate:modelValue":
                                G[3] || (G[3] = (z) => (v.value = z)),
                              onKeypress: G[4] || (G[4] = (z) => C(z)),
                            },
                            null,
                            40,
                            yn
                          ),
                          [[he, v.value]]
                        ),
                      ]),
                      f.value
                        ? (s(), d("div", gn, t(U.value), 1))
                        : y("v-if", !0),
                      D.value
                        ? (s(), d("div", $n, t(S.$t("wfDesc4")), 1))
                        : y("v-if", !0),
                      [3].includes(o.value.type)
                        ? (s(),
                          d("div", kn, [
                            ne(
                              e(
                                "input",
                                {
                                  type: "number",
                                  placeholder: S.$t("enterUSDTAmount"),
                                  onInput: F,
                                  class: "inp",
                                  "onUpdate:modelValue":
                                    G[5] || (G[5] = (z) => (u.value = z)),
                                  onKeypress: G[6] || (G[6] = (z) => C(z)),
                                  onFocus: w,
                                },
                                null,
                                40,
                                bn
                              ),
                              [[he, u.value]]
                            ),
                            e("div", Cn, [
                              e("div", Tn, [
                                e(
                                  "img",
                                  { src: $(ye)("wallet/withdrawType", "3") },
                                  null,
                                  8,
                                  Sn
                                ),
                              ]),
                            ]),
                          ]))
                        : y("v-if", !0),
                      e("div", Nn, [
                        e("div", null, [
                          e("span", null, [
                            R(t(S.$t("wfDesc5")) + " ", 1),
                            e(
                              "h6",
                              Wn,
                              t(
                                $(le)(S.withdrawalsrule.canWithdrawAmount || 0)
                              ),
                              1
                            ),
                          ]),
                          e(
                            "input",
                            { type: "button", value: S.$t("all"), onClick: V },
                            null,
                            8,
                            An
                          ),
                        ]),
                      ]),
                    ],
                    512
                  ),
                  [[lt, [3, 10].includes(o.value.type)]]
                ),
              ],
              64
            )
          );
        }
      );
    },
  });
const Bn = ae(In, [
    ["__scopeId", "data-v-cb5583fe"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/withdrawField.vue",
    ],
  ]),
  Un = { key: 0, class: "addWithdrawType" },
  Dn = ["src"],
  Pn = { key: 0, class: "addWithdrawType-text" },
  Rn = te({
    __name: "AddWithdrawType",
    props: {
      isShowhintTextO: { type: Boolean, required: !1, default: !1 },
      hintTextO: { type: String, required: !1, default: "" },
      type: { type: null, required: !1, default: "" },
    },
    setup(k) {
      const n = k,
        r = pe(),
        m = Ue(),
        { t: i } = we(),
        c = Ze(),
        u = i("addAddr");
      let o = i("paymentMethodRequired");
      const { getSelfCustomerServiceLink: v } = St({ ServerType: 2 }),
        h = L(() => !([3, 10].includes(n.type) && c.getADDUSTD == 0)),
        a = () => {
          v("addUSTD");
        };
      function p() {
        const b = {
          1: "Withdraw-AddBankCard",
          2: "Withdraw-AddUpi",
          3: "Withdraw-AddUSDT",
          4: "Withdraw-AddType4",
          5: "Withdraw-AddPIX",
          6: "Withdraw-AddWave",
          8: "Withdraw-AddKbz",
          10: "Withdraw-AddUSDT",
        };
        r.replace({ name: b[n.type], query: { fromV: m.name } });
      }
      const l = L(
        () =>
          ({
            1: i("titleAddBankCard"),
            2: i("addUpi"),
            3: i("addAddr"),
            4: i("addWallet"),
            5: i("upiAddPaymentMethod"),
            6: i("addWaveType"),
            8: i("upiAddPaymentMethod"),
            10: i("addAddr"),
          }[n.type])
      );
      return (b, f) => {
        const U = P("svg-icon");
        return h.value
          ? (s(),
            d("div", Un, [
              e("div", { class: "addWithdrawType-top", onClick: p }, [
                e("img", { src: $(et)("wallet/withdraw", "add") }, null, 8, Dn),
                e("span", null, t(l.value || $(u)), 1),
              ]),
              b.isShowhintTextO
                ? (s(), d("div", Pn, t(b.hintTextO || $(o)), 1))
                : y("v-if", !0),
            ]))
          : (s(),
            d("div", { key: 1, class: "canNotAdd", onClick: a }, [
              _(U, { name: "customer_b", class: "forgetbg" }),
              R(" " + t(b.$t("contactServicer") + b.$t("titleAddUSDTAddr")), 1),
            ]));
      };
    },
  });
const nt = ae(Rn, [
    ["__scopeId", "data-v-ef5c8333"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/AddWithdrawType.vue",
    ],
  ]),
  Mn = { class: "Recharge__container-intro" },
  Ln = { class: "br" },
  On = ["innerHTML"],
  Vn = { class: "red" },
  qn = { class: "red" },
  jn = { class: "red" },
  zn = { key: 0 },
  Fn = ["innerHTML"],
  En = { key: 0 },
  xn = ["innerHTML"],
  Hn = ["innerHTML"],
  Zn = ["innerHTML"],
  Gn = ["innerHTML"],
  Kn = ["innerHTML"],
  Qn = ["innerHTML"],
  Yn = te({
    __name: "InstructionsW",
    props: {
      withdrawalsrule: { type: null, required: !0 },
      withdrawType: { type: null, required: !1 },
      award: { type: null, required: !1 },
      name: { type: null, required: !1 },
    },
    setup(k) {
      return (n, r) => {
        var m, i, c, u, o, v, h, a, p, l, b, f;
        return (
          s(),
          d("div", Mn, [
            e("div", Ln, [
              n.withdrawType == 21
                ? (s(),
                  d(
                    H,
                    { key: 0 },
                    [
                      e("p", null, t(n.$t("arWTip1", [n.name])), 1),
                      e("p", null, t(n.$t("arWTip2", [n.name])), 1),
                    ],
                    64
                  ))
                : y("v-if", !0),
              [1, 2, 3, 4, 5, 6, 8, 10, 20, 21].includes(n.withdrawType)
                ? (s(),
                  d(
                    H,
                    { key: 1 },
                    [
                      e(
                        "p",
                        {
                          innerHTML: n.$t("instructionDes", [
                            $(le)(
                              (m = n.withdrawalsrule) == null
                                ? void 0
                                : m.amountofCode
                            ),
                          ]),
                        },
                        null,
                        8,
                        On
                      ),
                      e("p", null, [
                        R(t(n.$t("instructionTxt6")) + " ", 1),
                        e(
                          "span",
                          Vn,
                          t(
                            (i = n.withdrawalsrule) == null
                              ? void 0
                              : i.startTime
                          ) +
                            "-" +
                            t(
                              (c = n.withdrawalsrule) == null
                                ? void 0
                                : c.endTime
                            ),
                          1
                        ),
                      ]),
                      e("p", null, [
                        R(t(n.$t("instructionTxt7")), 1),
                        e(
                          "span",
                          qn,
                          t(
                            (u = n.withdrawalsrule) == null
                              ? void 0
                              : u.withdrawRemainingCount
                          ),
                          1
                        ),
                      ]),
                      e("p", null, [
                        R(t(n.$t("instructionTxt8")) + " ", 1),
                        e(
                          "span",
                          jn,
                          t(
                            $(le)(
                              (o = n.withdrawalsrule) == null
                                ? void 0
                                : o.minPrice
                            )
                          ) +
                            "-" +
                            t(
                              $(le)(
                                (v = n.withdrawalsrule) == null
                                  ? void 0
                                  : v.maxPrice
                              )
                            ),
                          1
                        ),
                      ]),
                    ],
                    64
                  ))
                : y("v-if", !0),
              [3, 10].includes(n.withdrawType)
                ? (s(),
                  d(
                    H,
                    { key: 2 },
                    [
                      e("p", null, t(n.$t("instructionTxt10")), 1),
                      e("p", null, t(n.$t("instructionTxt11")), 1),
                    ],
                    64
                  ))
                : y("v-if", !0),
              n.withdrawType == 4
                ? (s(),
                  d(
                    H,
                    { key: 3 },
                    [
                      Number(n.award)
                        ? (s(),
                          d("div", zn, [
                            e(
                              "p",
                              {
                                innerHTML: n.$t("c2cFTip1", [
                                  n.name,
                                  n.award * 100 || 0,
                                ]),
                              },
                              null,
                              8,
                              Fn
                            ),
                          ]))
                        : y("v-if", !0),
                    ],
                    64
                  ))
                : y("v-if", !0),
              n.withdrawType == 20
                ? (s(),
                  d(
                    H,
                    { key: 4 },
                    [
                      Number(n.award)
                        ? (s(),
                          d("div", En, [
                            e(
                              "p",
                              {
                                innerHTML: n.$t("c2cFTip1", [
                                  n.name,
                                  n.award * 100 || 0,
                                ]),
                              },
                              null,
                              8,
                              xn
                            ),
                          ]))
                        : y("v-if", !0),
                      e("div", null, [
                        e("p", { innerHTML: n.$t("c2cFTip4") }, null, 8, Hn),
                      ]),
                      e("div", null, [
                        e(
                          "p",
                          {
                            innerHTML: n.$t("c2cFTip2", [
                              ((h = n.withdrawalsrule) == null
                                ? void 0
                                : h.c2cUnitAmount) || 100,
                            ]),
                          },
                          null,
                          8,
                          Zn
                        ),
                      ]),
                      e("div", null, [
                        e("p", { innerHTML: n.$t("c2cFTip3") }, null, 8, Gn),
                      ]),
                    ],
                    64
                  ))
                : y("v-if", !0),
              n.withdrawType != 21
                ? (s(),
                  d(
                    H,
                    { key: 5 },
                    [
                      (a = n.withdrawalsrule) != null && a.fee
                        ? (s(),
                          d(
                            H,
                            { key: 0 },
                            [
                              ((p = n.withdrawalsrule) == null
                                ? void 0
                                : p.withMinPrice) +
                              ((l = n.withdrawalsrule) == null
                                ? void 0
                                : l.withMaxPrice)
                                ? (s(),
                                  d(
                                    "p",
                                    {
                                      key: 0,
                                      innerHTML: n.$t("sxf", [
                                        $(le)(
                                          (b = n.withdrawalsrule) == null
                                            ? void 0
                                            : b.withMinPrice
                                        ),
                                        $(le)(
                                          (f = n.withdrawalsrule) == null
                                            ? void 0
                                            : f.withMaxPrice
                                        ),
                                      ]),
                                    },
                                    null,
                                    8,
                                    Kn
                                  ))
                                : y("v-if", !0),
                              e(
                                "p",
                                {
                                  innerHTML: n.$t("sxf1", [
                                    Math.floor(
                                      (n.withdrawalsrule.fee * 1e4) / 100
                                    ).toFixed(2),
                                  ]),
                                },
                                null,
                                8,
                                Qn
                              ),
                            ],
                            64
                          ))
                        : y("v-if", !0),
                      e("p", null, t(n.$t("withdrwsTip5")), 1),
                      e("p", null, t(n.$t("withdrwsTip6")), 1),
                    ],
                    64
                  ))
                : y("v-if", !0),
            ]),
          ])
        );
      };
    },
  });
const st = ae(Yn, [
    ["__scopeId", "data-v-76eb7f31"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/InstructionsW.vue",
    ],
  ]),
  qe = (k) => (Se("data-v-391308ac"), (k = k()), Ne(), k),
  Xn = { class: "c2cConfirm" },
  Jn = qe(() =>
    e(
      "p",
      null,
      [R("*You must click "), e("span", null, "【Confirm Receipt】")],
      -1
    )
  ),
  es = qe(() =>
    e(
      "p",
      null,
      "*After receiving the transfer, go to order details and click 【Confirm Receipt】to receive the reward.",
      -1
    )
  ),
  ts = qe(() =>
    e("h6", null, [R("How to "), e("span", null, "【Confirm Receipt】")], -1)
  ),
  as = { class: "imgBox" },
  ns = { class: "box" },
  ss = qe(() =>
    e("div", null, [e("h6", null, "01、"), R("Open my withdrawal record")], -1)
  ),
  os = { class: "box" },
  ls = qe(() => e("div", null, "02、Select New-UPI Click Order", -1)),
  is = { class: "box" },
  rs = qe(() => e("div", null, "03、Click to Money received", -1)),
  ds = { class: "box" },
  cs = qe(() => e("div", null, "04、Complete the order and get rewards", -1)),
  us = qe(() => e("span", null, "[Money received]", -1)),
  vs = te({
    __name: "c2cConfirm",
    props: { showC2c: { type: Boolean, default: !1, required: !0 } },
    emits: ["update:showC2c"],
    setup(k, { emit: n }) {
      const r = k,
        { showC2c: m } = Tt(r, n),
        i = g(!1);
      function c() {
        if (!i.value)
          return x({
            message: "Please read the process and check the box to agree",
            wordBreak: "break-word",
          });
        localStorage.setItem("isC2cCheck", "1"), (m.value = !1);
      }
      return (
        ve(() => {
          localStorage.getItem("isC2cCheck") != null &&
            (i.value = localStorage.getItem("isC2cCheck") == "1");
        }),
        (u, o) => {
          const v = P("van-checkbox"),
            h = Re("lazy");
          return (
            s(),
            d("div", Xn, [
              Jn,
              es,
              ts,
              e("div", as, [
                e("div", ns, [
                  ss,
                  ne(e("img", null, null, 512), [
                    [h, $(ye)("wallet/withdraw/c2c", "1")],
                  ]),
                ]),
                e("div", os, [
                  ls,
                  ne(e("img", null, null, 512), [
                    [h, $(ye)("wallet/withdraw/c2c", "2")],
                  ]),
                ]),
                e("div", is, [
                  rs,
                  ne(e("img", null, null, 512), [
                    [h, $(ye)("wallet/withdraw/c2c", "3")],
                  ]),
                ]),
                e("div", ds, [
                  cs,
                  ne(e("img", null, null, 512), [
                    [h, $(ye)("wallet/withdraw/c2c", "4")],
                  ]),
                ]),
              ]),
              _(
                v,
                {
                  modelValue: i.value,
                  "onUpdate:modelValue": o[0] || (o[0] = (a) => (i.value = a)),
                },
                {
                  default: X(() => [
                    R(
                      "I already understand the process and agree to come back and click "
                    ),
                    us,
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
              e(
                "div",
                { class: se(["btn", { active: i.value }]), onClick: c },
                "confirm",
                2
              ),
            ])
          );
        }
      );
    },
  });
const ps = ae(vs, [
    ["__scopeId", "data-v-391308ac"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/c2cConfirm.vue",
    ],
  ]),
  _s = { class: "c2cWithdraw__C" },
  ms = { class: "c2cWithdraw__C-input" },
  hs = { class: "place-div" },
  ws = { class: "unit" },
  fs = { key: 0, class: "verify" },
  ys = { class: "can-withdraw" },
  gs = { class: "c2cWithdraw__C-tip" },
  $s = { class: "c2cWithdraw__C-tip-l" },
  ks = { class: "c2cWithdraw__C-tip-r" },
  bs = { class: "c2cWithdraw__T" },
  Cs = { class: "c2cWithdraw__T-h" },
  Ts = 20,
  Ss = te({
    __name: "c2cField",
    props: {
      c2crule: { type: null, required: !0 },
      c2cAward: { type: null, required: !0 },
      c2cName: { type: String, required: !0 },
    },
    emits: ["setc2cAmount"],
    setup(k, { emit: n }) {
      const r = k,
        { t: m } = we(),
        i = g(0),
        c = L(() => Fe().getDollarSign),
        u = L(() =>
          Number(i.value)
            ? Number(i.value) * (r.c2crule.c2cUnitAmount || 100)
            : 0
        ),
        o = L(() => u.value * r.c2cAward),
        v = () => {
          const p = Math.floor(r.c2crule.canWithdrawAmount / 100),
            l = Math.floor(r.c2crule.maxPrice / 100);
          i.value = p > l ? l : p;
        },
        h = (p) => {
          n("setc2cAmount", p * (r.c2crule.c2cUnitAmount || 100));
        },
        a = L(() => {
          if (u.value != 0) {
            if (u.value > r.c2crule.canWithdrawAmount)
              return m("cashBalanceInsufficient");
            if (u.value > r.c2crule.maxPrice || u.value < r.c2crule.minPrice)
              return m("wordWithdrawal", [
                le(r.c2crule.minPrice),
                le(r.c2crule.maxPrice),
              ]);
          }
          return "";
        });
      return (
        ve(() => {}),
        (p, l) => {
          var U;
          const b = P("van-field"),
            f = P("svg-icon");
          return (
            s(),
            d(
              H,
              null,
              [
                e("div", _s, [
                  e("div", ms, [
                    e("div", hs, t(c.value), 1),
                    _(
                      b,
                      {
                        modelValue: i.value,
                        "onUpdate:modelValue": [
                          l[0] || (l[0] = (D) => (i.value = D)),
                          h,
                        ],
                        modelModifiers: { number: !0 },
                        type: "digit",
                        placeholder: p.$t("plsEnterQuantity"),
                        class: "amount-input",
                      },
                      null,
                      8,
                      ["modelValue", "placeholder"]
                    ),
                    e(
                      "div",
                      ws,
                      t(
                        ((U = p.c2crule.c2cUnitAmount) == null
                          ? void 0
                          : U.toString().substring(1)) || "00"
                      ),
                      1
                    ),
                  ]),
                  a.value ? (s(), d("div", fs, t(a.value), 1)) : y("v-if", !0),
                  e("div", ys, [
                    R(
                      t(p.$t("wfDesc1")) +
                        " " +
                        t($(le)(p.c2crule.canWithdrawAmount || 0)) +
                        " ",
                      1
                    ),
                    e("div", { onClick: v }, t(p.$t("all")), 1),
                  ]),
                  e("div", gs, [
                    e("div", $s, [
                      e("div", null, t(p.$t("wfDesc2")), 1),
                      e("div", null, t(p.$t("savedForYou")), 1),
                    ]),
                    e("div", ks, [
                      e("div", null, t($(le)(u.value)), 1),
                      e("div", null, t($(le)(o.value)), 1),
                    ]),
                  ]),
                  dt(p.$slots, "default", {}, void 0, !0),
                ]),
                e("div", bs, [
                  e("div", Cs, [
                    _(f, { name: "shuoming" }),
                    R(" " + t(p.$t("withdrawalInstructions")), 1),
                  ]),
                  _(
                    st,
                    {
                      withdrawType: Ts,
                      withdrawalsrule: p.c2crule,
                      award: p.c2cAward,
                      name: p.c2cName,
                    },
                    null,
                    8,
                    ["withdrawalsrule", "award", "name"]
                  ),
                ]),
              ],
              64
            )
          );
        }
      );
    },
  });
const Ns = ae(Ss, [
    ["__scopeId", "data-v-472a2df8"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/c2cField.vue",
    ],
  ]),
  Ws = { class: "title" },
  As = { class: "name" },
  Is = te({
    __name: "c2cUpi",
    props: {
      withdrawalslist: { type: Array, default: () => [] },
      bid: { default: -0 },
    },
    setup(k) {
      const n = k,
        r = Ue(),
        m = pe(),
        i = L(() => n.withdrawalslist.find((u) => u.bid == n.bid) || {}),
        c = (u) => {
          m.replace({ name: "Withdraw-Upi", query: { bid: u, fromV: r.name } });
        };
      return (
        ve(() => {}),
        (u, o) => {
          const v = P("van-icon");
          return (
            s(),
            d(
              "div",
              {
                class: se(["c2cUpi", { noUpi: !k.withdrawalslist.length }]),
                onClick: o[0] || (o[0] = (h) => c(i.value.bid)),
              },
              [
                k.withdrawalslist.length
                  ? (s(),
                    d(
                      H,
                      { key: 0 },
                      [
                        e("div", Ws, t(u.$t("upiCollectMoney")), 1),
                        e("div", As, t(i.value.upiAccount), 1),
                        _(v, {
                          name: "arrow",
                          class: "right-icon",
                          size: "12",
                        }),
                      ],
                      64
                    ))
                  : (s(), d(H, { key: 1 }, [R(t(u.$t("addUpi")), 1)], 64)),
              ],
              2
            )
          );
        }
      );
    },
  });
const kt = ae(Is, [
    ["__scopeId", "data-v-fe54ed07"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/c2cUpi.vue",
    ],
  ]),
  Bs = (k) => (Se("data-v-15989e8c"), (k = k()), Ne(), k),
  Us = ["onClick"],
  Ds = { class: "c2cRecord__C-item-h" },
  Ps = { class: "title" },
  Rs = { key: 0 },
  Ms = { key: 1 },
  Ls = { class: "c2cRecord__C-item-a" },
  Os = { class: "title" },
  Vs = { class: "c2cRecord__C-item-u" },
  qs = Bs(() => e("span", { class: "title" }, "UTR", -1)),
  js = { class: "c2cRecord__C-item-t" },
  zs = { class: "title" },
  Fs = { class: "c2cRecord__C-item-id" },
  Es = { class: "title" },
  xs = te({
    __name: "c2cRecordList",
    props: { list: { type: Array, required: !0 } },
    setup(k) {
      const n = k,
        { t: r } = we(),
        m = pe(),
        i = [
          r("c2cState0"),
          r("c2cState1"),
          r("c2cState2"),
          r("c2cState3"),
          r("c2cState4"),
          r("c2cTip9"),
          r("c2cState6"),
          r("c2cState7"),
          r("c2cState8"),
          r("c2cState9"),
          r("c2cState10"),
          r("c2cState11"),
          r("c2cState11"),
          r("c2cState13"),
          r("c2cState14"),
        ],
        c = g(null),
        u = g(0),
        o = g("00:00"),
        v = g("00:00"),
        h = g(null),
        a = g(null),
        p = (U, D) => {
          localStorage.setItem("c2cOrderNo", U),
            m.push({
              name: "Withdraw-C2cDetail",
              query: { order: U, state: D },
            });
        };
      Pe(
        () => n.list,
        (U) => {
          if (((c.value = U.findIndex((I) => I.state === 1)), c.value != -1)) {
            const I = U[c.value].serviceTime.replace(/-/g, "/"),
              C = U[c.value].confrimEndTime.replace(/-/g, "/");
            (u.value = new Date(C).getTime() - new Date(I).getTime()),
              u.value > 0 ? (clearInterval(h.value), b()) : (o.value = "00:00");
          } else o.value = "00:00";
          let D = U.find((I) => I.state === 11 || I.state === 12);
          if (D) {
            const I = D.auditEndTime.replace(/-/g, "/"),
              C = D.serviceTime.replace(/-/g, "/");
            (u.value = new Date(C).getTime() - new Date(I).getTime()),
              clearInterval(a.value),
              f();
          } else v.value = "00:00";
        }
      );
      const l = (U) => {
        const D = Math.floor(U / 36e5),
          I = Math.floor((U - D * 36e5) / 6e4),
          C = Math.floor((U - D * 36e5 - I * 6e4) / 1e3);
        return `${
          D ? D.toString().padStart(2, "0") + ":" : ""
        }${I.toString().padStart(2, "0")}:${C.toString().padStart(2, "0")}`;
      };
      function b() {
        h.value = setInterval(() => {
          (u.value -= 1e3),
            (o.value = l(u.value)),
            u.value <= 0 && clearInterval(h.value);
        }, 1e3);
      }
      function f() {
        a.value = setInterval(() => {
          (u.value += 1e3), (v.value = l(u.value));
        }, 1e3);
      }
      return (
        ct(() => {
          clearInterval(h.value), clearInterval(a.value);
        }),
        (U, D) => {
          const I = P("van-icon"),
            C = P("svg-icon");
          return (
            s(!0),
            d(
              H,
              null,
              ke(
                U.list,
                (A, V) => (
                  s(),
                  d(
                    "div",
                    {
                      key: V,
                      class: "c2cRecord__C-item",
                      onClick: (w) => p(A.orderNo, A.state),
                    },
                    [
                      e("div", Ds, [
                        e("div", Ps, t(U.$t("withdraw")), 1),
                        e(
                          "div",
                          { class: se(["state" + A.state]) },
                          [
                            R(t(i[A.state]) + " ", 1),
                            A.state === 1
                              ? (s(), d("span", Rs, t(o.value), 1))
                              : y("v-if", !0),
                            [11, 12].includes(A.state)
                              ? (s(), d("span", Ms, ": " + t(v.value), 1))
                              : y("v-if", !0),
                            A.state != 2
                              ? (s(),
                                $e(I, { key: 2, name: "arrow", size: "14" }))
                              : y("v-if", !0),
                          ],
                          2
                        ),
                      ]),
                      e("div", Ls, [
                        e("span", Os, t(U.$t("amount")), 1),
                        R(" " + t($(le)(A.orderAmount)), 1),
                      ]),
                      e("div", Vs, [
                        qs,
                        e("span", null, [
                          R(t(A.transactionNo), 1),
                          _(
                            C,
                            {
                              name: "copy",
                              onClick: ft(
                                (w) => $(De)(A.transactionNo),
                                ["stop"]
                              ),
                            },
                            null,
                            8,
                            ["onClick"]
                          ),
                        ]),
                      ]),
                      e("div", js, [
                        e("span", zs, t(U.$t("time")), 1),
                        R(t(A.createTime), 1),
                      ]),
                      e("div", Fs, [
                        e("span", Es, t(U.$t("orderNo")), 1),
                        e("span", null, [
                          R(t(A.orderNo), 1),
                          _(
                            C,
                            {
                              name: "copy",
                              onClick: ft((w) => $(De)(A.orderNo), ["stop"]),
                            },
                            null,
                            8,
                            ["onClick"]
                          ),
                        ]),
                      ]),
                    ],
                    8,
                    Us
                  )
                )
              ),
              128
            )
          );
        }
      );
    },
  });
const Hs = ae(xs, [
    ["__scopeId", "data-v-15989e8c"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/c2cRecordList.vue",
    ],
  ]),
  Zs = { class: "c2cRecord__C" },
  Gs = { class: "c2cRecord__C-head" },
  Ks = { class: "c2cRecord__C-body" },
  Qs = te({
    __name: "c2cRecord",
    setup(k, { expose: n }) {
      const r = pe(),
        m = g(),
        i = g({
          startDate: "",
          endDate: "",
          type: -1,
          state: -1,
          category: -1,
        }),
        c = g([]),
        u = () => {
          r.push({ name: "WithdrawHistory" });
        };
      return (
        n({
          resetRefresh: () => {
            m.value.resetRefresh();
          },
        }),
        (v, h) => (
          s(),
          d("div", Zs, [
            e("div", Gs, t(v.$t("c2CWithdrawalRecord")), 1),
            e("div", Ks, [
              _(
                ya,
                {
                  list: c.value,
                  "onUpdate:list": h[0] || (h[0] = (a) => (c.value = a)),
                  "page-query": i.value,
                  "onUpdate:pageQuery": h[1] || (h[1] = (a) => (i.value = a)),
                  api: $(Yt),
                  distance: 100,
                  ref_key: "listRef",
                  ref: m,
                  "is-auto-load": !0,
                  showNoM: !1,
                },
                {
                  content: X(() => [
                    _(Hs, { list: c.value }, null, 8, ["list"]),
                  ]),
                  _: 1,
                },
                8,
                ["list", "page-query", "api"]
              ),
            ]),
            e(
              "div",
              { class: "c2cRecord__C-allrecord", onClick: u },
              t(v.$t("allRecords")),
              1
            ),
          ])
        )
      );
    },
  });
const Ys = ae(Qs, [
    ["__scopeId", "data-v-824a4891"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/c2cRecord.vue",
    ],
  ]),
  Xs = { class: "WC4__C" },
  Js = { class: "WC4__C-input" },
  eo = { class: "place-div" },
  to = { key: 0, class: "verify" },
  ao = { class: "can-withdraw" },
  no = { class: "amount" },
  so = { class: "num" },
  oo = 4,
  lo = te({
    __name: "wC4Field",
    props: {
      rule: { type: null, required: !0 },
      award: { type: null, required: !0 },
      name: { type: String, required: !0 },
      wtype: { type: Number, required: !0 },
    },
    emits: ["setc2cAmount"],
    setup(k, { emit: n }) {
      const r = k,
        { t: m } = we(),
        i = g(0),
        c = L(() => Fe().getDollarSign);
      Pe(
        () => r.wtype,
        (a) => {
          i.value = 0;
        }
      );
      const u = L(() => {
          if (!i.value) return 0;
          const { withMinPrice: a = 0, withMaxPrice: p = 0, fee: l } = r.rule;
          return l > 0 && a <= i.value && i.value <= p
            ? i.value - i.value * l
            : i.value;
        }),
        o = () => {
          const a = r.rule.canWithdrawAmount,
            p = r.rule.maxPrice;
          i.value = a > p ? p : a;
        },
        v = (a) => {
          n("setc2cAmount", a);
        },
        h = L(() => {
          if (i.value != 0) {
            if (i.value > r.rule.canWithdrawAmount)
              return m("cashBalanceInsufficient");
            if (i.value > r.rule.maxPrice || i.value < r.rule.minPrice)
              return m("wordWithdrawal", [
                le(r.rule.minPrice),
                le(r.rule.maxPrice),
              ]);
          }
          return "";
        });
      return (
        ve(() => {}),
        (a, p) => {
          const l = P("van-field");
          return (
            s(),
            d("div", Xs, [
              e("div", Js, [
                e("div", eo, t(c.value), 1),
                _(
                  l,
                  {
                    modelValue: i.value,
                    "onUpdate:modelValue": [
                      p[0] || (p[0] = (b) => (i.value = b)),
                      v,
                    ],
                    modelModifiers: { number: !0 },
                    type: "digit",
                    placeholder: a.$t("plsEnterQuantity"),
                    class: "amount-input",
                  },
                  null,
                  8,
                  ["modelValue", "placeholder"]
                ),
              ]),
              h.value ? (s(), d("div", to, t(h.value), 1)) : y("v-if", !0),
              e("div", ao, [
                R(
                  t(a.$t("wfDesc1")) +
                    " " +
                    t($(le)(a.rule.canWithdrawAmount || 0)) +
                    " ",
                  1
                ),
                e("div", { onClick: o }, t(a.$t("all")), 1),
              ]),
              e("div", no, [
                e("div", null, t(a.$t("wfDesc2")), 1),
                e("div", so, t($(le)(u.value)), 1),
              ]),
              dt(a.$slots, "default", {}, void 0, !0),
              _(
                st,
                {
                  withdrawType: oo,
                  withdrawalsrule: a.rule,
                  award: a.award,
                  name: a.name,
                },
                null,
                8,
                ["withdrawalsrule", "award", "name"]
              ),
            ])
          );
        }
      );
    },
  });
const io = ae(lo, [
    ["__scopeId", "data-v-81d3a4d3"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/wC4Field.vue",
    ],
  ]),
  ro = { class: "name" },
  co = { class: "title" },
  uo = { class: "name" },
  vo = te({
    __name: "wC4Id",
    props: {
      withdrawalslist: { type: Array, default: () => [] },
      bid: { default: -0 },
      withdrawType: { default: 4 },
      name: { default: "" },
    },
    setup(k) {
      const n = k,
        r = Ue(),
        m = pe(),
        i = L(() => n.withdrawalslist.find((o) => o.bid == n.bid) || {}),
        c = L(() => (n.withdrawalslist.length > 0 ? n.withdrawalslist[0] : {})),
        u = (o) => {
          if (n.withdrawType === 22)
            n.bid ||
              m.replace({
                name: "Withdraw-AddRsnPay",
                query: { Type4name: n.name },
              });
          else {
            if ([23, 24].includes(n.withdrawType) && n.withdrawalslist.length)
              return;
            m.replace({
              name: "Withdraw-Type4",
              query: {
                bid: o,
                fromV: r.name,
                Type4name: n.name,
                withdrawType: n.withdrawType,
              },
            });
          }
        };
      return (
        ve(() => {}),
        (o, v) => {
          const h = P("van-icon");
          return [4, 23, 24].includes(k.withdrawType)
            ? (s(),
              d(
                "div",
                {
                  key: 0,
                  class: se(["wC4Id", { noUpi: !k.withdrawalslist.length }]),
                  onClick: v[0] || (v[0] = (a) => u(i.value.bid)),
                },
                [
                  k.withdrawalslist.length
                    ? (s(),
                      d(
                        H,
                        { key: 0 },
                        [
                          e(
                            "div",
                            { class: se(["title", `${i.value.walletName}`]) },
                            t(i.value.walletName),
                            3
                          ),
                          e("div", ro, t(i.value.mobileNO), 1),
                          _(h, {
                            name: "arrow",
                            class: "right-icon",
                            size: "12",
                          }),
                        ],
                        64
                      ))
                    : (s(), d(H, { key: 1 }, [R(t(o.$t("addto")), 1)], 64)),
                ],
                2
              ))
            : (s(),
              d(
                "div",
                {
                  key: 1,
                  class: se([
                    "wC4Id rnsData",
                    { noUpi: !k.withdrawalslist.length },
                  ]),
                  onClick: v[1] || (v[1] = (a) => u(c.value.bid)),
                },
                [
                  k.withdrawalslist.length
                    ? (s(),
                      d(
                        H,
                        { key: 0 },
                        [
                          e("div", co, t(c.value.bankName), 1),
                          e("div", uo, t(c.value.mobileNo), 1),
                        ],
                        64
                      ))
                    : (s(), d(H, { key: 1 }, [R(t(o.$t("addto")), 1)], 64)),
                ],
                2
              ));
        }
      );
    },
  });
const po = ae(vo, [
    ["__scopeId", "data-v-8fab5987"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/wC4Id.vue",
    ],
  ]),
  _o = (k) => (Se("data-v-b6d0c70a"), (k = k()), Ne(), k),
  mo = { class: "arCard" },
  ho = { class: "left" },
  wo = ["src"],
  fo = { key: 0, class: "tip" },
  yo = { class: "tit" },
  go = { class: "wallet_amount" },
  $o = _o(() => e("em", null, "rsn", -1)),
  ko = te({
    __name: "RsnType",
    props: {
      withdrawalslist: { type: Array, default: () => [] },
      currentType: { type: Object, default: { withBeforeImgUrl: "" } },
      rsnInfo: {
        type: Object,
        default: { balance: 0, walletActivationStatus: 0, walletAddress: "" },
      },
      bid: { default: -0 },
      withdrawType: { default: 4 },
      name: { default: "" },
    },
    emits: ["getRnsTypeInfo"],
    setup(k, { emit: n }) {
      const r = k,
        { goActive: m, goWallet: i } = Nt(),
        c = () => {
          r.rsnInfo.walletActivationStatus === 0
            ? m("wallet/recharge", "RSN")
            : i("wallet/recharge", "RSN");
        };
      return (
        ve(() => {
          n("getRnsTypeInfo");
        }),
        (u, o) => {
          var v, h, a;
          return (
            s(),
            d("div", mo, [
              e("div", ho, [
                e(
                  "img",
                  {
                    src:
                      (v = k.currentType) == null ? void 0 : v.withBeforeImgUrl,
                  },
                  null,
                  8,
                  wo
                ),
                e("div", null, [
                  ((h = k.rsnInfo) == null
                    ? void 0
                    : h.walletActivationStatus) === 0
                    ? (s(), d("div", fo, t(u.$t("rnsNoActive")), 1))
                    : (s(),
                      d(
                        H,
                        { key: 1 },
                        [
                          e("div", yo, t(u.$t("RSNTip")), 1),
                          e("div", go, [
                            e("em", null, t(u.$t("balance")) + ":", 1),
                            R(
                              t(
                                ((a = k.rsnInfo) == null
                                  ? void 0
                                  : a.balance) || 0
                              ) + " ",
                              1
                            ),
                            $o,
                          ]),
                        ],
                        64
                      )),
                ]),
              ]),
              e(
                "div",
                { class: "right", onClick: c },
                t(
                  k.rsnInfo.walletActivationStatus === 0
                    ? u.$t("RNSActive")
                    : u.$t("comminWallet")
                ),
                1
              ),
            ])
          );
        }
      );
    },
  });
const bo = ae(ko, [
    ["__scopeId", "data-v-b6d0c70a"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/RsnType.vue",
    ],
  ]),
  Co = { class: "c2cWithdraw__C" },
  To = { class: "head" },
  So = { class: "c2cWithdraw__C-input" },
  No = { class: "place-div" },
  Wo = { key: 0, class: "verify" },
  Ao = { class: "can-withdraw" },
  Io = { class: "c2cWithdraw__C-tip" },
  Bo = { class: "c2cWithdraw__C-tip-l" },
  Uo = { class: "c2cWithdraw__C-tip-r" },
  Do = { class: "c2cWithdraw__T" },
  Po = { class: "c2cWithdraw__T-h" },
  bt = 21,
  Ro = te({
    __name: "arField",
    setup(k, { expose: n }) {
      const {
          withdrawalsrule: r,
          withdrawalTypeslist: m,
          setc2cAmount: i,
        } = Ae(),
        { t: c } = we(),
        u = g(0),
        o = L(() => Fe().getDollarSign),
        v = L(() => (Number(u.value) ? Number(u.value) : 0));
      L(() => {
        var b;
        const l = m.value.find((f) => f.withdrawID == bt);
        return l
          ? l.recommandWithAmount
            ? (b = l.recommandWithAmount) == null
              ? void 0
              : b.split(",").map((f) => Number(f))
            : []
          : [];
      }),
        g(null);
      const h = () => {
          const l = Math.floor(r.value.canWithdrawAmount),
            b = Math.floor(r.value.maxPrice);
          u.value = l > b ? b : l;
        },
        a = (l) => {
          i(l);
        },
        p = L(() => {
          if (v.value != 0) {
            if (v.value > r.value.canWithdrawAmount)
              return c("cashBalanceInsufficient");
            if (v.value > r.value.maxPrice || v.value < r.value.minPrice)
              return c("wordWithdrawal", [
                le(r.value.minPrice),
                le(r.value.maxPrice),
              ]);
          }
          return "";
        });
      return (
        n({ validateTxt: p }),
        (l, b) => {
          var D;
          const f = P("svg-icon"),
            U = P("van-field");
          return (
            s(),
            d(
              H,
              null,
              [
                e("div", Co, [
                  e("div", To, [
                    _(f, { name: "saveWallet" }),
                    R(" " + t(l.$t("enterA")), 1),
                  ]),
                  y(
                    '		<div class="Withdraw__content-paymoney" v-if="quickList.length > 0">'
                  ),
                  y('			<div class="Withdraw__content-paymoney__money-list">'),
                  y("				<div"),
                  y('					class="Withdraw__content-paymoney__money-list__item"'),
                  y(`					:class="currentQuickIndex === index ? 'active' : ''"`),
                  y('					v-for="(item, index) in quickList"'),
                  y('					:key="index"'),
                  y('					@click="handleQuickSelect(index)"'),
                  y("				>"),
                  y('					<div class="amount" >'),
                  y("						{{formatNum(Number(item))}}"),
                  y("					</div>"),
                  y("				</div>"),
                  y("			</div>"),
                  y("		</div>"),
                  e("div", So, [
                    e("div", No, t(o.value), 1),
                    _(
                      U,
                      {
                        modelValue: u.value,
                        "onUpdate:modelValue": [
                          b[0] || (b[0] = (I) => (u.value = I)),
                          a,
                        ],
                        modelModifiers: { number: !0 },
                        type: "digit",
                        placeholder: l.$t("plsEnterQuantity"),
                        class: "amount-input",
                      },
                      null,
                      8,
                      ["modelValue", "placeholder"]
                    ),
                    e("div", { class: "all", onClick: h }, t(l.$t("all")), 1),
                  ]),
                  p.value ? (s(), d("div", Wo, t(p.value), 1)) : y("v-if", !0),
                  e(
                    "div",
                    Ao,
                    t(l.$t("wfDesc1")) +
                      " " +
                      t($(le)($(r).canWithdrawAmount || 0)),
                    1
                  ),
                  e("div", Io, [
                    e("div", Bo, [e("div", null, t(l.$t("wfDesc2")), 1)]),
                    e("div", Uo, [e("div", null, t($(le)(v.value)), 1)]),
                  ]),
                  dt(l.$slots, "default", {}, void 0, !0),
                ]),
                e("div", Do, [
                  e("div", Po, [
                    _(f, { name: "shuoming" }),
                    R(t(l.$t("withdrawalInstructions")), 1),
                  ]),
                  _(
                    st,
                    {
                      withdrawType: bt,
                      withdrawalsrule: $(r),
                      name:
                        ((D = $(m).find((I) => I.withdrawID == 21)) == null
                          ? void 0
                          : D.name) || "",
                    },
                    null,
                    8,
                    ["withdrawalsrule", "name"]
                  ),
                ]),
              ],
              64
            )
          );
        }
      );
    },
  });
const Mo = ae(Ro, [
    ["__scopeId", "data-v-7dcfb9e1"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/Ar/arField.vue",
    ],
  ]),
  Lo = { class: "arType" },
  Oo = { class: "left" },
  Vo = { class: "right" },
  qo = { key: 0, class: "arCard" },
  jo = { class: "left" },
  zo = ["src"],
  Fo = { class: "amount" },
  Eo = { class: "recycleBtnD c2c" },
  xo = te({
    __name: "card",
    emits: ["onShowPwdD"],
    setup(k, { expose: n, emit: r }) {
      const { data_NewSetWithdrawalH: m } = Ae(),
        { getInfo: i, arWallet: c, goWallet: u, onTradRule: o } = Nt(),
        v = g(),
        h = L(() => {
          var p, l;
          if ([21].includes(m.value.type) && m.value.amount > 0)
            return !(
              m.value.amount < 1 ||
              ((p = v.value) == null ? void 0 : p.validateTxt.length) > 0 ||
              m.value.bid == 0 ||
              ((l = c.value) == null ? void 0 : l.walletActivationStatus) != 1
            );
        });
      return (
        ve(() => {
          i();
        }),
        n({ isActiveC: h }),
        (a, p) => {
          var f, U;
          const l = P("svg-icon"),
            b = P("van-icon");
          return (
            s(),
            d("div", Lo, [
              e(
                "div",
                { class: "rule", onClick: p[0] || (p[0] = (D) => $(o)()) },
                [
                  e("div", Oo, [
                    _(l, { name: "arpay1" }),
                    e("p", null, t(a.$t("arbTip1")), 1),
                  ]),
                  e("div", Vo, [
                    R(t(a.$t("checkOver")), 1),
                    _(b, { name: "arrow" }),
                  ]),
                ]
              ),
              ((f = $(c)) == null ? void 0 : f.walletActivationStatus) == 1
                ? (s(),
                  d(
                    H,
                    { key: 0 },
                    [
                      [21].includes($(m).type)
                        ? (s(),
                          d("div", qo, [
                            e("div", jo, [
                              e(
                                "img",
                                {
                                  src: $(ye)(
                                    "wallet/withdrawType",
                                    `${$(m).type}`
                                  ),
                                },
                                null,
                                8,
                                zo
                              ),
                              e("p", null, [
                                e("span", null, t(a.$t("arbTip13")), 1),
                                e(
                                  "span",
                                  Fo,
                                  t(
                                    ((U = $(c)) == null ? void 0 : U.balance) ||
                                      0
                                  ) + " ARB",
                                  1
                                ),
                              ]),
                            ]),
                            e(
                              "div",
                              {
                                class: "right",
                                onClick:
                                  p[1] ||
                                  (p[1] = (D) => $(u)("wallet/withdraw")),
                              },
                              t(a.$t("comminWallet")),
                              1
                            ),
                          ]))
                        : y("v-if", !0),
                      _(
                        Mo,
                        { ref_key: "arFieldRef", ref: v },
                        {
                          default: X(() => [
                            e("div", Eo, [
                              e(
                                "button",
                                {
                                  class: se([
                                    "recycleBtn",
                                    { active: h.value },
                                  ]),
                                  onClick:
                                    p[2] ||
                                    (p[2] = () => {
                                      r("onShowPwdD");
                                    }),
                                },
                                t(a.$t("withdraw")),
                                3
                              ),
                            ]),
                          ]),
                          _: 1,
                        },
                        512
                      ),
                      _(rt),
                    ],
                    64
                  ))
                : (s(), $e(ga, { key: 1, pageType: "wallet/Withdraw" })),
            ])
          );
        }
      );
    },
  });
const Ho = ae(xo, [
    ["__scopeId", "data-v-69845b27"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/Ar/card.vue",
    ],
  ]),
  Zo = { class: "noRightTimeDialog" },
  Go = { class: "fail" },
  Ko = { class: "van-dialog__content-title title1" },
  Qo = { class: "van-dialog__content-note" },
  Yo = { class: "red" },
  Xo = te({
    __name: "noRightTimeDialog",
    setup(k) {
      const { withdrawalsrule: n } = Ae(),
        r = L(() => (n.value ? n.value.startTime : "00:00")),
        m = L(() => (n.value ? n.value.endTime : "23:59"));
      return (i, c) => {
        const u = Re("lazy");
        return (
          s(),
          d("div", Zo, [
            ne(e("img", Go, null, 512), [[u, $(ye)("wallet", "tip")]]),
            e("div", Ko, t(i.$t("noRightTime")), 1),
            e("div", Qo, [
              e("p", null, [
                R(t(i.$t("wTimeInterval")), 1),
                e("span", Yo, t(r.value) + "-" + t(m.value), 1),
                R(", "),
              ]),
              e("p", null, t(i.$t("later")), 1),
            ]),
          ])
        );
      };
    },
  });
const Jo = ae(Xo, [
    ["__scopeId", "data-v-415fa4b1"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/noRightTimeDialog.vue",
    ],
  ]),
  Dt = (k) => (Se("data-v-80a607a5"), (k = k()), Ne(), k),
  el = { class: "withdraw__container" },
  tl = { class: "withdraw__container-content" },
  al = { class: "recycleBtnD c2c" },
  nl = { class: "recycleBtnD c2c" },
  sl = { key: 1, class: "bankInfoItem usdt" },
  ol = ["src"],
  ll = { key: 2, class: "bankInfoItem usdt KBZ" },
  il = ["src"],
  rl = { key: 0 },
  dl = { key: 1 },
  cl = { key: 0 },
  ul = { key: 1 },
  vl = { class: "recycleBtnD" },
  pl = { class: "succeed" },
  _l = { class: "van-dialog__content-title" },
  ml = { class: "van-dialog__content-note" },
  hl = { class: "succeedImg" },
  wl = { class: "c2cTip" },
  fl = ["innerHTML"],
  yl = ["innerHTML"],
  gl = { class: "pwd" },
  $l = { class: "pwd-head ar-1px-b" },
  kl = Dt(() => e("input", { type: "text", class: "is-hidden" }, null, -1)),
  bl = Dt(() => e("input", { type: "password", class: "is-hidden" }, null, -1)),
  Cl = { class: "red" },
  Tl = { class: "forgetPwd" },
  Sl = { class: "btnD" },
  Nl = ["innerHTML"],
  Wl = { class: "question" },
  Al = { class: "button" },
  Il = { class: "arupiAmount" },
  Bl = { class: "title1" },
  Ul = ["innerHTML"],
  Dl = { class: "button" },
  Pl = te({
    __name: "index",
    setup(k) {
      const {
          setWithdrawal: n,
          setWithdrawalsrule: r,
          setWithdrawalTypeslist: m,
        } = Ae(),
        i = g(!1),
        c = g(!1),
        u = g(!1),
        o = () => {
          if (((i.value = !i.value), i.value)) {
            const N = new Date().getTime() + 2592e6;
            localStorage.setItem("popupHideUntil", N.toString());
          } else localStorage.removeItem("popupHideUntil");
        },
        { t: v } = we(),
        { setLoading: h } = We(),
        { getUserInfo: a, getRegisterState: p, $state: l } = tt(),
        b = pe(),
        f = Ze(),
        U = g(),
        D = g(),
        I = g(),
        C = g({}),
        A = g({ balance: 0, walletActivationStatus: 0, walletAddress: "" }),
        V = g(),
        w = g(0),
        T = g(!1),
        F = g(!1),
        Z = L(() => l.isOpenForgetPasswordSMSState);
      function S() {
        b.back();
      }
      const G = Wt(),
        B = L(() => G.userInfo),
        z = L(() => {
          var N;
          return (
            W.type === 22 &&
            ((N = A.value) == null ? void 0 : N.walletActivationStatus) === 0
          );
        }),
        Q = g(""),
        M = g(!1);
      function oe() {
        const N = {
          1: "Withdraw-BankCard",
          3: "Withdraw-USDT",
          10: "Withdraw-USDT",
          5: "Withdraw-PIX",
        };
        b.replace({ name: N[W.type] });
      }
      const re = L(() => {
          var Y, Te;
          if ([4, 20, 22, 23, 24].includes(W.type) && W.amount > 0)
            return !(
              de.value.withdrawalslist.length == 0 ||
              W.bid == 0 ||
              W.amount < 1 ||
              W.amount > de.value.withdrawalsrule.canWithdrawAmount
            );
          const q = [1, 2, 3, 5, 6, 8, 10];
          return !(
            W.bid == 0 ||
            !q.includes(W.type) ||
            W.amount < 1 ||
            ((Y = U.value) != null && Y.showValidate) ||
            ((Te = U.value) != null && Te.showValidateUB) ||
            (W.type == 1 && W.amount.toString().indexOf(".") != -1)
          );
        }),
        O = g(!1),
        j = g(!1),
        K = g(!1),
        fe = g(!1),
        W = me({ amount: 0, pwd: "", type: 0, bid: 0, name: "", tip: "" });
      Pe(W, (N) => {
        f.setWithdrawal({ ...N }), n(N);
      });
      const Ie = g(null),
        Be = g("");
      async function xe() {
        Ie.value && clearTimeout(Ie.value),
          (Ie.value = setTimeout(async () => {
            if (B.value.isAllowWithdraw == 0) {
              (F.value = !0), (K.value = !1);
              return;
            }
            let N = de.value.withdrawalsrule;
            W.amount = Number(W.amount);
            var q = /^\d+(\.\d{1,2})?$/;
            if (!q.test(W.amount.toString())) {
              x(v("showDialogTip1")), (K.value = !1);
              return;
            }
            if (W.amount > N.maxPrice || W.amount < N.minPrice) {
              x(v("wordWithdrawal", [le(N.minPrice), le(N.maxPrice)])),
                (K.value = !1);
              return;
            }
            if (!W.pwd) {
              x(v("emptyPassword")), (K.value = !1);
              return;
            }
            h(!0);
            const Y = await E(ta(W));
            Y &&
              (Y.code !== 0 && Y.msgCode == 220
                ? ((fe.value = !0),
                  setTimeout(function () {
                    fe.value = !1;
                  }, 3e3))
                : Y.code !== 0 && Y.msgCode == 280
                ? setTimeout(function () {
                    W.type == 20 &&
                      Y != null &&
                      Y.data &&
                      (localStorage.setItem(
                        "c2cOrderNo",
                        Y == null ? void 0 : Y.data
                      ),
                      b.push({
                        name: "Withdraw-C2cDetail",
                        query: { order: Y == null ? void 0 : Y.data },
                      }));
                  }, 2e3)
                : Y.code !== 0 && Y.msgCode === 1009
                ? await Ft({ message: v("code1009") })
                : W.type == 20
                ? ((j.value = !0), (Be.value = Y == null ? void 0 : Y.data))
                : (O.value = !0)),
              (K.value = !1),
              h(!1);
          }, 500));
      }
      const E = async (N) =>
        await N.then((Y) =>
          Y && Y.code !== 0
            ? [220, 1009].includes(Y.msgCode)
              ? Y
              : [280].includes(Y.msgCode)
              ? (Je(Y), Y)
              : (Je(Y), null)
            : Y
        ).catch((Y) => (Je(Y), null));
      async function ee(N) {
        N == "c2c"
          ? ((j.value = !1),
            (W.type == 20 || W.type == 2) &&
              Be.value &&
              (localStorage.setItem("c2cOrderNo", Be.value),
              b.push({
                name: "Withdraw-C2cDetail",
                query: { order: Be.value },
              })))
          : ((O.value = !1), await b.push({ name: "WithdrawHistory" }));
      }
      function be() {
        var N;
        W.type == 21
          ? (N = D.value) != null &&
            N.isActiveC &&
            ((W.pwd = ""), (K.value = !0))
          : re.value && ((W.pwd = ""), (K.value = !0));
      }
      const _e = g([]);
      async function He() {
        var q, Y;
        h(!0);
        const N = await J(Jt());
        if (N) {
          (_e.value = (N == null ? void 0 : N.data.withdrawlist) || []),
            m(_e.value),
            f.getWithdrawal.type &&
            _e.value.find((ge) => ge.withdrawID == f.getWithdrawal.type)
              ? (W.type = f.getWithdrawal.type)
              : _e.value.find((ge) => ge.withdrawID == f.getWithdrawal.type) ||
                (W.type = 0),
            W.type == 0 &&
              ((W.type = _e.value[0].withdrawID),
              (ce.value = _e.value[0].name),
              W.type == 20 && (T.value = !0)),
            [4, 23, 24].includes(W.type) &&
              (ce.value =
                ((q = _e.value.find((ge) => ge.withdrawID == W.type)) == null
                  ? void 0
                  : q.name) || ""),
            W.type == 22 &&
              (ce.value =
                ((Y = _e.value.find((ge) => ge.withdrawID == 22)) == null
                  ? void 0
                  : Y.name) || "");
          let Te = localStorage.getItem("popupHideUntil") || void 0;
          const je = new Date().getTime();
          if (((M.value = N.data.isOpenSafeGuide), M.value)) {
            const ge = parseInt(Te, 10);
            je < ge && (M.value = !1),
              (Q.value = N.data.safeGuideContent || "");
          }
        }
        h(!1);
      }
      const ce = g(""),
        Ye = async () => {
          try {
            const N = await ea();
            (N == null ? void 0 : N.code) === 0
              ? (A.value = N.data)
              : x({ message: N == null ? void 0 : N.msg });
          } catch {}
        };
      async function Ge(N) {
        W.type != N.withdrawID &&
          (N.withdrawID == 20 && (T.value = !0),
          (W.type = N.withdrawID),
          (C.value = {}),
          await pt(),
          (ce.value = N.name || ""),
          (W.bid =
            de.value.withdrawalslist.length > 0
              ? de.value.withdrawalslist[0].bid
              : 0),
          (W.amount = 0),
          U.value && (U.value.usdtCount = 0));
      }
      const de = g({ withdrawalslist: [], withdrawalsrule: {} }),
        Xe = L(() => {
          var N, q;
          return (q =
            (N = de.value.withdrawalsrule) == null
              ? void 0
              : N.arbWithdrawRecommand) == null
            ? void 0
            : q.popupContent;
        }),
        ue = L(() => {
          var N, q;
          return (
            ((q =
              (N = de.value.withdrawalsrule) == null
                ? void 0
                : N.arbWithdrawRecommand) == null
              ? void 0
              : q.giftPercent) || 0
          );
        }),
        Ke = L(() => {
          var N, q;
          return (
            ((q =
              (N = de.value.withdrawalsrule) == null
                ? void 0
                : N.arbWithdrawRecommand) == null
              ? void 0
              : q.arbGiftPercent) || 0
          );
        });
      function ot() {
        (C.value = de.value.withdrawalslist.find((N) => N.bid == W.bid)),
          C.value ||
            ((W.bid = de.value.withdrawalslist[0].bid),
            (C.value = de.value.withdrawalslist[0]));
      }
      async function pt() {
        var q, Y, Te, je, ge;
        h(!0);
        const N = await J(Ee({ withdrawid: W.type }));
        if ((h(!1), N)) {
          if (
            ((de.value = N.data),
            r((q = N.data) == null ? void 0 : q.withdrawalsrule),
            (Te = (Y = N.data) == null ? void 0 : Y.withdrawalsrule) != null &&
              Te.arbWithdrawRecommand &&
              !u.value &&
              (c.value = !0),
            N.data.lastBandCarkName
              ? localStorage.setItem(
                  "lastBandCarkName",
                  (je = N.data) == null ? void 0 : je.lastBandCarkName
                )
              : localStorage.removeItem("lastBandCarkName"),
            !de.value.withdrawalslist.length)
          )
            return;
          W.bid == 0 &&
            (W.bid =
              ((ge = de.value.withdrawalslist[0]) == null ? void 0 : ge.bid) ||
              0),
            ot(),
            f.setWithdrawalslist(N.data.withdrawalslist);
        }
      }
      ve(async () => {
        var N, q;
        f.getWithdrawal.type && (W.type = f.getWithdrawal.type),
          (W.bid =
            Number(
              ((q = (N = b.currentRoute.value) == null ? void 0 : N.query) ==
              null
                ? void 0
                : q.bid) || 0
            ) || 0),
          a({ signature: G.token }),
          p(),
          await He(),
          await pt(),
          await jt();
      });
      function Ot() {
        b.push({ name: "CustomerService" });
      }
      function Vt() {
        b.push({ name: "rpwd" });
      }
      const qt = () => {
          b.push({ name: "StrongBox" });
        },
        jt = async () => {
          const N = await J(Xt({ key: "C2CWithdrawRewardRate" })),
            q = (N == null ? void 0 : N.data.value1) || 0;
          w.value = Number(q);
        },
        _t = (N) => {
          W.amount = N;
        };
      return (N, q) => {
        var ht, wt;
        const Y = P("NavBar"),
          Te = P("svg-icon"),
          je = P("van-icon"),
          ge = P("van-dialog"),
          zt = P("van-popup"),
          mt = Re("lazy");
        return (
          s(),
          d(
            H,
            null,
            [
              e("div", el, [
                _(
                  Y,
                  {
                    title: N.$t("withdraw"),
                    "left-arrow": "",
                    onClickLeft: S,
                    onClickRight:
                      q[0] ||
                      (q[0] = (ie) => $(b).push({ name: "WithdrawHistory" })),
                  },
                  {
                    right: X(() => [
                      e("span", null, t(N.$t("withdrawRecords")), 1),
                    ]),
                    _: 1,
                  },
                  8,
                  ["title"]
                ),
                e("div", tl, [
                  y("资产余额"),
                  _(
                    Aa,
                    {
                      data_NewSetWithdrawal: W,
                      withdrawalsrule: de.value.withdrawalsrule,
                    },
                    null,
                    8,
                    ["data_NewSetWithdrawal", "withdrawalsrule"]
                  ),
                  y("提款方式"),
                  _(
                    Ka,
                    {
                      data_NewSetWithdrawal: W,
                      withdrawalTypeslist: _e.value,
                      c2cAward: w.value,
                      onOnSelectWithdrawalType: Ge,
                      maxRechargeRifts: ue.value,
                      ArRechargeRifts: Ke.value,
                    },
                    null,
                    8,
                    [
                      "data_NewSetWithdrawal",
                      "withdrawalTypeslist",
                      "c2cAward",
                      "maxRechargeRifts",
                      "ArRechargeRifts",
                    ]
                  ),
                  y(" upi "),
                  W.type == 2
                    ? (s(),
                      $e(
                        kt,
                        {
                          key: 0,
                          withdrawalslist: de.value.withdrawalslist,
                          bid: W.bid,
                        },
                        null,
                        8,
                        ["withdrawalslist", "bid"]
                      ))
                    : y("v-if", !0),
                  y(" c2cupi "),
                  W.type == 20
                    ? (s(),
                      d(
                        H,
                        { key: 1 },
                        [
                          _(
                            kt,
                            {
                              withdrawalslist: de.value.withdrawalslist,
                              bid: W.bid,
                            },
                            null,
                            8,
                            ["withdrawalslist", "bid"]
                          ),
                          _(
                            Ns,
                            {
                              c2crule: de.value.withdrawalsrule,
                              c2cAward: w.value,
                              onSetc2cAmount: _t,
                              c2cName:
                                ((ht = _e.value.find(
                                  (ie) => ie.withdrawID == 20
                                )) == null
                                  ? void 0
                                  : ht.name) || "",
                            },
                            {
                              default: X(() => [
                                e("div", al, [
                                  e(
                                    "button",
                                    {
                                      class: se([
                                        "recycleBtn",
                                        { active: re.value },
                                      ]),
                                      onClick: be,
                                    },
                                    t(N.$t("withdraw")),
                                    3
                                  ),
                                ]),
                              ]),
                              _: 1,
                            },
                            8,
                            ["c2crule", "c2cAward", "c2cName"]
                          ),
                          _(Ys, { ref_key: "c2cRecordRef", ref: V }, null, 512),
                        ],
                        64
                      ))
                    : W.type == 21
                    ? (s(),
                      $e(
                        Ho,
                        {
                          key: 2,
                          onOnShowPwdD: q[1] || (q[1] = (ie) => be()),
                          ref_key: "ArCardRef",
                          ref: D,
                        },
                        null,
                        512
                      ))
                    : [4, 23, 24, 22].includes(W.type)
                    ? (s(),
                      d(
                        H,
                        { key: 3 },
                        [
                          W.type === 22
                            ? (s(),
                              $e(
                                bo,
                                {
                                  key: 0,
                                  withdrawalslist: de.value.withdrawalslist,
                                  withdrawType: W.type,
                                  bid: W.bid,
                                  name: ce.value,
                                  rsnInfo: A.value,
                                  currentType: _e.value.find(
                                    (ie) => ie.withdrawID == 22
                                  ),
                                  onGetRnsTypeInfo: Ye,
                                },
                                null,
                                8,
                                [
                                  "withdrawalslist",
                                  "withdrawType",
                                  "bid",
                                  "name",
                                  "rsnInfo",
                                  "currentType",
                                ]
                              ))
                            : (s(),
                              $e(
                                po,
                                {
                                  key: 1,
                                  withdrawalslist: de.value.withdrawalslist,
                                  withdrawType: W.type,
                                  bid: W.bid,
                                  name: ce.value,
                                },
                                null,
                                8,
                                [
                                  "withdrawalslist",
                                  "withdrawType",
                                  "bid",
                                  "name",
                                ]
                              )),
                          z.value
                            ? y("v-if", !0)
                            : (s(),
                              $e(
                                io,
                                {
                                  key: 2,
                                  rule: de.value.withdrawalsrule,
                                  award: w.value,
                                  wtype: W.type,
                                  onSetc2cAmount: _t,
                                  name:
                                    ((wt = _e.value.find(
                                      (ie) => ie.withdrawID == 20
                                    )) == null
                                      ? void 0
                                      : wt.name) || "",
                                },
                                {
                                  default: X(() => [
                                    e("div", nl, [
                                      e(
                                        "button",
                                        {
                                          class: se([
                                            "recycleBtn",
                                            { active: re.value },
                                          ]),
                                          onClick: be,
                                        },
                                        t(N.$t("withdraw")),
                                        3
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["rule", "award", "wtype", "name"]
                              )),
                          y("提现记录"),
                          z.value
                            ? y("v-if", !0)
                            : (s(),
                              $e(
                                rt,
                                { key: 3, ref_key: "withdrawHistory", ref: I },
                                null,
                                512
                              )),
                        ],
                        64
                      ))
                    : (s(),
                      d(
                        H,
                        { key: 4 },
                        [
                          y("银行卡模块"),
                          de.value.withdrawalslist.length
                            ? (s(),
                              d(
                                "div",
                                {
                                  key: 0,
                                  class: "bankInfo",
                                  onClick: q[2] || (q[2] = (ie) => oe()),
                                },
                                [
                                  [1, 5].includes(W.type)
                                    ? (s(),
                                      d(
                                        "div",
                                        {
                                          key: 0,
                                          class: se([
                                            "bankInfoItem",
                                            `type${W.type}`,
                                          ]),
                                        },
                                        [
                                          e("div", null, [
                                            _(Te, { name: W.type }, null, 8, [
                                              "name",
                                            ]),
                                            e(
                                              "span",
                                              null,
                                              t(C.value.bankName),
                                              1
                                            ),
                                          ]),
                                          e("div", null, [
                                            e(
                                              "span",
                                              null,
                                              t(C.value.beneficiaryName),
                                              1
                                            ),
                                            e(
                                              "span",
                                              null,
                                              t(C.value.accountNo),
                                              1
                                            ),
                                          ]),
                                          _(je, { name: "arrow" }),
                                        ],
                                        2
                                      ))
                                    : y("v-if", !0),
                                  [3, 10].includes(W.type)
                                    ? (s(),
                                      d("div", sl, [
                                        e("div", null, [
                                          e(
                                            "img",
                                            {
                                              src: $(ye)(
                                                "wallet/withdrawType",
                                                `${W.type}`
                                              ),
                                            },
                                            null,
                                            8,
                                            ol
                                          ),
                                          e(
                                            "span",
                                            null,
                                            t(C.value.bankName),
                                            1
                                          ),
                                        ]),
                                        e("div", null, [
                                          e(
                                            "span",
                                            null,
                                            t(C.value.accountNo),
                                            1
                                          ),
                                          _(je, { name: "arrow" }),
                                        ]),
                                        e("div", null, [
                                          e(
                                            "span",
                                            null,
                                            t(C.value.usdtRemarkName),
                                            1
                                          ),
                                        ]),
                                      ]))
                                    : y("v-if", !0),
                                  [6, 8].includes(W.type)
                                    ? (s(),
                                      d("div", ll, [
                                        e("div", null, [
                                          e(
                                            "img",
                                            {
                                              src: $(ye)(
                                                "wallet/withdrawType",
                                                `${W.type}`
                                              ),
                                            },
                                            null,
                                            8,
                                            il
                                          ),
                                          W.type == 6
                                            ? (s(),
                                              d(
                                                "span",
                                                rl,
                                                t(C.value.bankName),
                                                1
                                              ))
                                            : y("v-if", !0),
                                          W.type == 8
                                            ? (s(),
                                              d(
                                                "span",
                                                dl,
                                                t(C.value.walletName),
                                                1
                                              ))
                                            : y("v-if", !0),
                                        ]),
                                        e("div", null, [
                                          W.type == 6
                                            ? (s(),
                                              d(
                                                "span",
                                                cl,
                                                t(C.value.accountNo),
                                                1
                                              ))
                                            : y("v-if", !0),
                                          W.type == 8
                                            ? (s(),
                                              d(
                                                "span",
                                                ul,
                                                t(C.value.mobileNO),
                                                1
                                              ))
                                            : y("v-if", !0),
                                        ]),
                                      ]))
                                    : y("v-if", !0),
                                ]
                              ))
                            : y("v-if", !0),
                          ne(
                            _(
                              nt,
                              { type: W.type, isShowhintTextO: !0 },
                              null,
                              8,
                              ["type"]
                            ),
                            [
                              [
                                lt,
                                [1, 3, 6, 8, 5, 10].includes(W.type) &&
                                  de.value.withdrawalslist.length == 0,
                              ],
                            ]
                          ),
                          y("输入区"),
                          _(
                            Bn,
                            {
                              data_NewSetWithdrawal: W,
                              withdrawalsrule: de.value.withdrawalsrule,
                              withdrawalslist: de.value.withdrawalslist,
                              ref_key: "withdrawField",
                              ref: U,
                            },
                            null,
                            8,
                            [
                              "data_NewSetWithdrawal",
                              "withdrawalsrule",
                              "withdrawalslist",
                            ]
                          ),
                          e("div", vl, [
                            e(
                              "button",
                              {
                                class: se(["recycleBtn", { active: re.value }]),
                                onClick: be,
                              },
                              t(N.$t("withdraw")),
                              3
                            ),
                          ]),
                          y("提现说明组件"),
                          _(
                            st,
                            {
                              withdrawType: W.type,
                              withdrawalsrule: de.value.withdrawalsrule,
                            },
                            null,
                            8,
                            ["withdrawType", "withdrawalsrule"]
                          ),
                          y("提现记录"),
                          _(
                            rt,
                            { ref_key: "withdrawHistory", ref: I },
                            null,
                            512
                          ),
                        ],
                        64
                      )),
                ]),
                y("提现成功弹窗"),
                _(
                  ge,
                  {
                    show: O.value,
                    "onUpdate:show": q[4] || (q[4] = (ie) => (O.value = ie)),
                    "show-confirm-button": !1,
                    "z-index": "100",
                  },
                  {
                    default: X(() => [
                      ne(e("img", pl, null, 512), [
                        [mt, $(ye)("public", "succeed")],
                      ]),
                      e(
                        "div",
                        _l,
                        t(N.$t("tipWithdrawalApplicationSuccess")),
                        1
                      ),
                      e("div", ml, [
                        e(
                          "span",
                          null,
                          t(N.$t("tipWithdrawWillBeCompletedIn2Hours")),
                          1
                        ),
                        e(
                          "span",
                          null,
                          t(N.$t("tipPlaWaitPaciently")) + "...",
                          1
                        ),
                      ]),
                      e(
                        "div",
                        {
                          class: "van-dialog__content-btn",
                          onClick: q[3] || (q[3] = (ie) => ee()),
                        },
                        t(N.$t("confirm")),
                        1
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["show"]
                ),
                _(
                  it,
                  {
                    class: "c2c",
                    show: j.value,
                    "onUpdate:show": q[5] || (q[5] = (ie) => (j.value = ie)),
                    showCancelBtn: !1,
                    onConfirm: q[6] || (q[6] = (ie) => ee("c2c")),
                    title: N.$t("withdrawTip2"),
                  },
                  {
                    header: X(() => [
                      ne(e("img", hl, null, 512), [
                        [mt, $(ye)("public", "succeed")],
                      ]),
                    ]),
                    content: X(() => [
                      e("div", wl, [
                        e(
                          "h1",
                          { innerHTML: N.$t("withdrawTip3") },
                          null,
                          8,
                          fl
                        ),
                        e(
                          "p",
                          { innerHTML: N.$t("withdrawTip4") },
                          null,
                          8,
                          yl
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["show", "title"]
                ),
                y("输入密码弹窗"),
                K.value
                  ? (s(),
                    $e(
                      zt,
                      {
                        key: 0,
                        show: K.value,
                        "onUpdate:show":
                          q[9] || (q[9] = (ie) => (K.value = ie)),
                        position: "bottom",
                        closeable: "",
                        round: "",
                      },
                      {
                        default: X(() => [
                          e("div", gl, [
                            e("div", $l, [
                              _(Te, { name: "safeIcon" }),
                              e("h1", null, t(N.$t("withdrawDialogDesc1")), 1),
                            ]),
                            kl,
                            bl,
                            _(
                              fa,
                              {
                                value: W.pwd,
                                "onUpdate:value":
                                  q[7] || (q[7] = (ie) => (W.pwd = ie)),
                                label: N.$t("withdrawDialogPh"),
                                maxlength: 32,
                              },
                              null,
                              8,
                              ["value", "label"]
                            ),
                            e("span", Cl, t(N.$t("withdrawDialogDesc3")), 1),
                            e("div", Tl, [
                              Z.value
                                ? (s(),
                                  d(
                                    "span",
                                    { key: 0, onClick: Vt },
                                    t(N.$t("withdrawDialogDesc4")),
                                    1
                                  ))
                                : y("v-if", !0),
                              e(
                                "div",
                                { class: "red", onClick: Ot },
                                t(N.$t("withdrawDialogDesc5")),
                                1
                              ),
                            ]),
                            e("div", Sl, [
                              e(
                                "button",
                                {
                                  onClick:
                                    q[8] || (q[8] = () => (K.value = !1)),
                                },
                                t(N.$t("withdrawDialogDesc6")),
                                1
                              ),
                              e(
                                "button",
                                { onClick: xe },
                                t(N.$t("withdrawDialogDesc7")),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["show"]
                    ))
                  : y("v-if", !0),
                y("不在提现时间内提示"),
                _(
                  ge,
                  {
                    show: fe.value,
                    "onUpdate:show": q[10] || (q[10] = (ie) => (fe.value = ie)),
                    "show-confirm-button": !1,
                    "z-index": "100",
                  },
                  { default: X(() => [_(Jo)]), _: 1 },
                  8,
                  ["show"]
                ),
                _(
                  ge,
                  {
                    show: T.value,
                    "onUpdate:show": q[12] || (q[12] = (ie) => (T.value = ie)),
                    showConfirmButton: !1,
                    class: "c2cconfirm",
                    width: "100%",
                  },
                  {
                    default: X(() => [
                      T.value
                        ? (s(),
                          $e(
                            ps,
                            {
                              key: 0,
                              showC2c: T.value,
                              "onUpdate:showC2c":
                                q[11] || (q[11] = (ie) => (T.value = ie)),
                            },
                            null,
                            8,
                            ["showC2c"]
                          ))
                        : y("v-if", !0),
                    ]),
                    _: 1,
                  },
                  8,
                  ["show"]
                ),
                _(
                  it,
                  {
                    show: F.value,
                    "onUpdate:show": q[13] || (q[13] = (ie) => (F.value = ie)),
                    showCancelBtn: !1,
                    showCloseIcon: !0,
                    clickOutSide: !0,
                    onConfirm: q[14] || (q[14] = () => (F.value = !1)),
                  },
                  {
                    content: X(() => [
                      e("h1", null, t(N.$t("withdrwsTip1")), 1),
                    ]),
                    _: 1,
                  },
                  8,
                  ["show"]
                ),
              ]),
              _(
                ge,
                {
                  "class-name": "safebox-dialog",
                  show: M.value,
                  "onUpdate:show": q[16] || (q[16] = (ie) => (M.value = ie)),
                },
                {
                  footer: X(() => [
                    e("div", Wl, t(N.$t("safeG")), 1),
                    e(
                      "div",
                      { class: se(["active", { a: i.value }]), onClick: o },
                      [
                        _(Te, { name: "active" }),
                        R(t(N.$t("checkSafeBox")), 1),
                      ],
                      2
                    ),
                    e("div", Al, [
                      e(
                        "div",
                        { onClick: q[15] || (q[15] = (ie) => (M.value = !1)) },
                        t(N.$t("no")),
                        1
                      ),
                      e("div", { onClick: qt }, t(N.$t("go")), 1),
                    ]),
                  ]),
                  default: X(() => [
                    e(
                      "div",
                      { class: "content", innerHTML: Q.value },
                      null,
                      8,
                      Nl
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["show"]
              ),
              _(
                ge,
                {
                  class: "arupiAmount-dialog",
                  closeOnClickOverlay: !0,
                  show: c.value,
                  "onUpdate:show": q[19] || (q[19] = (ie) => (c.value = ie)),
                  "show-confirm-button": !1,
                  width: 327,
                },
                {
                  default: X(() => [
                    e("div", Il, [
                      e("div", Bl, t(N.$t("arupiTitle")), 1),
                      e(
                        "div",
                        { class: "title2", innerHTML: Xe.value },
                        null,
                        8,
                        Ul
                      ),
                      e("div", Dl, [
                        e(
                          "div",
                          {
                            class: "goBuy",
                            onClick:
                              q[17] ||
                              (q[17] = () => {
                                Ge({ withdrawID: 21 }),
                                  (c.value = !1),
                                  (u.value = !0);
                              }),
                          },
                          t(N.$t("goarWithdraw")),
                          1
                        ),
                        e(
                          "div",
                          {
                            class: "clance",
                            onClick:
                              q[18] ||
                              (q[18] = () => {
                                (c.value = !1), (u.value = !0);
                              }),
                          },
                          t(N.$t("cancel")),
                          1
                        ),
                      ]),
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
const Rl = ae(Pl, [
    ["__scopeId", "data-v-80a607a5"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/index.vue",
    ],
  ]),
  Av = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Rl },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ml = { class: "chooseBank__container" },
  Ll = { class: "search" },
  Ol = ["placeholder"],
  Vl = { class: "chooseBank__container-content" },
  ql = { class: "chooseBank__container-content-items" },
  jl = { class: "ar-1px-b" },
  zl = ["onClick"],
  Fl = { class: "chooseBank__container-content-items__title" },
  El = ["src"],
  xl = te({
    __name: "index",
    props: { bankList: { type: Array, required: !0 } },
    emits: ["onSelectItem"],
    setup(k, { emit: n }) {
      const r = k,
        m = g("");
      let i = me([]),
        c = g([]);
      function u(v) {
        n("onSelectItem", v);
      }
      async function o() {
        if (Array.isArray(r.bankList) && r.bankList.length > 0) {
          (i = r.bankList), (c.value = i);
          return;
        }
        const v = await J(Me({ withdrawid: 1 }));
        v && ((i = v.data.banklist), (c.value = i));
      }
      return (
        Pe(m, () => {
          i.length > 0 &&
            (c.value = i.filter(
              (v) =>
                v.bankName.toLowerCase().indexOf(m.value.toLowerCase()) !== -1
            ));
        }),
        ve(() => {
          o();
        }),
        (v, h) => {
          const a = P("van-icon");
          return (
            s(),
            d("div", Ml, [
              e("div", Ll, [
                _(a, { name: "search", size: "35" }),
                ne(
                  e(
                    "input",
                    {
                      placeholder: v.$t("phSearchBank"),
                      "onUpdate:modelValue":
                        h[0] || (h[0] = (p) => (m.value = p)),
                    },
                    null,
                    8,
                    Ol
                  ),
                  [[he, m.value, void 0, { trim: !0 }]]
                ),
              ]),
              e("div", Vl, [
                e("div", ql, [
                  e("div", jl, t(v.$t("selectBank")), 1),
                  (s(!0),
                  d(
                    H,
                    null,
                    ke(
                      $(c),
                      (p) => (
                        s(),
                        d(
                          "div",
                          {
                            key: p.bankID,
                            class:
                              "chooseBank__container-content-items__item ar-1px-b",
                            onClick: (l) => u(p),
                          },
                          [
                            e("div", Fl, [
                              e(
                                "img",
                                { src: p.bankLogo, alt: "" },
                                null,
                                8,
                                El
                              ),
                              e("span", null, t(p.bankName), 1),
                            ]),
                          ],
                          8,
                          zl
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ])
          );
        }
      );
    },
  });
const Pt = ae(xl, [
    ["__scopeId", "data-v-c1c91417"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/ChooseBank/index.vue",
    ],
  ]),
  Iv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Hl = { class: "banks-mask" },
  Zl = { class: "choose-bank" },
  Gl = { class: "choose-title" },
  Kl = { class: "choose-list" },
  Ql = { class: "warm-tips" },
  Yl = { class: "bank-radio-group" },
  Xl = te({
    __name: "banks",
    props: {
      modelValue: { type: Boolean, default: !1 },
      list: { type: Array, default: () => [] },
    },
    emits: ["update:modelValue", "changeBank"],
    setup(k, { emit: n }) {
      const r = k,
        m = g({ name: "", code: 0 }),
        i = () => {
          const u = m.value.code,
            o = r.list.find((v) => v.code == u);
          u !== 0 && o && (n("changeBank", o), n("update:modelValue", !1));
        },
        c = () => {
          n("update:modelValue", !1);
        };
      return (u, o) => {
        const v = P("van-radio"),
          h = P("van-radio-group"),
          a = P("svg-icon");
        return r.modelValue
          ? (s(),
            $e(Et, { key: 0, to: "body" }, [
              e("div", Hl, [
                e("div", Zl, [
                  e("div", Gl, t(u.$t("selectBank")), 1),
                  e("div", Kl, [
                    e("p", Ql, t(u.$t("chooseBankWarmTips")), 1),
                    e("div", Yl, [
                      _(
                        h,
                        {
                          class: "bank-radio-group-van",
                          modelValue: m.value.code,
                          "onUpdate:modelValue":
                            o[0] || (o[0] = (p) => (m.value.code = p)),
                        },
                        {
                          default: X(() => [
                            (s(!0),
                            d(
                              H,
                              null,
                              ke(
                                r.list,
                                (p) => (
                                  s(),
                                  $e(
                                    v,
                                    { class: "bank-radio-item", name: p.code },
                                    {
                                      default: X(() => [R(t(p.name), 1)]),
                                      _: 2,
                                    },
                                    1032,
                                    ["name"]
                                  )
                                )
                              ),
                              256
                            )),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    e(
                      "button",
                      { class: "confirm-button", onClick: i },
                      t(u.$t("confirm")),
                      1
                    ),
                  ]),
                ]),
                e("div", { class: "close", onClick: c }, [
                  _(a, { class: "img", name: "close" }),
                ]),
              ]),
            ]))
          : y("v-if", !0);
      };
    },
  });
const Jl = ae(Xl, [
    ["__scopeId", "data-v-6db521fb"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/AddBankCard/banks.vue",
    ],
  ]),
  ei = { class: "addBankCard__container" },
  ti = { key: 0, class: "addBankCard__container-content" },
  ai = { class: "addBankCard__container-content-top" },
  ni = ["src"],
  si = { class: "addBankCard__container-content-item" },
  oi = { class: "label" },
  li = { class: "addBankCard__container-content-item" },
  ii = { class: "label" },
  ri = ["placeholder", "readonly"],
  di = { key: 0, class: "red" },
  ci = { key: 1, class: "red" },
  ui = { class: "addBankCard__container-content-item" },
  vi = { class: "label" },
  pi = ["placeholder"],
  _i = { class: "addBankCard__container-content-item" },
  mi = { class: "label phone_icon" },
  hi = ["placeholder"],
  wi = { key: 0, class: "addBankCard__container-content-item" },
  fi = { class: "label" },
  yi = ["placeholder"],
  gi = { key: 1, class: "addBankCard__container-content-item" },
  $i = { class: "label" },
  ki = ["placeholder"],
  bi = { key: 2, class: "addBankCard__container-content-item" },
  Ci = { class: "label" },
  Ti = ["placeholder"],
  Si = { key: 3, class: "addBankCard__container-content-item" },
  Ni = { class: "label" },
  Wi = ["placeholder"],
  Ai = { class: "addBankCard__container-content-btn" },
  Ii = { key: 1 },
  Bi = te({
    __name: "index",
    setup(k) {
      const n = g(!1),
        { t: r } = we(),
        m = g(0),
        { setLoading: i } = We(),
        c = tt(),
        u = pe(),
        { isOpenWithdraw: o, isOpenAddBankCardOpenEmail: v } = Le(),
        h = u.currentRoute.value.query.fromV || "Withdraw-BankCard",
        a = g(),
        p = g([]),
        { iseditor: l, onInput: b, setUL: f, onLoad: U, makeTxt: D } = Ae(),
        I = L(() => (a.value ? a.value : r("addCardMsg1")));
      function C(E) {
        (B.bankid = E.bankID), (a.value = E.bankName), (m.value = 0);
      }
      const A = L(() =>
          m.value == 0 ? r("titleAddBankCard") : r("selectBank")
        ),
        V = g(!1),
        w = g(!1),
        T = g(!1);
      let F = me([]);
      const Z = Fe(),
        S = L(() => Z.getDollarSign);
      S.value &&
        ((V.value = ["₫", "K"].includes(S.value)),
        (w.value = S.value == "₹"),
        (T.value = S.value == "৳"));
      function G() {
        if (m.value > 0) return (m.value = 0);
        u.replace({ name: h, query: { type: "Add" } });
      }
      const B = me({
        smsCode: "",
        ifsccode: "",
        bankid: 0,
        beneficiaryname: "",
        accountno: "",
        email: "",
        mobileno: "",
        bankcitycode: "",
        bankprovincecode: "",
        bankbranchaddress: "",
        type: "",
        codeType: Ce.addBankCard,
      });
      ve(() => {
        z();
      });
      async function z() {
        const E = await J(Me({ withdrawid: 1 }));
        E &&
          ((F = E.data.banklist), B.ifsccode && B.ifsccode.length >= 4 && Ie());
      }
      const M = Oe({
          content: () =>
            _(
              Ve,
              {
                type: B.type,
                "onUpdate:type": (E) => (B.type = E),
                code: B.smsCode,
                "onUpdate:code": (E) => (B.smsCode = E),
                onConfirm: j,
                codeType: Ce.addBankCard,
              },
              null
            ),
          beforeClose: () => {
            B.smsCode = "";
          },
        }),
        oe = L(
          () =>
            !(
              B.beneficiaryname.trim().length == 0 ||
              B.accountno.trim().length == 0 ||
              B.mobileno.trim().length == 0 ||
              (!w.value &&
                !T.value &&
                B.bankbranchaddress.trim().length == 0) ||
              B.bankid == 0 ||
              (w.value == !0 && B.ifsccode.trim().length == 0) ||
              (T.value == !0 && B.ifsccode.trim().length == 0)
            )
        ),
        re = () => {
          const E = localStorage.getItem("numberType") || c.userForm.numberType;
          if (!oe.value) return !1;
          if (B.bankid == 0)
            return x({ message: r("addCardMsg1"), wordBreak: "break-word" });
          if (B.beneficiaryname.toString().trim().length == 0)
            return x({ message: r("addCardMsg2"), wordBreak: "break-word" });
          if (B.accountno.toString().trim().length == 0)
            return x({ message: r("addCardMsg3"), wordBreak: "break-word" });
          {
            let ee;
            if (S.value == "R$") {
              if (((ee = /^[0-9\-]{6,25}$/), B.accountno.indexOf("-") == -1))
                return x({ message: r("code212"), wordBreak: "break-word" });
            } else ee = /^[0-9]{6,25}$/;
            if (!ee.test(B.accountno))
              return x({ message: r("code212"), wordBreak: "break-word" });
          }
          if (
            I.value.toUpperCase() == "STATE BANK OF INDIA" &&
            B.accountno.toString().trim().charAt(0) == "0"
          )
            return x({
              message: r("addBC1", [I.value]),
              wordBreak: "break-word",
            });
          if (B.mobileno.toString().trim().length == 0)
            return x({ message: r("addCardMsg4"), wordBreak: "break-word" });
          if (!ut(E, B.mobileno.trim().length))
            return x({ message: r("wrongTel"), wordBreak: "break-word" });
          if (
            B.bankbranchaddress.toString().trim().length == 0 &&
            !w.value &&
            !T.value
          )
            return x({ message: r("addCardMsg5"), wordBreak: "break-word" });
          if (v.value && B.email.toString().trim().length == 0)
            return x({ message: r("addCardMsg6"), wordBreak: "break-word" });
          if (w.value == !0) {
            if (B.ifsccode.trim().length == 0)
              return x({
                message: r("phEnter") + r("IFSCCode"),
                wordBreak: "break-word",
              });
            if (!/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(B.ifsccode))
              return x({
                message: r("IFSCCode") + r("formatErr"),
                wordBreak: "break-word",
              });
          }
          return v.value && !Bt.email1.test(B.email)
            ? x({ message: r(Ut.email), wordBreak: "break-word" })
            : T.value == !0 && B.ifsccode.trim().length == 0
            ? x({
                message: r("phEnter") + " Routing Number",
                wordBreak: "break-word",
              })
            : !0;
        };
      async function O() {
        if (((B.smsCode = ""), re() === !0)) {
          if (o.value) return M.open();
          await j();
        }
      }
      async function j() {
        const E = localStorage.getItem("numberType") || c.userForm.numberType;
        i(!0),
          (B.beneficiaryname = B.beneficiaryname.trim()),
          (await J(aa(Object.assign({}, B, { mobileno: E + B.mobileno })))) &&
            (ze(r("addedSuccessfully")),
            M.close(),
            await u.replace({ name: h, query: { type: "Add" }, replace: !0 })),
          i(!1);
      }
      function K() {
        S.value == "R$"
          ? (B.accountno = B.accountno.replace(/[^\d\-]+/g, ""))
          : (B.accountno = B.accountno.replace(/[^\d]+/g, ""));
      }
      function fe(E) {
        const ee = E.substring(0, 4).toUpperCase();
        return F.filter((be) => be.ifscCode.toUpperCase() === ee).map((be) => ({
          name: be.bankName,
          code: be.bankID,
        }));
      }
      const W = () => {
          (B.ifsccode = B.ifsccode.replace(/[^a-zA-Z0-9]/g, "")),
            f(B, "ifsccode");
        },
        Ie = () => {
          const E = fe(B.ifsccode.substring(0, 4));
          if (E.length > 1 && B.ifsccode.length >= 4)
            return (p.value = E), (n.value = !0);
          const ee = E[0] || { name: "", code: 0 };
          ee && ee.code && B.ifsccode
            ? ((a.value = ee.name), (B.bankid = ee.code))
            : ((a.value = r("addCardMsg1")), (B.bankid = 0)),
            f(B, "ifsccode");
        },
        Be = (E) => {
          (a.value = E.name), (B.bankid = E.code);
        };
      L(() => {
        const E = fe(B.ifsccode);
        return !(w.value && E.code != 0 && B.ifsccode);
      });
      function xe() {
        m.value = 2;
      }
      return (
        U(B, "beneficiaryname"),
        (E, ee) => {
          const be = P("NavBar"),
            _e = P("svg-icon"),
            He = P("van-icon");
          return (
            s(),
            d(
              H,
              null,
              [
                e("div", ei, [
                  _(
                    be,
                    { title: A.value, "left-arrow": "", onClickLeft: G },
                    null,
                    8,
                    ["title"]
                  ),
                  m.value == 0
                    ? (s(),
                      d("div", ti, [
                        e("div", ai, [
                          e(
                            "img",
                            { src: $(ye)("wallet", "hint") },
                            null,
                            8,
                            ni
                          ),
                          e(
                            "span",
                            null,
                            t(E.$t("tipBindUrOwnCardToEnsureFundSafety")),
                            1
                          ),
                        ]),
                        e("div", si, [
                          e("div", oi, [
                            _(_e, { name: "bank" }),
                            R(" " + t(E.$t("selectBank")), 1),
                          ]),
                          e("div", { class: "selectB", onClick: xe }, [
                            R(t(I.value) + " ", 1),
                            _(He, { name: "arrow" }),
                          ]),
                        ]),
                        y("验证收款人姓名"),
                        e("div", li, [
                          e("div", ii, [
                            _(_e, { name: "name" }),
                            R(" " + t(E.$t("payeeName")), 1),
                          ]),
                          ne(
                            e(
                              "input",
                              {
                                placeholder: E.$t("phEnterPayeeName"),
                                "onUpdate:modelValue":
                                  ee[0] ||
                                  (ee[0] = (ce) => (B.beneficiaryname = ce)),
                                maxlength: "50",
                                onInput:
                                  ee[1] ||
                                  (ee[1] = (ce) => $(D)(B, "beneficiaryname")),
                                readonly: $(l),
                              },
                              null,
                              40,
                              ri
                            ),
                            [[he, B.beneficiaryname, void 0, { trim: !0 }]]
                          ),
                          V.value
                            ? (s(), d("span", di, t(E.$t("validateDesc21")), 1))
                            : y("v-if", !0),
                          V.value
                            ? (s(),
                              d(
                                "p",
                                ci,
                                t(E.$t("example")) + " : DINH THI HUYEN",
                                1
                              ))
                            : y("v-if", !0),
                        ]),
                        e("div", ui, [
                          e("div", vi, [
                            _(_e, { name: "bankCard" }),
                            R(" " + t(E.$t("bankcardNo")), 1),
                          ]),
                          ne(
                            e(
                              "input",
                              {
                                placeholder: E.$t("phEnterBankcardNo"),
                                "onUpdate:modelValue":
                                  ee[2] || (ee[2] = (ce) => (B.accountno = ce)),
                                maxlength: "25",
                                onInput: K,
                              },
                              null,
                              40,
                              pi
                            ),
                            [[he, B.accountno, void 0, { trim: !0 }]]
                          ),
                        ]),
                        e("div", _i, [
                          e("div", mi, [
                            _(_e, { name: "phone" }),
                            R(" " + t(E.$t("tel")), 1),
                          ]),
                          ne(
                            e(
                              "input",
                              {
                                placeholder: E.$t("phEnterPayeeTel"),
                                "onUpdate:modelValue":
                                  ee[3] || (ee[3] = (ce) => (B.mobileno = ce)),
                                maxlength: "12",
                                onInput:
                                  ee[4] ||
                                  (ee[4] = (ce) => $(b)(B, "mobileno")),
                              },
                              null,
                              40,
                              hi
                            ),
                            [[he, B.mobileno, void 0, { trim: !0 }]]
                          ),
                        ]),
                        $(v)
                          ? (s(),
                            d("div", wi, [
                              e("div", fi, [
                                _(_e, { name: "email" }),
                                R(" " + t(E.$t("email")), 1),
                              ]),
                              ne(
                                e(
                                  "input",
                                  {
                                    type: "text",
                                    placeholder: E.$t("inputemail"),
                                    "onUpdate:modelValue":
                                      ee[5] || (ee[5] = (ce) => (B.email = ce)),
                                    maxlength: "250",
                                  },
                                  null,
                                  8,
                                  yi
                                ),
                                [[he, B.email, void 0, { trim: !0 }]]
                              ),
                            ]))
                          : y("v-if", !0),
                        w.value
                          ? (s(),
                            d("div", gi, [
                              e("div", $i, [
                                _(_e, { name: "ifscCode" }),
                                R(" " + t(E.$t("IFSCCode")), 1),
                              ]),
                              ne(
                                e(
                                  "input",
                                  {
                                    placeholder:
                                      E.$t("phEnter") + E.$t("IFSCCode"),
                                    "onUpdate:modelValue":
                                      ee[6] ||
                                      (ee[6] = (ce) => (B.ifsccode = ce)),
                                    onBlur: Ie,
                                    onInput: W,
                                    maxlength: "11",
                                  },
                                  null,
                                  40,
                                  ki
                                ),
                                [[he, B.ifsccode, void 0, { trim: !0 }]]
                              ),
                            ]))
                          : y("v-if", !0),
                        T.value
                          ? (s(),
                            d("div", bi, [
                              e("div", Ci, [
                                _(_e, { name: "address" }),
                                R(" Routing Number "),
                              ]),
                              ne(
                                e(
                                  "input",
                                  {
                                    placeholder:
                                      E.$t("phEnter") + " Routing Number",
                                    "onUpdate:modelValue":
                                      ee[7] ||
                                      (ee[7] = (ce) => (B.ifsccode = ce)),
                                  },
                                  null,
                                  8,
                                  Ti
                                ),
                                [[he, B.ifsccode, void 0, { trim: !0 }]]
                              ),
                            ]))
                          : y("v-if", !0),
                        !w.value && !T.value
                          ? (s(),
                            d("div", Si, [
                              e("div", Ni, [
                                _(_e, { name: "address" }),
                                R(" " + t(E.$t("branchBankAddr")), 1),
                              ]),
                              ne(
                                e(
                                  "textarea",
                                  {
                                    class: "textarea",
                                    name: "remark",
                                    id: "",
                                    cols: "30",
                                    rows: "10",
                                    placeholder: E.$t("phEnterBranchAddr"),
                                    "onUpdate:modelValue":
                                      ee[8] ||
                                      (ee[8] = (ce) =>
                                        (B.bankbranchaddress = ce)),
                                    maxlength: "100",
                                  },
                                  null,
                                  8,
                                  Wi
                                ),
                                [
                                  [
                                    he,
                                    B.bankbranchaddress,
                                    void 0,
                                    { trim: !0 },
                                  ],
                                ]
                              ),
                            ]))
                          : y("v-if", !0),
                        e("div", Ai, [
                          e(
                            "button",
                            { class: se({ active: oe.value }), onClick: O },
                            t(E.$t("save")),
                            3
                          ),
                        ]),
                      ]))
                    : (s(),
                      d("div", Ii, [
                        y("选择银行卡"),
                        _(Pt, { bankList: $(F), onOnSelectItem: C }, null, 8, [
                          "bankList",
                        ]),
                      ])),
                ]),
                _(
                  Jl,
                  {
                    modelValue: n.value,
                    "onUpdate:modelValue":
                      ee[9] || (ee[9] = (ce) => (n.value = ce)),
                    list: p.value,
                    onChangeBank: Be,
                  },
                  null,
                  8,
                  ["modelValue", "list"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  });
const Ui = ae(Bi, [
    ["__scopeId", "data-v-1726638e"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/AddBankCard/index.vue",
    ],
  ]),
  Bv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ui },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Di = { class: "addKBZ" },
  Pi = { class: "addKBZ-top" },
  Ri = ["src"],
  Mi = { class: "addKBZ-item" },
  Li = { class: "label" },
  Oi = { class: "selectB" },
  Vi = { class: "addKBZ-item" },
  qi = { class: "label" },
  ji = ["placeholder", "readonly"],
  zi = { class: "addKBZ-item" },
  Fi = { class: "label" },
  Ei = ["placeholder"],
  xi = te({
    __name: "index",
    setup(k) {
      const {
          iseditor: n,
          onInput: r,
          checkAccoutNo: m,
          onLoad: i,
          makeTxt: c,
        } = Ae(),
        { t: u } = we(),
        o = pe(),
        { setLoading: v } = We();
      let h = me([]);
      const a = g(""),
        { isOpenWithdraw: p } = Le(),
        l = me({
          smsCode: "",
          withdrawId: 8,
          bankId: 0,
          mobileNo: "",
          beneficiaryName: "",
          type: "",
          codeType: Ce.addKBZ,
        }),
        b = L(
          () =>
            !(
              l.mobileNo.trim().length == 0 ||
              l.bankId == 0 ||
              l.beneficiaryName.trim().length == 0
            )
        );
      async function f() {
        const w = await J(Me({ withdrawid: 8 }));
        w &&
          ((h = w.data.banklist),
          (a.value = h.length > 0 ? h[0].bankName : ""),
          (l.bankId = h.length > 0 ? h[0].bankID : 0));
      }
      ve(async () => {
        await f();
      });
      const U = () =>
          !b.value || !localStorage.getItem("numberType")
            ? !1
            : l.bankId == 0
            ? x({ message: u("addCardMsg1"), wordBreak: "break-word" })
            : l.beneficiaryName.toString().trim().length == 0
            ? x({ message: u("phEnterName"), wordBreak: "break-word" })
            : l.mobileNo.toString().trim().length == 0
            ? x({ message: u("addCardMsg4"), wordBreak: "break-word" })
            : m(l.mobileNo, u("tel") + u("formatErr"))
            ? ut(localStorage.getItem("numberType"), l.mobileNo.trim().length)
              ? !0
              : x({ message: u("wrongTel"), wordBreak: "break-word" })
            : void 0,
        I = Oe({
          content: () =>
            _(
              Ve,
              {
                type: l.type,
                "onUpdate:type": (w) => (l.type = w),
                code: l.smsCode,
                "onUpdate:code": (w) => (l.smsCode = w),
                onConfirm: A,
                codeType: Ce.addKBZ,
              },
              null
            ),
          beforeClose: () => {
            l.smsCode = "";
          },
        });
      async function C() {
        if (U() === !0) {
          if (((l.smsCode = ""), p.value)) return I.open();
          await A();
        }
      }
      async function A() {
        v(!0),
          (await J(at(l))) &&
            (I.close(),
            o.replace({
              name: "Withdraw",
              query: { type: "Add" },
              replace: !0,
            })),
          v(!1);
      }
      function V() {
        o.replace({ name: "Withdraw", query: { type: "Add" } });
      }
      return (
        i(l, "beneficiaryName"),
        (w, T) => {
          const F = P("NavBar"),
            Z = P("svg-icon");
          return (
            s(),
            d("div", Di, [
              _(
                F,
                {
                  title: `${w.$t("addto")} KBZPay`,
                  "left-arrow": "",
                  onClickLeft: V,
                },
                null,
                8,
                ["title"]
              ),
              e("div", Pi, [
                e("img", { src: $(ye)("wallet", "hint") }, null, 8, Ri),
                e("span", null, t(w.$t("WaveTip1")), 1),
              ]),
              e("div", Mi, [
                e("div", Li, [
                  _(Z, { name: "bank" }),
                  R(" " + t(w.$t("bankname")), 1),
                ]),
                e("div", Oi, t(a.value), 1),
              ]),
              e("div", Vi, [
                e("div", qi, [
                  _(Z, { name: "name" }),
                  R(" " + t(w.$t("name")), 1),
                ]),
                ne(
                  e(
                    "input",
                    {
                      placeholder: w.$t("phEnterName"),
                      "onUpdate:modelValue":
                        T[0] || (T[0] = (S) => (l.beneficiaryName = S)),
                      maxlength: "50",
                      onInput:
                        T[1] || (T[1] = (S) => $(c)(l, "beneficiaryName")),
                      readonly: $(n),
                    },
                    null,
                    40,
                    ji
                  ),
                  [[he, l.beneficiaryName, void 0, { trim: !0 }]]
                ),
              ]),
              e("div", zi, [
                e("div", Fi, [
                  _(Z, { name: "phone" }),
                  R(" " + t(w.$t("tel")), 1),
                ]),
                ne(
                  e(
                    "input",
                    {
                      placeholder: w.$t("phEnterPayeeTel"),
                      "onUpdate:modelValue":
                        T[2] || (T[2] = (S) => (l.mobileNo = S)),
                      maxlength: 12,
                      onInput: T[3] || (T[3] = (S) => $(r)(l, "mobileNo")),
                    },
                    null,
                    40,
                    Ei
                  ),
                  [[he, l.mobileNo, void 0, { trim: !0 }]]
                ),
              ]),
              e(
                "div",
                { class: se(["addKBZ-btn", { active: b.value }]), onClick: C },
                t(w.$t("save")),
                3
              ),
            ])
          );
        }
      );
    },
  });
const Hi = ae(xi, [
    ["__scopeId", "data-v-ee22f671"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/AddKbz/index.vue",
    ],
  ]),
  Uv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Hi },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Zi = (k) => (Se("data-v-9694f22e"), (k = k()), Ne(), k),
  Gi = { class: "addBankCard__container" },
  Ki = { class: "addBankCard__container-content" },
  Qi = { class: "addBankCard__container-content-top" },
  Yi = { class: "addBankCard__container-content-top-item" },
  Xi = { class: "label" },
  Ji = ["readonly", "placeholder"],
  er = { class: "addBankCard__container-content-top-item" },
  tr = Zi(() => e("div", { class: "label" }, "CPF", -1)),
  ar = ["readonly", "placeholder"],
  nr = { class: "addBankCard__container-content-top-item" },
  sr = { class: "label" },
  or = { class: "ar-searchbar" },
  lr = { class: "addBankCard__container-content-top-item" },
  ir = { class: "label" },
  rr = { class: "accountNo" },
  dr = { key: 0 },
  cr = ["placeholder"],
  ur = ["placeholder"],
  vr = { class: "addBankCard__container-content-btn" },
  pr = { class: "search" },
  _r = te({
    __name: "index",
    setup(k) {
      const { getSelfCustomerServiceLink: n } = St({ ServerType: 2 }),
        { t: r } = we(),
        { setLoading: m } = We(),
        i = pe(),
        c = g(""),
        u = g(!1),
        o = i.currentRoute.value.query.fromV || "Withdraw-PIX";
      function v() {
        i.replace({ name: o, query: { type: "Add" } });
      }
      const { isOpenWithdraw: h } = Le(),
        a = me({
          bankId: 0,
          accountNo: "",
          name: "",
          cpf: "",
          smsCode: "",
          type: "",
          codeType: Ce.addPIX,
          pixType: "",
        }),
        p = g(localStorage.getItem("numberType")),
        l = g("");
      let b = g([]),
        f = me([]);
      const U = L(
          () =>
            !(
              a.accountNo.trim().length == 0 ||
              a.name.trim().length == 0 ||
              a.cpf.trim().length == 0 ||
              a.bankId == 0
            )
        ),
        D = () => {
          n();
        };
      function I(M) {
        M.preventDefault();
        const re = M.clipboardData.getData("text").replace(/[^\d]/g, "");
        (M.target.value = re),
          M.target.id == "cpf"
            ? (a.cpf = re)
            : M.target.id == "accountNo" && (a.accountNo = re);
      }
      const C = () => {
        if (U.value)
          return a.name.trim().length == 0
            ? x({ message: r("phEnterPayeeName"), wordBreak: "break-word" })
            : a.cpf.trim().length == 0
            ? x({ message: r("enterCpf"), wordBreak: "break-word" })
            : B(a.cpf.trim())
            ? a.bankId == 0
              ? x({ message: r("tipsCpf2"), wordBreak: "break-word" })
              : a.accountNo.trim().length == 0
              ? x({ message: r("tipsCpf3"), wordBreak: "break-word" })
              : (c.value.toUpperCase().indexOf("PHONE") != -1 ||
                  c.value.toUpperCase().indexOf("CPF") != -1) &&
                a.accountNo.trim().length != 11
              ? x({ message: r("tipsCpf4"), wordBreak: "break-word" })
              : c.value.toUpperCase().indexOf("CPF") != -1 &&
                a.accountNo != a.cpf
              ? x({ message: r("pixTip1"), wordBreak: "break-word" })
              : ["EMALL", "EMAIL"].includes(c.value.toUpperCase()) &&
                !Bt.email1.test(a.accountNo.trim())
              ? x({ message: r(Ut.email), wordBreak: "break-word" })
              : !0
            : x({ message: r("tipsCpf1"), wordBreak: "break-word" });
      };
      async function A() {
        if (C() === !0) {
          if (((a.smsCode = ""), h.value)) return Q.open();
          await V();
        }
      }
      async function V() {
        m(!0);
        let M = a;
        if (c.value.toUpperCase().indexOf("PHONE") != -1) {
          const re = p.value + a.accountNo;
          M = Object.assign({}, a, { accountNo: re });
        }
        (await J(na(M))) &&
          (ze(r("addedSuccessfully")),
          Q.close(),
          (a.accountNo = ""),
          await i.replace({ name: o, query: { type: "Add" }, replace: !0 })),
          m(!1);
      }
      const w = g(!0);
      async function T() {
        const M = await J(sa());
        M && M.data != null
          ? ((w.value = !0),
            (a.name = M.data.realName),
            (a.cpf = M.data.idCard))
          : (w.value = !1);
      }
      async function F() {
        const M = await J(Me({ withdrawid: 5 }));
        M &&
          ((f = M.data.banklist),
          (c.value = f.length > 0 ? f[0].bankName : ""),
          (a.bankId = f.length > 0 ? f[0].bankID : 0),
          (b.value = f),
          Z());
      }
      Pe(l, () => {
        f.length > 0 &&
          (b.value = f.filter(
            (M) =>
              M.bankName.toLowerCase().indexOf(l.value.toLowerCase()) !== -1
          ));
      });
      function Z() {
        (a.accountNo = ""),
          (a.pixType = ""),
          c.value.toUpperCase().indexOf("CPF") != -1 &&
            ((a.pixType = "cpf"),
            a.cpf.trim().length != 0 && (a.accountNo = a.cpf));
      }
      Pe(u, () => {
        u.value && (l.value = "");
      });
      function S() {
        u.value = !0;
      }
      const G = ({ selectedOptions: M }) => {
        (u.value = !1),
          M[0] && ((c.value = M[0].bankName), (a.bankId = M[0].bankID), Z());
      };
      function B(M) {
        if (
          ((M = M.replace(/[^\d]+/g, "")),
          M == "" ||
            M.length != 11 ||
            M == "00000000000" ||
            M == "11111111111" ||
            M == "22222222222" ||
            M == "33333333333" ||
            M == "44444444444" ||
            M == "55555555555" ||
            M == "66666666666" ||
            M == "77777777777" ||
            M == "88888888888" ||
            M == "99999999999")
        )
          return !1;
        let oe = 0;
        for (let O = 0; O < 9; O++) oe += parseInt(M.charAt(O)) * (10 - O);
        let re = 11 - (oe % 11);
        if (((re == 10 || re == 11) && (re = 0), re != parseInt(M.charAt(9))))
          return !1;
        oe = 0;
        for (let O = 0; O < 10; O++) oe += parseInt(M.charAt(O)) * (11 - O);
        return (
          (re = 11 - (oe % 11)),
          (re == 10 || re == 11) && (re = 0),
          re == parseInt(M.charAt(10))
        );
      }
      ve(async () => {
        await T(), await F();
      });
      const Q = Oe({
        content: () =>
          _(
            Ve,
            {
              type: a.type,
              "onUpdate:type": (M) => (a.type = M),
              code: a.smsCode,
              "onUpdate:code": (M) => (a.smsCode = M),
              onConfirm: V,
              codeType: Ce.addPIX,
            },
            null
          ),
        beforeClose: () => {
          a.smsCode = "";
        },
      });
      return (M, oe) => {
        const re = P("NavBar"),
          O = P("svg-icon"),
          j = P("ArSelect"),
          K = P("van-picker"),
          fe = P("van-popup");
        return (
          s(),
          d("div", Gi, [
            _(
              re,
              {
                title: M.$t("paymentMethod"),
                "left-arrow": "",
                onClickLeft: v,
              },
              null,
              8,
              ["title"]
            ),
            e("div", Ki, [
              e("h1", null, [_(O, { name: "pix" }), R(t(M.$t("pixInfo")), 1)]),
              e("div", Qi, [
                e("div", Yi, [
                  e("div", Xi, t(M.$t("payeeName")), 1),
                  ne(
                    e(
                      "input",
                      {
                        readonly: w.value,
                        placeholder: M.$t("phEnterPayeeName"),
                        "onUpdate:modelValue":
                          oe[0] || (oe[0] = (W) => (a.name = W)),
                      },
                      null,
                      8,
                      Ji
                    ),
                    [[he, a.name]]
                  ),
                ]),
                e("div", er, [
                  tr,
                  ne(
                    e(
                      "input",
                      {
                        readonly: w.value,
                        placeholder: M.$t("enterCpf"),
                        "onUpdate:modelValue":
                          oe[1] || (oe[1] = (W) => (a.cpf = W)),
                        maxlength: "11",
                        oninput: "value=value.replace(/\\D/g,'')",
                        onPaste: I,
                        id: "cpf",
                      },
                      null,
                      40,
                      ar
                    ),
                    [[he, a.cpf]]
                  ),
                ]),
                e("div", nr, [
                  e("div", sr, t(M.$t("pixType")), 1),
                  e("div", or, [
                    _(j, { onClickSelect: S, selectName: c.value }, null, 8, [
                      "selectName",
                    ]),
                  ]),
                ]),
                e("div", lr, [
                  e("div", ir, t(M.$t("pixAccount")), 1),
                  e("div", rr, [
                    c.value.toUpperCase().indexOf("PHONE") != -1
                      ? (s(), d("div", dr, "+" + t(p.value), 1))
                      : y("v-if", !0),
                    y("phone只能输入数字"),
                    c.value.toUpperCase().indexOf("PHONE") != -1 ||
                    c.value.toUpperCase().indexOf("CPF") != -1
                      ? ne(
                          (s(),
                          d(
                            "input",
                            {
                              key: 1,
                              placeholder: M.$t("enterPixAccount"),
                              "onUpdate:modelValue":
                                oe[2] || (oe[2] = (W) => (a.accountNo = W)),
                              oninput: "value=value.replace(/\\D/g,'')",
                              maxlength: "11",
                              onPaste: I,
                              id: "accountNo",
                            },
                            null,
                            40,
                            cr
                          )),
                          [[he, a.accountNo, void 0, { trim: !0 }]]
                        )
                      : ne(
                          (s(),
                          d(
                            "input",
                            {
                              key: 2,
                              placeholder: M.$t("enterPixAccount"),
                              "onUpdate:modelValue":
                                oe[3] || (oe[3] = (W) => (a.accountNo = W)),
                              oninput: "value=value.replace(/\\s+/g,'')",
                              maxlength: "40",
                            },
                            null,
                            8,
                            ur
                          )),
                          [[he, a.accountNo, void 0, { trim: !0 }]]
                        ),
                  ]),
                ]),
              ]),
            ]),
            e("div", vr, [
              e(
                "button",
                { class: se({ active: U.value }), onClick: A },
                t(M.$t("save")),
                3
              ),
              e("div", { onClick: D }, [
                _(O, { name: "iconservr-r" }),
                R(t(M.$t("withdrawDialogDesc5")), 1),
              ]),
            ]),
            _(
              fe,
              {
                show: u.value,
                "onUpdate:show": oe[6] || (oe[6] = (W) => (u.value = W)),
                round: "",
                position: "bottom",
              },
              {
                default: X(() => [
                  e("div", pr, [
                    _(
                      $a,
                      {
                        placeholder: M.$t("searchPixType"),
                        value: l.value,
                        "onUpdate:value":
                          oe[4] || (oe[4] = (W) => (l.value = W)),
                        isShowClose: !0,
                      },
                      null,
                      8,
                      ["placeholder", "value"]
                    ),
                  ]),
                  _(
                    K,
                    {
                      "columns-field-names": {
                        text: "bankName",
                        value: "bankID",
                        children: "children",
                      },
                      columns: $(b),
                      onCancel: oe[5] || (oe[5] = (W) => (u.value = !1)),
                      onConfirm: G,
                    },
                    null,
                    8,
                    ["columns"]
                  ),
                ]),
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
const mr = ae(_r, [
    ["__scopeId", "data-v-9694f22e"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/AddPIX/index.vue",
    ],
  ]),
  Dv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hr = { class: "addtype4_C" },
  wr = { class: "addtype4_C-header" },
  fr = { class: "addtype4_C-title" },
  yr = { class: "selectB" },
  gr = { class: "addtype4_C-title" },
  $r = { class: "successTip" },
  kr = te({
    __name: "index",
    setup(k) {
      const { t: n } = we(),
        r = pe(),
        { isOpenWithdraw: m } = Le(),
        i = r.currentRoute.value.query.Type4name,
        c = g(!1),
        u = me({
          withdrawId: 22,
          mobileNo: "",
          bankId: "",
          smsCode: "",
          beneficiaryName: "",
          type: "",
          codeType: Ce.addEWallet,
        }),
        o = g({ bankName: "", bankID: 0, reserved: "" });
      g(!1);
      const v = () => {
          r.replace({
            name: "Withdraw-RsnPay",
            query: { type: "Add", Type4name: i },
          });
        },
        h = L(() => u.mobileNo);
      let a = g([]);
      async function p() {
        var I;
        const D = await J(Me({ withdrawid: 22 }));
        D &&
          ((a.value = D.data.banklist),
          ((I = D == null ? void 0 : D.data) == null
            ? void 0
            : I.banklist.length) > 0 &&
            ((o.value = D.data.banklist[0]),
            (u.bankId = D.data.banklist[0].bankID)));
      }
      ve(async () => {
        await p();
      });
      const l = async () => {
          (await J(at(u))) &&
            (ze(n("addedSuccessfully")),
            f.close(),
            r.replace({ name: "Withdraw", query: { bid: 0, type: 22 } }),
            r.replace({
              name: "Withdraw-RsnPay",
              query: { type: "Add", Type4name: i },
            }));
        },
        f = Oe({
          content: () =>
            _(
              Ve,
              {
                type: u.type,
                "onUpdate:type": (D) => (u.type = D),
                code: u.smsCode,
                "onUpdate:code": (D) => (u.smsCode = D),
                onConfirm: l,
                codeType: Ce.addEWallet,
              },
              null
            ),
          beforeClose: () => {
            u.smsCode = "";
          },
        }),
        U = async () => {
          if (m.value) return f.open();
          await l();
        };
      return (D, I) => {
        const C = P("NavBar"),
          A = P("van-field"),
          V = P("van-toast");
        return (
          s(),
          d(
            H,
            null,
            [
              e("div", hr, [
                _(
                  C,
                  {
                    title: $(i) + $(n)("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: v,
                  },
                  null,
                  8,
                  ["title"]
                ),
                e("div", wr, t($(i)), 1),
                e("div", fr, t(D.$t("bankname")), 1),
                e("div", yr, t(o.value.bankName), 1),
                y(` <van-field
			class="addtype4-input"
			v-model="activeBink.bankName"
			:readonly="true"
			disabled
			:placeholder="$t('tipSelectPls')"
		/> `),
                e("div", gr, t(D.$t("walletAddress")), 1),
                _(
                  A,
                  {
                    class: "addtype4-input",
                    modelValue: u.mobileNo,
                    "onUpdate:modelValue":
                      I[0] || (I[0] = (w) => (u.mobileNo = w)),
                    modelModifiers: { trim: !0 },
                    placeholder: D.$t("phEnter") + D.$t("walletAddress"),
                  },
                  null,
                  8,
                  ["modelValue", "placeholder"]
                ),
                e(
                  "div",
                  {
                    class: se(["sumbitBtn", { disable: !h.value }]),
                    onClick: U,
                  },
                  t(D.$t("save")),
                  3
                ),
                _(
                  V,
                  {
                    show: c.value,
                    "onUpdate:show": I[1] || (I[1] = (w) => (c.value = w)),
                  },
                  {
                    message: X(() => [
                      e("div", $r, [
                        e("div", null, t(D.$t("addedSuccessfully")), 1),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["show"]
                ),
              ]),
              y(` <van-popup v-model:show="showPicker" round position="bottom">
		<van-picker
			:columns="originalBankList"
			:columns-field-names="customFieldName"
			@cancel="showPicker = false"
			@confirm="onConfirm"
		/>
	</van-popup> `),
            ],
            2112
          )
        );
      };
    },
  });
const br = ae(kr, [
    ["__scopeId", "data-v-81838f32"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/AddRsnPay/index.vue",
    ],
  ]),
  Pv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: br },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Cr = { class: "addtype4_C" },
  Tr = { class: "addtype4_C-header" },
  Sr = { class: "addtype4_C-title" },
  Nr = { class: "addtype4_C-title" },
  Wr = { class: "selectB" },
  Ar = { class: "addtype4_C-title" },
  Ir = { class: "addtype4_C-title" },
  Br = { class: "successTip" },
  Ur = te({
    __name: "index",
    setup(k) {
      const { iseditor: n, onLoad: r, makeTxt: m } = Ae(),
        { t: i } = we(),
        c = pe(),
        { isOpenWithdraw: u } = Le(),
        o = c.currentRoute.value.query.Type4name,
        v = Number(c.currentRoute.value.query.withdrawType),
        h = g(!1),
        a = me({
          withdrawId: v,
          mobileNo: "",
          bankId: "",
          smsCode: "",
          beneficiaryName: "",
          type: "",
          codeType: Ce.addEWallet,
        }),
        p = g({ bankName: "", bankID: 0, reserved: "" }),
        l = g(!1),
        b = () => {
          c.replace({
            name: "Withdraw-Type4",
            query: { type: "Add", Type4name: o, withdrawType: v },
          });
        },
        f = { text: "bankName", value: "bankID" },
        U = L(() => a.mobileNo && a.bankId && a.beneficiaryName),
        D = {}.VITE_ADDTYPE4_ONLY_NUM === "1",
        I = L(() => (D || [23, 24].includes(v) ? "digit" : "text"));
      let C = g([]);
      async function A() {
        const z = await J(Me({ withdrawid: v }));
        z &&
          ((C.value = z.data.banklist),
          [23, 24].includes(v) &&
            ((p.value = z.data.banklist[0]),
            (a.bankId = z.data.banklist[0].bankID)));
      }
      ve(async () => {
        await A();
      });
      const V = async () => {
          (await J(at({ ...a }))) &&
            (ze(i("addedSuccessfully")),
            T.close(),
            c.replace({
              name: "Withdraw-Type4",
              query: { type: "Add", Type4name: o, withdrawType: v },
            }));
        },
        T = Oe({
          content: () =>
            _(
              Ve,
              {
                type: a.type,
                "onUpdate:type": (z) => (a.type = z),
                code: a.smsCode,
                "onUpdate:code": (z) => (a.smsCode = z),
                onConfirm: V,
                codeType: Ce.addEWallet,
              },
              null
            ),
          beforeClose: () => {
            a.smsCode = "";
          },
        }),
        F = (z) => {
          let Q = { ...z.selectedOptions[0] };
          (p.value = Q), (a.bankId = Q.bankID), (l.value = !1);
        };
      function Z(z) {
        return /^[A-Za-z\d]{8,15}$/.test(z)
          ? !0
          : (x({
              message: i("account") + i("formatErr"),
              wordBreak: "break-word",
            }),
            !1);
      }
      function S(z, Q) {
        return /^[0-9]{8,15}$/.test(z)
          ? !0
          : (x({ message: Q, wordBreak: "break-word" }), !1);
      }
      const G = () => {
          if (
            !(
              a.mobileNo.toString().trim().length > 0 &&
              !(D
                ? S(a.mobileNo, i("account") + i("formatErr"))
                : Z(a.mobileNo))
            )
          )
            return !0;
        },
        B = async () => {
          if (G() === !0) {
            if (u.value) return T.open();
            await V();
          }
        };
      return (
        r(a, "beneficiaryName"),
        (z, Q) => {
          const M = P("NavBar"),
            oe = P("van-field"),
            re = P("van-toast"),
            O = P("van-picker"),
            j = P("van-popup");
          return (
            s(),
            d(
              H,
              null,
              [
                e("div", Cr, [
                  _(
                    M,
                    {
                      title: $(o) + " " + $(i)("paymentMethod"),
                      "left-arrow": "",
                      onClickLeft: b,
                    },
                    null,
                    8,
                    ["title"]
                  ),
                  e("div", Tr, t($(o)), 1),
                  $(v) == 4
                    ? (s(),
                      d(
                        H,
                        { key: 0 },
                        [
                          e("div", Sr, t(z.$t("selectType")), 1),
                          _(
                            oe,
                            {
                              class: "addtype4-input",
                              modelValue: p.value.bankName,
                              "onUpdate:modelValue":
                                Q[0] || (Q[0] = (K) => (p.value.bankName = K)),
                              readonly: !0,
                              "right-icon": "arrow-down",
                              placeholder: z.$t("tipSelectPls"),
                              onClick: Q[1] || (Q[1] = (K) => (l.value = !0)),
                            },
                            null,
                            8,
                            ["modelValue", "placeholder"]
                          ),
                        ],
                        64
                      ))
                    : (s(),
                      d(
                        H,
                        { key: 1 },
                        [
                          e("div", Nr, t(z.$t("bankname")), 1),
                          e("div", Wr, t(p.value.bankName), 1),
                        ],
                        64
                      )),
                  e("div", Ar, t(z.$t("name")), 1),
                  _(
                    oe,
                    {
                      class: "addtype4-input",
                      modelValue: a.beneficiaryName,
                      "onUpdate:modelValue":
                        Q[2] || (Q[2] = (K) => (a.beneficiaryName = K)),
                      maxlength: 50,
                      placeholder: z.$t("phEnter") + z.$t("name"),
                      onInput:
                        Q[3] || (Q[3] = (K) => $(m)(a, "beneficiaryName")),
                      readonly: $(n),
                    },
                    null,
                    8,
                    ["modelValue", "placeholder", "readonly"]
                  ),
                  e("div", Ir, t(z.$t("account")), 1),
                  _(
                    oe,
                    {
                      class: "addtype4-input",
                      modelValue: a.mobileNo,
                      "onUpdate:modelValue":
                        Q[4] || (Q[4] = (K) => (a.mobileNo = K)),
                      modelModifiers: { trim: !0 },
                      maxlength: 15,
                      type: I.value,
                      placeholder: z.$t("phEnter") + z.$t("account"),
                    },
                    null,
                    8,
                    ["modelValue", "type", "placeholder"]
                  ),
                  e(
                    "div",
                    {
                      class: se(["sumbitBtn", { disable: !U.value }]),
                      onClick: B,
                    },
                    t(z.$t("save")),
                    3
                  ),
                  _(
                    re,
                    {
                      show: h.value,
                      "onUpdate:show": Q[5] || (Q[5] = (K) => (h.value = K)),
                    },
                    {
                      message: X(() => [
                        e("div", Br, [
                          e("div", null, t(z.$t("addedSuccessfully")), 1),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["show"]
                  ),
                ]),
                _(
                  j,
                  {
                    show: l.value,
                    "onUpdate:show": Q[7] || (Q[7] = (K) => (l.value = K)),
                    round: "",
                    position: "bottom",
                  },
                  {
                    default: X(() => [
                      _(
                        O,
                        {
                          columns: $(C),
                          "columns-field-names": f,
                          onCancel: Q[6] || (Q[6] = (K) => (l.value = !1)),
                          onConfirm: F,
                        },
                        null,
                        8,
                        ["columns"]
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
        }
      );
    },
  });
const Dr = ae(Ur, [
    ["__scopeId", "data-v-497422b6"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/AddType4/index.vue",
    ],
  ]),
  Rv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Dr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pr = { class: "addUSDT__container" },
  Rr = { class: "addUSDT__container-content" },
  Mr = { class: "addUSDT__container-content-top" },
  Lr = ["src"],
  Or = { class: "addUSDT__container-content-item" },
  Vr = { class: "label" },
  qr = { class: "ar-searchbar" },
  jr = { class: "addUSDT__container-content-item" },
  zr = { class: "label" },
  Fr = { class: "input" },
  Er = ["placeholder", "maxlength"],
  xr = { class: "addUSDT__container-content-item" },
  Hr = { class: "label" },
  Zr = ["placeholder"],
  Gr = { class: "addUSDT__container-content-btn" },
  Kr = te({
    __name: "index",
    setup(k) {
      const { t: n } = we(),
        { isOpenWithdraw: r } = Le(),
        { setLoading: m } = We(),
        i = pe(),
        c = i.currentRoute.value.query.fromV || "Withdraw-USDT";
      function u() {
        i.replace({ name: c, query: { type: "Add" } });
      }
      const o = g(!1);
      let v = me([]);
      async function h() {
        const T = await J(Me({ withdrawid: 3 }));
        T &&
          ((v = T.data.banklist),
          (a.value = v.length > 0 ? v[0].bankName : ""),
          (f.bankid = v.length > 0 ? v[0].bankID : 0));
      }
      const a = g(""),
        p = ({ selectedOptions: T }) => {
          (o.value = !1), (a.value = T[0].bankName), (f.bankid = T[0].bankID);
        };
      function l() {
        o.value = !0;
      }
      const b = L(() =>
          a.value.toUpperCase().indexOf("TRC") != -1
            ? 36
            : a.value.toUpperCase().indexOf("ERC") != -1
            ? 46
            : 100
        ),
        f = me({
          withdrawid: 3,
          bankid: 0,
          usdtaddress: "",
          smsCode: "",
          usdtRemarkName: "",
          type: "",
          codeType: Ce.addUSDT,
        }),
        U = (T) => {
          const F = T.target;
          f.usdtaddress = F.value.replace(/[^\w\/]/gi, "");
        },
        D = L(
          () =>
            !(
              f.usdtRemarkName.trim().length == 0 ||
              f.bankid == 0 ||
              f.usdtaddress.trim().length == 0
            )
        ),
        I = () => {
          if (D.value)
            return f.bankid == 0
              ? x({ message: n("onConfirmMsg1"), wordBreak: "break-word" })
              : f.usdtaddress.toString().trim().length == 0
              ? x({ message: n("onConfirmMsg2"), wordBreak: "break-word" })
              : f.usdtaddress.trim().length < 30
              ? x({ message: n("onConfirmMsg4"), wordBreak: "break-word" })
              : a.value.toUpperCase().indexOf("TRC") != -1 &&
                (f.usdtaddress.trim().slice(0, 1) != "T" ||
                  f.usdtaddress.trim().length > 36)
              ? x({ message: n("onConfirmMsg5"), wordBreak: "break-word" })
              : a.value.toUpperCase().indexOf("ERC") != -1 &&
                (f.usdtaddress.trim().slice(0, 2) != "0x" ||
                  f.usdtaddress.trim().length > 46)
              ? x({ message: n("onConfirmMsg5"), wordBreak: "break-word" })
              : f.usdtRemarkName.toString().trim().length == 0
              ? x({ message: n("onConfirmMsg3"), wordBreak: "break-word" })
              : !0;
        };
      async function C() {
        if (I() !== !0) return;
        m(!0),
          (await J(oa(f))) &&
            (ze(n("addedSuccessfully")),
            V.close(),
            await i.replace({ name: c, query: { type: "Add" }, replace: !0 })),
          m(!1);
      }
      ve(async () => {
        await h();
      });
      const V = Oe({
        content: () =>
          _(
            Ve,
            {
              type: f.type,
              "onUpdate:type": (T) => (f.type = T),
              code: f.smsCode,
              "onUpdate:code": (T) => (f.smsCode = T),
              onConfirm: C,
              codeType: f.codeType,
            },
            null
          ),
        beforeClose: () => {
          f.smsCode = "";
        },
      });
      async function w() {
        if (((f.smsCode = ""), I() === !0)) {
          if (r.value) return V.open();
          await C();
        }
      }
      return (T, F) => {
        const Z = P("NavBar"),
          S = P("svg-icon"),
          G = P("ArSelect"),
          B = P("van-picker"),
          z = P("van-popup");
        return (
          s(),
          d("div", Pr, [
            _(
              Z,
              {
                title: T.$t("titleAddUSDTAddr"),
                "left-arrow": "",
                onClickLeft: u,
              },
              null,
              8,
              ["title"]
            ),
            e("div", Rr, [
              e("div", Mr, [
                e("img", { src: $(ye)("wallet", "hint") }, null, 8, Lr),
                e(
                  "span",
                  null,
                  t(T.$t("tipBindUrOwnUSDEAddrForFundSafety")),
                  1
                ),
              ]),
              e("div", Or, [
                e("div", Vr, [
                  _(S, { name: "usdt1", class: "icon" }),
                  R(" " + t(T.$t("selectMainNetwork")), 1),
                ]),
                e("div", qr, [
                  _(G, { onClickSelect: l, selectName: a.value }, null, 8, [
                    "selectName",
                  ]),
                ]),
              ]),
              e("div", jr, [
                e("div", zr, [
                  _(S, { name: "usdt2", class: "icon" }),
                  R(" " + t(T.$t("usedAddr")), 1),
                ]),
                e("div", Fr, [
                  ne(
                    e(
                      "input",
                      {
                        placeholder: T.$t("phEnterUSDTAddr"),
                        maxlength: b.value,
                        "onUpdate:modelValue":
                          F[0] || (F[0] = (Q) => (f.usdtaddress = Q)),
                        onInput: U,
                      },
                      null,
                      40,
                      Er
                    ),
                    [[he, f.usdtaddress]]
                  ),
                ]),
              ]),
              e("div", xr, [
                e("div", Hr, [
                  _(S, { name: "usdt3", class: "icon" }),
                  R(" " + t(T.$t("addressAlias")), 1),
                ]),
                ne(
                  e(
                    "input",
                    {
                      placeholder: T.$t("phEnterUSDTRemarks"),
                      maxlength: "20",
                      "onUpdate:modelValue":
                        F[1] || (F[1] = (Q) => (f.usdtRemarkName = Q)),
                    },
                    null,
                    8,
                    Zr
                  ),
                  [[he, f.usdtRemarkName]]
                ),
              ]),
              e("div", Gr, [
                e(
                  "button",
                  { class: se({ active: D.value }), onClick: w },
                  t(T.$t("save")),
                  3
                ),
              ]),
            ]),
            _(
              z,
              {
                show: o.value,
                "onUpdate:show": F[3] || (F[3] = (Q) => (o.value = Q)),
                round: "",
                position: "bottom",
              },
              {
                default: X(() => [
                  _(
                    B,
                    {
                      "columns-field-names": {
                        text: "bankName",
                        value: "bankID",
                        children: "children",
                      },
                      columns: $(v),
                      onCancel: F[2] || (F[2] = (Q) => (o.value = !1)),
                      onConfirm: p,
                    },
                    null,
                    8,
                    ["columns"]
                  ),
                ]),
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
const Qr = ae(Kr, [
    ["__scopeId", "data-v-24736190"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/AddUSDT/index.vue",
    ],
  ]),
  Mv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Qr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Rt = (k) => (Se("data-v-8ced09ab"), (k = k()), Ne(), k),
  Yr = { class: "addupi_C" },
  Xr = { class: "addupi_C-header wallet_18" },
  Jr = Rt(() => e("div", { class: "addupi_C-title" }, "UPI Name", -1)),
  ed = Rt(() => e("div", { class: "addupi_C-title" }, "UPI ID", -1)),
  td = { class: "addupi_C-title" },
  ad = te({
    __name: "index",
    setup(k) {
      const n = pe(),
        r = tt(),
        m = g(r.getUserForm.numberType),
        i = g(""),
        { t: c } = we(),
        u = g(""),
        { isOpenWithdraw: o } = Le();
      L(() => m.value + "" + i.value);
      const { iseditor: v, onLoad: h, makeTxt: a } = Ae(),
        p = () => {
          n.replace({ name: "Withdraw-Upi", query: { type: "Add" } });
        },
        l = me({
          beneficiaryName: "",
          accountNo: "",
          confirmAccountNo: "",
          smsCode: "",
          type: "",
          codeType: Ce.addNewUPI_N,
        }),
        f = Oe({
          content: () =>
            _(
              Ve,
              {
                type: l.type,
                "onUpdate:type": (w) => (l.type = w),
                code: l.smsCode,
                "onUpdate:code": (w) => (l.smsCode = w),
                onConfirm: A,
                codeType: l.codeType,
              },
              null
            ),
          beforeClose: () => {
            l.smsCode = "";
          },
        }),
        U = (w) => (w.preventDefault(), !1);
      function D(w) {
        var S;
        const T = sessionStorage.getItem("areaPhoneLenList");
        let Z =
          (S = JSON.parse(T).find(
            (G) => w.indexOf(G.area.replace("+", "")) == 0
          )) == null
            ? void 0
            : S.area.replace("+", "");
        Z && ((m.value = Z), (i.value = w.substring(Z.length)));
      }
      const I = L(() => l.beneficiaryName && l.accountNo && i && m),
        C = async () => {
          const w = await J(la());
          (u.value = (w == null ? void 0 : w.data) || ""),
            u.value != "" && D(u.value);
        },
        A = async () => {
          const { confirmAccountNo: w, ...T } = l;
          (await J(ia(T))) &&
            (ze(c("addedSuccessfully")),
            f.close(),
            await n.replace({ name: "Withdraw-Upi" }));
        };
      h(l, "beneficiaryName");
      const V = async () => {
        const w =
          /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/;
        if (!w.test(l.accountNo)) return x(c("UPIID"));
        if (!w.test(l.confirmAccountNo)) return x(c("confirmAccountNo"));
        if (l.accountNo !== l.confirmAccountNo) return x(c("UPIIDNotSame"));
        if (o.value) return f.open();
        A();
      };
      return (
        ve(() => {
          C();
        }),
        (w, T) => {
          const F = P("NavBar"),
            Z = P("svg-icon"),
            S = P("van-field");
          return (
            s(),
            d("div", Yr, [
              _(
                F,
                {
                  title: w.$t("paymentMethod"),
                  "left-arrow": "",
                  onClickLeft: p,
                },
                null,
                8,
                ["title"]
              ),
              e("div", Xr, [
                _(Z, { name: "upi" }),
                R(t(w.$t("UPIInformation")), 1),
              ]),
              Jr,
              _(
                S,
                {
                  class: "upi-input",
                  modelValue: l.beneficiaryName,
                  "onUpdate:modelValue":
                    T[0] || (T[0] = (G) => (l.beneficiaryName = G)),
                  modelModifiers: { trim: !0 },
                  maxlength: 30,
                  placeholder: w.$t("phEnterUPIName"),
                  readonly: $(v),
                  onInput: T[1] || (T[1] = (G) => $(a)(l, "beneficiaryName")),
                  rules: [{ required: !0, message: w.$t("phEnterUPIName") }],
                },
                null,
                8,
                ["modelValue", "placeholder", "readonly", "rules"]
              ),
              ed,
              _(
                S,
                {
                  onPaste: U,
                  class: "upi-input",
                  modelValue: l.accountNo,
                  "onUpdate:modelValue":
                    T[2] || (T[2] = (G) => (l.accountNo = G)),
                  modelModifiers: { trim: !0 },
                  maxlength: 30,
                  type: "text",
                  placeholder: w.$t("phEnterUPIID"),
                },
                null,
                8,
                ["modelValue", "placeholder"]
              ),
              e("div", td, t(w.$t("confirm")) + " UPI ID", 1),
              _(
                S,
                {
                  onPaste: U,
                  class: "upi-input",
                  modelValue: l.confirmAccountNo,
                  "onUpdate:modelValue":
                    T[3] || (T[3] = (G) => (l.confirmAccountNo = G)),
                  modelModifiers: { trim: !0 },
                  maxlength: 30,
                  type: "text",
                  placeholder: w.$t("phEnterUPIID"),
                },
                null,
                8,
                ["modelValue", "placeholder"]
              ),
              y(` <div class="addupi_C-title">{{$t('phoneN') }}</div>
        <div class="addupi_C_number">
            <DropDown v-model:typeValue="numberType" ref="dropDown" @changeT="changeT"/>
            <van-field class="upi-input number" v-model.number.trim="number"  type="digit" :placeholder="$t('plsEnterTel')"/>
        </div>
        <div class="tip"><van-icon name="warning-o" size="14" />{{ $t('upiTip1') }}</div> `),
              e(
                "div",
                {
                  class: se(["bind-bank-sumbit", { disable: !I.value }]),
                  onClick: V,
                },
                t(w.$t("save")),
                3
              ),
            ])
          );
        }
      );
    },
  });
const nd = ae(ad, [
    ["__scopeId", "data-v-8ced09ab"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/AddUpi/index.vue",
    ],
  ]),
  Lv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: nd },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  sd = { class: "addKBZ" },
  od = { class: "addKBZ-top" },
  ld = ["src"],
  id = { class: "addKBZ-item" },
  rd = { class: "label" },
  dd = { class: "selectB" },
  cd = { class: "addKBZ-item" },
  ud = { class: "label" },
  vd = ["placeholder", "readonly"],
  pd = { class: "addKBZ-item" },
  _d = { class: "label" },
  md = ["placeholder"],
  hd = te({
    __name: "index",
    setup(k) {
      const {
          iseditor: n,
          onInput: r,
          checkAccoutNo: m,
          onLoad: i,
          makeTxt: c,
        } = Ae(),
        { t: u } = we(),
        o = pe(),
        { setLoading: v } = We(),
        { isOpenWithdraw: h } = Le();
      let a = me([]);
      const p = g(""),
        l = me({
          smsCode: "",
          withdrawId: 6,
          bankId: 0,
          mobileNo: "",
          beneficiaryName: "",
          type: "",
          codeType: Ce.addWave,
        }),
        b = L(
          () =>
            !(
              l.mobileNo.trim().length == 0 ||
              l.bankId == 0 ||
              l.beneficiaryName.trim().length == 0
            )
        ),
        f = () =>
          l.bankId == 0
            ? x({ message: u("addCardMsg1"), wordBreak: "break-word" })
            : l.beneficiaryName.toString().trim().length == 0
            ? x({ message: u("phEnterName"), wordBreak: "break-word" })
            : l.mobileNo.toString().trim().length == 0
            ? x({ message: u("addCardMsg4"), wordBreak: "break-word" })
            : m(l.mobileNo, u("tel") + u("formatErr"))
            ? ut(localStorage.getItem("numberType"), l.mobileNo.trim().length)
              ? !0
              : x({ message: u("wrongTel"), wordBreak: "break-word" })
            : void 0,
        D = Oe({
          content: () =>
            _(
              Ve,
              {
                type: l.type,
                "onUpdate:type": (w) => (l.type = w),
                code: l.smsCode,
                "onUpdate:code": (w) => (l.smsCode = w),
                onConfirm: C,
                codeType: Ce.addWave,
              },
              null
            ),
          beforeClose: () => {
            l.smsCode = "";
          },
        });
      async function I() {
        if (!b.value) return !1;
        if (f() === !0) {
          if (!localStorage.getItem("numberType")) return !1;
          if (((l.smsCode = ""), h.value)) return D.open();
          await C();
        }
      }
      async function C() {
        v(!0),
          (await J(at(l))) &&
            (D.close(),
            o.replace({
              name: "Withdraw",
              query: { type: "Add" },
              replace: !0,
            })),
          v(!1);
      }
      async function A() {
        const w = await J(Me({ withdrawid: 6 }));
        w &&
          ((a = w.data.banklist),
          (p.value = a.length > 0 ? a[0].bankName : ""),
          (l.bankId = a.length > 0 ? a[0].bankID : 0));
      }
      A();
      function V() {
        o.replace({ name: "Withdraw", query: { type: "Add" } });
      }
      return (
        i(l, "beneficiaryName"),
        (w, T) => {
          const F = P("NavBar"),
            Z = P("svg-icon");
          return (
            s(),
            d("div", sd, [
              _(
                F,
                {
                  title: w.$t("addWaveType"),
                  "left-arrow": "",
                  onClickLeft: V,
                },
                null,
                8,
                ["title"]
              ),
              e("div", od, [
                e("img", { src: $(ye)("wallet", "hint") }, null, 8, ld),
                e("span", null, t(w.$t("WaveTip1")), 1),
              ]),
              e("div", id, [
                e("div", rd, [
                  _(Z, { name: "bankName" }),
                  R(" " + t(w.$t("bankname")), 1),
                ]),
                e("div", dd, t(p.value), 1),
              ]),
              e("div", cd, [
                e("div", ud, [
                  _(Z, { name: "user" }),
                  R(" " + t(w.$t("name")), 1),
                ]),
                ne(
                  e(
                    "input",
                    {
                      placeholder: w.$t("phEnterName"),
                      "onUpdate:modelValue":
                        T[0] || (T[0] = (S) => (l.beneficiaryName = S)),
                      maxlength: "50",
                      onInput:
                        T[1] || (T[1] = (S) => $(c)(l, "beneficiaryName")),
                      readonly: $(n),
                    },
                    null,
                    40,
                    vd
                  ),
                  [[he, l.beneficiaryName, void 0, { trim: !0 }]]
                ),
              ]),
              e("div", pd, [
                e("div", _d, [
                  _(Z, { name: "phone" }),
                  R(" " + t(w.$t("tel")), 1),
                ]),
                ne(
                  e(
                    "input",
                    {
                      placeholder: w.$t("phEnterPayeeTel"),
                      "onUpdate:modelValue":
                        T[2] || (T[2] = (S) => (l.mobileNo = S)),
                      maxlength: 12,
                      type: "digit",
                      onInput: T[3] || (T[3] = (S) => $(r)(l, "mobileNo")),
                    },
                    null,
                    40,
                    md
                  ),
                  [[he, l.mobileNo, void 0, { trim: !0 }]]
                ),
              ]),
              e(
                "div",
                { class: se(["addKBZ-btn", { active: b.value }]), onClick: I },
                t(w.$t("save")),
                3
              ),
            ])
          );
        }
      );
    },
  });
const wd = ae(hd, [
    ["__scopeId", "data-v-8c64dafa"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/AddWave/index.vue",
    ],
  ]),
  Ov = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: wd },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Mt = (k) => (Se("data-v-9ed9b8ef"), (k = k()), Ne(), k),
  fd = { class: "bankCard__container" },
  yd = { key: 0, class: "bankCard__container-content" },
  gd = { class: "bankCard__container-content__card" },
  $d = Mt(() =>
    e("div", { class: "bankCard__container-content__card-top" }, null, -1)
  ),
  kd = { class: "bankCard__container-content__card-mid" },
  bd = { class: "line" },
  Cd = { class: "left" },
  Td = { class: "right" },
  Sd = { class: "line" },
  Nd = { class: "left" },
  Wd = { class: "right" },
  Ad = { class: "line" },
  Id = { class: "left" },
  Bd = { class: "right" },
  Ud = { class: "line" },
  Dd = Mt(() => e("div", { class: "left" }, "IFSCode", -1)),
  Pd = { class: "right" },
  Rd = { key: 1, class: "bankCard__container-default" },
  Md = te({
    __name: "index",
    setup(k) {
      const { setLoading: n } = We(),
        r = pe(),
        m = Ze(),
        i = L(() => m.getWithdrawal),
        c = g(!1),
        u = L(() => m.getWithdrawal.bid.toString()),
        o = g([]);
      function v() {
        r.replace({ name: "Withdraw", query: { bid: u.value } });
      }
      const h = me({
        bid: m.getWithdrawal.bid,
        withdrawid: m.getWithdrawal.type,
      });
      function a(f) {
        r.replace({ name: "Withdraw", query: { bid: f.bid } });
      }
      async function p() {
        (c.value = !1),
          n(!0),
          (await J(ra(h))) &&
            (h.bid == i.value.bid && (i.value.bid = 0),
            m.setWithdrawal({ ...i.value }),
            await b()),
          n(!1);
      }
      const l = me({ withdrawid: m.getWithdrawal.type });
      async function b() {
        n(!0);
        const f = await J(Ee(l));
        f &&
          ((o.value = f.data.withdrawalslist),
          (f.data.withdrawalslist.length > 0 && m.getWithdrawal.bid == 0) ||
          f.data.withdrawalslist.length == 1
            ? (i.value.bid = f.data.withdrawalslist[0].bid)
            : f.data.withdrawalslist.length == 0 && (i.value.bid = 0),
          m.setWithdrawal({ ...i.value }),
          m.setWithdrawalslist(f.data.withdrawalslist)),
          n(!1);
      }
      return (
        ve(async () => {
          r.currentRoute.value.query.type == "Add"
            ? await b()
            : (o.value = m.getWithdrawalslist);
        }),
        (f, U) => {
          const D = P("NavBar"),
            I = P("van-radio"),
            C = P("van-radio-group"),
            A = Re("lazy");
          return (
            s(),
            d("div", fd, [
              _(
                D,
                { title: f.$t("bankCard"), "left-arrow": "", onClickLeft: v },
                null,
                8,
                ["title"]
              ),
              o.value.length > 0
                ? (s(),
                  d("div", yd, [
                    (s(!0),
                    d(
                      H,
                      null,
                      ke(
                        o.value,
                        (V) => (
                          s(),
                          d(
                            "div",
                            {
                              class: "bankCard__container-content__item",
                              key: V.bid,
                            },
                            [
                              _(
                                C,
                                {
                                  modelValue: u.value,
                                  "onUpdate:modelValue":
                                    U[0] || (U[0] = (w) => (u.value = w)),
                                },
                                {
                                  default: X(() => [
                                    e("div", gd, [
                                      $d,
                                      e("div", kd, [
                                        e("div", bd, [
                                          e("div", Cd, t(f.$t("bankname")), 1),
                                          e("div", Td, t(V.bankName), 1),
                                        ]),
                                        y(` <div class="line" v-if="item.beneficiaryName">
								<div class="left">{{ $t('payeename') }}</div>
								<div class="right">{{ item.beneficiaryName }}</div>
							</div> `),
                                        e("div", Sd, [
                                          e(
                                            "div",
                                            Nd,
                                            t(f.$t("bankcardNo")),
                                            1
                                          ),
                                          e("div", Wd, t(V.accountNo), 1),
                                        ]),
                                        e("div", Ad, [
                                          e("div", Id, t(f.$t("tel")), 1),
                                          e("div", Bd, t(V.mobileNo), 1),
                                        ]),
                                        e("div", Ud, [
                                          Dd,
                                          e("div", Pd, t(V.ifsCode), 1),
                                        ]),
                                      ]),
                                      e("div", null, [
                                        _(
                                          I,
                                          {
                                            name: `${V.bid.toString()}`,
                                            "icon-size": "18px",
                                            onClick: (w) => a(V),
                                          },
                                          {
                                            default: X(() => [
                                              R(t(f.$t("select")), 1),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["name", "onClick"]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["modelValue"]
                              ),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : (s(),
                  d("div", Rd, [
                    _(Qe, null, {
                      text: X(() => [
                        e("span", null, t(f.$t("noPaymentMethodsYet")), 1),
                      ]),
                      _: 1,
                    }),
                  ])),
              _(nt, { type: 1 }),
              _(
                it,
                {
                  show: c.value,
                  "onUpdate:show": U[2] || (U[2] = (V) => (c.value = V)),
                  onConfirm: p,
                  "show-cancel-btn": !0,
                  title: f.$t("tipCanNotRetrivedAfterDeleted"),
                  confirmText: f.$t("confirmDelete"),
                  cancelText: f.$t("cancel"),
                },
                {
                  content: X(() => [
                    ne(
                      e(
                        "img",
                        {
                          class: "dialog__content-bottom",
                          onClick: U[1] || (U[1] = (V) => (c.value = !1)),
                        },
                        null,
                        512
                      ),
                      [[A, $(et)("main", "close")]]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["show", "title", "confirmText", "cancelText"]
              ),
            ])
          );
        }
      );
    },
  });
const Ld = ae(Md, [
    ["__scopeId", "data-v-9ed9b8ef"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/BankCard/index.vue",
    ],
  ]),
  Vv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ld },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Od = { class: "item" },
  Vd = { key: 0, class: "line" },
  qd = te({
    __name: "progress",
    props: {
      state: { type: Number, required: !0 },
      isAppealCompleted: { type: Boolean, required: !1 },
    },
    setup(k) {
      const n = k,
        { t: r } = we(),
        m = [
          { title: r("c2cState11"), icon: "1" },
          { title: r("c2cState13"), icon: "2" },
          { title: r("c2cTip30"), icon: "3" },
          { title: r("c2cState4"), icon: "4" },
        ],
        i = [
          { title: r("c2cTip32"), icon: "1" },
          { title: r("c2cTip33"), icon: "2" },
          { title: r("c2cState4"), icon: "3" },
        ],
        c = [
          { title: r("c2cTip32"), icon: "1" },
          { title: r("c2cTip33"), icon: "2" },
          { title: r("c2cTip9"), icon: "4" },
        ],
        u = L(() =>
          [1, 9, 11, 13].includes(n.state)
            ? m
            : [3].includes(n.state)
            ? i
            : [5].includes(n.state)
            ? c
            : n.state == 4
            ? n.isAppealCompleted
              ? i
              : m
            : []
        );
      function o(v) {
        let h = [];
        switch (n.state) {
          case 1:
          case 9:
            h = [!0, !0, !0, !1];
            break;
          case 4:
            h = [!0, !0, !0, !0];
            break;
          case 11:
            h = [!0, !1, !1, !1];
            break;
          case 13:
            h = [!0, !0, !1, !1];
            break;
          case 3:
            h = [!0, !0, !1];
            break;
          case 5:
            h = [!0, !0, !0];
            break;
        }
        return h[v];
      }
      return (v, h) =>
        u.value.length > 0
          ? (s(),
            d(
              "div",
              {
                key: 0,
                class: se([
                  "progress",
                  [
                    `state_${v.state}`,
                    { isAppealCompleted: v.isAppealCompleted },
                  ],
                ]),
              },
              [
                (s(!0),
                d(
                  H,
                  null,
                  ke(
                    u.value,
                    (a, p) => (
                      s(),
                      d(
                        H,
                        null,
                        [
                          e("div", Od, [
                            e(
                              "span",
                              {
                                class: se(
                                  `icon${o(p) ? a.icon + "_a" : a.icon}`
                                ),
                              },
                              null,
                              2
                            ),
                            e("h6", null, t(a.title), 1),
                          ]),
                          p < u.value.length - 1
                            ? (s(), d("div", Vd))
                            : y("v-if", !0),
                        ],
                        64
                      )
                    )
                  ),
                  256
                )),
              ],
              2
            ))
          : y("v-if", !0);
    },
  });
const Lt = ae(qd, [
    ["__scopeId", "data-v-90f50022"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/progress.vue",
    ],
  ]),
  jd = (k) => (Se("data-v-ced8750d"), (k = k()), Ne(), k),
  zd = { class: "c2cDetail__CO" },
  Fd = { class: "top" },
  Ed = { class: "container" },
  xd = { key: 0, class: "time" },
  Hd = { key: 1, class: "time2" },
  Zd = { class: "head" },
  Gd = { class: "tip2" },
  Kd = { class: "tip2" },
  Qd = { key: 0 },
  Yd = { key: 0, class: "operate" },
  Xd = { class: "order-q" },
  Jd = { class: "y" },
  ec = { class: "order-q" },
  tc = { class: "b" },
  ac = jd(() => e("div", { class: "line" }, null, -1)),
  nc = { class: "tip" },
  sc = te({
    __name: "c2cDetailOther",
    props: {
      OrderDetail: { type: null, required: !0 },
      orderNo: { type: String, required: !0 },
    },
    emits: ["update:OrderDetail", "update:orderNo"],
    setup(k, { emit: n }) {
      const r = k,
        m = pe(),
        { t: i } = we(),
        { OrderDetail: c, orderNo: u } = Tt(r, n),
        o = {
          2: {
            title: i("c2cState11"),
            tip1: i("c2cWTip1"),
            tip2: i("c2cWTip6"),
            tip3: i("c2cTip31"),
          },
          11: {
            title: i("c2cState11"),
            tip1: i("c2cWTip1"),
            tip2: i("c2cWTip2"),
            tip3: i("c2cWTip3"),
          },
          12: {
            title: i("c2cState11"),
            tip1: i("c2cWTip1"),
            tip2: i("c2cWTip2"),
            tip3: i("c2cWTip3"),
          },
        },
        v = L(() => o[c.value.state]),
        h = () => {
          m.go(-1);
        },
        a = g("00:00"),
        p = g(0),
        l = g(null),
        b = L(() => [11, 12].includes(c.value.state));
      Pe(
        () => c.value,
        (w) => {
          f(w);
        },
        { immediate: !0 }
      );
      function f(w) {
        if (!b.value) return !1;
        const T = w.auditEndTime.replace(/-/g, "/"),
          F = w.serviceTime.replace(/-/g, "/");
        (p.value = new Date(F).getTime() - new Date(T).getTime()),
          clearInterval(l.value),
          I();
      }
      const U = (w) => {
          const T = Math.floor(w / 36e5),
            F = Math.floor((w - T * 36e5) / 6e4),
            Z = Math.floor((w - T * 36e5 - F * 6e4) / 1e3);
          return `${
            T ? T.toString().padStart(2, "0") + ":" : ""
          }${F.toString().padStart(2, "0")}:${Z.toString().padStart(2, "0")}`;
        },
        D = g(5);
      function I() {
        l.value = setInterval(() => {
          D.value--,
            (p.value += 1e3),
            (a.value = U(p.value)),
            D.value == 0 && (C(c.value.orderNo), (D.value = 5));
        }, 1e3);
      }
      const C = async (w) => {
        const T = await J(At({ orderNo: w }));
        T && (T.data.state == 2 && clearInterval(l.value), (c.value = T.data));
      };
      async function A() {
        (await J(da({ orderNo: c.value.orderNo }))) && C(c.value.orderNo);
      }
      function V() {
        m.push({
          name: "Withdraw-c2cCancelWithdrawal",
          query: {
            orderAmount: c.value.orderAmount,
            sellerAccountNo: c.value.sellerAccountNo,
            createTime: c.value.createTime,
            orderNo: c.value.orderNo,
          },
        });
      }
      return (
        ct(() => {
          clearInterval(l.value);
        }),
        (w, T) => {
          var Z;
          const F = P("NavBar");
          return (
            s(),
            d("div", zd, [
              e("div", Fd, [
                _(
                  F,
                  {
                    title: v.value.title,
                    "left-arrow": "",
                    onClickLeft: h,
                    backgroundColor: "transparent",
                  },
                  null,
                  8,
                  ["title"]
                ),
                y(" 进度条 "),
                _(
                  Lt,
                  { state: (Z = $(c)) == null ? void 0 : Z.state },
                  null,
                  8,
                  ["state"]
                ),
                e("div", Ed, [
                  b.value
                    ? (s(),
                      d("div", xd, [
                        e("p", null, t(v.value.title), 1),
                        e("div", null, [e("span", null, t(a.value), 1)]),
                      ]))
                    : y("v-if", !0),
                  b.value
                    ? y("v-if", !0)
                    : (s(), d("div", Hd, t(w.$t("c2cState2")), 1)),
                ]),
                e("div", Zd, [
                  e("div", Gd, t(v.value.tip2), 1),
                  e("div", Kd, [
                    R(t(v.value.tip3), 1),
                    b.value
                      ? (s(),
                        d(
                          "span",
                          Qd,
                          t($(c).matchTimeMinutes || 5) + t(w.$t("minute")),
                          1
                        ))
                      : y("v-if", !0),
                  ]),
                ]),
                b.value
                  ? y("v-if", !0)
                  : (s(),
                    d("div", Yd, [
                      e(
                        "div",
                        { class: "CancelW", onClick: V },
                        t(w.$t("concelOrder")),
                        1
                      ),
                      e(
                        "div",
                        { class: "uAmount", onClick: A },
                        t(w.$t("continueM")),
                        1
                      ),
                    ])),
              ]),
              e(
                "div",
                { class: se(["order", ["bgc" + v.value.background]]) },
                [
                  e("div", Xd, [
                    e("span", null, t(w.$t("withdrawalA")), 1),
                    e("span", Jd, t($(le)($(c).orderAmount)), 1),
                  ]),
                  e("div", ec, [
                    e("span", null, "UPI " + t(w.$t("account")), 1),
                    e("span", tc, t($(c).sellerAccountNo), 1),
                  ]),
                  e(
                    "div",
                    {
                      class: "order-id",
                      onClick: T[0] || (T[0] = (S) => $(De)($(c).orderNo)),
                    },
                    [
                      e(
                        "span",
                        null,
                        t($(It)($(c).createTime, "yyyy-MM-dd")),
                        1
                      ),
                      R(t($(c).orderNo), 1),
                    ]
                  ),
                  ac,
                  e("div", nc, t(w.$t("c2cWTip4")), 1),
                ],
                2
              ),
            ])
          );
        }
      );
    },
  });
const oc = ae(sc, [
    ["__scopeId", "data-v-ced8750d"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/c2cDetailOther.vue",
    ],
  ]),
  vt = (k) => (Se("data-v-0f202033"), (k = k()), Ne(), k),
  lc = { key: 0, class: "c2cDetail__C" },
  ic = { class: "title" },
  rc = { key: 0 },
  dc = { class: "tip1" },
  cc = { key: 0, class: "tip2" },
  uc = { key: 1 },
  vc = { key: 0, class: "accountArry" },
  pc = { class: "con" },
  _c = { class: "order" },
  mc = { class: "order-h" },
  hc = { class: "order-q y" },
  wc = { key: 0, class: "order-q y" },
  fc = { key: 1, class: "order-q orange" },
  yc = { class: "order-t" },
  gc = { key: 2, class: "order-t" },
  $c = vt(() => e("div", { class: "line" }, null, -1)),
  kc = vt(() => e("span", null, "UTR", -1)),
  bc = { key: 4, class: "order-tl" },
  Cc = { key: 0, class: "upi" },
  Tc = { class: "upi-h" },
  Sc = vt(() => e("span", null, "UPI", -1)),
  Nc = { key: 1, class: "upi img" },
  Wc = { class: "upi-h" },
  Ac = { class: "imgBox" },
  Ic = ["onClick"],
  Bc = { key: 2, class: "img" },
  Uc = { class: "imgBox" },
  Dc = ["onClick"],
  Pc = { key: 3, class: "img video" },
  Rc = { class: "v", controls: "" },
  Mc = ["src"],
  Lc = ["src"],
  Oc = ["src"],
  Vc = te({
    __name: "index",
    setup(k) {
      var re;
      const { t: n } = we(),
        r = pe(),
        m = Ue(),
        i = Fe(),
        c = {
          0: {
            title: n("c2cState0"),
            tip1: n("c2cTip1"),
            tip2: n("tipPlaWaitPaciently"),
            icon: "0",
            background: 0,
          },
          1: {
            title: n("c2cState1"),
            tip1: n("c2cTip2"),
            tip2: n("c2cTip3"),
            icon: "0",
            background: 1,
          },
          2: {
            title: n("c2cState8"),
            tip1: n("c2cTip4"),
            tip2: n("tipPlaWaitPaciently"),
            icon: "6",
            background: 8,
          },
          3: {
            title: n("c2cState3"),
            tip1: n("c2cTip5"),
            tip2: n("c2cTip6"),
            icon: "1",
            background: 3,
          },
          4: {
            title: n("completed"),
            tip1: n("c2cTip7"),
            tip2: n("c2cTip8"),
            icon: "2",
            background: 4,
          },
          5: {
            title: n("c2cTip9"),
            tip1: n("c2cTip10"),
            tip2: n("c2cTip11"),
            icon: "3",
            background: 5,
          },
          6: {
            title: n("cancelled"),
            tip1: "*****",
            tip2: "",
            icon: "4",
            background: 6,
          },
          7: {
            title: n("c2cTip12"),
            tip1: n("c2cTip1"),
            tip2: "",
            icon: "5",
            background: 7,
          },
          8: {
            title: n("withdrawState1"),
            tip1: n("c2cTip4"),
            tip2: n("tipPlaWaitPaciently"),
            icon: "6",
            background: 8,
          },
          9: {
            title: n("rechargeState1"),
            tip1: n("c2cTip13"),
            tip2: n("c2cTip14"),
            icon: "7",
            background: 9,
          },
          10: {
            title: n("c2cState10"),
            tip1: n("c2cTip21"),
            tip2: n("c2cTip22"),
            icon: "8",
            background: 10,
          },
          11: {
            title: n("c2cState11"),
            tip1: n("c2cWTip1"),
            tip2: n("c2cWTip2"),
            tip3: n("c2cWTip3"),
            icon: "8",
            background: 11,
          },
          12: {
            title: n("c2cState11"),
            tip1: n("c2cTip21"),
            tip2: n("c2cTip22"),
            icon: "8",
            background: 10,
          },
          13: {
            title: n("c2cState13"),
            tip1: n("c2cTip24"),
            icon: "0",
            background: 11,
          },
          14: {
            title: n("c2cState14"),
            tip1: n("c2cTip46"),
            tip2: n("c2cTip33"),
            icon: "14",
            background: 11,
          },
        },
        u = g(0),
        o = g("00:00"),
        v = g(null),
        h = g(null),
        a = g({
          id: 0,
          orderNo: "",
          type: 0,
          withdrawName: "",
          createTime: "",
          orderAmount: 0,
          realAmount: 0,
          discountAmount: 0,
          serviceAmount: 0,
          state: Number(((re = m.query) == null ? void 0 : re.state) || 0),
          cancelReasonId: 0,
          reasonText: "",
          remark: "",
          transactionNo: "",
          sellerAccountNo: "",
          rechargeFinishTime: "",
        }),
        p = g(""),
        l = L(() => c[a.value.state]),
        b = L(() => a.value.state == 10),
        f = L(() => [9].includes(a.value.state)),
        U = L(() => [1, 9, 3].includes(a.value.state)),
        D = L(() => [2, 11, 12].includes(a.value.state)),
        I = L(() => [5, 6, 7, 14].includes(a.value.state));
      Pe(
        () => a.value.state,
        (O) => {
          w();
        },
        { deep: !0 }
      );
      const C = () => {
        r.back();
      };
      function A(O, j) {
        if (!O) return;
        let K;
        return (
          j
            ? (K = JSON.parse(O).filter((fe) => fe.fileType == j))
            : (K = JSON.parse(O)),
          K.length == 0
            ? !1
            : K.map((fe) => ((fe.fileUrl = i.ossUrl + "/" + fe.fileUrl), fe))
        );
      }
      const V = async (O) => {
        const j = await J(At({ orderNo: O }));
        j && (a.value = j.data);
      };
      function w() {
        var O;
        if ([1, 13].includes(a.value.state)) {
          const j =
            (O = a.value) == null ? void 0 : O.serviceTime.replace(/-/g, "/");
          if (a.value.state == 1) {
            const K = a.value.confrimEndTime.replace(/-/g, "/");
            u.value = new Date(K).getTime() - new Date(j).getTime();
          } else if (a.value.state == 13) {
            const K = a.value.matchOutTime.replace(/-/g, "/");
            u.value = new Date(K).getTime() - new Date(j).getTime();
          }
          clearInterval(v.value), G();
        } else clearInterval(v.value);
        (a.value.state === 7 || a.value.state === 6) &&
          ((c[a.value.state].tip1 = a.value.reasonText || ""),
          (c[a.value.state].tip2 = a.value.remark || "")),
          a.value.state === 0
            ? (clearInterval(h.value), B())
            : clearInterval(h.value),
          a.value.state === 3 && Q();
      }
      const T = async (O) => {
          await J(ca({ orderNo: O })), V(O);
        },
        F = async (O) => {
          await J(ua({ orderNo: O })), V(O);
        },
        Z = (O) => {
          const j = Math.floor(O / 36e5),
            K = Math.floor((O - j * 36e5) / 6e4),
            fe = Math.floor((O - j * 36e5 - K * 6e4) / 1e3);
          return `${
            j ? j.toString().padStart(2, "0") + ":" : ""
          }${K.toString().padStart(2, "0")}:${fe.toString().padStart(2, "0")}`;
        },
        S = g(5);
      function G() {
        v.value = setInterval(() => {
          S.value--,
            u.value > 0
              ? ((u.value -= 1e3), (o.value = Z(u.value)))
              : (o.value = "00:00"),
            S.value == 0 && (V(p.value), (S.value = 5));
        }, 1e3);
      }
      function B() {
        h.value = setInterval(() => {
          V(p.value);
        }, 5e3);
      }
      const z = () => {
          Tawk_API.toggle(),
            window.Tawk_API.setAttributes(
              { order: p.value, store: "withdraw" },
              function (O) {}
            );
        },
        Q = () => {
          let O = "https://embed.tawk.to/6452138631ebfa0fe7fbb175/1hb0ug9qm";
          if (!document.getElementById("tawk-chatjs")) {
            var j = document.createElement("script"),
              K = document.getElementsByTagName("script")[0];
            (j.async = !0),
              (j.src = O),
              (j.charset = "UTF-8"),
              j.setAttribute("crossorigin", "*"),
              (j.id = "tawk-chatjs"),
              K.parentNode.insertBefore(j, K);
          }
        };
      function M() {
        r.push({
          name: "Withdraw-c2cWrongAmount",
          query: { orderNo: p.value },
        });
      }
      function oe(O) {
        Ht({ images: [O], closeable: !0 });
      }
      return (
        ve(() => {
          var O, j;
          (p.value =
            localStorage.getItem("c2cOrderNo") ||
            ((j = (O = m.query) == null ? void 0 : O.order) == null
              ? void 0
              : j.toString()) ||
            ""),
            V(p.value);
        }),
        xt(() => {}),
        ct(() => {
          clearInterval(v.value), clearInterval(h.value);
        }),
        (O, j) => {
          var fe, W, Ie, Be, xe, E, ee, be, _e, He, ce, Ye, Ge, de, Xe;
          const K = P("NavBar");
          return D.value
            ? (s(),
              d(
                H,
                { key: 1 },
                [
                  a.value.orderNo != ""
                    ? (s(),
                      $e(
                        oc,
                        {
                          key: 0,
                          orderNo: p.value,
                          "onUpdate:orderNo":
                            j[7] || (j[7] = (ue) => (p.value = ue)),
                          OrderDetail: a.value,
                          "onUpdate:OrderDetail":
                            j[8] || (j[8] = (ue) => (a.value = ue)),
                        },
                        null,
                        8,
                        ["orderNo", "OrderDetail"]
                      ))
                    : y("v-if", !0),
                ],
                64
              ))
            : (s(),
              d("div", lc, [
                e(
                  "div",
                  { class: se(["header", ["bgc" + l.value.background]]) },
                  [
                    _(K, {
                      title: "",
                      "left-arrow": "",
                      onClickLeft: C,
                      backgroundColor: "transparent",
                    }),
                    e(
                      "div",
                      { class: se(["head", ["hicon" + l.value.icon]]) },
                      [
                        e("div", ic, [
                          R(t(l.value.title) + " ", 1),
                          [1, 13].includes(a.value.state)
                            ? (s(), d("span", rc, t(o.value), 1))
                            : y("v-if", !0),
                        ]),
                        e("div", dc, t(l.value.tip1), 1),
                        l.value.tip2
                          ? (s(), d("div", cc, t(l.value.tip2), 1))
                          : y("v-if", !0),
                        U.value
                          ? (s(), d("div", uc, t(O.$t("c2cTip23")), 1))
                          : y("v-if", !0),
                      ],
                      2
                    ),
                    U.value
                      ? (s(),
                        d("div", vc, [
                          e(
                            "div",
                            {
                              class: "account btn",
                              onClick:
                                j[0] || (j[0] = (ue) => T(a.value.orderNo)),
                            },
                            t(O.$t("confirmTheAccount")),
                            1
                          ),
                          f.value
                            ? (s(),
                              d(
                                "div",
                                {
                                  key: 0,
                                  class: "appeal btn",
                                  onClick:
                                    j[1] || (j[1] = (ue) => F(a.value.orderNo)),
                                },
                                t(O.$t("appeal")),
                                1
                              ))
                            : y("v-if", !0),
                          a.value.state == 3
                            ? (s(),
                              d(
                                "div",
                                {
                                  key: 1,
                                  class: "appeal btn",
                                  onClick: j[2] || (j[2] = (ue) => z()),
                                },
                                t(O.$t("AppealsAdmin")),
                                1
                              ))
                            : y("v-if", !0),
                          a.value.state == 1
                            ? (s(),
                              d(
                                "div",
                                {
                                  key: 2,
                                  class: "wrong btn",
                                  onClick: j[3] || (j[3] = (ue) => M()),
                                },
                                t(O.$t("c2cState14")),
                                1
                              ))
                            : y("v-if", !0),
                        ]))
                      : y("v-if", !0),
                  ],
                  2
                ),
                e("div", pc, [
                  y(" 进度条 "),
                  _(
                    Lt,
                    {
                      state: (fe = a.value) == null ? void 0 : fe.state,
                      isAppealCompleted:
                        (W = a.value) == null ? void 0 : W.isAppealCompleted,
                    },
                    null,
                    8,
                    ["state", "isAppealCompleted"]
                  ),
                  e("div", _c, [
                    e("div", mc, "New UPI " + t(O.$t("withdraw")), 1),
                    e("div", hc, [
                      e("span", null, t(O.$t("orderAmount")), 1),
                      R(t($(le)(a.value.orderAmount)), 1),
                    ]),
                    [4, 14].includes(a.value.state)
                      ? (s(),
                        d("div", wc, [
                          e("span", null, t(O.$t("actualAmount")), 1),
                          R(t($(le)(a.value.realAmount)), 1),
                        ]))
                      : y("v-if", !0),
                    I.value
                      ? y("v-if", !0)
                      : (s(),
                        d("div", fc, [
                          e("span", null, t(O.$t("award")), 1),
                          R(t($(le)(a.value.discountAmount)), 1),
                        ])),
                    e("div", yc, [
                      e("span", null, t(O.$t("orderTime")), 1),
                      R(t(a.value.createTime), 1),
                    ]),
                    a.value.state == 14
                      ? (s(),
                        d("div", gc, [
                          e("span", null, t(O.$t("c2cTip47")), 1),
                          R(t(a.value.lastUpdateTime), 1),
                        ]))
                      : y("v-if", !0),
                    $c,
                    b.value
                      ? y("v-if", !0)
                      : (s(),
                        d(
                          "div",
                          {
                            key: 3,
                            class: "order-id",
                            onClick:
                              j[4] ||
                              (j[4] = (ue) => $(De)(a.value.transactionNo)),
                          },
                          [kc, R(t(a.value.transactionNo), 1)]
                        )),
                    e(
                      "div",
                      {
                        class: "order-id",
                        onClick:
                          j[5] || (j[5] = (ue) => $(De)(a.value.orderNo)),
                      },
                      [
                        e("span", null, t(O.$t("orderNo")), 1),
                        R(t(a.value.orderNo), 1),
                      ]
                    ),
                    b.value
                      ? y("v-if", !0)
                      : (s(),
                        d("div", bc, [
                          e("span", null, t(O.$t("PaymentTime")), 1),
                          R(t(a.value.rechargeFinishTime), 1),
                        ])),
                  ]),
                  b.value
                    ? y("v-if", !0)
                    : (s(),
                      d("div", Cc, [
                        e("div", Tc, t(O.$t("information")), 1),
                        e(
                          "div",
                          {
                            class: "upi-id",
                            onClick:
                              j[6] ||
                              (j[6] = (ue) => $(De)(a.value.sellerAccountNo)),
                          },
                          [Sc, R(t(a.value.sellerAccountNo), 1)]
                        ),
                      ])),
                  [5, 1, 9, 3, 4, 6].includes(a.value.state) &&
                  (Ie = a.value) != null &&
                  Ie.rechargeOssUrls
                    ? (s(),
                      d("div", Nc, [
                        e("div", Wc, t(O.$t("c2cTip50")), 1),
                        e("div", Ac, [
                          (s(!0),
                          d(
                            H,
                            null,
                            ke(
                              A(
                                (Be = a.value) == null
                                  ? void 0
                                  : Be.rechargeOssUrls
                              ),
                              (ue, Ke) => (
                                s(),
                                d(
                                  "div",
                                  {
                                    class: "imgD",
                                    key: Ke,
                                    style: yt(
                                      `background-image: url('${
                                        ue == null ? void 0 : ue.fileUrl
                                      }');`
                                    ),
                                    onClick: (ot) =>
                                      oe(ue == null ? void 0 : ue.fileUrl),
                                  },
                                  null,
                                  12,
                                  Ic
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]))
                    : y("v-if", !0),
                  ((xe = a.value) == null ? void 0 : xe.state) == 14 &&
                  (E = a.value) != null &&
                  E.ossUrls
                    ? (s(),
                      d("div", Bc, [
                        e("h1", null, t(O.$t("c2cTip48")), 1),
                        e("div", Uc, [
                          (s(!0),
                          d(
                            H,
                            null,
                            ke(
                              A(
                                (ee = a.value) == null ? void 0 : ee.ossUrls,
                                1
                              ),
                              (ue, Ke) => (
                                s(),
                                d(
                                  "div",
                                  {
                                    class: "imgD",
                                    key: Ke,
                                    style: yt(
                                      `background-image: url('${
                                        ue == null ? void 0 : ue.fileUrl
                                      }');`
                                    ),
                                    onClick: (ot) =>
                                      oe(ue == null ? void 0 : ue.fileUrl),
                                  },
                                  null,
                                  12,
                                  Dc
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]))
                    : y("v-if", !0),
                  ((be = a.value) == null ? void 0 : be.state) == 14 &&
                  A((_e = a.value) == null ? void 0 : _e.ossUrls, 2)
                    ? (s(),
                      d("div", Pc, [
                        e("h1", null, t(O.$t("c2cTip49")), 1),
                        e("video", Rc, [
                          e(
                            "source",
                            {
                              src:
                                (ce = A(
                                  (He = a.value) == null ? void 0 : He.ossUrls,
                                  2
                                )[0]) == null
                                  ? void 0
                                  : ce.fileUrl,
                              type: "video/ogg",
                            },
                            null,
                            8,
                            Mc
                          ),
                          e(
                            "source",
                            {
                              src:
                                (Ge = A(
                                  (Ye = a.value) == null ? void 0 : Ye.ossUrls,
                                  2
                                )[0]) == null
                                  ? void 0
                                  : Ge.fileUrl,
                              type: "video/mp4",
                            },
                            null,
                            8,
                            Lc
                          ),
                          e(
                            "source",
                            {
                              src:
                                (Xe = A(
                                  (de = a.value) == null ? void 0 : de.ossUrls,
                                  2
                                )[0]) == null
                                  ? void 0
                                  : Xe.fileUrl,
                              type: "video/webm",
                            },
                            null,
                            8,
                            Oc
                          ),
                        ]),
                      ]))
                    : y("v-if", !0),
                ]),
              ]));
        }
      );
    },
  });
const qc = ae(Vc, [
    ["__scopeId", "data-v-0f202033"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/C2cDetail/index.vue",
    ],
  ]),
  qv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: qc },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jc = { class: "bankCard__container" },
  zc = { key: 0, class: "bankCard__container-content" },
  Fc = { class: "bankCard__container-content__card" },
  Ec = { class: "bankCard__container-content__card-top ar-1px-b" },
  xc = ["src"],
  Hc = { class: "bankCard__container-content__card-mid" },
  Zc = { class: "line" },
  Gc = { class: "line" },
  Kc = { class: "line" },
  Qc = { key: 1, class: "bankCard__container-default" },
  Yc = te({
    __name: "index",
    setup(k) {
      const { setLoading: n } = We(),
        r = pe();
      Ue();
      const m = Ze(),
        i = L(() => m.getWithdrawal);
      g(!1);
      const c = L(() => m.getWithdrawal.bid.toString()),
        u = g([]);
      function o() {
        r.replace({ name: "Withdraw", query: { bid: c.value } });
      }
      const v = me({ bid: m.getWithdrawal.bid, withdrawid: 5 });
      function h(l) {
        r.replace({ name: "Withdraw", query: { bid: l.bid } });
      }
      const a = me({ withdrawid: 5 });
      async function p() {
        n(!0);
        const l = await J(Ee(a));
        l &&
          ((u.value = l.data.withdrawalslist),
          (l.data.withdrawalslist.length > 0 && m.getWithdrawal.bid == 0) ||
          l.data.withdrawalslist.length == 1
            ? (i.value.bid = l.data.withdrawalslist[0].bid)
            : l.data.withdrawalslist.length == 0 && (i.value.bid = 0),
          m.setWithdrawal({ ...i.value }),
          m.setWithdrawalslist(l.data.withdrawalslist)),
          n(!1);
      }
      return (
        ve(async () => {
          r.currentRoute.value.query.type == "Add"
            ? await p()
            : (u.value = m.getWithdrawalslist);
        }),
        (l, b) => {
          const f = P("NavBar"),
            U = P("van-radio"),
            D = P("van-radio-group");
          return (
            s(),
            d("div", jc, [
              _(
                f,
                {
                  title: l.$t("paymentMethod"),
                  "left-arrow": "",
                  onClickLeft: o,
                },
                null,
                8,
                ["title"]
              ),
              u.value.length > 0
                ? (s(),
                  d("div", zc, [
                    (s(!0),
                    d(
                      H,
                      null,
                      ke(
                        u.value,
                        (I, C) => (
                          s(),
                          d(
                            "div",
                            {
                              class: "bankCard__container-content__item",
                              key: I.bid,
                            },
                            [
                              _(
                                D,
                                {
                                  modelValue: c.value,
                                  "onUpdate:modelValue":
                                    b[0] || (b[0] = (A) => (c.value = A)),
                                },
                                {
                                  default: X(() => [
                                    e("div", Fc, [
                                      e("div", Ec, [
                                        e("div", null, [
                                          e(
                                            "img",
                                            {
                                              src: $(ye)(
                                                "wallet/withdrawType",
                                                `${v.withdrawid}`
                                              ),
                                            },
                                            null,
                                            8,
                                            xc
                                          ),
                                          R(
                                            " " + t(l.$t("paymentMethodOfPix")),
                                            1
                                          ),
                                        ]),
                                        e("div", null, [
                                          _(
                                            U,
                                            {
                                              name: `${I.bid.toString()}`,
                                              "icon-size": "22px",
                                              onClick: (A) => h(I),
                                            },
                                            null,
                                            8,
                                            ["name", "onClick"]
                                          ),
                                        ]),
                                      ]),
                                      e("div", Hc, [
                                        e("div", Zc, t(I.beneficiaryName), 1),
                                        e("div", Gc, t(I.accountNo), 1),
                                        e("div", Kc, t(I.bankName), 1),
                                      ]),
                                      y(` <div class="delete" @click="onShowDeleteDialog(item)">
							<van-icon name="delete" color="rgba(238, 54, 37, 1)" size="20" />
							{{ $t('delete') }}
						</div> `),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["modelValue"]
                              ),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : (s(),
                  d("div", Qc, [
                    _(Qe, null, {
                      text: X(() => [
                        e("span", null, t(l.$t("noPaymentMethodsYet")), 1),
                      ]),
                      _: 1,
                    }),
                  ])),
              _(nt, { type: 5 }),
              y(` <Dialog
			v-model:show="delelteDialogShow"
			@confirm="onDelete"
			:show-cancel-btn="true"
			:title="$t('tipCanNotRetrivedAfterDeleted')"
			:confirmText="$t('confirmDelete')"
			:cancelText="$t('cancel')"
		>
			<template #header>
				<img v-lazy="getIconsPublic('common', 'warn')" />
			</template>
			<template #content>
				<img v-lazy="getIconsPublic('common', 'closeGrey')" class="dialog__content-bottom" @click="delelteDialogShow = false" />
			</template>
		</Dialog> `),
            ])
          );
        }
      );
    },
  });
const Xc = ae(Yc, [
    ["__scopeId", "data-v-abf3326c"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/PIX/index.vue",
    ],
  ]),
  jv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xc },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Jc = (k) => (Se("data-v-290c4222"), (k = k()), Ne(), k),
  eu = { class: "type4_C" },
  tu = { class: "type4_C-list" },
  au = { class: "header-title" },
  nu = ["onClick"],
  su = {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
  },
  ou = Jc(() =>
    e(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M60 30C60 46.5686 46.5686 60 30 60C13.4314 60 0 46.5686 0 30C0 13.4314 13.4314 0 30 0C46.5686 0 60 13.4314 60 30ZM14.4 34.2149L19.3014 29.0266C20.9353 30.363 24.2029 33.2714 27.4705 37.2807C27.5276 37.3507 27.7006 36.9707 28.0345 36.2374C29.4965 33.0269 34.0423 23.0442 45.4425 14.4053C45.5467 14.3263 45.5229 15.1444 45.4865 16.397C45.4534 17.5342 45.41 19.0295 45.4425 20.5367C45.5024 23.3195 45.9093 26.1966 45.9093 26.1966C45.9093 26.1966 39.374 27.8474 28.1707 46.0063C28.1442 46.0494 27.8296 45.6959 27.2806 45.0789C25.2645 42.8134 20.0868 36.9951 14.4 34.2149Z",
        fill: "var(--main-color)",
      },
      null,
      -1
    )
  ),
  lu = [ou],
  iu = { class: "type4-body" },
  ru = { class: "type4-body-id" },
  du = { key: 1, class: "noData" },
  cu = te({
    __name: "index",
    setup(k) {
      const n = pe(),
        r = Ue(),
        m = n.currentRoute.value.query.Type4name,
        i = g([]),
        c = g(null),
        u = () => {
          const p = i.value.find((l) => {
            l.bid == c.value;
          })
            ? c.value
            : 0;
          n.replace({ name: "Withdraw", query: { bid: p, type: 22 } });
        },
        o = (a) => {
          n.replace({ name: "Withdraw", query: { bid: a, type: 22 } });
        },
        v = async () => {
          n.replace({ name: "Withdraw-AddRsnPay", query: { Type4name: m } });
        },
        h = async () => {
          var p;
          const a = await J(Ee({ withdrawid: 22 }));
          a &&
            (i.value =
              ((p = a.data) == null ? void 0 : p.withdrawalslist) || []);
        };
      return (
        ve(() => {
          (c.value = r.query.bid || 0), h();
        }),
        (a, p) => {
          const l = P("NavBar"),
            b = Re("throttle-click");
          return (
            s(),
            d("div", eu, [
              _(
                l,
                {
                  title: $(m) + a.$t("paymentMethod"),
                  "left-arrow": "",
                  onClickLeft: u,
                },
                null,
                8,
                ["title"]
              ),
              e("div", tu, [
                i.value.length
                  ? (s(!0),
                    d(
                      H,
                      { key: 0 },
                      ke(
                        i.value,
                        (f, U) => (
                          s(),
                          d("div", { key: U, class: "type4_C-item" }, [
                            e(
                              "div",
                              { class: se(["header", `${f.walletName}`]) },
                              [
                                e("div", au, t(f.bankName), 1),
                                e(
                                  "div",
                                  {
                                    class: se([
                                      "select-btn",
                                      { isSelect: f.bid == c.value },
                                    ]),
                                    onClick: (D) => o(f.bid),
                                  },
                                  [
                                    f.bid == c.value
                                      ? (s(), d("svg", su, lu))
                                      : y("v-if", !0),
                                  ],
                                  10,
                                  nu
                                ),
                              ],
                              2
                            ),
                            e("div", iu, [e("div", ru, t(f.mobileNo), 1)]),
                          ])
                        )
                      ),
                      128
                    ))
                  : ne(
                      (s(),
                      d("div", du, [R(t(a.$t("upiAddPaymentMethod")), 1)])),
                      [[b, { handler: v, wait: 1e3 }]]
                    ),
              ]),
            ])
          );
        }
      );
    },
  });
const uu = ae(cu, [
    ["__scopeId", "data-v-290c4222"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/RsnPay/index.vue",
    ],
  ]),
  zv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: uu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vu = (k) => (Se("data-v-8da75fee"), (k = k()), Ne(), k),
  pu = { class: "type4_C" },
  _u = { class: "type4_C-list" },
  mu = { class: "header-title" },
  hu = ["onClick"],
  wu = {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
  },
  fu = vu(() =>
    e(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M60 30C60 46.5686 46.5686 60 30 60C13.4314 60 0 46.5686 0 30C0 13.4314 13.4314 0 30 0C46.5686 0 60 13.4314 60 30ZM14.4 34.2149L19.3014 29.0266C20.9353 30.363 24.2029 33.2714 27.4705 37.2807C27.5276 37.3507 27.7006 36.9707 28.0345 36.2374C29.4965 33.0269 34.0423 23.0442 45.4425 14.4053C45.5467 14.3263 45.5229 15.1444 45.4865 16.397C45.4534 17.5342 45.41 19.0295 45.4425 20.5367C45.5024 23.3195 45.9093 26.1966 45.9093 26.1966C45.9093 26.1966 39.374 27.8474 28.1707 46.0063C28.1442 46.0494 27.8296 45.6959 27.2806 45.0789C25.2645 42.8134 20.0868 36.9951 14.4 34.2149Z",
        fill: "var(--main-color)",
      },
      null,
      -1
    )
  ),
  yu = [fu],
  gu = { class: "type4-body" },
  $u = { class: "type4-body-name" },
  ku = { class: "type4-body-id" },
  bu = { key: 1, class: "noData" },
  Cu = { class: "type4_C-addbtn" },
  Tu = te({
    __name: "index",
    setup(k) {
      const n = pe(),
        r = Ue(),
        m = n.currentRoute.value.query.Type4name,
        i = Number(n.currentRoute.value.query.withdrawType),
        c = g([]),
        u = g(null),
        o = () => {
          const l = c.value.find((b) => {
            b.bid == u.value;
          })
            ? u.value
            : 0;
          n.replace({ name: "Withdraw", query: { bid: l, type: i } });
        },
        v = (p) => {
          n.replace({ name: "Withdraw", query: { bid: p, type: i } });
        },
        h = async () => {
          n.replace({
            name: "Withdraw-AddType4",
            query: { Type4name: m, withdrawType: i },
          });
        },
        a = async () => {
          var l;
          const p = await J(Ee({ withdrawid: i }));
          p &&
            (c.value =
              ((l = p.data) == null ? void 0 : l.withdrawalslist) || []);
        };
      return (
        ve(() => {
          (u.value = r.query.bid || 0), a();
        }),
        (p, l) => {
          const b = P("NavBar"),
            f = Re("throttle-click");
          return (
            s(),
            d("div", pu, [
              _(
                b,
                {
                  title: $(m) + p.$t("paymentMethod"),
                  "left-arrow": "",
                  onClickLeft: o,
                },
                null,
                8,
                ["title"]
              ),
              e("div", _u, [
                c.value.length
                  ? (s(!0),
                    d(
                      H,
                      { key: 0 },
                      ke(
                        c.value,
                        (U, D) => (
                          s(),
                          d("div", { key: D, class: "type4_C-item" }, [
                            e(
                              "div",
                              { class: se(["header", `${U.walletName}`]) },
                              [
                                e("div", mu, t(U.walletName), 1),
                                e(
                                  "div",
                                  {
                                    class: se([
                                      "select-btn",
                                      { isSelect: U.bid == u.value },
                                    ]),
                                    onClick: (I) => v(U.bid),
                                  },
                                  [
                                    U.bid == u.value
                                      ? (s(), d("svg", wu, yu))
                                      : y("v-if", !0),
                                  ],
                                  10,
                                  hu
                                ),
                              ],
                              2
                            ),
                            e("div", gu, [
                              e("div", $u, t(U.beneficiaryName), 1),
                              e("div", ku, t(U.mobileNO), 1),
                            ]),
                          ])
                        )
                      ),
                      128
                    ))
                  : ne(
                      (s(),
                      d("div", bu, [R(t(p.$t("upiAddPaymentMethod")), 1)])),
                      [[f, { handler: h, wait: 1e3 }]]
                    ),
              ]),
              ne((s(), d("div", Cu, [R(t(p.$t("upiAddPaymentMethod")), 1)])), [
                [f, { handler: h, wait: 1e3 }],
              ]),
            ])
          );
        }
      );
    },
  });
const Su = ae(Tu, [
    ["__scopeId", "data-v-8da75fee"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/Type4/index.vue",
    ],
  ]),
  Fv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Su },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Nu = { class: "USDT__container" },
  Wu = { key: 0, class: "USDT__container-content" },
  Au = { class: "USDT__container-content__card" },
  Iu = { class: "USDT__container-content__card-top" },
  Bu = { class: "USDT__container-content__card-mid ar-1px-b" },
  Uu = { key: 1, class: "USDT__container-default" },
  Du = te({
    __name: "index",
    setup(k) {
      const { setLoading: n } = We(),
        { getUserInfo: r } = tt(),
        m = Wt();
      r({ signature: m.token });
      const i = pe(),
        c = Ze(),
        u = c.getWithdrawal;
      g(!1);
      const o = L(() => c.getWithdrawal.bid.toString()),
        v = g([]);
      me({ bid: c.getWithdrawal.bid, withdrawid: c.getWithdrawal.type });
      function h(b) {
        i.replace({ name: "Withdraw", query: { bid: b.bid } });
      }
      const a = me({ withdrawid: c.getWithdrawal.type });
      async function p() {
        n(!0);
        const b = await J(Ee(a));
        b &&
          ((v.value = b.data.withdrawalslist),
          (b.data.withdrawalslist.length > 0 && c.getWithdrawal.bid == 0) ||
          b.data.withdrawalslist.length == 1
            ? (u.bid = b.data.withdrawalslist[0].bid)
            : b.data.withdrawalslist.length == 0 && (u.bid = 0),
          c.setWithdrawal({ ...u }),
          c.setWithdrawalslist(b.data.withdrawalslist)),
          n(!1);
      }
      ve(async () => {
        i.currentRoute.value.query.type == "Add"
          ? await p()
          : (v.value = c.getWithdrawalslist);
      });
      function l() {
        i.replace({ name: "Withdraw", query: { bid: o.value } });
      }
      return (b, f) => {
        const U = P("NavBar"),
          D = P("svg-icon"),
          I = P("van-radio"),
          C = P("van-radio-group");
        return (
          s(),
          d("div", Nu, [
            _(
              U,
              { title: b.$t("usdtAddr"), "left-arrow": "", onClickLeft: l },
              null,
              8,
              ["title"]
            ),
            v.value.length > 0
              ? (s(),
                d("div", Wu, [
                  (s(!0),
                  d(
                    H,
                    null,
                    ke(
                      v.value,
                      (A) => (
                        s(),
                        d(
                          "div",
                          {
                            class: "USDT__container-content__item",
                            key: A.bid,
                          },
                          [
                            _(
                              C,
                              {
                                modelValue: o.value,
                                "onUpdate:modelValue":
                                  f[0] || (f[0] = (V) => (o.value = V)),
                              },
                              {
                                default: X(() => [
                                  e("div", Au, [
                                    e("div", Iu, [
                                      _(D, { name: "bankHeader" }),
                                      _(D, { name: "usdtLogo3" }),
                                    ]),
                                    e("div", Bu, [
                                      e("span", null, t(A.accountNo), 1),
                                      e("span", null, t(A.usdtRemarkName), 1),
                                    ]),
                                    e("div", null, [
                                      y("这是假的"),
                                      _(
                                        I,
                                        {
                                          name: `${A.bid.toString()}`,
                                          "icon-size": "18px",
                                          onClick: (V) => h(A),
                                        },
                                        {
                                          default: X(() => [
                                            R(t(b.$t("select")), 1),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["name", "onClick"]
                                      ),
                                      y(` <div @click="onShowDeleteDialog(item)">
								<img :src="getIcons('wallet/withdraw', 'delete')" />{{ $t('delete') }}
							</div> `),
                                    ]),
                                  ]),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["modelValue"]
                            ),
                          ]
                        )
                      )
                    ),
                    128
                  )),
                ]))
              : (s(),
                d("div", Uu, [
                  _(Qe, null, {
                    text: X(() => [
                      e("span", null, t(b.$t("noPaymentMethodsYet")), 1),
                    ]),
                    _: 1,
                  }),
                ])),
            _(nt, { type: 3 }),
            y(` <Dialog
			v-model:show="delelteDialogShow"
			@confirm="onDelete"
			:show-cancel-btn="true"
			:title="$t('tipCanNotRetrivedAfterDeleted')"
			:confirmText="$t('confirmDelete')"
			:cancelText="$t('cancel')"
		>
			<template #content>
				<img v-lazy="getIcons('main', 'close')" class="dialog__content-bottom" @click="delelteDialogShow = false" />
			</template>
		</Dialog> `),
          ])
        );
      };
    },
  });
const Pu = ae(Du, [
    ["__scopeId", "data-v-1cef303f"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/USDT/index.vue",
    ],
  ]),
  Ev = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ru = { class: "upi_C" },
  Mu = { class: "upi_C-list" },
  Lu = { class: "header" },
  Ou = { class: "header-title" },
  Vu = ["onClick"],
  qu = { class: "upi-body" },
  ju = { class: "upi-body-name" },
  zu = { class: "upi-body-id" },
  Fu = { class: "upi-body-id" },
  Eu = { class: "upi_C-addbtn" },
  xu = te({
    __name: "index",
    setup(k) {
      const n = pe(),
        r = Ue(),
        m = g([]),
        i = g(null),
        c = () => {
          const a = m.value.find((p) => {
            p.bid == i.value;
          })
            ? i.value
            : 0;
          n.replace({ name: "Withdraw", query: { bid: a, type: 2 } });
        },
        u = (h) => {
          n.replace({ name: "Withdraw", query: { bid: h, type: 2 } });
        },
        o = async () => {
          n.replace({ name: "Withdraw-AddUpi" });
        },
        v = async () => {
          var a;
          const h = await J(Ee({ withdrawid: 2 }));
          h &&
            (m.value =
              ((a = h.data) == null ? void 0 : a.withdrawalslist) || []);
        };
      return (
        ve(() => {
          (i.value = r.query.bid || 0), v();
        }),
        (h, a) => {
          const p = P("NavBar"),
            l = Re("throttle-click");
          return (
            s(),
            d("div", Ru, [
              _(
                p,
                {
                  title: h.$t("upiPaymentMethod"),
                  "left-arrow": "",
                  onClickLeft: c,
                },
                null,
                8,
                ["title"]
              ),
              e("div", Mu, [
                m.value.length
                  ? (s(!0),
                    d(
                      H,
                      { key: 0 },
                      ke(
                        m.value,
                        (b, f) => (
                          s(),
                          d("div", { key: f, class: "upi_C-item" }, [
                            e("div", Lu, [
                              e("div", Ou, t(h.$t("upiCollectMoney")), 1),
                              e(
                                "div",
                                {
                                  class: se([
                                    "select-btn",
                                    { isSelect: b.bid == i.value },
                                  ]),
                                  onClick: (U) => u(b.bid),
                                },
                                null,
                                10,
                                Vu
                              ),
                            ]),
                            e("div", qu, [
                              e("div", ju, t(b.upiName), 1),
                              e("div", zu, t(b.upiAccount), 1),
                              e("div", Fu, t(b.mobileNo), 1),
                            ]),
                          ])
                        )
                      ),
                      128
                    ))
                  : (s(),
                    $e(
                      Qe,
                      { key: 1 },
                      {
                        text: X(() => [
                          e("span", null, t(h.$t("noPaymentMethodsYet")), 1),
                        ]),
                        _: 1,
                      }
                    )),
              ]),
              ne((s(), d("div", Eu, [R(t(h.$t("upiAddPaymentMethod")), 1)])), [
                [l, { handler: o, wait: 1e3 }],
              ]),
            ])
          );
        }
      );
    },
  });
const Hu = ae(xu, [
    ["__scopeId", "data-v-68a41569"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/Upi/index.vue",
    ],
  ]),
  xv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Hu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Zu = { class: "cancelW" },
  Gu = { class: "orderInfo" },
  Ku = { class: "b" },
  Qu = { class: "reason" },
  Yu = { class: "fail" },
  Xu = { class: "van-dialog__content-title" },
  Ju = { class: "van-dialog__content-note" },
  ev = te({
    __name: "index",
    setup(k) {
      const { t: n } = we(),
        r = pe(),
        m = Ue(),
        i = g(),
        c = g("0"),
        u = g(!1),
        o = g(""),
        v = L(() => {
          var I;
          return c.value == "0"
            ? o.value
            : (I = i.value.find((C) => C.id == c.value)) == null
            ? void 0
            : I.reasonText;
        }),
        h = () => {
          r.go(-1);
        },
        a = g(""),
        p = g(""),
        l = g(""),
        b = g("");
      async function f() {
        const I = await J(va({ type: 1 }));
        I && (i.value = I.data);
      }
      async function U() {
        (await J(
          pa({ orderNo: b.value, cancelReason: v.value, reamrk: "" })
        )) && ((u.value = !1), h());
      }
      async function D() {
        if (c.value == "0" && o.value.trim().length == 0) {
          x(n("enterOtherReason"));
          return;
        }
        u.value = !0;
      }
      return (
        ve(() => {
          var I, C, A, V, w, T, F, Z;
          (a.value =
            ((C = (I = m.query) == null ? void 0 : I.orderAmount) == null
              ? void 0
              : C.toString()) || ""),
            (p.value =
              ((V = (A = m.query) == null ? void 0 : A.sellerAccountNo) == null
                ? void 0
                : V.toString()) || ""),
            (l.value =
              ((T = (w = m.query) == null ? void 0 : w.createTime) == null
                ? void 0
                : T.toString()) || ""),
            (b.value =
              ((Z = (F = m.query) == null ? void 0 : F.orderNo) == null
                ? void 0
                : Z.toString()) || ""),
            f();
        }),
        (I, C) => {
          const A = P("NavBar"),
            V = P("van-radio"),
            w = P("van-radio-group"),
            T = P("van-field"),
            F = P("van-dialog"),
            Z = Re("lazy");
          return (
            s(),
            d("div", Zu, [
              _(A, {
                title: "取消订单",
                "left-arrow": "",
                onClickLeft: h,
                backgroundColor: "transparent",
              }),
              e("div", Gu, [
                e("div", null, [
                  e("span", null, t(I.$t("withdrawalA")), 1),
                  e("span", Ku, t($(le)(a.value)), 1),
                ]),
                e("div", null, [
                  e("span", null, "UPI " + t(I.$t("account")), 1),
                  e("span", null, t(p.value), 1),
                ]),
                e("div", null, [
                  e("span", null, t($(It)(l.value, "yyyy-MM-dd")), 1),
                  e(
                    "span",
                    {
                      class: "copy",
                      onClick: C[0] || (C[0] = (S) => $(De)(b.value)),
                    },
                    t(b.value),
                    1
                  ),
                ]),
              ]),
              e("div", Qu, [
                e("h2", null, t(I.$t("cancelReason")), 1),
                _(
                  w,
                  {
                    modelValue: c.value,
                    "onUpdate:modelValue":
                      C[1] || (C[1] = (S) => (c.value = S)),
                    shape: "dot",
                    "checked-color": "#ee0a24",
                  },
                  {
                    default: X(() => [
                      (s(!0),
                      d(
                        H,
                        null,
                        ke(
                          i.value,
                          (S, G) => (
                            s(),
                            $e(
                              V,
                              { key: G, name: S.id.toString() },
                              {
                                default: X(() => [R(t(S.reasonText), 1)]),
                                _: 2,
                              },
                              1032,
                              ["name"]
                            )
                          )
                        ),
                        128
                      )),
                      _(
                        V,
                        { name: "0" },
                        { default: X(() => [R(t(I.$t("other")), 1)]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
                _(
                  T,
                  {
                    class: "textarea",
                    disabled: c.value != "0",
                    modelValue: o.value,
                    "onUpdate:modelValue":
                      C[2] || (C[2] = (S) => (o.value = S)),
                    rows: "3",
                    autosize: "",
                    type: "textarea",
                    maxlength: "150",
                    placeholder: I.$t("enterOtherReason"),
                  },
                  null,
                  8,
                  ["disabled", "modelValue", "placeholder"]
                ),
              ]),
              e(
                "div",
                { class: "cancel", onClick: D },
                t(I.$t("confirmCancel")),
                1
              ),
              _(
                F,
                {
                  show: u.value,
                  "onUpdate:show": C[4] || (C[4] = (S) => (u.value = S)),
                  "show-confirm-button": !1,
                  "z-index": "100",
                  closeOnClickOverlay: !0,
                },
                {
                  default: X(() => [
                    ne(e("img", Yu, null, 512), [
                      [Z, $(ye)("wallet/recharge", "tip")],
                    ]),
                    e("div", Xu, t(I.$t("cancelW")), 1),
                    e("div", Ju, [e("span", null, t(I.$t("c2cWTip11")), 1)]),
                    e(
                      "div",
                      { class: "van-dialog__content-btn", onClick: U },
                      t(I.$t("confirmCancel")),
                      1
                    ),
                    ne(
                      e(
                        "img",
                        {
                          class: "close",
                          onClick: C[3] || (C[3] = (S) => (u.value = !1)),
                        },
                        null,
                        512
                      ),
                      [[Z, $(et)("main", "close")]]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["show"]
              ),
            ])
          );
        }
      );
    },
  });
const tv = ae(ev, [
    ["__scopeId", "data-v-522a488b"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/c2cCancelWithdrawal/index.vue",
    ],
  ]),
  Hv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tv },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  av = { class: "wrongA" },
  nv = { class: "head" },
  sv = { class: "content" },
  ov = { class: "amount" },
  lv = { class: "input" },
  iv = { class: "place-div" },
  rv = { class: "img" },
  dv = { class: "uploadImg" },
  cv = { class: "tip" },
  uv = { class: "img video" },
  vv = { class: "uploadImg" },
  pv = { key: 0, class: "v", controls: "" },
  _v = ["src"],
  mv = ["src"],
  hv = ["src"],
  wv = { key: 1, class: "videoBox loading" },
  fv = te({
    __name: "index",
    setup(k) {
      var I;
      const n = pe(),
        { t: r } = we(),
        m = L(() => Fe().getDollarSign),
        i = g([]),
        c = g([]),
        u = g([]),
        o = g(),
        v = g(),
        h = g(!1),
        a = g({
          orderNo:
            (I = n.currentRoute.value.query) == null ? void 0 : I.orderNo,
          realAmount: 0,
          ossUrls: [{}],
        }),
        p = L(() => {
          var C;
          return !(
            ((C = a.value.orderNo) == null
              ? void 0
              : C.toString().trim().length) == 0 ||
            +(a.value.realAmount <= 0) ||
            u.value.length == 0 ||
            h.value
          );
        }),
        l = async (C) => {
          const A = new FormData();
          (C == null ? void 0 : C.length) > 0
            ? C.forEach((w) => {
                A.append("files", w.file);
              })
            : A.append("files", C.file),
            (await J(_a(A))).data.forEach((w) => {
              u.value.push(w.src);
            });
        },
        b = (C, A) => (
          u.value.filter((V, w) => {
            A.index == w && u.value.splice(w, 1);
          }),
          !0
        ),
        f = async (C) => {
          h.value = !0;
          const A = new FormData();
          A.append("files", C.file);
          const V = await J(ma(A));
          V &&
            ((o.value = V.data[0].ossHttp + "/" + V.data[0].src),
            (v.value = V.data[0].src)),
            (h.value = !1);
        };
      async function U() {
        if (!p.value) return;
        if (h.value)
          return x({ message: r("c2cTip45"), wordBreak: "break-word" });
        (a.value.ossUrls.length = 0),
          u.value.forEach((V) => {
            a.value.ossUrls.push({ fileType: 1, fileUrl: V });
          }),
          v.value && a.value.ossUrls.push({ fileType: 2, fileUrl: v.value });
        const [C, A] = await ha(wa(a.value));
        A.code == 0
          ? D(r("submitSuccess"))
          : A.msgCode == "281" && A.code == 1
          ? D(A.msg)
          : Je(A);
      }
      function D(C) {
        x({ message: C, wordBreak: "break-word" }),
          setTimeout(() => {
            n.replace({
              name: "Withdraw-C2cDetail",
              query: { order: a.value.orderNo },
            });
          }, 2e3);
      }
      return (C, A) => {
        const V = P("NavBar"),
          w = P("van-field"),
          T = P("van-uploader"),
          F = P("van-icon");
        return (
          s(),
          d("div", av, [
            e("div", nv, [
              _(V, {
                title: "",
                "left-arrow": "",
                onClickLeft: A[0] || (A[0] = () => $(n).back()),
                backgroundColor: "transparent",
              }),
              e("h1", null, t(C.$t("c2cState14")), 1),
              e("div", null, t(C.$t("c2cTip35")), 1),
              e("div", null, t(C.$t("c2cTip36")), 1),
            ]),
            e("div", sv, [
              e("div", ov, [
                e("h1", null, t(C.$t("c2cTip37")), 1),
                e("p", null, t(C.$t("c2cTip38")), 1),
                e("div", lv, [
                  e("div", iv, t(m.value), 1),
                  _(
                    w,
                    {
                      modelValue: a.value.realAmount,
                      "onUpdate:modelValue":
                        A[1] || (A[1] = (Z) => (a.value.realAmount = Z)),
                      modelModifiers: { number: !0 },
                      center: "",
                      type: "digit",
                      placeholder: C.$t("enterAmount"),
                      class: "inp",
                    },
                    null,
                    8,
                    ["modelValue", "placeholder"]
                  ),
                ]),
              ]),
              e("div", rv, [
                e(
                  "h1",
                  null,
                  t(C.$t("c2cTip39")) + " (" + t(i.value.length) + "/3) ",
                  1
                ),
                _(
                  T,
                  {
                    modelValue: i.value,
                    "onUpdate:modelValue":
                      A[2] || (A[2] = (Z) => (i.value = Z)),
                    multiple: "",
                    "max-count": 3,
                    "max-size": 5e3 * 1024,
                    onOversize:
                      A[3] || (A[3] = () => $(gt)(C.$t("C2Cuploadtip2"))),
                    accept: "image/*",
                    "after-read": l,
                    "before-delete": b,
                  },
                  {
                    default: X(() => [e("div", dv, t(C.$t("c2cTip40")), 1)]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
                e("div", cv, [
                  _(F, { name: "warning-o", size: "18" }),
                  R(t(C.$t("c2cTip41")), 1),
                ]),
              ]),
              e("div", uv, [
                e(
                  "h1",
                  null,
                  t(C.$t("c2cTip42")) + " (" + t(c.value.length) + "/1) ",
                  1
                ),
                h.value
                  ? y("v-if", !0)
                  : (s(),
                    $e(
                      T,
                      {
                        key: 0,
                        modelValue: c.value,
                        "onUpdate:modelValue":
                          A[4] || (A[4] = (Z) => (c.value = Z)),
                        "max-count": 1,
                        "max-size": 5e4 * 1024,
                        onOversize:
                          A[5] || (A[5] = () => $(gt)(C.$t("c2cTip51"))),
                        accept: "video/*",
                        "after-read": f,
                      },
                      {
                        "preview-cover": X(({ file: Z }) => [
                          o.value
                            ? (s(),
                              d("video", pv, [
                                e(
                                  "source",
                                  { src: o.value, type: "video/ogg" },
                                  null,
                                  8,
                                  _v
                                ),
                                e(
                                  "source",
                                  { src: o.value, type: "video/mp4" },
                                  null,
                                  8,
                                  mv
                                ),
                                e(
                                  "source",
                                  { src: o.value, type: "video/webm" },
                                  null,
                                  8,
                                  hv
                                ),
                              ]))
                            : y("v-if", !0),
                        ]),
                        default: X(() => [
                          e("div", vv, t(C.$t("c2cTip43")), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )),
                h.value
                  ? (s(), d("div", wv, t(C.$t("c2cTip44")), 1))
                  : y("v-if", !0),
              ]),
              e(
                "div",
                { class: se(["cmdBth", { active: p.value }]), onClick: U },
                t(C.$t("c2cState14")),
                3
              ),
            ]),
          ])
        );
      };
    },
  });
const yv = ae(fv, [
    ["__scopeId", "data-v-5e595a70"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Withdraw/c2cWrongAmount/index.vue",
    ],
  ]),
  Zv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: yv },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  Iv as a,
  Bv as b,
  Hs as c,
  Uv as d,
  Dv as e,
  Pv as f,
  Rv as g,
  Mv as h,
  Av as i,
  Lv as j,
  Ov as k,
  Vv as l,
  qv as m,
  jv as n,
  zv as o,
  Fv as p,
  Ev as q,
  xv as r,
  Hv as s,
  Zv as t,
};
