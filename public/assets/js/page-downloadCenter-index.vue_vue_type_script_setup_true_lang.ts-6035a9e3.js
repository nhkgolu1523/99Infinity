import {
  G as I,
  R as F,
  r as w,
  C as q,
  H as A,
  I as f,
  Q as s,
  J as n,
  aB as y,
  P as m,
  O as x,
  K as b,
  M as G,
  ao as H,
  aC as M,
  aD as O,
  N as v,
  u as R,
} from "./common.modules-cecf9b0d.js";
import {
  aA as V,
  aB as k,
  aC as g,
  A as D,
  aD as T,
  G as J,
  aE as K,
  N as Q,
} from "./page-activity-ActivityDetail-6713f46c.js";
const W = (l) => (M("data-v-887c2eae"), (l = l()), O(), l),
  j = { class: "download-center" },
  z = W(() => n("div", { class: "banner" }, null, -1)),
  X = ["onClick"],
  Y = ["src"],
  Z = { class: "text" },
  ae = I({
    __name: "index",
    setup(l) {
      const { PWA: h } = V(),
        t = F(),
        S = () => {
          t.back();
        },
        i = w(""),
        r = w([]),
        c = w(null),
        d = w(null),
        _ = "ar051",
        u = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        E = () => {
          if ((window.gtag && window.gtag("event", "quick_down_click"), k())) {
            g(`${window.location.origin}/download/${_}/quick.apk`);
            return;
          }
          u
            ? t.push("/downloadCenter/ios")
            : h.value.canIUse
            ? h.value.download && h.value.download()
            : N();
        },
        N = async () => {
          const e = `${window.location.origin}/download/${_}/quick.apk`;
          try {
            if (!(await fetch(e, { method: "HEAD", cache: "no-store" })).ok)
              throw new Error("File not found");
            if (k()) {
              g(e);
              return;
            }
            const o = document.createElement("a");
            (o.href = e),
              (o.download = "quick.apk"),
              document.body.appendChild(o),
              o.click(),
              document.body.removeChild(o);
          } catch (a) {
            console.error("Download failed:", a),
              t.push("/downloadCenter/empty");
          }
        },
        U = async () => {
          let e = `${window.location.origin}/download/${_}/full.apk`;
          if (u)
            if (i.value) {
              window.open(i.value, "_blank");
              return;
            } else {
              t.push("/downloadCenter/empty");
              return;
            }
          try {
            if (!(await fetch(e, { method: "HEAD", cache: "no-store" })).ok)
              throw new Error("File not found");
            if ((window.gtag && window.gtag("event", "full_down_click"), k())) {
              g(e);
              return;
            }
            const o = document.createElement("a");
            (o.href = e),
              (o.download = "full.apk"),
              document.body.appendChild(o),
              o.click(),
              document.body.removeChild(o);
          } catch (a) {
            console.error("Download failed:", a),
              t.push("/downloadCenter/empty");
          }
        },
        L = async (e) => {
          if (
            !/iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !window.MSStream
          ) {
            if (k()) {
              g(e);
              return;
            }
            window.open(e, "_blank");
            return;
          } else {
            R(Q.global.t("downloadFileiOSError"));
            return;
          }
        },
        $ = () => {
          c.value &&
            d.value &&
            (c.value.classList.toggle("open"),
            c.value.classList.contains("open")
              ? (d.value.className = "app-list open")
              : (d.value.className = "app-list"));
        },
        P = async () => {
          const e = await D(T());
          e.data.iosUrl ? (i.value = e.data.iosUrl) : (i.value = "");
        },
        B = async () => {
          if (!J().getToken) {
            r.value = [];
            return;
          }
          const o = await D(K());
          o.data && Array.isArray(o.data) && (r.value = o.data);
        };
      return (
        q(() => {
          B(), u && P();
        }),
        (e, a) => {
          const o = A("NavBar"),
            p = A("svg-icon");
          return (
            v(),
            f(
              b,
              null,
              [
                s(
                  o,
                  { title: e.$t("e1"), "left-arrow": "", onClickLeft: S },
                  null,
                  8,
                  ["title"]
                ),
                n("div", j, [
                  z,
                  n("div", { class: "btn1", onClick: E }, [
                    s(p, { name: "ac_fast" }),
                    y(m(e.$t("e2")), 1),
                  ]),
                  n("div", { class: "btn2", onClick: U }, [
                    s(p, { name: "ac_download" }),
                    y(m(e.$t("e3")), 1),
                  ]),
                  !x(u) && r.value.length
                    ? (v(),
                      f(
                        b,
                        { key: 0 },
                        [
                          n(
                            "div",
                            {
                              class: "btn3 open",
                              ref_key: "btn3",
                              ref: c,
                              onClick: $,
                            },
                            [
                              s(p, { name: "ac_private" }),
                              y(" " + m(e.$t("e8")) + " ", 1),
                              s(p, { class: "down", name: "ac_down" }),
                            ],
                            512
                          ),
                          n(
                            "div",
                            {
                              class: "app-list open",
                              ref_key: "appListDiv",
                              ref: d,
                            },
                            [
                              (v(!0),
                              f(
                                b,
                                null,
                                G(
                                  r.value,
                                  (C) => (
                                    v(),
                                    f(
                                      "div",
                                      {
                                        class: "app-item",
                                        onClick: (ee) => L(C.downAppURL),
                                      },
                                      [
                                        n(
                                          "img",
                                          { class: "icon", src: C.imgUrl },
                                          null,
                                          8,
                                          Y
                                        ),
                                        n("div", Z, m(C.appName), 1),
                                      ],
                                      8,
                                      X
                                    )
                                  )
                                ),
                                256
                              )),
                            ],
                            512
                          ),
                        ],
                        64
                      ))
                    : H("v-if", !0),
                ]),
              ],
              64
            )
          );
        }
      );
    },
  });
export { ae as _ };
