//const i = n(39), o = n(13), s = n(15);
import * as Actions from "./Actions.js"
import * as Msg from "../../contentjs/Msg.js"
import * as EndPointBase from "./EndPointBase.js"

/*
*     OutGoing,InComing  <- Actions
*                        <- EndpointBase <- inBackGroundContext
*                                        <- Actions
*                                        <- InternalRunTime <- BackGroundEvent
*                                                           <- PortFactory <-BackgroundPort <-BackGroundEvent
* */
class Incoming extends EndPointBase.EndpointBase {
    receive(msg, sender) {
        super.receive(msg, sender);
        const {action: n} = msg;
        if(n !== Actions.Actions.response)//apply or error
            this.handleCallback(msg);
    }

    async handleCallback(msg) { //apply or error
        const {payload: args, action: action, callId: r, sender: target} = msg;
        try {
            const msg = {
                callId: r,
                success: true,
                //下面的callback，就是applyControler 中的 passToFunction，调用装饰类的方法，收到消息时，执行自己的方法
                responsePayload: await this.callbacks[action](args)//args contains function name and function arguments
            };
            this.postResponse(target, msg);
        } catch (e) {
            const t = {
                callId: r,
                success: false,
                responsePayload: Msg.default.getMessage(e)
            };
            this.postResponse(target, t);
        }
    }
}

export {Incoming}
