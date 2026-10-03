import {
  G as V,
  r as u,
  a8 as W,
  $ as T,
  Y as G,
  W as j,
  H as N,
  N as i,
  I as p,
  J as a,
  Q as s,
  av as n,
  P as o,
  K as L,
  M,
  au as q,
  aB as k,
  ao as D,
  ap as x,
  O as A,
} from "./common.modules-cecf9b0d.js";
import { u as F, E as J, v as K } from "./page-saasLottery-D5-c991f6a0.js";
import { _ as O } from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-home-other-6d9782ba.js";
import "./page-home-Casino-ff36f722.js";
import "./page-home-AllGames-ebd16353.js";
import "./page-activity-Bonus-c94a181e.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const Q = { class: "trx_r" },
  Y = { class: "trx_r-head" },
  R = { class: "trx_r-body" },
  U = { class: "fl" },
  X = ["onClick"],
  Z = { class: "numberC" },
  ee = { key: 1, class: "trx_r-body-empty" },
  ae = { key: 0, class: "trx_r-foot" },
  se = { class: "trx_r-foot-page" },
  oe = V({
    __name: "record",
    emits: ["changefive"],
    setup(te, { emit: ne }) {
      u([]);
      const I = W("trxWinHook"),
        { gameCode: $, trigger: B } = F(),
        m = u([]),
        { historyIssuesTotalPage: h, historyIssues: re, update: P } = I,
        d = u(h.value),
        z = u(10),
        r = u(1),
        y = u(!1),
        H = () => {
          r.value < 2 || (r.value--, _());
        },
        S = () => {
          r.value++, !(r.value > d.value) && _();
        },
        _ = async () => {
          try {
            y.value = !0;
            const { result: l, data: c } = await K({
              gameCode: $.value,
              pageNo: r.value,
              pageSize: z.value,
            });
            l &&
              ((m.value =
                c.list.map((e) => {
                  if (e.blockId) {
                    var v = e.blockId.length,
                      f = e.blockId.substring(v - 4, v);
                    e.blockName = "**" + f;
                  }
                  if (e.issueNumber) {
                    var t = e.issueNumber.substring(0, 3),
                      b = e.issueNumber.length,
                      C = e.issueNumber.substring(b - 4, b);
                    e.issue = t + "**" + C;
                  }
                  if (e.blockTimestamp) {
                    let g = new Date(e.blockTimestamp);
                    e.time =
                      g.getHours() +
                      ":" +
                      g.getMinutes() +
                      ":" +
                      g.getSeconds();
                  }
                  return e;
                }) || []),
              (r.value = c.pageNo || 1),
              (d.value = c.totalPage || 0));
          } catch {
          } finally {
            y.value = !1;
          }
        },
        E = (l) => {
          let c = `https://tronscan.org/#/block/${l}`;
          window.location.href = c;
        },
        w = u(!1);
      return (
        T(h, () => {
          d.value = h.value;
        }),
        T(P, () => {
          (r.value = 1), _();
        }),
        G(() => {
          w.value = !0;
        }),
        j(() => {
          (w.value = !1), _();
        }),
        B.on(() => {
          _();
        }),
        (l, c) => {
          const e = N("van-col"),
            v = N("van-row"),
            f = N("van-icon");
          return (
            i(),
            p("div", Q, [
              a("div", Y, [
                s(v, null, {
                  default: n(() => [
                    s(
                      e,
                      { span: "5" },
                      {
                        default: n(() => [
                          a("span", null, o(l.$t("winTrxNum")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    s(
                      e,
                      { span: "5" },
                      {
                        default: n(() => [
                          a("span", null, o(l.$t("winTrxDesc1")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    s(
                      e,
                      { span: "5" },
                      {
                        default: n(() => [
                          a("span", null, o(l.$t("winTrxDesc2")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    s(
                      e,
                      { span: "4" },
                      {
                        default: n(() => [
                          a("span", null, o(l.$t("winTrxDesc3")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    s(
                      e,
                      { span: "5" },
                      {
                        default: n(() => [
                          a("span", null, o(l.$t("winTrxDesc4")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              a("div", R, [
                m.value.length
                  ? (i(!0),
                    p(
                      L,
                      { key: 0 },
                      M(
                        m.value,
                        (t, b) => (
                          i(),
                          q(
                            v,
                            { key: b },
                            {
                              default: n(() => [
                                s(
                                  e,
                                  { span: "5" },
                                  {
                                    default: n(() => [k(o(t.issue), 1)]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                s(
                                  e,
                                  { span: "6" },
                                  {
                                    default: n(() => [
                                      a("div", U, [
                                        k(o(t.blockNumber) + " ", 1),
                                        t.blockNumber
                                          ? (i(),
                                            p(
                                              "div",
                                              {
                                                key: 0,
                                                class: "Binquire",
                                                onClick: (C) =>
                                                  E(t.blockNumber),
                                              },
                                              null,
                                              8,
                                              X
                                            ))
                                          : D("v-if", !0),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                s(
                                  e,
                                  { span: "4" },
                                  { default: n(() => [k(o(t.time), 1)]), _: 2 },
                                  1024
                                ),
                                s(
                                  e,
                                  { span: "4" },
                                  {
                                    default: n(() => [k(o(t.blockName), 1)]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                s(
                                  e,
                                  { span: "4" },
                                  {
                                    default: n(() => [
                                      a("div", Z, [
                                        a(
                                          "div",
                                          {
                                            class: x([
                                              "number",
                                              ["num" + t.number],
                                            ]),
                                          },
                                          o(t.number),
                                          3
                                        ),
                                        a(
                                          "div",
                                          {
                                            class: x([
                                              Number(t.number) > 4
                                                ? "big"
                                                : "small",
                                            ]),
                                          },
                                          o(Number(t.number) > 4 ? "B" : "S"),
                                          3
                                        ),
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
                  : (i(), p("div", ee, [s(A(J))])),
              ]),
              m.value.length
                ? (i(),
                  p("div", ae, [
                    a(
                      "div",
                      {
                        class: x([
                          "trx_r-foot-previous",
                          { disabled: r.value <= 1 },
                        ]),
                        onClick: H,
                      },
                      [
                        s(f, {
                          name: "arrow-left",
                          class: "trx_r-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                    a("div", se, o(r.value) + "/" + o(d.value), 1),
                    a(
                      "div",
                      {
                        class: x([
                          "trx_r-foot-next",
                          { disabled: r.value >= d.value },
                        ]),
                        onClick: S,
                      },
                      [
                        s(f, {
                          name: "arrow",
                          class: "trx_r-icon",
                          size: "20",
                        }),
                      ],
                      2
                    ),
                  ]))
                : D("v-if", !0),
            ])
          );
        }
      );
    },
  });
const be = O(oe, [
  ["__scopeId", "data-v-0aa97d86"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/saasLottery/game/TrxWinGo/components/trx2/record.vue",
  ],
]);
export { be as default };
