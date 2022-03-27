## 5. Context

### 理解

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

### 使用

```js
1) 创建Context容器对象：
	const XxxContext = React.createContext()  
	
2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>
    
3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = xxxContext  // 声明接收context
	  this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```

### 注意

``` javascript
在应用开发中一般不用context, 一般都用它的封装react插件
```

![image-20220326214727921](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326214727921.png)

首先新建context.js文件，并在里面创建容器对象

![image-20220326220125026](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326220125026.png)

然后在爷爷组件里使用Provider，向后代提供value里的值，即Father及其包裹的孩子组件

![image-20220326220154154](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326220154154.png)



在孙子组件里，引入context，接收

![image-20220326220722992](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220326220722992.png)

如果孙子组件是函数式

![image-20220327002836017](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220327002836017.png)



**总结**

- 先创建context，在单独的一个js文件里创建。
- 不管是祖先组件还是后代组件都需要引入创建的context
- 函数后代组件需要用到consumer，类式后代组件需要一个固定等式