import { combineReducers } from "redux";
import { channelReducer } from "./channel";
import { articlesReducer } from "./articles";
// 对象里写reducer的名字，和对应的reducer
const rootReducer = combineReducers({
    channelsState: channelReducer,
    articlesState: articlesReducer
})
export default rootReducer
