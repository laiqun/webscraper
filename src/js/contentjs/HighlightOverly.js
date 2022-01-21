import * as highLightOverlayStyle from "./HighlightOverly/overLayStyleAndOverLayBodyStyle.js"
import * as SelectionError from "./SelectionError.js"
import * as ModeSetting from "./ModesSetting.js"
import * as KeyEventHandler from "./HighlightOverly/keyEventHandler.js"

import * as UIFrame from "./HighlightOverly/UIFrame.js"
import * as GetToggleMapping from "./HighlightOverly/getToggleMapping.js"
import * as Coordinates from "./HighlightOverly/Coordinates.js"
import * as HighlightManager from "./HighlightOverly/HighlightManager.js"
import * as Log from "../log/log.js"
import * as ElementQuery2 from "./ElementQuery2.js"
import * as serviceFactory from "../common/RPC/serviceFactory.js"

import {applyController} from "../common/RPC/applyController.js";
import {Targets} from "./HighlightOverly/Targets.js"

class HighlightOverlay {
    constructor(selectorLimiter, selection) {//[Object, Object] 限制e和t的类型
        this.config = selectorLimiter;
        this.uiFrame = new UIFrame.UIFrame;
        this.state = {
            focus: {
                window: false,
                frame: false
            },
            mousePosition: {
                x: 0,
                y: 0
            }
        };
        //send and receive msg by port
        this.toolbar = serviceFactory.serviceFactory(Targets.uiOverlay);//这里指定要发给谁
        this.selectionService = selection;
        this.rootWrapper = document.createElement("div");
        this.rootWrapper.style.cssText = highLightOverlayStyle.overlayStyles;
        const n = this.rootWrapper.attachShadow({
            mode: "closed"
        });
        this.root = document.createElement("div");
        n.appendChild(this.root);
        this.root.style.cssText = highLightOverlayStyle.overlayStyles;
        const r = this.config.parent === document.body ? undefined : this.config.parent;
        this.highlightManager = new HighlightManager.HighlightManager(this.root, r);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onElementSelect = this.onElementSelect.bind(this);
        this.selectChild = this.selectChild.bind(this);
        this.selectParent = this.selectParent.bind(this);
        this.toggleContent = this.toggleContent.bind(this);
        this.toggleJoinSelect = this.toggleJoinSelect.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.windowFocusChange = this.windowFocusChange.bind(this);
        this.frameFocusChange = this.frameFocusChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.keyDownHandler = KeyEventHandler.keyEventHandler({
            KeyP: this.selectParent,
            KeyC: this.selectChild,
            KeyS: this.onElementSelect
        });
    }

    get selector() {
        return this._selector;
    }

    set selector(e) {
        this._selector = e;
        this.updateLocked(e);
    }

    disable() {
        this.toggleOverlay(false);
        this.state.mouseTrackingEnabled = false;
    }

    enable() {
        this.toggleOverlay(true);
        this.state.mouseTrackingEnabled = this.mode === ModeSetting.Modes.select;
    }

    toggleJoinSelect(e) {
        this.state.joinSelectAllowed = e;
        return Promise.resolve();
    }

    selectParent() {
        return this.traverseDom(true);
    }

    selectChild() {
        return this.traverseDom(false);
    }

    async onElementSelect(e) {//e{ShiftKey:true or false}
        try {
            if (this.state.mouseTrackingEnabled) {
                const t = this.elementFromFrameEvent(e);
                if (undefined !== t) {
                    this._selector = await this.selectionService.updateActive(t, this.state.joinSelectAllowed || e.shiftKey);
                    return this.handleNewSelector();
                }
            }
            return Promise.resolve();
        } catch (e) {
            this.handleSelectionError(e);
        }

    }

    toggleOverlay(e) {
        const {domChildAction: addOrRemoveChild, eventAction: addOrRemoveEventListerner} = GetToggleMapping.getToggleMapping(e);
        if (e)
            window.requestIdleCallback(this.toggleContent(true).bind(this));
        e || this.toggleContent(false)();
        document.body[addOrRemoveChild](this.rootWrapper);
        window[addOrRemoveEventListerner]("resize", this.onResize);
        window[addOrRemoveEventListerner]("scroll", this.onScroll);
    }

    toggleContent(e) {
        const {domChildAction: addOrRemoveChild} = GetToggleMapping.getToggleMapping(e);
        return () => {
            this.highlightManager.toggle(e);
            this.root[addOrRemoveChild](this.highlightManager.container);
            this.toggleRootEvents(e);
            if (e) {
                this.root.style.cssText = highLightOverlayStyle.overlayBodyStyle;
                this.highlightManager.redraw(true);
            }
            if (this.mode === ModeSetting.Modes.select)
                this.root[addOrRemoveChild](this.uiFrame.element);
        };
    }

    toggleRootEvents(enable) {
        const {eventAction: addOrRemoveEventListerner} = GetToggleMapping.getToggleMapping(enable); //e is true or false
        document[addOrRemoveEventListerner]("mousemove", this.onMouseMove);
        this.root[addOrRemoveEventListerner]("mousemove", this.onMouseMove);
        document[addOrRemoveEventListerner]("ws-element-clicked", this.onElementSelect);
        window[addOrRemoveEventListerner]("focus", this.windowFocusChange);
        this.root[addOrRemoveEventListerner]("focus", this.frameFocusChange);
        window[addOrRemoveEventListerner]("blur", this.windowFocusChange);
        this.root[addOrRemoveEventListerner]("blur", this.frameFocusChange);
        document[addOrRemoveEventListerner]("keydown", this.onKeyDown);
        this.root[addOrRemoveEventListerner]("keydown", this.onKeyDown);
    }

