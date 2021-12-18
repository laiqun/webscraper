import * as n from "./BaseMatcher.js"//const n = i(82);
class LocationReplacementMatcher extends n.BaseMatcher {
    constructor() {
        super(...arguments);
        this.regex = new RegExp(/^(?:window\.)?location\.replace\s*\(\s*(["'])(.+?)\1\s*\)\s*;?\s*$/, "g");
        this.matchGroup = 2;
    }
}

export {LocationReplacementMatcher}