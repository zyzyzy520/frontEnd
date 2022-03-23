// 定义为Count组件服务的reducer
import { INCREMENT, DECREMENT } from "./constant";
// reducer可以：初始化状态、加工状态
// 接收store传过来的prevState, action
export default function countReducer(prevState, action) {
    //对action对象进行解构，拿到类型和数据
    const { type, data } = action;

    // 根据操作类型，决定如何操作状态
    switch (type) {
        case INCREMENT: //如果是加
            return prevState + data
        case DECREMENT: //如果是减
            return prevState - data
        default: //既不是加也不是减，说明是初始化啊
            return 0
    }
}