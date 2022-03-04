## 1.transform、transition和animate区别

transform：实现元素的位移、旋转、缩放。元素的水平垂直居中

``` css
transform: translate(x,y)/rotate(45deg)/scale(1.2)

.son{
    position: absolute;
    left: 50%
    top: 50%
    transform: translate(-50%, -50%);
}
```



transition：当元素从一种样式变换为另一种样式时为元素添加效果。即使写了all，也只会改变变化的属性。**经常和 :hover 一起 搭配使用。**

``` css
transition: 要过渡的属性/all 花费时间 运动曲线(可省略，默认是ease) 开始时间(可省略，默认是0)
        .container {
            width: 300px;
            height: 100px;
            border: 1px solid pink;
        }

        .box {
            height: 100%;
            width: 0;
            background-color: red;

        }

        .container:hover .box {
            width: 100%;
            transition: all 1s;
        }
```



animation：设置多个节点来精确控制一个或一组动画。相比较过渡，动画可以实现更多变化，更多控制，连续自动播放等效果。

``` css
//1. 定义动画
@keyframes changeColor {
    0% {
        width: 0;
        background-color: red;
    }

    50% {
        width: 150px;
    }

    100% {
        width: 300px;
        background-color: blue;
    }


}

//2.调用动画
.container {
    width: 300px;
    height: 100px;
    border: 1px solid pink;
}

.container:hover .box {
    height: 100%;
    animation-name: changeColor;   //动画名称，必须
    animation-duration: 4s;			//动画持续时间，规定动画完成一个周期所花费的秒或毫秒，默认是0。必须
	animation-timing-function: ease //规定动画的速度曲线，默认是“ease(慢-快-慢)”。
    animation-delay: 2s;			//规定动画何时开始，默认是0。
    animation-iteration-count: infinite; //规定动画被播放的次数，也就是播放几个周期(逆向也算一个周期)，默认是1，还有infinite
    animation-direction: alternate	//规定动画是否在下一周期逆向播放。默认是“normal“不逆向直接回到初始点,alternate逆播放
    animation-play-state: running	//规定动画是否正在运行或暂停。默认是"running",还有"paused"。一般和hover结合运用
    animation-fill-mode：forwards	//规定动画结束后状态规定动画结束后状态，保持forwards回到起始backwards。如果允许逆向播放，有可能初始状态和结束后状态一样    
}

.box {
    height: 100%;
    animation-name: changeColor;
    animation-duration: 4s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 3;
    animation-direction: alternate;
    animation-play-state: forwards;
}

.box:hover {
    animation-play-state: paused;
}
```

