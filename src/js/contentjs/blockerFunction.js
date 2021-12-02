let blockerFunction = () => {
    const blockList = ["pointerdown", "mousedown", "touchstart", "selectstart", "pointerup", "mouseup", "touchend"];

    const clickEventHandler = event => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
        const customer_click = new MouseEvent("ws-element-clicked", event);
        document.dispatchEvent(customer_click);
    };

    const otherEventHandler = event => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
    };

    for (const event of blockList)
        document.addEventListener(event, otherEventHandler, { capture: true });
    document.addEventListener("click", clickEventHandler, { capture: true });

    document.addEventListener("ws-remove-click-blocker", () => {
        for (const event of blockList) {
            document.removeEventListener(event, otherEventHandler, {
                capture: true
            });
        }
        document.removeEventListener("click", clickEventHandler, {
            capture: true
        });

    }, {
        once: true
    });
//    return [];
};
let triggerRemoval = () => {
    const removeClickBlockerEvent = new CustomEvent("ws-remove-click-blocker");
    document.dispatchEvent(removeClickBlockerEvent);
//    return [];
};

export {blockerFunction, triggerRemoval}