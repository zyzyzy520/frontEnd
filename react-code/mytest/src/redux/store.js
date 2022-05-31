import { createStore, combineReducers } from 'redux'
import countReducer from './reducers/Count'

// 存储在redux中的状态，右边是实际值，左边是接口名称
const reducers = combineReducers({
    countState: countReducer
})
const store = createStore(reducers)
export default store;