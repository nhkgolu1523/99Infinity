import {
  G as N,
  R,
  T as H,
  z as M,
  r as u,
  B as y,
  C as V,
  H as j,
  I as p,
  Q as m,
  J as t,
  P as n,
  av as k,
  O as i,
  aB as v,
  ao as l,
  b4 as O,
  t as U,
  n as D,
  N as _,
  K as F,
  M as q,
  b0 as z,
  b1 as G,
} from "./common.modules-cecf9b0d.js";
import {
  y as b,
  L as S,
  A as J,
  cn as Q,
  g as I,
  aQ as K,
  _ as W,
} from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const X = { class: "promotionShare__container" },
  Y = { class: "promotionShare__container-tips" },
  Z = ["id"],
  x = { class: "sContent" },
  ee = { class: "head1" },
  te = ["innerHTML"],
  ne = { class: "head3" },
  oe = ["src"],
  ae = ["src"],
  se = ["innerHTML"],
  ie = ["id"],
  re = { class: "promotionShare__container-slogan" },
  le = { class: "promotionShare__container-buttons" },
  de = N({
    __name: "index",
    setup(ce) {
      const $ = R();
      H();
      const { t: C } = M(),
        h = u(0),
        g = u(""),
        f = u(!1);
      let d = u("");
      const L = (e) => {},
        P = (e) => {
          h.value = e.activeIndex;
        },
        B = () => {
          $.back();
        };
      y(() => b().getProjectLogo), y(() => b().getProjectName);
      const T = () => {
        S(d.value.toString());
      };
      async function E() {
        const e = await J(Q());
        if (e) {
          (g.value = e.data.landingPageUrl),
            (f.value = e.data.isLandingPageEnabled),
            e.data.url.startsWith("http")
              ? (d.value = e.data.url)
              : (d.value =
                  window.location.href.substring(
                    0,
                    window.location.href.lastIndexOf("/#/") + 2
                  ) +
                  "/" +
                  e.data.url.substring(
                    e.data.url.lastIndexOf("re"),
                    e.data.url.length
                  ));
          for (let o = 1; o <= 3; o++)
            O.toCanvas(document.getElementById("qr-code" + o), d.value, (s) => {
              s && console.error(s);
            });
        }
      }
      const A = async (e) => {
        var o = document.getElementById(e);
        const s = U({ message: C("loading"), duration: 0, forbidClick: !0 }),
          a = await D(
            () => import("./common.modules-cecf9b0d.js").then((r) => r.cv),
            [
              "assets/js/common.modules-cecf9b0d.js",
              "assets/css/common-e210f711.css",
            ]
          ),
          w = a.default || a;
        w &&
          w
            .toPng(o)
            .then((r) => {
              const c = document.createElement("a");
              (c.href = r),
                (c.download = "share.jpeg"),
                document.body.appendChild(c),
                c.click(),
                s.close();
            })
            .catch((r) => {
              s.close(), console.error("Error generating image:", r);
            });
      };
      return (
        V(() => {
          E();
        }),
        (e, o) => {
          const s = j("NavBar");
          return (
            _(),
            p("div", X, [
              m(
                s,
                {
                  title: e.$t("titleInvite"),
                  "left-arrow": "",
                  onClickLeft: B,
                },
                null,
                8,
                ["title"]
              ),
              t("div", Y, [t("p", null, n(e.$t("tipSwipeToPickBrochure")), 1)]),
              m(
                i(G),
                {
                  class: "my-swipe",
                  slidesPerView: "auto",
                  centeredSlides: !0,
                  "space-between": 20,
                  onSwiper: L,
                  onSlideChange: P,
                },
                {
                  default: k(() => [
                    (_(),
                    p(
                      F,
                      null,
                      q(3, (a) =>
                        m(
                          i(z),
                          { key: a },
                          {
                            default: k(() => [
                              t(
                                "div",
                                {
                                  class: "promotionShare__container-swiper",
                                  id: "share" + (a - 1),
                                },
                                [
                                  l(
                                    ` <img v-lazy="getIcons('promotion/promotionShare', 'poster')" /> `
                                  ),
                                  t("div", x, [
                                    l(
                                      '						<img class="logo" data-html2canvas-ignore :src="projectIcon" alt="" />'
                                    ),
                                    t("div", ee, [
                                      t("div", null, n(e.$t("fairAndJust")), 1),
                                      t(
                                        "div",
                                        null,
                                        n(e.$t("openAndTransparent")),
                                        1
                                      ),
                                    ]),
                                    t(
                                      "div",
                                      {
                                        class: "head2",
                                        innerHTML: e.$t("fullOddsReturnRate"),
                                      },
                                      null,
                                      8,
                                      te
                                    ),
                                    t("div", ne, [
                                      t("div", null, [
                                        t(
                                          "img",
                                          {
                                            class: "logo",
                                            src: i(I)("promotion", "bank"),
                                            alt: "",
                                          },
                                          null,
                                          8,
                                          oe
                                        ),
                                        v(
                                          " " + n(e.$t("financialSecurity")),
                                          1
                                        ),
                                      ]),
                                      t("div", null, [
                                        t(
                                          "img",
                                          {
                                            class: "logo",
                                            src: i(I)("promotion", "trucktick"),
                                            alt: "",
                                          },
                                          null,
                                          8,
                                          ae
                                        ),
                                        v(" " + n(e.$t("withdrawFast")), 1),
                                      ]),
                                    ]),
                                    t(
                                      "div",
                                      {
                                        class: "head4",
                                        innerHTML: e.$t("highestRebate", [85]),
                                      },
                                      null,
                                      8,
                                      se
                                    ),
                                  ]),
                                  t(
                                    "canvas",
                                    { id: "qr-code" + a },
                                    null,
                                    8,
                                    ie
                                  ),
                                ],
                                8,
                                Z
                              ),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      ),
                      64
                    )),
                  ]),
                  _: 1,
                }
              ),
              t("div", re, [
                t("p", null, n(e.$t("inviteFriends")), 1),
                t("p", null, [
                  v(n(e.$t("divideBonus")) + " ", 1),
                  t("span", null, n(e.$t("tip10billion")), 1),
                  v(" " + n(e.$t("commission")), 1),
                ]),
              ]),
              t("div", le, [
                i(K)()
                  ? l("v-if", !0)
                  : (_(),
                    p(
                      "div",
                      {
                        key: 0,
                        class: "share",
                        onClick: o[0] || (o[0] = (a) => A("share" + h.value)),
                      },
                      n(e.$t("shareInvitationPoster")),
                      1
                    )),
                t(
                  "div",
                  { class: "cpy", onClick: T },
                  n(e.$t("copyInvitationLink")),
                  1
                ),
                f.value
                  ? (_(),
                    p(
                      "div",
                      {
                        key: 1,
                        class: "cpy",
                        onClick: o[1] || (o[1] = (a) => i(S)(g.value)),
                      },
                      n(e.$t("clanding")),
                      1
                    ))
                  : l("v-if", !0),
                l(" <div>{{ $t('copyInvitationLink') }}</div> "),
              ]),
            ])
          );
        }
      );
    },
  });
const he = W(de, [
  ["__scopeId", "data-v-3b74cce6"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/promotion/PromotionShare/index.vue",
  ],
]);
export { he as default };
