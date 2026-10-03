import {
    G as p,
    C as u,
    H as m,
    aA as y,
    I as f,
    J as t,
    Q as o,
    O as e,
    ax as g,
    N as k,
    A as L
} from "./common.modules-afd11eec.js";
import {
    a1 as x,
    _ as h
} from "./page-activity-ActivityDetail-2fb211b4.js";
const $ = {
        class: "customer-container"
    },
    w = {
        class: "customer-container-header"
    },
    B = {
        class: "customer-container-header-belly"
    },
    O = {
        alt: ""
    },
    I = p({
        __name: "index",
        setup(C) {
            const {
                onItemClick: n,
                goBack: s,
                getIcons: i,
                getList: a,
                ContactList: r,
                List: c
            } = x({
                ServerType: 1
            });
            return u(() => {
                a()
            }), (l, d) => {
                const _ = m("NavBar"),
                    v = y("lazy");
                return k(), f("div", $, [t("div", w, [o(_, {
                    title: l.$t("poxyServer"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e(s)
                }, null, 8, ["title", "onClickLeft"]), t("div", B, [g(t("img", O, null, 512), [
                    [v, e(i)("promotion", "serverbg")]
                ])])]), o(e(c), {
                    list: e(r),
                    onOnClick: e(n)
                }, null, 8, ["list", "onOnClick"])])
            }
        }
    });
const N = h(I, [
        ["__scopeId", "data-v-63a4fda1"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/promotion/Server/index.vue"]
    ]),
    V = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: N
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    j = {
        class: "customer-container"
    },
    z = {
        class: "customer-container-header"
    },
    T = {
        class: "customer-container-header-belly"
    },
    A = {
        alt: ""
    },
    P = p({
        __name: "index",
        setup(C) {
            const {
                goBack: n,
                onClickUrl: s,
                CollectionList: i,
                getServiceList: a,
                getIcons: r,
                List: c
            } = x({
                ServerType: 1
            }), l = history.state.itemId, d = L({
                typeId: l
            });
            return u(async () => {
                a(d)
            }), (_, v) => {
                const S = m("NavBar"),
                    b = y("lazy");
                return k(), f("div", j, [t("div", z, [o(S, {
                    title: _.$t("poxyServer"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e(n)
                }, null, 8, ["title", "onClickLeft"]), t("div", T, [g(t("img", A, null, 512), [
                    [b, e(r)("promotion", "serverbg")]
                ])])]), o(e(c), {
                    list: e(i),
                    onOnClick: e(s)
                }, null, 8, ["list", "onOnClick"])])
            }
        }
    });
const M = h(P, [
        ["__scopeId", "data-v-49bd7182"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/promotion/Server/ServiceCollection/index.vue"]
    ]),
    E = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: M
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    E as a, V as i
};