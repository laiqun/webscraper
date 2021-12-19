import * as s from "mobx-react"//s = i(21),  s = i(21),
import * as l from "../../common/lib/jquery.js"//l = i(65),
import * as a from "react" //a = i(0),
import * as o from "./BaseComponent.js"//const  o = i(25);
var n = this && this.__decorate || function (e, t, i, n) {
	var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
	return a > 3 && o && Object.defineProperty(t, i, o), o;
};


let CloudAuthModal = class extends o.BaseComponent {
	componentDidUpdate() {
		this.props.appState.authModalVisible && l(this.modal).modal("show"), l(this.modal).modal().on("hide.bs.modal", e => {
			this.closeCloudAuthModal();
		});
	}

	render() {
		return this.props.appState.authModalVisible && "/" === this.props.appState.routingStore.location.pathname ? a.createElement("div", {
			ref: e => this.modal = e,
			className: "modal fade cloud-auth-modal"
		}, a.createElement("div", {
			className: "modal-dialog"
		}, a.createElement("div", {
			className: "modal-content"
		}, a.createElement("div", {
			className: "modal-header"
		}, a.createElement("h4", {
			className: "modal-title"
		}, "After successfully connecting extension to your Cloud account, reload the sitemap list.")), a.createElement("div", {
			className: "modal-body"
		}, a.createElement("button", {
			type: "button",
			className: "btn btn-primary reload-auth-modal",
			onClick: this.reloadSitemapList.bind(this)
		}, "Reload"), a.createElement("button", {
			type: "button",
			className: "btn btn-default close-auth-modal",
			"data-dismiss": "modal",
			"aria-hidden": "true"
		}, "Close"))))) : a.createElement(a.Fragment, null);
	}

	async reloadSitemapList() {
		await this.props.appState.loadSitemaps();
		this.props.appState.sitemapSyncEnabled && l(this.modal).modal("hide");
	}

	closeCloudAuthModal() {
		this.props.appState.hideAuthModal();
	}
};
CloudAuthModal = n([s.inject("appState"), s.observer], CloudAuthModal);

export {CloudAuthModal};