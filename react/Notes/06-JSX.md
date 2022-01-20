# JSX

## 1.JSX语法规则

1. 创建`虚拟DOM`时，`不要加引号`

2. `标签中如果混入JS表达式`，要用`{}`

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

