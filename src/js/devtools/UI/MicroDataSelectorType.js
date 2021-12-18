import * as react from "react"//    const n = i(0),
import {ConditionalElementBase} from "./ConditionalElementBase.js"//r = i(26);
class MicroDataSelectorType extends ConditionalElementBase {
    _render() {
        const {onChange: e, selector: t} = this.props, i = t.microDataSelectorType;
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Micro Data Type"), react.createElement("div", {
            className: "col-lg-10"
        }, react.createElement("select", {
            className: "form-control",
            value: i,
            name: "microDataSelectorType",
            onChange: e
        }, react.createElement("option", {
            value: "schema.org"
        }, "schema.org"), react.createElement("option", {
            value: "json"
        }, "JSON (TODO)"))));
    }
}

export {MicroDataSelectorType}