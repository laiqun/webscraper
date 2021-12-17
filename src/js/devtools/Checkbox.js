//const n = i(26), r = i(0);
import * as n from "./ConditionalElementBase.js"
import * as r from "react"
class Checkbox extends n.ConditionalElementBase {
    _render() {
        const feature = this.props.feature;
        const checked = this.props.selector[feature];
        const {label: label, onChange: onChange} = this.props;
        return r.createElement("div", {
            className: "form-group"
        }, r.createElement("div", {
            className: "col-lg-offset-1 col-lg-10"
        }, r.createElement("div", {
            className: "checkbox"
        }, r.createElement("label", null, r.createElement("input", {
            type: "checkbox",
            id: feature,
            name: feature,
            checked: checked,
            onChange: onChange
        }), label))));
    }
}

export {Checkbox}