import {
  G as V,
  z as K,
  r as m,
  B as O,
  $ as b,
  H as g,
  N as r,
  I as c,
  J as t,
  Q as e,
  av as o,
  aB as p,
  P as n,
  K as N,
  M as w,
  au as S,
  ao as $,
  ap as C,
} from "./common.modules-cecf9b0d.js";
import { u as T, v as x } from "./page-saasLottery-D5-c991f6a0.js";
import { _ as H } from "./page-activity-ActivityDetail-6713f46c.js";
import { u as j } from "./page-saasLottery-K3-885050cf.js";
import { E as F } from "./page-activity-Bonus-c94a181e.js";
import "./page-home-other-6d9782ba.js";
import "./page-home-Casino-ff36f722.js";
import "./page-home-AllGames-ebd16353.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const J = { class: "GameRecord__C" },
  M = { class: "GameRecord__C-head" },
  Q = { class: "GameRecord__C-body" },
  q = { class: "GameRecord__C-body-premium" },
  A = { key: 1, class: "GameRecord__C-body-empty" },
  U = { key: 0, class: "GameRecord__C-foot" },
  W = { class: "GameRecord__C-foot-page" },
  X = V({
    __name: "Record",
    setup(Y) {
      const { gameCode: z, trigger: Z } = T();
      K();
      const { historyIssues: y, historyIssuesTotalPage: v } = j(),
        i = m([]),
        R = m(!1),
        f = O(() => (i.value.length ? i.value : y.value)),
        u = m(v.value),
        B = m(10),
        a = m(1),
        I = () => {
          a.value < 2 || (a.value--, h());
        },
        P = () => {
          a.value++, !(a.value > u.value) && h();
        },
        h = async () => {
          try {
            R.value = !0;
            const { result: s, data: _ } = await x({
              gameCode: z.value,
              pageNo: a.value,
              pageSize: B.value,
            });
            s &&
              ((i.value = _.list || []),
              (a.value = _.pageNo || 1),
              (u.value = _.totalPage || 0));
          } catch {
          } finally {
            R.value = !1;
          }
        };
      return (
        b(y, () => {
          (i.value = []), (a.value = 1);
        }),
        b(v, () => {
          u.value = v.value;
        }),
        (s, _) => {
          const l = g("van-col"),
            k = g("van-row"),
            G = g("van-icon");
          return (
            r(),
            c("div", J, [
              t("div", M, [
                e(k, null, {
                  default: o(() => [
                    e(
                      l,
                      { span: "10" },
                      {
                        default: o(() => [p(n(s.$t("gameRecordNum")), 1)]),
                        _: 1,
                      }
                    ),
                    e(
                      l,
                      { span: "8" },
                      {
                        default: o(() => [p(n(s.$t("gameRecordTotal")), 1)]),
                        _: 1,
                      }
                    ),
                    e(
                      l,
                      { span: "6" },
                      {
                        default: o(() => [p(n(s.$t("gameRecordResult")), 1)]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              t("div", Q, [
                f.value.length
                  ? (r(!0),
                    c(
                      N,
                      { key: 0 },
                      w(
                        f.value,
                        (d, E) => (
                          r(),
                          S(
                            k,
                            { key: E },
                            {
                              default: o(() => [
                                e(
                                  l,
                                  { span: "9" },
                                  {
                                    default: o(() => [p(n(d.issueNumber), 1)]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                e(
                                  l,
                                  { span: "2" },
                                  {
                                    default: o(() => [
                                      t("span", null, n(d.sum), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                e(
                                  l,
                                  { span: "4" },
                                  {
                                    default: o(() => [
                                      t(
                                        "span",
                                        null,
                                        n(
                                          d.sum > 10
                                            ? s.$t("big")
                                            : s.$t("small")
                                        ),
                                        1
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                e(
                                  l,
                                  { span: "4" },
                                  {
                                    default: o(() => [
                                      t(
                                        "span",
                                        null,
                                        n(
                                          d.sum % 2
                                            ? s.$t("k3Odd")
                                            : s.$t("k3Even")
                                        ),
                                        1
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                $(` <van-col span="6">
						<span>{{ item.sum }}</span>
						<span>{{ sumOfDigits(item.premium) > 10 ? t('common.big') : t('common.small') }}</span>
						<span>{{ sumOfDigits(item.premium) % 2 ? t('common.odd') : t('common.even') }}</span>
					</van-col> `),
                                e(
                                  l,
                                  { span: "5" },
                                  {
                                    default: o(() => [
                                      t("div", q, [
                                        (r(!0),
                                        c(
                                          N,
                                          null,
                                          w(
                                            d.premium,
                                            (L, D) => (
                                              r(),
                                              c(
                                                "div",
                                                {
                                                  key: D,
                                                  class: C("number" + L),
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
                              ]),
                              _: 2,
                            },
                            1024
                          )
                        )
                      ),
                      128
                    ))
                  : (r(), c("div", A, [e(F)])),
              ]),
              f.value.length
                ? (r(),
                  c("div", U, [
                    t(
                      "div",
                      {
                        class: C([
                          "GameRecord__C-foot-previous",
                          { disabled: a.value <= 1 },
                        ]),
                        onClick: I,
                      },
                      [
                        e(G, {
                          name: "arrow-left",
                          class: "GameRecord__C-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                    t("div", W, n(a.value) + "/" + n(u.value), 1),
                    t(
                      "div",
                      {
                        class: C([
                          "GameRecord__C-foot-next",
                          { disabled: a.value >= u.value },
                        ]),
                        onClick: P,
                      },
                      [
                        e(G, {
                          name: "arrow",
                          class: "GameRecord__C-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                  ]))
                : $("v-if", !0),
            ])
          );
        }
      );
    },
  });
const me = H(X, [
  ["__scopeId", "data-v-ad665b84"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/K3/components/k33/Record.vue",
  ],
]);
export { me as default };
