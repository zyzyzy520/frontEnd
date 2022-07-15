// 专门处理todos的action
export { }

// 1. 声明一个新增action的类型
type AddToDo = {
    type: 'todos/add',  // 字面量类型，是固定的值
    payload: string     // 添加todos是文本，新增action的数据的类型
}
// 2. 声明一个删除action的类型
type DelToDo = {
    type: 'todos/del',  // 删除的字面量
    payload: number     // 删除的时候，只需要id就可以删除
}

// 3. 声明新增action的函数, 最终返回的对象类型是AddToDo
const addTodo = (data: string): AddToDo => {
    return {
        type: 'todos/add',
        payload: data
    }
}

// 4. 声明删除action的函数, 最终返回的对象类型是DelToDo
const delToDo = (id: number): DelToDo => {
    return {
        type: 'todos/del',
        payload: id
    }
}