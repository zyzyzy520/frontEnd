// 获取频道列表action 
const getChannelList = () => {
    return {
        type: 'get',
        data: ''
    }
}

// 切换频道--参数是要切换到的id
const toggleChannel = (id: number) => {
    return {
        type: 'toggle',
        data: id
    }
}
