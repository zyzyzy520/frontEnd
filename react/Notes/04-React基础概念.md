# 基础概念

## 一、基本概念

​	React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框

架，都不满意，就决定自己写一套，用来架设Instagram 的网站。做出来以后，发现

这套东西很好用，就在2013年5月开源了。

​	由于 React的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常

简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工

具。

​	这个项目本身也越滚越大，从最早的UI引擎变成了一整套前后端通吃的 Web App

解决方案。衍生的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写

Native App。如果能够实现，整个互联网行业都会被颠覆，因为同一组人只需要写一

次 UI ，就能同时运行在服务器、浏览器和手机。

​	React主要用于构建UI。你可以在React里传递多种类型的参数，如声明代码，帮

助你渲染出UI、也可以是静态的HTML DOM元素、也可以传递动态变量、甚至是可交

互的应用组件

- react表示的是一个js的库，一般将react全家桶称为React框架
- 既可以在老项目中使用react，作为引入的js文件；也可也在大型项目中基于脚手架得到方式来开发（前端工程化），融合各种插件，完成全家桶开发。

### 是什么

- 用于构建用户界面的JS库
- 负责操作DOM呈现页面，请求需要自己发送，数据需要自己处理
- 是一个将数据渲染为HTML视图的开源JS库

### 为什么要学

- 原生JS操作DOM效率低（DOM-API）
- 原生JS操作DOM，浏览器会进行大量的`重绘重排`
- 原生JS`没有组件化编码方案`，代码复用率低
  - 在学习html的时候，将页面结构通过一个个盒子模型进行拆分
  - css也是随着盒子模型进行了拆分
  - js在模块化那一部分根据不同功能进行了模块化拆分
  - 而`组件就是构成页面局部功能的代码和资源集合`（包括html，css，js，img，font...）

### 特点

1. 声明式设计：React采用`组件化`模式、`声明式编码`，可以轻松描述应用。提高开发效率及组件复用率

   - 之前学习的都是命名式编码，需要用详细的代码编写，功能是怎么一步步实现的
   - 声明式编码，熟悉其语法，然后按照语法输入，它会帮你实现

2. 高效：使用虚拟DOM+优秀的Diffing算法，`最大限度地减少与DOM的交互`。

   - 原生DOM如果`增加一条数据`，要`重新渲染页面`
   - 从原本的100条数据增加到101条，真实DOM需要操作101次数据
   - 而虚拟DOM不总是直接操作页面真实DOM。其会`将旧的和新的进行对比`，只`操作真实DOM渲染新增的数据`
   - 同时DOM Diffing算法，最小化页面重绘

   ![image-20220118141807630](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220118141807630.png)

   ![image-20220118142003832](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220118142003832.png)

3. 灵活：React可以与已知的库或框架很好地配合。

   

##  二、为什么要用React

1. 使用组件化开发方式，符合现代Web开发的趋势

2. 技术成熟，社区完善，配件齐全，适用于大型Web项目（生态系统健全）

3. 由Facebook专门的团队维护，技术支持可靠

4. ReactNative - Learn once, write anywhere: Build mobile apps with React 

5. 使用方式简单，性能非常高，支持服务端渲染
6. React非常火，从技术角度，可以满足好奇心，提高技术水平；从职业角度，有利于求职和晋升，有利于参与潜力大的项目

## 三、React框架概念

用来构建UI的 JavaScript库，React 不是一个 MVC 框架，仅仅是视图（V）层的库

官网地址：**https://facebook.github.io/react/**

中文文档：**https://doc.react-china.org**

## 四、虚拟DOM（Vitural DOM）

- React将DOM抽象为虚拟DOM，虚拟DOM其实就是用`一个对象来描述DOM`，通过对比前后两个对象的差异，最终`只把变化的部分重新渲染`，提高渲染的效率。
- 在React第一次创建DOM的时候，会给每个DOM创建一个Virtual DOM节点，在DOM对象更新之前，我们首先会去虚拟dom里面进行更新，更新完毕后通过diff算法进行对比，只更新需要修改的一部分，完成页面的渲染。

- 为什么用虚拟DOM，当DOM发生更改时需要遍历 而原生DOM可遍历属性多大231个 且大部分与渲染无关 更新页面代价太大。

### 1.采用虚拟DOM的好处

1. 用 JavaScript `对象结构表示 DOM 树的结构`，然后用这个树`构建一个真正的 DOM树`，插到文档当中。
2. 当`状态变更`的时候，`重新构造一棵新的对象树`。然后`用新的树和旧的树进行比较`，记录两棵树差异
3.  把2所记录的`差异应用到步骤1所构建的真正的DOM树`上，视图就更新了

### 2.虚拟DOM的正确认识

