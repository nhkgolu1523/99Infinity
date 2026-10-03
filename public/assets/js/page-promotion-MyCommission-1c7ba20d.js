import {
  G as z,
  r as _,
  R as G,
  w as j,
  C as q,
  H as v,
  I as m,
  Q as y,
  av as O,
  ao as w,
  J as e,
  P as t,
  O as c,
  N as u,
  T as K,
  z as X,
  aB as r,
  K as H,
  M as U,
  aC as Z,
  aD as x,
} from "./common.modules-cecf9b0d.js";
import {
  d as ee,
  f as te,
  cj as E,
  by as se,
  _ as Q,
  c as S,
  cb as oe,
} from "./page-activity-ActivityDetail-6713f46c.js";
const ae = { class: "ar-searchbar" },
  ne = { class: "ar-searchbar-type" },
  ie = { key: 0, class: "myCommission__container-content" },
  le = { class: "myCommission__container-content__item-body" },
  de = { class: "settle" },
  ce = { class: "time" },
  re = { class: "sub" },
  _e = { class: "amount grey" },
  me = { class: "amount grey" },
  ue = { class: "amount orange fw" },
  pe = { class: "amount grey" },
  ve = z({
    __name: "index",
    setup(h) {
      const b = _(null),
        R = G(),
        n = _(),
        { minDate: A, maxDate: k } = ee(-1),
        l = j(k).startOf("day"),
        { key: P, value: s } = te(),
        f = _(l.format("YYYY-MM-DD")),
        C = _(s),
        d = _(!1),
        p = _({ date: l.format("YYYY-MM-DD HH:mm:ss") }),
        T = async ({ selectedOptions: o }) => {
          (d.value = !1),
            (p.value.date = j(C.value.join("/"))
              .startOf("day")
              .format("YYYY-MM-DD HH:mm:ss"));
          const [{ value: a }, { value: $ }, { value: M }] = o;
          (f.value = se(a, $, M)), i();
        };
      function L() {
        R.back();
      }
      const g = ({ selectedOptions: o }) => {
          d.value = !1;
        },
        i = async () => {
          try {
            const o = await E(p.value);
            n.value = o;
          } catch {}
        };
      return (
        q(() => {
          i();
        }),
        (o, a) => {
          var V, Y, N, B, I;
          const $ = v("NavBar"),
            M = v("ArSelect"),
            W = v("van-sticky"),
            F = v("van-date-picker"),
            J = v("van-popup");
          return (
            u(),
            m(
              "div",
              {
                class: "myCommission__container",
                ref_key: "containerRef",
                ref: b,
              },
              [
                y(
                  $,
                  {
                    title: o.$t("commissionDetails"),
                    "left-arrow": "",
                    onClickLeft: L,
                  },
                  null,
                  8,
                  ["title"]
                ),
                y(
                  W,
                  { "offset-top": o.$u.TopHeight, container: b.value },
                  {
                    default: O(() => [
                      e("div", ae, [
                        e("div", ne, [
                          y(
                            M,
                            {
                              onClickSelect:
                                a[0] || (a[0] = (D) => (d.value = !0)),
                              selectName: f.value || o.$t("pickDate"),
                            },
                            null,
                            8,
                            ["selectName"]
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["offset-top", "container"]
                ),
                w(" 日期选择弹窗 "),
                y(
                  J,
                  {
                    show: d.value,
                    "onUpdate:show": a[2] || (a[2] = (D) => (d.value = D)),
                    round: "",
                    position: "bottom",
                  },
                  {
                    default: O(() => [
                      y(
                        F,
                        {
                          modelValue: C.value,
                          "onUpdate:modelValue":
                            a[1] || (a[1] = (D) => (C.value = D)),
                          title: o.$t("pickDate"),
                          onCancel: g,
                          onConfirm: T,
                          "min-date": c(A),
                          "max-date": c(k),
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
                (V = n.value) != null && V.settlementTime
                  ? (u(),
                    m("div", ie, [
                      e(
                        "div",
                        {
                          class: "myCommission__container-content__item",
                          onClick:
                            a[3] ||
                            (a[3] = (D) =>
                              c(R).push({
                                name: "MyCommission-MyCommissionDetail",
                                query: { date: p.value.date },
                              })),
                        },
                        [
                          e("div", le, [
                            e("p", de, t(o.$t("settlementState")), 1),
                            e(
                              "span",
                              ce,
                              t(
                                (Y = n.value) == null
                                  ? void 0
                                  : Y.settlementTime
                              ),
                              1
                            ),
                            e("p", re, t(o.$t("tTommission")), 1),
                            e("div", null, [
                              e("span", null, t(o.$t("betPeople")), 1),
                              e(
                                "span",
                                _e,
                                t(
                                  (N = n.value) == null
                                    ? void 0
                                    : N.children_LotteryAmount_Users
                                ) +
                                  " " +
                                  t(o.$t("people")),
                                1
                              ),
                            ]),
                            e("div", null, [
                              e("span", null, t(o.$t("betMoney")), 1),
                              e(
                                "span",
                                me,
                                t(
                                  (B = n.value) == null
                                    ? void 0
                                    : B.children_LotteryAmount
                                ),
                                1
                              ),
                            ]),
                            w(` <div>
						<span>{{ $t('agencyGrade') }}</span>
						<span class="level">L{{ Promotion?.rebateAmount_Last }}</span>
					</div> `),
                            e("div", null, [
                              e("span", null, t(o.$t("commSettlement")), 1),
                              e("span", ue, t(n.value.rebateAmount_Last), 1),
                            ]),
                            e("div", null, [
                              e("span", null, t(o.$t("date")), 1),
                              e(
                                "span",
                                pe,
                                t((I = n.value) == null ? void 0 : I.time),
                                1
                              ),
                            ]),
                          ]),
                        ]
                      ),
                    ]))
                  : w("v-if", !0),
              ],
              512
            )
          );
        }
      );
    },
  });
const ye = Q(ve, [
    ["__scopeId", "data-v-5659d99c"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/promotion/MyCommission/index.vue",
    ],
  ]),
  Ze = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ye },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  he = (h) => (Z("data-v-ede350d4"), (h = h()), x(), h),
  be = { class: "TeamReportDetail__C" },
  fe = { class: "TeamReportDetail__C-head" },
  Ce = { class: "TeamReportDetail__C-head-top" },
  $e = { class: "TeamReportDetail__C-head-detail" },
  De = { class: "TeamReportDetail__C-head-detail-lv" },
  Re = { class: "TeamReportDetail__C-head-detail-commission" },
  ke = { class: "TeamReportDetail__C-head-detail-time" },
  Te = he(() => e("div", { class: "TeamReportDetail__C-img" }, null, -1)),
  Le = { class: "TeamReportDetail__C-detail" },
  ge = { class: "title" },
  we = { class: "box" },
  Ae = { class: "TeamReportDetail__C-body-item" },
  Me = { class: "TeamReportDetail__C-body-item" },
  Se = { class: "level" },
  Pe = { class: "TeamReportDetail__C-body-item" },
  Ve = { class: "meony" },
  Ye = { class: "TeamReportDetail__C-body-item" },
  Ne = { class: "meony" },
  Be = { class: "TeamReportDetail__C-body-grade" },
  Ie = { class: "TeamReportDetail__C-body-grade-th" },
  je = { class: "item" },
  Oe = { class: "item" },
  He = { class: "item" },
  Ue = { class: "item" },
  ze = { class: "item" },
  Ge = { class: "icon-LV" },
  qe = { class: "txt" },
  Ee = { class: "item" },
  Qe = { class: "item" },
  We = { class: "item" },
  Fe = z({
    __name: "index",
    setup(h) {
      const b = G(),
        R = K(),
        { t: n } = X(),
        A = {
          1: n("commissionLottery"),
          2: n("commissionElectric"),
          3: n("commissionLive"),
          4: n("commissionSport"),
          5: n("commissionGames"),
          6: n("commissionChess"),
        },
        k = () => {
          b.go(-1);
        },
        l = _(),
        P = async () => {
          try {
            const s = await E({ date: R.query.date });
            l.value = s;
          } catch {}
        };
      return (
        q(() => {
          P();
        }),
        (s, f) => {
          var d, p, T, L, g;
          const C = v("NavBar");
          return (
            u(),
            m("div", be, [
              y(
                C,
                { title: s.$t("details"), "left-arrow": "", onClickLeft: k },
                null,
                8,
                ["title"]
              ),
              e("div", fe, [
                e(
                  "div",
                  Ce,
                  t((d = l.value) == null ? void 0 : d.settlementTime),
                  1
                ),
                e("div", $e, [
                  e("div", De, [
                    r(t(s.$t("totalBetP")), 1),
                    e(
                      "span",
                      null,
                      t(
                        (p = l.value) == null
                          ? void 0
                          : p.children_LotteryAmount_Users
                      ) + t(s.$t("people")),
                      1
                    ),
                  ]),
                  e("div", Re, [
                    r(t(s.$t("totalBetA")), 1),
                    e(
                      "span",
                      null,
                      t(
                        c(S)(
                          (T = l.value) == null
                            ? void 0
                            : T.children_LotteryAmount
                        )
                      ),
                      1
                    ),
                  ]),
                  w(` <div class="TeamReportDetail__C-head-detail-time">
					{{$t('rebateLevel')}}<span>LV5</span>
				</div> `),
                  e("div", ke, [
                    r(t(s.$t("totalCommissionA")), 1),
                    e(
                      "span",
                      null,
                      t((L = l.value) == null ? void 0 : L.rebateAmount_Last),
                      1
                    ),
                  ]),
                ]),
              ]),
              Te,
              e("div", Le, [
                e(
                  "div",
                  {
                    class: "btn",
                    onClick:
                      f[0] ||
                      (f[0] = (i) => c(b).push({ name: "RebateRatio" })),
                  },
                  t(s.$t("rebateRules")),
                  1
                ),
              ]),
              (u(!0),
              m(
                H,
                null,
                U(
                  (g = l.value) == null ? void 0 : g.rebateWhereItems,
                  (i, o) => (
                    u(),
                    m("div", { class: "TeamReportDetail__C-body", key: o }, [
                      e("div", ge, t(A[i.type]), 1),
                      e("div", we, [
                        e("div", Ae, [
                          r(t(s.$t("betPeople")) + " ", 1),
                          e(
                            "span",
                            null,
                            t(i.children_LotteryAmount_Users) +
                              t(s.$t("people")),
                            1
                          ),
                        ]),
                        e("div", Me, [
                          r(t(s.$t("rebateLevel")) + " ", 1),
                          e("span", Se, "LV" + t(i.rebateLevel), 1),
                        ]),
                        e("div", Pe, [
                          r(t(s.$t("betMoney")) + " ", 1),
                          e("span", Ve, t(c(S)(i.children_LotteryAmount)), 1),
                        ]),
                        e("div", Ye, [
                          r(t(s.$t("commSettlement")) + " ", 1),
                          e("span", Ne, t(c(S)(i.rebateAmount)), 1),
                        ]),
                      ]),
                      e("div", Be, [
                        e("div", Ie, [
                          e("div", je, t(s.$t("lowerLevel")), 1),
                          e("div", Oe, t(s.$t("betAmounts")), 1),
                          e("div", He, t(s.$t("rebateRatio")), 1),
                          e("div", Ue, t(s.$t("betRebateAmount")), 1),
                        ]),
                        (u(!0),
                        m(
                          H,
                          null,
                          U(
                            i.rebateWhereItemDetails,
                            (a, $) => (
                              u(),
                              m(
                                "div",
                                {
                                  class: "TeamReportDetail__C-body-grade-tr",
                                  key: $,
                                },
                                [
                                  e("div", ze, [
                                    e("div", Ge, [
                                      e("span", qe, "L" + t(a.levelId), 1),
                                    ]),
                                  ]),
                                  e("div", Ee, t(a.children_LotteryAmount), 1),
                                  e("div", Qe, t(a.rebateRate) + "%", 1),
                                  e("div", We, t(c(oe)(a.rebateAmount)), 1),
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ])
                  )
                ),
                128
              )),
            ])
          );
        }
      );
    },
  });
const Je = Q(Fe, [
    ["__scopeId", "data-v-ede350d4"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/promotion/MyCommission/MyCommissionDetail/index.vue",
    ],
  ]),
  xe = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Je },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { xe as a, Ze as i };
