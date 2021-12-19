import * as mobx from 'mobx'

class ErrorState {
    constructor() {
        this.validationErrors = {};
        mobx.makeObservable(this, {
            validationErrors: mobx.observable
        });
    }

    clearValidationError(field_key) {
        this.validationErrors[field_key] = undefined;
    }

    setRules(rules) {
        this.rules = rules;
    }

    validateField(field_key, field_value) {//field_key = "pageLoadDelay", field_value = "1"
        this.clearValidationError(field_key);
        /*
            requestInterval: [new IsNotEmpty, new IsNumeric, new IsGreaterOrEqualThan(2000)],
            pageLoadDelay: [new IsNotEmpty, new IsNumeric, new IsGreaterOrEqualThan(500)]
        * */
        const rules_map = this.rules.getRules();
        for (const rule of rules_map[field_key]) {//依次拿出IsNotEmpty,IsNumeric，IsGreaterOrEqualThan调用里面的valid和message方法
            if (!rule.valid(field_value)) {
                this.validationErrors[field_key] = rule.message(field_key);
                break;
            }
        }
    }

    urlChanged() {
        this.validationErrors = {};
    }

    validateAllFields(fields) {
        for (const field in fields)
            this.validateField(field, fields[field]);
    }
}

//类装饰器、方法装饰器、访问器装饰器和属性装饰器
/*https://github.com/rbuckton/reflect-metadata/blob/master/Reflect.ts
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(Example, "staticMethod",
      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(Example.prototype, "method",
      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
      *
* */
//n([a.observable, r("design:type", Object)], o.prototype, "validationErrors", void 0);
let errorState = new ErrorState;
export {ErrorState, errorState}