import {default as log} from "../log/log.js"//const r = i(5);

class RequestPermissions {
    static requestAdditionalPermissions() {
        return async function () {
            if (undefined === chrome.permissions)
                return;
            let requestResult = await new Promise((resolve, reject) => {
                chrome.permissions.contains({
                    permissions: ["webRequest"]
                }, parameter => {
                    if (parameter) {
                        log.info("user already has given permission");
                        resolve(true)
                    } else
                        resolve(false);
                });
            });
            if (requestResult === false)
                await new Promise((resolve, reject) => {
                    chrome.permissions.request({
                        permissions: ["webRequest"]
                    }, parameter => {
                        parameter ? resolve() : reject("user denied permissions");
                    });
                });
        };
    }
}

export {RequestPermissions}