import {
  G as K,
  z as S,
  r as c,
  B as X,
  $ as w,
  H as C,
  N as l,
  I as d,
  J as n,
  Q as s,
  av as r,
  aB as f,
  P as u,
  K as x,
  M as P,
  au as G,
  ap as h,
  ao as H,
} from "./common.modules-cecf9b0d.js";
import { u as j, v as F } from "./page-saasLottery-D5-c991f6a0.js";
import { _ as J } from "./page-activity-ActivityDetail-6713f46c.js";
import { u as M } from "./page-saasLottery-K3-885050cf.js";
import { E as Q } from "./page-activity-Bonus-c94a181e.js";
import "./page-home-other-6d9782ba.js";
import "./page-home-Casino-ff36f722.js";
import "./page-home-AllGames-ebd16353.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const R = { class: "Trend__C" },
  q = { class: "Trend__C-head" },
  A = { class: "Trend__C-body" },
  O = { class: "Trend__C-body-premium" },
  U = { class: "Trend__C-body-gameText" },
  W = { key: 1, class: "Trend__C-body-empty" },
  Y = { key: 0, class: "Trend__C-foot" },
  Z = { class: "Trend__C-foot-page" },
  ee = K({
    __name: "Trend",
    setup(ae) {
      const { gameCode: z } = j(),
        { t: _ } = S(),
        { historyIssues: b, historyIssuesTotalPage: g } = M(),
        v = c([]),
        k = c(!1),
        T = X(() => (v.value.length ? v.value : b.value)),
        i = c(g.value),
        B = c(10),
        t = c(1),
        I = () => {
          t.value < 2 || (t.value--, N());
        },
        L = () => {
          t.value++, !(t.value > i.value) && N();
        },
        N = async () => {
          try {
            k.value = !0;
            const { result: o, data: e } = await F({
              gameCode: z.value,
              pageNo: t.value,
              pageSize: B.value,
            });
            o &&
              ((v.value = e.list || []),
              (t.value = e.pageNo || 1),
              (i.value = e.totalPage || 0));
          } catch {
          } finally {
            k.value = !1;
          }
        };
      w(b, () => {
        (v.value = []), (t.value = 1);
      }),
        w(g, () => {
          i.value = g.value;
        });
      function $(o) {
        const e = `${o}`.split("").map(Number);
        if (e[0] === e[1] && e[1] === e[2]) return _("trendTXT4");
        if (
          (e[0] === e[1] && e[1] !== e[2]) ||
          (e[1] === e[2] && e[0] !== e[1]) ||
          (e[0] === e[2] && e[0] !== e[1])
        )
          return _("trendTXT3");
        const a = [...e].sort((p, m) => p - m);
        return a[1] === a[0] + 1 && a[2] === a[1] + 1
          ? _("betPopDesc7")
          : _("trendTXT1");
      }
      return (o, e) => {
        const a = C("van-col"),
          p = C("van-row"),
          m = C("van-icon");
        return (
          l(),
          d("div", R, [
            n("div", q, [
              s(p, null, {
                default: r(() => [
                  s(
                    a,
                    { span: "9" },
                    { default: r(() => [f(u(o.$t("trendNumber")), 1)]), _: 1 }
                  ),
                  s(
                    a,
                    { span: "5" },
                    { default: r(() => [f(u(o.$t("trendResult")), 1)]), _: 1 }
                  ),
                  s(
                    a,
                    { span: "10" },
                    { default: r(() => [f(u(o.$t("trendNum")), 1)]), _: 1 }
                  ),
                ]),
                _: 1,
              }),
            ]),
            n("div", A, [
              T.value.length
                ? (l(!0),
                  d(
                    x,
                    { key: 0 },
                    P(
                      T.value,
                      (y, D) => (
                        l(),
                        G(
                          p,
                          { key: D },
                          {
                            default: r(() => [
                              s(
                                a,
                                { span: "10" },
                                {
                                  default: r(() => [f(u(y.issueNumber), 1)]),
                                  _: 2,
                                },
                                1024
                              ),
                              s(
                                a,
                                { span: "5" },
                                {
                                  default: r(() => [
                                    n("div", O, [
                                      (l(!0),
                                      d(
                                        x,
                                        null,
                                        P(
                                          y.premium,
                                          (E, V) => (
                                            l(),
                                            d(
                                              "div",
                                              {
                                                key: V,
                                                class: h("number" + E),
                                              },
                                              null,
                                              2
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ),
                              s(
                                a,
                                { span: "9" },
                                {
                                  default: r(() => [
                                    n("div", U, [
                                      n("span", null, u($(y.premium)), 1),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  ))
                : (l(), d("div", W, [s(Q)])),
            ]),
            T.value.length
              ? (l(),
                d("div", Y, [
                  n(
                    "div",
                    {
                      class: h([
                        "Trend__C-foot-previous",
                        { disabled: t.value <= 1 },
                      ]),
                      onClick: I,
                    },
                    [
                      s(m, {
                        name: "arrow-left",
                        class: "Trend__C-icon",
                        size: "20",
                      }),
                    ],
                    2
                  ),
                  n("div", Z, u(t.value) + "/" + u(i.value), 1),
                  n(
                    "div",
                    {
                      class: h([
                        "Trend__C-foot-next",
                        { disabled: t.value >= i.value },
                      ]),
                      onClick: L,
                    },
                    [
                      s(m, {
                        name: "arrow",
                        class: "Trend__C-icon",
                        size: "20",
                      }),
                    ],
                    2
                  ),
                ]))
              : H("v-if", !0),
          ])
        );
      };
    },
  });
const ve = J(ee, [
  ["__scopeId", "data-v-11e16b29"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/K3/components/k33/Trend.vue",
  ],
]);
export { ve as default };
