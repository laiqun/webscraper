import * as a from "./BaseExtractor.js"//, a = i(97)
import * as r from "../Obj.js"//const r = i(57);
class JsonLdExtractor extends a.BaseExtractor {
    async extractData(e, t) {
        return Promise.reject(new Error("extractData not implemented"));
    }

    expandGraphs(e) {
        const t = [];
        for (const i of e) {
            if (undefined === i["@graph"] || !Array.isArray(i["@graph"])) {
                t.push(i);
                continue;
            }
            const e = i["@graph"];
            for (const n of e) {
                const e = r.Obj.clone(i);
                delete e["@graph"];
                const a = Object.assign(e, n);
                t.push(a);
            }
        }
        return t;
    }

    async findRawData(e) {
        const t = [], i = await e.getElements("script");
        for (const e of i) {
            const i = await e.getText();
            try {
                let e = JSON.parse(i);
                Array.isArray(e) || (e = [e]), e = this.expandGraphs(e);
                const n = this.getDataObjectSelectorsFromDataObjects(e);
                t.push({
                    dataObjectSelectors: n,
                    data: e
                });
            } catch (e) {
            }
        }
        return t;
    }
}

export {JsonLdExtractor}