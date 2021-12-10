//const n = i(0), r = i(26);
import * as n from "react"
import * as r from "./ConditionalElementBase.js"

class Columns extends r.ConditionalElementBase {
    _render() {
        const {onChange: e, selector: t} = this.props;
        return n.createElement("div", {
            className: "form-group"
        }, n.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Table columns"), n.createElement("div", {
            className: "col-lg-10"
        }, n.createElement("table", {
            className: "table table-bordered table-condensed"
        }, n.createElement("thead", null, n.createElement("tr", null, n.createElement("th", null, "Column"), n.createElement("th", null, "Result key"), n.createElement("th", null, "Include into result"))), n.createElement("tbody", null, this.columns.map((t, i) => n.createElement("tr", {
            key: "id" + i
        }, n.createElement("td", null, n.createElement("input", {
            className: "column-header",
            type: "hidden",
            name: `columns[${i}][header]`,
            value: t.header
        }), t.header), n.createElement("td", null, n.createElement("div", {
            className: "form-group"
        }, n.createElement("input", {
            className: "column-name form-control",
            type: "text",
            name: `columns[${i}][name]`,
            value: t.name,
            onChange: e
        }))), n.createElement("td", null, n.createElement("input", {
            className: "column-extract",
            type: "checkbox",
            name: `columns[${i}][extract]`,
            checked: t.extract,
            onChange: e
        }))))))));
    }

    get columns() {
        let e = [];
        const t = this.props.selector;
        return void 0 !== t.columns && (e = t.columns), e;
    }
}

export {Columns}