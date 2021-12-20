import * as i from "react"
import {applyController} from "../common/RPC/applyController.js";
import * as o  from "../contentjs/HighlightOverly/Targets.js"
import * as u from "../common/RPC/serviceFactory.js"
import * as c  from "../contentjs/HighlightOverly/keyEventHandler"
import {Targets} from "../contentjs/HighlightOverly/Targets";
class Toolbar extends i.Component {
	constructor(e, t) {
		super(e, t);
		this.keysDisabledMessage = "Click here to enable hotkeys";
		this.highlightOverlayService = u.serviceFactory(o.Targets.highlightOverlay);
		this.selectionService = u.serviceFactory(o.Targets.selection);
		this.onSelectParent = this.onSelectParent.bind(this);
		this.onSelectChild = this.onSelectChild.bind(this);
		this.onSelectElement = this.onSelectElement.bind(this);
		this.handleFocusChange = this.handleFocusChange.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.keyDownHandler = c.keyEventHandler({
			KeyP: this.onSelectParent,
			KeyC: this.onSelectChild,
			KeyS: this.onSelectElement
		});
		this.state = {
			selector: "",
			joinSelectAllowed: !1,
			keyBoardEventsEnabled: !0,
			parentHasFocus: !1,
			uiHasFocus: !1
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.toggleBaseEvents(!0);
		this.setState({
			notification: this.keysDisabledMessage
		});
	}

	componentWillUnmount() {
		this.toggleBaseEvents(!1);
	}

	render() {
		const {notification: e} = this.state;
		const t = undefined !== e;
		return i.createElement("div", {
			className: "toolbar-container panel panel-default"
		}, i.createElement("div", {
			className: "panel-body"
		}, t && this.notification, !t && this.selectorInput, !t && this.controls,
			i.createElement("div", {
			className: "col-xs-4 container submit-container"
		}, i.createElement("button", {
			id: "submit-selector",
			className: "btn btn-success",
			onClick: this.onSubmit
		}, "Done selecting"))));
	}

	setSelector(e) {
		this.setState({
			selector: e,
			notification: void 0
		});
		return  Promise.resolve();
	}

	setNotification(e) {
		this.setState({
			notification: e
		});
		return Promise.resolve();
	}

	changeInFocus(e) {
		this.handleFocusChange(e, this.state.uiHasFocus);
		return  Promise.resolve();
	}

	get notification() {
		return i.createElement("div", {
			className: "col-xs-8 container alert-container",
			onClick: () => this.setState({
				notification: void 0
			})
		}, i.createElement("div", {
			className: "alert alert-info"
		}, i.createElement("span", null, this.state.notification)));
	}

	get selectorInput() {
		return i.createElement("div", {
			className: "col-xs-5 container selector-container"
		}, i.createElement("input", {
			id: "active-selection",
			className: "form-control",
			disabled: !0,
			type: "text",
			value: this.state.selector
		}));
	}

	get controls() {
		return i.createElement("div", {
			id: "dom-controls",
			tabIndex: 0,
			className: "col-xs-3 container"
		}, this.keyboardControls);
	}

	get keyboardControls() {
		return i.createElement("div", null,
			this.renderDOMControl("parent", "P",
				"Press P to select parent element", this.onSelectParent), this.renderDOMControl("child", "C", "Press C to select child element", this.onSelectChild), this.renderDOMControl("element", "S", "Press S to select hovered element", () => {
		}, !0));
	}

	renderDOMControl(id, content, title, onClick, disabled) {
		return i.createElement("div", {
			className: "col-xs-4 container dom-control-container"
		}, i.createElement("button", {
			id: "select-" + id,
			className: "btn btn-primary",
			title: title,
			onClick: onClick,
			disabled: disabled || !this.state.keyBoardEventsEnabled
		}, content));
	}

	toggleBaseEvents(e) {
		const t = e ? "addEventListener" : "removeEventListener";
		window[t]("focus", this.onFocus);
		window[t]("blur", this.onBlur);
		document[t]("keydown", this.keyDownHandler);
	}

	onSelectParent() {
		return this.highlightOverlayService.selectParent();
	}

	onSelectChild() {
		return this.highlightOverlayService.selectChild();
	}

	onSelectElement(e) {
		return this.highlightOverlayService.onElementSelect({
			shiftKey: e.shiftKey
		});
	}

	onSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		return  this.selectionService.lockActive();
	}

	onFocus() {
		return this.handleFocusChange(this.state.parentHasFocus, !0);
	}

	onBlur() {
		return this.handleFocusChange(this.state.parentHasFocus, !1);
	}

	handleFocusChange(parentHasFocus, uiHasFocus) {
		const keyBoardEventsEnabled = parentHasFocus || uiHasFocus;
		const {notification: r} = this.state;
		const notification  = keyBoardEventsEnabled && r === this.keysDisabledMessage ? void 0 : r;
		this.setState({
			keyBoardEventsEnabled: keyBoardEventsEnabled,
			parentHasFocus: parentHasFocus,
			uiHasFocus: uiHasFocus,
			notification: notification
		});
	}
}
//Toolbar = r([applyController(o.Targets.uiOverlay), l("design:paramtypes", [Object, Object])], s);

let extFunc =  applyController(Targets.uiOverlay );
let ToolbarExt = extFunc(Toolbar);
export {ToolbarExt as Toolbar}