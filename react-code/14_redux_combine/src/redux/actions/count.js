// 这个是专门为Count组件创建action的文件
// 一系列函数，创建action，action是一个对象，有两个属性操作类型type和数据data
import { INCREMENT, DECREMENT } from "./constant"

// 根据我们的业务需求，有三种动作
// 1.加
const createIncrementAction = (value) => {
    return {
        type: 'increment',
        data: value
    }
}

// 2.减
const createDecrementAction = (value) => {
    return {
        type: 'decrement',
        data: value
    }
}

// 3.异步加
const createIncrementAsyncAction = (value, delay) => {
    // 在组件里调用createIncrementAsyncAction得到返回的函数时，将返回出来的函数dispatch这，store发现是函数，会立马调用该函数，并将dispatch作为参数传递给该函数
    // 开启定时器，时间到了再次dispatch创建出来的action，实现异步
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(value));
        }, delay)
    }
}

export {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
}