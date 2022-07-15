// 新建一个todos的reducer函数 它会处理 todos状态
type ToDoList = Array<{
    id: number,
    text: string,
    done: boolean
}>

//将类型导出方便其它文件使用
export type { ToDoList }

const initialState: ToDoList = [{
    id: 1,
    text: '吃饭',
    done: false
}, {
    id: 2,
    text: '睡觉',
    done: true
}, {
    id: 3,
    text: '打豆豆',
    done: false
}];

// reducer 拿到之前的state和action，根据action的类型和参数进行处理。
// 但这里我们就简单设置为返回
const todosReducer = (prevState = initialState, action: any) => {
    // reducer中的作用 根据当前action中的type 进行逻辑数据的处理 返回一个新的状态 => UI更新
    return prevState;
}

export {
    todosReducer
}