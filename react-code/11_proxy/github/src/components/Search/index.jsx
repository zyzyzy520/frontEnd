import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import PubSub from 'pubsub-js';

export default class Search extends React.Component {
    // 创建ref容器
    keywordsContainer = React.createRef();
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={this.keywordsContainer} />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
    search = () => {
        // 1.获取用户输入，通过容器拿到的ref。需要.current才能拿到节点
        let { keywordsContainer } = this;
        // 2.校验数据
        let value = keywordsContainer.current.value.trim();
        if (value == "") return alert('输入为空！')
        // 3.发布消息通知List组件修改isFirst，因为已经不是第一次搜索了；修改isLoading，因为马上要发请求了。发送过去的消息名称是updateListState, 消息内容是一个对象
        PubSub.publish('updateListState', { isFirst: false, isLoading: true })
        // 4. 发送请求
        axios({
            url: `https://api.github.com/search/users?q=${value}`,
            method: 'GET'
        }).then(
            // 通过response.data可以拿到响应的数据，同时也已加载完毕，拿到数据
            response => {
                const { items } = response.data;
                // 发布消息通知List组件修改users，isLoading；因为已经拿到消息，加载完毕了
                PubSub.publish('updateListState', { users: items, isLoading: false })
                console.log('成功发送请求')
            },
            err => {
                console.log('发送失败')
                // 发布消息通知List组件修改请求失败后，存储错误信息，将isLoading改为false
                //注意这里的err是对象，通过err.message才能拿到具体的错误信息
                // saveAppState({ error: err.message, isLoading: false });
                PubSub.publish('updateListState', { error: err.message, isLoading: false })
            }

        )
    }
}