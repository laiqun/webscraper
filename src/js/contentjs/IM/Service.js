import * as Outgoing from "./Outgoing.js"

class Service {
    constructor(target) {
        this.target = target;
        this.endpoint = new Outgoing.Outgoing(target);
    }

    sendApply(funcName, args) {
        return this.endpoint.apply(funcName, args);
    }
}

export {Service}