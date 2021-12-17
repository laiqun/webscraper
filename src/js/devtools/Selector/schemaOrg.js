import * as n from "./SchemaOrgSchema.js"//const n = i(284);
let schemaOrg = new class {
    constructor() {
        this.basicTypes = [], this.ignoredTypes = ["Thing"], this.ignoredProperties = [],
            this.initBasicTypes();
    }

    getTypes() {
        return ["Product"];
    }

    getTypeSelectors(e) {
        const t = n.SchemaOrgSchema.types[e].specific_properties;
        let i = [];
        for (const e of t) {
            const t = this.getPropertyDataSelectors(e, [e], e);
            i = i.concat(t);
        }
        return i;
    }

    getSelectorsFromDataObject(e, t = "", i = []) {
        let r = [];
        Array.isArray(e) || (e = [e]);
        for (const a of e) {
            const e = a["@type"];
            if (void 0 === e) continue;
            const o = n.SchemaOrgSchema.types[e];
            if (void 0 !== o) for (const e in a) {
                if (e.startsWith("@")) continue;
                if (!o.properties.includes(e)) continue;
                const n = a[e];
                if (Array.isArray(n) || "object" != typeof n || null == n) r.push({
                    key: t + e,
                    selector: i.concat([e]),
                    extract: !0
                }); else {
                    const a = t + e + "_", o = i.concat([e]), s = this.getSelectorsFromDataObject(n, a, o);
                    r = r.concat(s);
                }
            }
        }
        return r;
    }

    getTypeFromDataObject(e) {
        const t = e["@type"];
        if (void 0 !== t)
            return void 0 !== n.SchemaOrgSchema.types[t] ? t : void 0;
    }

    initBasicTypes() {
        for (const e in n.SchemaOrgSchema.datatypes)
            this.basicTypes.push(e);
    }

    isIgnoredType(e) {
        return !!this.ignoredTypes.includes(e);
    }

    isIgnoredProperty(e) {
        return !!this.ignoredProperties.includes(e);
    }

    isBasicDataType(e) {
        return !!this.basicTypes.includes(e);
    }

    getPropertyDataSelectors(e, t, i) {
        if (this.isIgnoredProperty(i)) return [];
        if (t.length >= 4) {
            return [];
        }
        let r = [];
        const a = n.SchemaOrgSchema.properties[i];
        for (const i of a.ranges)
            if (!this.isIgnoredType(i))
                if (this.isBasicDataType(i))
                    r.push({
                        key: e,
                        selector: t,
                        extract: !0
                    });
                else if (void 0 === n.SchemaOrgSchema.types[i])
                    r.push({
                        key: e,
                        selector: t,
                        extract: !0
                    });
                else
                    for (const a of n.SchemaOrgSchema.types[i].specific_properties) {
                        const i = this.getPropertyDataSelectors(`${e}_${a}`, t.concat([a]), a);
                        r = r.concat(i);
                    }
        return r;
    }
};

export {schemaOrg}