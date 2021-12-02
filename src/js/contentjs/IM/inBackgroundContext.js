let inBackgroundContext = function() {
    if(chrome == undefined || chrome.extension == undefined)
        return false;
    return chrome.extension.getBackgroundPage && chrome.extension.getBackgroundPage() === window;
};
/*
*     OutGoing,InComing  <- Actions
*                        <- EndpointBase <- inBackGroundContext
*                                        <- (Actions)
*                                        <- InternalRunTime <- BackGroundEvent
*                                                           <- PortFactory <-BackgroundPort <-(BackGroundEvent)
*/
export { inBackgroundContext }