// 定义redux中 action的类型
import store from "@/store";
import type {Token} from './data'

// 1. 得到store中所有state的类型。
export type rootState = ReturnType<typeof store.getState>

// 4.登录action的type，action的格式一定是{type: '', payload: XX}
export type LoginActionType = {
    type: 'login/token',   //字面量类型
    payload: Token        // 参数类型
}

// 2. 汇总所有action的类型   
type RootAction = LoginActionType;

// 3. 声明异步action
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>