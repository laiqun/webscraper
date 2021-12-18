import * as i from "../common/Msg.js"
import * as jqueryModule from "../common/lib/jquery.js"

let instance = null;

class ElementQuery2 {
    constructor(e) {
        this.jQuery = e || jqueryModule;
    }

    static find(selector, contextNode) {
        if (null === instance)
            instance = new ElementQuery2(jqueryModule);
        try {
            return instance.find(selector, contextNode);
        } catch (e) {
            throw "ELEMENT_SELECTION_ERROR " + i.default.getMessage(e);
        }
    }

    static setQueryInstance(e) {
        instance = new ElementQuery2(e);
    }

    find(selector, contextNode) {
        selector = selector || "";
        if (this.selectorNeedsSpecialHandling(selector)) {//是否包含了需要特殊处理的selector
            const list = [];
            const SelectorParts = this.getSelectorParts(selector, [","]);
            for (const SelectorPart of SelectorParts) {
                if ("_parent_" === SelectorPart) {
                    this.addElementToList(contextNode, list);
                    continue;
                }
                if (this.selectorNeedsSplitExtractionHandling(SelectorPart)) {//需要单独处理的元素
                    const elements = this.extractElementsWithSplitExtractionSelector(selector, contextNode);
                    this.addElementsToList(elements, list);
                } else {
                    const elements = this.jQuery(SelectorPart, contextNode).get();
                    this.addElementsToList(elements, list);
                }

            }
            return list;
        } else { //不包含直接获取元素集合
            return this.jQuery(selector, contextNode).get();
        }
    }

    extractElementsWithSplitExtractionSelector(selector, contextNode) {
        let parentNodes = [contextNode];
        const SelectorParts = this.getSelectorParts(selector, [":shadow-root", ":iframe"], true);
        for (const SelectorPart of SelectorParts) {
            if (":shadow-root" === SelectorPart) { //筛选所有的selector ,对于特别的selector,仅仅保留特别的
                const tempActualNodes = [];
                for (const node of parentNodes) {
                    //从之前保留的parentNodes中,只选出这一次符合的;
                    // 但是一直都只有一个parentNode,最终也变成了,根据选择器,处理parent node 的内容;
                    // 如果是shadow,那么其节点下的shadowRoot子节点,才放着其孩子元素;如果是iframe 则是contentDocument
                    if (node.shadowRoot)
                        tempActualNodes.push(node.shadowRoot);
                }
                parentNodes = tempActualNodes;
            } else if (":iframe" === SelectorPart) {
                const tempActualNodes = [];
                for (const node of parentNodes) {
                    if (node.contentDocument)
                        tempActualNodes.push(node.contentDocument);
                }
                parentNodes = tempActualNodes;
            } else {
                parentNodes = this.jQuery(SelectorPart, parentNodes).get();
            }
        }
        return parentNodes;
    }
//"html > body > div#csdn-toolbar:nth-of-type(1) > div.toolbar-inside:nth-of-type(2) > div.toolbar-container:nth-of-type(1) > div.toolbar-container-mini-middle:nth-of-type(2) > div:nth-of-type(1) > a.custom_toolbar_content_nomoral[data-report-query][data-report-query='spm=1000.2116.3001.6256']:nth-of-type(1)"
//"html > body > div#csdn-toolbar:nth-of-type
// (1)
// > div.toolbar-inside:nth-of-type
// (2)
// > div.toolbar-container:nth-of-type
// (1)
// > div.toolbar-container-mini-middle:nth-of-type
// (2)
// > div:nth-of-type
// (1)
// > a.custom_toolbar_content_nomoral[data-report-query][data-report-query='spm=1000.2116.3001.6256']:nth-of-type(1)"
    //['html > body > div#csdn-toolbar:nth-of-type', '(1)', ' > div.toolbar-inside:nth-of-type', '(2)',
    // ' > div.toolbar-container:nth-of-type', '(1)',
    // ' > div.toolbar-container-mini-middle:nth-of-type', '(2)',
    // ' > div:nth-of-type', '(1)',
    // ' > a.custom_toolbar_content_nomoral[data-report-query][data-report-query=', "'spm=1000.2116.3001.6256'", ']:nth-of-type', '(1)', '']
    selectorNeedsSpecialHandling(selector) {//需要特殊处理
        //.*? 是惰性匹配 a.*?b匹配最短的，以a开始，以b结束的字符串。如果把它应用于aabab的话，它会匹配aab和ab。
        //x|y  匹配 x 或 y  ".*?",带双引号的最短字符串  '.*?' 带单引号的字符串 \(.*?\) 带圆括号的最短字符串
        //separator 如果是包含子表达式的正则表达式(用左右圆括号包起来),
        //那么返回的数组中包括与这些子表达式匹配的字串（但不包括与整个正则表达式匹配的文本）。
        //如果不包含子表达式,返回的数组中的字串不包括 separator 自身。
        const selectorFragments = selector.split(/(_parent_|:shadow-root|:iframe|".*?"|'.*?'|\(.*?\))/);
        for (const selectorFragment of selectorFragments)
            if ("_parent_" === selectorFragment || ":shadow-root" === selectorFragment || ":iframe" === selectorFragment)
                return true;
        return false;
    }

    selectorNeedsSplitExtractionHandling(selector) {  //需要分别抽取
        const selectorFragments = selector.split(/(:shadow-root|:iframe|".*?"|'.*?'|\(.*?\))/);
        for (const selectorFragment of selectorFragments)
            if (":shadow-root" === selectorFragment || ":iframe" === selectorFragment)
                return true;
        return false;
    }

    getSelectorParts(selector, specialSelectorPartList, AddSpecialSelectorPart = false) {
        const rule = new RegExp("(" + specialSelectorPartList.join("|") + "|\".*?\"|'.*?'|\\(.*?\\))");
        const selectorFragments = selector.split(rule);
        const SelectorParts = [];
        let accumulatedCommonSelector = "";
        for (const selectorFragment of selectorFragments) {
            if (specialSelectorPartList.includes(selectorFragment))//如果是":shadow-root", ":iframe"
            {
                if (accumulatedCommonSelector.trim().length)// 将前面积累的selector 加入到SelectorParts
                    SelectorParts.push(accumulatedCommonSelector.trim());
                if (AddSpecialSelectorPart)// 是否需要把特别的selector 加入到selectorParts
                    SelectorParts.push(selectorFragment);
                accumulatedCommonSelector = "";
            } else
                accumulatedCommonSelector += selectorFragment;
        }
        if (accumulatedCommonSelector.trim().length)
            SelectorParts.push(accumulatedCommonSelector.trim());
        return SelectorParts;
    }

    addElementToList(target, list) {
        if (-1 === list.indexOf(target))
            list.push(target);
    }

    addElementsToList(targets, list) {
        for (const target of targets)
            this.addElementToList(target, list);
    }
}

export {ElementQuery2}