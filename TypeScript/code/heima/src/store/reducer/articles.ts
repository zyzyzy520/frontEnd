// 这个reducer改变以及存储的状态是article组件对应的状态
// 引入state中存储数据的状态
import type { Articles } from '../../types/data'
// 引入action的状态，有些时候对于同一个reducer可能会有不同的操作，所以最好是用RootAction类型
import type {RootAction} from '../../types/store'
const initialState: Articles = []

export const articlesReducer = (prevState = initialState, action: RootAction): Articles => {
    const { type, payload } = action
    switch (type) {
        case 'articles/get':
            // 直接替换掉之前频道列表的文章
            return payload
        default:
            return prevState
    }
}