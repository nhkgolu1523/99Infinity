import {
    r as v,
    z as ee,
    R as Y,
    B as E,
    G as A,
    H as L,
    N as f,
    I as S,
    K as Se,
    M as Qe,
    ap as M,
    O as o,
    J as e,
    P as r,
    Q as b,
    av as z,
    Z as Ve,
    aA as ye,
    ax as D,
    ao as U,
    aF as ve,
    aB as B,
    u as q,
    X as et,
    au as J,
    az as Q,
    ay as G,
    V as j,
    aC as me,
    aD as ge,
    $ as $e,
    C as _e,
    F as be,
    b3 as tt,
    a_ as Be,
    E as Ne,
    aK as st,
    n as ot
} from "./common.modules-afd11eec.js";
import {
    G as De,
    y as Ue,
    bz as Le,
    bA as at,
    g as pe,
    bB as nt,
    bC as rt,
    bD as lt,
    bE as it,
    N as fe,
    b as Ce,
    _ as H,
    a1 as ie,
    a3 as te,
    J as ut,
    A as re,
    bF as ct,
    bG as qe,
    bH as Ae,
    a4 as Me,
    bI as ze,
    bJ as He,
    bK as dt,
    bL as pt,
    n as vt
} from "./page-activity-ActivityDetail-2fb211b4.js";
import {
    D as Oe
} from "./page-activity-Championship-438cbfd5.js";
import {
    D as mt
} from "./page-activity-PointMall-faa675ff.js";
const Ee = v(!1);

function Ze() {
    const {
        locale: m
    } = ee(), $ = De(), i = Y();
    async function t(p, a) {
        nt(p), m.value = p, $.updateLanguage(p), await rt(p), lt().upUserLanguage(), it(fe.global.t), localStorage.setItem("needUpd", "1"), a === 1 ? u() : Ee.value = !1
    }
    const u = () => {
            i.back()
        },
        s = E(() => {
            let p = 0;
            const a = Ue().getLanguage,
                c = [];
            if (a) {
                const g = a == null ? void 0 : a.replace("th", "tha").split("|");
                g == null || g.forEach(l => {
                    Le.forEach(_ => {
                        (l.toLowerCase().indexOf(_.key.toLowerCase()) !== -1 || _.key.toLowerCase().indexOf(l.toLowerCase()) !== -1) && (c.push(_), p++)
                    })
                })
            }
            return $.getLanguage || $.updateLanguage(at()), p == 0 ? Le : c
        });
    return {
        onClick: t,
        languagesList: s,
        getIcons: pe,
        locale: m,
        goBack: u,
        getLangName: p => {
            const a = s.value.find(c => c.key === p);
            return (a == null ? void 0 : a.key.toLocaleUpperCase()) || ""
        },
        show: Ee
    }
}
const gt = ["onClick"],
    _t = {
        class: "item-title"
    },
    ft = ["src"],
    ht = {
        key: 0
    },
    wt = {
        key: 1
    },
    yt = A({
        __name: "index",
        props: {
            type: {
                type: Number,
                default: 1
            }
        },
        setup(m) {
            const {
                onClick: $,
                languagesList: i,
                locale: t
            } = Ze();
            return (u, s) => {
                const n = L("van-radio"),
                    p = L("van-radio-group");
                return f(), S("div", {
                    class: M(m.type === 2 ? "list info" : "list")
                }, [(f(!0), S(Se, null, Qe(o(i), (a, c) => (f(), S("div", {
                    class: M(["item ar-1px-b", a.key == o(t) ? "checked" : ""]),
                    key: c,
                    onClick: g => o($)(a.key, m.type)
                }, [e("div", _t, [e("img", {
                    src: o(Ce)("languages", a.key)
                }, null, 8, ft), m.type === 2 ? (f(), S("span", ht, r(a.key.toLocaleUpperCase()), 1)) : (f(), S("span", wt, r(a.name), 1))]), b(p, {
                    modelValue: o(t),
                    "onUpdate:modelValue": s[0] || (s[0] = g => Ve(t) ? t.value = g : null)
                }, {
                    default: z(() => [b(n, {
                        name: a.key
                    }, null, 8, ["name"])]),
                    _: 2
                }, 1032, ["modelValue"])], 10, gt))), 128))], 2)
            }
        }
    });
