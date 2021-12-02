import * as react from "react"// const n = i(0);
class ConditionalElementBase extends react.Component {
    render() {
        return this.canRender ? this._render() : react.createElement(react.Fragment, null);
    }

    get canRender() {
        return this.props.selector.hasFeature(this.props.feature);
    }
}

export {ConditionalElementBase}