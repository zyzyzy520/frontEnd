import React from "react";
import ReactDom from 'react-dom'
import './index.css'

export default class Item extends React.Component {
    state = { mouseIsEnter: false }
    handle = (mouseIsEnter) => {
        return () => {
            this.setState({ mouseIsEnter })
        }
    }
    delete = (id) => {
        return () => {
            this.props.deleteTodo(id);
        }
    }
    change = (id) => {
        return () => {
            this.props.changeChecked(id);
        }
    }
    render() {
        let { mouseIsEnter } = this.state;
        let { todo } = this.props;
        let display = mouseIsEnter ? 'inline-block' : 'none';
        return (
            <li className={mouseIsEnter ? 'active' : ''} onMouseOver={this.handle(true)} onMouseOut={this.handle(false)}>
                <label>
                    <input type="checkbox" checked={todo.done} onChange={this.change(todo.id)} />
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{ display }} onClick={this.delete(todo.id)}>删除</button>
            </li>
        )
    }
}