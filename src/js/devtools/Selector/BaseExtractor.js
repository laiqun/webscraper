import * as r from "./DataObject.js"//const r = i(135);
class BaseExtractor {
	async findData(e) {
		const t = await this.findRawData(e), i = [];
		for (const e of t) {
			const t = r.DataObject.extractData(e.data, e.dataObjectSelectors), n = {
				dataObjectSelectors: e.dataObjectSelectors,
				data: t
			};
			e.schemaOrgType && (n.schemaOrgType = e.schemaOrgType), i.push(n);
		}
		return i;

	}

	getDataObjectSelectorsFromDataObjects(e, t = "") {
		const i = [];
		Array.isArray(e) || (e = [e]);
		for (const t of e) {
			const e = this.getDataObjectSelectorsFromDataObject(t);
			for (const t of e) {
				let e = !1;
				for (const n of i)
					if (n.key === t.key) {
						e = !0;
						break;
					}
				e || i.push(t);
			}
		}
		return i;
	}

	getDataObjectSelectorsFromDataObject(e, t = "", i = []) {
		let n = [];
		for (const r in e) {
			const a = e[r];
			if (Array.isArray(a) || "object" != typeof a) n.push({
				key: t + r,
				selector: i.concat([r]),
				extract: !0
			}); else {
				const e = t + r + "_", o = i.concat([r]);
				const s = this.getDataObjectSelectorsFromDataObject(a, e, o);
				n = n.concat(s);
			}
		}
		return n;
	}
}

export {BaseExtractor}