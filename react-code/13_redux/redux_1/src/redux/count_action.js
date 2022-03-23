import { INCREMENT, DECREMENT } from './constant'
// 该文件用于定义创建action的函数

// 创建action对象
function createIncrementAction(value) {
    return {
        type: INCREMENT,
        data: value
    }
}

const createDecrementAction = value => ({
    type: DECREMENT,
    data: value
})

//  异步action中通常会开启异步任务，异步任务有结果后，通常会调用dispatch去分发一个同步action
const createIncrementAsyncAction = (value, time) => {
    return (dispatch) => {
        // 开启定时器，时间到后，分发action对象给store
        setTimeout(() => {
            //这里分发的对象。可以通过调用函数得到。
            dispatch(createIncrementAction(value));
        }, time)
    }
}

export {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
}