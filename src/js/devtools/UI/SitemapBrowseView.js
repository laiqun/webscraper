"use strict";
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};
/*
var r = this && this.__metadata || function (e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
*/

import * as o from "mobx-react"//const o = i(21),
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
        const sitemap_id = this.props.appState.sitemap._id;
        const sitemap_data = await l.backgroundPageClient.getSitemapData(sitemap_id);
        this.setState({
            data: sitemap_data,
            loading: false
        });
        await this.loadSurvey();
    }

    async deleteData() {
        this.setState({loading: true});
        const sitemap_id = this.props.appState.sitemap._id;
        await l.backgroundPageClient.deleteSitemapData(sitemap_id);
        this.setState({
            data: [],
            loading:false});
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
        const sitemap_data = this.state.data;
        if (0 === sitemap_data.length)
            return s.createElement("div", {
                id: "sitemap-data"
            }, s.createElement("div", {
                className: "panel-body"
            }, chrome.i18n.getMessage("NoDataScrapedYet"),
                s.createElement("button", {
                type: "button",
                className: "btn btn-primary btn-xs",
                onClick: this.loadData.bind(this)
            }, chrome.i18n.getMessage("refresh"))), this.renderCloudAd());

        const columns = this.props.appState.sitemap.getDataColumns();
        return s.createElement("div", {
            id: "sitemap-data"
        }, s.createElement("div", {
            className: "panel-body"
        }, s.createElement("button", {
            type: "button",
            className: "btn btn-primary btn-xs",
            onClick: this.loadData.bind(this)
        }, chrome.i18n.getMessage("RefreshData")),
        s.createElement("button", {
            type: "button",
            className: "btn btn-primary btn-xs",
            style:{"marginLeft":"10px"},
            onClick: this.deleteData.bind(this)
        }, "Delete Data"),
            s.createElement(u.SurveyButton, {
            survey: this.state.survey
        })), s.createElement("table", {
            className: "table table-bordered table-condensed table-hover"
        }, s.createElement("thead", null,
            s.createElement("tr", null, columns.map(currentValue => s.createElement("th", {
            key: currentValue
        }, currentValue)))),
            s.createElement("tbody", null, sitemap_data.map((currentValue, index) => s.createElement("tr", {
                key: index
            }, columns.map(column_key => s.createElement("td", {
                key: column_key
            }, "object" == typeof currentValue[column_key] ? JSON.stringify(currentValue[column_key]) : currentValue[column_key])))))), this.renderCloudAd());
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
SitemapBrowseView = n([o.inject("appState"), o.observer,/* r("design:paramtypes", [Object])*/], SitemapBrowseView);
export {SitemapBrowseView}
