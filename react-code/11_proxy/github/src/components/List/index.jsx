import React from 'react'
import ReactDOM from 'react-dom'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends React.Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        error: ''
    }
    render() {
        // 解构赋值拿到属性
        const { users, isFirst, isLoading, error } = this.state;
        return (
            <div className="row">
                {
                    isFirst ? <h1>请输入搜索内容</h1> :
                        isLoading ? <h1>正在加载中</h1> :
                            error != '' ? <h1>{error} </h1> :
                                users.map((element) => {
                                    return (
                                        <div className="card" key={element.id}>
                                            <a href={element.html_url} target="_blank">
                                                <img alt="图片不可用" src={element.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{element.login}</p>
                                        </div>

                                    )
                                })
                }
            </div>
        )
    }
    componentDidMount() {
        // 订阅了一个名为updateState的消息，并将其绑定在自身实例属性上
        this.msgid = PubSub.subscribe('updateListState', (_, obj) => {
            // console.log(obj);
            this.setState(obj);
        })
    }
    componentWillUnmount() {
        // 通过自身属性找到该消息并取消订阅
        PubSub.unsubscribe(this.msgid)
    }
}