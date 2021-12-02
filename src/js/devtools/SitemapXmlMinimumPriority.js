import * as react from "react"//    const n = i(0),
import {ConditionalElementBase} from "./ConditionalElementBase.js"//r = i(26);
    class SitemapXmlMinimumPriority extends ConditionalElementBase {
        _render() {
            const {onChange: e, selector: t} = this.props;
            const i = t.sitemapXmlMinimumPriority;
            return react.createElement("div", {
                className: "form-group"
            }, react.createElement("label", {
                className: "col-lg-1 control-label"
            }, "Minimum priority"), react.createElement("div", {
                className: "col-lg-10"
            }, react.createElement("input", {
                id: "sitemapXmlMinimumPriority",
                type: "text",
                className: "form-control selector-value",
                name: "sitemapXmlMinimumPriority",
                value: i,
                onChange: e
            })));
        }
    }
export {SitemapXmlMinimumPriority}