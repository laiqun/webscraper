import * as buffer from "buffer"
import * as ExtractorBase from "./ExtractorBase.js"
import * as Msg from "../../common/Msg.js"

class ScriptRunner extends ExtractorBase.ExtractorBase {
    async extract(t, n) {

        const r = new buffer.Buffer(n, "utf8").toString("base64");
        const i = "web-scraper-callback" + Math.random().toString(36).substring(7);
        let s;
        s = this.elementReferences.getElementByReference(t) === document ? "" : await this.elementReferences.getCSSSelector(t);
        const a = `(${this.scriptWrapper.toString()})("${i}","${s}","${r}");`;
        try {
            return await this.executeScript(i, a);
        } catch (e) {
            throw new Error("SCRIPT_SELECTOR_ERROR: " + Msg.default.getMessage(e));
        }
    }

    executeScript(e, t) {
        return new Promise((resolve, reject) => {
            document.addEventListener(e, e => {
                const t = e.detail;
                try {
                    const e = JSON.parse(t);
                    e.success ? resolve(e.response) : reject(e.error);
                } catch (e) {
                    reject(e.toString());
                }
            }, {
                once: !0,
                capture: !0
            });
            const i = document.createElement("script");
            i.id = e, i.type = "text/javascript", i.innerHTML = t, document.body.appendChild(i);
        });
    }

    get scriptWrapper() {
        return (e, t, n) => {
            const i = t => {
                const n = JSON.stringify(t), r = new CustomEvent(e, {
                    detail: n
                });
                document.dispatchEvent(r);
                document.getElementById(e).remove();
            };
            try {
                const e = atob(n);
                const o = new (0, Object.getPrototypeOf(() =>  {
                }).constructor)("parentElement", e);
                const s = o("" === t ? document : document.querySelectorAll(t)[0], e);
                Array.isArray(s) ? i({
                    success: !0,
                    response: s
                }) : s.then(e => {
                    i({
                        success: !0,
                        response: e
                    });
                }).catch(e => {
                    i({
                        success: !1,
                        error: e.toString()
                    });
                });
            } catch (e) {
                i({
                    success: !1,
                    error: e.toString()
                });
            }
        };
    }
}

export {ScriptRunner};
// }).call(this, buffer.Buffer);   //n(60)  https://github.com/feross/buffer