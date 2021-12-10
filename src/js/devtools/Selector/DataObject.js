
import * as r from "../emptyRecordValue.js"//, r = i(29)
import * as n from "js-yaml" //const n = i(261);
class DataObject {
    static serializeValue(e) {
        return "object" == typeof e ? null === e ? "null" : n.safeDump(e, {
            skipInvalid: true
        }) : e;
    }

    static serializeArray(e) {
        let t = true;
        for (const i of e) if (Array.isArray(i) || "object" == typeof i) {
            t = false;
            break;
        }
        if (t) {
            return e.map(e => e.replace(/,/g, ",")).join(", ");
        }
        return n.safeDump(e, {
            skipInvalid: true
        });
    }

    static extractData(e, t) {
        const i = [];
        for (const n of e) {
            const e = {};
            for (const i of t) {
                if (false === i.extract) continue;
                let t = n;
                for (const e of i.selector) if (t = t[e], undefined === t) {
                    t = r.emptyRecordValue;
                    break;
                }
                Array.isArray(t) ? t = DataObject.serializeArray(t) : null == t ? t = r.emptyRecordValue : "object" == typeof t && (t = DataObject.serializeValue(t)),
                    e[i.key] = t;
            }
            i.push(e);
        }
        return i;
    }

    static isDataEmpty(e) {
        if (e.length > 1) return false;
        for (const t in e[0]) if (e[0][t]) return false;
        return true;
    }
}

export {DataObject}