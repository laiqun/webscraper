import {Async} from "../Async.js"
import * as c from "./WebPageElement.js"
import * as u from "../../contentjs/log.js"
import {WebPageDriverType} from "./WebPageDriverType.js"

let emptyRecordValue = null;
class Selector {
    constructor() {
        this.id = "";
        this.parentSelectors = [];
    }

    willReturnMultipleRecords() {
        return this.canReturnMultipleRecords() && this.multiple;
    }

    updateData(e) {
        let t = ["id", "type", "parentSelectors"];
        t = t.concat(this.getFeatures());
        for (const i in e)
            t.includes(i) ? this[i] = e[i] : u.Log.notice("configuring incorrect key for selector", {
                key: i,
                selector: JSON.stringify(this)
            });
    }

    getItemCSSSelector() {
        return "*";
    }

    hasParentSelector(e) {
        return this.parentSelectors.includes(e);
    }

    removeParentSelector(selector_id) {
        const number = this.parentSelectors.indexOf(selector_id);
        if(-1 !== number)
            this.parentSelectors.splice(number, 1);
    }

    renameParentSelector(e, t) {
        if (this.hasParentSelector(e)) {
            const i = this.parentSelectors.indexOf(e);
            this.parentSelectors.splice(i, 1, t);
        }
    }

    async getDataElements(e) {
        const t = await e.getElements(this.selector);
        return this.multiple ? t : t.length > 0 ? [t[0]] : [];
    }

    async getData(e, t) {
        await this.waitDelay();
        return await this._getData(e, t);
    }

    async getDataArray(e) {
        var t, i;
        const n = [];
        try {
            var o = await this.getData(e);
            for (let r of o) {
                const e = r;
                if (e instanceof c.WebPageElement)
                    if (e.driver === WebPageDriverType.chrometab) {
                        const t = await e.getClone();
                        n.push(t);
                    } else
                        n.push(e);
                else
                    n.push(e);
            }
        } catch (e) {
            t = {
                error: e
            };
        } finally {
            /*
            try {
                r && !r.done && (i = o.return) && (await i.call(o));
            } finally {
                if (t) throw t.error;
            }*/
        }
        return n;
    }

    getEmptyRecord() {
        const e = this.getDataColumns();
        const t = {};
        for (const i of e)
            t[i] = emptyRecordValue;
        return t;
    }

    hasFeature(e) {
        return this.getFeatures().includes(e);
    }

    isLinkSelector() {
        return !1;
    }

    shouldDeduplicateChildSelectorData() {
        return !1;
    }

    getDeprecatedFeatures() {
        return [];
    }

    isDeprecatedFeature(e) {
        return this.getDeprecatedFeatures().includes(e);
    }

    async waitDelay() {
        const e = this.delay || 0;
        0 !== e && (await Async.sleep(e));
    }

    getExperimentalFeatures() {
        return [];
    }
}

export {Selector}
