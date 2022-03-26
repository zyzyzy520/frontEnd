// 这个文件用于给Person组件创建action
import { ADD_PERSON } from "./constant"
const createAddAction = (personObj) => (
    {
        type: 'add',
        data: personObj
    }
)

export default createAddAction