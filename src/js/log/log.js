 //https://github.com/defunctzombie/node-process  npm install process
import * as processBrowser from "process/browser"
import * as hrtTime from "browser-process-hrtime"   //https://github.com/kumavis/browser-process-hrtime npm install browser-process-hrtime
//https://www.cnblogs.com/tzyy/p/nodejs.html#_h2_1
import * as loggingLevels from "./loggingLevels.js"
//import * as proto from "./logHandle/n48" //开源库 npm install url-parse
import * as URLParse from "url-parse"

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
    log(level, rawmsg, outputMsg, timestamp) {
        timestamp || (timestamp = Math.round(Date.now() / 1000));
        if(outputMsg.url == null || outputMsg.url==undefined)
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
        if ("ERROR" === level || "WARNING" === level)
            console.error(JSON.stringify(outputMsg,null,4));
        else
            console.log(JSON.stringify(outputMsg,null,4));
    }

    error(rawMsg, context = {}) {
        if (this.canLog(loggingLevels.loggingLevels.Error)) {
            if (context.stack == null)
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
            this.log("DEBUG", rawMsg, context);
    }

    warning(rawMsg, context = {}) {
        if (this.canLog(loggingLevels.loggingLevels.Warning)) {
            if (context.stack == null)
                context.stack = (new Error).stack;
            this.log("WARNING", rawMsg, context);
        }
    }
    setUrl(e) {
        this.url = e;
    }
    copyMessage(e) {
        this.log(e.level_name, e.message, e, e.timestamp);
    }
    notice(rawMsg, context = {}) {
        if (this.canLog(loggingLevels.loggingLevels.Notice))
            this.log("NOTICE", rawMsg, context);
    }

    profile(e) {
        const oldtimestamp = hrtTime();
        return this.closeProfile.bind(this, rawMsg, oldtimestamp);
    }

    closeProfile(rawMsg, oldtimestamp) {
        if (!this.canLog(loggingLevels.loggingLevels.Profile))
            return;
        const hrtTime1 = hrtTime(oldtimestamp);
        let timestamp = Math.round((1e9 * hrtTime1[0] + hrtTime1[1]) / 1e6);
        this.log("PROFILE", timestamp + " " + rawMsg, {});
    }

    canLog(canlogLevel) {
        return this.loggingLevel >= canlogLevel;
    }

    setLoggingLevel() {
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

let obj = new logHandler({});
export {obj as default}