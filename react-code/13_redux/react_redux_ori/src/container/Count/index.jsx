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

// 这个方法，参数是状态由store调用传递，返回值是一个对象store会将其放入UI组件的props中
function mapStateToProps(state) {
    return {
        sum: state
    }
}

//这个方法，参数是dispatch由store调用传递，返回值是一个对象store会将其放入UI组件的props中
// 这个方法里写好操作redux的方法(创建action，分发action)，并给UI组件提供接口，UI组件在需要的地方调用接口，告诉容器组件进行操作
function mapDispatchToProps(dispatch) {
    return {
        add: (value) => { dispatch(createIncrementAction(value)); },
        sub: (value) => { dispatch(createDecrementAction(value)); },
        addSync: (value, delay) => { dispatch(createIncrementAsyncAction(value, delay)); }
    }
}

// 将UI组件和两个方法进行连接
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count);

export default CountContainer;