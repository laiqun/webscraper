"use strict";
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
}, r = this && this.__metadata || function (e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};


import * as o from "mobx-react/dist/index"//o = i(21),
import * as s from "react"//s = i(0),
import * as u from "./BaseComponent.js"//u = i(25),
import * as c from "../IM/backgroundPageClient.js"//c = i(68),
import * as d from "../RequestPermissions.js"//d = i(220),
import * as l from "../Async.js"//l = i(22),
import * as p from "./ValidationError.js"//p = i(728),
import * as h from "../rules/SitemapScrapeViewRules.js"//const     h = i(729);
let SitemapScrapeView = class extends u.BaseComponent {
    constructor(e) {
        super(e);
        this.state = {
            requestInterval: "2000",
            pageLoadDelay: "2000",
            scrapingInProgress: false
        };
        this.props.errorState.setRules(new h.SitemapScrapeViewRules);
    }

    render() {
        const e = this.state.scrapingInProgress ? "" : " hide";
        return s.createElement("div", {
            ref: e => this.el = e
        }, s.createElement("form", {
            className: "form-horizontal",
            role: "form",
            id: "submit-scrape-sitemap-form",
            onSubmit: this.cancelEvent.bind(this)
        }, s.createElement("div", {
            className: "form-group " + this.showValidationStatus("requestInterval")
        }, s.createElement("label", {
            htmlFor: "requestInterval",
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("Request_interval_ms")), s.createElement("div", {
            className: "col-lg-10"
        }, s.createElement("input", {
            type: "text",
            className: "form-control request-interval",
            name: "requestInterval",
            placeholder: "Request interval",
            value: this.state.requestInterval,
            onChange: this.handleInputChange.bind(this),
            disabled: this.state.scrapingInProgress
        }), s.createElement(p.ValidationError, {
            field: "requestInterval"
        }))), s.createElement("div", {
            className: "form-group " + this.showValidationStatus("pageLoadDelay")
        }, s.createElement("label", {
            htmlFor: "pageLoadDelay",
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("Page_load_delay_ms")), s.createElement("div", {
            className: "col-lg-10"
        }, s.createElement("input", {
            type: "text",
            className: "form-control page-load-delay",
            name: "pageLoadDelay",
            placeholder: "Page load delay",
            value: this.state.pageLoadDelay,
            onChange: this.handleInputChange.bind(this),
            disabled: this.state.scrapingInProgress
        }), s.createElement(p.ValidationError, {
            field: "pageLoadDelay"
        }))), s.createElement("div", {
            className: "alert alert-success col-lg-10 col-lg-offset-1 scraping-in-progress" + e,
            role: "alert"
        }, "Scraping in progress. Close the popup to stop scraping.", s.createElement("br", null), "When scraping is finished you can browse the data or export it as CSV.", s.createElement("br", null), "You can also browse data while the scraper is running."), s.createElement("div", {
            className: "form-group"
        }, s.createElement("div", {
            className: "col-lg-offset-1 col-lg-10"
        }, s.createElement("button", {
            type: "button",
            className: "btn btn-primary",
            id: "submit-scrape-sitemap",
            onClick: this.scrape.bind(this),
            disabled: this.state.scrapingInProgress
        }, chrome.i18n.getMessage("Start_scraping"))))));
    }

    async scrape(e) {
        console.log("sitemapScrapeView scrape");
        e.stopPropagation();
        e.preventDefault();
        if ( !this.isFormValid({
            requestInterval: this.state.requestInterval,
            pageLoadDelay: this.state.pageLoadDelay
        }))
            return;
        await d.RequestPermissions.requestAdditionalPermissions();
        this.setState({
            scrapingInProgress: true
        });
        const sitemap = this.props.appState.sitemap;
        const scrapeInput = {
            sitemap: sitemap,
            requestInterval: parseInt(this.state.requestInterval, 10),
            pageLoadDelay: parseInt(this.state.pageLoadDelay, 10)
        };
        await c.backgroundPageClient.incrementDailyStat("scrapingJobsRun", 1);
        c.backgroundPageClient.scrape(scrapeInput);
        await l.Async.sleep(1000);
        this.props.appState.goToSitemapBrowseData(sitemap._id);
    }
};
SitemapScrapeView = n([o.inject("appState", "errorState"), o.observer, r("design:paramtypes", [Object])], SitemapScrapeView);
export {SitemapScrapeView}