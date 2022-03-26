// 该文件是专属于Count组件的reducer
// 本质是一个函数，接收store调用，store调用时会传递两个参数(prevState, action)之前的状态和action
import { INCREMENT, DECREMENT } from "../actions/constant";
export default function countReducer(prevState = 0, action) {
    console.log('count', prevState)
    // 1.首先解构赋值，得到action的类型和数据
    const { type, data } = action;
    // 2.type:增、减。都不是就是初始值
    switch (type) {
        case 'increment':
            return prevState + data;
        case 'decrement':
            return prevState - data;
        default:
            return prevState;
    }

}