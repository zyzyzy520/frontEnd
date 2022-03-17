# flex属性扩展

`flex`是 `flex-grow`，`flex-shrink`和`flex-basis`的简写。开发中最常见的写法是`flex：1`，它表示` 将flex 项目扩展并填充剩余的可用空间`。

`默认值为 flex: 0 1 auto`

`只给父盒子添加属性display:flex`后的效果，如下图所示。标准流的盒子脱标排在了主轴的一行，且height和width都是在样式表里设定的值

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220313165952224.png" alt="image-20220313165952224" style="zoom:67%;" />



## 1.flex-grow 属性

- 用来**`“瓜分”父项的“剩余空间”`**。

- 定义项目的放大比例，`默认为0`，就是`项目保持自己设定的高度`。`flex-grow`的值只接受一个整数。
- 在不使用`flex-grow`的情况下，flex 项目的宽度将默认为其初始宽度。

给box2和box3分别添加属性flex-grow: 2和flex-grow: 1。`box1因为没有设置flex-grow，flex-grow默认为0，所以保持其初始宽度，box2和box3瓜分contianer的剩余宽度`。代码和效果如下所示：

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            display: flex;
            width: 500px;
            height: 500px;
            border: 1px solid pink;
            margin: 20px auto;
            justify-content: flex-start;
        }

        .box1 {
            /* flex: 1; */
            width: 50px;
            height: 50px;
            background-color: red;
        }

        .box2 {
            flex-grow: 2;
            width: 100px;
            height: 50px;
            background-color: blue;
        }

        .box3 {
            flex-grow: 1;
            width: 200px;
            height: 50px;
            background-color: orange;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
    </div>
</body>

</html>
```

$$
boxn\_width =样式表中设定的宽度 + \frac{boxn\_flexGrow*父容器的剩余空间}{\sum_{i=1}^{3}{box_i\_flexGrow}}
$$

 <img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220313174858253.png" alt="image-20220313174858253" style="zoom:67%;" />



## 2.flex-shrink 属性

- 用来“吸收”**`超出的空间`**
- 缩小的比例,默认为`1`
- `没有足够的空间来容纳所有的项目`，则允许项目缩小宽度，`该属性才会起作用`。

给box2和box3分别添加属性flex-shrink: 1和flex-shrink: 2。`box1因为没有设置flex-shrink，flex-shrink默认为1，因为三个子项目的宽度加起来超过了父盒子的宽度，所以三个子项目都会缩小以吸收超出的空间`。代码和效果如下所示：

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            display: flex;
            width: 300px;
            height: 200px;
            border: 1px solid pink;
            margin: 20px auto;
            justify-content: flex-start;
        }

        .box1 {
            /* flex: 1; */
            width: 50px;
            height: 50px;
            background-color: red;
        }

        .box2 {
            flex-shrink: 1;
            width: 100px;
            height: 50px;
            background-color: blue;
        }

        .box3 {
            flex-shrink: 2;
            width: 200px;
            height: 50px;
            background-color: orange;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
    </div>
</body>

</html>
```

$$
boxn\_width =样式表中设定的宽度 - \frac{boxn\_width*boxn\_flexShrink*超出的空间}{\sum_{i=1}^{3}{box_i\_width*box_i\_flexShrink}}
$$

![image-20220313174809003](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220313174809003.png)



## 3.flex-basis 属性

- `flex-basis`属性定义了`在分配多余空间之前，项目占据的主轴空间（main size）`。
- 浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

给box1、box2和box3分别添加属性flex-basis: 25%、flex-basis: 25%、flex-basis: 25%。此时打开浏览器，可以发现`虽然三个box原本初始宽度不一样，但设置了flex-basis百分比一样后，都是占父盒子的25%`。这时再给box3添加属性flex-grow:1, box3就会占满所有的剩余空间代码。效果如下所示：

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            display: flex;
            width: 500px;
            height: 200px;
            border: 1px solid pink;
            margin: 20px auto;
            justify-content: flex-start;
        }

        .box1 {
            flex-basis: 25%;
            width: 50px;
            height: 50px;
            background-color: red;
        }

        .box2 {
            flex-basis: 25%;
            width: 100px;
            height: 50px;
            background-color: blue;
        }

        .box3 {
            flex-basis: 25%;
            flex-grow: 1;
            width: 200px;
            height: 50px;
            background-color: orange;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
    </div>
</body>

</html>
```

<img src="C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220313180513159.png" alt="image-20220313180513159" style="zoom:67%;" />