import {
    G as b,
    z as A,
    R as C,
    r as I,
    H as a,
    I as u,
    Q as s,
    O as d,
    J as i,
    av as m,
    N as v,
    K as P,
    M as y,
    ap as B,
    ax as N,
    ay as R,
    u as U
} from "./common.modules-afd11eec.js";
import {
    G as V,
    b as $,
    A as z,
    bO as G,
    _ as E
} from "./page-activity-ActivityDetail-2fb211b4.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-58bee5fe.js";
import "./en-818c8e10.js";
const F = {
        class: "avatar-container"
    },
    L = {
        class: "avatar-container-content"
    },
    O = ["src"],
    p = !0,
    j = b({
        __name: "index",
        setup(D) {
            const {
                t: f
            } = A(), c = V(), n = c.getUserInfo, l = C(), r = I(n.userPhoto);
            async function g(e) {
                if (r.value = (e + 1).toString(), e < 0) return U({
                    message: f("tipSelectPls")
                }), !1;
                await z(G({
                    userPhoto: (e + 1).toString()
                })) && (n.userPhoto = (e + 1).toString(), c.setUserInfo({ ...n
                }), l.go(-1))
            }
            return (e, t) => {
                const h = a("NavBar"),
                    w = a("van-checkbox"),
                    k = a("van-grid-item"),
                    S = a("van-grid");
                return v(), u("div", F, [s(h, {
                    title: e.$t("changeAvatar"),
                    "left-arrow": "",
                    onClickLeft: t[0] || (t[0] = x => d(l).go(-1))
                }, null, 8, ["title"]), i("div", L, [s(S, {
                    border: !1,
                    "column-num": 3,
                    gutter: 10
                }, {
                    default: m(() => [(v(), u(P, null, y(20, (x, o) => s(k, {
                        onClick: _ => g(o)
                    }, {
                        default: m(() => [i("img", {
                            class: B(r.value === (o + 1).toString() ? "active" : ""),
                            src: d($)("main/Avatar", `${o+1}`)
                        }, null, 10, O), N(i("div", null, [s(w, {
                            modelValue: p,
                            "onUpdate:modelValue": t[1] || (t[1] = _ => p = _),
                            "icon-size": "20px"
                        })], 512), [
                            [R, r.value === (o + 1).toString()]
                        ])]),
                        _: 2
                    }, 1032, ["onClick"])), 64))]),
                    _: 1
                })])])
            }
        }
    });
const T = E(j, [
    ["__scopeId", "data-v-0cd6dac4"],
    ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/main/Avatar/index.vue"]
]);
export {
    T as
    default
};