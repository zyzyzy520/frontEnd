// 引入action里暴露的类型
import type {TodoAction} from '../actions/todos'

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
// 但这里我们就简单设置为返回，只能是三者中的一种
const todosReducer = (prevState = initialState, action: TodoAction) => {
    // reducer中的作用 根据当前action中的type 进行逻辑数据的处理 返回一个新的状态 => UI更新
    const { type, payload } = action;
    switch (type) {
        case 'todos/add':
            return [...prevState, {
                // 一定不能是prevState.length - 1，这样会导致id重复。例如删除了id为1的数据，但这时又要新增数据时
                id: prevState.length == 0 ? 1 : prevState[prevState.length - 1].id + 1,
                text: payload,
                done: false
            }];
        case 'todos/del':
            return prevState.filter((item) => item.id !== payload);
        // 找到id对应选项，并将状态切换成已完成
        case 'todos/toggle':
            return prevState.map((item) => {
                if (item.id === payload) {
                    // 取反
                    item.done = !item.done;
                }
                return item;
            })
        // 这一步一定要有，当有多个reducer的时候，保持原来的状态
        default:
            return prevState;
            
    }
}

export {
    todosReducer
}