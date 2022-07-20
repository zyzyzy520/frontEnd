// 初始化状态
// 1.引入数据类型。
import type { Channels } from '../../types/data'
// 2.引入action类型。
import type {RootAction} from '../../types/store'
const initialState: Channels = []


export const channelReducer = (prevState: Channels = initialState, action: RootAction) => {
    const { type, payload } = action
    // 1.根据action的不同进行不同的处理
    switch (type) {
        case 'channel/get':
            return payload;
        // 一定要有，否则报错
        default:
            return prevState
    }

}