import * as ElementQuery2 from "./ElementQuery2.js"

class ElementReferences {
    constructor() {
        this.elementReferences = [];
    }

    async getCSSSelector(e) {
        let index, curElement;
        let refElement = this.getElementByReference(e);
        for (index = 1, curElement = refElement.previousElementSibling; null !== curElement; index++)
            curElement = curElement.previousElementSibling;
        //index负责数据，从1数到参考元素的第一个为null的左兄弟节点
        let result = `${refElement.tagName.toLocaleLowerCase()}:nth-child(${index})`;

        for (; refElement.parentElement;) {
            refElement = refElement.parentElement;
            const e = refElement.tagName.toLocaleLowerCase();
            if ("body" === e || "html" === e)
                result = `${e}>${result}`;
            else {
                for (index = 1, curElement = refElement.previousElementSibling; null !== curElement; index++)
                    curElement = curElement.previousElementSibling;
                result = `${e}:nth-child(${index})>${result}`;
            }
        }
        return result;

    }

    getElementReference(targetElement) {
        let pos = this.elementReferences.indexOf(targetElement);
        if (-1 === pos) {
            this.elementReferences.push(targetElement);
            pos = this.elementReferences.length - 1;
        }
        return pos;
    }

    getElementByReference(refIndex) {
        const matchedElement = this.elementReferences[refIndex];
        if (undefined === matchedElement)
            throw "ACCESSING_UNDEFINED_ELEMENT probably page was reloaded";
        if (false === matchedElement.isConnected &&
                ("html" === matchedElement.tagName ||
                "body" === matchedElement.tagName ||
                "HTML" === matchedElement.tagName ||
                "BODY" === matchedElement.tagName))
        {
            const n = document.querySelector(matchedElement.tagName);
            this.elementReferences[refIndex] = n;
            return n;
        }
        return matchedElement;
    }

    getElements(cssSelector, refIndex) {
        let findedElements;
        if (null != refIndex) {
            const context = this.getElementByReference(refIndex);
            findedElements = ElementQuery2.ElementQuery2.find(cssSelector, context);
        }
        else
            findedElements = ElementQuery2.ElementQuery2.find(cssSelector);
        const result = [];
        //按住shift写多个的情形,现在n中是具体的,实际的元素
        for (const e of findedElements) {
            e.isConnected;
            result.push(this.getElementReference(e));
        }
        return result;
    }

    getClone(refIndex) {
        const element = this.getElementByReference(refIndex);
        const clonedElement = element.cloneNode(true);
        let originalElementList, clonedElementList;
        //其中的select标签需要特殊处理
        if ("SELECT" === element.tagName) {
            originalElementList = [element];
            clonedElementList = [clonedElement];
        } else {
            originalElementList = element.querySelectorAll("select");
            clonedElementList = clonedElement.querySelectorAll("select");
        }
        if (originalElementList.length > 0)
            for (let originalIndex = 0; originalIndex < originalElementList.length; originalIndex++)
                for (let clonedIndex = 0; clonedIndex < originalElementList[originalIndex].options.length; clonedIndex++)
                    clonedElementList[originalIndex].options[clonedIndex].selected = originalElementList[originalIndex].options[clonedIndex].selected;
        return this.getElementReference(clonedElement);
    }

    getRootElement() {
        return this.getElementReference(document);
    }

    async getElement(cssSelector, context) {
        const n = await this.getElements(cssSelector, context);
        if (0 === n.length)
            return null;
        else
            return n[0];
    }
}


export {ElementReferences}