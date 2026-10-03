import {
  G as F,
  z as U,
  B as X,
  H as V,
  aA as L,
  I as $,
  Q as u,
  av as z,
  O as t,
  N as C,
  J as e,
  ar as j,
  P as n,
  ax as x,
  aC as Z,
  aD as ee,
  R as te,
  r as b,
  C as oe,
  ao as se,
  K as ne,
  u as H,
  aB as pe,
  aF as _e,
  F as J,
  T as ge,
  w as ye,
  b4 as me,
} from "./common.modules-cecf9b0d.js";
import {
  V as Q,
  a as he,
} from "./page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js";
import {
  b as q,
  _ as K,
  a3 as we,
  G as be,
  bE as $e,
  A as N,
  bF as Ce,
  g as P,
  J as xe,
  bn as Se,
  bi as Ve,
  bj as W,
  bo as ke,
  d as Te,
  y as Ge,
  aT as De,
  bG as Be,
  bH as Ie,
  L as Me,
} from "./page-activity-ActivityDetail-6713f46c.js";
const ae = (i) => (Z("data-v-2c18a1cc"), (i = i()), ee(), i),
  Ne = { class: "info-dialog" },
  Pe = { class: "info-dialog-header" },
  Oe = ae(() => e("span", { class: "info-dialog-header-left" }, null, -1)),
  Ae = ae(() => e("span", { class: "info-dialog-header-right" }, null, -1)),
  je = { class: "info-dialog-content" },
  ze = { class: "info-dialog-footer" },
  Fe = F({
    __name: "DiaLogOther",
    props: {
      show: { type: Boolean, default: !1 },
      title: { type: String, default: "" },
      confirmText: { type: String, default: "" },
      showCancelBtn: { type: Boolean, default: !1 },
      cancelText: { type: String, default: "" },
    },
    emits: ["update:show", "confirm", "cancel", "beforeClose"],
    setup(i, { emit: o }) {
      const _ = i,
        { t: m } = U(),
        D = X({
          get() {
            return _.show || !1;
          },
          set(r) {
            o("update:show", r);
          },
        });
      function c() {}
      return (r, a) => {
        const g = V("van-dialog"),
          l = L("lazy");
        return (
          C(),
          $("div", Ne, [
            u(
              g,
              {
                show: D.value,
                "onUpdate:show": a[1] || (a[1] = (y) => (D.value = y)),
                onCancel:
                  a[2] ||
                  (a[2] = () => {
                    o("cancel");
                  }),
                onConfirm:
                  a[3] ||
                  (a[3] = () => {
                    o("confirm");
                  }),
                "cancel-button-text": i.cancelText || t(m)("cancel"),
                "confirm-button-text": i.confirmText || t(m)("confirm"),
                "show-cancel-button": i.showCancelBtn,
                "before-close": c,
              },
              {
                default: z(() => [
                  e("div", null, [
                    e("div", Pe, [
                      Oe,
                      j(
                        r.$slots,
                        "header",
                        {},
                        () => [e("h5", null, n(i.title), 1)],
                        !0
                      ),
                      Ae,
                    ]),
                    e("div", je, [
                      j(
                        r.$slots,
                        "content",
                        {},
                        () => [e("div", null, n(r.$t("contentsHere")), 1)],
                        !0
                      ),
                    ]),
                    e("div", ze, [
                      j(
                        r.$slots,
                        "footer",
                        {},
                        () => [
                          x(
                            e(
                              "img",
                              {
                                onClick:
                                  a[0] ||
                                  (a[0] = () => {
                                    o("update:show", !1);
                                  }),
                              },
                              null,
                              512
                            ),
                            [[l, t(q)("main", "close")]]
                          ),
                        ],
                        !0
                      ),
                    ]),
                  ]),
                ]),
                _: 3,
              },
              8,
              [
                "show",
                "cancel-button-text",
                "confirm-button-text",
                "show-cancel-button",
              ]
            ),
          ])
        );
      };
    },
  });
