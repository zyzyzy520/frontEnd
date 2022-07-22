// 初始化状态
// 1.引入数据类型。
import type { Channels } from '../../types/data'
// 2.引入action类型。
import type {RootAction} from '../../types/store'
// 3. 定义初始状态的类型
// 不止有频道列表，还要记录当前频道的id
type channelState = {
    currentChannel: number | null
    channels: Channels
}
// 4. 定义初始状态
const initialState: channelState = {
    currentChannel: null,   //没拿到数据前。暂无
    channels: []
}

//返回值也是channelState类型
export const channelReducer = (prevState = initialState, action: RootAction): channelState => {
    const { type, payload } = action
    // 5.根据action的不同进行不同的处理
    switch (type) {
        case 'channel/get':
            // 5.1 在这种情况下的payload是从服务器获取到的数据。是一个数组
            return {
                currentChannel: prevState.currentChannel,
                channels: payload
            }
        case 'channel/toggle':
            // 5.2 在这种情况下的payload是从前端传递过来的数字
            return {
                currentChannel: payload,
                channels: prevState.channels
            }           
        // 一定要有，否则报错
        default:
            return prevState
    }
}