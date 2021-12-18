import * as BackgroundEvent from "./BackgroundEvent.js"
import * as portFactory from "./portFactory.js"
/*
*     OutGoing,InComing  <- Actions
*                        <- EndpointBase <- inBackGroundContext
*                                        <- (Actions)
*                                        <- InternalRunTime <- BackGroundEvent
*                                                           <- PortFactory <-BackgroundPort <-(BackGroundEvent)
*/
//这是一个单例模式，当第一次创建的时候，会给这个类对象添加instance属性，下次new的时候，会先看看类有没有instance，如果没有创建，否则用旧的
//对于background来说，最早是在MessageManager中创建        this.internalRuntime = new r.InternalRuntime;
//其次是在创建Config时，但是因为是单例模式，所以拿到的其实是MessageManager中创建的
class InternalRuntime {
    constructor(createNewFlag = false) {
        if(InternalRuntime.instance && !createNewFlag )
            return InternalRuntime.instance;
        else
        {
            this.onConnect = new BackgroundEvent.BackgroundEvent;
            InternalRuntime.instance = this;
            return this;
        }

    }
    connect({ name: name_x }) {
        console.log("Internal Runtime call 1"+name_x);
        const { client: client_x, runtime: runtime_x } = portFactory.portFactory(name_x);
        console.log("Internal Runtime call 2"+runtime_x);
        this.onConnect.call(runtime_x);
        return  client_x;
    }
}

export { InternalRuntime }