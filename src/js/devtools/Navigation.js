import * as o from "react"//o = i(0),//o = i(0),
import * as a from "mobx-react"//a = i(21),

import * as s from "react-router-dom"//react-router //const   s = i(775);
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};

//https://www.jianshu.com/p/56d4babcc555  \xa0表示不间断空白符
//@a.inject("appState"),
//a.observer
let Navigation = class extends o.Component {
    render() {
        const cur_sitemap = this.props.appState.sitemap;
        const t = cur_sitemap ? cur_sitemap._id : "";
        let i;
        return "/" === this.props.appState.routingStore.location.pathname && (i = this.props.appState.sitemapSyncEnabled ?
            o.createElement("ul", {
                className: "nav navbar-nav cloud-auth"
            }, o.createElement("li", null, o.createElement("a", {
                className: "logout",
                onClick: this.disconnectFromCloud.bind(this)
            }, "Logout"))) : o.createElement("ul", {
                    className: "nav navbar-nav cloud-auth"
                    }, o.createElement("li", null, o.createElement("a", {
                    className: "login",
                    onClick: this.openCloudAuthPage.bind(this)
                }, "Sign in to Cloud")))),
            o.createElement("nav", {
                className: "navbar navbar-default",
                role: "navigation"
            }, o.createElement("div", {
                className: "collapse navbar-collapse navbar-ex1-collapse"
            }, o.createElement("ul", {
                className: "nav navbar-nav"
            }, o.createElement("li", null, o.createElement(s.Link, {
                id: "sitemaps-nav-button",
                to: "/"
            }, chrome.i18n.getMessage("Sitemaps"))), o.createElement("li", null, o.createElement("a", {
                id: "sitemap-nav-button",
                className: "dropdown-toggle" + (cur_sitemap ? "" : " disabled"),
                "data-toggle": "dropdown"
            }, chrome.i18n.getMessage("Sitemap_xa0"), o.createElement("span", {
                id: "navbar-active-sitemap-id"
            }, t), o.createElement("b", {
                className: "caret"
            })), o.createElement("ul", {
                className: "dropdown-menu"
            }, o.createElement("li", null, o.createElement(s.Link, {
                className: "selectors",
                to: "/sitemap/selectors?sitemapId=" + t
            }, chrome.i18n.getMessage("Selectors"))), o.createElement("li", null, o.createElement(s.Link, {
                to: "/sitemap/selector-graph?sitemapId=" + t
            }, chrome.i18n.getMessage("Selector_graph"))), o.createElement("li", null, o.createElement(s.Link, {
                className: "edit-metadata",
                to: "/sitemap/edit-metadata?sitemapId=" + t
            }, chrome.i18n.getMessage("Edit_metadata"))), o.createElement("li", null, o.createElement(s.Link, {
                className: "scrape",
                to: "/sitemap/scrape?sitemapId=" + t
            }, chrome.i18n.getMessage("Scrape"))), o.createElement("li", null, o.createElement(s.Link, {
                to: "/sitemap/browse?sitemapId=" + t
            }, chrome.i18n.getMessage("Browse"))), o.createElement("li", null, o.createElement(s.Link, {
                className: "export-sitemap",
                to: "/sitemap/export?sitemapId=" + t
            }, chrome.i18n.getMessage("Export_Sitemap"))), o.createElement("li", null, o.createElement(s.Link, {
                to: "/sitemap/export-data?sitemapId=" + t
            }, chrome.i18n.getMessage("Export_data"))))), o.createElement("li", null, o.createElement("a", {
                id: "create-sitemap-nav-button",
                className: "dropdown-toggle",
                "data-toggle": "dropdown"
            }, chrome.i18n.getMessage("Create_new_sitemap"), o.createElement("b", {
                className: "caret"
            })), o.createElement("ul", {
                className: "dropdown-menu"
            }, o.createElement("li", null, o.createElement(s.Link, {
                className: "create-sitemap",
                to: "/create-sitemap"
            }, chrome.i18n.getMessage("Create_Sitemap"))), o.createElement("li", null, o.createElement(s.Link, {
                className: "import-sitemap",
                to: "/import-sitemap"
            }, chrome.i18n.getMessage("Import_Sitemap"))))), this.props.appState.experimentalFeaturesEnabled ? o.createElement("li", null, o.createElement("a", null, "Experimental features enabled")) : ""), i));
    }

    openCloudAuthPage() {
        const auth_URL = "https://cloud.webscraper.io/extension-api-auth?extension_id=" + chrome.runtime.id;
        chrome.tabs.update(chrome.devtools.inspectedWindow.tabId, {
            url: auth_URL
        });
        this.props.appState.showAuthModal();
    }

    async disconnectFromCloud() {
        await this.props.appState.disconnectFromCloud();
    }
};
Navigation = n([a.inject("appState"), a.observer], Navigation);


export {Navigation}