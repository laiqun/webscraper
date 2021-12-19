import * as o from "../../common/lib/jquery.js" //o = i(65),
import * as s from "mobx-react"//s = i(21),
import * as l from "react"//l = i(0),
import * as u from "./BaseComponent.js"//u = i(25),
import * as c from "../IM/backgroundPageClient.js"//const c = i(68),
import * as d from "./StartUrl.js"// d = i(525);
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
}, r = this && this.__metadata || function (e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};


let CreateSitemapView = class extends u.BaseComponent {
    constructor(e) {
        super(e);
        this.state = {
            _id: "",
            startUrl: [""]
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
                "startUrl[]": {
                    validators: {
                        notEmpty: {
                            message: "The start URL is required and cannot be empty"
                        },
                        uri: {
                            message: "The start URL is not a valid URL"
                        }
                    }
                }
            }
        };
    }

    componentDidMount() {
        this.initFormValidator();
    }

    initMultipleStartUrlHelper() {
        o("[name='startUrl[]']", this.el).popover({
            title: "Multiple start urls",
            html: true,
            content: "Create ranged start urls like this:<br />http://example.com/[1-100].html",
            placement: "bottom"
        }).blur((function () {
            o(this).popover("hide");
        }));
    }

    render() {
        const e = this.state;
        return l.createElement("div", {
            ref: e => this.el = e
        }, l.createElement("form", {
            className: "form-horizontal",
            role: "form",
            id: "create-sitemap",
            onSubmit: this.cancelEvent.bind(this)
        }, l.createElement("div", {
            className: "form-group"
        }, l.createElement("label", {
            htmlFor: "_id",
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("Sitemap_name")), l.createElement("div", {
            className: "col-lg-10"
        }, l.createElement("input", {
            type: "text",
            className: "form-control",
            value: e._id,
            id: "_id",
            name: "_id",
            placeholder: chrome.i18n.getMessage("Sitemap_name"),
            onChange: this.handleInputChange.bind(this)
        }))), e.startUrl.map((currentValue, index) => l.createElement(d.StartUrl, {
            key: index,
            index: index,
            value: currentValue,
            onRemove: this.removeUrl.bind(this, index),
            onAdd: this.addUrl.bind(this),
            onChange: this.handleInputChange.bind(this),
            getCurURL:this.getCurURL.bind(this,index)
        })), l.createElement("div", {
            className: "form-group"
        }, l.createElement("div", {
            className: "col-lg-offset-1 col-lg-10"
        }, l.createElement("button", {
            id: "submit-create-sitemap",
            type: "button",
            className: "btn btn-default",
            onClick: this.createSitemap.bind(this)
        }, chrome.i18n.getMessage("Create_Sitemap_Action"))))));
    }
    getCurURL(index){
        console.log(index);
        const tabId = chrome.devtools.inspectedWindow.tabId;
        chrome.tabs.get(tabId, (tab) => {
            console.log(tab);
            this.state.startUrl[index] = tab.url;
            this.setState({
                startUrl:this.state.startUrl
            });
        });
    }
    removeUrl(index) {
        const t = this.state.startUrl;
        t.splice(index, 1);
        0 === t.length && t.push("");
        this.setState({
            startUrl: t
        });
    }

    addUrl() {
        const e = this.state.startUrl;
        e.push("");
        this.setState({
            startUrl: e
        });
    }

    async createSitemap(e) {
        e.stopPropagation();
        e.preventDefault();
        if ( !this.isValidForm())
            return false;
        const t = this.getSitemapFromMetadataForm();
        if (await c.backgroundPageClient.sitemapExists(t._id)) {
            this.getFormValidator().updateStatus("_id", "INVALID", "callback");
        } else {
            await c.backgroundPageClient.incrementDailyStat("sitemapsCreated", 1);
            this.props.appState.createSitemap(t);
        }
        return false;
    }

    getSitemapFromMetadataForm() {
        return {
            _id: this.state._id,
            startUrl: this.state.startUrl,
            selectors: []
        };
    }
};
CreateSitemapView = n([s.inject("appState"), s.observer, r("design:paramtypes", [Object])], CreateSitemapView);
export {CreateSitemapView}
