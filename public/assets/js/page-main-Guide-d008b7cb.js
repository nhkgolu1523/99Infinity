import {
    G as s,
    R as i,
    r,
    C as d,
    H as c,
    I as _,
    Q as l,
    O as u,
    J as p,
    N as f
} from "./common.modules-afd11eec.js";
import {
    A as m,
    c4 as v,
    _ as g
} from "./page-activity-ActivityDetail-2fb211b4.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-58bee5fe.js";
import "./en-818c8e10.js";
const x = {
        class: "guide-container"
    },
    w = ["innerHTML"],
    y = s({
        __name: "index",
        setup(k) {
            const a = i(),
                n = r();
            return d(async () => {
                const e = await m(v());
                e && (n.value = e.data.playingGuide)
            }), (e, t) => {
                const o = c("NavBar");
                return f(), _("div", x, [l(o, {
                    title: e.$t("guideTitle"),
                    "left-arrow": "",
                    onClickLeft: t[0] || (t[0] = B => u(a).go(-1))
                }, null, 8, ["title"]), p("div", {
                    class: "guide-container-content",
                    innerHTML: n.value
                }, null, 8, w)])
            }
        }
    });
const R = g(y, [
    ["__scopeId", "data-v-99f1dd99"],
    ["__file", "/usr/local/jenkins-prod/workspace/AR095-Pages-india-yaarwin/src/views/main/Guide/index.vue"]
]);
export {
    R as
    default
};