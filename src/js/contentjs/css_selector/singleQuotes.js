function singleQuotes(e) {
    return e = e.replace(/([\\'])/g, "\\$1");
}

export {singleQuotes};