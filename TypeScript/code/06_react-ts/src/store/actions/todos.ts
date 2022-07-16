import { type } from "os"

// 专门处理todos的action
export { }

// // 1. 声明一个新增action的类型
// type AddToDo = {
//     type: 'todos/add',  // 字面量类型，是固定的值
//     payload: string     // 添加todos是文本，新增action的数据的类型
// }
// // 2. 声明一个删除action的类型
// type DelToDo = {
//     type: 'todos/del',  // 删除的字面量
//     payload: number     // 删除的时候，只需要id就可以删除
// }

// // 3. 声明新增action的函数, 最终返回的对象类型是AddToDo
// const addTodo = (data: string): AddToDo => {
//     return {
//         type: 'todos/add',
//         payload: data
//     }
// }

// // 4. 声明删除action的函数, 最终返回的对象类型是DelToDo
// const delToDo = (id: number): DelToDo => {
//     return {
//         type: 'todos/del',
//         payload: id
//     }
// }

// // 5. 暴露创建action的函数
// export {
//     addTodo,
//     delToDo
// }


// 1. 声明新增 action 的函数
export const addTodo = (data: string) => {
    return {
        type: 'todos/add' as const,      // 这里的类型不够精确，使用类型断言表明是常量，类型是字面量
        payload: data
    }
}

// 2. 声明删除 action 的函数
export const delTodo = (id: number) => {
    return {
        type: 'todos/del' as const,
        payload: id
    }
}

// 3. 声明切换 action 的函数
export const toggleTodo = (id: number) => {
    return {
        type: 'todos/toggle' as const,
        payload: id
    }
}

// 4. 获取以上操作action的函数，返回值的类型
type AddTodoAction = ReturnType<typeof addTodo>
type DelTodoAction = ReturnType<typeof delTodo>
type ToggleTodoAction = ReturnType<typeof toggleTodo>

// 5. 组成联合类型，并暴露
export type TodoAction = AddTodoAction | DelTodoAction | ToggleTodoAction