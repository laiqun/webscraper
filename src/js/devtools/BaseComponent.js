import * as r from "react"//r = i(0),
import * as n from "../contentjs/jquery.js"//n = i(65),
class BaseComponent extends r.Component {
    handleInputChange(e) {
        const t = e.target, i = "checkbox" === t.type ? t.checked : t.value, n = t.name;
        this.props.errorState && this.props.errorState.validateField(n, i);
        const r = n.match(/^(.+?)\[\]$/);
        if (r) {
            const e = r[1], n = this.state, a = JSON.parse(JSON.stringify(n[e]));
            a[parseInt(t.dataset.index, 10)] = i, this.setState({
                [e]: a
            });
        } else this.setState({
            [n]: i
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
        e.destroy(), this.initFormValidator(), e = this.getFormValidator();
        for (const t in e.options.fields) e.validateField(t);
        return e.isValid();
    }

    isFormValid(e) {
        this.props.errorState.validateAllFields(e);
        for (const e in this.props.errorState.validationErrors) if (void 0 !== this.props.errorState.validationErrors[e]) return !1;
        return !0;
    }

    revalidateField(e) {
        this.getFormValidator().revalidateField(n(e).closest(".input-group").find("input")[0]["name"]);
    }

    cancelEvent(e) {
        e.stopPropagation();
        e.preventDefault();
        return  false;
    }
}

export {BaseComponent} ;