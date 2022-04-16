import {InternalRuntime} from "../../common/RPC/InternalRuntime.js"//, r = i(84)
import {Dispatcher} from "./Dispatcher.js"//const n = i(624);
class MessageManager {
    constructor() {
        this.handleNewConection = this.handleNewConection.bind(this);
        this.handleBackgroundConnection = this.handleBackgroundConnection.bind(this);
        this.removeTabGroup = this.removeTabGroup.bind(this);
        this.tabGroups = {};
        this.backgroundPorts = {};
        this.internalRuntime = new InternalRuntime;
    }

    init() {
        //console.log("message Manager");
        chrome.runtime.onConnect.addListener(this.handleNewConection);
        chrome.tabs.onRemoved.addListener(this.removeTabGroup);
        this.internalRuntime.onConnect.addListener(this.handleBackgroundConnection);//添加callbacks
    }

    handleBackgroundConnection(backgroundPort) {
        //三个参数  name onMessage orchestratorOnMessage （postMessage）  这里只保存了服务端
        //创建Config的时候，会加一个，因为Config使用了applyControler
        this.backgroundPorts[backgroundPort.name] = backgroundPort;
    }

    handleNewConection(port) {
       // console.log("handleNewConection");
       // console.log(port);
       // console.log(port.name);
        const tab_id = port.sender.tab.id.toString();
        if(undefined === this.tabGroups[tab_id] )
            this.tabGroups[tab_id] = new Dispatcher(tab_id, this.backgroundPorts);
        this.tabGroups[tab_id].handleNewPort(port);//Dispatcher 中的方法，会保存到其内部的ports 数组中，包括inComing和outGoing
    }

    removeTabGroup(tab_id) {
        const const_tab_id = tab_id.toString();
        if(undefined !== this.tabGroups[const_tab_id])
            delete this.tabGroups[const_tab_id];
    }
}

export {MessageManager}