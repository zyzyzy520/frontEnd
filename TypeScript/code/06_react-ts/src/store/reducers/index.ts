// 导出统一的reducers，它就是一个函数集
// 一个正常的项目 有很多模块 会有很多模块的函数集
import { combineReducers } from "redux";
import { todosReducer } from "./todos";

// 将多个reducer组合在一起
const rootReducer = combineReducers({
    //reducer的汇总
    //名字是存储到state中的属性名，值是关联的reducer
    'todos': todosReducer
})

export default rootReducer;