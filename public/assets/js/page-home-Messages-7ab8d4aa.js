import {
    G as L,
    z as B,
    r as g,
    R as N,
    C as P,
    H as w,
    I as p,
    Q as d,
    O as i,
    av as j,
    N as r,
    K as G,
    M as U,
    J as e,
    ao as b,
    P as l,
    a0 as T,
    au as h,
    aY as M,
    aE as R,
    n as A
} from "./common.modules-afd11eec.js";
import {
    a4 as V,
    G as z,
    aW as $,
    aX as Q,
    B as q,
    aY as H,
    A as Y,
    aZ as x,
    _ as E,
    a3 as F
} from "./page-activity-ActivityDetail-2fb211b4.js";
import {
    L as J
} from "./page-activity-DailySignIn-135ec0fa.js";
const K = {
        class: "sysMessage__container"
    },
    X = {
        class: "sysMessage__container-msgWrapper__item-title"
    },
    Z = {
        class: "sysMessage__container-msgWrapper__item-time"
    },
    ee = {
        class: "sysMessage__container-msgWrapper__item-content"
    },
    se = L({
        __name: "index",
        setup(O) {
            const {
                t: n
            } = B(), {
                setLoading: c
            } = V(), _ = g(), s = z(), v = N(), f = g(!1), o = g([]), y = $(), D = g({
                pageSize: 25
            });

            function S() {
                v.back()
            }
            async function I() {
                const u = $();
                await Q({
                    state: 1
                }).then(t => {
                    t && u.setReadState(!0)
                }).catch(t => {})
            }

            function W(u) {
                T({
                    title: n("warning"),
                    message: n("warningTxt1")
                }).then(async () => {
                    if (await Y(x({
                            messageID: u.messageID,
                            state: 2
                        }))) {
                        let k = o.value;
                        o.value = k.filter(m => m.messageID !== u.messageID)
                    }
                })
            }
            const C = s.getUserInfo;
            return P(async () => {
                c(!0), await I(), c(!1), _.value.resetRefresh(), C.unRead = 0, s.setUserInfo({ ...C
                }), y.setReadState(!0)
            }), (u, t) => {
                const k = w("NavBar"),
                    m = w("svg-icon");
                return r(), p("div", K, [d(k, {
                    title: i(n)("notifications"),
                    backgroundColor: "#f7f8ff",
                    "left-arrow": "",
                    onClickLeft: S
                }, null, 8, ["title"]), d(J, {
                    ref_key: "msgWrapperRef",
                    ref: _,
                    list: o.value,
                    "onUpdate:list": t[0] || (t[0] = a => o.value = a),
                    "page-query": D.value,
                    "onUpdate:pageQuery": t[1] || (t[1] = a => D.value = a),
                    api: i(H),
                    distance: 100,
                    isAutoLoad: f.value
                }, {
                    content: j(() => [(r(!0), p(G, null, U(o.value, a => (r(), p("div", {
                        class: "sysMessage__container-msgWrapper__item",
                        key: a.messageID
                    }, [e("div", X, [b(' <component :is="item.state === 0 ? icons.messageIconRed : icons.messageIconIsRead" /> '), e("div", null, [d(m, {
                        class: "svg",
                        name: a.state === 0 ? "messageIconRed" : "notification"
                    }, null, 8, ["name"]), e("span", null, l(i(q)(a.title, 20)), 1)]), d(m, {
                        class: "svg",
                        name: "messageGarbage",
                        onClick: ce => W(a)
                    }, null, 8, ["onClick"]), b(` <component
							:is="icons.messageGarbage"
							@click="($event: Event) => { $event.stopPropagation(); onDeleteClick(item) }"
						/> `)]), e("div", Z, l(a.addTime), 1), e("div", ee, l(a.messages), 1)]))), 128))]),
                    _: 1
                }, 8, ["list", "page-query", "api", "isAutoLoad"])])
            }
        }
    });
const ae = E(se, [
        ["__scopeId", "data-v-8084bf25"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/home/Messages/index.vue"]
    ]),
    de = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ae
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    te = {
        class: "messageDetail__container content"
    },
    ne = {
        class: "messageDetail__container-wrapper"
    },
    oe = {
        class: "messageDetail__container-title"
    },
    ie = {
        class: "messageDetail__container-content"
    },
    re = L({
        __name: "index",
        setup(O) {
            const {
                t: n
            } = B(), c = F(), _ = N(), s = g({}), v = R(() => A(() =>
                import ("./messageIconNoDot-7cc3f2a8.js"), ["assets/js/messageIconNoDot-7cc3f2a8.js", "assets/js/common.modules-afd11eec.js", "assets/css/common-7beda9ad.css", "assets/js/page-activity-ActivityDetail-2fb211b4.js", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-58bee5fe.js", "assets/js/en-818c8e10.js", "assets/css/page-activity-ActivityDetail-a597c4a3.css"])), f = R(() => A(() =>
                import ("./messageGarbage-46212344.js"), ["assets/js/messageGarbage-46212344.js", "assets/js/common.modules-afd11eec.js", "assets/css/common-7beda9ad.css", "assets/js/page-activity-ActivityDetail-2fb211b4.js", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-58bee5fe.js", "assets/js/en-818c8e10.js", "assets/css/page-activity-ActivityDetail-a597c4a3.css"]));

            function o() {
                _.back()
            }

            function y() {
                T({
                    title: n("warning"),
                    message: n("warningTxt1")
                }).then(() => {
                    x({
                        messageID: s.value.messageID,
                        state: 2
                    }), _.back()
                })
            }
            return P(async () => {
                s.value = c.getMessagesDetail, s.value.state !== 1 && (await x({
                    messageID: s.value.messageID,
                    state: 1
                }), c.setMessageDetail({ ...s.value,
                    state: 1
                }))
            }), (D, S) => {
                const I = w("NavBar");
                return r(), p("div", te, [d(I, {
                    "left-arrow": "",
                    onClickLeft: o,
                    title: i(n)("notificationDetails")
                }, null, 8, ["title"]), e("div", ne, [e("div", oe, [e("div", null, [e("div", null, [(r(), h(M(i(v)))), e("span", null, l(s.value.title), 1)]), e("span", null, l(s.value.addTime), 1)]), (r(), h(M(i(f)), {
                    onClick: y
                }))]), e("div", ie, l(s.value.messages), 1)])])
            }
        }
    });
const le = E(re, [
        ["__scopeId", "data-v-e5380132"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/home/Messages/MessageDetail/index.vue"]
    ]),
    me = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: le
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    me as a, de as i
};