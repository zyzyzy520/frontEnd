import React, { Component } from 'react'
import Add from './components/Add';
import List from './components/List'
import Footer from './components/Footer';
import './App.css'
export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: 'xxxx', done: false },
            { id: '002', name: 'yyyy', done: false },
            { id: '003', name: 'zzzz', done: false },
        ],
        doneCount: 0
    }
    // 添加Todo
    addTodo = (todo) => {
        // 获取原数据
        let { todos } = this.state;
        // 更新状态
        this.setState({ todos: [todo, ...todos] })
    }
    // 删除Todo
    deleteTodo = (id) => {
        if (window.confirm('确认要删除嘛？')) {
            let { todos, doneCount } = this.state;
            let newTodos = todos.filter((element) => {
                if (element.id == id && element.done == true) doneCount--;
                return element.id != id;
            })
            this.setState({ todos: newTodos, doneCount });
        }
    }
    // 勾选或取消勾选
    changeChecked = (id, done) => {
        let { todos, doneCount } = this.state;
        // for (let i = 0; i < todos.length; i++) {
        //     if (todos[i].id == id) {
        //         todos[i].done = !todos[i].done;
        //         break;
        //     }
        // }
        let newTodos = todos.map((element) => {
            if (element.id == id) {
                if (done == true) doneCount++;
                else doneCount--;
                element.done = done;
            }
            return element
        })
        this.setState({ todos: newTodos, doneCount });
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Add addTodo={this.addTodo} />
                    <List {...this.state} deleteTodo={this.deleteTodo} changeChecked={this.changeChecked} />
                    <Footer {...this.state} />
                </div>
            </div>
        )
    }
}