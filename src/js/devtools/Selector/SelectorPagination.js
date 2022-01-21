import * as o from "./Selector.js" //o = i(10),
import * as s from "./LinkFromHrefExtractor.js"//s = i(401),
import * as l from "./LinkFromInnerTextExtractor.js" //l = i(402),
import * as c from "./LinkFromAttributesExtractor.js" //c = i(404),
import * as u from "./LinkFromInlineScriptExtractor.js"//u = i(405),
import * as d from "./LinkExtractorStrategy.js"//d = i(410),
import * as p from "./ClickMoreElementExtractorStrategy.js"//p = i(411),
import * as h from "./ClickOnceExtractorStrategy.js"//h = i(412),
import * as f from "./LinkFromClickRedirectStrategy.js"//f = i(413),
import * as m from "./LinkFromInterceptableJavaScriptClickExtractor.js"//const      m = i(414);
       // console.log("SelectorPagination module");
class SelectorPagination extends o.Selector {
    constructor(e) {
        super();
        this.paginationType = "auto";
        delete e.multiple;
        this.updateData(e);
        if(!this.parentSelectors.includes(this.id) )
            this.parentSelectors.push(this.id);
    }

    get multiple() {
        return true;
    }

    canCreateNewJobs() {
        return true;
    }

    canHaveChildSelectors() {
        return true;
    }

    canReturnMultipleRecords() {
        return true;
    }

    getDataColumns() {
        return "clickMore" === this.paginationType || "clickOnce" === this.paginationType ? [] : [this.id];
    }

    getFeatures() {
        return ["selector", "paginationType"];
    }

    willReturnElements() {
        return false;
    }

    shouldDeduplicateChildSelectorData() {
        return true;
    }

    async _getData(parentElement, dataDeDuplicator) {
        //console.log("pagination _getData");
        let error_temp, a;
        const dataElements = await this.getDataElements(parentElement);
        const strategy = this.strategies();
        const l = {
            id: this.id,
            selector: this.selector,
            parentElement: parentElement,
            dataDeduplicator: dataDeDuplicator,//Deduplication删除重复
            dataElements: dataElements
        };
        let result =[];
        //result.push(l.parentElement);
        for (const strategies1Element of strategy) {
            let t = false;
            try {
                error_temp = undefined;
                let  u = await strategies1Element.extract(l);
                for(let c of u)
                {
                //    t = true;
                    result.push(c);
                }
            } catch (e) {
                error_temp = {
                    error: e
                };
            } finally {
                /*
                try {
                    c && !c.done && (a = u.return) && (await a.call(u));
                } finally {
                    if (i) await i.error;
                }*/
            }
            if (error_temp)
                return error_temp.error;
            if (result.length > 0)
                break;
        }
        if(result.length)
            return result;
        else
            return undefined;
    }

    strategies() {
        switch (this.paginationType) {
            case "auto":
                return [new d.LinkExtractorStrategy(new s.LinkFromHrefExtractor),
                    new d.LinkExtractorStrategy(new u.LinkFromInlineScriptExtractor),
                    new d.LinkExtractorStrategy(new c.LinkFromAttributesExtractor),
                    new p.ClickMoreElementExtractorStrategy];

            case "linkFromHref":
                return [new d.LinkExtractorStrategy(new s.LinkFromHrefExtractor)];

            case "linkFromInlineScript":
                return [new d.LinkExtractorStrategy(new u.LinkFromInlineScriptExtractor)];

            case "linkFromAttributes":
                return [new d.LinkExtractorStrategy(new c.LinkFromAttributesExtractor)];

            case "linkFromInnerText":
                return [new d.LinkExtractorStrategy(new l.LinkFromInnerTextExtractor)];

            case "linkFromInterceptableJavaScriptClick":
                return [new d.LinkExtractorStrategy(new m.LinkFromInterceptableJavaScriptClickExtractor)];

            case "clickMore":
                return [new p.ClickMoreElementExtractorStrategy];

            case "linkFromClickRedirect":
                return [new f.LinkFromClickRedirectStrategy];

            case "clickOnce":
                return [new h.ClickOnceExtractorStrategy];

            default:
                throw new Error("Unknown pagination type " + this.paginationType);
        }
    }
}

export {SelectorPagination}