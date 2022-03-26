//这个文件为Count组件创建容器，容器负责和redux通信，将结果交给UI组件

import { connect } from 'react-redux';
// 引入UI组件
import Count from '../../Components/Count'
// 引入创建action的方法
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 将UI组件和两个方法进行连接
const CountContainer = connect(
    // 映射状态
    state => ({ sum: state }),
    // 映射操作状态的方法
    {
        add: createIncrementAction,
        sub: createDecrementAction,
        addSync: createIncrementAsyncAction
    }
)(Count);

export default CountContainer;