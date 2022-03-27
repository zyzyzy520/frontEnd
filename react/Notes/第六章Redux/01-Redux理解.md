## 1. redux`是什么`

1. redux是一个专门用于做`状态管理`的JS库(不是react插件库)。

2. 它可以用在react, angular, vue等项目中, 但基本与react配合使用。

3. 作用: 集中式管理react应用中多个组件`共享`的状态。



## 2.什么情况下需要使用redux

1. `某个组件的状态，需要让其他组件可以随时拿到`（共享）。

2. `一个组件需要改变另一个组件的状态`（通信）。

3. 总体原则：能不用就不用, 如果不用比较吃力才考虑使用。



## 3.redux工作流程

![image-20220320143712669](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220320143712669.png)

Action Creators：分析出组件做什么事情，将action类型和数据组装成action对象交给Store

Store：将之前的状态和action传递给Reducers。Store存储的数据类型取决于Reducers返回的数据类型

Reducers：完成action后，将新的状态传递给Store。`只进行最基本的操作`，一些复杂的业务逻辑，在利用redux分发前就处理好



`store是提前创建好的`，组件进行调用时，引入即可。但是`创建action`和`分发action给reducer`是需要自己在组件编写时自行调用的

### 初始化

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220320143951071.png" alt="image-20220320143951071" style="zoom:150%;" />

初始化的时候，Store传递给Reducers的previousState是undefined，action里没有data，只有type。type=@init@_随机数

Reducers需要自己根据previousState是什么，来给Store返回初始化数据。



## 4.redux的核心概念

### 4.1.1 action

1. 动作的`对象`

2. 包含`2个属性`

- `type`：`标识`属性, 值为`字符串`, 唯一, `必要`属性

- `data`：`数据`属性, 值`类型任意`, `可选`属性

3. 例子：{ type: 'ADD_STUDENT',data:{name: 'tom',age:18} }



### 4.1.2. reducer

1. 用于`初始化`状态、`加工`状态。

2. 加工时，根据`旧的state和action`， `产生新的state`的纯函数。



### 4.1.3 store

1. 将state、action、reducer联系在一起的对象

2. 如何得到此对象?

   - `import {createStore} from 'redux'`

   - `import reducer from './reducers'`

   - `const store = createStore(reducer)`

3. 此对象的功能?

- `getState`(): 得到state

- `dispatch`(action): `分发action`, `触发reducer调用, 产生新的state`

- `subscribe`(listener): 注册监听, `当产生了新的state时, 自动调用`



## 5. redux的核心API

### 5.1 createstore()

作用：`创建包含指定reducer的store对象`



### 5.2 store对象

1. 作用: redux库最核心的管理对象

   

2. 它内部维护着:

- state

- reducer

  

3. 核心方法:

-  getState()

-  dispatch(action)

-  subscribe(listener)

  

4. 具体编码:

- store.getState()

- store.dispatch({type:'INCREMENT', number})

- store.subscribe(render)



### 5.3 applyMiddleware()

作用：应用上基于redux的中间件(插件库)



### 5.4 combineReducers()

作用：`合并多个reducer`函数



## 6. redux异步编程

### 6.1 理解：

- redux`默认是不能进行异步处理的`, 

- 某些时候应用中需要在redux中执行异步任务(ajax, 定时器)



### 6.2 使用异步中间件

npm install --save redux-thunk



## 7. react-redux

### 7.1 理解

1. 一个react插件库

2. 专门用来简化react应用中使用redux



### 7.2 react-Redux将所有组件分成两大类

#### 7.2.1 UI组件

1) `只负责 UI 的呈现`，不带有任何业务逻辑

2) `通过props接收数据`(一般数据和函数)

3) `不使用任何 Redux 的 API`

4) 一般保存在`components`文件夹下



#### 7.2.2 容器组件

1) `负责管理数据和业务逻辑`，不负责UI的呈现

2) `使用 Redux 的 API`

3) 一般保存在`containers`文件夹下



#### 7.2.3 相关API

1. Provider：让所有组件都可以得到state数据

![img](file:///C:\Users\zayn\AppData\Local\Temp\ksohtml\wps91F3.tmp.png)

2. connect：用于包装 UI 组件生成容器组件

![img](file:///C:\Users\zayn\AppData\Local\Temp\ksohtml\wps91F4.tmp.png)

3. mapStateToprops：将外部的数据（即state对象）转换为UI组件的标签属性

![img](file:///C:\Users\zayn\AppData\Local\Temp\ksohtml\wps91F5.tmp.png)

4. mapDispatchToProps：将分发action的函数转换为UI组件的标签属性