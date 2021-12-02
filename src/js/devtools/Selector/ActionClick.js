import * as o from "./Selector.js"//const o = i(10);
class ActionClick extends o.Selector {
    constructor(e) {
        super();
        this.type = "ActionClick";
        this.clickElementSelector = "";
        this.delay = 2000;
        this.updateData(e);
    }

    get selector() {
        return "_parent_";
    }

    canReturnMultipleRecords() {
        return !1;
    }

    canHaveChildSelectors() {
        return !0;
    }

    canCreateNewJobs() {
        return !1;
    }

    willReturnElements() {
        return !0;
    }

    getDataColumns() {
        return [];
    }

    async click(e) {
        const t = await e.getElement(this.clickElementSelector);
        if(null !== t )
        {
            await t.click("real-like-events");
            await e.webPage.waitForPageLoadComplete(!0, this.delay);
        }
    }

    async _getData(e) {
        await this.click(e);
        await e;
        return  undefined;
    }

    getFeatures() {
        return ["clickElementSelector", "performActionButton", "delay"];
    }
}

export {ActionClick}