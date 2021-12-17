import {Selector} from "./Selector.js";
import {Url} from "./Url.js"
class SelectorLink extends Selector {
    constructor(e) {
        super();
        this.type = "SelectorLink";
        this.selector = "";
        this.multiple = false;
        this.delay = 0;
        this.updateData(e);
    }

    canReturnMultipleRecords() {
        return true;
    }

    canHaveChildSelectors() {
        return true;
    }

    canCreateNewJobs() {
        return true;
    }

    willReturnElements() {
        return false;
    }

    getLinkType() {
        return undefined === this.linkType ? "link" : this.linkType;
    }

    async getLink(e) {
        const linkType = this.getLinkType();
        if ("link" === linkType) {
            return await this.getLinkFromHrefAttribute(e);
        }
        if ("text" === linkType) {
            return await this.getLinkFromText(e);
        }
        throw "unknown link type." + linkType;
    }

    async getLinkFromHrefAttribute(e) {
        return await e.getNativeAttr("href");
    }

    async getLinkFromText(e) {
        return await e.getText();
    }

    async _getData(e) {
        const dataElements = await this.getDataElements(e);
        if(false === this.multiple && 0 === dataElements.length)
             this.getEmptyRecord();
        let result =[];
        for (const dataElement of dataElements) {
            const text = await dataElement.getText();
            let link = await this.getLink(dataElement);
            link = Url.escapeWhiteSpace(link);
            const oneItem = {
                [this.id]: text,
                [this.id + "-href"]: link,
                _followSelectorId: this.id,
                _follow: link
            };
            result.push(oneItem) ;
        }
        return result;
    }

    getDataColumns() {
        return [this.id, this.id + "-href"];
    }

    getFeatures() {
        return ["selector", "multiple", "delay", "linkType"];
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }

    getItemCSSSelector() {
        return "a";
    }

    isLinkSelector() {
        return true;
    }
}

export {SelectorLink}

