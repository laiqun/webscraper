/*
*     OutGoing,InComing  <- Actions
*                        <- EndpointBase <- inBackGroundContext
*                                        <- (Actions)
*                                        <- InternalRunTime <- BackGroundEvent
*                                                           <- PortFactory <-BackgroundPort <-(BackGroundEvent)
*/
class BackgroundEvent {
    constructor() {
        this.callbacks = [];
    }
    call(...args) {
        this.callbacks.forEach(t => t(...args));
    }
    addListener(func) {
        this.callbacks.push(func);
    }
    removeListener(func) {
        for (const funcIndex in this.callbacks)
            if (this.callbacks[funcIndex] === func) {
                delete this.callbacks[funcIndex];
                break;
            }
    }
}







export { BackgroundEvent }