import {
    G as ae,
    z as me,
    aU as Lt,
    C as _e,
    I as c,
    J as e,
    O as C,
    ao as k,
    aB as L,
    P as t,
    F as je,
    N as l,
    aw as ft,
    r as g,
    H as V,
    ar as nt,
    Q as p,
    au as we,
    av as G,
    Z as ga,
    u as z,
    aC as Ne,
    aD as Se,
    R as ue,
    A as he,
    K as X,
    M as ke,
    ap as ie,
    B as j,
    ax as re,
    ay as _t,
    aF as fe,
    T as Ie,
    aA as Fe,
    $ as qe,
    E as yt,
    a$ as Dt,
    t as ka,
    bC as $a,
    bG as ba,
    b3 as qt,
    p as mt,
    X as Ca,
    az as Pt,
    bF as Ta
} from "./common.modules-afd11eec.js";
import {
    cD as tt,
    a4 as Ue,
    A as ee,
    cs as Rt,
    g as ge,
    c as de,
    b as dt,
    _ as ne,
    d2 as Na,
    dU as et,
    bT as Sa,
    bU as Ia,
    L as Ze,
    dV as Aa,
    dW as jt,
    d9 as Wa,
    y as De,
    dX as Pe,
    a1 as gt,
    dY as Ba,
    a5 as Ft,
    a3 as kt,
    G as zt,
    dl as Ua,
    aa as Ge,
    dZ as Da,
    d_ as Pa,
    ab as Ra,
    h as rt,
    d$ as Et,
    e0 as Va,
    e1 as Qe,
    d1 as ze,
    bG as be,
    e2 as Oa,
    co as st,
    e3 as Ht,
    e4 as Ma,
    e5 as La,
    e6 as xt,
    e7 as ct,
    e8 as qa,
    e9 as ja,
    ea as Fa,
    eb as za,
    ec as Ea,
    ed as Ha,
    ee as xa,
    ef as Kt,
    dH as Zt,
    eg as Ka,
    eh as Za,
    dh as Ga,
    ei as Qa,
    d3 as Ya,
    ej as Xa,
    b_ as Ja,
    ek as en
} from "./page-activity-ActivityDetail-2fb211b4.js";
import {
    P as tn,
    v as Gt,
    c as Qt
} from "./page-login-index.vue_vue_type_script_setup_true_lang.ts-cff1627f.js";
import {
    E as at
} from "./page-activity-Bonus-b5c6ca74.js";
import {
    L as an
} from "./page-activity-DailySignIn-135ec0fa.js";
import {
    D as ht
} from "./page-activity-Championship-438cbfd5.js";
import {
    N as nn
} from "./page-wallet-Recharge-c33e6529.js";
import {
    u as on,
    a as Ee,
    S as He
} from "./page-test-index.vue_vue_type_script_setup_true_lang.tsx-97b80508.js";
import {
    S as sn
} from "./page-promotion-MyInvitation-9b35bea1.js";
const ln = {
        class: "balanceAssets"
    },
    rn = {
        class: "balanceAssets__header"
    },
    dn = {
        class: "balanceAssets__header__left"
    },
    cn = ["src"],
    un = {
        class: "balanceAssets__main"
    },
    pn = ["src"],
    vn = ae({
        __name: "BalanceAssetsW",
        props: {
            data_NewSetWithdrawal: {
                type: null,
                required: !0
            },
            withdrawalsrule: {
                type: null,
                required: !0
            }
        },
        setup(f) {
            const n = f,
                {
                    t: s
                } = me();
            tt();
            const {
                setLoading: m
            } = Ue(), i = Lt(n, "withdrawalsrule");
            async function r() {
                m(!0);
                const d = await ee(Rt());
                d && (i.value.amount = d.data.amount, je(s("refreshSuccess"))), m(!1)
            }
            return _e(async () => {
                const d = await ee(Rt());
                d && (i.value.amount = d.data.amount)
            }), (d, o) => (l(), c("div", ln, [e("div", rn, [e("div", dn, [e("img", {
                src: C(ge)("wallet", "balance")
            }, null, 8, cn), k(" 可用余额 "), L(" " + t(d.$t("vailableBalance")), 1)])]), e("div", un, [e("p", null, t(C(de)(i.value.amount)), 1), e("img", {
                src: C(dt)("wallet/recharge", "refresh"),
                alt: "",
                onClick: r
            }, null, 8, pn)])]))
        }
    });
