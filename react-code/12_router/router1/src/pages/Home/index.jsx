import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../Components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    {/* 编写路由链接 */}
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                </div>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/home/news" component={News} />
                    <Route path="/home/message" component={Message} />
                    <Redirect to="/home/news" />
                </Switch>
            </div>
        )
    }
}