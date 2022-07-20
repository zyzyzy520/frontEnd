import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入reducer
import rootReducer from './reducer'

// 创建store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
type RootState = ReturnType<typeof store.getState>;
export type {RootState}
export default store