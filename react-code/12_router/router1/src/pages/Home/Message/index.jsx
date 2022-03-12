import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' }
        ],
        id: '01',
        title: 'Zhou'
    }
    render() {
        let { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {messageArr.map((Element) => {
                        return (
                            <li>
                                {/* 向路由组件传递参数 */}
                                <Link key={Element.id} to={`/home/message/detail/${Element.id}/${Element.title}`} onClick={this.change(Element.id, Element.title)}>{Element.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })}
                </ul>
                {/* 声明接收params参数 */}
                {/* <Route path='/home/messgae/detail/:id/:title' component={Detail} /> */}
                <ul>
                    <li>ID:{this.state.id}</li>
                    <li>TITLE:{this.state.title}</li>
                    <li>CONTENT:</li>
                </ul>
            </div>
        )
    }
    change = (id, title) => {
        return () => {
            console.log(1);
            this.setState({ id, title })
        }
    }
}
