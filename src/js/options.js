import {Targets} from "./contentjs/HighlightOverly/Targets";
import {serviceFactory} from "./common/RPC/serviceFactory";

class optionsClass {
    constructor() {
        this.config = serviceFactory(Targets.config);
        this.state = {
        };
        this.getStoredValue();
    }

    async getStoredValue() {
        this.setState({
            formValues: {
                enableDailyStats: await this.config.get("enableDailyStats")||false,
                storageType: "local",
                loggingLevels:await this.config.get("loggingLevels")||4
            }
        });
        this.render();
    }

    setState(map) {
        for (let key in map)
            this.state[key] = map[key];
    }

    render() {
        let app = document.getElementById("app");
        app.innerHTML = "";
        let control_parent = document.createElement("div");
        let header = document.createElement("h1");
        header.innerText = "Web crawler setting";
        //create input
        let dailyStatsinput = document.createElement("input");
        dailyStatsinput.type = "checkbox";
        dailyStatsinput.value = "EnableDailyStats";
        //create input span
        let dailyStatsspan = document.createElement("span");
        dailyStatsspan.innerText = "Allow usage metric gathering";


        //create logging level span
        let loggingLevelspan = document.createElement("span");
        loggingLevelspan.innerText = "Set logging level: ";
        let loggingLevelSelect = document.createElement("select");

        let logLevelArray = ["Error","Warning","Notice","Profile","Info","Debug"];
        for(let key in logLevelArray)
        {
            let option = document.createElement("option");
            option.innerText = logLevelArray[key];
            option.value = key;
            loggingLevelSelect.appendChild(option);
        }

        control_parent.appendChild(dailyStatsinput);
        control_parent.appendChild(dailyStatsspan);
        control_parent.appendChild(document.createElement("br"));
        control_parent.appendChild(loggingLevelspan);
        control_parent.appendChild(loggingLevelSelect);

        let container = document.createElement("div");
        container.appendChild(header);
        container.appendChild(this.privacyPolicy());
        container.appendChild(control_parent);

        //set event handler
        dailyStatsinput.onchange = this.updateFormValue("enableDailyStats");
        loggingLevelSelect.onchange = this.updateFormValue("loggingLevels");

        //set default value from storage
        dailyStatsinput.checked = this.state.formValues.enableDailyStats;
        for(let child of loggingLevelSelect.children)
        {
            if(child.value == this.state.formValues.loggingLevels)
            {
                child.selected ="selected";
            }
        }
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
