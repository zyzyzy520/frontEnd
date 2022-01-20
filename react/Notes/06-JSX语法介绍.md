# JSX

## 1.什么是JSX

HTML：网页的布局，`呈现数据`

XML：可扩展的标签语言，早期被用于`存储和传输数据`。后来主要用json存储和传输数据

![img](https://api2.mubu.com/v3/document_image/0d42b1c5-84a1-46a3-be5c-79a0e8e509ff-10071129.jpg)

### 1.1 JSX简述

- `JSX = javaScript + XML`。 是JS的一种扩展语法，结合了JS和XML的语法，相当于`将JS和UI效果呈现做了一个串联`。学习JSX，第一部分是`UI`，第二部分是`JS核心语法部分`。

- 在JSX中能使用JS所有语法

- **`React思想`**认为渲染逻辑本质上与其他UI逻辑内在耦合，比如，在UI中需要绑定处理

  事件、在某些时刻状态发生变化时需要通知到UI ，以及需要在UI中展示准备好的数

  据。

### 1.2 **JSX优点**

- JSX执行更快，因为它在编译为JS代码后进行了优化

- JSX是类型安全的，在编译过程中就能发现错误

- 使用 JSX编写模板更简单快速

## 2.JSX嵌入表达式

- 在`将虚拟DOM渲染到真实DOM的时候`，遇到`<>`标签就解析为`html`代码，遇到`{}`就按照JS代码 来解析，这就是我们的规则。
- 可以在`大括号内`放置任何**`有效的 JavaScript (JSX)表达式`**(表达式是由`数字、运算符、变量`等组成的式子。`最终都会有一个结果`，**`简单判断方法`**：将值赋给一个变量，看变量会不会有值)
- 在其它地方用正常的JS格式，在创建虚拟节点的时候用上述规则
- `标签间嵌入JSX代码或变量，一定要用{}包裹`

``` javascript
function App() {
  return (
    //必须要有一个父元素，因为render里的参数只能有一个虚拟节点
    <div>
      {/* //字符串运算 */}
      <h1>Hello, {name + 'Your age is' + age}</h1>
      {/* //数字运算*/}
      <h1>{1 + 2}</h1>
      {/* 条件表达式，并没有显示true*/}
      <h1>{age > 20}</h1>
      {/* 条件表达式，有返回结果 */}
      <h1>{age > 20 ? 'yes' : 'no'}</h1>
      {/* 对象表达式 */}
      <h1>{student.name + student.garde}</h1>
      {/* 函数表达式 */}
      <h1>{fn()}</h1>
      {/* 数组表达式 */}
      <h1>{stu}</h1>
      {/* JSX语法标签 */}
      {temp}
      {/* JSX数组表达式 */}
      {arr};
      {/* 一般数组转化成JSX数组 */}
      {stuDom}
    </div>
  );
}

let name = "ZHOUYU", age = 22;
let student = {
  name: 'ZY',
  garde: 100
}
function fn() {
  return 'Hi';
}
let stu = ["Li", "ZHOU", "YU"];

let temp = <h1>JSX语法标签</h1>

let arr = [<h1>JSX数组元素1</h1>, <h2>JSX数组元素2</h2>, <h3>JSX数组元素3</h3>]
//将一般数组转化为JSX数组， 然后直接放到虚拟节点中
let stuDom = stu.map(Element => {
  return <h1>{Element}</h1>
})
```

> 尤其注意虚拟节点中的{变量}可以直接为`JSX语法变量`，或者`JSX数组`
>
> **`数组表达式非常重要！！！ `**

备注：

- 可以观察下面两个数组的区别，第一个生成的是JSX数组[<h1>Li</h1>, <h1>ZHOU/h1> , <h1>YU/h1> ]（`常用于将子节点放入根节点`）。第二个是字符串数组['<h1>Li</h1>', '<h1>ZHOU/h1>' , '<h1>YU/h1> ']
- 第一个直接放到生成虚拟节点的JSX语法中，可以正常生成对应样式；但第二个放到生成虚拟节点的JSX语法中，会被当做字符串输出

``` javascript
let stu = ["Li", "ZHOU", "YU"];
//将一般数组转化为JSX数组， 然后直接放到虚拟节点中
let stuDom = stu.map(Element => {
  return <h1>{Element}</h1>
})
let stuDom2 = stu.map(Element =>{
    return '<h1>'+Element+'</h1>'
})
```

![image-20220116103636064](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220116103636064.png)

## 3.JSX防止注入攻击

### 3.1注入攻击是什么？

- 用户在输入内容的时候，填写了了`<script> alert('这页面有毒，大家快退出！') </script>`这样一段字符串，未将其处理直接存入数据库中
- 从数据库拿出数据进行渲染就会出现下面这种情况
- 所有访问这个页面的人都会看见这个弹框，更有甚着，如果利用这种方式，盗取一些用户信息，cookies之类的发给其余网站，那可能导致用户信息财产的损失

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>用户留言列表：</h3>
    <ul>
        <li>用户1：哈哈 我抢到沙发了</li>
        <li>用户2：不错不错 我是二楼</li>
        <li>用户3：哈哈 三楼也还可以</li>
        <li>用户4：<script> alert('这页面有毒，大家快退出！') </script></li>
        <li>用户5：五楼不开心</li>
    </ul>
</body>
</html>

```

- 总结：页面上输入的内容中带有可执行的javascript，而你`使用这段输入内容的时候`，让`这段用户提供的代码`执行了，也就是`你写的代码，执行了非你写的代码`，就会导致网页的不可行乃至更严重的安全威胁

### 3.2JSX防止注入攻击

- `React DOM 在渲染所有输入内容之前，默认会进行转义`。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。`所有的内容在渲染之前都被转换成了字符串`。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。
- 下面的代码中，我们在模板中写了alert()函数，最终在解析的时候，会将alert函数看成是字符串来解析。

``` javascript
const template = <script> alert() </script> 
ReactDOM.render( template, document.getElementById('root') );
```

## 4.JSX样式引入

### 4.1行内样式

``` html
<ul>
    <li style ={{color:"red", fontSize:"40px"}} >Chengdu</li>
</ul>
```

- 使用`对象`的形式来表示

- `外面的括号`表示里面是`JS表达式`

- `里面的括号`表示`对象`，**`value值如果是字符串必须加引号`**，否则认为是变量

- 因为 **JSX** 语法上更接近 **JavaScript** 而不是 **HTML**，所以 **React DOM** 使用 **`camelCase（小驼峰命名）来定义属性的名称(例如fontSize、borderTopLeftRadius)`**，而不使用 **HTML** 属性名称的命名约 定。例如，**JSX** 里的 **class** 变成了 

  **`className`**，而 **tabindex** 则变为 **tabIndex**

``` html
<div style ={{width: "100px", height: "100px", backgroundColor: "pink", borderTopLeftRadius: "10px"}} >
    
</div>
```

### 4.2外部样式表

App.css

- `按照以往的CSS格式写，不用驼峰命名`

``` css
.box1 {
    width: 100px;
    height: 200PX;
    background-color: pink;
}
#box2 {
    width: 100px;
    height: 200PX;
    background-color: blue;    
}
```

App.js

- 引入CSS文件`import './App.css'`
- `类名从class改成了className`
- 虽然也可以用id，但最好还是用className布局样式

``` javascript
import './App.css'

