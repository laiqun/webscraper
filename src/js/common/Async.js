import {default as Log} from "../log/log.js";
import {TimeoutError} from "./TimeoutError.js";

class Async {
    static sleep(timeout) {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    static async sleepDifference(start_time, duration) {
        const now = Date.now();
        const remain_time = duration - (now - start_time);
        if (remain_time > 0) {
            Log.info("will be sleeping for additional " + remain_time);
            await Async.sleep(remain_time)
        } else
            Log.info("will not be sleeping for additional time");
    }

    static async timeoutPromise(promise_item, duration, index) {
        let timeout_handle;
        const promise_array = [new Promise((resolve, reject) => {
            timeout_handle = setTimeout(() => {
                reject(new TimeoutError("timeout: " + index));
            }, duration);
        }), promise_item];
        try {
            return await Promise.race(promise_array).then(args => (clearTimeout(timeout_handle), args));
        } catch (except) {
            clearTimeout(timeout_handle);
            throw  except;
        }
    }

    static async timeoutPromiseWithoutTimeoutError(promise_item, duration, error_item, log_level = "NOTICE") {
        let timeout_handle;
        const promiseList = [new Promise((resolve, reject) => {
            timeout_handle = setTimeout(() => {
                Log.log(log_level, "request timed out. continuing", {
                    error: error_item
                });
                resolve();
            }, duration);
        }), promise_item];
        try {
            return await Promise.race(promiseList).then(res => (clearTimeout(timeout_handle), res));
        } catch (e) {
            clearTimeout(timeout_handle);
            throw  e;
        }
    }

    static async waitForCallback(promise_item, t, timeout = 1000) {
        const now = Date.now();
        for (; ;) {
            await Async.sleep(10);
            const result = await promise_item();
            if (result)
                return result;
            if (Date.now() > now + timeout)
                throw new Error("Wait for callback timeout: " + t);
        }
    }
}

export {Async}