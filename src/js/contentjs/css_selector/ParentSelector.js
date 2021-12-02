import * as cssSelectorArrayItem from "./cssSelectorArrayItem.js"

class ParentSelector extends cssSelectorArrayItem.default {
    getCssSelector() {
        return "_parent_";
    }

    merge(e) {
    }
}

export { ParentSelector}