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
        ]
    }
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Add />
                    <List {...this.state} />
                    <Footer />
                </div>
            </div>
        )
    }
}