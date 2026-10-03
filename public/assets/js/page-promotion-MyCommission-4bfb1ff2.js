import {
    G as z,
    r as _,
    R as G,
    w as j,
    C as W,
    H as y,
    I as m,
    Q as h,
    av as O,
    ao as w,
    J as e,
    P as t,
    O as d,
    N as u,
    T as K,
    z as X,
    aB as r,
    K as H,
    M as U,
    aC as Z,
    aD as x
} from "./common.modules-afd11eec.js";
import {
    d as ee,
    f as te,
    cH as q,
    bW as se,
    _ as E,
    c as P,
    cz as oe
} from "./page-activity-ActivityDetail-2fb211b4.js";
const ae = {
        class: "ar-searchbar"
    },
    ne = {
        class: "ar-searchbar-type"
    },
    ie = {
        key: 0,
        class: "myCommission__container-content"
    },
    le = {
        class: "myCommission__container-content__item-body"
    },
    ce = {
        class: "settle"
    },
    de = {
        class: "time"
    },
    re = {
        class: "sub"
    },
    _e = {
        class: "amount grey"
    },
    me = {
        class: "amount grey"
    },
    ue = {
        class: "amount orange fw"
    },
    pe = {
        class: "amount grey"
    },
    ve = z({
        __name: "index",
        setup(f) {
            const p = _(null),
                R = G(),
                n = _(),
                {
                    minDate: A,
                    maxDate: k
                } = ee(-1),
                l = j(k).startOf("day"),
                {
                    key: S,
                    value: s
                } = te(),
                C = _(l.format("YYYY-MM-DD")),
                $ = _(s),
                c = _(!1),
                v = _({
                    date: l.format("YYYY-MM-DD HH:mm:ss")
                }),
                T = async ({
                    selectedOptions: o
                }) => {
                    c.value = !1, v.value.date = j($.value.join("/")).startOf("day").format("YYYY-MM-DD HH:mm:ss");
                    const [{
                        value: a
                    }, {
                        value: b
                    }, {
                        value: M
                    }] = o;
                    C.value = se(a, b, M), i()
                };

            function g() {
                R.back()
            }
            const L = ({
                    selectedOptions: o
                }) => {
                    c.value = !1
                },
                i = async () => {
                    try {
                        const o = await q(v.value);
                        n.value = o
                    } catch (o) {
                        console.log(o)
                    }
                };
            return W(() => {
                i()
            }), (o, a) => {
                var V, Y, N, B, I;
                const b = y("NavBar"),
                    M = y("ArSelect"),
                    Q = y("van-sticky"),
                    F = y("van-date-picker"),
                    J = y("van-popup");
                return u(), m("div", {
                    class: "myCommission__container",
                    ref_key: "containerRef",
                    ref: p
                }, [h(b, {
                    title: o.$t("commissionDetails"),
                    "left-arrow": "",
                    onClickLeft: g
                }, null, 8, ["title"]), h(Q, {
                    "offset-top": o.$u.TopHeight,
                    container: p.value
                }, {
                    default: O(() => [e("div", ae, [e("div", ne, [h(M, {
                        onClickSelect: a[0] || (a[0] = D => c.value = !0),
                        selectName: C.value || o.$t("pickDate")
                    }, null, 8, ["selectName"])])])]),
                    _: 1
                }, 8, ["offset-top", "container"]), w(" 日期选择弹窗 "), h(J, {
                    show: c.value,
                    "onUpdate:show": a[2] || (a[2] = D => c.value = D),
                    round: "",
                    position: "bottom"
                }, {
                    default: O(() => [h(F, {
                        modelValue: $.value,
                        "onUpdate:modelValue": a[1] || (a[1] = D => $.value = D),
                        title: o.$t("pickDate"),
                        onCancel: L,
                        onConfirm: T,
                        "min-date": d(A),
                        "max-date": d(k)
                    }, null, 8, ["modelValue", "title", "min-date", "max-date"])]),
                    _: 1
                }, 8, ["show"]), (V = n.value) != null && V.settlementTime ? (u(), m("div", ie, [e("div", {
                    class: "myCommission__container-content__item",
                    onClick: a[3] || (a[3] = D => d(R).push({
                        name: "MyCommission-MyCommissionDetail",
                        query: {
                            date: v.value.date
                        }
                    }))
                }, [e("div", le, [e("p", ce, t(o.$t("settlementState")), 1), e("span", de, t((Y = n.value) == null ? void 0 : Y.settlementTime), 1), e("p", re, t(o.$t("tTommission")), 1), e("div", null, [e("span", null, t(o.$t("betPeople")), 1), e("span", _e, t((N = n.value) == null ? void 0 : N.children_LotteryAmount_Users) + " " + t(o.$t("people")), 1)]), e("div", null, [e("span", null, t(o.$t("betMoney")), 1), e("span", me, t((B = n.value) == null ? void 0 : B.children_LotteryAmount), 1)]), w(` <div>
						<span>{{ $t('agencyGrade') }}</span>
						<span class="level">L{{ Promotion?.rebateAmount_Last }}</span>
					</div> `), e("div", null, [e("span", null, t(o.$t("commSettlement")), 1), e("span", ue, t(n.value.rebateAmount_Last), 1)]), e("div", null, [e("span", null, t(o.$t("date")), 1), e("span", pe, t((I = n.value) == null ? void 0 : I.time), 1)])])])])) : w("v-if", !0)], 512)
            }
        }
    });
