import {BaseValidator} from "./BaseValidator.js"//const n = i(421)
import * as r from "../../common/Str.js"//, r = i(75);
class IsNotEmpty extends BaseValidator {
    valid(value) {
        return !("" === value || null == value || value.length <= 0);
    }

    message(field_key) {
        return `The ${r.Str.splitCamelCase(field_key).toLowerCase()} is required and cannot be empty`;
    }
}

export {IsNotEmpty}