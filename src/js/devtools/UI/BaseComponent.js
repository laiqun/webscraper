import * as r from "react"//r = i(0),
import * as n from "../../common/lib/jquery.js"//n = i(65),
class BaseComponent extends r.Component {
	handleInputChange(e) {
		console.log("handle input change");
		const target = e.target;
		const value = "checkbox" === target.type ? target.checked : target.value;
		const name = target.name;
		if (this.props.errorState)
			this.props.errorState.validateField(name, value);
		const matchedName = name.match(/^(.+?)\[\]$/);
		if (matchedName) {
			const matchedNamePart = matchedName[1];
			const state = this.state;
			const statePart = JSON.parse(JSON.stringify(state[matchedNamePart]));
			statePart[parseInt(target.dataset.index, 10)] = value;
			this.setState({
				[matchedNamePart]: statePart
			});
		} else
			this.setState({
				[name]: value
			});
	}

	showValidationStatus(e) {
		const t = this.props.errorState.validationErrors;
		return e in t ? t[e] ? "has-error" : "has-success" : "";
	}

	getFormElement() {
		const e = n("form", this.el).get();
		if (e.length > 0)
			return e[0];
		const t = n(this.el).closest("form").get();
		if (t.length > 0)
			return t[0];
		throw "cannot find form element";
	}

	getFormValidator() {
		const e = this.getFormElement();
		return n(e).data("bootstrapValidator");
	}

	getFormValidatorOptions() {
		return {};
	}

	initFormValidator() {
		const e = this.getFormValidatorOptions();
		console.log("initFormValidator");
		const t = this.getFormElement();
		n(t).bootstrapValidator(e);
	}

	isValidForm() {
		let e = this.getFormValidator();
		e.destroy();
		this.initFormValidator();
		e = this.getFormValidator();
		for (const t in e.options.fields)
			e.validateField(t);
		return e.isValid();
	}

	isFormValid(e) {
		this.props.errorState.validateAllFields(e);
		for (const e in this.props.errorState.validationErrors)
			if (void 0 !== this.props.errorState.validationErrors[e])
				return !1;
		return !0;
	}

	revalidateField(e) {
		this.getFormValidator().revalidateField(n(e).closest(".input-group").find("input")[0]["name"]);
	}

	cancelEvent(e) {
		e.stopPropagation();
		e.preventDefault();
		return false;
	}
}

export {BaseComponent} ;