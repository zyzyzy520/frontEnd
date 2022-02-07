import React, { Component } from 'react'
import Add from './components/Add';
import List from './components/List'
import Footer from './components/Footer';
import './App.css'
export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: 'xxxx', done: true },
            { id: '002', name: 'yyyy', done: false },
            { id: '003', name: 'zzzz', done: false },
        ]
    }
    addTodo = (todo) => {
        // 获取原数据
        let { todos } = this.state;
        // 更新状态
        this.setState({ todos: [todo, ...todos] })
    }
    deleteTodo = (id) => {
        if (window.confirm('确认要删除嘛？')) {
            let { todos } = this.state;
            let newTodos = todos.filter((element) => {
                return element.id != id;
            })
            this.setState({ todos: newTodos });
        }

    }
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Add addTodo={this.addTodo} />
                    <List {...this.state} deleteTodo={this.deleteTodo} />
                    <Footer />
                </div>
            </div>
        )
    }
}