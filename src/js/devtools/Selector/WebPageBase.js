//import {WebPageElement} from "./WebPageElement.js"
class WebPageBase {
    async getElements(e) {
        let t = [];
        const i = this.getSelectorParts(e);
        const n = [];
        i.forEach(e => {
            if ("_parent_" === e)
            {
                if (!(this instanceof WebPageBase))//WebPageElement  process circle denpendece
                    throw "incorrect use of _parent_ selector";
                t.push(this);
            }
            else
                n.push(e);
        });
        if (0 === n.length)
            return t;
        else {
            const e = n.join(", ");
            const i = await this.getElementsWithDriver(e);//通过content js 抓内容
            t = t.concat(i);
            return  t;
        }
    }

    async getElement(e) {
        const t = await this.getElements(e);
        return 0 === t.length ? null : t[0];
    }

    getSelectorParts(e) {
        const t = e.split(/((?<!\\),|".*?"|'.*?'|\([^"']*?\))/), i = [];
        let n = "";
        return t.forEach(e => {
            "," === e ? (n.trim().length && i.push(n.trim()), n = "") : n += e;
        }), n.trim().length && i.push(n.trim()), i;
    }
}

class WebPageElement extends WebPageBase {
    constructor(e) {
        super();
        this.element = e;
    }

    async getParentElement(e, t) {
        const i = t.pop();
        if ("_root" === i) return this;
        const n = e.getSelectorById(i);
        if (n.willReturnElements()) {
            return (await this.getParentElement(e, t)).getElement(n.selector);
        }
        return this;
    }
}
export {WebPageBase ,WebPageElement}