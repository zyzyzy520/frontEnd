import React, { Component } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'message1' },
            { id: '02', title: 'message2' },
            { id: '03', title: 'message3' }
        ]
    }
    render() {
        let { messageArr } = this.state;
        return (
            <div>
                <ul>

                    {messageArr.map((Element) => {
                        return (
                            <li key={Element.id}>
                                {/* 向路由组件传递params参数 */}
                                {/* <Link to={`/home/message/detail/${Element.id}/${Element.title}`} >{Element.title}</Link>&nbsp;&nbsp; */}

                                {/* 向路由组件传递search参数 */}
                                {/* <Link to={`/home/message/detail?id=${Element.id}&title=${Element.title}`} >{Element.title}</Link>&nbsp;&nbsp; */}

                                {/* 向路由组件传递state参数 */}
                                <Link replace={true} to={{ path: '/home/message/detail', state: { id: Element.id, title: Element.title } }}>{Element.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })}

                </ul>
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

                {/* 无需声明接收search参数 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}

                {/* 无需声明接收state参数 */}
                <Route path='/home/message/detail' component={Detail} />
            </div>
        )
    }
}
