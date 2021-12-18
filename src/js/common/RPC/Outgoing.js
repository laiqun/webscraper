import * as EndpointBase from "./EndPointBase.js"
import * as Actions from "../Actions.js"
/*
*     OutGoing,InComing  <- Actions
*                        <- EndpointBase <- inBackGroundContext
*                                        <- Actions
*                                        <- InternalRunTime <- BackGroundEvent
*                                                           <- PortFactory <-BackgroundPort <-BackGroundEvent
* */
class Outgoing extends EndpointBase.EndpointBase {
    constructor(receiver) {
        super((new Date).valueOf().toString(), {});//日期的毫秒数表示
        this.defaultTarget = receiver;
    }

    apply(funcName, args) {
        return super.send(Actions.Actions.apply, this.defaultTarget, {
            functionName: funcName,
            functionArguments: args
        });
    }
}

export {Outgoing}
