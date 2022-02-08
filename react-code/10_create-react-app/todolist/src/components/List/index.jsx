import React from 'react';
import Item from '../Item';
import './index.css'

export default class List extends React.Component {

    render() {
        const { todos, deleteTodo } = this.props;
        return (
            <ul className="todo-main">
                {todos.map((element) => {
                    return (
                        <Item key={element.id} {...element} deleteTodo={deleteTodo} changeChecked={this.props.changeChecked}></Item>
                    )
                })
                }
            </ul >
        )
    }
}