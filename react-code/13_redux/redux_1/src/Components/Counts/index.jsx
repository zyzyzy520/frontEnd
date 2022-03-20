import React from "react";

export default class Count extends React.Component {
    container = React.createRef()
    state = { sum: 0 }
    increment = () => {
        // 获取原状态
        let { sum } = this.state;
        //获取用户选择的数字
        let { container } = this;
        let value = parseInt(container.current.value);
        //更新状态
        this.setState({ sum: sum + value });
    }
    decrement = () => {
        // 获取原状态
        let { sum } = this.state;
        //获取用户选择的数字
        let { container } = this;
        let value = parseInt(container.current.value);
        //更新状态
        this.setState({ sum: sum - value });
    }
    incrementIfOdd = () => {
        // 获取原状态
        let { sum } = this.state;
        if (sum % 2 != 0) {
            // 奇数才进行后面的操作
            //获取用户选择的数字
            let { container } = this;
            let value = parseInt(container.current.value);
            //更新状态
            this.setState({ sum: sum + value });
        }

    }
    incrementAsync = () => {
        // 获取原状态
        let { sum } = this.state;
        //获取用户选择的数字
        let { container } = this;
        let value = parseInt(container.current.value);
        //更新状态
        setTimeout(() => {
            this.setState({ sum: sum + value });
        }, 2000)
    }
    render() {
        return (
            <div>
                <h3>当前求和为：{this.state.sum}</h3>
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