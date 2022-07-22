//  引入请求发送
import axios from "axios"
// 引入异步类型
import type { RootThunkAction } from "../../types/store"
// 引入要创建的action类型
import type { getArticleAction } from '../../types/store'
import type {Articles} from '../../types/data'
// 将获取对应频道的文章列表存于redux中
const storeArticleToRedux = (data: Articles): getArticleAction=> {
    return {
        type: 'articles/get',
        payload: data
    }
}

// 异步发送请求action
export const getArticlesFromServer = (channelId: number): RootThunkAction => {
    return (dispatch) => {
        // 通过频道id发送异步请求拿到数据
        axios({
            method: 'GET',
            url: `http://geek.itheima.net/v1_0/articles`,
            params: {
                channel_id: channelId,
                timestamp: Date.now()
            }   //组合成完整的是 http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}
          }).then(res => {
            // 拿到数据后再次分发请求存储进redux
              dispatch(storeArticleToRedux(res.data.data.results))
          })
    }
}
