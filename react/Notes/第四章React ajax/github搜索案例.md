## 1.实现静态页面



## 2.获取用户输入，发送请求

``` javascript
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
            response => { console.log('成功发送请求', response.data) },
            err => { console.log('发送失败') }
        )
    }
}
```



## 3.分析从服务端拿到的数据

返回的是一个对象

对象里有一个属性`items`，值是一个`数组`，数组里的`每个元素存储着以用户输入的内容为关键词搜搜到的用户信息`

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220304203610957.png" alt="image-20220304203610957" style="zoom:80%;" />

而我们需要的是头像URL、名字、主页连接

![image-20220304204046694](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220304204046694.png)



## 4.展示列表

- `向服务器发送请求，并拿到响应数据的是在Search组件`
- `但是展示数据列表的是在List组件`
- Search组件和List组件是兄弟组件，它们之间的信息交流需要通过共同的父亲组件App完成
- 在`App组件里，给state对象绑定一个属性userInfo`，值是一个数组存储服务器返回的用户信息，因为userInfo是在App组件的state中，所以对userInfo修改的代码都应该放在App组件里。



- 所以逻辑顺序应该是：在Search组件中点击提交按钮后，在回调函数里获取用户输入并向服务器发送请求，拿到服务器返回的数据后，调用App传过来的函数改变state里的userInfo；而在List组件，接收App组件传过来的userInfo，遍历组合成jsx标签格式，显示在页面中

  ``` javascript
  //App组件
  import React from 'react'
  import ReactDOM from 'react-dom'
  import Search from './components/Search'
  import List from './components/List'
  
  export default class App extends React.Component {
    // state放在App组件里，那么对state里数据的任何操作都应该放到App组件中
    state = { users: [] }
    render() {
      return (
        <div className="container">
          <Search getInfo={this.getInfo} />
          <List userInfo={this.state.users} />
        </div>
      )
    }
    getInfo = (usersInfo) => {
      console.log(usersInfo);
      this.setState({ users: usersInfo });
    }
  }
  
  //Search组件
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
              // 通过response.data可以拿到响应的数据，调用父组件函数修改State
              response => { this.props.getInfo(response.data.items); console.log('成功发送请求') },
              err => { console.log('发送失败') }
          )
      }
  }
  
  //List组件
  import React from 'react'
  import ReactDOM from 'react-dom'
  import './index.css'
  export default class List extends React.Component {
      render() {
          const { userInfo } = this.props
          return (
              <div className="row">
                  {
                      userInfo.map((element) => {
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
  }
  ```

  

