import * as n from "react"//const n = i(0),
import * as r from "./SurveyForm.js"// r = i(716);
class SurveyButton extends n.Component {
    constructor(e) {
        super(e);
        this.state = {
            open: false,
            completed: false
        };
    }

    render() {
        const paddingLeft = {
            paddingLeft: "10px"
        }, {survey: t} = this.props;
        return void 0 === t || this.state.completed ? n.createElement(n.Fragment, null) : false === this.state.open ? n.createElement("span", {
            style: paddingLeft
        }, t.question, n.createElement("button", {
            className: "btn btn-warning btn-xs",
            onClick: this.showSurveyPopup.bind(this)
        }, "Sure!")) : n.createElement(r.SurveyForm, {
            survey: this.props.survey,
            closeAction: this.closeModal.bind(this)
        });
    }

    showSurveyPopup() {
        this.setState({
            open: true
        });
    }

    closeModal() {
        this.setState({
            open: false,
            completed: true
        });
    }
}

export {SurveyButton}