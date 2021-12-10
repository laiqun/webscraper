//682
//import createHashHistory from "mobx-history"//const n = i(776);
import * as a  from "history"//const n = i(776);  // use history module ,not mob-history
/* for test
console.log(createHashHistory);
console.log(a);
window.xxx = a ;
window.yyy = createHashHistory;
*/
/*
对于history 来说，它是独立的第三方 js 库，是可以用来兼容在不同环境和浏览器下历史记录的管理，而且还拥有统一的 API，
在 history中主要分为这几类：

老浏览器的 history : 主要通过hash来实现，对应createHashHistory。 通过散列表来保持浏览记录

高版本浏览器: 通过 html5 里面的 history，对应createBrowserHistory。 通过html5的history来保存

node 环境下: 主要存储在 memeory 里面，对应createMemoryHistory 。

https://www.w3cschool.cn/article/81244811.html  history的类型和实现原理   "如何实现react-router？实现原理分享！"
检测前进和后退
#  执行URL前进
这三个方法在执行 URL 的方法如下所示：

createBrowserHistory: pushState、replaceState。

createHashHistory: location.hash=*** location.replace()。

createMemoryHistory: 在内存中进行历史记录的存储。

# 检测URL回退
三个方法的使用方式如下所示：

createBrowserHistory: popstate。

createHashHistory: hashchange。

createMemoryHistory: 因为是在内存中操作，跟浏览器没有关系，不涉及 UI 层面的事情，所以可以直接进行历史信息的回退。
 */
let AppHistory = "undefined" != typeof document ? a.createHashHistory() : undefined;
console.log(AppHistory);
export {AppHistory}