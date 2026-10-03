import {
  G as b,
  z as A,
  R as C,
  r as I,
  H as a,
  I as u,
  Q as s,
  O as d,
  J as i,
  av as m,
  N as v,
  K as P,
  M as y,
  ap as B,
  ax as N,
  ay as U,
  u as V,
} from "./common.modules-cecf9b0d.js";
import {
  G as $,
  b as z,
  A as G,
  br as R,
  _ as E,
} from "./page-activity-ActivityDetail-6713f46c.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-9bac92b2.js";
import "./en-5d34117c.js";
const F = { class: "avatar-container" },
  L = { class: "avatar-container-content" },
  j = ["src"],
  p = !0,
  D = b({
    __name: "index",
    setup(H) {
      const { t: f } = A(),
        c = $(),
        n = c.getUserInfo,
        l = C(),
        r = I(n.userPhoto);
      async function g(e) {
        if (((r.value = (e + 1).toString()), e < 0))
          return V({ message: f("tipSelectPls") }), !1;
        (await G(R({ userPhoto: (e + 1).toString() }))) &&
          ((n.userPhoto = (e + 1).toString()),
          c.setUserInfo({ ...n }),
          l.go(-1));
      }
      return (e, t) => {
        const h = a("NavBar"),
          k = a("van-checkbox"),
          w = a("van-grid-item"),
          S = a("van-grid");
        return (
          v(),
          u("div", F, [
            s(
              h,
              {
                title: e.$t("changeAvatar"),
                "left-arrow": "",
                onClickLeft: t[0] || (t[0] = (x) => d(l).go(-1)),
              },
              null,
              8,
              ["title"]
            ),
            i("div", L, [
              s(
                S,
                { border: !1, "column-num": 3, gutter: 10 },
                {
                  default: m(() => [
                    (v(),
                    u(
                      P,
                      null,
                      y(20, (x, o) =>
                        s(
                          w,
                          { onClick: (_) => g(o) },
                          {
                            default: m(() => [
                              i(
                                "img",
                                {
                                  class: B(
                                    r.value === (o + 1).toString()
                                      ? "active"
                                      : ""
                                  ),
                                  src: d(z)("main/Avatar", `${o + 1}`),
                                },
                                null,
                                10,
                                j
                              ),
                              N(
                                i(
                                  "div",
                                  null,
                                  [
                                    s(k, {
                                      modelValue: p,
                                      "onUpdate:modelValue":
                                        t[1] || (t[1] = (_) => (p = _)),
                                      "icon-size": "20px",
                                    }),
                                  ],
                                  512
                                ),
                                [[U, r.value === (o + 1).toString()]]
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["onClick"]
                        )
                      ),
                      64
                    )),
                  ]),
                  _: 1,
                }
              ),
            ]),
          ])
        );
      };
    },
  });
const T = E(D, [
  ["__scopeId", "data-v-0cd6dac4"],
  [
    "__file",
    "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/main/Avatar/index.vue",
  ],
]);
export { T as default };
