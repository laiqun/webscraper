//const r = i(26), a = i(0);
import * as a from "react"
import * as r from "./ConditionalElementBase.js"

class InputAutocomplete extends r.ConditionalElementBase {
    constructor(e) {
        super(e), this.state = {
            suggestions: [],
            attributes: []
        };
    }

    _render() {
        const {label: e, feature: t, placeholder: i} = this.props, n = this.props.selector[t];
        return a.createElement("div", {
            className: "form-group"
        }, a.createElement("label", {
            className: "col-lg-1 control-label"
        }, e), a.createElement("div", {
            className: "col-lg-10"
        }, a.createElement("input", {
            id: t,
            className: "form-control",
            type: "text",
            value: n,
            placeholder: i,
            name: t,
            onChange: this.changeAutocompleteSuggestions.bind(this),
            onClick: this.getOptions.bind(this),
            onBlur: this.closeSuggestions.bind(this)
        }), this.renderSuggestions()));
    }

    updateSuggestions(e) {
        let t = this.state.attributes;
        if (e.length > 0) {
            const i = new RegExp("^" + e, "i");
            t = this.state.attributes.sort().filter(e => i.test(e));
        }
        this.setState({
            suggestions: t
        });
    }

    async getOptions() {
        const e = await this.props.getOptions(this.props.selector.selector);
        this.setState({
            attributes: e
        });
        const t = this.props.selector[this.props.feature];
        this.updateSuggestions(t);
    }

    closeSuggestions() {
        setTimeout(() => this.setState({
            suggestions: []
        }), 100);
    }

    changeAutocompleteSuggestions(e) {
        this.props.onChange(e);
        const t = e.target.value;
        this.updateSuggestions(t);
    }

    handleSuggestionSelect(e) {
        this.props.selector[this.props.feature] = e;
    }

    renderSuggestions() {
        const {suggestions: e} = this.state;
        if (e && 0 !== e.length) return a.createElement("ul", {
            className: "dropdown-menu dropdown-menu-left autocomplete-suggestions-dropdown"
        }, e.map(e => a.createElement("li", {
            className: "autocomplete-suggestion",
            key: e,
            onClick: this.handleSuggestionSelect.bind(this, e)
        }, e)));
    }
}

export {InputAutocomplete}