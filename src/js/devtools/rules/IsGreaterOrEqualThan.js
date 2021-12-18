import * as r from "../../common/Str.js"//, r = i(75);
import {BaseValidator} from "./BaseValidator.js"//const n = i(421)

class IsGreaterOrEqualThan extends BaseValidator {
    valid(value) {
        return Number(value) >= this.options;
    }

    message(field_key) {
        return `The ${r.Str.splitCamelCase(field_key).toLowerCase()} must be at least ${this.options} milliseconds`;
    }
}

export {IsGreaterOrEqualThan}