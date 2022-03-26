// 该文件是创建整个redux中最为核心的store对象

// store功能非常复杂，由redux封装好，我们创建然后实现
// 引入createStore函数，用于创建store对象
import { createStore, applyMiddleware } from 'redux'
// 引入composeWithDevTools，用于支持开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'
// 组合多个reducer
import { combineReducers } from 'redux';
import countReducer from './reducers/count'
import personReducer from './reducers/person';
// 引入用于支持异步action的中间件
import thunk from 'redux-thunk'

// 组合reducer，这个就是保存在redux中的总状态
const allReducers = combineReducers({
    countState: countReducer,
    personState: personReducer
})

//参数是对应的组件reducer
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

// 将store暴露给组件使用
export default store;