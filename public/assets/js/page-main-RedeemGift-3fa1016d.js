import {
  G as L,
  z as b,
  r,
  R as A,
  T as N,
  A as I,
  H as v,
  aA as x,
  I as l,
  J as e,
  Q as m,
  O as d,
  ax as _,
  P as o,
  aF as S,
  ao as g,
  av as T,
  a0 as f,
  F as V,
  N as c,
  K as q,
  M as z,
} from "./common.modules-cecf9b0d.js";
import {
  bS as E,
  A as G,
  bT as h,
  b as H,
  g as F,
  _ as U,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { L as M } from "./page-activity-DailySignIn-7bda4bcc.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
import "./page-activity-Bonus-c94a181e.js";
const Q = { class: "redeem-container" },
  j = { class: "redeem-container-header" },
  J = { class: "redeem-container-header-belly" },
  K = { alt: "" },
  O = { class: "redeem-container-content" },
  W = { class: "redeem-container-receive" },
  X = ["placeholder"],
  Y = { key: 0 },
  Z = { class: "redeem-container-record" },
  ee = { class: "redeem-container-record-title" },
  te = { class: "redeem-container-record-itemsBox" },
  se = { class: "redeem-container-record-item ar-1px-b" },
  ae = { class: "redeem-container-record-item-left" },
  oe = { class: "redeem-container-record-item-right" },
  ne = ["src"],
  ie = L({
    __name: "index",
    setup(re) {
      const { t: u } = b(),
        y = r(!1),
        w = A(),
        C = N(),
        n = r(C.query.hbcode || ""),
        $ = r(!0),
        p = I({ pageSize: 10, pageNo: 1, startDate: null, endDate: null }),
        i = r({ list: [], pageNo: 0, totalPage: 0, totalCount: 0 }),
        P = async () => {
          if (n.value.trim() === "") {
            await f({ message: u("tipPlsEnterCode") });
            return;
          }
          const t = await E({ giftCode: n.value });
          if (t.code === 0) {
            V(u("redeemDialogDesc1")), (n.value = ""), await k();
            return;
          } else await f({ message: u(`code${t.msgCode}`) });
        },
        k = async () => {
          const t = await G(h(p));
          t && (i.value.list = t == null ? void 0 : t.data.list);
        };
      return (t, a) => {
        const R = v("NavBar"),
          B = v("svg-icon"),
          D = x("lazy");
        return (
          c(),
          l("div", Q, [
            e("div", j, [
              m(
                R,
                {
                  title: t.$t("gift"),
                  "left-arrow": "",
                  onClickLeft: a[0] || (a[0] = (s) => d(w).go(-1)),
                },
                null,
                8,
                ["title"]
              ),
              e("div", J, [
                _(e("img", K, null, 512), [[D, d(H)("main", "gift")]]),
              ]),
            ]),
            e("div", O, [
              e("div", W, [
                e("p", null, o(t.$t("tipHelloVIP")), 1),
                e("p", null, o(t.$t("tipWepreparedGift4u")), 1),
                e("h4", null, o(t.$t("tipPlsEnterRedeemCode")), 1),
                _(
                  e(
                    "input",
                    {
                      type: "text",
                      "auto-complete": "new-password",
                      autocomplete: "off",
                      placeholder: t.$t("tipPlsEnterCode"),
                      "onUpdate:modelValue":
                        a[1] || (a[1] = (s) => (n.value = s)),
                    },
                    null,
                    8,
                    X
                  ),
                  [[S, n.value]]
                ),
                y.value
                  ? (c(), l("h5", Y, o(t.$t("tipPlsBindBankcard")), 1))
                  : g("v-if", !0),
                e(
                  "button",
                  { onClick: a[2] || (a[2] = (s) => P()) },
                  o(t.$t("receive")),
                  1
                ),
              ]),
              e("div", Z, [
                e("div", ee, [
                  m(B, { name: "giftHistory" }),
                  g(` <img :src="getIcons('main', 'gRecord')" /> `),
                  e("span", null, o(t.$t("record")), 1),
                ]),
                e("div", te, [
                  m(
                    M,
                    {
                      list: i.value.list,
                      "onUpdate:list":
                        a[3] || (a[3] = (s) => (i.value.list = s)),
                      "page-query": p,
                      "onUpdate:pageQuery": a[4] || (a[4] = (s) => (p = s)),
                      api: d(h),
                      distance: 20,
                      isAutoLoad: $.value,
                    },
                    {
                      content: T(() => [
                        (c(!0),
                        l(
                          q,
                          null,
                          z(
                            i.value.list,
                            (s) => (
                              c(),
                              l(
                                "div",
                                {
                                  class: "redeem-container-record-items",
                                  key: s.reserved,
                                },
                                [
                                  e("div", se, [
                                    e("div", ae, [
                                      e(
                                        "h5",
                                        null,
                                        o(t.$t("receiveSuccess")),
                                        1
                                      ),
                                      e("span", null, o(s.addTime), 1),
                                    ]),
                                    e("div", oe, [
                                      e(
                                        "img",
                                        { src: d(F)("main", "gold") },
                                        null,
                                        8,
                                        ne
                                      ),
                                      e("span", null, o(s.amount), 1),
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
                    ["list", "page-query", "api", "isAutoLoad"]
                  ),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  });
const _e = U(ie, [
  ["__scopeId", "data-v-695ca243"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/RedeemGift/index.vue",
  ],
]);
export { _e as default };
