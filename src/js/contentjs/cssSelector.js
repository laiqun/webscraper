import * as cssSelectorArray from "./css_selector/cssSelectorArray.js"
import * as SelectionError from "./SelectionError.js"
import * as cssSelectorArrayItem from "./css_selector/cssSelectorArrayItem.js"
import * as ParentSelector from "./css_selector/ParentSelector.js"
class cssSelector {
    /*
            enableSmartTableSelector: true,
            parent: this.config.parent,
            allowMultipleSelectors: false,
            ignoredClasses: ["-ws-data-preview-element"],
            query: cssSelector => ElementQuery2.ElementQuery2.find(cssSelector, this.config.parent)
    * */
    constructor(selectorSetting) {
        this.parent = selectorSetting.parent || document;
        this.ignoredTags = selectorSetting.ignoredTags || [];
        this.ignoredClassBase = selectorSetting.ignoredClassBase || false;
        this.enableResultStripping = undefined === selectorSetting.enableResultStripping || selectorSetting.enableResultStripping;
        this.enableSmartTableSelector = selectorSetting.enableSmartTableSelector || false;
        this.ignoredClasses = selectorSetting.ignoredClasses || [];
        this.allowMultipleSelectors = selectorSetting.allowMultipleSelectors || false;
        this.query = selectorSetting.query;
    }

    mergeElementSelectorLists(elementSelectors) {
        if (elementSelectors.length < 1)
            throw new SelectionError.SelectionError("No selectors specified");
        if (1 === elementSelectors.length)
            return elementSelectors[0];
        const eachSelectorLength = elementSelectors[0].length;
        for (let index = 0; index < elementSelectors.length; index++) {//长度必须一致？
            if (elementSelectors[index].length !== eachSelectorLength)
                throw new SelectionError.SelectionError("Invalid element count in selector");
        }
        const firstSelector = elementSelectors[0];
        for (let index = 1; index < elementSelectors.length; index++) {
            const currentSelector = elementSelectors[index];
            for (let subIndex = 0; subIndex < eachSelectorLength; subIndex++)
                firstSelector[subIndex].merge(currentSelector[subIndex]);
        }
        return firstSelector;
    }

    stripSelector(mergedSelectorList) {
        const cssSelector = mergedSelectorList.getCssSelector();
        const queriedElements = this.query(cssSelector);
        const IsSameListFunc = otherElementList => {
                if (queriedElements.length !== otherElementList.length)//如果两个list大小不同，直接return false
                    return false;
                for (let index = 0; index < queriedElements.length; index++) //如果两个list 元素都相同，返回true；否则 false
                    if (-1 === [].indexOf.call(otherElementList, queriedElements[index]))
                        return false;
                return true;
            };
        for (let index = mergedSelectorList.length - 1; index >= 0; index--) {
            const oneSelector = mergedSelectorList[index];
            if (null !== oneSelector.index) {
                const index1 = oneSelector.index;
                oneSelector.index = null;
                //下面的mergedSelectorList 和最初的mergedSelectorList 值并不相同，原因是oneSelector 引用了其中的元素，并改变了指向元素的值
                //这里其实是为了试探，是否可以将一些属性设为null，如果修改后，查询的元素集合不变，说明可以被设为null，目的是为了做剪枝法
                const cssSelectorsList = mergedSelectorList.getCssSelector();//
                if( IsSameListFunc(this.query(cssSelectorsList)) === false)
                    oneSelector.index = index1;
            }
        }
        for (let index = mergedSelectorList.length - 1; index >= 0; index--) {
            const oneSelector = mergedSelectorList[index];
            if (true === oneSelector.isDirectChild) {
                oneSelector.isDirectChild = false;
                const t = mergedSelectorList.getCssSelector();
                if ( IsSameListFunc(this.query(t)) === false)
                    oneSelector.isDirectChild = true;
            }
        }
        for (let index = mergedSelectorList.length - 1; index >= 0; index--) {
            const oneSelector = mergedSelectorList[index];
            for (let subIndex = oneSelector.attributes.length - 1; subIndex >= 0; subIndex--) {
                const attribute = oneSelector.attributes[subIndex];
                oneSelector.attributes.splice(subIndex, 1);
                const o = mergedSelectorList.getCssSelector();
                if( IsSameListFunc(this.query(o)) === false)
                    oneSelector.attributes.splice(subIndex, 0, attribute);
            }
        }
        for (let index = mergedSelectorList.length - 1; index >= 0; index--) {
            const oneSelector = mergedSelectorList[index];
            if (0 !== index) {
                mergedSelectorList[index] = null;
                const i = mergedSelectorList.getCssSelector();
                if (IsSameListFunc(this.query(i)))
                    continue;
                mergedSelectorList[index] = oneSelector;
            }
            if (0 !== index && false === oneSelector.isDirectChild && null === oneSelector.index && null === oneSelector.indexn) {
                const t = oneSelector.tag;
                oneSelector.tag = null;
                const i = mergedSelectorList.getCssSelector();
                if ( IsSameListFunc(this.query(i)) === false)
                    oneSelector.tag = t;
            }
            if (oneSelector.previousSiblingText) {
                const t = oneSelector.previousSiblingText;
                oneSelector.previousSiblingText = null;
                const i = mergedSelectorList.getCssSelector();
                if( IsSameListFunc(this.query(i)) === false)
                    oneSelector.previousSiblingText = t;
            }
            if (null !== oneSelector.id) {
                const t = oneSelector.id;
                oneSelector.id = null;
                const i = mergedSelectorList.getCssSelector();
                if(IsSameListFunc(this.query(i)) === false)
                    oneSelector.id = t;
            }
            if (0 !== oneSelector.classes.length) {
                for (let classIndex = oneSelector.classes.length - 1; classIndex >= 0; classIndex--) {
                    const i = oneSelector.classes[classIndex];
                    oneSelector.classes.splice(classIndex, 1);
                    const o = mergedSelectorList.getCssSelector();
                    if ( IsSameListFunc(this.query(o)) === false)
                        oneSelector.classes.splice(classIndex, 0, i);
                }
            }
            for (let subIndex = oneSelector.schemaOrgAttributes.length - 1; subIndex >= 0; subIndex--) {
                const i = oneSelector.schemaOrgAttributes[subIndex];
                oneSelector.schemaOrgAttributes.splice(subIndex, 1);
                const o = mergedSelectorList.getCssSelector();
                if( IsSameListFunc(this.query(o))  === false)
                    oneSelector.schemaOrgAttributes.splice(subIndex, 0, i);
            }
        }
        return mergedSelectorList;
    }

