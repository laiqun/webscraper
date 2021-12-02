import * as n from "react"//    const n = i(0);
class InputTask extends n.Component {
    render() {
        const {task: e} = this.props;
        return n.createElement("div", {
            className: "form-group"
        }, n.createElement("label", null, e.text), n.createElement("input", {
            type: "text",
            className: "form-control",
            placeholder: e.placeholder,
            onChange: this.updateAnswer.bind(this),
            required: e.required
        }));
    }

    updateAnswer(e) {
        const {value: t} = e.currentTarget, {name: i} = this.props.task;
        this.props.updateAnswer(i, t);
    }
}

export {InputTask}