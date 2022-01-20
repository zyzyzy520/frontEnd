window.addEventListener('load', function () {
    // 一、实现左右按钮的功能

    var focus = document.querySelector('.focus');
    var slider = focus.querySelector('.slider');
    var circle = focus.querySelector('.circle');
    var left = focus.querySelector('.left-row');
    var right = focus.querySelector('.right-row');
    // 1.1首先实现鼠标经过大盒子按钮显示,离开按钮消失
    focus.addEventListener('mouseenter', function () {
        focus.children[1].style.display = 'block';
        focus.children[2].style.display = 'block';
    })
    focus.addEventListener('mouseleave', function () {
        focus.children[1].style.display = 'none';
        focus.children[2].style.display = 'none';
    })

    //3.动态生成圆圈，有几张图片生成几个按钮，有几张图片，slider里有几个li，创建的同时，绑定点击事件。自定义属性要用setAttribute
    for (var i = 0; i < slider.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i); //添加坐标，方便点击切换。
        li.addEventListener('click', function () {
            // 在这里不能使用i，click是回调函数，点击后才调用函数此时正常代码已执行完毕，i已是最大值
            // 获得当前是第几个按钮，然后移动图片，注意index从0开始，同时要变色，变色前排他思想，清除其它的颜色
            for (var j = 0; j < circle.children.length; j++) {
                circle.children[j].className = "";
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            animate(slider, -index * focus.offsetWidth);
        })
        circle.appendChild(li);
    }
    circle.children[0].className = "current";
    // console.log(slider.children.length);
    // 2.分别给左右按钮绑定事件，左边按钮是展示上一张图片不是左滑，每按一下，在当前的基础上往右走一张图片的距离；右边按钮是展示下一张图片不是右滑，每按一下，在当前的基础上往左走一张图片的距离；图片走应该是整个幻灯片移动，即ul
    // 注意自己写的图片移动函数里距离的target不是走动的距离而是走到的距离，走到的距离由原本的位置与走动的距离之和可以得到。因为移动函数里是通过改变图片的left值实现移动的，所以往右移动是正，往左移动是负。图片往右走是当前距离+图片宽度，图片往左走就是当前距离0图片宽度
    // 添加点击后，圆圈随之变化事件
    var lastLi = slider.children[0].cloneNode(true);
    slider.appendChild(lastLi);
    right.addEventListener('click', function () {
        // 需加个判断，当前是否展示到了最后一张图片，如果是的话，再点击，将目前的第一张图片移动到最后并滑动
        var index;
        // 移动前，如果是最后一张，需要迅速的移动到第一张，这样可以顺畅的移动到第二张。
        if (slider.offsetLeft == -focus.offsetWidth * (slider.children.length - 1)) {
            slider.style.left = 0;
        }
        animate(slider, slider.offsetLeft - focus.offsetWidth);
        // 移动后，如果是最后一张，则需要index=0；其余的当前位置/宽度即可。但这里会存在问题，因为移动是需要事件的，但这个计算是瞬间完成的，也就是说还未完成移动就开始计算距离，建议不要使用这个，因为不知道什么时候完成移动
        if (slider.offsetLeft == -focus.offsetWidth * (slider.children.length - 1)) {
            index = 0;
        } else {
            index = 0 - slider.offsetLeft / focus.offsetWidth;
        }
        setTimeout(function () {
            console.log(slider.offsetLeft);
        }, 1000)

        for (var j = 0; j < circle.children.length; j++) {
            circle.children[j].className = "";
        }
        circle.children[index].className = "current";
    })
    left.addEventListener('click', function () {
        // 需先加个判断，当前是否在第一张，如果是，再次点击展示最后一张图片
        animate(slider, slider.offsetLeft + focus.offsetWidth);
        // 将位移的负值转换为正数
        var index = (0 - (slider.offsetLeft + focus.offsetWidth)) / focus.offsetWidth;
        for (var j = 0; j < circle.children.length; j++) {
            circle.children[j].className = "";
        }
        // console.log(slider.offsetLeft + focus.offsetWidth);
        circle.children[index].className = "current";
    })
})