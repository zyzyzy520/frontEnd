// 这个文件是Count的reducer
const initState = {
    num: 0
}
const countReducer = (prevState = initState, action) => {
    // 对action进行解构拿到类型和值
    const { type, value } = action;
    const { num } = prevState
    switch (type) {
        case 'addCount':
            return {
                num: num + 1
            }
        case 'subCount':
            return {
                num: num - 1
            }
        default:
            return prevState
    }
}

export default countReducer