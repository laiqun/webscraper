//const n = i(26), r = i(0);
import * as n from "./ConditionalElementBase.js"
import * as r from "react"
class Checkbox extends n.ConditionalElementBase {
    _render() {
        const e = this.props.feature, t = this.props.selector[e], {label: i, onChange: n} = this.props;
        return r.createElement("div", {
            className: "form-group"
        }, r.createElement("div", {
            className: "col-lg-offset-1 col-lg-10"
        }, r.createElement("div", {
            className: "checkbox"
        }, r.createElement("label", null, r.createElement("input", {
            type: "checkbox",
            id: e,
            name: e,
            checked: t,
            onChange: n
        }), i))));
    }
}

export {Checkbox}