import * as a from "mobx-react"//const a = i(21),
import * as o from "react" //o = i(0),
import * as s from "./BaseComponent.js"//s = i(25),
import * as l from "./RequestPermissions.js"//l = i(220),
import * as c from "./DevToolsContentScriptClient.js"//   c = i(221);
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};

let SelectorRow = class extends s.BaseComponent {
    render() {
        const {selector: selector} = this.props;
        return o.createElement("tr", {
            className: "selector-row",
            onClick: this.showChildSelectors.bind(this)
        }, o.createElement("td", {
            className: "selector-id"
        }, selector.id), o.createElement("td", null, selector.selector), o.createElement("td", null, selector.type), o.createElement("td", {
            className: "multiple"
        }, selector.multiple ? "yes" : "no"), o.createElement("td", null, selector.parentSelectors.join(", ")), o.createElement("td", {
            className: "action-buttons"
        }, o.createElement("button", {
            type: "button",
            onClick: this.elementPreview.bind(this),
            className: "btn btn-primary btn-xs element-preview"
        }, chrome.i18n.getMessage("ElementPreview")), !selector.type.startsWith("Action") && o.createElement("button", {
            type: "button",
            onClick: this.dataPreview.bind(this),
            className: "btn btn-primary btn-xs data-preview"
        }, chrome.i18n.getMessage("DataPreview")), selector.type.startsWith("Action") && o.createElement("button", {
            type: "button",
            onClick: this.performSelectorAction.bind(this),
            className: "btn btn-primary btn-xs perform-action"
        }, chrome.i18n.getMessage("PerformAction")), o.createElement("button", {
            type: "button",
            onClick: this.editSelector.bind(this),
            className: "btn btn-primary btn-xs edit-selector"
        }, chrome.i18n.getMessage("Edit")), o.createElement("button", {
            type: "button",
            onClick: this.deleteSelector.bind(this),
            className: "btn btn-danger btn-xs delete-selector"
        }, chrome.i18n.getMessage("Delete"))));
    }

    showChildSelectors() {
        const selector = this.props.selector;
        this.props.appState.selectorBreadcrumb.push(selector.id);
    }

    editSelector(event) {
        event.stopPropagation();
        event.preventDefault();
        const selector = this.props.selector;
        this.props.appState.editSelector(selector);
    }

    async deleteSelector(event) {
        event.stopPropagation();
        event.preventDefault();
        const selector = this.props.selector;
        await this.props.appState.deleteSelector(selector);
    }

    dataPreview(event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.appState.dataPreview(this.props.selector.id);
    }

    async performSelectorAction(event) {
        event.stopPropagation();
        event.preventDefault();
        await l.RequestPermissions.requestAdditionalPermissions();
        await this.props.appState.performSelectorAction(this.props.selector.id);
    }

    async elementPreview(event) {
        event.stopPropagation();
        event.preventDefault();
        const currentTarget = event.currentTarget;
        if (currentTarget.classList.contains("preview")) {
            await c.DevToolsContentScriptClient.removeCurrentContentSelector();
            currentTarget.classList.remove("preview");
        } else {
            const sitemap = this.props.appState.sitemap;
            const selector = this.props.selector;
            const selectorBreadcrumb = this.props.appState.selectorBreadcrumb;
            const parentCSSSelectorWithinOnePage = sitemap.selectors.getParentCSSSelectorWithinOnePage(selectorBreadcrumb);
            await c.DevToolsContentScriptClient.elementPreview({
                parentCSSSelector: parentCSSSelectorWithinOnePage,
                elementCSSSelector: selector.selector
            });
            currentTarget.classList.add("preview");
        }
    }
};
SelectorRow = n([a.inject("appState"), a.observer], SelectorRow);

export {SelectorRow}
