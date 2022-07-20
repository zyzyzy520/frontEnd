// 引入数据类型
import type {Channels} from '../../types/data'
// 引入action类型
import type {getChannelAction} from '../../types/store'
// // 获取频道列表action 
export const getChannelList = (data: Channels): getChannelAction => {
    return {
        type: 'channel/get',
        payload: data
    }
}

// // 切换频道--参数是要切换到的id
// const toggleChannel = (id: number) => {
//     return {
//         type: 'toggle',
//         data: id
//     }
// }