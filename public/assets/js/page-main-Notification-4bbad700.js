import {
  G as v,
  R as g,
  r as c,
  H as l,
  I as o,
  Q as i,
  O as _,
  av as x,
  N as a,
  K as k,
  M as y,
  J as n,
  P as r,
} from "./common.modules-cecf9b0d.js";
import { b2 as N, _ as L } from "./page-activity-ActivityDetail-6713f46c.js";
import { L as B } from "./page-activity-DailySignIn-7bda4bcc.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
import "./page-activity-Bonus-c94a181e.js";
const C = { class: "notification-container" },
  w = { class: "notification-container-content-title" },
  M = { class: "notification-container-content-desc" },
  R = v({
    __name: "index",
    setup(I) {
      const p = g(),
        s = c({ list: [], pageNo: 0, totalPage: 0, totalCount: 0 }),
        d = c();
      return (f, e) => {
        const u = l("NavBar"),
          m = l("svg-icon");
        return (
          a(),
          o("div", C, [
            i(
              u,
              {
                title: f.$t("notification"),
                "left-arrow": "",
                onClickLeft: e[0] || (e[0] = (t) => _(p).go(-1)),
              },
              null,
              8,
              ["title"]
            ),
            i(
              B,
              {
                class: "sysMessage__container-msgWrapper",
                list: s.value.list,
                "onUpdate:list": e[1] || (e[1] = (t) => (s.value.list = t)),
                "page-query": {},
                isAutoLoad: !0,
                api: _(N),
                distance: 250,
                ref_key: "listRef",
                ref: d,
              },
              {
                content: x(() => [
                  (a(!0),
                  o(
                    k,
                    null,
                    y(
                      s.value.list,
                      (t) => (
                        a(),
                        o(
                          "div",
                          {
                            class: "notification-container-content",
                            key: t.title,
                          },
                          [
                            n("div", w, [
                              i(m, { name: "notificationIcon" }),
                              n("span", null, r(t.title), 1),
                            ]),
                            n("div", M, r(t.siteMessage), 1),
                            n("h5", null, r(t.addtime), 1),
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
              ["list", "api"]
            ),
          ])
        );
      };
    },
  });
const j = L(R, [
  ["__scopeId", "data-v-00f99608"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/Notification/index.vue",
  ],
]);
export { j as default };
