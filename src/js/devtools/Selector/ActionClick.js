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
        return false;
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

    getDataColumns() {
        return [];
    }

    async click(e) {
        const element = await e.getElement(this.clickElementSelector);
        if(null !== element )
        {
            await element.click("real-like-events");
            await e.webPage.waitForPageLoadComplete(true, this.delay);
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