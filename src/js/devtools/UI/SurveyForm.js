import * as react from "react"//const n = i(0),
import * as r from "../IM/backgroundPageClient.js"//r = i(68),
import * as a from "./InputTask.js"// a = i(717),
import * as o from "./MultipleChoiceTask.js"// o = i(718),
import * as s from "./TextTask.js"// s = i(719);
class SurveyForm extends react.Component {
    constructor(e) {
        super(e);
        this.state = {
            answers: {},
            timeStarted: Date.now()
        };
    }

    render() {
        const {tasks: tasks_value} = this.props.survey;
        const new_height = {
            height: $(window).height() - 100 + "px"
        };
        return react.createElement("div", {
            ref: e => this.el = e,
            className: "modal fade in show survey-modal"
        }, react.createElement("div", {
            className: "modal-dialog"
        }, react.createElement("div", {
            className: "modal-content"
        }, react.createElement("form", {
            className: "form",
            onSubmit: this.submitData.bind(this)
        }, react.createElement("div", {
            className: "modal-body",
            style: new_height
        }, tasks_value.map(e => void 0 !== e.showIfName && this.state.answers[e.showIfName] !== e.showIfChoice ? react.createElement(react.Fragment, null) : "text" === e.type ? react.createElement(s.TextTask, {
            task: e,
            key: e.name
        }) : "input" === e.type ? react.createElement(a.InputTask, {
            task: e,
            key: e.name,
            updateAnswer: this.updateAnswer.bind(this)
        }) : "multiple-choice" === e.type ? react.createElement(o.MultipleChoiceTask, {
            task: e,
            key: e.name,
            updateAnswer: this.updateAnswer.bind(this)
        }) : react.createElement(react.Fragment, null))), react.createElement("div", {
            className: "modal-footer"
        }, react.createElement("button", {
            type: "button",
            className: "btn btn-default btn-xs",
            onClick: this.props.closeAction
        }, "Close"), react.createElement("input", {
            type: "submit",
            className: "btn btn-primary btn-xs",
            value: "Submit"
        }))))));
    }

    updateAnswer(e, t) {
        const answers = this.state.answers;
        answers[e] = t;
        this.setState({
            answers: answers
        });
    }

    submitData() {
        const duration = Math.round((Date.now() - this.state.timeStarted) / 1000);
        const t = {
            surveyId: this.props.survey.id,
            answers: this.state.answers,
            executionTime: duration
        };
        r.backgroundPageClient.submitSurvey(t);
        this.props.closeAction();
        return  false;
    }
}
export {SurveyForm}
