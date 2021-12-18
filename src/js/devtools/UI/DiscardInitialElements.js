import * as r from "./ConditionalElementBase.js"//, r = i(26);
import * as react from "react"//const n = i(0)

class DiscardInitialElements extends r.ConditionalElementBase {
    _render() {
        const {onChange: e, selector: t} = this.props, i = t.discardInitialElements;
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Discard initial elements"), react.createElement("div", {
            className: "col-lg-10"
        }, react.createElement("select", {
            className: "form-control",
            value: i,
            name: "discardInitialElements",
            onChange: e
        }, react.createElement("option", {
            value: "do-not-discard"
        }, "Never discard"), react.createElement("option", {
            value: "discard-when-click-element-exists"
        }, "Discard when click element exists"), react.createElement("option", {
            value: "discard"
        }, "Always discard"))));
    }
}

export {DiscardInitialElements}