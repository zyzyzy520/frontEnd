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

  

## 5.展示列表改进

添加第一次进入时的等待输入，和发送请求后正在加载中的效果

![image-20220305182110141](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220305182110141.png)

### 5.1 state初始化

``` javascript
  // state放在App组件里，那么对state里数据的任何操作都应该放到App组件中
  state = {
    users: [],
    isFirst: true,      //是否是第一次加载页面，显示提示信息
    isLoading: false,	//是否正在加载中
    error: false		//是否发生错误
  }
```



### 5.2 App组件修改

因为这些属性的都是放在App组件的state里，所以对这些属性的修改函数必须放到App组件里。考虑到逻辑都是一样的，直接设定state值，因此写成一个。然后将函数传递给子组件，让子组件可以调用函数，从而达到修改state的目的

``` javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import List from './components/List'

export default class App extends React.Component {
  // state放在App组件里，那么对state里数据的任何操作都应该放到App组件中
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: false
  }
  render() {
    return (
      <div className="container">
        <Search saveAppState={this.saveAppState} />
        <List {...this.state} />
      </div>
    )
  }
  saveAppState = (obj) => {
    this.setState(obj)
  }
}
```



### 5.3 Search组件修改

在发送请求前，调用App组件传递过来的函数，通知App组件修改state里的isFirst和isLoading属性

在收到服务器响应数据后，调用App组件传递过来的函数，通知App组件存储用户信息，将isLoading改为false，因为已经加载完毕了

如果从服务器收到的响应为error，通知App存储错误信息(err.message)，将isLoading改为false，因为已经加载完毕了

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
        let { saveAppState } = this.props;
        // 2.校验数据
        let value = keywordsContainer.current.value.trim();
        if (value == "") return alert('输入为空！')
        // 3.通知App组件修改isFirst，因为已经不是第一次搜索了；修改isLoading，因为马上要发请求了
        saveAppState({ isFirst: false, isLoading: true })
        // 4. 发送请求
        axios({
            url: `https://api.github.com/search/users?q=${value}`,
            method: 'GET'
        }).then(
            // 通过response.data可以拿到响应的数据
            response => {
                const { items } = response.data;
                // 通知App组件，拿到数据了，并且修改isLoading，因为已经加载完毕了
                saveAppState({ users: items, isLoading: false });
                console.log('成功发送请求')
            },
            err => { console.log('发送失败') }
        )
    }
}
```



### 5.4 List组件修改

首先要判断isFirst是否为true，是直接显示"请输入搜索内容"；不是---

判断isLoading是否为true，是说明正在加载中，显示"正在加载中"；不是--

判断error是否不为''，是说明出现错误，显示错误信息；不是---

展示获取到的数据

``` javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
export default class List extends React.Component {
    render() {
        // 解构赋值拿到属性
        const { users, isFirst, isLoading, error } = this.props;
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
}
```



## 6.组件间通信`(消息订阅-发布机制)`

目前兄弟组件间的通信是通过父组件完成的，但是这样就非常的不合理，App组件是不需要完成这些功能的。因此有一个**`消息订阅-发布机制`**

1. 工具库: PubSubJS

2. 下载: npm install pubsub-js --save / yarn add pubsub-js 

3. 使用: 

   1) import PubSub from 'pubsub-js' //引入

   2) `this.msgid = PubSub.subscribe('delete', function(_,data){ })`; //订阅，`第一个参数就是消息名称`。`回调函数的第一个参数无用，第二个参数才是接收到的发布消息 `

   3) PubSub.publish('delete', data) //发布消息，第一个参数就是消息名称，订阅和发布的消息名称要一致；第二个参数data是要发布的消息内容，可以是对象数组等任意变量
   4) `PubSub.unsubscribe(this.msgid)` //取消订阅

**`订阅消息的组件，在组件挂载成功时，进行订阅；组件即将卸载时，取消订阅`**

**`发布消息的组件，在对应逻辑位置发布消息`**

### 6.1 App组件修改

state存储的属性是不合理的，应该List组件存储

``` javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import List from './components/List'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }

}
```



### 6.2 List组件修改

将用户的信息，存储于List组件中，因为其需要用这些数据做展示

同时List组件要订阅Search组件的消息，Search组件一旦发布修改消息，List就能收到并对State里的属性进行修改，从而达到动态修改

**`一般是在List组件挂载成功后开始订阅消息`** ，**`然后在组件将要卸载的时候取消订阅`**

``` javascript
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
        this.msgid = PubSub.subscribe('updateState', (_, obj) => {
            this.setState(obj);
        })
    }
    componentWillUnmount() {
        // 通过自身属性找到该消息并取消订阅
        PubSub.unsubscribe(this.msgid)
    }
}
```



### 6.3 Search组件修改

在Search组件里会对List组件里进行修改，进行消息发布

``` javascript
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
                PubSub.publish('updateListState', { error: err.message, isLoading: false })
            }

        )
    }
}
```



## 7.fetch发送请求

-  fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求

### 7.1 未优化

``` javascript
fetch(`https://api.github.com/search/users?q=${value}`).then(
	response => {
        console.log('联系服务器成功了');
        return response.json()
    }, 
    error => {
        console.log('联系服务器失败了', error);
        return new Promise(()=>{})
    }
).then(  //前面.then返回的是Promise对象
	response => {console.log('获取数据成功了', response);},
    errror => {console.log('获取数据失败了', error);}
)
```

### 7.2 优化

``` javascript
fetch(`https://api.github.com/search/users?q=${value}`).then(
	response => {
        console.log('联系服务器成功了');
        return response.json()
    }
).then(  //前面.then返回的是Promise对象
	response => {console.log('获取数据成功了', response);},
).catch(
	error => {console.log('请求出错', error)};   //统一处理请求出错
)
```



### 7.3 进一步优化

``` javascript
async function sendRequest(){
	try(
        const response = await fetch(`https://api.github.com/search/users?q=${value}`)
        const data = await response.json();
    	console.log(data);
    	PubSub.publish('updateListState', { users: items, isLoading: false })
	) catch(error){
    	console.log('请求出错', error);
    	PubSub.publish('updateListState', { error: err.message, isLoading: false })
	}    
}

```



## 8. 知识点概括

### 8.1 设计

- 状态设计时要考虑全面，例如带有网络请求的组件，考虑请求失败怎么办。



### 8.2 ES6小知识点：解构赋值+重命名

``` javascript
let obj = {a: b:1}
const {a} = obj;   //传统解构赋值
const {a:{b}} = obj; //连续解构赋值
const {a:{b:value}} = obj; //连续解构赋值+重命名
```



### 8.3 `消息订阅与发布机制`

1. `先订阅，在发布`
2. 适用于`任意组件间通信`
3. 在组件挂载完毕时componentDidmount开启订阅，在组件卸载时componentWillUnmount中取消订阅



### 8.4 fetch发送请求

