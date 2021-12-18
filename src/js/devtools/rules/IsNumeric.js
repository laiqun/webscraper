import {BaseValidator} from "./BaseValidator.js"//const n = i(421)
import * as r from "../../common/Str.js"//, r = i(75);

class IsNumeric extends BaseValidator {
    valid(value) {
        return /^\d+$/.test(value);
    }

    message(field_key) {
        return `The ${r.Str.splitCamelCase(field_key).toLowerCase()} must be numeric`;
    }
}

export {IsNumeric}