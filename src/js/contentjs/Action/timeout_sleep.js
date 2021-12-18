//const i = n(3);
import * as i from "../../log/log.js"

class TimeoutError extends Error {
}

class s {
    static sleep(timeout) {
        return new Promise(reslove => setTimeout(reslove, timeout));
    }

    static async  sleepDifference(start, duration) {
        const now = Date.now();
        const r = duration - (now - start);
        if(r > 0 )//duration > (now-start) 说明还有时间
        {
            i.default.info("will be sleeping for additional " + r);
            await s.sleep(r);
        }
        else
            i.default.info("will not be sleeping for additional time");
    }

    static timeoutPromise(e, timeout, msg) {
        let r;
        const i = [new Promise((resolve, reject) => {
            r = setTimeout(() => {
                reject(new o("timeout: " + msg));
            }, timeout);
        }), e];
        return Promise.race(i).then(e => (clearTimeout(r), e));
    }

    static timeoutPromiseWithoutTimeoutError(one_promise, timeout_time, error_msg, log_level = "NOTICE") {
        let r;
        const s = [new Promise((resolve, reject) => {
            r = setTimeout(() => {
                i.default.log(log_level, "request timed out. continuing", {
                    error: error_msg
                });
                resolve();
            }, timeout_time);
        }), one_promise];
        return Promise.race(s).then(e => (clearTimeout(r), e));
    }
}

export {s as default}