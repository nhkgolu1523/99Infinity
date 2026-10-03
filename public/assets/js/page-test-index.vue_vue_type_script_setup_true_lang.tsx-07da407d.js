import {
  G as z,
  r as O,
  D as be,
  $ as H,
  ax as U,
  ay as L,
  I as C,
  J as s,
  Q as l,
  av as k,
  a_ as W,
  N as g,
  ao as D,
  aC as se,
  aD as le,
  bx as Se,
  by as G,
  bz as J,
  A as ie,
  a8 as $e,
  bA as Ie,
  B as N,
  V as xe,
  C as re,
  W as Be,
  Y as Oe,
  a7 as Ve,
  bB as De,
  K as ue,
  bC as de,
  aw as Me,
  z as Te,
  R as ce,
  H as M,
  ar as oe,
  P as m,
  O as r,
  Z as j,
  au as ne,
  aB as B,
  M as ze,
} from "./common.modules-cecf9b0d.js";
import {
  _ as pe,
  cz as Ae,
  cA as fe,
  cB as Pe,
  cC as ve,
  cD as je,
  cE as Ne,
  cF as Ue,
  cG as ae,
  J as Le,
  bn as Ee,
  A as Fe,
  cH as Re,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { P as Ge } from "./page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js";
const he = (e) => (se("data-v-3492f60f"), (e = e()), le(), e),
  He = { class: "dialog" },
  Ze = { class: "dialog-main" },
  qe = he(() => s("div", { class: "dialog-main-content" }, null, -1)),
  Ke = he(() =>
    s(
      "div",
      { style: { width: "30px", height: "30px" } },
      [
        s(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "60",
            height: "60",
            viewBox: "0 0 60 60",
            fill: "none",
          },
          [
            s("path", {
              d: "M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z",
              stroke: "white",
              "stroke-width": "4",
              "stroke-linejoin": "round",
            }),
            s("path", {
              d: "M43 17L17 43",
              stroke: "white",
              "stroke-width": "4",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
            s("path", {
              d: "M17 17L43 43",
              stroke: "white",
              "stroke-width": "4",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  We = [Ke],
  Je = z({
    __name: "Dialog",
    props: {
      show: { type: Boolean, default: !1 },
      type: { type: String, default: "info" },
      showCancel: { type: Boolean, default: !0 },
      cancelText: { type: String, default: "取消" },
      showConfirm: { type: Boolean, default: !0 },
      confirmText: { type: String, default: "确认" },
      title: { type: String, default: "" },
      code: { type: String, default: "" },
      desc: { type: [String, Function], default: "" },
      showClose: { type: Boolean, default: !0 },
      maskClose: { type: Boolean, default: !0 },
      time: { type: Number, default: 0 },
    },
    emits: ["update:show", "cancel", "confirm"],
    setup(e, { emit: o }) {
      const n = e,
        a = O(n.time !== 0),
        t = O(!1),
        c = () => {
          n.maskClose && (t.value = !1);
        },
        h = () => {
          t.value = !1;
        },
        i = () => {
          o("update:show", !1);
        },
        u = be({
          time: n.time * 1e3,
          onFinish() {
            a.value = !1;
          },
        });
      return (
        H(
          () => n.show,
          (f) => {
            (t.value = f), f && n.time !== 0 && u.start();
          }
        ),
        (f, v) =>
          U(
            (g(),
            C(
              "div",
              He,
              [
                s("div", { class: "dialog-bg", onClick: c }),
                l(
                  W,
                  {
                    name: "dialogIn",
                    onAfterLeave: i,
                    "enter-active-class": "dialogIn-enter-active",
                    "leave-active-class": "dialogIn-leave-active",
                    persisted: "",
                  },
                  {
                    default: k(() => [
                      U(
                        s(
                          "div",
                          Ze,
                          [
                            qe,
                            e.showClose
                              ? (g(),
                                C(
                                  "div",
                                  {
                                    key: 0,
                                    class: "dialog-main-close",
                                    onClick: h,
                                  },
                                  We
                                ))
                              : D("v-if", !0),
                          ],
                          512
                        ),
                        [[L, t.value]]
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ],
              512
            )),
            [[L, { show: e.show }]]
          )
      );
    },
  });
const Ye = pe(Je, [
    ["__scopeId", "data-v-3492f60f"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Dialog/Dialog.vue",
    ],
  ]),
  Qe = (e) => {
    const o = J(),
      { cancel: n, confirm: a, close: t, ...c } = e,
      h = document.createElement("div");
    let i;
    const u = Se(Ye, {
      ...c,
      onCancel: n,
      onConfirm: a,
      "onUpdate:show"() {
        var f;
        u.component && (u.component.props.show = !1),
          t == null || t(),
          (f = i == null ? void 0 : i.unmount) == null || f.call(i);
      },
    });
    return (
      (i = {
        isUnmounted: !1,
        vm: u,
        open() {
          var f;
          document.body.appendChild(h),
            G(u, h),
            (f = u.component) != null &&
              f.props &&
              (u.component.props.show = !0),
            (u.appContext = (o == null ? void 0 : o.appContext) || null);
        },
        unmount() {
          var f, v;
          ((f = u.component) != null && f.isUnmounted) ||
            ((i.isUnmounted = !0),
            G(null, h),
            (v = h == null ? void 0 : h.parentNode) == null ||
              v.removeChild(h));
        },
      }),
      i
    );
  },
  Xe = Qe;
let et = 100;
function ye(e) {
  const o = J();
  o && Object.assign(o.proxy, e);
}
function tt() {
  const e = ie({ show: !1 }),
    o = (t) => {
      e.show = t;
    },
    n = (t) => {
      t && Object.assign(e, t, { transitionAppear: !0 }), o(!0);
    },
    a = () => o(!1);
  return (
    ye({ open: n, close: a, toggle: o }),
    { open: n, close: a, state: e, toggle: o }
  );
}
function ot(e) {
  var c;
  const o = J(),
    n = l(e);
  n.appContext = (o == null ? void 0 : o.appContext) || null;
  const a = document.createElement("div");
  return (
    document.body.appendChild(a),
    G(n, a),
    {
      instance: ((c = n.component) == null ? void 0 : c.proxy) || {},
      unmount() {
        G(null, a), document.body.removeChild(a);
      },
    }
  );
}
const nt = () => ++et;
function me(e) {
  const o = O(!1);
  return (
    H(
      e,
      (n) => {
        n && (o.value = n);
      },
      { immediate: !0 }
    ),
    (n) => () => o.value ? n() : null
  );
}
function at(e, { args: o = [], done: n, canceled: a }) {
  if (e) {
    const t = e.apply(null, o);
    Ae(t)
      ? t
          .then((c) => {
            c ? n() : a && a();
          })
          .catch(fe)
      : t
      ? n()
      : a
      ? a()
      : n();
  } else n();
}
const ge = Symbol(),
  st = {
    show: Boolean,
    zIndex: Number,
    role: String,
    duration: { type: Number, default: 1 },
    className: { type: String },
    lockScroll: { type: Boolean, default: !0 },
    lazyRender: { type: Boolean, default: !0 },
    transition: String,
    tabindex: Number,
    customStyle: Object,
  };
function lt() {
  return $e(ge, { close: () => {} });
}
const it = z({
    props: st,
    setup(e, { emit: o, slots: n }) {
      const a = O(),
        t = me(() => e.show || !e.lazyRender),
        c = (i) => {
          e.lockScroll && je(i, !0);
        },
        h = t(() => {
          var u;
          const i = Object.assign(Ne(e.zIndex), e.customStyle);
          return U(
            l(
              "div",
              { ref: a, style: i, class: [e.className, "popup-overlay"] },
              [(u = n.default) == null ? void 0 : u.call(n)]
            ),
            [[L, e.show]]
          );
        });
      return (
        ve("touchmove", c, { target: a }),
        () => l(W, { name: e.transition || "fade", appear: !0 }, { default: h })
      );
    },
  }),
  rt = {
    show: Boolean,
    zIndex: Number,
    teleport: { type: [String, Object], default: "body" },
    duration: { type: Number },
    lockScroll: { type: Boolean, default: !0 },
    lazyRender: { type: Boolean, default: !0 },
    overlay: { type: Boolean, default: !1 },
    transitionAppear: { type: Boolean, default: !0 },
    content: Function,
    transition: String,
    destroyOnClose: { type: Boolean, default: !0 },
    beforeClose: Function,
    overlayStyle: Object,
    closeOnClickOverlay: { type: Boolean, default: !1 },
  },
  ut = Object.assign({}, rt, {
    position: { type: String, default: "" },
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean,
    safeArea: Boolean,
    overlayClass: String,
    closeOnPopstate: Boolean,
  }),
  dt = z({
    inheritAttrs: !1,
    props: ut,
    emits: [
      "open",
      "close",
      "opened",
      "closed",
      "keydown",
      "update:show",
      "clickOverlay",
    ],
    setup(e, { emit: o, attrs: n, slots: a }) {
      let t, c;
      const h = Ie(document.body),
        i = O(),
        u = O(!1),
        f = O(),
        v = me(() => e.show || !e.lazyRender),
        w = N(() => {
          const y = { zIndex: i.value };
          if (Pe(e.duration)) {
            const b =
              e.position === "center"
                ? "animationDuration"
                : "transitionDuration";
            y[b] = `${e.duration}m`;
          }
          return y;
        }),
        V = () => {
          t ||
            ((t = !0),
            (h.value = !0),
            (i.value = e.zIndex !== void 0 ? +e.zIndex : nt()),
            (u.value = !0),
            o("open"));
        },
        $ = () => {
          t &&
            at(e.beforeClose, {
              done() {
                (t = !1),
                  o("close"),
                  o("update:show", !1),
                  (h.value = !1),
                  e.destroyOnClose && (u.value = !1);
              },
            });
        },
        T = () => o("opened"),
        x = () => o("closed"),
        Z = (y) => o("keydown", y),
        E = (y) => {
          o("clickOverlay", y), e.closeOnClickOverlay && $();
        };
      H(
        () => e.show,
        (y) => {
          y &&
            !t &&
            (V(),
            n.tabindex === 0 &&
              xe(() => {
                var b;
                (b = f.value) == null || b.focus();
              })),
            !y && t && $();
        }
      ),
        ye({ popupRef: f }),
        ve("popstate", () => {
          e.closeOnPopstate && ($(), (c = !1));
        }),
        re(() => {
          e.show && V();
        }),
        Be(() => {
          c && (o("update:show", !0), (c = !1));
        }),
        Oe(() => {
          e.show && e.teleport && ($(), (c = !0));
        }),
        Ve(ge, { close: $ });
      const q = v(() => {
          const {
              position: y,
              safeAreaInsetTop: b,
              safeAreaInsetBottom: S,
            } = e,
            I = e.content || a.default || fe;
          return U(
            l(
              "div",
              de(
                {
                  ref: f,
                  style: w.value,
                  role: "dialog",
                  tabindex: 0,
                  class: [
                    "popup",
                    y === "center" ? "popup-center" : null,
                    { "van-safe-area-top": b, "van-safe-area-bottom": S },
                  ],
                  onKeydown: Z,
                },
                n
              ),
              [u.value && I()]
            ),
            [[L, e.show]]
          );
        }),
        A = () => {
          if (e.overlay)
            return l(
              it,
              {
                show: e.show,
                class: e.overlayClass,
                zIndex: i.value,
                duration: e.duration,
                customStyle: e.overlayStyle,
                role: e.closeOnClickOverlay ? "button" : void 0,
                tabindex: e.closeOnClickOverlay ? 0 : void 0,
                onClick: E,
              },
              { default: a["overlay-content"] }
            );
        },
        F = () => {
          const { position: y, transition: b, transitionAppear: S } = e,
            I = y === "center" ? "fade" : `popup-slide-${y}`;
          return l(
            W,
            { name: b || I, appear: S, onAfterEnter: T, onAfterLeave: x },
            { default: q }
          );
        };
      return () =>
        e.teleport
          ? l(De, { to: e.teleport }, { default: () => [A(), F()] })
          : l(ue, null, [A(), F()]);
    },
  }),
  ct = {
    overlay: !0,
    teleport: "body",
    position: "center",
    transition: "van-fade",
  };
let R = [],
  pt = !0;
function ft(e) {
  const { onClosed: o, ...n } = e;
  return ot({
    setup() {
      const { state: t, toggle: c } = tt();
      return () => l(dt, de(t, n, { "onUpdate:show": c }), null);
    },
  }).instance;
}
function vt(e) {
  if (!R.length || pt) {
    const o = ft(e);
    R.push(o);
  }
  return R[R.length - 1];
}
function ht(e = {}) {
  const o = Object.assign({}, ct, e);
  return vt(o);
}
const Y = (e) => (se("data-v-954f2fdf"), (e = e()), le(), e),
  yt = { class: "security" },
  mt = { class: "security-header" },
  gt = Y(() => s("span", { class: "security-header-left" }, null, -1)),
  wt = { key: 0 },
  _t = { key: 1 },
  Ct = Y(() => s("span", { class: "security-header-right" }, null, -1)),
  kt = { class: "security-content" },
  bt = { key: 0 },
  St = { class: "security-hit" },
  $t = { key: 1 },
  It = { class: "security-hit" },
  xt = { key: 2 },
  Bt = { class: "security-hit" },
  Ot = { key: 3 },
  Vt = { class: "security-tip" },
  Dt = { key: 1 },
  Mt = { class: "security-btns" },
  Tt = { class: "security-footer" },
  zt = Y(() =>
    s(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
      },
      [
        s("path", {
          d: "M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z",
          stroke: "white",
          "stroke-width": "4",
          "stroke-linejoin": "round",
        }),
        s("path", {
          d: "M43 17L17 43",
          stroke: "white",
          "stroke-width": "4",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        s("path", {
          d: "M17 17L43 43",
          stroke: "white",
          "stroke-width": "4",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  At = [zt],
  Pt = z({
    __name: "index",
    props: {
      type: { type: String, default: "", required: !0 },
      code: { type: String, default: "", required: !0 },
      codeType: { type: Number, required: !0 },
      phone: { type: String, default: "" },
      showType: { type: String, default: "auth" },
    },
    emits: ["update:type", "update:code", "confirm"],
    setup(e, { emit: o }) {
      const n = e,
        { type: a, code: t, phone: c } = Me(n, o),
        { t: h } = Te(),
        { close: i } = lt(),
        u = ce(),
        {
          verifyList: f,
          verifyModal: v,
          verifyActive: w,
          openVerify: V,
          onSelectVerify: $,
          userInfo: T,
          isOpenForgetPasswordSMSState: x,
        } = Ue(),
        {
          getEmailCode: Z,
          isCount: E,
          seconds: q,
        } = ae({ time: 300, codeType: n.codeType }),
        {
          isCount: A,
          seconds: F,
          getSMSCode: y,
        } = ae({ time: 120, codeType: n.codeType }),
        b = N(() =>
          t.value
            ? w.value.value === "pwd"
              ? !(t.value.length >= 8)
              : t.value.length !== 6
            : !0
        ),
        S = N(() => n.showType === "phone"),
        I = N(() => (S.value ? {} : w.value)),
        Q = N(() => {
          var d, p;
          return (
            c.value ||
            ((p = (d = T.value) == null ? void 0 : d.verifyMethods) == null
              ? void 0
              : p.mobile)
          );
        }),
        we = () => {
          i(), u.push({ name: "rpwd" });
        },
        X = () => {
          i(), u.push({ name: "CustomerService" });
        },
        _e = async () => {
          o("confirm", { type: a, code: t });
        };
      return (
        H(w, () => {
          a.value = w.value.value;
        }),
        re(() => {
          S.value || (a.value = w.value.value);
        }),
        (d, p) => {
          var ee, te;
          const P = M("van-button"),
            K = M("van-field"),
            Ce = M("van-picker"),
            ke = M("van-popup");
          return (
            g(),
            C("div", yt, [
              s("div", mt, [
                gt,
                oe(
                  d.$slots,
                  "header",
                  {},
                  () => [
                    S.value
                      ? (g(), C("h5", wt, m(r(h)("SMSVerify")), 1))
                      : (g(), C("h5", _t, m(r(w).title), 1)),
                  ],
                  !0
                ),
                Ct,
              ]),
              s("div", kt, [
                I.value.value === "mobile" || S.value
                  ? (g(),
                    C("div", bt, [
                      s("div", St, [
                        s(
                          "p",
                          null,
                          m(d.$t("tipVerifyIdentityForFundSafety")),
                          1
                        ),
                        s(
                          "span",
                          null,
                          m(d.$t("tip6digitVeriCode", [`${r(Le)(Q.value)} 6`])),
                          1
                        ),
                      ]),
                      l(
                        K,
                        {
                          center: "",
                          type: "digit",
                          placeholder: d.$t("phEnterVerificationCode"),
                          maxlength: 6,
                          modelValue: r(t),
                          "onUpdate:modelValue":
                            p[1] ||
                            (p[1] = (_) => (j(t) ? (t.value = _) : null)),
                        },
                        {
                          button: k(() => [
                            l(
                              P,
                              {
                                class: "security-code",
                                disabled: r(A),
                                size: "small",
                                type: "primary",
                                onClick: p[0] || (p[0] = (_) => r(y)(Q.value)),
                              },
                              {
                                default: k(() => [
                                  B(m(r(A) ? `${r(F)}S` : d.$t("send")), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["disabled"]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["placeholder", "modelValue"]
                      ),
                    ]))
                  : D("v-if", !0),
                I.value.value === "email"
                  ? (g(),
                    C("div", $t, [
                      s("div", It, [
                        s(
                          "p",
                          null,
                          m(d.$t("tipVerifyIdentityForFundSafety")),
                          1
                        ),
                        s(
                          "span",
                          null,
                          m(
                            d.$t("tipemaildigitVeriCode", [
                              r(Ee)(
                                ((te =
                                  (ee = r(T)) == null
                                    ? void 0
                                    : ee.verifyMethods) == null
                                  ? void 0
                                  : te.email) || ""
                              ),
                            ])
                          ),
                          1
                        ),
                      ]),
                      l(
                        K,
                        {
                          center: "",
                          type: "digit",
                          maxlength: 6,
                          modelValue: r(t),
                          "onUpdate:modelValue":
                            p[3] ||
                            (p[3] = (_) => (j(t) ? (t.value = _) : null)),
                          placeholder: d.$t("phEnterVerificationCode"),
                        },
                        {
                          button: k(() => [
                            l(
                              P,
                              {
                                class: "security-code",
                                disabled: r(E),
                                size: "small",
                                type: "primary",
                                onClick: p[2] || (p[2] = (_) => r(Z)()),
                              },
                              {
                                default: k(() => [
                                  B(m(r(E) ? `${r(q)}S` : d.$t("send")), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["disabled"]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue", "placeholder"]
                      ),
                    ]))
                  : D("v-if", !0),
                I.value.value === "google"
                  ? (g(),
                    C("div", xt, [
                      s("div", Bt, [
                        s("p", null, m(d.$t("openauthenticator")), 1),
                        s("p", null, m(d.$t("verificationcodegoogle")), 1),
                      ]),
                      l(
                        K,
                        {
                          center: "",
                          clearable: "",
                          maxlength: 6,
                          modelValue: r(t),
                          "onUpdate:modelValue":
                            p[4] ||
                            (p[4] = (_) => (j(t) ? (t.value = _) : null)),
                          type: "number",
                          placeholder: d.$t("PgoogleVerification"),
                        },
                        null,
                        8,
                        ["modelValue", "placeholder"]
                      ),
                    ]))
                  : D("v-if", !0),
                I.value.value === "pwd"
                  ? (g(),
                    C("div", Ot, [
                      l(
                        Ge,
                        {
                          value: r(t),
                          "onUpdate:value":
                            p[5] ||
                            (p[5] = (_) => (j(t) ? (t.value = _) : null)),
                          label: d.$t("withdrawDialogDesc2"),
                          maxlength: 32,
                        },
                        null,
                        8,
                        ["value", "label"]
                      ),
                      s("div", Vt, [
                        r(x)
                          ? (g(),
                            C(
                              "p",
                              { key: 0, onClick: we },
                              m(d.$t("withdrawDialogDesc4")),
                              1
                            ))
                          : (g(), C("p", Dt)),
                        s(
                          "div",
                          { onClick: X },
                          m(d.$t("withdrawDialogDesc5")),
                          1
                        ),
                      ]),
                    ]))
                  : D("v-if", !0),
                s("div", Mt, [
                  S.value
                    ? D("v-if", !0)
                    : U(
                        (g(),
                        ne(
                          P,
                          { key: 0, onClick: r(V) },
                          {
                            default: k(() => [
                              B(m(d.$t("otherverificationmethods")), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["onClick"]
                        )),
                        [[L, I.value.value !== "pwd"]]
                      ),
                  l(
                    P,
                    { type: "primary", disabled: b.value, onClick: _e },
                    { default: k(() => [B(m(d.$t("confirmAdd")), 1)]), _: 1 },
                    8,
                    ["disabled"]
                  ),
                  S.value
                    ? (g(),
                      ne(
                        P,
                        { key: 1, onClick: X },
                        {
                          default: k(() => [B(m(d.$t("contactServicer")), 1)]),
                          _: 1,
                        }
                      ))
                    : D("v-if", !0),
                ]),
              ]),
              s("div", Tt, [
                oe(
                  d.$slots,
                  "footer",
                  {},
                  () => [
                    s(
                      "span",
                      {
                        onClick: p[6] || (p[6] = (..._) => r(i) && r(i)(..._)),
                      },
                      At
                    ),
                  ],
                  !0
                ),
              ]),
              l(
                ke,
                {
                  teleport: "body",
                  show: r(v),
                  "onUpdate:show":
                    p[8] || (p[8] = (_) => (j(v) ? (v.value = _) : null)),
                  "lazy-render": !0,
                  round: "",
                  position: "bottom",
                },
                {
                  default: k(() => [
                    l(
                      Ce,
                      {
                        onCancel: p[7] || (p[7] = (_) => (v.value = !1)),
                        onConfirm: r($),
                        columns: r(f),
                      },
                      null,
                      8,
                      ["onConfirm", "columns"]
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
const jt = pe(Pt, [
    ["__scopeId", "data-v-954f2fdf"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/SecurityDialog/index.vue",
    ],
  ]),
  Et = z({
    __name: "index",
    setup(e) {
      const o = z({
          render() {
            return l("div", null, [B("Test")]);
          },
        }),
        { open: n } = Xe({
          title: "未绑定银行卡或支付宝地址",
          desc: "您还未绑定银行卡或支付宝地址，请先绑定",
          confirmText: "绑定",
        }),
        a = ie({ phone: "111111", code: "" }),
        t = O(),
        c = ce();
      ht({
        content: () =>
          l(
            jt,
            {
              showType: "phone",
              code: a.code,
              "onUpdate:code": (v) => (a.code = v),
              phone: a.phone,
              "onUpdate:phone": (v) => (a.phone = v),
            },
            null
          ),
      });
      const h = () => {
          n();
        },
        i = (v) => {
          c.push({ path: v });
        },
        u = [
          { path: "/home" },
          { path: "/public3" },
          { path: "/blackGold" },
          { path: "/blackGold" },
          { path: "/blueHome" },
          { path: "/damanHome" },
          { path: "/goGame" },
          { path: "/orangeHome" },
          { path: "/red92Home" },
          { path: "/whiteGold2Home" },
          { path: "/whiteGoldBigMumbaiHome" },
          { path: "/whiteGoldHome" },
        ],
        f = async (v) => {
          const w = new FormData();
          w.append("files", v.file), await Fe(Re(w));
        };
      return (v, w) => {
        const V = M("van-button"),
          $ = M("van-uploader"),
          T = M("van-space");
        return (
          g(),
          C("div", null, [
            l(r(o)),
            l(V, { onClick: h }, { default: k(() => [B("测试")]), _: 1 }),
            l(
              $,
              {
                modelValue: t.value,
                "onUpdate:modelValue": w[0] || (w[0] = (x) => (t.value = x)),
                accept: "image/*",
                "max-count": 1,
                "after-read": f,
              },
              null,
              8,
              ["modelValue"]
            ),
            l(
              T,
              { wrap: "" },
              {
                default: k(() => [
                  (g(),
                  C(
                    ue,
                    null,
                    ze(u, (x) =>
                      l(
                        V,
                        { onClick: () => i(x.path) },
                        { default: k(() => [B(m(x.path), 1)]), _: 2 },
                        1032,
                        ["onClick"]
                      )
                    ),
                    64
                  )),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  });
export { jt as S, Et as _, ht as u };
