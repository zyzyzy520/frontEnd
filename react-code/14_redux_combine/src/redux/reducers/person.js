// 这个文件是Person组件的reducer
import { ADD_PERSON } from "../actions/constant";
// 定义初始值，因为有多个人物的信息，所以是一个数组，每一个元素对象对应一个人的信息
const initState = [
    { name: '老刘', age: 78 },
    { name: '海峰', age: 18 }
]

const personReducer = (prevState = initState, action) => {
    console.log('person', prevState, action)
    // 首先对action解构赋值拿到action的type和value, type是字符，value是对象
    const { type, data } = action;

    // 根据不同的type进行不同的操作
    switch (type) {
        case 'add':
            // prevState的结构肯定是和initState是一样的，是数组
            return [data, ...prevState];
        default:
            // 初始值
            return prevState

    }
}

export default personReducer