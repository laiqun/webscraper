import * as react from "react"//const n = i(0),
import * as r from "./ConditionalElementBase.js"//r = i(26);
class SitemapXmlUrlRegex extends r.ConditionalElementBase {
    _render() {
        const {onChange: e, selector: t} = this.props, i = t.sitemapXmlUrlRegex;
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Found Url Regex"), react.createElement("div", {
            className: "col-lg-10"
        }, react.createElement("input", {
            type: "text",
            className: "form-control selector-value sitemap-xml-url-regex",
            name: "sitemapXmlUrlRegex",
            value: i,
            onChange: e
        })));
    }
}

export {SitemapXmlUrlRegex}