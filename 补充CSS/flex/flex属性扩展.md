# flex属性扩展

`flex`是 `flex-grow`，`flex-shrink`和`flex-basis`的简写。开发中最常见的写法是`flex：1`，它表示` 将flex 项目扩展并填充剩余的可用空间`。



## 1.flex-grow 属性

- 定义项目的放大比例，`默认为0`，即如果存在剩余空间，也不放大。`flex-grow`的值只接受一个整数。
- 在不使用`flex-grow`的情况下，flex 项目的宽度将默认为其初始宽度。 但是，使用`flex-grow: 1`时，flex 项目会平均剩余可用的空间。