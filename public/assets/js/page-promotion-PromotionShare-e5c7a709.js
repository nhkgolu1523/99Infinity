import {
    G as R,
    R as N,
    T as H,
    z as M,
    r as c,
    B as y,
    C as V,
    H as O,
    I as u,
    Q as _,
    J as t,
    P as n,
    av as k,
    O as i,
    aB as p,
    ao as m,
    b4 as U,
    q as j,
    n as q,
    N as v,
    K as D,
    M as F,
    b0 as G,
    b1 as J
} from "./common.modules-afd11eec.js";
import {
    y as b,
    L as S,
    A as z,
    cL as K,
    g as $,
    au as Q,
    _ as W
} from "./page-activity-ActivityDetail-2fb211b4.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-58bee5fe.js";
import "./en-818c8e10.js";
const X = {
        class: "promotionShare__container"
    },
    Y = {
        class: "promotionShare__container-tips"
    },
    Z = ["id"],
    x = {
        class: "sContent"
    },
    ee = {
        class: "head1"
    },
    te = ["innerHTML"],
    ne = {
        class: "head3"
    },
    oe = ["src"],
    ae = ["src"],
    se = ["innerHTML"],
    ie = ["id"],
    re = {
        class: "promotionShare__container-slogan"
    },
    le = {
        class: "promotionShare__container-buttons"
    },
    de = R({
        __name: "index",
        setup(ce) {
            const I = N();
            H();
            const {
                t: C
            } = M(), h = c(0), g = c(""), f = c(!1);
            let l = c("");
            const L = e => {},
                P = e => {
                    h.value = e.activeIndex, console.log(e.activeIndex)
                },
                B = () => {
                    I.back()
                };
            y(() => b().getProjectLogo), y(() => b().getProjectName);
            const T = () => {
                S(l.value.toString())
            };
            async function A() {
                const e = await z(K());
                if (console.log("res: ", e.data.url, window.location.origin), e) {
                    g.value = e.data.landingPageUrl, f.value = e.data.isLandingPageEnabled, e.data.url.startsWith("http") ? l.value = e.data.url : l.value = window.location.href.substring(0, window.location.href.lastIndexOf("/#/") + 2) + "/" + e.data.url.substring(e.data.url.lastIndexOf("re"), e.data.url.length);
                    for (let o = 1; o <= 3; o++) U.toCanvas(document.getElementById("qr-code" + o), l.value, s => {
                        s && console.error(s)
                    })
                }
            }
            const E = async e => {
                var o = document.getElementById(e);
                const s = j({
                        message: C("loading"),
                        duration: 0,
                        forbidClick: !0
                    }),
                    a = await q(() =>
                        import ("./common.modules-afd11eec.js").then(r => r.cw), ["assets/js/common.modules-afd11eec.js", "assets/css/common-7beda9ad.css"]),
                    w = a.default || a;
                w && w.toPng(o).then(r => {
                    const d = document.createElement("a");
                    d.href = r, d.download = "share.jpeg", document.body.appendChild(d), d.click(), s.close()
                }).catch(r => {
                    s.close(), console.error("Error generating image:", r)
                })
            };
            return V(() => {
                A()
            }), (e, o) => {
                const s = O("NavBar");
                return v(), u("div", X, [_(s, {
                    title: e.$t("titleInvite"),
                    "left-arrow": "",
                    onClickLeft: B
                }, null, 8, ["title"]), t("div", Y, [t("p", null, n(e.$t("tipSwipeToPickBrochure")), 1)]), _(i(J), {
                    class: "my-swipe",
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    "space-between": 20,
                    onSwiper: L,
                    onSlideChange: P
                }, {
                    default: k(() => [(v(), u(D, null, F(3, a => _(i(G), {
                        key: a
                    }, {
                        default: k(() => [t("div", {
                            class: "promotionShare__container-swiper",
                            id: "share" + (a - 1)
                        }, [t("div", x, [t("div", ee, [t("div", null, n(e.$t("fairAndJust")), 1), t("div", null, n(e.$t("openAndTransparent")), 1)]), t("div", {
                            class: "head2",
                            innerHTML: e.$t("fullOddsReturnRate")
                        }, null, 8, te), t("div", ne, [t("div", null, [t("img", {
                            class: "logo",
                            src: i($)("promotion", "bank"),
                            alt: ""
                        }, null, 8, oe), p(" " + n(e.$t("financialSecurity")), 1)]), t("div", null, [t("img", {
                            class: "logo",
                            src: i($)("promotion", "trucktick"),
                            alt: ""
                        }, null, 8, ae), p(" " + n(e.$t("withdrawFast")), 1)])]), t("div", {
                            class: "head4",
                            innerHTML: e.$t("highestRebate", [85])
                        }, null, 8, se)]), t("canvas", {
                            id: "qr-code" + a
                        }, null, 8, ie)], 8, Z)]),
                        _: 2
                    }, 1024)), 64))]),
                    _: 1
                }), t("div", re, [t("p", null, n(e.$t("inviteFriends")), 1), t("p", null, [p(n(e.$t("divideBonus")) + " ", 1), t("span", null, n(e.$t("tip10billion")), 1), p(" " + n(e.$t("commission")), 1)])]), t("div", le, [i(Q)() ? m("v-if", !0) : (v(), u("div", {
                    key: 0,
                    class: "share",
                    onClick: o[0] || (o[0] = a => E("share" + h.value))
                }, n(e.$t("shareInvitationPoster")), 1)), t("div", {
                    class: "cpy",
                    onClick: T
                }, n(e.$t("copyInvitationLink")), 1), f.value ? (v(), u("div", {
                    key: 1,
                    class: "cpy",
                    onClick: o[1] || (o[1] = a => i(S)(g.value))
                }, n(e.$t("clanding")), 1)) : m("v-if", !0), m(" <div>{{ $t('copyInvitationLink') }}</div> ")])])
            }
        }
    });
const he = W(de, [
    ["__scopeId", "data-v-3b74cce6"],
    ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/promotion/PromotionShare/index.vue"]
]);
export {
    he as
    default
};