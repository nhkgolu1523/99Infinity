import {
    G as b,
    R as f,
    H as l,
    aA as k,
    I as y,
    J as t,
    Q as s,
    O as d,
    ax as w,
    P as v,
    N as g,
    z as $,
    r as p,
    C as A
} from "./common.modules-afd11eec.js";
import {
    b as h,
    _ as x,
    A as m,
    bM as B,
    bN as C
} from "./page-activity-ActivityDetail-2fb211b4.js";
const N = {
        class: "about-container"
    },
    z = {
        class: "about-container-header"
    },
    I = {
        class: "about-container-header-belly"
    },
    M = {
        alt: ""
    },
    j = {
        class: "about-container-content"
    },
    L = {
        class: "about-container-content-item-title"
    },
    T = {
        class: "about-container-content-item-title"
    },
    D = b({
        __name: "index",
        setup(P) {
            const a = f();

            function i(o) {
                a.push({
                    name: "About-AboutDetail",
                    state: {
                        paramValue: o
                    }
                })
            }
            return (o, e) => {
                const c = l("NavBar"),
                    n = l("svg-icon"),
                    r = l("van-icon"),
                    _ = k("lazy");
                return g(), y("div", N, [t("div", z, [s(c, {
                    title: `${o.$t("aboutTitle")}`,
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e[0] || (e[0] = u => d(a).go(-1))
                }, null, 8, ["title"]), t("div", I, [w(t("img", M, null, 512), [
                    [_, d(h)("main", "aboutBg")]
                ])])]), t("div", j, [t("div", {
                    class: "about-container-content-item ar-1px-b",
                    onClick: e[1] || (e[1] = u => i("Protocols"))
                }, [t("div", L, [s(n, {
                    name: "privacyIcon"
                }), t("span", null, v(o.$t("pravicyProtocal")), 1)]), s(r, {
                    name: "arrow",
                    size: "18px",
                    color: "var(--text_color_L2)"
                })]), t("div", {
                    class: "about-container-content-item ar-1px-b",
                    onClick: e[2] || (e[2] = u => i("Agreement"))
                }, [t("div", T, [s(n, {
                    name: "riskProtocal"
                }), t("span", null, v(o.$t("riskProtocal")), 1)]), s(r, {
                    name: "arrow",
                    size: "18px",
                    color: "var(--text_color_L2)"
                })])])])
            }
        }
    });
const O = x(D, [
        ["__scopeId", "data-v-6616fdfe"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/main/About/index.vue"]
    ]),
    J = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: O
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    R = {
        class: "about-container"
    },
    S = ["innerHTML"],
    G = b({
        __name: "index",
        setup(P) {
            const {
                t: a
            } = $(), i = p(a("pravicyProtocal")), o = f(), e = history.state.paramValue, c = p();
            return A(async () => {
                i.value = a(e === "Protocols" ? "pravicyProtocal" : "riskProtocal");
                const n = e === "Protocols" ? await m(B()) : await m(C());
                n && (c.value = e === "Protocols" ? n.data.protocols : n.data.agreement)
            }), (n, r) => {
                const _ = l("NavBar");
                return g(), y("div", R, [s(_, {
                    title: i.value,
                    "left-arrow": "",
                    onClickLeft: r[0] || (r[0] = u => d(o).go(-1))
                }, null, 8, ["title"]), t("div", {
                    class: "about-container-content",
                    innerHTML: c.value
                }, null, 8, S)])
            }
        }
    });
const H = x(G, [
        ["__scopeId", "data-v-19d4c048"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/main/About/AboutDetail/index.vue"]
    ]),
    Q = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: H
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Q as a, J as i
};