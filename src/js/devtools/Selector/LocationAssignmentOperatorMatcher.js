import * as n from "./BaseMatcher.js"//const n = i(82);
class LocationAssignmentOperatorMatcher extends n.BaseMatcher {
    constructor() {
        super(...arguments), this.regex = new RegExp(/^(?:window\.)?location\s*=\s*(["'])(.+?)\1\s*;?\s*$/, "g"),
            this.matchGroup = 2;
    }
}


export {LocationAssignmentOperatorMatcher}