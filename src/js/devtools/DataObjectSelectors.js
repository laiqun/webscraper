import * as n from "react" //const n = i(0),
import * as r from "./ConditionalElementBase.js"//r = i(26);
class DataObjectSelectors extends r.ConditionalElementBase {
    _render() {
        const {selector: e, sampleData: t, onChange: i} = this.props, r = e.dataObjectSelectors;
        return n.createElement("div", {
            className: "form-group data-object-selectors"
        }, n.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Data selectors"), n.createElement("div", {
            className: "col-lg-10"
        }, n.createElement("table", {
            className: "table table-bordered table-condensed"
        }, n.createElement("thead", null, n.createElement("tr", null, n.createElement("th", null, "Key"), n.createElement("th", null, "Rename"), n.createElement("th", null, "Include in results"), n.createElement("th", null, "Sample data"))), n.createElement("tbody", null, r.map((e, r) => n.createElement("tr", {
            key: "id" + r
        }, n.createElement("td", null, e.selector.join(".")), n.createElement("td", null, n.createElement("div", {
            className: "form-group"
        }, n.createElement("input", {
            className: "column-name form-control",
            type: "text",
            name: `dataObjectSelectors[${r}][key]`,
            value: e.key,
            onChange: i
        }))), n.createElement("td", null, n.createElement("input", {
            className: "column-extract",
            type: "checkbox",
            name: `dataObjectSelectors[${r}][extract]`,
            checked: e.extract,
            onChange: i
        })), n.createElement("td", {
            className: "sample-data"
        }, n.createElement("pre", null, t[e.selector.join("_")]))))))));
    }
}

export {DataObjectSelectors}