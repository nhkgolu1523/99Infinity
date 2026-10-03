import {
  r as m,
  z as ee,
  R as J,
  B as L,
  G as M,
  H as E,
  N as h,
  I as b,
  K as ke,
  M as Qe,
  ap as A,
  O as a,
  J as e,
  P as r,
  Q as y,
  av as z,
  Z as Le,
  aA as he,
  ax as D,
  ao as U,
  aF as de,
  aB as N,
  u as q,
  X as et,
  au as Y,
  az as Q,
  ay as G,
  V as j,
  aC as pe,
  aD as ve,
  $ as $e,
  C as me,
  F as we,
  b3 as tt,
  aV as Ve,
  E as Ne,
  aK as st,
  n as at,
} from "./common.modules-cecf9b0d.js";
import {
  G as Be,
  y as De,
  bc as Re,
  bd as ot,
  g as ye,
  be as nt,
  bf as rt,
  bg as lt,
  bh as it,
  N as ge,
  b as Se,
  _ as H,
  a3 as te,
  J as ut,
  A as re,
  bi as ct,
  bj as Ue,
  bk as qe,
  a4 as Me,
  a1 as Ae,
  bl as ze,
  bm as He,
  bn as dt,
  bo as pt,
  n as vt,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { D as Oe } from "./page-activity-Championship-c5772910.js";
import { D as mt } from "./page-activity-PointMall-19e2176f.js";
const Ee = m(!1);
function Ze() {
  const { locale: g } = ee(),
    k = Be(),
    u = J();
  async function t(p, n) {
    nt(p),
      (g.value = p),
      k.updateLanguage(p),
      await rt(p),
      lt().upUserLanguage(),
      it(ge.global.t),
      localStorage.setItem("needUpd", "1"),
      n === 1 ? c() : (Ee.value = !1);
  }
  const c = () => {
      u.back();
    },
    s = L(() => {
      let p = 0;
      const n = De().getLanguage,
        d = [];
      if (n) {
        const _ = n == null ? void 0 : n.replace("th", "tha").split("|");
        _ == null ||
          _.forEach((i) => {
            Re.forEach((f) => {
              (i.toLowerCase().indexOf(f.key.toLowerCase()) !== -1 ||
                f.key.toLowerCase().indexOf(i.toLowerCase()) !== -1) &&
                (d.push(f), p++);
            });
          });
      }
      return k.getLanguage || k.updateLanguage(ot()), p == 0 ? Re : d;
    });
  return {
    onClick: t,
    languagesList: s,
    getIcons: ye,
    locale: g,
    goBack: c,
    getLangName: (p) => {
      const n = s.value.find((d) => d.key === p);
      return (n == null ? void 0 : n.key.toLocaleUpperCase()) || "";
    },
    show: Ee,
  };
}
const gt = ["onClick"],
  _t = { class: "item-title" },
  ft = ["src"],
  ht = { key: 0 },
  wt = { key: 1 },
  yt = M({
    __name: "index",
    props: { type: { type: Number, default: 1 } },
    setup(g) {
      const { onClick: k, languagesList: u, locale: t } = Ze();
      return (c, s) => {
        const o = E("van-radio"),
          p = E("van-radio-group");
        return (
          h(),
          b(
            "div",
            { class: A(g.type === 2 ? "list info" : "list") },
            [
              (h(!0),
              b(
                ke,
                null,
                Qe(
                  a(u),
                  (n, d) => (
                    h(),
                    b(
                      "div",
                      {
                        class: A([
                          "item ar-1px-b",
                          n.key == a(t) ? "checked" : "",
                        ]),
                        key: d,
                        onClick: (_) => a(k)(n.key, g.type),
                      },
                      [
                        e("div", _t, [
                          e(
                            "img",
                            { src: a(Se)("languages", n.key) },
                            null,
                            8,
                            ft
                          ),
                          g.type === 2
                            ? (h(),
                              b("span", ht, r(n.key.toLocaleUpperCase()), 1))
                            : (h(), b("span", wt, r(n.name), 1)),
                        ]),
                        y(
                          p,
                          {
                            modelValue: a(t),
                            "onUpdate:modelValue":
                              s[0] ||
                              (s[0] = (_) => (Le(t) ? (t.value = _) : null)),
                          },
                          {
                            default: z(() => [
                              y(o, { name: n.key }, null, 8, ["name"]),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["modelValue"]
                        ),
                      ],
                      10,
                      gt
                    )
                  )
                ),
                128
              )),
            ],
            2
          )
        );
      };
    },
  });
const bt = H(yt, [
    ["__scopeId", "data-v-29e221c4"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Main/LanguageList/index.vue",
    ],
  ]),
  kt = { class: "img" },
  $t = { class: "languageName" },
  St = M({
    __name: "LangPopup",
    setup(g) {
      const { getLangName: k, locale: u, show: t } = Ze(),
        c = De(),
        s = L(() => c.getLoginChangeLanguage == "1");
      return (o, p) => {
        const n = E("van-popup"),
          d = he("lazy");
        return (
          h(),
          b("div", null, [
            s.value
              ? (h(),
                b(
                  "div",
                  {
                    key: 0,
                    class: "right",
                    onClick: p[0] || (p[0] = (_) => (t.value = !0)),
                  },
                  [
                    D(e("img", kt, null, 512), [[d, a(Se)("languages", a(u))]]),
                    e("span", $t, r(a(k)(a(u))), 1),
                  ]
                ))
              : U("v-if", !0),
            y(
              n,
              {
                show: a(t),
                "onUpdate:show":
                  p[1] || (p[1] = (_) => (Le(t) ? (t.value = _) : null)),
                class: "popup",
                position: "bottom",
                teleport: "body",
              },
              { default: z(() => [y(bt, { type: 2 })]), _: 1 },
              8,
              ["show"]
            ),
          ])
        );
      };
    },
  });
const Ct = H(St, [
    ["__scopeId", "data-v-8610bd15"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/LangPopup.vue",
    ],
  ]),
  It = { class: "popups" },
  Tt = { class: "popup-content" },
  Pt = { class: "tit" },
  Ft = { class: "con" },
  xt = { class: "info" },
  Rt = { class: "txt" },
  Et = { class: "txt" },
  Lt = { class: "box" },
  Vt = ["placeholder"],
  Nt = { class: "lab" },
  Bt = { class: "popup-foot" },
  Dt = M({
    __name: "index",
    props: { showPopup: { type: Boolean, default: m(!1) } },
    emits: ["update:showPopup", "onConfirm", "onBack"],
    setup(g, { emit: k }) {
      const u = g,
        t = J(),
        { t: c } = ee(),
        s = L({
          get() {
            return u.showPopup || !1;
          },
          set(_) {
            k("update:showPopup", _);
          },
        }),
        o = m(""),
        p = () => {
          if (!o.value) return q(c("googleKey"));
          k("onConfirm", o.value.toString());
        },
        n = () => {
          (o.value = ""), k("onBack");
        };
      function d() {
        t.push({ name: "CustomerService" });
      }
      return (_, i) => {
        const f = E("van-icon"),
          C = E("van-popup"),
          l = he("throttle-click"),
          S = he("lazy");
        return (
          h(),
          b("div", It, [
            y(
              C,
              {
                show: s.value,
                "onUpdate:show": i[1] || (i[1] = (F) => (s.value = F)),
                position: "center",
                round: "",
                class: "popup",
                "close-on-click-overlay": !1,
              },
              {
                default: z(() => [
                  e("div", Tt, [
                    e("div", Pt, r(a(c)("googleVerification")), 1),
                    e("div", Ft, [
                      e("div", xt, [
                        e("p", Rt, r(a(c)("googleTip5")), 1),
                        e("p", Et, r(a(c)("googleTip6")), 1),
                      ]),
                      e("div", Lt, [
                        D(
                          e(
                            "input",
                            {
                              class: "input",
                              type: "text",
                              "onUpdate:modelValue":
                                i[0] || (i[0] = (F) => (o.value = F)),
                              maxlength: "6",
                              oninput: "value=value.replace(/\\D/g,'')",
                              placeholder: a(c)("PgoogleVerification"),
                            },
                            null,
                            8,
                            Vt
                          ),
                          [[de, o.value]]
                        ),
                        e("p", Nt, [
                          y(f, { class: "icon", name: "warning-o" }),
                          N(r(a(c)("PVerificationCode")) + " ", 1),
                          e(
                            "span",
                            { onClick: d },
                            r(a(c)("contactServicer")),
                            1
                          ),
                        ]),
                      ]),
                      e("div", Bt, [
                        D((h(), b("div", null, [N(r(a(c)("confirm")), 1)])), [
                          [l, { handler: p, wait: 1e3 }],
                        ]),
                        e(
                          "div",
                          { onClick: n },
                          r(a(c)("withdrawDialogDesc6")),
                          1
                        ),
                      ]),
                    ]),
                    D(e("img", { class: "close", onClick: n }, null, 512), [
                      [S, a(Se)("main", "close")],
                    ]),
                  ]),
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
const We = H(Dt, [
    ["__scopeId", "data-v-96e240c3"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Main/VerifyPopup/index.vue",
    ],
  ]),
  se = (g) => (pe("data-v-869b9ee0"), (g = g()), ve(), g),
  Ut = ["src"],
  qt = ["src"],
  Mt = { key: 1, class: "captcha_message" },
  At = { class: "captcha_message__icon" },
  zt = {
    key: 0,
    height: "28",
    viewBox: "0 0 28 28",
    width: "28",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ht = se(() =>
    e(
      "g",
      {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
      },
      [
        e("path", {
          d: "M22.776 4.073A13.2 13.2 0 0 0 14 .75C6.682.75.75 6.682.75 14S6.682 27.25 14 27.25 27.25 21.318 27.25 14c0-.284-.009-.566-.027-.845",
        }),
        e("path", { d: "M7 12.5l7 7 13-13" }),
      ],
      -1
    )
  ),
  Ot = [Ht],
  Zt = {
    key: 1,
    height: "28",
    viewBox: "0 0 28 28",
    width: "28",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Wt = se(() =>
    e(
      "g",
      {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-width": "1.5",
      },
      [
        e("circle", { cx: "14", cy: "14", r: "13.25" }),
        e("path", {
          d: "M8.75 8.75l10.5 10.5M19.25 8.75l-10.5 10.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  jt = [Wt],
  Gt = { class: "captcha_message__text" },
  Xt = { key: 2, class: "captcha_message loadding" },
  Kt = se(() =>
    e(
      "div",
      { class: "captcha_message__icon captcha_message__icon--loadding" },
      null,
      -1
    )
  ),
  Yt = { class: "captcha_message__text" },
  Jt = { key: 3, class: "captcha_message" },
  Qt = se(() =>
    e(
      "div",
      { class: "captcha_message__icon captcha_message__icon--loadding" },
      null,
      -1
    )
  ),
  es = se(() => e("div", { class: "captcha_message__text" }, null, -1)),
  ts = [Qt, es],
  ss = se(() =>
    e(
      "path",
      {
        d: "M500.864 545.728a47.744 47.744 0 0 0 6.72-48.896 24.704 24.704 0 0 0-4.48-8.384L240.256 193.088a34.24 34.24 0 0 0-28.608-17.408 34.24 34.24 0 0 0-25.856 12.864 46.592 46.592 0 0 0 0 59.52l238.08 264.512-238.08 264.512a46.592 46.592 0 0 0-1.088 59.52 32 32 0 0 0 50.56 0l265.6-290.88z",
        "p-id": "820",
      },
      null,
      -1
    )
  ),
  as = se(() =>
    e(
      "path",
      {
        d: "M523.84 248.064l236.992 264.512-238.08 264.512a46.592 46.592 0 0 0 0 59.52 32 32 0 0 0 50.56 0l265.6-292.608a47.744 47.744 0 0 0 6.72-48.832 24.704 24.704 0 0 0-4.48-8.448L578.304 191.36a34.24 34.24 0 0 0-55.552-2.816 46.592 46.592 0 0 0 1.088 59.52z",
        "p-id": "821",
      },
      null,
      -1
    )
  ),
  os = [ss, as],
  ns = { key: 0, class: "captcha__actions" },
  rs = ["fill"],
  ls = se(() =>
    e(
      "path",
      {
        d: "M10,4 C12.0559549,4 13.9131832,5.04358655 15.0015086,6.68322231 L15,5.5 C15,5.22385763 15.2238576,5 15.5,5 C15.7761424,5 16,5.22385763 16,5.5 L16,8.5 C16,8.77614237 15.7761424,9 15.5,9 L12.5,9 C12.2238576,9 12,8.77614237 12,8.5 C12,8.22385763 12.2238576,8 12.5,8 L14.5842317,8.00000341 C13.7999308,6.20218044 12.0143541,5 10,5 C7.23857625,5 5,7.23857625 5,10 C5,12.7614237 7.23857625,15 10,15 C11.749756,15 13.3431487,14.0944653 14.2500463,12.6352662 C14.3958113,12.4007302 14.7041063,12.328767 14.9386423,12.4745321 C15.1731784,12.6202971 15.2451415,12.9285921 15.0993765,13.1631281 C14.0118542,14.9129524 12.0990688,16 10,16 C6.6862915,16 4,13.3137085 4,10 C4,6.6862915 6.6862915,4 10,4 Z",
        "fill-rule": "nonzero",
      },
      null,
      -1
    )
  ),
  is = [ls],
  us = M({
    __name: "SlideCaptcha",
    props: {
      width: { type: Number, default: 340 },
      height: { type: Number, default: 212 },
      barHeight: { type: Number, default: 40 },
      handlerIconWidth: { type: Number, default: 16 },
      handlerIconHeigth: { type: Number, default: 16 },
      background: { type: String, default: "#eee" },
      circle: { type: Boolean, default: !1 },
      radius: { type: String, default: "4px" },
      text: { type: String, default: "" },
      progressBarBg: { type: String, default: "#76c61d" },
      successTip: {
        type: String,
        default: "Verification passed, over 80% of users.",
      },
      failTip: {
        type: String,
        default:
          "Verification failed, drag the slider to correctly merge the floating image.",
      },
      showRefresh: { type: Boolean, default: !1 },
      refreshColor: { type: String, default: "#505050" },
    },
    emits: ["finish", "refresh"],
    setup(g, { expose: k, emit: u }) {
      const t = g,
        c = m(!1),
        s = m(!1),
        o = m(0),
        p = m(0),
        n = m(!1),
        d = m(!1),
        _ = m(!1),
        i = m([]),
        f = m(void 0),
        C = m(!1),
        l = m(!1),
        S = m(!1),
        F = m(""),
        I = m(""),
        V = m(!1),
        $ = L(() => ({
          width: t.width + "px",
          height: t.height + "px",
          position: "relative",
          overflow: "hidden",
        })),
        R = L(() => ({ width: t.width + "px" })),
        x = L(() => ({
          width: t.width + "px",
          height: t.barHeight + "px",
          lineHeight: t.barHeight + "px",
          background: t.background,
          borderRadius: t.circle ? t.barHeight / 2 + "px" : t.radius,
        })),
        W = L(() => ({
          background: t.progressBarBg,
          height: t.barHeight + "px",
          borderRadius: t.circle
            ? t.barHeight / 2 + "px 0 0 " + t.barHeight / 2 + "px"
            : t.radius,
        })),
        ie = L(() => ({ height: t.barHeight + "px", width: t.width + "px" })),
        ue = L(() => ({
          width: t.barHeight + "px",
          height: t.barHeight - 2 + "px",
        })),
        oe = L(() => ({
          width: t.handlerIconWidth + "px",
          height: t.handlerIconHeigth + "px",
        })),
        ae = L(() => t.refreshColor),
        w = L(() => ({ color: t.refreshColor })),
        T = m(),
        Z = m(),
        X = m(),
        v = m(),
        P = m(),
        ne = () => {
          (c.value = !0),
            j(() => {
              Pe(), Ke();
            }),
            (S.value = !0);
        },
        ce = (B, K) => {
          (S.value = !1), (F.value = B), (I.value = K);
        },
        O = () => {
          l.value = !0;
        },
        Ge = (B) => {
          (B.value = B), (l.value = !1), (C.value = !0);
        },
        Pe = () => {
          (o.value = 0),
            (p.value = 0),
            (i.value = []),
            (s.value = !1),
            (_.value = !1),
            (S.value = !1),
            (l.value = !1),
            (C.value = !1),
            (V.value = !1),
            Z && (Z.value.style.width = 0),
            v && (v.value.style.left = 0),
            P && (P.value.style.left = 0);
        },
        Fe = () => {
          window.removeEventListener("touchmove", _e),
            window.removeEventListener("touchend", fe),
            window.removeEventListener("mousemove", _e),
            window.removeEventListener("mouseup", fe);
        },
        xe = (B) => {
          !V.value &&
            F.value &&
            I.value &&
            !_.value &&
            (window.addEventListener("touchmove", _e),
            window.addEventListener("touchend", fe),
            window.addEventListener("mousemove", _e),
            window.addEventListener("mouseup", fe),
            (s.value = !0),
            (f.value = new Date()),
            (o.value = B.pageX || B.touches[0].pageX),
            (p.value = B.pageY || B.touches[0].pageY));
        },
        _e = (B) => {
          if (s.value && !V.value && F.value && I.value && !_.value) {
            const K = (B.pageX || B.touches[0].pageX) - o.value,
              be = (B.pageY || B.touches[0].pageY) - p.value;
            (P.value.style.left = K + "px"),
              (Z.value.style.width = K + t.barHeight / 2 + "px"),
              (v.value.style.left = K + "px"),
              i.value.push({
                x: Math.round(K),
                y: Math.round(be),
                t: new Date().getTime() - f.value.getTime(),
              });
          }
        },
        fe = () => {
          s.value &&
            !V.value &&
            F.value &&
            I.value &&
            !_.value &&
            ((s.value = !1),
            (_.value = !0),
            Fe(),
            u("finish", {
              backgroundImageWidth: X.value.offsetWidth,
              backgroundImageHeight: X.value.offsetHeight,
              sliderImageWidth: v.value.offsetWidth,
              sliderImageHeight: v.value.offsetHeight,
              startTime: f.value,
              endTime: new Date(),
              tracks: i.value,
            }));
        },
        Xe = (B) => {
          c.value = B;
        },
        Ke = () => {
          T.value.style.setProperty("--textColor", "#333"),
            T.value.style.setProperty(
              "--width",
              Math.floor(t.width / 2) + "px"
            ),
            T.value.style.setProperty(
              "--pwidth",
              -Math.floor(t.width / 2) + "px"
            );
        },
        Ye = () => {
          Pe(), u("refresh");
        };
      return (
        k({
          startRequestVerify: O,
          endRequestVerify: Ge,
          startRequestGenerate: ne,
          endRequestGenerate: ce,
          setShowHiden: Xe,
        }),
        et(() => {
          Fe();
        }),
        (B, K) => {
          const be = E("van-popup");
          return (
            h(),
            Y(
              be,
              {
                show: c.value,
                "onUpdate:show": K[0] || (K[0] = (Je) => (c.value = Je)),
                teleport: "body",
              },
              {
                default: z(() => [
                  e(
                    "div",
                    { class: "captcha", style: Q(R.value) },
                    [
                      e(
                        "div",
                        { class: "captcha__main", style: Q($.value) },
                        [
                          F.value
                            ? (h(),
                              b(
                                "img",
                                {
                                  key: 0,
                                  ref_key: "backgroundRef",
                                  ref: X,
                                  alt: "background",
                                  class: "captcha_background",
                                  src: F.value,
                                },
                                null,
                                8,
                                Ut
                              ))
                            : U("v-if", !0),
                          D(
                            e(
                              "img",
                              {
                                ref_key: "sliderRef",
                                ref: v,
                                alt: "slider",
                                class: A([
                                  "captcha_slider",
                                  { goFirst: n.value, goKeep: d.value },
                                ]),
                                src: I.value,
                              },
                              null,
                              10,
                              qt
                            ),
                            [[G, I.value]]
                          ),
                          C.value
                            ? (h(),
                              b("div", Mt, [
                                e("div", At, [
                                  V.value
                                    ? (h(), b("svg", zt, Ot))
                                    : (h(), b("svg", Zt, jt)),
                                ]),
                                e(
                                  "div",
                                  Gt,
                                  r(V.value ? g.successTip : g.failTip),
                                  1
                                ),
                              ]))
                            : U("v-if", !0),
                          S.value
                            ? (h(),
                              b("div", Xt, [
                                Kt,
                                e("div", Yt, r(B.$t("loading")) + "...", 1),
                              ]))
                            : U("v-if", !0),
                          l.value ? (h(), b("div", Jt, ts)) : U("v-if", !0),
                        ],
                        4
                      ),
                      e(
                        "div",
                        {
                          ref_key: "dragVerifyRef",
                          ref: T,
                          class: "captcha__bar",
                          style: Q(x.value),
                        },
                        [
                          e(
                            "div",
                            {
                              ref_key: "progressBarRef",
                              ref: Z,
                              class: A([
                                "captcha_progress_bar",
                                { goFirst2: n.value },
                              ]),
                              style: Q(W.value),
                            },
                            null,
                            6
                          ),
                          e(
                            "div",
                            {
                              class: "captcha_progress_bar__text",
                              style: Q(ie.value),
                            },
                            r(B.$t("slideCaptchaText")),
                            5
                          ),
                          e(
                            "div",
                            {
                              ref_key: "handlerRef",
                              ref: P,
                              class: A([
                                "captcha_handler",
                                { goFirst: n.value },
                              ]),
                              style: Q(ue.value),
                              onMousedown: xe,
                              onTouchstart: xe,
                            },
                            [
                              (h(),
                              b(
                                "svg",
                                {
                                  "p-id": "819",
                                  style: Q(oe.value),
                                  version: "1.1",
                                  viewBox: "0 0 1024 1024",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                                os,
                                4
                              )),
                            ],
                            38
                          ),
                        ],
                        4
                      ),
                      g.showRefresh
                        ? (h(),
                          b("div", ns, [
                            e(
                              "a",
                              {
                                class: "captcha__action",
                                style: Q(w.value),
                                onClick: Ye,
                              },
                              [
                                (h(),
                                b(
                                  "svg",
                                  {
                                    fill: ae.value,
                                    height: "20px",
                                    version: "1.1",
                                    viewBox: "0 0 20 20",
                                    width: "20px",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                  is,
                                  8,
                                  rs
                                )),
                                U(
                                  ' <span class="captcha__action__text">刷新</span> '
                                ),
                              ],
                              4
                            ),
                          ]))
                        : U("v-if", !0),
                    ],
                    4
                  ),
                ]),
                _: 1,
              },
              8,
              ["show"]
            )
          );
        }
      );
    },
  });
const je = H(us, [
    ["__scopeId", "data-v-869b9ee0"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/SlideCaptcha.vue",
    ],
  ]),
  cs = { class: "verifyInput__container" },
  ds = { class: "verifyInput__container-label" },
  ps = { key: 0 },
  vs = { key: 1 },
  ms = { class: "verifyInput__container-input" },
  gs = ["placeholder"],
  _s = { key: 0 },
  fs = { key: 1 },
  hs = { class: "verifyInput__container-tip" },
  ws = M({
    __name: "VerifyInput",
    props: {
      value: { type: String, required: !1 },
      typeP: { type: String, required: !1 },
      isShowVerifyT: { type: Boolean, required: !1 },
      placeholder: {
        type: String,
        required: !1,
        default: ge.global.t("registerTip1"),
      },
      sendFunc: { type: Function, required: !1 },
      number: { type: String, required: !1 },
      numberType: { type: String, required: !1, default: "" },
      showVerify: { type: Boolean, required: !1, default: !0 },
      email: { type: String, required: !1 },
      loginType: { type: String, required: !1 },
      isTip: { type: Boolean, required: !1, default: !0 },
    },
    emits: ["update:value"],
    setup(g, { emit: k }) {
      const u = g,
        { t } = ee(),
        c = te(),
        o = Be().getUserInfo,
        p = J(),
        n = L({
          get() {
            return u.value || "";
          },
          set(l) {
            k("update:value", l);
          },
        }),
        d = m(!0);
      async function _() {
        var S;
        if ((d.value && (d.value = !u.isTip), c.countDown > 0)) return;
        if (
          p.currentRoute.value.name === "rpwd" ||
          p.currentRoute.value.name === "register" ||
          (p.currentRoute.value.name === "SettingC-UpdatePhone" &&
            !u.isShowVerifyT)
        ) {
          if (!((S = u.number) != null && S.trim()))
            return q({ message: t("telUndetected"), wordBreak: "break-word" });
          const F = (u.number.trim() + u.numberType.trim()).length;
          if (F < 10 || F > 14)
            return q({ message: t("wrongTel"), wordBreak: "break-word" });
        } else if (
          !localStorage.getItem("numberType") &&
          localStorage.getItem("number")
        )
          return q({ message: t("telUndetected"), wordBreak: "break-word" });
        !u.sendFunc || (await u.sendFunc()) === -1 || c.sendCode();
      }
      const i = L(() => {
          var l;
          return u.number
            ? u.numberType + u.number
            : ((l = o == null ? void 0 : o.verifyMethods) == null
                ? void 0
                : l.mobile) ||
                localStorage.getItem("numberType") +
                  localStorage.getItem("number");
        }),
        f = (l) => {
          const S = l.target;
          (S.value = S.value.replace(/\s+/g, "")),
            (S.value = S.value.replace(/[^\d]/g, ""));
        };
      function C() {
        p.push({ name: "CustomerService" });
      }
      return (l, S) => {
        const F = E("svg-icon"),
          I = E("van-icon");
        return D(
          (h(),
          b(
            "div",
            cs,
            [
              D(
                e(
                  "div",
                  ds,
                  [
                    y(F, { name: "verify" }),
                    l.typeP === "updatePhone" || l.typeP === "lock"
                      ? (h(),
                        b(
                          "span",
                          ps,
                          r(l.$t("sendVerifyCodeTo")) + " " + r(a(ut)(i.value)),
                          1
                        ))
                      : (h(), b("span", vs, r(l.$t("verifyCode")), 1)),
                  ],
                  512
                ),
                [[G, !(l.isShowVerifyT === !1 && l.typeP === "updatePhone")]]
              ),
              e("div", ms, [
                D(
                  e(
                    "input",
                    {
                      type: "text",
                      "onUpdate:modelValue":
                        S[0] || (S[0] = (V) => (n.value = V)),
                      placeholder: l.$t("phEnterVerificationCode"),
                      maxlength: "6",
                      onInput: f,
                    },
                    null,
                    40,
                    gs
                  ),
                  [[de, n.value]]
                ),
                e(
                  "button",
                  { onClick: _, class: A({ inActive: a(c).countDown > 0 }) },
                  [
                    a(c).countDown === 0
                      ? (h(), b("span", _s, r(l.$t("send")), 1))
                      : (h(), b("span", fs, r(a(c).countDown) + "S ", 1)),
                  ],
                  2
                ),
              ]),
              D(
                e(
                  "div",
                  hs,
                  [
                    y(I, { name: "warning-o" }),
                    e("span", null, r(l.$t("codeUnreceived")) + "?", 1),
                    e(
                      "span",
                      { onClick: S[1] || (S[1] = (V) => C()) },
                      r(l.$t("contactServicer")),
                      1
                    ),
                  ],
                  512
                ),
                [[G, !d.value]]
              ),
            ],
            512
          )),
          [[G, l.showVerify]]
        );
      };
    },
  });
const ys = H(ws, [
    ["__scopeId", "data-v-c17848a2"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/VerifyInput.vue",
    ],
  ]),
  bs = { class: "passwordInput__container" },
  ks = { class: "passwordInput__container-label" },
  $s = { class: "passwordInput__container-input" },
  Ss = ["type", "placeholder", "maxlength", "value"],
  Cs = ["src"],
  Is = M({
    __name: "PasswordInput",
    props: {
      value: { type: String, required: !1 },
      maxlength: { type: Number, required: !1, default: 15 },
      label: { type: String, required: !0 },
    },
    emits: ["update:value"],
    setup(g, { emit: k }) {
      const u = g,
        t = ge.global.t,
        c = m(),
        s = m(""),
        o = m(!1);
      $e(
        s,
        ($) => {
          k("update:value", $);
        },
        { flush: "post" }
      );
      const p = ($) => {
          if (o.value) return;
          let R = _();
          const x = $.target;
          x.value = x.value.replace(/\s+/g, "");
          const W = /[\u4e00-\u9fa5]/g;
          (x.value = x.value.replace(W, "")), i(R, x.value), f(x.value), C(R);
        },
        n = m(!1),
        d = L(() => ye("main", `${n.value ? "eyeVisible" : "eyeInvisible"}`)),
        _ = () => {
          var $ = { start: 0, end: 0 };
          return (
            ($.start = c.value.selectionStart),
            ($.end = c.value.selectionEnd),
            $
          );
        },
        i = ($, R) => {
          if (R.length > 1 && !R.includes("•")) {
            s.value = R;
            return;
          }
          let x = R.split("•").join("");
          if (x) {
            let W = s.value.length - (R.length - $.end);
            s.value = s.value.slice(0, $.end - x.length) + x + s.value.slice(W);
          } else
            s.value =
              s.value.slice(0, $.end) +
              s.value.slice($.end + s.value.length - R.length);
        },
        f = ($) => {
          if (n.value) return;
          if (!$) {
            c.value.value = "";
            return;
          }
          let R = "";
          for (let x = 0; x < $.length; x++) R += "•";
          c.value.value = R;
        },
        C = ($) => {
          c.value.setSelectionRange($.start, $.end);
        },
        l = () => {
          o.value = !0;
        },
        S = ($) => {
          o.value && ((o.value = !1), p($));
        },
        F = () => {
          (n.value = !n.value),
            n.value ? (c.value.value = s.value) : f(s.value);
        };
      me(() => {
        (s.value = u.value || ""), f(s.value);
      });
      const I = localStorage.getItem("language"),
        V = L(() => {
          let $,
            R = u.label;
          switch (I) {
            case "vi":
              switch (R) {
                case "Đặt mật khẩu":
                  $ = t("setLoginPSW");
                  break;
                case "Xác nhận mật khẩu":
                  $ = t("enterPswConfirmation");
                  break;
                default:
                  $ = t("phEnter") + R;
                  break;
              }
              break;
            default:
              $ = R;
          }
          return $;
        });
      return ($, R) => {
        const x = E("svg-icon");
        return (
          h(),
          b("div", bs, [
            e("div", ks, [
              y(x, {
                name: "editPswIcon",
                class: "passwordInput__container-label__icon",
              }),
              e("span", null, r($.label), 1),
            ]),
            e("div", $s, [
              e(
                "input",
                {
                  type: n.value ? "text" : "password",
                  placeholder: V.value,
                  maxlength: $.maxlength,
                  onInput: p,
                  onCompositionstart: l,
                  onCompositionend: S,
                  ref_key: "inputPwd",
                  ref: c,
                  value: $.value,
                  autocomplete: "new-password",
                },
                null,
                40,
                Ss
              ),
              e("img", { src: d.value, class: "eye", onClick: F }, null, 8, Cs),
            ]),
          ])
        );
      };
    },
  });
const le = H(Is, [
    ["__scopeId", "data-v-ea5b66c8"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/PasswordInput.vue",
    ],
  ]),
  Ce = {
    moneyup: /^(?!0+$)(?!0*\.0*$)\d{1,11}(\.\d{1,2})?$/,
    redNum: /^([1-9]\d{0,2}|1000)$/,
    requiredNum: /^.{0,20}$/,
    passReg2:
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
    passReg3: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
    outmoneypwd: /^\d{6}$/,
    name: /^[^~`!@#$%^&*+-/=/_()|<\{\}\[\],.:'"//\?\\/>》《]{1,30}$/,
    tuiName: /^[a-zA-Z\s\u4e00-\u9fa50-9][a-zA-Z0-9\s\u4e00-\u9fa5]{1,23}$/,
    yaoma: /^[A-Za-z0-9|A-Za-z|0-9]{6}$/,
    httpCheck:
      /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
    password: /^[A-Za-z0-9~`!@#$%^&*()_+-='",;.?/|]{6,12}$/,
    account: /^(?![a-zA-Z]+$)[a-zA-Z0-9|0-9]{7,11}$/,
    email:
      /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.]{0,1})[A-Za-zd]{1,5}$/,
    email1: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    length1: /^.{6,30}$/,
    phone:
      /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    phone1:
      /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    moneys2: /^(-?)\d{1,9}(\.\d{1,2})?$/,
    moneys21: /^\d{1,4}(\.\d{1,2})?$/,
    ip: /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/,
    int: /^[1-9]\d*$/,
    verifyname: /[^a-zA-Z\s+$]/g,
    inputrule: /^[0-9,|]+$/,
  },
  Ts = {
    moneyup: "validateDesc1",
    redNum: "validateDesc2",
    requiredNum: "validateDesc3",
    passReg2: "pswRequirements",
    outmoneypwd: "validateDesc5",
    name: "validateDesc6",
    tuiName: "validateDesc7",
    endSpace: "validateDesc8",
    yaoma: "validateDesc9",
    httpCheck: "validateDesc10",
    password: "validateDesc11",
    account: "validateDesc13",
    email: "validateDesc14",
    length1: "validateDesc15",
    phone: "validateDesc16",
    moneys2: "validateDesc17",
    moneys21: "validateDesc18",
    ip: "validateDesc19",
    int: "validateDesc20",
    verifyname: "validateDesc21",
    inputtip: "validateDesc22",
  },
  Ie = (g) => (pe("data-v-ab583a3a"), (g = g()), ve(), g),
  Ps = { class: "RpwdPopup" },
  Fs = { class: "RpwdPopup-head" },
  xs = { class: "RpwdPopup-topTip" },
  Rs = Ie(() => e("br", null, null, -1)),
  Es = { class: "RpwdPopup-tip" },
  Ls = Ie(() => e("div", { class: "tipbg" }, null, -1)),
  Vs = { class: "RpwdPopup-errorTip" },
  Ns = { key: 0 },
  Bs = { class: "errorTip" },
  Ds = Ie(() => e("br", null, null, -1)),
  Us = { class: "RpwdPopup-foot" },
  qs = M({
    __name: "RpwdPopup",
    props: {
      show: { type: Boolean, default: !1 },
      gamePresentation: { type: String, default: "" },
      phoneNumber: { type: String, default: "" },
      phoneNumberType: { type: String, default: "" },
      passwordErrorMaxNum: { default: 10 },
    },
    emits: ["update:show"],
    setup(g, { emit: k }) {
      const u = g,
        { t } = ee(),
        c = J(),
        s = m(!1),
        o = te(),
        p = m(!1),
        n = m({ smsvcode: "", password: "", rePassword: "" }),
        d = L({
          get() {
            return u.show || !1;
          },
          set(C) {
            C || k("update:show", !1);
          },
        }),
        _ = async () => {
          if (!u.phoneNumber) return;
          (await re(
            ct({
              phone: u.phoneNumberType + u.phoneNumber,
              codeType: Ue.resetPassword,
            })
          ))
            ? we(t("sendSuccess"))
            : setTimeout(() => {
                o.setCountDown(0);
              }, 500);
        },
        i = async () => {
          if (!n.value.smsvcode.trim())
            return q({ message: t("registerTip1"), wordBreak: "break-word" });
          if (n.value.smsvcode.trim().length != 6)
            return q({
              message: t("verifyCode6Digits"),
              wordBreak: "break-word",
            });
          if (!n.value.password.trim())
            return q({ message: t("registerTip2"), wordBreak: "break-word" });
          if (!Ce.passReg3.test(n.value.password)) {
            s.value = !0;
            return;
          }
          if (!n.value.rePassword.trim())
            return q({ message: t("registerTip3"), wordBreak: "break-word" });
          if (n.value.password !== n.value.rePassword) {
            p.value = !0;
            return;
          } else p.value = !1;
          const { password: C, smsvcode: l } = n.value;
          let S = {
            username: u.phoneNumberType + u.phoneNumber,
            password: C,
            type: "mobile",
            smsvcode: l,
          };
          (await re(qe(S))) &&
            (we(t("rpdsucceed")), localStorage.clear(), k("update:show", !1));
        },
        f = () => {
          c.push({ name: "CustomerService" });
        };
      return (C, l) => {
        const S = E("svg-icon"),
          F = E("van-popup");
        return (
          h(),
          b(
            ke,
            null,
            [
              U(" 规则弹层 begin"),
              y(
                F,
                {
                  show: d.value,
                  "onUpdate:show": l[4] || (l[4] = (I) => (d.value = I)),
                  "close-on-click-overlay": !1,
                  position: "bottom",
                  round: "",
                },
                {
                  default: z(() => [
                    e("div", Ps, [
                      e("div", Fs, r(a(t)("idlockTitle")), 1),
                      e("div", xs, [
                        N(r(a(t)("idlockTip1", [g.passwordErrorMaxNum])), 1),
                        Rs,
                        N(r(a(t)("idlockTip3")), 1),
                      ]),
                      y(
                        ys,
                        {
                          value: n.value.smsvcode,
                          "onUpdate:value":
                            l[0] || (l[0] = (I) => (n.value.smsvcode = I)),
                          number: g.phoneNumber,
                          sendFunc: _,
                          numberType: g.phoneNumberType,
                          "type-p": "lock",
                        },
                        null,
                        8,
                        ["value", "number", "numberType"]
                      ),
                      y(
                        le,
                        {
                          value: n.value.password,
                          "onUpdate:value":
                            l[1] || (l[1] = (I) => (n.value.password = I)),
                          label: a(t)("newPSWRest"),
                        },
                        null,
                        8,
                        ["value", "label"]
                      ),
                      D(
                        e(
                          "div",
                          Es,
                          [Ls, e("span", null, r(a(t)("pswRule")), 1)],
                          512
                        ),
                        [[G, s.value]]
                      ),
                      y(
                        le,
                        {
                          value: n.value.rePassword,
                          "onUpdate:value":
                            l[2] || (l[2] = (I) => (n.value.rePassword = I)),
                          label: a(t)("newPSWconfirm"),
                        },
                        null,
                        8,
                        ["value", "label"]
                      ),
                      e("div", Vs, [
                        p.value
                          ? (h(), b("span", Ns, r(a(t)("unmatchedInput")), 1))
                          : U("v-if", !0),
                      ]),
                      e(
                        "div",
                        {
                          class: "gotuserver van-hairline--surround",
                          onClick: f,
                        },
                        [
                          y(S, { name: "customer1" }),
                          N(r(a(t)("contactServicer")), 1),
                        ]
                      ),
                      e("div", Bs, [
                        N(r(a(t)("wrongTel")), 1),
                        Ds,
                        N(r(a(t)("rpwdPopupTip")), 1),
                      ]),
                      e("div", Us, [
                        e(
                          "button",
                          { class: "dialogBtn", onClick: i },
                          r(a(t)("confirm")),
                          1
                        ),
                        e(
                          "button",
                          {
                            class: "dialogBtn",
                            onClick:
                              l[3] || (l[3] = (I) => k("update:show", !1)),
                          },
                          r(a(t)("cancel")),
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
            2112
          )
        );
      };
    },
  });
const Ms = H(qs, [
    ["__scopeId", "data-v-ab583a3a"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/RpwdPopup.vue",
    ],
  ]),
  As = { class: "phoneInput__container" },
  zs = { class: "phoneInput__container-label" },
  Hs = { class: "phoneInput__container-input" },
  Os = ["placeholder"],
  Zs = M({
    __name: "PhoneInput",
    props: {
      type: { type: String, required: !0 },
      showValidate: { type: Boolean, required: !0 },
      typeP: { type: String, required: !1 },
      numberType: { type: String, required: !0 },
      number: { type: String, required: !0 },
    },
    emits: ["update:show-validate", "changeT", "changeN"],
    setup(g, { expose: k, emit: u }) {
      const t = g,
        c = m(),
        s = L({
          get() {
            return t.number;
          },
          set(i) {
            u("changeN", i.replace(/[^0-9]/g, ""));
          },
        });
      function o(i) {
        i.target.value.length < 6 && u("update:show-validate", !0);
      }
      function p(i) {
        const f = i.target,
          C = /[\u4e00-\u9fa5]/g;
        (f.value = f.value.replace(C, "")),
          f.value.length > 0 && u("update:show-validate", !1);
      }
      const n = (i) => {
        u("changeT", i);
      };
      tt(c, () => {
        c.value.close();
      }),
        me(() => {});
      const d = m();
      function _() {
        j(() => {
          d.value.focus();
        });
      }
      return (
        k({ getFocus: _ }),
        (i, f) => {
          const C = E("svg-icon"),
            l = he("only-num");
          return (
            h(),
            b("div", As, [
              e("div", zs, [
                y(C, { name: "phone" }),
                e("span", null, r(i.$t("phone")), 1),
              ]),
              e("div", Hs, [
                y(
                  mt,
                  {
                    typeValue: t.numberType,
                    ref_key: "dropDown",
                    ref: c,
                    onChangeT: n,
                  },
                  null,
                  8,
                  ["typeValue"]
                ),
                D(
                  e(
                    "input",
                    {
                      type: "text",
                      name: "userNumber",
                      "onUpdate:modelValue":
                        f[0] || (f[0] = (S) => (s.value = S)),
                      placeholder: i.$t("plsEnterTel"),
                      onBlur: o,
                      onInput: p,
                      ref_key: "number",
                      ref: d,
                    },
                    null,
                    40,
                    Os
                  ),
                  [[l], [de, s.value]]
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const Ws = H(Zs, [
    ["__scopeId", "data-v-50aa8bb0"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/PhoneInput.vue",
    ],
  ]),
  js = (g) => (pe("data-v-33f88764"), (g = g()), ve(), g),
  Gs = { class: "signIn__container" },
  Xs = { class: "signIn__container-button" },
  Ks = { class: "signIn_footer" },
  Ys = { class: "font24" },
  Js = { class: "font24" },
  Qs = { class: "idlockTip" },
  ea = js(() => e("br", null, null, -1)),
  ta = ["src"],
  sa = M({
    __name: "SignIn",
    setup(g, { expose: k }) {
      const u = J(),
        { t } = ee(),
        c = m("login"),
        { setLoading: s } = Me(),
        o = te(),
        p = m(!1),
        { getSelfCustomerServiceLink: n, isCenterServer: d } = Ae({
          ServerType: 2,
        }),
        _ = m(!1),
        i = m(10),
        f = m();
      let C = !1;
      async function l() {
        if (!C) {
          if (
            ((C = !0),
            ze() && (await new Promise((v) => setTimeout(v, 1e3))),
            (C = !1),
            !o.userForm.number || o.userForm.number.toString().trim() === "")
          ) {
            _.value = !0;
            return;
          }
          if (
            !o.userForm.password ||
            o.userForm.password.toString().trim() === ""
          )
            return q({ message: t("registerTip2"), wordBreak: "break-word" });
          (o.userForm.numberType = o.getUserForm.numberType.replace("+", "")),
            o.userForm.remember && o.userForm.password.toString().trim() !== ""
              ? localStorage.setItem("remember", o.userForm.password)
              : localStorage.setItem("remember", ""),
            o.isOpenCaptcha && !$.value
              ? ae()
              : (s(!0),
                await o
                  .signIn(o.userForm)
                  .then((v) => {
                    o.userForm.vCode = "";
                  })
                  .catch((v) => {
                    var P;
                    ($.value = !1),
                      v.code === 1 &&
                        (i.value =
                          ((P = v.data) == null
                            ? void 0
                            : P.passwordErrorMaxNum) || 10),
                      v.msgCode === 33
                        ? j(() => (T.value = !0))
                        : w(v.msgCode || 0);
                  })
                  .finally(() => {
                    x.value.setShowHiden(!1), s(!1);
                  }));
        }
      }
      const S = () => {
        u.push({ name: "register" });
      };
      function F() {
        u.push({ name: "rpwd" }), o.setCurrentView("ResetPassword");
      }
      function I() {
        n();
      }
      const V = (v) => {
          o.getUserForm.numberType = v;
        },
        $ = m(!1),
        R = (v) => {
          o.getUserForm.number = v;
        },
        x = m(),
        W = m(""),
        ie = () => {
          (p.value = !1), n();
        };
      Ve(window, "keydown", (v) => {
        v.key == "Enter" && l();
      }),
        me(async () => {
          var P;
          const v = o.getUserForm;
          localStorage.getItem("remember") != null &&
          ((P = localStorage.getItem("remember")) == null
            ? void 0
            : P.toString().trim()) != ""
            ? (v.password = localStorage.getItem("remember"))
            : (v.password = ""),
            o.setUserForm({ ...v });
        });
      let ue = $e(
        () => o.userForm.number,
        (v) => {
          o.setCountDown(0);
        },
        { flush: "post" }
      );
      const oe = async (v) => {
          j(async () => {
            x.value.startRequestVerify(),
              s(!0),
              o
                .signIn(
                  Object.assign(o.userForm, { captchaId: W.value, track: v })
                )
                .then((P) => {})
                .catch((P) => {
                  var ne;
                  P.code === 1 &&
                    (i.value =
                      ((ne = P.data) == null
                        ? void 0
                        : ne.passwordErrorMaxNum) || 10),
                    P.msgCode === 33
                      ? (j(() => (T.value = !0)), ($.value = !0))
                      : w(P.msgCode || 0);
                })
                .finally(() => {
                  x.value.setShowHiden(!1), s(!1);
                });
          });
        },
        ae = () => {
          j(async () => {
            x.value.startRequestGenerate();
            const v = await re(He());
            v
              ? ((W.value = v.data.captchaId),
                x.value.endRequestGenerate(
                  v.data.backgroundImage,
                  v.data.sliderImage
                ))
              : x.value.endRequestGenerate(null, null);
          });
        },
        w = (v) => {
          v == 122 && (p.value = !0);
        };
      Ne(() => {
        ue(), o.getUserForm.remember || (o.getUserForm.password = "");
      });
      const T = m(!1),
        Z = (v) => {
          (o.userForm.vCode = v), l();
        },
        X = () => {
          (T.value = !1), (o.userForm.vCode = "");
        };
      return (
        k({ showPhoneValidate: _ }),
        (v, P) => {
          const ne = E("van-checkbox"),
            ce = E("svg-icon");
          return (
            h(),
            b("div", Gs, [
              y(
                Ws,
                {
                  "show-validate": _.value,
                  "onUpdate:showValidate":
                    P[0] || (P[0] = (O) => (_.value = O)),
                  ref_key: "phone",
                  ref: f,
                  type: c.value,
                  "number-type": a(o).getUserForm.numberType,
                  number: a(o).userForm.number,
                  onChangeT: V,
                  onChangeN: R,
                },
                null,
                8,
                ["show-validate", "type", "number-type", "number"]
              ),
              y(
                le,
                {
                  value: a(o).userForm.password,
                  "onUpdate:value":
                    P[1] || (P[1] = (O) => (a(o).userForm.password = O)),
                  label: v.$t("password"),
                  maxlength: 32,
                },
                null,
                8,
                ["value", "label"]
              ),
              e("div", null, [
                y(
                  ne,
                  {
                    modelValue: a(o).userForm.rememberpwd,
                    "onUpdate:modelValue":
                      P[2] || (P[2] = (O) => (a(o).userForm.rememberpwd = O)),
                  },
                  { default: z(() => [N(r(v.$t("rememberPSW")), 1)]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", Xs, [
                e(
                  "button",
                  {
                    class: A([a(o).userForm.number != "" ? "active" : ""]),
                    onClick: l,
                  },
                  r(v.$t("login")),
                  3
                ),
                e(
                  "button",
                  { class: "register", onClick: S },
                  r(v.$t("register")),
                  1
                ),
              ]),
              e("div", Ks, [
                a(o).isOpenForgetPasswordSMSState ||
                a(o).isOpenForgetPasswordEmailState
                  ? (h(),
                    b("div", { key: 0, class: "forgetcon", onClick: F }, [
                      y(ce, { name: "clock_b", class: "forgetbg" }),
                      e("div", Ys, r(v.$t("forgetPSW")), 1),
                    ]))
                  : U("v-if", !0),
                e("div", { class: "customcon", onClick: I }, [
                  a(d)
                    ? (h(),
                      Y(ce, {
                        key: 0,
                        name: "serverTicket1",
                        class: "forgetbg",
                      }))
                    : (h(),
                      Y(ce, { key: 1, name: "customer_b", class: "forgetbg" })),
                  e(
                    "div",
                    Js,
                    r(
                      a(d) ? a(t)("serverTicket") : v.$t("customerServiceTitle")
                    ),
                    1
                  ),
                ]),
              ]),
              y(
                je,
                {
                  ref_key: "captchaRef",
                  ref: x,
                  "refresh-color": "#FFFFFF",
                  "show-refresh": !0,
                  text: a(t)("slideCaptchaText"),
                  onFinish: oe,
                  onRefresh: ae,
                },
                null,
                8,
                ["text"]
              ),
              U("10锁定密码弹窗"),
              a(o).isOpenForgetPasswordSMSState && p.value
                ? (h(),
                  Y(
                    Ms,
                    {
                      key: 0,
                      show: p.value,
                      "onUpdate:show": P[3] || (P[3] = (O) => (p.value = O)),
                      phoneNumber: a(o).getUserForm.number,
                      phoneNumberType: a(o).getUserForm.numberType,
                      passwordErrorMaxNum: i.value,
                    },
                    null,
                    8,
                    [
                      "show",
                      "phoneNumber",
                      "phoneNumberType",
                      "passwordErrorMaxNum",
                    ]
                  ))
                : (h(),
                  Y(
                    Oe,
                    {
                      key: 1,
                      show: p.value,
                      "onUpdate:show": P[5] || (P[5] = (O) => (p.value = O)),
                      "show-cancel-btn": !0,
                      title: v.$t("idlockTitle"),
                    },
                    {
                      content: z(() => [
                        e("div", Qs, [
                          N(r(v.$t("idlockTip1", [i.value])) + " ", 1),
                          ea,
                          N(r(v.$t("idlockTip2")), 1),
                        ]),
                      ]),
                      footer: z(() => [
                        e(
                          "button",
                          {
                            class: "dialogBtn",
                            onClick: P[4] || (P[4] = (O) => (p.value = !1)),
                          },
                          r(v.$t("cancel")),
                          1
                        ),
                        e("button", { class: "dialogBtn", onClick: ie }, [
                          e(
                            "img",
                            { src: a(ye)("main", "iconservr") },
                            null,
                            8,
                            ta
                          ),
                          N(" " + r(v.$t("contactServicer")), 1),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["show", "title"]
                  )),
              U(" 验证弹窗 "),
              y(
                We,
                { showPopup: T.value, onOnConfirm: Z, onOnBack: X },
                null,
                8,
                ["showPopup"]
              ),
            ])
          );
        }
      );
    },
  });
const aa = H(sa, [
    ["__scopeId", "data-v-33f88764"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/SignIn.vue",
    ],
  ]),
  oa = { class: "verifyInput__container" },
  na = { class: "verifyInput__container-label" },
  ra = { key: 0 },
  la = { key: 1 },
  ia = { class: "verifyInput__container-input" },
  ua = ["placeholder"],
  ca = { key: 0 },
  da = { key: 1 },
  pa = { class: "verifyInput__container-tip" },
  va = M({
    __name: "VerifyEmailInput",
    props: {
      value: { type: String, required: !1 },
      typeP: { type: String, required: !1 },
      isShowVerifyT: { type: Boolean, required: !1 },
      placeholder: {
        type: String,
        required: !1,
        default: ge.global.t("registerTip6"),
      },
      sendFunc: { type: Function, required: !1 },
      number: { type: String, required: !1 },
      numberType: { type: String, required: !1 },
      showVerify: { type: Boolean, required: !1, default: !0 },
      email: { type: String, required: !1, default: "" },
      loginType: { type: String, required: !1 },
    },
    emits: ["update:value"],
    setup(g, { emit: k }) {
      const u = g;
      ee();
      const t = te(),
        c = J(),
        s = L({
          get() {
            return u.value || "";
          },
          set(i) {
            k("update:value", i);
          },
        }),
        o = m(!0);
      async function p() {
        o.value && (o.value = !1),
          !(t.countEmailDown > 0) &&
            (t.sendEmailCode(), u.sendFunc && u.sendFunc());
      }
      const n = L(() => localStorage.getItem("email") || u.email),
        d = (i) => {
          const f = i.target;
          (f.value = f.value.replace(/\s+/g, "")),
            (f.value = f.value.replace(/[^\d]/g, ""));
        };
      function _() {
        c.push({ name: "CustomerService" });
      }
      return (i, f) => {
        const C = E("svg-icon"),
          l = E("van-icon");
        return D(
          (h(),
          b(
            "div",
            oa,
            [
              D(
                e(
                  "div",
                  na,
                  [
                    y(C, {
                      name: "safeIcon",
                      class: "verifyInput__container-label__icon",
                    }),
                    i.typeP === "updateEmail" || i.typeP === "lock"
                      ? (h(),
                        b(
                          "span",
                          ra,
                          r(i.$t("sendVerifyCodeTo")) + " " + r(a(dt)(n.value)),
                          1
                        ))
                      : (h(), b("span", la, r(i.$t("verifyCode")), 1)),
                  ],
                  512
                ),
                [[G, !(i.isShowVerifyT === !1 && i.typeP === "updateEmail")]]
              ),
              e("div", ia, [
                D(
                  e(
                    "input",
                    {
                      type: "text",
                      "onUpdate:modelValue":
                        f[0] || (f[0] = (S) => (s.value = S)),
                      placeholder: i.$t("phEnterVerificationCode"),
                      maxlength: "6",
                      onInput: d,
                    },
                    null,
                    40,
                    ua
                  ),
                  [[de, s.value]]
                ),
                e(
                  "button",
                  {
                    onClick: p,
                    class: A({ inActive: a(t).countEmailDown > 0 }),
                  },
                  [
                    a(t).countEmailDown === 0
                      ? (h(), b("span", ca, r(i.$t("send")), 1))
                      : (h(), b("span", da, r(a(t).countEmailDown) + "S ", 1)),
                  ],
                  2
                ),
              ]),
              D(
                e(
                  "div",
                  pa,
                  [
                    y(l, { name: "warning-o" }),
                    e("span", null, r(i.$t("codeUnreceived")) + "?", 1),
                    e(
                      "span",
                      { onClick: f[1] || (f[1] = (S) => _()) },
                      r(i.$t("contactServicer")),
                      1
                    ),
                  ],
                  512
                ),
                [[G, !o.value]]
              ),
            ],
            512
          )),
          [[G, i.showVerify]]
        );
      };
    },
  });
const ma = H(va, [
    ["__scopeId", "data-v-484b25b1"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/VerifyEmailInput.vue",
    ],
  ]),
  Te = (g) => (pe("data-v-95ce4137"), (g = g()), ve(), g),
  ga = { class: "RpwdPopup" },
  _a = { class: "RpwdPopup-head" },
  fa = { class: "RpwdPopup-topTip" },
  ha = Te(() => e("br", null, null, -1)),
  wa = { class: "RpwdPopup-tip" },
  ya = Te(() => e("div", { class: "tipbg" }, null, -1)),
  ba = { class: "RpwdPopup-errorTip" },
  ka = { key: 0 },
  $a = { class: "errorTip" },
  Sa = Te(() => e("br", null, null, -1)),
  Ca = { class: "RpwdPopup-foot" },
  Ia = M({
    __name: "EmailRpwdPopup",
    props: {
      show: { type: Boolean, default: !1 },
      gamePresentation: { type: String, default: "" },
      email: { type: String, default: "" },
      passwordErrorMaxNum: { default: 10 },
    },
    emits: ["update:show"],
    setup(g, { emit: k }) {
      const u = g,
        { t } = ee(),
        c = J(),
        s = m(!1),
        o = te(),
        p = m(!1),
        n = m({ smsvcode: "", password: "", rePassword: "" }),
        d = L({
          get() {
            return u.show || !1;
          },
          set(C) {
            C || k("update:show", !1);
          },
        }),
        _ = async () => {
          if (!u.email) return;
          (await re(pt({ email: u.email, emailType: Ue.resetPassword })))
            ? we(t("sendSuccess"))
            : setTimeout(() => {
                o.setCountEmailDown(0);
              }, 500);
        },
        i = async () => {
          if (!n.value.smsvcode.trim())
            return q({ message: t("registerTip6"), wordBreak: "break-word" });
          if (n.value.smsvcode.trim().length != 6)
            return q({
              message: t("verifyCode6Digits"),
              wordBreak: "break-word",
            });
          if (!n.value.password.trim())
            return q({ message: t("registerTip2"), wordBreak: "break-word" });
          if (!Ce.passReg3.test(n.value.password)) {
            s.value = !0;
            return;
          }
          if (!n.value.rePassword.trim())
            return q({ message: t("registerTip3"), wordBreak: "break-word" });
          if (n.value.password !== n.value.rePassword) {
            p.value = !0;
            return;
          } else p.value = !1;
          const { password: C, smsvcode: l } = n.value;
          let S = {
            username: u.email,
            type: "email",
            password: C,
            smsvcode: l,
          };
          (await re(qe(S))) &&
            (we(t("rpdsucceed")), localStorage.clear(), k("update:show", !1));
        },
        f = () => {
          c.push({ name: "CustomerService" });
        };
      return (C, l) => {
        const S = E("svg-icon"),
          F = E("van-popup");
        return (
          h(),
          b(
            ke,
            null,
            [
              U(" 规则弹层 begin"),
              y(
                F,
                {
                  show: d.value,
                  "onUpdate:show": l[4] || (l[4] = (I) => (d.value = I)),
                  "close-on-click-overlay": !1,
                  position: "bottom",
                  round: "",
                },
                {
                  default: z(() => [
                    e("div", ga, [
                      e("div", _a, r(a(t)("idlockTitle")), 1),
                      e("div", fa, [
                        N(r(a(t)("idlockTip1", [g.passwordErrorMaxNum])), 1),
                        ha,
                        N(r(a(t)("idlockTip3")), 1),
                      ]),
                      y(
                        ma,
                        {
                          value: n.value.smsvcode,
                          "onUpdate:value":
                            l[0] || (l[0] = (I) => (n.value.smsvcode = I)),
                          sendFunc: _,
                          email: g.email,
                          "type-p": "lock",
                        },
                        null,
                        8,
                        ["value", "email"]
                      ),
                      y(
                        le,
                        {
                          value: n.value.password,
                          "onUpdate:value":
                            l[1] || (l[1] = (I) => (n.value.password = I)),
                          label: a(t)("newPSWRest"),
                        },
                        null,
                        8,
                        ["value", "label"]
                      ),
                      D(
                        e(
                          "div",
                          wa,
                          [ya, e("span", null, r(a(t)("pswRule")), 1)],
                          512
                        ),
                        [[G, s.value]]
                      ),
                      y(
                        le,
                        {
                          value: n.value.rePassword,
                          "onUpdate:value":
                            l[2] || (l[2] = (I) => (n.value.rePassword = I)),
                          label: a(t)("newPSWconfirm"),
                        },
                        null,
                        8,
                        ["value", "label"]
                      ),
                      e("div", ba, [
                        p.value
                          ? (h(), b("span", ka, r(a(t)("unmatchedInput")), 1))
                          : U("v-if", !0),
                      ]),
                      e("div", { class: "gotuserver", onClick: f }, [
                        y(S, { name: "customer1" }),
                        N(r(a(t)("contactServicer")), 1),
                      ]),
                      e("div", $a, [
                        N(r(a(t)("wrongemail")), 1),
                        Sa,
                        N(r(a(t)("rpwdEmailPopupTip")), 1),
                      ]),
                      e("div", Ca, [
                        e(
                          "button",
                          { class: "dialogBtn", onClick: i },
                          r(a(t)("confirm")),
                          1
                        ),
                        e(
                          "button",
                          {
                            class: "dialogBtn",
                            onClick:
                              l[3] || (l[3] = (I) => k("update:show", !1)),
                          },
                          r(a(t)("cancel")),
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
            2112
          )
        );
      };
    },
  });
const Ta = H(Ia, [
    ["__scopeId", "data-v-95ce4137"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/EmailRpwdPopup.vue",
    ],
  ]),
  Pa = { class: "emailcontainer" },
  Fa = { class: "emailinput__container" },
  xa = { class: "emailinput__container-label" },
  Ra = { class: "emailinput__container-input" },
  Ea = ["placeholder"],
  La = M({
    __name: "EmailInput",
    props: {
      type: { type: String, required: !0 },
      email: { type: String, required: !0 },
    },
    emits: ["update:show-validate", "changeN"],
    setup(g, { expose: k, emit: u }) {
      const t = g,
        c = te(),
        s = L({
          get() {
            return t.email;
          },
          set(d) {
            u("changeN", d);
          },
        });
      function o(d) {
        const _ = d.target,
          i = /[\u4e00-\u9fa5]/g;
        (_.value = _.value.replace(i, "")),
          _.value.length > 0 && u("update:show-validate", !1);
      }
      const p = m();
      function n() {
        j(() => {
          p.value.focus();
        });
      }
      return (
        k({ getFocus: n }),
        (d, _) => {
          const i = E("svg-icon");
          return (
            h(),
            b("div", Pa, [
              e("div", Fa, [
                e("div", xa, [
                  y(i, {
                    name: "email",
                    class: "emailinput__container-label__icon",
                  }),
                  e(
                    "span",
                    null,
                    r(
                      a(c).isOpenExternalAccount
                        ? `${d.$t("otherlogin")} ${d.$t("login")}`
                        : d.$t("email")
                    ),
                    1
                  ),
                ]),
                e("div", Ra, [
                  D(
                    e(
                      "input",
                      {
                        type: "text",
                        name: "userEmail",
                        maxlength: "250",
                        "onUpdate:modelValue":
                          _[0] || (_[0] = (f) => (s.value = f)),
                        placeholder: d.$t("inputemail"),
                        onInput: o,
                        ref_key: "email",
                        ref: p,
                      },
                      null,
                      40,
                      Ea
                    ),
                    [[de, s.value]]
                  ),
                ]),
              ]),
            ])
          );
        }
      );
    },
  });
const Va = H(La, [
    ["__scopeId", "data-v-4499df08"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/EmailInput.vue",
    ],
  ]),
  Na = (g) => (pe("data-v-436a69c4"), (g = g()), ve(), g),
  Ba = { class: "signIn__container" },
  Da = { class: "signIn__container-button" },
  Ua = { class: "signIn_footer" },
  qa = { class: "font24" },
  Ma = { class: "font24" },
  Aa = { class: "idlockTip" },
  za = Na(() => e("br", null, null, -1)),
  Ha = ["src"],
  Oa = M({
    __name: "EmailSignIn",
    setup(g) {
      const k = J(),
        { t: u } = ee(),
        t = m(10),
        { setLoading: c } = Me(),
        s = te(),
        o = m(!1),
        { getSelfCustomerServiceLink: p, isCenterServer: n } = Ae({
          ServerType: 2,
        }),
        d = m(!1),
        _ = m(),
        i = m("login"),
        f = m(!1);
      async function C() {
        if (
          (ze() && (await new Promise((w) => setTimeout(w, 500))),
          !(!s.userForm.email || s.userForm.email.toString().trim() === ""))
        ) {
          if (!s.isOpenExternalAccount && !Ce.email1.test(s.userForm.email))
            return q({ message: u(Ts.email), wordBreak: "break-word" });
          if (
            !s.userForm.password ||
            s.userForm.password.toString().trim() === ""
          )
            return q({ message: u("registerTip2"), wordBreak: "break-word" });
          s.userForm.remember && s.userForm.password.toString().trim() !== ""
            ? localStorage.setItem("remember", s.userForm.password)
            : localStorage.setItem("remember", ""),
            s.isOpenCaptcha && !f.value
              ? oe()
              : (c(!0),
                await s
                  .signIn(s.userForm)
                  .then((w) => {})
                  .catch((w) => {
                    var T;
                    (f.value = !1),
                      w.code === 1 &&
                        (t.value =
                          ((T = w.data) == null
                            ? void 0
                            : T.passwordErrorMaxNum) || 10),
                      w.msgCode === 33 ? (d.value = !0) : ae(w.msgCode || 0);
                  })
                  .finally(() => {
                    V.value.setShowHiden(!1), c(!1);
                  }));
        }
      }
      const l = () => {
        k.push({ name: "register" });
      };
      function S() {
        k.push({ name: "rpwd" }), s.setCurrentView("ResetPassword");
      }
      function F() {
        p();
      }
      const I = (w) => {
          s.getUserForm.email = w;
        },
        V = m(),
        $ = m(""),
        R = () => {
          (o.value = !1), k.push({ name: "CustomerService" });
        };
      Ve(window, "keydown", (w) => {
        w.key == "Enter" && C();
      });
      const x = (w) => {
          (s.userForm.vCode = w), C();
        },
        W = () => {
          (d.value = !1), (s.userForm.vCode = "");
        };
      me(async () => {
        var T;
        const w = s.getUserForm;
        localStorage.getItem("remember") != null &&
        ((T = localStorage.getItem("remember")) == null
          ? void 0
          : T.toString().trim()) != ""
          ? (w.password = localStorage.getItem("remember"))
          : (w.password = ""),
          s.setUserForm({ ...w });
      });
      let ie = $e(
        () => s.userForm.number,
        (w) => {
          s.setCountDown(0);
        },
        { flush: "post" }
      );
      const ue = async (w) => {
          j(async () => {
            V.value.startRequestVerify(),
              c(!0),
              s
                .signIn(
                  Object.assign(s.userForm, { captchaId: $.value, track: w })
                )
                .then((T) => {
                  s.userForm.vCode = "";
                })
                .catch((T) => {
                  var Z;
                  T.code === 1 &&
                    (t.value =
                      ((Z = T.data) == null ? void 0 : Z.passwordErrorMaxNum) ||
                      10),
                    T.msgCode === 33
                      ? (j(() => (d.value = !0)), (f.value = !0))
                      : ae(T.msgCode || 0);
                })
                .finally(() => {
                  V.value.setShowHiden(!1), c(!1);
                });
          });
        },
        oe = () => {
          j(async () => {
            V.value.startRequestGenerate();
            const w = await re(He());
            w
              ? (($.value = w.data.captchaId),
                V.value.endRequestGenerate(
                  w.data.backgroundImage,
                  w.data.sliderImage
                ))
              : V.value.endRequestGenerate(null, null);
          });
        },
        ae = (w) => {
          w == 122 && (o.value = !0);
        };
      return (
        Ne(() => {
          ie(), s.getUserForm.remember || (s.getUserForm.password = "");
        }),
        (w, T) => {
          const Z = E("van-checkbox"),
            X = E("svg-icon");
          return (
            h(),
            b("div", Ba, [
              y(
                Va,
                {
                  ref_key: "email",
                  ref: _,
                  type: i.value,
                  email: a(s).userForm.email,
                  onChangeN: I,
                },
                null,
                8,
                ["type", "email"]
              ),
              y(
                le,
                {
                  value: a(s).userForm.password,
                  "onUpdate:value":
                    T[0] || (T[0] = (v) => (a(s).userForm.password = v)),
                  label: w.$t("password"),
                  maxlength: 32,
                },
                null,
                8,
                ["value", "label"]
              ),
              e("div", null, [
                y(
                  Z,
                  {
                    modelValue: a(s).userForm.rememberpwd,
                    "onUpdate:modelValue":
                      T[1] || (T[1] = (v) => (a(s).userForm.rememberpwd = v)),
                  },
                  { default: z(() => [N(r(w.$t("rememberPSW")), 1)]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", Da, [
                e(
                  "button",
                  {
                    class: A([a(s).userForm.email != "" ? "active" : ""]),
                    onClick: C,
                  },
                  r(w.$t("login")),
                  3
                ),
                e(
                  "button",
                  { class: "register", onClick: l },
                  r(w.$t("register")),
                  1
                ),
              ]),
              e("div", Ua, [
                a(s).isOpenForgetPasswordSMSState ||
                a(s).isOpenForgetPasswordEmailState
                  ? (h(),
                    b("div", { key: 0, class: "forgetcon", onClick: S }, [
                      y(X, { name: "clock_b", class: "forgetbg" }),
                      e("div", qa, r(w.$t("forgetPSW")), 1),
                    ]))
                  : U("v-if", !0),
                e("div", { class: "customcon", onClick: F }, [
                  a(n)
                    ? (h(),
                      Y(X, {
                        key: 0,
                        name: "serverTicket1",
                        class: "forgetbg",
                      }))
                    : (h(),
                      Y(X, { key: 1, name: "customer_b", class: "forgetbg" })),
                  e(
                    "div",
                    Ma,
                    r(
                      a(n) ? a(u)("serverTicket") : w.$t("customerServiceTitle")
                    ),
                    1
                  ),
                ]),
              ]),
              y(
                je,
                {
                  ref_key: "captchaRef",
                  ref: V,
                  "refresh-color": "#FFFFFF",
                  "show-refresh": !0,
                  text: a(u)("slideCaptchaText"),
                  onFinish: ue,
                  onRefresh: oe,
                },
                null,
                8,
                ["text"]
              ),
              U("10锁定密码弹窗"),
              a(s).isOpenForgetPasswordEmailState && o.value
                ? (h(),
                  Y(
                    Ta,
                    {
                      key: 0,
                      show: o.value,
                      "onUpdate:show": T[2] || (T[2] = (v) => (o.value = v)),
                      email: a(s).getUserForm.email,
                      passwordErrorMaxNum: t.value,
                    },
                    null,
                    8,
                    ["show", "email", "passwordErrorMaxNum"]
                  ))
                : (h(),
                  Y(
                    Oe,
                    {
                      key: 1,
                      show: o.value,
                      "onUpdate:show": T[4] || (T[4] = (v) => (o.value = v)),
                      "show-cancel-btn": !0,
                      title: w.$t("idlockTitle"),
                    },
                    {
                      content: z(() => [
                        e("div", Aa, [
                          N(r(w.$t("idlockTip1", [t.value])) + " ", 1),
                          za,
                          N(r(w.$t("idlockTip2")), 1),
                        ]),
                      ]),
                      footer: z(() => [
                        e(
                          "button",
                          {
                            class: "dialogBtn",
                            onClick: T[3] || (T[3] = (v) => (o.value = !1)),
                          },
                          r(w.$t("cancel")),
                          1
                        ),
                        e("button", { class: "dialogBtn", onClick: R }, [
                          e(
                            "img",
                            { src: a(ye)("main", "iconservr") },
                            null,
                            8,
                            Ha
                          ),
                          N(" " + r(w.$t("contactServicer")), 1),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["show", "title"]
                  )),
              U(" 验证弹窗 "),
              y(
                We,
                { showPopup: d.value, onOnConfirm: x, onOnBack: W },
                null,
                8,
                ["showPopup"]
              ),
            ])
          );
        }
      );
    },
  });
const Za = H(Oa, [
    ["__scopeId", "data-v-436a69c4"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Login/EmailSignIn.vue",
    ],
  ]),
  Wa = { class: "login__container-heading" },
  ja = { class: "login__container-heading__title" },
  Ga = { class: "login__container-heading__subTitle" },
  Xa = { class: "login_container-tab" },
  Ka = { class: "login__container-form" },
  to = M({
    __name: "index",
    setup(g) {
      const { t: k } = ge.global,
        u = J(),
        t = te();
      t.getRegisterState();
      const c = m("mobile"),
        s = m(void 0);
      t.userForm.logintype = c.value;
      const { openAll: o } = vt();
      function p() {
        u.replace("/");
      }
      const n = (d) => {
        (c.value = d),
          (t.userForm.logintype = d),
          (t.userForm.password = ""),
          t.remember(!0);
      };
      return (
        st((d, _, i) => {
          i(), d.name === "home" && o();
        }),
        me(async () => {
          const d = (
            await at(
              () => import("./chunk.fingerprintjs-89673e8a.js"),
              [
                "assets/js/chunk.fingerprintjs-89673e8a.js",
                "assets/js/common.modules-cecf9b0d.js",
                "assets/css/common-e210f711.css",
              ]
            )
          ).default;
          if (!localStorage.getItem("arvId"))
            try {
              const i = await (await d.load()).get();
              localStorage.setItem("arvId", i.visitorId);
            } catch (_) {
              console.error("Error generating fingerprint:", _);
            }
          t.remember(!0), await t.getIp();
        }),
        (d, _) => {
          const i = E("NavBar"),
            f = E("svg-icon");
          return (
            h(),
            b(
              "div",
              {
                class: "login__container",
                ref_key: "loginContainerRef",
                ref: s,
              },
              [
                y(
                  i,
                  {
                    onClickLeft: p,
                    class: "main",
                    leftArrow: !0,
                    headLogo: !0,
                  },
                  { right: z(() => [y(Ct)]), _: 1 }
                ),
                e("div", Wa, [
                  e("h1", ja, r(a(k)("login")), 1),
                  e("div", Ga, [
                    e("div", null, r(d.$t("pleaseloginphoneoremail")), 1),
                    e("div", null, r(d.$t("forgetyourpassword")), 1),
                  ]),
                ]),
                e("div", Xa, [
                  e(
                    "div",
                    {
                      class: A(["tab", [c.value == "mobile" ? "active" : ""]]),
                      onClick: _[0] || (_[0] = (C) => n("mobile")),
                    },
                    [
                      y(f, { name: "phone" }),
                      e("div", null, r(d.$t("phoneN")), 1),
                    ],
                    2
                  ),
                  e(
                    "div",
                    {
                      class: A(["tab", [c.value == "email" ? "active" : ""]]),
                      onClick: _[1] || (_[1] = (C) => n("email")),
                    },
                    [
                      e("div", null, [
                        y(f, { name: "email" }),
                        D(y(f, { name: "user" }, null, 512), [
                          [G, a(t).isOpenExternalAccount],
                        ]),
                      ]),
                      e(
                        "div",
                        null,
                        r(
                          a(t).isOpenExternalAccount
                            ? d.$t("otherlogin")
                            : d.$t("emaillogin")
                        ),
                        1
                      ),
                    ],
                    2
                  ),
                ]),
                e("div", Ka, [
                  e(
                    "div",
                    {
                      class: A([
                        "tab-content",
                        [c.value == "mobile" ? "activecontent" : ""],
                      ]),
                    },
                    [y(aa, { ref: "signIn" }, null, 512)],
                    2
                  ),
                  e(
                    "div",
                    {
                      class: A([
                        "tab-content",
                        [c.value == "email" ? "activecontent" : ""],
                      ]),
                    },
                    [y(Za, { ref: "signIn" }, null, 512)],
                    2
                  ),
                ]),
              ],
              512
            )
          );
        }
      );
    },
  });
export {
  Va as E,
  bt as L,
  le as P,
  je as S,
  ys as V,
  to as _,
  We as a,
  ma as b,
  Ts as c,
  Ws as d,
  Ct as e,
  Ce as v,
};
