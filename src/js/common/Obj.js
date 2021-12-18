//57
/*
//https://blog.csdn.net/qq_18547381/article/details/105679955
import如何加载commonJs模块
假如有个commonJs规范的模块：

// aaa.js

exports.kkk = "hello c"
exports.kkm = "world c"
有三种方法通过import引入

1，直接import
import aaa from 'aaa'
console.log(aaa) // { kkk: 'hello c', kkm: 'world c' }
注意： import命令加载 commonJS 模块，只能整体加载，不能只加载单一的输出项

import {kkk} from 'aaa'
console.log(kkk) // 报错：SyntaxError: The requested module 'aaa' does not provide an export named 'kkk'
 */
import * as n from "./Str.js" //n = i(75),
//import * as r from "crypto-browserify" //const  r = i(140);
import createHash from "crypto-browserify"

class Obj {
    static clone(e) {
        return JSON.parse(JSON.stringify(e));
    }

    static diffWouldUpdate(settingStatus, assertStatus) {
        const result = {};
        for (const attr in assertStatus)
            if (settingStatus[attr] !== assertStatus[attr])
                result[attr] = assertStatus[attr];
        return result;
    }

    static diffWouldNotUpdate(settingStatus, assertStatus) {
        const result = {};
        for (const attr in assertStatus)
            if (settingStatus[attr] === assertStatus[attr])
                result[attr] = assertStatus[attr];
        return result;
    }

    static empty(e) {
        return 0 === Object.entries(e).length;//返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍
    }

    static recursiveKeySort(oneMap) {
        if (null == oneMap)
            return oneMap;
        const result = {};//这里的类型，应该根据oneMap的类型来变
        Object.setPrototypeOf(result, oneMap);
        const keys = Object.keys(oneMap);
        keys.sort();
        for (const key of keys) {
            let value = oneMap[key];
            if (Array.isArray(value))
            {
                for (let index = 0; index < value.length; index++)
                    if("object" == typeof value[index] )//有问题的，根本没考虑数组中包含的数组，如果是这种情况，直接当成Object了
                        value[index] = Obj.recursiveKeySort(value[index]);
            }
            else
                if("object" == typeof value)
                    value = Obj.recursiveKeySort(value);
            result[key] = value;
        }
        return result;
    }

    static getSize(e) {
        const t = JSON.stringify(e);
        return n.Str.getSize(t);
    }

    static getHash(e) {
        const jsonStr = JSON.stringify(e);
        return createHash("sha256").update(jsonStr).digest("hex");
    }
    static convertToBasicObject(e) {
        if (undefined !== e)
            return JSON.parse(JSON.stringify(e));
    }
}

export {Obj}