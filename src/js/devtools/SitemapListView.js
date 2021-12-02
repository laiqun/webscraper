var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
}, r = this && this.__metadata || function (e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};


import * as a from "mobx-react"//const a = i(21),
import * as react from "react"//o = i(0)
import * as s from "react"//, s = i(0),
import * as l from "./SitemapListItem.js"//  l = i(723),
import * as c from "./Loader.js"//c = i(726);
let SitemapListView = class extends react.Component {
    constructor(e) {
        super(e);
        this.state = {
            sitemaps: []
        };
    }

    render() {
        const e = this.props.appState;
        const t = this.getHeaders();
        return this.props.appState.loading ? react.createElement(c.Loader, null) : react.createElement("div", {
            id: "sitemaps"
        }, react.createElement("input", {
            className: "form-control sitemap-search",
            type: "text",
            value: e.searchQuery,
            placeholder: chrome.i18n.getMessage("Search_Sitemaps"),
            onChange: this.changeSearchQuery.bind(this)
        }), react.createElement("table", {
            className: "table table-bordered table-condensed table-hover"
        }, react.createElement("thead", null, react.createElement("tr", null, t)), react.createElement("tbody", null, e.filteredSitemaps.map((e, t) => react.createElement(l.SitemapListItem, {
            key: t,
            sitemap: e
        })))));
    }

    getHeaders() {
        return this.props.appState.sitemapSyncEnabled ? react.createElement(s.Fragment, null, react.createElement("th", {
            className: "sync-state-header"
        }), react.createElement("th", null, chrome.i18n.getMessage("ID")), react.createElement("th", null, chrome.i18n.getMessage("Domain")), react.createElement("th", {
            className: "upload-to-cloud-header"
        }, chrome.i18n.getMessage("Upload_to_Cloud")), react.createElement("th", {
            className: "download-from-cloud-header"
        }, chrome.i18n.getMessage("Download_from_Cloud")), react.createElement("th", {
            className: "sitemap-actions-header"
        })) : react.createElement(s.Fragment, null, react.createElement("th", null, chrome.i18n.getMessage("ID")), react.createElement("th", null, chrome.i18n.getMessage("Domain")), react.createElement("th", {
            className: "sitemap-actions-header"
        }));
    }

    changeSearchQuery(e) {
        const t = e.target.value;
        this.props.appState.updateSearchQuery(t);
    }
};
SitemapListView = n([a.inject("appState"), a.observer, r("design:paramtypes", [Object])], SitemapListView);
export {SitemapListView}