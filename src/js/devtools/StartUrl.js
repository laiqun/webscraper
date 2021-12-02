import * as react from "react"//const n = i(0),
import {BaseComponent} from "./BaseComponent.js"// r = i(25);
class StartUrl extends BaseComponent {
    componentDidMount() {
        const e = this.getFormValidator();
        if (undefined === e)
            return;
        const t = this.getInput();
        e.addField($(t));
    }

    componentWillUnmount() {
        const e = this.getFormValidator();
        const t = this.getInput();
        e.removeField($(t));
    }

    render() {
        const e = this.props;
        return react.createElement("div", {
            ref: e => this.el = e,
            className: "form-group start-url-block"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("Start_URL")), react.createElement("div", {
            className: "col-lg-10"
        }, react.createElement("div", {
            className: "input-group"
        }, react.createElement("span", {
            className: "input-group-btn"
        }, react.createElement("button", {
            className: "btn btn-default",
            type: "button",
            onClick: e.getCurURL
        }, chrome.i18n.getMessage("GetCurURL"))),
            react.createElement("input", {
            type: "text",
            "data-index": e.index,
            value: e.value,
            onChange: e.onChange,
            className: "form-control input-start-url",
            name: "startUrl[]",
            placeholder: chrome.i18n.getMessage("URL")
        }), react.createElement("span", {
            className: "input-group-btn"
        }, react.createElement("button", {
            className: "btn btn-default",
            type: "button",
            onClick: e.onRemove
        }, "-"), react.createElement("button", {
            className: "btn btn-default",
            type: "button",
            onClick: e.onAdd
        }, "+")))));
    }

    getInput() {
        return this.el.querySelectorAll("input")[0];
    }


}

export {StartUrl}