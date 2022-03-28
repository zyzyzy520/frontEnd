## 1.问 `react hook` 的一些坑, 涉及到闭包



## 2.`useCallback` 的用法, 依赖项实现原理

默认情况下，如果父组件重新渲染，那么无论子组件是否数据发生了变化，所有子组件也会一起重新渲染。例如A组件里有B组件和C组件，B组件发生了变化，引发了父组件重新渲染，那么即使C组件没有发生变化，也会重新渲染一次。

为了减少这个不必要的重新渲染，我们可以用React.momo(),React.memo()的使用方法很简单，就是把要导出的函数组件包裹在React.memo中即可。React.memo()会帮我们做浅层对比，只有当自己的state和props中的数据发生变化，才会重新渲染组件。

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220327162031749.png" alt="image-20220327162031749" style="zoom:50%;" />

但如果，父组件在用子组件时，给子组件传递的是一个回调函数，那么仍然会重新渲染，此时就要用到useCallback.

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220327163223484.png" alt="image-20220327163223484" style="zoom:50%;" />

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220327163335988.png" alt="image-20220327163335988" style="zoom:50%;" />

useCallback可以将组件的处理函数进行缓存，并返回该处理函数的引用。当组件每次即将要重新渲染时，只要userCallback监测的值不发生变化，就会让该处理函数与上次渲染是同一函数，(因为是同一对象引用，所以===运算结果一定为true)，这样React.memo就会发现是同一个引用，从而跳过本次无意义的重新渲染，达到提高组件性能的目的。