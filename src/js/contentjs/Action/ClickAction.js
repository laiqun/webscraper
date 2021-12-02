import * as o from "../log.js"
import * as i from "../Extractor/ExtractorBase.js"
import * as a from "./ClickActionTypes.js"
import * as s from "./timeout_sleep.js"

class ClickAction extends i.ExtractorBase {
    constructor() {
        super(...arguments);
        this.eventGroups = {
            [a.ClickActionTypes.auto]: ["pointerdown", "mousedown", "touchstart", "selectstart", "pointerup", "mouseup", "touchend"],
            [a.ClickActionTypes.touch]: ["touchstart", "touchend"],//模拟了各种设备，从按下到抬起的事件
            [a.ClickActionTypes.clickOnly]: [],
            [a.ClickActionTypes.click]: ["pointerdown", "mousedown", "pointerup", "mouseup"],
            [a.ClickActionTypes.realLikeEvents]: ["pointerdown", "mousedown", "touchstart", "selectstart", "pointerup", "mouseup", "touchend", "click"]
        };
    }

    async extract(element_index, clickType = a.ClickActionTypes.auto) {
        const element = this.elementReferences.getElementByReference(element_index);
        if (!element)
            return void o.default.warning("couldn't find element for clicking");
        if ("OPTION" === element.tagName)
            return this.clickOptionElement(element);
        const mapEventToWindowFunc = {
            pointerdown: "PointerEvent",
            mousedown: "MouseEvent",
            pointerup: "PointerEvent",
            mouseup: "MouseEvent",
            click: "MouseEvent"
        };
        const eventGroup = this.eventGroups[clickType];
        const prev_connect_status = element.isConnected;
        for (const event of eventGroup) {
            let new_event = new Event(event, {
                bubbles: true
            });
            if (mapEventToWindowFunc[event] && window[mapEventToWindowFunc[event]])
                new_event = new window[mapEventToWindowFunc[event]](event, {
                    bubbles: true
                });
            element.dispatchEvent(new_event);//https://developer.mozilla.org/zh-CN/docs/Web/Events/Creating_and_triggering_events
            await s.default.sleep(1);
            if (element.isConnected !== prev_connect_status)
                return;
        }
        if(-1 !== ["click", "auto", "click-only"].indexOf(clickType) ) //再补一发click事件
            element.click();
    }

    clickOptionElement(option_element) {
        option_element.setAttribute("selected", "selected");
        option_element.selected = true;
        //选中输入参数为selected，其他全部去掉selected
        for (const htmlOptionElement of Array.from(option_element.parentElement.querySelectorAll("option")))
            htmlOptionElement !== option_element && htmlOptionElement.removeAttribute("selected");
        //发送依次选择改变这个事件
        if ("SELECT" === option_element.parentElement.tagName)
            option_element.parentElement.dispatchEvent(new Event("change", {
                bubbles: true
            }));
        else
            option_element.dispatchEvent(new Event("change", {
                bubbles: true
            }));
        return Promise.resolve();
    }
}


export {ClickAction}