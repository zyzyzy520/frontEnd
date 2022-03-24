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