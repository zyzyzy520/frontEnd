import { combineReducers } from "redux";
import { channelReducer } from "./channel";
// 对象里写reducer的名字，和对应的reducer
const rootReducer = combineReducers({
    channels: channelReducer
})
export default rootReducer