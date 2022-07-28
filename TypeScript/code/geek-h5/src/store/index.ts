import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export type rootState = ReturnType<typeof store.getState>

export default store