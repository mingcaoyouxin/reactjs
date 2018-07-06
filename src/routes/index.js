import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import * as stores from '../stores';
import { App, Login, Homepage } from '../containers';//通过export方式导出，在导入时要加{ }，export default则不需要

//使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名
/**
 * Provider (mobx-react 包) 可以用来使用 React 的context机制来传递 store 给子组件。在react中，mobx-react提供了 Provider 组件用来包裹最外层组件节点，并且传入 store（通过）context 传递给后代组件：
 * inject (mobx-react 包)相当于Provider 的高阶组件。可以用来从 React 的context中挑选 store 作为 prop 传递给目标组件。
 */
export default (
    <Provider { ...stores}>
        <Router history={ browserHistory }>
            <Route path="/" component={App} >
                <IndexRoute component={Login} />
                <Route path="/homepage" component={Homepage} />
            </Route>
        </Router>
    </Provider>
)

