import * as o from "./Selector.js"//const o = i(10);
class ActionScrollDown extends o.Selector {
	constructor(e) {
		super();
		this.type = "ActionScrollDown";
		this.delay = 2000;
		this.selectorScrollElement = "";
		this.selectorScrollDownIfElementNotVisible = "";
		this.selectorScrollToElement = "";
		this.updateData(e);
	}

	get selector() {
		return "_parent_";
	}

	canReturnMultipleRecords() {
		return !1;
	}

	canHaveChildSelectors() {
		return !0;
	}

	canCreateNewJobs() {
		return !1;
	}

	willReturnElements() {
		return !0;
	}

	getDataColumns() {
		return [];
	}

	async isNeededElementVisible(e) {
		if (!this.selectorScrollDownIfElementNotVisible)
			return !1;
		return !!(await e.getElements(this.selectorScrollDownIfElementNotVisible)).length;
	}

	async scrollDown(e) {
		if (await this.isNeededElementVisible(e))
			return;
		const t = !this.selectorScrollToElement;
		if (this.selectorScrollElement) {
			const i = await e.getElement(this.selectorScrollElement);
			await e.scrollDownElement(e.element, this.selectorScrollToElement, t, i.element);
		} else
			await e.scrollDownBody(e.element, this.selectorScrollToElement, t);
		await e.webPage.waitForPageLoadComplete(!1, this.delay);
	}

	async _getData(e) {
		await this.scrollDown(e);
		await e;
	}

	getFeatures() {
		return ["selectorScrollElement", "selectorScrollDownIfElementNotVisible", "selectorScrollToElement", "performActionButton", "delay"];
	}
}

export {ActionScrollDown}