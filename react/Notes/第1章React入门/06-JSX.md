# JSX

## 1.JSX语法规则

1. 创建`虚拟DOM`时，`不要加引号`

2. **`标签中如果混入JS表达式`**，要用`{}`。**`必须有值`**

   ![image-20220119141631743](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220119141631743.png)

3. 标签中样式的类名要用**`className`**指定

4. 标签中的`内联样式`要用`style={{color: 'white', fontSize: '60px'}}`，外面的{}表示里面是JS表达式，里面的{}表示对象

5. **`只能有一个根标签`**

6. `标签必须闭合`<input type="text"/>

7. 关于`标签首字母`

   1. `小写`，React就会去`寻找与之同名的html标签`
      - 若找到，转化为html同名元素
      - 若未找到，报错

   1. `大写`，React就会去`寻找与之同名的组件`
      - 若找到，就是组件
      - 未找到，报错

8. 注释

   {}表示是js代码，然后用js的方式注释

   **`{/*   */}`**

![image-20220119141455136](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220119141455136.png)

``` javascript
    <script type="text/babel">
        // 创建虚拟DOM
        const VDOM = (
            <div className="b">
                <h1 style={{ fontSize: '60px', backgroundColor: 'pink' }}>Hello React! </h1>
                <input type="text" name="" id="" />
            </div>
        )

        // 渲染到真实DOM
        ReactDOM.render(VDOM, document.querySelector('#test'));
    </script>
```

## 2.基本概念

1. 全称:  JavaScript XML

2. react定义的一种类似于XML的JS扩展语法: JS + XML本质是`语法糖`

   ``` javascript
   React.createElement(component, props, ...children)
   ```

   

3. 作用: 用来简化`创建虚拟DOM `

   -  写法

   ``` javascript
   let VDOM = <h1>Hello, React</h1>
   ```

   

   - 注意1：它不是字符串, 也不是HTML/XML标签

   - 注意2：它最终产生的就是一个**`JS对象`**

4. 标签名任意: HTML标签或其它标签

5.  标签属性任意: HTML标签属性或其它

6.  基本语法规则

   -  遇到 `<开头`的代码, 以`标签的语法解析`: html同名标签转换为html同名元素, 其它标签需要特别解析

   -  遇到以 `{ 开头`的代码，以`JS语法解析`: **`标签中的js表达式必须用{ }包含`**

7. babel.js的作用

   - 浏览器不能直接解析JSX代码, 需要`babel转译为纯JS的代码`才能运行

   - 只要用了JSX，都要加上`type="text/babel"`, 声明需要babel来处理

## 3.渲染虚拟DOM元素

1. 语法:  

``` javascript
ReactDOM.render(virtualDOM, containerDOM)
```

1. 作用: 将虚拟DOM元素渲染到页面中的真实容器DOM中显示

2.  参数说明

   - 参数一: 纯js或jsx创建的`虚拟dom对象`

   - 参数二: `用来包含虚拟DOM元素的真实dom元素对象`(一般是一个div)

## 4.JSX练习

### 4.1区分js表达式和js语句(代码)

`jsx里{}之间能够写的是js表达式`

##### 4.1.1表达式

一个表达式会`产生一个值`，可以放在任何一个需要值的地方。下面这些都是表达式：

1. a
2. a + b
3. demo(1)
4. `arr.map()`//arr
5. function test(){}返回值是一个函数

简单判断方法：`在表达式左边放一个变量`，看能否有返回值

![image-20220120111942632](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220120111942632.png)

##### 4.1.2语句(代码)：

1. if(){}
2. for(){}
3. switch(){case: xxxx}

### 4.2 渲染练习

`直接放入数组，React也可以遍历渲染，对象不行`

![image-20220120112311060](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220120112311060.png)

![image-20220120112225875](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220120112225875.png)

``` javascript
<body>
    <div id="test"></div>
    <script type="text/babel">
        const data = ['angular', 'vue', 'react'];
        // 创建虚拟DOM
        const VDOM = (
            <div>
                <h1>渲染列表小练习</h1>
                <ul>
                    {
                        data.map((element, index) => {
                            return <li>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
        // 渲染虚拟DOM
        ReactDOM.render(VDOM, document.getElementById('test'));
    </script>
</body>
```

- 因为React能遍历渲染数组，所以针对`data = ['angular', 'vue', 'react'];`我们需要将其变成`虚拟DOM数组``data = [<li>angular</li>, <li>vue</li>, <li>react</li>]`。React会自动遍历将其放入ul标签之间
- 使用的是数组的map映射方法

