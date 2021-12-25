var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};
var r = this && this.__metadata || function (e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};  //限制输入参数类型的

import * as mobxReact from "mobx-react"//const mobxReact = i(21)
import * as react from "react"//react = i(0),
import {BaseComponent} from "./BaseComponent.js"//l = i(25)
import {DevToolsContentScriptClient} from "../IM/DevToolsContentScriptClient.js"//, c = i(221);
let WebSiteSetupView = class extends BaseComponent {
    constructor(e) {
        super(e);
        let websiteStateSetup = this.props.appState.sitemap.websiteStateSetup;
        if(void 0 === websiteStateSetup)
        {
            websiteStateSetup = {
            enabled: !1,
            performWhenNotFoundSelector: "",
            actions: [{
                type: "openUrl",
                url: "http://example.com"
            }]};
        }
        this.state = {
            enabled: websiteStateSetup.enabled,
            performWhenNotFoundSelector: websiteStateSetup.performWhenNotFoundSelector,
            actions: websiteStateSetup.actions,
            previewingElements: false
        };
    }

    getFormValidatorOptions() {
        return {
            fields: {
                performWhenNotFoundSelector: {
                    validators: {
                        notEmpty: {
                            message: "Selector is required and cannot be empty"
                        }
                    }
                }
            }
        };
    }

    componentDidMount() {
        this.initFormValidator();
    }

    render() {
        const {enabled: e, performWhenNotFoundSelector: t, actions: i} = this.state;
        return react.createElement("div", {
            ref: e => this.el = e
        }, react.createElement("form", {
            className: "form-horizontal",
            role: "form",
            onSubmit: this.cancelEvent.bind(this)
        }, react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Selector"), react.createElement("div", {
            className: "col-lg-10"
        }, react.createElement("div", {
            className: "input-group"
        }, react.createElement("span", {
            className: "input-group-btn"
        }, react.createElement("button", {
            className: "btn btn-default",
            type: "button",
            onClick: this.selectSelector.bind(this)
        }, "Select"), react.createElement("button", {
            className: "btn btn-default" + (this.state.previewingElements ? " preview" : ""),
            type: "button",
            "data-toggle": "button",
            onClick: this.elementPreview.bind(this)
        }, "Element preview")), react.createElement("input", {
            type: "text",
            className: "form-control selector-value",
            id: "performWhenNotFoundSelector",
            name: "performWhenNotFoundSelector",
            value: t,
            onChange: this.handleInputChange.bind(this)
        })))), react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, "Actions"), react.createElement("div", {
            className: "col-lg-10"
        })), react.createElement("div", {
            className: "form-group"
        }, react.createElement("div", {
            className: "col-lg-10 col-lg-offset-1"
        }, react.createElement("button", {
            type: "button",
            className: "btn btn-primary"
        }, "Add Action")))));
    }

    async selectSelector(e) {
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget;
        const selector = (await DevToolsContentScriptClient.selectSelector({
                    parentCSSSelector: "",
                    allowedElements: "*"
                })).CSSSelector;
        this.setState({
            performWhenNotFoundSelector: selector
        });
        this.revalidateField(target);
    }

    async elementPreview(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.state.previewingElements )
        {
            await DevToolsContentScriptClient.removeCurrentContentSelector();
            this.setState({
                previewingElements: !1
            });
        }
        else
        {
            await DevToolsContentScriptClient.elementPreview({
                parentCSSSelector: "",
                elementCSSSelector: this.state.performWhenNotFoundSelector
            });
            this.setState({
                previewingElements: true
            });
        }
    }
};
WebSiteSetupView = n([mobxReact.inject("appState"), mobxReact.observer, r("design:paramtypes", [Object])], WebSiteSetupView);


export {WebSiteSetupView}