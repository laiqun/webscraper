//const n = i(0), r = i(26);
import * as react from "react"
import {ConditionalElementBase} from "./ConditionalElementBase.js"

class SitemapXmlUrls extends ConditionalElementBase {
    _render() {
        const {onChange: e, onRemove: t, selector: i, onAddUrl: r, onClickPopulateSitemapXmlUrlsFromRobotsTxt: a} = this.props,
            o = i.sitemapXmlUrls;
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Sitemap.xml Urls"), react.createElement("div", {
            className: "col-lg-10"
        }, o.map((i, r) => react.createElement("div", {
            key: r,
            className: "input-group vertical-input-item"
        }, react.createElement("input", {
            type: "text",
            className: "form-control sitemap-xml-url",
            name: `sitemapXmlUrls[${r}]`,
            value: i,
            onChange: e,
            placeholder: "https://example.com/sitemap.xml"
        }), react.createElement("span", {
            className: "input-group-btn"
        }, react.createElement("button", {
            className: "btn btn-danger",
            type: "button",
            onClick: t.bind(t, "sitemapXmlUrls", r, "")
        }, "Remove")))), react.createElement("button", {
            type: "button",
            className: "btn btn-primary add-sitemap-xml-url",
            onClick: r.bind(r, "sitemapXmlUrls", "")
        }, "Add Url"), "\xa0", react.createElement("button", {
            type: "button",
            className: "btn btn-primary add-from-robots-txt",
            onClick: a
        }, "Add from robots.txt")));
    }
}

export {SitemapXmlUrls}