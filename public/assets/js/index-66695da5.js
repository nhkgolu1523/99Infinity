var Le = Object.defineProperty;
var Pe = (t, e, s) =>
  e in t
    ? Le(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (t[e] = s);
var ne = (t, e, s) => (Pe(t, typeof e != "symbol" ? e + "" : e, s), s);
import {
  R as me,
  B,
  G as F,
  aI as re,
  O as u,
  T as J,
  H as U,
  N as f,
  I as $,
  K as j,
  M as X,
  J as o,
  Q as C,
  ao as w,
  P as v,
  ap as oe,
  aB as H,
  C as M,
  E as _e,
  r as g,
  aA as le,
  ax as N,
  aC as fe,
  aD as ge,
  w as De,
  ah as Be,
  $ as z,
  au as V,
  av as P,
  z as he,
  bG as ue,
  bH as ie,
  bl as Ve,
  aT as de,
  bI as xe,
  bJ as ye,
  bK as Ne,
  a6 as Re,
  ar as q,
  az as Ue,
  V as Fe,
  bL as Oe,
  bM as Ee,
  bN as We,
  bO as je,
  ay as K,
  aq as ze,
  n as be,
  bC as He,
  p as Me,
  bP as Ge,
  bQ as Ke,
  bR as Ye,
  bS as qe,
  bT as Xe,
  bU as Je,
  bV as Qe,
  bW as Ze,
  bh as et,
  bX as tt,
  bf as st,
  bY as ot,
  bZ as at,
  b_ as nt,
  b$ as it,
  c0 as lt,
  c1 as rt,
  c2 as ct,
  bg as ut,
  c3 as dt,
  c4 as vt,
  c5 as pt,
  c6 as mt,
  c7 as _t,
  c8 as ft,
  c9 as gt,
  bk as ht,
  ca as yt,
  cb as bt,
  cc as wt,
  cd as kt,
  ce as $t,
  cf as St,
  cg as It,
  ch as Ct,
  ci as At,
  cj as Tt,
  ck as Lt,
  cl as Pt,
  cm as Dt,
  cn as Bt,
  co as Vt,
  cp as xt,
} from "./common.modules-cecf9b0d.js";
import {
  y as Q,
  b as we,
  c as Y,
  _ as R,
  G as ke,
  a1 as $e,
  g as G,
  n as ae,
  m as Se,
  cv as Nt,
  dS as Rt,
  u as Ut,
  dT as Ft,
  a3 as Ot,
  a4 as Et,
  dU as Wt,
  dV as jt,
  dW as zt,
  dX as Ht,
  be as Mt,
  ch as Gt,
  bf as Kt,
  bh as Yt,
  N as Ie,
  i as qt,
  dY as Xt,
  aG as Jt,
  dZ as Qt,
  d_ as ve,
  az as Ce,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { f as Zt } from "./page-activity-FirstRecharge-7ed1349a.js";
import { B as es } from "./page-activity-Bonus-c94a181e.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
import "./page-activity-DailySignIn-7bda4bcc.js";
window.getBuildInfo = function () {
  return {
    buildTime: "10/12/2025, 1:16:00 AM",
    branch: " commitId:df432caaa7bdd569f06114c72d7ab9c5b2b1390c",
  };
};
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const p of i.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && a(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = s(n);
    fetch(n.href, i);
  }
})();
const ts = [
    { name: "home" },
    { name: "activity" },
    { name: "turntable" },
    { name: "promotion" },
    { name: "main" },
  ],
  ss = () => {
    const t = me();
    async function e(p) {
      await t.push({ name: p });
    }
    const s = Q(),
      a = B(
        () =>
          `url(${
            s.getInvitedWheelImgUrl
              ? s.getInvitedWheelImgUrl
              : we("common", "wheel")
          })`
      ),
      n = B(() => s.getInvitedWheelTotalPrizeAmount);
    return {
      isTurntable: B(() => s.getIsOpenInvitedWheel),
      getInvitedWheelImgUrl: a,
      getInvitedWheelTotalPrizeAmount: n,
      handleClick: e,
    };
  },
  os = { key: 0, class: "tabbar__container" },
  as = ["onClick"],
  ns = { key: 0, class: "promotionBg" },
  is = { key: 1, class: "tabbar__container" },
  ls = ["onClick"],
  rs = { key: 0, class: "turntableBg" },
  cs = { key: 1, class: "turntable-text" },
  us = { key: 2 },
  ds = F({
    __name: "index",
    setup(t) {
      re((c) => ({ "6ab3f23e-getInvitedWheelImgUrl": u(a) }));
      const e = [
          { name: "home" },
          { name: "activity" },
          { name: "promotion" },
          { name: "wallet" },
          { name: "main" },
        ],
        {
          isTurntable: s,
          getInvitedWheelImgUrl: a,
          getInvitedWheelTotalPrizeAmount: n,
          handleClick: i,
        } = ss(),
        p = J();
      return (c, _) => {
        const r = U("svg-icon");
        return u(s)
          ? (f(),
            $("div", is, [
              (f(!0),
              $(
                j,
                null,
                X(
                  u(ts),
                  (m, k) => (
                    f(),
                    $(
                      "div",
                      {
                        class: oe([
                          "tabbar__container-item",
                          { active: m.name === u(p).name },
                        ]),
                        key: m + "" + k,
                        onClick: (A) => u(i)(m.name),
                      },
                      [
                        C(
                          r,
                          {
                            name:
                              m.name === "promotion" ? "promotion2" : m.name,
                          },
                          null,
                          8,
                          ["name"]
                        ),
                        m.name === "turntable"
                          ? (f(), $("div", rs))
                          : w("v-if", !0),
                        m.name === "turntable"
                          ? (f(),
                            $("span", cs, [
                              w(" {{ $t('invitedWheel') }} "),
                              H(
                                " " + v(c.$t("getMoney", [u(Y)(u(n), "", 0)])),
                                1
                              ),
                            ]))
                          : (f(), $("span", us, v(c.$t(m.name)), 1)),
                      ],
                      10,
                      ls
                    )
                  )
                ),
                128
              )),
            ]))
          : (f(),
            $("div", os, [
              (f(),
              $(
                j,
                null,
                X(e, (m, k) =>
                  o(
                    "div",
                    {
                      class: oe([
                        "tabbar__container-item",
                        { active: m.name === u(p).name },
                      ]),
                      key: m + "" + k,
                      onClick: (A) => u(i)(m.name),
                    },
                    [
                      C(r, { name: m.name }, null, 8, ["name"]),
                      m.name === "promotion"
                        ? (f(), $("div", ns))
                        : w("v-if", !0),
                      o("span", null, v(c.$t(m.name)), 1),
                    ],
                    10,
                    as
                  )
                ),
                64
              )),
            ]));
      };
    },
  });
