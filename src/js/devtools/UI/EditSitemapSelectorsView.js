"use strict";
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};

import * as o from "react"//o = i(0),
import * as a from "mobx-react"//a = i(21),
import * as s from "./BaseComponent.js" //s = i(25),
import * as l from "./SelectorBreadcrumbItem.js"//l = i(688),
import * as c from "./SelectorRow.js"//const     c = i(689);
let EditSitemapSelectorsView = class extends s.BaseComponent {
    render() {
        const {selectorBreadcrumb: e} = this.props.appState, t = this.props.appState.visibleSelectors;
        return o.createElement("div", {
            id: "selector-tree"
        }, o.createElement("div", {
            className: "top-bar"
        }, o.createElement("ol", {
            className: "breadcrumb"
        }, e.map((e, t) => o.createElement(l.SelectorBreadcrumbItem, {
            key: t,
            selectorId: e,
            index: t
        }))), o.createElement("button", {
            type: "button",
            className: "btn btn-primary btn-xs all-selector-data-preview",
            onClick: this.allSelectorDataPreview.bind(this)
        }, chrome.i18n.getMessage("DataPreview"))), o.createElement("table", {
            className: "table table-bordered table-condensed table-hover"
        }, o.createElement("thead", null, o.createElement("tr", null, o.createElement("th", null, chrome.i18n.getMessage("SelectorID")), o.createElement("th", null, chrome.i18n.getMessage("Selector")), o.createElement("th", {
            style: {
                width: "60px"
            }
        }, chrome.i18n.getMessage("type")), o.createElement("th", {
            style: {
                width: "60px"
            }
        }, chrome.i18n.getMessage("Multiple")), o.createElement("th", null, chrome.i18n.getMessage("Parent_selectors")), o.createElement("th", {
            style: {
                width: "295px"
            }
        }, chrome.i18n.getMessage("Actions")))), o.createElement("tbody", null, t.map(e => o.createElement(c.SelectorRow, {
            selector: e,
            key: e.id
        })))), this.props.appState.sitemap ? o.createElement("button", {
            type: "button",
            className: "btn btn-primary btn-xs add-selector",
            onClick: this.addSelector.bind(this)
        }, chrome.i18n.getMessage("Add_new_selector")) : "");
    }

    addSelector() {
        this.props.appState.addSelector();
    }

    async allSelectorDataPreview() {
        await this.props.appState.allSelectorDataPreview();
    }
};
EditSitemapSelectorsView = n([a.inject("appState"), a.observer], EditSitemapSelectorsView);
export {EditSitemapSelectorsView}