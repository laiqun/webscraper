class cssSelectorArray extends Array {
    setCssSelector(e) {
        this.CssSelector = e;
    }

    getCssSelector() {
        const result = [];
        for (let index = 0; index < this.length; index++) {
            const oneItem = this[index];
            if (null === oneItem)
                continue;
            let oneCssSelector = oneItem.getCssSelector();
            if (this.CssSelector.enableSmartTableSelector &&
                "tr" === oneItem.tag &&
                2 === oneItem.element.children.length &&
                ("TD" === oneItem.element.children[0].tagName ||
                    "TH" === oneItem.element.children[0].tagName ||
                    "TR" === oneItem.element.children[0].tagName))
            {
                let textContent = oneItem.element.children[0].textContent;
                textContent = textContent.trim();
                textContent.replace(/(\\*)(')/g, str => {
                    const length = str.length;
                    //如果是偶数个字符串，直接返回，否则先拿到前面偶数个，最后上\'  反斜杠和单引号
                    return length % 2 ? str : str.substring(0, length - 1) + "\\'";
                });
                oneCssSelector += ":contains('" + textContent + "')";
            }
            result.push(oneCssSelector);
        }
        return result.reverse().join(" ");
    }
}

export default cssSelectorArray;