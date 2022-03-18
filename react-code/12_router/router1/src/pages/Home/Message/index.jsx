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
    pushShow = (id, title) => {
        // 将想要跳转的路径根据Detail组件接收参数的方式，调整对应的格式压入
        // 因为每个按钮跳转的路径不一样，所以用到高阶函数
        return () => {
            // 1.params参数格式
            // this.props.history.push(`/home/message/detail/${id}/${title}`)

            // 2.search参数格式
            // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

            // 3.state参数格式
            this.props.history.push(`/home/message/detail/`, { id, title })
        }

    }

    replaceShow = (id, title) => {
        // 将想要跳转的路径根据Detail组件接收参数的方式，调整对应的格式压入
        // 因为每个按钮跳转的路径不一样，所以用到高阶函数
        // replace和push的不一样是，替换栈顶路径，也就是没有办法回退到上一个
        return () => {
            // 1.params参数格式
            // this.props.history.replace(`/home/message/detail/${id}/${title}`)

            // 2.search参数格式
            // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

            // 3.state参数格式
            this.props.history.replace(`/home/message/detail/`, { id, title })
        }
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

                                <button onClick={this.pushShow(Element.id, Element.title)}>push跳转到消息1</button>
                                <button onClick={this.replaceShow(Element.id, Element.title)}>replace跳转到消息1</button>
                            </li>
                        )
                    })}

                </ul>
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

                {/* 无需声明接收search参数 */}
                <Route path='/home/message/detail' component={Detail} />

                {/* 无需声明接收state参数 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}
            </div>
        )
    }
}
