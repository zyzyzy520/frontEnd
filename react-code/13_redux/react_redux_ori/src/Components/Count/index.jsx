import React, { Component, createRef } from 'react'

export default class index extends Component {
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
