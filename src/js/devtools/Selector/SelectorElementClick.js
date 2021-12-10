//
import * as o from "./Selector.js"//o = i(10),
import * as s from "./UniqueElementList.js"//const  s = i(85);
class SelectorElementClick extends o.Selector {
    constructor(e) {
        super(), this.type = "SelectorElementClick", this.clickActionType = "auto", this.clickElementSelector = "",
            this.clickElementUniquenessType = "uniqueText", this.clickType = "clickOnce", this.delay = 2e3,
            this.discardInitialElements = "discard-when-click-element-exists", this.multiple = true,
            this.selector = "", true === e.discardInitialElements || "discard" === e.discardInitialElements ? e.discardInitialElements = "discard" : false === e.discardInitialElements || "do-not-discard" === e.discardInitialElements ? e.discardInitialElements = "do-not-discard" : "discard-when-click-element-exists" === e.discardInitialElements ? e.discardInitialElements = "discard-when-click-element-exists" : e.discardInitialElements = "do-not-discard",
            this.updateData(e);
    }

    canReturnMultipleRecords() {
        return true;
    }

    canHaveChildSelectors() {
        return true;
    }

    canCreateNewJobs() {
        return false;
    }

    willReturnElements() {
        return true;
    }

    getClickActionType() {
        return undefined === this.clickActionType ? "auto" : this.clickActionType;
    }

    async getClickElements(e) {
        return await e.getElements(this.clickElementSelector);
    }

    getClickElementUniquenessType() {
        return undefined === this.clickElementUniquenessType ? "uniqueText" : this.clickElementUniquenessType;
    }

    async addInitialElements(e, t) {
        if ("discard" === this.discardInitialElements) return;
        if ("discard-when-click-element-exists" === this.discardInitialElements) {
            if ((await this.getClickElements(e)).length > 0) return;
        }
        const i = await this.getDataElements(e);
        for (const e of i) await t.push(e);
    }

    async _getData(e) {
        await this.waitDelay();
        const t = parseInt("" + this.delay, 10) || 0, i = new s.UniqueElementList("uniqueHTMLText"),
            n = new s.UniqueElementList(this.getClickElementUniquenessType()), a = this.getClickActionType();
        await this.addInitialElements(e, i);
        for (const e of i.getElements()) await await e;
        for (; ;) {
            const o = await this.getClickButton(e, n);
            if (false === o) break;
            "clickOnce" === this.clickType && (await n.push(o)), await o.click(a), await e.webPage.waitForPageLoadComplete(false, t);
            const s = await this.getDataElements(e), l = i.length;
            for (const e of s) {
                (await i.push(e)) && (await await e);
            }
            const c = i.length - l;
            ("clickOnce" === this.clickType || "clickMore" === this.clickType && 0 === c) && (await n.push(o));
        }
    }

    getDataColumns() {
        return [];
    }

    getFeatures() {
        return ["selector", "multiple", "delay", "clickElementSelector", "clickType", "discardInitialElements", "clickElementUniquenessType", "clickActionType"];
    }

    getExperimentalFeatures() {
        return ["clickActionType"];
    }

    async getClickButton(e, t) {
        const i = await this.getClickElements(e);
        for (const e of i) {
            if (!(await t.isElementAdded(e))) return e;
        }
        return false;
    }
}


export {SelectorElementClick}