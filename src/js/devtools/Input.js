//const n = i(26), r = i(0);
import * as r from "react"
import * as n from "./ConditionalElementBase.js"

class Input extends n.ConditionalElementBase {
    _render() {
        const e = this.props.feature, t = this.props.selector[e], {label: i, onChange: n, placeholder: a} = this.props;
        return r.createElement("div", {
            className: "form-group"
        }, r.createElement("label", {
            className: "col-lg-1 control-label"
        }, i), r.createElement("div", {
            className: "col-lg-10"
        }, r.createElement("input", {
            type: "text",
            className: "form-control selector-value",
            id: e,
            name: e,
            value: t,
            onChange: n,
            placeholder: a
        })));
    }
}

export {Input}