class BaseMatcher {
    match(e) {
        const t = this.regex.exec(e.trim());
        if (t)
            return t[this.matchGroup];
    }
}

export {BaseMatcher}