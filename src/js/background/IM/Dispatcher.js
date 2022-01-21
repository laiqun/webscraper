import * as o from "../../contentjs/HighlightOverly/Targets.js"//,  o = i(73);
import * as r from "../../common/Actions.js"//r = i(27),
import * as a from "../Errors.js"//const a = i(625);
class Dispatcher {
    constructor(tab_id, backgroundPorts) {
        this.portTimeout = 5000;
        this.handleNewPort = this.handleNewPort.bind(this);
        this.handlePortMessage = this.handlePortMessage.bind(this);
        this.handleBackgroundMessage = this.handleBackgroundMessage.bind(this);
        this.ports = {};  //从外部得到的port
        this.backgroundPorts = backgroundPorts;//从background 得到的port
        this.pending = {};
        this.initBackgroundPortListeners();
        this.tabId = tab_id;
    }

    initBackgroundPortListeners() {
        for (const port_name in this.backgroundPorts)
            this.backgroundPorts[port_name].onMessage.addListener(this.handleBackgroundMessage);
    }
    handleBackgroundMessage(request, sender) {
        const {target: {external: external_tabid}} = request;
        if (external_tabid === this.tabId)//申请是否由当前激活的页面出发的，如果是，就处理
            this.handlePortMessage(request, sender);
    }
    handleNewPort(port) {
        //console.log("handleNewPort");
        const {name: port_name} = port;
        port.onMessage.addListener(this.handlePortMessage);
        port.onDisconnect.addListener(this.removePort(port_name));
        this.ports[port_name] = port;
        if (undefined !== this.pending[port_name])//get port 会设置一个等待时间，如果到了没超时，pending[port_name]是get port 的resolve函数
            this.pending[port_name](port);
        this.pending[port_name] = undefined;
    }
    dispatchError(sender_port, error_type, msg = "") {
        sender_port.postMessage({
            action: r.Actions.error,
            payload: {
                type: error_type,
                message: msg
            }
        });
    }

    getPort(port_name) {
        if (undefined !== this.ports[port_name])//如果存在
            return Promise.resolve(this.ports[port_name]);
        else {
            return new Promise((resolve, reject) => {
                this.pending[port_name] = resolve;
                setTimeout(() => {
                    this.pending[port_name] = undefined;
                    reject();
                }, this.portTimeout);
            });
        }
    }

    removePort(e) {
        //console.log("removePort");
        return () => {
            delete this.ports[e];
        };
    }

    async handlePortMessage(request, sender_port) {
        //console.log("handle port message");
        //console.log(request);
        //request demo:
        // action: "apply"
        // callId: 0
        // payload: {functionName: 'changeInFocus', functionArguments: Array(1)}
        // sender: {local: '1635507329571'}
        // target: {local: 'uiOverlay'}
        //console.log(sender_port);
        const {action: action_local, target: {local: local_x, external: external_x}} = request;
        if (undefined !== local_x) {//如果local 有数据
            if (action_local in r.Actions) {
                try {
                    let target_port;
                    if( local_x in this.backgroundPorts ){
                        request.sender.external = this.tabId;//转发消息时，加上tabid
                        target_port = this.backgroundPorts[local_x];
                    }
                    else{
                        target_port = await this.getPort(local_x);
                    }
                    target_port.postMessage(request);//如果是后台port，调用的是handleBackgroundMessage，我们给request加上了发出者的tabid
                } catch (i) {
                    this.noPortResponse(request, sender_port);
                }
            } else {
                this.dispatchError(sender_port, a.Errors.actionError, "Action not found in action map.");
            }
        }
        else
            this.dispatchError(sender_port, a.Errors.targetError, "No target specified.");
    }

    noPortResponse(request, sender_port) {
        //request demo:
        // action: "apply"
        // callId: 0
        // payload: {functionName: 'changeInFocus', functionArguments: Array(1)}
        // sender: {local: '1635507329571'}
        // target: {local: 'uiOverlay'}
        sender_port.postMessage({
            action: r.Actions.response,
            target: request.sender,
            sender: {
                local: o.Targets.backgroundScript
            },
            callId: request.callId,
            payload: {
                callId: request.callId,
                success: false,
                responsePayload: "Could not retrieve target port"
            }
        });
    }
}

export {Dispatcher}