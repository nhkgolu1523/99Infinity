import {
  r as c,
  C as M,
  X as H,
  G as j,
  T as O,
  R as q,
  aU as D,
  B as i,
  aV as y,
  E as F,
  H as I,
  I as E,
  au as J,
  av as Q,
  ap as S,
  ao as k,
  az as X,
  N as b,
  J as p,
  Q as x,
  aB as K,
  P as Y,
  O as A,
  aW as G,
} from "./common.modules-cecf9b0d.js";
import {
  G as Z,
  a1 as ee,
  a$ as C,
  b0 as ae,
  b1 as te,
  c as ne,
  _ as se,
} from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
function oe(L, u, w = { immediate: !1 }) {
  const n = c(!1);
  let e = null;
  const o = () => {
      const r = `
      let intervalId = null;
      self.onmessage = (e) => {
        const { command, interval } = e.data;

        switch (command) {
          case 'start':
            if (!intervalId) {
              intervalId = setInterval(() => postMessage('tick'), interval);
            }
            break;
          case 'pause':
            clearInterval(intervalId);
            intervalId = null;
            break;
        }
      };
    `,
        m = new Blob([r], { type: "application/javascript" });
      return new Worker(URL.createObjectURL(m));
    },
    s = () => {
      e && ((n.value = !0), e.postMessage({ command: "start", interval: u }));
    },
    d = () => {
      e && ((n.value = !1), e.postMessage({ command: "pause" }));
    },
    g = () => {
      n.value || s();
    };
  return (
    M(() => {
      (e = o()),
        (e.onmessage = (r) => {
          r.data === "tick" && L();
        }),
        w.immediate && s();
    }),
    H(() => {
      d(), e == null || e.terminate(), (e = null);
    }),
    { start: s, pause: d, resume: g, isActive: n }
  );
}
const re = { class: "game-right" },
  le = { class: "game-text" },
  ie = ["src"],
  ce = j({
    __name: "index",
    setup(L) {
      const u = O(),
        w = Z(),
        n = c(null),
        e = c(!1),
        o = q(),
        { css: s, load: d, unload: g } = D(""),
        { getSelfCustomerServiceLink: r } = ee({ ServerType: 2 }),
        m = c(0),
        N = i(() => {
          if (!C) return {};
          if (!e) return { height: `${window.innerHeight}px` };
        }),
        B = i(() => {
          const a = u.query.url;
          if (!a) return "";
          const t = ae(a || "");
          return t.startsWith("https:")
            ? t
            : `data:text/html;charset=utf-8,${encodeURIComponent(t)}`;
        }),
        v = i(() => {
          const a = u.query.vendorCode;
          return a || "";
        }),
        z = i(() => !C && !["PG"].includes(v.value));
      i(() => (e.value ? !1 : !["ARLottery"].includes(v.value)));
      function _() {
        C &&
          setTimeout(() => {
            window.matchMedia("(orientation: landscape)").matches
              ? ((s.value = `
            	    body #app { width: 100%; }
            	`),
                (e.value = !0),
                document.documentElement.classList.add("landscape"))
              : ((s.value = ""),
                (e.value = !1),
                document.documentElement.classList.remove("landscape"));
          }, 10);
      }
      y(window, "resize", _),
        y(window, "orientationchange", _),
        y(window, "message", (a) => {
          a.data === "game" && o.go(-1);
        });
      const l = c(null),
        T = () => {
          f();
        },
        f = () => {
          document.documentElement.style.setProperty(
            "--vh",
            `${window.innerHeight * 0.01}px`
          );
        },
        U = () => {
          const a = o.resolve({ name: "wallet" });
          window.open(a.href, "_blank");
        };
      async function R() {
        try {
          const a = await te();
          a.code === 0 && (m.value = a.data.balance);
        } catch {}
      }
      const V = async () => {
          w.notifyARGame(!0), o.push({ name: "home" });
        },
        { pause: $ } = oe(
          () => {
            R();
          },
          1e3 * 12,
          { immediate: !0 }
        );
      return (
        M(async () => {
          _(),
            d(),
            f(),
            window.addEventListener("resize", f),
            setTimeout(() => {
              R();
            }, 2e3);
        }),
        F(() => {
          g(),
            $(),
            window.removeEventListener("resize", f),
            document.documentElement.classList.remove("landscape"),
            l.value &&
              ((l.value.src = "about:blank"),
              l.value.remove(),
              (l.value = null));
        }),
        (a, t) => {
          const h = I("svg-icon"),
            P = I("NavBar");
          return z.value
            ? k("v-if", !0)
            : (b(),
              E(
                "div",
                {
                  key: 0,
                  class: "game-iframe",
                  ref_key: "fullscreenElement",
                  ref: n,
                  style: X({ height: N.value }),
                },
                [
                  ["ARLottery"].includes(v.value)
                    ? k("v-if", !0)
                    : (b(),
                      J(
                        P,
                        {
                          key: 0,
                          class: S({ "landscape-nav": e.value }),
                          "left-arrow": "",
                          onClickLeft: V,
                        },
                        {
                          right: Q(() => [
                            p("div", re, [
                              p("span", le, [
                                x(h, { name: "game_moneyb" }),
                                K(" " + Y(A(ne)(m.value)), 1),
                              ]),
                              p(
                                "span",
                                {
                                  class: "game-icon",
                                  onClick:
                                    t[0] || (t[0] = G((W) => U(), ["stop"])),
                                },
                                [x(h, { name: "icon_addwallet" })]
                              ),
                              p(
                                "span",
                                {
                                  class: "game-icon",
                                  onClick:
                                    t[1] || (t[1] = G((W) => A(r)(), ["stop"])),
                                },
                                [x(h, { name: "icon_customer3" })]
                              ),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"]
                      )),
                  B.value
                    ? (b(),
                      E(
                        "iframe",
                        {
                          key: 1,
                          class: S({
                            lotteryfull: ["ARLottery"].includes(v.value),
                            landscape: e.value,
                          }),
                          sandbox:
                            "allow-forms allow-orientation-lock allow-scripts allow-same-origin allow-top-navigation allow-popups",
                          allowfullscreen: "true",
                          ref_key: "iframeRef",
                          ref: l,
                          src: B.value,
                          onLoad: T,
                        },
                        null,
                        42,
                        ie
                      ))
                    : k("v-if", !0),
                ],
                4
              ));
        }
      );
    },
  });
const pe = se(ce, [
  ["__scopeId", "data-v-bc67dde2"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/home/game/index.vue",
  ],
]);
export { pe as default };
