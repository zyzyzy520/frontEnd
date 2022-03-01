# 8基本使用

## 1.相关JS库

1. react.development.js：React核心库。引入后多了一个全局对象`React`
2. react-dom.development.js：提供操作DOM的react扩展库。引入后多了一个全局对象`ReactDom`
3. babel.min.js：解析JSX语法代码转为JS代码的库。原本用于将ES6语法转化为ES5

引入顺序1、2、3。`核心库必须在最前面引入`

## 2.基本使用

``` html
    <!-- 准备一个容器 -->
    <div id="test"></div>

    <script type="text/babel">  /*只能写babel*/
        // 1.创建一个虚拟DOM
        let VDOM = <h1> Hello ,</h1>;

        // 2. React将虚拟DOM转化为真实DOM，渲染到页面
        // ReactDom.render(虚拟DOM，真实容器)
        ReactDOM.render(VDOM, document.getElementById('test'));

    </script>
```

- 注意render是`覆盖`函数

  

![image-20220119093820328](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220119093820328.png)

- 动态刷新---Live Server插件的效果

![image-20220119093846014](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220119093846014.png)

- 用babel将jsx翻译成js，然后才能在浏览器上运行。代码过多，速度会变慢

## 3.创建虚拟DOM的两种方式

### 3.1 纯JS方式(一般不用)

![image-20220119105926431](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220119105926431.png)

### 3.2JSX方式

![image-20220119105930684](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220119105930684.png)

### 3.3 关于jsx

1. jsx的出现就是为了`让程序员更加方便地创建虚拟DOM`
2. jsx最终`经过babel的编译`，变成了`最原始的js方法`

## 4. 虚拟DOM与真实DOM

1. React提供了一些API来创建一种 “特别” 的一般js对象

   ``` javascript
   const VDOM = React.createElement('标签名', {id:'xx'}, '子元素')
   ```

2. **`虚拟DOM对象`**最终都会被React转换为真实的DOM

3. 我们`编码时`基本`只需要操作`react的`虚拟DOM`相关数据, `react会转换为真实DOM`变化而更新界。

4. 虚拟DOM比较"轻"，属性更少；真实DOM比较"重"。因为虚拟DOM是React在用，不需要那么多属性

   