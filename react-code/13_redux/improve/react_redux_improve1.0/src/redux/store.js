// 该文件是创建整个redux中最为核心的store对象

// 1.store功能非常复杂，由redux封装好，我们创建然后实现
import { createStore, applyMiddleware } from 'redux'
import countReducer from './count_reducer'
// 引入用于支持异步action的中间件
import thunk from 'redux-thunk'

//参数是对应的组件reducer
const store = createStore(countReducer, applyMiddleware(thunk));

// 将store暴露给组件使用
export default store;