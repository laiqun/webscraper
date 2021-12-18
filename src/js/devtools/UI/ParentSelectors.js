//const n = i(0), r = i(26);
import * as n from "react"
import * as r from "./ConditionalElementBase.js"

class ParentSelectors extends r.ConditionalElementBase {
    _render() {
        const {onChange: e, selector: t, selectorIds: i} = this.props;
        return n.createElement("div", {
            className: "form-group",
            title: "Parent Selectors"
        }, n.createElement("label", {
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("Parent_selectors")), n.createElement("div", {
            className: "col-lg-10"
        }, n.createElement("select", {
            className: "form-control",
            value: t.parentSelectors,
            name: "parentSelectors",
            onChange: e,
            multiple: !0
        }, i.map(e => n.createElement("option", {
            value: e,
            key: e
        }, e)))));
    }

    get canRender() {
        return true;
    }
}

export {ParentSelectors}