const bt = H(yt, [
        ["__scopeId", "data-v-29e221c4"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Main/LanguageList/index.vue"]
    ]),
    kt = {
        class: "img"
    },
    St = {
        class: "languageName"
    },
    $t = A({
        __name: "LangPopup",
        setup(m) {
            const {
                getLangName: $,
                locale: i,
                show: t
            } = Ze(), u = Ue(), s = E(() => u.getLoginChangeLanguage == "1");
            return (n, p) => {
                const a = L("van-popup"),
                    c = ye("lazy");
                return f(), S("div", null, [s.value ? (f(), S("div", {
                    key: 0,
                    class: "right",
                    onClick: p[0] || (p[0] = g => t.value = !0)
                }, [D(e("img", kt, null, 512), [
                    [c, o(Ce)("languages", o(i))]
                ]), e("span", St, r(o($)(o(i))), 1)])) : U("v-if", !0), b(a, {
                    show: o(t),
                    "onUpdate:show": p[1] || (p[1] = g => Ve(t) ? t.value = g : null),
                    class: "popup",
                    position: "bottom",
                    teleport: "body"
                }, {
                    default: z(() => [b(bt, {
                        type: 2
                    })]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Ct = H($t, [
        ["__scopeId", "data-v-8610bd15"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/LangPopup.vue"]
    ]),
    It = {
        class: "popups"
    },
    Pt = {
        class: "popup-content"
    },
    Tt = {
        class: "tit"
    },
    Ft = {
        class: "con"
    },
    Rt = {
        class: "info"
    },
    xt = {
        class: "txt"
    },
    Lt = {
        class: "txt"
    },
    Et = {
        class: "box"
    },
    Vt = ["placeholder"],
    Bt = {
        class: "lab"
    },
    Nt = {
        class: "popup-foot"
    },
    Dt = A({
        __name: "index",
        props: {
            showPopup: {
                type: Boolean,
                default: v(!1)
            }
        },
        emits: ["update:showPopup", "onConfirm", "onBack"],
        setup(m, {
            emit: $
        }) {
            const i = m,
                t = Y(),
                {
                    t: u
                } = ee(),
                s = E({
                    get() {
                        return i.showPopup || !1
                    },
                    set(g) {
                        $("update:showPopup", g)
                    }
                }),
                n = v(""),
                p = () => {
                    if (!n.value) return q(u("googleKey"));
                    $("onConfirm", n.value.toString())
                },
                a = () => {
                    n.value = "", $("onBack")
                };

            function c() {
                t.push({
                    name: "CustomerService"
                })
            }
            return (g, l) => {
                const _ = L("van-icon"),
                    C = L("van-popup"),
                    h = ye("throttle-click"),
                    w = ye("lazy");
                return f(), S("div", It, [b(C, {
                    show: s.value,
                    "onUpdate:show": l[1] || (l[1] = I => s.value = I),
                    position: "center",
                    round: "",
                    class: "popup",
                    "close-on-click-overlay": !1
                }, {
                    default: z(() => [e("div", Pt, [e("div", Tt, r(o(u)("googleVerification")), 1), e("div", Ft, [e("div", Rt, [e("p", xt, r(o(u)("googleTip5")), 1), e("p", Lt, r(o(u)("googleTip6")), 1)]), e("div", Et, [D(e("input", {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": l[0] || (l[0] = I => n.value = I),
                        maxlength: "6",
                        oninput: "value=value.replace(/\\D/g,'')",
                        placeholder: o(u)("PgoogleVerification")
                    }, null, 8, Vt), [
                        [ve, n.value]
                    ]), e("p", Bt, [b(_, {
                        class: "icon",
                        name: "warning-o"
                    }), B(r(o(u)("PVerificationCode")) + " ", 1), e("span", {
                        onClick: c
                    }, r(o(u)("contactServicer")), 1)])]), e("div", Nt, [D((f(), S("div", null, [B(r(o(u)("confirm")), 1)])), [
                        [h, {
                            handler: p,
                            wait: 1e3
                        }]
                    ]), e("div", {
                        onClick: a
                    }, r(o(u)("withdrawDialogDesc6")), 1)])]), D(e("img", {
                        class: "close",
                        onClick: a
                    }, null, 512), [
                        [w, o(Ce)("main", "close")]
                    ])])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const We = H(Dt, [
        ["__scopeId", "data-v-96e240c3"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Main/VerifyPopup/index.vue"]
    ]),
    se = m => (me("data-v-869b9ee0"), m = m(), ge(), m),
    Ut = ["src"],
    qt = ["src"],
    At = {
        key: 1,
        class: "captcha_message"
    },
    Mt = {
        class: "captcha_message__icon"
    },
    zt = {
        key: 0,
        height: "28",
        viewBox: "0 0 28 28",
        width: "28",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Ht = se(() => e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5"
    }, [e("path", {
        d: "M22.776 4.073A13.2 13.2 0 0 0 14 .75C6.682.75.75 6.682.75 14S6.682 27.25 14 27.25 27.25 21.318 27.25 14c0-.284-.009-.566-.027-.845"
    }), e("path", {
        d: "M7 12.5l7 7 13-13"
    })], -1)),
    Ot = [Ht],
    Zt = {
        key: 1,
        height: "28",
        viewBox: "0 0 28 28",
        width: "28",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Wt = se(() => e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-width": "1.5"
    }, [e("circle", {
        cx: "14",
        cy: "14",
        r: "13.25"
    }), e("path", {
        d: "M8.75 8.75l10.5 10.5M19.25 8.75l-10.5 10.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    jt = [Wt],
    Gt = {
        class: "captcha_message__text"
    },
    Kt = {
        key: 2,
        class: "captcha_message loadding"
    },
    Xt = se(() => e("div", {
        class: "captcha_message__icon captcha_message__icon--loadding"
    }, null, -1)),
    Jt = {
        class: "captcha_message__text"
    },
    Yt = {
        key: 3,
        class: "captcha_message"
    },
    Qt = se(() => e("div", {
        class: "captcha_message__icon captcha_message__icon--loadding"
    }, null, -1)),
    es = se(() => e("div", {
        class: "captcha_message__text"
    }, null, -1)),
    ts = [Qt, es],
    ss = se(() => e("path", {
        d: "M500.864 545.728a47.744 47.744 0 0 0 6.72-48.896 24.704 24.704 0 0 0-4.48-8.384L240.256 193.088a34.24 34.24 0 0 0-28.608-17.408 34.24 34.24 0 0 0-25.856 12.864 46.592 46.592 0 0 0 0 59.52l238.08 264.512-238.08 264.512a46.592 46.592 0 0 0-1.088 59.52 32 32 0 0 0 50.56 0l265.6-290.88z",
        "p-id": "820"
    }, null, -1)),
    os = se(() => e("path", {
        d: "M523.84 248.064l236.992 264.512-238.08 264.512a46.592 46.592 0 0 0 0 59.52 32 32 0 0 0 50.56 0l265.6-292.608a47.744 47.744 0 0 0 6.72-48.832 24.704 24.704 0 0 0-4.48-8.448L578.304 191.36a34.24 34.24 0 0 0-55.552-2.816 46.592 46.592 0 0 0 1.088 59.52z",
        "p-id": "821"
    }, null, -1)),
    as = [ss, os],
    ns = {
        key: 0,
        class: "captcha__actions"
    },
    rs = ["fill"],
    ls = se(() => e("path", {
        d: "M10,4 C12.0559549,4 13.9131832,5.04358655 15.0015086,6.68322231 L15,5.5 C15,5.22385763 15.2238576,5 15.5,5 C15.7761424,5 16,5.22385763 16,5.5 L16,8.5 C16,8.77614237 15.7761424,9 15.5,9 L12.5,9 C12.2238576,9 12,8.77614237 12,8.5 C12,8.22385763 12.2238576,8 12.5,8 L14.5842317,8.00000341 C13.7999308,6.20218044 12.0143541,5 10,5 C7.23857625,5 5,7.23857625 5,10 C5,12.7614237 7.23857625,15 10,15 C11.749756,15 13.3431487,14.0944653 14.2500463,12.6352662 C14.3958113,12.4007302 14.7041063,12.328767 14.9386423,12.4745321 C15.1731784,12.6202971 15.2451415,12.9285921 15.0993765,13.1631281 C14.0118542,14.9129524 12.0990688,16 10,16 C6.6862915,16 4,13.3137085 4,10 C4,6.6862915 6.6862915,4 10,4 Z",
        "fill-rule": "nonzero"
    }, null, -1)),
    is = [ls],
    us = A({
        __name: "SlideCaptcha",
        props: {
            width: {
                type: Number,
                default: 340
            },
            height: {
                type: Number,
                default: 212
            },
            barHeight: {
                type: Number,
                default: 40
            },
            handlerIconWidth: {
                type: Number,
                default: 16
            },
            handlerIconHeigth: {
                type: Number,
                default: 16
            },
            background: {
                type: String,
                default: "#eee"
            },
            circle: {
                type: Boolean,
                default: !1
            },
            radius: {
                type: String,
                default: "4px"
            },
            text: {
                type: String,
                default: ""
            },
            progressBarBg: {
                type: String,
                default: "#76c61d"
            },
            successTip: {
                type: String,
                default: "Verification passed, over 80% of users."
            },
            failTip: {
                type: String,
                default: "Verification failed, drag the slider to correctly merge the floating image."
            },
            showRefresh: {
                type: Boolean,
                default: !1
            },
            refreshColor: {
                type: String,
                default: "#505050"
            }
        },
        emits: ["finish", "refresh"],
        setup(m, {
            expose: $,
            emit: i
        }) {
            const t = m,
                u = v(!1),
                s = v(!1),
                n = v(0),
                p = v(0),
                a = v(!1),
                c = v(!1),
                g = v(!1),
                l = v([]),
                _ = v(void 0),
                C = v(!1),
                h = v(!1),
                w = v(!1),
                I = v(""),
                P = v(""),
                V = v(!1),
                k = E(() => ({
                    width: t.width + "px",
                    height: t.height + "px",
                    position: "relative",
                    overflow: "hidden"
                })),
                x = E(() => ({
                    width: t.width + "px"
                })),
                R = E(() => ({
                    width: t.width + "px",
                    height: t.barHeight + "px",
                    lineHeight: t.barHeight + "px",
                    background: t.background,
                    borderRadius: t.circle ? t.barHeight / 2 + "px" : t.radius
                })),
                W = E(() => ({
                    background: t.progressBarBg,
                    height: t.barHeight + "px",
                    borderRadius: t.circle ? t.barHeight / 2 + "px 0 0 " + t.barHeight / 2 + "px" : t.radius
                })),
                ue = E(() => ({
                    height: t.barHeight + "px",
                    width: t.width + "px"
                })),
                ce = E(() => ({
                    width: t.barHeight + "px",
                    height: t.barHeight - 2 + "px"
                })),
                ae = E(() => ({
                    width: t.handlerIconWidth + "px",
                    height: t.handlerIconHeigth + "px"
                })),
                oe = E(() => t.refreshColor),
                y = E(() => ({
                    color: t.refreshColor
                })),
                T = v(),
                Z = v(),
                K = v(),
                d = v(),
                F = v(),
                ne = () => {
                    u.value = !0, j(() => {
                        Fe(), Xe()
                    }), w.value = !0
                },
                de = (N, X) => {
                    w.value = !1, I.value = N, P.value = X
                },
                O = () => {
                    h.value = !0
                },
                Ge = N => {
                    N.value = N, h.value = !1, C.value = !0
                },
                Fe = () => {
                    n.value = 0, p.value = 0, l.value = [], s.value = !1, g.value = !1, w.value = !1, h.value = !1, C.value = !1, V.value = !1, Z && (Z.value.style.width = 0), d && (d.value.style.left = 0), F && (F.value.style.left = 0)
                },
                Re = () => {
                    window.removeEventListener("touchmove", he), window.removeEventListener("touchend", we), window.removeEventListener("mousemove", he), window.removeEventListener("mouseup", we)
                },
                xe = N => {
                    !V.value && I.value && P.value && !g.value && (window.addEventListener("touchmove", he), window.addEventListener("touchend", we), window.addEventListener("mousemove", he), window.addEventListener("mouseup", we), s.value = !0, _.value = new Date, n.value = N.pageX || N.touches[0].pageX, p.value = N.pageY || N.touches[0].pageY)
                },
                he = N => {
                    if (s.value && !V.value && I.value && P.value && !g.value) {
                        const X = (N.pageX || N.touches[0].pageX) - n.value,
                            ke = (N.pageY || N.touches[0].pageY) - p.value;
                        F.value.style.left = X + "px", Z.value.style.width = X + t.barHeight / 2 + "px", d.value.style.left = X + "px", l.value.push({
                            x: Math.round(X),
                            y: Math.round(ke),
                            t: new Date().getTime() - _.value.getTime()
                        })
                    }
                },
                we = () => {
                    s.value && !V.value && I.value && P.value && !g.value && (s.value = !1, g.value = !0, Re(), i("finish", {
                        backgroundImageWidth: K.value.offsetWidth,
                        backgroundImageHeight: K.value.offsetHeight,
                        sliderImageWidth: d.value.offsetWidth,
                        sliderImageHeight: d.value.offsetHeight,
                        startTime: _.value,
                        endTime: new Date,
                        tracks: l.value
                    }))
                },
                Ke = N => {
                    u.value = N
                },
                Xe = () => {
                    T.value.style.setProperty("--textColor", "#333"), T.value.style.setProperty("--width", Math.floor(t.width / 2) + "px"), T.value.style.setProperty("--pwidth", -Math.floor(t.width / 2) + "px")
                },
                Je = () => {
                    Fe(), i("refresh")
                };
            return $({
                startRequestVerify: O,
                endRequestVerify: Ge,
                startRequestGenerate: ne,
                endRequestGenerate: de,
                setShowHiden: Ke
            }), et(() => {
                Re()
            }), (N, X) => {
                const ke = L("van-popup");
                return f(), J(ke, {
                    show: u.value,
                    "onUpdate:show": X[0] || (X[0] = Ye => u.value = Ye),
                    teleport: "body"
                }, {
                    default: z(() => [e("div", {
                        class: "captcha",
                        style: Q(x.value)
                    }, [e("div", {
                        class: "captcha__main",
                        style: Q(k.value)
                    }, [I.value ? (f(), S("img", {
                        key: 0,
                        ref_key: "backgroundRef",
                        ref: K,
                        alt: "background",
                        class: "captcha_background",
                        src: I.value
                    }, null, 8, Ut)) : U("v-if", !0), D(e("img", {
                        ref_key: "sliderRef",
                        ref: d,
                        alt: "slider",
                        class: M(["captcha_slider", {
                            goFirst: a.value,
                            goKeep: c.value
                        }]),
                        src: P.value
                    }, null, 10, qt), [
                        [G, P.value]
                    ]), C.value ? (f(), S("div", At, [e("div", Mt, [V.value ? (f(), S("svg", zt, Ot)) : (f(), S("svg", Zt, jt))]), e("div", Gt, r(V.value ? m.successTip : m.failTip), 1)])) : U("v-if", !0), w.value ? (f(), S("div", Kt, [Xt, e("div", Jt, r(N.$t("loading")) + "...", 1)])) : U("v-if", !0), h.value ? (f(), S("div", Yt, ts)) : U("v-if", !0)], 4), e("div", {
                        ref_key: "dragVerifyRef",
                        ref: T,
                        class: "captcha__bar",
                        style: Q(R.value)
                    }, [e("div", {
                        ref_key: "progressBarRef",
                        ref: Z,
                        class: M(["captcha_progress_bar", {
                            goFirst2: a.value
                        }]),
                        style: Q(W.value)
                    }, null, 6), e("div", {
                        class: "captcha_progress_bar__text",
                        style: Q(ue.value)
                    }, r(N.$t("slideCaptchaText")), 5), e("div", {
                        ref_key: "handlerRef",
                        ref: F,
                        class: M(["captcha_handler", {
                            goFirst: a.value
                        }]),
                        style: Q(ce.value),
                        onMousedown: xe,
                        onTouchstart: xe
                    }, [(f(), S("svg", {
                        "p-id": "819",
                        style: Q(ae.value),
                        version: "1.1",
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, as, 4))], 38)], 4), m.showRefresh ? (f(), S("div", ns, [e("a", {
                        class: "captcha__action",
                        style: Q(y.value),
                        onClick: Je
                    }, [(f(), S("svg", {
                        fill: oe.value,
                        height: "20px",
                        version: "1.1",
                        viewBox: "0 0 20 20",
                        width: "20px",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, is, 8, rs)), U(' <span class="captcha__action__text">刷新</span> ')], 4)])) : U("v-if", !0)], 4)]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const je = H(us, [
        ["__scopeId", "data-v-869b9ee0"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/SlideCaptcha.vue"]
    ]),
    cs = {
        class: "verifyInput__container"
    },
    ds = {
        class: "verifyInput__container-label"
    },
    ps = {
        key: 0
    },
    vs = {
        key: 1
    },
    ms = {
        class: "verifyInput__container-input"
    },
    gs = ["placeholder"],
    _s = {
        key: 0
    },
    fs = {
        key: 1
    },
    hs = {
        class: "verifyInput__container-tip"
    },
    ws = A({
        __name: "VerifyInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            typeP: {
                type: String,
                required: !1
            },
            isShowVerifyT: {
                type: Boolean,
                required: !1
            },
            placeholder: {
                type: String,
                required: !1,
                default: fe.global.t("registerTip1")
            },
            sendFunc: {
                type: Function,
                required: !1
            },
            number: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !1,
                default: ""
            },
            showVerify: {
                type: Boolean,
                required: !1,
                default: !0
            },
            email: {
                type: String,
                required: !1
            },
            loginType: {
                type: String,
                required: !1
            },
            isTip: {
                type: Boolean,
                required: !1,
                default: !0
            }
        },
        emits: ["update:value"],
        setup(m, {
            emit: $
        }) {
            const i = m,
                {
                    t
                } = ee(),
                {
                    getSelfCustomerServiceLink: u
                } = ie({
                    ServerType: 2
                }),
                s = te(),
                p = De().getUserInfo,
                a = Y(),
                c = E({
                    get() {
                        return i.value || ""
                    },
                    set(w) {
                        $("update:value", w)
                    }
                }),
                g = v(!0);
            async function l() {
                var I;
                if (g.value && (g.value = !i.isTip), s.countDown > 0) return;
                if (a.currentRoute.value.name === "rpwd" || a.currentRoute.value.name === "register" || a.currentRoute.value.name === "SettingC-UpdatePhone" && !i.isShowVerifyT) {
                    if (!((I = i.number) != null && I.trim())) return q({
                        message: t("telUndetected"),
                        wordBreak: "break-word"
                    });
                    const P = (i.number.trim() + i.numberType.trim()).length;
                    if (P < 10 || P > 14) return q({
                        message: t("wrongTel"),
                        wordBreak: "break-word"
                    })
                } else if (!localStorage.getItem("numberType") && localStorage.getItem("number")) return q({
                    message: t("telUndetected"),
                    wordBreak: "break-word"
                });
                !i.sendFunc || await i.sendFunc() === -1 || s.sendCode()
            }
            const _ = E(() => {
                    var w;
                    return i.number ? i.numberType + i.number : ((w = p == null ? void 0 : p.verifyMethods) == null ? void 0 : w.mobile) || localStorage.getItem("numberType") + localStorage.getItem("number")
                }),
                C = w => {
                    const I = w.target;
                    I.value = I.value.replace(/\s+/g, ""), I.value = I.value.replace(/[^\d]/g, "")
                };

            function h() {
                u()
            }
            return (w, I) => {
                const P = L("svg-icon"),
                    V = L("van-icon");
                return D((f(), S("div", cs, [D(e("div", ds, [b(P, {
                    name: "verify"
                }), w.typeP === "updatePhone" || w.typeP === "lock" ? (f(), S("span", ps, r(w.$t("sendVerifyCodeTo")) + " " + r(o(ut)(_.value)), 1)) : (f(), S("span", vs, r(w.$t("verifyCode")), 1))], 512), [
                    [G, !(w.isShowVerifyT === !1 && w.typeP === "updatePhone")]
                ]), e("div", ms, [D(e("input", {
                    type: "text",
                    "onUpdate:modelValue": I[0] || (I[0] = k => c.value = k),
                    placeholder: w.$t("phEnterVerificationCode"),
                    maxlength: "6",
                    onInput: C
                }, null, 40, gs), [
                    [ve, c.value]
                ]), e("button", {
                    onClick: l,
                    class: M({
                        inActive: o(s).countDown > 0
                    })
                }, [o(s).countDown === 0 ? (f(), S("span", _s, r(w.$t("send")), 1)) : (f(), S("span", fs, r(o(s).countDown) + "S ", 1))], 2)]), D(e("div", hs, [b(V, {
                    name: "warning-o"
                }), e("span", null, r(w.$t("codeUnreceived")) + "?", 1), e("span", {
                    onClick: I[1] || (I[1] = k => h())
                }, r(w.$t("contactServicer")), 1)], 512), [
                    [G, !g.value]
                ])], 512)), [
                    [G, w.showVerify]
                ])
            }
        }
    });
const ys = H(ws, [
        ["__scopeId", "data-v-c17848a2"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/VerifyInput.vue"]
    ]),
    bs = {
        class: "passwordInput__container"
    },
    ks = {
        class: "passwordInput__container-label"
    },
    Ss = {
        class: "passwordInput__container-input"
    },
    $s = ["type", "placeholder", "maxlength", "value"],
    Cs = ["src"],
    Is = A({
        __name: "PasswordInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            maxlength: {
                type: Number,
                required: !1,
                default: 15
            },
            label: {
                type: String,
                required: !0
            }
        },
        emits: ["update:value"],
        setup(m, {
            emit: $
        }) {
            const i = m,
                t = fe.global.t,
                u = v(),
                s = v(""),
                n = v(!1);
            $e(s, k => {
                $("update:value", k)
            }, {
                flush: "post"
            });
            const p = k => {
                    if (n.value) return;
                    let x = g();
                    const R = k.target;
                    R.value = R.value.replace(/\s+/g, "");
                    const W = /[\u4e00-\u9fa5]/g;
                    R.value = R.value.replace(W, ""), l(x, R.value), _(R.value), C(x)
                },
                a = v(!1),
                c = E(() => a.value ? pe("main", "eyeVisible") : pe("main", "eyeInvisible")),
                g = () => {
                    var k = {
                        start: 0,
                        end: 0
                    };
                    return k.start = u.value.selectionStart, k.end = u.value.selectionEnd, k
                },
                l = (k, x) => {
                    if (x.length > 1 && !x.includes("•")) {
                        s.value = x;
                        return
                    }
                    let R = x.split("•").join("");
                    if (R) {
                        let W = s.value.length - (x.length - k.end);
                        s.value = s.value.slice(0, k.end - R.length) + R + s.value.slice(W)
                    } else s.value = s.value.slice(0, k.end) + s.value.slice(k.end + s.value.length - x.length)
                },
                _ = k => {
                    if (a.value) return;
                    if (!k) {
                        u.value.value = "";
                        return
                    }
                    let x = "";
                    for (let R = 0; R < k.length; R++) x += "•";
                    u.value.value = x
                },
                C = k => {
                    u.value.setSelectionRange(k.start, k.end)
                },
                h = () => {
                    n.value = !0
                },
                w = k => {
                    n.value && (n.value = !1, p(k))
                },
                I = () => {
                    a.value = !a.value, a.value ? u.value.value = s.value : _(s.value)
                };
            _e(() => {
                s.value = i.value || "", _(s.value)
            });
            const P = localStorage.getItem("language"),
                V = E(() => {
                    let k, x = i.label;
                    switch (P) {
                        case "vi":
                            switch (x) {
                                case "Đặt mật khẩu":
                                    k = t("setLoginPSW");
                                    break;
                                case "Xác nhận mật khẩu":
                                    k = t("enterPswConfirmation");
                                    break;
                                default:
                                    k = t("phEnter") + x;
                                    break
                            }
                            break;
                        default:
                            k = x
                    }
                    return k
                });
            return (k, x) => {
                const R = L("svg-icon");
                return f(), S("div", bs, [e("div", ks, [b(R, {
                    name: "editPswIcon",
                    class: "passwordInput__container-label__icon"
                }), e("span", null, r(k.label), 1)]), e("div", Ss, [e("input", {
                    type: a.value ? "text" : "password",
                    placeholder: V.value,
                    maxlength: k.maxlength,
                    onInput: p,
                    onCompositionstart: h,
                    onCompositionend: w,
                    ref_key: "inputPwd",
                    ref: u,
                    value: k.value,
                    autocomplete: "new-password"
                }, null, 40, $s), e("img", {
                    src: c.value,
                    class: "eye",
                    onClick: I
                }, null, 8, Cs)])])
            }
        }
    });
const le = H(Is, [
        ["__scopeId", "data-v-ea5b66c8"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/PasswordInput.vue"]
    ]),
    Ie = {
        moneyup: /^(?!0+$)(?!0*\.0*$)\d{1,11}(\.\d{1,2})?$/,
        redNum: /^([1-9]\d{0,2}|1000)$/,
        requiredNum: /^.{0,20}$/,
        passReg2: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
        passReg3: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
        outmoneypwd: /^\d{6}$/,
        name: /^[^~`!@#$%^&*+-/=/_()|<\{\}\[\],.:'"//\?\\/>》《]{1,30}$/,
        tuiName: /^[a-zA-Z\s\u4e00-\u9fa50-9][a-zA-Z0-9\s\u4e00-\u9fa5]{1,23}$/,
        yaoma: /^[A-Za-z0-9|A-Za-z|0-9]{6}$/,
        httpCheck: /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
        password: /^[A-Za-z0-9~`!@#$%^&*()_+-='",;.?/|]{6,12}$/,
        account: /^(?![a-zA-Z]+$)[a-zA-Z0-9|0-9]{7,11}$/,
        email: /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.]{0,1})[A-Za-zd]{1,5}$/,
        email1: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        length1: /^.{6,30}$/,
        phone: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
        phone1: /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
        moneys2: /^(-?)\d{1,9}(\.\d{1,2})?$/,
        moneys21: /^\d{1,4}(\.\d{1,2})?$/,
        ip: /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/,
        int: /^[1-9]\d*$/,
        verifyname: /[^a-zA-Z\s+$]/g,
        inputrule: /^[0-9,|]+$/
    },
    Ps = {
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
        inputtip: "validateDesc22"
    },
    Pe = m => (me("data-v-ab583a3a"), m = m(), ge(), m),
    Ts = {
        class: "RpwdPopup"
    },
    Fs = {
        class: "RpwdPopup-head"
    },
    Rs = {
        class: "RpwdPopup-topTip"
    },
    xs = Pe(() => e("br", null, null, -1)),
    Ls = {
        class: "RpwdPopup-tip"
    },
    Es = Pe(() => e("div", {
        class: "tipbg"
    }, null, -1)),
    Vs = {
        class: "RpwdPopup-errorTip"
    },
    Bs = {
        key: 0
    },
    Ns = {
        class: "errorTip"
    },
    Ds = Pe(() => e("br", null, null, -1)),
    Us = {
        class: "RpwdPopup-foot"
    },
    qs = A({
        __name: "RpwdPopup",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            },
            phoneNumber: {
                type: String,
                default: ""
            },
            phoneNumberType: {
                type: String,
                default: ""
            },
            passwordErrorMaxNum: {
                default: 10
            }
        },
        emits: ["update:show"],
        setup(m, {
            emit: $
        }) {
            const i = m,
                {
                    t
                } = ee();
            Y();
            const {
                getSelfCustomerServiceLink: u
            } = ie({
                ServerType: 2
            }), s = v(!1), n = te(), p = v(!1), a = v({
                smsvcode: "",
                password: "",
                rePassword: ""
            }), c = E({
                get() {
                    return i.show || !1
                },
                set(C) {
                    C || $("update:show", !1)
                }
            }), g = async () => {
                if (!i.phoneNumber) return;
                await re(ct({
                    phone: i.phoneNumberType + i.phoneNumber,
                    codeType: qe.resetPassword
                })) ? be(t("sendSuccess")) : setTimeout(() => {
                    n.setCountDown(0)
                }, 500)
            }, l = async () => {
                if (!a.value.smsvcode.trim()) return q({
                    message: t("registerTip1"),
                    wordBreak: "break-word"
                });
                if (a.value.smsvcode.trim().length != 6) return q({
                    message: t("verifyCode6Digits"),
                    wordBreak: "break-word"
                });
                if (!a.value.password.trim()) return q({
                    message: t("registerTip2"),
                    wordBreak: "break-word"
                });
                if (!Ie.passReg3.test(a.value.password)) {
                    s.value = !0;
                    return
                }
                if (!a.value.rePassword.trim()) return q({
                    message: t("registerTip3"),
                    wordBreak: "break-word"
                });
                if (a.value.password !== a.value.rePassword) {
                    p.value = !0;
                    return
                } else p.value = !1;
                const {
                    password: C,
                    smsvcode: h
                } = a.value;
                let w = {
                    username: i.phoneNumberType + i.phoneNumber,
                    password: C,
                    type: "mobile",
                    smsvcode: h
                };
                await re(Ae(w)) && (be(t("rpdsucceed")), localStorage.clear(), $("update:show", !1))
            }, _ = () => {
                u()
            };
            return (C, h) => {
                const w = L("svg-icon"),
                    I = L("van-popup");
                return f(), S(Se, null, [U(" 规则弹层 begin"), b(I, {
                    show: c.value,
                    "onUpdate:show": h[4] || (h[4] = P => c.value = P),
                    "close-on-click-overlay": !1,
                    position: "bottom",
                    round: ""
                }, {
                    default: z(() => [e("div", Ts, [e("div", Fs, r(o(t)("idlockTitle")), 1), e("div", Rs, [B(r(o(t)("idlockTip1", [m.passwordErrorMaxNum])), 1), xs, B(r(o(t)("idlockTip3")), 1)]), b(ys, {
                        value: a.value.smsvcode,
                        "onUpdate:value": h[0] || (h[0] = P => a.value.smsvcode = P),
                        number: m.phoneNumber,
                        sendFunc: g,
                        numberType: m.phoneNumberType,
                        "type-p": "lock"
                    }, null, 8, ["value", "number", "numberType"]), b(le, {
                        value: a.value.password,
                        "onUpdate:value": h[1] || (h[1] = P => a.value.password = P),
                        label: o(t)("newPSWRest")
                    }, null, 8, ["value", "label"]), D(e("div", Ls, [Es, e("span", null, r(o(t)("pswRule")), 1)], 512), [
                        [G, s.value]
                    ]), b(le, {
                        value: a.value.rePassword,
                        "onUpdate:value": h[2] || (h[2] = P => a.value.rePassword = P),
                        label: o(t)("newPSWconfirm")
                    }, null, 8, ["value", "label"]), e("div", Vs, [p.value ? (f(), S("span", Bs, r(o(t)("unmatchedInput")), 1)) : U("v-if", !0)]), e("div", {
                        class: "gotuserver van-hairline--surround",
                        onClick: _
                    }, [b(w, {
                        name: "customer1"
                    }), B(r(o(t)("contactServicer")), 1)]), e("div", Ns, [B(r(o(t)("wrongTel")), 1), Ds, B(r(o(t)("rpwdPopupTip")), 1)]), e("div", Us, [e("button", {
                        class: "dialogBtn",
                        onClick: l
                    }, r(o(t)("confirm")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: h[3] || (h[3] = P => $("update:show", !1))
                    }, r(o(t)("cancel")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const As = H(qs, [
        ["__scopeId", "data-v-ab583a3a"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/RpwdPopup.vue"]
    ]),
    Ms = {
        class: "phoneInput__container"
    },
    zs = {
        class: "phoneInput__container-label"
    },
    Hs = {
        class: "phoneInput__container-input"
    },
    Os = ["placeholder"],
    Zs = A({
        __name: "PhoneInput",
        props: {
            type: {
                type: String,
                required: !0
            },
            showValidate: {
                type: Boolean,
                required: !0
            },
            typeP: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !0
            },
            number: {
                type: String,
                required: !0
            }
        },
        emits: ["update:show-validate", "changeT", "changeN"],
        setup(m, {
            expose: $,
            emit: i
        }) {
            const t = m,
                u = v(),
                s = E({
                    get() {
                        return t.number
                    },
                    set(l) {
                        i("changeN", l.replace(/[^0-9]/g, ""))
                    }
                });

            function n(l) {
                l.target.value.length < 6 && i("update:show-validate", !0)
            }

            function p(l) {
                const _ = l.target,
                    C = /[\u4e00-\u9fa5]/g;
                _.value = _.value.replace(C, ""), _.value.length > 0 && i("update:show-validate", !1)
            }
            const a = l => {
                i("changeT", l)
            };
            tt(u, () => {
                u.value.close()
            }), _e(() => {});
            const c = v();

            function g() {
                j(() => {
                    c.value.focus()
                })
            }
            return $({
                getFocus: g
            }), (l, _) => {
                const C = L("svg-icon"),
                    h = ye("only-num");
                return f(), S("div", Ms, [e("div", zs, [b(C, {
                    name: "phone"
                }), e("span", null, r(l.$t("phone")), 1)]), e("div", Hs, [b(mt, {
                    typeValue: t.numberType,
                    ref_key: "dropDown",
                    ref: u,
                    onChangeT: a
                }, null, 8, ["typeValue"]), D(e("input", {
                    type: "text",
                    name: "userNumber",
                    "onUpdate:modelValue": _[0] || (_[0] = w => s.value = w),
                    placeholder: l.$t("plsEnterTel"),
                    onBlur: n,
                    onInput: p,
                    ref_key: "number",
                    ref: c
                }, null, 40, Os), [
                    [h],
                    [ve, s.value]
                ])])])
            }
        }
    });
const Ws = H(Zs, [
        ["__scopeId", "data-v-50aa8bb0"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/PhoneInput.vue"]
    ]),
    js = m => (me("data-v-33f88764"), m = m(), ge(), m),
    Gs = {
        class: "signIn__container"
    },
    Ks = {
        class: "signIn__container-button"
    },
    Xs = {
        class: "signIn_footer"
    },
    Js = {
        class: "font24"
    },
    Ys = {
        class: "font24"
    },
    Qs = {
        class: "idlockTip"
    },
    eo = js(() => e("br", null, null, -1)),
    to = ["src"],
    so = A({
        __name: "SignIn",
        setup(m, {
            expose: $
        }) {
            const i = Y(),
                {
                    t
                } = ee(),
                u = v("login"),
                {
                    setLoading: s
                } = Me(),
                n = te(),
                p = v(!1),
                {
                    getSelfCustomerServiceLink: a,
                    isCenterServer: c
                } = ie({
                    ServerType: 2
                }),
                g = v(!1),
                l = v(10),
                _ = v();
            let C = !1;
            async function h() {
                if (!C) {
                    if (C = !0, ze() && await new Promise(d => setTimeout(d, 1e3)), C = !1, !n.userForm.number || n.userForm.number.toString().trim() === "") {
                        g.value = !0;
                        return
                    }
                    if (!n.userForm.password || n.userForm.password.toString().trim() === "") return q({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    n.userForm.numberType = n.getUserForm.numberType.replace("+", ""), n.userForm.remember && n.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", n.userForm.password) : localStorage.setItem("remember", ""), n.isOpenCaptcha && !k.value ? oe() : (s(!0), await n.signIn(n.userForm).then(d => {
                        n.userForm.vCode = "", console.log("res", d)
                    }).catch(d => {
                        var F;
                        console.log("登陆错误1", d), k.value = !1, d.code === 1 && (l.value = ((F = d.data) == null ? void 0 : F.passwordErrorMaxNum) || 10), d.msgCode === 33 ? j(() => T.value = !0) : y(d.msgCode || 0)
                    }).finally(() => {
                        R.value.setShowHiden(!1), s(!1)
                    }))
                }
            }
            const w = () => {
                i.push({
                    name: "register"
                })
            };

            function I() {
                i.push({
                    name: "rpwd"
                }), n.setCurrentView("ResetPassword")
            }

            function P() {
                a()
            }
            const V = d => {
                    n.getUserForm.numberType = d
                },
                k = v(!1),
                x = d => {
                    n.getUserForm.number = d
                },
                R = v(),
                W = v(""),
                ue = () => {
                    p.value = !1, a()
                };
            Be(window, "keydown", d => {
                d.key == "Enter" && h()
            }), _e(async () => {
                var F;
                const d = n.getUserForm;
                localStorage.getItem("remember") != null && ((F = localStorage.getItem("remember")) == null ? void 0 : F.toString().trim()) != "" ? d.password = localStorage.getItem("remember") : d.password = "", n.setUserForm({ ...d
                })
            });
            let ce = $e(() => n.userForm.number, d => {
                n.setCountDown(0)
            }, {
                flush: "post"
            });
            const ae = async d => {
                    j(async () => {
                        R.value.startRequestVerify(), s(!0), n.signIn(Object.assign(n.userForm, {
                            captchaId: W.value,
                            track: d
                        })).then(F => {
                            console.log("res", F)
                        }).catch(F => {
                            var ne;
                            console.log("登陆错误", F), F.code === 1 && (l.value = ((ne = F.data) == null ? void 0 : ne.passwordErrorMaxNum) || 10), F.msgCode === 33 ? (j(() => T.value = !0), k.value = !0) : y(F.msgCode || 0)
                        }).finally(() => {
                            R.value.setShowHiden(!1), s(!1)
                        })
                    })
                },
                oe = () => {
                    j(async () => {
                        R.value.startRequestGenerate();
                        const d = await re(He());
                        d ? (W.value = d.data.captchaId, R.value.endRequestGenerate(d.data.backgroundImage, d.data.sliderImage)) : R.value.endRequestGenerate(null, null)
                    })
                },
                y = d => {
                    d == 122 && (p.value = !0)
                };
            Ne(() => {
                ce(), n.getUserForm.remember || (n.getUserForm.password = "")
            });
            const T = v(!1),
                Z = d => {
                    n.userForm.vCode = d, h()
                },
                K = () => {
                    T.value = !1, n.userForm.vCode = ""
                };
            return $({
                showPhoneValidate: g
            }), (d, F) => {
                const ne = L("van-checkbox"),
                    de = L("svg-icon");
                return f(), S("div", Gs, [b(Ws, {
                    "show-validate": g.value,
                    "onUpdate:showValidate": F[0] || (F[0] = O => g.value = O),
                    ref_key: "phone",
                    ref: _,
                    type: u.value,
                    "number-type": o(n).getUserForm.numberType,
                    number: o(n).userForm.number,
                    onChangeT: V,
                    onChangeN: x
                }, null, 8, ["show-validate", "type", "number-type", "number"]), b(le, {
                    value: o(n).userForm.password,
                    "onUpdate:value": F[1] || (F[1] = O => o(n).userForm.password = O),
                    label: d.$t("password"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), e("div", null, [b(ne, {
                    modelValue: o(n).userForm.rememberpwd,
                    "onUpdate:modelValue": F[2] || (F[2] = O => o(n).userForm.rememberpwd = O)
                }, {
                    default: z(() => [B(r(d.$t("rememberPSW")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), e("div", Ks, [e("button", {
                    class: M([o(n).userForm.number != "" ? "active" : ""]),
                    onClick: h
                }, r(d.$t("login")), 3), e("button", {
                    class: "register",
                    onClick: w
                }, r(d.$t("register")), 1)]), e("div", Xs, [o(n).isOpenForgetPasswordSMSState || o(n).isOpenForgetPasswordEmailState ? (f(), S("div", {
                    key: 0,
                    class: "forgetcon",
                    onClick: I
                }, [b(de, {
                    name: "clock_b",
                    class: "forgetbg"
                }), e("div", Js, r(d.$t("forgetPSW")), 1)])) : U("v-if", !0), e("div", {
                    class: "customcon",
                    onClick: P
                }, [o(c) ? (f(), J(de, {
                    key: 0,
                    name: "serverTicket1",
                    class: "forgetbg"
                })) : (f(), J(de, {
                    key: 1,
                    name: "customer_b",
                    class: "forgetbg"
                })), e("div", Ys, r(o(c) ? o(t)("serverTicket") : d.$t("customerServiceTitle")), 1)])]), b(je, {
                    ref_key: "captchaRef",
                    ref: R,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    text: o(t)("slideCaptchaText"),
                    onFinish: ae,
                    onRefresh: oe
                }, null, 8, ["text"]), U("10锁定密码弹窗"), o(n).isOpenForgetPasswordSMSState && p.value ? (f(), J(As, {
                    key: 0,
                    show: p.value,
                    "onUpdate:show": F[3] || (F[3] = O => p.value = O),
                    phoneNumber: o(n).getUserForm.number,
                    phoneNumberType: o(n).getUserForm.numberType,
                    passwordErrorMaxNum: l.value
                }, null, 8, ["show", "phoneNumber", "phoneNumberType", "passwordErrorMaxNum"])) : (f(), J(Oe, {
                    key: 1,
                    show: p.value,
                    "onUpdate:show": F[5] || (F[5] = O => p.value = O),
                    "show-cancel-btn": !0,
                    title: d.$t("idlockTitle")
                }, {
                    content: z(() => [e("div", Qs, [B(r(d.$t("idlockTip1", [l.value])) + " ", 1), eo, B(r(d.$t("idlockTip2")), 1)])]),
                    footer: z(() => [e("button", {
                        class: "dialogBtn",
                        onClick: F[4] || (F[4] = O => p.value = !1)
                    }, r(d.$t("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: ue
                    }, [e("img", {
                        src: o(pe)("main", "iconservr")
                    }, null, 8, to), B(" " + r(d.$t("contactServicer")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])), U(" 验证弹窗 "), b(We, {
                    showPopup: T.value,
                    onOnConfirm: Z,
                    onOnBack: K
                }, null, 8, ["showPopup"])])
            }
        }
    });
const oo = H(so, [
        ["__scopeId", "data-v-33f88764"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/SignIn.vue"]
    ]),
    ao = {
        class: "verifyInput__container"
    },
    no = {
        class: "verifyInput__container-label"
    },
    ro = {
        key: 0
    },
    lo = {
        key: 1
    },
    io = {
        class: "verifyInput__container-input"
    },
    uo = ["placeholder"],
    co = {
        key: 0
    },
    po = {
        key: 1
    },
    vo = {
        class: "verifyInput__container-tip"
    },
    mo = A({
        __name: "VerifyEmailInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            typeP: {
                type: String,
                required: !1
            },
            isShowVerifyT: {
                type: Boolean,
                required: !1
            },
            placeholder: {
                type: String,
                required: !1,
                default: fe.global.t("registerTip6")
            },
            sendFunc: {
                type: Function,
                required: !1
            },
            number: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !1
            },
            showVerify: {
                type: Boolean,
                required: !1,
                default: !0
            },
            email: {
                type: String,
                required: !1,
                default: ""
            },
            loginType: {
                type: String,
                required: !1
            }
        },
        emits: ["update:value"],
        setup(m, {
            emit: $
        }) {
            const i = m;
            ee();
            const {
                getSelfCustomerServiceLink: t
            } = ie({
                ServerType: 2
            }), u = te();
            Y();
            const s = E({
                    get() {
                        return i.value || ""
                    },
                    set(l) {
                        $("update:value", l)
                    }
                }),
                n = v(!0);
            async function p() {
                n.value && (n.value = !1), !(u.countEmailDown > 0) && (u.sendEmailCode(), i.sendFunc && i.sendFunc())
            }
            const a = E(() => localStorage.getItem("email") || i.email),
                c = l => {
                    const _ = l.target;
                    _.value = _.value.replace(/\s+/g, ""), _.value = _.value.replace(/[^\d]/g, "")
                };

            function g() {
                t()
            }
            return (l, _) => {
                const C = L("svg-icon"),
                    h = L("van-icon");
                return D((f(), S("div", ao, [D(e("div", no, [b(C, {
                    name: "safeIcon",
                    class: "verifyInput__container-label__icon"
                }), l.typeP === "updateEmail" || l.typeP === "lock" ? (f(), S("span", ro, r(l.$t("sendVerifyCodeTo")) + " " + r(o(dt)(a.value)), 1)) : (f(), S("span", lo, r(l.$t("verifyCode")), 1))], 512), [
                    [G, !(l.isShowVerifyT === !1 && l.typeP === "updateEmail")]
                ]), e("div", io, [D(e("input", {
                    type: "text",
                    "onUpdate:modelValue": _[0] || (_[0] = w => s.value = w),
                    placeholder: l.$t("phEnterVerificationCode"),
                    maxlength: "6",
                    onInput: c
                }, null, 40, uo), [
                    [ve, s.value]
                ]), e("button", {
                    onClick: p,
                    class: M({
                        inActive: o(u).countEmailDown > 0
                    })
                }, [o(u).countEmailDown === 0 ? (f(), S("span", co, r(l.$t("send")), 1)) : (f(), S("span", po, r(o(u).countEmailDown) + "S ", 1))], 2)]), D(e("div", vo, [b(h, {
                    name: "warning-o"
                }), e("span", null, r(l.$t("codeUnreceived")) + "?", 1), e("span", {
                    onClick: _[1] || (_[1] = w => g())
                }, r(l.$t("contactServicer")), 1)], 512), [
                    [G, !n.value]
                ])], 512)), [
                    [G, l.showVerify]
                ])
            }
        }
    });
const go = H(mo, [
        ["__scopeId", "data-v-484b25b1"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/VerifyEmailInput.vue"]
    ]),
    Te = m => (me("data-v-95ce4137"), m = m(), ge(), m),
    _o = {
        class: "RpwdPopup"
    },
    fo = {
        class: "RpwdPopup-head"
    },
    ho = {
        class: "RpwdPopup-topTip"
    },
    wo = Te(() => e("br", null, null, -1)),
    yo = {
        class: "RpwdPopup-tip"
    },
    bo = Te(() => e("div", {
        class: "tipbg"
    }, null, -1)),
    ko = {
        class: "RpwdPopup-errorTip"
    },
    So = {
        key: 0
    },
    $o = {
        class: "errorTip"
    },
    Co = Te(() => e("br", null, null, -1)),
    Io = {
        class: "RpwdPopup-foot"
    },
    Po = A({
        __name: "EmailRpwdPopup",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            },
            email: {
                type: String,
                default: ""
            },
            passwordErrorMaxNum: {
                default: 10
            }
        },
        emits: ["update:show"],
        setup(m, {
            emit: $
        }) {
            const i = m,
                {
                    t
                } = ee();
            Y();
            const u = v(!1),
                {
                    getSelfCustomerServiceLink: s
                } = ie({
                    ServerType: 2
                }),
                n = te(),
                p = v(!1),
                a = v({
                    smsvcode: "",
                    password: "",
                    rePassword: ""
                }),
                c = E({
                    get() {
                        return i.show || !1
                    },
                    set(C) {
                        C || $("update:show", !1)
                    }
                }),
                g = async () => {
                    if (!i.email) return;
                    await re(pt({
                        email: i.email,
                        emailType: qe.resetPassword
                    })) ? be(t("sendSuccess")) : setTimeout(() => {
                        n.setCountEmailDown(0)
                    }, 500)
                },
                l = async () => {
                    if (!a.value.smsvcode.trim()) return q({
                        message: t("registerTip6"),
                        wordBreak: "break-word"
                    });
                    if (a.value.smsvcode.trim().length != 6) return q({
                        message: t("verifyCode6Digits"),
                        wordBreak: "break-word"
                    });
                    if (!a.value.password.trim()) return q({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    if (!Ie.passReg3.test(a.value.password)) {
                        u.value = !0;
                        return
                    }
                    if (!a.value.rePassword.trim()) return q({
                        message: t("registerTip3"),
                        wordBreak: "break-word"
                    });
                    if (a.value.password !== a.value.rePassword) {
                        p.value = !0;
                        return
                    } else p.value = !1;
                    const {
                        password: C,
                        smsvcode: h
                    } = a.value;
                    let w = {
                        username: i.email,
                        type: "email",
                        password: C,
                        smsvcode: h
                    };
                    await re(Ae(w)) && (be(t("rpdsucceed")), localStorage.clear(), $("update:show", !1))
                },
                _ = () => {
                    s()
                };
            return (C, h) => {
                const w = L("svg-icon"),
                    I = L("van-popup");
                return f(), S(Se, null, [U(" 规则弹层 begin"), b(I, {
                    show: c.value,
                    "onUpdate:show": h[4] || (h[4] = P => c.value = P),
                    "close-on-click-overlay": !1,
                    position: "bottom",
                    round: ""
                }, {
                    default: z(() => [e("div", _o, [e("div", fo, r(o(t)("idlockTitle")), 1), e("div", ho, [B(r(o(t)("idlockTip1", [m.passwordErrorMaxNum])), 1), wo, B(r(o(t)("idlockTip3")), 1)]), b(go, {
                        value: a.value.smsvcode,
                        "onUpdate:value": h[0] || (h[0] = P => a.value.smsvcode = P),
                        sendFunc: g,
                        email: m.email,
                        "type-p": "lock"
                    }, null, 8, ["value", "email"]), b(le, {
                        value: a.value.password,
                        "onUpdate:value": h[1] || (h[1] = P => a.value.password = P),
                        label: o(t)("newPSWRest")
                    }, null, 8, ["value", "label"]), D(e("div", yo, [bo, e("span", null, r(o(t)("pswRule")), 1)], 512), [
                        [G, u.value]
                    ]), b(le, {
                        value: a.value.rePassword,
                        "onUpdate:value": h[2] || (h[2] = P => a.value.rePassword = P),
                        label: o(t)("newPSWconfirm")
                    }, null, 8, ["value", "label"]), e("div", ko, [p.value ? (f(), S("span", So, r(o(t)("unmatchedInput")), 1)) : U("v-if", !0)]), e("div", {
                        class: "gotuserver",
                        onClick: _
                    }, [b(w, {
                        name: "customer1"
                    }), B(r(o(t)("contactServicer")), 1)]), e("div", $o, [B(r(o(t)("wrongemail")), 1), Co, B(r(o(t)("rpwdEmailPopupTip")), 1)]), e("div", Io, [e("button", {
                        class: "dialogBtn",
                        onClick: l
                    }, r(o(t)("confirm")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: h[3] || (h[3] = P => $("update:show", !1))
                    }, r(o(t)("cancel")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const To = H(Po, [
        ["__scopeId", "data-v-95ce4137"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/EmailRpwdPopup.vue"]
    ]),
    Fo = {
        class: "emailcontainer"
    },
    Ro = {
        class: "emailinput__container"
    },
    xo = {
        class: "emailinput__container-label"
    },
    Lo = {
        class: "emailinput__container-input"
    },
    Eo = ["placeholder"],
    Vo = A({
        __name: "EmailInput",
        props: {
            type: {
                type: String,
                required: !0
            },
            email: {
                type: String,
                required: !0
            }
        },
        emits: ["update:show-validate", "changeN"],
        setup(m, {
            expose: $,
            emit: i
        }) {
            const t = m,
                u = te(),
                s = E({
                    get() {
                        return t.email
                    },
                    set(c) {
                        i("changeN", c)
                    }
                });

            function n(c) {
                const g = c.target,
                    l = /[\u4e00-\u9fa5]/g;
                g.value = g.value.replace(l, ""), g.value.length > 0 && i("update:show-validate", !1)
            }
            const p = v();

            function a() {
                j(() => {
                    p.value.focus()
                })
            }
            return $({
                getFocus: a
            }), (c, g) => {
                const l = L("svg-icon");
                return f(), S("div", Fo, [e("div", Ro, [e("div", xo, [b(l, {
                    name: "email",
                    class: "emailinput__container-label__icon"
                }), e("span", null, r(o(u).isOpenExternalAccount ? `${c.$t("otherlogin")} ${c.$t("login")}` : c.$t("email")), 1)]), e("div", Lo, [D(e("input", {
                    type: "text",
                    name: "userEmail",
                    maxlength: "250",
                    "onUpdate:modelValue": g[0] || (g[0] = _ => s.value = _),
                    placeholder: c.$t("inputemail"),
                    onInput: n,
                    ref_key: "email",
                    ref: p
                }, null, 40, Eo), [
                    [ve, s.value]
                ])])])])
            }
        }
    });
const Bo = H(Vo, [
        ["__scopeId", "data-v-4499df08"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/EmailInput.vue"]
    ]),
    No = m => (me("data-v-436a69c4"), m = m(), ge(), m),
    Do = {
        class: "signIn__container"
    },
    Uo = {
        class: "signIn__container-button"
    },
    qo = {
        class: "signIn_footer"
    },
    Ao = {
        class: "font24"
    },
    Mo = {
        class: "font24"
    },
    zo = {
        class: "idlockTip"
    },
    Ho = No(() => e("br", null, null, -1)),
    Oo = ["src"],
    Zo = A({
        __name: "EmailSignIn",
        setup(m) {
            const $ = Y(),
                {
                    t: i
                } = ee(),
                t = v(10),
                {
                    setLoading: u
                } = Me(),
                s = te(),
                n = v(!1),
                {
                    getSelfCustomerServiceLink: p,
                    isCenterServer: a
                } = ie({
                    ServerType: 2
                }),
                c = v(!1),
                g = v(),
                l = v("login"),
                _ = v(!1);
            async function C() {
                if (ze() && await new Promise(y => setTimeout(y, 500)), !(!s.userForm.email || s.userForm.email.toString().trim() === "")) {
                    if (!s.isOpenExternalAccount && !Ie.email1.test(s.userForm.email)) return q({
                        message: i(Ps.email),
                        wordBreak: "break-word"
                    });
                    if (!s.userForm.password || s.userForm.password.toString().trim() === "") return q({
                        message: i("registerTip2"),
                        wordBreak: "break-word"
                    });
                    s.userForm.remember && s.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", s.userForm.password) : localStorage.setItem("remember", ""), s.isOpenCaptcha && !_.value ? ae() : (u(!0), await s.signIn(s.userForm).then(y => {
                        console.log("res", y)
                    }).catch(y => {
                        var T;
                        _.value = !1, y.code === 1 && (t.value = ((T = y.data) == null ? void 0 : T.passwordErrorMaxNum) || 10), y.msgCode === 33 ? c.value = !0 : oe(y.msgCode || 0)
                    }).finally(() => {
                        V.value.setShowHiden(!1), u(!1)
                    }))
                }
            }
            const h = () => {
                $.push({
                    name: "register"
                })
            };

            function w() {
                $.push({
                    name: "rpwd"
                }), s.setCurrentView("ResetPassword")
            }

            function I() {
                p()
            }
            const P = y => {
                    s.getUserForm.email = y
                },
                V = v(),
                k = v(""),
                x = () => {
                    n.value = !1, $.push({
                        name: "CustomerService"
                    })
                };
            Be(window, "keydown", y => {
                y.key == "Enter" && C()
            });
            const R = y => {
                    s.userForm.vCode = y, C()
                },
                W = () => {
                    c.value = !1, s.userForm.vCode = ""
                };
            _e(async () => {
                var T;
                const y = s.getUserForm;
                localStorage.getItem("remember") != null && ((T = localStorage.getItem("remember")) == null ? void 0 : T.toString().trim()) != "" ? y.password = localStorage.getItem("remember") : y.password = "", s.setUserForm({ ...y
                })
            });
            let ue = $e(() => s.userForm.number, y => {
                s.setCountDown(0)
            }, {
                flush: "post"
            });
            const ce = async y => {
                    j(async () => {
                        V.value.startRequestVerify(), u(!0), s.signIn(Object.assign(s.userForm, {
                            captchaId: k.value,
                            track: y
                        })).then(T => {
                            s.userForm.vCode = "", console.log("res", T)
                        }).catch(T => {
                            var Z;
                            console.log("登陆错误", T), T.code === 1 && (t.value = ((Z = T.data) == null ? void 0 : Z.passwordErrorMaxNum) || 10), T.msgCode === 33 ? (j(() => c.value = !0), _.value = !0) : oe(T.msgCode || 0)
                        }).finally(() => {
                            V.value.setShowHiden(!1), u(!1)
                        })
                    })
                },
                ae = () => {
                    j(async () => {
                        V.value.startRequestGenerate();
                        const y = await re(He());
                        y ? (k.value = y.data.captchaId, V.value.endRequestGenerate(y.data.backgroundImage, y.data.sliderImage)) : V.value.endRequestGenerate(null, null)
                    })
                },
                oe = y => {
                    y == 122 && (n.value = !0)
                };
            return Ne(() => {
                ue(), s.getUserForm.remember || (s.getUserForm.password = "")
            }), (y, T) => {
                const Z = L("van-checkbox"),
                    K = L("svg-icon");
                return f(), S("div", Do, [b(Bo, {
                    ref_key: "email",
                    ref: g,
                    type: l.value,
                    email: o(s).userForm.email,
                    onChangeN: P
                }, null, 8, ["type", "email"]), b(le, {
                    value: o(s).userForm.password,
                    "onUpdate:value": T[0] || (T[0] = d => o(s).userForm.password = d),
                    label: y.$t("password"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), e("div", null, [b(Z, {
                    modelValue: o(s).userForm.rememberpwd,
                    "onUpdate:modelValue": T[1] || (T[1] = d => o(s).userForm.rememberpwd = d)
                }, {
                    default: z(() => [B(r(y.$t("rememberPSW")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), e("div", Uo, [e("button", {
                    class: M([o(s).userForm.email != "" ? "active" : ""]),
                    onClick: C
                }, r(y.$t("login")), 3), e("button", {
                    class: "register",
                    onClick: h
                }, r(y.$t("register")), 1)]), e("div", qo, [o(s).isOpenForgetPasswordSMSState || o(s).isOpenForgetPasswordEmailState ? (f(), S("div", {
                    key: 0,
                    class: "forgetcon",
                    onClick: w
                }, [b(K, {
                    name: "clock_b",
                    class: "forgetbg"
                }), e("div", Ao, r(y.$t("forgetPSW")), 1)])) : U("v-if", !0), e("div", {
                    class: "customcon",
                    onClick: I
                }, [o(a) ? (f(), J(K, {
                    key: 0,
                    name: "serverTicket1",
                    class: "forgetbg"
                })) : (f(), J(K, {
                    key: 1,
                    name: "customer_b",
                    class: "forgetbg"
                })), e("div", Mo, r(o(a) ? o(i)("serverTicket") : y.$t("customerServiceTitle")), 1)])]), b(je, {
                    ref_key: "captchaRef",
                    ref: V,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    text: o(i)("slideCaptchaText"),
                    onFinish: ce,
                    onRefresh: ae
                }, null, 8, ["text"]), U("10锁定密码弹窗"), o(s).isOpenForgetPasswordEmailState && n.value ? (f(), J(To, {
                    key: 0,
                    show: n.value,
                    "onUpdate:show": T[2] || (T[2] = d => n.value = d),
                    email: o(s).getUserForm.email,
                    passwordErrorMaxNum: t.value
                }, null, 8, ["show", "email", "passwordErrorMaxNum"])) : (f(), J(Oe, {
                    key: 1,
                    show: n.value,
                    "onUpdate:show": T[4] || (T[4] = d => n.value = d),
                    "show-cancel-btn": !0,
                    title: y.$t("idlockTitle")
                }, {
                    content: z(() => [e("div", zo, [B(r(y.$t("idlockTip1", [t.value])) + " ", 1), Ho, B(r(y.$t("idlockTip2")), 1)])]),
                    footer: z(() => [e("button", {
                        class: "dialogBtn",
                        onClick: T[3] || (T[3] = d => n.value = !1)
                    }, r(y.$t("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: x
                    }, [e("img", {
                        src: o(pe)("main", "iconservr")
                    }, null, 8, Oo), B(" " + r(y.$t("contactServicer")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])), U(" 验证弹窗 "), b(We, {
                    showPopup: c.value,
                    onOnConfirm: R,
                    onOnBack: W
                }, null, 8, ["showPopup"])])
            }
        }
    });
const Wo = H(Zo, [
        ["__scopeId", "data-v-436a69c4"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Login/EmailSignIn.vue"]
    ]),
    jo = {
        class: "login__container-heading"
    },
    Go = {
        class: "login__container-heading__title"
    },
    Ko = {
        class: "login__container-heading__subTitle"
    },
    Xo = {
        class: "login_container-tab"
    },
    Jo = {
        class: "login__container-form"
    },
    sa = A({
        __name: "index",
        setup(m) {
            const {
                t: $
            } = fe.global, i = Y(), t = te();
            t.getRegisterState();
            const u = v("mobile"),
                s = v(void 0);
            t.userForm.logintype = u.value;
            const {
                openAll: n
            } = vt();

            function p() {
                i.replace("/")
            }
            const a = c => {
                u.value = c, t.userForm.logintype = c, t.userForm.password = "", t.remember(!0)
            };
            return st((c, g, l) => {
                l(), c.name === "home" && n()
            }), _e(async () => {
                const c = (await ot(() =>
                    import ("./chunk.fingerprintjs-eedd4aca.js"), ["assets/js/chunk.fingerprintjs-eedd4aca.js", "assets/js/common.modules-afd11eec.js", "assets/css/common-7beda9ad.css"])).default;
                if (!localStorage.getItem("arvId")) try {
                    const l = await (await c.load()).get();
                    localStorage.setItem("arvId", l.visitorId)
                } catch (g) {
                    console.error("Error generating fingerprint:", g)
                }
                t.remember(!0)
            }), (c, g) => {
                const l = L("NavBar"),
                    _ = L("svg-icon");
                return f(), S("div", {
                    class: "login__container",
                    ref_key: "loginContainerRef",
                    ref: s
                }, [b(l, {
                    onClickLeft: p,
                    class: "main",
                    leftArrow: !0,
                    headLogo: !0
                }, {
                    right: z(() => [b(Ct)]),
                    _: 1
                }), e("div", jo, [e("h1", Go, r(o($)("login")), 1), e("div", Ko, [e("div", null, r(c.$t("pleaseloginphoneoremail")), 1), e("div", null, r(c.$t("forgetyourpassword")), 1)])]), e("div", Xo, [e("div", {
                    class: M(["tab", [u.value == "mobile" ? "active" : ""]]),
                    onClick: g[0] || (g[0] = C => a("mobile"))
                }, [b(_, {
                    name: "phone"
                }), e("div", null, r(c.$t("phoneN")), 1)], 2), e("div", {
                    class: M(["tab", [u.value == "email" ? "active" : ""]]),
                    onClick: g[1] || (g[1] = C => a("email"))
                }, [e("div", null, [b(_, {
                    name: "email"
                }), D(b(_, {
                    name: "user"
                }, null, 512), [
                    [G, o(t).isOpenExternalAccount]
                ])]), e("div", null, r(o(t).isOpenExternalAccount ? c.$t("otherlogin") : c.$t("emaillogin")), 1)], 2)]), e("div", Jo, [e("div", {
                    class: M(["tab-content", [u.value == "mobile" ? "activecontent" : ""]])
                }, [b(oo, {
                    ref: "signIn"
                }, null, 512)], 2), e("div", {
                    class: M(["tab-content", [u.value == "email" ? "activecontent" : ""]])
                }, [b(Wo, {
                    ref: "signIn"
                }, null, 512)], 2)])], 512)
            }
        }
    });
export {
    Bo as E, bt as L, le as P, je as S, ys as V, sa as _, We as a, go as b, Ps as c, Ws as d, Ct as e, Ie as v
};