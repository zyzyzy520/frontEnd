import React from 'react';
import Item from '../Item';
import './index.css'

export default class List extends React.Component {

    render() {
        const { todos } = this.props;
        return (
            <ul className="todo-main">
                {todos.map((element) => {
                    return (
                        <Item key={element.id} {...element} ></Item>
                    )
                })
                }
            </ul >
        )
    }
}