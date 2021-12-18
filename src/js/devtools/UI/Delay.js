//const n = i(0), r = i(26);
import * as n from "react"
import * as r from "./ConditionalElementBase.js"

class Delay extends r.ConditionalElementBase {
    _render() {
        const {onChange: e, selector: t} = this.props;
        return n.createElement("div", {
            className: "form-group " + this.deprecationClass,
            title: this.title
        }, n.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Delay (ms) ", this.labelIcon), n.createElement("div", {
            className: "col-lg-10"
        }, n.createElement("input", {
            type: "text",
            className: "form-control",
            name: "delay",
            id: "delay",
            placeholder: "delay",
            value: t.delay,
            onChange: e
        })));
    }

    get canRender() {
        if (!super.canRender) return !1;
        const {selector: e} = this.props;
        return !(e.isDeprecatedFeature("delay") && (!e.delay || 0 === e.delay));
    }

    get deprecationClass() {
        const {selector: e} = this.props;
        return e.isDeprecatedFeature("delay") ? " deprecated" : "";
    }

    get title() {
        const {selector: e} = this.props;
        return e.isDeprecatedFeature("delay") ? "Delay will be removed in a future release from selectors that don't need this feature. Instead you should use page load delay." : "";
    }

    get labelIcon() {
        const {selector: e} = this.props;
        return e.isDeprecatedFeature("delay") ? n.createElement("span", {
            className: "question-icon"
        }) : n.createElement(n.Fragment, null);
    }
}

export {Delay}