import React from 'react';
import './index.css';

export default class Item extends React.Component {
    // 只要有东西在变，我们可以考虑把这个放在state里，这样可以自动渲染
    state = {
        mouseIsEnter: false,
    }

    // 鼠标移入移出
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouseIsEnter: flag })
        }
    }

    // 删除按钮
    handleDelete = (id) => {
        return () => {
            this.props.deleteTodo(id);
        }
    }

    // 勾选OR取消勾选
    handleChecked = (id) => {
        return (event) => {
            this.props.changeChecked(id, event.target.checked);
        }
    }

    render() {
        const { id, name, done } = this.props;
        const { mouseIsEnter } = this.state;
        return (

            <li className={mouseIsEnter ? 'active' : ''} onMouseOver={this.handleMouse(true)} onMouseOut={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChecked(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouseIsEnter ? 'inline-block' : 'none' }} onClick={this.handleDelete(id)} >删除</button>
            </li>

        )
    }
}