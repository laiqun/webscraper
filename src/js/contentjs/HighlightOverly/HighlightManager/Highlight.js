import { SVG } from './SVG.js'

class Highlight {
    constructor(element, style) {
        this._element = element; //target need to mark
        this._highlighStyle = style;
        this._highlight = this.createHighlight(); // svg rect
    }
    get highlight() {
        return this._highlight;
    }
    get element() { //target element
        return this._element;
    }
    set element(element) {
        this._element = element;
        this.onDimensionChange();
    }
    get highlighStyle() {
        return this._highlighStyle;
    }
    set highlighStyle(style) {
        this._highlighStyle = style;
        this._highlight = SVG.setNamespaceProperties(this._highlight, this._highlighStyle);
    }
    onDimensionChange() {
        this._highlight = SVG.setNamespaceProperties(this._highlight, this.dimensions);
    }
    createHighlight() {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        return SVG.setNamespaceProperties(element, Object.assign(Object.assign({}, this._highlighStyle), this.dimensions));
    }
    get dimensions() {
        return SVG.getDimensionFromRect(this._element.getBoundingClientRect());
    }
}


export { Highlight };