const vs = R(ds, [
  ["__scopeId", "data-v-6ab3f23e"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/TabBar/index.vue",
  ],
]);
function ps() {
  const t = ke(),
    e = () => {
      document.visibilityState === "visible"
        ? t.setvisibility()
        : t.setvisibility(0);
    };
  M(() => {
    document.addEventListener("visibilitychange", e);
  }),
    _e(() => {
      document.removeEventListener("visibilitychange", e);
    });
}
const ms = F({
  __name: "Customer",
  setup(t) {
    re((S) => ({ "f6a705e1-currentFontFamily": b.value }));
    const e = g(!1),
      s = g({ x: 0, y: 0 }),
      a = g(0),
      n = g(0),
      i = g(0),
      p = g(0),
      c = g(0),
      _ = g(0),
      r = g();
    let m, k, A, h;
    const { getSelfCustomerServiceLink: T } = $e({ ServerType: 2 });
    function y() {
      x(m, k, A, h) || T();
    }
    M(() => {
      r.value = document.getElementById("customerId");
    });
    function l(S) {
      e.value = !0;
      var L;
      S.touches ? (L = S.touches[0]) : (L = S),
        (s.value.x = L.clientX),
        (s.value.y = L.clientY),
        (a.value = r.value.offsetLeft),
        (n.value = r.value.offsetTop),
        (m = S.clientX),
        (k = S.clientY);
    }
    function d(S) {
      if (e.value) {
        var L,
          O = document.getElementById("customerId"),
          E = O.clientWidth,
          Z = O.clientHeight,
          ee = document.documentElement.clientHeight,
          D = document.documentElement.clientWidth;
        S.touches ? (L = S.touches[0]) : (L = S),
          (i.value = L.clientX - s.value.x),
          (p.value = L.clientY - s.value.y),
          (c.value = a.value + i.value),
          (_.value = n.value + p.value),
          c.value <= 0 && (c.value = 0),
          _.value <= 0 && (_.value = 0),
          c.value >= D - E && (c.value = D - E),
          _.value >= ee - Z && (_.value = ee - Z),
          (r.value.style.left = c.value + "px"),
          (r.value.style.top = _.value + "px"),
          document.addEventListener(
            "touchmove",
            function () {
              S.preventDefault();
            },
            !1
          );
      }
      S.stopPropagation(), S.preventDefault();
    }
    function I(S) {
      (e.value = !1), (A = S.clientX), (h = S.clientY);
    }
    function x(S, L, O, E) {
      return !(Math.sqrt((S - O) * (S - O) + (L - E) * (L - E)) <= 1);
    }
    const b = g("bahnschrift");
    return (S, L) => {
      const O = le("lazy"),
        E = le("scrollhide");
      return N(
        (f(),
        $(
          "div",
          {
            class: "customer",
            onClick: y,
            onMousedown: l,
            onTouchstart: l,
            onMousemove: d,
            onTouchmove: d,
            onMouseup: I,
            id: "customerId",
          },
          [N(o("img", null, null, 512), [[O, u(G)("home", "icon_sevice")]])],
          32
        )),
        [[E]]
      );
    };
  },
});
const _s = R(ms, [
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/Customer.vue",
    ],
  ]),
  fs = "/assets/png/logo-72b611f7.png";
const gs = {},
  Ae = (t) => (fe("data-v-5eb72be7"), (t = t()), ge(), t),
  hs = { class: "start-page" },
  ys = Ae(() => o("div", { class: "dice" }, null, -1)),
  bs = Ae(() => o("img", { class: "logo", src: fs }, null, -1));
