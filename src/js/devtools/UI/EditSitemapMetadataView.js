"use strict";
var n = this && this.__decorate || function(e, t, i, n) {
        var r, a = arguments.length,
            o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n);
        else
            for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
        return a > 3 && o && Object.defineProperty(t, i, o), o;
    },
    r = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
import * as mobx_react from "mobx-react/dist/index" //const o = i(21),
import * as react from "react" //s = i(0),
import * as l from "../IM/backgroundPageClient.js" //l = i(68),
import * as c from "./BaseComponent.js" //c = i(25),
import * as u from "./StartUrl.js" // u = i(525);
let EditSitemapMetadataView = class extends c.BaseComponent {
    constructor(e) {
        super(e);
        const { startUrl: t } = e.appState.sitemap;
        let i = [];
        i = Array.isArray(t) ? t.length > 0 ? t : [""] : [t], this.state = {
            _id: e.appState.sitemap._id,
            startUrl: i
        };
    }

    getFormValidatorOptions() {
        return {
            fields: {
                _id: {
                    validators: {
                        notEmpty: {
                            message: "The sitemap id is required and cannot be empty"
                        },
                        stringLength: {
                            min: 2,
                            message: "The sitemap id should be atleast 2 characters long"
                        },
                        /*
                        regexp: {
                            regexp: /^[a-z][a-z0-9_\$\(\)\+\-/]+$/,
                            message: "Only lowercase characters (a-z), digits (0-9), or any of the characters _, $, (, ), +, -, and / are allowed. Must begin with a letter."
                        },*/
                        callback: {
                            message: chrome.i18n.getMessage("SitemapIDAlreadyExist"),
                            callback: (e, t) => !0
                        }
                    }
                },
                "startUrl[]": { //通过name属性来辨别  验证规则，和待验证 的元素
                    validators: {
                        notEmpty: {
                            message: "The start URL is required and cannot be empty"
                        },
                        uri: {
                            message: "The start URL is not a valid URL",
                            allowLocal: !0
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
        return react.createElement("div", {
            id: "edit-sitemap"
        }, react.createElement("form", {
            className: "form-horizontal",
            role: "form",
            id: "edit-sitemap-metadata-form",
            onSubmit: this.cancelEvent.bind(this)
        }, react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("Sitemap_name")), react.createElement("div", {
            className: "col-lg-10"
        }, react.createElement("input", {
            type: "text",
            className: "form-control",
            value: this.state._id,
            id: "_id",
            name: "_id",
            placeholder: chrome.i18n.getMessage("Sitemap_name"),
            onChange: this.handleInputChange.bind(this)
        }))), this.state.startUrl.map((e, t) => react.createElement(u.StartUrl, {
            key: t,
            index: t,
            value: e,
            onRemove: this.removeUrl.bind(this, t),
            onAdd: this.addUrl.bind(this),
            onChange: this.handleInputChange.bind(this)
        })), react.createElement("div", {
            className: "form-group"
        }, react.createElement("div", {
            className: "col-lg-offset-1 col-lg-10"
        }, react.createElement("button", {
            id: "submit-sitemap-metadata",
            type: "button",
            className: "btn btn-primary",
            onClick: this.saveSitemap.bind(this)
        }, chrome.i18n.getMessage("Save_Sitemap"))))));
    }

    removeUrl(e) {
        const t = this.state.startUrl;
        t.splice(e, 1), 0 === t.length && t.push(""), this.setState({
            startUrl: t
        });
    }

    addUrl() {
        const e = this.state.startUrl;
        e.push(""), this.setState({
            startUrl: e
        });
    }

    async saveSitemap(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.isValidForm())
            return !1;
        if (this.state._id !== this.props.appState.sitemap._id) {
            if (await l.backgroundPageClient.sitemapExists(this.state._id)) {
                return void this.getFormValidator().updateStatus("_id", "INVALID", "callback");
            }
        }
        this.props.appState.updateSitemapMetadata(this.state._id, this.state.startUrl);
    }
};
EditSitemapMetadataView = n([mobx_react.inject("appState"), mobx_react.observer, r("design:paramtypes", [Object])], EditSitemapMetadataView);

export { EditSitemapMetadataView }