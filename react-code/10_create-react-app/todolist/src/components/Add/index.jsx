import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default class Add extends React.Component {
    // 得到用户输入
    handleKeyUp = (event) => {
        // 判断按键是否为回车
        if (event.keyCode != 13) return;
        // 获取用户输入
        const { value } = event.target;
        // 判断用户输入是否合法
        if (value.trim() == "") return alert('输入内容不符合要求')
        // 准备一个todo
        const todo = { id: uuidv4(), name: value, done: false };
        this.props.addTodo(todo);
        event.target.value = "";
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}