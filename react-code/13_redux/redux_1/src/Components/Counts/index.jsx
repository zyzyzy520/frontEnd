import React from "react";
import store from "../../redux/store";
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";
export default class Count extends React.Component {
    container = React.createRef()
    state = { wind: '台风' }

    increment = () => {
        //获取用户选择的数字
        let { container } = this;
        const value = parseInt(container.current.value);
        //创建action
        const action = createIncrementAction(value);
        //通知redux分发这个action
        store.dispatch(action);
    }

    decrement = () => {
        //获取用户选择的数字
        let { container } = this;
        const value = parseInt(container.current.value);
        //创建action
        const action = createDecrementAction(value);
        //通知redux分发这个action
        store.dispatch(action);
    }

    incrementIfOdd = () => {
        if (store.getState() % 2 != 0) {
            // 奇数才进行后面的操作
            //获取用户选择的数字
            let { container } = this;
            let value = parseInt(container.current.value);
            //创建action
            const action = createIncrementAction(value);
            //通知redux分发这个action
            store.dispatch(action);
        }
    }

    incrementAsync = () => {
        //获取用户选择的数字
        let { container } = this;
        let value = parseInt(container.current.value);
        //更新状态
        // setTimeout(() => {
        //     //创建action
        //     const action = createIncrementAction(value);
        //     //通知redux分发这个action
        //     store.dispatch(action);
        // }, 2000
        // 得到action函数
        const action = createIncrementAsyncAction(value, 3000);
        // 分发action
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <h3>当前求和为：{store.getState()}</h3>
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