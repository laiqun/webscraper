function keyEventHandler(eventHandlerMap) {
    return event => {
        const { code: event_key } = event;
        if (event_key in eventHandlerMap)
            eventHandlerMap[event_key](event);
    };
}
export { keyEventHandler }