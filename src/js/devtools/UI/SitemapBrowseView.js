"use strict";
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
}, r = this && this.__metadata || function (e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}


import * as o from "mobx-react/dist/index"//const o = i(21),
import * as s from "react"// s = i(0),
import * as l from "../IM/backgroundPageClient.js"// l = i(68),
import * as c from "./BaseComponent.js"// c = i(25),
import * as u from "./SurveyButton.js"// u = i(715);
let SitemapBrowseView = class extends c.BaseComponent {
    constructor(e) {
        super(e);
        this.state = {
            data: [],
            loading: !0,
            survey: void 0
        };
    }

    componentWillMount() {
        this.loadData();
    }

    async loadData() {
        this.setState({
            loading: true
        });
        const e = this.props.appState.sitemap._id;
        const t = await l.backgroundPageClient.getSitemapData(e);
        this.setState({
            data: t,
            loading: false
        });
        await this.loadSurvey();
    }

    async loadSurvey() {
        const e = await l.backgroundPageClient.getSurvey();
        this.setState({
            survey: e
        });
    }

    render() {
        if (this.state.loading) return s.createElement("div", {
            className: "panel-body"
        }, "Loading");
        const e = this.state.data;
        if (0 === e.length) return s.createElement("div", {
            id: "sitemap-data"
        }, s.createElement("div", {
            className: "panel-body"
        }, chrome.i18n.getMessage("NoDataScrapedYet"), s.createElement("button", {
            type: "button",
            className: "btn btn-primary btn-xs",
            onClick: this.loadData.bind(this)
        }, chrome.i18n.getMessage("refresh"))), this.renderCloudAd());
        const t = this.props.appState.sitemap.getDataColumns();
        return s.createElement("div", {
            id: "sitemap-data"
        }, s.createElement("div", {
            className: "panel-body"
        }, s.createElement("button", {
            type: "button",
            className: "btn btn-primary btn-xs",
            onClick: this.loadData.bind(this)
        }, chrome.i18n.getMessage("RefreshData")), s.createElement(u.SurveyButton, {
            survey: this.state.survey
        })), s.createElement("table", {
            className: "table table-bordered table-condensed table-hover"
        }, s.createElement("thead", null, s.createElement("tr", null, t.map(e => s.createElement("th", {
            key: e
        }, e)))), s.createElement("tbody", null, e.map((e, i) => s.createElement("tr", {
            key: i
        }, t.map(t => s.createElement("td", {
            key: t
        }, "object" == typeof e[t] ? JSON.stringify(e[t]) : e[t])))))), this.renderCloudAd());
    }

    renderCloudAd() {
        return s.createElement("div", {
            className: "cloud-ad"
        }, s.createElement("h3", null, "Automate Scraping in Web Scraper Cloud", s.createElement("a", {
            target: "_blank",
            className: "btn btn-primary cta",
            href: "https://www.webscraper.io/cloud-scraper?utm_source=extension&utm_medium=browse&utm_campaign=learn"
        }, "Learn more")), s.createElement("div", {
            className: "cloud-features"
        }, s.createElement("ul", null, s.createElement("li", null, s.createElement("img", {
            src: "/img/schedule-50.png"
        }), " Automatically schedule data extraction"), s.createElement("li", null, s.createElement("img", {
            src: "/img/api-50.png"
        }), " Manage Web Scraper via API"), s.createElement("li", null, s.createElement("img", {
            src: "/img/data-export-50.png"
        }), " Automatic export to Dropbox"), s.createElement("li", null, s.createElement("img", {
            src: "/img/proxy-50.png"
        }), " Built-in proxy for site access issues"))));
    }
};
SitemapBrowseView = n([o.inject("appState"), o.observer, r("design:paramtypes", [Object])], SitemapBrowseView);
export {SitemapBrowseView}
