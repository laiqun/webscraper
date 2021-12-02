import * as n from "react"//const n = i(0)
import * as r from "./ConditionalElementBase.js"//, r = i(26);
class SchemaOrgType extends r.ConditionalElementBase {
    _render() {
        const {onChange: e, selector: t, onRefresh: i} = this.props, r = t.schemaOrgType, a = this.props.types;
        return 0 === a.length && r && a.push(r), n.createElement("div", {
            className: "form-group"
        }, n.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Schema.org type"), n.createElement("div", {
            className: "col-lg-10"
        }, n.createElement("div", {
            className: "input-group"
        }, n.createElement("span", {
            className: "input-group-btn"
        }, n.createElement("button", {
            className: "btn btn-default refresh-micro-data",
            type: "button",
            onClick: i
        }, "Refresh")), n.createElement("select", {
            className: "form-control",
            value: r,
            name: "schemaOrgType",
            onChange: e
        }, a.map(e => n.createElement("option", {
            key: e,
            value: e
        }, e))))));
    }

    get canRender() {
        return super.canRender && "schema.org" === this.props.selector.microDataSelectorType;
    }
}

export {SchemaOrgType}