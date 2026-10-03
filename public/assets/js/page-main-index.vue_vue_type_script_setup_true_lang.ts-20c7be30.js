import {
  G as R,
  r as C,
  z as N,
  B as x,
  A as ee,
  C as j,
  au as ne,
  av as F,
  N as f,
  Q as o,
  J as e,
  P as a,
  F as te,
  R as O,
  H as A,
  aA as q,
  I as h,
  O as v,
  ao as _,
  ax as M,
  K as D,
  aC as se,
  aD as ae,
  t as oe,
  u as z,
  M as E,
  aB as ie,
  a6 as le,
  ay as U,
} from "./common.modules-cecf9b0d.js";
import { U as re } from "./page-main-SettingCenter-174c20d3.js";
import {
  a3 as H,
  A as ce,
  bi as ue,
  bj as de,
  _ as B,
  n as ve,
  cf as K,
  y as _e,
  a5 as me,
  a9 as pe,
  c as G,
  G as V,
  cg as ge,
  ch as J,
  c7 as fe,
  a1 as he,
  ci as Se,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { D as Q } from "./page-activity-Championship-c5772910.js";
import {
  d as ye,
  V as we,
} from "./page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js";
const Ce = { class: "footer" },
  be = R({
    __name: "ActiveVerify",
    props: { isVisible: { type: Boolean, default: C(!1) } },
    emits: ["update:isVisible", "onConfirm", "onCancel"],
    setup(k, { emit: l }) {
      const b = k,
        { t: m } = N(),
        d = C(!0),
        u = C(!1),
        p = H(),
        S = x({
          get() {
            return b.isVisible || !1;
          },
          set(n) {
            l("update:isVisible", n);
          },
        }),
        r = ee({
          PhoneNumber: "",
          numberType: localStorage.getItem("numberType"),
          smsCode: "",
        }),
        y = (n) => {
          r.numberType = n;
        },
        w = (n) => {
          r.PhoneNumber = n;
        },
        I = () => {
          const n = {
            phone: r.numberType + r.PhoneNumber,
            smsvCode: r.smsCode,
          };
          l("onConfirm", n), p.setCountDown(0);
        },
        s = () => {
          (r.PhoneNumber = ""),
            (r.smsCode = ""),
            p.setCountDown(0),
            l("onCancel");
        },
        t = async () =>
          (await ce(
            ue({
              phone: r.numberType + r.PhoneNumber,
              codeType: de.bindEmailMmobile,
            })
          ))
            ? te(m("sendSuccess"))
            : -1;
      return (
        j(() => {
          p.setCountDown(0);
        }),
        (n, g) => (
          f(),
          ne(
            Q,
            {
              class: "newDialog",
              show: S.value,
              "onUpdate:show": g[2] || (g[2] = (c) => (S.value = c)),
              isShowHeader: !1,
              title: n.$t("bindPhone"),
              showCancelBtn: !0,
              "show-footer": !0,
            },
            {
              content: F(() => [
                o(
                  ye,
                  {
                    "show-validate": u.value,
                    "onUpdate:showValidate":
                      g[0] || (g[0] = (c) => (u.value = c)),
                    typeP: "bindPhone",
                    number: r.PhoneNumber,
                    "number-type": r.numberType,
                    onChangeT: y,
                    onChangeN: w,
                  },
                  null,
                  8,
                  ["show-validate", "number", "number-type"]
                ),
                o(
                  we,
                  {
                    isTip: !1,
                    value: r.smsCode,
                    "onUpdate:value": g[1] || (g[1] = (c) => (r.smsCode = c)),
                    typeP: "bindPhone",
                    isShowVerifyT: d.value,
                    sendFunc: t,
                    number: r.PhoneNumber,
                    numberType: r.numberType,
                  },
                  null,
                  8,
                  ["value", "isShowVerifyT", "number", "numberType"]
                ),
              ]),
              footer: F(() => [
                e("div", Ce, [
                  e(
                    "button",
                    { onClick: I, class: "sure" },
                    a(n.$t("confirm")),
                    1
                  ),
                  e(
                    "button",
                    { onClick: s, class: "cancel" },
                    a(n.$t("cancel")),
                    1
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ["show", "title"]
          )
        )
      );
    },
  });
const ke = B(be, [
    ["__scopeId", "data-v-362d668a"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/ActiveVerify.vue",
    ],
  ]),
  $e = (k) => (se("data-v-7d799898"), (k = k()), ae(), k),
  Ie = { class: "totalSavings__container" },
  Te = { class: "totalSavings__container-header" },
  Pe = { class: "totalSavings__container-header-box ar-1px-b" },
  Ae = { class: "balance_info" },
  Re = { class: "totalSavings__container-header__title" },
  xe = { class: "totalSavings__container-header__subtitle" },
  Ve = { class: "totalSavings__container-content" },
  Be = $e(() => e("span", null, "VIP", -1)),
  Me = R({
    __name: "index",
    props: { userInfo: { type: null, required: !0 } },
    setup(k) {
      const { downAppTip: l } = ve(),
        b = O(),
        m = K(),
        d = _e(),
        { t: u } = N(),
        p = C(!1),
        {
          goWallet: S,
          isArWalletActive: r,
          goActive: y,
          getInfo: w,
          activeBind: I,
        } = me(),
        s = x(() => d.getIsOpenInvitedWheel),
        t = C(!1),
        n = async ($) => {
          $ == "Recharge" || $ == "Withdraw" ? await l($) : b.push({ name: $ });
        },
        g = ($) => {
          I($, "main"), (p.value = !1);
        },
        c = async () => {
          oe({ message: u("loading") + "...", forbidClick: !0 });
          const $ = {
              returnUrl: "https://" + window.location.host + "/#/main",
            },
            i = await pe($);
          if ((i == null ? void 0 : i.code) === 1)
            return (
              (i == null ? void 0 : i.msgCode) === 1010 && (p.value = !0),
              z(i == null ? void 0 : i.msg)
            );
          if ((i == null ? void 0 : i.code) === 0) {
            const {
              walletActivationPageUrl: T,
              memberId: W,
              merchantCode: P,
              timestamp: Z,
            } = (i == null ? void 0 : i.data) || {};
            window.location.href =
              T + "&memberId=" + W + "&merchantCode=" + P + "&timestamp=" + Z;
          }
        },
        L = async () => {
          if (t.value) await w();
          else return;
          r.value ? S("main") : c();
        },
        X = x(() => m.getAmount);
      async function Y() {
        d.getIsSwitchSaasBalance
          ? m.GetARGameAndPlatWallets(!1)
          : m.resetData(!1, !0);
      }
      return (
        j(() => {
          d.getIsSwitchSaasBalance && m.GetARGameAndPlatWallets(),
            (t.value = sessionStorage.getItem("ar_pay") === "1");
        }),
        ($, i) => {
          const T = A("svg-icon"),
            W = q("throttle-click");
          return (
            f(),
            h(
              D,
              null,
              [
                e("div", Ie, [
                  e("div", Te, [
                    e("div", Pe, [
                      e("div", Ae, [
                        e("div", Re, [
                          e("span", null, a(v(u)("totalBalance")), 1),
                          _(
                            ` <img v-lazy="getIcons('main', 'balanceIcon')" alt="" /> `
                          ),
                        ]),
                        e("p", xe, [
                          e("span", null, a(v(G)(X.value)), 1),
                          M(o(T, { name: "refreshBalance" }, null, 512), [
                            [W, { handler: Y, wait: 3e3 }],
                          ]),
                        ]),
                      ]),
                      t.value && s.value
                        ? (f(),
                          h(
                            "div",
                            {
                              key: 0,
                              class: "comminWallet",
                              onClick: i[0] || (i[0] = (P) => n("wallet")),
                            },
                            a(v(u)("comminWallet")),
                            1
                          ))
                        : _("v-if", !0),
                    ]),
                  ]),
                  e("div", Ve, [
                    t.value
                      ? (f(),
                        h(
                          "div",
                          {
                            key: 0,
                            onClick: L,
                            class: "totalSavings__container-content-item",
                          },
                          [
                            e("div", null, [
                              o(T, { name: "wallets" }),
                              e("span", null, "AR" + a(v(u)("wallet")), 1),
                            ]),
                          ]
                        ))
                      : (f(),
                        h(
                          "div",
                          {
                            key: 1,
                            onClick: i[1] || (i[1] = (P) => n("wallet")),
                            class: "totalSavings__container-content-item",
                          },
                          [
                            e("div", null, [
                              o(T, { name: "wallets" }),
                              e("span", null, a(v(u)("wallet")), 1),
                            ]),
                          ]
                        )),
                    e(
                      "div",
                      {
                        onClick: i[2] || (i[2] = (P) => n("Recharge")),
                        class: "totalSavings__container-content-item",
                      },
                      [
                        e("div", null, [
                          o(T, { name: "rechargeIcon" }),
                          e("span", null, a(v(u)("recharge")), 1),
                        ]),
                      ]
                    ),
                    e(
                      "div",
                      {
                        onClick: i[3] || (i[3] = (P) => n("Withdraw")),
                        class: "totalSavings__container-content-item",
                      },
                      [
                        e("div", null, [
                          o(T, { name: "widthdrawBlue" }),
                          e("span", null, a(v(u)("withdraw")), 1),
                        ]),
                      ]
                    ),
                    e(
                      "div",
                      {
                        onClick: i[4] || (i[4] = (P) => n("vip")),
                        class: "totalSavings__container-content-item",
                      },
                      [e("div", null, [o(T, { name: "VipIcon" }), Be])]
                    ),
                  ]),
                ]),
                _("激活绑定验证"),
                o(
                  ke,
                  {
                    isVisible: p.value,
                    onOnConfirm: g,
                    onOnCancel: i[5] || (i[5] = (P) => (p.value = !1)),
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
const Ne = B(Me, [
    ["__scopeId", "data-v-7d799898"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Main/TotalSavings/index.vue",
    ],
  ]),
  Oe = { class: "financialServices__container" },
  De = { key: 0, class: "financialServices__container-footer" },
  Le = { class: "financialServices__container-footer-des" },
  We = { class: "financialServices__container-footer-des" },
  Ue = { class: "financialServices__container-box" },
  Ge = { class: "financialServices__container-box-para" },
  He = { class: "financialServices__container-box-para" },
  Fe = { class: "financialServices__container-box-para" },
  je = { class: "financialServices__container-box-para" },
  qe = R({
    __name: "index",
    props: { userInfo: { type: null, required: !0 } },
    setup(k) {
      const l = J(),
        m = V().getUserInfo,
        d = O(),
        u = C(0),
        p = C(0),
        S = C(0),
        r = C("0"),
        y = C(!1),
        w = (s) => {
          s === "RechargeHistory" && l.emit("changeKeepAliveKey"),
            d.push({ name: s });
        };
      return (
        (() => {
          ge().then((s) => {
            (r.value = s.state),
              (u.value = s.dayShareRate),
              (p.value = s.shareTime),
              (S.value = s.safeAmount),
              (y.value = s.isOpenNewSetting === "1");
          });
        })(),
        (s, t) => {
          const n = A("svg-icon"),
            g = A("van-icon");
          return (
            f(),
            h("div", Oe, [
              r.value == "1" || v(m).isOpenPointMall == 1
                ? (f(),
                  h("div", De, [
                    _(" 保险箱 "),
                    r.value == "1"
                      ? (f(),
                        h(
                          "div",
                          {
                            key: 0,
                            onClick: t[0] || (t[0] = (c) => w("StrongBox")),
                          },
                          [
                            o(n, { name: "vault" }),
                            e("div", null, [
                              e("div", null, [
                                e("span", null, a(s.$t("vault")), 1),
                                e("div", Le, [
                                  o(n, { name: "vaultSmallIcon" }),
                                  e("h4", null, a(v(G)(S.value)), 1),
                                  o(g, {
                                    name: "arrow",
                                    color: "var(--text_color_L2)",
                                  }),
                                ]),
                              ]),
                              _(
                                " <span>{{ $t('dailyRate') + dayShareRate }}%，{{ shareTime + $t('minCalculateIncome') }}</span> "
                              ),
                              e(
                                "span",
                                null,
                                a(
                                  y.value
                                    ? s.$t("dailyRateReturn2", [
                                        v(fe)(u.value / 48, 3, 1),
                                        p.value,
                                      ])
                                    : s.$t("dailyRateReturn", [
                                        u.value,
                                        p.value,
                                      ])
                                ),
                                1
                              ),
                            ]),
                          ]
                        ))
                      : _("v-if", !0),
                    _(" 积分商城 "),
                    v(m).isOpenPointMall == 1
                      ? (f(),
                        h(
                          "div",
                          {
                            key: 1,
                            onClick: t[1] || (t[1] = (c) => w("PointMall")),
                          },
                          [
                            o(n, { name: "points" }),
                            e("div", null, [
                              e("div", null, [
                                e("span", null, a(s.$t("points")), 1),
                                e("div", We, [
                                  o(n, { name: "pointsSmallIncon" }),
                                  e("h4", null, a(v(G)(v(m).integral, " ")), 1),
                                  o(g, {
                                    name: "arrow",
                                    color: "var(--text_color_L2)",
                                  }),
                                ]),
                              ]),
                              e("span", null, a(s.$t("vaultdesc2")), 1),
                            ]),
                          ]
                        ))
                      : _("v-if", !0),
                  ]))
                : _("v-if", !0),
              _(" 下注-交易-充值-提现 "),
              e("div", Ue, [
                e("div", { onClick: t[2] || (t[2] = (c) => w("BetRecords")) }, [
                  o(n, { name: "betHistory" }),
                  e("div", Ge, [
                    e("h3", null, a(s.$t("bet")), 1),
                    e("span", null, a(s.$t("mybetRecords")), 1),
                  ]),
                ]),
                e(
                  "div",
                  { onClick: t[3] || (t[3] = (c) => w("TransAction")) },
                  [
                    o(n, { name: "tradeHistory" }),
                    e("div", He, [
                      e("h3", null, a(s.$t("trade")), 1),
                      e("span", null, a(s.$t("tradeRecords")), 1),
                    ]),
                  ]
                ),
                e(
                  "div",
                  { onClick: t[4] || (t[4] = (c) => w("RechargeHistory")) },
                  [
                    o(n, { name: "rechargeHistory" }),
                    e("div", Fe, [
                      e("h3", null, a(s.$t("recharge")), 1),
                      e("span", null, a(s.$t("myRchargeHistory")), 1),
                    ]),
                  ]
                ),
                e(
                  "div",
                  { onClick: t[5] || (t[5] = (c) => w("WithdrawHistory")) },
                  [
                    o(n, { name: "myWithdrawHistory" }),
                    e("div", je, [
                      e("h3", null, a(s.$t("withdraw")), 1),
                      e("span", null, a(s.$t("myWithdrawHistory")), 1),
                    ]),
                  ]
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const ze = B(qe, [
    ["__scopeId", "data-v-acd6d46f"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Main/FinancialServices/index.vue",
    ],
  ]),
  Ee = { class: "serviceCenter-wrap" },
  Ke = { class: "serviceCenter__container" },
  Je = { class: "serviceCenter__container-items" },
  Qe = ["onClick"],
  Xe = { class: "serviceCenter-wrap-header" },
  Ye = R({
    __name: "index",
    setup(k) {
      const { t: l } = N(),
        { getSelfCustomerServiceLink: b, isCenterServer: m } = he({
          ServerType: 2,
        }),
        d = O(),
        u = V(),
        p = K(),
        S = H(),
        r = [
          { name: "settingCenter", title: l("setting"), link: "SettingCenter" },
          { name: "feedback", title: l("feedback"), link: "Feedback" },
          {
            name: "notificationCenter",
            title: l("noti"),
            link: "Notification",
          },
          {
            name: m.value ? "serverTicket" : "server",
            title: m.value ? l("serverTicket") : l("wholeTimeService"),
            link: "CustomerService",
          },
          { name: "guide", title: l("guide"), link: "Guide" },
          { name: "about", title: l("about"), link: "About" },
        ],
        y = C(!1);
      function w(t) {
        if (t == "CustomerService") return b();
        d.push({ name: t });
      }
      function I() {
        y.value = !0;
      }
      function s() {
        Se({})
          .then(async (t) => {
            (u.token = ""),
              (y.value = !1),
              p.setTimestampLast(0),
              localStorage.removeItem("isOpenFollow"),
              (S.userForm.vCode = ""),
              S.loginout();
          })
          .catch((t) => {
            z({ message: t.msg, wordBreak: "break-word" });
          })
          .finally(() => {
            localStorage.setItem("isToLogin", "1"),
              V().setToken(""),
              d.push({ name: "login" });
          });
      }
      return (t, n) => {
        const g = A("svg-icon");
        return (
          f(),
          h("div", Ee, [
            e("div", Ke, [
              e("h1", null, a(t.$t("serviceCenter")), 1),
              e("div", Je, [
                (f(),
                h(
                  D,
                  null,
                  E(r, (c) =>
                    e(
                      "div",
                      {
                        key: c.title,
                        onClick: (L) => w(c.link),
                        class: "serviceCenter__container-items__item",
                      },
                      [
                        o(g, { name: `${c.name}` }, null, 8, ["name"]),
                        _(
                          " <img v-lazy=\"getIcons('main', `${item.icon}`)\" /> "
                        ),
                        e("span", null, a(c.title), 1),
                      ],
                      8,
                      Qe
                    )
                  ),
                  64
                )),
              ]),
            ]),
            e("div", Xe, [
              e("button", { onClick: I }, [
                o(g, { name: "logout" }),
                _(` <img v-lazy="getIcons('home', 'logout')" /> `),
                ie(" " + a(t.$t("logout")), 1),
              ]),
            ]),
            _("退出登录弹窗"),
            o(
              Q,
              {
                show: y.value,
                "onUpdate:show": n[0] || (n[0] = (c) => (y.value = c)),
                onConfirm: s,
                confirmText: v(l)("confirm"),
                cancelText: v(l)("cancel"),
                "show-cancel-btn": !0,
                title: t.$t("tipLogout1"),
              },
              null,
              8,
              ["show", "confirmText", "cancelText", "title"]
            ),
          ])
        );
      };
    },
  });
const Ze = B(Ye, [
    ["__scopeId", "data-v-159bf81f"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Main/ServiceCenter/index.vue",
    ],
  ]),
  en = { class: "settingPanel__container" },
  nn = { class: "settingPanel__container-items" },
  tn = ["onClick"],
  sn = { class: "settingPanel__container-items__title" },
  an = { class: "settingPanel__container-items-right" },
  on = R({
    __name: "index",
    setup(k) {
      const { t: l } = N(),
        b = O(),
        m = V(),
        d = x(() => m.userInfo);
      let u = le("permission", null);
      u && (u = JSON.parse(u.value));
      const p = x(() => d.value.isOpenChampion),
        S = C([
          {
            name: "notification",
            title: l("notifications"),
            link: "Messages",
            isopen: "1",
          },
          {
            name: "gifts",
            title: l("giftExchange"),
            link: "RedeemGift",
            isopen: "1",
          },
          { name: "tournament", title: l("cpsTip6"), link: "MyCps", isopen: p },
          {
            name: "productCode",
            title: l("productOrder"),
            link: "PointMall-MyOrders",
            isopen: d.value.isOpenPointMall,
          },
          {
            name: "myDraw",
            title: l("MyLottery"),
            link: "PointMall-MyLottery",
            isopen: d.value.isOpenPointMall,
          },
          {
            name: "statsIcon",
            title: l("gameStatistics"),
            link: "GameStats",
            isopen: "1",
            haspermission: 17,
          },
          {
            name: "language",
            title: l("switchLanguages"),
            link: "Language",
            isopen: "1",
          },
        ]);
      function r(y) {
        b.push({ name: y.link });
      }
      return (y, w) => {
        const I = A("svg-icon"),
          s = A("van-icon"),
          t = q("haspermission");
        return (
          f(),
          h("div", en, [
            e("div", nn, [
              (f(!0),
              h(
                D,
                null,
                E(S.value, (n) => {
                  var g, c;
                  return M(
                    (f(),
                    h(
                      "div",
                      {
                        key: n.title,
                        onClick: (L) => r(n),
                        class: "settingPanel__container-items__item ar-1px-b",
                      },
                      [
                        e("div", sn, [
                          o(I, { name: `${n.name}` }, null, 8, ["name"]),
                          _(
                            " <img :src=\"getIcons('main', `${item.icon}`)\" /> "
                          ),
                          e("span", null, a(n.title), 1),
                        ]),
                        e("div", an, [
                          M(
                            e(
                              "h5",
                              null,
                              a((g = d.value) == null ? void 0 : g.unRead),
                              513
                            ),
                            [
                              [
                                U,
                                n.name === "notification" &&
                                  ((c = d.value) == null ? void 0 : c.unRead) >
                                    0,
                              ],
                            ]
                          ),
                          M(e("span", null, a(v(m).getLanguageName), 513), [
                            [U, n.name === "language"],
                          ]),
                          o(s, { name: "arrow", color: "#666" }),
                        ]),
                      ],
                      8,
                      tn
                    )),
                    [
                      [U, n.isopen == "1"],
                      [t, n.haspermission],
                    ]
                  );
                }),
                128
              )),
            ]),
          ])
        );
      };
    },
  });
const ln = B(on, [
    ["__scopeId", "data-v-a30d19b1"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Main/SettingPanel/index.vue",
    ],
  ]),
  rn = { class: "userinfo-content" },
  mn = R({
    __name: "index",
    setup(k) {
      const l = J(),
        b = V();
      H().getUserInfo({ signature: b.token });
      const d = b.getUserInfo;
      return (
        localStorage.getItem("needUpd") === "1" &&
          (localStorage.setItem("isReload", "1"),
          localStorage.setItem("needUpd", "2"),
          l.emit("keyChange")),
        (p, S) => (
          f(),
          h(
            D,
            null,
            [
              _(" 头部 "),
              o(re, { userInfo: v(d) }, null, 8, ["userInfo"]),
              e("div", rn, [
                _(" 总余额及钱包 "),
                o(Ne, { userInfo: v(d) }, null, 8, ["userInfo"]),
                _(" 保险箱 积分商城 下注-交易-充值-提现 "),
                o(ze, { userInfo: v(d) }, null, 8, ["userInfo"]),
                _(" 通知 邀请奖励 礼物兑换 商品订单 游戏统计 语言变更 "),
                o(ln),
                _(" 服务中心 "),
                o(Ze),
              ]),
            ],
            64
          )
        )
      );
    },
  });
export { ke as A, mn as _ };
