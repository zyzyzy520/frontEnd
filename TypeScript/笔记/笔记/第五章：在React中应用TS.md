# 在React中应用TS

## 1、初始化一个React项目+TS

> 可以使用npm命令

- 利用npx的特性


```bash 
$  npx create-react-app react-ts --template typescript
```

- 解释：  `npx create-react-app **react-ts（项目名）** --template typescript`


> vscode打开项目，`code .`

- Vuetur + eslint 校验vue项目


- 假设没有用umi脚手架，用prettier插件就可以了配置自动保存就行了。在配置里勾选自动保存和在每行末尾添加分号；
  - ![image-20220703121915291](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220703121915291.png)
  - ![image-20220703121922181](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220703121922181.png)

> npm或者yarn 一定要配置淘宝镜像，否则会很慢

创建的新项目，没有js文件，都是ts文件，原来的jsx变成 了tsx

`tsx` 表示在**项目中需要用到react组件**，**JSX语法**， 需要使用TypeScript, 必须使用tsx结尾

如果**没有jsx语法**，用`ts`结尾

## 2、useEffect 处理副作用的hook

```js
useEffect(() => {
    
    return  () => {
        // 可以返回函数 可以在组件卸载时 或者是 组件执行完上一次更新时 执行清除定时器的任务
    }
}, []) // 三种情况  
```

* 第一种情况 ==不传第二个参数==`useEffect()` 组件==每次更新都执行==回调
* 第二个情况  传入一个==空数组==`useEffect(,[])` 只会在==渲染时(组件挂载时)==执行一次回调
* 第三种情况，==数组中有依赖项==`useEffect(,[stateVal])`  只要依==赖项发生变化== 回调就会执行

TS与JS的用法几乎一样，不需要做处理

## 3、useState 

### 3.1 useState的使用

- `useState`hook是一个泛型函数，接收一个类型变量来指定状态的类型。
- 如果是==单个变量单个值==的情况下，可以==不写类型变量==，只要提供了初始值，ts会自动根据初始值来推断出其类型。如果ts自动推断出来的类型不准确，还是得显示指定泛型类型

```js
const [count, setCount] = useState(0)
const [count, setCount] = useState<number>(0) // 此时不需要指明类型 因为有类型推导
```

### 3.2 useState明确指定泛型类型

- 如果定义的是==数组或者对象==, 此时这种情况==必须指定类型==，明确泛型类型
  - 虽然都是数组、对象，但是项目开发中不同需求所需要的数组结构、对象结构是不同的。因此需要明确指定其类型。
  - 如果不指定类型，会变成never类型
- ==先有类型，再写逻辑代码来使用该类型的数据==
- 比如，对于对象和数组来说，就应该在使用前先明确指定要用到的对象的类型、数组的类型等等。

```js 
// 先自定义个对象类型
type Custom = {
    id: number,
    name: string
}
// 数组中只能出现Custom类型的数据
const [custom, setCustom] = useState<Custom[]>([]);
const [channel, setChannel] = useState<Array<{ id: number, name: string }>>([])
```

## 4、useRef

- 使用`ref`对象，==获取进行DOM操作==。相当于是一个==容器==
- ==必须显式指明泛型==了。==必须要指明类型==

```js
// 假设操作的是input标签，则指定类型为：HTMLInputElement
const inputRef = useRef<HTMLInputElement>(null)

// 此时，把鼠标放在变量 inputRef 上，也可以看到inputRef.current属性的类型为： HTMLInputElement | null。
// 其中，HTMLInputElement 是我们明确指定的类型，而null是参数的类型。因为再创建ref对象时，JSX对应的DOM还没有创建，所以是null

// JSX中使用ref：
<input ref={inputRef} />
```

使用ref对象，获取进行DOM操作

- 注意：因为current属性的类型是： `HTMLInputElement | null`。所以必须从类型中去掉`null`才能继续操作，否则`inputRef.current.value`会报错。节点实际上是`inputRef.current`
- 使用JS中的==可选连接操作符(`?`)==来实现
- 原理：`?`会判断current属性是否为空值(null或undefined)，如果不是空值，就继续访问value值；如果是空值，不会继续访问value
  - 如果`inputRef.current`不为空，其类型为`HTMLInputElement`，就可以拿到value值
  - 如果`inputRef.current`为空，其类型为`null`，不再继续访问value，代码就不会报错了。

```js
// 可选链操作符
console.log(input.current?.value) //此时表示 如果current为null 或者undeifned 不再执行
```

- 技巧：在JSX中如何获取一个DOM对象的类型？鼠标移动到JSX元素上，就会显示出来该元素的类型

```js
// 非空断言  一定要保证非空断言的变量不为空
console.log(input.current!.value)  // 主观上的判断 只会屏蔽ts的提示错误 而不会影响js执行的错误
```

