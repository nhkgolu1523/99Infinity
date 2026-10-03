import {
  R as I,
  aK as ee,
  G as O,
  z as K,
  r as h,
  A as U,
  w as P,
  B as V,
  H as y,
  I as u,
  Q as d,
  J as e,
  P as t,
  O as i,
  av as L,
  N as m,
  K as x,
  M as z,
  aW as te,
  ao as oe,
  aB as c,
  ax as ae,
  ay as se,
  T as ne,
  C as le,
  aC as ie,
  aD as re,
} from "./common.modules-cecf9b0d.js";
import {
  az as de,
  d as ue,
  L as me,
  cs as ce,
  by as _e,
  _ as G,
  c as j,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { L as ve } from "./page-activity-Bonus-c94a181e.js";
import { S as pe } from "./page-promotion-MyInvitation-87fe6c0d.js";
function fe(C) {
  I();
  const l = (n, r) => {
      de.options.routes.forEach((_) => {
        _.name === n && (_.meta.keepAlive = r);
      });
    },
    g = (n, r) => {
      l(r, C.includes(n));
    };
  return (
    ee((n, r) => {
      g(n.name, r.name);
    }),
    { setKeepPage: g, updateRouterKeepAlive: l }
  );
}
const he = { class: "TeamReport__C" },
  Ce = { class: "TeamReport__C-head" },
  Re = { class: "TeamReport__C-head-fixed" },
  ye = { class: "TeamReport__C-head-line2" },
  ge = { key: 0, class: "default" },
  De = { key: 1 },
  $e = { key: 0, class: "default" },
  be = { key: 1 },
  Te = { class: "TeamReport__C-body" },
  ke = { class: "header-container" },
  we = { class: "num" },
  Se = { class: "num" },
  Ae = { class: "num" },
  Le = { class: "num" },
  Ie = { class: "num" },
  Ne = { class: "num" },
  Ye = { class: "TeamReport__C-body-item-head" },
  Be = { class: "title" },
  Me = { class: "TeamReport__C-body-item-detail" },
  Ue = { class: "TeamReport__C-body-item-detail-lv" },
  Pe = { class: "TeamReport__C-body-item-detail-commission" },
  Ve = { class: "TeamReport__C-body-item-detail-commission" },
  je = { class: "TeamReport__C-body-item-detail-commission" },
  Oe = { class: "TeamReport__C-body-item-detail-time" },
  Ke = O({
    __name: "index",
    setup(C) {
      fe(["TeamReport-TeamReportDetail"]);
      const { t: l } = K(),
        g = I(),
        n = h(),
        r = h([
          { name: l("all"), code: -1 },
          { name: l("teamReportLeval1"), code: 1 },
          { name: l("teamReportLeval2"), code: 2 },
          { name: l("teamReportLeval3"), code: 3 },
          { name: l("teamReportLeval4"), code: 4 },
          { name: l("teamReportLeval5"), code: 5 },
          { name: l("teamReportLeval6"), code: 6 },
        ]),
        _ = { text: "name", value: "code" };
      let v = U({
        betCountSum: 0,
        betAmountSum: 0,
        firstRecahrgeCount: 0,
        firstRecahrgeAmountSum: 0,
        recahrgeCount: 0,
        recahrgeAmountSum: 0,
        rebateAmountSum: 0,
      });
      const R = h(!1),
        p = h(!1),
        { minDate: k, maxDate: N } = ue(-1),
        $ = P(N).startOf("day"),
        f = U({
          lv: r.value[0].code,
          day: $.format("YYYY-MM-DD HH:mm:ss"),
          userId: null,
        }),
        w = h([$.format("YYYY"), $.format("MM"), $.format("DD")]);
      function E() {
        var T;
        const o = i(w),
          [a, A, b] = o;
        (f.userId = D.value ? parseInt(D.value) : null),
          (f.day = _e(a, A, b) + " 00:00:00"),
          (T = n.value) == null || T.resetRefresh(),
          (R.value = !1);
      }
      const D = h("");
      function Q() {
        var o;
        (f.userId = D.value ? parseInt(D.value) : null),
          (o = n.value) == null || o.resetRefresh();
      }
      const q = (o) => {
          v = o.data;
        },
        F = ({ selectedOptions: o }) => {
          var a;
          (f.lv = o[0].code),
            (p.value = !1),
            (a = n.value) == null || a.resetRefresh();
        },
        S = h([]),
        Y = V(() => P(f.day).format("YYYY-MM-DD")),
        B = V(() => {
          const o = r.value.find((a) => a.code === f.lv);
          return o ? o.name : "";
        }),
        J = () => {
          g.go(-1);
        };
      return (o, a) => {
        const A = y("NavBar"),
          b = y("van-icon"),
          T = y("svg-icon"),
          W = y("van-date-picker"),
          M = y("van-popup"),
          X = y("van-picker");
        return (
          m(),
          u("div", he, [
            d(
              A,
              {
                class: "white",
                title: o.$t("subordinateD"),
                "left-arrow": "",
                onClickLeft: J,
              },
              null,
              8,
              ["title"]
            ),
            e("div", Ce, [
              e("div", Re, [
                d(
                  pe,
                  {
                    placeholder: o.$t("searchSubUID"),
                    value: D.value,
                    "onUpdate:value": a[0] || (a[0] = (s) => (D.value = s)),
                    onHandleSearch: Q,
                  },
                  null,
                  8,
                  ["placeholder", "value"]
                ),
                e("div", ye, [
                  e(
                    "div",
                    { onClick: a[1] || (a[1] = (s) => (p.value = !0)) },
                    [
                      B.value
                        ? (m(), u("span", ge, t(B.value), 1))
                        : (m(), u("span", De, t(o.$t("subGrade")), 1)),
                      d(b, { name: "arrow-down" }),
                    ]
                  ),
                  e(
                    "div",
                    { onClick: a[2] || (a[2] = (s) => (R.value = !0)) },
                    [
                      Y.value
                        ? (m(), u("span", $e, t(Y.value), 1))
                        : (m(), u("span", be, t(o.$t("pickDate")), 1)),
                      d(b, { name: "arrow-down" }),
                    ]
                  ),
                ]),
              ]),
            ]),
            e("div", Te, [
              e("div", ke, [
                e("div", null, [
                  e("div", we, t(i(v).recahrgeCount), 1),
                  e("div", null, t(o.$t("rechargeNumber")), 1),
                ]),
                e("div", null, [
                  e("div", Se, t(i(v).recahrgeAmountSum), 1),
                  e("div", null, t(o.$t("rechageAmount")), 1),
                ]),
                e("div", null, [
                  e("div", Ae, t(i(v).betCountSum), 1),
                  e("div", null, t(o.$t("numberbettors")), 1),
                ]),
                e("div", null, [
                  e("div", Le, t(i(v).betAmountSum), 1),
                  e("div", null, t(o.$t("betAmount")), 1),
                ]),
                e("div", null, [
                  e("div", Ie, t(i(v).firstRecahrgeCount), 1),
                  e("div", null, t(o.$t("firstRechargesC")), 1),
                ]),
                e("div", null, [
                  e("div", Ne, t(i(v).firstRecahrgeAmountSum), 1),
                  e("div", null, t(o.$t("firstDepositAmount")), 1),
                ]),
              ]),
              d(
                ve,
                {
                  api: i(ce),
                  list: S.value,
                  "onUpdate:list": a[3] || (a[3] = (s) => (S.value = s)),
                  "page-query": f,
                  "onUpdate:pageQuery": a[4] || (a[4] = (s) => (f = s)),
                  ref_key: "listRef",
                  ref: n,
                  isAutoLoad: !0,
                  onPageChange: q,
                },
                {
                  content: L(() => [
                    (m(!0),
                    u(
                      x,
                      null,
                      z(
                        S.value,
                        (s, Z) => (
                          m(),
                          u(
                            "div",
                            { key: Z, class: "TeamReport__C-body-item" },
                            [
                              e("div", Ye, [
                                e("div", Be, "UID:" + t(s.userID), 1),
                                d(
                                  T,
                                  {
                                    onClick: te(
                                      (tt) => i(me)(s.userID.toString()),
                                      ["stop"]
                                    ),
                                    name: "copy",
                                  },
                                  null,
                                  8,
                                  ["onClick"]
                                ),
                                oe(
                                  ` <div class="TeamReport__C-body-item-head-btn" @click="goDetail(item)">{{ $t('viewDetail') }}</div> `
                                ),
                              ]),
                              e("div", Me, [
                                e("div", Ue, [
                                  c(t(o.$t("friendsGrade")), 1),
                                  e("span", null, t(s.lv), 1),
                                ]),
                                e("div", Pe, [
                                  c(t(o.$t("rechageAmount")), 1),
                                  e("span", null, t(s.rechargeAmount), 1),
                                ]),
                                ae(
                                  e(
                                    "div",
                                    Ve,
                                    [
                                      c(t(o.$t("betAmounts")), 1),
                                      e("span", null, t(s.lotteryAmount), 1),
                                    ],
                                    512
                                  ),
                                  [[se, s.lotteryAmount]]
                                ),
                                e("div", je, [
                                  c(t(o.$t("commissionAmount")), 1),
                                  e("span", null, t(s.rebateAmount), 1),
                                ]),
                                e("div", Oe, [
                                  c(t(o.$t("time")), 1),
                                  e("span", null, t(s.searchTime), 1),
                                ]),
                              ]),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["api", "list", "page-query"]
              ),
            ]),
            d(
              M,
              {
                show: R.value,
                "onUpdate:show": a[7] || (a[7] = (s) => (R.value = s)),
                round: "",
                position: "bottom",
              },
              {
                default: L(() => [
                  d(
                    W,
                    {
                      modelValue: w.value,
                      "onUpdate:modelValue":
                        a[5] || (a[5] = (s) => (w.value = s)),
                      onCancel: a[6] || (a[6] = (s) => (R.value = !1)),
                      onConfirm: E,
                      title: o.$t("pickDate"),
                      "min-date": i(k),
                      "max-date": i(N),
                    },
                    null,
                    8,
                    ["modelValue", "title", "min-date", "max-date"]
                  ),
                ]),
                _: 1,
              },
              8,
              ["show"]
            ),
            d(
              M,
              {
                show: p.value,
                "onUpdate:show": a[9] || (a[9] = (s) => (p.value = s)),
                round: "",
                position: "bottom",
              },
              {
                default: L(() => [
                  d(
                    X,
                    {
                      "columns-field-names": _,
                      columns: r.value,
                      onCancel: a[8] || (a[8] = (s) => (p.value = !1)),
                      onConfirm: F,
                    },
                    null,
                    8,
                    ["columns"]
                  ),
                ]),
                _: 1,
              },
              8,
              ["show"]
            ),
          ])
        );
      };
    },
  });
const xe = G(Ke, [
    ["__scopeId", "data-v-10d1559c"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/promotion/TeamReport/index.vue",
    ],
  ]),
  lt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xe },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  H = (C) => (ie("data-v-56f58e4b"), (C = C()), re(), C),
  ze = { class: "TeamReportDetail__C" },
  Ge = { class: "TeamReportDetail__C-head" },
  He = { class: "TeamReportDetail__C-head-top" },
  Ee = H(() => e("span", null, "8729837", -1)),
  Qe = { class: "TeamReportDetail__C-head-detail" },
  qe = { class: "TeamReportDetail__C-head-detail-lv" },
  Fe = { class: "TeamReportDetail__C-head-detail-commission" },
  Je = { class: "TeamReportDetail__C-head-detail-time" },
  We = H(() => e("div", { class: "TeamReportDetail__C-img" }, null, -1)),
  Xe = { class: "TeamReportDetail__C-detail" },
  Ze = O({
    __name: "index",
    setup(C) {
      const { t: l } = K();
      ne();
      const g = I(),
        n = h({
          name: "ace***@gmail.com",
          level: 1,
          commission: 1e5,
          time: "2022-05-87",
          list: [
            { name: l("commissionLottery"), money: 88888.88 },
            { name: l("commissionElectric"), money: 88888.88 },
            { name: l("commissionLive"), money: 88888.88 },
          ],
        }),
        r = () => {
          g.go(-1);
        };
      return (
        le(() => {}),
        (_, v) => {
          const R = y("NavBar");
          return (
            m(),
            u("div", ze, [
              d(
                R,
                { title: _.$t("details"), "left-arrow": "", onClickLeft: r },
                null,
                8,
                ["title"]
              ),
              e("div", Ge, [
                e("div", He, [c(t(n.value.name) + " ", 1), Ee]),
                e("div", Qe, [
                  e("div", qe, [
                    c(t(_.$t("friendsGrade")), 1),
                    e("span", null, t(n.value.level), 1),
                  ]),
                  e("div", Fe, [
                    c(t(_.$t("commissionAmount")), 1),
                    e("span", null, t(i(j)(n.value.commission)), 1),
                  ]),
                  e("div", Je, [
                    c(t(_.$t("time")), 1),
                    e("span", null, t(n.value.time), 1),
                  ]),
                ]),
              ]),
              We,
              e("div", Xe, [
                (m(!0),
                u(
                  x,
                  null,
                  z(
                    n.value.list,
                    (p, k) => (
                      m(),
                      u(
                        "div",
                        { key: k, class: "TeamReportDetail__C-detail-item" },
                        [
                          c(t(p.name) + " ", 1),
                          e("span", null, t(i(j)(p.money)), 1),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
      );
    },
  });
const et = G(Ze, [
    ["__scopeId", "data-v-56f58e4b"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/promotion/TeamReport/TeamReportDetail/index.vue",
    ],
  ]),
  it = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: et },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { it as a, lt as i, fe as u };
