import React, { Component } from 'react'

export default class Count extends Component {
    state = { sum: 0 }
    addTo1 = () => {
        setTimeout(() => {
            const { sum } = this.state;
            this.setState({ sum: sum + 1 })
            console.log(this.state.sum)   //显示修改后的sum 1
        }, 1000)

    }
    changeTo99 = () => {
        this.setState({ sum: 99 })
    }
    render() {
        return (
            <div>
                <h1>计数：{this.state.sum}</h1>
                <button onClick={this.addTo1}>点击加1</button>
                <button onClick={this.changeTo99}>点击变为99</button>
            </div>
        )
    }
}
