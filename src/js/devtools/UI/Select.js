//const n = i(26), r = i(0);
import * as react from "react"
import {ConditionalElementBase} from "./ConditionalElementBase.js"

class Select extends ConditionalElementBase {
    _render() {
        const feature = this.props.feature;
        const feature_selector = this.props.selector[feature];
        const {label: label_value, onChange: onchange_value, options: options_value} = this.props;
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, label_value), react.createElement("div", {
            className: "col-lg-10"
        }, react.createElement("select", {
            className: "form-control",
            value: feature_selector,
            id: feature,
            name: feature,
            onChange: onchange_value
        }, this.optionsElements())));
    }

    optionsElements() {
        const result = [];
        const options = this.props.options;
        for (const optionIndex in options)
            result.push(react.createElement("option", {
            value: optionIndex,
            key: optionIndex
        }, options[optionIndex]));
        return result;
    }
}

export {Select}