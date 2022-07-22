// 引入数据类型
import axios from 'axios'
import type {Channels} from '../../types/data'
// 引入action类型
import type { getChannelAction,RootThunkAction,toggleChannelAction } from '../../types/store'

// 描述存储频道到redux的action
export const storeChannelsToRedux = (payload: Channels):getChannelAction => {
    return {
        type: 'channel/get',
        payload
    }
}
// 描述发送异步请求到服务器获取频道列表的action 
export const getChannelFromServer= (): RootThunkAction => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: 'http://geek.itheima.net/v1_0/channels'
          }).then(res => {
            // 创建action并分发
              dispatch(storeChannelsToRedux(res.data.data.channels));
            //   激活第一个频道
            dispatch(toggleChannelIDInRedux(res.data.data.channels[0].id))
          })
    }
}

// // 切换频道--参数是要切换到的id
export const toggleChannelIDInRedux = (id: number): toggleChannelAction=> {
    return {
        type: 'channel/toggle',
        payload: id
    }
}