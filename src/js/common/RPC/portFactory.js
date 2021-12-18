import * as BackgroundPort from "./BackgroundPort.js"
/*
*     OutGoing,InComing  <- Actions
*                        <- EndpointBase <- inBackGroundContext
*                                        <- (Actions)
*                                        <- InternalRunTime <- BackGroundEvent
*                                                           <- PortFactory <-BackgroundPort <-(BackGroundEvent)
*/
function onMsgCallBack(target) {
    return msg => {
        msg = JSON.parse(JSON.stringify(msg));
        target.onMessage.call(msg, target);
    };
}

function portFactory(name) {
    const client = new BackgroundPort.BackgroundPort(name);
    const runtime = new BackgroundPort.BackgroundPort(name); //管弦乐演奏家  orchestrator
    client.orchestratorOnMessage = onMsgCallBack(runtime);
    runtime.orchestratorOnMessage = onMsgCallBack(client);
    return {
        client: client,
        runtime: runtime
    };
}

export { portFactory }