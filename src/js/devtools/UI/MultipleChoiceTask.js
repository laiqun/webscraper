import * as react from "react"//    const n = i(0);
class MultipleChoiceTask extends react.Component {
    render() {
        const {task: e} = this.props;
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("label", {
            htmlFor: e.name
        }, e.text), e.choices.map(t => react.createElement("div", {
            className: "radio",
            key: t
        }, react.createElement("label", null, react.createElement("input", {
            type: "radio",
            name: e.name,
            value: t,
            onChange: this.updateAnswer.bind(this),
            required: e.required
        }), t))));
    }

    updateAnswer(e) {
        const {value: value} = e.currentTarget;
        const {name: name} = this.props.task;
        this.props.updateAnswer(name, value);
    }
}


export {MultipleChoiceTask}