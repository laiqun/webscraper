import * as Actions from "../Actions.js"
import * as inBackgroundContext from "./inBackgroundContext.js"
import * as InternalRuntime from "./InternalRuntime.js"
/*
*     OutGoing,InComing  <- Actions
*                        <- EndpointBase <- inBackGroundContext
*                                        <- Actions
*                                        <- InternalRunTime <- BackGroundEvent
*                                                           <- PortFactory <-BackgroundPort <-BackGroundEvent
* */
class EndpointBase {
    constructor(name, callbacks) {
        this.receive = this.receive.bind(this);
        this.callbacks = callbacks;
        this.name = name;//outGoing 是时间戳， inComing是target的名字
        console.log("###########");
        console.trace();
        console.log(name);
        console.log("###########");
        this.pendingMessages = {};
        this.port = this.initPort();
        this.port.onMessage.addListener(this.receive);
        this.messageIdIncrement = 0;
    }
    //apply Controler 中的receive使用,它扩展了EndpointBase中的receive 方法
    postResponse(target, payload) {
        console.log("postRes");
        console.log(target);
        console.trace();//Incoming->receive->handleCallback->postResponse
        this.port.postMessage({
            action: Actions.Actions.response,
            target: target,//sender
            sender: {
                local: this.name
            },
            callId: payload.callId,
            payload: payload
        });
    }
    // action "apply"
    // target "uiOverlay"
    // args:
    // {functionName: "setSelector", functionArguments: Array(1)}
    // functionArguments: Array(1)
    // 0: "li:nth-of-type(6) a"
    // length: 1
  //  {functionName: "changeInFocus", functionArguments: Array(1)}
   //functionArguments: [true]
//click时使用
    send(action, target, args) {
        const messageId = this.messageIdIncrement;
        this.messageIdIncrement++;
        this.port.postMessage({
            action: action,
            callId: messageId,
            payload: args,
            target: {
                local: target
            },
            sender: {
                local: this.name
            }
        });
        //发送后，等待接收方确认 ，发送方send可以一致等待，直到接收方说收到了
        return new Promise((resolve, reject) => {
            this.pendingMessages[messageId] = {
                accept: resolve,
                reject: reject
            };
        });
    }
//demo msg
// {action: "response", target: {…}, sender: {…}, callId: 2, payload: {…}}
// action: "response"
// callId: 2
// payload: {callId: 2, success: false, responsePayload: "Could not retrieve target port"}
// sender: {local: "backgroundScript"}
// target: {local: "1628688418155"}
    receive(msg, sender) {
        const {lastError: errorMsg} = chrome.runtime;
        const {payload: payload_e, action: action_e} = msg;
        if (errorMsg)
            throw new Error("Error during message passing: " + errorMsg.message);
        if (action_e === Actions.Actions.error)
            throw new Error(`${payload_e.type} in endpoint ${this.name}: ${payload_e.message}`);
        if (action_e !== Actions.Actions.response) {
            if (void 0 === action_e)
                throw new Error("Message without action received");
            if ("function" != typeof this.callbacks[action_e])
                throw new Error("Incorrect action mapping for action: " + action_e);
        }
        else  // if equal response
            this.handleMessageResponse(msg);
    }

    handleMessageResponse(msg) {
        const {payload: {callId: messageId, success: successFlag, responsePayload: r}} = msg;
        if(messageId in this.pendingMessages)
        {
            if(successFlag)
                this.pendingMessages[messageId].accept(r);
            else
                this.pendingMessages[messageId].reject(new Error(r));
            delete this.pendingMessages[messageId]
        }
    }

    initPort() {
        const name1 = this.name;
        if (inBackgroundContext.inBackgroundContext()) {
            return (new InternalRuntime.InternalRuntime).connect({//看起来像是给background内部通信的，没有使用chrome的API
                name: name1
            });
        }
        else
        {
            if(chrome == undefined || chrome.runtime == undefined)
                return name1;
            return chrome.runtime.connect({
                name: name1
            });
        }
    }
}

export {EndpointBase}