const Ue = K(Fe, [
    ["__scopeId", "data-v-2c18a1cc"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/DiaLogOther.vue",
    ],
  ]),
  Le = { class: "gverify-container" },
  qe = { class: "gverify-container-header" },
  Ke = { class: "gverify-container-header-belly" },
  Ee = { alt: "" },
  Re = { class: "gverify-container-content" },
  Ye = { class: "gverify-container-content-item" },
  He = { class: "gverify-container-content-item-title" },
  Je = { alt: "" },
  Qe = { class: "gverify-container-content-item-tip" },
  We = { class: "gverify-container-content-item-tip" },
  Xe = { class: "gravity-container-modal" },
  Ze = { class: "popup-content" },
  et = { key: 0, class: "box" },
  tt = { class: "info" },
  ot = { class: "txt" },
  st = { class: "txt" },
  nt = { key: 1, class: "box" },
  at = { class: "info" },
  it = { class: "txt" },
  lt = { class: "txt" },
  ct = { key: 2, class: "box" },
  rt = { class: "label" },
  dt = ["placeholder"],
  ut = { class: "lab" },
  vt = { class: "other" },
  ft = F({
    __name: "index",
    setup(i) {
      const { t: o } = U(),
        _ = te(),
        m = we(),
        c = be().getUserInfo;
      let r = b(o("pwdVerify")),
        a = b(0),
        g = b(!1);
      const l = b(""),
        y = b(!1),
        k = b([]),
        O = { text: "name", value: "code" },
        {
          isGoogleVerifySms: h,
          isGoogleVerifyEmail: T,
          registerState: A,
        } = $e();
      A();
      const p = async (d) => {
        var M, G;
        const s = await N(
          Ce({ verifyCode: l.value.toString(), verifyType: d })
        );
        (M = s == null ? void 0 : s.data) != null &&
          M.secret &&
          _.push({
            name: "GoogleVerify-BindGoogle",
            query: {
              secret: (G = s.data) == null ? void 0 : G.secret,
              type: 0,
            },
          });
      };
      oe(() => {});
      const v = b(!1),
        B = () => {
          (l.value = ""),
            m.setCountDown(0),
            c.regType === 1
              ? h.value
                ? ((a.value = 1), (g.value = !0))
                : c.verifyMethods.email !== "" && T.value
                ? ((a.value = 2), (g.value = !0))
                : (a.value = 0)
              : T.value
              ? ((a.value = 2), (g.value = !0))
              : c.verifyMethods.mobile !== "" && h.value
              ? ((a.value = 1), (g.value = !0))
              : (a.value = 0),
            (r.value = f(a.value)),
            (v.value = !0);
        },
        f = (d) => {
          let s = "";
          switch (d) {
            case 0:
              s = o("pwdVerify");
              break;
            case 1:
              s = o("SMSVerify");
              break;
            case 2:
              s = o("emailverification");
              break;
            default:
              s = o("pwdVerify");
              break;
          }
          return s;
        },
        I = () => {
          if (a.value === 1 || a.value === 2) {
            if (!l.value) return H(o("noVerifyCodeFound"));
          } else if (!l.value) return H(o("pwdNull"));
          let d = ie(a.value);
          p(d);
        },
        ie = (d) => {
          let s = 1;
          switch (d) {
            case 0:
              s = 2;
              break;
            case 1:
              s = 1;
              break;
            case 2:
              s = 4;
              break;
            default:
              s = 2;
              break;
          }
          return s;
        },
        le = () => {
          (y.value = !0),
            T.value &&
            c.verifyMethods.email !== "" &&
            h.value &&
            c.verifyMethods.mobile !== ""
              ? (k.value = [
                  { name: o("SMSVerify"), code: 1 },
                  { name: o("emailverification"), code: 2 },
                ])
              : T.value && c.verifyMethods.email !== ""
              ? (k.value = [{ name: o("emailverification"), code: 2 }])
              : h.value &&
                c.verifyMethods.mobile !== "" &&
                (k.value = [{ name: o("SMSVerify"), code: 1 }]);
        },
        ce = ({ selectedOptions: d }) => {
          (r.value = f(d[0].code)), (a.value = d[0].code), (y.value = !1);
        },
        E = async () => {
          if (a.value === 1)
            if (
              await N(
                Ve({ phone: c.verifyMethods.mobile, codeType: W.openGoogle })
              )
            )
              J(o("sendSuccess"));
            else return -1;
          else if (
            await N(
              ke({ email: c.verifyMethods.email, emailType: W.openGoogle })
            )
          )
            J(o("sendSuccess"));
          else return -1;
        };
      function re() {
        _.push({ name: "CustomerService" });
      }
      function de() {
        _.push({ name: "rpwd" });
      }
      return (d, s) => {
        const M = V("NavBar"),
          G = V("svg-icon"),
          ue = V("van-icon"),
          ve = V("van-picker"),
          fe = V("van-popup"),
          R = L("lazy");
        return (
          C(),
          $(
            ne,
            null,
            [
              e("div", Le, [
                e("div", qe, [
                  u(
                    M,
                    {
                      title: t(o)("googleAuthenticator"),
                      class: "main",
                      "left-arrow": "",
                      onClickLeft: s[0] || (s[0] = (w) => t(_).go(-1)),
                    },
                    null,
                    8,
                    ["title"]
                  ),
                  e("div", Ke, [
                    x(e("img", Ee, null, 512), [
                      [R, t(q)("main", "googleVerifyBg")],
                    ]),
                  ]),
                ]),
                e("div", Re, [
                  e("div", Ye, [
                    e("div", He, [
                      x(e("img", Je, null, 512), [[R, t(P)("wallet", "hint")]]),
                      e("span", null, n(t(o)("googleIllustrate")), 1),
                    ]),
                    e("div", Qe, [
                      u(G, { name: "hint" }),
                      e("span", null, n(t(o)("googleTip1")), 1),
                    ]),
                    e("div", We, [
                      u(G, { name: "hint" }),
                      e("span", null, n(t(o)("googleTip2")), 1),
                    ]),
                  ]),
                ]),
                e(
                  "div",
                  { class: "gverify-container-button", onClick: B },
                  n(t(o)("turnGoogle")),
                  1
                ),
              ]),
              se(" 修改 短信&&密码验证弹窗修改 "),
              e("div", Xe, [
                u(
                  Ue,
                  {
                    show: v.value,
                    "onUpdate:show": s[6] || (s[6] = (w) => (v.value = w)),
                    onConfirm: I,
                    onCancel: le,
                    showCancelBtn: t(g),
                    cancelText: t(o)("otherverificationmethods"),
                    title: t(r),
                  },
                  {
                    content: z(() => {
                      var w, Y;
                      return [
                        e("div", Ze, [
                          t(a) === 1
                            ? (C(),
                              $("div", et, [
                                e("div", tt, [
                                  e("p", ot, n(t(o)("googleTip3")), 1),
                                  e(
                                    "p",
                                    st,
                                    n(t(o)("googleTip4", [t(xe)()])),
                                    1
                                  ),
                                ]),
                                u(
                                  Q,
                                  {
                                    value: l.value,
                                    "onUpdate:value":
                                      s[1] || (s[1] = (S) => (l.value = S)),
                                    isShowVerifyT: !1,
                                    sendFunc: E,
                                    typeP: "updatePhone",
                                  },
                                  null,
                                  8,
                                  ["value"]
                                ),
                              ]))
                            : t(a) === 2
                            ? (C(),
                              $("div", nt, [
                                e("div", at, [
                                  e("p", it, n(t(o)("googleTip3")), 1),
                                  e(
                                    "p",
                                    lt,
                                    n(
                                      t(o)("googleTip7", [
                                        t(Se)(
                                          (Y =
                                            (w = t(c)) == null
                                              ? void 0
                                              : w.verifyMethods) == null
                                            ? void 0
                                            : Y.email
                                        ),
                                      ])
                                    ),
                                    1
                                  ),
                                ]),
                                u(
                                  Q,
                                  {
                                    value: l.value,
                                    "onUpdate:value":
                                      s[2] || (s[2] = (S) => (l.value = S)),
                                    isShowVerifyT: !1,
                                    sendFunc: E,
                                    typeP: "updatePhone",
                                  },
                                  null,
                                  8,
                                  ["value"]
                                ),
                              ]))
                            : (C(),
                              $("div", ct, [
                                e("label", rt, [
                                  u(G, { name: "editPswIcon", class: "img" }),
                                  pe(" " + n(t(o)("withdrawDialogDesc2")), 1),
                                ]),
                                x(
                                  e(
                                    "input",
                                    {
                                      class: "input",
                                      maxlength: "20",
                                      "onUpdate:modelValue":
                                        s[3] || (s[3] = (S) => (l.value = S)),
                                      type: "password",
                                      placeholder: t(o)("withdrawDialogPh"),
                                    },
                                    null,
                                    8,
                                    dt
                                  ),
                                  [[_e, l.value]]
                                ),
                                e("p", ut, [
                                  u(ue, { class: "icon", name: "warning-o" }),
                                  e(
                                    "span",
                                    null,
                                    n(t(o)("withdrawDialogDesc3")),
                                    1
                                  ),
                                ]),
                                e("div", vt, [
                                  e(
                                    "span",
                                    {
                                      class: "pwd",
                                      onClick: s[4] || (s[4] = (S) => de()),
                                    },
                                    n(t(o)("withdrawDialogDesc4")),
                                    1
                                  ),
                                  e(
                                    "span",
                                    {
                                      class: "service",
                                      onClick: s[5] || (s[5] = (S) => re()),
                                    },
                                    n(t(o)("withdrawDialogDesc5")),
                                    1
                                  ),
                                ]),
                              ])),
                        ]),
                      ];
                    }),
                    _: 1,
                  },
                  8,
                  ["show", "showCancelBtn", "cancelText", "title"]
                ),
              ]),
              u(
                fe,
                {
                  show: y.value,
                  "onUpdate:show": s[8] || (s[8] = (w) => (y.value = w)),
                  round: "",
                  position: "bottom",
                },
                {
                  default: z(() => [
                    u(
                      ve,
                      {
                        "columns-field-names": O,
                        columns: k.value,
                        onCancel: s[7] || (s[7] = (w) => (y.value = !1)),
                        onConfirm: ce,
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
      };
    },
  });
const pt = K(ft, [
    ["__scopeId", "data-v-1911143a"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/GoogleVerify/index.vue",
    ],
  ]),
  Kt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: pt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _t = (i) => (Z("data-v-85031541"), (i = i()), ee(), i),
  gt = { class: "gverify-container" },
  yt = { class: "gverify-container-header" },
  mt = { class: "gverify-container-header-belly" },
  ht = { alt: "" },
  wt = { class: "gverify-container-content" },
  bt = { class: "gverify-container-content-item" },
  $t = _t(() =>
    e(
      "div",
      { class: "gverify-container-content-code" },
      [e("canvas", { id: "qr-code" })],
      -1
    )
  ),
  Ct = { class: "gverify-container-content-item-title" },
  xt = { alt: "" },
  St = { class: "gverify-container-content-item-text" },
  Vt = { class: "gverify-container-content-item-tip" },
  kt = { class: "gverify-container-footer" },
  Tt = { class: "gverify-container-content-item footer-wrapper" },
  Gt = { class: "gverify-container-content-item-title" },
  Dt = { alt: "" },
  Bt = { class: "gverify-container-content-item-steps" },
  It = { alt: "" },
  Mt = { class: "gverify-container-content-item-steps" },
  Nt = { class: "gverify-container-content-item-steps" },
  Pt = { class: "gverify-container-content-item-steps" },
  Ot = { class: "gverify-container-content-item-steps" },
  At = { key: 0 },
  jt = { key: 1 },
  zt = F({
    __name: "index",
    setup(i) {
      const { t: o } = U(),
        _ = te(),
        m = ge(),
        { maxDate: D } = Te(0),
        c = ye(D).startOf("day").format("YYYY-MM-DD"),
        r = m.query.secret,
        a = X(() => Ge().getProjectName),
        g = `otpauth://totp/${c}?secret=${m.query.secret}&issuer=${a.value}`,
        l = Number(m.query.type),
        y = async (p, v) => {
          const B = v == 0 ? Be({ googleCode: p }) : Ie({ googleCode: p }),
            f = await N(B);
          (f == null ? void 0 : f.code) == 0 && _.push({ name: "main" });
        },
        k = () => {
          De("https://support.google.com/accounts/answer/1066447", 1);
        },
        O = () => {
          h.value = !0;
        },
        h = b(!1),
        T = (p) => {
          y(p, l);
        };
      function A() {
        me.toCanvas(document.getElementById("qr-code"), g, (p) => {
          p && console.error(p);
        });
      }
      return (
        oe(() => {
          A();
        }),
        (p, v) => {
          const B = V("NavBar"),
            f = L("lazy");
          return (
            C(),
            $(
              ne,
              null,
              [
                e("div", gt, [
                  e("div", yt, [
                    u(
                      B,
                      {
                        title: t(o)("googleVerify"),
                        class: "main",
                        "left-arrow": "",
                        onClickLeft: v[0] || (v[0] = (I) => t(_).go(-1)),
                      },
                      null,
                      8,
                      ["title"]
                    ),
                    e("div", mt, [
                      x(e("img", ht, null, 512), [
                        [f, t(q)("main", "googleVerifyBg")],
                      ]),
                    ]),
                  ]),
                  e("div", wt, [
                    e("div", bt, [
                      $t,
                      e("div", Ct, [
                        x(e("img", xt, null, 512), [
                          [f, t(P)("main", "googleKey")],
                        ]),
                        e("span", null, n(t(o)("safeKey")), 1),
                      ]),
                      e("div", St, n(t(r)), 1),
                      e(
                        "div",
                        {
                          class: "gverify-container-content-item-button",
                          onClick: v[1] || (v[1] = (I) => t(Me)(t(r))),
                        },
                        n(t(o)("copyKey")),
                        1
                      ),
                      e("div", Vt, n(t(o)("tipSaveKeyProperly")), 1),
                    ]),
                  ]),
                  e("div", kt, [
                    e("div", Tt, [
                      e("div", Gt, [
                        x(e("img", Dt, null, 512), [
                          [f, t(P)("main", "privacyIcon")],
                        ]),
                        e("span", null, n(t(o)("bindStep")), 1),
                      ]),
                      e(
                        "div",
                        Bt,
                        " 1." + n(t(o)("tipDownloadGoogleVerify")),
                        1
                      ),
                      e("div", { class: "footer-wrapper-button", onClick: k }, [
                        x(e("img", It, null, 512), [
                          [f, t(P)("main", "gverifyDownload")],
                        ]),
                        e("span", null, n(t(o)("downloadGoogleVerify")), 1),
                      ]),
                      e("div", Mt, " 2." + n(t(o)("tipCopyKeyToBind")), 1),
                      e("div", Nt, " 3." + n(t(o)("tipAddNewAccount")), 1),
                      e(
                        "div",
                        Pt,
                        " 4." + n(t(o)("tipNametheAccountPasteTheKey")),
                        1
                      ),
                      e(
                        "div",
                        Ot,
                        " 5." + n(t(o)("tipGenerateSuccessCode")),
                        1
                      ),
                    ]),
                  ]),
                  e("div", { class: "gverify-container-button", onClick: O }, [
                    t(l) === 0
                      ? (C(), $("span", At, n(t(o)("confirmBinding")), 1))
                      : (C(), $("span", jt, n(t(o)("closeGoogle")), 1)),
                  ]),
                ]),
                se(" 验证弹窗 "),
                u(
                  he,
                  {
                    showPopup: h.value,
                    onOnConfirm: T,
                    onOnBack: v[2] || (v[2] = (I) => (h.value = !1)),
                  },
                  null,
                  8,
                  ["showPopup"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  });
const Ft = K(zt, [
    ["__scopeId", "data-v-85031541"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/GoogleVerify/BindGoogle/index.vue",
    ],
  ]),
  Et = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ft },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { Ue as D, Et as a, Kt as i };
