import * as Service from "./Service.js"
//负责发消息，applyController负责收消息（通过RPC）
function newgetFunc(property) {// e "setSelector"
    return (...paramter) => this.sendApply(property, paramter);  //t ["li:nth-of-type(6) a"]
}

let serviceFactory = function(target_str) {
            const service = new Service.Service(target_str);
            return new Proxy(service, {
                //newgetFunc.bind(target)(property) 得到的是  (... paramter) => this.sendApply(property)//固化了的property 参数
                get: (target, property, receiver) => newgetFunc.bind(target)(property).bind(target)
            });
        };

export {serviceFactory}