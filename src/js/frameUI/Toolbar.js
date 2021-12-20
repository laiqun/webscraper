import * as React from "react"
import {applyController} from "../common/RPC/applyController.js";
import {Targets} from "../contentjs/HighlightOverly/Targets.js"
import {serviceFactory}from "../common/RPC/serviceFactory.js"
import {keyEventHandler} from "../contentjs/HighlightOverly/keyEventHandler"

class Toolbar extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.keysDisabledMessage = "Click here to enable hotkeys";
		this.highlightOverlayService = serviceFactory(Targets.highlightOverlay);
		this.selectionService = serviceFactory(Targets.selection);
		this.onSelectParent = this.onSelectParent.bind(this);
		this.onSelectChild = this.onSelectChild.bind(this);
		this.onSelectElement = this.onSelectElement.bind(this);
		this.handleFocusChange = this.handleFocusChange.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.keyDownHandler = keyEventHandler({
			KeyP: this.onSelectParent,
			KeyC: this.onSelectChild,
			KeyS: this.onSelectElement
		});
		this.state = {
			selector: "",
			joinSelectAllowed: false,
			keyBoardEventsEnabled: true,
			parentHasFocus: false,
			uiHasFocus: false
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.toggleBaseEvents(true);
		this.setState({
			notification: this.keysDisabledMessage
		});
	}

	componentWillUnmount() {
		this.toggleBaseEvents(false);
	}

	render() {
		const {notification: note} = this.state;
		const notificationNotUDF = undefined !== note;
		return React.createElement("div", {
			className: "toolbar-container panel panel-default"
		}, React.createElement("div", {
				className: "panel-body"
			}, notificationNotUDF && this.notification,
			!notificationNotUDF && this.selectorInput,
			!notificationNotUDF && this.controls,
			React.createElement("div", {
				className: "col-xs-4 container submit-container"
			}, React.createElement("button", {
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
		return Promise.resolve();
	}

	setNotification(e) {
		this.setState({
			notification: e
		});
		return Promise.resolve();
	}

	changeInFocus(e) {
		this.handleFocusChange(e, this.state.uiHasFocus);
		return Promise.resolve();
	}

	get notification() {
		return React.createElement("div", {
			className: "col-xs-8 container alert-container",
			onClick: () => this.setState({
				notification: void 0
			})
		}, React.createElement("div", {
			className: "alert alert-info"
		}, React.createElement("span", null, this.state.notification)));
	}

	get selectorInput() {
		return React.createElement("div", {
			className: "col-xs-5 container selector-container"
		}, React.createElement("input", {
			id: "active-selection",
			className: "form-control",
			disabled: true,
			type: "text",
			value: this.state.selector
		}));
	}

	get controls() {
		return React.createElement("div", {
			id: "dom-controls",
			tabIndex: 0,
			className: "col-xs-3 container"
		}, this.keyboardControls);
	}

	get keyboardControls() {
		return React.createElement("div", null,
			this.renderDOMControl("parent", "P",
				"Press P to select parent element", this.onSelectParent),
			this.renderDOMControl("child", "C", "Press C to select child element",
				this.onSelectChild), this.renderDOMControl("element", "S",
				"Press S to select hovered element", () => {
				}, true));
	}

	renderDOMControl(id, content, title, onClick, disabled) {
		return React.createElement("div", {
			className: "col-xs-4 container dom-control-container"
		}, React.createElement("button", {
			id: "select-" + id,
			className: "btn btn-primary",
			title: title,
			onClick: onClick,
			disabled: disabled || !this.state.keyBoardEventsEnabled
		}, content));
	}

	toggleBaseEvents(enable) {
		const funcName = enable ? "addEventListener" : "removeEventListener";
		window[funcName]("focus", this.onFocus);
		window[funcName]("blur", this.onBlur);
		document[funcName]("keydown", this.keyDownHandler);
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
		return this.selectionService.lockActive();
	}

	onFocus() {
		return this.handleFocusChange(this.state.parentHasFocus, true);
	}

	onBlur() {
		return this.handleFocusChange(this.state.parentHasFocus, false);
	}

	handleFocusChange(parentHasFocus, uiHasFocus) {
		const keyBoardEventsEnabled = parentHasFocus || uiHasFocus;
		const {notification: note} = this.state;
		const notification = keyBoardEventsEnabled && note === this.keysDisabledMessage ? undefined : note;
		this.setState({
			keyBoardEventsEnabled: keyBoardEventsEnabled,
			parentHasFocus: parentHasFocus,
			uiHasFocus: uiHasFocus,
			notification: notification
		});
	}
}

//Toolbar = r([applyController(o.Targets.uiOverlay), l("design:paramtypes", [Object, Object])], s);

let extFunc = applyController(Targets.uiOverlay);
let ToolbarExt = extFunc(Toolbar);
export {ToolbarExt as Toolbar}