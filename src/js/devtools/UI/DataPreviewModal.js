import * as a from "mobx-react"//a = i(21),
import * as r from "../../common/lib/jquery.js"//r = i(65),
import * as o from "react"//o = i(0),
import * as s from "../Arr.js"//const   s = i(87);

var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};

let DataPreviewModal = class extends o.Component {
    componentDidUpdate() {
        if(undefined !== this.props.appState.dataPreviewData )
            r(this.el).modal("show");
    }

    render() {
        if (undefined === this.props.appState.dataPreviewData)
            return o.createElement("div", null);
        const e = {
            height: r(window).height() - 120 + "px"
        };
        return o.createElement("div", {
            ref: e => this.el = e,
            className: "modal fade data-preview-modal"
        }, o.createElement("div", {
            className: "modal-dialog"
        }, o.createElement("div", {
            className: "modal-content"
        }, o.createElement("div", {
            className: "modal-header"
        }, o.createElement("button", {
            type: "button",
            className: "close",
            "data-dismiss": "modal",
            "aria-hidden": "true",
            onClick: this.closeDataPreview.bind(this)
        }, "\xd7"), o.createElement("h4", {
            className: "modal-title"
        }, chrome.i18n.getMessage("DataPreview"))), o.createElement("div", {
            className: "modal-body",
            style: e
        }, this.renderData()))));
    }

    renderData() {
        const dataPreviewData = this.props.appState.dataPreviewData;
        if (undefined === dataPreviewData[0])
            return o.createElement("div", null, "No Data Extracted");
        let t = s.Arr.getDataColumns(dataPreviewData);
        if (t.includes("_follow")) {
            t = s.Arr.delete(t, "_follow");
            t = s.Arr.delete(t, "_followSelectorId");
            t.push("_followSelectorId");
            t.push("_follow");
        }
        return o.createElement("table", {
            className: "table"
        }, o.createElement("thead", null, o.createElement("tr", null, t.map(e => o.createElement("th", {
            key: e
        }, e)))), o.createElement("tbody", null, dataPreviewData.map((e, i) => o.createElement("tr", {
            key: i
        }, t.map(t => o.createElement("td", {
            key: t
        }, "object" == typeof e[t] ? JSON.stringify(e[t]) : e[t]))))));
    }

    closeDataPreview() {
        this.props.appState.closeDataPreview();
    }
}

DataPreviewModal = n([a.inject("appState"), a.observer], DataPreviewModal);

export {DataPreviewModal}