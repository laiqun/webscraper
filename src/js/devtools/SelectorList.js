//215
import * as n from "./Selector/Selector.js"//n = i(10),
import * as r from "./selectorFactory.js" //const  r = i(94);
class SelectorList extends Array {
    constructor(e) {
        super();
        Object.setPrototypeOf(this, Object.create(SelectorList.prototype));
        if ( Array.isArray(e))
            for (const t of e)
                if (void 0 !== t)
                    if (Array.isArray(t))
                        for (const e of t)
                            this.push(e);
                    else
                            this.push(t);
    }

    push(...selectors) {
        for (let selector of selectors) //如果不存在，
        {
            if (this.hasSelector(selector.id) == false)
                if( selector instanceof n.Selector == false)// if it is selector init data, then create new selector
                    selector = r.selectorFactory(selector);
                Array.prototype.push.call(this, selector);
        }
        return this.length;
    }

    hasSelector(object_with_id) {
        if (object_with_id instanceof Object )
            object_with_id = object_with_id.id;
        for (let index = 0; index < this.length; index++)
            if (this[index].id === object_with_id)
                return true;
        return false;
    }

    getAllSelectors(e) {
        if (void 0 === e)
            return this;
        const func = function (e, i) {
            this.forEach(n => {
                n.hasParentSelector(e) && (i.includes(n) || (i.push(n), func(n.id, i)));
            });
        }.bind(this);
        const result = [];
        func(e, result);
        return  result;
    }

    getDirectChildSelectors(e) {
        const result = new SelectorList([]);
        this.forEach(arg => {
            if (arg.hasParentSelector(e) )
                result.push(arg);
        });
        return  result;
    }

    clone() {
        const result = new SelectorList([]);
        this.forEach(arg => {
            result.push(arg);
        });
        return  result;
    }

    fullClone() {
        const result = new SelectorList([]);
        this.forEach(arg => {
            result.push(JSON.parse(JSON.stringify(arg)));
        });
        return  result;
    }

    concat(...e) {
        const result = this.clone();
        for (const i in e)
            e[i].forEach(e => {
                result.push(e);
            });
        return result;
    }

    getSelector(e) {
        for (let t = 0; t < this.length; t++) {
            const i = this[t];
            if (i.id === e)
                return i;
        }
    }

    getOnePageSelectors(e) {
        let result = new SelectorList([]);
        const i = this.getSelector(e);
        result.push(this.getSelector(e));
        const func = function (e) {
            e.parentSelectors.forEach(function (e) {
                if ("_root" === e) return;
                const i = this.getSelector(e);
                result.includes(i) || i.willReturnElements() && (result.push(i), func(i));
            }.bind(this));
        }.bind(this);
        func(i);
        const r = this.getSinglePageAllChildSelectors(i.id);
        result = result.concat(r);
        return  result;
    }

    getSinglePageAllChildSelectors(e) {
        const result = new SelectorList([]);
        const func = function (e) {
            if (e.willReturnElements()) {
                this.getDirectChildSelectors(e.id).forEach(e => {
                    result.includes(e) || (result.push(e), func(e));
                });
            }
        }.bind(this);
        const n = this.getSelector(e);
        func(n);
        return  result;
    }

    willReturnMultipleRecords(e) {
        if (true === this.getSelector(e).willReturnMultipleRecords())
            return true;
        const t = this.getAllSelectors(e);
        for (const e of t)
            if (true === e.willReturnMultipleRecords())
                return true;
        return false;
    }

    toJSON() {
        const result = [];
        this.forEach(arg => {
            result.push(arg);
        });
        return  result;
    }

    getSelectorById(e) {
        for (let t = 0; t < this.length; t++) {
            const i = this[t];
            if (i.id === e)
                return i;
        }
        return null;
    }

    getCSSSelectorWithinOnePage(e, t) {
        let result = this.getSelector(e).selector;
        result = this.getParentCSSSelectorWithinOnePage(t) + result;
        return  result;
    }

    getParentCSSSelectorWithinOnePage(e) {
        let result = "";
        for (let index = e.length - 1; index > 0; index--) {
            const n = e[index], r = this.getSelector(n);
            if (!r.willReturnElements())
                break;
            "_parent_" !== r.selector.trim() && (result = `${r.selector} ${result}`);
        }
        return result;
    }

    hasRecursiveElementSelectors() {
        let result = false;
        this.forEach(function (arg) {
            const arrar = [];
            const func = function (paramaters) {
                if (arrar.includes(paramaters))
                    result = !0;
                else if (paramaters.willReturnElements()) {
                        arrar.push(paramaters);
                        this.getDirectChildSelectors(paramaters.id).forEach(func);
                        arrar.pop();
                     }
            }.bind(this);
            func(arg);
        }.bind(this));
        return  result;
    }
}

export {SelectorList}