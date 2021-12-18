import * as InComing from "./Incoming.js"
import * as Actions from "../Actions.js"
//其实要实现的是RPC远程函数调用
let applyController = function (name) {
    return baseClass => class extends baseClass {
        constructor() {
            super(...arguments);
            console.trace();
            console.log("apply applyController");
            console.log(name);
            this.enpoint = new InComing.Incoming(name, {
                [Actions.Actions.apply]: this.passToFunction.bind(this)//回调函数就是，收到消息后，调用自身的方法，如果不存在，打印函数不存在
            });
        }

        passToFunction(e) {
            console.log("passToFunction");
            console.trace();
            const {functionName: funcName, functionArguments: args} = e;
            if( "function" == typeof this[funcName] )
                return this[funcName](...args);
            else
                return Promise.reject(`Function ${funcName} does not exist on ${typeof this}`);
        }
    };
};

export { applyController }