import * as c from "./SelectorTable.js"//c = i(219),
import * as A from "./Arr.js"//A = i(87),
import * as _ from "./Selector/SelectorMicroData.js"//_ = i(217),
import * as N from "./RequestPermissions.js" //N = i(220),
import * as F from "./DevToolsContentScriptClient.js"//F = i(221),
import * as C from "./selectorFactory.js"//C = i(94),
import * as l from "react"//l = i(0),
import * as s from "mobx-react"//s = i(21),
import * as d from "./BaseComponent.js"//d = i(25),
import * as u from "./backgroundPageClient.js"//u = i(68),
import * as o from "../contentjs/jquery.js"//o = i(65),
import * as p from "./DataObjectSelectors.js"//p = i(691),
import * as h from "./DataPreviewButton.js" //h = i(692),
import * as f from "./DiscardInitialElements.js"//f = i(693),
import * as m from "./MicroDataSelectorType.js"//m = i(694),
import * as g from "./SchemaOrgType.js"//g = i(695),
import * as y from "./Script.js"//y = i(696),
import * as b from "./ScriptDataColumns.js"//b = i(699),
import * as v from "./SitemapXmlMinimumPriority.js"//v = i(700)
import * as w from "./SitemapXmlUrlRegex.js"//w = i(701),
import * as S from "./SitemapXmlUrls.js"//S = i(702),
import * as x from "./PerformActionButton.js"//x = i(703),
import * as M from "./selectorTypes.js"//M = i(704),
import * as E from "./Checkbox.js"//E = i(705),
import * as O from "./Columns.js"//O = i(706),
import * as P from "./Delay.js"//P = i(707),
import * as k from "./ParentSelectors.js"//k = i(708),
import * as T from "./ElementSelector.js"//T = i(709),
import * as D from "./Select.js"//D = i(710),
import * as R from "./Input.js"//R = i(711),
import * as I from "./InputAutocomplete.js"  //I = i(712);
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
}, r = this && this.__metadata || function (e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
let EditSitemapSelectorView = class extends d.BaseComponent {
    constructor(e) {
        super(e);
        const t = C.selectorFactory(e.appState.selector);
        this.state = {
            selector: t,
            schemaOrgExtractorFoundData: []
        };
    }

    get selectorIds() {
        const originalSitemap = this.props.appState.originalSitemap;
        const originalSelector = this.props.appState.originalSelector;
        const cloned_sitemap = originalSitemap.clone();
        cloned_sitemap.updateSelector(originalSelector, this.state.selector);
        const results = [];
        cloned_sitemap.selectors.forEach(e => {
            if (e.canHaveChildSelectors() )
                results.push(e.id);
        });
        results.unshift("_root");
        return results;
    }

    get columns() {
        let result = [];
        const selector = this.state.selector;
        if ( undefined !== selector.columns )
        {
            result = selector.columns;
        }
        return  result;
    }

    getFormValidatorOptions() {
        const e = {
            fields: {
                id: {
                    validators: {
                        notEmpty: {
                            message: "Sitemap id required and cannot be empty"
                        },
                        stringLength: {
                            min: 3,
                            message: "The sitemap id should be atleast 3 characters long"
                        },
                        regexp: {
                            regexp: /^(?!web-scraper)[^_\.\$\#\s&][^\.\$\#\n&]+$/,
                            message: "Selector id cannot start with _ and cannot contain . $ #"
                        }
                    }
                },
                selector: {
                    validators: {
                        notEmpty: {
                            message: "Selector is required and cannot be empty"
                        }
                    }
                },
                regex: {
                    validators: {
                        callback: {
                            message: "JavaScript does not support regular expressions that can match 0 characters.",
                            callback(e, t) {
                                if (!e) return !0;
                                const i = "".match(new RegExp(e));
                                return null === i || "" !== i[0];
                            }
                        }
                    }
                },
                clickElementSelector: {
                    validators: {
                        notEmpty: {
                            message: "Click selector is required and cannot be empty"
                        }
                    }
                },
                tableHeaderRowSelector: {
                    validators: {
                        notEmpty: {
                            message: "Header row selector is required and cannot be empty"
                        }
                    }
                },
                tableDataRowSelector: {
                    validators: {
                        notEmpty: {
                            message: "Data row selector is required and cannot be empty"
                        }
                    }
                },
                delay: {
                    validators: {
                        numeric: {
                            message: "Delay must be numeric"
                        }
                    }
                },
                sitemapXmlMinimumPriority: {
                    validators: {
                        between: {
                            min: 0,
                            max: 1,
                            message: "Minimum priority must be between 0 and 1"
                        }
                    }
                },
                sitemapXmlUrlRegex: {
                    validators: {
                        callback: {
                            message: "JavaScript does not support regular expressions that can match 0 characters.",
                            callback(e, t) {
                                if (!e) return !0;
                                try {
                                    const t = "".match(new RegExp(e));
                                    return null === t || "" !== t[0];
                                } catch (e) {
                                    return {
                                        valid: !1,
                                        message: "Invalid regex"
                                    };
                                }
                            }
                        }
                    }
                },
                sitemapXmlSitemapXmlUrlRegex: {
                    validators: {
                        callback: {
                            message: "JavaScript does not support regular expressions that can match 0 characters.",
                            callback(e, t) {
                                if (!e) return !0;
                                try {
                                    const t = "".match(new RegExp(e));
                                    return null === t || "" !== t[0];
                                } catch (e) {
                                    return {
                                        valid: !1,
                                        message: "Invalid regex"
                                    };
                                }
                            }
                        }
                    }
                },
                selectorScrollElement: {
                    validators: {}
                },
                selectorScrollDownIfElementNotVisible: {
                    validators: {}
                },
                selectorScrollToElement: {
                    validators: {}
                },
                parentSelectors: {
                    validators: {
                        notEmpty: {
                            message: "You must choose at least one parent selector"
                        },
                        callback: {
                            message: "Selector needs to have at least one other selector as parent",
                            callback: (e, t) => 1 !== e.length || e[0] !== this.state.selector.id
                        }
                    }
                }
            },
            group: ".form-group:not(:has(.form-group))"
        }, t = /^(?!web-scraper)[^_\.\$\s][^_\.\$\s][^\.\$\n]+$/;
        for (let i = 0; i <= 30; i++) e.fields[`columns[${i}][name]`] = {
            validators: {
                notEmpty: {
                    message: "must not be empty"
                },
                regexp: {
                    regexp: t,
                    message: "invalid format"
                }
            }
        };
        for (let i = 0; i <= 30; i++) e.fields[`scriptDataColumns[${i}][name]`] = {
            validators: {
                notEmpty: {
                    message: "must not be empty"
                },
                regexp: {
                    regexp: t,
                    message: "invalid format"
                }
            }
        };
        for (let t = 0; t <= 30; t++) e.fields[`sitemapXmlUrls[${t}]`] = {
            validators: {
                notEmpty: {
                    message: "must not be empty"
                },
                uri: {
                    message: "Sitemap.xml URL is not a valid URL"
                }
            }
        };
        return e;
    }

    componentDidMount() {
        this.initFormValidator();
    }

    render() {
        const e = this.selectorIds,
            t = this.props.appState.experimentalFeaturesEnabled, {selector: i, schemaOrgExtractorFoundData: n} = this.state;
        let r = {};
        for (const e of n) i instanceof _.SelectorMicroData && e.schemaOrgType === i.schemaOrgType && (r = e.data[0]);
        const a = n.map(e => e.schemaOrgType), o = {
            auto: "auto",
            linkFromHref: 'Link (<a href="http://example.com/">)',
            linkFromInlineScript: "Scripted link (<a href=\"javascript:window.location='http://example.com'\">)",
            linkFromAttributes: 'Attribute link (<a data-link="http://example.com">)',
            linkFromInnerText: "Text link (<div>link: http://example.com/</div>)",
            linkFromInterceptableJavaScriptClick: "Interceptable Scripted Link click simulation (window.open(), <form> submit, history.pushState())",
            linkFromClickRedirect: 'Scripted Link click simulation (button.addEventListener("click", redirectFunction))',
            clickMore: "Click multiple times on next/more button ([Next page] [Load More])",
            clickOnce: "Click once on multiple buttons ([1] [2], [3])"
        };
        return t || delete o.linkFromClickRedirect, l.createElement("div", {
            ref: e => this.el = e
        }, l.createElement("form", {
            className: "form-horizontal",
            role: "form",
            id: "edit-selector",
            onSubmit: this.cancelEvent.bind(this)
        }, l.createElement("div", {
            className: "form-group"
        }, l.createElement("label", {
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("SelectorID")), l.createElement("div", {
            className: "col-lg-10"
        }, l.createElement("input", {
            type: "text",
            className: "form-control",
            name: "id",
            id: "selectorId",
            placeholder: "Selector Id",
            value: i.id,
            onChange: this.handleInputChange.bind(this)
        }))), l.createElement("div", {
            className: "form-group"
        }, l.createElement("label", {
            className: "col-lg-1 control-label"
        }, chrome.i18n.getMessage("type")), l.createElement("div", {
            className: "col-lg-10"
        }, l.createElement("select", {
            className: "form-control",
            value: i.type,
            name: chrome.i18n.getMessage("type"),
            onChange: this.changeSelectorType.bind(this)
        }, M.selectorTypes.map(e => e.experimental && !t ? "" : l.createElement("option", {
            key: e.type,
            value: e.type
        }, e.title))))), l.createElement(T.ElementSelector, {
            feature: "selector",
            selector: i,
            label: chrome.i18n.getMessage("SelectorAction"),
            onSelectClick: this.selectSelector.bind(this, "selector"),
            onElementPreviewClick: this.elementPreview.bind(this, "selector"),
            onDataPreviewClick: this.dataPreview.bind(this),
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(T.ElementSelector, {
            feature: "selectorScrollElement",
            selector: i,
            label: "Scroll element",
            onSelectClick: this.selectSelector.bind(this, "selectorScrollElement"),
            onElementPreviewClick: this.elementPreview.bind(this, "selectorScrollElement"),
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(T.ElementSelector, {
            feature: "selectorScrollDownIfElementNotVisible",
            selector: i,
            label: "Scroll only if missing",
            onSelectClick: this.selectSelector.bind(this, "selectorScrollDownIfElementNotVisible"),
            onElementPreviewClick: this.elementPreview.bind(this, "selectorScrollDownIfElementNotVisible"),
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(T.ElementSelector, {
            feature: "selectorScrollToElement",
            selector: i,
            label: "Scroll to element",
            onSelectClick: this.selectSelector.bind(this, "selectorScrollToElement"),
            onElementPreviewClick: this.elementPreview.bind(this, "selectorScrollToElement"),
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(T.ElementSelector, {
            feature: "clickElementSelector",
            selector: i,
            label: "Click selector",
            onSelectClick: this.selectClickSelector.bind(this),
            onElementPreviewClick: this.elementPreviewClickSelector.bind(this),
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(T.ElementSelector, {
            feature: "tableHeaderRowSelector",
            selector: i,
            label: "Header row selector",
            onSelectClick: this.selectTableHeaderRowSelector.bind(this),
            onElementPreviewClick: this.previewTableRowSelector.bind(this),
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(T.ElementSelector, {
            feature: "tableDataRowSelector",
            selector: i,
            label: "Data rows selector",
            onSelectClick: this.selectTableDataRowSelector.bind(this),
            onElementPreviewClick: this.previewTableRowSelector.bind(this),
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(D.Select, {
            feature: "clickType",
            selector: i,
            label: "Click type",
            onChange: this.handleInputChange.bind(this),
            options: {
                clickOnce: "Click once (pagination, tabs)",
                clickMore: "Click more (click to load more elements. Stops when no new elements with unique text content are found.)"
            }
        }), l.createElement(D.Select, {
            feature: "paginationType",
            selector: i,
            label: "Pagination Type",
            onChange: this.handleInputChange.bind(this),
            options: o
        }), l.createElement(D.Select, {
            selector: i,
            feature: "clickElementUniquenessType",
            label: "Click element uniqueness",
            onChange: this.handleInputChange.bind(this),
            options: {
                uniqueText: "Unique Text",
                uniqueHTMLText: "Unique HTML+Text",
                uniqueHTML: "Unique HTML",
                uniqueCSSSelector: "unique CSS Selector"
            }
        }), l.createElement(m.MicroDataSelectorType, {
            feature: "microDataSelectorType",
            selector: i,
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(g.SchemaOrgType, {
            feature: "schemaOrgType",
            selector: i,
            onChange: this.handleSchemaOrgTypeChange.bind(this),
            onRefresh: this.refreshSchemaOrgTypes.bind(this),
            types: a
        }), l.createElement(y.Script, {
            feature: "script",
            selector: i,
            onChange: this.handleValueChange.bind(this, "script")
        }), l.createElement(b.ScriptDataColumns, {
            feature: "scriptDataColumns",
            selector: i,
            onChange: this.handleInputChange.bind(this),
            onRemove: this.handleMultiRemove.bind(this),
            onAdd: this.handleAddMultiValue.bind(this)
        }), l.createElement(E.Checkbox, {
            feature: "multiple",
            selector: i,
            label: chrome.i18n.getMessage("Multiple"),
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(f.DiscardInitialElements, {
            feature: "discardInitialElements",
            selector: i,
            onChange: this.handleInputChange.bind(this)
        }), t ? l.createElement(D.Select, {
            feature: "linkType",
            selector: i,
            label: "Link type",
            onChange: this.handleInputChange.bind(this),
            options: {
                link: "Link (read from href attribute)",
                text: "Text (use text contents as link)",
                attribute: "Attribute (@TODO)",
                popup: "Popup window (@TODO)",
                redirect: "Redirect (@TODO)",
                "form-submit": "Form submit (@TODO)"
            }
        }) : "", l.createElement(E.Checkbox, {
            feature: "downloadImage",
            selector: i,
            label: "Download image",
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(R.Input, {
            feature: "regex",
            selector: i,
            label: chrome.i18n.getMessage("Regex"),
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(I.InputAutocomplete, {
            feature: "extractAttribute",
            placeholder: "Click to view available attributes",
            selector: i,
            label: "Attribute name",
            onChange: this.handleInputChange.bind(this),
            getOptions: this.handleAttributeSelect
        }), l.createElement(P.Delay, {
            feature: "delay",
            selector: i,
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(O.Columns, {
            feature: "columns",
            selector: i,
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(S.SitemapXmlUrls, {
            feature: "sitemapXmlUrls",
            selector: i,
            onChange: this.handleInputChange.bind(this),
            onRemove: this.handleMultiRemove.bind(this),
            onAddUrl: this.handleAddMultiValue.bind(this),
            onClickPopulateSitemapXmlUrlsFromRobotsTxt: this.populateSitemapXmlLinksFromRobotsTxt.bind(this)
        }), l.createElement(w.SitemapXmlUrlRegex, {
            feature: "sitemapXmlUrlRegex",
            selector: i,
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(v.SitemapXmlMinimumPriority, {
            feature: "sitemapXmlMinimumPriority",
            selector: i,
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(p.DataObjectSelectors, {
            feature: "dataObjectSelectors",
            selector: i,
            sampleData: r,
            onChange: this.handleInputChange.bind(this)
        }), l.createElement(k.ParentSelectors, {
            feature: "parentSelectors",
            selector: i,
            onChange: this.handleInputChange.bind(this),
            selectorIds: e
        }), l.createElement("div", {
            className: "form-group"
        }, l.createElement("div", {
            className: "col-lg-offset-1 col-lg-10"
        }, l.createElement("div", {
            className: "btn-block"
        }, l.createElement(x.PerformActionButton, {
            selector: i,
            onClick: this.performAction.bind(this),
            feature: "performActionButton"
        }), l.createElement(h.DataPreviewButton, {
            visible: i.hasFeature("dataPreviewButton"),
            onClick: this.dataPreview.bind(this)
        }), l.createElement("button", {
            id: "save-selector",
            className: "btn btn-primary",
            type: "button",
            onClick: this.saveSelector.bind(this)
        }, chrome.i18n.getMessage("Save_selector")), l.createElement("button", {
            className: "btn btn-danger",
            type: "button",
            onClick: this.cancelEditing.bind(this)
        }, chrome.i18n.getMessage("Cancel"))))), l.createElement("div", {
            className: "form-group"
        }, l.createElement("div", {
            className: "col-lg-offset-1 col-lg-10"
        }))));
    }

    handleValueChange(e, t) {
        const i = this.state.selector;
        i[e] = t, this.setState({
            selector: i
        });
    }

    handleInputChange(e) {
        const t = e.target;
        let i = "checkbox" === t.type ? t.checked : t.value;
        const n = t.name, r = this.state.selector, a = n.match(/^([^\[]+)\[(.*?)\]$/);
        if (a) {
            const e = a[1], t = a[2].split("][");
            let n = r[e];
            for (let e = 0; e <= t.length - 2; e++) n = n[t[e]];
            n[t[t.length - 1]] = i, this.setState({
                selector: r
            });
        } else {
            if ("select-multiple" === t.type) {
                const e = t.options, n = [];
                for (let t = 0, i = e.length; t < i; t++) e[t].selected && n.push(e[t].value);
                i = n;
            }
            if ("id" === n) for (const e in r.parentSelectors) {
                const t = r.parentSelectors[e];
                r.id === t && r.parentSelectors.splice(parseInt(e, 10), 1, i);
            }
            r[n] = i, this.setState({
                selector: r
            });
        }
    }

    changeSelectorType(e) {
        const t = e.currentTarget.value;
        let i = this.state.selector;
        const n = {
            id: i.id,
            type: t,
            selector: i.selector,
            parentSelectors: i.parentSelectors
        };
        if (i = C.selectorFactory(n), !i.canHaveChildSelectors()) for (const e in i.parentSelectors) {
            const t = i.parentSelectors[e];
            if (i.id === t) {
                i.parentSelectors.splice(parseInt(e, 10), 1);
                break;
            }
        }
        this.setState({
            selector: i
        });
    }

    saveSelector(e) {
        if (e.preventDefault(), e.stopPropagation(), !this.isValidForm()) return !1;
        this.props.appState.saveSelector(this.state.selector);
    }

    cancelEditing(e) {
        e.preventDefault(), e.stopPropagation(), this.props.appState.cancelSelectorEditing();
    }

    async selectSelector(e = "selector", t) {//重要，点击select的是时候，会执行这个
        t.preventDefault();
        t.stopPropagation();
        const i = t.currentTarget;
        const n = this.props.appState.sitemap;
        const r = this.state.selector;
        const a = this.props.appState.selectorBreadcrumb;
        const s = n.selectors.getParentCSSSelectorWithinOnePage(a);
        const l = await F.DevToolsContentScriptClient.selectSelector({
                parentCSSSelector: s,
                allowedElements: r.getItemCSSSelector()
            });
        r[e] = l.CSSSelector;
        this.setState({
            selector: r
        });
        if (r instanceof c.SelectorTable) {
            const e = await this.getSelectorHTML();
            const t = r.getTableHeaderRowSelectorFromTableHTML(e, o);
            const tableDataRowSelector = r.getTableDataRowSelectorFromTableHTML(e, o);
            r.tableHeaderRowSelector = t;
            r.tableDataRowSelector = tableDataRowSelector;
            const n = r.getTableHeaderColumnsFromHTML(t, e, o);
            r.columns = n;
            this.setState({
                selector: r
            });
            this.revalidateField(o("input[name='tableHeaderRowSelector']").get()[0]);
            this.revalidateField(o("input[name='tableDataRowSelector']").get()[0]);
        }
        this.revalidateField(i);
    }

    async handleAttributeSelect(e) {
        const t = await F.DevToolsContentScriptClient.getElement(e),
            i = await F.DevToolsContentScriptClient.getAllAttributes(t), n = [];
        for (const e in i) "" !== i[e] && null !== i[e] && n.push(e);
        return n;
    }

    async selectClickSelector(e) {
        e.preventDefault(), e.stopPropagation();
        const t = e.currentTarget, i = this.props.appState.sitemap, n = this.state.selector,
            r = this.props.appState.selectorBreadcrumb, a = i.selectors.getParentCSSSelectorWithinOnePage(r),
            o = await F.DevToolsContentScriptClient.selectSelector({
                parentCSSSelector: a,
                allowedElements: n.getItemCSSSelector()
            });
        n.clickElementSelector = o.CSSSelector, this.setState({
            selector: n
        }), this.revalidateField(t);
    }

    async selectTableHeaderRowSelector(e) {
        e.preventDefault(), e.stopPropagation();
        const t = e.currentTarget, i = this.props.appState.sitemap, n = this.state.selector,
            r = this.props.appState.selectorBreadcrumb, a = i.selectors.getCSSSelectorWithinOnePage(n.id, r),
            s = await F.DevToolsContentScriptClient.selectSelector({
                parentCSSSelector: a,
                allowedElements: "tr"
            });
        n.tableHeaderRowSelector = s.CSSSelector, this.setState({
            selector: n
        });
        const l = s.CSSSelector, c = await this.getSelectorHTML(), u = n.getTableHeaderColumnsFromHTML(l, c, o);
        n.columns = u, this.setState({
            selector: n
        }), this.revalidateField(t);
    }

    async getSelectorHTML() {
        const e = this.state.selector;
        this.props.appState.sitemap = this.props.appState.originalSitemap.clone();
        this.props.appState.sitemap.updateSelector(this.props.appState.originalSelector, e);
        const t = this.props.appState.sitemap, i = this.props.appState.selectorBreadcrumb;
        const n = t.selectors.getCSSSelectorWithinOnePage(e.id, i);
        return await F.DevToolsContentScriptClient.getCssSelectorHTML(n);
    }

    async selectTableDataRowSelector(e) {
        e.preventDefault();
        e.stopPropagation();
        const t = e.currentTarget,
            i = this.props.appState.sitemap,
            n = this.state.selector,
            r = this.props.appState.selectorBreadcrumb,
            a = i.selectors.getCSSSelectorWithinOnePage(n.id, r),
            o = await F.DevToolsContentScriptClient.selectSelector({
                parentCSSSelector: a,
                allowedElements: "tr"
            });
        n.tableDataRowSelector = o.CSSSelector, this.setState({
            selector: n
        }), this.revalidateField(t);
    }

    async elementPreview(e = "selector", t) {
        t.preventDefault();
        t.stopPropagation();
        const i = t.currentTarget;
        if (i.classList.contains("preview")) await F.DevToolsContentScriptClient.removeCurrentContentSelector(),
            i.classList.remove("preview"); else {
            const t = this.props.appState.sitemap, n = this.state.selector,
                r = this.props.appState.selectorBreadcrumb, a = t.selectors.getParentCSSSelectorWithinOnePage(r);
            await F.DevToolsContentScriptClient.elementPreview({
                parentCSSSelector: a,
                elementCSSSelector: n[e]
            }), i.classList.add("preview");
        }
    }

    async elementPreviewClickSelector(e) {
            e.preventDefault();
            e.stopPropagation();
            const t = e.currentTarget;
            if (t.classList.contains("preview")) await F.DevToolsContentScriptClient.removeCurrentContentSelector(),
                t.classList.remove("preview"); else {
                const e = this.props.appState.sitemap, i = this.state.selector,
                    n = this.props.appState.selectorBreadcrumb, r = e.selectors.getParentCSSSelectorWithinOnePage(n);
                await F.DevToolsContentScriptClient.elementPreview({
                    parentCSSSelector: r,
                    elementCSSSelector: i.clickElementSelector
                }), t.classList.add("preview");
            }
    }

    async previewTableRowSelector(e) {
            e.preventDefault();
            e.stopPropagation();
            const t = e.currentTarget;
            if (t.classList.contains("preview")) await F.DevToolsContentScriptClient.removeCurrentContentSelector(),
                t.classList.remove("preview"); else {
                const e = this.props.appState.sitemap, i = this.state.selector,
                    n = this.props.appState.selectorBreadcrumb, r = e.selectors.getCSSSelectorWithinOnePage(i.id, n),
                    a = o(t).closest(".form-group").find("input").val();
                await F.DevToolsContentScriptClient.elementPreview({
                    parentCSSSelector: r,
                    elementCSSSelector: a
                }), t.classList.add("preview");
            }
    }

    async dataPreview(e) {
            e.preventDefault(), e.stopPropagation();
            const t = this.state.selector, i = this.props.appState.originalSelector;
            this.props.appState.sitemap = this.props.appState.originalSitemap.clone(), this.props.appState.sitemap.updateSelector(i, t),
                await this.props.appState.dataPreview(t.id);
    }

    async performAction(e) {
            e.preventDefault(), e.stopPropagation(), await N.RequestPermissions.requestAdditionalPermissions();
            const t = this.state.selector, i = this.props.appState.originalSelector,
                n = this.props.appState.sitemap.clone();
            this.props.appState.sitemap = this.props.appState.originalSitemap.clone(), this.props.appState.sitemap.updateSelector(i, t),
                await this.props.appState.performSelectorAction(t.id), this.props.appState.sitemap = n;
    }

    async refreshSchemaOrgTypes() {
            await N.RequestPermissions.requestAdditionalPermissions();
            const e = await u.backgroundPageClient.findSchemaOrgData();
            let t;
            this.setState({
                schemaOrgExtractorFoundData: e
            }), e.length > 0 && (t = e[0].schemaOrgType), this.updateSchemaOrgType(t);
    }

    updateSchemaOrgType(e) {
        const t = this.state.schemaOrgExtractorFoundData, i = this.state.selector;
        if (void 0 === e) i.schemaOrgType = void 0, i.dataObjectSelectors = [], this.setState({
            selector: i
        }); else {
            i.schemaOrgType = e;
            for (const n of t) n.schemaOrgType === e && (i.dataObjectSelectors = n.dataObjectSelectors,
                this.setState({
                    selector: i
                }));
        }
    }

    handleSchemaOrgTypeChange(e) {
        this.handleInputChange(e);
        const t = e.target.value;
        this.updateSchemaOrgType(t);
    }

    handleMultiRemove(e, t, i) {
        const n = this.state.selector;
        1 === n[e].length ? n[e] = [i] : n[e].splice(t, 1), this.setState({
            selector: n
        });
    }

    handleAddMultiValue(e, t) {
        const i = this.state.selector;
        i[e].push(t), this.setState({
            selector: i
        });
    }

    async populateSitemapXmlLinksFromRobotsTxt() {
            await N.RequestPermissions.requestAdditionalPermissions();
            const e = this.state.selector, t = await u.backgroundPageClient.getSitemapXmlLinksFromRobotsTxt();
            let i = A.Arr.mergeUnique(e.sitemapXmlUrls, t);
            i.length > 0 && (i = A.Arr.removeEmpty(i)), e.sitemapXmlUrls = i, this.setState({
                selector: e
            });
    }
};
EditSitemapSelectorView = n([s.inject("appState"), s.observer, r("design:paramtypes", [Object])], EditSitemapSelectorView);


export {EditSitemapSelectorView}