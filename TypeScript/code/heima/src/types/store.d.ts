// 负责仓库action的类型定义
import { ThunkAction } from 'redux-thunk'
import type {Channels, Articles} from './data'
import type {RootState} from '../store'
// 获取频道列表action 类型
export type getChannelAction = {
    type: 'channel/get',     //字面量
    payload: Channels           //从后端获取频道列表 => 载荷数据 => 频道列表数据
}

// 切换当前频道action 类型
type toggleChannelAction = {
    type: 'toggle',
    payload: number
}

// 获取对应频道的文章列表action 类型
type getArticleAction = {
    type: 'get',
    payload: Articles
}

export type RootAction = getChannelAction | toggleChannelAction | getArticleAction
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>