​	这是一个性能 vs. 可维护性的取舍。`框架的意义在于为你掩盖底层的 DOM 操作， 让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护`。没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。针对任何一个 benchmark，我都可 以写出比任何框架更快的手动优化，但是那有什么意义呢？在构建一个实际应用的时 候，你难道为每一个地方都去做手动优化吗？出于可维护性的考虑，这显然不可能。 `框架给你的保证是，你在不需要手动优化的情况下，我依然可以给你提供过得去的性能。`

### 3.React中的虚拟DOM

​	React 从来没有说过 “React 比原生操作 DOM 快”。React 的基本思维模式是每次有变动就整个重新渲染整个应用。如果没有 Virtual DOM，简单来想就是直接重置innerHTML。很多人都没有意识到，在一个大型列表所有数据都变了的情况下，重置innerHTML 其实是一个还算合理的操作... 真正的问题是在 “全部重新渲染” 的思维模式下，即使只有一行数据变了，它也需要重置整个 innerHTML，这时候显然就有大量的浪费。

我们可以比较一下 innerHTML vs. Virtual DOM 的重绘性能消耗：

innerHTML: render html string O(template size) + 重新创建所DOM 元素(DOM size) 

Virtual DOM: render Virtual DOM + diff O(template size) + 必要的 DOM 更新 (DOM change)

## 五、React的入门案列

### 1.安装react包

``` bash
第一步： npm install react --save 或者 npm i react -S
第二步： npm install react-dom --save 或者 npm i react-dom -S
第三步： npm install babel-standalone --save-dev 或者 npm i babel-standalone -S-dev

或者
yarn add react
yarn add react-dom
yarn add babel-standalone
```

react：这个包是react的核心包

react-dom：提供了针对dom的方法，包括虚拟dom 

### 2. 创建项目`引入依赖包`

``` bash
//第一步初始化项目，按照逻辑来说应该放在安装包前面
npm init -y
```

在项目中创建一个index.html页面

``` $html
    <!-- 创建根标签 -->
    <div id="app"></div>
    <a href="www.baidu.com">点击我</a>
    <!-- 引入React核心包，包含常用的语法规则 -->
    <script src="./js/react.development.js"></script>
    <!-- ReactDOM驱动包：包含虚拟dom和diff算法 -->
    <script src="./js/react-dom.development.js"></script>
    <!-- 引入babel包，react中很多语法不能直接被浏览器识别，需要babel转化 -->
    <script src="./js/babel.js"></script>
    <script type="text/babel">
        // 转化JSX语法，使得浏览器可以识别
        let template = (<h1>Welcome to my home</h1>)
        // 使用ReactDOM的render方法将模板渲染到app对象上面
        ReactDOM.render(template, document.getElementById("app"));
    </script>

</body>
```

##### React.createElement(标签名,标签属性,标签内容)

- 创建了一个节点，第一次会先生成虚拟节点
- **const VDOM = React.createElement('xx',`{id:'xx'}`,'xx')**
- 标签内容里若包含多个子节点 React.createElement('xx',`{id:'xx'}`,[children1,children2])

``` javascript
const template = React.createElement("h1",null,"Hello React")
```

##### ReactDOM.render(**virtualDOM, containerDOM**)

- 渲染虚拟DOM
- 将`虚拟DOM元素渲染到页面中的真实容器DOM`中显示
-  参数一: 纯js或jsx`创建的虚拟dom对象`
- 参数二: 用来`包含虚拟DOM元素`的`真实dom元素对象`(一般是一个div)
- render不会追加，会覆盖

``` javascript
ReactDOM.render(template, document.getElementById("root"));
```

##### 注意事项

- 因为没办法一次性向真实DOM中渲染多个虚拟DOM元素，而如果我们`想要向真实DOM中加入多个子节点`，就需要`再创建一个 虚拟根节点`，`将多个虚拟子节点包含进去`，然后`将虚拟根节点渲染进真实DOM子元素中`
- 向虚拟DOM节点中添加子节点，用[]包裹
- **`key`**是为了让react可以识别，没有也能正常渲染。
  - react使用diff算法会去把新树和旧树做比较，


``` javascript
        //let template = <h1>Welcome to my home</h1>
        const son1 = React.createElement("h1", { key: 0 }, "HELLO React");
        const son2 = React.createElement("h2", { key: 1 }, "Hello JS");
        const son3 = React.createElement("h3", { key: 2 }, "HHello HTML");
        const template = React.createElement("div", null, [son1, son2, son3]);
        // 使用ReactDOM的render方法将模板渲染到app对象上面
        ReactDOM.render(template, document.getElementById("app"));
```

- 可以看到用React.createElement有一点麻烦，所以一般使用jsx创建节点方式

  ![image-20220106170435105](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220106170435105.png)