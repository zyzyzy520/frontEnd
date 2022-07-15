import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// 会自动访问 './reducers/index.ts
import rootReducer from './reducers';

// 初始化store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
type RootState = ReturnType<typeof store.getState>;
export type {RootState}