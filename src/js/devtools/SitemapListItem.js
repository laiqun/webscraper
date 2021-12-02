import * as a from "mobx-react"//const a = i(21),
import * as react from "react"// o = i(0),
import * as s from "./syncStateProperties.js"//const s = i(724);
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};

let SitemapListItem = class extends react.Component {
    render() {
        const {sitemap: e} = this.props;
        return this.props.appState.sitemapSyncEnabled ? this.getSitemapRowWithSyncEnabled(e) : this.getSitemapRow(e);
    }

    editSitemap(e) {
        e.stopPropagation(), e.preventDefault(), this.props.appState.push("/sitemap/selectors?sitemapId=" + this.props.sitemap.name);
    }

    async deleteSitemap(e) {
            e.stopPropagation(), e.preventDefault(), await this.props.appState.deleteSitemap(this.props.sitemap.name);
    }

    async downloadSitemap(e) {
            e.stopPropagation(), e.preventDefault(), await this.props.appState.downloadSitemap(this.props.sitemap.name),
                await this.props.appState.loadSitemaps();
    }

    async uploadSitemap(e) {
            e.stopPropagation(), e.preventDefault(), await this.props.appState.uploadSitemap(this.props.sitemap.name),
                await this.props.appState.loadSitemaps();
    }

    getSitemapRow(e) {
        return react.createElement("tr", {
            onClick: this.editSitemap.bind(this),
            "data-id": e.name
        }, react.createElement("td", {
            className: "id"
        }, e.name), react.createElement("td", null, e.domain), react.createElement("td", null, react.createElement("button", {
            type: "button",
            className: "btn btn-danger btn-xs delete-sitemap",
            onClick: this.deleteSitemap.bind(this)
        }, chrome.i18n.getMessage("Delete"))));
    }

    getSitemapRowWithSyncEnabled(e) {
        const t = s.syncStateProperties[e.syncState];
        return react.createElement("tr", {
            className: "sitemap-row",
            onClick: this.editSitemap.bind(this),
            "data-id": e.name
        }, react.createElement("td", {
            className: "sync-state"
        }, t.stateIcon), react.createElement("td", {
            className: "id"
        }, e.name), react.createElement("td", {
            className: "domain"
        }, e.domain), react.createElement("td", {
            className: "upload-to-cloud"
        }, t.uploadBtn ? react.createElement("button", {
            type: "button",
            className: `btn ${t.uploadBtn.class} btn-xs`,
            title: t.uploadBtn.title,
            onClick: this.uploadSitemap.bind(this)
        }, t.uploadBtn.text) : ""), react.createElement("td", {
            className: "download-from-cloud"
        }, t.downloadBtn ? react.createElement("button", {
            type: "button",
            className: `btn ${t.downloadBtn.class} btn-xs`,
            title: t.downloadBtn.title,
            onClick: this.downloadSitemap.bind(this)
        }, t.downloadBtn.text) : ""), react.createElement("td", null, t.deleteBtn ? react.createElement("button", {
            type: "button",
            className: "btn btn-danger btn-xs",
            onClick: this.deleteSitemap.bind(this)
        }, chrome.i18n.getMessage("Delete_locally")) : ""));
    }
};
SitemapListItem = n([a.inject("appState")], SitemapListItem);
export {SitemapListItem}