import {ConditionalElementBase} from "./ConditionalElementBase.js"
import * as react from "react"
class Checkbox extends ConditionalElementBase {
    _render() {
        const feature = this.props.feature;
        const checked = this.props.selector[feature];
        const {label: label, onChange: onChange} = this.props;
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("div", {
            className: "col-lg-offset-1 col-lg-10"
        }, react.createElement("div", {
            className: "checkbox"
        }, react.createElement("label", null, react.createElement("input", {
            type: "checkbox",
            id: feature,
            name: feature,
            checked: checked,
            onChange: onChange
        }), label))));
    }
}

export {Checkbox}