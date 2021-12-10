class UniqueElementList {
    constructor(e) {
        this.elementUniquenessType = e, this.addedElements = {}, this.elements = [];
    }

    async push(e) {
        const t = await this.getElementUniqueId(e);
        if (this.isAdded(t)) return !1;
        {
            this.addedElements[t] = !0;
            const i = await e.getClone();
            return this.elements.push(i), !0;
        }
    }

    async getElementUniqueId(e) {
        let t;
        if ("uniqueText" === this.elementUniquenessType) t = await e.getText(); else if ("uniqueHTMLText" === this.elementUniquenessType) t = await e.getWrappedHTML(); else if ("uniqueHTML" === this.elementUniquenessType) t = await e.getWrappedHTMLWithoutText(); else {
            if ("uniqueCSSSelector" !== this.elementUniquenessType) {
                throw "Invalid elementUniquenessType " + this.elementUniquenessType;
            }
            t = await e.getCSSSelector();
        }
        return t;
    }

    async isElementAdded(e) {
        return (await this.getElementUniqueId(e)) in this.addedElements;
    }

    isAdded(e) {
        return e in this.addedElements;
    }

    get length() {
        return this.elements.length;
    }

    getElements() {
        return this.elements;
    }
}

export {UniqueElementList}