## 1. React Hook/Hooks是什么?

(1). Hook是React 16.8.0版本增加的`新特性/新语法`
(2). 可以让你`在函数组件中使用 state `以及其他的 React 特性



## 2.三个常用的Hook

``` javascript
(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
```

## 3. State Hook

(1). State Hook`让函数组件也可以有state状态`, 并`进行状态数据的读写操作`
(2). 语法: **`const [xxx, setXxx] = React.useState(initValue)`**  
(3). useState()说明:
        参数: `第一次初始化指定的值在内部作缓存`
        返回值: 包含2个元素的数组, `第1个为内部当前状态值`,` 第2个为更新状态值的函数`
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其`覆盖原来的状态值`
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其`覆盖原来的状态值`

(5). 虽然`每次渲染会重新调用函数式组件`，`每次会经过初始化语法`，但是React会缓存状态，每次会先问缓存有没有该状态，有就会从缓存中读取

![image-20220326154030355](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326154030355.png)

## 4. Effect Hook

(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于**`模拟类组件中的生命周期钩子`**)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 

``` javascript

React.useEffect(() => { 
    // 在此可以执行任何带副作用操作
    return () => { // 在组件卸载前执行
        // 在此做一些收尾工作, 比如清除定时器/取消订阅等
    }
}, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
```

(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 



(5). 注意

useEffect有两个参数，`第一个参数是一个回调函数`，`第二个参数是一个数组`。第二个参数代表着`想要监听的状态`

- 如果`为空`，则代表着`不监控`，那么就相当于是`componentDidMount`，回调函数会`在组件挂载后执行`

  ![image-20220326174541553](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326174541553.png)

- 如果`不为空`，`监控状态的变化`，相当于是`componentDidMount+componentDisUpdate`，回调函数会`在组件挂载后，以及组件更新后执行`

- ![image-20220326174709576](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326174709576.png)

- 如果`不写`，就代表着`监控所有状态的变化`

在`第一个参数回调函数里，可以return一个函数`，这个函数相当于是`componentWillUnmount`，回调函数会`在组件卸载前执行`

![image-20220326174519367](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326174519367.png)

![image-20220326174943834](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326174943834.png)



## 5.Ref Hook

(1). Ref Hook可以`在函数组件中存储/查找组件内的标签或任意其它数据`
(2). 语法: **`const refContainer = useRef()`**
(3). 作用:保存标签对象,功能与React.createRef()一样

![image-20220326180121112](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326180121112.png)

![image-20220326180128459](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326180128459.png)

![image-20220326180133506](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326180133506.png)
