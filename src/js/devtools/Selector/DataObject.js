import * as r from "../emptyRecordValue.js"//, r = i(29)
import * as n from "js-yaml" //const n = i(261);
class DataObject {
	static serializeValue(e) {
		return "object" == typeof e ? null === e ? "null" : n.safeDump(e, {
			skipInvalid: !0
		}) : e;
	}

	static serializeArray(e) {
		let t = !0;
		for (const i of e)
			if (Array.isArray(i) || "object" == typeof i) {
				t = !1;
				break;
			}
		if (t) {
			return e.map(e => e.replace(/,/g, ",")).join(", ");
		}
		return n.safeDump(e, {
			skipInvalid: !0
		});
	}

	static extractData(e, t) {
		const i = [];
		for (const n of e) {
			const e = {};
			for (const i of t) {
				if (!1 === i.extract)
					continue;
				let t = n;
				for (const e of i.selector)
					if (t = t[e], void 0 === t) {
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
		if (e.length > 1)
			return !1;
		for (const t in e[0]) if (e[0][t])
			return !1;
		return !0;
	}
}

export {DataObject}