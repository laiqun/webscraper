//const n = i(26), r = i(0);
import * as r from "react"
import * as n from "./ConditionalElementBase.js"

class ElementSelector extends n.ConditionalElementBase {
    _render() {
        const e = this.props.feature,
            t = this.props.selector[e], {onSelectClick: i, onElementPreviewClick: n, onDataPreviewClick: a, onChange: o, label: s} = this.props;
        return r.createElement("div", {
            className: "form-group"
        }, r.createElement("label", {
            className: "col-lg-1 control-label"
        }, s), r.createElement("div", {
            className: "col-lg-10"
        }, r.createElement("div", {
            className: "input-group"
        }, r.createElement("span", {
            className: "input-group-btn"
        }, r.createElement("button", {
            className: "btn btn-default select-" + e,
            type: "button",
            onClick: i
        }, "Select"), r.createElement("button", {
            className: "btn btn-default element-preview",
            type: "button",
            onClick: n
        }, "Element preview"), a ? r.createElement("button", {
            id: "selector-data-preview",
            className: "btn btn-default",
            type: "button",
            onClick: a
        }, "Data preview") : ""), r.createElement("input", {
            type: "text",
            className: "form-control selector-value",
            id: e,
            name: e,
            value: t,
            onChange: o
        }))));
    }
}

export {ElementSelector}