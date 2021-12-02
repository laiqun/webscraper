import * as react from "react"//const n = i(0);
class TextTask extends react.Component {
    render() {
        const {task: task_value} = this.props;
        return react.createElement("div", {
            className: "form-group"
        }, react.createElement("p", null, task_value.text));
    }
}

export {TextTask}