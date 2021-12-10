import * as react from "react"//    const n = i(0)
import * as r from "./ConditionalElementBase.js"//, r = i(26);
class ScriptDataColumns extends r.ConditionalElementBase {
    _render() {
        const {onChange: e, onRemove: t, selector: i, onAdd: r} = this.props, a = i.scriptDataColumns, o = {
            name: "",
            is_url: false
        }, s = {
            width: "5%",
            "white-space": "nowrap",
            "text-align": "center"
        };
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Returned data columns"), react.createElement("div", {
            className: "col-lg-10"
        }, react.createElement("table", {
            className: "table table-bordered"
        }, react.createElement("thead", null, react.createElement("tr", null, react.createElement("th", null, "Column Name"), react.createElement("th", {
            style: s
        }, "Is URL (only one)"), react.createElement("th", {
            style: s
        }))), react.createElement("tbody", null, a.map((i, r) => react.createElement("tr", {
            key: r
        }, react.createElement("td", null, react.createElement("input", {
            type: "text",
            className: "form-control",
            name: `scriptDataColumns[${r}][name]`,
            value: i.name,
            onChange: e,
            placeholder: "Column Name"
        })), react.createElement("td", {
            style: s
        }, react.createElement("input", {
            className: "is-url",
            type: "checkbox",
            name: `scriptDataColumns[${r}][is_url]`,
            value: "1",
            onChange: e,
            checked: i.is_url
        })), react.createElement("td", null, react.createElement("button", {
            className: "btn btn-danger",
            type: "button",
            onClick: t.bind(t, "scriptDataColumns", r, o)
        }, "Remove")))))), react.createElement("button", {
            type: "button",
            className: "btn btn-primary add-column",
            onClick: r.bind(r, "scriptDataColumns", o)
        }, "Add Column")));
    }
}

export {ScriptDataColumns}