const _n = ne(vn, [
        ["__scopeId", "data-v-0879c174"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/BalanceAssetsW.vue"]
    ]),
    $t = f => (Ne("data-v-6981cc49"), f = f(), Se(), f),
    mn = {
        class: "otp"
    },
    hn = {
        class: "otp-header"
    },
    wn = $t(() => e("span", {
        class: "otp-header-left"
    }, null, -1)),
    fn = $t(() => e("span", {
        class: "otp-header-right"
    }, null, -1)),
    yn = {
        class: "otp-content"
    },
    gn = {
        class: "otp-hit"
    },
    kn = {
        key: 0
    },
    $n = {
        class: "otp-title"
    },
    bn = {
        key: 0,
        class: "otp-title"
    },
    Cn = {
        class: "otp-title"
    },
    Tn = {
        class: "otp-btns"
    },
    Nn = {
        class: "otp-footer"
    },
    Sn = $t(() => e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none"
    }, [e("path", {
        d: "M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linejoin": "round"
    }), e("path", {
        d: "M43 17L17 43",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), e("path", {
        d: "M17 17L43 43",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    In = [Sn],
    An = ae({
        __name: "otp",
        props: {
            code: {
                type: String,
                default: ""
            },
            mobile: {
                type: String,
                default: ""
            },
            bank: {
                type: String,
                default: ""
            },
            upi: {
                type: String,
                default: ""
            },
            bid: {
                type: Number
            },
            withdrawalId: {
                type: Number
            },
            withdrawalAmount: {
                type: Number
            }
        },
        emits: ["update:code", "confirm", "close"],
        setup(f, {
            emit: n
        }) {
            const s = f,
                {
                    code: m
                } = ft(s, n),
                i = g(""),
                {
                    t: r
                } = me(),
                {
                    close: d
                } = on(),
                {
                    getOTPCode: o,
                    getWithdrawalOTPCode: w,
                    getWithdrawalUsendOtpByWithdrawId: h,
                    isCount: a,
                    seconds: _
                } = Na({
                    time: 60
                }),
                v = async () => {
                    if (s.withdrawalId) {
                        await h({
                            withdrawId: s.withdrawalId,
                            categoryId: 27
                        });
                        return
                    }
                    if (s.bid) {
                        await w({
                            categoryId: 27,
                            bid: s.bid
                        });
                        return
                    }
                    await o({
                        categoryId: 27,
                        mobileNo: s.mobile,
                        accountNo: s.upi,
                        bankCode: s.bank
                    })
                },
                S = () => {
                    d(), n("close")
                },
                u = async () => {
                    if (m.value) {
                        if (s.bank === "slice" && !i.value) return z(r("enterPin"));
                        n("confirm", i.value)
                    }
                };
            return (N, y) => {
                const A = V("van-field"),
                    W = V("van-button");
                return l(), c("div", mn, [e("div", hn, [wn, nt(N.$slots, "header", {}, () => [e("h5", null, t(C(r)("verifyOpt")), 1)], !0), fn]), e("div", yn, [e("div", null, [e("div", gn, [e("p", null, t(f.withdrawalAmount !== 0 ? N.$t("paymentTips") : N.$t("currentPaymentTips")) + "！", 1), e("p", null, t(N.$t("paymentMethod")) + "：" + t(C(et)(f.bank)), 1), e("p", null, "UPI ID ： " + t(f.upi), 1), f.withdrawalAmount ? (l(), c("p", kn, t(N.$t("withdrawalA")) + " : " + t(C(de)(f.withdrawalAmount)), 1)) : k("v-if", !0)]), e("div", $n, t(N.$t("phoneN")), 1), p(A, {
                    center: "",
                    type: "digit",
                    placeholder: N.$t("phoneN"),
                    disabled: !0,
                    "model-value": f.mobile
                }, null, 8, ["placeholder", "model-value"]), f.bank === "slice" ? (l(), c("div", bn, t(N.$t("pin")), 1)) : k("v-if", !0), f.bank === "slice" ? (l(), we(A, {
                    key: 1,
                    center: "",
                    type: "digit",
                    modelValue: i.value,
                    "onUpdate:modelValue": y[0] || (y[0] = $ => i.value = $),
                    maxlength: 4,
                    min: 0,
                    max: 9999,
                    placeholder: N.$t("enterPin")
                }, null, 8, ["modelValue", "placeholder"])) : k("v-if", !0), e("div", Cn, t(N.$t("VerificationCode")), 1), p(A, {
                    center: "",
                    type: "digit",
                    placeholder: N.$t("phEnterVerificationCode"),
                    maxlength: 6,
                    modelValue: C(m),
                    "onUpdate:modelValue": y[1] || (y[1] = $ => ga(m) ? m.value = $ : null)
                }, {
                    button: G(() => [p(W, {
                        class: "otp-code",
                        disabled: C(a),
                        size: "small",
                        type: "primary",
                        onClick: v
                    }, {
                        default: G(() => [L(t(C(a) ? `${C(_)}S` : N.$t("send")), 1)]),
                        _: 1
                    }, 8, ["disabled"])]),
                    _: 1
                }, 8, ["placeholder", "modelValue"])]), e("div", Tn, [p(W, {
                    type: "primary",
                    disabled: !C(m),
                    onClick: u
                }, {
                    default: G(() => [L(t(N.$t("submit")), 1)]),
                    _: 1
                }, 8, ["disabled"]), p(W, {
                    onClick: S
                }, {
                    default: G(() => [L(t(N.$t("cancel")), 1)]),
                    _: 1
                })])]), e("div", Nn, [nt(N.$slots, "footer", {}, () => [e("span", {
                    onClick: S
                }, In)], !0)])])
            }
        }
    });
const ut = ne(An, [
        ["__scopeId", "data-v-6981cc49"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/otp.vue"]
    ]),
    Wn = {
        class: "rechargeh__container"
    },
    Bn = {
        class: "rechargeh__container-head"
    },
    Un = {
        class: "rechargeh__container-content"
    },
    Dn = {
        class: "rechargeh__container-content__item-header ar-1px-b"
    },
    Pn = {
        class: "rechargeh__container-content__item-body"
    },
    Rn = {
        key: 0
    },
    Vn = {
        class: "rechargeh__container-footer"
    },
    On = ae({
        __name: "WithdrawHistory",
        setup(f, {
            expose: n
        }) {
            const s = ue(),
                {
                    setLoading: m
                } = Ue(),
                {
                    t: i
                } = me(),
                r = g([]),
                d = he({
                    pageNo: 1,
                    pageSize: 5,
                    startDate: "",
                    endDate: "",
                    state: -1,
                    type: -1
                }),
                o = g({}),
                w = g(""),
                h = g(!1),
                a = u => {
                    o.value = Object.assign({}, u.upiAccountInfo || {}, {
                        withdrawID: u.withdrawID
                    }), h.value = !0
                };

            function _() {
                s.push({
                    name: "WithdrawHistory"
                })
            }
            async function v() {
                m(!0);
                const u = await ee(Aa(d));
                u && (r.value = u.data.list), m(!1)
            }
            const S = async () => {
                var N;
                await ee(jt({
                    withdrawId: (N = o.value) == null ? void 0 : N.withdrawID,
                    smsCode: w.value,
                    categoryId: 27
                })) && (h.value = !1, je({
                    type: "success",
                    message: i("verifySuccess"),
                    duration: 2e3
                }), await v())
            };
            return _e(async () => {
                await v()
            }), n({
                getWithdrawLog: v
            }), (u, N) => {
                const y = V("svg-icon"),
                    A = V("van-button"),
                    W = V("van-dialog");
                return l(), c("div", Wn, [e("div", Bn, [p(y, {
                    name: "historyHead"
                }), e("h1", null, t(u.$t("whTitle5")), 1)]), e("div", Un, [r.value.length > 0 ? (l(!0), c(X, {
                    key: 0
                }, ke(r.value, ($, q) => (l(), c("div", {
                    class: "rechargeh__container-content__item",
                    key: q
                }, [k(' <div class="rechargeh__container-content__item-header ar-1px-b" @click="onToDetail(item.state)"> '), e("div", Dn, [e("span", null, t(u.$t("withdraw")), 1), e("span", {
                    class: ie({
                        stateR: $.state === 0,
                        stateG: $.state === 1
                    })
                }, [L(t(C(Sa)(C(Ia).WithdrawState, $.state)) + " ", 1), k(' <van-icon name="arrow" /> ')], 2)]), e("div", Pn, [e("div", null, [e("span", null, t(u.$t("amount")), 1), e("span", null, t(C(de)($.price)), 1)]), e("div", null, [e("span", null, t(u.$t("type")), 1), e("span", null, t($.withdrawName), 1)]), e("div", null, [e("span", null, t(u.$t("time")), 1), e("span", null, t($.addTime), 1)]), e("div", null, [e("span", null, t(u.$t("orderNo")), 1), e("span", null, t($.withdrawNumber), 1), p(y, {
                    onClick: I => C(Ze)($.withdrawNumber.toString()),
                    name: "copy"
                }, null, 8, ["onClick"])]), $.needKycConnect && $.state === 3 && $.type == 27 ? (l(), c("div", Rn, [p(A, {
                    size: "small",
                    onClick: I => a($),
                    type: "danger",
                    block: ""
                }, {
                    default: G(() => [L(t(u.$t("verifyOpt")), 1)]),
                    _: 2
                }, 1032, ["onClick"])])) : k("v-if", !0)])]))), 128)) : (l(), we(at, {
                    key: 1
                }))]), e("div", Vn, [e("button", {
                    onClick: _
                }, t(u.$t("allRecords")), 1)]), p(W, {
                    teleport: "body",
                    show: h.value,
                    "onUpdate:show": N[2] || (N[2] = $ => h.value = $),
                    showConfirmButton: !1,
                    width: "fit-content",
                    "lazy-render": ""
                }, {
                    default: G(() => [p(ut, {
                        withdrawalId: o.value.withdrawID,
                        bank: o.value.bankCode,
                        upi: o.value.accountNo,
                        mobile: o.value.mobileNO,
                        code: w.value,
                        "onUpdate:code": N[0] || (N[0] = $ => w.value = $),
                        onConfirm: S,
                        onClose: N[1] || (N[1] = $ => h.value = !1)
                    }, null, 8, ["withdrawalId", "bank", "upi", "mobile", "code"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const wt = ne(On, [
        ["__scopeId", "data-v-30972a14"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/WithdrawHistory.vue"]
    ]),
    Mn = {
        class: "withdrawWay"
    },
    Ln = ["src"],
    qn = ["src"],
    jn = {
        key: 0,
        class: "gift"
    },
    Fn = ["src"],
    zn = ["src"],
    En = ["src"],
    Hn = ["src"],
    xn = ["onClick"],
    Kn = ["src"],
    Zn = ["src"],
    Gn = ae({
        __name: "withdrawalTypes",
        props: {
            data_NewSetWithdrawal: {
                type: null,
                required: !0
            },
            withdrawalTypeslist: {
                type: Array,
                required: !0
            },
            c2cAward: {
                type: Number,
                required: !0
            },
            maxRechargeRifts: {
                type: Number,
                required: !0
            },
            ArRechargeRifts: {
                type: Number,
                required: !0
            }
        },
        emits: ["onSelectWithdrawalType"],
        setup(f, {
            emit: n
        }) {
            const s = f,
                m = j(() => s.withdrawalTypeslist.find(o => o.withdrawID == 20)),
                i = j(() => s.withdrawalTypeslist.find(o => o.withdrawID == 21)),
                r = j(() => s.withdrawalTypeslist.find(o => o.withdrawID == 22));

            function d(o) {
                n("onSelectWithdrawalType", o)
            }
            return (o, w) => (l(), c("div", Mn, [m.value ? (l(), c("div", {
                key: 0,
                class: ie(["c2c", {
                    active: o.data_NewSetWithdrawal.type == 20
                }]),
                onClick: w[0] || (w[0] = h => d({
                    withdrawID: 20
                }))
            }, [o.data_NewSetWithdrawal.type != m.value.withdrawID ? (l(), c("img", {
                key: 0,
                src: m.value.withBeforeImgUrl
            }, null, 8, Ln)) : (l(), c("img", {
                key: 1,
                src: m.value.withAfterImgUrl
            }, null, 8, qn)), e("div", null, [e("div", null, t(m.value.name), 1), o.c2cAward > 0 ? (l(), c(X, {
                key: 0
            }, [L(t(o.$t("c2cEGReward", [o.c2cAward ? C(Wa)(o.c2cAward, 100) : 0])), 1)], 64)) : k("v-if", !0)])], 2)) : k("v-if", !0), i.value ? (l(), c("div", {
                key: 1,
                class: ie(["c2c Ar", {
                    active: o.data_NewSetWithdrawal.type == 21
                }]),
                onClick: w[1] || (w[1] = h => d({
                    withdrawID: 21
                }))
            }, [o.maxRechargeRifts > 0 || o.ArRechargeRifts > 0 ? (l(), c("div", jn, [e("span", null, t(o.maxRechargeRifts > 0 ? `${o.maxRechargeRifts}%` : "") + t(o.ArRechargeRifts > 0 ? `+${o.ArRechargeRifts}%` : ""), 1)])) : k("v-if", !0), o.data_NewSetWithdrawal.type != i.value.withdrawID ? (l(), c("img", {
                key: 1,
                src: i.value.withBeforeImgUrl
            }, null, 8, Fn)) : (l(), c("img", {
                key: 2,
                src: i.value.withAfterImgUrl
            }, null, 8, zn)), e("div", null, [e("div", null, t(i.value.name), 1), e("p", null, t(i.value.withdrawTip || o.$t("withdrawTip5")), 1)])], 2)) : k("v-if", !0), r.value ? (l(), c("div", {
                key: 2,
                class: ie(["c2c Ar", {
                    active: o.data_NewSetWithdrawal.type == 22
                }]),
                onClick: w[2] || (w[2] = h => d({
                    withdrawID: 22
                }))
            }, [o.data_NewSetWithdrawal.type != r.value.withdrawID ? (l(), c("img", {
                key: 0,
                src: r.value.withBeforeImgUrl
            }, null, 8, En)) : (l(), c("img", {
                key: 1,
                src: r.value.withAfterImgUrl
            }, null, 8, Hn)), e("div", null, [e("div", null, t(r.value.name), 1)])], 2)) : k("v-if", !0), (l(!0), c(X, null, ke(o.withdrawalTypeslist, h => (l(), c(X, {
                key: h.withdrawID
            }, [
                [20, 21, 22].includes(h.withdrawID) ? k("v-if", !0) : (l(), c("div", {
                    key: 0,
                    class: ie({
                        select: o.data_NewSetWithdrawal.type == h.withdrawID
                    }),
                    onClick: a => d(h)
                }, [e("div", null, [o.data_NewSetWithdrawal.type != h.withdrawID ? (l(), c("img", {
                    key: 0,
                    src: h.withBeforeImgUrl
                }, null, 8, Kn)) : (l(), c("img", {
                    key: 1,
                    src: h.withAfterImgUrl
                }, null, 8, Zn))]), e("span", null, t(h.name), 1)], 10, xn))
            ], 64))), 128))]))
        }
    });
const Qn = ne(Gn, [
        ["__scopeId", "data-v-9bae072d"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/withdrawalTypes.vue"]
    ]),
    Yn = {
        class: "quickWay"
    },
    Xn = {
        class: "quickWay-title"
    },
    Jn = {
        class: "quickWay-list"
    },
    eo = ["onClick"],
    to = ae({
        __name: "upiQuickTypes",
        props: {
            bankList: {
                type: Array,
                required: !0
            },
            bankCode: {
                type: String,
                required: !0
            }
        },
        emits: ["onSelectWithdrawalType"],
        setup(f, {
            emit: n
        }) {
            function s(m) {
                n("onSelectWithdrawalType", m.bankCode)
            }
            return (m, i) => {
                const r = V("svg-icon");
                return l(), c("div", Yn, [e("div", Xn, [p(r, {
                    name: "bankCard"
                }), e("p", null, t(m.$t("paymentMethods")), 1)]), e("div", Jn, [(l(!0), c(X, null, ke(m.bankList, d => (l(), c("div", {
                    class: ie(["quickWay-item", {
                        select: m.bankCode == d.bankCode
                    }]),
                    onClick: o => s(d),
                    key: d.bankCode
                }, [e("div", null, [p(r, {
                    name: d.bankCode
                }, null, 8, ["name"])]), e("span", null, t(d.bankName), 1)], 10, eo))), 128))])])
            }
        }
    });
const ao = ne(to, [
        ["__scopeId", "data-v-f10a2e73"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/upiQuickTypes.vue"]
    ]),
    no = {
        class: "explain"
    },
    oo = {
        key: 0,
        class: "Withdraw__content-paymoney"
    },
    so = {
        class: "Withdraw__content-paymoney__title"
    },
    lo = {
        class: "Withdraw__content-paymoney__money-list"
    },
    io = ["onClick"],
    ro = {
        class: "amount"
    },
    co = {
        class: "input"
    },
    uo = {
        class: "place-div"
    },
    po = ["placeholder"],
    vo = {
        key: 1,
        class: "verify"
    },
    _o = {
        class: "balance bank"
    },
    mo = {
        class: "yellow"
    },
    ho = ["value"],
    wo = {
        class: "rightD"
    },
    fo = {
        class: "yellow"
    },
    yo = {
        class: "explain usdt"
    },
    go = {
        class: "head"
    },
    ko = ["src"],
    $o = {
        key: 0
    },
    bo = {
        key: 1
    },
    Co = {
        class: "input"
    },
    To = {
        class: "place-div"
    },
    No = ["placeholder"],
    So = {
        key: 0,
        class: "verify"
    },
    Io = {
        key: 1,
        class: "verify"
    },
    Ao = {
        key: 2,
        class: "input"
    },
    Wo = ["placeholder"],
    Bo = {
        class: "place-div"
    },
    Uo = {
        class: "place-icon"
    },
    Do = ["src"],
    Po = {
        class: "balance usdt"
    },
    Ro = {
        class: "yellow"
    },
    Vo = ["value"],
    Oo = ae({
        __name: "withdrawField",
        props: {
            data_NewSetWithdrawal: {
                type: null,
                required: !0
            },
            withdrawalsrule: {
                type: null,
                required: !0
            },
            withdrawalslist: {
                type: Array,
                required: !0
            },
            verify100: {
                type: Boolean,
                required: !0
            }
        },
        setup(f, {
            expose: n
        }) {
            const s = f,
                {
                    t: m
                } = me(),
                i = j(() => De().getDollarSign),
                r = g(0),
                d = j({
                    get() {
                        return r.value != 0 ? r.value : ""
                    },
                    set(R) {
                        r.value = R
                    }
                }),
                o = Lt(s, "data_NewSetWithdrawal"),
                w = j({
                    get() {
                        return o.value.amount != 0 ? o.value.amount : ""
                    },
                    set(R) {
                        o.value.amount = R
                    }
                }),
                {
                    withdrawalTypeslist: h
                } = Pe(),
                a = j(() => {
                    var se;
                    const R = h.value.find(T => T.withdrawID == 2);
                    return R ? R.recommandWithAmount ? (se = R.recommandWithAmount) == null ? void 0 : se.split(",").map(T => Number(T)) : [] : []
                }),
                _ = g(null),
                v = R => {
                    _.value = R;
                    const se = a.value[R];
                    w.value = se
                },
                S = R => R >= 1e6 ? (R / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : R >= 1e3 ? (R / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : R + "",
                u = j(() => !!(o.value.amount != 0 && (s.verify100 && o.value.amount % 100 !== 0 || o.value.amount > s.withdrawalsrule.canWithdrawAmount || o.value.amount > s.withdrawalsrule.maxPrice || o.value.amount < s.withdrawalsrule.minPrice || s.withdrawalsrule.amountofCode > 0))),
                N = j(() => {
                    if (o.value.amount != 0) {
                        if (s.verify100 && o.value.amount % 100 !== 0) return m("withdrawAmount");
                        if (s.withdrawalsrule.amountofCode > 0) return m("code128");
                        if (o.value.amount > s.withdrawalsrule.canWithdrawAmount) return m("cashBalanceInsufficient");
                        if (o.value.amount > s.withdrawalsrule.maxPrice || o.value.amount < s.withdrawalsrule.minPrice) return m("wordWithdrawal", [de(s.withdrawalsrule.minPrice), de(s.withdrawalsrule.maxPrice)])
                    }
                }),
                y = j(() => o.value.type === 3 && o.value.amount != 0 && Number(o.value.amount) < 10);

            function A(R) {
                R.keyCode != 46 && (R.keyCode < 48 || R.keyCode > 57) && (R.returnValue = !1)
            }

            function W(R) {
                (R.keyCode < 48 || R.keyCode > 57) && (R.returnValue = !1)
            }

            function $() {
                o.value.amount = Number(o.value.amount.toString().replace(/[^\d.]/g, "").replace(/^\./g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")), o.value.amount.toString().length > 11 && (o.value.amount = Number(o.value.amount.toString().slice(0, 11)))
            }

            function q() {
                o.value.amount = Math.floor(s.withdrawalsrule.canWithdrawAmount), o.value.type === 3 && P()
            }

            function I() {
                r.value = Math.floor(r.value)
            }

            function P() {
                if (o.value.amount = Number(o.value.amount.toString().replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3").replace(/^\./g, "")), o.value.amount.toString().length > 11 && (o.value.amount = Number(o.value.amount.toString().slice(0, 11))), o.value.amount > 0) {
                    let R = Number(o.value.amount) / s.withdrawalsrule.uRate;
                    r.value = Math.floor(R * 100) / 100
                } else r.value = 0
            }

            function x() {
                if (r.value.toString().length > 11 && (r.value = Number(r.value.toString().slice(0, 11))), r.value > 0) {
                    let R = r.value * s.withdrawalsrule.uRate;
                    o.value.amount = Math.floor(Math.floor(R * 100) / 100)
                } else o.value.amount = 0
            }
            const J = j(() => {
                if (!o.value.amount) return 0;
                const {
                    withMinPrice: R = 0,
                    withMaxPrice: se = 0,
                    fee: T
                } = s.withdrawalsrule;
                return T > 0 && R <= o.value.amount && o.value.amount <= se ? o.value.amount - o.value.amount * T : o.value.amount
            });
            return n({
                usdtCount: r,
                data: o,
                showValidate: u,
                showValidateUB: y
            }), (R, se) => {
                const T = V("svg-icon");
                return l(), c(X, null, [re(e("div", no, [a.value.length > 0 && o.value.type === 2 && R.withdrawalslist.length > 0 ? (l(), c("div", oo, [e("div", so, [p(T, {
                    name: "saveWallet"
                }), e("p", null, t(R.$t("withdrawalA")), 1)]), e("div", lo, [(l(!0), c(X, null, ke(a.value, (te, E) => (l(), c("div", {
                    class: ie(["Withdraw__content-paymoney__money-list__item", _.value === E ? "active" : ""]),
                    key: E,
                    onClick: U => v(E)
                }, [e("div", ro, t(S(Number(te))), 1)], 10, io))), 128))])])) : k("v-if", !0), e("div", co, [e("div", uo, t(i.value), 1), re(e("input", {
                    placeholder: R.$t("enterAmount"),
                    onInput: se[0] || (se[0] = te => $()),
                    class: "inp",
                    "onUpdate:modelValue": se[1] || (se[1] = te => w.value = te),
                    onKeypress: se[2] || (se[2] = te => A(te))
                }, null, 40, po), [
                    [fe, w.value]
                ])]), u.value ? (l(), c("div", vo, t(N.value), 1)) : k("v-if", !0), e("div", _o, [e("div", null, [e("span", null, [L(t(R.$t("wfDesc1")) + " ", 1), e("h6", mo, t(C(de)(R.withdrawalsrule.canWithdrawAmount || 0)), 1)]), e("input", {
                    type: "button",
                    value: R.$t("all"),
                    onClick: q
                }, null, 8, ho)]), e("div", null, [e("span", null, t(R.$t("wfDesc2")), 1), e("div", wo, [e("span", fo, t(C(de)(J.value)), 1)])])])], 512), [
                    [_t, [1, 2, 27, 6, 8, 5].includes(o.value.type)]
                ]), re(e("div", yo, [e("div", go, [e("img", {
                    src: C(ge)("wallet/withdrawType", String(o.value.type))
                }, null, 8, ko), o.value.type == 3 ? (l(), c("h1", $o, t(R.$t("selectUSDTNum")), 1)) : k("v-if", !0), o.value.type == 10 ? (l(), c("h1", bo, t(R.$t("selectUSDTAmount")), 1)) : k("v-if", !0)]), e("div", Co, [e("div", To, t(i.value), 1), re(e("input", {
                    type: "number",
                    placeholder: R.$t("enterWithdrawAmount"),
                    onInput: P,
                    class: "inp",
                    "onUpdate:modelValue": se[3] || (se[3] = te => w.value = te),
                    onKeypress: se[4] || (se[4] = te => W(te))
                }, null, 40, No), [
                    [fe, w.value]
                ])]), u.value ? (l(), c("div", So, t(N.value), 1)) : k("v-if", !0), y.value ? (l(), c("div", Io, t(R.$t("wfDesc4")), 1)) : k("v-if", !0), [3].includes(o.value.type) ? (l(), c("div", Ao, [re(e("input", {
                    type: "number",
                    placeholder: R.$t("enterUSDTAmount"),
                    onInput: x,
                    class: "inp",
                    "onUpdate:modelValue": se[5] || (se[5] = te => d.value = te),
                    onKeypress: se[6] || (se[6] = te => W(te)),
                    onFocus: I
                }, null, 40, Wo), [
                    [fe, d.value]
                ]), e("div", Bo, [e("div", Uo, [e("img", {
                    src: C(ge)("wallet/withdrawType", "3")
                }, null, 8, Do)])])])) : k("v-if", !0), e("div", Po, [e("div", null, [e("span", null, [L(t(R.$t("wfDesc5")) + " ", 1), e("h6", Ro, t(C(de)(R.withdrawalsrule.canWithdrawAmount || 0)), 1)]), e("input", {
                    type: "button",
                    value: R.$t("all"),
                    onClick: q
                }, null, 8, Vo)])])], 512), [
                    [_t, [3, 10].includes(o.value.type)]
                ])], 64)
            }
        }
    });
const Mo = ne(Oo, [
        ["__scopeId", "data-v-cb5583fe"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/withdrawField.vue"]
    ]),
    Lo = {
        key: 0,
        class: "addWithdrawType"
    },
    qo = ["src"],
    jo = {
        key: 0,
        class: "addWithdrawType-text"
    },
    Fo = ae({
        __name: "AddWithdrawType",
        props: {
            isShowhintTextO: {
                type: Boolean,
                required: !1,
                default: !1
            },
            hintTextO: {
                type: String,
                required: !1,
                default: ""
            },
            type: {
                type: null,
                required: !1,
                default: ""
            }
        },
        setup(f) {
            const n = f,
                s = ue(),
                m = Ie(),
                {
                    t: i
                } = me(),
                r = tt(),
                d = i("addAddr");
            let o = i("paymentMethodRequired");
            const {
                getSelfCustomerServiceLink: w
            } = gt({
                ServerType: 2
            }), h = j(() => !([3, 10].includes(n.type) && r.getADDUSTD == 0)), a = () => {
                w("addUSTD")
            };

            function _() {
                const S = {
                    1: "Withdraw-AddBankCard",
                    2: "Withdraw-AddUpi",
                    3: "Withdraw-AddUSDT",
                    4: "Withdraw-AddType4",
                    5: "Withdraw-AddPIX",
                    6: "Withdraw-AddWave",
                    8: "Withdraw-AddKbz",
                    10: "Withdraw-AddUSDT"
                };
                s.replace({
                    name: S[n.type],
                    query: {
                        fromV: m.name
                    }
                })
            }
            const v = j(() => ({
                1: i("titleAddBankCard"),
                2: i("addUpi"),
                3: i("addAddr"),
                4: i("addWallet"),
                5: i("upiAddPaymentMethod"),
                6: i("addWaveType"),
                8: i("upiAddPaymentMethod"),
                10: i("addAddr")
            })[n.type]);
            return (S, u) => {
                const N = V("svg-icon");
                return h.value ? (l(), c("div", Lo, [e("div", {
                    class: "addWithdrawType-top",
                    onClick: _
                }, [e("img", {
                    src: C(dt)("wallet/withdraw", "add")
                }, null, 8, qo), e("span", null, t(v.value || C(d)), 1)]), S.isShowhintTextO ? (l(), c("div", jo, t(S.hintTextO || C(o)), 1)) : k("v-if", !0)])) : (l(), c("div", {
                    key: 1,
                    class: "canNotAdd",
                    onClick: a
                }, [p(N, {
                    name: "customer_b",
                    class: "forgetbg"
                }), L(" " + t(S.$t("contactServicer") + S.$t("titleAddUSDTAddr")), 1)]))
            }
        }
    });
const pt = ne(Fo, [
        ["__scopeId", "data-v-ef5c8333"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/AddWithdrawType.vue"]
    ]),
    zo = {
        class: "Recharge__container-intro"
    },
    Eo = {
        class: "br"
    },
    Ho = ["innerHTML"],
    xo = {
        class: "red"
    },
    Ko = {
        class: "red"
    },
    Zo = {
        class: "red"
    },
    Go = {
        key: 0
    },
    Qo = ["innerHTML"],
    Yo = {
        key: 0
    },
    Xo = ["innerHTML"],
    Jo = ["innerHTML"],
    es = ["innerHTML"],
    ts = ["innerHTML"],
    as = ["innerHTML"],
    ns = ["innerHTML"],
    os = ae({
        __name: "InstructionsW",
        props: {
            withdrawalsrule: {
                type: null,
                required: !0
            },
            withdrawType: {
                type: null,
                required: !1
            },
            award: {
                type: null,
                required: !1
            },
            name: {
                type: null,
                required: !1
            }
        },
        setup(f) {
            return (n, s) => {
                var m, i, r, d, o, w, h, a, _, v, S, u;
                return l(), c("div", zo, [e("div", Eo, [n.withdrawType == 21 ? (l(), c(X, {
                    key: 0
                }, [e("p", null, t(n.$t("arWTip1", [n.name])), 1), e("p", null, t(n.$t("arWTip2", [n.name])), 1)], 64)) : k("v-if", !0), [1, 2, 3, 4, 5, 6, 8, 10, 20, 21, 27].includes(n.withdrawType) ? (l(), c(X, {
                    key: 1
                }, [e("p", {
                    innerHTML: n.$t("instructionDes", [C(de)((m = n.withdrawalsrule) == null ? void 0 : m.amountofCode)])
                }, null, 8, Ho), e("p", null, [L(t(n.$t("instructionTxt6")) + " ", 1), e("span", xo, t((i = n.withdrawalsrule) == null ? void 0 : i.startTime) + "-" + t((r = n.withdrawalsrule) == null ? void 0 : r.endTime), 1)]), e("p", null, [L(t(n.$t("instructionTxt7")), 1), e("span", Ko, t((d = n.withdrawalsrule) == null ? void 0 : d.withdrawRemainingCount), 1)]), e("p", null, [L(t(n.$t("instructionTxt8")) + " ", 1), e("span", Zo, t(C(de)((o = n.withdrawalsrule) == null ? void 0 : o.minPrice)) + "-" + t(C(de)((w = n.withdrawalsrule) == null ? void 0 : w.maxPrice)), 1)])], 64)) : k("v-if", !0), [3, 10].includes(n.withdrawType) ? (l(), c(X, {
                    key: 2
                }, [e("p", null, t(n.$t("instructionTxt10")), 1), e("p", null, t(n.$t("instructionTxt11")), 1)], 64)) : k("v-if", !0), n.withdrawType == 4 ? (l(), c(X, {
                    key: 3
                }, [Number(n.award) ? (l(), c("div", Go, [e("p", {
                    innerHTML: n.$t("c2cFTip1", [n.name, n.award * 100 || 0])
                }, null, 8, Qo)])) : k("v-if", !0)], 64)) : k("v-if", !0), n.withdrawType == 20 ? (l(), c(X, {
                    key: 4
                }, [Number(n.award) ? (l(), c("div", Yo, [e("p", {
                    innerHTML: n.$t("c2cFTip1", [n.name, n.award * 100 || 0])
                }, null, 8, Xo)])) : k("v-if", !0), e("div", null, [e("p", {
                    innerHTML: n.$t("c2cFTip4")
                }, null, 8, Jo)]), e("div", null, [e("p", {
                    innerHTML: n.$t("c2cFTip2", [((h = n.withdrawalsrule) == null ? void 0 : h.c2cUnitAmount) || 100])
                }, null, 8, es)]), e("div", null, [e("p", {
                    innerHTML: n.$t("c2cFTip3")
                }, null, 8, ts)])], 64)) : k("v-if", !0), n.withdrawType != 21 ? (l(), c(X, {
                    key: 5
                }, [(a = n.withdrawalsrule) != null && a.fee ? (l(), c(X, {
                    key: 0
                }, [((_ = n.withdrawalsrule) == null ? void 0 : _.withMinPrice) + ((v = n.withdrawalsrule) == null ? void 0 : v.withMaxPrice) ? (l(), c("p", {
                    key: 0,
                    innerHTML: n.$t("sxf", [C(de)((S = n.withdrawalsrule) == null ? void 0 : S.withMinPrice), C(de)((u = n.withdrawalsrule) == null ? void 0 : u.withMaxPrice)])
                }, null, 8, as)) : k("v-if", !0), e("p", {
                    innerHTML: n.$t("sxf1", [Math.floor(n.withdrawalsrule.fee * 1e4 / 100).toFixed(2)])
                }, null, 8, ns)], 64)) : k("v-if", !0), e("p", null, t(n.$t("withdrwsTip5")), 1), e("p", null, t(n.$t("withdrwsTip6")), 1)], 64)) : k("v-if", !0)])])
            }
        }
    });
const vt = ne(os, [
        ["__scopeId", "data-v-76eb7f31"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/InstructionsW.vue"]
    ]),
    Ye = f => (Ne("data-v-391308ac"), f = f(), Se(), f),
    ss = {
        class: "c2cConfirm"
    },
    ls = Ye(() => e("p", null, [L("*You must click "), e("span", null, "【Confirm Receipt】")], -1)),
    is = Ye(() => e("p", null, "*After receiving the transfer, go to order details and click 【Confirm Receipt】to receive the reward.", -1)),
    rs = Ye(() => e("h6", null, [L("How to "), e("span", null, "【Confirm Receipt】")], -1)),
    ds = {
        class: "imgBox"
    },
    cs = {
        class: "box"
    },
    us = Ye(() => e("div", null, [e("h6", null, "01、"), L("Open my withdrawal record")], -1)),
    ps = {
        class: "box"
    },
    vs = Ye(() => e("div", null, "02、Select New-UPI Click Order", -1)),
    _s = {
        class: "box"
    },
    ms = Ye(() => e("div", null, "03、Click to Money received", -1)),
    hs = {
        class: "box"
    },
    ws = Ye(() => e("div", null, "04、Complete the order and get rewards", -1)),
    fs = Ye(() => e("span", null, "[Money received]", -1)),
    ys = ae({
        __name: "c2cConfirm",
        props: {
            showC2c: {
                type: Boolean,
                default: !1,
                required: !0
            }
        },
        emits: ["update:showC2c"],
        setup(f, {
            emit: n
        }) {
            const s = f,
                {
                    showC2c: m
                } = ft(s, n),
                i = g(!1);

            function r() {
                if (!i.value) return z({
                    message: "Please read the process and check the box to agree",
                    wordBreak: "break-word"
                });
                localStorage.setItem("isC2cCheck", "1"), m.value = !1
            }
            return _e(() => {
                localStorage.getItem("isC2cCheck") != null && (i.value = localStorage.getItem("isC2cCheck") == "1")
            }), (d, o) => {
                const w = V("van-checkbox"),
                    h = Fe("lazy");
                return l(), c("div", ss, [ls, is, rs, e("div", ds, [e("div", cs, [us, re(e("img", null, null, 512), [
                    [h, C(ge)("wallet/withdraw/c2c", "1")]
                ])]), e("div", ps, [vs, re(e("img", null, null, 512), [
                    [h, C(ge)("wallet/withdraw/c2c", "2")]
                ])]), e("div", _s, [ms, re(e("img", null, null, 512), [
                    [h, C(ge)("wallet/withdraw/c2c", "3")]
                ])]), e("div", hs, [ws, re(e("img", null, null, 512), [
                    [h, C(ge)("wallet/withdraw/c2c", "4")]
                ])])]), p(w, {
                    modelValue: i.value,
                    "onUpdate:modelValue": o[0] || (o[0] = a => i.value = a)
                }, {
                    default: G(() => [L("I already understand the process and agree to come back and click "), fs]),
                    _: 1
                }, 8, ["modelValue"]), e("div", {
                    class: ie(["btn", {
                        active: i.value
                    }]),
                    onClick: r
                }, "confirm", 2)])
            }
        }
    });
const gs = ne(ys, [
        ["__scopeId", "data-v-391308ac"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/c2cConfirm.vue"]
    ]),
    ks = {
        class: "c2cWithdraw__C"
    },
    $s = {
        class: "c2cWithdraw__C-input"
    },
    bs = {
        class: "place-div"
    },
    Cs = {
        class: "unit"
    },
    Ts = {
        key: 0,
        class: "verify"
    },
    Ns = {
        class: "can-withdraw"
    },
    Ss = {
        class: "c2cWithdraw__C-tip"
    },
    Is = {
        class: "c2cWithdraw__C-tip-l"
    },
    As = {
        class: "c2cWithdraw__C-tip-r"
    },
    Ws = {
        class: "c2cWithdraw__T"
    },
    Bs = {
        class: "c2cWithdraw__T-h"
    },
    Us = 20,
    Ds = ae({
        __name: "c2cField",
        props: {
            c2crule: {
                type: null,
                required: !0
            },
            c2cAward: {
                type: null,
                required: !0
            },
            c2cName: {
                type: String,
                required: !0
            }
        },
        emits: ["setc2cAmount"],
        setup(f, {
            emit: n
        }) {
            const s = f,
                {
                    t: m
                } = me(),
                i = g(0),
                r = j(() => De().getDollarSign),
                d = j(() => Number(i.value) ? Number(i.value) * (s.c2crule.c2cUnitAmount || 100) : 0),
                o = j(() => d.value * s.c2cAward),
                w = () => {
                    const _ = Math.floor(s.c2crule.canWithdrawAmount / 100),
                        v = Math.floor(s.c2crule.maxPrice / 100);
                    i.value = _ > v ? v : _
                },
                h = _ => {
                    n("setc2cAmount", _ * (s.c2crule.c2cUnitAmount || 100))
                },
                a = j(() => {
                    if (d.value != 0) {
                        if (d.value > s.c2crule.canWithdrawAmount) return console.log("1", d.value, s.c2crule.canWithdrawAmount), m("cashBalanceInsufficient");
                        if (d.value > s.c2crule.maxPrice || d.value < s.c2crule.minPrice) return console.log("0"), m("wordWithdrawal", [de(s.c2crule.minPrice), de(s.c2crule.maxPrice)])
                    }
                    return ""
                });
            return _e(() => {}), (_, v) => {
                var N;
                const S = V("van-field"),
                    u = V("svg-icon");
                return l(), c(X, null, [e("div", ks, [e("div", $s, [e("div", bs, t(r.value), 1), p(S, {
                    modelValue: i.value,
                    "onUpdate:modelValue": [v[0] || (v[0] = y => i.value = y), h],
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    placeholder: _.$t("plsEnterQuantity"),
                    class: "amount-input"
                }, null, 8, ["modelValue", "placeholder"]), e("div", Cs, t(((N = _.c2crule.c2cUnitAmount) == null ? void 0 : N.toString().substring(1)) || "00"), 1)]), a.value ? (l(), c("div", Ts, t(a.value), 1)) : k("v-if", !0), e("div", Ns, [L(t(_.$t("wfDesc1")) + " " + t(C(de)(_.c2crule.canWithdrawAmount || 0)) + " ", 1), e("div", {
                    onClick: w
                }, t(_.$t("all")), 1)]), e("div", Ss, [e("div", Is, [e("div", null, t(_.$t("wfDesc2")), 1), e("div", null, t(_.$t("savedForYou")), 1)]), e("div", As, [e("div", null, t(C(de)(d.value)), 1), e("div", null, t(C(de)(o.value)), 1)])]), nt(_.$slots, "default", {}, void 0, !0)]), e("div", Ws, [e("div", Bs, [p(u, {
                    name: "shuoming"
                }), L(" " + t(_.$t("withdrawalInstructions")), 1)]), p(vt, {
                    withdrawType: Us,
                    withdrawalsrule: _.c2crule,
                    award: _.c2cAward,
                    name: _.c2cName
                }, null, 8, ["withdrawalsrule", "award", "name"])])], 64)
            }
        }
    });
const Ps = ne(Ds, [
        ["__scopeId", "data-v-472a2df8"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/c2cField.vue"]
    ]),
    Rs = {
        class: "title"
    },
    Vs = {
        class: "name"
    },
    Os = ae({
        __name: "c2cUpi",
        props: {
            withdrawalslist: {
                type: Array,
                default: () => []
            },
            withdrawalType: {
                type: Number,
                default: 2
            },
            bid: {
                default: -0
            },
            bankCode: {
                type: String,
                default: ""
            }
        },
        setup(f) {
            const n = f,
                s = Ie(),
                m = ue(),
                i = j(() => n.withdrawalslist.find(d => d.bid == n.bid)),
                r = (d = {}) => {
                    const o = n.withdrawalType == 2 ? "Withdraw-Upi" : "Withdraw-FastUpi";
                    m.replace({
                        name: o,
                        query: {
                            bid: (d == null ? void 0 : d.bid) || "",
                            fromV: s.name,
                            bankCode: n.bankCode || ""
                        }
                    })
                };
            return (d, o) => {
                const w = V("svg-icon"),
                    h = V("van-icon");
                return l(), c("div", {
                    class: ie(["c2cUpi", {
                        noUpi: !i.value
                    }]),
                    onClick: o[0] || (o[0] = a => r(i.value))
                }, [i.value ? (l(), c(X, {
                    key: 0
                }, [e("div", Rs, [p(w, {
                    name: i.value.bankCode || "upi"
                }, null, 8, ["name"]), e("span", null, t(C(et)(i.value.bankCode) || i.value.upiName), 1)]), e("div", Vs, t(i.value.upiAccount), 1), p(h, {
                    name: "arrow",
                    class: "right-icon",
                    size: "12"
                })], 64)) : (l(), c(X, {
                    key: 1
                }, [L(t(d.$t("addUpi")), 1)], 64))], 2)
            }
        }
    });
const Vt = ne(Os, [
        ["__scopeId", "data-v-fe54ed07"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/c2cUpi.vue"]
    ]),
    Ms = f => (Ne("data-v-15989e8c"), f = f(), Se(), f),
    Ls = ["onClick"],
    qs = {
        class: "c2cRecord__C-item-h"
    },
    js = {
        class: "title"
    },
    Fs = {
        key: 0
    },
    zs = {
        key: 1
    },
    Es = {
        class: "c2cRecord__C-item-a"
    },
    Hs = {
        class: "title"
    },
    xs = {
        class: "c2cRecord__C-item-u"
    },
    Ks = Ms(() => e("span", {
        class: "title"
    }, "UTR", -1)),
    Zs = {
        class: "c2cRecord__C-item-t"
    },
    Gs = {
        class: "title"
    },
    Qs = {
        class: "c2cRecord__C-item-id"
    },
    Ys = {
        class: "title"
    },
    Xs = ae({
        __name: "c2cRecordList",
        props: {
            list: {
                type: Array,
                required: !0
            }
        },
        setup(f) {
            const n = f,
                {
                    t: s
                } = me(),
                m = ue(),
                i = [s("c2cState0"), s("c2cState1"), s("c2cState2"), s("c2cState3"), s("c2cState4"), s("c2cTip9"), s("c2cState6"), s("c2cState7"), s("c2cState8"), s("c2cState9"), s("c2cState10"), s("c2cState11"), s("c2cState11"), s("c2cState13"), s("c2cState14")],
                r = g(null),
                d = g(0),
                o = g("00:00"),
                w = g("00:00"),
                h = g(null),
                a = g(null),
                _ = (N, y) => {
                    localStorage.setItem("c2cOrderNo", N), m.push({
                        name: "Withdraw-C2cDetail",
                        query: {
                            order: N,
                            state: y
                        }
                    })
                };
            qe(() => n.list, N => {
                if (r.value = N.findIndex(A => A.state === 1), r.value != -1) {
                    const A = N[r.value].serviceTime.replace(/-/g, "/"),
                        W = N[r.value].confrimEndTime.replace(/-/g, "/");
                    d.value = new Date(W).getTime() - new Date(A).getTime(), d.value > 0 ? (clearInterval(h.value), S()) : o.value = "00:00"
                } else o.value = "00:00";
                let y = N.find(A => A.state === 11 || A.state === 12);
                if (y) {
                    const A = y.auditEndTime.replace(/-/g, "/"),
                        W = y.serviceTime.replace(/-/g, "/");
                    d.value = new Date(W).getTime() - new Date(A).getTime(), clearInterval(a.value), u()
                } else w.value = "00:00"
            });
            const v = N => {
                const y = Math.floor(N / 36e5),
                    A = Math.floor((N - y * 36e5) / 6e4),
                    W = Math.floor((N - y * 36e5 - A * 6e4) / 1e3);
                return console.log("hours", y), `${y?y.toString().padStart(2,"0")+":":""}${A.toString().padStart(2,"0")}:${W.toString().padStart(2,"0")}`
            };

            function S() {
                h.value = setInterval(() => {
                    d.value -= 1e3, o.value = v(d.value), d.value <= 0 && clearInterval(h.value)
                }, 1e3)
            }

            function u() {
                a.value = setInterval(() => {
                    d.value += 1e3, w.value = v(d.value)
                }, 1e3)
            }
            return yt(() => {
                clearInterval(h.value), clearInterval(a.value)
            }), (N, y) => {
                const A = V("van-icon"),
                    W = V("svg-icon");
                return l(!0), c(X, null, ke(N.list, ($, q) => (l(), c("div", {
                    key: q,
                    class: "c2cRecord__C-item",
                    onClick: I => _($.orderNo, $.state)
                }, [e("div", qs, [e("div", js, t(N.$t("withdraw")), 1), e("div", {
                    class: ie(["state" + $.state])
                }, [L(t(i[$.state]) + " ", 1), $.state === 1 ? (l(), c("span", Fs, t(o.value), 1)) : k("v-if", !0), [11, 12].includes($.state) ? (l(), c("span", zs, ": " + t(w.value), 1)) : k("v-if", !0), $.state != 2 ? (l(), we(A, {
                    key: 2,
                    name: "arrow",
                    size: "14"
                })) : k("v-if", !0)], 2)]), e("div", Es, [e("span", Hs, t(N.$t("amount")), 1), L(" " + t(C(de)($.orderAmount)), 1)]), e("div", xs, [Ks, e("span", null, [L(t($.transactionNo), 1), p(W, {
                    name: "copy",
                    onClick: Dt(I => C(Ze)($.transactionNo), ["stop"])
                }, null, 8, ["onClick"])])]), e("div", Zs, [e("span", Gs, t(N.$t("time")), 1), L(t($.createTime), 1)]), e("div", Qs, [e("span", Ys, t(N.$t("orderNo")), 1), e("span", null, [L(t($.orderNo), 1), p(W, {
                    name: "copy",
                    onClick: Dt(I => C(Ze)($.orderNo), ["stop"])
                }, null, 8, ["onClick"])])])], 8, Ls))), 128)
            }
        }
    });
const Js = ne(Xs, [
        ["__scopeId", "data-v-15989e8c"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/c2cRecordList.vue"]
    ]),
    el = {
        class: "c2cRecord__C"
    },
    tl = {
        class: "c2cRecord__C-head"
    },
    al = {
        class: "c2cRecord__C-body"
    },
    nl = ae({
        __name: "c2cRecord",
        setup(f, {
            expose: n
        }) {
            const s = ue(),
                m = g(),
                i = g({
                    startDate: "",
                    endDate: "",
                    type: -1,
                    state: -1,
                    category: -1
                }),
                r = g([]),
                d = () => {
                    s.push({
                        name: "WithdrawHistory"
                    })
                };
            return n({
                resetRefresh: () => {
                    m.value.resetRefresh()
                }
            }), (w, h) => (l(), c("div", el, [e("div", tl, t(w.$t("c2CWithdrawalRecord")), 1), e("div", al, [p(an, {
                list: r.value,
                "onUpdate:list": h[0] || (h[0] = a => r.value = a),
                "page-query": i.value,
                "onUpdate:pageQuery": h[1] || (h[1] = a => i.value = a),
                api: C(Ba),
                distance: 100,
                ref_key: "listRef",
                ref: m,
                "is-auto-load": !0,
                showNoM: !1
            }, {
                content: G(() => [p(Js, {
                    list: r.value
                }, null, 8, ["list"])]),
                _: 1
            }, 8, ["list", "page-query", "api"])]), e("div", {
                class: "c2cRecord__C-allrecord",
                onClick: d
            }, t(w.$t("allRecords")), 1)]))
        }
    });
const ol = ne(nl, [
        ["__scopeId", "data-v-824a4891"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/c2cRecord.vue"]
    ]),
    sl = {
        class: "WC4__C"
    },
    ll = {
        class: "WC4__C-input"
    },
    il = {
        class: "place-div"
    },
    rl = {
        key: 0,
        class: "verify"
    },
    dl = {
        class: "can-withdraw"
    },
    cl = {
        class: "amount"
    },
    ul = {
        class: "num"
    },
    pl = 4,
    vl = ae({
        __name: "wC4Field",
        props: {
            rule: {
                type: null,
                required: !0
            },
            award: {
                type: null,
                required: !0
            },
            name: {
                type: String,
                required: !0
            },
            wtype: {
                type: Number,
                required: !0
            },
            verify100: {
                type: Boolean,
                required: !0
            }
        },
        emits: ["setc2cAmount"],
        setup(f, {
            emit: n
        }) {
            const s = f,
                {
                    t: m
                } = me(),
                i = g(0),
                r = j(() => De().getDollarSign);
            qe(() => s.wtype, a => {
                console.log("1232"), i.value = 0
            });
            const d = j(() => {
                    if (!i.value) return 0;
                    const {
                        withMinPrice: a = 0,
                        withMaxPrice: _ = 0,
                        fee: v
                    } = s.rule;
                    return v > 0 && a <= i.value && i.value <= _ ? i.value - i.value * v : i.value
                }),
                o = () => {
                    const a = s.rule.canWithdrawAmount,
                        _ = s.rule.maxPrice;
                    i.value = a > _ ? _ : a
                },
                w = a => {
                    n("setc2cAmount", a)
                },
                h = j(() => {
                    if (i.value != 0) {
                        if (s.verify100 && i.value % 100 !== 0) return m("withdrawAmount");
                        if (i.value > s.rule.canWithdrawAmount) return m("cashBalanceInsufficient");
                        if (i.value > s.rule.maxPrice || i.value < s.rule.minPrice) return m("wordWithdrawal", [de(s.rule.minPrice), de(s.rule.maxPrice)])
                    }
                    return ""
                });
            return _e(() => {}), (a, _) => {
                const v = V("van-field");
                return l(), c("div", sl, [e("div", ll, [e("div", il, t(r.value), 1), p(v, {
                    modelValue: i.value,
                    "onUpdate:modelValue": [_[0] || (_[0] = S => i.value = S), w],
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    placeholder: a.$t("plsEnterQuantity"),
                    class: "amount-input"
                }, null, 8, ["modelValue", "placeholder"])]), h.value ? (l(), c("div", rl, t(h.value), 1)) : k("v-if", !0), e("div", dl, [L(t(a.$t("wfDesc1")) + " " + t(C(de)(a.rule.canWithdrawAmount || 0)) + " ", 1), e("div", {
                    onClick: o
                }, t(a.$t("all")), 1)]), e("div", cl, [e("div", null, t(a.$t("wfDesc2")), 1), e("div", ul, t(C(de)(d.value)), 1)]), nt(a.$slots, "default", {}, void 0, !0), p(vt, {
                    withdrawType: pl,
                    withdrawalsrule: a.rule,
                    award: a.award,
                    name: a.name
                }, null, 8, ["withdrawalsrule", "award", "name"])])
            }
        }
    });
const _l = ne(vl, [
        ["__scopeId", "data-v-81d3a4d3"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/wC4Field.vue"]
    ]),
    ml = {
        class: "name"
    },
    hl = {
        class: "title"
    },
    wl = {
        class: "name"
    },
    fl = ae({
        __name: "wC4Id",
        props: {
            withdrawalslist: {
                type: Array,
                default: () => []
            },
            bid: {
                default: -0
            },
            withdrawType: {
                default: 4
            },
            name: {
                default: ""
            }
        },
        setup(f) {
            const n = f,
                s = Ie(),
                m = ue(),
                i = j(() => n.withdrawalslist.find(o => o.bid == n.bid) || {}),
                r = j(() => n.withdrawalslist.length > 0 ? n.withdrawalslist[0] : {}),
                d = o => {
                    if (n.withdrawType === 22) n.bid || m.replace({
                        name: "Withdraw-AddRsnPay",
                        query: {
                            Type4name: n.name
                        }
                    });
                    else {
                        if ([23, 24].includes(n.withdrawType) && n.withdrawalslist.length) return;
                        m.replace({
                            name: "Withdraw-Type4",
                            query: {
                                bid: o,
                                fromV: s.name,
                                Type4name: n.name,
                                withdrawType: n.withdrawType
                            }
                        })
                    }
                };
            return _e(() => {}), (o, w) => {
                const h = V("van-icon");
                return [4, 23, 24].includes(f.withdrawType) ? (l(), c("div", {
                    key: 0,
                    class: ie(["wC4Id", {
                        noUpi: !f.withdrawalslist.length
                    }]),
                    onClick: w[0] || (w[0] = a => d(i.value.bid))
                }, [f.withdrawalslist.length ? (l(), c(X, {
                    key: 0
                }, [e("div", {
                    class: ie(["title", `${i.value.walletName}`])
                }, t(i.value.walletName), 3), e("div", ml, t(i.value.mobileNO), 1), p(h, {
                    name: "arrow",
                    class: "right-icon",
                    size: "12"
                })], 64)) : (l(), c(X, {
                    key: 1
                }, [L(t(o.$t("addto")), 1)], 64))], 2)) : (l(), c("div", {
                    key: 1,
                    class: ie(["wC4Id rnsData", {
                        noUpi: !f.withdrawalslist.length
                    }]),
                    onClick: w[1] || (w[1] = a => d(r.value.bid))
                }, [f.withdrawalslist.length ? (l(), c(X, {
                    key: 0
                }, [e("div", hl, t(r.value.bankName), 1), e("div", wl, t(r.value.mobileNo), 1)], 64)) : (l(), c(X, {
                    key: 1
                }, [L(t(o.$t("addto")), 1)], 64))], 2))
            }
        }
    });
const yl = ne(fl, [
        ["__scopeId", "data-v-8fab5987"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/wC4Id.vue"]
    ]),
    gl = f => (Ne("data-v-b6d0c70a"), f = f(), Se(), f),
    kl = {
        class: "arCard"
    },
    $l = {
        class: "left"
    },
    bl = ["src"],
    Cl = {
        key: 0,
        class: "tip"
    },
    Tl = {
        class: "tit"
    },
    Nl = {
        class: "wallet_amount"
    },
    Sl = gl(() => e("em", null, "rsn", -1)),
    Il = ae({
        __name: "RsnType",
        props: {
            withdrawalslist: {
                type: Array,
                default: () => []
            },
            currentType: {
                type: Object,
                default: {
                    withBeforeImgUrl: ""
                }
            },
            rsnInfo: {
                type: Object,
                default: {
                    balance: 0,
                    walletActivationStatus: 0,
                    walletAddress: ""
                }
            },
            bid: {
                default: -0
            },
            withdrawType: {
                default: 4
            },
            name: {
                default: ""
            }
        },
        emits: ["getRnsTypeInfo"],
        setup(f, {
            emit: n
        }) {
            const s = f,
                {
                    goActive: m,
                    goWallet: i
                } = Ft(),
                r = () => {
                    s.rsnInfo.walletActivationStatus === 0 ? m("wallet/recharge", "RSN") : i("wallet/recharge", "RSN")
                };
            return _e(() => {
                n("getRnsTypeInfo")
            }), (d, o) => {
                var w, h, a;
                return l(), c("div", kl, [e("div", $l, [e("img", {
                    src: (w = f.currentType) == null ? void 0 : w.withBeforeImgUrl
                }, null, 8, bl), e("div", null, [((h = f.rsnInfo) == null ? void 0 : h.walletActivationStatus) === 0 ? (l(), c("div", Cl, t(d.$t("rnsNoActive")), 1)) : (l(), c(X, {
                    key: 1
                }, [e("div", Tl, t(d.$t("RSNTip")), 1), e("div", Nl, [e("em", null, t(d.$t("balance")) + ":", 1), L(t(((a = f.rsnInfo) == null ? void 0 : a.balance) || 0) + " ", 1), Sl])], 64))])]), e("div", {
                    class: "right",
                    onClick: r
                }, t(f.rsnInfo.walletActivationStatus === 0 ? d.$t("RNSActive") : d.$t("comminWallet")), 1)])
            }
        }
    });
const Al = ne(Il, [
        ["__scopeId", "data-v-b6d0c70a"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/RsnType.vue"]
    ]),
    Wl = {
        class: "c2cWithdraw__C"
    },
    Bl = {
        class: "head"
    },
    Ul = {
        class: "c2cWithdraw__C-input"
    },
    Dl = {
        class: "place-div"
    },
    Pl = {
        key: 0,
        class: "verify"
    },
    Rl = {
        class: "can-withdraw"
    },
    Vl = {
        class: "c2cWithdraw__C-tip"
    },
    Ol = {
        class: "c2cWithdraw__C-tip-l"
    },
    Ml = {
        class: "c2cWithdraw__C-tip-r"
    },
    Ll = {
        class: "c2cWithdraw__T"
    },
    ql = {
        class: "c2cWithdraw__T-h"
    },
    Ot = 21,
    jl = ae({
        __name: "arField",
        setup(f, {
            expose: n
        }) {
            const {
                withdrawalsrule: s,
                withdrawalTypeslist: m,
                setc2cAmount: i
            } = Pe(), {
                t: r
            } = me(), d = g(0), o = j(() => De().getDollarSign), w = j(() => Number(d.value) ? Number(d.value) : 0);
            j(() => {
                var S;
                const v = m.value.find(u => u.withdrawID == Ot);
                return v ? v.recommandWithAmount ? (S = v.recommandWithAmount) == null ? void 0 : S.split(",").map(u => Number(u)) : [] : []
            }), g(null);
            const h = () => {
                    const v = Math.floor(s.value.canWithdrawAmount),
                        S = Math.floor(s.value.maxPrice);
                    d.value = v > S ? S : v
                },
                a = v => {
                    i(v)
                },
                _ = j(() => {
                    if (w.value != 0) {
                        if (w.value > s.value.canWithdrawAmount) return r("cashBalanceInsufficient");
                        if (w.value > s.value.maxPrice || w.value < s.value.minPrice) return r("wordWithdrawal", [de(s.value.minPrice), de(s.value.maxPrice)])
                    }
                    return ""
                });
            return n({
                validateTxt: _
            }), (v, S) => {
                var y;
                const u = V("svg-icon"),
                    N = V("van-field");
                return l(), c(X, null, [e("div", Wl, [e("div", Bl, [p(u, {
                    name: "saveWallet"
                }), L(" " + t(v.$t("enterA")), 1)]), k('		<div class="Withdraw__content-paymoney" v-if="quickList.length > 0">'), k('			<div class="Withdraw__content-paymoney__money-list">'), k("				<div"), k('					class="Withdraw__content-paymoney__money-list__item"'), k(`					:class="currentQuickIndex === index ? 'active' : ''"`), k('					v-for="(item, index) in quickList"'), k('					:key="index"'), k('					@click="handleQuickSelect(index)"'), k("				>"), k('					<div class="amount" >'), k("						{{formatNum(Number(item))}}"), k("					</div>"), k("				</div>"), k("			</div>"), k("		</div>"), e("div", Ul, [e("div", Dl, t(o.value), 1), p(N, {
                    modelValue: d.value,
                    "onUpdate:modelValue": [S[0] || (S[0] = A => d.value = A), a],
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    placeholder: v.$t("plsEnterQuantity"),
                    class: "amount-input"
                }, null, 8, ["modelValue", "placeholder"]), e("div", {
                    class: "all",
                    onClick: h
                }, t(v.$t("all")), 1)]), _.value ? (l(), c("div", Pl, t(_.value), 1)) : k("v-if", !0), e("div", Rl, t(v.$t("wfDesc1")) + " " + t(C(de)(C(s).canWithdrawAmount || 0)), 1), e("div", Vl, [e("div", Ol, [e("div", null, t(v.$t("wfDesc2")), 1)]), e("div", Ml, [e("div", null, t(C(de)(w.value)), 1)])]), nt(v.$slots, "default", {}, void 0, !0)]), e("div", Ll, [e("div", ql, [p(u, {
                    name: "shuoming"
                }), L(t(v.$t("withdrawalInstructions")), 1)]), p(vt, {
                    withdrawType: Ot,
                    withdrawalsrule: C(s),
                    name: ((y = C(m).find(A => A.withdrawID == 21)) == null ? void 0 : y.name) || ""
                }, null, 8, ["withdrawalsrule", "name"])])], 64)
            }
        }
    });
const Fl = ne(jl, [
        ["__scopeId", "data-v-7dcfb9e1"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/Ar/arField.vue"]
    ]),
    zl = {
        class: "arType"
    },
    El = {
        class: "left"
    },
    Hl = {
        class: "right"
    },
    xl = {
        key: 0,
        class: "arCard"
    },
    Kl = {
        class: "left"
    },
    Zl = ["src"],
    Gl = {
        class: "amount"
    },
    Ql = {
        class: "recycleBtnD c2c"
    },
    Yl = ae({
        __name: "card",
        emits: ["onShowPwdD"],
        setup(f, {
            expose: n,
            emit: s
        }) {
            const {
                data_NewSetWithdrawalH: m
            } = Pe(), {
                getInfo: i,
                arWallet: r,
                goWallet: d,
                onTradRule: o
            } = Ft(), w = g(), h = j(() => {
                var _, v;
                if ([21].includes(m.value.type) && m.value.amount > 0) return !(m.value.amount < 1 || ((_ = w.value) == null ? void 0 : _.validateTxt.length) > 0 || m.value.bid == 0 || ((v = r.value) == null ? void 0 : v.walletActivationStatus) != 1)
            });
            return _e(() => {
                i()
            }), n({
                isActiveC: h
            }), (a, _) => {
                var u, N;
                const v = V("svg-icon"),
                    S = V("van-icon");
                return l(), c("div", zl, [e("div", {
                    class: "rule",
                    onClick: _[0] || (_[0] = y => C(o)())
                }, [e("div", El, [p(v, {
                    name: "arpay1"
                }), e("p", null, t(a.$t("arbTip1")), 1)]), e("div", Hl, [L(t(a.$t("checkOver")), 1), p(S, {
                    name: "arrow"
                })])]), ((u = C(r)) == null ? void 0 : u.walletActivationStatus) == 1 ? (l(), c(X, {
                    key: 0
                }, [
                    [21].includes(C(m).type) ? (l(), c("div", xl, [e("div", Kl, [e("img", {
                        src: C(ge)("wallet/withdrawType", `${C(m).type}`)
                    }, null, 8, Zl), e("p", null, [e("span", null, t(a.$t("arbTip13")), 1), e("span", Gl, t(((N = C(r)) == null ? void 0 : N.balance) || 0) + " ARB", 1)])]), e("div", {
                        class: "right",
                        onClick: _[1] || (_[1] = y => C(d)("wallet/withdraw"))
                    }, t(a.$t("comminWallet")), 1)])) : k("v-if", !0), p(Fl, {
                        ref_key: "arFieldRef",
                        ref: w
                    }, {
                        default: G(() => [e("div", Ql, [e("button", {
                            class: ie(["recycleBtn", {
                                active: h.value
                            }]),
                            onClick: _[2] || (_[2] = () => {
                                s("onShowPwdD")
                            })
                        }, t(a.$t("withdraw")), 3)])]),
                        _: 1
                    }, 512), p(wt)
                ], 64)) : (l(), we(nn, {
                    key: 1,
                    pageType: "wallet/Withdraw"
                }))])
            }
        }
    });
const Xl = ne(Yl, [
        ["__scopeId", "data-v-69845b27"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/Ar/card.vue"]
    ]),
    Jl = {
        class: "noRightTimeDialog"
    },
    ei = {
        class: "fail"
    },
    ti = {
        class: "van-dialog__content-title title1"
    },
    ai = {
        class: "van-dialog__content-note"
    },
    ni = {
        class: "red"
    },
    oi = ae({
        __name: "noRightTimeDialog",
        setup(f) {
            const {
                withdrawalsrule: n
            } = Pe(), s = j(() => n.value ? n.value.startTime : "00:00"), m = j(() => n.value ? n.value.endTime : "23:59");
            return (i, r) => {
                const d = Fe("lazy");
                return l(), c("div", Jl, [re(e("img", ei, null, 512), [
                    [d, C(ge)("wallet", "tip")]
                ]), e("div", ti, t(i.$t("noRightTime")), 1), e("div", ai, [e("p", null, [L(t(i.$t("wTimeInterval")), 1), e("span", ni, t(s.value) + "-" + t(m.value), 1), L(", ")]), e("p", null, t(i.$t("later")), 1)])])
            }
        }
    });
const si = ne(oi, [
        ["__scopeId", "data-v-415fa4b1"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/noRightTimeDialog.vue"]
    ]),
    Yt = f => (Ne("data-v-80a607a5"), f = f(), Se(), f),
    li = {
        class: "withdraw__container"
    },
    ii = {
        class: "withdraw__container-content"
    },
    ri = {
        class: "recycleBtnD c2c"
    },
    di = {
        class: "recycleBtnD c2c"
    },
    ci = {
        key: 1,
        class: "bankInfoItem usdt"
    },
    ui = ["src"],
    pi = {
        key: 2,
        class: "bankInfoItem usdt KBZ"
    },
    vi = ["src"],
    _i = {
        key: 0
    },
    mi = {
        key: 1
    },
    hi = {
        key: 0
    },
    wi = {
        key: 1
    },
    fi = {
        class: "recycleBtnD"
    },
    yi = {
        class: "succeed"
    },
    gi = {
        class: "van-dialog__content-title"
    },
    ki = {
        class: "van-dialog__content-note"
    },
    $i = {
        class: "succeedImg"
    },
    bi = {
        class: "c2cTip"
    },
    Ci = ["innerHTML"],
    Ti = ["innerHTML"],
    Ni = {
        class: "pwd"
    },
    Si = {
        class: "pwd-head ar-1px-b"
    },
    Ii = Yt(() => e("input", {
        type: "text",
        class: "is-hidden"
    }, null, -1)),
    Ai = Yt(() => e("input", {
        type: "password",
        class: "is-hidden"
    }, null, -1)),
    Wi = {
        class: "red"
    },
    Bi = {
        class: "forgetPwd"
    },
    Ui = {
        class: "btnD"
    },
    Di = ["innerHTML"],
    Pi = {
        class: "question"
    },
    Ri = {
        class: "button"
    },
    Vi = {
        class: "arupiAmount"
    },
    Oi = {
        class: "title1"
    },
    Mi = ["innerHTML"],
    Li = {
        class: "button"
    },
    qi = {
        class: "arupiAmount"
    },
    ji = {
        class: "title1"
    },
    Fi = {
        class: "title2"
    },
    zi = {
        class: "button"
    },
    Ei = ae({
        __name: "index",
        setup(f) {
            const {
                setWithdrawal: n,
                setWithdrawalsrule: s,
                setWithdrawalTypeslist: m
            } = Pe(), {
                getSelfCustomerServiceLink: i
            } = gt({
                ServerType: 2
            }), r = g(!1), d = g(!1), o = g(!1), {
                t: w
            } = me(), {
                setLoading: h
            } = Ue(), {
                getUserInfo: a,
                getRegisterState: _,
                $state: v
            } = kt(), S = ue(), u = Ie(), N = tt(), y = g(), A = g(), W = g(), $ = g({}), q = g({
                balance: 0,
                walletActivationStatus: 0,
                walletAddress: ""
            }), I = g(), P = g(0), x = g(!1), J = g(!1), R = j(() => v.isOpenForgetPasswordSMSState), se = zt(), T = De(), te = j(() => se.userInfo), E = j(() => {
                var b;
                return D.type === 22 && ((b = q.value) == null ? void 0 : b.walletActivationStatus) === 0
            }), U = g(""), Q = g(!1), O = g(!1), B = j(() => {
                var Z, Ce;
                const b = [4, 20, 22, 23, 24];
                return D.bid == 0 || D.amount < 1 ? !1 : O.value && D.amount > 0 ? D.amount % 100 !== 0 : b.includes(D.type) && D.amount > 0 ? !(H.value.withdrawalslist.length == 0 || D.amount > H.value.withdrawalsrule.canWithdrawAmount) : !(![1, 2, 3, 5, 6, 8, 10, 27].includes(D.type) || (Z = y.value) != null && Z.showValidate || (Ce = y.value) != null && Ce.showValidateUB || D.type == 1 && D.amount.toString().indexOf(".") != -1)
            }), F = g(!1), oe = g(!1), Y = g(!1), pe = g(!1), We = g(!1), D = he({
                amount: 0,
                pwd: "",
                type: 0,
                bid: 0,
                name: "",
                tip: ""
            }), xe = g(null), K = g(""), H = g({
                withdrawalslist: [],
                withdrawalsrule: {}
            }), Be = j(() => {
                var b, M;
                return (M = (b = H.value.withdrawalsrule) == null ? void 0 : b.arbWithdrawRecommand) == null ? void 0 : M.popupContent
            }), Te = j(() => {
                var b, M;
                return ((M = (b = H.value.withdrawalsrule) == null ? void 0 : b.arbWithdrawRecommand) == null ? void 0 : M.giftPercent) || 0
            }), Xe = j(() => {
                var b, M;
                return ((M = (b = H.value.withdrawalsrule) == null ? void 0 : b.arbWithdrawRecommand) == null ? void 0 : M.arbGiftPercent) || 0
            }), ve = g([]), Ve = g(""), Re = g(""), Oe = g(!1), Me = g(!1), ce = g([]), $e = g({}), Ke = j(() => D.type !== 27 ? H.value.withdrawalslist || [] : H.value.withdrawalslist.filter(b => b.bankCode === Ve.value)), Ae = g([]), Je = g("");

            function oa() {
                S.back()
            }
            const sa = () => {
                if (r.value = !r.value, r.value) {
                    const b = new Date().getTime() + 2592e6;
                    localStorage.setItem("popupHideUntil", b.toString())
                } else localStorage.removeItem("popupHideUntil")
            };
            async function la() {
                xe.value && clearTimeout(xe.value), xe.value = setTimeout(async () => {
                    if (te.value.isAllowWithdraw == 0) {
                        J.value = !0, Y.value = !1;
                        return
                    }
                    let b = H.value.withdrawalsrule;
                    D.amount = Number(D.amount);
                    var M = /^\d+(\.\d{1,2})?$/;
                    if (!M.test(D.amount.toString())) {
                        z(w("showDialogTip1")), Y.value = !1;
                        return
                    }
                    if (D.amount > b.maxPrice || D.amount < b.minPrice) {
                        z(w("wordWithdrawal", [de(b.minPrice), de(b.maxPrice)])), Y.value = !1;
                        return
                    }
                    if (!D.pwd) {
                        z(w("emptyPassword")), Y.value = !1;
                        return
                    }
                    h(!0);
                    const Z = await ra(Ra(D));
                    Z && (Z.code !== 0 && Z.msgCode == 220 ? (pe.value = !0, setTimeout(function() {
                        pe.value = !1
                    }, 3e3)) : Z.code !== 0 && Z.msgCode == 280 ? setTimeout(function() {
                        D.type == 20 && (Z != null && Z.data) && (localStorage.setItem("c2cOrderNo", Z == null ? void 0 : Z.data), S.push({
                            name: "Withdraw-C2cDetail",
                            query: {
                                order: Z == null ? void 0 : Z.data
                            }
                        }))
                    }, 2e3) : Z.code !== 0 && Z.msgCode === 1009 ? await ka({
                        message: w("code1009")
                    }) : Z.code !== 0 && Z.msgCode === 287 ? it() : D.type == 20 ? (oe.value = !0, K.value = Z == null ? void 0 : Z.data) : F.value = !0), Y.value = !1, h(!1)
                }, 500)
            }

            function ia() {
                const b = {
                    1: "Withdraw-BankCard",
                    3: "Withdraw-USDT",
                    10: "Withdraw-USDT",
                    5: "Withdraw-PIX"
                };
                S.replace({
                    name: b[D.type]
                })
            }
            const ra = async b => await b.then(Z => Z && Z.code !== 0 ? [220, 1009].includes(Z.msgCode) ? Z : [280, 287].includes(Z.msgCode) ? (rt(Z), Z) : (rt(Z), null) : Z).catch(Z => (rt(Z), null));
            async function Tt(b) {
                b == "c2c" ? (oe.value = !1, (D.type == 20 || D.type == 2) && K.value && (localStorage.setItem("c2cOrderNo", K.value), S.push({
                    name: "Withdraw-C2cDetail",
                    query: {
                        order: K.value
                    }
                }))) : (F.value = !1, await S.push({
                    name: "WithdrawHistory"
                }))
            }
            async function da() {
                Oe.value = !1, D.pwd = "", Y.value = !0
            }
            async function ca(b) {
                var M, Z;
                if (!We.value) try {
                    We.value = !0;
                    const Ce = typeof((M = $e.value) == null ? void 0 : M.withdrawNumber) == "string",
                        Le = Ce ? jt({
                            withdrawId: (Z = $e.value) == null ? void 0 : Z.withdrawID,
                            smsCode: Re.value,
                            categoryId: 27,
                            pin: b
                        }) : Et({
                            bid: D.bid,
                            smsCode: Re.value,
                            categoryId: 27,
                            pin: b
                        }),
                        ye = await ee(Le);
                    Re.value = "", ye && (Me.value = !1, Ce ? (Nt(), it()) : Oe.value = !0)
                } finally {
                    We.value = !1
                }
            }

            function lt() {
                var b;
                if (D.type == 27 && T.getNeedFastKycValidIsOpen) {
                    const M = Ke.value.find(Z => Z.bid == D.bid);
                    if (M && !M.isKycOnline) return $e.value = M, Me.value = !0;
                    if (M && M.isKycOnline) return Oe.value = !0
                }
                D.type == 21 ? (b = A.value) != null && b.isActiveC && (D.pwd = "", Y.value = !0) : B.value && (D.pwd = "", Y.value = !0)
            }
            async function ua() {
                var M, Z;
                h(!0);
                const b = await ee(Da());
                if (b) {
                    Ae.value = (b == null ? void 0 : b.data.withdrawlist) || [], m(Ae.value), N.getWithdrawal.type && Ae.value.find(ye => ye.withdrawID == N.getWithdrawal.type) ? D.type = N.getWithdrawal.type : Ae.value.find(ye => ye.withdrawID == N.getWithdrawal.type) || (D.type = 0), D.type == 0 && (D.type = Ae.value[0].withdrawID, Je.value = Ae.value[0].name, D.type == 20 && (x.value = !0)), [4, 23, 24].includes(D.type) && (Je.value = ((M = Ae.value.find(ye => ye.withdrawID == D.type)) == null ? void 0 : M.name) || ""), D.type == 22 && (Je.value = ((Z = Ae.value.find(ye => ye.withdrawID == 22)) == null ? void 0 : Z.name) || "");
                    let Ce = localStorage.getItem("popupHideUntil") || void 0;
                    const Le = new Date().getTime();
                    if (Q.value = b.data.isOpenSafeGuide, Q.value) {
                        const ye = parseInt(Ce, 10);
                        Le < ye && (Q.value = !1), U.value = b.data.safeGuideContent || ""
                    }
                }
                h(!1)
            }
            const pa = async () => {
                    try {
                        const b = await Ua();
                        (b == null ? void 0 : b.code) === 0 ? q.value = b.data : z({
                            message: b == null ? void 0 : b.msg
                        })
                    } catch (b) {
                        console.log("error", b)
                    }
                },
                Nt = async () => {
                    try {
                        const b = await Va({
                            categoryId: 27
                        });
                        if ((b == null ? void 0 : b.code) === 0 && (ce.value = b == null ? void 0 : b.data, ce.value.length)) {
                            const M = b.data[0];
                            $e.value = M, Me.value = !0, Re.value = ""
                        }
                    } catch {}
                };
            async function St(b) {
                D.type != b.withdrawID && (S.replace(), b.withdrawID == 20 && (x.value = !0), O.value = b.need100 === !0, D.type = b.withdrawID, $.value = {}, await it(), Je.value = b.name || "", D.bid = Ke.value.length > 0 ? Ke.value[0].bid : 0, D.amount = 0, y.value && (y.value.usdtCount = 0))
            }

            function va() {
                $.value = H.value.withdrawalslist.find(M => M.bid == D.bid);
                const b = D.type === 27 ? Ke.value : H.value.withdrawalslist || [];
                !$.value && b.length && (D.bid = b[0].bid, $.value = b[0])
            }
            async function it() {
                var M, Z, Ce, Le;
                h(!0);
                const b = await ee(Ge({
                    withdrawid: D.type
                }));
                h(!1), b && (H.value = b.data, ve.value = (b == null ? void 0 : b.data.arUpiRecommandBankList) || [], D.type === 27 && (ve.value.length > 0 && !u.query.bankCode ? Ve.value = ve.value[0].bankCode : Ve.value = u.query.bankCode), N.setWithdrawalslist(b.data.withdrawalslist), s((M = b.data) == null ? void 0 : M.withdrawalsrule), (Ce = (Z = b.data) == null ? void 0 : Z.withdrawalsrule) != null && Ce.arbWithdrawRecommand && !o.value && (d.value = !0), b.data.lastBandCarkName ? localStorage.setItem("lastBandCarkName", (Le = b.data) == null ? void 0 : Le.lastBandCarkName) : localStorage.removeItem("lastBandCarkName"), va())
            }

            function _a() {
                i()
            }

            function ma() {
                S.push({
                    name: "rpwd"
                })
            }
            const ha = () => {
                    S.push({
                        name: "StrongBox"
                    })
                },
                wa = async () => {
                    const b = await ee(Pa({
                            key: "C2CWithdrawRewardRate"
                        })),
                        M = (b == null ? void 0 : b.data.value1) || 0;
                    P.value = Number(M)
                },
                It = b => {
                    D.amount = b
                };
            qe(D, b => {
                N.setWithdrawal({ ...b
                }), n(b)
            }), qe(() => D.type, b => {
                b === 27 && Nt()
            });
            const fa = async () => {
                var M, Z;
                const b = (Z = (M = S.currentRoute.value) == null ? void 0 : M.query) == null ? void 0 : Z.bid;
                N.getWithdrawal.type && (D.type = N.getWithdrawal.type), a({
                    signature: se.token
                }), _(), b && (D.bid = Number(b)), await ua(), await it(), await wa()
            };
            return _e(() => {
                fa()
            }), (b, M) => {
                var Wt, Bt;
                const Z = V("NavBar"),
                    Ce = V("svg-icon"),
                    Le = V("van-icon"),
                    ye = V("van-dialog"),
                    ya = V("van-popup"),
                    At = Fe("lazy");
                return l(), c(X, null, [e("div", li, [p(Z, {
                    title: b.$t("withdraw"),
                    "left-arrow": "",
                    onClickLeft: oa,
                    onClickRight: M[0] || (M[0] = le => C(S).push({
                        name: "WithdrawHistory"
                    }))
                }, {
                    right: G(() => [e("span", null, t(b.$t("withdrawRecords")), 1)]),
                    _: 1
                }, 8, ["title"]), e("div", ii, [k("资产余额"), p(_n, {
                    data_NewSetWithdrawal: D,
                    withdrawalsrule: H.value.withdrawalsrule
                }, null, 8, ["data_NewSetWithdrawal", "withdrawalsrule"]), k("提款方式"), p(Qn, {
                    data_NewSetWithdrawal: D,
                    withdrawalTypeslist: Ae.value,
                    c2cAward: P.value,
                    onOnSelectWithdrawalType: St,
                    maxRechargeRifts: Te.value,
                    ArRechargeRifts: Xe.value
                }, null, 8, ["data_NewSetWithdrawal", "withdrawalTypeslist", "c2cAward", "maxRechargeRifts", "ArRechargeRifts"]), k(" upi "), [27, 2].includes(D.type) ? (l(), c(X, {
                    key: 0
                }, [ve.value.length && D.type !== 2 ? (l(), we(ao, {
                    key: 0,
                    bankList: ve.value,
                    "bank-code": Ve.value,
                    onOnSelectWithdrawalType: M[1] || (M[1] = le => {
                        var Ut;
                        Ve.value = le, D.bid = ((Ut = Ke.value[0]) == null ? void 0 : Ut.bid) || 0
                    })
                }, null, 8, ["bankList", "bank-code"])) : k("v-if", !0), p(Vt, {
                    bankCode: Ve.value,
                    withdrawalType: D.type,
                    withdrawalslist: Ke.value,
                    bid: D.bid
                }, null, 8, ["bankCode", "withdrawalType", "withdrawalslist", "bid"])], 64)) : k("v-if", !0), k(" c2cupi "), D.type == 20 ? (l(), c(X, {
                    key: 1
                }, [p(Vt, {
                    withdrawalslist: H.value.withdrawalslist,
                    bid: D.bid
                }, null, 8, ["withdrawalslist", "bid"]), p(Ps, {
                    c2crule: H.value.withdrawalsrule,
                    c2cAward: P.value,
                    onSetc2cAmount: It,
                    verify100: O.value,
                    c2cName: ((Wt = Ae.value.find(le => le.withdrawID == 20)) == null ? void 0 : Wt.name) || ""
                }, {
                    default: G(() => [e("div", ri, [e("button", {
                        class: ie(["recycleBtn", {
                            active: B.value
                        }]),
                        onClick: lt
                    }, t(b.$t("withdraw")), 3)])]),
                    _: 1
                }, 8, ["c2crule", "c2cAward", "verify100", "c2cName"]), p(ol, {
                    ref_key: "c2cRecordRef",
                    ref: I
                }, null, 512)], 64)) : D.type == 21 ? (l(), we(Xl, {
                    key: 2,
                    onOnShowPwdD: M[2] || (M[2] = le => lt()),
                    ref_key: "ArCardRef",
                    ref: A
                }, null, 512)) : [4, 23, 24, 22].includes(D.type) ? (l(), c(X, {
                    key: 3
                }, [D.type === 22 ? (l(), we(Al, {
                    key: 0,
                    withdrawalslist: H.value.withdrawalslist,
                    withdrawType: D.type,
                    bid: D.bid,
                    name: Je.value,
                    rsnInfo: q.value,
                    currentType: Ae.value.find(le => le.withdrawID == 22),
                    onGetRnsTypeInfo: pa
                }, null, 8, ["withdrawalslist", "withdrawType", "bid", "name", "rsnInfo", "currentType"])) : (l(), we(yl, {
                    key: 1,
                    withdrawalslist: H.value.withdrawalslist,
                    withdrawType: D.type,
                    bid: D.bid,
                    name: Je.value
                }, null, 8, ["withdrawalslist", "withdrawType", "bid", "name"])), E.value ? k("v-if", !0) : (l(), we(_l, {
                    key: 2,
                    rule: H.value.withdrawalsrule,
                    award: P.value,
                    wtype: D.type,
                    onSetc2cAmount: It,
                    name: ((Bt = Ae.value.find(le => le.withdrawID == 20)) == null ? void 0 : Bt.name) || "",
                    verify100: O.value
                }, {
                    default: G(() => [e("div", di, [e("button", {
                        class: ie(["recycleBtn", {
                            active: B.value
                        }]),
                        onClick: lt
                    }, t(b.$t("withdraw")), 3)])]),
                    _: 1
                }, 8, ["rule", "award", "wtype", "name", "verify100"])), k("提现记录"), E.value ? k("v-if", !0) : (l(), we(wt, {
                    key: 3,
                    ref_key: "withdrawHistory",
                    ref: W
                }, null, 512))], 64)) : (l(), c(X, {
                    key: 4
                }, [k("银行卡模块"), H.value.withdrawalslist.length ? (l(), c("div", {
                    key: 0,
                    class: "bankInfo",
                    onClick: M[3] || (M[3] = le => ia())
                }, [
                    [1, 5].includes(D.type) ? (l(), c("div", {
                        key: 0,
                        class: ie(["bankInfoItem", `type${D.type}`])
                    }, [e("div", null, [p(Ce, {
                        name: D.type
                    }, null, 8, ["name"]), e("span", null, t($.value.bankName), 1)]), e("div", null, [e("span", null, t($.value.beneficiaryName), 1), e("span", null, t($.value.accountNo), 1)]), p(Le, {
                        name: "arrow"
                    })], 2)) : k("v-if", !0), [3, 10].includes(D.type) ? (l(), c("div", ci, [e("div", null, [e("img", {
                        src: C(ge)("wallet/withdrawType", `${D.type}`)
                    }, null, 8, ui), e("span", null, t($.value.bankName), 1)]), e("div", null, [e("span", null, t($.value.accountNo), 1), p(Le, {
                        name: "arrow"
                    })]), e("div", null, [e("span", null, t($.value.usdtRemarkName), 1)])])) : k("v-if", !0), [6, 8].includes(D.type) ? (l(), c("div", pi, [e("div", null, [e("img", {
                        src: C(ge)("wallet/withdrawType", `${D.type}`)
                    }, null, 8, vi), D.type == 6 ? (l(), c("span", _i, t($.value.bankName), 1)) : k("v-if", !0), D.type == 8 ? (l(), c("span", mi, t($.value.walletName), 1)) : k("v-if", !0)]), e("div", null, [D.type == 6 ? (l(), c("span", hi, t($.value.accountNo), 1)) : k("v-if", !0), D.type == 8 ? (l(), c("span", wi, t($.value.mobileNO), 1)) : k("v-if", !0)])])) : k("v-if", !0)
                ])) : k("v-if", !0), re(p(pt, {
                    type: D.type,
                    isShowhintTextO: !0
                }, null, 8, ["type"]), [
                    [_t, [1, 3, 6, 8, 5, 10].includes(D.type) && H.value.withdrawalslist.length == 0]
                ]), k("输入区"), p(Mo, {
                    data_NewSetWithdrawal: D,
                    withdrawalsrule: H.value.withdrawalsrule,
                    withdrawalslist: H.value.withdrawalslist,
                    verify100: O.value,
                    ref_key: "withdrawField",
                    ref: y
                }, null, 8, ["data_NewSetWithdrawal", "withdrawalsrule", "withdrawalslist", "verify100"]), e("div", fi, [e("button", {
                    class: ie(["recycleBtn", {
                        active: B.value
                    }]),
                    onClick: lt
                }, t(b.$t("withdraw")), 3)]), k("提现说明组件"), p(vt, {
                    withdrawType: D.type,
                    withdrawalsrule: H.value.withdrawalsrule
                }, null, 8, ["withdrawType", "withdrawalsrule"]), k("提现记录"), p(wt, {
                    ref_key: "withdrawHistory",
                    ref: W
                }, null, 512)], 64))]), k("提现成功弹窗"), p(ye, {
                    show: F.value,
                    "onUpdate:show": M[5] || (M[5] = le => F.value = le),
                    "show-confirm-button": !1,
                    "z-index": "100"
                }, {
                    default: G(() => [re(e("img", yi, null, 512), [
                        [At, C(ge)("public", "succeed")]
                    ]), e("div", gi, t(b.$t("tipWithdrawalApplicationSuccess")), 1), e("div", ki, [e("span", null, t(b.$t("tipWithdrawWillBeCompletedIn2Hours")), 1), e("span", null, t(b.$t("tipPlaWaitPaciently")) + "...", 1)]), e("div", {
                        class: "van-dialog__content-btn",
                        onClick: M[4] || (M[4] = le => Tt())
                    }, t(b.$t("confirm")), 1)]),
                    _: 1
                }, 8, ["show"]), p(ht, {
                    class: "c2c",
                    show: oe.value,
                    "onUpdate:show": M[6] || (M[6] = le => oe.value = le),
                    showCancelBtn: !1,
                    onConfirm: M[7] || (M[7] = le => Tt("c2c")),
                    title: b.$t("withdrawTip2")
                }, {
                    header: G(() => [re(e("img", $i, null, 512), [
                        [At, C(ge)("public", "succeed")]
                    ])]),
                    content: G(() => [e("div", bi, [e("h1", {
                        innerHTML: b.$t("withdrawTip3")
                    }, null, 8, Ci), e("p", {
                        innerHTML: b.$t("withdrawTip4")
                    }, null, 8, Ti)])]),
                    _: 1
                }, 8, ["show", "title"]), k("输入密码弹窗"), Y.value ? (l(), we(ya, {
                    key: 0,
                    show: Y.value,
                    "onUpdate:show": M[10] || (M[10] = le => Y.value = le),
                    position: "bottom",
                    closeable: "",
                    round: ""
                }, {
                    default: G(() => [e("div", Ni, [e("div", Si, [p(Ce, {
                        name: "safeIcon"
                    }), e("h1", null, t(b.$t("withdrawDialogDesc1")), 1)]), Ii, Ai, p(tn, {
                        value: D.pwd,
                        "onUpdate:value": M[8] || (M[8] = le => D.pwd = le),
                        label: b.$t("withdrawDialogPh"),
                        maxlength: 32
                    }, null, 8, ["value", "label"]), e("span", Wi, t(b.$t("withdrawDialogDesc3")), 1), e("div", Bi, [R.value ? (l(), c("span", {
                        key: 0,
                        onClick: ma
                    }, t(b.$t("withdrawDialogDesc4")), 1)) : k("v-if", !0), e("div", {
                        class: "red",
                        onClick: _a
                    }, t(b.$t("withdrawDialogDesc5")), 1)]), e("div", Ui, [e("button", {
                        onClick: M[9] || (M[9] = () => Y.value = !1)
                    }, t(b.$t("withdrawDialogDesc6")), 1), e("button", {
                        onClick: la
                    }, t(b.$t("withdrawDialogDesc7")), 1)])])]),
                    _: 1
                }, 8, ["show"])) : k("v-if", !0), k("不在提现时间内提示"), p(ye, {
                    show: pe.value,
                    "onUpdate:show": M[11] || (M[11] = le => pe.value = le),
                    "show-confirm-button": !1,
                    "z-index": "100"
                }, {
                    default: G(() => [p(si)]),
                    _: 1
                }, 8, ["show"]), p(ye, {
                    show: x.value,
                    "onUpdate:show": M[13] || (M[13] = le => x.value = le),
                    showConfirmButton: !1,
                    class: "c2cconfirm",
                    width: "100%"
                }, {
                    default: G(() => [x.value ? (l(), we(gs, {
                        key: 0,
                        showC2c: x.value,
                        "onUpdate:showC2c": M[12] || (M[12] = le => x.value = le)
                    }, null, 8, ["showC2c"])) : k("v-if", !0)]),
                    _: 1
                }, 8, ["show"]), p(ht, {
                    show: J.value,
                    "onUpdate:show": M[14] || (M[14] = le => J.value = le),
                    showCancelBtn: !1,
                    showCloseIcon: !0,
                    clickOutSide: !0,
                    onConfirm: M[15] || (M[15] = () => J.value = !1)
                }, {
                    content: G(() => [e("h1", null, t(b.$t("withdrwsTip1")), 1)]),
                    _: 1
                }, 8, ["show"])]), p(ye, {
                    "class-name": "safebox-dialog",
                    show: Q.value,
                    "onUpdate:show": M[17] || (M[17] = le => Q.value = le)
                }, {
                    footer: G(() => [e("div", Pi, t(b.$t("safeG")), 1), e("div", {
                        class: ie(["active", {
                            a: r.value
                        }]),
                        onClick: sa
                    }, [p(Ce, {
                        name: "active"
                    }), L(t(b.$t("checkSafeBox")), 1)], 2), e("div", Ri, [e("div", {
                        onClick: M[16] || (M[16] = le => Q.value = !1)
                    }, t(b.$t("no")), 1), e("div", {
                        onClick: ha
                    }, t(b.$t("go")), 1)])]),
                    default: G(() => [e("div", {
                        class: "content",
                        innerHTML: U.value
                    }, null, 8, Di)]),
                    _: 1
                }, 8, ["show"]), p(ye, {
                    class: "arupiAmount-dialog",
                    closeOnClickOverlay: !0,
                    show: d.value,
                    "onUpdate:show": M[20] || (M[20] = le => d.value = le),
                    "show-confirm-button": !1,
                    width: 327
                }, {
                    default: G(() => [e("div", Vi, [e("div", Oi, t(b.$t("arupiTitle")), 1), e("div", {
                        class: "title2",
                        innerHTML: Be.value
                    }, null, 8, Mi), e("div", Li, [e("div", {
                        class: "goBuy",
                        onClick: M[18] || (M[18] = () => {
                            St({
                                withdrawID: 21
                            }), d.value = !1, o.value = !0
                        })
                    }, t(b.$t("goarWithdraw")), 1), e("div", {
                        class: "clance",
                        onClick: M[19] || (M[19] = () => {
                            d.value = !1, o.value = !0
                        })
                    }, t(b.$t("cancel")), 1)])])]),
                    _: 1
                }, 8, ["show"]), p(ye, {
                    class: "arupiAmount-dialog",
                    closeOnClickOverlay: !0,
                    show: Oe.value,
                    "onUpdate:show": M[22] || (M[22] = le => Oe.value = le),
                    "show-confirm-button": !1,
                    width: 327
                }, {
                    default: G(() => [e("div", qi, [e("div", ji, t(b.$t("kindTips")), 1), e("div", Fi, [e("p", null, t(b.$t("quickTips")), 1), e("p", null, t(b.$t("quickTips2")), 1)]), e("div", zi, [e("div", {
                        class: "clance",
                        onClick: M[21] || (M[21] = le => Oe.value = !1)
                    }, t(b.$t("changeAccount")), 1), e("div", {
                        class: "goBuy",
                        onClick: da
                    }, t(b.$t("continueAccount")), 1)])])]),
                    _: 1
                }, 8, ["show"]), p(ye, {
                    show: Me.value,
                    "onUpdate:show": M[25] || (M[25] = le => Me.value = le),
                    showConfirmButton: !1,
                    width: "fit-content",
                    "lazy-render": ""
                }, {
                    default: G(() => [p(ut, {
                        bid: $e.value.bid,
                        bank: $e.value.bankCode,
                        upi: $e.value.upiAccount || $e.value.accountNo,
                        mobile: $e.value.mobileNo,
                        code: Re.value,
                        "onUpdate:code": M[23] || (M[23] = le => Re.value = le),
                        withdrawalId: $e.value.withdrawID,
                        withdrawalAmount: $e.value.price,
                        onConfirm: ca,
                        onClose: M[24] || (M[24] = () => {
                            Me.value = !1, Re.value = ""
                        })
                    }, null, 8, ["bid", "bank", "upi", "mobile", "code", "withdrawalId", "withdrawalAmount"])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const Hi = ne(Ei, [
        ["__scopeId", "data-v-80a607a5"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/index.vue"]
    ]),
    f_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Hi
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xi = {
        class: "chooseBank__container"
    },
    Ki = {
        class: "search"
    },
    Zi = ["placeholder"],
    Gi = {
        class: "chooseBank__container-content"
    },
    Qi = {
        class: "chooseBank__container-content-items"
    },
    Yi = {
        class: "ar-1px-b"
    },
    Xi = ["onClick"],
    Ji = {
        class: "chooseBank__container-content-items__title"
    },
    er = ["src"],
    tr = ae({
        __name: "index",
        props: {
            bankList: {
                type: Array,
                required: !0
            }
        },
        emits: ["onSelectItem"],
        setup(f, {
            emit: n
        }) {
            const s = f,
                m = g("");
            let i = he([]),
                r = g([]);

            function d(w) {
                n("onSelectItem", w)
            }
            async function o() {
                if (console.log("----------->", Array.isArray(s.bankList)), Array.isArray(s.bankList) && s.bankList.length > 0) {
                    i = s.bankList, r.value = i;
                    return
                }
                const w = await ee(Qe({
                    withdrawid: 1
                }));
                w && (i = w.data.banklist, r.value = i)
            }
            return qe(m, () => {
                i.length > 0 && (r.value = i.filter(w => w.bankName.toLowerCase().indexOf(m.value.toLowerCase()) !== -1))
            }), _e(() => {
                o()
            }), (w, h) => {
                const a = V("van-icon");
                return l(), c("div", xi, [e("div", Ki, [p(a, {
                    name: "search",
                    size: "35"
                }), re(e("input", {
                    placeholder: w.$t("phSearchBank"),
                    "onUpdate:modelValue": h[0] || (h[0] = _ => m.value = _)
                }, null, 8, Zi), [
                    [fe, m.value, void 0, {
                        trim: !0
                    }]
                ])]), e("div", Gi, [e("div", Qi, [e("div", Yi, t(w.$t("selectBank")), 1), (l(!0), c(X, null, ke(C(r), _ => (l(), c("div", {
                    key: _.bankID,
                    class: "chooseBank__container-content-items__item ar-1px-b",
                    onClick: v => d(_)
                }, [e("div", Ji, [e("img", {
                    src: _.bankLogo,
                    alt: ""
                }, null, 8, er), e("span", null, t(_.bankName), 1)])], 8, Xi))), 128))])])])
            }
        }
    });
const Xt = ne(tr, [
        ["__scopeId", "data-v-c1c91417"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/ChooseBank/index.vue"]
    ]),
    y_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ar = {
        class: "banks-mask"
    },
    nr = {
        class: "choose-bank"
    },
    or = {
        class: "choose-title"
    },
    sr = {
        class: "choose-list"
    },
    lr = {
        class: "warm-tips"
    },
    ir = {
        class: "bank-radio-group"
    },
    rr = ae({
        __name: "banks",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            list: {
                type: Array,
                default: () => []
            }
        },
        emits: ["update:modelValue", "changeBank"],
        setup(f, {
            emit: n
        }) {
            const s = f,
                m = g({
                    name: "",
                    code: 0
                }),
                i = () => {
                    const d = m.value.code,
                        o = s.list.find(w => w.code == d);
                    d !== 0 && o && (n("changeBank", o), n("update:modelValue", !1))
                },
                r = () => {
                    n("update:modelValue", !1)
                };
            return (d, o) => {
                const w = V("van-radio"),
                    h = V("van-radio-group"),
                    a = V("svg-icon");
                return s.modelValue ? (l(), we($a, {
                    key: 0,
                    to: "body"
                }, [e("div", ar, [e("div", nr, [e("div", or, t(d.$t("selectBank")), 1), e("div", sr, [e("p", lr, t(d.$t("chooseBankWarmTips")), 1), e("div", ir, [p(h, {
                    class: "bank-radio-group-van",
                    modelValue: m.value.code,
                    "onUpdate:modelValue": o[0] || (o[0] = _ => m.value.code = _)
                }, {
                    default: G(() => [(l(!0), c(X, null, ke(s.list, _ => (l(), we(w, {
                        class: "bank-radio-item",
                        name: _.code
                    }, {
                        default: G(() => [L(t(_.name), 1)]),
                        _: 2
                    }, 1032, ["name"]))), 256))]),
                    _: 1
                }, 8, ["modelValue"])]), e("button", {
                    class: "confirm-button",
                    onClick: i
                }, t(d.$t("confirm")), 1)])]), e("div", {
                    class: "close",
                    onClick: r
                }, [p(a, {
                    class: "img",
                    name: "close"
                })])])])) : k("v-if", !0)
            }
        }
    });
const dr = ne(rr, [
        ["__scopeId", "data-v-6db521fb"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddBankCard/banks.vue"]
    ]),
    cr = {
        class: "addBankCard__container"
    },
    ur = {
        key: 0,
        class: "addBankCard__container-content"
    },
    pr = {
        class: "addBankCard__container-content-top"
    },
    vr = ["src"],
    _r = {
        class: "addBankCard__container-content-item"
    },
    mr = {
        class: "label"
    },
    hr = {
        class: "addBankCard__container-content-item"
    },
    wr = {
        class: "label"
    },
    fr = ["placeholder", "readonly"],
    yr = {
        key: 0,
        class: "red"
    },
    gr = {
        key: 1,
        class: "red"
    },
    kr = {
        class: "addBankCard__container-content-item"
    },
    $r = {
        class: "label"
    },
    br = ["placeholder"],
    Cr = {
        class: "addBankCard__container-content-item"
    },
    Tr = {
        class: "label phone_icon"
    },
    Nr = ["placeholder"],
    Sr = {
        key: 0,
        class: "addBankCard__container-content-item"
    },
    Ir = {
        class: "label"
    },
    Ar = ["placeholder"],
    Wr = {
        key: 1,
        class: "addBankCard__container-content-item"
    },
    Br = {
        class: "label"
    },
    Ur = ["placeholder"],
    Dr = {
        key: 2,
        class: "addBankCard__container-content-item"
    },
    Pr = {
        class: "label"
    },
    Rr = ["placeholder"],
    Vr = {
        key: 3,
        class: "addBankCard__container-content-item"
    },
    Or = {
        class: "label"
    },
    Mr = ["placeholder"],
    Lr = {
        class: "addBankCard__container-content-btn"
    },
    qr = {
        key: 1
    },
    jr = ae({
        __name: "index",
        setup(f) {
            const n = g(!1),
                {
                    t: s
                } = me(),
                m = g(0),
                {
                    setLoading: i
                } = Ue(),
                r = kt(),
                d = ue(),
                {
                    isOpenWithdraw: o,
                    isOpenAddBankCardOpenEmail: w
                } = ze(),
                h = d.currentRoute.value.query.fromV || "Withdraw-BankCard",
                a = g(),
                _ = g([]),
                {
                    iseditor: v,
                    onInput: S,
                    setUL: u,
                    onLoad: N,
                    makeTxt: y
                } = Pe(),
                A = j(() => a.value ? a.value : s("addCardMsg1"));

            function W(K) {
                T.bankid = K.bankID, a.value = K.bankName, m.value = 0
            }
            const $ = j(() => m.value == 0 ? s("titleAddBankCard") : s("selectBank")),
                q = g(!1),
                I = g(!1),
                P = g(!1);
            let x = he([]);
            const J = De(),
                R = j(() => J.getDollarSign);
            R.value && (q.value = ["₫", "K"].includes(R.value), I.value = R.value == "₹", P.value = R.value == "৳");

            function se() {
                if (m.value > 0) return m.value = 0;
                d.replace({
                    name: h,
                    query: {
                        type: "Add"
                    }
                })
            }
            const T = he({
                smsCode: "",
                ifsccode: "",
                bankid: 0,
                beneficiaryname: "",
                accountno: "",
                email: "",
                mobileno: "",
                bankcitycode: "",
                bankprovincecode: "",
                bankbranchaddress: "",
                type: "",
                codeType: be.addBankCard
            });
            _e(() => {
                te()
            });
            async function te() {
                const K = await ee(Qe({
                    withdrawid: 1
                }));
                K && (x = K.data.banklist, T.ifsccode && T.ifsccode.length >= 4 && We())
            }
            const U = Ee({
                    content: () => p(He, {
                        type: T.type,
                        "onUpdate:type": K => T.type = K,
                        code: T.smsCode,
                        "onUpdate:code": K => T.smsCode = K,
                        onConfirm: F,
                        codeType: be.addBankCard
                    }, null),
                    beforeClose: () => {
                        T.smsCode = ""
                    }
                }),
                Q = j(() => !(T.beneficiaryname.trim().length == 0 || T.accountno.trim().length == 0 || T.mobileno.trim().length == 0 || !I.value && !P.value && T.bankbranchaddress.trim().length == 0 || T.bankid == 0 || I.value == !0 && T.ifsccode.trim().length == 0 || P.value == !0 && T.ifsccode.trim().length == 0)),
                O = () => {
                    const K = localStorage.getItem("numberType") || r.userForm.numberType;
                    if (!Q.value) return !1;
                    if (T.bankid == 0) return z({
                        message: s("addCardMsg1"),
                        wordBreak: "break-word"
                    });
                    if (T.beneficiaryname.toString().trim().length == 0) return z({
                        message: s("addCardMsg2"),
                        wordBreak: "break-word"
                    });
                    if (T.accountno.toString().trim().length == 0) return z({
                        message: s("addCardMsg3"),
                        wordBreak: "break-word"
                    }); {
                        let H;
                        if (R.value == "R$") {
                            if (H = /^[0-9\-]{6,25}$/, T.accountno.indexOf("-") == -1) return z({
                                message: s("code212"),
                                wordBreak: "break-word"
                            })
                        } else H = /^[0-9]{6,25}$/;
                        if (!H.test(T.accountno)) return z({
                            message: s("code212"),
                            wordBreak: "break-word"
                        })
                    }
                    if (A.value.toUpperCase() == "STATE BANK OF INDIA" && T.accountno.toString().trim().charAt(0) == "0") return z({
                        message: s("addBC1", [A.value]),
                        wordBreak: "break-word"
                    });
                    if (T.mobileno.toString().trim().length == 0) return z({
                        message: s("addCardMsg4"),
                        wordBreak: "break-word"
                    });
                    if (!st(K, T.mobileno.trim().length)) return z({
                        message: s("wrongTel"),
                        wordBreak: "break-word"
                    });
                    if (T.bankbranchaddress.toString().trim().length == 0 && !I.value && !P.value) return z({
                        message: s("addCardMsg5"),
                        wordBreak: "break-word"
                    });
                    if (w.value && T.email.toString().trim().length == 0) return z({
                        message: s("addCardMsg6"),
                        wordBreak: "break-word"
                    });
                    if (I.value == !0) {
                        if (T.ifsccode.trim().length == 0) return z({
                            message: s("phEnter") + s("IFSCCode"),
                            wordBreak: "break-word"
                        });
                        if (!/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(T.ifsccode)) return z({
                            message: s("IFSCCode") + s("formatErr"),
                            wordBreak: "break-word"
                        })
                    }
                    return w.value && !Gt.email1.test(T.email) ? z({
                        message: s(Qt.email),
                        wordBreak: "break-word"
                    }) : P.value == !0 && T.ifsccode.trim().length == 0 ? z({
                        message: s("phEnter") + " Routing Number",
                        wordBreak: "break-word"
                    }) : !0
                };
            async function B() {
                if (T.smsCode = "", O() === !0) {
                    if (o.value) return U.open();
                    await F()
                }
            }
            async function F() {
                const K = localStorage.getItem("numberType") || r.userForm.numberType;
                i(!0), T.beneficiaryname = T.beneficiaryname.trim(), await ee(Oa(Object.assign({}, T, {
                    mobileno: K + T.mobileno
                }))) && (je(s("addedSuccessfully")), U.close(), await d.replace({
                    name: h,
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), i(!1)
            }

            function oe() {
                R.value == "R$" ? T.accountno = T.accountno.replace(/[^\d\-]+/g, "") : T.accountno = T.accountno.replace(/[^\d]+/g, "")
            }

            function Y(K) {
                const H = K.substring(0, 4).toUpperCase();
                return x.filter(Be => Be.ifscCode.toUpperCase() === H).map(Be => ({
                    name: Be.bankName,
                    code: Be.bankID
                }))
            }
            const pe = () => {
                    T.ifsccode = T.ifsccode.replace(/[^a-zA-Z0-9]/g, ""), u(T, "ifsccode")
                },
                We = () => {
                    const K = Y(T.ifsccode.substring(0, 4));
                    if (K.length > 1 && T.ifsccode.length >= 4) return _.value = K, n.value = !0;
                    const H = K[0] || {
                        name: "",
                        code: 0
                    };
                    H && H.code && T.ifsccode ? (a.value = H.name, T.bankid = H.code) : (a.value = s("addCardMsg1"), T.bankid = 0), u(T, "ifsccode")
                },
                D = K => {
                    a.value = K.name, T.bankid = K.code
                };
            j(() => {
                const K = Y(T.ifsccode);
                return !(I.value && K.code != 0 && T.ifsccode)
            });

            function xe() {
                m.value = 2
            }
            return N(T, "beneficiaryname"), (K, H) => {
                const Be = V("NavBar"),
                    Te = V("svg-icon"),
                    Xe = V("van-icon");
                return l(), c(X, null, [e("div", cr, [p(Be, {
                    title: $.value,
                    "left-arrow": "",
                    onClickLeft: se
                }, null, 8, ["title"]), m.value == 0 ? (l(), c("div", ur, [e("div", pr, [e("img", {
                    src: C(ge)("wallet", "hint")
                }, null, 8, vr), e("span", null, t(K.$t("tipBindUrOwnCardToEnsureFundSafety")), 1)]), e("div", _r, [e("div", mr, [p(Te, {
                    name: "bank"
                }), L(" " + t(K.$t("selectBank")), 1)]), e("div", {
                    class: "selectB",
                    onClick: xe
                }, [L(t(A.value) + " ", 1), p(Xe, {
                    name: "arrow"
                })])]), k("验证收款人姓名"), e("div", hr, [e("div", wr, [p(Te, {
                    name: "name"
                }), L(" " + t(K.$t("payeeName")), 1)]), re(e("input", {
                    placeholder: K.$t("phEnterPayeeName"),
                    "onUpdate:modelValue": H[0] || (H[0] = ve => T.beneficiaryname = ve),
                    maxlength: "50",
                    onInput: H[1] || (H[1] = ve => C(y)(T, "beneficiaryname")),
                    readonly: C(v)
                }, null, 40, fr), [
                    [fe, T.beneficiaryname, void 0, {
                        trim: !0
                    }]
                ]), q.value ? (l(), c("span", yr, t(K.$t("validateDesc21")), 1)) : k("v-if", !0), q.value ? (l(), c("p", gr, t(K.$t("example")) + " : DINH THI HUYEN", 1)) : k("v-if", !0)]), e("div", kr, [e("div", $r, [p(Te, {
                    name: "bankCard"
                }), L(" " + t(K.$t("bankcardNo")), 1)]), re(e("input", {
                    placeholder: K.$t("phEnterBankcardNo"),
                    "onUpdate:modelValue": H[2] || (H[2] = ve => T.accountno = ve),
                    maxlength: "25",
                    onInput: oe
                }, null, 40, br), [
                    [fe, T.accountno, void 0, {
                        trim: !0
                    }]
                ])]), e("div", Cr, [e("div", Tr, [p(Te, {
                    name: "phone"
                }), L(" " + t(K.$t("tel")), 1)]), re(e("input", {
                    placeholder: K.$t("phEnterPayeeTel"),
                    "onUpdate:modelValue": H[3] || (H[3] = ve => T.mobileno = ve),
                    maxlength: "12",
                    onInput: H[4] || (H[4] = ve => C(S)(T, "mobileno"))
                }, null, 40, Nr), [
                    [fe, T.mobileno, void 0, {
                        trim: !0
                    }]
                ])]), C(w) ? (l(), c("div", Sr, [e("div", Ir, [p(Te, {
                    name: "email"
                }), L(" " + t(K.$t("email")), 1)]), re(e("input", {
                    type: "text",
                    placeholder: K.$t("inputemail"),
                    "onUpdate:modelValue": H[5] || (H[5] = ve => T.email = ve),
                    maxlength: "250"
                }, null, 8, Ar), [
                    [fe, T.email, void 0, {
                        trim: !0
                    }]
                ])])) : k("v-if", !0), I.value ? (l(), c("div", Wr, [e("div", Br, [p(Te, {
                    name: "ifscCode"
                }), L(" " + t(K.$t("IFSCCode")), 1)]), re(e("input", {
                    placeholder: K.$t("phEnter") + K.$t("IFSCCode"),
                    "onUpdate:modelValue": H[6] || (H[6] = ve => T.ifsccode = ve),
                    onBlur: We,
                    onInput: pe,
                    maxlength: "11"
                }, null, 40, Ur), [
                    [fe, T.ifsccode, void 0, {
                        trim: !0
                    }]
                ])])) : k("v-if", !0), P.value ? (l(), c("div", Dr, [e("div", Pr, [p(Te, {
                    name: "address"
                }), L(" Routing Number ")]), re(e("input", {
                    placeholder: K.$t("phEnter") + " Routing Number",
                    "onUpdate:modelValue": H[7] || (H[7] = ve => T.ifsccode = ve)
                }, null, 8, Rr), [
                    [fe, T.ifsccode, void 0, {
                        trim: !0
                    }]
                ])])) : k("v-if", !0), !I.value && !P.value ? (l(), c("div", Vr, [e("div", Or, [p(Te, {
                    name: "address"
                }), L(" " + t(K.$t("branchBankAddr")), 1)]), re(e("textarea", {
                    class: "textarea",
                    name: "remark",
                    id: "",
                    cols: "30",
                    rows: "10",
                    placeholder: K.$t("phEnterBranchAddr"),
                    "onUpdate:modelValue": H[8] || (H[8] = ve => T.bankbranchaddress = ve),
                    maxlength: "100"
                }, null, 8, Mr), [
                    [fe, T.bankbranchaddress, void 0, {
                        trim: !0
                    }]
                ])])) : k("v-if", !0), e("div", Lr, [e("button", {
                    class: ie({
                        active: Q.value
                    }),
                    onClick: B
                }, t(K.$t("save")), 3)])])) : (l(), c("div", qr, [k("选择银行卡"), p(Xt, {
                    bankList: C(x),
                    onOnSelectItem: W
                }, null, 8, ["bankList"])]))]), p(dr, {
                    modelValue: n.value,
                    "onUpdate:modelValue": H[9] || (H[9] = ve => n.value = ve),
                    list: _.value,
                    onChangeBank: D
                }, null, 8, ["modelValue", "list"])], 64)
            }
        }
    });
const Fr = ne(jr, [
        ["__scopeId", "data-v-1726638e"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddBankCard/index.vue"]
    ]),
    g_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Fr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ot = document.createElement("canvas"),
    Mt = ot.getContext("2d");
ot.width = 1920;
ot.height = 1080;
class zr extends Error {
    constructor() {
        super("can't process cross-origin image"), this.name = "DropImageFetchError"
    }
}
class Er extends Error {
    constructor() {
        super("drag-and-dropped file is not of type image and can't be decoded"), this.name = "DropImageDecodeError"
    }
}

function Jt(f, n, s) {
    let m, i;
    const r = new Promise((d, o) => {
        m = d, i = o
    });
    return f.addEventListener(n, m), f.addEventListener(s, i), r.finally(() => {
        f.removeEventListener(n, m), f.removeEventListener(s, i)
    }), r
}

function Hr(f, n, s) {
    const m = Math.min(1, ot.width / n, ot.height / s),
        i = m * n,
        r = m * s;
    return Mt.drawImage(f, 0, 0, i, r), Mt.getImageData(0, 0, i, r)
}

function xr(f) {
    const n = f.naturalWidth,
        s = f.naturalHeight;
    return Hr(f, n, s)
}
async function Kr(f) {
    if (f.startsWith("http") && f.includes(location.host) === !1) throw new zr;
    const n = document.createElement("img");
    return n.src = f, await Jt(n, "load"), xr(n)
}
async function Zr(f) {
    if (/image.*/.test(f.type)) {
        const n = new FileReader;
        n.readAsDataURL(f);
        const m = (await Jt(n, "load")).target.result,
            i = await Kr(m);
        return ba(i.data, i.width, i.height)
    } else throw new Er
}
const ea = f => (Ne("data-v-b3c0cdff"), f = f(), Se(), f),
    Gr = {
        class: "addupi_C"
    },
    Qr = {
        class: "addupi_C-header wallet_18"
    },
    Yr = ea(() => e("div", {
        class: "addupi_C-title"
    }, "UPI Name", -1)),
    Xr = {
        class: "addupi_C-title"
    },
    Jr = {
        class: "addupi_C_number"
    },
    ed = {
        class: "tip"
    },
    td = ea(() => e("div", {
        class: "addupi_C-title"
    }, "UPI ID", -1)),
    ad = {
        key: 0,
        class: "addupi_C-title"
    },
    nd = {
        key: 2,
        class: "addupi_C-title"
    },
    od = {
        key: 3,
        class: "addupi_C-uploader"
    },
    sd = {
        class: "addupi_C-uploader-btn"
    },
    ld = {
        key: 4,
        class: "addupi_C-title"
    },
    id = ae({
        __name: "index",
        setup(f) {
            const n = ue(),
                s = Ie(),
                {
                    isOpenWithdraw: m
                } = ze(),
                i = De(),
                r = g("91"),
                d = g(""),
                {
                    t: o
                } = me(),
                w = g(""),
                h = g([]),
                a = g(),
                _ = j(() => n.currentRoute.value.query.bankCode || ""),
                {
                    iseditor: v,
                    onLoad: S,
                    makeTxt: u
                } = Pe(),
                N = () => {
                    n.replace({
                        name: "Withdraw-FastUpi",
                        query: {
                            type: "Add",
                            bankCode: _.value,
                            bid: s.query.bid || ""
                        }
                    })
                },
                y = he({
                    beneficiaryName: "",
                    accountNo: "",
                    smsCode: "",
                    type: "",
                    bankCode: _.value,
                    categoryId: _.value ? 27 : null,
                    mobileNo: "",
                    codeType: be.addNewUPI_N,
                    confirmAccountNo: "",
                    pin: ""
                }),
                W = Ee({
                    content: () => _.value && i.getNeedFastKycValidIsOpen ? p(ut, {
                        code: y.smsCode,
                        "onUpdate:code": O => y.smsCode = O,
                        mobile: y.mobileNo,
                        onConfirm: U,
                        bank: _.value,
                        upi: y.accountNo
                    }, null) : p(He, {
                        type: y.type,
                        "onUpdate:type": O => y.type = O,
                        code: y.smsCode,
                        "onUpdate:code": O => y.smsCode = O,
                        onConfirm: U,
                        codeType: y.codeType
                    }, null),
                    beforeClose: () => {
                        y.smsCode = ""
                    }
                }),
                $ = O => (O.preventDefault(), !1);

            function q(O) {
                const B = O.target,
                    F = /[^0-9]/g;
                B.value = B.value.replace(F, "")
            }
            const I = O => {
                    y.accountNo = O.target.value.replace(/[\u4e00-\u9fa5]/g, "")
                },
                P = (O, B) => {
                    let F = "";
                    if (O.includes("://")) return F = new URL(O).searchParams.get("pa") || "", F === B; {
                        const oe = O.match(/pa=([^&\s]+)/);
                        return F = oe ? oe[1] : "", F === B
                    }
                },
                x = async O => {
                    const B = h.value[0] || O,
                        F = y.accountNo || "";
                    if (!i.getNeedFastKycValidIsOpen && !_.value) return !0;
                    if (!F) return z(o("phEnterUPIID"));
                    if (!B) return z(o("withdrawQrcodeTips"));
                    try {
                        const oe = await Zr(B.file);
                        return P(oe.data, F.trim()) ? !0 : z(o("qrupiId"))
                    } catch (oe) {
                        return console.log(oe), z(o("upiUploadImg"))
                    }
                },
                J = async O => typeof await x(O) == "boolean";

            function R(O) {
                var Y;
                const B = sessionStorage.getItem("areaPhoneLenList");
                let oe = (Y = JSON.parse(B).find(pe => O.indexOf(pe.area.replace("+", "")) == 0)) == null ? void 0 : Y.area.replace("+", "");
                oe && (r.value = oe, d.value = O.substring(oe.length))
            }
            const se = j(() => y.beneficiaryName && y.accountNo && d && r),
                T = g(!1),
                te = async () => {
                    const O = await ee(Ht());
                    w.value = (O == null ? void 0 : O.data) || "", w.value != "" && R(w.value)
                },
                E = async () => {
                    if (!i.getNeedKycValid) return !1;
                    const O = await ee(La({
                        categoryId: 27,
                        accountNo: y.accountNo
                    }));
                    return O ? (O.data && z({
                        message: o("code254"),
                        wordBreak: "break-word"
                    }), O.data) : !1
                },
                U = async () => {
                    const {
                        confirmAccountNo: O,
                        ...B
                    } = y;
                    if (T.value) return;
                    T.value = !0;
                    const F = await ee(Ma(B));
                    T.value = !1, F && (je(o("addedSuccessfully")), W.close(), await n.replace({
                        name: "Withdraw-FastUpi",
                        query: {
                            bankCode: _.value,
                            bid: s.query.bid || ""
                        }
                    }))
                };
            S(y, "beneficiaryName");
            const Q = async () => {
                const O = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/;
                if (!y.mobileNo) return z(o("pphone"));
                if (!st(r.value, `${y.mobileNo}`.trim().length)) return z({
                    message: o("wrongTel"),
                    wordBreak: "break-word"
                });
                if (_.value === "slice" && !/^\d{4}$/.test(y.pin)) return z(o("pinFormatError"));
                if (!O.test(y.accountNo)) return z(o("UPIID"));
                if (typeof await x() == "boolean" && !await E()) {
                    if (!O.test(y.confirmAccountNo) && !_.value) return z(o("confirmAccountNo"));
                    if (y.accountNo !== y.confirmAccountNo && !_.value) return z(o("UPIIDNotSame"));
                    if (_.value && i.getNeedFastKycValidIsOpen || m.value) return W.open();
                    U()
                }
            };
            return qt(a, () => {
                a.value.close()
            }), te(), (O, B) => {
                const F = V("NavBar"),
                    oe = V("svg-icon"),
                    Y = V("van-field"),
                    pe = V("van-icon"),
                    We = V("van-uploader");
                return l(), c("div", Gr, [p(F, {
                    title: `${C(et)(_.value)} ${O.$t("paymentMethod")}`,
                    "left-arrow": "",
                    onClickLeft: N
                }, null, 8, ["title"]), e("div", Qr, [p(oe, {
                    name: _.value || "upi"
                }, null, 8, ["name"]), L(t(O.$t("UPIInformation")), 1)]), Yr, p(Y, {
                    class: "upi-input",
                    modelValue: y.beneficiaryName,
                    "onUpdate:modelValue": B[0] || (B[0] = D => y.beneficiaryName = D),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 30,
                    placeholder: O.$t("phEnterUPIName"),
                    readonly: C(v),
                    onInput: B[1] || (B[1] = D => C(u)(y, "beneficiaryName")),
                    rules: [{
                        required: !0,
                        message: O.$t("phEnterUPIName")
                    }]
                }, null, 8, ["modelValue", "placeholder", "readonly", "rules"]), e("div", Xr, t(O.$t("phoneN")), 1), e("div", Jr, [p(Y, {
                    class: "upi-input number",
                    modelValue: y.mobileNo,
                    "onUpdate:modelValue": B[2] || (B[2] = D => y.mobileNo = D),
                    modelModifiers: {
                        number: !0,
                        trim: !0
                    },
                    type: "text",
                    onInput: q,
                    maxlength: C(xt)(r.value),
                    placeholder: O.$t("plsEnterTel")
                }, null, 8, ["modelValue", "maxlength", "placeholder"])]), e("div", ed, [p(pe, {
                    name: "warning-o",
                    size: "14"
                }), L(t(O.$t("upiTip1")), 1)]), td, p(Y, {
                    class: "upi-input",
                    modelValue: y.accountNo,
                    "onUpdate:modelValue": B[3] || (B[3] = D => y.accountNo = D),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 30,
                    type: "text",
                    onInput: I,
                    placeholder: O.$t("phEnterUPIID")
                }, null, 8, ["modelValue", "placeholder"]), _.value === "slice" ? (l(), c("div", ad, t(O.$t("pin")), 1)) : k("v-if", !0), _.value === "slice" ? (l(), we(Y, {
                    key: 1,
                    class: "upi-input",
                    modelValue: y.pin,
                    "onUpdate:modelValue": B[4] || (B[4] = D => y.pin = D),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 4,
                    min: 0,
                    max: 9999,
                    type: "digit",
                    placeholder: O.$t("enterPin")
                }, null, 8, ["modelValue", "placeholder"])) : k("v-if", !0), _.value ? (l(), c("div", nd, t(O.$t("withdrawQrcode")), 1)) : k("v-if", !0), _.value ? (l(), c("div", od, [p(We, {
                    ref: "uploadRef",
                    "max-size": 5e3 * 1024,
                    accept: "image/*",
                    "after-read": J,
                    "preview-full-image": !1,
                    modelValue: h.value,
                    "onUpdate:modelValue": B[5] || (B[5] = D => h.value = D),
                    "max-count": 1,
                    onOversize: B[6] || (B[6] = () => C(mt)(O.$t("sellTip14")))
                }, {
                    default: G(() => [e("div", sd, [p(oe, {
                        name: "uploadIcon"
                    }), e("span", null, t(h.value.length === 0 ? O.$t("uploadImage") : O.$t("changeImage")), 1)])]),
                    _: 1
                }, 8, ["modelValue"])])) : k("v-if", !0), _.value ? k("v-if", !0) : (l(), c("div", ld, t(O.$t("confirm")) + " UPI ID", 1)), _.value ? k("v-if", !0) : (l(), we(Y, {
                    key: 5,
                    onPaste: $,
                    class: "upi-input",
                    modelValue: y.confirmAccountNo,
                    "onUpdate:modelValue": B[7] || (B[7] = D => y.confirmAccountNo = D),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 30,
                    type: "text",
                    placeholder: O.$t("phEnterUPIID")
                }, null, 8, ["modelValue", "placeholder"])), e("div", {
                    class: ie(["bind-bank-sumbit", {
                        disable: !se.value
                    }]),
                    onClick: Q
                }, t(O.$t("save")), 3)])
            }
        }
    });
const rd = ne(id, [
        ["__scopeId", "data-v-b3c0cdff"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddFastUpi/index.vue"]
    ]),
    k_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: rd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    dd = {
        class: "addKBZ"
    },
    cd = {
        class: "addKBZ-top"
    },
    ud = ["src"],
    pd = {
        class: "addKBZ-item"
    },
    vd = {
        class: "label"
    },
    _d = {
        class: "selectB"
    },
    md = {
        class: "addKBZ-item"
    },
    hd = {
        class: "label"
    },
    wd = ["placeholder", "readonly"],
    fd = {
        class: "addKBZ-item"
    },
    yd = {
        class: "label"
    },
    gd = ["placeholder"],
    kd = ae({
        __name: "index",
        setup(f) {
            const {
                iseditor: n,
                onInput: s,
                checkAccoutNo: m,
                onLoad: i,
                makeTxt: r
            } = Pe(), {
                t: d
            } = me(), o = ue(), {
                setLoading: w
            } = Ue();
            let h = he([]);
            const a = g(""),
                {
                    isOpenWithdraw: _
                } = ze(),
                v = he({
                    smsCode: "",
                    withdrawId: 8,
                    bankId: 0,
                    mobileNo: "",
                    beneficiaryName: "",
                    type: "",
                    codeType: be.addKBZ
                }),
                S = j(() => !(v.mobileNo.trim().length == 0 || v.bankId == 0 || v.beneficiaryName.trim().length == 0));
            async function u() {
                const I = await ee(Qe({
                    withdrawid: 8
                }));
                I && (h = I.data.banklist, a.value = h.length > 0 ? h[0].bankName : "", v.bankId = h.length > 0 ? h[0].bankID : 0)
            }
            _e(async () => {
                await u()
            });
            const N = () => !S.value || !localStorage.getItem("numberType") ? !1 : v.bankId == 0 ? z({
                    message: d("addCardMsg1"),
                    wordBreak: "break-word"
                }) : v.beneficiaryName.toString().trim().length == 0 ? z({
                    message: d("phEnterName"),
                    wordBreak: "break-word"
                }) : v.mobileNo.toString().trim().length == 0 ? z({
                    message: d("addCardMsg4"),
                    wordBreak: "break-word"
                }) : m(v.mobileNo, d("tel") + d("formatErr")) ? st(localStorage.getItem("numberType"), v.mobileNo.trim().length) ? !0 : z({
                    message: d("wrongTel"),
                    wordBreak: "break-word"
                }) : void 0,
                A = Ee({
                    content: () => p(He, {
                        type: v.type,
                        "onUpdate:type": I => v.type = I,
                        code: v.smsCode,
                        "onUpdate:code": I => v.smsCode = I,
                        onConfirm: $,
                        codeType: be.addKBZ
                    }, null),
                    beforeClose: () => {
                        v.smsCode = ""
                    }
                });
            async function W() {
                if (N() === !0) {
                    if (v.smsCode = "", _.value) return A.open();
                    await $()
                }
            }
            async function $() {
                w(!0), await ee(ct(v)) && (A.close(), o.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), w(!1)
            }

            function q() {
                o.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    }
                })
            }
            return i(v, "beneficiaryName"), (I, P) => {
                const x = V("NavBar"),
                    J = V("svg-icon");
                return l(), c("div", dd, [p(x, {
                    title: `${I.$t("addto")} KBZPay`,
                    "left-arrow": "",
                    onClickLeft: q
                }, null, 8, ["title"]), e("div", cd, [e("img", {
                    src: C(ge)("wallet", "hint")
                }, null, 8, ud), e("span", null, t(I.$t("WaveTip1")), 1)]), e("div", pd, [e("div", vd, [p(J, {
                    name: "bank"
                }), L(" " + t(I.$t("bankname")), 1)]), e("div", _d, t(a.value), 1)]), e("div", md, [e("div", hd, [p(J, {
                    name: "name"
                }), L(" " + t(I.$t("name")), 1)]), re(e("input", {
                    placeholder: I.$t("phEnterName"),
                    "onUpdate:modelValue": P[0] || (P[0] = R => v.beneficiaryName = R),
                    maxlength: "50",
                    onInput: P[1] || (P[1] = R => C(r)(v, "beneficiaryName")),
                    readonly: C(n)
                }, null, 40, wd), [
                    [fe, v.beneficiaryName, void 0, {
                        trim: !0
                    }]
                ])]), e("div", fd, [e("div", yd, [p(J, {
                    name: "phone"
                }), L(" " + t(I.$t("tel")), 1)]), re(e("input", {
                    placeholder: I.$t("phEnterPayeeTel"),
                    "onUpdate:modelValue": P[2] || (P[2] = R => v.mobileNo = R),
                    maxlength: 12,
                    onInput: P[3] || (P[3] = R => C(s)(v, "mobileNo"))
                }, null, 40, gd), [
                    [fe, v.mobileNo, void 0, {
                        trim: !0
                    }]
                ])]), e("div", {
                    class: ie(["addKBZ-btn", {
                        active: S.value
                    }]),
                    onClick: W
                }, t(I.$t("save")), 3)])
            }
        }
    });
const $d = ne(kd, [
        ["__scopeId", "data-v-ee22f671"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddKbz/index.vue"]
    ]),
    $_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $d
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    bd = f => (Ne("data-v-9694f22e"), f = f(), Se(), f),
    Cd = {
        class: "addBankCard__container"
    },
    Td = {
        class: "addBankCard__container-content"
    },
    Nd = {
        class: "addBankCard__container-content-top"
    },
    Sd = {
        class: "addBankCard__container-content-top-item"
    },
    Id = {
        class: "label"
    },
    Ad = ["readonly", "placeholder"],
    Wd = {
        class: "addBankCard__container-content-top-item"
    },
    Bd = bd(() => e("div", {
        class: "label"
    }, "CPF", -1)),
    Ud = ["readonly", "placeholder"],
    Dd = {
        class: "addBankCard__container-content-top-item"
    },
    Pd = {
        class: "label"
    },
    Rd = {
        class: "ar-searchbar"
    },
    Vd = {
        class: "addBankCard__container-content-top-item"
    },
    Od = {
        class: "label"
    },
    Md = {
        class: "accountNo"
    },
    Ld = {
        key: 0
    },
    qd = ["placeholder"],
    jd = ["placeholder"],
    Fd = {
        class: "addBankCard__container-content-btn"
    },
    zd = {
        class: "search"
    },
    Ed = ae({
        __name: "index",
        setup(f) {
            const {
                getSelfCustomerServiceLink: n
            } = gt({
                ServerType: 2
            }), {
                t: s
            } = me(), {
                setLoading: m
            } = Ue(), i = ue(), r = g(""), d = g(!1), o = i.currentRoute.value.query.fromV || "Withdraw-PIX";

            function w() {
                i.replace({
                    name: o,
                    query: {
                        type: "Add"
                    }
                })
            }
            const {
                isOpenWithdraw: h
            } = ze(), a = he({
                bankId: 0,
                accountNo: "",
                name: "",
                cpf: "",
                smsCode: "",
                type: "",
                codeType: be.addPIX,
                pixType: ""
            }), _ = g(localStorage.getItem("numberType")), v = g("");
            let S = g([]),
                u = he([]);
            const N = j(() => !(a.accountNo.trim().length == 0 || a.name.trim().length == 0 || a.cpf.trim().length == 0 || a.bankId == 0)),
                y = () => {
                    n()
                };

            function A(U) {
                U.preventDefault();
                const O = U.clipboardData.getData("text").replace(/[^\d]/g, "");
                U.target.value = O, U.target.id == "cpf" ? a.cpf = O : U.target.id == "accountNo" && (a.accountNo = O)
            }
            const W = () => {
                if (N.value) return a.name.trim().length == 0 ? z({
                    message: s("phEnterPayeeName"),
                    wordBreak: "break-word"
                }) : a.cpf.trim().length == 0 ? z({
                    message: s("enterCpf"),
                    wordBreak: "break-word"
                }) : T(a.cpf.trim()) ? a.bankId == 0 ? z({
                    message: s("tipsCpf2"),
                    wordBreak: "break-word"
                }) : a.accountNo.trim().length == 0 ? z({
                    message: s("tipsCpf3"),
                    wordBreak: "break-word"
                }) : (r.value.toUpperCase().indexOf("PHONE") != -1 || r.value.toUpperCase().indexOf("CPF") != -1) && a.accountNo.trim().length != 11 ? z({
                    message: s("tipsCpf4"),
                    wordBreak: "break-word"
                }) : r.value.toUpperCase().indexOf("CPF") != -1 && a.accountNo != a.cpf ? z({
                    message: s("pixTip1"),
                    wordBreak: "break-word"
                }) : ["EMALL", "EMAIL"].includes(r.value.toUpperCase()) && !Gt.email1.test(a.accountNo.trim()) ? z({
                    message: s(Qt.email),
                    wordBreak: "break-word"
                }) : !0 : z({
                    message: s("tipsCpf1"),
                    wordBreak: "break-word"
                })
            };
            async function $() {
                if (W() === !0) {
                    if (a.smsCode = "", h.value) return E.open();
                    await q()
                }
            }
            async function q() {
                m(!0);
                let U = a;
                if (r.value.toUpperCase().indexOf("PHONE") != -1) {
                    const O = _.value + a.accountNo;
                    U = Object.assign({}, a, {
                        accountNo: O
                    })
                }
                await ee(qa(U)) && (je(s("addedSuccessfully")), E.close(), a.accountNo = "", await i.replace({
                    name: o,
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), m(!1)
            }
            const I = g(!0);
            async function P() {
                const U = await ee(ja());
                U && U.data != null ? (I.value = !0, a.name = U.data.realName, a.cpf = U.data.idCard) : I.value = !1
            }
            async function x() {
                const U = await ee(Qe({
                    withdrawid: 5
                }));
                U && (u = U.data.banklist, r.value = u.length > 0 ? u[0].bankName : "", a.bankId = u.length > 0 ? u[0].bankID : 0, S.value = u, J())
            }
            qe(v, () => {
                u.length > 0 && (S.value = u.filter(U => U.bankName.toLowerCase().indexOf(v.value.toLowerCase()) !== -1))
            });

            function J() {
                a.accountNo = "", a.pixType = "", r.value.toUpperCase().indexOf("CPF") != -1 && (a.pixType = "cpf", a.cpf.trim().length != 0 && (a.accountNo = a.cpf))
            }
            qe(d, () => {
                d.value && (v.value = "")
            });

            function R() {
                d.value = !0
            }
            const se = ({
                selectedOptions: U
            }) => {
                d.value = !1, U[0] && (r.value = U[0].bankName, a.bankId = U[0].bankID, J())
            };

            function T(U) {
                if (U = U.replace(/[^\d]+/g, ""), U == "" || U.length != 11 || U == "00000000000" || U == "11111111111" || U == "22222222222" || U == "33333333333" || U == "44444444444" || U == "55555555555" || U == "66666666666" || U == "77777777777" || U == "88888888888" || U == "99999999999") return !1;
                let Q = 0;
                for (let B = 0; B < 9; B++) Q += parseInt(U.charAt(B)) * (10 - B);
                let O = 11 - Q % 11;
                if ((O == 10 || O == 11) && (O = 0), O != parseInt(U.charAt(9))) return !1;
                Q = 0;
                for (let B = 0; B < 10; B++) Q += parseInt(U.charAt(B)) * (11 - B);
                return O = 11 - Q % 11, (O == 10 || O == 11) && (O = 0), O == parseInt(U.charAt(10))
            }
            _e(async () => {
                await P(), await x()
            });
            const E = Ee({
                content: () => p(He, {
                    type: a.type,
                    "onUpdate:type": U => a.type = U,
                    code: a.smsCode,
                    "onUpdate:code": U => a.smsCode = U,
                    onConfirm: q,
                    codeType: be.addPIX
                }, null),
                beforeClose: () => {
                    a.smsCode = ""
                }
            });
            return (U, Q) => {
                const O = V("NavBar"),
                    B = V("svg-icon"),
                    F = V("ArSelect"),
                    oe = V("van-picker"),
                    Y = V("van-popup");
                return l(), c("div", Cd, [p(O, {
                    title: U.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: w
                }, null, 8, ["title"]), e("div", Td, [e("h1", null, [p(B, {
                    name: "pix"
                }), L(t(U.$t("pixInfo")), 1)]), e("div", Nd, [e("div", Sd, [e("div", Id, t(U.$t("payeeName")), 1), re(e("input", {
                    readonly: I.value,
                    placeholder: U.$t("phEnterPayeeName"),
                    "onUpdate:modelValue": Q[0] || (Q[0] = pe => a.name = pe)
                }, null, 8, Ad), [
                    [fe, a.name]
                ])]), e("div", Wd, [Bd, re(e("input", {
                    readonly: I.value,
                    placeholder: U.$t("enterCpf"),
                    "onUpdate:modelValue": Q[1] || (Q[1] = pe => a.cpf = pe),
                    maxlength: "11",
                    oninput: "value=value.replace(/\\D/g,'')",
                    onPaste: A,
                    id: "cpf"
                }, null, 40, Ud), [
                    [fe, a.cpf]
                ])]), e("div", Dd, [e("div", Pd, t(U.$t("pixType")), 1), e("div", Rd, [p(F, {
                    onClickSelect: R,
                    selectName: r.value
                }, null, 8, ["selectName"])])]), e("div", Vd, [e("div", Od, t(U.$t("pixAccount")), 1), e("div", Md, [r.value.toUpperCase().indexOf("PHONE") != -1 ? (l(), c("div", Ld, "+" + t(_.value), 1)) : k("v-if", !0), k("phone只能输入数字"), r.value.toUpperCase().indexOf("PHONE") != -1 || r.value.toUpperCase().indexOf("CPF") != -1 ? re((l(), c("input", {
                    key: 1,
                    placeholder: U.$t("enterPixAccount"),
                    "onUpdate:modelValue": Q[2] || (Q[2] = pe => a.accountNo = pe),
                    oninput: "value=value.replace(/\\D/g,'')",
                    maxlength: "11",
                    onPaste: A,
                    id: "accountNo"
                }, null, 40, qd)), [
                    [fe, a.accountNo, void 0, {
                        trim: !0
                    }]
                ]) : re((l(), c("input", {
                    key: 2,
                    placeholder: U.$t("enterPixAccount"),
                    "onUpdate:modelValue": Q[3] || (Q[3] = pe => a.accountNo = pe),
                    oninput: "value=value.replace(/\\s+/g,'')",
                    maxlength: "40"
                }, null, 8, jd)), [
                    [fe, a.accountNo, void 0, {
                        trim: !0
                    }]
                ])])])])]), e("div", Fd, [e("button", {
                    class: ie({
                        active: N.value
                    }),
                    onClick: $
                }, t(U.$t("save")), 3), e("div", {
                    onClick: y
                }, [p(B, {
                    name: "iconservr-r"
                }), L(t(U.$t("withdrawDialogDesc5")), 1)])]), p(Y, {
                    show: d.value,
                    "onUpdate:show": Q[6] || (Q[6] = pe => d.value = pe),
                    round: "",
                    position: "bottom"
                }, {
                    default: G(() => [e("div", zd, [p(sn, {
                        placeholder: U.$t("searchPixType"),
                        value: v.value,
                        "onUpdate:value": Q[4] || (Q[4] = pe => v.value = pe),
                        isShowClose: !0
                    }, null, 8, ["placeholder", "value"])]), p(oe, {
                        "columns-field-names": {
                            text: "bankName",
                            value: "bankID",
                            children: "children"
                        },
                        columns: C(S),
                        onCancel: Q[5] || (Q[5] = pe => d.value = !1),
                        onConfirm: se
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Hd = ne(Ed, [
        ["__scopeId", "data-v-9694f22e"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddPIX/index.vue"]
    ]),
    b_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Hd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xd = {
        class: "addtype4_C"
    },
    Kd = {
        class: "addtype4_C-header"
    },
    Zd = {
        class: "addtype4_C-title"
    },
    Gd = {
        class: "selectB"
    },
    Qd = {
        class: "addtype4_C-title"
    },
    Yd = {
        class: "successTip"
    },
    Xd = ae({
        __name: "index",
        setup(f) {
            const {
                t: n
            } = me(), s = ue(), {
                isOpenWithdraw: m
            } = ze(), i = s.currentRoute.value.query.Type4name, r = g(!1), d = he({
                withdrawId: 22,
                mobileNo: "",
                bankId: "",
                smsCode: "",
                beneficiaryName: "",
                type: "",
                codeType: be.addEWallet
            }), o = g({
                bankName: "",
                bankID: 0,
                reserved: ""
            });
            g(!1);
            const w = () => {
                    s.replace({
                        name: "Withdraw-RsnPay",
                        query: {
                            type: "Add",
                            Type4name: i
                        }
                    })
                },
                h = j(() => d.mobileNo);
            let a = g([]);
            async function _() {
                var A;
                const y = await ee(Qe({
                    withdrawid: 22
                }));
                y && (a.value = y.data.banklist, ((A = y == null ? void 0 : y.data) == null ? void 0 : A.banklist.length) > 0 && (o.value = y.data.banklist[0], d.bankId = y.data.banklist[0].bankID))
            }
            _e(async () => {
                await _()
            });
            const v = async () => {
                    await ee(ct(d)) && (je(n("addedSuccessfully")), u.close(), s.replace({
                        name: "Withdraw",
                        query: {
                            bid: 0,
                            type: 22
                        }
                    }), s.replace({
                        name: "Withdraw-RsnPay",
                        query: {
                            type: "Add",
                            Type4name: i
                        }
                    }))
                },
                u = Ee({
                    content: () => p(He, {
                        type: d.type,
                        "onUpdate:type": y => d.type = y,
                        code: d.smsCode,
                        "onUpdate:code": y => d.smsCode = y,
                        onConfirm: v,
                        codeType: be.addEWallet
                    }, null),
                    beforeClose: () => {
                        d.smsCode = ""
                    }
                }),
                N = async () => {
                    if (m.value) return u.open();
                    await v()
                };
            return (y, A) => {
                const W = V("NavBar"),
                    $ = V("van-field"),
                    q = V("van-toast");
                return l(), c(X, null, [e("div", xd, [p(W, {
                    title: C(i) + C(n)("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: w
                }, null, 8, ["title"]), e("div", Kd, t(C(i)), 1), e("div", Zd, t(y.$t("bankname")), 1), e("div", Gd, t(o.value.bankName), 1), k(` <van-field
			class="addtype4-input"
			v-model="activeBink.bankName"
			:readonly="true"
			disabled
			:placeholder="$t('tipSelectPls')"
		/> `), e("div", Qd, t(y.$t("walletAddress")), 1), p($, {
                    class: "addtype4-input",
                    modelValue: d.mobileNo,
                    "onUpdate:modelValue": A[0] || (A[0] = I => d.mobileNo = I),
                    modelModifiers: {
                        trim: !0
                    },
                    placeholder: y.$t("phEnter") + y.$t("walletAddress")
                }, null, 8, ["modelValue", "placeholder"]), e("div", {
                    class: ie(["sumbitBtn", {
                        disable: !h.value
                    }]),
                    onClick: N
                }, t(y.$t("save")), 3), p(q, {
                    show: r.value,
                    "onUpdate:show": A[1] || (A[1] = I => r.value = I)
                }, {
                    message: G(() => [e("div", Yd, [e("div", null, t(y.$t("addedSuccessfully")), 1)])]),
                    _: 1
                }, 8, ["show"])]), k(` <van-popup v-model:show="showPicker" round position="bottom">
		<van-picker
			:columns="originalBankList"
			:columns-field-names="customFieldName"
			@cancel="showPicker = false"
			@confirm="onConfirm"
		/>
	</van-popup> `)], 2112)
            }
        }
    });
const Jd = ne(Xd, [
        ["__scopeId", "data-v-81838f32"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddRsnPay/index.vue"]
    ]),
    C_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Jd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ec = {
        class: "addtype4_C"
    },
    tc = {
        class: "addtype4_C-header"
    },
    ac = {
        class: "addtype4_C-title"
    },
    nc = {
        class: "addtype4_C-title"
    },
    oc = {
        class: "selectB"
    },
    sc = {
        class: "addtype4_C-title"
    },
    lc = {
        class: "addtype4_C-title"
    },
    ic = {
        class: "successTip"
    },
    rc = ae({
        __name: "index",
        setup(f) {
            const {
                iseditor: n,
                onLoad: s,
                makeTxt: m
            } = Pe(), {
                t: i
            } = me(), r = ue(), {
                isOpenWithdraw: d
            } = ze(), o = r.currentRoute.value.query.Type4name, w = Number(r.currentRoute.value.query.withdrawType), h = g(!1), a = he({
                withdrawId: w,
                mobileNo: "",
                bankId: "",
                smsCode: "",
                beneficiaryName: "",
                type: "",
                codeType: be.addEWallet
            }), _ = g({
                bankName: "",
                bankID: 0,
                reserved: ""
            }), v = g(!1), S = () => {
                r.replace({
                    name: "Withdraw-Type4",
                    query: {
                        type: "Add",
                        Type4name: o,
                        withdrawType: w
                    }
                })
            }, u = {
                text: "bankName",
                value: "bankID"
            }, N = j(() => a.mobileNo && a.bankId && a.beneficiaryName), y = {}.VITE_ADDTYPE4_ONLY_NUM === "1", A = j(() => [23, 24].includes(w) || y ? "digit" : "text");

            function W(E) {
                const U = E.target;
                if (![23, 24].includes(w)) U.value = U.value;
                else {
                    const Q = /[^0-9]/g;
                    U.value = U.value.replace(Q, "")
                }
            }
            let $ = g([]);
            async function q() {
                const E = await ee(Qe({
                    withdrawid: w
                }));
                E && ($.value = E.data.banklist, [23, 24].includes(w) && (_.value = E.data.banklist[0], a.bankId = E.data.banklist[0].bankID))
            }
            _e(async () => {
                await q()
            });
            const I = async () => {
                    console.log("confirm", a, A), await ee(ct({ ...a
                    })) && (je(i("addedSuccessfully")), x.close(), r.replace({
                        name: "Withdraw-Type4",
                        query: {
                            type: "Add",
                            Type4name: o,
                            withdrawType: w
                        }
                    }))
                },
                x = Ee({
                    content: () => p(He, {
                        type: a.type,
                        "onUpdate:type": E => a.type = E,
                        code: a.smsCode,
                        "onUpdate:code": E => a.smsCode = E,
                        onConfirm: I,
                        codeType: be.addEWallet
                    }, null),
                    beforeClose: () => {
                        a.smsCode = ""
                    }
                }),
                J = E => {
                    let U = { ...E.selectedOptions[0]
                    };
                    _.value = U, a.bankId = U.bankID, v.value = !1
                };

            function R(E) {
                return /^[A-Za-z\d]{8,15}$/.test(E) ? !0 : (z({
                    message: i("account") + i("formatErr"),
                    wordBreak: "break-word"
                }), !1)
            }

            function se(E, U) {
                return /^[0-9]{8,15}$/.test(E) ? `${E}`.charAt(0) !== "0" ? (z({
                    message: i("charAtone"),
                    wordBreak: "break-word"
                }), !1) : !0 : (z({
                    message: U,
                    wordBreak: "break-word"
                }), !1)
            }
            const T = () => {
                    const E = y || [23, 24].includes(w);
                    if (!(a.mobileNo.toString().trim().length > 0 && !(E ? se(a.mobileNo, i("account") + i("formatErr")) : R(a.mobileNo)))) return !0
                },
                te = async () => {
                    if (T() === !0) {
                        if (d.value) return x.open();
                        await I()
                    }
                };
            return s(a, "beneficiaryName"), (E, U) => {
                const Q = V("NavBar"),
                    O = V("van-field"),
                    B = V("van-toast"),
                    F = V("van-picker"),
                    oe = V("van-popup");
                return l(), c(X, null, [e("div", ec, [p(Q, {
                    title: C(o) + " " + C(i)("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: S
                }, null, 8, ["title"]), e("div", tc, t(C(o)), 1), C(w) == 4 ? (l(), c(X, {
                    key: 0
                }, [e("div", ac, t(E.$t("selectType")), 1), p(O, {
                    class: "addtype4-input",
                    modelValue: _.value.bankName,
                    "onUpdate:modelValue": U[0] || (U[0] = Y => _.value.bankName = Y),
                    readonly: !0,
                    "right-icon": "arrow-down",
                    placeholder: E.$t("tipSelectPls"),
                    onClick: U[1] || (U[1] = Y => v.value = !0)
                }, null, 8, ["modelValue", "placeholder"])], 64)) : (l(), c(X, {
                    key: 1
                }, [e("div", nc, t(E.$t("bankname")), 1), e("div", oc, t(_.value.bankName), 1)], 64)), e("div", sc, t(E.$t("name")), 1), p(O, {
                    class: "addtype4-input",
                    modelValue: a.beneficiaryName,
                    "onUpdate:modelValue": U[2] || (U[2] = Y => a.beneficiaryName = Y),
                    maxlength: 50,
                    placeholder: E.$t("phEnter") + E.$t("name"),
                    onInput: U[3] || (U[3] = Y => C(m)(a, "beneficiaryName")),
                    readonly: C(n)
                }, null, 8, ["modelValue", "placeholder", "readonly"]), e("div", lc, t(E.$t("account")), 1), p(O, {
                    class: "addtype4-input",
                    modelValue: a.mobileNo,
                    "onUpdate:modelValue": U[4] || (U[4] = Y => a.mobileNo = Y),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 15,
                    type: A.value,
                    placeholder: E.$t("phEnter") + E.$t("account"),
                    onInput: W
                }, null, 8, ["modelValue", "type", "placeholder"]), e("div", {
                    class: ie(["sumbitBtn", {
                        disable: !N.value
                    }]),
                    onClick: te
                }, t(E.$t("save")), 3), p(B, {
                    show: h.value,
                    "onUpdate:show": U[5] || (U[5] = Y => h.value = Y)
                }, {
                    message: G(() => [e("div", ic, [e("div", null, t(E.$t("addedSuccessfully")), 1)])]),
                    _: 1
                }, 8, ["show"])]), p(oe, {
                    show: v.value,
                    "onUpdate:show": U[7] || (U[7] = Y => v.value = Y),
                    round: "",
                    position: "bottom"
                }, {
                    default: G(() => [p(F, {
                        columns: C($),
                        "columns-field-names": u,
                        onCancel: U[6] || (U[6] = Y => v.value = !1),
                        onConfirm: J
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const dc = ne(rc, [
        ["__scopeId", "data-v-497422b6"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddType4/index.vue"]
    ]),
    T_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: dc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    cc = {
        class: "addUSDT__container"
    },
    uc = {
        class: "addUSDT__container-content"
    },
    pc = {
        class: "addUSDT__container-content-top"
    },
    vc = ["src"],
    _c = {
        class: "addUSDT__container-content-item"
    },
    mc = {
        class: "label"
    },
    hc = {
        class: "ar-searchbar"
    },
    wc = {
        class: "addUSDT__container-content-item"
    },
    fc = {
        class: "label"
    },
    yc = {
        class: "input"
    },
    gc = ["placeholder", "maxlength"],
    kc = {
        class: "addUSDT__container-content-item"
    },
    $c = {
        class: "label"
    },
    bc = ["placeholder"],
    Cc = {
        class: "addUSDT__container-content-btn"
    },
    Tc = ae({
        __name: "index",
        setup(f) {
            const {
                t: n
            } = me(), {
                isOpenWithdraw: s
            } = ze(), {
                setLoading: m
            } = Ue(), i = ue(), r = i.currentRoute.value.query.fromV || "Withdraw-USDT";

            function d() {
                i.replace({
                    name: r,
                    query: {
                        type: "Add"
                    }
                })
            }
            const o = g(!1);
            let w = he([]);
            async function h() {
                const P = await ee(Qe({
                    withdrawid: 3
                }));
                P && (w = P.data.banklist, a.value = w.length > 0 ? w[0].bankName : "", u.bankid = w.length > 0 ? w[0].bankID : 0)
            }
            const a = g(""),
                _ = ({
                    selectedOptions: P
                }) => {
                    o.value = !1, a.value = P[0].bankName, u.bankid = P[0].bankID
                };

            function v() {
                o.value = !0
            }
            const S = j(() => a.value.toUpperCase().indexOf("TRC") != -1 ? 36 : a.value.toUpperCase().indexOf("ERC") != -1 ? 46 : 100),
                u = he({
                    withdrawid: 3,
                    bankid: 0,
                    usdtaddress: "",
                    smsCode: "",
                    usdtRemarkName: "",
                    type: "",
                    codeType: be.addUSDT
                }),
                N = P => {
                    const x = P.target;
                    u.usdtaddress = x.value.replace(/[^\w\/]/ig, "")
                },
                y = j(() => !(u.usdtRemarkName.trim().length == 0 || u.bankid == 0 || u.usdtaddress.trim().length == 0)),
                A = () => {
                    if (y.value) return u.bankid == 0 ? z({
                        message: n("onConfirmMsg1"),
                        wordBreak: "break-word"
                    }) : u.usdtaddress.toString().trim().length == 0 ? z({
                        message: n("onConfirmMsg2"),
                        wordBreak: "break-word"
                    }) : u.usdtaddress.trim().length < 30 ? z({
                        message: n("onConfirmMsg4"),
                        wordBreak: "break-word"
                    }) : a.value.toUpperCase().indexOf("TRC") != -1 && (u.usdtaddress.trim().slice(0, 1) != "T" || u.usdtaddress.trim().length > 36) ? z({
                        message: n("onConfirmMsg5"),
                        wordBreak: "break-word"
                    }) : a.value.toUpperCase().indexOf("ERC") != -1 && (u.usdtaddress.trim().slice(0, 2) != "0x" || u.usdtaddress.trim().length > 46) ? z({
                        message: n("onConfirmMsg5"),
                        wordBreak: "break-word"
                    }) : u.usdtRemarkName.toString().trim().length == 0 ? z({
                        message: n("onConfirmMsg3"),
                        wordBreak: "break-word"
                    }) : !0
                };
            async function W() {
                if (A() !== !0) return;
                m(!0), await ee(Fa(u)) && (je(n("addedSuccessfully")), q.close(), await i.replace({
                    name: r,
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), m(!1)
            }
            _e(async () => {
                await h()
            });
            const q = Ee({
                content: () => p(He, {
                    type: u.type,
                    "onUpdate:type": P => u.type = P,
                    code: u.smsCode,
                    "onUpdate:code": P => u.smsCode = P,
                    onConfirm: W,
                    codeType: u.codeType
                }, null),
                beforeClose: () => {
                    u.smsCode = ""
                }
            });
            async function I() {
                if (u.smsCode = "", A() === !0) {
                    if (s.value) return q.open();
                    await W()
                }
            }
            return (P, x) => {
                const J = V("NavBar"),
                    R = V("svg-icon"),
                    se = V("ArSelect"),
                    T = V("van-picker"),
                    te = V("van-popup");
                return l(), c("div", cc, [p(J, {
                    title: P.$t("titleAddUSDTAddr"),
                    "left-arrow": "",
                    onClickLeft: d
                }, null, 8, ["title"]), e("div", uc, [e("div", pc, [e("img", {
                    src: C(ge)("wallet", "hint")
                }, null, 8, vc), e("span", null, t(P.$t("tipBindUrOwnUSDEAddrForFundSafety")), 1)]), e("div", _c, [e("div", mc, [p(R, {
                    name: "usdt1",
                    class: "icon"
                }), L(" " + t(P.$t("selectMainNetwork")), 1)]), e("div", hc, [p(se, {
                    onClickSelect: v,
                    selectName: a.value
                }, null, 8, ["selectName"])])]), e("div", wc, [e("div", fc, [p(R, {
                    name: "usdt2",
                    class: "icon"
                }), L(" " + t(P.$t("usedAddr")), 1)]), e("div", yc, [re(e("input", {
                    placeholder: P.$t("phEnterUSDTAddr"),
                    maxlength: S.value,
                    "onUpdate:modelValue": x[0] || (x[0] = E => u.usdtaddress = E),
                    onInput: N
                }, null, 40, gc), [
                    [fe, u.usdtaddress]
                ])])]), e("div", kc, [e("div", $c, [p(R, {
                    name: "usdt3",
                    class: "icon"
                }), L(" " + t(P.$t("addressAlias")), 1)]), re(e("input", {
                    placeholder: P.$t("phEnterUSDTRemarks"),
                    maxlength: "20",
                    "onUpdate:modelValue": x[1] || (x[1] = E => u.usdtRemarkName = E)
                }, null, 8, bc), [
                    [fe, u.usdtRemarkName]
                ])]), e("div", Cc, [e("button", {
                    class: ie({
                        active: y.value
                    }),
                    onClick: I
                }, t(P.$t("save")), 3)])]), p(te, {
                    show: o.value,
                    "onUpdate:show": x[3] || (x[3] = E => o.value = E),
                    round: "",
                    position: "bottom"
                }, {
                    default: G(() => [p(T, {
                        "columns-field-names": {
                            text: "bankName",
                            value: "bankID",
                            children: "children"
                        },
                        columns: C(w),
                        onCancel: x[2] || (x[2] = E => o.value = !1),
                        onConfirm: _
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Nc = ne(Tc, [
        ["__scopeId", "data-v-24736190"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddUSDT/index.vue"]
    ]),
    N_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Nc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    bt = document.createElement("canvas");
bt.getContext("2d");
bt.width = 1920;
bt.height = 1080;
const ta = f => (Ne("data-v-8ced09ab"), f = f(), Se(), f),
    Sc = {
        class: "addupi_C"
    },
    Ic = {
        class: "addupi_C-header wallet_18"
    },
    Ac = ta(() => e("div", {
        class: "addupi_C-title"
    }, "UPI Name", -1)),
    Wc = {
        class: "addupi_C-title"
    },
    Bc = {
        class: "addupi_C_number"
    },
    Uc = {
        class: "tip"
    },
    Dc = ta(() => e("div", {
        class: "addupi_C-title"
    }, "UPI ID", -1)),
    Pc = {
        class: "addupi_C-title"
    },
    Rc = ae({
        __name: "index",
        setup(f) {
            const n = ue(),
                s = Ie(),
                {
                    isOpenWithdraw: m
                } = ze(),
                i = De(),
                r = g("91"),
                d = g(""),
                {
                    t: o
                } = me(),
                w = g("");
            g([]);
            const h = g(),
                {
                    iseditor: a,
                    onLoad: _,
                    makeTxt: v
                } = Pe(),
                S = () => {
                    n.replace({
                        name: "Withdraw-Upi",
                        query: {
                            type: "Add",
                            bid: s.query.bid || ""
                        }
                    })
                },
                u = he({
                    beneficiaryName: "",
                    accountNo: "",
                    smsCode: "",
                    type: "",
                    bankCode: "",
                    categoryId: 2,
                    mobileNo: "",
                    codeType: be.addNewUPI_N,
                    confirmAccountNo: ""
                }),
                N = () => {
                    u.smsCode = ""
                },
                y = T => (T.preventDefault(), !1),
                A = Ee({
                    content: () => p(He, {
                        type: u.type,
                        "onUpdate:type": T => u.type = T,
                        code: u.smsCode,
                        "onUpdate:code": T => u.smsCode = T,
                        onConfirm: R,
                        codeType: u.codeType
                    }, null),
                    beforeClose: N
                });

            function W(T) {
                const te = T.target,
                    E = /[^0-9]/g;
                te.value = te.value.replace(E, "")
            }
            const $ = T => {
                u.accountNo = T.target.value.replace(/[\u4e00-\u9fa5]/g, "")
            };

            function q(T) {
                var Q;
                const te = sessionStorage.getItem("areaPhoneLenList");
                let U = (Q = JSON.parse(te).find(O => T.indexOf(O.area.replace("+", "")) == 0)) == null ? void 0 : Q.area.replace("+", "");
                U && (r.value = U, d.value = T.substring(U.length))
            }
            const I = j(() => u.beneficiaryName && u.accountNo && d && r),
                P = g(!1),
                x = async () => {
                    const T = await ee(Ht());
                    w.value = (T == null ? void 0 : T.data) || "", w.value != "" && q(w.value)
                },
                J = async () => {
                    if (!i.getNeedKycValid) return !1;
                    const T = await ee(Ea({
                        categoryId: 2,
                        accountNo: u.accountNo
                    }));
                    return T ? (T.data && z({
                        message: o("code254"),
                        wordBreak: "break-word"
                    }), T.data) : !1
                },
                R = async () => {
                    const {
                        confirmAccountNo: T,
                        ...te
                    } = u;
                    if (P.value) return;
                    P.value = !0;
                    const E = await ee(za(te));
                    P.value = !1, E && (je(o("addedSuccessfully")), A.close(), await n.replace({
                        name: "Withdraw-Upi",
                        query: {
                            bid: s.query.bid || ""
                        }
                    }))
                };
            _(u, "beneficiaryName");
            const se = async () => {
                const T = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/;
                if (!u.mobileNo) return z(o("pphone"));
                if (!st(r.value, `${u.mobileNo}`.trim().length)) return z({
                    message: o("wrongTel"),
                    wordBreak: "break-word"
                });
                if (!T.test(u.accountNo)) return z(o("UPIID"));
                if (!T.test(u.confirmAccountNo)) return z(o("confirmAccountNo"));
                if (u.accountNo !== u.confirmAccountNo) return z(o("UPIIDNotSame"));
                if (!await J()) {
                    if (m.value) return A.open();
                    R()
                }
            };
            return qt(h, () => {
                h.value.close()
            }), x(), (T, te) => {
                const E = V("NavBar"),
                    U = V("svg-icon"),
                    Q = V("van-field"),
                    O = V("van-icon");
                return l(), c("div", Sc, [p(E, {
                    title: T.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: S
                }, null, 8, ["title"]), e("div", Ic, [p(U, {
                    name: "upi"
                }), L(t(T.$t("UPIInformation")), 1)]), Ac, p(Q, {
                    class: "upi-input",
                    modelValue: u.beneficiaryName,
                    "onUpdate:modelValue": te[0] || (te[0] = B => u.beneficiaryName = B),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 30,
                    placeholder: T.$t("phEnterUPIName"),
                    readonly: C(a),
                    onInput: te[1] || (te[1] = B => C(v)(u, "beneficiaryName")),
                    rules: [{
                        required: !0,
                        message: T.$t("phEnterUPIName")
                    }]
                }, null, 8, ["modelValue", "placeholder", "readonly", "rules"]), e("div", Wc, t(T.$t("phoneN")), 1), e("div", Bc, [p(Q, {
                    class: "upi-input number",
                    modelValue: u.mobileNo,
                    "onUpdate:modelValue": te[2] || (te[2] = B => u.mobileNo = B),
                    modelModifiers: {
                        number: !0,
                        trim: !0
                    },
                    type: "text",
                    onInput: W,
                    maxlength: C(xt)(r.value),
                    placeholder: T.$t("plsEnterTel")
                }, null, 8, ["modelValue", "maxlength", "placeholder"])]), e("div", Uc, [p(O, {
                    name: "warning-o",
                    size: "14"
                }), L(t(T.$t("upiTip1")), 1)]), Dc, p(Q, {
                    class: "upi-input",
                    modelValue: u.accountNo,
                    "onUpdate:modelValue": te[3] || (te[3] = B => u.accountNo = B),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 30,
                    type: "text",
                    onInput: $,
                    placeholder: T.$t("phEnterUPIID")
                }, null, 8, ["modelValue", "placeholder"]), e("div", Pc, t(T.$t("confirm")) + " UPI ID", 1), p(Q, {
                    onPaste: y,
                    class: "upi-input",
                    modelValue: u.confirmAccountNo,
                    "onUpdate:modelValue": te[4] || (te[4] = B => u.confirmAccountNo = B),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 30,
                    type: "text",
                    placeholder: T.$t("phEnterUPIID")
                }, null, 8, ["modelValue", "placeholder"]), e("div", {
                    class: ie(["bind-bank-sumbit", {
                        disable: !I.value
                    }]),
                    onClick: se
                }, t(T.$t("save")), 3)])
            }
        }
    });
const Vc = ne(Rc, [
        ["__scopeId", "data-v-8ced09ab"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddUpi/index.vue"]
    ]),
    S_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Vc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Oc = {
        class: "addKBZ"
    },
    Mc = {
        class: "addKBZ-top"
    },
    Lc = ["src"],
    qc = {
        class: "addKBZ-item"
    },
    jc = {
        class: "label"
    },
    Fc = {
        class: "selectB"
    },
    zc = {
        class: "addKBZ-item"
    },
    Ec = {
        class: "label"
    },
    Hc = ["placeholder", "readonly"],
    xc = {
        class: "addKBZ-item"
    },
    Kc = {
        class: "label"
    },
    Zc = ["placeholder"],
    Gc = ae({
        __name: "index",
        setup(f) {
            const {
                iseditor: n,
                onInput: s,
                checkAccoutNo: m,
                onLoad: i,
                makeTxt: r
            } = Pe(), {
                t: d
            } = me(), o = ue(), {
                setLoading: w
            } = Ue(), {
                isOpenWithdraw: h
            } = ze();
            let a = he([]);
            const _ = g(""),
                v = he({
                    smsCode: "",
                    withdrawId: 6,
                    bankId: 0,
                    mobileNo: "",
                    beneficiaryName: "",
                    type: "",
                    codeType: be.addWave
                }),
                S = j(() => !(v.mobileNo.trim().length == 0 || v.bankId == 0 || v.beneficiaryName.trim().length == 0)),
                u = () => v.bankId == 0 ? z({
                    message: d("addCardMsg1"),
                    wordBreak: "break-word"
                }) : v.beneficiaryName.toString().trim().length == 0 ? z({
                    message: d("phEnterName"),
                    wordBreak: "break-word"
                }) : v.mobileNo.toString().trim().length == 0 ? z({
                    message: d("addCardMsg4"),
                    wordBreak: "break-word"
                }) : m(v.mobileNo, d("tel") + d("formatErr")) ? st(localStorage.getItem("numberType"), v.mobileNo.trim().length) ? !0 : z({
                    message: d("wrongTel"),
                    wordBreak: "break-word"
                }) : void 0,
                y = Ee({
                    content: () => p(He, {
                        type: v.type,
                        "onUpdate:type": I => v.type = I,
                        code: v.smsCode,
                        "onUpdate:code": I => v.smsCode = I,
                        onConfirm: W,
                        codeType: be.addWave
                    }, null),
                    beforeClose: () => {
                        v.smsCode = ""
                    }
                });
            async function A() {
                if (!S.value) return !1;
                if (u() === !0) {
                    if (!localStorage.getItem("numberType")) return !1;
                    if (v.smsCode = "", h.value) return y.open();
                    await W()
                }
            }
            async function W() {
                w(!0), await ee(ct(v)) && (y.close(), o.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), w(!1)
            }
            async function $() {
                const I = await ee(Qe({
                    withdrawid: 6
                }));
                I && (a = I.data.banklist, _.value = a.length > 0 ? a[0].bankName : "", v.bankId = a.length > 0 ? a[0].bankID : 0)
            }
            $();

            function q() {
                o.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    }
                })
            }
            return i(v, "beneficiaryName"), (I, P) => {
                const x = V("NavBar"),
                    J = V("svg-icon");
                return l(), c("div", Oc, [p(x, {
                    title: I.$t("addWaveType"),
                    "left-arrow": "",
                    onClickLeft: q
                }, null, 8, ["title"]), e("div", Mc, [e("img", {
                    src: C(ge)("wallet", "hint")
                }, null, 8, Lc), e("span", null, t(I.$t("WaveTip1")), 1)]), e("div", qc, [e("div", jc, [p(J, {
                    name: "bankName"
                }), L(" " + t(I.$t("bankname")), 1)]), e("div", Fc, t(_.value), 1)]), e("div", zc, [e("div", Ec, [p(J, {
                    name: "user"
                }), L(" " + t(I.$t("name")), 1)]), re(e("input", {
                    placeholder: I.$t("phEnterName"),
                    "onUpdate:modelValue": P[0] || (P[0] = R => v.beneficiaryName = R),
                    maxlength: "50",
                    onInput: P[1] || (P[1] = R => C(r)(v, "beneficiaryName")),
                    readonly: C(n)
                }, null, 40, Hc), [
                    [fe, v.beneficiaryName, void 0, {
                        trim: !0
                    }]
                ])]), e("div", xc, [e("div", Kc, [p(J, {
                    name: "phone"
                }), L(" " + t(I.$t("tel")), 1)]), re(e("input", {
                    placeholder: I.$t("phEnterPayeeTel"),
                    "onUpdate:modelValue": P[2] || (P[2] = R => v.mobileNo = R),
                    maxlength: 12,
                    type: "digit",
                    onInput: P[3] || (P[3] = R => C(s)(v, "mobileNo"))
                }, null, 40, Zc), [
                    [fe, v.mobileNo, void 0, {
                        trim: !0
                    }]
                ])]), e("div", {
                    class: ie(["addKBZ-btn", {
                        active: S.value
                    }]),
                    onClick: A
                }, t(I.$t("save")), 3)])
            }
        }
    });
const Qc = ne(Gc, [
        ["__scopeId", "data-v-8c64dafa"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/AddWave/index.vue"]
    ]),
    I_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Qc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    aa = f => (Ne("data-v-9ed9b8ef"), f = f(), Se(), f),
    Yc = {
        class: "bankCard__container"
    },
    Xc = {
        key: 0,
        class: "bankCard__container-content"
    },
    Jc = {
        class: "bankCard__container-content__card"
    },
    eu = aa(() => e("div", {
        class: "bankCard__container-content__card-top"
    }, null, -1)),
    tu = {
        class: "bankCard__container-content__card-mid"
    },
    au = {
        class: "line"
    },
    nu = {
        class: "left"
    },
    ou = {
        class: "right"
    },
    su = {
        class: "line"
    },
    lu = {
        class: "left"
    },
    iu = {
        class: "right"
    },
    ru = {
        class: "line"
    },
    du = {
        class: "left"
    },
    cu = {
        class: "right"
    },
    uu = {
        class: "line"
    },
    pu = aa(() => e("div", {
        class: "left"
    }, "IFSCode", -1)),
    vu = {
        class: "right"
    },
    _u = {
        key: 1,
        class: "bankCard__container-default"
    },
    mu = ae({
        __name: "index",
        setup(f) {
            const {
                setLoading: n
            } = Ue(), s = ue(), m = tt(), i = j(() => m.getWithdrawal), r = g(!1), d = j(() => m.getWithdrawal.bid.toString()), o = g([]);

            function w() {
                s.replace({
                    name: "Withdraw",
                    query: {
                        bid: d.value
                    }
                })
            }
            const h = he({
                bid: m.getWithdrawal.bid,
                withdrawid: m.getWithdrawal.type
            });

            function a(u) {
                s.replace({
                    name: "Withdraw",
                    query: {
                        bid: u.bid
                    }
                })
            }
            async function _() {
                r.value = !1, n(!0), await ee(Ha(h)) && (h.bid == i.value.bid && (i.value.bid = 0), m.setWithdrawal({ ...i.value
                }), await S()), n(!1)
            }
            const v = he({
                withdrawid: m.getWithdrawal.type
            });
            async function S() {
                n(!0);
                const u = await ee(Ge(v));
                u && (o.value = u.data.withdrawalslist, u.data.withdrawalslist.length > 0 && m.getWithdrawal.bid == 0 || u.data.withdrawalslist.length == 1 ? i.value.bid = u.data.withdrawalslist[0].bid : u.data.withdrawalslist.length == 0 && (i.value.bid = 0), m.setWithdrawal({ ...i.value
                }), m.setWithdrawalslist(u.data.withdrawalslist)), n(!1)
            }
            return _e(async () => {
                console.log("type", s.currentRoute.value.query), s.currentRoute.value.query.type == "Add" ? await S() : o.value = m.getWithdrawalslist
            }), (u, N) => {
                const y = V("NavBar"),
                    A = V("van-radio"),
                    W = V("van-radio-group"),
                    $ = Fe("lazy");
                return l(), c("div", Yc, [p(y, {
                    title: u.$t("bankCard"),
                    "left-arrow": "",
                    onClickLeft: w
                }, null, 8, ["title"]), o.value.length > 0 ? (l(), c("div", Xc, [(l(!0), c(X, null, ke(o.value, q => (l(), c("div", {
                    class: "bankCard__container-content__item",
                    key: q.bid
                }, [p(W, {
                    modelValue: d.value,
                    "onUpdate:modelValue": N[0] || (N[0] = I => d.value = I)
                }, {
                    default: G(() => [e("div", Jc, [eu, e("div", tu, [e("div", au, [e("div", nu, t(u.$t("bankname")), 1), e("div", ou, t(q.bankName), 1)]), k(` <div class="line" v-if="item.beneficiaryName">
								<div class="left">{{ $t('payeename') }}</div>
								<div class="right">{{ item.beneficiaryName }}</div>
							</div> `), e("div", su, [e("div", lu, t(u.$t("bankcardNo")), 1), e("div", iu, t(q.accountNo), 1)]), e("div", ru, [e("div", du, t(u.$t("tel")), 1), e("div", cu, t(q.mobileNo), 1)]), e("div", uu, [pu, e("div", vu, t(q.ifsCode), 1)])]), e("div", null, [p(A, {
                        name: `${q.bid.toString()}`,
                        "icon-size": "18px",
                        onClick: I => a(q)
                    }, {
                        default: G(() => [L(t(u.$t("select")), 1)]),
                        _: 2
                    }, 1032, ["name", "onClick"])])])]),
                    _: 2
                }, 1032, ["modelValue"])]))), 128))])) : (l(), c("div", _u, [p(at, null, {
                    text: G(() => [e("span", null, t(u.$t("noPaymentMethodsYet")), 1)]),
                    _: 1
                })])), p(pt, {
                    type: 1
                }), p(ht, {
                    show: r.value,
                    "onUpdate:show": N[2] || (N[2] = q => r.value = q),
                    onConfirm: _,
                    "show-cancel-btn": !0,
                    title: u.$t("tipCanNotRetrivedAfterDeleted"),
                    confirmText: u.$t("confirmDelete"),
                    cancelText: u.$t("cancel")
                }, {
                    content: G(() => [re(e("img", {
                        class: "dialog__content-bottom",
                        onClick: N[1] || (N[1] = q => r.value = !1)
                    }, null, 512), [
                        [$, C(dt)("main", "close")]
                    ])]),
                    _: 1
                }, 8, ["show", "title", "confirmText", "cancelText"])])
            }
        }
    });
const hu = ne(mu, [
        ["__scopeId", "data-v-9ed9b8ef"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/BankCard/index.vue"]
    ]),
    A_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    wu = {
        class: "item"
    },
    fu = {
        key: 0,
        class: "line"
    },
    yu = ae({
        __name: "progress",
        props: {
            state: {
                type: Number,
                required: !0
            },
            isAppealCompleted: {
                type: Boolean,
                required: !1
            }
        },
        setup(f) {
            const n = f,
                {
                    t: s
                } = me(),
                m = [{
                    title: s("c2cState11"),
                    icon: "1"
                }, {
                    title: s("c2cState13"),
                    icon: "2"
                }, {
                    title: s("c2cTip30"),
                    icon: "3"
                }, {
                    title: s("c2cState4"),
                    icon: "4"
                }],
                i = [{
                    title: s("c2cTip32"),
                    icon: "1"
                }, {
                    title: s("c2cTip33"),
                    icon: "2"
                }, {
                    title: s("c2cState4"),
                    icon: "3"
                }],
                r = [{
                    title: s("c2cTip32"),
                    icon: "1"
                }, {
                    title: s("c2cTip33"),
                    icon: "2"
                }, {
                    title: s("c2cTip9"),
                    icon: "4"
                }],
                d = j(() => [1, 9, 11, 13].includes(n.state) ? m : [3].includes(n.state) ? i : [5].includes(n.state) ? r : n.state == 4 ? n.isAppealCompleted ? i : m : []);

            function o(w) {
                let h = [];
                switch (n.state) {
                    case 1:
                    case 9:
                        h = [!0, !0, !0, !1];
                        break;
                    case 4:
                        h = [!0, !0, !0, !0];
                        break;
                    case 11:
                        h = [!0, !1, !1, !1];
                        break;
                    case 13:
                        h = [!0, !0, !1, !1];
                        break;
                    case 3:
                        h = [!0, !0, !1];
                        break;
                    case 5:
                        h = [!0, !0, !0];
                        break
                }
                return h[w]
            }
            return (w, h) => d.value.length > 0 ? (l(), c("div", {
                key: 0,
                class: ie(["progress", [`state_${w.state}`, {
                    isAppealCompleted: w.isAppealCompleted
                }]])
            }, [(l(!0), c(X, null, ke(d.value, (a, _) => (l(), c(X, null, [e("div", wu, [e("span", {
                class: ie(`icon${o(_)?a.icon+"_a":a.icon}`)
            }, null, 2), e("h6", null, t(a.title), 1)]), _ < d.value.length - 1 ? (l(), c("div", fu)) : k("v-if", !0)], 64))), 256))], 2)) : k("v-if", !0)
        }
    });
const na = ne(yu, [
        ["__scopeId", "data-v-90f50022"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/progress.vue"]
    ]),
    gu = f => (Ne("data-v-ced8750d"), f = f(), Se(), f),
    ku = {
        class: "c2cDetail__CO"
    },
    $u = {
        class: "top"
    },
    bu = {
        class: "container"
    },
    Cu = {
        key: 0,
        class: "time"
    },
    Tu = {
        key: 1,
        class: "time2"
    },
    Nu = {
        class: "head"
    },
    Su = {
        class: "tip2"
    },
    Iu = {
        class: "tip2"
    },
    Au = {
        key: 0
    },
    Wu = {
        key: 0,
        class: "operate"
    },
    Bu = {
        class: "order-q"
    },
    Uu = {
        class: "y"
    },
    Du = {
        class: "order-q"
    },
    Pu = {
        class: "b"
    },
    Ru = gu(() => e("div", {
        class: "line"
    }, null, -1)),
    Vu = {
        class: "tip"
    },
    Ou = ae({
        __name: "c2cDetailOther",
        props: {
            OrderDetail: {
                type: null,
                required: !0
            },
            orderNo: {
                type: String,
                required: !0
            }
        },
        emits: ["update:OrderDetail", "update:orderNo"],
        setup(f, {
            emit: n
        }) {
            const s = f,
                m = ue(),
                {
                    t: i
                } = me(),
                {
                    OrderDetail: r,
                    orderNo: d
                } = ft(s, n),
                o = {
                    2: {
                        title: i("c2cState11"),
                        tip1: i("c2cWTip1"),
                        tip2: i("c2cWTip6"),
                        tip3: i("c2cTip31")
                    },
                    11: {
                        title: i("c2cState11"),
                        tip1: i("c2cWTip1"),
                        tip2: i("c2cWTip2"),
                        tip3: i("c2cWTip3")
                    },
                    12: {
                        title: i("c2cState11"),
                        tip1: i("c2cWTip1"),
                        tip2: i("c2cWTip2"),
                        tip3: i("c2cWTip3")
                    }
                },
                w = j(() => o[r.value.state]),
                h = () => {
                    m.go(-1)
                },
                a = g("00:00"),
                _ = g(0),
                v = g(null),
                S = j(() => [11, 12].includes(r.value.state));
            qe(() => r.value, I => {
                u(I)
            }, {
                immediate: !0
            });

            function u(I) {
                if (!S.value) return !1;
                const P = I.auditEndTime.replace(/-/g, "/"),
                    x = I.serviceTime.replace(/-/g, "/");
                _.value = new Date(x).getTime() - new Date(P).getTime(), clearInterval(v.value), A()
            }
            const N = I => {
                    const P = Math.floor(I / 36e5),
                        x = Math.floor((I - P * 36e5) / 6e4),
                        J = Math.floor((I - P * 36e5 - x * 6e4) / 1e3);
                    return console.log("hours", P), `${P?P.toString().padStart(2,"0")+":":""}${x.toString().padStart(2,"0")}:${J.toString().padStart(2,"0")}`
                },
                y = g(5);

            function A() {
                v.value = setInterval(() => {
                    y.value--, _.value += 1e3, a.value = N(_.value), y.value == 0 && (W(r.value.orderNo), y.value = 5)
                }, 1e3)
            }
            const W = async I => {
                const P = await ee(Kt({
                    orderNo: I
                }));
                P && (P.data.state == 2 && clearInterval(v.value), r.value = P.data)
            };
            async function $() {
                await ee(xa({
                    orderNo: r.value.orderNo
                })) && W(r.value.orderNo)
            }

            function q() {
                m.push({
                    name: "Withdraw-c2cCancelWithdrawal",
                    query: {
                        orderAmount: r.value.orderAmount,
                        sellerAccountNo: r.value.sellerAccountNo,
                        createTime: r.value.createTime,
                        orderNo: r.value.orderNo
                    }
                })
            }
            return yt(() => {
                clearInterval(v.value)
            }), (I, P) => {
                var J;
                const x = V("NavBar");
                return l(), c("div", ku, [e("div", $u, [p(x, {
                    title: w.value.title,
                    "left-arrow": "",
                    onClickLeft: h,
                    backgroundColor: "transparent"
                }, null, 8, ["title"]), k(" 进度条 "), p(na, {
                    state: (J = C(r)) == null ? void 0 : J.state
                }, null, 8, ["state"]), e("div", bu, [S.value ? (l(), c("div", Cu, [e("p", null, t(w.value.title), 1), e("div", null, [e("span", null, t(a.value), 1)])])) : k("v-if", !0), S.value ? k("v-if", !0) : (l(), c("div", Tu, t(I.$t("c2cState2")), 1))]), e("div", Nu, [e("div", Su, t(w.value.tip2), 1), e("div", Iu, [L(t(w.value.tip3), 1), S.value ? (l(), c("span", Au, t(C(r).matchTimeMinutes || 5) + t(I.$t("minute")), 1)) : k("v-if", !0)])]), S.value ? k("v-if", !0) : (l(), c("div", Wu, [e("div", {
                    class: "CancelW",
                    onClick: q
                }, t(I.$t("concelOrder")), 1), e("div", {
                    class: "uAmount",
                    onClick: $
                }, t(I.$t("continueM")), 1)]))]), e("div", {
                    class: ie(["order", ["bgc" + w.value.background]])
                }, [e("div", Bu, [e("span", null, t(I.$t("withdrawalA")), 1), e("span", Uu, t(C(de)(C(r).orderAmount)), 1)]), e("div", Du, [e("span", null, "UPI " + t(I.$t("account")), 1), e("span", Pu, t(C(r).sellerAccountNo), 1)]), e("div", {
                    class: "order-id",
                    onClick: P[0] || (P[0] = R => C(Ze)(C(r).orderNo))
                }, [e("span", null, t(C(Zt)(C(r).createTime, "yyyy-MM-dd")), 1), L(t(C(r).orderNo), 1)]), Ru, e("div", Vu, t(I.$t("c2cWTip4")), 1)], 2)])
            }
        }
    });
const Mu = ne(Ou, [
        ["__scopeId", "data-v-ced8750d"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/components/Wallet/Withdraw/c2cDetailOther.vue"]
    ]),
    Ct = f => (Ne("data-v-0f202033"), f = f(), Se(), f),
    Lu = {
        key: 0,
        class: "c2cDetail__C"
    },
    qu = {
        class: "title"
    },
    ju = {
        key: 0
    },
    Fu = {
        class: "tip1"
    },
    zu = {
        key: 0,
        class: "tip2"
    },
    Eu = {
        key: 1
    },
    Hu = {
        key: 0,
        class: "accountArry"
    },
    xu = {
        class: "con"
    },
    Ku = {
        class: "order"
    },
    Zu = {
        class: "order-h"
    },
    Gu = {
        class: "order-q y"
    },
    Qu = {
        key: 0,
        class: "order-q y"
    },
    Yu = {
        key: 1,
        class: "order-q orange"
    },
    Xu = {
        class: "order-t"
    },
    Ju = {
        key: 2,
        class: "order-t"
    },
    ep = Ct(() => e("div", {
        class: "line"
    }, null, -1)),
    tp = Ct(() => e("span", null, "UTR", -1)),
    ap = {
        key: 4,
        class: "order-tl"
    },
    np = {
        key: 0,
        class: "upi"
    },
    op = {
        class: "upi-h"
    },
    sp = Ct(() => e("span", null, "UPI", -1)),
    lp = {
        key: 1,
        class: "upi img"
    },
    ip = {
        class: "upi-h"
    },
    rp = {
        class: "imgBox"
    },
    dp = ["onClick"],
    cp = {
        key: 2,
        class: "img"
    },
    up = {
        class: "imgBox"
    },
    pp = ["onClick"],
    vp = {
        key: 3,
        class: "img video"
    },
    _p = {
        class: "v",
        controls: ""
    },
    mp = ["src"],
    hp = ["src"],
    wp = ["src"],
    fp = ae({
        __name: "index",
        setup(f) {
            var O;
            const {
                t: n
            } = me(), s = ue(), m = Ie(), i = De(), r = {
                0: {
                    title: n("c2cState0"),
                    tip1: n("c2cTip1"),
                    tip2: n("tipPlaWaitPaciently"),
                    icon: "0",
                    background: 0
                },
                1: {
                    title: n("c2cState1"),
                    tip1: n("c2cTip2"),
                    tip2: n("c2cTip3"),
                    icon: "0",
                    background: 1
                },
                2: {
                    title: n("c2cState8"),
                    tip1: n("c2cTip4"),
                    tip2: n("tipPlaWaitPaciently"),
                    icon: "6",
                    background: 8
                },
                3: {
                    title: n("c2cState3"),
                    tip1: n("c2cTip5"),
                    tip2: n("c2cTip6"),
                    icon: "1",
                    background: 3
                },
                4: {
                    title: n("completed"),
                    tip1: n("c2cTip7"),
                    tip2: n("c2cTip8"),
                    icon: "2",
                    background: 4
                },
                5: {
                    title: n("c2cTip9"),
                    tip1: n("c2cTip10"),
                    tip2: n("c2cTip11"),
                    icon: "3",
                    background: 5
                },
                6: {
                    title: n("cancelled"),
                    tip1: "*****",
                    tip2: "",
                    icon: "4",
                    background: 6
                },
                7: {
                    title: n("c2cTip12"),
                    tip1: n("c2cTip1"),
                    tip2: "",
                    icon: "5",
                    background: 7
                },
                8: {
                    title: n("withdrawState1"),
                    tip1: n("c2cTip4"),
                    tip2: n("tipPlaWaitPaciently"),
                    icon: "6",
                    background: 8
                },
                9: {
                    title: n("rechargeState1"),
                    tip1: n("c2cTip13"),
                    tip2: n("c2cTip14"),
                    icon: "7",
                    background: 9
                },
                10: {
                    title: n("c2cState10"),
                    tip1: n("c2cTip21"),
                    tip2: n("c2cTip22"),
                    icon: "8",
                    background: 10
                },
                11: {
                    title: n("c2cState11"),
                    tip1: n("c2cWTip1"),
                    tip2: n("c2cWTip2"),
                    tip3: n("c2cWTip3"),
                    icon: "8",
                    background: 11
                },
                12: {
                    title: n("c2cState11"),
                    tip1: n("c2cTip21"),
                    tip2: n("c2cTip22"),
                    icon: "8",
                    background: 10
                },
                13: {
                    title: n("c2cState13"),
                    tip1: n("c2cTip24"),
                    icon: "0",
                    background: 11
                },
                14: {
                    title: n("c2cState14"),
                    tip1: n("c2cTip46"),
                    tip2: n("c2cTip33"),
                    icon: "14",
                    background: 11
                }
            }, d = g(0), o = g("00:00"), w = g(null), h = g(null), a = g({
                id: 0,
                orderNo: "",
                type: 0,
                withdrawName: "",
                createTime: "",
                orderAmount: 0,
                realAmount: 0,
                discountAmount: 0,
                serviceAmount: 0,
                state: Number(((O = m.query) == null ? void 0 : O.state) || 0),
                cancelReasonId: 0,
                reasonText: "",
                remark: "",
                transactionNo: "",
                sellerAccountNo: "",
                rechargeFinishTime: ""
            }), _ = g(""), v = j(() => r[a.value.state]), S = j(() => a.value.state == 10), u = j(() => [9].includes(a.value.state)), N = j(() => [1, 9, 3].includes(a.value.state)), y = j(() => [2, 11, 12].includes(a.value.state)), A = j(() => [5, 6, 7, 14].includes(a.value.state));
            qe(() => a.value.state, B => {
                I()
            }, {
                deep: !0
            });
            const W = () => {
                s.back()
            };

            function $(B, F) {
                if (!B) return;
                let oe;
                return F ? oe = JSON.parse(B).filter(Y => Y.fileType == F) : oe = JSON.parse(B), oe.length == 0 ? !1 : oe.map(Y => (Y.fileUrl = i.ossUrl + "/" + Y.fileUrl, Y))
            }
            const q = async B => {
                const F = await ee(Kt({
                    orderNo: B
                }));
                F && (a.value = F.data)
            };

            function I() {
                var B;
                if ([1, 13].includes(a.value.state)) {
                    const F = (B = a.value) == null ? void 0 : B.serviceTime.replace(/-/g, "/");
                    if (a.value.state == 1) {
                        const oe = a.value.confrimEndTime.replace(/-/g, "/");
                        d.value = new Date(oe).getTime() - new Date(F).getTime()
                    } else if (a.value.state == 13) {
                        const oe = a.value.matchOutTime.replace(/-/g, "/");
                        d.value = new Date(oe).getTime() - new Date(F).getTime()
                    }
                    clearInterval(w.value), se()
                } else clearInterval(w.value);
                (a.value.state === 7 || a.value.state === 6) && (r[a.value.state].tip1 = a.value.reasonText || "", r[a.value.state].tip2 = a.value.remark || ""), a.value.state === 0 ? (clearInterval(h.value), T()) : clearInterval(h.value), a.value.state === 3 && E()
            }
            const P = async B => {
                    await ee(Ka({
                        orderNo: B
                    })), q(B)
                },
                x = async B => {
                    await ee(Za({
                        orderNo: B
                    })), q(B)
                },
                J = B => {
                    const F = Math.floor(B / 36e5),
                        oe = Math.floor((B - F * 36e5) / 6e4),
                        Y = Math.floor((B - F * 36e5 - oe * 6e4) / 1e3);
                    return `${F?F.toString().padStart(2,"0")+":":""}${oe.toString().padStart(2,"0")}:${Y.toString().padStart(2,"0")}`
                },
                R = g(5);

            function se() {
                w.value = setInterval(() => {
                    R.value--, d.value > 0 ? (d.value -= 1e3, o.value = J(d.value)) : o.value = "00:00", R.value == 0 && (q(_.value), R.value = 5)
                }, 1e3)
            }

            function T() {
                h.value = setInterval(() => {
                    q(_.value)
                }, 5e3)
            }
            const te = () => {
                    Tawk_API.toggle(), window.Tawk_API.setAttributes({
                        order: _.value,
                        store: "withdraw"
                    }, function(B) {})
                },
                E = () => {
                    let B = "https://embed.tawk.to/6452138631ebfa0fe7fbb175/1hb0ug9qm";
                    if (!document.getElementById("tawk-chatjs")) {
                        var F = document.createElement("script"),
                            oe = document.getElementsByTagName("script")[0];
                        F.async = !0, F.src = B, F.charset = "UTF-8", F.setAttribute("crossorigin", "*"), F.id = "tawk-chatjs", oe.parentNode.insertBefore(F, oe)
                    }
                };

            function U() {
                s.push({
                    name: "Withdraw-c2cWrongAmount",
                    query: {
                        orderNo: _.value
                    }
                })
            }

            function Q(B) {
                Ta({
                    images: [B],
                    closeable: !0
                })
            }
            return _e(() => {
                var B, F;
                _.value = localStorage.getItem("c2cOrderNo") || ((F = (B = m.query) == null ? void 0 : B.order) == null ? void 0 : F.toString()) || "", q(_.value)
            }), Ca(() => {}), yt(() => {
                clearInterval(w.value), clearInterval(h.value)
            }), (B, F) => {
                var Y, pe, We, D, xe, K, H, Be, Te, Xe, ve, Ve, Re, Oe, Me;
                const oe = V("NavBar");
                return y.value ? (l(), c(X, {
                    key: 1
                }, [a.value.orderNo != "" ? (l(), we(Mu, {
                    key: 0,
                    orderNo: _.value,
                    "onUpdate:orderNo": F[7] || (F[7] = ce => _.value = ce),
                    OrderDetail: a.value,
                    "onUpdate:OrderDetail": F[8] || (F[8] = ce => a.value = ce)
                }, null, 8, ["orderNo", "OrderDetail"])) : k("v-if", !0)], 64)) : (l(), c("div", Lu, [e("div", {
                    class: ie(["header", ["bgc" + v.value.background]])
                }, [p(oe, {
                    title: "",
                    "left-arrow": "",
                    onClickLeft: W,
                    backgroundColor: "transparent"
                }), e("div", {
                    class: ie(["head", ["hicon" + v.value.icon]])
                }, [e("div", qu, [L(t(v.value.title) + " ", 1), [1, 13].includes(a.value.state) ? (l(), c("span", ju, t(o.value), 1)) : k("v-if", !0)]), e("div", Fu, t(v.value.tip1), 1), v.value.tip2 ? (l(), c("div", zu, t(v.value.tip2), 1)) : k("v-if", !0), N.value ? (l(), c("div", Eu, t(B.$t("c2cTip23")), 1)) : k("v-if", !0)], 2), N.value ? (l(), c("div", Hu, [e("div", {
                    class: "account btn",
                    onClick: F[0] || (F[0] = ce => P(a.value.orderNo))
                }, t(B.$t("confirmTheAccount")), 1), u.value ? (l(), c("div", {
                    key: 0,
                    class: "appeal btn",
                    onClick: F[1] || (F[1] = ce => x(a.value.orderNo))
                }, t(B.$t("appeal")), 1)) : k("v-if", !0), a.value.state == 3 ? (l(), c("div", {
                    key: 1,
                    class: "appeal btn",
                    onClick: F[2] || (F[2] = ce => te())
                }, t(B.$t("AppealsAdmin")), 1)) : k("v-if", !0), a.value.state == 1 ? (l(), c("div", {
                    key: 2,
                    class: "wrong btn",
                    onClick: F[3] || (F[3] = ce => U())
                }, t(B.$t("c2cState14")), 1)) : k("v-if", !0)])) : k("v-if", !0)], 2), e("div", xu, [k(" 进度条 "), p(na, {
                    state: (Y = a.value) == null ? void 0 : Y.state,
                    isAppealCompleted: (pe = a.value) == null ? void 0 : pe.isAppealCompleted
                }, null, 8, ["state", "isAppealCompleted"]), e("div", Ku, [e("div", Zu, "New UPI " + t(B.$t("withdraw")), 1), e("div", Gu, [e("span", null, t(B.$t("orderAmount")), 1), L(t(C(de)(a.value.orderAmount)), 1)]), [4, 14].includes(a.value.state) ? (l(), c("div", Qu, [e("span", null, t(B.$t("actualAmount")), 1), L(t(C(de)(a.value.realAmount)), 1)])) : k("v-if", !0), A.value ? k("v-if", !0) : (l(), c("div", Yu, [e("span", null, t(B.$t("award")), 1), L(t(C(de)(a.value.discountAmount)), 1)])), e("div", Xu, [e("span", null, t(B.$t("orderTime")), 1), L(t(a.value.createTime), 1)]), a.value.state == 14 ? (l(), c("div", Ju, [e("span", null, t(B.$t("c2cTip47")), 1), L(t(a.value.lastUpdateTime), 1)])) : k("v-if", !0), ep, S.value ? k("v-if", !0) : (l(), c("div", {
                    key: 3,
                    class: "order-id",
                    onClick: F[4] || (F[4] = ce => C(Ze)(a.value.transactionNo))
                }, [tp, L(t(a.value.transactionNo), 1)])), e("div", {
                    class: "order-id",
                    onClick: F[5] || (F[5] = ce => C(Ze)(a.value.orderNo))
                }, [e("span", null, t(B.$t("orderNo")), 1), L(t(a.value.orderNo), 1)]), S.value ? k("v-if", !0) : (l(), c("div", ap, [e("span", null, t(B.$t("PaymentTime")), 1), L(t(a.value.rechargeFinishTime), 1)]))]), S.value ? k("v-if", !0) : (l(), c("div", np, [e("div", op, t(B.$t("information")), 1), e("div", {
                    class: "upi-id",
                    onClick: F[6] || (F[6] = ce => C(Ze)(a.value.sellerAccountNo))
                }, [sp, L(t(a.value.sellerAccountNo), 1)])])), [5, 1, 9, 3, 4, 6].includes(a.value.state) && ((We = a.value) != null && We.rechargeOssUrls) ? (l(), c("div", lp, [e("div", ip, t(B.$t("c2cTip50")), 1), e("div", rp, [(l(!0), c(X, null, ke($((D = a.value) == null ? void 0 : D.rechargeOssUrls), (ce, $e) => (l(), c("div", {
                    class: "imgD",
                    key: $e,
                    style: Pt(`background-image: url('${ce==null?void 0:ce.fileUrl}');`),
                    onClick: Ke => Q(ce == null ? void 0 : ce.fileUrl)
                }, null, 12, dp))), 128))])])) : k("v-if", !0), ((xe = a.value) == null ? void 0 : xe.state) == 14 && ((K = a.value) != null && K.ossUrls) ? (l(), c("div", cp, [e("h1", null, t(B.$t("c2cTip48")), 1), e("div", up, [(l(!0), c(X, null, ke($((H = a.value) == null ? void 0 : H.ossUrls, 1), (ce, $e) => (l(), c("div", {
                    class: "imgD",
                    key: $e,
                    style: Pt(`background-image: url('${ce==null?void 0:ce.fileUrl}');`),
                    onClick: Ke => Q(ce == null ? void 0 : ce.fileUrl)
                }, null, 12, pp))), 128))])])) : k("v-if", !0), ((Be = a.value) == null ? void 0 : Be.state) == 14 && $((Te = a.value) == null ? void 0 : Te.ossUrls, 2) ? (l(), c("div", vp, [e("h1", null, t(B.$t("c2cTip49")), 1), e("video", _p, [e("source", {
                    src: (ve = $((Xe = a.value) == null ? void 0 : Xe.ossUrls, 2)[0]) == null ? void 0 : ve.fileUrl,
                    type: "video/ogg"
                }, null, 8, mp), e("source", {
                    src: (Re = $((Ve = a.value) == null ? void 0 : Ve.ossUrls, 2)[0]) == null ? void 0 : Re.fileUrl,
                    type: "video/mp4"
                }, null, 8, hp), e("source", {
                    src: (Me = $((Oe = a.value) == null ? void 0 : Oe.ossUrls, 2)[0]) == null ? void 0 : Me.fileUrl,
                    type: "video/webm"
                }, null, 8, wp)])])) : k("v-if", !0)])]))
            }
        }
    });
const yp = ne(fp, [
        ["__scopeId", "data-v-0f202033"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/C2cDetail/index.vue"]
    ]),
    W_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: yp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gp = {
        class: "upi_C"
    },
    kp = {
        class: "upi_C-list"
    },
    $p = {
        class: "header"
    },
    bp = {
        class: "header-title"
    },
    Cp = {
        class: "upi-body"
    },
    Tp = {
        class: "upi-body-name"
    },
    Np = {
        class: "upi-body-id"
    },
    Sp = ["onClick"],
    Ip = {
        class: "upi_C-addbtn"
    },
    Ap = ae({
        __name: "index",
        setup(f) {
            const n = De(),
                s = ue(),
                m = Ie(),
                i = g(!1),
                r = g({}),
                d = g([]),
                o = g(null),
                w = g(""),
                h = j(() => m.query.bankCode || ""),
                a = () => {
                    const A = d.value.find(W => W.bid == o.value) ? o.value : 0;
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: A,
                            type: 27,
                            bankCode: h.value || ""
                        }
                    })
                },
                _ = g(!1),
                v = async () => {
                    var A;
                    const y = await ee(Ge({
                        withdrawid: 27
                    }));
                    if (y) {
                        const W = ((A = y.data) == null ? void 0 : A.withdrawalslist) || [];
                        d.value = W.filter($ => h.value ? $.bankCode === h.value : !0)
                    }
                },
                S = async y => {
                    if (!_.value) try {
                        _.value = !0, await ee(Et({
                            bid: r.value.bid,
                            smsCode: w.value,
                            categoryId: 27,
                            pin: y
                        })) && (v(), i.value = !1, s.replace({
                            name: "Withdraw",
                            query: {
                                bid: r.value.bid,
                                type: 27,
                                bankCode: h.value || ""
                            }
                        }))
                    } finally {
                        _.value = !1
                    }
                },
                u = y => {
                    if (!y.isKycOnline && n.getNeedFastKycValidIsOpen) return r.value = y, i.value = !0;
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: y.bid,
                            type: 27,
                            bankCode: h.value || ""
                        }
                    })
                },
                N = async () => {
                    s.replace({
                        name: "Withdraw-AddFastUpi",
                        query: {
                            bankCode: h.value || "",
                            bid: o.value
                        }
                    })
                };
            return _e(() => {
                o.value = m.query.bid || 0, v()
            }), (y, A) => {
                const W = V("NavBar"),
                    $ = V("svg-icon"),
                    q = V("van-dialog"),
                    I = Fe("throttle-click");
                return l(), c("div", gp, [p(W, {
                    title: `${C(et)(h.value)} ${y.$t("paymentMethod")}`,
                    "left-arrow": "",
                    onClickLeft: a
                }, null, 8, ["title"]), e("div", kp, [d.value.length ? (l(!0), c(X, {
                    key: 0
                }, ke(d.value, (P, x) => (l(), c("div", {
                    key: x,
                    class: "upi_C-item"
                }, [e("div", $p, [e("div", bp, [p($, {
                    name: P.bankCode
                }, null, 8, ["name"]), e("span", null, t(C(et)(P.bankCode)), 1)])]), e("div", Cp, [e("div", Tp, t(y.$t("accountName")) + ": " + t(P.upiName), 1), e("div", Np, "UPI ID: " + t(P.upiAccount), 1), e("div", {
                    class: "upi-select",
                    onClick: J => u(P)
                }, [e("div", {
                    class: ie(["select-btn", {
                        isSelect: P.bid == o.value
                    }])
                }, null, 2), e("span", null, t(P.bid == o.value ? y.$t("currentPayment") : y.$t("currentChange")), 1)], 8, Sp), k(`						<div class="upi-body-id">{{$t('phoneN')}}: {{ item.mobileNo }}</div>`)])]))), 128)) : (l(), we(at, {
                    key: 1
                }, {
                    text: G(() => [e("span", null, t(y.$t("noPaymentMethodsYet")), 1)]),
                    _: 1
                }))]), re((l(), c("div", Ip, [L(t(y.$t("upiAddPaymentMethod")), 1)])), [
                    [I, {
                        handler: N,
                        wait: 1e3
                    }]
                ]), p(q, {
                    show: i.value,
                    "onUpdate:show": A[2] || (A[2] = P => i.value = P),
                    showConfirmButton: !1,
                    width: "fit-content",
                    "lazy-render": ""
                }, {
                    default: G(() => [p(ut, {
                        bid: r.value.bid,
                        bank: r.value.bankCode,
                        upi: r.value.upiAccount,
                        mobile: r.value.mobileNo,
                        code: w.value,
                        "onUpdate:code": A[0] || (A[0] = P => w.value = P),
                        onConfirm: S,
                        onClose: A[1] || (A[1] = P => i.value = !1)
                    }, null, 8, ["bid", "bank", "upi", "mobile", "code"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Wp = ne(Ap, [
        ["__scopeId", "data-v-d6431640"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/FastUpi/index.vue"]
    ]),
    B_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Wp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Bp = {
        class: "bankCard__container"
    },
    Up = {
        key: 0,
        class: "bankCard__container-content"
    },
    Dp = {
        class: "bankCard__container-content__card"
    },
    Pp = {
        class: "bankCard__container-content__card-top ar-1px-b"
    },
    Rp = ["src"],
    Vp = {
        class: "bankCard__container-content__card-mid"
    },
    Op = {
        class: "line"
    },
    Mp = {
        class: "line"
    },
    Lp = {
        class: "line"
    },
    qp = {
        key: 1,
        class: "bankCard__container-default"
    },
    jp = ae({
        __name: "index",
        setup(f) {
            const {
                setLoading: n
            } = Ue(), s = ue();
            Ie();
            const m = tt(),
                i = j(() => m.getWithdrawal);
            g(!1);
            const r = j(() => m.getWithdrawal.bid.toString()),
                d = g([]);

            function o() {
                s.replace({
                    name: "Withdraw",
                    query: {
                        bid: r.value
                    }
                })
            }
            const w = he({
                bid: m.getWithdrawal.bid,
                withdrawid: 5
            });

            function h(v) {
                s.replace({
                    name: "Withdraw",
                    query: {
                        bid: v.bid
                    }
                })
            }
            const a = he({
                withdrawid: 5
            });
            async function _() {
                n(!0);
                const v = await ee(Ge(a));
                v && (d.value = v.data.withdrawalslist, v.data.withdrawalslist.length > 0 && m.getWithdrawal.bid == 0 || v.data.withdrawalslist.length == 1 ? i.value.bid = v.data.withdrawalslist[0].bid : v.data.withdrawalslist.length == 0 && (i.value.bid = 0), m.setWithdrawal({ ...i.value
                }), m.setWithdrawalslist(v.data.withdrawalslist)), n(!1)
            }
            return _e(async () => {
                s.currentRoute.value.query.type == "Add" ? await _() : d.value = m.getWithdrawalslist
            }), (v, S) => {
                const u = V("NavBar"),
                    N = V("van-radio"),
                    y = V("van-radio-group");
                return l(), c("div", Bp, [p(u, {
                    title: v.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: o
                }, null, 8, ["title"]), d.value.length > 0 ? (l(), c("div", Up, [(l(!0), c(X, null, ke(d.value, (A, W) => (l(), c("div", {
                    class: "bankCard__container-content__item",
                    key: A.bid
                }, [p(y, {
                    modelValue: r.value,
                    "onUpdate:modelValue": S[0] || (S[0] = $ => r.value = $)
                }, {
                    default: G(() => [e("div", Dp, [e("div", Pp, [e("div", null, [e("img", {
                        src: C(ge)("wallet/withdrawType", `${w.withdrawid}`)
                    }, null, 8, Rp), L(" " + t(v.$t("paymentMethodOfPix")), 1)]), e("div", null, [p(N, {
                        name: `${A.bid.toString()}`,
                        "icon-size": "22px",
                        onClick: $ => h(A)
                    }, null, 8, ["name", "onClick"])])]), e("div", Vp, [e("div", Op, t(A.beneficiaryName), 1), e("div", Mp, t(A.accountNo), 1), e("div", Lp, t(A.bankName), 1)]), k(` <div class="delete" @click="onShowDeleteDialog(item)">
							<van-icon name="delete" color="rgba(238, 54, 37, 1)" size="20" />
							{{ $t('delete') }}
						</div> `)])]),
                    _: 2
                }, 1032, ["modelValue"])]))), 128))])) : (l(), c("div", qp, [p(at, null, {
                    text: G(() => [e("span", null, t(v.$t("noPaymentMethodsYet")), 1)]),
                    _: 1
                })])), p(pt, {
                    type: 5
                })])
            }
        }
    });
const Fp = ne(jp, [
        ["__scopeId", "data-v-abf3326c"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/PIX/index.vue"]
    ]),
    U_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Fp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zp = f => (Ne("data-v-290c4222"), f = f(), Se(), f),
    Ep = {
        class: "type4_C"
    },
    Hp = {
        class: "type4_C-list"
    },
    xp = {
        class: "header-title"
    },
    Kp = ["onClick"],
    Zp = {
        key: 0,
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none"
    },
    Gp = zp(() => e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M60 30C60 46.5686 46.5686 60 30 60C13.4314 60 0 46.5686 0 30C0 13.4314 13.4314 0 30 0C46.5686 0 60 13.4314 60 30ZM14.4 34.2149L19.3014 29.0266C20.9353 30.363 24.2029 33.2714 27.4705 37.2807C27.5276 37.3507 27.7006 36.9707 28.0345 36.2374C29.4965 33.0269 34.0423 23.0442 45.4425 14.4053C45.5467 14.3263 45.5229 15.1444 45.4865 16.397C45.4534 17.5342 45.41 19.0295 45.4425 20.5367C45.5024 23.3195 45.9093 26.1966 45.9093 26.1966C45.9093 26.1966 39.374 27.8474 28.1707 46.0063C28.1442 46.0494 27.8296 45.6959 27.2806 45.0789C25.2645 42.8134 20.0868 36.9951 14.4 34.2149Z",
        fill: "var(--main-color)"
    }, null, -1)),
    Qp = [Gp],
    Yp = {
        class: "type4-body"
    },
    Xp = {
        class: "type4-body-id"
    },
    Jp = {
        key: 1,
        class: "noData"
    },
    ev = ae({
        __name: "index",
        setup(f) {
            const n = ue(),
                s = Ie(),
                m = n.currentRoute.value.query.Type4name,
                i = g([]),
                r = g(null),
                d = () => {
                    const _ = i.value.find(v => {
                        v.bid == r.value
                    }) ? r.value : 0;
                    n.replace({
                        name: "Withdraw",
                        query: {
                            bid: _,
                            type: 22
                        }
                    })
                },
                o = a => {
                    n.replace({
                        name: "Withdraw",
                        query: {
                            bid: a,
                            type: 22
                        }
                    })
                },
                w = async () => {
                    n.replace({
                        name: "Withdraw-AddRsnPay",
                        query: {
                            Type4name: m
                        }
                    })
                },
                h = async () => {
                    var _;
                    const a = await ee(Ge({
                        withdrawid: 22
                    }));
                    a && (i.value = ((_ = a.data) == null ? void 0 : _.withdrawalslist) || [])
                };
            return _e(() => {
                r.value = s.query.bid || 0, h()
            }), (a, _) => {
                const v = V("NavBar"),
                    S = Fe("throttle-click");
                return l(), c("div", Ep, [p(v, {
                    title: C(m) + a.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: d
                }, null, 8, ["title"]), e("div", Hp, [i.value.length ? (l(!0), c(X, {
                    key: 0
                }, ke(i.value, (u, N) => (l(), c("div", {
                    key: N,
                    class: "type4_C-item"
                }, [e("div", {
                    class: ie(["header", `${u.walletName}`])
                }, [e("div", xp, t(u.bankName), 1), e("div", {
                    class: ie(["select-btn", {
                        isSelect: u.bid == r.value
                    }]),
                    onClick: y => o(u.bid)
                }, [u.bid == r.value ? (l(), c("svg", Zp, Qp)) : k("v-if", !0)], 10, Kp)], 2), e("div", Yp, [e("div", Xp, t(u.mobileNo), 1)])]))), 128)) : re((l(), c("div", Jp, [L(t(a.$t("upiAddPaymentMethod")), 1)])), [
                    [S, {
                        handler: w,
                        wait: 1e3
                    }]
                ])])])
            }
        }
    });
const tv = ne(ev, [
        ["__scopeId", "data-v-290c4222"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/RsnPay/index.vue"]
    ]),
    D_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    av = f => (Ne("data-v-8da75fee"), f = f(), Se(), f),
    nv = {
        class: "type4_C"
    },
    ov = {
        class: "type4_C-list"
    },
    sv = {
        class: "header-title"
    },
    lv = ["onClick"],
    iv = {
        key: 0,
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none"
    },
    rv = av(() => e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M60 30C60 46.5686 46.5686 60 30 60C13.4314 60 0 46.5686 0 30C0 13.4314 13.4314 0 30 0C46.5686 0 60 13.4314 60 30ZM14.4 34.2149L19.3014 29.0266C20.9353 30.363 24.2029 33.2714 27.4705 37.2807C27.5276 37.3507 27.7006 36.9707 28.0345 36.2374C29.4965 33.0269 34.0423 23.0442 45.4425 14.4053C45.5467 14.3263 45.5229 15.1444 45.4865 16.397C45.4534 17.5342 45.41 19.0295 45.4425 20.5367C45.5024 23.3195 45.9093 26.1966 45.9093 26.1966C45.9093 26.1966 39.374 27.8474 28.1707 46.0063C28.1442 46.0494 27.8296 45.6959 27.2806 45.0789C25.2645 42.8134 20.0868 36.9951 14.4 34.2149Z",
        fill: "var(--main-color)"
    }, null, -1)),
    dv = [rv],
    cv = {
        class: "type4-body"
    },
    uv = {
        class: "type4-body-name"
    },
    pv = {
        class: "type4-body-id"
    },
    vv = {
        key: 1,
        class: "noData"
    },
    _v = {
        class: "type4_C-addbtn"
    },
    mv = ae({
        __name: "index",
        setup(f) {
            const n = ue(),
                s = Ie(),
                m = n.currentRoute.value.query.Type4name,
                i = Number(n.currentRoute.value.query.withdrawType),
                r = g([]),
                d = g(null),
                o = () => {
                    const v = r.value.find(S => {
                        S.bid == d.value
                    }) ? d.value : 0;
                    n.replace({
                        name: "Withdraw",
                        query: {
                            bid: v,
                            type: i
                        }
                    })
                },
                w = _ => {
                    n.replace({
                        name: "Withdraw",
                        query: {
                            bid: _,
                            type: i
                        }
                    })
                },
                h = async () => {
                    n.replace({
                        name: "Withdraw-AddType4",
                        query: {
                            Type4name: m,
                            withdrawType: i
                        }
                    })
                },
                a = async () => {
                    var v;
                    const _ = await ee(Ge({
                        withdrawid: i
                    }));
                    _ && (r.value = ((v = _.data) == null ? void 0 : v.withdrawalslist) || [])
                };
            return _e(() => {
                d.value = s.query.bid || 0, a()
            }), (_, v) => {
                const S = V("NavBar"),
                    u = Fe("throttle-click");
                return l(), c("div", nv, [p(S, {
                    title: C(m) + _.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: o
                }, null, 8, ["title"]), e("div", ov, [r.value.length ? (l(!0), c(X, {
                    key: 0
                }, ke(r.value, (N, y) => (l(), c("div", {
                    key: y,
                    class: "type4_C-item"
                }, [e("div", {
                    class: ie(["header", `${N.walletName}`])
                }, [e("div", sv, t(N.walletName), 1), e("div", {
                    class: ie(["select-btn", {
                        isSelect: N.bid == d.value
                    }]),
                    onClick: A => w(N.bid)
                }, [N.bid == d.value ? (l(), c("svg", iv, dv)) : k("v-if", !0)], 10, lv)], 2), e("div", cv, [e("div", uv, t(N.beneficiaryName), 1), e("div", pv, t(N.mobileNO), 1)])]))), 128)) : re((l(), c("div", vv, [L(t(_.$t("upiAddPaymentMethod")), 1)])), [
                    [u, {
                        handler: h,
                        wait: 1e3
                    }]
                ])]), re((l(), c("div", _v, [L(t(_.$t("upiAddPaymentMethod")), 1)])), [
                    [u, {
                        handler: h,
                        wait: 1e3
                    }]
                ])])
            }
        }
    });
const hv = ne(mv, [
        ["__scopeId", "data-v-8da75fee"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/Type4/index.vue"]
    ]),
    P_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    wv = {
        class: "USDT__container"
    },
    fv = {
        key: 0,
        class: "USDT__container-content"
    },
    yv = {
        class: "USDT__container-content__card"
    },
    gv = {
        class: "USDT__container-content__card-top"
    },
    kv = {
        class: "USDT__container-content__card-mid ar-1px-b"
    },
    $v = {
        key: 1,
        class: "USDT__container-default"
    },
    bv = ae({
        __name: "index",
        setup(f) {
            const {
                setLoading: n
            } = Ue(), {
                getUserInfo: s
            } = kt(), m = zt();
            s({
                signature: m.token
            });
            const i = ue(),
                r = tt(),
                d = r.getWithdrawal;
            g(!1);
            const o = j(() => r.getWithdrawal.bid.toString()),
                w = g([]);
            he({
                bid: r.getWithdrawal.bid,
                withdrawid: r.getWithdrawal.type
            });

            function h(S) {
                i.replace({
                    name: "Withdraw",
                    query: {
                        bid: S.bid
                    }
                })
            }
            const a = he({
                withdrawid: r.getWithdrawal.type
            });
            async function _() {
                n(!0);
                const S = await ee(Ge(a));
                S && (w.value = S.data.withdrawalslist, S.data.withdrawalslist.length > 0 && r.getWithdrawal.bid == 0 || S.data.withdrawalslist.length == 1 ? d.bid = S.data.withdrawalslist[0].bid : S.data.withdrawalslist.length == 0 && (d.bid = 0), r.setWithdrawal({ ...d
                }), r.setWithdrawalslist(S.data.withdrawalslist)), n(!1)
            }
            _e(async () => {
                console.log("11", d), console.log("type", i.currentRoute.value.query), i.currentRoute.value.query.type == "Add" ? await _() : w.value = r.getWithdrawalslist
            });

            function v() {
                i.replace({
                    name: "Withdraw",
                    query: {
                        bid: o.value
                    }
                })
            }
            return (S, u) => {
                const N = V("NavBar"),
                    y = V("svg-icon"),
                    A = V("van-radio"),
                    W = V("van-radio-group");
                return l(), c("div", wv, [p(N, {
                    title: S.$t("usdtAddr"),
                    "left-arrow": "",
                    onClickLeft: v
                }, null, 8, ["title"]), w.value.length > 0 ? (l(), c("div", fv, [(l(!0), c(X, null, ke(w.value, $ => (l(), c("div", {
                    class: "USDT__container-content__item",
                    key: $.bid
                }, [p(W, {
                    modelValue: o.value,
                    "onUpdate:modelValue": u[0] || (u[0] = q => o.value = q)
                }, {
                    default: G(() => [e("div", yv, [e("div", gv, [p(y, {
                        name: "bankHeader"
                    }), p(y, {
                        name: "usdtLogo3"
                    })]), e("div", kv, [e("span", null, t($.accountNo), 1), e("span", null, t($.usdtRemarkName), 1)]), e("div", null, [k("这是假的"), p(A, {
                        name: `${$.bid.toString()}`,
                        "icon-size": "18px",
                        onClick: q => h($)
                    }, {
                        default: G(() => [L(t(S.$t("select")), 1)]),
                        _: 2
                    }, 1032, ["name", "onClick"])])])]),
                    _: 2
                }, 1032, ["modelValue"])]))), 128))])) : (l(), c("div", $v, [p(at, null, {
                    text: G(() => [e("span", null, t(S.$t("noPaymentMethodsYet")), 1)]),
                    _: 1
                })])), p(pt, {
                    type: 3
                })])
            }
        }
    });
const Cv = ne(bv, [
        ["__scopeId", "data-v-1cef303f"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/USDT/index.vue"]
    ]),
    R_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Cv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Tv = {
        class: "upi_C"
    },
    Nv = {
        class: "upi_C-list"
    },
    Sv = {
        class: "header"
    },
    Iv = {
        class: "header-title"
    },
    Av = {
        class: "upi-body"
    },
    Wv = {
        class: "upi-body-name"
    },
    Bv = {
        class: "upi-body-id"
    },
    Uv = ["onClick"],
    Dv = {
        class: "upi_C-addbtn"
    },
    Pv = ae({
        __name: "index",
        setup(f) {
            const n = ue(),
                s = Ie(),
                m = g([]),
                i = g(null),
                r = () => {
                    const a = m.value.find(_ => _.bid == i.value) ? i.value : 0;
                    n.replace({
                        name: "Withdraw",
                        query: {
                            bid: a,
                            type: 2
                        }
                    })
                };
            g(!1);
            const d = async () => {
                    var a;
                    const h = await ee(Ge({
                        withdrawid: 2
                    }));
                    if (h) {
                        const _ = ((a = h.data) == null ? void 0 : a.withdrawalslist) || [];
                        m.value = _
                    }
                },
                o = h => {
                    n.replace({
                        name: "Withdraw",
                        query: {
                            bid: h.bid,
                            type: 2
                        }
                    })
                },
                w = async () => {
                    n.replace({
                        name: "Withdraw-AddUpi",
                        query: {
                            bid: i.value
                        }
                    })
                };
            return _e(() => {
                i.value = s.query.bid || 0, d()
            }), (h, a) => {
                const _ = V("NavBar"),
                    v = V("svg-icon"),
                    S = Fe("throttle-click");
                return l(), c("div", Tv, [p(_, {
                    title: h.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: r
                }, null, 8, ["title"]), e("div", Nv, [m.value.length ? (l(!0), c(X, {
                    key: 0
                }, ke(m.value, (u, N) => (l(), c("div", {
                    key: N,
                    class: "upi_C-item"
                }, [e("div", Sv, [e("div", Iv, [p(v, {
                    name: u.bankCode
                }, null, 8, ["name"]), e("span", null, t(C(et)(u.bankCode)), 1)])]), e("div", Av, [e("div", Wv, t(h.$t("accountName")) + ": " + t(u.upiName), 1), e("div", Bv, "UPI ID: " + t(u.upiAccount), 1), e("div", {
                    class: "upi-select",
                    onClick: y => o(u)
                }, [e("div", {
                    class: ie(["select-btn", {
                        isSelect: u.bid == i.value
                    }])
                }, null, 2), e("span", null, t(u.bid == i.value ? h.$t("currentPayment") : h.$t("currentChange")), 1)], 8, Uv)])]))), 128)) : (l(), we(at, {
                    key: 1
                }, {
                    text: G(() => [e("span", null, t(h.$t("noPaymentMethodsYet")), 1)]),
                    _: 1
                }))]), re((l(), c("div", Dv, [L(t(h.$t("upiAddPaymentMethod")), 1)])), [
                    [S, {
                        handler: w,
                        wait: 1e3
                    }]
                ])])
            }
        }
    });
const Rv = ne(Pv, [
        ["__scopeId", "data-v-68a41569"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/Upi/index.vue"]
    ]),
    V_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Rv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Vv = {
        class: "cancelW"
    },
    Ov = {
        class: "orderInfo"
    },
    Mv = {
        class: "b"
    },
    Lv = {
        class: "reason"
    },
    qv = {
        class: "fail"
    },
    jv = {
        class: "van-dialog__content-title"
    },
    Fv = {
        class: "van-dialog__content-note"
    },
    zv = ae({
        __name: "index",
        setup(f) {
            const {
                t: n
            } = me(), s = ue(), m = Ie(), i = g(), r = g("0"), d = g(!1), o = g(""), w = j(() => {
                var A;
                return r.value == "0" ? o.value : (A = i.value.find(W => W.id == r.value)) == null ? void 0 : A.reasonText
            }), h = () => {
                s.go(-1)
            }, a = g(""), _ = g(""), v = g(""), S = g("");
            async function u() {
                const A = await ee(Ga({
                    type: 1
                }));
                A && (i.value = A.data)
            }
            async function N() {
                await ee(Qa({
                    orderNo: S.value,
                    cancelReason: w.value,
                    reamrk: ""
                })) && (d.value = !1, h())
            }
            async function y() {
                if (r.value == "0" && o.value.trim().length == 0) {
                    z(n("enterOtherReason"));
                    return
                }
                d.value = !0
            }
            return _e(() => {
                var A, W, $, q, I, P, x, J;
                a.value = ((W = (A = m.query) == null ? void 0 : A.orderAmount) == null ? void 0 : W.toString()) || "", _.value = ((q = ($ = m.query) == null ? void 0 : $.sellerAccountNo) == null ? void 0 : q.toString()) || "", v.value = ((P = (I = m.query) == null ? void 0 : I.createTime) == null ? void 0 : P.toString()) || "", S.value = ((J = (x = m.query) == null ? void 0 : x.orderNo) == null ? void 0 : J.toString()) || "", u()
            }), (A, W) => {
                const $ = V("NavBar"),
                    q = V("van-radio"),
                    I = V("van-radio-group"),
                    P = V("van-field"),
                    x = V("van-dialog"),
                    J = Fe("lazy");
                return l(), c("div", Vv, [p($, {
                    title: "取消订单",
                    "left-arrow": "",
                    onClickLeft: h,
                    backgroundColor: "transparent"
                }), e("div", Ov, [e("div", null, [e("span", null, t(A.$t("withdrawalA")), 1), e("span", Mv, t(C(de)(a.value)), 1)]), e("div", null, [e("span", null, "UPI " + t(A.$t("account")), 1), e("span", null, t(_.value), 1)]), e("div", null, [e("span", null, t(C(Zt)(v.value, "yyyy-MM-dd")), 1), e("span", {
                    class: "copy",
                    onClick: W[0] || (W[0] = R => C(Ze)(S.value))
                }, t(S.value), 1)])]), e("div", Lv, [e("h2", null, t(A.$t("cancelReason")), 1), p(I, {
                    modelValue: r.value,
                    "onUpdate:modelValue": W[1] || (W[1] = R => r.value = R),
                    shape: "dot",
                    "checked-color": "#ee0a24"
                }, {
                    default: G(() => [(l(!0), c(X, null, ke(i.value, (R, se) => (l(), we(q, {
                        key: se,
                        name: R.id.toString()
                    }, {
                        default: G(() => [L(t(R.reasonText), 1)]),
                        _: 2
                    }, 1032, ["name"]))), 128)), p(q, {
                        name: "0"
                    }, {
                        default: G(() => [L(t(A.$t("other")), 1)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["modelValue"]), p(P, {
                    class: "textarea",
                    disabled: r.value != "0",
                    modelValue: o.value,
                    "onUpdate:modelValue": W[2] || (W[2] = R => o.value = R),
                    rows: "3",
                    autosize: "",
                    type: "textarea",
                    maxlength: "150",
                    placeholder: A.$t("enterOtherReason")
                }, null, 8, ["disabled", "modelValue", "placeholder"])]), e("div", {
                    class: "cancel",
                    onClick: y
                }, t(A.$t("confirmCancel")), 1), p(x, {
                    show: d.value,
                    "onUpdate:show": W[4] || (W[4] = R => d.value = R),
                    "show-confirm-button": !1,
                    "z-index": "100",
                    closeOnClickOverlay: !0
                }, {
                    default: G(() => [re(e("img", qv, null, 512), [
                        [J, C(ge)("wallet/recharge", "tip")]
                    ]), e("div", jv, t(A.$t("cancelW")), 1), e("div", Fv, [e("span", null, t(A.$t("c2cWTip11")), 1)]), e("div", {
                        class: "van-dialog__content-btn",
                        onClick: N
                    }, t(A.$t("confirmCancel")), 1), re(e("img", {
                        class: "close",
                        onClick: W[3] || (W[3] = R => d.value = !1)
                    }, null, 512), [
                        [J, C(dt)("main", "close")]
                    ])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Ev = ne(zv, [
        ["__scopeId", "data-v-522a488b"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/c2cCancelWithdrawal/index.vue"]
    ]),
    O_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ev
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Hv = {
        class: "wrongA"
    },
    xv = {
        class: "head"
    },
    Kv = {
        class: "content"
    },
    Zv = {
        class: "amount"
    },
    Gv = {
        class: "input"
    },
    Qv = {
        class: "place-div"
    },
    Yv = {
        class: "img"
    },
    Xv = {
        class: "uploadImg"
    },
    Jv = {
        class: "tip"
    },
    e_ = {
        class: "img video"
    },
    t_ = {
        class: "uploadImg"
    },
    a_ = {
        key: 0,
        class: "v",
        controls: ""
    },
    n_ = ["src"],
    o_ = ["src"],
    s_ = ["src"],
    l_ = {
        key: 1,
        class: "videoBox loading"
    },
    i_ = ae({
        __name: "index",
        setup(f) {
            var A;
            const n = ue(),
                {
                    t: s
                } = me(),
                m = j(() => De().getDollarSign),
                i = g([]),
                r = g([]),
                d = g([]),
                o = g(),
                w = g(),
                h = g(!1),
                a = g({
                    orderNo: (A = n.currentRoute.value.query) == null ? void 0 : A.orderNo,
                    realAmount: 0,
                    ossUrls: [{}]
                }),
                _ = j(() => {
                    var W;
                    return !(((W = a.value.orderNo) == null ? void 0 : W.toString().trim().length) == 0 || +(a.value.realAmount <= 0) || d.value.length == 0 || h.value)
                }),
                v = async W => {
                    console.log("file", W);
                    const $ = new FormData;
                    (W == null ? void 0 : W.length) > 0 ? W.forEach(I => {
                        $.append("files", I.file)
                    }) : $.append("files", W.file);
                    const q = await ee(Ya($));
                    q.data.forEach(I => {
                        d.value.push(I.src)
                    }), console.log(11, d.value, q.data)
                },
                S = (W, $) => (d.value.filter((q, I) => {
                    $.index == I && d.value.splice(I, 1)
                }), console.log(11, d.value), !0),
                u = async W => {
                    h.value = !0;
                    const $ = new FormData;
                    $.append("files", W.file);
                    const q = await ee(Xa($));
                    q && (o.value = q.data[0].ossHttp + "/" + q.data[0].src, w.value = q.data[0].src), h.value = !1
                };
            async function N() {
                if (!_.value) return;
                if (h.value) return z({
                    message: s("c2cTip45"),
                    wordBreak: "break-word"
                });
                a.value.ossUrls.length = 0, d.value.forEach(q => {
                    a.value.ossUrls.push({
                        fileType: 1,
                        fileUrl: q
                    })
                }), w.value && a.value.ossUrls.push({
                    fileType: 2,
                    fileUrl: w.value
                }), console.log(22, a.value);
                const [W, $] = await Ja(en(a.value));
                console.log(W, $), $.code == 0 ? y(s("submitSuccess")) : $.msgCode == "281" && $.code == 1 ? y($.msg) : rt($)
            }

            function y(W) {
                z({
                    message: W,
                    wordBreak: "break-word"
                }), setTimeout(() => {
                    n.replace({
                        name: "Withdraw-C2cDetail",
                        query: {
                            order: a.value.orderNo
                        }
                    })
                }, 2e3)
            }
            return (W, $) => {
                const q = V("NavBar"),
                    I = V("van-field"),
                    P = V("van-uploader"),
                    x = V("van-icon");
                return l(), c("div", Hv, [e("div", xv, [p(q, {
                    title: "",
                    "left-arrow": "",
                    onClickLeft: $[0] || ($[0] = () => C(n).back()),
                    backgroundColor: "transparent"
                }), e("h1", null, t(W.$t("c2cState14")), 1), e("div", null, t(W.$t("c2cTip35")), 1), e("div", null, t(W.$t("c2cTip36")), 1)]), e("div", Kv, [e("div", Zv, [e("h1", null, t(W.$t("c2cTip37")), 1), e("p", null, t(W.$t("c2cTip38")), 1), e("div", Gv, [e("div", Qv, t(m.value), 1), p(I, {
                    modelValue: a.value.realAmount,
                    "onUpdate:modelValue": $[1] || ($[1] = J => a.value.realAmount = J),
                    modelModifiers: {
                        number: !0
                    },
                    center: "",
                    type: "digit",
                    placeholder: W.$t("enterAmount"),
                    class: "inp"
                }, null, 8, ["modelValue", "placeholder"])])]), e("div", Yv, [e("h1", null, t(W.$t("c2cTip39")) + " (" + t(i.value.length) + "/3) ", 1), p(P, {
                    modelValue: i.value,
                    "onUpdate:modelValue": $[2] || ($[2] = J => i.value = J),
                    multiple: "",
                    "max-count": 3,
                    "max-size": 5e3 * 1024,
                    onOversize: $[3] || ($[3] = () => C(mt)(W.$t("C2Cuploadtip2"))),
                    accept: "image/*",
                    "after-read": v,
                    "before-delete": S
                }, {
                    default: G(() => [e("div", Xv, t(W.$t("c2cTip40")), 1)]),
                    _: 1
                }, 8, ["modelValue"]), e("div", Jv, [p(x, {
                    name: "warning-o",
                    size: "18"
                }), L(t(W.$t("c2cTip41")), 1)])]), e("div", e_, [e("h1", null, t(W.$t("c2cTip42")) + " (" + t(r.value.length) + "/1) ", 1), h.value ? k("v-if", !0) : (l(), we(P, {
                    key: 0,
                    modelValue: r.value,
                    "onUpdate:modelValue": $[4] || ($[4] = J => r.value = J),
                    "max-count": 1,
                    "max-size": 5e4 * 1024,
                    onOversize: $[5] || ($[5] = () => C(mt)(W.$t("c2cTip51"))),
                    accept: "video/*",
                    "after-read": u
                }, {
                    "preview-cover": G(({
                        file: J
                    }) => [o.value ? (l(), c("video", a_, [e("source", {
                        src: o.value,
                        type: "video/ogg"
                    }, null, 8, n_), e("source", {
                        src: o.value,
                        type: "video/mp4"
                    }, null, 8, o_), e("source", {
                        src: o.value,
                        type: "video/webm"
                    }, null, 8, s_)])) : k("v-if", !0)]),
                    default: G(() => [e("div", t_, t(W.$t("c2cTip43")), 1)]),
                    _: 1
                }, 8, ["modelValue"])), h.value ? (l(), c("div", l_, t(W.$t("c2cTip44")), 1)) : k("v-if", !0)]), e("div", {
                    class: ie(["cmdBth", {
                        active: _.value
                    }]),
                    onClick: N
                }, t(W.$t("c2cState14")), 3)])])
            }
        }
    });
const r_ = ne(i_, [
        ["__scopeId", "data-v-5e595a70"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/wallet/Withdraw/c2cWrongAmount/index.vue"]
    ]),
    M_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: r_
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    ut as W, y_ as a, g_ as b, Js as c, k_ as d, $_ as e, b_ as f, C_ as g, T_ as h, f_ as i, N_ as j, S_ as k, I_ as l, A_ as m, W_ as n, B_ as o, U_ as p, D_ as q, P_ as r, R_ as s, V_ as t, O_ as u, M_ as v
};