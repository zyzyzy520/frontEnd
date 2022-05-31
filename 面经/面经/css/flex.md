## 1.说一说flex布局有什么属性，怎么实现内容的居中

父盒子container:

​	display: flex

​	flex-direction: row/column （设置主轴）

​	flex-wrap: nowrap/wrap （是否换行）

​	justify-content: flex-start/flex-end/center/space-around/space-between (设置主轴上子元素排列方式：从头部开始排列/从尾部开始排列/居中/平分剩余空间/先两边贴边 再平分剩余空间)

​	align-items：flex-start/flex-end/center/stretch  (设置侧轴上子元素排列方式，只有一行。从头部开始排列/从尾部开始排列/居中/拉伸)

​	align-content: flex-start/flex-end/center/space-around/space-between/stretch (设置侧轴的排列方式，有多行)



子项目item:

​	flex: n（占多少份）

​	order: n(**数值越小，排列越靠前，默认为0。**)

​	align-self：控制子项自己在侧轴上的排列方式



内容居中：

​	父盒子

``` css
.container{
    display: flex;
    justify-content: center;
    align-items: center
}
```



## 2. flex: 0 1 auto

0: 不平分剩余空间

1： 如果子元素超出了父元素，要吸收掉超出部分

auto: 子元素的宽度就是自身的宽度。在分配多余空间之前，项目占据的主轴空间



## 3. 3个盒子，中间盒子定长等宽，左右两个盒子自动填充宽度

自动填充，想到flex
