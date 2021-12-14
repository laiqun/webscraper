import * as a from "./BasePaginationStrategy.js"//const a = i(118);
class LinkExtractorStrategy extends a.BasePaginationStrategy {
    constructor(e) {
        super();
        this.extractor = e;
    }

    async extract(e) {
        const {id: id, dataElements: elements} = e;
        let result = [];
        for (const element of elements) {
            const extracted = await this.extractor.execute(element);
            if (extracted) {
                result.push({
                    [id]: extracted,
                    _follow: extracted,
                    _followSelectorId: id
                });
            }
        }
        return result;
    }
}

export {LinkExtractorStrategy}