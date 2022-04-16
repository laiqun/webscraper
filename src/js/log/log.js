//https://github.com/defunctzombie/node-process  npm install process
import * as processBrowser from "process/browser"
import * as hrtTime from "browser-process-hrtime"   //https://github.com/kumavis/browser-process-hrtime npm install browser-process-hrtime
//https://www.cnblogs.com/tzyy/p/nodejs.html#_h2_1
import * as loggingLevels from "./loggingLevels.js"
//import * as proto from "./logHandle/n48" //开源库 npm install url-parse
import * as URLParse from "url-parse"
import * as isJSON from "is-json"

class logHandler {
    constructor(msgSetting) {
        this.defaultLoggingLevel = loggingLevels.loggingLevels.Info;
        this.profilingEnabled = msgSetting.profilingEnabled || false;
        this.prefixText = msgSetting.prefixText || "";
        this.setLoggingLevel();
    }

    getLogger(msgSetting) {
        msgSetting.prefixText = this.prefixText + (msgSetting.prefixText || "");
        msgSetting.profilingEnabled = msgSetting.profilingEnabled || this.profilingEnabled;//profiling  资料收集，剖析研究
        return new logHandler(msgSetting);
    }

    setScrapingJobId(e) {
        this.scrapingJobId = e;
    }

    setTaskTrackerName(e) {
        this.taskTrackerName = e;
    }

    setUserId(e) {
        this.userId = e;
    }

    setProxyServiceType(e) {
        this.proxyServiceType = e;
    }

    formatDate(timestamp) {
        if (timestamp.toString().length < 13) {
            timestamp = timestamp * 1000;
        }
        let localDateTime = new Date(timestamp);
        let year = localDateTime.getFullYear();
        let month = localDateTime.getMonth() + 1;
        let date = localDateTime.getDate();
        let hour = localDateTime.getHours();
        let minute = localDateTime.getMinutes();
        let second = localDateTime.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    }

    prettyLog(outputMsg) {
        for (let key in outputMsg) {
            if (key === 'timestamp') {
                outputMsg[key] = this.formatDate(outputMsg[key]);
                continue;
            }
            if (isJSON(outputMsg[key]))
                outputMsg[key] = JSON.parse(outputMsg[key]);

        }
    }

    log(level, rawmsg, outputMsg, timestamp) {
        timestamp || (timestamp = Math.round(Date.now() / 1000));
        if (outputMsg.url == null || outputMsg.url == undefined)
            outputMsg.url = this.url;

        const parsedURL = URLParse(outputMsg.url);
        outputMsg.domainName = parsedURL.hostname;
        outputMsg.timestamp = timestamp;
        outputMsg.level_name = level;
        outputMsg.message = rawmsg;
        outputMsg.scrapingJobId = this.scrapingJobId;
        outputMsg.taskTrackerName = this.taskTrackerName;
        outputMsg.userId = this.userId;
        outputMsg.proxyServiceType = this.proxyServiceType;
        if(this.loggingLevel === loggingLevels.loggingLevels.Debug )
        {
            outputMsg["callStack"] = new Error().stack.substr(5).trim().split("\n").map((x)=>x.trim());
            if(outputMsg["callStack"].length >= 2)
            {
                outputMsg["callStack"].shift();
                outputMsg["callStack"].shift();
                if(outputMsg["callStack"].length === 0)
                    delete outputMsg["callStack"];
            }
        }
        if ("ERROR" === level || "WARNING" === level) {
            this.prettyLog(outputMsg);
            console.error(JSON.stringify(outputMsg, null, 2));
        }  else {
            this.prettyLog(outputMsg);
            console.log(JSON.stringify(outputMsg, null, 2));
        }
    }

    error(rawMsg, context = {}) {
        if (this.canLog(loggingLevels.loggingLevels.Error)) {
            if (context.stack == null || context.stack == undefined)
                context.stack = (new Error).stack; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
            this.log("ERROR", rawMsg, context);
        }
    }

    info(rawMsg, context = {}) {
        if (this.canLog(loggingLevels.loggingLevels.Info))
            this.log("INFO", rawMsg, context);
    }

    debug(rawMsg, context = {}) {
        if (this.canLog(loggingLevels.loggingLevels.Debug))
        {
            this.log("DEBUG", rawMsg, context);
        }

    }

    warning(rawMsg, context = {}) {
        if (this.canLog(loggingLevels.loggingLevels.Warning)) {
            if (context.stack == null)
                context.stack = (new Error).stack;
            this.log("WARNING", rawMsg, context);
        }
    }

    setUrl(url) {
        this.url = url;
    }

    copyMessage(e) {
        this.log(e.level_name, e.message, e, e.timestamp);
    }

    notice(rawMsg, context = {}) {
        if (this.canLog(loggingLevels.loggingLevels.Notice))
            this.log("NOTICE", rawMsg, context);
    }

    profile(rawMsg) {
        const oldTimeStamp = hrtTime();
        return this.closeProfile.bind(this, rawMsg, oldTimeStamp);
    }

    closeProfile(rawMsg, oldTimeStamp) {
        if (!this.canLog(loggingLevels.loggingLevels.Profile))
            return;
        const hrtTime1 = hrtTime(oldTimeStamp);
        let timestamp = Math.round((1e9 * hrtTime1[0] + hrtTime1[1]) / 1e6);
        this.log("PROFILE", timestamp + " " + rawMsg, {});
    }

    canLog(currentLogLevel) {
        return this.loggingLevel >= currentLogLevel;
    }

    async setLoggingLevel() {
        if (processBrowser.browser) {
            await new Promise((resolve, reject) => {
                chrome.storage.sync.get(["loggingLevels"], args => {
                    if (undefined === args) {
                        this.loggingLevel = this.defaultLoggingLevel;
                    } else
                        this.loggingLevel = parseInt(args["loggingLevels"]);
                    resolve();
                });
            });
        }
        else {//in Node.js
            switch (processBrowser.env.LOGGING_LEVEL) {
                case "error":
                    this.loggingLevel = loggingLevels.loggingLevels.Error;
                    break;

                case "warning":
                    this.loggingLevel = loggingLevels.loggingLevels.Warning;
                    break;

                case "notice":
                    this.loggingLevel = loggingLevels.loggingLevels.Notice;
                    break;

                case "info":
                    this.loggingLevel = loggingLevels.loggingLevels.Info;
                    break;

                case "debug":
                    this.loggingLevel = loggingLevels.loggingLevels.Debug;
                    break;

                case "profile":
                    this.loggingLevel = loggingLevels.loggingLevels.Profile;
                    break;

                default:
                    this.loggingLevel = this.defaultLoggingLevel;
            }
        }
    }
}

let obj = new logHandler({});
export {obj as default}