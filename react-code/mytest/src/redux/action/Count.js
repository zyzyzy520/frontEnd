//为count组件创建action

const createAddAction = (value) => {
    return {
        type: 'addCount',
        value: value
    }
}

const createSubAction = (value) => {
    return {
        type: 'subCount',
        value: value
    }
}

export {
    createAddAction,
    createSubAction
}