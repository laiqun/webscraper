import * as n from "./CSV.js" //n = i(415),
import * as a from "./selectorFactory.js" //a = i(94),
import * as l from "./Selector/Url.js" //  , l = i(19)
import * as r from "./SelectorList.js" //r = i(215),
import * as o from "./Obj.js"//o = i(57),
import crypto from "crypto-browserify" //const     s = i(140);

class Sitemap {
    constructor(doc) {
        this.initData(doc);
    }

    initData(doc) {
        this._id = doc._id;
        this.startUrl = this.fixStartUrls(doc.startUrl);
        this.auth = doc.auth;
        const t = new r.SelectorList(doc.selectors);
        this.selectors = t;
        this.websiteStateSetup = doc.websiteStateSetup;
        if (doc.hashHistory && doc.hashHistory.length > 0)
            this.hashHistory = doc.hashHistory;
        else
            this.setHashHistory();
    }

    toString() {
        let e = JSON.parse(JSON.stringify(this));
        delete e.hashHistory;
        delete e._rev;
        delete e._rev_tree;
        e = this.deleteDefaultExperimentalAttributes(e);
        return JSON.stringify(e);
    }

    getAllSelectors(e) {
        return this.selectors.getAllSelectors(e);
    }

    getDirectChildSelectors(e) {
        return this.selectors.getDirectChildSelectors(e);
    }

    getSelectorIds() {
        const e = ["_root"];
        this.selectors.forEach(t => {
            e.push(t.id);
        });
        return e;
    }

    getPossibleParentSelectorIds() {
        const e = ["_root"];
        this.selectors.forEach(t => {
            t.canHaveChildSelectors() && e.push(t.id);
        });
        return e;
    }

    getStartUrls() {
        let e;
        e = Array.isArray(this.startUrl) ? this.startUrl : [this.startUrl];
        const startUrls = [];
        e.forEach(e => {
            const i = (e, t) => {
                for (; e.length < t;) e = "0" + e;
                return e;
            }, n = e.match(/^(.*?)\[(\d+)\-(\d+)(:(\d+))?\](.*)$/);
            if (n) {
                const e = n[2], r = n[3], a = parseInt(e, 10), o = parseInt(r, 10);
                let s = 1;
                undefined !== n[5] && (s = parseInt(n[5], 10));
                for (let l = a; l <= o; l += s) e.length === r.length ? startUrls.push(n[1] + i(l.toString(), e.length) + n[6]) : startUrls.push(n[1] + l + n[6]);
                return startUrls;
            }
            startUrls.push(e);
        });
        return startUrls;
    }

    updateSelector(originalSelector, t) {
        const after_selector = a.selectorFactory(t);
        if (!this.hasSelector(originalSelector.id)) {
            this.selectors.push(after_selector);
            return undefined;
        }
        if (originalSelector.id !== t.id) {
            this.selectors.forEach(i => {
                i.renameParentSelector(originalSelector.id, t.id);
            });
            const i = t.parentSelectors.indexOf(originalSelector.id);
            -1 !== i && t.parentSelectors.splice(i, 1, t.id);
        }
        let find_flag = false;
        for (const selectorIndex in this.selectors)
            if (this.selectors[selectorIndex].id === originalSelector.id) {
                this.selectors.splice(selectorIndex, 1, after_selector);
                find_flag = true;
            }
        if (find_flag == false)
            throw new Error("Couldn't find the selector to replace");
    }

    isOrphanedSelector(selectorID) {
        const mark_map = {};
        const findOldestParent = selector_id => {
            if (undefined !== mark_map[selector_id])
                return;
            mark_map[selector_id] = true; //记录为已经处理过
            const selector = this.getSelectorById(selector_id);
            if (null !== selector)
                for (const parent of selector.parentSelectors)
                    findOldestParent(parent);
        };
        findOldestParent(selectorID);
        return undefined == mark_map._root;//如果能找，直到_root，说明不是孤儿；如果达到不了_root，说明是孤儿
    }

    deleteSelector(selector) {
        this.removeSingleSelector(selector.id);
        const OrphanSet = [];
        for (const _selector of this.selectors)
            if (this.isOrphanedSelector(_selector.id))
                OrphanSet.push(_selector.id);
        for (const orphan of OrphanSet)
            this.removeSingleSelector(orphan);
    }

    getDataTableId() {
        return this._id.replace(/\./g, "_");
    }

    exportSitemap() {
        const e = JSON.parse(JSON.stringify(this));
        delete e._rev;
        return JSON.stringify(e);
    }

    importSitemap(e) {
        const t = JSON.parse(e);
        this.initData(t);
    }

    getDataColumns() {
        let e = ["web-scraper-order", "web-scraper-start-url"];
        this.selectors.forEach(t => {
            e = e.concat(t.getDataColumns());
        });
        return  e;
    }

    getDataExportCsvBlob(e) {
        const t = this.getDataColumns();
        return n.CSV.getCsvBlob(e, t);
    }

    getSelectorById(e) {
        return this.selectors.getSelectorById(e);
    }

