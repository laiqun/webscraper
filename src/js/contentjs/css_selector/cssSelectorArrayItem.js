function advRepalce(match, pos) {
    if (pos)
        if ("\0" === match)
            return "\ufffd";
        else
            return match.slice(0, -1) + "\\" + match.charCodeAt(match.length - 1).toString(16) + " ";
    else
        return "\\" + match;
}

const canNotPrintChar = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g; //https://www.codenong.com/1176904/

const replaceFunc = e => (e + "").replace(canNotPrintChar, advRepalce);
const MicroDataAttributes = ["itemprop", "itemtype", "itemscope"];
const IgnoredAttributeName = ["itemprop", "itemtype", "itemscope", "class", "id", "href", "src", "content", "style", "rel"];
const attrNameSpecialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "[", "]", "{", "}", ";", '"', "'", "<", ">", "?", "/", "|", "\\", "~", "`", '\\"', "\\'", " "];
const attrValueSpecial = ['"', "\\", "'"];
import {singleQuotes} from "./singleQuotes"
import {setOpt} from "./setOpt"

class cssSelectorArrayItem {
    constructor(currentElement, ignoredClasses) {
        if (undefined === ignoredClasses)
            ignoredClasses = [];
        this.element = currentElement;
        this.isDirectChild = true;
        this.tag = currentElement.localName;
        this.tag = this.tag.replace(/:/g, "\\:");
        this.indexn = null;
        this.index = 1;
        this.id = null;
        this.classes = [];
        this.schemaOrgAttributes = [];
        this.attributes = [];
        this.previousSiblingText = null;

        if ("html" !== this.tag && "HTML" !== this.tag && "body" !== this.tag && "BODY" !== this.tag) {
            if (undefined !== currentElement.parentNode)
                for (let parentChildIndex = 0; parentChildIndex < currentElement.parentNode.children.length; parentChildIndex++) {
                    const nth_child = currentElement.parentNode.children[parentChildIndex];
                    if (nth_child === currentElement)
                        break;
                    if (nth_child.tagName === currentElement.tagName)
                        this.index++;
                }
            if ("" !== currentElement.id && "string" == typeof currentElement.id) {
                let id = currentElement.id;
                id = replaceFunc(id);
                if (-1 === id.indexOf("%"))
                    this.id = id;
            }
            for (let classListIndex = 0; classListIndex < currentElement.classList.length; classListIndex++) {
                let oneClass = currentElement.classList[classListIndex];
                if (-1 === ignoredClasses.indexOf(oneClass)) {
                    if (-1 === oneClass.indexOf("%"))//如果不存在%，则需要特殊处理一下，进行替换
                        oneClass = replaceFunc(oneClass);
                    this.classes.push(oneClass)
                }
            }
            for (const microDataAttribute of MicroDataAttributes)
                if (currentElement.hasAttribute(microDataAttribute)) {
                    const attributeValue = currentElement.getAttribute(microDataAttribute);
                    if (cssSelectorArrayItem.isIgnoredAttributeValue(attributeValue))
                        continue;
                    if (attributeValue)
                        this.schemaOrgAttributes.push("[" + microDataAttribute + "='" + attributeValue + "']")
                    else
                        this.schemaOrgAttributes.push("[" + microDataAttribute + "]");
                }
            if ("function" == typeof currentElement.getAttributeNames)
                for (const attributeName of currentElement.getAttributeNames()) {
                    if (cssSelectorArrayItem.isIgnoredAttributeName(attributeName))
                        continue;
                    const attributeValue = currentElement.getAttribute(attributeName);
                    if (cssSelectorArrayItem.isIgnoredAttributeValue(attributeValue))
                        continue;
                    const attribute_name = this.escapeAttributeName(attributeName);
                    if (attributeValue) {
                        this.attributes.push("[" + attribute_name + "]");
                        this.attributes.push("[" + attribute_name + "='" + attributeValue + "']");
                    } else
                        this.attributes.push("[" + attribute_name + "]");
                }
            if (this.element.previousElementSibling) {
                const previousElementSibling = this.element.previousElementSibling;
                if ("DT" === previousElementSibling.tagName) {
                    this.previousSiblingText = previousElementSibling.tagName.toLowerCase() + ":contains('" + singleQuotes(previousElementSibling.textContent) + "')";
                }
            }
        } else
            this.index = null;
    }

    static isIgnoredAttributeName(attributeName) {
        if (-1 !== IgnoredAttributeName.indexOf(attributeName))
            return true;
        for (const attrNameSpecialChar of attrNameSpecialChars)
            if (-1 !== attributeName.indexOf(attrNameSpecialChar))//如果属性中有特殊字符，那么也应该忽略这个attribute
                return true;
        return !!attributeName.startsWith("-");
    }

    static isIgnoredAttributeValue(attrValue) {
        for (const oneSpeciaAttrValue of attrValueSpecial)
            if (-1 !== attrValue.indexOf(oneSpeciaAttrValue))
                return true;
        return false;
    }

    getCssSelector() {
        let cssSelector = this.tag ? this.tag : "";
        null !== this.id && (cssSelector += "#" + this.id);
        if (this.classes.length)
            for (let classIndex = 0; classIndex < this.classes.length; classIndex++)
                cssSelector += "." + this.classes[classIndex];
        for (const schemaOrgAttribute of this.schemaOrgAttributes)
            cssSelector += schemaOrgAttribute;
        for (const attribute of this.attributes)
            cssSelector += attribute;
        if (null !== this.index)
            cssSelector += ":nth-of-type(" + this.index + ")";
        if (null !== this.indexn && -1 !== this.indexn)
            cssSelector += ":nth-of-type(n+" + this.indexn + ")";
        if (this.previousSiblingText)
            cssSelector = this.previousSiblingText + " + " + cssSelector;
        if (this.isDirectChild)
            cssSelector = "> " + cssSelector;
        return cssSelector;
    }

    merge(another) {
        if (this.tag !== another.tag)
            throw "different element selected (tag)";
        if (null !== this.index && this.index !== another.index) {
            if (null === this.indexn) {
                if (Math.min(another.index, this.index) > 1)
                    this.indexn = Math.min(another.index, this.index);
            } else
                this.indexn = -1;
            this.index = null;
        }
        if (true === this.isDirectChild)
            this.isDirectChild = another.isDirectChild;
        if (null !== this.id && this.id !== another.id)
            this.id = null;
        this.classes = setOpt.intersect(this.classes, another.classes);
        this.attributes = setOpt.intersect(this.attributes, another.attributes);
        this.schemaOrgAttributes = setOpt.intersect(this.schemaOrgAttributes, another.schemaOrgAttributes);
        if (null !== this.previousSiblingText &&
            this.previousSiblingText !== another.previousSiblingText)
            this.previousSiblingText = null;
    }

    escapeAttributeName(attributeName) {
        return attributeName = attributeName.replace(/([:])/g, "\\$1");
    }
}

export default cssSelectorArrayItem;