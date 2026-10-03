import {
  G as U,
  z as V,
  R as F,
  B as et,
  r as v,
  A as W,
  C as E,
  H as g,
  aA as q,
  I as h,
  Q as r,
  O as s,
  av as b,
  ao as N,
  J as t,
  P as e,
  aB as k,
  ax as C,
  ay as M,
  ap as D,
  K as J,
  M as K,
  au as st,
  N as _,
} from "./common.modules-cecf9b0d.js";
import {
  y as at,
  bw as y,
  A as P,
  bN as nt,
  g as B,
  bO as ot,
  _ as H,
  bP as it,
  bQ as lt,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { N as X } from "./page-home-AllGames-ebd16353.js";
import { D as ct } from "./page-activity-Championship-c5772910.js";
import { L as dt } from "./page-activity-DailySignIn-7bda4bcc.js";
const rt = { class: "Laundry-page" },
  ut = { class: "laundry-page_container" },
  _t = { class: "laundry-page_box" },
  vt = { class: "title" },
  pt = { class: "lab" },
  mt = { class: "number" },
  yt = { class: "txt" },
  ht = { class: "c-row" },
  ft = { class: "item" },
  bt = { class: "tit" },
  gt = { class: "num" },
  Rt = { class: "tit" },
  Lt = { class: "num red" },
  Tt = { class: "item" },
  wt = { class: "tit" },
  xt = { class: "num" },
  kt = { class: "tip" },
  Ct = ["src"],
  $t = { class: "laundry-page_list" },
  At = { class: "title" },
  St = { key: 0, class: "list" },
  Nt = { class: "header" },
  Bt = { class: "" },
  Wt = { class: "name" },
  Ot = { class: "time" },
  jt = { class: "state" },
  zt = { class: "body" },
  It = { class: "left" },
  Mt = { class: "imgBox" },
  Dt = ["src"],
  Pt = { class: "right" },
  Ut = { class: "red" },
  Vt = { class: "orange" },
  Ft = { alt: "" },
  Ht = { class: "Laundry-Con" },
  Gt = { class: "Laundry-Con_tip" },
  Qt = { class: "Laundry-Con_txt" },
  qt = { class: "number" },
  Et = U({
    __name: "index",
    setup(G) {
      const { t: a } = V(),
        R = F(),
        f = at(),
        L = et(() => f.getIsShowAppHandCodeWashingSwitch),
        p = v(null),
        u = v(0),
        S = (o) => {
          let c = y.gameTabList[u.value].codeType;
          if (c === x.codeType) return !1;
          (x.codeType = c), n();
        },
        m = v(!1),
        w = v(0),
        $ = async () => {
          var c, T;
          if (i.codeWashAmount < 100) return;
          const o = await P(ot(x));
          ((c = o == null ? void 0 : o.data) == null
            ? void 0
            : c.rebateAmount) > 0 &&
            ((w.value =
              (T = o == null ? void 0 : o.data) == null
                ? void 0
                : T.rebateAmount),
            n(),
            (m.value = !0));
        },
        O = () => {
          m.value = !1;
        },
        A = () => {
          R.push({ name: "Laundry-LaundryRule" });
        },
        l = () => {
          R.push({ name: "Laundry-LaundryRecord" });
        },
        i = W({
          codeWashAmount: 0,
          dayRebate: 0,
          totalRebate: 0,
          washRate: "",
          washList: [],
        }),
        x = W({ codeType: -1 });
      function j(o) {
        let c = "";
        return (
          y.gameTabList.map((T) => {
            T.codeType == o && (c = T.name);
          }),
          c
        );
      }
      async function n() {
        const o = await P(nt(x));
        o &&
          ((i.codeWashAmount = o.data.codeWashAmount),
          (i.dayRebate = o.data.dayRebate),
          (i.totalRebate = o.data.totalRebate),
          (i.washRate = o.data.washRate),
          (i.washList = o.data.washList));
      }
      return (
        E(() => {
          y.gameTabList, f.getHomeSetting(), n();
        }),
        (o, c) => {
          const T = g("NavBar"),
            z = g("svg-icon"),
            Y = g("van-sticky"),
            Z = g("van-button"),
            Q = q("throttle-click"),
            tt = q("lazy");
          return (
            _(),
            h("div", rt, [
              r(
                T,
                {
                  title: s(a)("laundry"),
                  "left-arrow": "",
                  onClickLeft: c[0] || (c[0] = (d) => s(R).go(-1)),
                },
                null,
                8,
                ["title"]
              ),
              r(
                Y,
                {
                  "offset-top": 46,
                  container: p.value,
                  class: "bet-container-sticky",
                },
                {
                  default: b(() => [
                    t("div", null, [
                      r(
                        X,
                        {
                          list: s(y).gameTabList,
                          active: u.value,
                          "onUpdate:active":
                            c[1] || (c[1] = (d) => (u.value = d)),
                          tabClassName: "tabs",
                          onOnClickTab: S,
                          activeClassName: "tab_active",
                          ref: "tabRefs",
                          tabItemClassName: "funtab_item",
                        },
                        {
                          default: b(({ item: d, index: I }) => [
                            t(
                              "div",
                              {
                                class: D([
                                  "tab_item",
                                  { tab_active: I === u.value },
                                ]),
                              },
                              [
                                r(z, { name: d.img }, null, 8, ["name"]),
                                t("span", null, e(d.name), 1),
                              ],
                              2
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["list", "active"]
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["container"]
              ),
              N(" 可洗码量 "),
              t("div", ut, [
                t("div", _t, [
                  t(
                    "div",
                    vt,
                    e(s(y).gameTabList[u.value].name) +
                      "-" +
                      e(s(a)("washableSize")),
                    1
                  ),
                  t("div", pt, [
                    r(z, { name: "rebateRealTime" }),
                    k(" " + e(s(a)("laundryTxt")), 1),
                  ]),
                  t("div", mt, [
                    r(z, { name: "rebate" }),
                    k(" " + e(i.codeWashAmount.toFixed(2) || 0), 1),
                  ]),
                  t("div", yt, e(s(a)("laundryTxt1")), 1),
                  t("div", ht, [
                    t("div", ft, [
                      C(
                        t(
                          "div",
                          null,
                          [
                            t("p", bt, e(s(a)("rebateToday")), 1),
                            t("span", gt, e(i.dayRebate || 0), 1),
                          ],
                          512
                        ),
                        [[M, u.value == 0]]
                      ),
                      C(
                        t(
                          "div",
                          null,
                          [
                            t("p", Rt, e(s(a)("laundryRate")), 1),
                            t("span", Lt, e(i.washRate || 0) + "%", 1),
                          ],
                          512
                        ),
                        [[M, u.value != 0]]
                      ),
                    ]),
                    t("div", Tt, [
                      t("p", wt, e(s(a)("totalRebate")), 1),
                      t("span", xt, e(i.totalRebate || 0), 1),
                    ]),
                  ]),
                  t("div", kt, e(s(a)("laundryTxt2")), 1),
                  L.value
                    ? C(
                        (_(),
                        h(
                          "button",
                          {
                            key: 0,
                            class: D(
                              i.codeWashAmount >= 100 ? "btn active" : "btn"
                            ),
                          },
                          [k(e(s(a)("codeWashing")), 1)],
                          2
                        )),
                        [[Q, { handler: $, wait: 2e3 }]]
                      )
                    : N("v-if", !0),
                  C(
                    t(
                      "p",
                      { class: "rule", onClick: A },
                      [
                        k(e(s(a)("understandRules")), 1),
                        t(
                          "img",
                          {
                            class: "rule-img",
                            src: s(B)("main", "ruleicon"),
                            alt: "",
                          },
                          null,
                          8,
                          Ct
                        ),
                      ],
                      512
                    ),
                    [[M, !1]]
                  ),
                ]),
                N(" 洗码记录 "),
                t("div", $t, [
                  t("div", At, e(s(a)("laundryRed")), 1),
                  i.washList
                    ? (_(),
                      h("div", St, [
                        (_(!0),
                        h(
                          J,
                          null,
                          K(
                            i.washList || [],
                            (d, I) => (
                              _(),
                              h("div", { class: "item", key: I }, [
                                t("div", Nt, [
                                  t("div", Bt, [
                                    t("p", Wt, e(j(d.codeType)), 1),
                                    t("span", Ot, e(d.addTime), 1),
                                  ]),
                                  t("div", jt, e(s(a)("laundrySuccess")), 1),
                                ]),
                                t("div", zt, [
                                  t("div", It, [
                                    t("div", Mt, [
                                      t(
                                        "img",
                                        {
                                          class: "img",
                                          src: s(B)("main", "gameStatsSteps"),
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        Dt
                                      ),
                                    ]),
                                    t("div", null, [
                                      t("p", null, e(s(a)("laundryAmount")), 1),
                                      t("p", null, e(s(a)("laundryRate")), 1),
                                      t("p", null, e(s(a)("rebateAmount")), 1),
                                    ]),
                                  ]),
                                  t("div", Pt, [
                                    t("p", null, e(d.washVolume), 1),
                                    t("p", Ut, e(d.washRate) + "%", 1),
                                    t("p", Vt, e(d.rebateAmount), 1),
                                  ]),
                                ]),
                              ])
                            )
                          ),
                          128
                        )),
                      ]))
                    : N("v-if", !0),
                  C(
                    (_(),
                    st(
                      Z,
                      {
                        class: "all-record",
                        plain: "",
                        block: "",
                        round: "",
                        type: "primary",
                      },
                      { default: b(() => [k(e(s(a)("allRecords")), 1)]), _: 1 }
                    )),
                    [[Q, { handler: l, wait: 2e3 }]]
                  ),
                ]),
              ]),
              r(
                ct,
                {
                  show: m.value,
                  "onUpdate:show": c[2] || (c[2] = (d) => (m.value = d)),
                  onConfirm: O,
                  "show-cancel-btn": !1,
                  confirmText: s(a)("confirm"),
                  title: `${s(y).gameTabList[u.value].name}-${s(a)(
                    "laundryAmount"
                  )}`,
                },
                {
                  header: b(() => [
                    C(t("img", Ft, null, 512), [
                      [tt, s(B)("public", "succeed")],
                    ]),
                  ]),
                  content: b(() => [
                    t("div", Ht, [
                      t("div", Gt, e(s(a)("codeWashingSuccess")), 1),
                      t("div", Qt, [
                        k(e(s(a)("rebateAmount")) + ":", 1),
                        t("span", qt, e(w.value.toFixed(2)), 1),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show", "confirmText", "title"]
              ),
            ])
          );
        }
      );
    },
  });
const Jt = H(Et, [
    ["__scopeId", "data-v-cdf0e578"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/Laundry/index.vue",
    ],
  ]),
  Le = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Jt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Kt = { class: "Laundry-Record" },
  Xt = { style: { "background-color": "#f7f8ff" } },
  Yt = { class: "list" },
  Zt = { class: "header" },
  te = { class: "" },
  ee = { class: "name" },
  se = { class: "time" },
  ae = { class: "state" },
  ne = { class: "body" },
  oe = { class: "left" },
  ie = { class: "imgBox" },
  le = ["src"],
  ce = { class: "right" },
  de = { class: "red" },
  re = { class: "orange" },
  ue = U({
    __name: "index",
    setup(G) {
      const { t: a } = V(),
        R = F(),
        f = v(),
        L = v(null),
        p = v(0),
        u = async (A) => {
          let l = y.gameTabList[p.value].codeType;
          ($.value.codeType = l),
            (w.value = !0),
            (S.pageNo = 1),
            (m.list = []),
            await f.value.resetRefresh();
        },
        S = W({ pageNo: 1, pageSize: 10, codeType: -1 }),
        m = W({ list: [], pageNo: 0, totalPage: 0, totalCount: 0 }),
        w = v(!0),
        $ = v({ codeType: -1 });
      function O(A) {
        let l = "";
        return (
          y.gameTabList.map((i) => {
            i.codeType == A && (l = i.name);
          }),
          l
        );
      }
      return (A, l) => {
        const i = g("NavBar"),
          x = g("svg-icon"),
          j = g("van-sticky");
        return (
          _(),
          h("div", Kt, [
            r(
              i,
              {
                title: s(a)("laundryRecord"),
                "left-arrow": "",
                onClickLeft: l[0] || (l[0] = (n) => s(R).go(-1)),
              },
              null,
              8,
              ["title"]
            ),
            r(
              j,
              {
                "offset-top": 46,
                container: L.value,
                class: "bet-container-sticky",
              },
              {
                default: b(() => [
                  t("div", Xt, [
                    r(
                      X,
                      {
                        list: s(y).gameTabList,
                        active: p.value,
                        "onUpdate:active":
                          l[1] || (l[1] = (n) => (p.value = n)),
                        tabClassName: "tabs",
                        onOnClickTab: u,
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item",
                      },
                      {
                        default: b(({ item: n, index: o }) => [
                          t(
                            "div",
                            {
                              class: D([
                                "tab_item",
                                { tab_active: o === p.value },
                              ]),
                            },
                            [
                              r(x, { name: n.img }, null, 8, ["name"]),
                              t("span", null, e(n.name), 1),
                            ],
                            2
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["list", "active"]
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["container"]
            ),
            t("div", Yt, [
              r(
                dt,
                {
                  distance: 300,
                  api: s(it),
                  list: m.list,
                  "onUpdate:list": l[2] || (l[2] = (n) => (m.list = n)),
                  "page-query": $.value,
                  "onUpdate:pageQuery": l[3] || (l[3] = (n) => ($.value = n)),
                  "is-first": w.value,
                  "onUpdate:isFirst": l[4] || (l[4] = (n) => (w.value = n)),
                  ref_key: "listRef",
                  ref: f,
                  isAutoLoad: !0,
                },
                {
                  content: b(() => [
                    (_(!0),
                    h(
                      J,
                      null,
                      K(
                        m.list,
                        (n, o) => (
                          _(),
                          h("div", { class: "item", key: o }, [
                            t("div", Zt, [
                              t("div", te, [
                                t("p", ee, e(O(n.codeType)), 1),
                                t("span", se, e(n.addTime), 1),
                              ]),
                              t("div", ae, e(s(a)("laundrySuccess")), 1),
                            ]),
                            t("div", ne, [
                              t("div", oe, [
                                t("div", ie, [
                                  t(
                                    "img",
                                    {
                                      class: "img",
                                      src: s(B)("main", "gameStatsSteps"),
                                      alt: "",
                                    },
                                    null,
                                    8,
                                    le
                                  ),
                                ]),
                                t("div", null, [
                                  t("p", null, e(s(a)("laundryAmount")), 1),
                                  t("p", null, e(s(a)("laundryRate")), 1),
                                  t("p", null, e(s(a)("rebateAmount")), 1),
                                ]),
                              ]),
                              t("div", ce, [
                                t("p", null, e(n.washVolume), 1),
                                t("p", de, e(n.washRate) + "%", 1),
                                t("p", re, e(n.rebateAmount), 1),
                              ]),
                            ]),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["api", "list", "page-query", "is-first"]
              ),
            ]),
          ])
        );
      };
    },
  });
const _e = H(ue, [
    ["__scopeId", "data-v-34682eef"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/Laundry/LaundryRecord/index.vue",
    ],
  ]),
  Te = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _e },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ve = { class: "Laundry-Rule" },
  pe = ["innerHTML"],
  me = U({
    __name: "index",
    setup(G) {
      const { t: a } = V(),
        R = F(),
        f = v();
      return (
        E(async () => {
          const L = await P(lt());
          L && (f.value = L.data.washRules);
        }),
        (L, p) => {
          const u = g("NavBar");
          return (
            _(),
            h("div", ve, [
              r(
                u,
                {
                  title: s(a)("laundryRule"),
                  "left-arrow": "",
                  onClickLeft: p[0] || (p[0] = (S) => s(R).go(-1)),
                },
                null,
                8,
                ["title"]
              ),
              t(
                "div",
                { class: "Laundry-Rule-content", innerHTML: f.value },
                null,
                8,
                pe
              ),
            ])
          );
        }
      );
    },
  });
const ye = H(me, [
    ["__scopeId", "data-v-f4ca4591"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/Laundry/LaundryRule/index.vue",
    ],
  ]),
  we = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ye },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { Te as a, we as b, Le as i };
