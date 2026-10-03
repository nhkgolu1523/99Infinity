import {
  G as re,
  z as be,
  r as K,
  $ as Ve,
  t as Be,
  a5 as Et,
  H as B,
  N as s,
  I as n,
  J as t,
  ao as o,
  K as q,
  M as x,
  ap as U,
  O as e,
  P as a,
  aB as $,
  Q as g,
  aC as Le,
  aD as Me,
  u as Re,
  B as oe,
  R as We,
  C as ye,
  aA as Ue,
  ax as Y,
  au as z,
  ay as qt,
  av as D,
  Z as de,
  aF as vt,
  E as Ee,
  aW as J,
  a0 as Gt,
  bx as Oe,
  F as jt,
  aK as Ht,
} from "./common.modules-cecf9b0d.js";
import { u as Ce, I as Kt } from "./page-wallet-OtherPay-4f4fd754.js";
import {
  a5 as Te,
  dq as ue,
  a9 as ht,
  _ as ie,
  y as Ae,
  g as ne,
  b as pe,
  c as ee,
  cf as gt,
  di as Ft,
  ak as zt,
  a1 as Xt,
  ch as mt,
  bv as pt,
  bw as _t,
  A as Qt,
  dr as Jt,
  L as Ne,
  am as Zt,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { A as ft } from "./page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js";
import { E as Yt } from "./page-activity-Bonus-c94a181e.js";
import { D as De } from "./page-activity-Championship-c5772910.js";
const yt = (I) => (Le("data-v-4f3d8608"), (I = I()), Me(), I),
  xt = { class: "Recharge__container-tabcard" },
  ea = ["onClick"],
  ta = { class: "centers" },
  aa = { key: 0, class: "gift" },
  sa = { key: 0 },
  na = { key: 1 },
  oa = { key: 2, class: "small" },
  ra = { class: "Recharge__container-tabcard__top" },
  ia = ["src"],
  la = { class: "Recharge__container-tabcard__bot" },
  ca = { key: 0 },
  da = { class: "left" },
  ua = { class: "right" },
  pa = { class: "ar_wallet" },
  _a = { class: "info" },
  va = ["src"],
  ha = { key: 0, class: "tit" },
  ga = { key: 1, class: "tip" },
  ma = { key: 2, class: "wallet_amount" },
  fa = yt(() => t("span", null, "ARB", -1)),
  ya = { key: 1 },
  ka = { class: "ar_wallet" },
  $a = { class: "info" },
  wa = ["src"],
  ba = { key: 0, class: "tip" },
  Ra = { class: "tit" },
  Ca = { class: "wallet_amount" },
  Ta = yt(() => t("em", null, "rsn", -1)),
  Aa = re({
    __name: "RechargeMenu",
    setup(I) {
      const {
          store: _,
          handleChangeMenu: r,
          getPayTabList: h,
          arPay: b,
          currentPayId: y,
          rnsPay: k,
        } = Ce(),
        {
          isArWalletActive: w,
          arWallet: V,
          onTradRule: X,
          getInfo: m,
          goWallet: v,
          goActive: P,
          activeBind: S,
        } = Te(),
        { t: R } = be(),
        M = K(!1),
        Z = (O) => {
          S(O, "wallet/recharge"), (M.value = !1);
        },
        te = async () => {
          Be({ message: R("loading") + "...", forbidClick: !0 });
          const O = {
              returnUrl: "https://" + window.location.host + "/#/main",
            },
            f = await ht(O);
          if ((f == null ? void 0 : f.code) === 1)
            return (
              (f == null ? void 0 : f.msgCode) === 1010 && (M.value = !0),
              Re(f == null ? void 0 : f.msg)
            );
          if ((f == null ? void 0 : f.code) === 0) {
            const {
              walletActivationPageUrl: Q,
              memberId: j,
              merchantCode: W,
              timestamp: H,
            } = (f == null ? void 0 : f.data) || {};
            window.location.href =
              Q + "&memberId=" + j + "&merchantCode=" + W + "&timestamp=" + H;
          }
        },
        G = (O) => {
          O === "RSN"
            ? _.rsnInfo.walletActivationStatus === 0
              ? P("wallet/recharge", "RSN")
              : v("wallet/recharge", "RSN")
            : w.value
            ? v("wallet/recharge")
            : te();
        };
      return (
        Ve(
          () => y.value,
          async (O) => {
            O === 21 &&
              (Be({ message: R("loading") + "...", forbidClick: !0 }),
              await m(),
              (_.arPayInfo = V.value),
              Et());
          },
          { immediate: !0 }
        ),
        (O, f) => {
          var W, H;
          const Q = B("svg-icon"),
            j = B("van-icon");
          return (
            s(),
            n(
              q,
              null,
              [
                t("div", null, [
                  o(
                    '		<div class="new_upi" v-if="arUpiPay" :class="{ upi_active: store.currentMenu === -3 }" @click="handleChangeMenu(-3)">'
                  ),
                  o('			<img :src="arUpiPay.payNameUrl" alt="" />'),
                  o('			<div class="upi_item rns_item">'),
                  o('				<div class="title">{{ arUpiPay.payName }}</div>'),
                  o(
                    '				<div v-if="arUpiPay.maxRechargeRifts" class="upi_image">+{{ arUpiPay?.maxRechargeRifts * 100 }}%</div>'
                  ),
                  o("			</div>"),
                  o("		</div>"),
                  o(
                    '		<div class="new_upi" v-if="arPay" :class="{ upi_active: store.currentMenu === -1 }" @click="handleChangeMenu(-1)">'
                  ),
                  o('			<img :src="arPay.payNameUrl" alt="" />'),
                  o('			<div class="upi_item">'),
                  o('				<div class="title">{{ arPay.payName }}</div>'),
                  o(
                    '				<div v-if="arPay?.maxRechargeRifts" class="upi_image">+{{ arPay?.maxRechargeRifts * 100 }}%</div>'
                  ),
                  o('				<div class="gift" v-if="arPay.maxRechargeRifts">'),
                  o(
                    "					{{ t('arGift', [accMul(arPay.maxRechargeRifts || 0, 100) + '%']) }}"
                  ),
                  o("				</div>"),
                  o(
                    '				<div v-if="arPay?.maxRechargeRifts" class="upi_image">+{{ arPay?.maxRechargeRifts * 100 }}%</div>'
                  ),
                  o("			</div>"),
                  o("		</div>"),
                  o(
                    '		<div class="new_upi" v-if="rnsPay" :class="{ upi_active: store.currentMenu === -2 }" @click="handleChangeMenu(-2)">'
                  ),
                  o('			<img :src="rnsPay.payNameUrl" alt="" />'),
                  o('			<div class="upi_item rns_item">'),
                  o('				<div class="title">{{ rnsPay.payName }}</div>'),
                  o(
                    '				<div v-if="rnsPay.maxRechargeRifts" class="upi_image">+{{ rnsPay?.maxRechargeRifts * 100 }}%</div>'
                  ),
                  o("			</div>"),
                  o("		</div>"),
                  t("div", xt, [
                    (s(!0),
                    n(
                      q,
                      null,
                      x(
                        e(h),
                        (C, F) => (
                          s(),
                          n(
                            "div",
                            {
                              key: F,
                              class: U([
                                "Recharge__container-tabcard__items",
                                { active: F === e(_).currentMenu },
                              ]),
                              onClick: (le) => e(r)(F),
                            },
                            [
                              t("div", ta, [
                                (C.maxRechargeRifts ?? 0) > 0 ||
                                (C.vipRechargeRate ?? 0) > 0
                                  ? (s(),
                                    n("div", aa, [
                                      (C.maxRechargeRifts ?? 0) > 0 &&
                                      (C.vipRechargeRate ?? 0) === 0
                                        ? (s(),
                                          n(
                                            "span",
                                            sa,
                                            " +" +
                                              a(
                                                e(ue)(C.maxRechargeRifts * 100)
                                              ) +
                                              "% ",
                                            1
                                          ))
                                        : (C.vipRechargeRate ?? 0) > 0 &&
                                          (C.maxRechargeRifts ?? 0) === 0
                                        ? (s(),
                                          n(
                                            "span",
                                            na,
                                            " +" +
                                              a(
                                                e(ue)(C.vipRechargeRate * 100)
                                              ) +
                                              "% ",
                                            1
                                          ))
                                        : (s(),
                                          n(
                                            "span",
                                            oa,
                                            a(e(ue)(C.maxRechargeRifts * 100)) +
                                              "%+" +
                                              a(
                                                e(ue)(C.vipRechargeRate * 100)
                                              ) +
                                              "% ",
                                            1
                                          )),
                                    ]))
                                  : o("v-if", !0),
                                t("div", ra, [
                                  t(
                                    "img",
                                    {
                                      class: "img",
                                      src:
                                        F === e(_).currentMenu
                                          ? C.payNameUrl2
                                          : C.payNameUrl,
                                      alt: "",
                                    },
                                    null,
                                    8,
                                    ia
                                  ),
                                ]),
                                t("div", la, [
                                  $(a(C.payName) + " ", 1),
                                  o(
                                    ' <span v-if="item.maxRechargeRifts && item.maxRechargeRifts > 0">{{ item?.maxRechargeRifts * 100 }}%</span> '
                                  ),
                                ]),
                              ]),
                            ],
                            10,
                            ea
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  e(b) && e(_).currentPayId === 21
                    ? (s(),
                      n("div", ca, [
                        t(
                          "div",
                          {
                            class: "rule",
                            onClick: f[0] || (f[0] = (C) => e(X)()),
                          },
                          [
                            t("div", da, [
                              g(Q, { name: "arpay1" }),
                              t("p", null, a(O.$t("arbTip1")), 1),
                            ]),
                            t("div", ua, [
                              $(a(O.$t("checkOver")), 1),
                              g(j, { name: "arrow" }),
                            ]),
                          ]
                        ),
                        t("div", pa, [
                          t("div", _a, [
                            t(
                              "img",
                              { src: e(b).payNameUrl, alt: "" },
                              null,
                              8,
                              va
                            ),
                            t("div", null, [
                              e(w)
                                ? (s(), n("div", ha, a(e(R)("arbTip13")), 1))
                                : o("v-if", !0),
                              e(w)
                                ? (s(),
                                  n("div", ma, [
                                    $(
                                      a(
                                        ((W = e(V)) == null
                                          ? void 0
                                          : W.balance) || 0
                                      ),
                                      1
                                    ),
                                    fa,
                                  ]))
                                : (s(), n("div", ga, a(O.$t("arNoActive")), 1)),
                            ]),
                          ]),
                          t(
                            "div",
                            { class: "ar_btn", onClick: G },
                            a(e(w) ? e(R)("comminWallet") : e(R)("arActive")),
                            1
                          ),
                        ]),
                        o(
                          ` <div class="ar_wallet_tip">{{ $t('arTip') }}</div> `
                        ),
                      ]))
                    : o("v-if", !0),
                  e(k) && e(_).currentPayId === 22
                    ? (s(),
                      n("div", ya, [
                        t("div", ka, [
                          t("div", $a, [
                            t(
                              "img",
                              { src: e(k).payNameUrl, alt: "" },
                              null,
                              8,
                              wa
                            ),
                            t("div", null, [
                              e(_).rsnInfo.walletActivationStatus === 0
                                ? (s(), n("div", ba, a(O.$t("rnsNoActive")), 1))
                                : (s(),
                                  n(
                                    q,
                                    { key: 1 },
                                    [
                                      t("div", Ra, a(e(R)("RSNTip")), 1),
                                      t("div", Ca, [
                                        t(
                                          "em",
                                          null,
                                          a(e(R)("balance")) + ":",
                                          1
                                        ),
                                        $(
                                          " " +
                                            a(
                                              ((H = e(_).rsnInfo) == null
                                                ? void 0
                                                : H.balance) || 0
                                            ) +
                                            " ",
                                          1
                                        ),
                                        Ta,
                                      ]),
                                    ],
                                    64
                                  )),
                            ]),
                          ]),
                          t(
                            "div",
                            {
                              class: "ar_btn",
                              onClick: f[1] || (f[1] = (C) => G("RSN")),
                            },
                            a(
                              e(_).rsnInfo.walletActivationStatus === 0
                                ? e(R)("RNSActive")
                                : e(R)("comminWallet")
                            ),
                            1
                          ),
                        ]),
                        o(
                          ` <div class="ar_wallet_tip">{{ $t('arTip') }}</div> `
                        ),
                      ]))
                    : o("v-if", !0),
                ]),
                o("激活绑定验证"),
                g(
                  ft,
                  {
                    isVisible: M.value,
                    onOnConfirm: Z,
                    onOnCancel: f[2] || (f[2] = (C) => (M.value = !1)),
                  },
                  null,
                  8,
                  ["isVisible"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  });
const Ia = ie(Aa, [
    ["__scopeId", "data-v-4f3d8608"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Recharge/RechargeMenu.vue",
    ],
  ]),
  Sa = { key: 0, class: "arCard" },
  Pa = { class: "left" },
  Oa = ["src"],
  Na = { class: "features" },
  Da = { class: "title" },
  Ba = { class: "t1" },
  Ua = { class: "t3" },
  Va = ["innerHTML"],
  La = ["innerHTML"],
  Ma = re({
    __name: "noActivate",
    props: { pageType: { type: String, required: !0 } },
    setup(I) {
      const _ = I,
        { t: r } = be(),
        { goActive: h, activeBind: b, onTradRule: y } = Te(),
        k = oe(() => Ae().getProjectName),
        w = K(!1),
        V = async () => {
          Be({ message: r("loading") + "...", forbidClick: !0 });
          const m = {
              returnUrl: "https://" + window.location.host + "/#/main",
            },
            v = await ht(m);
          if ((v == null ? void 0 : v.code) === 1)
            return (
              (v == null ? void 0 : v.msgCode) === 1010 && (w.value = !0),
              Re(v == null ? void 0 : v.msg)
            );
          if ((v == null ? void 0 : v.code) === 0) {
            const {
              walletActivationPageUrl: P,
              memberId: S,
              merchantCode: R,
              timestamp: M,
            } = (v == null ? void 0 : v.data) || {};
            window.location.href =
              P + "&memberId=" + S + "&merchantCode=" + R + "&timestamp=" + M;
          }
        },
        X = (m) => {
          b(m, _.pageType), (w.value = !1);
        };
      return (m, v) => {
        const P = B("svg-icon"),
          S = B("van-icon");
        return (
          s(),
          n(
            q,
            null,
            [
              m.pageType !== "wallet/recharge"
                ? (s(),
                  n("div", Sa, [
                    t("div", Pa, [
                      t(
                        "img",
                        { src: e(ne)("wallet/withdrawType", "21") },
                        null,
                        8,
                        Oa
                      ),
                      $(" " + a(m.$t("arbTip3")), 1),
                    ]),
                    o(
                      `<div class="right" @click="goActive(pageType)">{{$t('arbActive')}}</div>`
                    ),
                    t(
                      "div",
                      { class: "right", onClick: V },
                      a(m.$t("arbActive")),
                      1
                    ),
                  ]))
                : o("v-if", !0),
              t("div", Na, [
                t("div", Da, [
                  g(P, { name: "arpay2" }),
                  $(" " + a(m.$t("arbTip4")), 1),
                ]),
                t("p", null, a(m.$t("arbTip5")), 1),
                t("p", Ba, a(m.$t("arbTip6")), 1),
                t(
                  "p",
                  { class: "t2", onClick: v[0] || (v[0] = (R) => e(y)()) },
                  [$(a(m.$t("arbTip7")), 1), g(S, { name: "arrow" })]
                ),
                t("p", Ua, a(m.$t("arbTip8")), 1),
                t("p", { innerHTML: m.$t("abbTip9", [k.value]) }, null, 8, Va),
                t("p", { innerHTML: m.$t("arbTip10", [k.value]) }, null, 8, La),
                t("p", null, a(m.$t("arbTip11")), 1),
                t("p", null, a(m.$t("arbTip12")), 1),
                o(
                  `<div class="toActive" @click="goActive(pageType)">{{$t('arActive')}}</div>`
                ),
                t(
                  "div",
                  { class: "toActive", onClick: V },
                  a(m.$t("arActive")),
                  1
                ),
              ]),
              o("激活绑定验证"),
              g(
                ft,
                {
                  isVisible: w.value,
                  onOnConfirm: X,
                  onOnCancel: v[1] || (v[1] = (R) => (w.value = !1)),
                },
                null,
                8,
                ["isVisible"]
              ),
            ],
            64
          )
        );
      };
    },
  });
const Wa = ie(Ma, [
    ["__scopeId", "data-v-e7d19060"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Withdraw/Ar/noActivate.vue",
    ],
  ]),
  ke = (I) => (Le("data-v-9e03166f"), (I = I()), Me(), I),
  Ea = { class: "Recharge__content" },
  qa = { key: 0, class: "Recharge__content-quickInfo boxStyle" },
  Ga = { class: "Recharge__content-quickInfo__title" },
  ja = { class: "title" },
  Ha = ["onClick"],
  Ka = { key: 0, class: "other" },
  Fa = { key: 0, class: "bouns" },
  za = { key: 0 },
  Xa = { key: 1, class: "usdt_icon" },
  Qa = ["src"],
  Ja = { key: 0, class: "bouns" },
  Za = { key: 0 },
  Ya = { key: 1, class: "other_bank" },
  xa = { class: "select_bank_tit" },
  es = { key: 2, class: "transfer boxStyle" },
  ts = { class: "title" },
  as = { class: "transfer_list" },
  ss = ["src"],
  ns = ["src"],
  os = { key: 3, class: "bank_list" },
  rs = ["onClick"],
  is = ["data-img"],
  ls = { key: 5, class: "Recharge__content-paymoney boxStyle" },
  cs = { class: "Recharge__content-paymoney__title" },
  ds = ["src"],
  us = { key: 2 },
  ps = { key: 3 },
  _s = { class: "Recharge__content-paymoney__money-list" },
  vs = ["onClick"],
  hs = ["src"],
  gs = { key: 1 },
  ms = { key: 0, class: "ar_gift" },
  fs = ["src"],
  ys = { class: "place-div" },
  ks = { key: 2, class: "unit" },
  $s = ["src"],
  ws = { key: 2, class: "recharge_tip" },
  bs = { class: "Recharge__content-waitPay boxStyle" },
  Rs = ["src"],
  Cs = { class: "wait_text" },
  Ts = ke(() => t("span", null, "3", -1)),
  As = ke(() => t("span", null, "0", -1)),
  Is = ke(() => t("span", null, ":", -1)),
  Ss = ke(() => t("span", null, "0", -1)),
  Ps = ke(() => t("span", null, "0", -1)),
  Os = [Ts, As, Is, Ss, Ps],
  Ns = { key: 6, class: "Recharge__content-fixed" },
  Ds = { class: "Recharge__content-fixed-box" },
  Bs = { class: "showAmountError" },
  Us = { class: "title1" },
  Vs = { class: "title2" },
  Ls = { class: "title2 red" },
  Ms = { class: "button" },
  Ws = { class: "arupiAmount" },
  Es = { class: "title1" },
  qs = { class: "title2" },
  Gs = ["onClick"],
  js = { class: "button column" },
  Hs = { class: "goBuy" },
  Ks = { class: "clance" },
  Fs = { class: "arupiAmount" },
  zs = { class: "title1" },
  Xs = { class: "title2" },
  Qs = { class: "button" },
  Js = { class: "arupiAmount" },
  Zs = { class: "title1 arupi-header" },
  Ys = { key: 0, class: "title2" },
  xs = { key: 1, class: "title2" },
  en = { key: 2, class: "title2" },
  tn = { class: "title1" },
  an = { class: "button column" },
  sn = { class: "text" },
  nn = { class: "reason pr16 pb16 pl16 pt16" },
  on = { class: "title mb16 x-row x-row-middle-center" },
  rn = { class: "pl25 mt10" },
  ln = ["placeholder"],
  cn = { class: "arupiAmount" },
  dn = { class: "title1" },
  un = { class: "title2" },
  pn = { class: "button" },
  _n = re({
    __name: "RechargeContainer",
    setup(I) {
      const _ = K(),
        {
          store: r,
          currentPayId: h,
          isLocakBank: b,
          isArpay: y,
          isNumberPay: k,
          isHaveOrder: w,
          currentPayTypeId: V,
          placeholder: X,
          showArupiAmount: m,
          arupiAmountList: v,
          arupiAmount: P,
          cancelOrder: S,
          amountType: R,
          onCancelRechargeOrder: M,
          handleSelectPayType: Z,
          goArapiPayToOrderDetail: te,
          numberKeyObj: G,
          handleQuickSelect: O,
          handleInput: f,
          getC2CunitAmount: Q,
          handleClearInput: j,
          formatNum: W,
          setCountdownRef: H,
          getElwallett: C,
          isSplitLocalEWallet: F,
          handleSelectBank: le,
          IsShowRechargeBankList: l,
          showOtherSelect: p,
          confirmOtherSelectBank: T,
          isOtherRecharge: ae,
          currentOtherThirdBankList: ce,
          getTransferBankList: A,
          transfer: c,
          handleRecharge: N,
          onJumpArUpi: kt,
          goToOrderAppeal: $t,
          gotoBanklist: wt,
          showAmountError: $e,
          isRsnpay: Ie,
          isArUpiPay: bt,
          reasonList: Rt,
          from: se,
          getCancellationReasonList: Ct,
        } = Ce(),
        { t: Tt } = be(),
        { arWallet: At, isArWalletActive: qe, goWallet: Ge } = Te(),
        _e = We(),
        ve = oe(() => Ae().getDollarSign),
        It = oe(() => (y.value ? "arActive" : "active")),
        we = K(!1),
        St = async () => {
          try {
            await Ct();
          } catch {
          } finally {
            r.reasonShow = !0;
          }
        },
        Pt = (u) => {
          u.target.value && (se.checked = -1);
        },
        Ot = (u) => {
          u > -1 && (se.text = "");
        },
        Nt = () => {
          var d, E;
          if (
            !(
              ((d = r.goingOrder) == null ? void 0 : d.paymentPageExpire) ==
                0 &&
              ((E = r.goingOrder) == null ? void 0 : E.utrSubmitSuccess) == 0
            )
          ) {
            je();
            return;
          }
          (we.value = !0), (r.reasonShow = !1);
        },
        je = async () => {
          var E, he;
          const { checked: u, text: d } = se;
          if (u === -1 && !d) return Re(Tt("addCancelDes"));
          (r.reasonShow = !1),
            r.goingOrder &&
              (await M(
                ((E = r.goingOrder) == null ? void 0 : E.paymentPageExpire) ==
                  0 &&
                  ((he = r.goingOrder) == null
                    ? void 0
                    : he.utrSubmitSuccess) == 0
              ));
        };
      Ve(
        () => r.goingOrder,
        () => {
          r.goingOrder || (we.value = !1);
        }
      ),
        ye(() => {
          H(_.value);
        });
      const Dt = () => {
          (r.amount = 1e3), (r.currentQuickIndex = -1);
        },
        Bt = oe(() =>
          y.value || Ie.value
            ? !!(qe.value || r.rsnInfo.walletActivationStatus === 1)
            : !w.value
        ),
        Ut = async () => {
          var d, E;
          let u = h.value === 18 ? C() : r.currentPayType.payTypeID;
          if (h.value === 21) {
            if ((d = r.isArPayOrder) != null && d.includes("&GroupID=")) {
              const ge = new URL(
                (E = r.isArPayOrder) == null ? void 0 : E.replaceAll("/#", "")
              ).searchParams.get("GroupID");
              if ((Number(ge) & 512) === 512) {
                await Ge();
                return;
              }
            }
            window.location.href = r.isArPayOrder;
            return;
          }
          if (h.value === 26) {
            kt(r.isArUpiPayOrder || "");
            return;
          }
          if (h.value === 12)
            return _e.push({ name: "OtherPay", query: { type: "upi" } });
          if (h.value === 19)
            return _e.push({
              name: "RechargeUsdt",
              query: { amount: r.numberPayAmount },
            });
          _e.push({
            name: "RechargeDetail",
            query: { currentPayId: h.value, payTypeId: u, amount: r.amount },
          });
        },
        Vt = () => {
          Ge("wallet/recharge");
        };
      return (u, d) => {
        var Fe, ze, Xe;
        const E = B("svg-icon"),
          he = B("van-icon"),
          ge = B("van-field"),
          He = B("van-picker"),
          Ke = B("van-popup"),
          me = B("van-dialog"),
          Lt = B("van-radio"),
          Mt = B("van-radio-group"),
          Wt = Ue("lazy"),
          Se = Ue("throttle-click");
        return (
          s(),
          n(
            q,
            null,
            [
              t("div", Ea, [
                o("  选择通道  "),
                !e(b) && !e(y) && !e(Ie) && !e(w) && e(h) !== 10
                  ? (s(),
                    n("div", qa, [
                      t("div", Ga, [
                        t("div", ja, [
                          g(E, { name: "quickpay2" }),
                          t("p", null, a(u.$t("RCTXT1")), 1),
                        ]),
                      ]),
                      t(
                        "div",
                        {
                          class: U(["rechargeTypes_list", { numberPay: e(k) }]),
                        },
                        [
                          (s(!0),
                          n(
                            q,
                            null,
                            x(
                              e(r).rechargeTypes,
                              (i, L) => (
                                s(),
                                n(
                                  "div",
                                  {
                                    class: U([
                                      "Recharge__content-quickInfo__item",
                                      { item_active: e(V) === i.payTypeID },
                                    ]),
                                    key: i.payTypeID,
                                    onClick: (fe) => e(Z)(L),
                                  },
                                  [
                                    e(h) !== 11
                                      ? (s(),
                                        n("div", Ka, [
                                          t("div", null, a(i.payName), 1),
                                          t(
                                            "div",
                                            null,
                                            a(u.$t("RCTXT2")) +
                                              a(i.miniPrice) +
                                              " - " +
                                              a(e(W)(i.maxPrice)),
                                            1
                                          ),
                                          i.rechargeRifts > 0
                                            ? (s(),
                                              n("div", Fa, [
                                                $(
                                                  a(
                                                    e(ue)(i.rechargeRifts * 100)
                                                  ) + "% ",
                                                  1
                                                ),
                                                i.delayedRewardDays > 0
                                                  ? (s(),
                                                    n(
                                                      "span",
                                                      za,
                                                      a(i.delayedRewardDays) +
                                                        " days",
                                                      1
                                                    ))
                                                  : o("v-if", !0),
                                                $(" bonus"),
                                              ]))
                                            : o("v-if", !0),
                                        ]))
                                      : (s(),
                                        n("div", Xa, [
                                          t(
                                            "img",
                                            {
                                              src: e(ne)("wallet", "usdt"),
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            Qa
                                          ),
                                          t("div", null, [
                                            t("div", null, a(i.payName), 1),
                                            t(
                                              "div",
                                              null,
                                              a(u.$t("RCTXT2")) +
                                                a(i.miniPrice) +
                                                " - " +
                                                a(e(W)(i.maxPrice)),
                                              1
                                            ),
                                            i.rechargeRifts > 0
                                              ? (s(),
                                                n("div", Ja, [
                                                  $(
                                                    a(
                                                      e(ue)(
                                                        i.rechargeRifts * 100
                                                      )
                                                    ) + "% ",
                                                    1
                                                  ),
                                                  i.delayedRewardDays > 0
                                                    ? (s(),
                                                      n(
                                                        "span",
                                                        Za,
                                                        a(i.delayedRewardDays) +
                                                          " days",
                                                        1
                                                      ))
                                                    : o("v-if", !0),
                                                  $(" bonus"),
                                                ]))
                                              : o("v-if", !0),
                                          ]),
                                        ])),
                                  ],
                                  10,
                                  Ha
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        2
                      ),
                    ]))
                  : o("v-if", !0),
                e(ae) && e(r).thirdPayBankList.length > 0 && e(ce).length > 0
                  ? (s(),
                    n("div", Ya, [
                      t("div", xa, [
                        g(E, { name: "bank" }),
                        $(a(u.$t("selectBank")), 1),
                      ]),
                      t(
                        "div",
                        {
                          class: "bank_name",
                          onClick: d[0] || (d[0] = (i) => (p.value = !0)),
                        },
                        [
                          $(
                            a(
                              (Fe = e(r).selectOtherBank) == null
                                ? void 0
                                : Fe.bankName
                            ) + " ",
                            1
                          ),
                          g(he, { name: "arrow", class: "right_arrow" }),
                        ]
                      ),
                    ]))
                  : o("v-if", !0),
                o(" 孟加拉的转账类型选择 "),
                ve.value === "৳" && !e(w) && e(h) === 9
                  ? (s(),
                    n("div", es, [
                      t("div", ts, [
                        g(E, { name: "transf_amount" }),
                        $(" " + a(u.$t("transferType")), 1),
                      ]),
                      t("div", as, [
                        t(
                          "div",
                          {
                            class: U(["item", { transfer_active: e(c) === 1 }]),
                            onClick: d[1] || (d[1] = (i) => (c.value = 1)),
                          },
                          [
                            t(
                              "img",
                              {
                                src: e(pe)("wallet/recharge", "banktobank"),
                                alt: "",
                              },
                              null,
                              8,
                              ss
                            ),
                            $(" " + a(u.$t("banktobank")), 1),
                          ],
                          2
                        ),
                        t(
                          "div",
                          {
                            class: U(["item", { transfer_active: e(c) === 2 }]),
                            onClick: d[2] || (d[2] = (i) => (c.value = 2)),
                          },
                          [
                            t(
                              "img",
                              {
                                src: e(pe)("wallet/recharge", "wallettobank"),
                                alt: "",
                              },
                              null,
                              8,
                              ns
                            ),
                            $(" " + a(u.$t("wallettobank")), 1),
                          ],
                          2
                        ),
                      ]),
                    ]))
                  : o("v-if", !0),
                o(" 银行列表 "),
                e(b) && e(F) && e(l) && !e(w)
                  ? (s(),
                    n("div", os, [
                      (s(!0),
                      n(
                        q,
                        null,
                        x(
                          ve.value === "৳" ? e(A) : e(r).bankList,
                          (i, L) => (
                            s(),
                            n(
                              "div",
                              {
                                class: U([
                                  "bank_item",
                                  {
                                    bank_item_active:
                                      e(r).currentBankIndex === L,
                                  },
                                ]),
                                onClick: (fe) => e(le)(L),
                              },
                              [
                                Y(
                                  t(
                                    "img",
                                    {
                                      alt: "",
                                      "data-img": e(ne)(
                                        "wallet",
                                        "slot_wallet"
                                      ),
                                    },
                                    null,
                                    8,
                                    is
                                  ),
                                  [[Wt, i.bankLogo]]
                                ),
                                $(" " + a(i.bankName), 1),
                              ],
                              10,
                              rs
                            )
                          )
                        ),
                        256
                      )),
                    ]))
                  : o("v-if", !0),
                !e(qe) && e(y)
                  ? (s(), z(Wa, { key: 4, "page-type": "wallet/recharge" }))
                  : o("v-if", !0),
                o(` <div class="toActive" @click="goActive('wallet/recharge', 'RSN')" v-if="store.rsnInfo.walletActivationStatus === 0 && isRsnpay">
			{{$t('RNSActive')}}
		</div> `),
                o(" 充值金额选择 "),
                Bt.value
                  ? (s(),
                    n("div", ls, [
                      t("div", cs, [
                        e(k)
                          ? (s(),
                            n(
                              "img",
                              {
                                key: 1,
                                src: e(ne)("wallet", e(G)[e(h)].icon),
                                alt: "",
                              },
                              null,
                              8,
                              ds
                            ))
                          : (s(), z(E, { key: 0, name: "saveWallet" })),
                        e(k)
                          ? (s(),
                            n(
                              "p",
                              ps,
                              a(
                                ((ze = e(G)[e(h)]) == null
                                  ? void 0
                                  : ze.selectText) || ""
                              ),
                              1
                            ))
                          : (s(),
                            n(
                              "p",
                              us,
                              a(
                                e(y)
                                  ? u.$t("arbRecharge")
                                  : e(Ie)
                                  ? u.$t("rsnRecharge")
                                  : u.$t("rechageAmount")
                              ),
                              1
                            )),
                      ]),
                      t("div", _s, [
                        (s(!0),
                        n(
                          q,
                          null,
                          x(
                            e(r).quickList,
                            (i, L) => (
                              s(),
                              n(
                                "div",
                                {
                                  class: U([
                                    "Recharge__content-paymoney__money-list__item",
                                    e(r).currentQuickIndex === L
                                      ? It.value
                                      : "",
                                  ]),
                                  key: L,
                                  onClick: (fe) => e(O)(L),
                                },
                                [
                                  t(
                                    "div",
                                    {
                                      class: U(["amount", { arAmount: e(y) }]),
                                    },
                                    [
                                      e(k)
                                        ? (s(),
                                          n(
                                            "img",
                                            {
                                              key: 0,
                                              src: e(ne)(
                                                "wallet",
                                                e(G)[e(h)].icon
                                              ),
                                              alt: "",
                                              class: "usdt",
                                            },
                                            null,
                                            8,
                                            hs
                                          ))
                                        : o("v-if", !0),
                                      !e(k) && !e(y)
                                        ? (s(), n("span", gs, a(ve.value), 1))
                                        : o("v-if", !0),
                                      $(
                                        " " +
                                          a(
                                            e(y)
                                              ? "₹" +
                                                  e(W)(Number(i.rechargeAmount))
                                              : e(W)(Number(i.rechargeAmount))
                                          ),
                                        1
                                      ),
                                    ],
                                    2
                                  ),
                                  o(
                                    '					<div v-if="isArpay && store.currentPayType?.rechargeRifts" class="ar_gift">'
                                  ),
                                  o("						{{ $t('k3WarningTip4') }} ₹"),
                                  o(
                                    "						<span>{{ formatNum(Number(item.giftAmount)) }}</span>"
                                  ),
                                  o("					</div>"),
                                  i.giftAmount > 0
                                    ? (s(),
                                      n("div", ms, [
                                        $(
                                          a(u.$t("k3WarningTip4")) +
                                            " + " +
                                            a(ve.value) +
                                            " ",
                                          1
                                        ),
                                        t(
                                          "span",
                                          null,
                                          a(e(W)(Number(i.giftAmount))),
                                          1
                                        ),
                                      ]))
                                    : o("v-if", !0),
                                ],
                                10,
                                vs
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      e(k)
                        ? (s(),
                          n(
                            "div",
                            {
                              key: 0,
                              class: U([
                                "Recharge__content-paymoney__money-input",
                                { radius: e(k) },
                              ]),
                            },
                            [
                              t(
                                "div",
                                { class: U(["place-div", e(G)[e(h)].icon]) },
                                null,
                                2
                              ),
                              g(
                                ge,
                                {
                                  modelValue: e(r).numberPayAmount,
                                  "onUpdate:modelValue":
                                    d[3] ||
                                    (d[3] = (i) => (e(r).numberPayAmount = i)),
                                  modelModifiers: { number: !0 },
                                  type: "digit",
                                  autocomplete: "new-password",
                                  placeholder: e(G)[e(h)].placeholder,
                                  class: "amount-input",
                                  onInput: d[4] || (d[4] = (i) => e(f)(i)),
                                },
                                null,
                                8,
                                ["modelValue", "placeholder"]
                              ),
                              t(
                                "div",
                                {
                                  class: "place-right",
                                  onClick: d[5] || (d[5] = (i) => e(j)()),
                                },
                                [
                                  t(
                                    "img",
                                    {
                                      src: e(pe)("wallet/recharge", "clean"),
                                      alt: "",
                                    },
                                    null,
                                    8,
                                    fs
                                  ),
                                ]
                              ),
                            ],
                            2
                          ))
                        : o("v-if", !0),
                      e(h) != 6
                        ? (s(),
                          n(
                            "div",
                            {
                              key: 1,
                              class: U([
                                "Recharge__content-paymoney__money-input",
                                { radius: e(k) },
                              ]),
                            },
                            [
                              t("div", ys, a(ve.value), 1),
                              e(k)
                                ? (s(),
                                  z(
                                    ge,
                                    {
                                      key: 0,
                                      disabled: e(k),
                                      modelValue: e(r).numberExchangeRate,
                                      "onUpdate:modelValue":
                                        d[6] ||
                                        (d[6] = (i) =>
                                          (e(r).numberExchangeRate = i)),
                                      modelModifiers: { number: !0 },
                                      type: "digit",
                                      autocomplete: "new-password",
                                      placeholder: u.$t("enterAmount"),
                                      class: "amount-input",
                                      onInput: d[7] || (d[7] = (i) => e(f)(i)),
                                    },
                                    null,
                                    8,
                                    ["disabled", "modelValue", "placeholder"]
                                  ))
                                : (s(),
                                  z(
                                    ge,
                                    {
                                      key: 1,
                                      modelValue: e(r).amount,
                                      "onUpdate:modelValue":
                                        d[8] ||
                                        (d[8] = (i) => (e(r).amount = i)),
                                      modelModifiers: { number: !0 },
                                      type: "digit",
                                      autocomplete: "new-password",
                                      placeholder: e(X),
                                      class: "amount-input",
                                      onInput: d[9] || (d[9] = (i) => e(f)(i)),
                                    },
                                    null,
                                    8,
                                    ["modelValue", "placeholder"]
                                  )),
                              e(h) === 20
                                ? (s(), n("div", ks, a(e(Q)), 1))
                                : o("v-if", !0),
                              !e(k) && !e(y)
                                ? (s(),
                                  n(
                                    "div",
                                    {
                                      key: 3,
                                      class: "place-right",
                                      onClick: d[10] || (d[10] = (i) => e(j)()),
                                    },
                                    [
                                      t(
                                        "img",
                                        {
                                          src: e(pe)(
                                            "wallet/recharge",
                                            "clean"
                                          ),
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        $s
                                      ),
                                    ]
                                  ))
                                : o("v-if", !0),
                              e(y)
                                ? (s(),
                                  n(
                                    "div",
                                    { key: 4, class: "ar_all", onClick: Dt },
                                    a(u.$t("withdrawStatem1")),
                                    1
                                  ))
                                : o("v-if", !0),
                            ],
                            2
                          ))
                        : o("v-if", !0),
                      e(r).validateAmount
                        ? (s(), n("div", ws, a(e(r).validateAmount), 1))
                        : o("v-if", !0),
                    ]))
                  : o("v-if", !0),
                Y(
                  t(
                    "div",
                    bs,
                    [
                      t(
                        "img",
                        { src: e(ne)("wallet", "tip"), alt: "" },
                        null,
                        8,
                        Rs
                      ),
                      t("div", Cs, a(u.$t("RCTXT3")), 1),
                      !e(y) && !e(bt)
                        ? (s(),
                          n(
                            "div",
                            {
                              key: 0,
                              class: "Recharge__content-waitPay__countdown",
                              ref_key: "countdownRef",
                              ref: _,
                            },
                            Os,
                            512
                          ))
                        : o("v-if", !0),
                      t(
                        "div",
                        { class: "go_pay", onClick: Ut },
                        a(u.$t("RCTXT4")),
                        1
                      ),
                    ],
                    512
                  ),
                  [[qt, e(w)]]
                ),
                !e(w) || e(ae)
                  ? (s(),
                    n("div", Ns, [
                      t("div", Ds, [
                        t("div", null, [
                          t("p", null, a(u.$t("rechargeMethod")) + ":", 1),
                          t(
                            "h2",
                            null,
                            a(
                              (Xe = e(r).currentPayType) == null
                                ? void 0
                                : Xe.payName
                            ),
                            1
                          ),
                        ]),
                        Y(
                          (s(),
                          n(
                            "div",
                            {
                              class: U([
                                "Recharge__container-rechageBtn",
                                e(r).rechargeSubmitBtnStatus
                                  ? "rechage_active"
                                  : "",
                              ]),
                            },
                            [
                              $(
                                a(u.$t("recharge")) +
                                  " " +
                                  a(e(ee)(e(r).amount)),
                                1
                              ),
                            ],
                            2
                          )),
                          [[Se, { handler: e(N), wait: 2e3 }]]
                        ),
                      ]),
                    ]))
                  : o("v-if", !0),
                g(
                  Ke,
                  {
                    show: e(p),
                    "onUpdate:show":
                      d[12] || (d[12] = (i) => (de(p) ? (p.value = i) : null)),
                    round: "",
                    position: "bottom",
                  },
                  {
                    default: D(() => [
                      g(
                        He,
                        {
                          "columns-field-names": {
                            text: "bankName",
                            value: "bankCode",
                            children: "children",
                          },
                          columns: e(ce),
                          onCancel: d[11] || (d[11] = (i) => (p.value = !1)),
                          onConfirm: e(T),
                        },
                        null,
                        8,
                        ["columns", "onConfirm"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["show"]
                ),
              ]),
              g(
                me,
                {
                  show: e($e),
                  "onUpdate:show":
                    d[14] || (d[14] = (i) => (de($e) ? ($e.value = i) : null)),
                  "show-confirm-button": !1,
                  width: 327,
                },
                {
                  default: D(() => {
                    var i;
                    return [
                      t("div", Bs, [
                        t("div", Us, a(u.$t("arb1")), 1),
                        t("div", Vs, a(u.$t("arb2")), 1),
                        t(
                          "div",
                          Ls,
                          a(
                            u.$t("arb3", [
                              ((i = e(At)) == null
                                ? void 0
                                : i.withdrawalRewardRatio) || 0,
                            ])
                          ),
                          1
                        ),
                        t("div", Ms, [
                          t(
                            "div",
                            {
                              class: "clance",
                              onClick:
                                d[13] || (d[13] = (L) => ($e.value = !1)),
                            },
                            a(u.$t("cancel")),
                            1
                          ),
                          t(
                            "div",
                            { class: "goBuy", onClick: Vt },
                            a(u.$t("arb4")),
                            1
                          ),
                        ]),
                      ]),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["show"]
              ),
              g(
                me,
                {
                  class: "arupiAmount-dialog",
                  show: e(m),
                  "onUpdate:show":
                    d[15] || (d[15] = (i) => (de(m) ? (m.value = i) : null)),
                  closeOnClickOverlay: !1,
                  "show-confirm-button": !1,
                  width: 327,
                },
                {
                  default: D(() => [
                    t("div", Ws, [
                      t("div", Es, a(u.$t("recommendedA")), 1),
                      t("div", qs, a(u.$t("arupiPayTip")), 1),
                      t("ul", null, [
                        (s(!0),
                        n(
                          q,
                          null,
                          x(
                            e(v),
                            (i) => (
                              s(),
                              n(
                                "li",
                                {
                                  class: U({ active: e(P) === i }),
                                  key: i,
                                  onClick: () => {
                                    P.value = i;
                                  },
                                },
                                a(e(ee)(i)),
                                11,
                                Gs
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      t("div", js, [
                        Y(
                          (s(),
                          n("div", Hs, [
                            $(
                              a(u.$t("recharge")) +
                                " " +
                                a(u.$t("recommendedA")),
                              1
                            ),
                          ])),
                          [
                            [
                              Se,
                              {
                                handler: () => {
                                  (e(r).amount = e(P)),
                                    (R.value = 3),
                                    (m.value = !1),
                                    e(N)();
                                },
                                wait: 2e3,
                              },
                            ],
                          ]
                        ),
                        Y(
                          (s(),
                          n("div", Ks, [
                            $(
                              a(u.$t("c2cRechargeUpiSheet4")) +
                                " " +
                                a(e(ee)(e(r).amount)),
                              1
                            ),
                          ])),
                          [
                            [
                              Se,
                              {
                                handler: () => {
                                  (R.value = 3), (m.value = !1), e(N)();
                                },
                                wait: 2e3,
                              },
                            ],
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show"]
              ),
              g(
                me,
                {
                  class: "arupiAmount-dialog",
                  closeOnClickOverlay: !1,
                  show: e(S),
                  "onUpdate:show":
                    d[18] || (d[18] = (i) => (de(S) ? (S.value = i) : null)),
                  "show-confirm-button": !1,
                  width: 327,
                },
                {
                  default: D(() => [
                    t("div", Fs, [
                      t("div", zs, a(u.$t("tips")), 1),
                      t("div", Xs, a(u.$t("arupiOrderTip")), 1),
                      t("div", Qs, [
                        t(
                          "div",
                          {
                            class: "goBuy",
                            onClick:
                              d[16] || (d[16] = (...i) => e(M) && e(M)(...i)),
                          },
                          a(u.$t("confirmCancel")),
                          1
                        ),
                        t(
                          "div",
                          {
                            class: "clance",
                            onClick: d[17] || (d[17] = (i) => (S.value = !1)),
                          },
                          a(u.$t("cancel")),
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
              g(
                me,
                {
                  class: "arupiAmount-dialog",
                  closeOnClickOverlay: !1,
                  show: e(r).arupiGoingOrder,
                  "onUpdate:show":
                    d[23] || (d[23] = (i) => (e(r).arupiGoingOrder = i)),
                  "show-confirm-button": !1,
                  width: 327,
                },
                {
                  default: D(() => {
                    var i,
                      L,
                      fe,
                      Qe,
                      Je,
                      Ze,
                      Ye,
                      xe,
                      et,
                      tt,
                      at,
                      st,
                      nt,
                      ot,
                      rt,
                      it,
                      lt,
                      ct,
                      dt;
                    return [
                      t("div", Js, [
                        t("div", Zs, a(u.$t("orderNotCompleted")), 1),
                        ((i = e(r).goingOrder) == null
                          ? void 0
                          : i.paymentPageExpire) == 0 &&
                        ((L = e(r).goingOrder) == null
                          ? void 0
                          : L.utrSubmitSuccess) == 0
                          ? (s(), n("div", Ys, a(u.$t("arupiOrderTip2")), 1))
                          : ((fe = e(r).goingOrder) == null
                              ? void 0
                              : fe.paymentPageExpire) == 1 &&
                            ((Qe = e(r).goingOrder) == null
                              ? void 0
                              : Qe.utrSubmitSuccess) == 0 &&
                            ((Je = e(r).goingOrder) == null
                              ? void 0
                              : Je.kycConfirmOrderStatus) == 4
                          ? (s(), n("div", xs, a(u.$t("arupiOrderTip3")), 1))
                          : ((Ze = e(r).goingOrder) == null
                              ? void 0
                              : Ze.paymentPageExpire) == 1 &&
                            ((Ye = e(r).goingOrder) == null
                              ? void 0
                              : Ye.utrSubmitSuccess) == 0 &&
                            ((xe = e(r).goingOrder) == null
                              ? void 0
                              : xe.kycConfirmOrderStatus) == 0
                          ? (s(), n("div", en, a(u.$t("arupiOrderTip4")), 1))
                          : o("v-if", !0),
                        t(
                          "div",
                          tn,
                          a(u.$t("rechageAmount")) +
                            "：" +
                            a(
                              e(ee)(
                                (et = e(r).goingOrder) == null
                                  ? void 0
                                  : et.orderAmount
                              )
                            ),
                          1
                        ),
                        t("div", an, [
                          ((tt = e(r).goingOrder) == null
                            ? void 0
                            : tt.paymentPageExpire) == 0 &&
                          ((at = e(r).goingOrder) == null
                            ? void 0
                            : at.utrSubmitSuccess) == 0
                            ? (s(),
                              n(
                                "div",
                                {
                                  key: 0,
                                  class: "goBuy",
                                  onClick:
                                    d[19] || (d[19] = (Pe) => e(te)("arupi")),
                                },
                                [
                                  t(
                                    "h3",
                                    null,
                                    a(u.$t("c2cRechargeUpiSheet4")),
                                    1
                                  ),
                                  t("p", null, a(u.$t("continuePurchase")), 1),
                                ]
                              ))
                            : ((st = e(r).goingOrder) == null
                                ? void 0
                                : st.paymentPageExpire) == 1 &&
                              ((nt = e(r).goingOrder) == null
                                ? void 0
                                : nt.utrSubmitSuccess) == 0 &&
                              ((ot = e(r).goingOrder) == null
                                ? void 0
                                : ot.kycConfirmOrderStatus) == 4
                            ? (s(),
                              n(
                                "div",
                                {
                                  key: 1,
                                  class: "goBuy",
                                  onClick:
                                    d[20] ||
                                    (d[20] = (Pe) => e($t)(e(r).goingOrder)),
                                },
                                [t("h3", null, a(u.$t("Appeal")), 1)]
                              ))
                            : ((rt = e(r).goingOrder) == null
                                ? void 0
                                : rt.paymentPageExpire) == 1 &&
                              ((it = e(r).goingOrder) == null
                                ? void 0
                                : it.utrSubmitSuccess) == 0 &&
                              ((lt = e(r).goingOrder) == null
                                ? void 0
                                : lt.kycConfirmOrderStatus) == 0
                            ? (s(),
                              n(
                                "div",
                                {
                                  key: 2,
                                  class: "goBuy",
                                  onClick:
                                    d[21] ||
                                    (d[21] = (Pe) => {
                                      var ut;
                                      return e(wt)({
                                        rechargeNumber:
                                          (ut = e(r).goingOrder) == null
                                            ? void 0
                                            : ut.merchantOrderNo,
                                      });
                                    }),
                                },
                                [t("h3", null, a(u.$t("arupiBank")), 1)]
                              ))
                            : o("v-if", !0),
                          ((ct = e(r).goingOrder) == null
                            ? void 0
                            : ct.paymentPageExpire) == 0 &&
                          ((dt = e(r).goingOrder) == null
                            ? void 0
                            : dt.utrSubmitSuccess) == 0
                            ? (s(),
                              n(
                                "div",
                                {
                                  key: 3,
                                  class: "clance",
                                  onClick:
                                    d[22] ||
                                    (d[22] = (Pe) =>
                                      e(_e).push({
                                        name: "arupi",
                                        query: { type: 4 },
                                      })),
                                },
                                [
                                  t("h3", null, a(u.$t("subutr")), 1),
                                  t("p", null, a(u.$t("transferredOrder")), 1),
                                ]
                              ))
                            : o("v-if", !0),
                        ]),
                        t("p", sn, [
                          $(a(u.$t("utrpay")) + " ", 1),
                          t("span", { onClick: St }, a(u.$t("concelOrder")), 1),
                        ]),
                      ]),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["show"]
              ),
              g(
                Ke,
                {
                  position: "bottom",
                  show: e(r).reasonShow,
                  "onUpdate:show":
                    d[26] || (d[26] = (i) => (e(r).reasonShow = i)),
                  "z-index": 3e3,
                },
                {
                  default: D(() => [
                    t("div", nn, [
                      t("div", on, a(u.$t("cancelOrder")), 1),
                      g(
                        Mt,
                        {
                          "icon-size": "16px",
                          modelValue: e(se).checked,
                          "onUpdate:modelValue":
                            d[24] || (d[24] = (i) => (e(se).checked = i)),
                          "checked-color": "#EE4D4D",
                          onChange: Ot,
                        },
                        {
                          default: D(() => [
                            (s(!0),
                            n(
                              q,
                              null,
                              x(
                                e(Rt),
                                (i, L) => (
                                  s(),
                                  z(
                                    Lt,
                                    { name: L, class: "item", key: L },
                                    {
                                      default: D(() => [$(a(i.reason), 1)]),
                                      _: 2,
                                    },
                                    1032,
                                    ["name"]
                                  )
                                )
                              ),
                              128
                            )),
                            o(` <van-radio name="2" class="item">UPI账号错误</van-radio>
						<van-radio name="3" class="item">银行系统维护</van-radio>
						<van-radio name="4" class="item">其他</van-radio> `),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                      t("div", rn, [
                        Y(
                          t(
                            "textarea",
                            {
                              class: "row",
                              "onUpdate:modelValue":
                                d[25] || (d[25] = (i) => (e(se).text = i)),
                              rows: "4",
                              placeholder: u.$t("sellTip18"),
                              onInput: Pt,
                            },
                            null,
                            40,
                            ln
                          ),
                          [[vt, e(se).text]]
                        ),
                      ]),
                      t(
                        "div",
                        { class: "btn x-row x-row-middle-center", onClick: Nt },
                        a(u.$t("confirmCancel")),
                        1
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show"]
              ),
              g(
                me,
                {
                  class: "arupiAmount-dialog",
                  closeOnClickOverlay: !1,
                  show: we.value,
                  "onUpdate:show": d[28] || (d[28] = (i) => (we.value = i)),
                  "show-confirm-button": !1,
                  width: 327,
                },
                {
                  default: D(() => [
                    t("div", cn, [
                      t("div", dn, a(u.$t("cancelDeal")), 1),
                      t("div", un, a(u.$t("paymeConfirm")), 1),
                      t("div", pn, [
                        t(
                          "div",
                          {
                            class: "clance",
                            onClick:
                              d[27] ||
                              (d[27] = (i) =>
                                e(_e).push({
                                  name: "arupi",
                                  query: { type: 4 },
                                })),
                          },
                          a(u.$t("payme")),
                          1
                        ),
                        t(
                          "div",
                          { class: "goBuy", onClick: je },
                          a(u.$t("confirmCancel")),
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
const vn = ie(_n, [
    ["__scopeId", "data-v-9e03166f"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Recharge/RechargeContainer.vue",
    ],
  ]),
  hn = { class: "balanceAssets" },
  gn = { class: "balanceAssets__header" },
  mn = { class: "balanceAssets__header__left" },
  fn = ["src"],
  yn = { class: "balanceAssets__main" },
  kn = ["src"],
  $n = re({
    __name: "BalanceAssets",
    setup(I) {
      const _ = gt(),
        r = Ae();
      async function h() {
        r.getIsSwitchSaasBalance
          ? _.GetARGameAndPlatWallets(!0)
          : _.resetData(!1, !1);
      }
      return (
        ye(() => {
          r.getIsSwitchSaasBalance
            ? _.GetARGameAndPlatWallets(!1)
            : _.resetData(!0, !1);
        }),
        (b, y) => {
          const k = Ue("throttle-click");
          return (
            s(),
            n("div", hn, [
              t("div", gn, [
                t("div", mn, [
                  t("img", { src: e(ne)("wallet", "balance") }, null, 8, fn),
                  $(" " + a(b.$t("balance")), 1),
                ]),
              ]),
              t("div", yn, [
                t("p", null, a(e(ee)(e(_).getAmount)), 1),
                Y(
                  t(
                    "img",
                    { src: e(pe)("wallet/recharge", "refresh"), alt: "" },
                    null,
                    8,
                    kn
                  ),
                  [[k, { handler: h, wait: 3e3 }]]
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const wn = ie($n, [
    ["__scopeId", "data-v-98c90f53"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/BalanceAssets.vue",
    ],
  ]),
  bn = re({
    __name: "CountDownTimer",
    props: {
      startTime: { type: String, required: !0 },
      endTime: { type: String, required: !0 },
      className: { type: String, required: !1 },
    },
    setup(I) {
      const _ = I,
        r = K(),
        h = K("00:00");
      return (
        ye(() => {
          let b = _.startTime,
            y = _.endTime,
            k = new Date(b.replace(/-/g, "/")).getTime(),
            w = new Date(y.replace(/-/g, "/")).getTime(),
            V = k - w;
          r.value = setInterval(() => {
            (V -= 1e3),
              (h.value = Ft(V, "mm:ss")),
              V < 0 && (clearInterval(r.value), (h.value = "00:00"));
          }, 1e3);
        }),
        Ee(() => {
          clearInterval(r.value);
        }),
        (b, y) => (
          s(),
          n("span", { class: U([b.className, "count_timer"]) }, a(h.value), 3)
        )
      );
    },
  });
const Rn = ie(bn, [
    ["__scopeId", "data-v-b3f8911c"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Recharge/CountDownTimer.vue",
    ],
  ]),
  Cn = (I) => (Le("data-v-9f5f4114"), (I = I()), Me(), I),
  Tn = { class: "record__main" },
  An = { class: "record__main-title" },
  In = { key: 1 },
  Sn = ["onClick"],
  Pn = { class: "record__main-info__title flex_between" },
  On = { class: "recharge_text" },
  Nn = { class: "flex_between" },
  Dn = ["src"],
  Bn = { key: 0, class: "record__main-info__money item flex_between" },
  Un = { key: 1, class: "record__main-info__money item flex_between" },
  Vn = { key: 2, class: "record__main-info__type item flex_between" },
  Ln = { key: 3, class: "record__main-info__type item flex_between" },
  Mn = Cn(() => t("span", null, "UTR", -1)),
  Wn = { key: 4, class: "record__main-info__time item flex_between" },
  En = { key: 5, class: "record__main-info__time item flex_between" },
  qn = { key: 6, class: "record__main-info__orderNumber item flex_between" },
  Gn = { style: { color: "red" } },
  jn = { key: 7, class: "record__main-info__orderNumber item flex_between" },
  Hn = { key: 8, class: "record__main-info__orderNumber item flex_between" },
  Kn = { key: 9, class: "record__main-info__orderNumber item flex_between" },
  Fn = ["onClick"],
  zn = ["onClick"],
  Xn = ["onClick"],
  Qn = ["onClick"],
  Jn = ["onClick"],
  Zn = { class: "rechargeh__header" },
  Yn = { class: "record__main-info" },
  xn = { class: "record__main-info__money item flex_between" },
  eo = { class: "record__main-info__money item flex_between" },
  to = { class: "price" },
  ao = { class: "record__main-info__money item flex_between" },
  so = { class: "record__main-info__money item flex_between" },
  no = { class: "record__main-info__orderNumber item flex_between" },
  oo = re({
    __name: "RechargeRecord",
    setup(I, { expose: _ }) {
      const r = mt(),
        { t: h } = be(),
        {
          store: b,
          historyToDetail: y,
          getRecordList: k,
          RechargeRList: w,
          goToOrderAppeal: V,
          gotoBanklist: X,
        } = Ce(),
        { handleOpen: m } = zt({ type: 3 }),
        v = K(!1),
        P = K({}),
        S = K(),
        R = K(!1),
        M = oe(() => w.value.length >= 5),
        Z = We(),
        { goToTictek: te, isCenterServer: G } = Xt({ ServerType: 2 }),
        O = (l) => {
          if ((l.groupID & 2048) === 2048 && (l.groupID & 1024) === 1024)
            return Gt({
              title: h("tips"),
              message: () =>
                Oe("p", [
                  Oe("span", h("submitUtrtip") + " "),
                  Oe(
                    "span",
                    { style: { color: "red" }, onClick: m },
                    h("pServer")
                  ),
                ]),
              theme: "round-button",
            });
          (P.value = l), (v.value = !0);
        },
        f = async () => {
          if (!S.value || `${S.value}`.length < 12)
            return Re("UTR format is incorrect!");
          if (!R.value)
            try {
              (R.value = !0),
                (await Qt(
                  Jt({ orderNumber: P.value.rechargeNumber, utr: S.value })
                )) &&
                  (jt(h("submitSuccess")), (v.value = !1), (S.value = ""), k());
            } catch {
            } finally {
              R.value = !1;
            }
        },
        Q = (l) => {
          if (![26e3, 26001].includes(l.payTypeId)) return !1;
          if (
            (l.groupID & 1) === 1 ||
            (l.groupID & 2) === 2 ||
            (l.groupID & 4) === 4
          )
            return !0;
        },
        j = (l) => {
          if ((l.groupID & 1) === 1) return h("arupiBank");
          if ((l.groupID & 2) === 2) return h("arupiKycTip");
          if ((l.groupID & 4) === 4) return h("arupiKyc");
        },
        W = (l) =>
          [26e3, 26001].includes(l.payTypeId)
            ? (l.groupID & 2048) === 2048 || (l.groupID & 8192) === 8192
            : !1,
        H = (l) =>
          [26e3, 26001].includes(l.payTypeId)
            ? (l.groupID & 32) === 32 ||
              (l.groupID & 64) === 64 ||
              ((l.groupID & 4096) === 4096 && (l.groupID & 16384) !== 16384)
            : !1,
        C = (l) => {
          let p = "";
          switch (l.state) {
            case 0:
              p = "recharge";
              break;
            case 1:
              p = "check";
              break;
            case 2:
              p = "timeout";
              break;
            case 3:
              p = "representation";
              break;
            case 4:
              p = "success";
              break;
            case 5:
              p = "fail";
              break;
            case 6:
              p = "cancel";
              break;
            default:
              p = "#FFB800";
              break;
          }
          return p;
        },
        F = async (l) => {
          y(l.payID || l.category, l.type, l.price, l.state, l.id);
        },
        le = () => {
          r.emit("changeKeepAliveKey"), Z.push({ name: "RechargeHistory" });
        };
      return (
        ye(() => {
          r.on("getRecordList", () => {
            k();
          }),
            k();
        }),
        Ee(() => {
          r.off("getRecordList");
        }),
        _({ getRecordList: k }),
        (l, p) => {
          const T = B("svg-icon"),
            ae = B("van-button"),
            ce = B("van-field"),
            A = B("van-popup");
          return (
            s(),
            n("div", Tn, [
              t("div", An, [
                g(T, { name: "historyHead" }),
                t(
                  "span",
                  null,
                  a(
                    e(b).currentPayId === 20
                      ? "C2C" + l.$t("rechargeRecords")
                      : l.$t("rechargeRecords")
                  ),
                  1
                ),
              ]),
              e(w).length < 1
                ? (s(), z(Yt, { key: 0, class: "mgt40" }))
                : o("v-if", !0),
              e(w).length > 0
                ? (s(),
                  n("div", In, [
                    (s(!0),
                    n(
                      q,
                      null,
                      x(
                        e(w),
                        (c) => (
                          s(),
                          n(
                            "div",
                            {
                              class: "record__main-info",
                              key: c.rechargeNumber + c.state,
                              onClick: (N) => F(c),
                            },
                            [
                              t("div", Pn, [
                                t("div", On, a(l.$t("recharge")), 1),
                                t("div", Nn, [
                                  e(b).currentPayId !== 20
                                    ? (s(),
                                      n(
                                        "div",
                                        {
                                          key: 0,
                                          class: U({
                                            danger: c.state === 0,
                                            success: c.state === 1,
                                            rechargeFail: c.state === 2,
                                            cancel: c.state === 6,
                                          }),
                                        },
                                        a(
                                          l.$t(
                                            e(pt)(e(_t).RechargeState, c.state)
                                          )
                                        ),
                                        3
                                      ))
                                    : (s(),
                                      n(
                                        "div",
                                        { key: 1, class: U(C(c)) },
                                        [
                                          $(
                                            a(
                                              e(pt)(
                                                e(_t).RechargeC2CState,
                                                c.state
                                              )
                                            ) + " ",
                                            1
                                          ),
                                          c.state === 1 || c.state === 0
                                            ? (s(),
                                              z(
                                                Rn,
                                                {
                                                  "start-time": c.endTime,
                                                  "end-time": c.serviceTime,
                                                  "class-name": C(c),
                                                  key: c.id,
                                                },
                                                null,
                                                8,
                                                [
                                                  "start-time",
                                                  "end-time",
                                                  "class-name",
                                                ]
                                              ))
                                            : o("v-if", !0),
                                        ],
                                        2
                                      )),
                                  c.state !== 2
                                    ? (s(),
                                      n(
                                        "img",
                                        {
                                          key: 2,
                                          src: e(pe)(
                                            "wallet/recharge",
                                            "left_arrow"
                                          ),
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        Dn
                                      ))
                                    : o("v-if", !0),
                                ]),
                              ]),
                              e(b).currentPayId !== 20
                                ? (s(),
                                  n("div", Bn, [
                                    t("span", null, a(l.$t("amount")), 1),
                                    t(
                                      "span",
                                      null,
                                      a(e(ee)(c == null ? void 0 : c.price)),
                                      1
                                    ),
                                  ]))
                                : (s(),
                                  n("div", Un, [
                                    t("span", null, a(l.$t("amount")), 1),
                                    t(
                                      "span",
                                      null,
                                      a(
                                        e(ee)(
                                          c == null ? void 0 : c.orderAmount
                                        )
                                      ),
                                      1
                                    ),
                                  ])),
                              e(b).currentPayId !== 20
                                ? (s(),
                                  n("div", Vn, [
                                    t("span", null, a(l.$t("type")), 1),
                                    t(
                                      "span",
                                      null,
                                      a(c == null ? void 0 : c.payName),
                                      1
                                    ),
                                  ]))
                                : (s(),
                                  n("div", Ln, [
                                    Mn,
                                    t("div", null, [
                                      t(
                                        "span",
                                        null,
                                        a(c.transactionNo || "-"),
                                        1
                                      ),
                                      g(
                                        T,
                                        {
                                          name: "copy",
                                          alt: "",
                                          onClick: J(
                                            (N) => e(Ne)(c.transactionNo),
                                            ["stop"]
                                          ),
                                        },
                                        null,
                                        8,
                                        ["onClick"]
                                      ),
                                    ]),
                                  ])),
                              e(b).currentPayId !== 20
                                ? (s(),
                                  n("div", Wn, [
                                    t("span", null, a(l.$t("time")), 1),
                                    t("span", null, a(c.addTime), 1),
                                  ]))
                                : (s(),
                                  n("div", En, [
                                    t("span", null, a(l.$t("time")), 1),
                                    t("span", null, a(c.createTime), 1),
                                  ])),
                              [0, 2].includes(c.state) &&
                              [26e3, 26001].includes(c.payTypeId) &&
                              (c.groupID & 16384) === 16384
                                ? (s(),
                                  n("div", qn, [
                                    t(
                                      "span",
                                      null,
                                      a(l.$t("remarksContent")),
                                      1
                                    ),
                                    t("div", null, [
                                      t("span", Gn, a(l.$t("arupiRemark")), 1),
                                    ]),
                                  ]))
                                : o("v-if", !0),
                              e(b).currentPayId !== 20
                                ? (s(),
                                  n("div", jn, [
                                    t("span", null, a(l.$t("orderNo")), 1),
                                    t("div", null, [
                                      t(
                                        "span",
                                        null,
                                        a(
                                          c == null ? void 0 : c.rechargeNumber
                                        ),
                                        1
                                      ),
                                      g(
                                        T,
                                        {
                                          name: "copy",
                                          alt: "",
                                          onClick: J(
                                            (N) => e(Ne)(c.rechargeNumber),
                                            ["stop"]
                                          ),
                                        },
                                        null,
                                        8,
                                        ["onClick"]
                                      ),
                                    ]),
                                  ]))
                                : (s(),
                                  n("div", Hn, [
                                    t("span", null, a(l.$t("orderNo")), 1),
                                    t("div", null, [
                                      t("span", null, a(c.orderNo), 1),
                                      g(
                                        T,
                                        {
                                          "name-": "copy",
                                          alt: "",
                                          onClick: J(
                                            (N) => e(Ne)(c.orderNo),
                                            ["stop"]
                                          ),
                                        },
                                        null,
                                        8,
                                        ["onClick"]
                                      ),
                                    ]),
                                  ])),
                              [0, 2].includes(c.state) &&
                              [26e3, 26001].includes(c.payTypeId) &&
                              (c.groupID & 16384) === 16384
                                ? (s(),
                                  n("div", Kn, [
                                    t(
                                      "span",
                                      null,
                                      a(l.$t("remarksContent")),
                                      1
                                    ),
                                    t("div", null, [
                                      t(
                                        "span",
                                        null,
                                        a(l.$t("arupiRemark")),
                                        1
                                      ),
                                    ]),
                                  ]))
                                : o("v-if", !0),
                              [0, 2].includes(c.state)
                                ? (s(),
                                  n(
                                    q,
                                    { key: 10 },
                                    [
                                      W(c)
                                        ? (s(),
                                          n(
                                            "div",
                                            {
                                              key: 0,
                                              class: "report",
                                              style: {
                                                "margin-bottom": "10px",
                                              },
                                              onClick: J((N) => O(c), ["stop"]),
                                            },
                                            a(l.$t("submitUtr")),
                                            9,
                                            Fn
                                          ))
                                        : o("v-if", !0),
                                      (c.groupID & 16384) === 16384 ||
                                      [21].includes(c.payID)
                                        ? (s(),
                                          n(
                                            "div",
                                            {
                                              key: 1,
                                              class: "report report-b",
                                              onClick:
                                                p[0] ||
                                                (p[0] = J(
                                                  (...N) => e(m) && e(m)(...N),
                                                  ["stop"]
                                                )),
                                            },
                                            a(l.$t("contactServicer")),
                                            1
                                          ))
                                        : o("v-if", !0),
                                      Q(c)
                                        ? (s(),
                                          n(
                                            "div",
                                            {
                                              key: 2,
                                              class: "report report-b",
                                              onClick: J(
                                                (N) => e(X)(c),
                                                ["stop"]
                                              ),
                                            },
                                            a(j(c)),
                                            9,
                                            zn
                                          ))
                                        : o("v-if", !0),
                                      H(c)
                                        ? (s(),
                                          n(
                                            "div",
                                            {
                                              key: 3,
                                              class: "report",
                                              onClick: J(
                                                (N) => e(V)(c),
                                                ["stop"]
                                              ),
                                            },
                                            a(
                                              [32, 544, 4096].includes(
                                                c.groupID
                                              )
                                                ? l.$t("appeal")
                                                : l.$t("compDetails")
                                            ),
                                            9,
                                            Xn
                                          ))
                                        : ![26e3, 26001].includes(
                                            c.payTypeId
                                          ) && e(G)
                                        ? (s(),
                                          n(
                                            "div",
                                            {
                                              key: 4,
                                              class: "report",
                                              onClick: J(
                                                (N) => e(te)(c, l.isC2C),
                                                ["stop"]
                                              ),
                                            },
                                            a(l.$t("report")),
                                            9,
                                            Qn
                                          ))
                                        : o("v-if", !0),
                                    ],
                                    64
                                  ))
                                : o("v-if", !0),
                            ],
                            8,
                            Sn
                          )
                        )
                      ),
                      128
                    )),
                    M.value
                      ? (s(),
                        n(
                          "div",
                          {
                            key: 0,
                            class: "record__main-more",
                            onClick: J(le, ["stop"]),
                          },
                          a(l.$t("allRecords")),
                          9,
                          Jn
                        ))
                      : o("v-if", !0),
                  ]))
                : o("v-if", !0),
              g(
                A,
                {
                  show: v.value,
                  "onUpdate:show": p[3] || (p[3] = (c) => (v.value = c)),
                  position: "bottom",
                  style: { height: "30%" },
                },
                {
                  default: D(() => {
                    var c;
                    return [
                      t("div", Zn, [
                        g(
                          ae,
                          {
                            round: "",
                            size: "small",
                            onClick:
                              p[1] ||
                              (p[1] = () => {
                                (v.value = !1), (S.value = "");
                              }),
                          },
                          { default: D(() => [$(a(l.$t("cancel")), 1)]), _: 1 }
                        ),
                        t("span", null, a(l.$t("submitUtr")), 1),
                        g(
                          ae,
                          {
                            round: "",
                            size: "small",
                            loading: R.value,
                            "loading-text": l.$t("submit"),
                            type: "primary",
                            onClick: f,
                          },
                          { default: D(() => [$(a(l.$t("submit")), 1)]), _: 1 },
                          8,
                          ["loading", "loading-text"]
                        ),
                      ]),
                      t("div", Yn, [
                        t("div", xn, [
                          t("span", null, a(l.$t("utr")), 1),
                          g(
                            ce,
                            {
                              modelValue: S.value,
                              "onUpdate:modelValue":
                                p[2] || (p[2] = (N) => (S.value = N)),
                              placeholder: "Input 12 digits here",
                              clearable: !0,
                              maxlength: 12,
                              type: "digit",
                              autocomplete: "off",
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                        ]),
                        t("div", eo, [
                          t("span", null, a(l.$t("amount")), 1),
                          t("span", to, a(e(ee)(P.value.price)), 1),
                        ]),
                        t("div", ao, [
                          t("span", null, a(l.$t("type")), 1),
                          t(
                            "span",
                            null,
                            a((c = P.value) == null ? void 0 : c.payName),
                            1
                          ),
                        ]),
                        t("div", so, [
                          t("span", null, a(l.$t("time")), 1),
                          t("span", null, a(P.value.addTime), 1),
                        ]),
                        t("div", no, [
                          t("span", null, a(l.$t("orderNo")), 1),
                          t("div", null, [
                            t("span", null, a(P.value.rechargeNumber), 1),
                          ]),
                        ]),
                      ]),
                    ];
                  }),
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
const ro = ie(oo, [
    ["__scopeId", "data-v-9f5f4114"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Recharge/RechargeRecord.vue",
    ],
  ]),
  io = { class: "Recharge__box" },
  lo = { class: "Recharge__container" },
  co = { class: "cancen_model_cnt" },
  uo = { class: "promptHeader" },
  po = { class: "promptContent" },
  _o = { class: "input_item" },
  vo = ["maxlength", "onUpdate:modelValue", "placeholder", "onInput"],
  ho = { key: 0, class: "tip" },
  go = { key: 1, class: "tip" },
  mo = { class: "footer_btn" },
  fo = { class: "forbidden_tip" },
  yo = { class: "forbidden1" },
  ko = { class: "forbidden2" },
  $o = { class: "forbidden3" },
  wo = { class: "cancen_model_cnt" },
  bo = re({
    __name: "index",
    setup(I) {
      const {
          store: _,
          C2CforbiddenShow: r,
          ErrorCount: h,
          RemainingLimitTime: b,
          currentPayId: y,
          validateBankForm: k,
          localBankRecharge: w,
          getRechargeTypeName: V,
          getAmountList: X,
          stratPollingQuick: m,
          isFirstPixRecharge: v,
          isArpay: P,
          needPixInfo: S,
          isRsnpay: R,
          recordRef: M,
          isArUpiPay: Z,
        } = Ce(),
        { pageView: te, pageLeve: G } = Zt(),
        { isArWalletActive: O } = Te(),
        f = We();
      gt();
      const Q = mt(),
        j = K(!1),
        W = oe(() => Ae().getDollarSign),
        H = oe(() =>
          P.value || R.value
            ? !O.value || _.rsnInfo.walletActivationStatus === 1
            : !1
        ),
        C = () => {
          Q.emit("changeKeepAliveKey"), f.push({ name: "RechargeHistory" });
        };
      function F() {
        var p;
        ((p = f.currentRoute.value.query) == null ? void 0 : p.type) === "Add"
          ? f.go(-2)
          : f.push({ name: "main" });
      }
      const le = () => {
          (v.value = !1),
            S.value &&
              f.push({ name: "Withdraw-AddPIX", query: { fromV: "Recharge" } });
        },
        l = () => {
          X(), (j.value = !1);
        };
      return (
        Ve(
          () => _.currentPayType,
          () => {
            Z.value ? (te("recharge", _.currentPayType.payTypeID), m()) : m(!0);
          }
        ),
        ye(async () => {
          V();
        }),
        Ee(() => {
          m(!0);
        }),
        Ht(() => {
          m(!0), Z.value && G("recharge", _.currentPayType.payTypeID);
        }),
        (p, T) => {
          const ae = B("NavBar"),
            ce = B("van-dialog");
          return (
            s(),
            n("div", io, [
              t("div", lo, [
                g(
                  ae,
                  {
                    class: "white",
                    title: p.$t("recharge"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: F,
                  },
                  {
                    right: D(() => [
                      t(
                        "div",
                        { class: "title", onClick: C },
                        a(p.$t("rechargeRecords")),
                        1
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["title"]
                ),
                o(" 余额组件 "),
                g(wn),
                o(" 支付方式选择菜单 "),
                g(Ia),
                o(" 支付方式组件 "),
                g(vn),
                o(` <div
				v-if="!isHaveOrder || isOtherRecharge"
				class="Recharge__container-rechageBtn"
				:class="store.rechargeSubmitBtnStatus ? 'rechage_active' : ''"
				v-throttle-click="{ handler: handleRecharge, wait: 2000 }"
			>
				{{ $t('recharge') }}
			</div> `),
                o(" 充值说明组件 "),
                e(y) && !H.value
                  ? (s(),
                    z(
                      Kt,
                      {
                        key: 0,
                        "show-type": e(y),
                        isShowHead: !0,
                        rechargeInfo: e(_).currentPayType,
                      },
                      null,
                      8,
                      ["show-type", "rechargeInfo"]
                    ))
                  : o("v-if", !0),
                e(y) && !H.value
                  ? (s(),
                    z(
                      ro,
                      { ref_key: "recordRef", ref: M, payID: e(y), key: e(y) },
                      null,
                      8,
                      ["payID"]
                    ))
                  : o("v-if", !0),
              ]),
              o(" <RechargeUpiSheet /> "),
              g(
                De,
                {
                  show: j.value,
                  "onUpdate:show": T[0] || (T[0] = (A) => (j.value = A)),
                  onConfirm: l,
                  "show-cancel-btn": !0,
                  confirmText: "OK",
                  title: p.$t("c2cLapseOfAmount"),
                },
                {
                  content: D(() => [t("div", co, a(p.$t("c2cPCAAmount")), 1)]),
                  _: 1,
                },
                8,
                ["show", "title"]
              ),
              (e(_).isRechargeInputDialog && e(y) !== 19) ||
              [10, 18].includes(e(y))
                ? (s(),
                  z(
                    ce,
                    {
                      key: 0,
                      show: e(_).rechargeDialogVisible,
                      "onUpdate:show":
                        T[3] ||
                        (T[3] = (A) => (e(_).rechargeDialogVisible = A)),
                      "confirm-button-text": p.$t("confirm"),
                    },
                    {
                      footer: D(() => []),
                      default: D(() => [
                        t("div", uo, a(p.$t("prompt")), 1),
                        t("div", po, [
                          (s(!0),
                          n(
                            q,
                            null,
                            x(
                              e(_).bank_local,
                              (A, c) => (
                                s(),
                                n("div", _o, [
                                  t("div", null, a(A.split(",")[0]), 1),
                                  Y(
                                    t(
                                      "input",
                                      {
                                        class: "input_bank",
                                        maxlength: c === 0 ? 50 : 30,
                                        "onUpdate:modelValue": (N) =>
                                          (e(_).bankInfo[A.split(",")[1]] = N),
                                        placeholder: p.$t("requiredFaild"),
                                        onInput: (N) =>
                                          e(k)(
                                            e(_).bankInfo[A.split(",")[1]],
                                            c,
                                            A.split(",")[1]
                                          ),
                                      },
                                      null,
                                      40,
                                      vo
                                    ),
                                    [
                                      [
                                        vt,
                                        e(_).bankInfo[A.split(",")[1]],
                                        void 0,
                                        { trim: !0 },
                                      ],
                                    ]
                                  ),
                                ])
                              )
                            ),
                            256
                          )),
                          W.value === "৳"
                            ? (s(),
                              n("div", ho, a(p.$t("rechargeBankVailte2")), 1))
                            : (s(),
                              n(
                                "div",
                                go,
                                a(
                                  e(y) === 9 || e(y) === 10
                                    ? p.$t("rechargeBankVailte1")
                                    : p.$t("rechargeBankVailte")
                                ),
                                1
                              )),
                          t("div", mo, [
                            t(
                              "div",
                              {
                                onClick:
                                  T[1] || (T[1] = (...A) => e(w) && e(w)(...A)),
                              },
                              a(p.$t("confirm")),
                              1
                            ),
                            t(
                              "div",
                              {
                                onClick:
                                  T[2] ||
                                  (T[2] = (A) =>
                                    (e(_).rechargeDialogVisible = !1)),
                              },
                              a(p.$t("cancel")),
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["show", "confirm-button-text"]
                  ))
                : o("v-if", !0),
              g(
                De,
                {
                  show: e(r),
                  "onUpdate:show":
                    T[4] || (T[4] = (A) => (de(r) ? (r.value = A) : null)),
                  title: p.$t("C2Cforbidden", [e(b)]),
                  "img-url": "forbhidden",
                  showCancelBtn: !1,
                  onConfirm: T[5] || (T[5] = (A) => (r.value = !1)),
                  "cancel-text": p.$t("close"),
                  "confirm-text": p.$t("sure"),
                },
                {
                  content: D(() => [
                    t("div", fo, a(p.$t("C2Cforbidden1", [e(b)])), 1),
                    t("div", yo, a(p.$t("C2Cforbidden2", [e(h)])), 1),
                    t("div", ko, a(p.$t("C2Cforbidden3", [e(b)])), 1),
                    t("div", $o, a(p.$t("C2Cforbidden4")), 1),
                  ]),
                  _: 1,
                },
                8,
                ["show", "title", "cancel-text", "confirm-text"]
              ),
              g(
                De,
                {
                  show: e(v),
                  "onUpdate:show":
                    T[6] || (T[6] = (A) => (de(v) ? (v.value = A) : null)),
                  onConfirm: T[7] || (T[7] = (A) => le()),
                  "show-cancel-btn": !1,
                  confirmText: p.$t("confirm"),
                  cancelText: p.$t("cancel"),
                  title: p.$t("safetyTips"),
                },
                {
                  content: D(() => [t("div", wo, a(p.$t("safetyTips1")), 1)]),
                  _: 1,
                },
                8,
                ["show", "confirmText", "cancelText", "title"]
              ),
            ])
          );
        }
      );
    },
  });
const Ro = ie(bo, [
    ["__scopeId", "data-v-36cc3380"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/Recharge/index.vue",
    ],
  ]),
  Oo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ro },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { Rn as C, Wa as N, Oo as i };
