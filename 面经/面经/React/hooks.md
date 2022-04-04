## 1.问 `react hook` 的一些坑, 涉及到闭包



## 2.`useCallback` 的用法, 依赖项实现原理

默认情况下，如果父组件重新渲染，那么无论子组件是否数据发生了变化，所有子组件也会一起重新渲染。例如A组件里有B组件和C组件，B组件发生了变化，引发了父组件重新渲染，那么即使C组件没有发生变化，也会重新渲染一次。

为了减少这个不必要的重新渲染，我们可以用React.momo(),React.memo()的使用方法很简单，就是把要导出的函数组件包裹在React.memo中即可。React.memo()会帮我们做浅层对比，只有当自己的state和props中的数据发生变化，才会重新渲染组件。

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220327162031749.png" alt="image-20220327162031749" style="zoom:50%;" />

但如果，父组件在用子组件时，给子组件传递的是一个回调函数，那么仍然会重新渲染，此时就要用到useCallback.

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220327163223484.png" alt="image-20220327163223484" style="zoom:50%;" />

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220327163335988.png" alt="image-20220327163335988" style="zoom:50%;" />

useCallback可以将组件的处理函数进行缓存，并返回该处理函数的引用。当组件每次即将要重新渲染时，只要userCallback监测的值不发生变化，就会让该处理函数与上次渲染是同一函数，(因为是同一对象引用，所以===运算结果一定为true)，这样React.memo就会发现是同一个引用，从而跳过本次无意义的重新渲染，达到提高组件性能的目的。



## 3.介绍react常用的hook/介绍useState/useEffect

自己目前学习到现在比较常用到3个，React.useState、React.useEffect、React.useRef

**`useState`**用于初始化状态，参数是状态的初始值，返回的是状态的初始值和操作状态的方法，这里用到数组解构接收。React会把状态存在缓存中，这样每次重新渲染时，是从缓存中拿到状态的值避免了又执行初始化的代码。

**`useEffect`**类似于生命周期钩子，第一个参数是回调函数，第二个参数是数组。在组件挂载后，会调用这个回调函数。第二个参数是用于监听状态的变化，监听到了变化，则调用回调函数。如果没写第二个参数，则代表监听所有的状态，只要有一个变化，就会调用回调函数；如果第二个参数是空数组，则不会监听任何状态，不会调用。另外回调函数还可以return一个函数，这个return的函数会在组件即将卸载时调用

**`useRef`**适用于获取组件内的某些标签，比如想要获取输入框的value，我们就可以用useRef创建一个容器，放在标签的ref属性里，然后React会帮助我们将输入框的属性放入容器内，就可以拿到想要的东西了。



## 4.声明变量为什么要用useState，为什么不直接去声明state

因为我们的状态更新后，组件的重新渲染是React帮我们完成的。同时React会帮我们把状态存到缓存里，我们自己直接去声明，存在两个问题，一是如何重新渲染组件，二是渲染时重新调用函数组件，怎么保证状态不会又被初始化一次