function ws(t, e) {
  return (
    f(),
    $("div", hs, [
      o("div", null, [ys, o("p", null, v(t.$t("fairAndSafe")), 1), bs]),
    ])
  );
}
const ks = R(gs, [
    ["render", ws],
    ["__scopeId", "data-v-5eb72be7"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/entrance/ar051/StartPage.vue",
    ],
  ]),
  $s = { class: "header" },
  Ss = { class: "title" },
  Is = { class: "tip" },
  Cs = { class: "container" },
  As = { class: "footer" },
  Ts = F({
    __name: "dialog",
    setup(t) {
      const e = me(),
        s = J(),
        a = g(!1),
        { closeFirstSave: n } = ae(),
        { ActiveSotre: i, getFirstRechargeList: p } = Se(),
        c = De(new Date()).format("YYYY-MM-DD"),
        _ = Be("firstSave", null),
        r = B(() => _.value == c),
        m = () => {
          r.value
            ? ((_.value = ""), localStorage.removeItem("firstSave"))
            : (_.value = c);
        },
        k = () => {
          (a.value = !1), n();
        },
        A = ["activity", "home", "main", "wallet", "promotion"];
      z(
        () => s.name,
        (l) => {
          A.includes(s.name) && h();
        }
      );
      const h = () => {
          if (_.value == c) return n();
          p().then((l) => {
            if (!l.length) {
              (a.value = !1), n();
              return;
            }
            const d = l.find((I) => I.isFinshed);
            d && (i.value.isShowFirstSaveDialog = !1), d || (a.value = !0);
          });
        },
        T = () => {
          (a.value = !1), n(!0), e.push({ name: "FirstRecharge" });
        },
        y = () => {
          (a.value = !1), n(!0), e.push({ name: "Recharge" });
        };
      return (
        M(() => {
          A.includes(s.name) && h();
        }),
        (l, d) => {
          const I = U("van-checkbox"),
            x = U("van-dialog");
          return (
            f(),
            V(
              x,
              {
                show: a.value,
                "onUpdate:show": d[1] || (d[1] = (b) => (a.value = b)),
                className: "firstSaveDialog",
              },
              {
                title: P(() => [
                  o("div", $s, [
                    o("div", Ss, v(l.$t("firstDialogH")), 1),
                    o("div", Is, v(l.$t("firstDialogTip")), 1),
                  ]),
                ]),
                footer: P(() => [
                  o("div", As, [
                    w(
                      ` <div class="active" :class="{ a: isActive}" @click="changeActive"><svg-icon name="active" />{{ $t('noTipToday') }}</div> `
                    ),
                    o(
                      "div",
                      { class: oe(["active", { a: r.value }]), onClick: m },
                      [
                        C(
                          I,
                          {
                            modelValue: r.value,
                            "onUpdate:modelValue":
                              d[0] || (d[0] = (b) => (r.value = b)),
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                        H(v(l.$t("noTipToday")), 1),
                      ],
                      2
                    ),
                    o(
                      "div",
                      { class: "btn", onClick: T },
                      v(l.$t("activity")),
                      1
                    ),
                  ]),
                ]),
                default: P(() => [
                  o("div", Cs, [
                    C(
                      Zt,
                      { list: u(i).FirstRechargeList, onGorecharge: y },
                      null,
                      8,
                      ["list"]
                    ),
                  ]),
                  o("div", { class: "close", onClick: k }),
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
const Ls = R(Ts, [
    ["__scopeId", "data-v-9cd12fb2"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Activity/FirstRecharge/dialog.vue",
    ],
  ]),
  Ps = (t) => (fe("data-v-7dee72bf"), (t = t()), ge(), t),
  Ds = { key: 0, class: "second-verification" },
  Bs = { class: "head" },
  Vs = { key: 0, class: "tip" },
  xs = { key: 1, class: "tip" },
  Ns = { key: 2, class: "errorText" },
  Rs = { class: "pin-wrapper" },
  Us = { class: "pin-input" },
  Fs = { class: "numeric-keypad" },
  Os = ["onClick"],
  Es = Ps(() => o("div", { class: "key key--placeholder" }, null, -1)),
  Ws = F({
    __name: "secondVerification",
    setup(t) {
      const { t: e } = he(),
        s = g(!0),
        a = g(!0),
        n = g([]),
        i = g(""),
        p = g(0),
        c = g(""),
        _ = g(""),
        r = g(0),
        m = async (y) => {
          const l = await ie.genSalt(10);
          return await ie.hash(y, l);
        },
        k = async (y, l) => await ie.compare(y, l),
        A = async (y) => {
          if (!(n.value.length >= 6) && (n.value.push(y), n.value.length === 6))
            if (a.value) {
              if (p.value === 0) {
                (p.value = 1), (i.value = n.value.join("")), (n.value = []);
                return;
              }
              if (p.value === 1) {
                const l = n.value.join("");
                l === i.value
                  ? ((c.value = await m(l)),
                    Rt("appLock", c.value).then(() => {
                      (n.value = []),
                        (p.value = 0),
                        (i.value = ""),
                        (s.value = !1),
                        (a.value = !1);
                    }))
                  : ((_.value = e("registerTip4")),
                    (n.value = []),
                    (p.value = 0),
                    (i.value = ""));
              }
            } else {
              const l = n.value.join("");
              (await k(l, c.value))
                ? ((s.value = !1), (n.value = []))
                : ((n.value = []),
                  (r.value += 1),
                  (_.value = e("idlockTip1", [r.value])),
                  r.value >= 3 && T());
            }
        },
        h = () => {
          n.value.pop();
        },
        T = () => {
          localStorage.clear(), sessionStorage.clear(), ue.exitApp();
        };
      return (
        M(async () => {
          let y = await Nt(["appLock"]);
          (c.value = (y == null ? void 0 : y.appLock) || ""),
            (a.value = !c.value),
            ue.addListener("appStateChange", ({ isActive: l }) => {
              l && (s.value = !0);
            });
        }),
        (y, l) =>
          s.value
            ? (f(),
              $("div", Ds, [
                o("div", Bs, [
                  H(v(y.$t("loginPSW")) + " ", 1),
                  o("div", { class: "out", onClick: T }, v(y.$t("logout")), 1),
                ]),
                a.value
                  ? (f(),
                    $(
                      "div",
                      Vs,
                      v(
                        p.value === 0
                          ? y.$t("newPSWRest")
                          : y.$t("newPSWconfirm")
                      ),
                      1
                    ))
                  : (f(), $("div", xs, v(y.$t("registerTip2")), 1)),
                _.value ? (f(), $("div", Ns, v(_.value), 1)) : w("v-if", !0),
                o("div", Rs, [
                  w(" 6 位输入框 "),
                  o("div", Us, [
                    (f(),
                    $(
                      j,
                      null,
                      X(6, (d) =>
                        o(
                          "div",
                          {
                            key: d,
                            class: oe(["pin-box", n.value.length >= d && "a"]),
                          },
                          null,
                          2
                        )
                      ),
                      64
                    )),
                  ]),
                  w(" 数字键盘 "),
                  o("div", Fs, [
                    (f(),
                    $(
                      j,
                      null,
                      X(9, (d) =>
                        o(
                          "button",
                          {
                            key: d,
                            class: "key",
                            type: "button",
                            onClick: (I) => A(String(d)),
                          },
                          v(d),
                          9,
                          Os
                        )
                      ),
                      64
                    )),
                    w(" 占位 "),
                    Es,
                    w(" 0 "),
                    o(
                      "button",
                      {
                        class: "key",
                        type: "button",
                        onClick: l[0] || (l[0] = (d) => A("0")),
                      },
                      "0"
                    ),
                    w(" 删除 "),
                    o(
                      "button",
                      { class: "key key--danger", type: "button", onClick: h },
                      "←"
                    ),
                  ]),
                ]),
              ]))
            : w("v-if", !0)
      );
    },
  });
const js = R(Ws, [
    ["__scopeId", "data-v-7dee72bf"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/secondVerification.vue",
    ],
  ]),
  zs = { class: "title" },
  Hs = { class: "container" },
  Ms = F({
    __name: "index",
    setup(t) {
      const { store: e } = ae(),
        { getRewards: s, list: a, query: n, onBonusPack: i } = Ut();
      return (
        z(
          () => e.rewardCenter,
          (p) => {
            p && s();
          }
        ),
        (p, c) => {
          const _ = U("van-dialog");
          return (
            f(),
            V(
              _,
              {
                show: u(e).rewardCenter,
                "onUpdate:show":
                  c[1] || (c[1] = (r) => (u(e).rewardCenter = r)),
                className: "reward-dialog",
                "show-confirm-button": !1,
              },
              {
                title: P(() => [o("div", zs, v(p.$t("bonusCollection")), 1)]),
                footer: P(() => [
                  o("div", {
                    class: "close",
                    onClick: c[0] || (c[0] = (r) => (u(e).rewardCenter = !1)),
                  }),
                ]),
                default: P(() => [
                  o("div", Hs, [
                    (f(!0),
                    $(
                      j,
                      null,
                      X(
                        u(a),
                        (r) => (
                          f(),
                          V(
                            es,
                            {
                              key: r.activityId,
                              item: r,
                              state: u(n).receiveState,
                              time: !1,
                              onPack: u(i),
                            },
                            null,
                            8,
                            ["item", "state", "onPack"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
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
const Gs = R(Ms, [
    ["__scopeId", "data-v-35a27ba7"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Activity/Bonus/index.vue",
    ],
  ]),
  Ks = { class: "dialog-window" },
  Ys = { class: "dialog-wrapper" },
  qs = { class: "dialog-title" },
  Xs = { class: "dialog-content" },
  Js = { class: "dialog-window" },
  Qs = { class: "dialog-wrapper" },
  Zs = { class: "dialog-title" },
  eo = { class: "dialog-tips" },
  to = { class: "dialog-content" },
  so = { class: "dialog-tips", style: { "margin-bottom": "0" } },
  oo = { class: "dialog-window" },
  ao = { class: "dialog-wrapper" },
  no = { class: "dialog-tips", style: { "margin-top": "10px" } },
  io = { class: "dialog-title", style: { "margin-top": "0" } },
  lo = { class: "dialog-tips" },
  ro = { class: "dialog-content" },
  co = { class: "dialog-window" },
  uo = { class: "dialog-wrapper" },
  vo = { class: "dialog-receive" },
  po = { class: "dialog-title" },
  mo = { class: "dialog-tips" },
  _o = { class: "dialog-content" },
  fo = { class: "dialog-18" },
  go = { class: "tip_txt" },
  ho = { class: "dialog-footer" },
  yo = { class: "dialog-18" },
  bo = { class: "dialog-footer" },
  wo = F({
    __name: "AllPageDialog",
    setup(t) {
      const { ActiveSotre: e } = Se(),
        {
          store: s,
          closeInvite: a,
          showFirstSave: n,
          onReturnAwards: i,
          onAppDownloadAwards: p,
        } = ae(),
        c = J(),
        _ = g(!1),
        r = g(!1),
        m = localStorage.getItem("is18") || void 0,
        k = Q(),
        A = ["poppg", "POP888", "POP555", "pop", "POP678"],
        h = g(Ft()),
        T = B(() => A.includes(k.projectName)),
        y = (l) => {
          l
            ? (localStorage.setItem("is18", "1"), (_.value = !1))
            : (r.value = !0);
        };
      return (
        z(
          () => T.value,
          (l) => {
            l && (_.value = !(m && m === "1"));
          },
          { immediate: !0 }
        ),
        z(
          () => c.path,
          (l) => {
            s.rewardCenter = !1;
          }
        ),
        (l, d) => {
          const I = U("van-dialog"),
            x = le("lazy");
          return (
            f(),
            $(
              j,
              null,
              [
                u(n) ? (f(), V(Ls, { key: 0 })) : w("v-if", !0),
                C(
                  I,
                  {
                    show: u(e).showReceiveDialog,
                    "onUpdate:show":
                      d[1] || (d[1] = (b) => (u(e).showReceiveDialog = b)),
                    "show-confirm-button": !1,
                    className: "noOverHidden",
                  },
                  {
                    default: P(() => [
                      o("div", Ks, [
                        o("div", Ys, [
                          N(o("img", null, null, 512), [
                            [x, u(G)("public", "succeed")],
                          ]),
                          o("div", qs, v(l.$t("awardsReceived")), 1),
                          o("div", Xs, [
                            N(o("img", null, null, 512), [
                              [x, u(G)("activity/DailyTask", "amountIcon")],
                            ]),
                            o("span", null, v(u(Y)(u(e).receiveAmount)), 1),
                          ]),
                          o(
                            "div",
                            {
                              class: "dialog-btn",
                              onClick:
                                d[0] ||
                                (d[0] = (b) => (u(e).showReceiveDialog = !1)),
                            },
                            v(l.$t("confirm")),
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
                C(
                  I,
                  {
                    show: u(s).invite,
                    "onUpdate:show": d[3] || (d[3] = (b) => (u(s).invite = b)),
                    "show-confirm-button": !1,
                    className: "noOverHidden",
                  },
                  {
                    default: P(() => [
                      o("div", Js, [
                        o("div", Qs, [
                          N(o("img", null, null, 512), [
                            [x, u(G)("public", "succeed")],
                          ]),
                          o("div", Zs, v(l.$t("inviteTips")), 1),
                          o("p", eo, v(l.$t("inviteAmount")), 1),
                          o("div", to, [
                            o("span", so, v(l.$t("commissionAmount")), 1),
                            o("span", null, v(u(Y)(u(s).rebateAmount)), 1),
                          ]),
                          o(
                            "div",
                            {
                              class: "dialog-btn",
                              onClick: d[2] || (d[2] = (b) => u(a)()),
                            },
                            v(l.$t("receive")),
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
                w("老会员回归"),
                C(
                  I,
                  {
                    show: u(s).oldUser,
                    "onUpdate:show": d[5] || (d[5] = (b) => (u(s).oldUser = b)),
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !0,
                    className: "noOverHidden",
                  },
                  {
                    default: P(() => [
                      o("div", oo, [
                        o("div", ao, [
                          N(o("img", null, null, 512), [
                            [x, u(G)("public", "succeed")],
                          ]),
                          o("p", no, v(l.$t("oldPromptTip")), 1),
                          o("div", io, v(l.$t("oldPrompt")), 1),
                          o("p", lo, v(l.$t("oldPromptGift")), 1),
                          o("div", ro, [
                            o("span", null, v(u(Y)(u(s).returnAwards)), 1),
                          ]),
                          o(
                            "div",
                            {
                              class: "dialog-btn",
                              onClick: d[4] || (d[4] = (b) => u(i)()),
                            },
                            v(l.$t("receive")),
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
                w("下载充值送彩金奖励"),
                C(
                  I,
                  {
                    show: u(s).appDownload,
                    "onUpdate:show":
                      d[7] || (d[7] = (b) => (u(s).appDownload = b)),
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !0,
                    className: "noOverHidden",
                  },
                  {
                    default: P(() => [
                      o("div", co, [
                        o("div", uo, [
                          N(o("img", null, null, 512), [
                            [x, u(G)("public", "succeed")],
                          ]),
                          o("p", vo, v(l.$t("downReceiveText1")), 1),
                          o("div", po, v(l.$t("downReceiveText2")), 1),
                          o("p", mo, v(l.$t("downReceiveText3")), 1),
                          o("div", _o, [
                            o(
                              "span",
                              null,
                              v(u(Y)(u(s).downAppRewardBonusAmount)),
                              1
                            ),
                          ]),
                          o(
                            "div",
                            {
                              class: "dialog-btn",
                              onClick: d[6] || (d[6] = (b) => u(p)()),
                            },
                            v(l.$t("receive")),
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
                C(
                  I,
                  {
                    show: _.value,
                    "onUpdate:show": d[10] || (d[10] = (b) => (_.value = b)),
                    className: "custom18dialog noOverHidden",
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !1,
                  },
                  {
                    default: P(() => [
                      o("div", fo, [
                        o("div", null, [
                          o(
                            "span",
                            null,
                            v(l.$t("loginTips", [u(k).projectName])),
                            1
                          ),
                          o("div", go, v(l.$t("brazildialog1")), 1),
                        ]),
                        o("div", ho, [
                          o(
                            "div",
                            {
                              class: "btn-cnf dialog-btn",
                              onClick: d[8] || (d[8] = (b) => y(!0)),
                            },
                            v(l.$t("brazildialog2")),
                            1
                          ),
                          o(
                            "div",
                            {
                              class: "btn-cancel dialog-btn",
                              onClick: d[9] || (d[9] = (b) => y(!1)),
                            },
                            v(l.$t("brazildialog3")),
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
                C(
                  I,
                  {
                    show: r.value,
                    "onUpdate:show": d[12] || (d[12] = (b) => (r.value = b)),
                    className: "custom18dialog noAge",
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !1,
                  },
                  {
                    default: P(() => [
                      o("div", yo, [
                        o("div", null, [
                          o("span", null, v(l.$t("brazildialog4")), 1),
                        ]),
                        o("div", bo, [
                          o(
                            "div",
                            {
                              class: "btn-cancel dialog-btn no-btn",
                              onClick: d[11] || (d[11] = (b) => (r.value = !1)),
                            },
                            v(l.$t("confirm")),
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
                C(Gs),
                h.value ? (f(), V(js, { key: 1 })) : w("v-if", !0),
              ],
              64
            )
          );
        }
      );
    },
  });
const ko = R(wo, [
    ["__scopeId", "data-v-3d4fafbb"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/AllPageDialog.vue",
    ],
  ]),
  $o = F({
    __name: "App",
    setup(t) {
      re((D) => ({ "f13b4d11-currentFontFamily": b.value }));
      const { openAll: e } = ae(),
        s = Gt(),
        a = g(!1),
        n = g(!1),
        i = J(),
        p = Ot(),
        c = Q(),
        { locale: _ } = he(),
        r = ke(),
        m = g(!1),
        k = B(() => i.meta.tabBar),
        A = "damanHome",
        h = B(() =>
          ["electronic", "blackGoldHome"].includes(A)
            ? !1
            : ![
                "/wallet/Withdraw/C2cDetail",
                "/wallet/RechargeHistory/RechargeUpiDetail",
                "/wallet/Withdraw/Upi",
                "/wallet/Withdraw/AddUpi",
                "/wallet/Withdraw/c2cCancelWithdrawal/index.vue",
                "/wallet/otherPay?type=C2C",
                "/home/game",
              ].includes(i.path)
        ),
        T = g(0),
        y = g(Math.floor(Math.random() * 1e4)),
        l = B(() => i.name + y.value),
        d = () => {
          s.on("changeKeepAliveKey", () => {
            y.value = Math.floor(Math.random() * 1e4);
          });
        };
      sessionStorage.getItem("isload")
        ? (a.value = !1)
        : ((n.value = !0),
          sessionStorage.setItem("isload", n.value.toString()),
          (a.value = !0)),
        c.getHomeSetting(),
        z(
          () => c.getAreacode,
          (D) => {
            D && p.setNumberType(D.substring(1));
          }
        ),
        z(
          () => c.getDL,
          (D) => {
            (_.value = D), r.updateLanguage(D), Kt(D), Yt(Ie.global.t);
          }
        ),
        setTimeout(() => {
          a.value = !1;
        }, 2e3);
      const I = g(!1),
        x = Et();
      x.$subscribe((D, W) => {
        (I.value = W.isLoading), x.setLoading(I.value);
      });
      const b = g("bahnschrift");
      let S = Wt(),
        L = c.getLanguage,
        O = jt(S, L);
      const E = async (D) => {
          const W = [
              { title: "vi", fontStyle: "bahnschrift" },
              { title: "else", fontStyle: "'Roboto', 'Inter', sans-serif" },
            ],
            te = W.findIndex((se) => se.title == O);
          te >= 0
            ? (b.value = W[te].fontStyle)
            : (b.value = W[W.length - 1].fontStyle);
        },
        Z = () => {
          s.on("keyChange", () => {
            T.value++;
          }),
            s.on("changeIsGame", () => {
              (m.value = !m.value), (I.value = !I.value);
            });
        },
        ee = () => {
          s.off("keyChange"),
            s.off("changeKeepAliveKey"),
            s.off("changeIsGame");
        };
      return (
        p.setNumberType(c.getAreacode.substring(1)),
        E(),
        M(() => {
          zt() && Ht(),
            e(),
            ee(),
            Z(),
            d(),
            localStorage.getItem("language") &&
              Mt(localStorage.getItem("language"));
        }),
        ps(),
        (D, W) => {
          const te = U("LoadingView");
          return (
            f(),
            $(
              j,
              null,
              [
                C(
                  te,
                  { loading: I.value, type: "loading", isGame: m.value },
                  {
                    default: P(() => [
                      (f(),
                      V(
                        u(xe),
                        { key: T.value },
                        {
                          default: P(({ Component: se }) => [
                            (f(),
                            V(
                              Ve,
                              { max: 1 },
                              [
                                u(i).meta.keepAlive
                                  ? (f(), V(de(se), { key: l.value }))
                                  : w("v-if", !0),
                              ],
                              1024
                            )),
                            u(i).meta.keepAlive
                              ? w("v-if", !0)
                              : (f(), V(de(se), { key: 0 })),
                          ]),
                          _: 1,
                        }
                      )),
                      w("online custom service"),
                      h.value ? (f(), V(_s, { key: 0 })) : w("v-if", !0),
                      k.value ? (f(), V(vs, { key: 1 })) : w("v-if", !0),
                    ]),
                    _: 1,
                  },
                  8,
                  ["loading", "isGame"]
                ),
                a.value ? (f(), V(ks, { key: 0 })) : w("v-if", !0),
                C(ko),
              ],
              64
            )
          );
        }
      );
    },
  });
const So = R($o, [
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/entrance/ar051/App.vue",
  ],
]);
const Io = {
    apiKey: "AIzaSyC6cnzV2iKuhUxcyjH2L4pvKR0Tv1iTIXg",
    authDomain: "test1-7ffe6.firebaseapp.com",
    projectId: "test1-7ffe6",
    storageBucket: "test1-7ffe6.firebasestorage.app",
    messagingSenderId: "846418415347",
    appId: "1:846418415347:web:5ab6d20e9772cb67617186",
    measurementId: "G-VM62FXQ912",
  },
  Co = ye(Io);
Ne(Co);
const Ao = {
    mounted(t, e) {
      if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
        throw new Error(
          "v-debounce: value must be an array that includes a function and a number"
        );
      let s = null;
      const a = e.value[0],
        n = e.value[1];
      (t.__handleClick__ = function () {
        s && clearTimeout(s),
          (s = setTimeout(() => {
            a();
          }, n || 500));
      }),
        t.addEventListener("click", t.__handleClick__);
    },
    beforeUnmount(t) {
      t.removeEventListener("click", t.__handleClick__);
    },
  },
  To = {
    mounted(t, e) {
      if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
        throw new Error(
          "v-throttle: value must be an array that includes a function and a number"
        );
      let s = null;
      const a = e.value[0],
        n = e.value[1];
      (t.__handleClick__ = function () {
        s && clearTimeout(s),
          t.disabled ||
            ((t.disabled = !0),
            a(),
            (s = setTimeout(() => {
              t.disabled = !1;
            }, n || 500)));
      }),
        t.addEventListener("click", t.__handleClick__);
    },
    beforeUnmount(t) {
      t.removeEventListener("click", t.__handleClick__);
    },
  },
  Lo = {
    mounted(t, e) {
      t.addEventListener("input", (s) => {
        const n = t.value.replace(/\D+/g, "");
        (t.value = n), (e.value = n);
      });
    },
  },
  Po = (t) => ({
    beforeMount: (e, s) => {
      e.classList.add("ar-lazyload");
      const { value: a } = s;
      (e.dataset.origin = a), t.observe(e);
    },
    updated(e, s) {
      (e.dataset.origin = s.value), t.observe(e);
    },
    unmounted(e, s) {
      t.unobserve(e);
    },
    mounted(e, s) {
      t.observe(e);
    },
  }),
  Do = {
    mounted(t, e) {
      let s = 0;
      const a = e.value && e.value.wait ? e.value.wait : 3e3,
        n = (i) => {
          const p = Date.now();
          p - s >= a &&
            ((s = p), e.value && e.value.handler && e.value.handler(i));
        };
      t.addEventListener("click", n),
        (t._throttleClickCleanup = () => {
          t.removeEventListener("click", n);
        });
    },
    unmounted(t) {
      t._throttleClickCleanup && t._throttleClickCleanup(),
        delete t._throttleClickCleanup;
    },
  },
  Bo = {
    mounted(t, e) {
      const { value: s } = e;
      let a = Re("permission", null);
      a.value === null ||
        !s ||
        (a && (a = JSON.parse(a.value)),
        a && a[s] === !1 && (t.style.display = "none"));
    },
  };
class Vo {
  constructor(e) {
    ne(this, "timer");
    ne(this, "el");
    this.el ||
      ((this.el = e),
      (this.el.style.transition = "all .3s"),
      this.setTransformStyle("none"));
  }
  foldUp() {
    if (this.el) {
      const e = window.innerWidth,
        s = window.innerHeight,
        a = this.el.getBoundingClientRect(),
        n = a.top < 0 ? 0 : a.top,
        i = a.left < 0 ? 0 : a.left,
        p = e - a.right < 0 ? 0 : e - a.right,
        c = s - a.bottom < 0 ? 0 : s - a.bottom,
        _ = Math.min(n, i, p, c);
      if (_ === n) {
        const r = a.height * 0.8 + n;
        this.setTransformStyle(`translate(0, -${r}px)`);
      } else if (_ === i) {
        const r = -1 * a.width * 0.8 - i;
        this.setTransformStyle(`translate(${r}px, 0)`);
      } else if (_ === p) {
        const r = a.width * 0.8 + p;
        this.setTransformStyle(`translate(${r}px, 0)`);
      } else if (_ === c) {
        const r = a.height * 0.8 + c;
        this.setTransformStyle(`translate(0, ${r}px)`);
      }
    }
  }
  expand() {
    this.el && this.setTransformStyle("none");
  }
  setTransformStyle(e) {
    if (this.el) {
      const s = xo(this.el).transform ?? "none";
      s == "none" && e != s
        ? (this.el.style.transform = e)
        : e == "none" && e != s && (this.el.style.transform = e);
    }
  }
}
function xo(t) {
  return window.getComputedStyle
    ? window.getComputedStyle(t, null)
    : document.defaultView && document.defaultView.getComputedStyle
    ? document.defaultView.getComputedStyle(t, null)
    : t.style;
}
document.addEventListener("touchmove", () => {
  var t;
  (t = window.hiddenAn) == null ||
    t.map((e) => {
      var s;
      (s = e.AnimationScroll) == null || s.foldUp(),
        e.AnimationScroll &&
          (clearTimeout(e.AnimationScroll.timer),
          (e.AnimationScroll.timer = setTimeout(() => {
            var a;
            e &&
              e.AnimationScroll &&
              (clearTimeout(e.AnimationScroll.timer),
              (a = e.AnimationScroll) == null || a.expand());
          }, 1500)));
    });
});
const No = {
    mounted(t, e) {
      (t.AnimationScroll = new Vo(t)),
        window.hiddenAn && Array.isArray(window.hiddenAn)
          ? window.hiddenAn.push(t)
          : (window.hiddenAn = [t]);
    },
    unmounted(t) {
      t.AnimationScroll &&
        (Array.isArray(window.hiddenAn) &&
          (window.hiddenAn = window.hiddenAn.filter((e) => e != t)),
        (t.AnimationScroll = void 0));
    },
  },
  pe = {
    debounce: Ao,
    throttle: To,
    onlyNum: Lo,
    throttleClick: Do,
    haspermission: Bo,
    scrollhide: No,
  },
  Ro = {
    install: function (t) {
      Object.keys(pe).forEach((s) => {
        t.directive(s, pe[s]);
      });
      const e = new IntersectionObserver(
        (s) => {
          s.forEach((a) => {
            if (a.isIntersecting) {
              const n = a.target,
                i = we("images", "avatar"),
                p = n.dataset.origin;
              (n.src = p || i),
                (n.onerror = () => {
                  e.unobserve(n);
                  let c = n.dataset.img || i;
                  if (!c || (c != null && c.includes("undefined"))) {
                    n.onerror = null;
                    return;
                  }
                  p !== c && ((n.src = c), (n.style.objectFit = "contain")),
                    (n.onerror = null);
                }),
                n.classList.remove("ar-lazyload"),
                e.unobserve(n);
            }
          });
        },
        { rootMargin: "0px 0px -50px 0px" }
      );
      t.directive("lazy", Po(e));
    },
  },
  Uo = { class: "navbar-fixed" },
  Fo = { class: "navbar__content" },
  Oo = { class: "navbar__content-center" },
  Eo = { class: "navbar__content-title" },
  Wo = F({
    __name: "NavBar",
    props: {
      title: { type: String, default: "" },
      placeholder: { type: Boolean, default: !0 },
      leftArrow: { type: Boolean, default: !1 },
      backgroundColor: { type: String, default: "#f7f8ff" },
      classN: { type: String, default: "" },
      headLogo: { type: Boolean, default: !1 },
      headerUrl: { type: String, default: "" },
    },
    emits: ["click-left", "click-right"],
    setup(t, { emit: e }) {
      const s = g(),
        a = Q(),
        n = B(() => a.getHeadLogo),
        i = () => {
          e("click-left");
        },
        p = () => {
          e("click-right");
        };
      return (
        M(() => {}),
        (c, _) => {
          const r = U("van-icon");
          return (
            f(),
            $(
              "div",
              { class: "navbar", ref_key: "navbar", ref: s },
              [
                o("div", Uo, [
                  o("div", Fo, [
                    o("div", { class: "navbar__content-left", onClick: i }, [
                      q(
                        c.$slots,
                        "left",
                        {},
                        () => [
                          t.leftArrow
                            ? (f(), V(r, { key: 0, name: "arrow-left" }))
                            : w("v-if", !0),
                        ],
                        !0
                      ),
                    ]),
                    o("div", Oo, [
                      t.headLogo
                        ? (f(),
                          $(
                            "div",
                            {
                              key: 0,
                              class: "headLogo",
                              style: Ue({
                                backgroundImage:
                                  "url(" + (t.headerUrl || n.value) + ")",
                              }),
                            },
                            null,
                            4
                          ))
                        : w("v-if", !0),
                      q(
                        c.$slots,
                        "center",
                        {},
                        () => [o("div", Eo, v(t.title), 1)],
                        !0
                      ),
                    ]),
                    o("div", { class: "navbar__content-right", onClick: p }, [
                      q(c.$slots, "right", {}, void 0, !0),
                    ]),
                  ]),
                ]),
              ],
              512
            )
          );
        }
      );
    },
  });
const jo = R(Wo, [
    ["__scopeId", "data-v-12a80a3e"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/NavBar.vue",
    ],
  ]),
  zo = () => {
    const t = Q(),
      e = B(() => t.getFirebaseConfig),
      s = g(!1),
      a = g(!1),
      n = g(!1),
      i = g(null),
      p = async () => {
        var r;
        if (!(s.value || !((r = e.value) != null && r.projectId)))
          try {
            const m = {
                apiKey: e.value.apiKey,
                authDomain: e.value.authDomain,
                projectId: e.value.projectId,
                storageBucket: e.value.storageBucket,
                messagingSenderId: e.value.messagingSenderId,
                appId: e.value.appId,
                measurementId: e.value.measurementId,
              },
              k = ye(m);
            (i.value = Oe(k)), (s.value = !0), c(), _();
          } catch {}
      },
      c = async () => {
        if (!s.value || !i.value)
          return console.warn("Firebase not init"), null;
        try {
          if (
            ((a.value = !0),
            (await Notification.requestPermission()) !== "granted")
          )
            return console.warn("not permission"), null;
          const m = await Ee(i.value, { vapidKey: e.value.keyPair });
          return localStorage.setItem("fireBaseToken", m), (n.value = !0), m;
        } catch (r) {
          return console.error("[Firebase]  Token error:", r), null;
        } finally {
          a.value = !1;
        }
      },
      _ = () => {
        if (!i.value) {
          console.warn("Firebase not init");
          return;
        }
        We(i.value, (r) => {
          const { title: m, body: k, image: A } = r.notification || {};
          navigator.serviceWorker &&
            navigator.serviceWorker.controller &&
            navigator.serviceWorker.controller.postMessage({
              type: "SHOW_NOTIFICATION",
              payload: { title: m, body: k, image: A },
            }),
            m &&
              k &&
              (je({
                type: "primary",
                message: `${m}：
${k}`,
                className: "firebase-notify-with-img",
                duration: 3e3,
              }),
              document.documentElement.style.setProperty(
                "--notify-icon",
                `url(${A})`
              ));
        });
      };
    return (
      z(
        e,
        async (r) => {
          r != null && r.projectId && (await Fe(), await p());
        },
        { immediate: !0 }
      ),
      {
        requestPermissionAndToken: c,
        listenForeground: _,
        isLoading: a,
        isReady: n,
      }
    );
  },
  Ho = { class: "ar-loading-view" },
  Mo = { class: "loading-wrapper" },
  Go = { class: "com__box" },
  Ko = ze(
    '<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>',
    1
  ),
  Yo = { class: "skeleton-wrapper" },
  qo = { class: "iosDialog" },
  Xo = { class: "title" },
  Jo = { class: "websit_info" },
  Qo = ["src"],
  Zo = { class: "link" },
  ea = { class: "text" },
  ta = { class: "text" },
  sa = { class: "text" },
  oa = ["src"],
  aa = F({
    __name: "LoadingView",
    props: {
      loading: { type: Boolean, required: !0 },
      type: { type: String, required: !0 },
      isGame: { type: Boolean, required: !0 },
    },
    setup(t) {
      const e = t,
        s = g();
      let a = null;
      const { homeState: n, downloadIcon: i } = qt(),
        p = J(),
        { getSelfCustomerServiceLink: c } = $e({ ServerType: 2 }),
        _ = window.location.href,
        r = B(() => location.origin || ""),
        m = B(() => p.name === "game"),
        k = g(!1),
        A = Xt(() =>
          be(
            () => import("./lottie_light-a184a3c0.js").then((h) => h.l),
            [
              "assets/js/lottie_light-a184a3c0.js",
              "assets/js/common.modules-cecf9b0d.js",
              "assets/css/common-e210f711.css",
            ]
          )
        );
      return (
        M(async () => {
          if (_.includes("?")) {
            const h = new URLSearchParams(_.split("?")[1]);
            h.size && h.get("goTo") === "worktraking" && c("worktraking");
          }
          "serviceWorker" in navigator &&
            navigator.serviceWorker
              .register("/firebase-messaging-sw.js")
              .then(() => {
                const { listenForeground: h } = zo();
                h();
              });
        }),
        z(
          () => e.loading,
          async () => {
            e.type === "loading" &&
              !e.isGame &&
              (!a &&
                !k.value &&
                ((k.value = !0),
                (a = (await A()).loadAnimation({
                  container: s.value,
                  renderer: "svg",
                  loop: !0,
                  autoplay: !0,
                  path: "/data.json",
                })),
                (k.value = !1)),
              e.loading ? a && a.play() : a && a.stop());
          }
        ),
        _e(() => {
          a && a.destroy(), (a = null);
        }),
        (h, T) => {
          const y = U("VanSkeleton"),
            l = U("svg-icon"),
            d = U("van-popup");
          return (
            f(),
            $(
              j,
              null,
              [
                N(
                  o(
                    "div",
                    Ho,
                    [
                      q(
                        h.$slots,
                        "template",
                        {},
                        () => [
                          N(
                            o(
                              "div",
                              Mo,
                              [
                                w(" <VanLoading /> "),
                                N(
                                  o(
                                    "div",
                                    {
                                      ref_key: "element",
                                      ref: s,
                                      class: "loading-animat",
                                    },
                                    null,
                                    512
                                  ),
                                  [[K, !h.isGame]]
                                ),
                                N(
                                  o(
                                    "div",
                                    Go,
                                    [w(" loading "), Ko, w(" 说明：组件名 ")],
                                    512
                                  ),
                                  [[K, h.isGame]]
                                ),
                                w(' <div class="animation"></div> '),
                              ],
                              512
                            ),
                            [[K, h.type === "loading"]]
                          ),
                          N(
                            o(
                              "div",
                              Yo,
                              [
                                C(y, { row: 10 }),
                                C(y, { title: "", avatar: "", row: 5 }),
                                C(y, { title: "", row: 5 }),
                              ],
                              512
                            ),
                            [[K, h.type === "skeleton"]]
                          ),
                        ],
                        !0
                      ),
                    ],
                    512
                  ),
                  [[K, h.loading && !m.value]]
                ),
                q(h.$slots, "default", {}, void 0, !0),
                C(
                  d,
                  {
                    show: u(n).iosDialog,
                    "onUpdate:show":
                      T[0] || (T[0] = (I) => (u(n).iosDialog = I)),
                    round: "",
                    closeable: "",
                    position: "bottom",
                    style: { height: "40%" },
                  },
                  {
                    default: P(() => [
                      o("div", qo, [
                        o("div", Xo, v(h.$t("pwaInstall")), 1),
                        o("div", Jo, [
                          o("img", { class: "icon", src: u(i) }, null, 8, Qo),
                          o("div", Zo, [
                            o("div", null, v(r.value.split("://")[1]), 1),
                            o("div", null, v(r.value), 1),
                          ]),
                        ]),
                        o("div", ea, [
                          H("1. " + v(h.$t("pwaText1")) + " ", 1),
                          C(l, { name: "share" }),
                        ]),
                        o("div", ta, [
                          H("2. " + v(h.$t("pwaText2")) + " ", 1),
                          o("span", null, [
                            H(v(h.$t("pwaText3")) + " ", 1),
                            C(l, { name: "add_icon" }),
                          ]),
                        ]),
                        o("div", sa, [
                          H("3. " + v(h.$t("pwaText4")) + " ", 1),
                          o("img", { class: "icon", src: u(i) }, null, 8, oa),
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
        }
      );
    },
  });
const na = R(aa, [
  ["__scopeId", "data-v-647954c7"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/LoadingView.vue",
  ],
]);
const ia = ["xlink:href"],
  la = {
    __name: "svgIcons",
    props: {
      name: { type: String, required: !0 },
      color: { type: String, default: "" },
    },
    setup(t) {
      const e = t,
        s = B(() => `#icon-${e.name}`),
        a = B(() => (e.name ? `svg-icon icon-${e.name}` : "svg-icon"));
      return (n, i) => (
        f(),
        $(
          "svg",
          He({ class: a.value }, n.$attrs, { style: { color: t.color } }),
          [o("use", { "xlink:href": s.value }, null, 8, ia)],
          16
        )
      );
    },
  },
  ra = R(la, [
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/svgIcons.vue",
    ],
  ]),
  ca = { class: "ar-searchbar__selector" },
  ua = { class: "ar-searchbar__selector-default" },
  da = F({
    __name: "ArSelect",
    props: { selectName: { type: String, default: "" } },
    emits: ["click-select"],
    setup(t, { emit: e }) {
      const s = () => {
        e("click-select");
      };
      return (a, n) => {
        const i = U("van-icon");
        return (
          f(),
          $("div", ca, [
            o("div", { onClick: s }, [
              o("span", ua, v(u(Jt)(t.selectName)), 1),
              C(i, { name: "arrow-down" }),
            ]),
          ])
        );
      };
    },
  });
const va = R(da, [
  ["__scopeId", "data-v-fa757a88"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/ArSelect.vue",
  ],
]);
Me({ duration: 3500, zIndex: 4e3 });
Qt();
const pa = (t) => {
  t.component("NavBar", jo),
    t.component("LoadingView", na),
    t.component("ArSelect", va),
    t.component("svg-icon", ra),
    t
      .use(Ge)
      .use(Ke)
      .use(Ye)
      .use(qe)
      .use(Xe)
      .use(Je)
      .use(Qe)
      .use(Ze)
      .use(et)
      .use(tt)
      .use(st)
      .use(ot)
      .use(at)
      .use(nt)
      .use(it)
      .use(lt)
      .use(rt)
      .use(ct)
      .use(ut)
      .use(dt)
      .use(vt)
      .use(pt)
      .use(mt)
      .use(_t)
      .use(ft)
      .use(gt)
      .use(ht)
      .use(yt)
      .use(bt)
      .use(wt)
      .use(kt)
      .use($t)
      .use(St)
      .use(It)
      .use(Ct)
      .use(At)
      .use(Tt)
      .use(Ie)
      .use(Ro)
      .use(Lt)
      .use(Pt)
      .use(Dt);
  let e = t.config.globalProperties,
    s = {};
  (s.TopHeight = 38),
    Object.keys(ve.refiter).forEach((a) => {
      s[a] = ve.refiter[a];
    }),
    (e.$u = s);
};
Ce.addRoute({
  path: "/",
  name: "home",
  component: () =>
    be(
      () => import("./page-home-other-6d9782ba.js").then((t) => t.d),
      [
        "assets/js/page-home-other-6d9782ba.js",
        "assets/js/common.modules-cecf9b0d.js",
        "assets/css/common-e210f711.css",
        "assets/js/page-activity-ActivityDetail-6713f46c.js",
        "assets/js/page-turntable-assets-d6267459.js",
        "assets/js/native/index-9bac92b2.js",
        "assets/js/en-5d34117c.js",
        "assets/css/page-activity-ActivityDetail-a597c4a3.css",
        "assets/js/page-home-Casino-ff36f722.js",
        "assets/css/page-home-Casino-0640108f.css",
        "assets/js/page-home-AllGames-ebd16353.js",
        "assets/css/page-home-AllGames-6031b577.css",
        "assets/css/page-home-other-e61ff531.css",
      ]
    ),
  meta: { title: "home", tabBar: !0, keepAlive: !1 },
});
const ce = Bt(So),
  Te = Vt();
pa(ce);
Te.use(xt);
ce.use(Ce).use(Te);
ce.mount("#app");
