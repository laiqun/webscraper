//u看起来是至关重要的  id为522
//const /*r = i(21), mobx-react*/ /*a = i(0), react*/ /*o = i(11),  o是rect-dom*/ /*s = i(16),react-router*/ /*l = i(676);  DevtoolsPanel.js*///, u = i(522), d = i(524);
//r是mobx-react  Provider、observer、inject均为是mobx-react提供
//Mobx是一个功能强大,上手非常容易的状态管理工具。就连redux的作者也曾经向大家推荐过它,在不少情况下你的确可以使用Mobx来替代掉redux。
//MobX是一个经久考验的库,使得状态管理简单而且透明、可伸缩的应用功能反应性编程(TFRP)。
//https://www.zhihu.com/question/428851039
//a 是react
//o 也是react
//s 是react 路由管理
//l 应该是pannel ，然后弄成了组件

/*
为什么react需要状态管理

因为对于react来说，同级组件之间的通信尤为麻烦，或者是非常麻烦了，所以我们把所有需要多个组件使用的state拿出来，整合到顶部容器，进行分发。状态管理可以实现组件通信、跨组件数据储存。

一些小型项目，只使用 React 完全够用了，数据管理使用props、state即可，那什么时候需要引入Redux呢？

当渲染一个组件的数据是通过props从父组件中获取时，通常情况下是 A --> B，但随着业务复杂度的增加，有可能是这样的：A --> B --> C --> D --> E，E需要的数据需要从A那里通过props传递过来，以及对应的 E --> A逆向传递callback。组件BCD是不需要这些数据的，但是又必须经由它们来传递，这确实有点不爽，而且传递的props以及callback对BCD组件的复用也会造成影响。或者兄弟组件之间想要共享某些数据，也不是很方便传递、获取等。诸如此类的情况，就有必要引入Redux了。

Redux是Facebook提出一个数据状态管理的库，也可以说框架。它搭配React解决了组件之间通信问题，这个通信问题，是组件和其它组件之间也可以跨层通信，不需要一层一层的把，父组件的数据往下传递。这会增加代码复杂度和维护的复杂度，因此react状态管理的重要性就体现出来了。
 */

//https://blog.csdn.net/weixin_34354945/article/details/89546742  很重要的参考资料
//30分钟极速通关react mobx react-router及打通springboot 十分钟mobx入门 //https://mobx.js.org/getting-started.html  https://zh.mobx.js.org/getting-started.html
//https://blog.csdn.net/ixygj197875/article/details/79249752  es6 core-decorators.js
//http://react-guide.github.io/react-router-cn/index.html
import * as mobx from 'mobx'  //mobx 是i(13)   //i(13) 也是mobx相关
import * as mobx_react from 'mobx-react'//r = i(21),
import * as react_dom from "react-dom"//o = i(11)
import * as bgClient from "../IM/backgroundPageClient.js"
import * as appState from "../state/AppState.js" //u = i(522)
import * as errorState from "../state/errorState.js"
import * as react from "react"
import * as react_router from "react-router"  //i(16)
import * as devtoolsPanel from "./DevtoolsPanel.js"
import {AppHistory} from "../state/AppHistory"; //i(676)
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};

let observeRouter = n([mobx_react.observer], react_router.Router);

async function xx() {

    mobx.configure({
        enforceActions: "never",
        computedRequiresReaction: true,   // computed ->reaction ->observable ->reaction   计算属性必须在action或者reaction中，避免多次重复计算
        reactionRequiresObservable: true,// 发出警告，当一个reaction被创建，但是没有访问可观测变量时
        observableRequiresReaction: true,//在可观测，不可观测的属性或者action 访问时，打出warn ； 这样可以检查他们是否有mobx的上下文(context)
        disableErrorBoundaries: true  //禁止将异常包装后再重新抛出
    });
    /* JSX  version
    *
    * <Provider appState = u.appState errorSate = d.errorState>
    *     <Router history = u.appState.history>
    *         <DevtoolsPanel />
    *     </Router>
    * </Provider>
    * */

    react_dom.render(react.createElement(mobx_react.Provider, {
            appState: appState.appState,
            errorState: errorState.errorState
        }, react.createElement(observeRouter, {
            history: appState.appState.history
        }, react.createElement(devtoolsPanel.DevtoolsPanel, null)
        )
    ), document.getElementById("panel"));
    await appState.appState.loadExperimentalFeatureState();
    await appState.appState.locationChanged();
    await bgClient.backgroundPageClient.setDailyStat("webScraperOpened", true);
    await bgClient.backgroundPageClient.updateExtensionIsBeingUsed();
    setInterval(() => async function () {
        await bgClient.backgroundPageClient.updateExtensionIsBeingUsed();
    }, 60000);// call interval 60s
}

xx();