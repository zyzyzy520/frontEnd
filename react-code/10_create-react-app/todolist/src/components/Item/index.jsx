import React from 'react';
import './index.css';

export default class Item extends React.Component {
    // 只要有东西在变，我们可以考虑把这个放在state里，这样可以自动渲染
    state = {
        mouseIsEnter: false,
    }
    handle = (flag) => {
        return () => {
            this.setState({ mouseIsEnter: flag })
        }
    }
    delete = (id) => {
        return () => {
            this.props.deleteTodo(id);
        }
    }
    render() {
        const { id, name, done, deleteTodo } = this.props;
        const { mouseIsEnter } = this.state;
        return (

            <li className={mouseIsEnter ? 'active' : ''} onMouseOver={this.handle(true)} onMouseOut={this.handle(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouseIsEnter ? 'inline-block' : 'none' }} onClick={this.delete(id)} >删除</button>
            </li>

        )
    }
}