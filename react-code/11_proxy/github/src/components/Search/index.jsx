import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

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
        // 3. 发送请求
        axios({
            url: `https://api.github.com/search/users?q=${value}`,
            method: 'GET'
        }).then(
            // 通过response.data可以拿到响应的数据
            response => { this.props.getInfo(response.data.items); console.log('成功发送请求') },
            err => { console.log('发送失败') }
        )
    }
}