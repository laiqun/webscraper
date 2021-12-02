/*
*     OutGoing,InComing  <- Actions
*                        <- EndpointBase <- inBackGroundContext
*                                        <- (Actions)
*                                        <- InternalRunTime <- BackGroundEvent
*                                                           <- PortFactory <-BackgroundPort <-(BackGroundEvent)
*/
let Actions = {};
Actions.error = "error";
Actions.apply = "apply";
Actions.response = "response";

export {Actions}