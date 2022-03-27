import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Count extends Component {
    // 初始值
    state = {
        sum: 0,
        name: 'Ash'
    }
    add = () => {
        const { sum } = this.state;
        this.setState({ sum: sum + 3 });
    }
    changeName = () => {
        this.setState({ name: '小刘' })
    }
    unmout = () => {
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
    }
    componentDidMount() {
        // 已挂载就开启定时器
        setInterval(() => {
            const { sum } = this.state;
            this.setState({ sum: sum + 3 });
        }, 3000)
    }
    componentWillUnmount() {
        alert('将要卸载啦')
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.sum}</h1>
                <h2>名字:{this.state.name}</h2>
                <button onClick={this.add}>点我+3</button>
                <button onClick={this.changeName}>点我给老刘换名</button>
                <button onClick={this.unmout}>点我卸载组件</button>
            </div>
        )
    }
}
