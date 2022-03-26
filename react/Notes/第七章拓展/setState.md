## 1. setState()更新状态的动作是异步还是同步的？

要看`state的执行位置`

1. 在由`react所控制的回调中`更新的动作是`[异步]`的：`生命周期钩子`、`react事件监听回调`

   <img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220325192059594.png" alt="image-20220325192059594" style="zoom: 50%;" />

   <img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220325192123790.png" alt="image-20220325192123790" style="zoom: 50%;" />

2. 在`非react控制`的`异步回调`中更新的动作是`[同步]`的：定时器回调、原生事件回调

   <img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220325192957840.png" alt="image-20220325192957840" style="zoom:50%;" />

   <img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220325193014757.png" alt="image-20220325193014757" style="zoom:50%;" />

(1). setState(stateChange, [callback])------对象式的setState
        1.stateChange为状态改变对象(该对象可以体现出状态的更改)
        2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用

	
					
	(2). setState(updater, [callback])------函数式的setState
	        1.updater为返回stateChange对象的函数。
	        2.updater可以接收到state和props。
	        4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取

#### 