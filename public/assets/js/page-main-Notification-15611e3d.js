import {
    G as v,
    R as g,
    r as c,
    H as l,
    I as o,
    Q as i,
    O as _,
    av as x,
    N as a,
    K as y,
    M as k,
    J as s,
    P as r
} from "./common.modules-afd11eec.js";
import {
    b3 as N,
    _ as L
} from "./page-activity-ActivityDetail-2fb211b4.js";
import {
    L as w
} from "./page-activity-DailySignIn-135ec0fa.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-58bee5fe.js";
import "./en-818c8e10.js";
import "./page-activity-Bonus-b5c6ca74.js";
const B = {
        class: "notification-container"
    },
    C = {
        class: "notification-container-content-title"
    },
    R = {
        class: "notification-container-content-desc"
    },
    M = v({
        __name: "index",
        setup(I) {
            const p = g(),
                n = c({
                    list: [],
                    pageNo: 0,
                    totalPage: 0,
                    totalCount: 0
                }),
                d = c();
            return (f, e) => {
                const u = l("NavBar"),
                    m = l("svg-icon");
                return a(), o("div", B, [i(u, {
                    title: f.$t("notification"),
                    "left-arrow": "",
                    onClickLeft: e[0] || (e[0] = t => _(p).go(-1))
                }, null, 8, ["title"]), i(w, {
                    class: "sysMessage__container-msgWrapper",
                    list: n.value.list,
                    "onUpdate:list": e[1] || (e[1] = t => n.value.list = t),
                    "page-query": {},
                    isAutoLoad: !0,
                    api: _(N),
                    distance: 250,
                    ref_key: "listRef",
                    ref: d
                }, {
                    content: x(() => [(a(!0), o(y, null, k(n.value.list, t => (a(), o("div", {
                        class: "notification-container-content",
                        key: t.title
                    }, [s("div", C, [i(m, {
                        name: "notificationIcon"
                    }), s("span", null, r(t.title), 1)]), s("div", R, r(t.siteMessage), 1), s("h5", null, r(t.addtime), 1)]))), 128))]),
                    _: 1
                }, 8, ["list", "api"])])
            }
        }
    });
const b = L(M, [
    ["__scopeId", "data-v-00f99608"],
    ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/main/Notification/index.vue"]
]);
export {
    b as
    default
};