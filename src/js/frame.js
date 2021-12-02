import {Targets} from "./contentjs/HighlightOverly/Targets";
import css from "../css/frame.css"

const a = document;
import {applyController} from "./contentjs/IM/applyController";
import {serviceFactory} from "./contentjs/IM/ServiceFactory"
import {keyEventHandler} from "./contentjs/HighlightOverly/keyEventHandler"

class frame_x {
    constructor() {
        this.keysDisabledMessage = "Click here to enable hotkeys";
        this.highlightOverlayService = serviceFactory(Targets.highlightOverlay);
        this.selectionService = serviceFactory(Targets.selection);
        this.onSelectParent = this.onSelectParent.bind(this);
        this.onSelectChild = this.onSelectChild.bind(this);
        this.onSelectElement = this.onSelectElement.bind(this);
        this.handleFocusChange = this.handleFocusChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.keyDownHandler = keyEventHandler({
            KeyP: this.onSelectParent,
            KeyC: this.onSelectChild,
            KeyS: this.onSelectElement
            /*选择当前元素，和鼠标左键单击效果一样的，不过鼠标只是用来滑动，不单击，
            鼠标只是悬浮在元素上，所以叫悬浮选取; 键盘按下s和鼠标点击效果是一样的。
            按住shift点击鼠标左键和按住shift+s效果是一样的*/
        });
        this.state = {
            selector: "",
            joinSelectAllowed: false,
            keyBoardEventsEnabled: false,
            parentHasFocus: false,
            uiHasFocus: false
        };
        //notification 设置为 keysDisabledMessage，左边是一个长条，显示keysDisabledMessage，右边是"Done Selecting"
        //notification 设置为 undefined，左边是一个长条，显示selector,中间是3个按钮，右边是"Done Selecting"
        this.state["notification"] = this.keysDisabledMessage;
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleBaseEvents(true);
        this.setState({});
    }

    setState(dict) {
        for (let key in dict)
            this.state[key] = dict[key];
        this.render();
    }

    render() {
        const {notification: notify} = this.state;
        const setNotify = undefined !== notify; //是否点击了Click here to enable hotkeys，点击了notify就是undefined
        let root = document.getElementById("app");
        //应该剔除以前注册的所有的监听
        root.innerHTML = "";
        let toolBarContainer = document.createElement("div");
        toolBarContainer.className = "toolbar-container panel panel-default";
        let panel_body = document.createElement("div");
        panel_body.className = "panel-body";
        toolBarContainer.appendChild(panel_body);

        if (setNotify)//左边是alert info ，右边是submit
        {
            let alert_container = this.createNotification();
            panel_body.appendChild(alert_container);
        } else {
            let selector = this.selectorInput();//左边是cssSelector，三个按钮，右边是submit
            let controls = this.createControls();
            panel_body.appendChild(selector);
            panel_body.appendChild(controls);
        }
        let submitDiv = document.createElement("div");
        submitDiv.className = "col-xs-4 container submit-container";
        let submitButton = document.createElement("button");
        submitButton.className = "btn btn-success";
        submitButton.id = "submit-selector";
        submitButton.onclick = this.onSubmit;
        submitButton.innerText = "Done selecting";
        submitDiv.appendChild(submitButton);
        panel_body.appendChild(submitDiv);
        root.appendChild(toolBarContainer);
    }

    selectorInput() {
        let container = document.createElement("div");
        container.className = "col-xs-5 container selector-container";
        let input = document.createElement("input");
        input.id = "active-selection";
        input.className = "form-control";
        input.disabled = true;
        input.type = "text";
        input.value = this.state.selector;
        container.appendChild(input);
        return container;
    }

    createControls() {
        let dom_controls = document.createElement("div");
        dom_controls.id = "dom-controls";
        dom_controls.tabindex = 0;
        dom_controls.className = "col-xs-3 container";
        let buttonsContainer = this.createMouseClickControls(dom_controls);
        dom_controls.appendChild(buttonsContainer);
        return dom_controls;
    }

    createNotification() {
        let alertContainer = document.createElement("div");
        alertContainer.className = "col-xs-8 container alert-container";
        alertContainer.onclick = () => {
            this.setState({notification: undefined});
        };
        let alert_info = document.createElement("div");
        alert_info.className = "alert alert-info";
        let text = document.createElement("span");
        text.innerText = this.state.notification;
        alert_info.appendChild(text);
        alertContainer.appendChild(alert_info);
        return alertContainer;
    }

