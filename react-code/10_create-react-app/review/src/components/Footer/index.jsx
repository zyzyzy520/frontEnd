import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default class Footer extends React.Component {
    render() {
        let { todos, deleteDone } = this.props;
        // 计算已完成的todo数量
        let times = todos.reduce((preValue, element) => {
            return preValue + (element.done == true ? 1 : 0)
        }, 0)
        console.log(times);
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>已完成{times}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={deleteDone}>清除已完成任务</button>
            </div >
        )
    }
}