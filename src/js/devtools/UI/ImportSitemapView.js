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
import * as o from "mobx-react/dist/index" //o = i(21),
import * as s from "react" //s = i(0),
import * as u from "./BaseComponent.js" //, u = i(25)
import * as c from "../IM/backgroundPageClient.js" //, c = i(68)
import * as l from "../../common/Sitemap.js" //const  l = i(119);
let ImportSitemapView = class extends u.BaseComponent {
    constructor(e) {
        super(e);
        this.state = {
            sitemapJSON: "",
            _id: ""
        };
    }

    getFormValidatorOptions() {
        return {
            fields: {
                _id: {
                    validators: {
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
                sitemapJSON: {
                    validators: {
                        notEmpty: {
                            message: "Sitemap JSON is required and cannot be empty"
                        },
                        callback: {
                            message: "invalid JSON",
                            callback: (e, t) => {
                                try {
                                    const t = JSON.parse(e);
                                    if (Array.isArray(t.startUrl) && t.startUrl.length > 1e4) return {
                                        valid: !1,
                                        message: "Start url limit reached. Maximum start url count is 10000."
                                    };
                                } catch (e) {
                                    return {
                                        valid: !1,
                                        message: "invalid JSON"
                                    };
                                }
                                return !0;
                            }
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
        const { sitemapJSON: e, _id: t } = this.state;
        return s.createElement("div", {
            ref: e => this.el = e
        }, s.createElement("form", {
            className: "form-horizontal",
            role: "form",
            onSubmit: this.cancelEvent.bind(this)
        }, s.createElement("div", {
            className: "form-group"
        }, s.createElement("label", {
            htmlFor: "sitemapJSON",
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("Sitemap_JSON")), s.createElement("div", {
            className: "col-lg-10"
        }, s.createElement("textarea", {
            rows: 7,
            className: "form-control",
            name: "sitemapJSON",
            id: "sitemapJSON",
            value: e,
            onChange: this.handleInputChange.bind(this)
        }))), s.createElement("div", {
            className: "form-group"
        }, s.createElement("label", {
            htmlFor: "edit_sitemap_id",
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("Rename_Sitemap_optional")), s.createElement("div", {
            className: "col-lg-10"
        }, s.createElement("input", {
            type: "text",
            className: "form-control",
            name: "_id",
            id: "_id",
            placeholder: chrome.i18n.getMessage("Sitemap_name"),
            value: t,
            onChange: this.handleInputChange.bind(this)
        }))), s.createElement("div", {
            className: "form-group"
        }, s.createElement("div", {
            className: "col-lg-offset-1 col-lg-10"
        }, s.createElement("button", {
            type: "button",
            className: "btn btn-default",
            id: "submit-import-sitemap",
            onClick: this.importSitemap.bind(this)
        }, chrome.i18n.getMessage("Import_Sitemap_Action"))))));
    }

    async importSitemap(e) {
        e.stopPropagation();
        e.preventDefault();
        if ( !this.isValidForm())
            return false;
        const sitemapJSON = this.state.sitemapJSON;
        const _id = this.state._id;
        const sitemap = new l.Sitemap(JSON.parse(sitemapJSON));
        if (_id.length)
            sitemap._id = _id;
        if (await c.backgroundPageClient.sitemapExists(sitemap._id)) {
            this.getFormValidator().updateStatus("_id", "INVALID", "callback");
        } else {
            await c.backgroundPageClient.incrementDailyStat("sitemapsImported", 1);
            this.props.appState.createSitemap(sitemap);
        }
    }
};
ImportSitemapView = n([o.inject("appState"), o.observer, r("design:paramtypes", [Object])], ImportSitemapView);

export { ImportSitemapView }