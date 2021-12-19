import {Targets} from "./contentjs/HighlightOverly/Targets";
import {serviceFactory} from "./common/RPC/serviceFactory";

class optionsClass {
    constructor() {
        this.config = serviceFactory(Targets.config);
        this.state = {
            formValues: {
                enableDailyStats: false,
                storageType: "local"
            }
        };
        this.componentDidMount();
        this.render();
    }

    async componentDidMount() {
        this.setState({
            formValues: {
                enableDailyStats: await this.config.get("enableDailyStats"),
                storageType: "local"
            }
        });
    }

    setState(map) {
        for (let key in map)
            this.state.formValues[key] = map[key];
    }

    render() {
        let app = document.getElementById("app");
        app.innerHTML = "";
        let control_parent = document.createElement("div");
        let header = document.createElement("h1");
        header.innerText = "Web crawler setting";
        let input = document.createElement("input");
        input.type = "checkbox";
        input.value = "EnableDailyStats";
        let span = document.createElement("span");
        span.innerText = "Allow usage metric gathering";
        control_parent.appendChild(input);
        control_parent.appendChild(span);
        let container = document.createElement("div");
        container.appendChild(header);
        let p = this.privacyPolicy();
        container.appendChild(p);
        container.appendChild(control_parent);
        input.onchange = this.updateFormValue("enableDailyStats");
        input.checked = this.state.formValues.enableDailyStats;
        app.appendChild(container);
    }

    privacyPolicy() {
        let p = document.createElement("p");
        p.innerText = "Allow extension usage metric gathering. Only non-personal information in aggregated format is being gathered. More details in";
        let a = document.createElement("a");
        a.href = "https://webscraper.io/extension-privacy-policy";
        a.innerText = "Privacy Policy";
        p.appendChild(a);
        return p;
    }

    updateFormValue(key) {
        return async (event) => {
            const {target: target} = event;
            const value = "checkbox" === target.type ? target.checked : target.value;
            await this.config.set(key, value);
            const stateValue = Object.assign({}, this.state.formValues);
            stateValue[key] = value;
            this.setState({
                formValues: stateValue
            });
        }
    }
}

let instance = new optionsClass();
