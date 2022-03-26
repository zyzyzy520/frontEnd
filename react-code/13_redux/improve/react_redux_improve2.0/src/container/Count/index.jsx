//这个文件为Count组件创建容器，容器负责和redux通信，将结果交给UI组件
import React, { Component, createRef } from 'react'
import { connect } from 'react-redux';
// 引入创建action的方法
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 定义UI组件
class Count extends Component {
    container = createRef()
    state = {
        wind: '风大'
    }
    increment = () => {
        // 拿到节点值
        const value = parseInt(this.container.current.value);
        // 调用容器组件传递过来的接口，通知他修改
        this.props.add(value);
    }
    decrement = () => {
        // 拿到节点值
        const value = parseInt(this.container.current.value);
        // 调用容器组件传递过来的接口，通知他修改
        this.props.sub(value);
    }
    incrementIfOdd = () => {
        // 拿到节点值
        const value = parseInt(this.container.current.value);
        // 调用容器组件传递过来的接口，通知他修改
        if (this.props.sum % 2 != 0) this.props.add(value);
    }
    incrementAsync = () => {
        // 拿到节点值
        const value = parseInt(this.container.current.value);
        // 调用容器组件传递过来的接口，通知他修改
        this.props.addSync(value, 500);
    }
    render() {
        return (
            <div>
                <h3>当前求和为：{this.props.sum}</h3>
                <h4>今天：{this.state.wind}</h4>
                <select ref={this.container}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select> &nbsp;
                <button onClick={this.increment}>+</button> &nbsp;
                <button onClick={this.decrement}>-</button> &nbsp;
                <button onClick={this.incrementIfOdd}>奇数再加</button> &nbsp;
                <button onClick={this.incrementAsync}>异步加</button> &nbsp;
            </div>
        )
    }
}

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