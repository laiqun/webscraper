function getToggleMapping(e) {
    return {
        eventAction: e ? "addEventListener" : "removeEventListener",
        domChildAction: e ? "appendChild" : "removeChild",
        pointerEvents: e ? "auto" : "none"
    };
}

export { getToggleMapping }