    onResize() {
        return this.highlightManager.redraw(true);
    }

    onScroll() {
        return this.highlightManager.redraw(false);
    }

    frameFocusChange(e) {
        return this.onFocusChange("frame", e);
    }

    windowFocusChange(e) {
        return this.onFocusChange("window", e);
    }

    async onFocusChange(e, t) {
        const n = "focus" === t.type;
        await new Promise(e => {
            setTimeout(e, 200);
        });
        let {window: r, frame: i} = this.state.focus;
        r = "window" === e ? n : r;
        i = "frame" === e ? n : i;
        if (this.mode === ModeSetting.Modes.select)
            this.toolbar.changeInFocus(r || i); //发送focus change事件给后台
    }

    onKeyDown(e) {
        this.keyDownHandler(e);
    }

    toggleMouseTracking(enable) {
        this.root.style.pointerEvents = GetToggleMapping.getToggleMapping(enable).pointerEvents;
    }

    onMouseMove(e) {
        if (!this.state.mouseTrackingEnabled) return;
        const {clientX: pos_x, clientY: pos_y} = e;
        if (Coordinates.Coordinates.pointWithinElement(this.uiFrame.element, pos_x, pos_y))
            return void this.toggleMouseTracking(true);
        this.toggleMouseTracking(false);
        const r = this.elementFromFrameEvent(e);
        this.state.mousePosition = {
            x: pos_x,
            y: pos_y
        };
        if (0 === r)
            this.highlightManager.updateHovered();
        else {
            if (this.config.parent.contains(r))
                this.highlightManager.updateHovered(r);
        }
    }

    async traverseDom(e) {
        try {
            this._selector = await this.selectionService.traverseDom(e);
            return this.handleNewSelector();
        } catch (e) {
            this.handleSelectionError(e);
        }
    }

    async handleNewSelector() {
        await this.toolbar.setSelector(this._selector);// toolbar的get方法，绑定了一个proxy，会自动发信息 //发送focus change事件给后台
        this.updateLocked(this._selector);
        return Promise.resolve();
    }

    handleSelectionError(SelectionError) {
        if (SelectionError instanceof SelectionError)
            return this.toolbar.setNotification(SelectionError.message);////发送focus change事件给后台
        Log.default.error(SelectionError.message,{stack:SelectionError.stack});
    }

    updateLocked(selector) {
        if ("" === selector)
            this.highlightManager.addLocked(undefined);
        else {
            const t = ElementQuery2.ElementQuery2.find(selector, this.config.parent);
            if (undefined === t)
                throw new Error("No elements matching selector found");
            this.highlightManager.addLocked(t);
        }
    }

    elementFromFrameEvent(event) {
        let pos_x, pos_y, topMostMatchedElement;
        if (event instanceof MouseEvent) {
            pos_x = event.clientX;
            pos_y = event.clientY
        } else {
            pos_x = this.state.mousePosition.x;
            pos_y = this.state.mousePosition.y;
        }
        if ("function" == typeof document.elementsFromPoint)
            topMostMatchedElement = this.getElementFromPoint(pos_x, pos_y);
        else
            topMostMatchedElement = document.elementFromPoint(pos_x, pos_y); //https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
        this.root.focus();
        return topMostMatchedElement;
    }

    getElementFromPoint(pos_x, pos_y) {
        //console.log("getElementFromPoint");
        const topMostMatchedElement = document.elementsFromPoint(pos_x, pos_y);
        let matchedElement;
        const allowedElements = this.config.allowedElements || "*";
        if ("*" === allowedElements)
            matchedElement = topMostMatchedElement[0];
        else
            matchedElement = topMostMatchedElement.find(e => e.matches(this.config.allowedElements));
        if (undefined === matchedElement)
            matchedElement = this.elementFromSubtree(topMostMatchedElement, allowedElements, pos_x, pos_y);
        //"FONT" === matchedElement.tagName && (matchedElement = this.ignoreElementsFromTranslation(matchedElement.parentElement)),  new version
        return matchedElement;
    }

    elementFromSubtree(topMostMatchedElement, allowedElements, pos_x, pos_y) {
        for (const oneMatchedElement of topMostMatchedElement) {
            let childAllowedElements = oneMatchedElement.querySelectorAll(allowedElements);

            for (const oneElement of Array.from(childAllowedElements)) {
                if (Coordinates.Coordinates.pointWithinElement(oneElement, pos_x, pos_y) && this.config.parent.contains(oneMatchedElement))
                    return oneElement;
            }
        }
    }
}

//HighlightOverlay = r([h.applyController(a.Targets.highlightOverlay),i("design:paramtypes", [Object, Object])],  // i Reflect.metadata https://jkchao.github.io/typescript-book-chinese/tips/metadata.html#%E5%9F%BA%E7%A1%80
//    HighlightOverlay);//https://ninghao.net/blog/7384  https://www.daimajiaoliu.com/daima/485bfe6a51003e4  https://blog.csdn.net/weixin_34419321/article/details/88596413
//当我们为类使用装饰器时，只会为类添加上 ”design:paramtypes” 的元数据信息，含义为其构造函数的传入参数的类型数组  https://zhuanlan.zhihu.com/p/166362122  类型检查
//i("design:paramtypes", [Object, Object]) 约定HighlightOverlay的构造函数的两个参数都是Object类型

let extFunc = applyController(Targets.highlightOverlay);
let outputClass = extFunc(HighlightOverlay);
export {outputClass as HighlightOverlay}