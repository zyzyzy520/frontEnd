window.addEventListener('load', function () {
    // 一、实现左右按钮的功能

    var focus = document.querySelector('.focus');
    var slider = focus.querySelector('.slider');
    var circle = focus.querySelector('.circle');
    var left = focus.querySelector('.left-row');
    var right = focus.querySelector('.right-row');
    var num = 0;//判断当前在第几张图片
    var index = 0;//小圆圈的位置,   `
    var flag = true;//节流阈
    // 1.1首先实现鼠标经过大盒子按钮显示,离开按钮消失

    focus.addEventListener('mouseenter', function () {
        focus.children[1].style.display = 'block';
        focus.children[2].style.display = 'block';
        clearInterval(timeMove);
    })
    focus.addEventListener('mouseleave', function () {
        focus.children[1].style.display = 'none';
        focus.children[2].style.display = 'none';
        // 鼠标不经过，轮播图自己播放，可以理解为反复点击右箭头切换到下一张图片
        timeMove = setInterval(function () {
            right.click();
        }, 3000)

    })

    //3.动态生成圆圈，有几张图片生成几个按钮，有几张图片，slider里有几个li，创建的同时，绑定点击事件。自定义属性要用setAttribute
    for (var i = 0; i < slider.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i); //添加坐标，方便点击切换。
        li.addEventListener('click', function () {
            if (flag) {
                flag = false;
                // 在这里不能使用i，click是回调函数，点击后才调用函数此时正常代码已执行完毕，i已是最大值
                // 获得当前是第几个按钮，然后移动图片，注意index从0开始，同时要变色，变色前排他思想，清除其它的颜色
                for (var j = 0; j < circle.children.length; j++) {
                    circle.children[j].className = "";
                }
                this.className = 'current';
                index = this.getAttribute('index');
                num = index;
                animate(slider, -index * focus.offsetWidth, function () {
                    flag = true;
                });
            }
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
        if (flag) {
            flag = false;
            //如果当前是在最后一张图片，则设置小圈圈的位置为0，并要迅速换到第一张，这样才能移动到第二张。同时num = 0，表明当前在第一张
            if (num == slider.children.length - 1) {
                slider.style.left = 0;
                num = 0;
            }
            num++;//移动到下一张
            // 点击后从当前的位置向左移*/
            animate(slider, slider.offsetLeft - focus.offsetWidth, function () {
                flag = true;
            });
            index = num == slider.children.length - 1 ? 0 : num;
            for (var j = 0; j < circle.children.length; j++) {
                circle.children[j].className = "";
            }
            circle.children[index].className = "current";
        }
    })
    left.addEventListener('click', function () {
        if (flag) {
            flag = false;
            //如果当前是在第一张图片，并要迅速换到最后一张，这样才能向左移动到第二张。同时num = 0，表明当前在第一张
            if (num == 0) {
                slider.style.left = - (slider.children.length - 1) * focus.offsetWidth + 'px';
                num = slider.children.length - 1;
            }
            // console.log(slider.style.left);
            num--;//移动到上一张
            animate(slider, slider.offsetLeft + focus.offsetWidth, function () {
                flag = true;
            });
            index = num == slider.children.length - 1 ? 0 : num;
            for (var j = 0; j < circle.children.length; j++) {
                circle.children[j].className = "";
            }
            circle.children[index].className = "current";
        }
    })
    // 保证一进去就滚动
    var timeMove = setInterval(function () {
        right.click();
    }, 3000)
})