    getElementSelectors(clickedAndSelectedElements, selectionLevel) {
        const result = [];
        for (let index = 0; index < clickedAndSelectedElements.length; index++) {
            const cur_element = clickedAndSelectedElements[index];
            const selectorList = this.getElementSelectorList(cur_element, selectionLevel);
            result.push(selectorList);
        }
        return result;
    }

    getElementSelectorList(currentElement, backSteps) {
        const result = new cssSelectorArray.default;
        result.setCssSelector(this);
        if (this.shouldAddParent(currentElement, backSteps)) {
            const t = new ParentSelector.ParentSelector(currentElement, this.ignoredClasses);
            result.push(t);
            return result;
        }
        for (; currentElement !== this.parent;) {
            if (undefined === currentElement || currentElement === document)
                throw new SelectionError.SelectionError("Selected element is not a child of the given parent.");
            if (this.isIgnoredTag(currentElement.tagName)) {
                currentElement = currentElement.parentNode;
                continue;
            }
            if (backSteps > 0) {
                backSteps--;
                currentElement = currentElement.parentNode;
                continue;
            }
            const i = new cssSelectorArrayItem.default(currentElement, this.ignoredClasses);
            if (currentElement.parentNode === document || this.isIgnoredTag(currentElement.parentNode.tagName))
                i.isDirectChild = false;
            result.push(i);
            currentElement = currentElement.parentNode;
        }
        return result;
    }

    checkSimilarElements(needClassifyElement, oneGroupFirstItem) {
        for (; ;) {
            if (needClassifyElement.tagName !== oneGroupFirstItem.tagName)
                return false;
            if (needClassifyElement === oneGroupFirstItem)
                return true;
            if (undefined === needClassifyElement || "body" === needClassifyElement.tagName || "BODY" === needClassifyElement.tagName)
                return false;
            if (undefined === oneGroupFirstItem || "body" === oneGroupFirstItem.tagName || "BODY" === oneGroupFirstItem.tagName)
                return false;
            needClassifyElement = needClassifyElement.parentNode;
            oneGroupFirstItem = oneGroupFirstItem.parentNode;
        }
    }

    getElementGroups(clickedAndSelectedElements) {
        const groups = [
            [clickedAndSelectedElements[0]]  //先加一个默认的类别 ； 其实是没必要的； 找不到直接新建即可
        ];
        //这个算法和我在mtk写的分组算法非常像 ；遍历所有的类别，如果找不到相似的，就创建一个新的； 否则就加到对应的旧类上
        for (let index = 1; index < clickedAndSelectedElements.length; index++) {
            const currentElement = clickedAndSelectedElements[index];
            let AddFlag = false;
            for (let subIndex = 0; subIndex < groups.length; subIndex++) {
                const oneGroup = groups[subIndex];
                const oneGroupItem = oneGroup[0]; // one group first element
                if (this.checkSimilarElements(currentElement, oneGroupItem)) {
                    oneGroup.push(currentElement);
                    AddFlag = true;
                    break;
                }
            }
            if(AddFlag === false) //need add new group
                groups.push([currentElement]);
        }
        return groups;
    }

    getCssSelector(clickedAndSelectedElements, selectionLevel = 0, allowMultipleFlag = this.allowMultipleSelectors) {
        const enableSmartTableSelectorTemp = this.enableSmartTableSelector;
        if (clickedAndSelectedElements.length > 1)
            this.enableSmartTableSelector = false;
        const elementGroups = this.getElementGroups(clickedAndSelectedElements);
        let result;
        if (allowMultipleFlag) {
            const e = [];
            for (let index = 0; index < elementGroups.length; index++) {
                const elementGroup = elementGroups[index];
                const selectors = this.getElementSelectors(elementGroup, selectionLevel);
                let mergedSelectorList = this.mergeElementSelectorLists(selectors);
                if(this.enableResultStripping)
                    mergedSelectorList = this.stripSelector(mergedSelectorList);
                e.push(mergedSelectorList.getCssSelector());
            }
            result = e.join(", ");
        } else {
            if (1 !== elementGroups.length)
                throw new SelectionError.SelectionError("Shift and click to select multiple element groups");
            const selectors = this.getElementSelectors(clickedAndSelectedElements, selectionLevel);
            let mergedSelectorList = this.mergeElementSelectorLists(selectors);
            if (this.enableResultStripping)
                mergedSelectorList = this.stripSelector(mergedSelectorList);
            result = mergedSelectorList.getCssSelector();
        }
        this.enableSmartTableSelector = enableSmartTableSelectorTemp;
        return result;
    }

    isIgnoredTag(tag) {
        return -1 !== this.ignoredTags.indexOf(tag.toLowerCase());
    }

    shouldAddParent(e, backSteps) {
        for (let index = 0; index < backSteps; index++)
            e = e.parentElement;
        return e === this.parent;
    }
}

export {cssSelector as default}