```js
// 流程控制
if (input.current) {
    // 此时不需要进行类型非空断言 因为if帮助屏蔽了ts的空的类型
    console.log(input.current.value)
}
```

## 5、useHistory用法

- `useHistory`hook是一个==泛型函数==，接收一个类型变量来指定额外数据`state`的类型
- `useHistory`hook用来实现路由之间的跳转。根据跳转时是否需要携带额外数据，使用方式不同

### 5.1 路由跳转不携带额外数据，用法与JS一样

```js
import { Route, Link, useHistory } from 'react-router-dom' 
const history = useHistory()
 history.push("/login") // 不用关心 类型的问题
```

### 5.2 路由跳转时携带额外数据，需要指定泛型类型

- 注意：泛型类型指定的是额外数据`state`的类型

```js
import { Route, Link, useHistory } from 'react-router-dom'
// 1. 定义要传递的参数的类型
type CustomType = {
  name: string,
  age: number,
  sex: string
}

// 2.利用接口继承类型，?表示可选
interface CustomType2 extends CustomType {
  money?: number
}
  
// 3. 指定要传递的参数的泛型
const history = useHistory<CustomType2>();
<button onClick={() => {
  // 4. 第一个参数是浏览器网址显示的跳转的地址，第二个参数是要传递的参数
   history.push('/home', {
          name: '123',
          age: 12,
          sex:'12'
        })
   }}>
        跳转到首页
</button>
```

## 6、useLocation用法

- `useLocation`hook是一个==泛型函数==，接收一个类型变量来指定接收的`state`类型，==与`useHistory`的泛型对应==
- `useLocation`hook用来获取路由地址相关信息。根据==是否需要获取路由跳转时携带的额外数据state==，使用方式不同

### 6.1 不获取state数据

```js
import {useLocation} from 'react-router-dom'
const location = useLocation()
```

### 6.2 获取state数据

- 如果跳转路由时没有传递state，state的值就为undefined。所以，此处指定类型时也应该考虑到没有传递state的情况

```js
import {useLocation} from 'react-router-dom' 
const location = useLocation<{ name: string } | undefined>()
 if (location.state) {
     console.log(location.state.name);
 }
console.log(location.state?.name);


```

- 注意：因为`Home`和`Login`都需要指定额外数据`state`的类型，因此可以==将类型存放到类型声明文件中==，实现类型复用。

## 7、userParams用法

- `useParams`也是接收泛型的hook函数，接收一个类型变量来指定`params`对象的类型
- 根据配置路由规则时，路由参数是否可选，使用方式不同

### 7.1 路由参数必选

``` typescript
// Link传递参数
<Link to='publish/123'>
// Route接收参数
<Route path='publish/:id'>

// 因为路由规则中要求参数一定存在，此处不需要考虑不存在的情况
const params = useParams<{ id: string }>()
console.log(params.id)
```

### 7.2 路由参数可选

```js
// Link传递参数
<Link to='publish/123'>
// Route接收参数
<Route path='publish/:id?'>

// 因为路由规则中参数是可选的，所以，此处需要考虑id不传的情况，让id变为可选属性
const params = useParams<{ id?: string }>()
console.log(params.id)
```

## 8、useSelector用法

- `useSelector`hook是一个泛型函数，接收两个类型变量，分别来指定：
  - 第一个类型变量：指定 Redux 仓库 ==`state` 的类型==
  - 第二个类型变量：指定要获取==状态的变量类型==
- 参数是一个回调函数，返回状态变量里的一些属性值

- 第一种用法，==传入两个泛型的类型==


```js
const todos = useSelector<RootState, ToDoType>(state => state.todos)
```

- 第二种用法，==指定useSelector的回调参数的类型==


```js
const todos = useSelector((state: { todos: ToDoList }> state.todos)
```

思考？ 

state类型是每次都手动这么写吗 ？

不需要

## 9、使用ReturnType可以反推出state的状态类型

```js
type RootState = ReturnType<typeof  store.getState>
```

## 10、React路由的使用

- 步骤

  1. 安装路由`yarn add react-router-dom@5.3.0`
  2. 安装==路由的类型声明文件==：`yarn add @types/react-router-dom`
  3. 在`pages`目录中，新建组件`Home.tsx`和`Login.tsx`
  4. 配置路由规则

- 核心代码

  - index.tsx

    - ``` typescript
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import './index.css';
      import App from './App';
      import {BrowserRouter as Router} from 'react-router-dom'
      
      const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
      );
      root.render(
        <Router>
          <App />
        </Router>
      );
      
      ```

  - pages/Home.tsx

    - ``` typescript
      import React from 'react'
      
      export default function Home() {
        return (
          <div>这是主页</div>
        )
      }
      
      ```

  - pages/Login.tsx

    - ``` typescript
      import React from 'react'
      
      export default function Login() {
        return (
          <div>这是登陆页面</div>
        )
      }
      
      ```

  - App.tsx
