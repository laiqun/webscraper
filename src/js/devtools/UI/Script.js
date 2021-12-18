import * as react from "react"//, r = i(0),
import * as o from "./ConditionalElementBase.js"//, o = i(26);
import * as n from "prismjs"//n = i(697),//https://ian.pvdindustrial.com/blog/prismjs-npm-webpack-wordpress-theme-20180920/
import * as a from "react-simple-code-editor/index"//const  a = i(698)
class Script extends o.ConditionalElementBase {
    _render() {
        const {onChange: e, selector: t} = this.props, i = t.script || "";
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Script"), react.createElement("div", {
            className: "col-lg-10"
        }, react.createElement("div", {
            className: "script-editor"
        }, react.createElement("span", null, "function script(parentElement: Element | Document) : Promise<Object[]> | Object[] {"), react.createElement(a.default, {
            value: i,
            onValueChange: e,
            className: "script-input",
            highlight: e => n.highlight(e, n.languages.js),
            padding: 10,
            style: {
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12
            }
        }), react.createElement("span", null, "}"))));
    }
}

export {Script}