const ye = E(ve, [
        ["__scopeId", "data-v-5659d99c"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/promotion/MyCommission/index.vue"]
    ]),
    Ze = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ye
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    he = f => (Z("data-v-ede350d4"), f = f(), x(), f),
    fe = {
        class: "TeamReportDetail__C"
    },
    Ce = {
        class: "TeamReportDetail__C-head"
    },
    $e = {
        class: "TeamReportDetail__C-head-top"
    },
    be = {
        class: "TeamReportDetail__C-head-detail"
    },
    De = {
        class: "TeamReportDetail__C-head-detail-lv"
    },
    Re = {
        class: "TeamReportDetail__C-head-detail-commission"
    },
    ke = {
        class: "TeamReportDetail__C-head-detail-time"
    },
    Te = he(() => e("div", {
        class: "TeamReportDetail__C-img"
    }, null, -1)),
    ge = {
        class: "TeamReportDetail__C-detail"
    },
    Le = {
        class: "title"
    },
    we = {
        class: "box"
    },
    Ae = {
        class: "TeamReportDetail__C-body-item"
    },
    Me = {
        class: "TeamReportDetail__C-body-item"
    },
    Pe = {
        class: "level"
    },
    Se = {
        class: "TeamReportDetail__C-body-item"
    },
    Ve = {
        class: "meony"
    },
    Ye = {
        class: "TeamReportDetail__C-body-item"
    },
    Ne = {
        class: "meony"
    },
    Be = {
        class: "TeamReportDetail__C-body-grade"
    },
    Ie = {
        class: "TeamReportDetail__C-body-grade-th"
    },
    je = {
        class: "item"
    },
    Oe = {
        class: "item"
    },
    He = {
        class: "item"
    },
    Ue = {
        class: "item"
    },
    ze = {
        class: "item"
    },
    Ge = {
        class: "icon-LV"
    },
    We = {
        class: "txt"
    },
    qe = {
        class: "item"
    },
    Ee = {
        class: "item"
    },
    Qe = {
        class: "item"
    },
    Fe = z({
        __name: "index",
        setup(f) {
            const p = G(),
                R = K(),
                {
                    t: n
                } = X(),
                A = {
                    1: n("commissionLottery"),
                    2: n("commissionElectric"),
                    3: n("commissionLive"),
                    4: n("commissionSport"),
                    5: n("commissionGames"),
                    6: n("commissionChess")
                };
            console.log("routes", p.options.routes[41].meta);
            const k = () => {
                    p.go(-1)
                },
                l = _(),
                S = async () => {
                    try {
                        const s = await q({
                            date: R.query.date
                        });
                        l.value = s
                    } catch (s) {
                        console.log(s)
                    }
                };
            return W(() => {
                S()
            }), (s, C) => {
                var c, v, T, g, L;
                const $ = y("NavBar");
                return u(), m("div", fe, [h($, {
                    title: s.$t("details"),
                    "left-arrow": "",
                    onClickLeft: k
                }, null, 8, ["title"]), e("div", Ce, [e("div", $e, t((c = l.value) == null ? void 0 : c.settlementTime), 1), e("div", be, [e("div", De, [r(t(s.$t("totalBetP")), 1), e("span", null, t((v = l.value) == null ? void 0 : v.children_LotteryAmount_Users) + t(s.$t("people")), 1)]), e("div", Re, [r(t(s.$t("totalBetA")), 1), e("span", null, t(d(P)((T = l.value) == null ? void 0 : T.children_LotteryAmount)), 1)]), w(` <div class="TeamReportDetail__C-head-detail-time">
					{{$t('rebateLevel')}}<span>LV5</span>
				</div> `), e("div", ke, [r(t(s.$t("totalCommissionA")), 1), e("span", null, t((g = l.value) == null ? void 0 : g.rebateAmount_Last), 1)])])]), Te, e("div", ge, [e("div", {
                    class: "btn",
                    onClick: C[0] || (C[0] = i => d(p).push({
                        name: "RebateRatio"
                    }))
                }, t(s.$t("rebateRules")), 1)]), (u(!0), m(H, null, U((L = l.value) == null ? void 0 : L.rebateWhereItems, (i, o) => (u(), m("div", {
                    class: "TeamReportDetail__C-body",
                    key: o
                }, [e("div", Le, t(A[i.type]), 1), e("div", we, [e("div", Ae, [r(t(s.$t("betPeople")) + " ", 1), e("span", null, t(i.children_LotteryAmount_Users) + t(s.$t("people")), 1)]), e("div", Me, [r(t(s.$t("rebateLevel")) + " ", 1), e("span", Pe, "LV" + t(i.rebateLevel), 1)]), e("div", Se, [r(t(s.$t("betMoney")) + " ", 1), e("span", Ve, t(d(P)(i.children_LotteryAmount)), 1)]), e("div", Ye, [r(t(s.$t("commSettlement")) + " ", 1), e("span", Ne, t(d(P)(i.rebateAmount)), 1)])]), e("div", Be, [e("div", Ie, [e("div", je, t(s.$t("lowerLevel")), 1), e("div", Oe, t(s.$t("betAmounts")), 1), e("div", He, t(s.$t("rebateRatio")), 1), e("div", Ue, t(s.$t("betRebateAmount")), 1)]), (u(!0), m(H, null, U(i.rebateWhereItemDetails, (a, b) => (u(), m("div", {
                    class: "TeamReportDetail__C-body-grade-tr",
                    key: b
                }, [e("div", ze, [e("div", Ge, [e("span", We, "L" + t(a.levelId), 1)])]), e("div", qe, t(a.children_LotteryAmount), 1), e("div", Ee, t(a.rebateRate) + "%", 1), e("div", Qe, t(d(oe)(a.rebateAmount)), 1)]))), 128))])]))), 128))])
            }
        }
    });
const Je = E(Fe, [
        ["__scopeId", "data-v-ede350d4"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/promotion/MyCommission/MyCommissionDetail/index.vue"]
    ]),
    xe = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Je
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    xe as a, Ze as i
};