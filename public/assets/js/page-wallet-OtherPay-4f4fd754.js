import {
  A as Aa,
  r as m,
  z as Ba,
  B as v,
  R as Na,
  $ as Ia,
  E as $a,
  bD as Gt,
  t as Ta,
  a3 as Mt,
  u as U,
  F as me,
  q as La,
  n as Ht,
  b4 as Qt,
  a1 as wa,
  G as ia,
  H as ve,
  I as R,
  J as r,
  Q as K,
  P as i,
  ao as O,
  O as _,
  aB as W,
  aC as qa,
  aD as xa,
  N as b,
  K as Ea,
  M as Ga,
  ap as Xe,
  C as Ft,
  X as Vt,
  au as ba,
  av as Oe,
  Z as Kt,
} from "./common.modules-cecf9b0d.js";
import {
  ak as Wt,
  a5 as Xt,
  G as zt,
  y as ge,
  c as ie,
  ch as jt,
  g as $e,
  a6 as he,
  A as w,
  cW as Jt,
  a7 as _a,
  a8 as Zt,
  cX as Yt,
  cY as er,
  cZ as ar,
  c_ as tr,
  an as rr,
  as as nr,
  c$ as sr,
  d0 as ir,
  d1 as or,
  d2 as lr,
  d3 as cr,
  d4 as Oa,
  d5 as Re,
  aB as aa,
  aC as ta,
  aQ as ra,
  aR as na,
  aT as We,
  d6 as ur,
  bC as dr,
  d7 as pr,
  d8 as yr,
  cU as fr,
  d9 as mr,
  da as gr,
  db as hr,
  dc as Ra,
  dd as vr,
  de as kr,
  df as Ir,
  dg as Tr,
  dh as wr,
  di as Ma,
  dj as br,
  dk as _r,
  dl as Or,
  dm as Rr,
  ah as Pr,
  dn as Cr,
  dp as Ur,
  ba as Sr,
  cN as Dr,
  _ as oa,
  b as D,
  cH as Ar,
  L as Pa,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { D as Ca } from "./page-activity-Championship-c5772910.js";
const e = Aa({
    rechangeUpiShow: !1,
    rechargeSubmitBtnStatus: !1,
    currentMenu: -4,
    rechargeType: [],
    bankList: [],
    rechargeTypes: [],
    bank_local: [],
    quickList: [],
    C2CQuickList: [],
    priceRange: { min: 0, max: 0 },
    currentPayType: {},
    isRechargeInputDialog:
      JSON.parse(localStorage.getItem("userInfo") || "{}")
        .isOpenOfficialRechargeInputDialog === "1",
    amount: void 0,
    numberPayAmount: void 0,
    numberExchangeRate: 0,
    validateAmount: "",
    currentQuickIndex: -1,
    rechargeDialogVisible: !1,
    bankInfo: {},
    currentBankIndex: 0,
    isC2COrder: !1,
    C2COrderInfo: void 0,
    isBankOrder: !1,
    bankOrderInfo: void 0,
    isUsdtOrder: !1,
    currentPayId: 0,
    localUsdtInfo: [],
    currentLocalUsdtIndex: 0,
    usdtOrderInfo: {},
    orderDetail: {},
    bankUTR: "",
    localUpiUTR: "",
    upiOrderInfo: void 0,
    isUpiOrder: !1,
    CreateUpiOrderRep: void 0,
    otherBankName: "",
    thirdPayBankList: [],
    selectOtherBank: void 0,
    arPayInfo: void 0,
    isArPayOrder: !1,
    isRsnPayOrder: !1,
    isArUpiPayOrder: !1,
    rsnInfo: { balance: 0, walletActivationStatus: 0, walletAddress: "" },
    goingOrder: null,
    arupiGoingOrder: !1,
    payTypeLoading: !1,
    reasonShow: !1,
  }),
  Br = [9, 10, 18, 19],
  Nr = [11, 16, 19],
  sa = m(),
  Ua = m(1),
  Be = m(),
  Sa = m(!1),
  Da = m(!1),
  Ne = m(),
  Ha = () => {
    const { t: o } = Ba(),
      f = jt(),
      { localStore: q } = Pr(),
      { handleOpen: X } = Wt({ type: 3 }),
      { goWallet: H } = Xt(),
      c = v(() => h.value === 20),
      x = v(() => h.value === 21),
      z = v(() => h.value === 22),
      Q = v(() => {
        var a;
        return [26e3, 26001].includes(
          (a = e.currentPayType) == null ? void 0 : a.payTypeID
        );
      }),
      j = zt(),
      E = ge(),
      S = j.getUserInfo,
      I = v(() => S.uRate),
      ee = v(() => S.trxRate),
      J = v(() => S.isOpenOfficialRechargeInputDialog === "1"),
      oe = v(
        () => S.isShowRechargeBankList === "1" || ![9, 10].includes(h.value)
      ),
      B = v(() => Nr.includes(h.value)),
      g = Na(),
      ae = m(!1),
      F = m(!1),
      ue = m(),
      Pe = m([]),
      Le = m(!1),
      ke = m(!1),
      ne = m(0),
      qe = m(0),
      xe = m(!1),
      ze = m(!1),
      je = m(""),
      Ee = m(!1),
      Ge = m(!1),
      Me = m([]),
      He = m(),
      le = m(2),
      Ie = m(!1),
      Ce = m(""),
      d = v(() => E.getDollarSign),
      u = m(!1),
      G = m([]),
      se = Aa({ checked: -1, text: "" }),
      Te = (a) => {
        sa.value = a;
      },
      we = {
        11: {
          key: "USDT",
          unit: "USDT",
          selectText: o("selectUSDTNum"),
          placeholder: o("enterUSDTAmount"),
          icon: "usdt",
        },
        16: {
          key: "TRX",
          unit: "TRX",
          selectText: o("selectTRXNum"),
          placeholder: o("enterTRXAmount"),
          icon: "trx",
        },
        19: {
          key: "USDT",
          unit: "USDT",
          selectText: o("selectUSDTNum"),
          placeholder: o("enterUSDTAmount"),
          icon: "usdt",
        },
      },
      de = v(() => {
        var t;
        let a = (t = e.rechargeTypes[0]) == null ? void 0 : t.c2cUnitAmount;
        return a ? a.toString().substring(1) : "00";
      }),
      pe = v(() => {
        var a, t;
        return ((a = e.bankList) == null ? void 0 : a.length) < 1
          ? []
          : (t = e.bankList) == null
          ? void 0
          : t.filter((n) => n.transferType === Ua.value);
      }),
      ce = v(() => h.value === 12),
      h = v(() => e.currentPayId),
      Z = v(() => Br.includes(h.value)),
      N = v(() => h.value === 10),
      k = v(() => e.currentPayType.payTypeID || -1),
      te = v(
        () =>
          !Z.value && !x.value && !z.value && !Q.value && !ce.value && !N.value
      ),
      re = v(() =>
        d.value === "৳"
          ? pe.value[e.currentBankIndex].bankName
          : e.bankList[e.currentBankIndex].bankName
      ),
      be = v(() => (d.value === "৳" ? pe.value : e.bankList)),
      Ue = v(() =>
        e.thirdPayBankList.length > 0
          ? e.thirdPayBankList.filter(
              (a) => a.type === e.currentPayType.payTypeID
            )
          : []
      ),
      Qe = v(() => (h.value !== 18 ? !0 : !ge().getIsSplitLocalEWallet)),
      Se = async () => {
        e.rechargeType.unshift({
          payNameUrl2: $e("wallet/withdraw/withdrawHistory", "all_NS"),
          payNameUrl: $e("wallet/withdraw/withdrawHistory", "all"),
          payID: -1,
          payName: o("all"),
          minPrice: 0,
          maxPrice: -0,
          scope: "",
          typeName: o("all"),
          payTypeID: 0,
          paySysName: "",
        }),
          (e.currentMenu = 0);
      },
      Fa = v(() =>
        ce.value
          ? !!e.isUpiOrder
          : Z.value || N.value
          ? !!e.isBankOrder || !!e.isUsdtOrder
          : x.value
          ? !!e.isArPayOrder
          : z.value
          ? !!e.isRsnPayOrder
          : Q.value
          ? !!e.isArUpiPayOrder
          : !1
      ),
      Je = v(() =>
        h.value === 11 || h.value === 19
          ? I.value
          : h.value === 16
          ? ee.value
          : 0
      ),
      Va = v(() => e.rechargeType.find((a) => a.payID === 21)),
      Ka = v(() => e.rechargeType.find((a) => a.payID === 22)),
      Wa = v(() => e.rechargeType.find((a) => a.payID === 26)),
      ye = v(() => e.rechargeType),
      Xa = v(() => e.localUsdtInfo[e.currentLocalUsdtIndex]),
      za = v(() => {
        const { min: a, max: t } = e.priceRange;
        return `${ie(a)} - ${ie(t)}`;
      }),
      ja = async (a) => {
        qt(), (e.currentMenu = 0), (e.rechargeType = []);
        const t = await he(),
          n = await w(Jt({ deviceType: t }));
        if (n) {
          if (((e.rechargeType = n.data.typelist), !e.rechargeType.length))
            return;
          const s = e.rechargeType[0].payID;
          (e.currentPayId = s), !a && la(0), a && Se();
        }
      },
      De = () => {
        var t;
        return (t = e.rechargeTypes.find((n) => n.paySysName === re.value)) ==
          null
          ? void 0
          : t.payTypeID;
      },
      la = async (a) => {
        const t = ye.value[a].payID;
        if (
          ((e.currentMenu = a),
          a === -1
            ? (e.currentPayId = 21)
            : a === -2
            ? (e.currentPayId = 22)
            : a === -3
            ? (e.currentPayId = 26)
            : (e.currentPayId = t),
          (e.arupiGoingOrder = !1),
          (e.goingOrder = null),
          Ja(),
          await ca(),
          ce.value && !Q.value)
        )
          ma();
        else if (x.value) ua();
        else if (z.value) et();
        else if (Q.value) Ya(), da();
        else if (Z.value || N.value)
          if (t.value === 19) ga();
          else if (t.value === 18 && !ge().getIsSplitLocalEWallet) Fe(De());
          else {
            let n = ye.value[e.currentMenu].payTypeID;
            Fe(N.value ? t.value : n || -1);
          }
        Ve();
      },
      Ja = () => {
        (e.isArPayOrder = !1),
          (e.isRsnPayOrder = !1),
          (e.isArUpiPayOrder = !1),
          (e.isC2COrder = !1),
          (e.isUpiOrder = !1),
          (e.isBankOrder = !1),
          (e.isUsdtOrder = !1);
      },
      _e = (a, t = "arupi", n = !0) => {
        if (!a) return;
        E.getArUpiInputUtrSwitch && t === "arupi" && (t = "arupi_v2");
        const s = Gt.parse(a.split("?")[1]);
        q.set("ar_p_t", s.token),
          q.set("ar_p_lang", s.lang),
          n &&
            g.push({
              name: t,
              query: { payTypeId: e.currentPayType.payTypeID },
            });
      },
      ca = async (a, t, n) => {
        var P, C, A, M, y, $, V, fe;
        if (e.payTypeLoading) return;
        e.payTypeLoading = !0;
        const s = Ta({ message: o("loading") + "...", forbidClick: !0 }),
          p = await he(),
          l = await w(
            _a({
              payid: h.value || a,
              payTypeId:
                ((P = ye.value[e.currentMenu]) == null
                  ? void 0
                  : P.payTypeID) || t,
              deviceType: p,
            })
          );
        if (((e.payTypeLoading = !1), s.close(), l)) {
          if (
            (h.value === 19 && (e.localUsdtInfo = l.data.localUsdtlist),
            (e.rechargeTypes = l.data.rechargetypelist),
            (e.bankList = l.data.banklist),
            Z.value &&
              ((C = e.bankList) == null ? void 0 : C.length) > 0 &&
              (e.currentBankIndex = 0),
            N.value &&
              (((A = e.bankList) == null ? void 0 : A.length) > 1 &&
                (e.currentBankIndex = ka()),
              (e.bank_local =
                l.data.rechargetypelist[0].parameters.split("|"))),
            Z.value)
          )
            if (h.value === 18) {
              const T = e.bankList[0].bankName,
                L =
                  (M = l.data.rechargetypelist) == null
                    ? void 0
                    : M.find((Ke) => Ke.paySysName === T);
              L && L.parameters && (e.bank_local = L.parameters.split("|"));
            } else
              e.bank_local = l.data.rechargetypelist[0].parameters.split("|");
          ((y = l.data) == null ? void 0 : y.rechargetypelist.length) > 0 &&
            ((e.quickList =
              ($ = l.data.rechargetypelist[0]) == null
                ? void 0
                : $.quickConfigList),
            (e.currentPayType = l.data.rechargetypelist[0]),
            (e.priceRange = {
              min: Number(
                (V = l.data.rechargetypelist[0]) == null ? void 0 : V.miniPrice
              ),
              max: Number(
                (fe = l.data.rechargetypelist[0]) == null ? void 0 : fe.maxPrice
              ),
            })),
            te &&
              ((e.thirdPayBankList = l.data.thirdPayBankList || []),
              e.thirdPayBankList.length > 0 &&
                (e.selectOtherBank = Ue.value[0]));
        }
      },
      Za = async () => {
        var t, n, s;
        const a = await w(_a({ payid: e.currentPayId }));
        a
          ? ((e.quickList =
              (t = a.data.rechargetypelist[0]) == null
                ? void 0
                : t.quickConfigList),
            (e.priceRange = {
              min: Number(
                (n = a.data.rechargetypelist[0]) == null ? void 0 : n.miniPrice
              ),
              max: Number(
                (s = a.data.rechargetypelist[0]) == null ? void 0 : s.maxPrice
              ),
            }))
          : clearInterval(Ne.value);
      },
      ua = async () => {
        const a = await w(Zt());
        a.code === 0 && (e.isArPayOrder = a.data);
      },
      Ya = async () => {
        const a = await w(Yt({ payTypeId: e.currentPayType.payTypeID }));
        a.code === 0 && (e.isArUpiPayOrder = a.data);
      },
      da = async () => {
        const a = await w(er({ payTypeId: e.currentPayType.payTypeID }));
        if (a.code === 0) {
          const t = a.data || {};
          if (
            (a.data || ((e.arupiGoingOrder = !1), (e.reasonShow = !1)),
            (e.goingOrder = a.data),
            (Ce.value = t.token),
            t.paymentPageExpire == null)
          )
            return;
          ((t.paymentPageExpire == 0 && t.utrSubmitSuccess == 0) ||
            (t.paymentPageExpire == 1 && t.utrSubmitSuccess == 0)) &&
            (e.arupiGoingOrder = !0);
        }
      },
      et = async () => {
        const a = await ar();
        (a == null ? void 0 : a.code) === 0 && (e.rsnInfo = a.data);
        const t = await w(tr());
        t.code === 0 && (e.isRsnPayOrder = t.data);
      },
      at = (a) => {
        var t, n, s;
        (e.currentPayType = e.rechargeTypes[a]),
          (e.quickList =
            (t = e.rechargeTypes[a]) == null ? void 0 : t.quickConfigList),
          (e.priceRange = {
            min: Number(
              (n = e.rechargeTypes[a]) == null ? void 0 : n.miniPrice
            ),
            max: Number((s = e.rechargeTypes[a]) == null ? void 0 : s.maxPrice),
          }),
          e.thirdPayBankList.length > 0 &&
            (e.selectOtherBank = Ue.value[0] || ""),
          Ve();
      },
      Ze = () => {
        let a = h.value === 11 || h.value === 19 ? "USDT" : "TRX";
        return (e.numberPayAmount || e.numberPayAmount === 0) &&
          e.numberPayAmount <= 0
          ? ((e.validateAmount = o("rangeDesc1")), !1)
          : e.numberPayAmount && e.numberPayAmount > e.priceRange.max
          ? ((e.validateAmount = o("rangeDesc3") + " " + e.priceRange.max + a),
            !1)
          : e.numberPayAmount && e.numberPayAmount < e.priceRange.min
          ? ((e.validateAmount = o("rangeDesc2") + " " + e.priceRange.min + a),
            !1)
          : ((e.validateAmount = ""), !0);
      },
      Ye = () =>
        (e.amount || e.amount === 0) && e.amount <= 0
          ? ((e.validateAmount = o("rangeDesc1")), !1)
          : e.amount && e.amount > e.priceRange.max
          ? ((e.validateAmount = o("rangeDesc3") + e.priceRange.max), !1)
          : e.amount && e.amount < e.priceRange.min
          ? ((e.validateAmount = o("rangeDesc2") + e.priceRange.min), !1)
          : e.currentPayId === 26 && e.amount && e.amount % 100 !== 0
          ? ((e.validateAmount = o("arupiPayError")), !1)
          : ((e.validateAmount = ""), !0),
      tt = (a) => {
        if (((e.currentQuickIndex = a), (le.value = 1), B.value)) {
          (e.numberPayAmount = Number(e.quickList[a].rechargeAmount)),
            (e.numberExchangeRate =
              Je.value * Number(e.quickList[a].rechargeAmount)),
            Ze() &&
              ((e.numberPayAmount = Number(pa(e.numberPayAmount.toString()))),
              (e.numberExchangeRate = e.numberPayAmount * Je.value));
          return;
        }
        (e.amount = Number(e.quickList[a].rechargeAmount)),
          Ye() && (e.amount = Number(pa(e.amount.toString())));
      },
      pa = (a) => ((a = a + ""), a.indexOf(".") > -1 ? a.split(".")[0] : a),
      ya = (a = {}) => {
        const {
          data: { redirectUrl: t, scanCodePay: n, formUrl: s, formBody: p },
        } = a;
        if (!n && t) {
          let l = t;
          aa()
            ? ta(l)
            : ra()
            ? na("recharge", {
                url: l,
                recharegeName: e.currentPayType.payName,
              })
            : We(l);
        } else {
          const l = document.createElement("form");
          (l.action = s), (l.method = "POST"), (l.target = "_blank");
          for (let P in p)
            if (p.hasOwnProperty(P)) {
              let C = document.createElement("input");
              (C.name = P),
                (C.value = p[P]),
                (C.type = "hidden"),
                l.appendChild(C);
            }
          document.body.appendChild(l), l.submit();
        }
      },
      rt = Mt(async () => {
        if (!e.rechargeSubmitBtnStatus) return;
        const { onTriggerRecharege: a } = Sr();
        if ((a({ amount: e.amount }), x.value || z.value || Q.value))
          return nt();
        if (te.value) return ea();
        if (ce.value) return pt();
        if (Z.value || N.value)
          if (
            [10, 18].includes(h.value) ||
            (e.isRechargeInputDialog && h.value !== 19)
          ) {
            if (!e.bankList) {
              U("The payment channel is empty");
              return;
            }
            e.bank_local.map((t) => {
              let n = t.split(",")[1];
              e.bankInfo[n] = be.value[e.currentBankIndex][n];
            }),
              (e.rechargeDialogVisible = !0);
            return;
          } else h.value === 19 ? yt() : fa();
      }, 400),
      nt = async () => {
        var l, P, C, A, M;
        if (
          x.value &&
          ((l = e.arPayInfo) == null ? void 0 : l.walletActivationStatus) === 0
        ) {
          U(o("arNoActive2"));
          return;
        }
        Ta({ message: o("loading") + "...", forbidClick: !0 });
        let a = window.location.origin + "/#/main",
          t = {};
        if (ge().isOpenAdjustEvent) {
          let y = Oa("adjustDeviceId") || "";
          y && (y = JSON.parse(y)),
            (t.vendorId = 3),
            (t.pixelId = y
              ? `${
                  (P = y == null ? void 0 : y.data) == null
                    ? void 0
                    : P.firstPurchaseToken
                }_${
                  (C = y == null ? void 0 : y.data) == null
                    ? void 0
                    : C.purchaseToken
                }`
              : ""),
            (t.fbcId =
              ((A = y == null ? void 0 : y.data) == null
                ? void 0
                : A.appToken) || ""),
            (t.adId =
              ((M = y == null ? void 0 : y.data) == null
                ? void 0
                : M.adjustDeviceId) || "");
        } else
          (t.vendorId = 1),
            (t.pixelId =
              sessionStorage.getItem("pixel") ||
              sessionStorage.getItem("fb_dynamic_pixel") ||
              localStorage.getItem("fb_dynamic_pixel") ||
              ""),
            (t.fbcId = Re("_fbc") || Re("_fbp") || "");
        const s = await he(),
          p = {
            payTypeId: e.currentPayType.payTypeID,
            amount: e.amount || 0,
            returnUrl: a,
            pixelId: t.pixelId || "",
            vendorId: t.vendorId || 1,
            fbcId: t.fbcId || "",
            fbc: t.fbcId || "",
            fbp: t.fbp || "",
            adId: t.adId || "",
            amountType: le.value + "",
            deviceType: s,
          };
        try {
          const y = await Cr(p);
          if (y && y.data && y.code === 0) {
            le.value = 2;
            const {
              data: {
                submitUrl: $,
                submitType: V,
                orderResult: fe = 1,
                recommandAmountList: T,
                onGoingOrder: L = {},
                addThirdPayOrderRsp: Ke = null,
              },
            } = y;
            if (Q.value) {
              if (Ke) return ya({ data: Ke });
              if (V == 0)
                return wa({
                  title: o("customerService"),
                  message: y.msg || "",
                }).then(() => {
                  X();
                });
              if (V == 8) {
                (Ge.value = !0), (Me.value = T || []), (He.value = T[0]);
                return;
              }
              if (V == 16)
                return L.hasPendingAppealOrder == 1
                  ? U({ message: o("haveAppealTip"), wordBreak: "break-word" })
                  : L.isCancellable == 0
                  ? U({
                      message: o("haveProgressOrderTip"),
                      wordBreak: "break-word",
                    })
                  : ((Ce.value = L == null ? void 0 : L.token),
                    (Ie.value = !0));
              _e($);
            } else {
              if (fe == 2)
                return U({
                  message: o("arbbuy"),
                  duration: 2e3,
                  wordBreak: "break-word",
                  onClose() {
                    We($);
                  },
                });
              aa()
                ? ta($)
                : ra()
                ? na("recharge", {
                    url: $,
                    recharegeName: e.currentPayType.payName,
                  })
                : We($);
            }
          } else {
            if ([1015, 1016].includes(y.msgCode))
              return U({
                message: y.msg || "",
                duration: 2e3,
                wordBreak: "break-word",
                onClose() {
                  H();
                },
              });
            if ([621, 623, 624].includes(y.msgCode))
              return wa({
                title: o("customerService"),
                message: y.msg || "",
              }).then(() => {
                X();
              });
            U({ message: y.msg || "", wordBreak: "break-word" });
          }
        } catch (y) {
          if ([1015, 1016].includes(y.msgCode))
            return U({
              message: y.msg || "",
              duration: 2e3,
              wordBreak: "break-word",
              onClose() {
                H();
              },
            });
        }
      },
      st = async () => {
        const { code: a, data: t } = await rr({});
        a === "1" && (G.value = t || []);
      },
      it = async (a = !1) => {
        var p, l, P, C, A, M;
        const { checked: t, text: n } = se;
        if (a) {
          if (t === -1 && !n)
            return U({
              message: o("selectReason"),
              wordBreak: "break-word",
              zIndex: 4e3,
            });
          _e((p = e.goingOrder) == null ? void 0 : p.payUrl, "arupi", !1);
          try {
            (
              await nr({
                reason:
                  t > -1 ? ((l = G.value[t]) == null ? void 0 : l.reason) : n,
                reasonId:
                  t > -1 ? ((P = G.value[t]) == null ? void 0 : P.id) : null,
              })
            ).code === "1" &&
              ((Ie.value = !1),
              (e.arupiGoingOrder = !1),
              (e.goingOrder = null),
              (e.isArUpiPayOrder = !1),
              (e.reasonShow = !1),
              me(o("cancelSuccess")),
              setTimeout(() => {
                f.emit("getRecordList");
              }, 2e3));
          } catch {}
          return;
        }
        (await w(
          sr({
            orderCancelToken:
              Ce.value || ((C = e.goingOrder) == null ? void 0 : C.token),
            payTypeId: e.currentPayType.payTypeID,
            reason: t > -1 ? ((A = G.value[t]) == null ? void 0 : A.reason) : n,
            reasonId:
              t > -1 ? ((M = G.value[t]) == null ? void 0 : M.id) : null,
          })
        )) &&
          ((Ie.value = !1),
          (e.reasonShow = !1),
          (e.arupiGoingOrder = !1),
          (e.goingOrder = null),
          (e.isArUpiPayOrder = !1),
          setTimeout(() => {
            f.emit("getRecordList");
          }, 2e3),
          me(o("cancelSuccess")));
      },
      ot = async (a) => {
        e.arupiGoingOrder = !1;
        const t = {
          orderNumber: a.rechargeNumber || a.merchantOrderNo,
          returnUrl: window.location.origin + "/#/main",
        };
        try {
          const { code: n, data: s, msgCode: p, msg: l } = await ir(t);
          if (n === 0 && s != null && s.rechargeOrderAppealPageUrl)
            await _e(
              s == null ? void 0 : s.rechargeOrderAppealPageUrl,
              "kycAppeal"
            );
          else {
            if (p === -1)
              return U({ message: l || "", wordBreak: "break-word" });
            U({ message: o("code" + p) || l || "", wordBreak: "break-word" });
          }
        } catch (n) {
          U({ message: n.msg || "", wordBreak: "break-word" });
        } finally {
          (e.goingOrder = null), (e.isArUpiPayOrder = !1);
        }
      },
      lt = async (a) => {
        if (((a == null ? void 0 : a.groupID) & 2) !== 2)
          try {
            const t = {
                rechargeNumber: a.rechargeNumber || a.merchantOrderNo,
                payTypeId: a.payTypeId || e.currentPayType.payTypeID,
              },
              { code: n, data: s, msgCode: p, msg: l } = await or(t);
            if (n === 0)
              await _e(
                `https://test.com?token=${s.token}&lang=en`,
                "kycAppeal_v2"
              );
            else {
              if (p === -1)
                return U({ message: l || "", wordBreak: "break-word" });
              U({ message: o("code" + p) || l || "", wordBreak: "break-word" });
            }
          } catch (t) {
            U({ message: t.msg || "", wordBreak: "break-word" });
          } finally {
            (e.arupiGoingOrder = !1),
              (e.goingOrder = null),
              (e.isArUpiPayOrder = !1);
          }
      },
      ct = (a) => {
        var t;
        (e.arupiGoingOrder = !1),
          _e((t = e.goingOrder) == null ? void 0 : t.payUrl, a);
      },
      ut = (a = !1) => {
        clearInterval(Ne.value),
          (Ne.value = null),
          !a &&
            (Ne.value = setInterval(async () => {
              if (!Q.value) return clearInterval(Ne.value);
              e.goingOrder && (await da()), await Za();
            }, 2 * 1e3));
      },
      dt = async (a, t, n, s, p) => {
        var l, P;
        if (((e.currentPayId = a), x.value && s === 0)) {
          if ((e.isArPayOrder || (await ua()), e.isArPayOrder)) {
            if ((l = e.isArPayOrder) != null && l.includes("&GroupID=")) {
              const A = new URL(
                (P = e.isArPayOrder) == null ? void 0 : P.replaceAll("/#", "")
              ).searchParams.get("GroupID");
              if ((Number(A) & 512) === 512) {
                await H();
                return;
              }
            }
            window.location.href = e.isArPayOrder;
          } else U(o("C2Ctimeout2"));
          return;
        }
        if (ce.value && s === 0) {
          g.push({ name: "OtherPay", query: { type: "upi" } });
          return;
        }
        if (s === 0 && a === 19) return g.push({ name: "RechargeUsdt" });
        if ((Z.value || N.value) && s === 0)
          return g.push({
            name: "RechargeDetail",
            query: { currentPayId: a, payTypeId: t, amount: n },
          });
      },
      pt = async () => {
        await Tt(), g.push({ name: "OtherPay", query: { type: "upi" } });
      },
      yt = () => {
        g.push({ name: "RechargeUsdt", query: { amount: e.numberPayAmount } });
      },
      ft = async (a) => {
        (await w(lr(a))) &&
          (me(o("success")),
          f.emit("changeKeepAliveKey"),
          g.replace({ name: "RechargeHistory" }));
      },
      ea = async () => {
        var A, M, y, $, V, fe;
        const a = ge();
        if (h.value === 15 || a.getDollarSign === "R$") {
          const T = await w(cr());
          if (
            ((Da.value = T.data.needSetPIX),
            T.data.isFirstPixRecharge && !Ee.value)
          ) {
            (Sa.value = !0), (Ee.value = !0);
            return;
          }
          if (T.data.needSetPIX) {
            await g.push({
              name: "Withdraw-AddPIX",
              query: { fromV: "Recharge" },
            });
            return;
          }
        }
        let t = 0;
        B.value ? (t = e.numberPayAmount) : (t = e.amount);
        let n = window.location.origin + ",status/rechargeStatus",
          s = {};
        if (ge().isOpenAdjustEvent) {
          let T = Oa("adjustDeviceId") || "";
          T && (T = JSON.parse(T)),
            (s.vendorId = 3),
            (s.pixelId =
              `${
                (A = T == null ? void 0 : T.data) == null
                  ? void 0
                  : A.firstPurchaseToken
              }_${
                (M = T == null ? void 0 : T.data) == null
                  ? void 0
                  : M.purchaseToken
              }` || ""),
            (s.fbcId =
              ((y = T == null ? void 0 : T.data) == null
                ? void 0
                : y.appToken) || ""),
            (s.adId =
              (($ = T == null ? void 0 : T.data) == null
                ? void 0
                : $.adjustDeviceId) || "");
        } else
          (s.vendorId = 1),
            (s.pixelId =
              sessionStorage.getItem("pixel") ||
              sessionStorage.getItem("fb_dynamic_pixel") ||
              localStorage.getItem("fb_dynamic_pixel") ||
              ""),
            (s.fbcId = Re("_fbc") || Re("_fbp") || "");
        s.isBankCode = e.thirdPayBankList.length > 0 && e.selectOtherBank;
        const l = Re("_fbc") || "",
          P = Re("_fbp") || "";
        let C = e.thirdPayBankList.length > 0 && e.selectOtherBank;
        if (e.currentPayType.payTypeID >= 1e4)
          await mt(
            t,
            n,
            s.pixelId || "",
            s.fbcId || "",
            l,
            P,
            s.vendorId,
            s.adId || "",
            C
          );
        else {
          let T = e.currentPayType.paySendUrl,
            L = "";
          T.indexOf("tyid") === -1
            ? (L =
                T +
                "?tyid=" +
                e.currentPayType.payTypeID +
                "&amount=" +
                t +
                "&uid=" +
                S.userId +
                "&sign=" +
                S.sign +
                (C
                  ? "&bankCode=" +
                    ((V = e.selectOtherBank) == null ? void 0 : V.bankCode)
                  : "") +
                "&urlInfo=" +
                n +
                `&pixelId=${s.pixelId}&fbcId=${s.fbcId}`)
            : (L =
                T +
                "&amount=" +
                t +
                "&uid=" +
                S.userId +
                "&sign=" +
                S.sign +
                (C
                  ? "&bankCode=" +
                    ((fe = e.selectOtherBank) == null ? void 0 : fe.bankCode)
                  : "") +
                "&urlInfo=" +
                n +
                `&pixelId=${s.pixelId}&fbcId=${s.fbcId}`),
            aa()
              ? ta(L)
              : ra()
              ? na("recharge", {
                  url: L,
                  recharegeName: e.currentPayType.payName,
                })
              : We(L);
        }
      },
      mt = async (a, t, n, s, p, l, P, C, A) => {
        var V;
        const M = await he(),
          y = {
            payTypeId: e.currentPayType.payTypeID,
            bankCode: A
              ? (V = e.selectOtherBank) == null
                ? void 0
                : V.bankCode
              : "",
            urlInfo: t,
            amount: a,
            pixelId: n,
            vendorId: P || 1,
            fbcId: s || "",
            fbc: p,
            fbp: l,
            adId: C,
            deviceType: M,
          };
        e.rechargeSubmitBtnStatus = !1;
        const $ = await w(ur(y));
        (e.rechargeSubmitBtnStatus = !0), $ && $.code === 0 && ya($);
      },
      gt = async () => {
        var s, p;
        let a = ((s = e.amount) == null ? void 0 : s.toString()) + de.value,
          t = { category: h.value, orderAmount: Number(a) };
        const [, n] = await dr(pr(t));
        if (n) {
          if ((n == null ? void 0 : n.msgCode) === 260 && n.code !== 0) {
            U(n.msg),
              setTimeout(() => {
                g.push({
                  name: "RechargeHistory-RechargeUpiDetail",
                  query: {
                    type: "C2C",
                    orderNo: n.data.orderId,
                    state: n.data.state,
                  },
                });
              }, 2e3);
            return;
          }
          if (n.data.state === 1)
            (e.rechangeUpiShow = !1),
              await g.push({ name: "OtherPay", query: { type: "C2C" } });
          else if (n.data.state === 2)
            (ke.value = !0),
              (ne.value = n.data.errorCount),
              (qe.value = n.data.remainingLimitTime);
          else {
            if (
              ((e.currentPayType.paySendUrl =
                (p = n.data.rechargeChannelInfo) == null
                  ? void 0
                  : p.paySendUrl),
              (e.currentPayType = n.data.rechargeChannelInfo),
              !n.data.suggessList.length)
            )
              return ea();
            (e.rechangeUpiShow = !0), (e.C2CQuickList = n.data.suggessList);
          }
        }
      },
      ht = async () => {
        const a = await w(yr({ amount: e.amount }));
        a && (e.C2CQuickList = a.data);
      },
      fa = async () => {
        if (N.value) return vt();
        if (h.value !== 9) {
          let t = e.bankInfo[e.bank_local[1].split(",")[1]];
          if (t && t.length && t.trim().length < 7) {
            U({ message: o("wrongTel"), wordBreak: "break-word" });
            return;
          }
        }
        if (J.value) {
          for (let t in e.bankInfo)
            if (!e.bankInfo[t]) {
              U(o("rechargeBankTip"));
              return;
            }
        }
        if (((e.rechargeDialogVisible = !1), await ha())) {
          let t = ye.value[e.currentMenu].payTypeID;
          h.value === 18 && (t = De()),
            g.push({
              name: "RechargeDetail",
              query: { currentPayId: h.value, payTypeId: t, amount: e.amount },
            });
        }
      },
      vt = async () => {
        if (Object.keys(e.bankInfo).length < 2) {
          U(o("requiredFaild"));
          return;
        }
        for (let n in e.bankInfo)
          if (!e.bankInfo[n]) {
            U(o("rechargeBankTip"));
            return;
          }
        e.rechargeDialogVisible = !1;
        let a = ye.value[e.currentMenu].payTypeID;
        (await _t()) &&
          g.push({
            name: "RechargeDetail",
            query: { currentPayId: h.value, payTypeId: a, amount: e.amount },
          });
      },
      kt = async (a) => {
        const t = await w(fr({ orderId: a }));
        t && (e.C2COrderInfo = t.data);
      },
      It = async () => {
        var t;
        const a = await w(mr());
        a
          ? a.data &&
            (t = a.data) != null &&
            t.orderNo &&
            ((e.isC2COrder = !0),
            Ae(a.data.serviceTime, a.data.endTime, () => {
              (e.C2COrderInfo = void 0), (e.isC2COrder = !1);
            }),
            (e.C2COrderInfo = a.data))
          : ((e.C2COrderInfo = void 0), (e.isC2COrder = !1));
      },
      Fe = async (a) => {
        var n;
        const t = await w(gr({ payTypeId: a }));
        t &&
          ((e.orderDetail = t.data),
          t.data && (n = t.data) != null && n.orderNumber
            ? ((e.bankUTR = t.data.refNo),
              (e.isBankOrder = !0),
              Ae(t.data.serverTime, t.data.addTime1, () => {
                (e.bankOrderInfo = void 0), (e.isBankOrder = !1);
              }),
              (e.bankOrderInfo = t.data))
            : ((e.bankOrderInfo = void 0), (e.isBankOrder = !1)));
      },
      ma = async () => {
        const a = await w(hr({ type: 82 }));
        a &&
          (a.data && a.data.orderNumber
            ? ((e.localUpiUTR = a.data.transferUTR),
              (e.isUpiOrder = !0),
              Ae(a.data.serverTime, a.data.addTime1, () => {
                (e.upiOrderInfo = void 0), (e.isUpiOrder = !1);
              }),
              (e.upiOrderInfo = a.data))
            : ((e.upiOrderInfo = void 0), (e.isUpiOrder = !1)));
      },
      Tt = async () => {
        const a = await he(),
          t = await w(Ur({ amount: e.amount, deviceType: a }));
        t && (e.CreateUpiOrderRep = t.data);
      },
      wt = async (a, t, n) => {
        var s;
        if (a === "upi") {
          let p = {
            type: 1,
            tranrefId: e.localUpiUTR,
            orderNo: t + "",
            isBankQRCodeOrder: N.value,
            certificates: n,
          };
          (await w(Ra(p))) &&
            (f.emit("changeKeepAliveKey"),
            g.replace({ name: "RechargeHistory" }));
        } else
          (await w(
            vr({ orderId: t, transactionNo: e.localUpiUTR, ossUrls: n })
          )) &&
            g.replace({
              name: "RechargeHistory-RechargeUpiDetail",
              query: {
                orderNo: (s = e.C2COrderInfo) == null ? void 0 : s.id,
                state: 1,
              },
            });
      },
      ga = async () => {
        var t;
        const a = await w(kr({ type: 3 }));
        a &&
          (a.data && (t = a.data) != null && t.orderNumber
            ? ((e.isUsdtOrder = !0),
              (e.isBankOrder = !1),
              Ae(a.data.serverTime, a.data.addTime1, () => {
                (e.usdtOrderInfo = void 0), (e.isUsdtOrder = !1);
              }),
              (e.usdtOrderInfo = a.data))
            : ((e.usdtOrderInfo = void 0),
              (e.isUsdtOrder = !1),
              (e.isBankOrder = !1)));
      },
      bt = async (a) => {
        (await w(Ir(a))) &&
          (me(o("success")),
          f.emit("changeKeepAliveKey"),
          g.replace({ name: "RechargeHistory" }));
      },
      ha = async () => {
        let a = ye.value[e.currentMenu].payTypeID;
        h.value === 18 && (a = De());
        const t = await he();
        let n = {
          payTypeId: a,
          amount: e.amount,
          bankName: re.value,
          transferType: be.value[e.currentBankIndex].transferType,
          deviceType: t,
          ...e.bankInfo,
        };
        oe.value || delete n.bankName;
        const s = await w(Tr(n));
        return s != null && s.data
          ? ((e.orderDetail = s.data), (e.bankUTR = s.data.refNo), !0)
          : !1;
      },
      _t = async () => {
        const a = await he();
        let t = {
          payTypeId: h.value,
          amount: e.amount || 0,
          bankName: re.value,
          deviceType: a,
          ...e.bankInfo,
        };
        const n = await w(wr(t));
        return n != null && n.data
          ? ((e.orderDetail = n.data), (e.bankUTR = n.data.refNo), !0)
          : !1;
      },
      Ae = (a, t, n) => {
        clearInterval(Be.value), (Be.value = void 0);
        let s = va(a, t);
        Be.value = setInterval(() => {
          var P;
          if (((s -= 1e3), s < 0)) {
            clearInterval(Be.value), n();
            return;
          }
          const p = Ma(s, "mm:ss"),
            l = (P = sa.value) == null ? void 0 : P.querySelectorAll("span");
          l == null ||
            l.forEach((C, A) => {
              C.innerHTML = p[A];
            });
        }, 1e3);
      },
      Ot = async (a) => {
        var n, s;
        if (h.value === 99) return;
        const t = await w(br({ rechargeNumber: a }));
        if (((n = t.data) == null ? void 0 : n.state) !== 0) {
          La(
            ((s = t.data) == null ? void 0 : s.state) === 1
              ? o("orderpay")
              : o("ordercancle")
          ),
            sessionStorage.removeItem("localOrder"),
            g.go(-1);
          return;
        }
      },
      Rt = async () => {
        var t;
        if ((ge().getDollarSign === "₹" && h.value === 9) || N.value) {
          let n = {
            type: 1,
            tranrefId: e.bankUTR,
            orderNo: (t = e.orderDetail) == null ? void 0 : t.orderNumber,
            isBankQRCodeOrder: N.value,
          };
          const s = await w(Ra(n));
          if (s.code === 0) me(o("success"));
          else {
            me(s.msg);
            return;
          }
        }
        f.emit("changeKeepAliveKey"), g.replace({ name: "RechargeHistory" });
      },
      Pt = async (a, t) => {
        (await w(_r({ orderNo: a }))) &&
          ((e.isBankOrder = !1),
          (ae.value = !1),
          (F.value = !1),
          me(o("cancelSucceed")),
          f.emit("changeKeepAliveKey"),
          g.back());
      },
      va = (a, t) => {
        let n = new Date(a);
        return new Date(t).getTime() - n.getTime();
      },
      Ct = () => {
        (e.rechargeSubmitBtnStatus = !1),
          (e.amount = void 0),
          (e.numberPayAmount = void 0),
          (e.numberExchangeRate = void 0),
          (e.currentQuickIndex = -1),
          (e.validateAmount = ""),
          (le.value = 2);
      },
      Ut = async () => {
        let a = {
          pageNo: 1,
          pageSize: 5,
          startDate: "",
          endDate: "",
          state: -1,
          type: -1,
          payId: e.currentPayId,
          category: e.currentPayId,
        };
        c.value
          ? ((a.type = -1), delete a.payId)
          : (delete a.category,
            delete a.type,
            (a.payTypeId = e.currentPayType.payTypeID || -1));
        const t = await w(c.value ? Or(a) : Rr(a));
        t && (Pe.value = t.data.list);
      },
      St = (a, t, n) => {
        if (
          (t !== 0 &&
            h.value !== 9 &&
            (a.replace(/\D/g, ""), (e.bankInfo[n] = a.replace(/\D/g, ""))),
          t === 0)
        ) {
          const s = localStorage.getItem("language"),
            p = e.bank_local[0].split(",")[1];
          let l = e.bankInfo[p];
          s !== "vi" && (l = l.replace(/\s*/g, "")), (e.bankInfo[p] = l);
        }
      },
      Dt = (a) => {
        if (
          ((e.currentBankIndex = a), e.currentPayId === 18 && e.bankList.length)
        ) {
          let t =
              d.value === "৳" ? pe.value[a].bankName : e.bankList[a].bankName,
            n = e.rechargeTypes.find((s) => s.paySysName === t);
          (e.bank_local = (n == null ? void 0 : n.parameters.split("|")) || []),
            e.bank_local.map((s) => {
              let p = s.split(",")[1];
              e.bankInfo[p] = e.bankList[e.currentBankIndex][p];
            }),
            (e.quickList = n.quickConfigList);
        }
        e.currentPayId === 18 && Fe(De());
      },
      Ve = () => {
        var a;
        (e.rechargeSubmitBtnStatus = !1),
          (e.amount = void 0),
          (e.numberPayAmount = void 0),
          (e.numberExchangeRate = void 0),
          (e.validateAmount = ""),
          (e.currentQuickIndex = -1),
          N.value && ((a = e.bankList) == null ? void 0 : a.length) > 1
            ? (e.currentBankIndex = ka())
            : (e.currentBankIndex = 0),
          (e.localUpiUTR = ""),
          (e.bankUTR = "");
      },
      At = (a) => {
        clearTimeout(a.target.timer),
          (a.target.timer = setTimeout(() => {
            if (
              ((e.validateAmount = ""), (e.currentQuickIndex = -1), B.value)
            ) {
              Ze() &&
                (e.numberExchangeRate = e.numberPayAmount
                  ? e.numberPayAmount * Je.value
                  : 0);
              return;
            }
            Ye(), (le.value = 2);
          }, 500));
      },
      Bt = (a) =>
        a >= 1e6
          ? (a / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
          : a >= 1e3
          ? (a / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
          : a + "",
      Nt = async () => await navigator.clipboard.readText(),
      $t = async (a) => {
        var t = document.getElementById(a);
        (await Ht(() => import("./chunk.html2-e0a7d97b.js"), []))(t, {
          useCORS: !0,
          x: 0,
          y: 0,
          width: t.offsetWidth,
          height: t.offsetHeight,
        }).then((s) => {
          s.toDataURL("image/jpeg");
          const p = document.createElement("a");
          (p.href = s.toDataURL("image/jpeg")),
            (p.download = "qrcode.jpeg"),
            document.body.appendChild(p),
            p.click();
        });
      },
      Lt = async (a) => {
        try {
          return Qt.toDataURL(a);
        } catch {}
      },
      qt = () => {
        (e.isBankOrder = !1),
          (e.isUsdtOrder = !1),
          (e.localUpiUTR = ""),
          (e.bankUTR = "");
      },
      ka = () => Math.floor(Math.random() * e.bankList.length),
      xt = ({ selectedOptions: a }) => {
        (Le.value = !1), (e.selectOtherBank = a[0]);
      },
      Et = (a, t) => {
        let n = new Date(a.replace(/-/g, "/")).getTime(),
          s = new Date(t.replace(/-/g, "/")).getTime();
        n - s <= 0 && (xe.value = !0);
      };
    return (
      Ia(
        () => k.value,
        () => {
          Ve();
        }
      ),
      $a(() => {
        clearInterval(Be.value);
      }),
      Ia([() => e.amount, () => e.numberPayAmount], () => {
        if (!e.amount && !e.numberPayAmount) {
          e.rechargeSubmitBtnStatus = !1;
          return;
        }
        if (B.value && e.numberPayAmount) {
          e.rechargeSubmitBtnStatus = Ze();
          return;
        }
        if (!B.value) {
          e.rechargeSubmitBtnStatus = Ye() && e.rechargeTypes.length > 0;
          return;
        }
        e.payTypeLoading && (e.rechargeSubmitBtnStatus = !1),
          (e.rechargeSubmitBtnStatus = !1);
      }),
      {
        store: e,
        confirmOtherSelectBank: xt,
        showOtherSelect: Le,
        getRechargeTypeName: ja,
        handleChangeMenu: la,
        getRechargeTypes: ca,
        restAmount: Ve,
        handleInput: At,
        formatNum: Bt,
        handleRecharge: rt,
        handleQuickSelect: tt,
        isHaveOrder: Fa,
        currentPayId: h,
        numberKeyObj: we,
        isC2CRecharge: c,
        isArpay: x,
        isLocakBank: Z,
        isNumberPay: B,
        getC2CunitAmount: de,
        usdtRate: I,
        trxRate: ee,
        currentBankName: re,
        currentPayTypeId: k,
        placeholder: za,
        showArupiAmount: Ge,
        arupiAmountList: Me,
        arupiAmount: He,
        cancelOrder: Ie,
        amountType: le,
        handleSelectPayType: at,
        handleClearInput: Ct,
        getPayTabList: ye,
        arPay: Va,
        validateBankForm: St,
        localBankRecharge: fa,
        submitUsdtRecharge: ft,
        getUsdtOrderInfo: ga,
        getLocalUsdtInfo: Xa,
        handlePaste: Nt,
        createLocalBankOrder: ha,
        getLoclBankOrderDetail: Ot,
        handeCancelOrder: Pt,
        getAmountList: ht,
        cancelOrderShow: F,
        rechargeActionSheetShow: ae,
        handleFinishOrder: Rt,
        countdownTimeFun: Ae,
        countdownRef: sa,
        setCountdownRef: Te,
        getBankOrderInfo: Fe,
        getUpiOrderInfo: ma,
        handleFinishUpiOrder: wt,
        getRechargeTab: Se,
        historyToDetail: dt,
        getC2COrderInfo: It,
        otherRecharge: ea,
        getRecordList: Ut,
        htmlToImage: $t,
        createQrCode: Lt,
        C2CRecharge: gt,
        onJumpArUpi: _e,
        getTransferBankList: pe,
        transfer: Ua,
        isFirstPixRecharge: Sa,
        isSplitLocalEWallet: Qe,
        RechargeRList: Pe,
        handleSelectBank: Dt,
        getElwallett: De,
        IsShowRechargeBankList: oe,
        handleUpdateUsdtOrder: bt,
        getOrderDetail: kt,
        onCancelRechargeOrder: it,
        isOtherRecharge: te,
        currentOtherThirdBankList: Ue,
        C2CforbiddenShow: ke,
        ErrorCount: ne,
        RemainingLimitTime: qe,
        C2COrderTimeOutStatus: xe,
        C2CTimeOut: Et,
        thirdRechargeDialog: ze,
        thirdRechargeUrl: je,
        getDownTime: va,
        currentBankList: be,
        userInfo: S,
        showAmountError: u,
        needPixInfo: Da,
        rnsPay: Ka,
        isRsnpay: z,
        arUpiPay: Wa,
        goToOrderAppeal: ot,
        goArapiPayToOrderDetail: ct,
        gotoBanklist: lt,
        stratPollingQuick: ut,
        isArUpiPay: Q,
        recordRef: ue,
        reasonList: G,
        from: se,
        getCancellationReasonList: st,
      }
    );
  },
  Qa = (o) => (qa("data-v-7cba6004"), (o = o()), xa(), o),
  $r = { class: "Recharge__container-intro" },
  Lr = { key: 0, class: "Recharge__container-intro__title" },
  qr = { class: "img" },
  xr = { class: "Recharge__container-intro__lists" },
  Er = { key: 0, class: "item" },
  Gr = ["innerHTML"],
  Mr = { class: "red" },
  Hr = { class: "red" },
  Qr = { class: "red" },
  Fr = { key: 1, class: "item" },
  Vr = { key: 0 },
  Kr = { class: "red" },
  Wr = ["innerHTML"],
  Xr = { key: 2, class: "item" },
  zr = Qa(() =>
    r("p", null, "*Số tiền nạp phải là bội số nguyên của 1000", -1)
  ),
  jr = Qa(() =>
    r(
      "p",
      null,
      " Lưu ý: nếu tạo lệnh nạp sai với mệnh giá thấp hơn thẻ cào thì hệ thống sẽ tự động cộng vào số tiền mà quý khách đã tạo lệnh,chúng tôi không có trách nhiệm bổ sung số tiền chênh lệch.Xin cảm ơn! ",
      -1
    )
  ),
  Jr = { key: 3, class: "item" },
  Zr = { key: 0 },
  Yr = { key: 4, class: "item" },
  en = { key: 5, class: "item" },
  an = { key: 6, class: "item" },
  tn = { key: 7, class: "item" },
  rn = ia({
    __name: "Instructions",
    props: {
      withdrawalsrule: { type: null, required: !1 },
      showType: { type: Number, required: !1, default: 0 },
      withdrawMoney: { type: Number, required: !1, default: 0 },
      withdrawType: { type: Number, required: !1, default: -1 },
      isShowHead: { type: Boolean, required: !1, default: !1 },
      rechargeInfo: { type: null, required: !1 },
    },
    setup(o) {
      const f = o,
        { store: q } = Ha(),
        X = {}.VITE_BASE_VIR,
        H = v(() =>
          f.showType === 9 || f.showType === 18 || f.showType === 10
            ? "bank"
            : f.showType === 20
            ? "c2c"
            : f.showType === 12
            ? "upi"
            : f.showType === 6 && X
            ? "exclusive"
            : f.showType === 11 || f.showType === 16 || f.showType === 19
            ? "numberCurrency"
            : f.showType === 771
            ? "c2cDetail"
            : f.withdrawType !== -1
            ? ""
            : "bank"
        );
      return (c, x) => {
        var Q, j, E, S, I, ee, J, oe, B, g, ae, F, ue;
        const z = ve("svg-icon");
        return (
          b(),
          R("div", $r, [
            c.isShowHead
              ? (b(),
                R("div", Lr, [
                  r("div", qr, [K(z, { name: "shuoming" })]),
                  r("p", null, i(c.$t("rechargeInstruction")), 1),
                ]))
              : O("v-if", !0),
            r("div", xr, [
              [1, 3, 6].includes(c.withdrawType)
                ? (b(),
                  R("div", Er, [
                    r(
                      "p",
                      {
                        innerHTML: c.$t("instructionDes", [
                          _(ie)(
                            (Q = c.withdrawalsrule) == null
                              ? void 0
                              : Q.amountofCode
                          ),
                        ]),
                      },
                      null,
                      8,
                      Gr
                    ),
                    r("p", null, [
                      W(i(c.$t("instructionTxt6")) + " ", 1),
                      r(
                        "span",
                        Mr,
                        i(
                          (j = c.withdrawalsrule) == null ? void 0 : j.startTime
                        ) +
                          "-" +
                          i(
                            (E = c.withdrawalsrule) == null ? void 0 : E.endTime
                          ),
                        1
                      ),
                    ]),
                    r("p", null, [
                      W(i(c.$t("instructionTxt7")), 1),
                      r(
                        "span",
                        Hr,
                        i(
                          (S = c.withdrawalsrule) == null
                            ? void 0
                            : S.withdrawRemainingCount
                        ),
                        1
                      ),
                    ]),
                    r("p", null, [
                      W(i(c.$t("instructionTxt8")), 1),
                      r(
                        "span",
                        Qr,
                        i(
                          _(ie)(
                            (I = c.withdrawalsrule) == null
                              ? void 0
                              : I.minPrice
                          )
                        ) +
                          "-" +
                          i(
                            _(ie)(
                              (ee = c.withdrawalsrule) == null
                                ? void 0
                                : ee.maxPrice
                            )
                          ),
                        1
                      ),
                    ]),
                  ]))
                : O("v-if", !0),
              O(" c2c "),
              H.value === "c2c"
                ? (b(),
                  R("div", Fr, [
                    r(
                      "p",
                      null,
                      i(
                        c.$t("c2cMBAInteger", [
                          (J = c.rechargeInfo) == null
                            ? void 0
                            : J.c2cUnitAmount,
                        ])
                      ),
                      1
                    ),
                    ((oe = c.rechargeInfo) == null
                      ? void 0
                      : oe.rechargeRifts) > 0
                      ? (b(),
                        R(
                          "p",
                          Vr,
                          i(
                            c.$t("c2cNEWUPIW", [
                              _(Dr)(
                                (B = c.rechargeInfo) == null
                                  ? void 0
                                  : B.rechargeRifts,
                                100
                              ),
                            ])
                          ),
                          1
                        ))
                      : O("v-if", !0),
                    r("p", null, [
                      W(i(c.$t("c2cTUAR")), 1),
                      r(
                        "span",
                        Kr,
                        i(
                          _(ie)(
                            (g = c.rechargeInfo) == null ? void 0 : g.miniPrice
                          )
                        ) +
                          "-" +
                          i(
                            _(ie)(
                              (ae = c.rechargeInfo) == null
                                ? void 0
                                : ae.maxPrice
                            )
                          ),
                        1
                      ),
                    ]),
                    r(
                      "p",
                      { innerHTML: c.$t("c2cInstructions1") },
                      null,
                      8,
                      Wr
                    ),
                  ]))
                : O("v-if", !0),
              O(" 专属 "),
              H.value === "exclusive"
                ? (b(),
                  R("div", Xr, [
                    r(
                      "p",
                      null,
                      "Số tiền nhận được：" +
                        i((_(q).amount || 0) * Number(_(X))),
                      1
                    ),
                    r("p", null, "Phí: " + i((1 - _(X)) * 100) + "%", 1),
                    zr,
                    jr,
                  ]))
                : O("v-if", !0),
              O(" 一般三方和本地银行充值 "),
              H.value === "bank"
                ? (b(),
                  R("div", Jr, [
                    r("p", null, i(c.$t("instructionTxt2")), 1),
                    r("p", null, i(c.$t("instructionTxt3")), 1),
                    r("p", null, i(c.$t("instructionTxt4")), 1),
                    c.showType === 18
                      ? (b(), R("p", Zr, i(c.$t("rechargeBankDetailTip")), 1))
                      : O("v-if", !0),
                    r("p", null, i(c.$t("instructionTxt5")), 1),
                  ]))
                : O("v-if", !0),
              H.value === "c2cDetail"
                ? (b(),
                  R("div", Yr, [
                    O(" <p>{{ $t('c2cInstructions2') }}</p> "),
                    r("p", null, i(c.$t("c2cInstructions3")), 1),
                  ]))
                : O("v-if", !0),
              H.value === "numberCurrency"
                ? (b(),
                  R("div", en, [
                    r(
                      "p",
                      null,
                      i(
                        c.$t("instructionsDesc1", [
                          (((F = c.rechargeInfo) == null
                            ? void 0
                            : F.miniPrice) || 1) +
                            (c.showType === 16 ? "TRX" : "USDT"),
                          (((ue = c.rechargeInfo) == null
                            ? void 0
                            : ue.miniPrice) || 1) +
                            (c.showType === 16 ? "TRX" : "USDT"),
                        ])
                      ),
                      1
                    ),
                    r("p", null, i(c.$t("instructionsDesc2")), 1),
                    r("p", null, i(c.$t("instructionsDesc3")), 1),
                    r("p", null, i(c.$t("instructionsDesc4")), 1),
                    r("p", null, i(c.$t("instructionsDesc5")), 1),
                  ]))
                : O("v-if", !0),
              H.value === "upi"
                ? (b(),
                  R("div", an, [
                    r("p", null, i(c.$t("upiInstructions1")), 1),
                    r("p", null, i(c.$t("upiInstructions2")), 1),
                  ]))
                : O("v-if", !0),
              c.withdrawType === 3
                ? (b(),
                  R("div", tn, [
                    O(" <p>{{ $t('instructionTxt9') }}</p> "),
                    r("p", null, i(c.$t("instructionTxt10")), 1),
                    r("p", null, i(c.$t("instructionTxt11")), 1),
                  ]))
                : O("v-if", !0),
            ]),
          ])
        );
      };
    },
  });
const nn = oa(rn, [
    ["__scopeId", "data-v-7cba6004"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/Wallet/Recharge/Instructions.vue",
    ],
  ]),
  sn = { class: "pay_state_step" },
  on = ["src"],
  ln = ia({
    __name: "PayState",
    props: {
      state: { type: Number, default: 1 },
      type: { type: Number, default: 1 },
    },
    setup(o) {
      const f = o,
        { t: q } = Ba(),
        X = v(() =>
          f.type === 1
            ? [
                { img: D("wallet/recharge", "setup1"), title: q("transfer") },
                {
                  img:
                    f.state >= 2
                      ? D("wallet/recharge", "setup2_active")
                      : D("wallet/recharge", "setup2"),
                  title: q("uploadproof"),
                },
                {
                  img:
                    f.state >= 3
                      ? D("wallet/recharge", "setup3_active")
                      : D("wallet/recharge", "setup3"),
                  title: q("waitConfirm"),
                },
                {
                  img:
                    f.state === 4
                      ? D("wallet/recharge", "setup4_active")
                      : D("wallet/recharge", "setup4"),
                  title: q("completed"),
                },
              ]
            : [
                {
                  img: D("wallet/recharge", "appeal_state"),
                  title: q("c2cTip32"),
                },
                {
                  img:
                    f.state >= 3
                      ? D("wallet/recharge", "setup3_active")
                      : D("wallet/recharge", "setup3"),
                  title: q("amountError2"),
                },
                {
                  img:
                    f.state === 4
                      ? D("wallet/recharge", "setup4_active")
                      : D("wallet/recharge", "setup4"),
                  title: q("completed"),
                },
              ]
        );
      return (H, c) => (
        b(),
        R("div", sn, [
          (b(!0),
          R(
            Ea,
            null,
            Ga(
              X.value,
              (x, z) => (
                b(),
                R(
                  "div",
                  { class: Xe(["item", { appeal: o.type === 2 }]), key: z },
                  [
                    r("img", { src: x.img, alt: "" }, null, 8, on),
                    r("span", null, i(x.title), 1),
                  ],
                  2
                )
              )
            ),
            128
          )),
        ])
      );
    },
  });
const cn = oa(ln, [
    ["__scopeId", "data-v-d8d9a23f"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/OtherPay/components/PayState.vue",
    ],
  ]),
  Y = (o) => (qa("data-v-5bada7e8"), (o = o()), xa(), o),
  un = { class: "other_pay" },
  dn = { key: 0, class: "pay_store" },
  pn = ["onClick"],
  yn = ["src"],
  fn = Y(() =>
    r(
      "div",
      { class: "tip" },
      [
        r("div", null, "have you paid successfully?"),
        r("div", null, "Paytm,PhonePe,GooglePay,Other Bank"),
      ],
      -1
    )
  ),
  mn = { class: "orderInfo" },
  gn = { key: 0, class: "info_item" },
  hn = { class: "info_item" },
  vn = Y(() => r("span", null, "UPI ID", -1)),
  kn = { key: 1, class: "info_item" },
  In = Y(() => r("span", null, "UTR", -1)),
  Tn = { class: "info_item" },
  wn = { key: 2 },
  bn = ["src"],
  _n = { key: 3 },
  On = Y(() => r("div", { class: "UTR_title" }, "UTR(UPI Ref.ID)", -1)),
  Rn = { class: "c2cupload_box" },
  Pn = { class: "c2cupload_tip" },
  Cn = ["src"],
  Un = { class: "upload_action" },
  Sn = { class: "upload_btn" },
  Dn = { class: "upload_text" },
  An = Y(() => r("br", null, null, -1)),
  Bn = { key: 2, class: "pay_btn" },
  Nn = { key: 3, class: "c2c_btn" },
  $n = { class: "actionSheet__content" },
  Ln = { class: "title" },
  qn = ["src"],
  xn = { class: "sheet_info" },
  En = { class: "info_item sheet_item" },
  Gn = Y(() => r("span", null, "UPI ID", -1)),
  Mn = { class: "sheet_right" },
  Hn = { class: "info_item sheet_item" },
  Qn = Y(() => r("span", null, "UTR", -1)),
  Fn = { class: "sheet_right" },
  Vn = { class: "info_item sheet_item" },
  Kn = { class: "sheet_amount" },
  Wn = { class: "finish_tit" },
  Xn = { class: "finish_tip" },
  zn = { class: "pay_btn" },
  jn = { class: "c2c_actiosheet" },
  Jn = ["src"],
  Zn = Y(() =>
    r(
      "div",
      { class: "text" },
      [
        W("*Confirm using "),
        r("span", null, "your own UPI"),
        W(" for the transfer"),
      ],
      -1
    )
  ),
  Yn = Y(() =>
    r(
      "div",
      { class: "text" },
      [
        W(" *After a successful transfer, return here and provide the "),
        r("span", null, "12-digit Ref/UTR No"),
        W(". for the deposit into your account. "),
      ],
      -1
    )
  ),
  es = Y(() => r("div", { class: "video_text" }, "DEMO VIDEO >>", -1)),
  as = Y(() => r("div", { class: "text2" }, "Sample of UTR(UPI Ref.ID)", -1)),
  ts = { class: "img_box" },
  rs = ["src"],
  ns = { class: "close_box" },
  ss = ia({
    __name: "index",
    setup(o) {
      const {
          store: f,
          getUpiOrderInfo: q,
          handleFinishUpiOrder: X,
          getC2COrderInfo: H,
          handeCancelOrder: c,
          createQrCode: x,
          htmlToImage: z,
          getDownTime: Q,
          C2COrderTimeOutStatus: j,
        } = Ha(),
        E = Na(),
        S = m(!1),
        I = m(),
        ee = m(!1),
        J = m(),
        oe = m(""),
        B = m(!1),
        g = m(1),
        ae = m([]),
        F = m(""),
        ue = m(),
        Pe = m(""),
        Le = [
          {
            name: "Paytm",
            icon: D("wallet/recharge", "paytm"),
            id: 1,
            url: "paytmmp://upi",
          },
          {
            name: "PhonePe",
            icon: D("wallet/recharge", "phone_pe"),
            id: 2,
            url: "phonepe://pay",
          },
          {
            name: "GooglePay",
            icon: D("wallet/recharge", "google_pay"),
            id: 3,
            url: "gpay://upi",
          },
          {
            name: "Other Bank",
            icon: D("wallet/recharge", "other_bank"),
            id: 4,
            url: "upi://pay",
          },
        ],
        ke = m({ fileType: 1, fileUrl: "" }),
        ne = v(() => E.currentRoute.value.query.type === "C2C"),
        qe = (d) => {
          window.open(d, "_blank");
        };
      v(() =>
        g.value === 2
          ? $e("common", "upload_icon")
          : g.value === 3
          ? D("common", "switch")
          : $e("common", "upload_icon")
      );
      const xe = async (d) => {
          ae.value = [];
          const u = new FormData();
          u.append("files", d.file);
          const G = await w(Ar(u));
          (F.value = G.data[0].ossHttp + "/" + G.data[0].src),
            (ke.value.fileUrl = G.data[0].src);
        },
        ze = () => {
          (j.value = !1), E.back();
        },
        je = () => {
          S.value = !1;
        },
        Ee = () => {
          f.localUpiUTR.length < 12 || (S.value = !0);
        },
        Ge = () => {
          E.back();
        },
        Me = v(() => E.currentRoute.value.query.type),
        He = () => {
          if (ne.value && g.value === 1) {
            if (f.localUpiUTR.length < 12) return;
            g.value = 2;
          } else Ee();
        },
        le = async (d) => {
          if (f.localUpiUTR.length !== 12) {
            ee.value = !0;
            return;
          }
          await X(E.currentRoute.value.query.type, d, ke.value.fileUrl),
            (S.value = !1);
        },
        Ie = () => {
          var d, u;
          E.currentRoute.value.query.type === "upi"
            ? c(((d = I.value) == null ? void 0 : d.orderNumber) + "")
            : E.push({
                name: "CancelRecharge",
                query: { orderNo: (u = I.value) == null ? void 0 : u.id },
              });
        },
        Ce = async () => {
          if (
            (await H(),
            (I.value = f.C2COrderInfo),
            (f.isC2COrder = !1),
            !I.value)
          ) {
            (j.value = !0), clearInterval(J.value);
            return;
          }
          let d = Q(I.value.serviceTime, I.value.endTime);
          J.value = setInterval(() => {
            (d -= 1e3),
              d < 0 && ((j.value = !0), clearInterval(J.value)),
              (oe.value = Ma(d, "mm:ss"));
          }, 1e3);
        };
      return (
        Ft(async () => {
          var se, Te, we, de;
          let d = E.currentRoute.value.query.type;
          J.value = null;
          let u = "";
          d === "upi"
            ? (await q(),
              (I.value = f.upiOrderInfo),
              (u =
                "upi://pay?pa=" +
                ((se = I.value) == null ? void 0 : se.upiAccount) +
                "&am=" +
                ((Te = I.value) == null ? void 0 : Te.amount) +
                "&cu=INR"))
            : ((B.value = !0),
              await Ce(),
              (u =
                "upi://pay?pa=" +
                ((we = I.value) == null ? void 0 : we.sellerAccountNo) +
                "&am=" +
                ((de = I.value) == null ? void 0 : de.orderAmount) +
                "&cu=INR"));
          const G = await x(u);
          (Pe.value = G), x(u);
        }),
        $a(() => {
          clearInterval(J.value);
        }),
        Vt(() => {
          sessionStorage.removeItem("upiOrderInfo"), clearInterval(J.value);
        }),
        (d, u) => {
          var ce, h, Z, N;
          const G = ve("NavBar"),
            se = ve("svg-icon"),
            Te = ve("van-field"),
            we = ve("van-uploader"),
            de = ve("van-divider"),
            pe = ve("van-action-sheet");
          return (
            b(),
            R("div", un, [
              K(
                G,
                {
                  class: "white",
                  title: d.$t("payments"),
                  "left-arrow": "",
                  onClickLeft: Ge,
                },
                null,
                8,
                ["title"]
              ),
              ne.value
                ? (b(), ba(cn, { key: 1, state: g.value }, null, 8, ["state"]))
                : (b(),
                  R("div", dn, [
                    (b(),
                    R(
                      Ea,
                      null,
                      Ga(Le, (k) =>
                        r(
                          "div",
                          {
                            class: "store_item",
                            key: k.id,
                            onClick: (te) => qe(k.url),
                          },
                          [
                            r("img", { src: k.icon, alt: "" }, null, 8, yn),
                            r("span", null, i(k.name), 1),
                          ],
                          8,
                          pn
                        )
                      ),
                      64
                    )),
                  ])),
              fn,
              r("div", mn, [
                ne.value
                  ? (b(),
                    R("div", gn, [
                      r("span", null, i(d.$t("expiredTimes")), 1),
                      r("div", null, i(oe.value), 1),
                    ]))
                  : O("v-if", !0),
                r("div", hn, [
                  vn,
                  r("div", null, [
                    r(
                      "span",
                      null,
                      i(
                        ((ce = I.value) == null ? void 0 : ce.upiAccount) ||
                          ((h = I.value) == null
                            ? void 0
                            : h.sellerAccountNo) ||
                          "--"
                      ),
                      1
                    ),
                    K(se, {
                      name: "copy",
                      onClick:
                        u[0] ||
                        (u[0] = (k) => {
                          var te, re;
                          return _(Pa)(
                            ((te = I.value) == null
                              ? void 0
                              : te.sellerAccountNo) ||
                              ((re = I.value) == null ? void 0 : re.upiAccount)
                          );
                        }),
                    }),
                  ]),
                ]),
                g.value !== 1
                  ? (b(),
                    R("div", kn, [
                      In,
                      r("div", null, [r("span", null, i(_(f).localUpiUTR), 1)]),
                    ]))
                  : O("v-if", !0),
                r("div", Tn, [
                  r("span", null, i(d.$t("amount")), 1),
                  r(
                    "div",
                    null,
                    i(
                      _(ie)((Z = I.value) == null ? void 0 : Z.orderAmount) ||
                        ((N = I.value) == null ? void 0 : N.amount) ||
                        "--"
                    ),
                    1
                  ),
                ]),
                g.value === 1 || !ne.value
                  ? (b(),
                    R("div", wn, [
                      r(
                        "img",
                        { class: "qrcode", src: Pe.value, id: "qrcode" },
                        null,
                        8,
                        bn
                      ),
                      r(
                        "div",
                        {
                          class: "save_qrcode",
                          onClick: u[1] || (u[1] = (k) => _(z)("qrcode")),
                        },
                        i(d.$t("saveTheQRCode")),
                        1
                      ),
                    ]))
                  : O("v-if", !0),
                O(` <img class="qrcode" :src="codeUrl" id="qrcode" />
			<div class="save_qrcode" @click="htmlToImage('qrcode')">{{ $t('saveTheQRCode') }}</div> `),
                g.value === 1
                  ? (b(),
                    R("div", _n, [
                      On,
                      K(
                        Te,
                        {
                          modelValue: _(f).localUpiUTR,
                          "onUpdate:modelValue":
                            u[3] || (u[3] = (k) => (_(f).localUpiUTR = k)),
                          class: "info_item",
                          type: "digit",
                          placeholder: "Please enter a 12-digit UTR",
                          maxlength: 12,
                        },
                        {
                          "right-icon": Oe(() => [
                            K(se, {
                              name: "copy",
                              alt: "",
                              onClick:
                                u[2] || (u[2] = (k) => _(Pa)(_(f).localUpiUTR)),
                            }),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                    ]))
                  : O("v-if", !0),
                g.value === 1
                  ? (b(),
                    ba(
                      nn,
                      { key: 4, showType: ne.value ? 771 : 12, isShowHead: !0 },
                      null,
                      8,
                      ["showType"]
                    ))
                  : O("v-if", !0),
              ]),
              r("div", Rn, [
                r("div", Pn, [
                  r("div", null, i(d.$t("C2Cuploadtip3")), 1),
                  r("div", null, i(d.$t("C2Cuploadtip4")), 1),
                ]),
                r(
                  "div",
                  {
                    class: Xe(["upload_img", { noAdd: !!F.value }]),
                    onClick:
                      u[4] ||
                      (u[4] = () => {
                        ue.value.chooseFile();
                      }),
                  },
                  [
                    F.value
                      ? (b(),
                        R(
                          "img",
                          { key: 0, src: F.value, alt: "" },
                          null,
                          8,
                          Cn
                        ))
                      : O("v-if", !0),
                  ],
                  2
                ),
                r("div", Un, [
                  K(
                    we,
                    {
                      ref_key: "uploadRef",
                      ref: ue,
                      "max-size": 5e3 * 1024,
                      onOversize:
                        u[5] || (u[5] = () => _(La)(d.$t("C2Cuploadtip2"))),
                      modelValue: ae.value,
                      "onUpdate:modelValue":
                        u[6] || (u[6] = (k) => (ae.value = k)),
                      accept: "image/*",
                      "after-read": xe,
                      "preview-image": !1,
                    },
                    {
                      default: Oe(() => [
                        r("div", Sn, [
                          K(se, { name: "uploadIcon" }),
                          O(' <img :src="uploadBtnIcon" /> '),
                          r(
                            "span",
                            null,
                            i(
                              g.value === 2 && ae.value.length === 0
                                ? d.$t("uploadImg")
                                : d.$t("changeImage")
                            ),
                            1
                          ),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"]
                  ),
                  r("div", Dn, [
                    W(i(d.$t("C2Cuploadtip1")), 1),
                    An,
                    W(" " + i(d.$t("C2Cuploadtip2")), 1),
                  ]),
                ]),
              ]),
              g.value === 1
                ? (b(),
                  R("div", Bn, [
                    r(
                      "div",
                      { class: "cancel_order", onClick: Ie },
                      i(d.$t("concelOrder")),
                      1
                    ),
                    r(
                      "div",
                      {
                        class: Xe([
                          "finish",
                          { unfinish: _(f).localUpiUTR.length < 12 },
                        ]),
                        onClick: He,
                      },
                      i(
                        ne.value && g.value === 1
                          ? d.$t("nextStep")
                          : d.$t("rechargeDetailDesc6")
                      ),
                      3
                    ),
                  ]))
                : O("v-if", !0),
              g.value !== 1
                ? (b(),
                  R("div", Nn, [
                    r(
                      "div",
                      {
                        class: Xe(["c2cFinish", { no_finish: !F.value }]),
                        onClick:
                          u[7] ||
                          (u[7] = () => {
                            var k;
                            F.value &&
                              _(X)(
                                "c2c",
                                (k = I.value) == null ? void 0 : k.id,
                                [ke.value]
                              );
                          }),
                      },
                      i(d.$t("rechargeDetailDesc6")),
                      3
                    ),
                    r(
                      "div",
                      {
                        class: "backPay",
                        onClick: u[8] || (u[8] = (k) => (g.value = 1)),
                      },
                      i(d.$t("backPay")),
                      1
                    ),
                  ]))
                : O("v-if", !0),
              K(
                pe,
                {
                  show: S.value,
                  "onUpdate:show": u[11] || (u[11] = (k) => (S.value = k)),
                  onClickOverlay: je,
                },
                {
                  default: Oe(() => {
                    var k, te, re, be;
                    return [
                      r("div", $n, [
                        r("div", Ln, [
                          r(
                            "img",
                            { src: _($e)("wallet", "upi"), alt: "" },
                            null,
                            8,
                            qn
                          ),
                          r(
                            "span",
                            null,
                            i(
                              (Me.value === "upi" ? "Local UPI " : "NEW UPI ") +
                                d.$t("recharge")
                            ),
                            1
                          ),
                        ]),
                        K(de),
                        r("div", xn, [
                          r("div", En, [
                            Gn,
                            r(
                              "div",
                              Mn,
                              i(
                                ((k = I.value) == null
                                  ? void 0
                                  : k.sellerAccountNo) ||
                                  ((te = I.value) == null
                                    ? void 0
                                    : te.upiAccount)
                              ),
                              1
                            ),
                          ]),
                          r("div", Hn, [
                            Qn,
                            r("div", Fn, i(_(f).localUpiUTR), 1),
                          ]),
                          r("div", Vn, [
                            r("span", null, i(d.$t("amount")), 1),
                            r(
                              "div",
                              Kn,
                              i(
                                _(ie)(
                                  ((re = I.value) == null
                                    ? void 0
                                    : re.orderAmount) ||
                                    ((be = I.value) == null
                                      ? void 0
                                      : be.amount)
                                )
                              ),
                              1
                            ),
                          ]),
                        ]),
                        r("div", Wn, i(d.$t("rechargeDetailDesc8")), 1),
                        r("div", Xn, i(d.$t("rechargeDetailDesc11")), 1),
                        r("div", zn, [
                          r(
                            "div",
                            {
                              class: "cancel_order",
                              onClick: u[9] || (u[9] = (Ue) => (S.value = !1)),
                            },
                            i(d.$t("rechargeDetailDesc7")),
                            1
                          ),
                          r(
                            "div",
                            {
                              class: "finish",
                              onClick:
                                u[10] ||
                                (u[10] = (Ue) => {
                                  var Qe, Se;
                                  return le(
                                    ((Qe = I.value) == null ? void 0 : Qe.id) ||
                                      ((Se = I.value) == null
                                        ? void 0
                                        : Se.orderNumber)
                                  );
                                }),
                            },
                            i(d.$t("rechargeDetailDesc8")),
                            1
                          ),
                        ]),
                      ]),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["show"]
              ),
              K(
                pe,
                {
                  title: " ",
                  show: B.value,
                  "onUpdate:show": u[13] || (u[13] = (k) => (B.value = k)),
                  onClickOverlay: u[14] || (u[14] = (k) => (B.value = !1)),
                  closeable: !0,
                },
                {
                  default: Oe(() => [
                    r("div", jn, [
                      r(
                        "img",
                        { src: _(D)("common", "close"), class: "close_img" },
                        null,
                        8,
                        Jn
                      ),
                      Zn,
                      Yn,
                      es,
                      as,
                      r("div", ts, [
                        r(
                          "img",
                          {
                            src: _(D)("wallet/recharge", "C2Chelp"),
                            alt: "",
                            class: "help_img",
                          },
                          null,
                          8,
                          rs
                        ),
                      ]),
                      r("div", ns, [
                        r(
                          "div",
                          {
                            class: "close_btn",
                            onClick: u[12] || (u[12] = (k) => (B.value = !1)),
                          },
                          i(d.$t("close")),
                          1
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show"]
              ),
              K(
                Ca,
                {
                  show: ee.value,
                  "onUpdate:show": u[15] || (u[15] = (k) => (ee.value = k)),
                  showCancelBtn: !1,
                  title: d.$t("UTRError"),
                  "confirm-text": "OK",
                  confirm: (ee.value = !1),
                },
                { content: Oe(() => [W(i(d.$t("c2cTip16")), 1)]), _: 1 },
                8,
                ["show", "title", "confirm"]
              ),
              K(
                Ca,
                {
                  show: _(j),
                  "onUpdate:show":
                    u[16] || (u[16] = (k) => (Kt(j) ? (j.value = k) : null)),
                  showCancelBtn: !1,
                  title: d.$t("C2Ctimeout1"),
                  "confirm-text": "OK",
                  onConfirm: ze,
                },
                { content: Oe(() => [W(i(d.$t("C2Ctimeout2")), 1)]), _: 1 },
                8,
                ["show", "title"]
              ),
            ])
          );
        }
      );
    },
  });
const is = oa(ss, [
    ["__scopeId", "data-v-5bada7e8"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/wallet/OtherPay/index.vue",
    ],
  ]),
  ds = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: is },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { cn as C, nn as I, ds as i, Ha as u };
