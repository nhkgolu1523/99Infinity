import {
  G,
  z as $,
  r as i,
  R as V,
  A as D,
  C as E,
  H as v,
  I as l,
  Q as c,
  O as T,
  av as C,
  J as a,
  K as h,
  M as k,
  N as r,
  ap as F,
  P as d,
  aB as M,
} from "./common.modules-cecf9b0d.js";
import { N as O } from "./page-home-AllGames-ebd16353.js";
import {
  A as S,
  aI as j,
  co as H,
  _ as J,
} from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const K = { class: "x-page" },
  P = { class: "x-page-list" },
  Q = { class: "title" },
  U = { class: "box" },
  q = { class: "sum" },
  W = { class: "num" },
  X = G({
    __name: "index",
    setup(Y) {
      const { t: s } = $(),
        L = i(null),
        m = i(0),
        _ = i(0),
        w = (e) => {
          (_.value = e.item.codeType), window.scroll({ top: 0 });
        },
        x = (e) => parseFloat(e),
        N = V(),
        R = [
          { name: s("lottery"), img: "lottery", id: 1, codeType: 0 },
          { name: s("live"), img: "video", id: 6, codeType: 2 },
          { name: s("sport"), img: "sport", id: 5, codeType: 3 },
          { name: s("chess"), img: "chess", id: 7, codeType: 4 },
          { name: s("electric"), img: "slot", id: 4, codeType: 1 },
        ],
        n = i([
          { type: "rebateratelist", title: s("commissionTitle1"), content: [] },
          { type: "dianzilist", title: s("commissionTitle2"), content: [] },
          { type: "shixunlist", title: s("commissionTitle3"), content: [] },
          { type: "tiyulist", title: s("commissionTitle4"), content: [] },
          { type: "chesslist", title: s("commissionTitle5"), content: [] },
        ]),
        y = D([]);
      let f = i([]);
      const I = async () => {
          const e = await S(j());
          e &&
            (e.data.forEach((t) => {
              t.state === 1 &&
                y.push({
                  id: t.id,
                  isShow: t.state === 1,
                  title: s("code" + t.typeNameCode),
                  img: t.categoryImg,
                  key: t.categoryCode.toLocaleLowerCase(),
                });
            }),
            (f.value = R.filter((t) => y.some((u) => t.id === u.id))));
        },
        B = async () => {
          try {
            const e = await H();
            (n.value[0].content = e.rebateratelist),
              (n.value[1].content = e.dianzilist),
              (n.value[2].content = e.shixunlist),
              (n.value[3].content = e.tiyulist),
              (n.value[4].content = e.chesslist);
          } catch {}
        };
      return (
        E(() => {
          B(), I();
        }),
        (e, t) => {
          const u = v("NavBar"),
            g = v("svg-icon"),
            A = v("van-sticky");
          return (
            r(),
            l("div", K, [
              c(
                u,
                {
                  title: e.$t("rebateRatio"),
                  "left-arrow": "",
                  onClickLeft: t[0] || (t[0] = (o) => T(N).go(-1)),
                },
                null,
                8,
                ["title"]
              ),
              c(
                A,
                {
                  "offset-top": 46,
                  container: L.value,
                  class: "bet-container-sticky",
                },
                {
                  default: C(() => [
                    a("div", null, [
                      c(
                        O,
                        {
                          list: T(f),
                          active: m.value,
                          "onUpdate:active":
                            t[1] || (t[1] = (o) => (m.value = o)),
                          tabClassName: "tabs",
                          onOnClickTab: w,
                          activeClassName: "tab_active",
                          ref: "tabRefs",
                          tabItemClassName: "funtab_item",
                        },
                        {
                          default: C(({ item: o, index: p }) => [
                            a(
                              "div",
                              {
                                class: F([
                                  "tab_item",
                                  { tab_active: p === m.value },
                                ]),
                              },
                              [
                                c(g, { name: o.img }, null, 8, ["name"]),
                                a("span", null, d(o.name), 1),
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
              a("div", P, [
                (r(!0),
                l(
                  h,
                  null,
                  k(
                    n.value[_.value].content,
                    (o, p) => (
                      r(),
                      l("div", { class: "item", key: p }, [
                        a("div", Q, [
                          M(d(e.$t("rebateLevel")) + " ", 1),
                          a("span", null, "L" + d(o.rebate_Lv), 1),
                        ]),
                        a("div", U, [
                          (r(!0),
                          l(
                            h,
                            null,
                            k(
                              o.rebateLevels,
                              (b, z) => (
                                r(),
                                l("div", { class: "li", key: z }, [
                                  c(g, { name: "round", class: "img" }),
                                  a("div", null, [
                                    a(
                                      "span",
                                      q,
                                      d(e.$t("lowerRrebate", [b.levelId])),
                                      1
                                    ),
                                    a("span", W, d(x(b.amount)) + "%", 1),
                                  ]),
                                ])
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
              ]),
            ])
          );
        }
      );
    },
  });
const ne = J(X, [
  ["__scopeId", "data-v-a6a0c110"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/promotion/RebateRatio/index.vue",
  ],
]);
export { ne as default };
