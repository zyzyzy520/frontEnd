import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default class Add extends React.Component {
    addTodo = (event) => {
        // 只有弹起的键是空格时才进行后续操作
        if (event.keyCode != 13) return;
        // event是事件对象，通过event.target可以拿到触发事件的对象，即输入框
        let { value } = event.target;
        // 去除空格
        if (value.trim() == "") return alert('输入不符合要求')
        // 生成新Todo
        let newTodo = { id: uuidv4(), name: value, done: false };
        // 调用父组件的函数添加新的Todo
        this.props.add(newTodo);
        // 添加完后，清空输入框
        event.target.value = ""

    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.addTodo} />
            </div>
        )
    }
}