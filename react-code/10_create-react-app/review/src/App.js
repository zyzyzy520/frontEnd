import React from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer';
import './App.css'

export default class App extends React.Component {
  state = {
    todos: [
      { id: '001', name: '抽烟', done: false },
      { id: '002', name: '喝酒', done: false },
      { id: '003', name: '烫头', done: false }
    ]
  }
  render() {
    // render函数里的this指向组件实例
    let { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add add={this.addTodos} />
          <List todos={todos} deleteTodo={this.deleteTodos} changeChecked={this.changeChecked} />
          <Footer todos={todos} deleteDone={this.deleteDone} />
        </div>
      </div>
    )
  }
  // 1.添加一条todo
  addTodos = (todo) => {
    let { todos } = this.state;
    this.setState({ todos: [...todos, todo] })
  }
  // 2.删除一条todo
  deleteTodos = (id) => {
    if (window.confirm('确认要删除嘛？')) {
      let { todos } = this.state;
      todos = todos.filter((element) => {
        return element.id != id;
      })
      this.setState({ todos })
    }
  }
  // 3.勾选和取消勾选
  changeChecked = (id) => {
    let { todos } = this.state;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        todos[i].done = !todos[i].done;
        break;
      }
    }
    this.setState({ todos: todos })
  }
  //4.删除所有已完成任务
  deleteDone = () => {
    let { todos } = this.state;
    // 过滤掉所有已完成的任务
    todos = todos.filter((element) => {
      return element.done == false;
    })
    console.log(todos)
    this.setState({ todos: todos });
  }
}