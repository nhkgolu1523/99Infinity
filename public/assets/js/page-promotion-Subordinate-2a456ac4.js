import {
  G as x,
  R as S,
  r as u,
  A as C,
  w as a,
  a6 as L,
  B as U,
  $,
  H as f,
  I as D,
  Q as d,
  J as s,
  ao as M,
  av as c,
  O as A,
  N as p,
  aB as b,
  P as r,
  au as I,
  K as V,
  M as P,
} from "./common.modules-cecf9b0d.js";
import {
  bB as n,
  cp as Q,
  _ as q,
} from "./page-activity-ActivityDetail-6713f46c.js";
import { L as G } from "./page-activity-DailySignIn-7bda4bcc.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
import "./page-activity-Bonus-c94a181e.js";
const J = { class: "subordinate__container" },
  O = { class: "subordinate__container-header" },
  T = { class: "subordinate__container-content" },
  j = x({
    __name: "index",
    setup(E) {
      const H = S();
      function k() {
        H.back();
      }
      const g = u(!0),
        Y = u(),
        t = C({
          startDate: a(n().today.start * 1e3).format("YYYY-MM-DD HH:mm:ss"),
          endDate: a(n().today.end * 1e3).format("YYYY-MM-DD HH:mm:ss"),
          level: 1,
        });
      let l = L("permission", null);
      l && (l = JSON.parse(l.value));
      const m = u([]),
        B = U(() => (l ? l[16] : !0)),
        h = new Date(),
        y = new Date(h);
      y.setDate(y.getDate() - 1);
      const _ = u(0);
      return (
        $(_, (o) => {
          switch (o) {
            case 0:
              (t.startDate = a(n().today.start * 1e3).format(
                "YYYY-MM-DD HH:mm:ss"
              )),
                (t.endDate = a(n().today.end * 1e3).format(
                  "YYYY-MM-DD HH:mm:ss"
                ));
              break;
            case 1:
              (t.startDate = a(n().yesterday.start * 1e3).format(
                "YYYY-MM-DD HH:mm:ss"
              )),
                (t.endDate = a(n().yesterday.end * 1e3).format(
                  "YYYY-MM-DD HH:mm:ss"
                ));
              break;
            case 2:
              (t.startDate = a(n().thisMonth.start * 1e3).format(
                "YYYY-MM-DD HH:mm:ss"
              )),
                (t.endDate = a(n().thisMonth.end * 1e3).format(
                  "YYYY-MM-DD HH:mm:ss"
                ));
              break;
          }
          Y.value.resetRefresh();
        }),
        (o, i) => {
          const w = f("NavBar"),
            v = f("van-tab"),
            N = f("van-tabs");
          return (
            p(),
            D("div", J, [
              d(
                w,
                { title: o.$t("addSubor"), "left-arrow": "", onClickLeft: k },
                null,
                8,
                ["title"]
              ),
              s("div", O, [
                M(` <van-tabs class="top-tabBar" v-model:active="topActive" type="card" color="transparent" background="transparent"
				ref="tabsRef" ellipsis>
				<van-tab>
					<template #title> 直属下级 </template>
				</van-tab>
				<van-tab>
					<template #title> 全部下级 </template>
				</van-tab>
			</van-tabs> `),
                d(
                  N,
                  {
                    class: "footer-tabBar",
                    active: _.value,
                    "onUpdate:active": i[0] || (i[0] = (e) => (_.value = e)),
                    type: "card",
                    color: "transparent",
                    background: "transparent",
                    ref: "tabsRef",
                    ellipsis: "",
                  },
                  {
                    default: c(() => [
                      d(v, null, {
                        title: c(() => [b(r(o.$t("code9101")), 1)]),
                        _: 1,
                      }),
                      d(v, null, {
                        title: c(() => [b(r(o.$t("code9102")), 1)]),
                        _: 1,
                      }),
                      B.value
                        ? (p(),
                          I(
                            v,
                            { key: 0 },
                            {
                              title: c(() => [b(r(o.$t("code9105")), 1)]),
                              _: 1,
                            }
                          ))
                        : M("v-if", !0),
                    ]),
                    _: 1,
                  },
                  8,
                  ["active"]
                ),
              ]),
              d(
                G,
                {
                  list: m.value,
                  "onUpdate:list": i[1] || (i[1] = (e) => (m.value = e)),
                  "page-query": t,
                  "onUpdate:pageQuery": i[2] || (i[2] = (e) => (t = e)),
                  api: A(Q),
                  distance: 100,
                  ref_key: "listRef",
                  ref: Y,
                  "is-auto-load": g.value,
                },
                {
                  content: c(() => [
                    s("div", T, [
                      (p(!0),
                      D(
                        V,
                        null,
                        P(
                          m.value,
                          (e, R) => (
                            p(),
                            D(
                              "div",
                              {
                                class:
                                  "subordinate__container-content__item ar-1px-b",
                                key: R,
                              },
                              [
                                s("div", null, [
                                  s("span", null, r(e.bindUserName), 1),
                                  s("span", null, "UID:" + r(e.bindUserID), 1),
                                ]),
                                s("div", null, [
                                  s("span", null, r(o.$t("heroDirectSub")), 1),
                                  s("span", null, r(e.bindTime), 1),
                                ]),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["list", "page-query", "api", "is-auto-load"]
              ),
            ])
          );
        }
      );
    },
  });
const te = q(j, [
  ["__scopeId", "data-v-221aa0df"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/promotion/Subordinate/index.vue",
  ],
]);
export { te as default };
