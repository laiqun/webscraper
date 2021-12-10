import * as r from "./HighlightManager/highlight.js"
import * as i from "./HighlightManager/styles.js"
import * as o from "./getToggleMapping.js"
import * as s from "./HighlightManager/SVG.js"

class HighlightManager {
    constructor(e, t) {
        this.highlightStyles = i.styles;
        undefined !== t && (this.selectionParent = new r.Highlight(t, this.highlightStyles.parent));

        this.locked = [];
        this.containerElement = e;
        this.container = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.mask = new r.Highlight(e, this.highlightStyles.mask);
    }

    toggle(e) {
        const {domChildAction: t} = o.getToggleMapping(e);
        this.container[t](this.mask.highlight);
        undefined !== this.selectionParent && this.container[t](this.selectionParent.highlight);
        for (const t of this.locked) this.toggleSelectedClass(t.element, e);
    }

    redraw(e) {
        e && (this.container = s.SVG.setNamespaceProperties(this.container, s.SVG.getDimensionFromRect(this.containerElement.getBoundingClientRect())),
            this.dimensionChange([this.mask]));
        this.dimensionChange([this.hovered, this.selectionParent, ...this.locked]);
    }

    updateHovered(e) {
        switch (true) {
            case undefined !== this.hovered && undefined === e:
                this.removeUnusedHighlights([this.hovered]), this.hovered = undefined;
                break;

            case undefined === this.hovered && undefined !== e:
                this.hovered = this.mountNewHighlight(e, this.highlightStyles.hovered);
                break;

            case undefined !== this.hovered && undefined !== e:
                this.hovered.element = e;
        }
    }

    addLocked(e) {
        const {locked: t} = this;
        if (undefined === e) return void this.removeUnusedHighlights(t);
        let n;
        switch (true) {
            case 0 === t.length:
                n = this.addNewHighlights(e);
                break;

            case e.length === t.length:
                n = this.overwriteCommonHighlights(t, e);
                break;

            case e.length < t.length:
                n = this.overwriteCommonHighlights(t.slice(0, e.length), e), this.removeUnusedHighlights(t.slice(e.length));
                break;

            case e.length > t.length:
                n = [...this.overwriteCommonHighlights(t, e.slice(0, t.length)), ...this.addNewHighlights(e.slice(t.length))];
        }
        this.locked = n;
    }

    overwriteCommonHighlights(e, t) {
        return e.map((e, n) => (this.toggleSelectedClass(e.element, false), e.element = t[n],
            this.toggleSelectedClass(e.element, true), e));
    }

    removeUnusedHighlights(e) {
        for (; e.length > 0;) {
            const t = e.pop();
            this.toggleSelectedClass(t.element, false), this.container.removeChild(t.highlight);
        }
    }

    addNewHighlights(e) {
        const t = [];
        for (const n of e) {
            const e = this.mountNewHighlight(n, this.highlightStyles.clicked);
            this.toggleSelectedClass(e.element, true), t.push(e);
        }
        return t;
    }

    mountNewHighlight(e, t) {
        const n = new r.Highlight(e, t);
        return this.container.appendChild(n.highlight), n;
    }

    dimensionChange(e) {
        e.forEach(e => {
            undefined !== e && e.onDimensionChange();
        });
    }

    toggleSelectedClass(e, t) {
        t ? e.classList.add("-ws-data-preview-element") : e.classList.remove("-ws-data-preview-element");
    }
}

export {HighlightManager}