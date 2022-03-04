import React from 'react'
import ReactDOM from 'react-dom'
import Item from '../Item'
import './index.css'

export default class List extends React.Component {
    render() {
        let { todos, deleteTodo, changeChecked } = this.props
        return (
            <ul className="todo-main">
                {todos.map((element) => {
                    return <Item todo={element} key={element.id} deleteTodo={deleteTodo} changeChecked={changeChecked} />
                })}
            </ul>
        )
    }
}