function App() {
  return (
    //必须要有一个父元素，因为render里的参数只能有一个虚拟节点
    <div >
      <div className='box1'>

      </div>
      <div id='box2'></div>
    </div>

  );
}

export default App;

```

## 5.JSX包含多个子元素

- 如果我们定义的标签有多个，这个时候我们需要一个**`根标签`**来包裹内容，这是JSX中默认的一个规范，不然你的代码无法解析运行，
- 因为将虚拟结点渲染到真实结点上的参数时，函数的参数只允许一个虚拟节点，所以要用一个根标签包裹所有节点
- 如果遇到模板包含的内容比较多，我们建议使用 () 将内容包裹起来

``` javascript
const template = ( <div><h1>这是标题1</h1> <h2>这是标题2</h2> </div> )
ReactDOM.render( template, document.getElementById('root') );
```

## 6.**JSX** 表示对象

`Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用`。

``` javascript
//代码1 
const element = ( 
    <h1 className="greeting">
    Hello, world! 
    </h1> );
//代码2 
 const element = React.createElement( 'h1', {className: 'greeting'}, 'Hello, world!' );
```

React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

``` javascript
// 注意：这是简化过的结构 
const element = { 
    type: 'h1', 
    props: { className: 'greeting', children: 'Hello, world!' } };
```

- 这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。

## 7.注释

``` javascript
const template = ( 
    <div> 
    {/* 这是JSX中的注释 */} 
    <h1>这是标题1</h1> 
    <h2>这是标题2</h2> 
    </div> 
)
```

如果你使用的是vscode工具，那你可以使用`ctrl+/`快捷键快速的创建注释。
