import {
  G as U,
  z as Q,
  C as K,
  H as M,
  aA as me,
  N as o,
  I as i,
  J as e,
  K as I,
  M as z,
  ap as p,
  P as s,
  aB as W,
  O as l,
  ao as y,
  au as G,
  Q as k,
  av as H,
  ax as ge,
  Z as ne,
  aC as ee,
  aD as se,
  r as h,
  $ as x,
  Y as te,
  W as oe,
  aW as ce,
  B as ie,
  aT as ye,
  V as he,
  R as $e,
} from "./common.modules-cecf9b0d.js";
import { E as re } from "./page-activity-Bonus-c94a181e.js";
import { c as A, _ as Y } from "./page-activity-ActivityDetail-6713f46c.js";
import {
  z as fe,
  u as ae,
  q as Z,
  r as de,
  s as le,
  E as ue,
  p as ke,
  D as be,
} from "./page-saasLottery-D5-c991f6a0.js";
import { R as Be } from "./page-saasLottery-MotoRace-5b715646.js";
const we = (S) => (ee("data-v-13106282"), (S = S()), se(), S),
  Ce = { class: "changLong__C" },
  Se = { class: "changLong__C-bet-l" },
  Ne = { class: "num" },
  Te = { class: "time" },
  Pe = { class: "other" },
  Le = { class: "remark" },
  Me = { class: "issue" },
  Re = { key: 0, class: "changLong__C-bet-r" },
  De = ["onClick"],
  Ee = { key: 1, class: "flex-center", style: { height: "4rem" } },
  Ie = { class: "Betting__Popup" },
  Oe = { class: "Betting__Popup-head-title" },
  Ae = { class: "Betting__Popup-head-selectName" },
  ze = { class: "Betting__Popup-body" },
  je = { class: "Betting__Popup-body-line" },
  Ve = { class: "Betting__Popup-body-line-list" },
  We = ["onClick"],
  Ge = { class: "Betting__Popup-body-line" },
  Fe = { class: "Betting__Popup-body-line-btnL" },
  He = { class: "Betting__Popup-body-line" },
  Ue = we(() => e("div", null, null, -1)),
  Ye = { class: "Betting__Popup-body-line-list" },
  xe = ["onClick"],
  Ke = { class: "Betting__Popup-body-line" },
  Xe = { class: "Betting__Popup-foot" },
  Ze = { class: "Betting__Popup-foot-s bgcolor" },
  qe = { class: "Betting__Popup-PreSale" },
  Je = { class: "Betting__Popup-PreSale-head" },
  Qe = { class: "Betting__Popup-PreSale-body" },
  es = { class: "Betting__Popup-PreSale-foot" },
  ss = U({
    __name: "Bet",
    setup(S) {
      const { t: n } = Q(),
        {
          getDragonListPage: B,
          prohibitBuyTime: T,
          betlist: w,
          bettingPopupShow: b,
          isShowPreSale: g,
          isCheckPreSale: v,
          selectInfo: _,
          betTypeList: P,
          multipleList: L,
          lock: R,
          Stepper: $,
          changeStep: m,
          TaskCount: C,
          changeCoin: D,
          knowPreSale: N,
          submitBetting: V,
          onBet: u,
          clearBetting: f,
        } = fe(),
        O = (t) => {
          if (!t.playBet) return "";
          switch (t.playBet) {
            case "h":
              return n("common.big");
            case "l":
              return n("common.small");
            case "o":
              return n("common.odd");
            case "e":
              return n("common.even");
            default:
              return n("common." + t.playBet.toLowerCase());
          }
        },
        a = (t) => {
          let c = "";
          switch (t.playType) {
            case "FifthOddEven":
            case "FourthOddEven":
            case "ThirdOddEven":
            case "SecondOddEven":
            case "FirstOddEven":
            case "OddEven":
              c = `${n("common.even")},${n("common.odd")}`;
              break;
            case "FirstBigSmall":
            case "ThirdBigSmall":
            case "SecondBigSmall":
            case "FifthBigSmall":
            case "FourthBigSmall":
            case "BigSmall":
              c = `${n("common.big")},${n("common.small")}`;
              break;
            case "Color":
              c = n("color");
              break;
            case "SumBigSmall":
              c = `${n("gameRecordTotal")}_${n("common.big")},${n(
                "common.small"
              )}`;
              break;
            case "SumOddEven":
              c = `${n("gameRecordTotal")}_${n("common.even")},${n(
                "common.odd"
              )}`;
              break;
          }
          return (
            t.gameCode.startsWith("MotoRace") &&
              (t.playType.startsWith("First") && (c = `1st_${c}`),
              t.playType.startsWith("Second") && (c = `2nd_${c}`),
              t.playType.startsWith("Third") && (c = `3rd_${c}`)),
            t.gameCode.startsWith("D5") &&
              (t.playType.startsWith("First") && (c = `A_${c}`),
              t.playType.startsWith("Second") && (c = `B_${c}`),
              t.playType.startsWith("Third") && (c = `C_${c}`),
              t.playType.startsWith("Fourth") && (c = `D_${c}`),
              t.playType.startsWith("Fifth") && (c = `E_${c}`)),
            c
          );
        };
      return (
        K(() => {
          B();
        }),
        (t, c) => {
          const j = M("van-loading"),
            r = M("van-field"),
            E = M("van-popup"),
            q = me("throttle-click");
          return (
            o(),
            i(
              I,
              null,
              [
                e("div", Ce, [
                  (o(!0),
                  i(
                    I,
                    null,
                    z(
                      l(w),
                      (d, X) => (
                        o(),
                        i(
                          "div",
                          {
                            class: "changLong__C-bet",
                            key: d.issueNumber + d.gameCode + d.playType,
                          },
                          [
                            e("div", Se, [
                              e(
                                "div",
                                {
                                  class: p([
                                    "titel",
                                    [d.gameCode.split("_")[0]],
                                  ]),
                                },
                                s(d.gameName),
                                3
                              ),
                              e("div", Ne, [
                                W(s(d.issueNumber) + " ", 1),
                                e(
                                  "span",
                                  Te,
                                  s(
                                    `${d.time1}${d.time2}:${d.time3}${d.time4}`
                                  ),
                                  1
                                ),
                              ]),
                              e("div", Pe, [
                                e("div", Le, s(a(d)), 1),
                                e(
                                  "div",
                                  {
                                    class: p([
                                      "gameResult",
                                      "bg-" + d.dragonItem,
                                    ]),
                                  },
                                  s(
                                    t.$t("common." + d.dragonItem.toLowerCase())
                                  ),
                                  3
                                ),
                                e(
                                  "div",
                                  Me,
                                  s(d.dragonCount) + s(t.$t("betIssues")),
                                  1
                                ),
                              ]),
                            ]),
                            d.passTime > l(T)(d.gameCode)
                              ? (o(),
                                i("div", Re, [
                                  (o(!0),
                                  i(
                                    I,
                                    null,
                                    z(
                                      d.playBetList,
                                      (F) => (
                                        o(),
                                        i(
                                          "div",
                                          {
                                            class: p([
                                              `${F.playBet}_${d.playType}` ==
                                              `${l(_).playBet}_${l(_).playType}`
                                                ? "active"
                                                : "",
                                              "bg-" + F.playBet,
                                            ]),
                                            onClick: (At) => l(u)(d, F),
                                          },
                                          s(O(F)),
                                          11,
                                          De
                                        )
                                      )
                                    ),
                                    256
                                  )),
                                ]))
                              : y("v-if", !0),
                          ]
                        )
                      )
                    ),
                    128
                  )),
                  l(w).length === 0 && !l(R)
                    ? (o(), G(re, { key: 0 }))
                    : y("v-if", !0),
                  l(R)
                    ? (o(),
                      i("section", Ee, [
                        k(j, { type: "spinner", color: "var(--main-color)" }),
                      ]))
                    : y("v-if", !0),
                ]),
                y(" 投注内容 begin "),
                k(
                  E,
                  {
                    show: l(b),
                    "onUpdate:show":
                      c[6] || (c[6] = (d) => (ne(b) ? (b.value = d) : null)),
                    position: "bottom",
                    round: !0,
                    "close-on-click-overlay": !1,
                  },
                  {
                    default: H(() => [
                      e("div", Ie, [
                        e(
                          "div",
                          {
                            class: p([
                              "Betting__Popup-head",
                              ["bg-" + l(_).playBet],
                            ]),
                          },
                          [
                            e("div", Oe, s(l(_).gameName), 1),
                            e("div", Ae, [
                              e("span", null, s(l(n)("choose")), 1),
                              e("span", null, s(O(l(_))), 1),
                            ]),
                          ],
                          2
                        ),
                        e("div", ze, [
                          e("div", je, [
                            W(s(l(n)("amount")) + " ", 1),
                            e("div", Ve, [
                              (o(!0),
                              i(
                                I,
                                null,
                                z(
                                  l(P),
                                  (d, X) => (
                                    o(),
                                    i(
                                      "div",
                                      {
                                        key: X,
                                        class: p([
                                          "Betting__Popup-body-line-item",
                                          { bgcolor: l(_).coin == d },
                                        ]),
                                        onClick: (F) => l(D)(d),
                                      },
                                      s(d),
                                      11,
                                      We
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                          e("div", Ge, [
                            W(s(l(n)("numbers")) + " ", 1),
                            e("div", Fe, [
                              e(
                                "div",
                                {
                                  class: p([
                                    "Betting__Popup-btn",
                                    { bgcolor: l(_).count > 0 },
                                  ]),
                                  onClick: c[0] || (c[0] = (d) => l($)(1)),
                                },
                                "-",
                                2
                              ),
                              k(
                                r,
                                {
                                  class: "Betting__Popup-input",
                                  modelValue: l(_).count,
                                  "onUpdate:modelValue":
                                    c[1] || (c[1] = (d) => (l(_).count = d)),
                                  type: "digit",
                                  maxlength: 4,
                                  onInput: l(m),
                                },
                                null,
                                8,
                                ["modelValue", "onInput"]
                              ),
                              e(
                                "div",
                                {
                                  class: "Betting__Popup-btn bgcolor",
                                  onClick: c[2] || (c[2] = (d) => l($)(2)),
                                },
                                "+"
                              ),
                            ]),
                          ]),
                          e("div", He, [
                            Ue,
                            e("div", Ye, [
                              (o(!0),
                              i(
                                I,
                                null,
                                z(
                                  l(L),
                                  (d, X) => (
                                    o(),
                                    i(
                                      "div",
                                      {
                                        key: X,
                                        class: p([
                                          "Betting__Popup-body-line-item",
                                          { bgcolor: l(_).count == d },
                                        ]),
                                        onClick: (F) => l(C)(d),
                                      },
                                      " X" + s(d),
                                      11,
                                      xe
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                          e("div", Ke, [
                            e(
                              "span",
                              {
                                class: p([
                                  "Betting__Popup-agree",
                                  { active: l(v) },
                                ]),
                                onClick:
                                  c[3] || (c[3] = (d) => (v.value = !l(v))),
                              },
                              s(l(n)("agree")),
                              3
                            ),
                            e(
                              "span",
                              {
                                onClick: c[4] || (c[4] = (d) => (g.value = !0)),
                                class: "Betting__Popup-preSaleShow",
                              },
                              s(l(n)("presaleRules")),
                              1
                            ),
                          ]),
                        ]),
                        e("div", Xe, [
                          e(
                            "div",
                            {
                              class: "Betting__Popup-foot-c",
                              onClick:
                                c[5] || (c[5] = (...d) => l(f) && l(f)(...d)),
                            },
                            s(l(n)("cancel")),
                            1
                          ),
                          ge(
                            (o(),
                            i("div", Ze, [
                              W(
                                s(l(n)("totalAmount")) +
                                  " " +
                                  s(l(A)(l(_).count * l(_).coin || 0)),
                                1
                              ),
                            ])),
                            [[q, { handler: l(V), wait: 2e3 }]]
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["show"]
                ),
                y(" 规则弹层 begin"),
                k(
                  E,
                  {
                    show: l(g),
                    "onUpdate:show":
                      c[8] || (c[8] = (d) => (ne(g) ? (g.value = d) : null)),
                    "close-on-click-overlay": !1,
                    round: "",
                  },
                  {
                    default: H(() => [
                      e("div", qe, [
                        e("div", Je, s(l(n)("presaleRules")), 1),
                        e("div", Qe, s(t.$t("betPopTXT")), 1),
                        e("div", es, [
                          e(
                            "div",
                            {
                              class: "Betting__Popup-PreSale-foot-btn",
                              onClick:
                                c[7] || (c[7] = (...d) => l(N) && l(N)(...d)),
                            },
                            s(l(n)("iKonw")),
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
              ],
              64
            )
          );
        }
      );
    },
  });
const ts = Y(ss, [
    ["__scopeId", "data-v-13106282"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/ChangLong/Bet.vue",
    ],
  ]),
  _e = (S) => (ee("data-v-6016dd35"), (S = S()), se(), S),
  os = { class: "my_r" },
  as = { class: "my_r-body" },
  ls = { key: 0, class: "list" },
  ns = ["onClick"],
  is = { class: p(["list-item-l-color"]) },
  cs = { class: "list-item-m" },
  rs = { class: "list-item-m-top" },
  ds = _e(() =>
    e(
      "path",
      {
        d: "M5.21907 7.57895C4.89494 8.14035 4.08463 8.14035 3.7605 7.57895L0.114077 1.26316C-0.210049 0.701754 0.195109 -5.66721e-08 0.843362 0L8.13621 6.37561e-07C8.78446 6.94233e-07 9.18962 0.701755 8.86549 1.26316L5.21907 7.57895Z",
        fill: "#323536",
      },
      null,
      -1
    )
  ),
  us = [ds],
  _s = { class: "list-item-m-bottom" },
  vs = { key: 0, class: "list-detail" },
  ps = { class: "list-detail-text" },
  ms = { class: "list-detail-line" },
  gs = ["onClick"],
  ys = _e(() =>
    e(
      "svg",
      {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        e("path", {
          d: "M13 12V6H34V29H28",
          stroke: "#929292",
          "stroke-width": "2",
          "stroke-linejoin": "round",
        }),
        e("rect", {
          x: "6",
          y: "12",
          width: "22",
          height: "22",
          stroke: "#929292",
          "stroke-width": "2",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  hs = { class: "list-detail-line" },
  $s = { class: "list-detail-line" },
  fs = { class: "list-detail-line" },
  ks = { class: "list-detail-line" },
  bs = { class: "red" },
  Bs = { class: "list-detail-line" },
  ws = { class: "list-detail-line" },
  Cs = { key: 0, class: "list-premium" },
  Ss = { key: 1 },
  Ns = { class: "list-detail-line" },
  Ts = { class: "list-detail-bet" },
  Ps = { class: "list-detail-line" },
  Ls = { key: 1 },
  Ms = { class: "list-detail-line" },
  Rs = { key: 1 },
  Ds = { class: "list-detail-line" },
  Es = { key: 1, class: "my_r-body-empty" },
  Is = { key: 2, class: "flex-center", style: { height: "4rem" } },
  Os = { key: 0, class: "my_r-foot" },
  As = { class: "my_r-foot-page" },
  zs = U({
    __name: "MyRecord",
    setup(S) {
      const { t: n } = Q(),
        { gameCode: B, trigger: T } = ae(),
        w = h(4),
        b = h(10),
        g = h(1),
        v = h([]),
        _ = h(!1),
        P = {
          SumOddEven: {
            name: `${n("common.even")}${n("common.odd")}`,
            code: "SumOddEven",
          },
          SumBigSmall: {
            name: `${n("common.big")} ${n("common.small")}`,
            code: "SumBigSmall",
          },
          SumNum: { name: n("totalBet"), code: "SumNum" },
          NumSame2: { name: n("sameNum"), code: "NumSame2" },
          NumSame2Mult: { name: n("sameNum"), code: "NumSame2Mult" },
          NumSame3: { name: n("k3RecordDesc4"), code: "NumSame3" },
          NumSame3All: { name: n("k3bet3Desc4"), code: "NumSame3All" },
          NumDiff3: { name: n("trendTXT1"), code: "NumDiff3" },
          NumNear3All: { name: n("trendTXT2"), code: "NumNear3All" },
          NumDiff2: { name: n("k3RecordDesc8"), code: "NumDiff2" },
          Odd: { name: n("betOdd"), code: "Odd" },
          Even: { name: n("betEven"), code: "Even" },
          Big: { name: n("betBig"), code: "Big" },
          Small: { name: n("betSmall"), code: "Small" },
        },
        L = () => {
          g.value--, $();
        },
        R = () => {
          g.value++, $();
        },
        $ = async () => {
          try {
            (_.value = !0), (v.value = []);
            const { result: u, data: f } = await le({
              pageSize: b.value,
              pageNo: g.value,
              gameCode: B.value,
            });
            u &&
              ((v.value = (f == null ? void 0 : f.list) || []),
              (w.value = (f == null ? void 0 : f.totalPage) || 0));
          } catch {
          } finally {
            _.value = !1;
          }
        },
        m = h(-1),
        C = (u, f) => {
          var t, c;
          if (!u) return "";
          const O = u.betContent.split(","),
            a = (t = O[0]) == null ? void 0 : t.split("_");
          return f && O.length > 1
            ? "Combo"
            : f && ["Big", "Small", "Even", "Odd"].includes(a[1])
            ? (c = P[a[1]]) == null
              ? void 0
              : c.name
            : a[1];
        },
        D = (u) => {
          if (!u) return "";
          const f = [];
          return (
            u.betContent.split(",").forEach((a) => {
              var j, r, E;
              const [t, ...c] = a.split("_");
              ["Big", "Small", "Even", "Odd"].includes(String(c))
                ? f.push(
                    `${(j = P[t]) == null ? void 0 : j.name} | ${
                      (r = P[c.join(",")]) == null ? void 0 : r.name
                    }`
                  )
                : f.push(
                    `${(E = P[t]) == null ? void 0 : E.name} | ${c.join(",")}`
                  );
            }),
            f
          );
        },
        N = (u) => {
          m.value == u ? (m.value = -1) : (m.value = u);
        },
        V = h(!1);
      return (
        x(
          () => B.value,
          (u) => {
            u && $();
          }
        ),
        K(() => {
          $();
        }),
        te(() => {
          (V.value = !0), T.reset();
        }),
        oe(() => {
          (V.value = !1),
            $(),
            T.on(() => {
              $();
            });
        }),
        (u, f) => {
          const O = M("van-loading"),
            a = M("van-icon");
          return (
            o(),
            i("div", os, [
              e("div", as, [
                y(` <div class="MyGameRecord__C-head">
        <div class="MyGameRecord__C-head-moreB" @click="goPath(goPathName)">
          {{ $t('more') }}
          <svg-icon name="rightCircle"/>
        </div>
      </div> `),
                v.value.length
                  ? (o(),
                    i("div", ls, [
                      (o(!0),
                      i(
                        I,
                        null,
                        z(v.value, (t, c) => {
                          var j;
                          return (
                            o(),
                            i("div", { key: c }, [
                              e(
                                "div",
                                {
                                  class: "list-item",
                                  onClick: ce((r) => N(c), ["stop", "prevent"]),
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      class: p(["list-item-l", "betCl" + C(t)]),
                                    },
                                    [e("div", is, s(C(t, "text")), 1)],
                                    2
                                  ),
                                  e("div", cs, [
                                    e("div", rs, [
                                      W(s(t.issueNumber) + " ", 1),
                                      (o(),
                                      i(
                                        "svg",
                                        {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: p({ r: c == m.value }),
                                          width: "9",
                                          height: "8",
                                          viewBox: "0 0 9 8",
                                          fill: "none",
                                        },
                                        us,
                                        2
                                      )),
                                    ]),
                                    e("div", _s, s(l(Z)(t.betTime)), 1),
                                  ]),
                                  t.state != 2
                                    ? (o(),
                                      i(
                                        "div",
                                        {
                                          key: 0,
                                          class: p([
                                            "list-item-r",
                                            { success: t.state },
                                          ]),
                                        },
                                        [
                                          e(
                                            "div",
                                            { class: p({ success: t.state }) },
                                            s(
                                              t.state
                                                ? u.$t("success")
                                                : u.$t("fail")
                                            ),
                                            3
                                          ),
                                          e(
                                            "span",
                                            null,
                                            s(
                                              `${t.state ? "+" : ""}${l(A)(
                                                t.state
                                                  ? t.winLoseAmount + t.amount
                                                  : t.winLoseAmount
                                              )}`
                                            ),
                                            1
                                          ),
                                        ],
                                        2
                                      ))
                                    : y("v-if", !0),
                                ],
                                8,
                                ns
                              ),
                              c == m.value
                                ? (o(),
                                  i("div", vs, [
                                    e("div", ps, s(u.$t("detailMay")), 1),
                                    y(
                                      '            <div class="list-detail-line" >'
                                    ),
                                    y(
                                      "              <span>{{ $t('orderNoMay') }}</span>"
                                    ),
                                    y("              <div >"),
                                    y("              </div>"),
                                    y("            </div>"),
                                    e("div", ms, [
                                      e("span", null, s(u.$t("orderNoMay")), 1),
                                      e(
                                        "div",
                                        {
                                          class: "list-detail-copy",
                                          onClick: (r) => l(de)(t.orderNo),
                                        },
                                        [W(s(t.orderNo) + " ", 1), ys],
                                        8,
                                        gs
                                      ),
                                    ]),
                                    e("div", hs, [
                                      e("span", null, s(u.$t("issueMay")), 1),
                                      e("div", null, s(t.issueNumber), 1),
                                    ]),
                                    e("div", $s, [
                                      e("span", null, s(u.$t("amountMay")), 1),
                                      e("div", null, s(l(A)(t.amount)), 1),
                                    ]),
                                    e("div", fs, [
                                      e("span", null, s(u.$t("numMay")), 1),
                                      e("div", null, s(t.betMultiple), 1),
                                    ]),
                                    e("div", ks, [
                                      e(
                                        "span",
                                        null,
                                        s(u.$t("afterTaxAmount")),
                                        1
                                      ),
                                      e("div", bs, s(l(A)(t.realAmount)), 1),
                                    ]),
                                    e("div", Bs, [
                                      e("span", null, s(u.$t("tax")), 1),
                                      e("div", null, s(l(A)(t.fee)), 1),
                                    ]),
                                    e("div", ws, [
                                      e("span", null, s(u.$t("resultMay")), 1),
                                      t.number
                                        ? (o(),
                                          i("div", Cs, [
                                            (o(!0),
                                            i(
                                              I,
                                              null,
                                              z(
                                                t.premium,
                                                (r, E) => (
                                                  o(),
                                                  i(
                                                    "div",
                                                    {
                                                      key: E,
                                                      class: p("number" + r),
                                                    },
                                                    null,
                                                    2
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]))
                                        : (o(), i("div", Ss, "--")),
                                    ]),
                                    e("div", Ns, [
                                      e("span", null, s(u.$t("selectMay")), 1),
                                      e(
                                        "div",
                                        {
                                          class: p([
                                            {
                                              "list-detail-row":
                                                ((j = D(t)) == null
                                                  ? void 0
                                                  : j.length) > 1,
                                            },
                                            "itemEnd",
                                          ]),
                                        },
                                        [
                                          (o(!0),
                                          i(
                                            I,
                                            null,
                                            z(
                                              D(t),
                                              (r) => (
                                                o(), i("span", Ts, s(r), 1)
                                              )
                                            ),
                                            256
                                          )),
                                        ],
                                        2
                                      ),
                                    ]),
                                    e("div", Ps, [
                                      e("span", null, s(u.$t("statusMay")), 1),
                                      t.state != 2
                                        ? (o(),
                                          i(
                                            "div",
                                            {
                                              key: 0,
                                              class: p([
                                                t.state ? "green" : "red",
                                              ]),
                                            },
                                            s(
                                              t.state
                                                ? u.$t("success")
                                                : u.$t("fail")
                                            ),
                                            3
                                          ))
                                        : (o(),
                                          i("div", Ls, s(u.$t("notOpen")), 1)),
                                    ]),
                                    e("div", Ms, [
                                      e("span", null, s(u.$t("winOrLose")), 1),
                                      t.state != 2
                                        ? (o(),
                                          i(
                                            "div",
                                            {
                                              key: 0,
                                              class: p([
                                                t.state ? "green" : "red",
                                              ]),
                                            },
                                            s(
                                              `${t.state ? "+" : ""} ${l(A)(
                                                t.state
                                                  ? t.winLoseAmount + t.amount
                                                  : t.winLoseAmount
                                              )}`
                                            ),
                                            3
                                          ))
                                        : (o(), i("div", Rs, "--")),
                                    ]),
                                    e("div", Ds, [
                                      e("span", null, s(u.$t("createTime")), 1),
                                      e("div", null, s(l(Z)(t.betTime)), 1),
                                    ]),
                                  ]))
                                : y("v-if", !0),
                            ])
                          );
                        }),
                        128
                      )),
                    ]))
                  : y("v-if", !0),
                !v.value.length && !_.value
                  ? (o(), i("div", Es, [k(re)]))
                  : y("v-if", !0),
                _.value
                  ? (o(),
                    i("section", Is, [
                      k(O, { type: "spinner", color: "var(--main-color)" }),
                    ]))
                  : y("v-if", !0),
              ]),
              v.value.length
                ? (o(),
                  i("div", Os, [
                    e(
                      "div",
                      {
                        class: p([
                          "my_r-foot-previous",
                          { disabled: g.value <= 1 },
                        ]),
                        onClick: L,
                      },
                      [
                        k(a, {
                          name: "arrow-left",
                          class: "my_r-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                    e("div", As, s(g.value) + "/" + s(w.value), 1),
                    e(
                      "div",
                      {
                        class: p([
                          "my_r-foot-next",
                          { disabled: g.value >= w.value },
                        ]),
                        onClick: R,
                      },
                      [k(a, { name: "arrow", class: "my_r-icon", size: "20" })],
                      2
                    ),
                  ]))
                : y("v-if", !0),
            ])
          );
        }
      );
    },
  });
const ve = Y(zs, [
    ["__scopeId", "data-v-6016dd35"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/K3/components/k33/MyRecord.vue",
    ],
  ]),
  Ft = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ve },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pe = (S) => (ee("data-v-d1b1347c"), (S = S()), se(), S),
  js = { class: "my_r" },
  Vs = { class: "my_r-body" },
  Ws = { key: 0, class: "list" },
  Gs = ["onClick"],
  Fs = { class: "list-item-l" },
  Hs = { class: "list-item-m" },
  Us = { class: "list-item-m-top" },
  Ys = pe(() =>
    e(
      "path",
      {
        d: "M5.21907 7.57895C4.89494 8.14035 4.08463 8.14035 3.7605 7.57895L0.114077 1.26316C-0.210049 0.701754 0.195109 -5.66721e-08 0.843362 0L8.13621 6.37561e-07C8.78446 6.94233e-07 9.18962 0.701755 8.86549 1.26316L5.21907 7.57895Z",
        fill: "#323536",
      },
      null,
      -1
    )
  ),
  xs = [Ys],
  Ks = { class: "list-item-m-bottom" },
  Xs = { key: 0, class: "list-detail" },
  Zs = { class: "list-detail-text" },
  qs = { class: "list-detail-line" },
  Js = ["onClick"],
  Qs = pe(() =>
    e(
      "svg",
      {
        class: "copy_svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      [
        e("path", {
          d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
          stroke: "#666666",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        e("path", {
          d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
          stroke: "#666666",
          "stroke-width": "2",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  et = { class: "list-detail-line" },
  st = { class: "list-detail-line" },
  tt = { class: "list-detail-line" },
  ot = { class: "list-detail-line" },
  at = { class: "red" },
  lt = { class: "list-detail-line" },
  nt = { class: "list-detail-line" },
  it = { key: 0 },
  ct = { class: "list-inlineB" },
  rt = { key: 0, class: "list-inlineB violet" },
  dt = { key: 1 },
  ut = { class: "list-detail-line" },
  _t = { class: "list-detail-line" },
  vt = { key: 1 },
  pt = { class: "list-detail-line" },
  mt = { key: 1 },
  gt = { class: "list-detail-line" },
  yt = { key: 1, class: "my_r-body-empty" },
  ht = { key: 2, class: "flex-center", style: { height: "4rem" } },
  $t = { key: 0, class: "my_r-foot" },
  ft = { class: "my_r-foot-page" },
  kt = U({
    __name: "myRecord",
    setup(S) {
      const { t: n } = Q(),
        { gameCode: B, trigger: T } = ae(),
        w = h(4),
        b = h(10),
        g = h(1),
        v = h([]),
        _ = h(!1);
      x(
        () => B.value,
        (a) => {
          a && m();
        }
      );
      const P = () => {
          g.value--, m();
        },
        L = () => {
          g.value++, m();
        },
        R = (a) => {
          switch (a) {
            case "BigSmall_Small":
              return n("small");
            case "BigSmall_Big":
              return n("big");
            case "Color_Green":
              return n("green");
            case "Color_Violet":
              return n("purpleColor");
            case "Color_Red":
              return n("redColor");
            default:
              return a;
          }
        },
        $ = {
          Big: { name: n("betBig"), code: "Big" },
          Small: { name: n("betSmall"), code: "Small" },
        },
        m = async () => {
          if (!_.value)
            try {
              (_.value = !0), (v.value = []);
              const { result: a, data: t } = await le({
                pageSize: b.value,
                pageNo: g.value,
                gameCode: B.value,
              });
              a &&
                ((v.value = (t == null ? void 0 : t.list) || []),
                (w.value = (t == null ? void 0 : t.totalPage) || 0));
            } catch {
            } finally {
              _.value = !1;
            }
        },
        C = h(-1),
        D = (a) => (a ? (a == null ? void 0 : a.split("_")[1]) : ""),
        N = (a) => {
          var t;
          return a
            ? (a == null ? void 0 : a.split("_")[0]) == "Color"
              ? " "
              : ["Big", "Small"].includes(a == null ? void 0 : a.split("_")[1])
              ? (t = $[a == null ? void 0 : a.split("_")[1]]) == null
                ? void 0
                : t.name
              : a == null
              ? void 0
              : a.split("_")[1]
            : "";
        },
        V = (a) => {
          switch (a % 2) {
            case 1:
              return n("betGreen");
            default:
              return n("betRed");
          }
        },
        u = (a) => {
          switch (a % 2) {
            case 1:
              return "green";
            default:
              return "red";
          }
        },
        f = (a) => {
          C.value == a ? (C.value = -1) : (C.value = a);
        },
        O = h(!1);
      return (
        te(() => {
          (O.value = !0), T.reset();
        }),
        K(() => {
          m();
        }),
        oe(() => {
          (O.value = !1),
            m(),
            T.on(() => {
              m();
            });
        }),
        (a, t) => {
          const c = M("van-loading"),
            j = M("van-icon");
          return (
            o(),
            i("div", js, [
              e("div", Vs, [
                v.value.length
                  ? (o(),
                    i("div", Ws, [
                      (o(!0),
                      i(
                        I,
                        null,
                        z(
                          v.value,
                          (r, E) => (
                            o(),
                            i("div", { key: E }, [
                              e(
                                "div",
                                {
                                  class: "list-item",
                                  onClick: ce((q) => f(E), ["stop", "prevent"]),
                                },
                                [
                                  e("div", Fs, [
                                    e(
                                      "div",
                                      {
                                        class: p([
                                          "list-item-l-" +
                                            D(r.betContent).toLocaleLowerCase(),
                                        ]),
                                      },
                                      s(N(r.betContent)),
                                      3
                                    ),
                                  ]),
                                  e("div", Hs, [
                                    e("div", Us, [
                                      W(s(r.issueNumber) + " ", 1),
                                      (o(),
                                      i(
                                        "svg",
                                        {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: p({ r: E == C.value }),
                                          width: "9",
                                          height: "8",
                                          viewBox: "0 0 9 8",
                                          fill: "none",
                                        },
                                        xs,
                                        2
                                      )),
                                    ]),
                                    e("div", Ks, s(l(Z)(r.betTime)), 1),
                                  ]),
                                  r.state != 2
                                    ? (o(),
                                      i(
                                        "div",
                                        {
                                          key: 0,
                                          class: p([
                                            "list-item-r",
                                            { success: r.state },
                                          ]),
                                        },
                                        [
                                          e(
                                            "div",
                                            { class: p({ success: r.state }) },
                                            s(
                                              r.state
                                                ? a.$t("success")
                                                : a.$t("fail")
                                            ),
                                            3
                                          ),
                                          e(
                                            "span",
                                            null,
                                            s(
                                              `${r.state ? "+" : ""}${l(A)(
                                                r.state
                                                  ? r.winLoseAmount + r.amount
                                                  : r.winLoseAmount
                                              )}`
                                            ),
                                            1
                                          ),
                                        ],
                                        2
                                      ))
                                    : y("v-if", !0),
                                ],
                                8,
                                Gs
                              ),
                              E == C.value
                                ? (o(),
                                  i("div", Xs, [
                                    e("div", Zs, s(a.$t("detailMay")), 1),
                                    e("div", qs, [
                                      e("span", null, s(a.$t("orderNoMay")), 1),
                                      e(
                                        "div",
                                        {
                                          class: "list-detail-copy",
                                          onClick: (q) => l(de)(r.orderNo),
                                        },
                                        [W(s(r.orderNo) + " ", 1), Qs],
                                        8,
                                        Js
                                      ),
                                    ]),
                                    e("div", et, [
                                      e("span", null, s(a.$t("issueMay")), 1),
                                      e("div", null, s(r.issueNumber), 1),
                                    ]),
                                    e("div", st, [
                                      e("span", null, s(a.$t("amountMay")), 1),
                                      e("div", null, s(l(A)(r.amount)), 1),
                                    ]),
                                    e("div", tt, [
                                      e("span", null, s(a.$t("numMay")), 1),
                                      e("div", null, s(r.betMultiple), 1),
                                    ]),
                                    e("div", ot, [
                                      e(
                                        "span",
                                        null,
                                        s(a.$t("afterTaxAmount")),
                                        1
                                      ),
                                      e("div", at, s(l(A)(r.realAmount)), 1),
                                    ]),
                                    e("div", lt, [
                                      e("span", null, s(a.$t("tax")), 1),
                                      e("div", null, s(l(A)(r.fee)), 1),
                                    ]),
                                    e("div", nt, [
                                      e("span", null, s(a.$t("resultMay")), 1),
                                      r.number
                                        ? (o(),
                                          i("div", it, [
                                            e("div", ct, s(r.number), 1),
                                            e(
                                              "div",
                                              {
                                                class: p([
                                                  "list-inlineB",
                                                  [u(Number(r.number))],
                                                ]),
                                              },
                                              s(V(Number(r.number))),
                                              3
                                            ),
                                            r.number == 0 || r.number == 5
                                              ? (o(),
                                                i(
                                                  "div",
                                                  rt,
                                                  s(a.$t("purpleColor")),
                                                  1
                                                ))
                                              : y("v-if", !0),
                                            e(
                                              "div",
                                              {
                                                class: p([
                                                  "list-inlineB",
                                                  [
                                                    Number(r.number) > 4
                                                      ? "big"
                                                      : "small",
                                                  ],
                                                ]),
                                              },
                                              s(
                                                Number(r.number) > 4
                                                  ? a.$t("betBig")
                                                  : a.$t("betSmall")
                                              ),
                                              3
                                            ),
                                          ]))
                                        : (o(), i("div", dt, "--")),
                                    ]),
                                    e("div", ut, [
                                      e("span", null, s(a.$t("selectMay")), 1),
                                      e(
                                        "div",
                                        null,
                                        s(
                                          r.playType == "Num"
                                            ? D(r.betContent)
                                            : R(r.betContent)
                                        ),
                                        1
                                      ),
                                    ]),
                                    e("div", _t, [
                                      e("span", null, s(a.$t("statusMay")), 1),
                                      r.state != 2
                                        ? (o(),
                                          i(
                                            "div",
                                            {
                                              key: 0,
                                              class: p([
                                                r.state ? "green" : "red",
                                              ]),
                                            },
                                            s(
                                              r.state
                                                ? a.$t("success")
                                                : a.$t("fail")
                                            ),
                                            3
                                          ))
                                        : (o(),
                                          i(
                                            "div",
                                            vt,
                                            s(a.$t("k3RecordDesc9")),
                                            1
                                          )),
                                    ]),
                                    e("div", pt, [
                                      e("span", null, s(a.$t("winOrLose")), 1),
                                      r.state != 2
                                        ? (o(),
                                          i(
                                            "div",
                                            {
                                              key: 0,
                                              class: p([
                                                r.state ? "green" : "red",
                                              ]),
                                            },
                                            s(
                                              `${r.state ? "+" : ""} ${l(A)(
                                                r.state
                                                  ? r.winLoseAmount + r.amount
                                                  : r.winLoseAmount
                                              )}`
                                            ),
                                            3
                                          ))
                                        : (o(), i("div", mt, "--")),
                                    ]),
                                    e("div", gt, [
                                      e("span", null, s(a.$t("createTime")), 1),
                                      e(
                                        "div",
                                        null,
                                        s(
                                          l(Z)(r.betTime, "YYYY-MM-DD HH:mm:ss")
                                        ),
                                        1
                                      ),
                                    ]),
                                  ]))
                                : y("v-if", !0),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : y("v-if", !0),
                !v.value.length && !_.value
                  ? (o(), i("div", yt, [k(l(ue))]))
                  : y("v-if", !0),
                _.value
                  ? (o(),
                    i("section", ht, [
                      k(c, { type: "spinner", color: "var(--main-color)" }),
                    ]))
                  : y("v-if", !0),
              ]),
              v.value.length
                ? (o(),
                  i("div", $t, [
                    e(
                      "div",
                      {
                        class: p([
                          "my_r-foot-previous",
                          { disabled: g.value <= 1 },
                        ]),
                        onClick: P,
                      },
                      [
                        k(j, {
                          name: "arrow-left",
                          class: "my_r-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                    e("div", ft, s(g.value) + "/" + s(w.value), 1),
                    e(
                      "div",
                      {
                        class: p([
                          "my_r-foot-next",
                          { disabled: g.value >= w.value },
                        ]),
                        onClick: L,
                      },
                      [k(j, { name: "arrow", class: "my_r-icon", size: "20" })],
                      2
                    ),
                  ]))
                : y("v-if", !0),
            ])
          );
        }
      );
    },
  });
const J = Y(kt, [
    ["__scopeId", "data-v-d1b1347c"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/WinGo/components/wingo3/myRecord.vue",
    ],
  ]),
  bt = { class: "my_r" },
  Bt = { class: "my_r-body" },
  wt = { key: 0, class: "list" },
  Ct = { key: 1, class: "my_r-body-empty" },
  St = { key: 2, class: "flex-center", style: { height: "4rem" } },
  Nt = { key: 0, class: "my_r-foot" },
  Tt = { class: "my_r-foot-page" },
  Pt = U({
    __name: "myRecord",
    setup(S) {
      const { gameCode: n, trigger: B } = ae(),
        T = h(4),
        w = h(10),
        b = h(1),
        g = h([]),
        v = h(!1);
      x(
        () => n.value,
        ($) => {
          $ && L();
        }
      );
      const _ = () => {
          b.value--, L();
        },
        P = () => {
          b.value++, L();
        },
        L = async () => {
          try {
            (g.value = []), (v.value = !0);
            const { result: $, data: m } = await le({
              pageSize: w.value,
              pageNo: b.value,
              gameCode: n.value,
            });
            $ &&
              ((g.value = (m == null ? void 0 : m.list) || []),
              (T.value = (m == null ? void 0 : m.totalPage) || 0));
          } catch {
          } finally {
            v.value = !1;
          }
        },
        R = h(!1);
      return (
        te(() => {
          (R.value = !0), B.reset();
        }),
        K(() => {
          L();
        }),
        oe(() => {
          (R.value = !1),
            L(),
            B.on(() => {
              L();
            });
        }),
        ($, m) => {
          const C = M("van-loading"),
            D = M("van-icon");
          return (
            o(),
            i("div", bt, [
              e("div", Bt, [
                g.value.length
                  ? (o(),
                    i("div", wt, [
                      (o(!0),
                      i(
                        I,
                        null,
                        z(
                          g.value,
                          (N) => (
                            o(),
                            G(
                              Be,
                              { key: N == null ? void 0 : N.orderNo, info: N },
                              null,
                              8,
                              ["info"]
                            )
                          )
                        ),
                        128
                      )),
                    ]))
                  : y("v-if", !0),
                !g.value.length && !v.value
                  ? (o(), i("div", Ct, [k(l(ue))]))
                  : y("v-if", !0),
                v.value
                  ? (o(),
                    i("section", St, [
                      k(C, { type: "spinner", color: "var(--main-color)" }),
                    ]))
                  : y("v-if", !0),
              ]),
              g.value.length
                ? (o(),
                  i("div", Nt, [
                    e(
                      "div",
                      {
                        class: p([
                          "my_r-foot-previous",
                          { disabled: b.value <= 1 },
                        ]),
                        onClick: _,
                      },
                      [
                        k(D, {
                          name: "arrow-left",
                          class: "my_r-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                    e("div", Tt, s(b.value) + "/" + s(T.value), 1),
                    e(
                      "div",
                      {
                        class: p([
                          "my_r-foot-next",
                          { disabled: b.value >= T.value },
                        ]),
                        onClick: P,
                      },
                      [k(D, { name: "arrow", class: "my_r-icon", size: "20" })],
                      2
                    ),
                  ]))
                : y("v-if", !0),
            ])
          );
        }
      );
    },
  });
const Lt = Y(Pt, [
    ["__scopeId", "data-v-ba4104b7"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/MotoRace/components/myRecord.vue",
    ],
  ]),
  Mt = { class: "BetRecord__C" },
  Rt = U({
    __name: "BetRecord",
    setup(S) {
      const {
          getGameList: n,
          gameList: B,
          useProvide: T,
          setLotteryCode: w,
          lotteryCode: b,
          trigger: g,
        } = ke(),
        v = h(0),
        _ = h(0),
        P = ie(() => {
          var $;
          return (($ = B.value[v.value]) == null ? void 0 : $.gameList) || [];
        }),
        L = ie(() => {
          switch (b.value) {
            case "MotoRace":
              return Lt;
            case "VideoWinGo":
              return J;
            case "TrxWinGo":
              return J;
            case "WinGo":
              return J;
            case "D5":
              return be;
            case "K3":
              return ve;
            default:
              return null;
          }
        });
      T();
      const R = async () => {
        var C;
        await he();
        const m = (((C = B.value[v.value]) == null ? void 0 : C.gameList) ||
          [])[_.value];
        m && (w(m.gameCode), g.emit("bets"));
      };
      return (
        x(v, () => {
          (_.value = 0), R();
        }),
        x(_, () => {
          R();
        }),
        K(async () => {
          await n(), R();
        }),
        ($, m) => {
          const C = M("van-tab"),
            D = M("van-tabs");
          return (
            o(),
            i("div", Mt, [
              k(
                D,
                {
                  class: "BetRecord__C-gameTab",
                  active: v.value,
                  "onUpdate:active": m[1] || (m[1] = (N) => (v.value = N)),
                },
                {
                  default: H(() => [
                    (o(!0),
                    i(
                      I,
                      null,
                      z(
                        l(B),
                        (N, V) => (
                          o(),
                          G(
                            C,
                            { key: V, title: N.gameTypeName },
                            {
                              default: H(() => [
                                P.value.length > 1
                                  ? (o(),
                                    G(
                                      D,
                                      {
                                        key: 0,
                                        class: "BetRecord__C-timeTab",
                                        active: _.value,
                                        "onUpdate:active":
                                          m[0] || (m[0] = (u) => (_.value = u)),
                                      },
                                      {
                                        default: H(() => [
                                          e("template", null, [
                                            (o(!0),
                                            i(
                                              I,
                                              null,
                                              z(
                                                P.value,
                                                (u, f) => (
                                                  o(),
                                                  G(
                                                    C,
                                                    {
                                                      key: f,
                                                      title: u.gameName.replace(
                                                        N.gameTypeName,
                                                        ""
                                                      ),
                                                    },
                                                    null,
                                                    8,
                                                    ["title"]
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["active"]
                                    ))
                                  : y("v-if", !0),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["title"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["active"]
              ),
              (o(), G(ye(L.value), { "has-head": !1 })),
            ])
          );
        }
      );
    },
  });
const Dt = Y(Rt, [
    ["__scopeId", "data-v-26d56b99"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/ChangLong/BetRecord.vue",
    ],
  ]),
  Et = { class: "changLong__C" },
  It = U({
    __name: "index",
    setup(S) {
      const n = $e(),
        B = h(0);
      function T() {
        n.go(-1);
      }
      return (w, b) => {
        const g = M("NavBar"),
          v = M("van-tab"),
          _ = M("van-tabs");
        return (
          o(),
          i("div", Et, [
            k(
              g,
              {
                "left-arrow": "",
                title: w.$t("loongAssistant"),
                class: "main",
                onClickLeft: T,
              },
              null,
              8,
              ["title"]
            ),
            k(
              _,
              {
                class: "changLong__C-tab",
                active: B.value,
                "onUpdate:active": b[0] || (b[0] = (P) => (B.value = P)),
              },
              {
                default: H(() => [
                  k(v, { title: w.$t("latestLoong") }, null, 8, ["title"]),
                  k(v, { title: w.$t("myBet") }, null, 8, ["title"]),
                ]),
                _: 1,
              },
              8,
              ["active"]
            ),
            B.value == 0 ? (o(), G(ts, { key: 0 })) : (o(), G(Dt, { key: 1 })),
          ])
        );
      };
    },
  });
const Ot = Y(It, [
    ["__scopeId", "data-v-9087204f"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/saasLottery/SaasChangLong/index.vue",
    ],
  ]),
  Ht = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ot },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { J as M, Ft as a, Ht as i };
