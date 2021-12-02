import * as u from "./Selector/SelectorLink.js";  //u = i(254),
import * as r from "./Selector/SelectorElementAttribute.js" //r = i(248),
import * as n from "./Selector/SelectorElement.js"  //n = i(247),
import * as g from "./Selector/SelectorText.js"//g = i(397),
import * as l from "./Selector/SelectorHTML.js" //l = i(252),
import * as m from "./Selector/SelectorTable.js" //m = i(219),
import * as p from "./Selector/SelectorPopupLink.js" //p = i(394),
import * as s from "./Selector/SelectorGroup.js" //s = i(251),
import * as c from "./Selector/SelectorImage.js"//c = i(253),
import * as o from "./Selector/SelectorElementScroll.js"//o = i(250),
import * as a from "./Selector/SelectorElementClick.js"  //a = i(249),
import * as f from "./Selector/SelectorSitemapXmlLink.js" //f = i(396),
import * as d from "./Selector/SelectorMicroData.js" //d = i(217),
import * as h from "./Selector/SelectorScriptData.js" //h = i(395),
import * as y from "./Selector/ActionScrollDown.js"//y = i(398),
import * as b from "./Selector/ActionClick.js" //b = i(399),
import * as v from "./Selector/SelectorPagination.js" // v = i(400);
function selectorFactory(e) {
    switch (e.type) {
        case "SelectorLink":
            return new u.SelectorLink(e);

        case "SelectorElement":
            return new n.SelectorElement(e);

        case "SelectorText":
            return new g.SelectorText(e);

        case "SelectorHTML":
            return new l.SelectorHTML(e);

        case "SelectorTable":
            return new m.SelectorTable(e);

        case "SelectorElementAttribute":
            return new r.SelectorElementAttribute(e);

        case "SelectorPopupLink":
            return new p.SelectorPopupLink(e);

        case "SelectorGroup":
            return new s.SelectorGroup(e);

        case "SelectorImage":
            return new c.SelectorImage(e);

        case "SelectorElementScroll":
            return new o.SelectorElementScroll(e);

        case "SelectorElementClick":
            return new a.SelectorElementClick(e);

        case "SelectorSitemapXmlLink":
            return new f.SelectorSitemapXmlLink(e);

        case "SelectorMicroData":
            return new d.SelectorMicroData(e);

        case "SelectorScriptData":
            return new h.SelectorScriptData(e);

        case "ActionScrollDown":
            return new y.ActionScrollDown(e);

        case "ActionClick":
            return new b.ActionClick(e);

        case "SelectorPagination":
            return new v.SelectorPagination(e);

        default:
            throw "missing selector type " + e.type;
    }
}

export {selectorFactory}