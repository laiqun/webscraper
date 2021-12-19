import * as c from "../Selector/SelectorTable.js"//c = i(219),
import * as A from "../Arr.js"//A = i(87),
import * as _ from "../Selector/SelectorMicroData.js"//_ = i(217),
import * as N from "../RequestPermissions.js" //N = i(220),
import * as F from "../IM/DevToolsContentScriptClient.js"//F = i(221),
import * as C from "../SelectorOpt/selectorFactory.js"//C = i(94),
import * as l from "react"//l = i(0),
import * as s from "mobx-react"//s = i(21),
import * as d from "./BaseComponent.js"//d = i(25),
import * as u from "../IM/backgroundPageClient.js"//u = i(68),
import * as o from "../../common/lib/jquery.js"//o = i(65),
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
import * as M from "../SelectorOpt/selectorTypes.js"//M = i(704),
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
			if (e.canHaveChildSelectors())
				results.push(e.id);
		});
		results.unshift("_root");
		return results;
	}

	get columns() {
		let result = [];
		const selector = this.state.selector;
		if (undefined !== selector.columns) {
			result = selector.columns;
		}
		return result;
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
							min: 2,
							message: "The sitemap id should be atleast 2 characters long"
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
		}, t = /^(?!web-scraper)[^_\.\$\s][^\.\$\n]+$/;
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
			label: chrome.i18n.getMessage("HeaderRowSelector"),
			onSelectClick: this.selectTableHeaderRowSelector.bind(this),
			onElementPreviewClick: this.previewTableRowSelector.bind(this),
			onChange: this.handleInputChange.bind(this)
		}), l.createElement(T.ElementSelector, {
			feature: "tableDataRowSelector",
			selector: i,
			label: chrome.i18n.getMessage("DataRowsSelector"),
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
		const selector = this.state.selector;
		selector[e] = t;
		this.setState({
			selector: selector
		});
	}

	handleInputChange(e) {
		const target = e.target;
		let value = "checkbox" === target.type ? target.checked : target.value;
		const name = target.name;
		const selector = this.state.selector;
		const matchedName = name.match(/^([^\[]+)\[(.*?)\]$/);
		if (matchedName) {
			const prefix = matchedName[1];
			const postFix = matchedName[2].split("][");
			let partOfSelector = selector[prefix];
			for (let index = 0; index <= postFix.length - 2; index++)
				partOfSelector = partOfSelector[postFix[index]];
			partOfSelector[postFix[postFix.length - 1]] = value;
			this.setState({
				selector: selector
			});
		} else {
			if ("select-multiple" === target.type) {
				const e = target.options, n = [];
				for (let t = 0, i = e.length; t < i; t++)
					e[t].selected && n.push(e[t].value);
				value = n;
			}
			if ("id" === name)
				for (const parentSelector in selector.parentSelectors) {
					const t = selector.parentSelectors[parentSelector];
					selector.id === t && selector.parentSelectors.splice(parseInt(parentSelector, 10), 1, value);
				}
			selector[name] = value;
			this.setState({
				selector: selector
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
		i = C.selectorFactory(n);
		if (!i.canHaveChildSelectors())
			for (const e in i.parentSelectors) {
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
		e.preventDefault();
		e.stopPropagation();
		if (!this.isValidForm())
			return !1;
		this.props.appState.saveSelector(this.state.selector);
	}

	cancelEditing(e) {
		e.preventDefault();
		e.stopPropagation();
		this.props.appState.cancelSelectorEditing();
	}

	async selectSelector(e = "selector", t) {//重要，点击select的是时候，会执行这个
		t.preventDefault();
		t.stopPropagation();
		const currentTarget = t.currentTarget;
		const sitemap = this.props.appState.sitemap;
		const selector = this.state.selector;
		const selectorBreadcrumb = this.props.appState.selectorBreadcrumb;
		const parentCSSSelector = sitemap.selectors.getParentCSSSelectorWithinOnePage(selectorBreadcrumb);
		const l = await F.DevToolsContentScriptClient.selectSelector({
			parentCSSSelector: parentCSSSelector,
			allowedElements: selector.getItemCSSSelector()
		});
		selector[e] = l.CSSSelector;
		this.setState({
			selector: selector
		});
		if (selector instanceof c.SelectorTable) {
			const e = await this.getSelectorHTML();
			const t = selector.getTableHeaderRowSelectorFromTableHTML(e, o);
			const tableDataRowSelector = selector.getTableDataRowSelectorFromTableHTML(e, o);
			selector.tableHeaderRowSelector = t;
			selector.tableDataRowSelector = tableDataRowSelector;
			const n = selector.getTableHeaderColumnsFromHTML(t, e, o);
			selector.columns = n;
			this.setState({
				selector: selector
			});
			this.revalidateField(o("input[name='tableHeaderRowSelector']").get()[0]);
			this.revalidateField(o("input[name='tableDataRowSelector']").get()[0]);
		}
		this.revalidateField(currentTarget);
	}

	async handleAttributeSelect(e) {
		const element = await F.DevToolsContentScriptClient.getElement(e);
		const attributes = await F.DevToolsContentScriptClient.getAllAttributes(element);
		const result = [];
		for (const attribute in attributes)
			if ("" !== attributes[attribute] && null !== attributes[attribute])
				result.push(attribute);
		return result;
	}

	async selectClickSelector(e) {
		e.preventDefault();
		e.stopPropagation();
		const currentTarget = e.currentTarget;
		const sitemap = this.props.appState.sitemap;
		const selector = this.state.selector;
		const selectorBreadcrumb = this.props.appState.selectorBreadcrumb;
		const parentCSSSelectorWithinOnePage = sitemap.selectors.getParentCSSSelectorWithinOnePage(selectorBreadcrumb);
		const devToolPageContentScriptSelector = await F.DevToolsContentScriptClient.selectSelector({
			parentCSSSelector: parentCSSSelectorWithinOnePage,
			allowedElements: selector.getItemCSSSelector()
		});
		selector.clickElementSelector = devToolPageContentScriptSelector.CSSSelector;
		this.setState({
			selector: selector
		});
		this.revalidateField(currentTarget);
	}

	async selectTableHeaderRowSelector(e) {
		e.preventDefault();
		e.stopPropagation();
		const currentTarget = e.currentTarget;
		const sitemap = this.props.appState.sitemap;
		const selector = this.state.selector;
		const selectorBreadcrumb = this.props.appState.selectorBreadcrumb;
		const parentCSSSelector = sitemap.selectors.getCSSSelectorWithinOnePage(selector.id, selectorBreadcrumb);
		const s = await F.DevToolsContentScriptClient.selectSelector({
			parentCSSSelector: parentCSSSelector,
			allowedElements: "tr"
		});
		selector.tableHeaderRowSelector = s.CSSSelector;
		this.setState({
			selector: selector
		});
		const cssSelector = s.CSSSelector;
		const c = await this.getSelectorHTML();
		const u = selector.getTableHeaderColumnsFromHTML(cssSelector, c, o);
		selector.columns = u;
		this.setState({
			selector: selector
		});
		this.revalidateField(currentTarget);
	}

	async getSelectorHTML() {
		const e = this.state.selector;
		this.props.appState.sitemap = this.props.appState.originalSitemap.clone();
		this.props.appState.sitemap.updateSelector(this.props.appState.originalSelector, e);
		const sitemap = this.props.appState.sitemap;
		const selectorBreadcrumb = this.props.appState.selectorBreadcrumb;
		const n = sitemap.selectors.getCSSSelectorWithinOnePage(e.id, selectorBreadcrumb);
		return await F.DevToolsContentScriptClient.getCssSelectorHTML(n);
	}

	async selectTableDataRowSelector(e) {
		e.preventDefault();
		e.stopPropagation();
		const currentTarget = e.currentTarget;
		const sitemap = this.props.appState.sitemap;
		const selector = this.state.selector;
		const selectorBreadcrumb = this.props.appState.selectorBreadcrumb;
		const cssSelectorWithinOnePage = sitemap.selectors.getCSSSelectorWithinOnePage(selector.id, selectorBreadcrumb);
		const devToolPageContentScriptSelector = await F.DevToolsContentScriptClient.selectSelector({
			parentCSSSelector: cssSelectorWithinOnePage,
			allowedElements: "tr"
		});
		selector.tableDataRowSelector = devToolPageContentScriptSelector.CSSSelector;
		this.setState({
			selector: selector
		});
		this.revalidateField(currentTarget);
	}

	async elementPreview(e = "selector", t) {
		t.preventDefault();
		t.stopPropagation();
		const currentTarget = t.currentTarget;
		if (currentTarget.classList.contains("preview")) {
			await F.DevToolsContentScriptClient.removeCurrentContentSelector();
			currentTarget.classList.remove("preview");
		} else {
			const sitemap = this.props.appState.sitemap;
			const selector = this.state.selector;
			const selectorBreadcrumb = this.props.appState.selectorBreadcrumb;
			const parentCSSSelector = sitemap.selectors.getParentCSSSelectorWithinOnePage(selectorBreadcrumb);
			await F.DevToolsContentScriptClient.elementPreview({
				parentCSSSelector: parentCSSSelector,
				elementCSSSelector: selector[e]
			});
			currentTarget.classList.add("preview");
		}
	}

	async elementPreviewClickSelector(e) {
		e.preventDefault();
		e.stopPropagation();
		const currentTarget = e.currentTarget;
		if (currentTarget.classList.contains("preview")) {
			await F.DevToolsContentScriptClient.removeCurrentContentSelector();
			currentTarget.classList.remove("preview");
		} else {
			const sitemap = this.props.appState.sitemap;
			const selector = this.state.selector;
			const selectorBreadcrumb = this.props.appState.selectorBreadcrumb;
			const parentCSSSelector = sitemap.selectors.getParentCSSSelectorWithinOnePage(selectorBreadcrumb);
			await F.DevToolsContentScriptClient.elementPreview({
				parentCSSSelector: parentCSSSelector,
				elementCSSSelector: selector.clickElementSelector
			});
			currentTarget.classList.add("preview");
		}
	}

	async previewTableRowSelector(e) {
		e.preventDefault();
		e.stopPropagation();
		const currentTarget = e.currentTarget;
		if (currentTarget.classList.contains("preview")) {
			await F.DevToolsContentScriptClient.removeCurrentContentSelector();
			currentTarget.classList.remove("preview");
		} else {
			const sitemap = this.props.appState.sitemap;
			const selector = this.state.selector;
			const selectorBreadcrumb = this.props.appState.selectorBreadcrumb;
			const parentCSSSelector = sitemap.selectors.getCSSSelectorWithinOnePage(selector.id, selectorBreadcrumb);
			const elementCSSSelector = o(currentTarget).closest(".form-group").find("input").val();
			await F.DevToolsContentScriptClient.elementPreview({
				parentCSSSelector: parentCSSSelector,
				elementCSSSelector: elementCSSSelector
			});
			currentTarget.classList.add("preview");
		}
	}

	async dataPreview(e) {
		e.preventDefault();
		e.stopPropagation();
		const selector = this.state.selector;
		const i = this.props.appState.originalSelector;
		this.props.appState.sitemap = this.props.appState.originalSitemap.clone();
		this.props.appState.sitemap.updateSelector(i, selector);
		await this.props.appState.dataPreview(selector.id);
	}

	async performAction(e) {
		e.preventDefault();
		e.stopPropagation();
		await N.RequestPermissions.requestAdditionalPermissions();
		const selector = this.state.selector;
		const originalSelector = this.props.appState.originalSelector;
		const clonedSitemap = this.props.appState.sitemap.clone();
		this.props.appState.sitemap = this.props.appState.originalSitemap.clone();
		this.props.appState.sitemap.updateSelector(originalSelector, selector);
		await this.props.appState.performSelectorAction(selector.id);
		this.props.appState.sitemap = clonedSitemap;
	}

	async refreshSchemaOrgTypes() {
		await N.RequestPermissions.requestAdditionalPermissions();
		const e = await u.backgroundPageClient.findSchemaOrgData();
		let t;
		this.setState({
			schemaOrgExtractorFoundData: e
		});
		if (e.length > 0)
			t = e[0].schemaOrgType;
		this.updateSchemaOrgType(t);
	}

	updateSchemaOrgType(e) {
		const schemaOrgExtractorFoundData = this.state.schemaOrgExtractorFoundData;
		const selector = this.state.selector;
		if (void 0 === e) {
			selector.schemaOrgType = void 0;
			selector.dataObjectSelectors = [];
			this.setState({
				selector: selector
			});
		} else {
			selector.schemaOrgType = e;
			for (const n of schemaOrgExtractorFoundData)
				if (n.schemaOrgType === e) {
					selector.dataObjectSelectors = n.dataObjectSelectors;
					this.setState({
						selector: selector
					});
				}
		}
	}

	handleSchemaOrgTypeChange(e) {
		this.handleInputChange(e);
		const t = e.target.value;
		this.updateSchemaOrgType(t);
	}

	handleMultiRemove(e, t, i) {
		const selector = this.state.selector;
		if (1 === selector[e].length)
			selector[e] = [i];
		else
			selector[e].splice(t, 1);
		this.setState({
			selector: selector
		});
	}

	handleAddMultiValue(e, t) {
		const selector = this.state.selector;
		selector[e].push(t);
		this.setState({
			selector: selector
		});
	}

	async populateSitemapXmlLinksFromRobotsTxt() {
		await N.RequestPermissions.requestAdditionalPermissions();
		const selector = this.state.selector;
		const links = await u.backgroundPageClient.getSitemapXmlLinksFromRobotsTxt();
		let i = A.Arr.mergeUnique(selector.sitemapXmlUrls, links);
		if (i.length > 0)
			i = A.Arr.removeEmpty(i);
		selector.sitemapXmlUrls = i;
		this.setState({
			selector: selector
		});
	}
};
EditSitemapSelectorView = n([s.inject("appState"), s.observer, r("design:paramtypes", [Object])], EditSitemapSelectorView);


export {EditSitemapSelectorView}