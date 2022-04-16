import * as BackgroundEvent from "./BackgroundEvent.js"
/*
*     OutGoing,InComing  <- Actions
*                        <- EndpointBase <- inBackGroundContext
*                                        <- (Actions)
*                                        <- InternalRunTime <- BackGroundEvent
*                                                           <- PortFactory <-BackgroundPort <-(BackGroundEvent)
*/
class BackgroundPort {
    constructor(name) {
        this.name = name;
        this.onMessage = new BackgroundEvent.BackgroundEvent;
        this.onDisconnect = new BackgroundEvent.BackgroundEvent;
    }

    postMessage(e) {
        this.orchestratorOnMessage(e);
    }
}

export { BackgroundPort }