    hasSelector(e) {
        for (const t of this.selectors)
            if (t.id === e)
                return true;
        return false;
    }

    clone() {
        const e = JSON.parse(JSON.stringify(this));
        return new Sitemap(e);
    }

    getSingleSelectorDataPreviewSelectors(parentSelectorIds, selectorId) {
        const cloneSitemap = this.clone();
        const selector = cloneSitemap.selectors.getSelector(selectorId);
        const result = [];
        for (let index = parentSelectorIds.length - 1; index >= 0; index--) {
            const oneParent = parentSelectorIds[index];
            if ("_root" === oneParent) break;
            const oneParentSelector = cloneSitemap.selectors.getSelector(oneParent);
            oneParentSelector.parentSelectors = [parentSelectorIds[index - 1]];
            result.unshift(oneParentSelector);// 方法将新项添加到数组的开头，并返回新的长度。
        }
        selector.parentSelectors = [parentSelectorIds[parentSelectorIds.length - 1]];
        result.push(selector);
        if ( !selector.isLinkSelector()) {
            const addAllNotLinkChild = selectorId => {//selectorId为非LinkSelector的ID
                for (const selector1 of cloneSitemap.selectors)
                    if(selector1.hasParentSelector(selectorId) )//如果有个Selector父元素是selectorId
                    {
                        if(!result.includes(selector1))//如果结果里面没包含，则加入
                        {
                            result.push(selector1);
                            if(! selector1.isLinkSelector() )
                                addAllNotLinkChild(selector1.id);
                        }
                    }
            };
            addAllNotLinkChild(selectorId);
        }
        return result;
    }

    getSitemapHash() {
        const e = o.Obj.recursiveKeySort(JSON.parse(JSON.stringify(this))).toString();//这里深拷贝一下，不影响原来的值
        return crypto.createHash("sha256").update(e).digest("hex");
    }

    setHashHistory(overrideLastHash = false) {
        console.log("setHashHistory");
        const sitemapHash = this.getSitemapHash();
        if (this.hashHistory) {
            /*['9622df078b6b2fdd668d3f1dd3cf7afeb152ce617a23fab89cba80d55fabe4f0', '3682e7019145b95e9a37f38dfc704000b113296bf953b87ccef7e073019fef9d', '476beafeb0786f0c1415581d597c45b890dc5445f4533613c0bae5f15692d05f', '20b9d157838f2e302e951843d705ebafa6892a617af1ee220e14a4ed89297ff2', 'ede1be90bfe812968181ed8d3815f0c5543635f34dea6cb3975b9387dd761934', 'eb0ffcc206e48a3884b92ccc7cd492fbeb0aae9f9fdfedd1102600d1111881f5', '4d8418d45984e9f757fd703c970387971b8dcd5c94e7be7de830806a9ab18f0a', 'dc4e9925c7fd0bc6d4adcfcf21922a89b1c06e05f60235bc25dc2ca5dbc3540b']*/
            const lastHash = this.hashHistory.slice(-1)[0];//this.hashHistory.slice(-1)得到的是[最后一项],后面的[0]是为了取数组内容
            if (overrideLastHash)
                this.hashHistory[this.hashHistory.length - 1] = sitemapHash;
            else if (lastHash !== sitemapHash)
                this.hashHistory.push(sitemapHash);
            if (this.hashHistory.length >= 100)
                this.hashHistory = this.hashHistory.slice(-100); //取最后的100项
        } else
            this.hashHistory = [sitemapHash];
    }

    deduplicateLastHashes() {
        return this.hashHistory[this.hashHistory.length - 1] !== this.hashHistory[this.hashHistory.length - 2] || (this.hashHistory.pop(),
            false);
    }

    getFirstStartUrlDomain() {
        return l.Url.getDomain(Array.isArray(this.startUrl) ? this.startUrl[0] : this.startUrl);
    }

    removeSingleSelector(selector_id) {
        for (const selectorsKey in this.selectors)
            if (this.selectors[selectorsKey].id === selector_id) {
                this.selectors.splice(selectorsKey, 1);
                break;
            }
        this.selectors.forEach(selector => {
            if (selector.hasParentSelector(selector_id)) {
                selector.removeParentSelector(selector_id);
                if (0 === selector.parentSelectors.length)
                    this.deleteSelector(selector);
            }
        });
    }

    fixStartUrls(e) {
        "string" == typeof e && (e = [e]);
        const t = [];
        for (const i of e) t.push(i.replace(/[^\x00-\x7F]/g, e => {
            try {
                return encodeURIComponent(e);
            } catch (t) {
                return e;
            }
        }));
        return t;
    }

    deleteDefaultExperimentalAttributes(e) {
        for (const [t, i] of Object.entries(e.selectors)) {
            const n = a.selectorFactory(i), r = n.getExperimentalFeatures();
            if (r.length > 0) {
                const i = a.selectorFactory({
                    type: n.type
                });
                for (const a of r) n[a] === i[a] && delete e.selectors[t][a];
            }
        }
        return e;
    }
}

export {Sitemap}