    createMouseClickControls(parent) {
        let container = document.createElement("div");

        let P = this.createButtonControl("parent", "P", "Press P to select parent element", this.onSelectParent, false);
        let C = this.createButtonControl("child", "C", "Press C to select child element", this.onSelectChild, false);
        let S = this.createButtonControl("element", "S", "Press S to select element(same like mouse click,can use select mouse hovered element)", () => {
        }, true);
        container.appendChild(P);
        container.appendChild(C);
        container.appendChild(S);
        return container;
    }

    createButtonControl(id, innerText, title, func, disable) {
        let container = document.createElement("div");
        container.className = "col-xs-4 container dom-control-container";
        let button = document.createElement("button");
        button.id = "select-" + id;
        if (disable) {
            button.className = "btn btn-primary disable";
        } else
            button.className = "btn btn-primary";
        button.title = title;
        button.onclick = func;
        ////如果没有开启key事件，则将所又按钮设置为不可用
        //如果这个控件没有焦点，则所有的按钮都不可用
        button.disabled = disable || !this.state.keyBoardEventsEnabled;
        button.innerText = innerText;
        container.appendChild(button);
        return container;
    }

    toggleBaseEvents(IsAdd) {
        const method_name = IsAdd ? "addEventListener" : "removeEventListener";
        window[method_name]("focus", this.onFocus);
        window[method_name]("blur", this.onBlur);
        document[method_name]("keydown", this.keyDownHandler);
    }

    onSelectParent() {
        console.log("P");
        return this.highlightOverlayService.selectParent();
    }

    onSelectChild() {
        console.log("C");
        return this.highlightOverlayService.selectChild();
    }

    /*选择当前元素，和鼠标左键单击效果一样的，不过鼠标只是用来滑动，不单击，
    鼠标只是悬浮在元素上，所以叫悬浮选取; 键盘按下s和鼠标点击效果是一样的。
    按住shift点击鼠标左键和按住shift+s效果是一样的*/
    onSelectElement(keyEvent) {//KeyboardEvent {isTrusted: true, key: "s", code: "KeyS", location: 0, ctrlKey: false, …}
        console.log("S");
        return this.highlightOverlayService.onElementSelect({
            shiftKey: keyEvent.shiftKey
        });
    }

    /*
    {dispatchConfig: {…}, _targetInst: Nu, nativeEvent: PointerEvent, type: "click", target: button#submit-selector.btn.btn-success, …}
    * */
    onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("onSubmit");
        return this.selectionService.lockActive();
    }

    onFocus() {//点击才会因为focus和blur事件
        return this.handleFocusChange(this.state.parentHasFocus, true);
    }

    onBlur() {
        return this.handleFocusChange(this.state.parentHasFocus, false);
    }

    handleFocusChange(parentHasFocus, uiHasFocus) {
        const hasFocus = parentHasFocus || uiHasFocus;
        const {notification: notify} = this.state;
        let finalNotify;
        if(hasFocus && notify === this.keysDisabledMessage)//如果有了焦点，notification还是默认值，就修改其为undefined，否则保留之前的值
            finalNotify = undefined;
        else//否则保留之前的结果
            finalNotify = notify;
        this.setState({
            keyBoardEventsEnabled: hasFocus,//如果这个按钮没有焦点，则所有的button都不可用；parentHasFocus和uiHasFocus会改变这个值，hasFocus = parentHasFocus || uiHasFocus
            parentHasFocus: parentHasFocus,//这个值，会在changeInFocus中改变,
            uiHasFocus: uiHasFocus,//被用在了changeInFocus,OnFocus和OnBlur会改变这个值，
            notification: finalNotify//获取焦点或者失去焦点时，都会更新这个状态，这个状态觉得了控件的显示效果
        });
    }
    //HighlightOverly
    setSelector(selector) {//可以改变界面的样子，因为修改了notification
        this.setState({
            selector: selector,
            notification: undefined
        });
        return Promise.resolve();
    }

    //highlightOverly
    setNotification(note) {//只改变界面的显示,当选择了一个元素,失去焦点的时候会提示,按住shift可以选择多个
        this.setState({
            notification: note//Shift and click to select multiple element groups
        });
        return Promise.resolve();
    }

    //HighlightOverly
    changeInFocus(parentHasFocus) { //可以决定是否让那3个按钮变成可用状态
        this.handleFocusChange(parentHasFocus, this.state.uiHasFocus);
        return Promise.resolve();
    }
}

let addInComingFunc = applyController(Targets.uiOverlay);
let out_Class = addInComingFunc(frame_x);
let instance = new out_Class();