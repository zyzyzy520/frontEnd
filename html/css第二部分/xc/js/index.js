// 如果js写到单独的一个文件中时，最好添加元素加载完毕再使用js
// 
window.addEventListener('load', function () {
    // 获取对象
    // focus是展示窗口，它的宽度非常有用，因为其宽度就是每一张照片的宽度，可以加以利用。同时slider和circle可以用children属性很容易获得
    var focus = document.querySelector('.focus');
    var slider = focus.children[0];
    var circle = focus.children[1];
    var num = 1;//记录当前放到第几张PPT；因为移动端比PC端多克隆了原本的最后一张图片，为了实现顺畅的移动效果。所以当前是在第一张
    // 根据图片个数制作小圆圈，这一步要放到克隆前，否则会制作多一个
    for (var i = 0; i < slider.children.length; i++) {
        var li = document.createElement('li');
        if (i == 0) li.className = 'current';
        li.setAttribute('index', i);
        circle.appendChild(li);
    }
    // 将第一张图片克隆到最后
    var li = slider.children[0].cloneNode(true);//先复制第一张图片添加到ul的最后
    slider.appendChild(li);
    // 将倒数第二张图片克隆到最前面
    li = slider.children[slider.children.length - 2].cloneNode(true);
    slider.insertBefore(li, slider.children[0]);
    // slider.transform = 'translate(-' + focus.offsetWidth + 'px)';
    // slider.style.marginLeft = 0;
    var timer = setInterval(function () {

        // 每一秒滑动一张图片
        // 到最后一张图片
        num++;
        // console.log(num);
        //  注意translate的参数不是移动的距离而是移动到的位置的坐标
        var distance = -(num - 1) * focus.offsetWidth;
        slider.style.transition = 'all 1s';
        slider.style.transform = 'translateX(' + distance + 'px)';
        // console.log(slider.style.left);

    }, 2000)
    slider.addEventListener('transitionend', function () {
        // 过渡移动到最后一张图片时，要迅速移到第二张图片，保证过渡的显示
        // console.log('过渡结束', num);
        if (num >= slider.children.length - 1) {
            // 迅速移到第二张，index是1
            //  需要瞬间移动，但是因为设置了过渡，所以需要时间 ，看起来就不对
            // slider.style.left = '0px'; 最好不要动left，因为有了left的值才可以使网页一开始位于第一张图片，同时distance才是num - 1，没了left就需要num。
            // 因为有left，所以移动到0px，加上left也就是往左移了一个
            slider.style.transform = 'translateX(0px)';
            slider.style.transition = '';
            num = 1;
        } else if (num == 0) {
            // 如果移动到了第index为0的图片，迅速移动到原本的最后一张，index为3的位置
            slider.style.transform = 'translateX(-' + (slider.children.length - 2 - 1) * focus.offsetWidth + 'px)';
            slider.style.transition = '';
            num = slider.children.length - 2;
        }
        // 小圆点随着图片滑动而滑动。
        // 选出带有current类的小圆点，并清除属性
        circle.querySelector('.current').classList.remove('current');
        var index = num == slider.children.length - 1 ? 0 : num - 1;
        // console.log('小圆圈坐标', index);
        circle.children[index].classList.add('current');
        circle.style.transition = 'all 1s';
    })

    // 3.手指拖动
    // 触摸到focus显示界面，清除定时器
    var distance, sliderPurpose; //手指触摸生成变量，在拖动的时候通过distance判断是向右还是向左; sliderPurpose判断最终要移到的地方。
    // 这两个放外面是因为拖动和离开都用到
    focus.addEventListener('touchstart', function (e) {
        clearInterval(timer);
        // 获取手指的初始坐标，注意是事件对象，触摸元素产生的事件对象
        var fingerSource = e.targetTouches[0].pageX, fingerPurpose;
        // 获取slider的初始坐标
        var sliderSource = -num * focus.offsetWidth;
        // 触摸并移动手指，手指移动的距离就是ul移动的距离
        focus.addEventListener('touchmove', function (e) {
            // 获取手指移动后的最终坐标
            fingerPurpose = e.targetTouches[0].pageX;
            // 通过初始坐标和最终坐标算出手指移动距离
            distance = fingerPurpose - fingerSource;
            // console.log(distance);
            // 注意translate给的参数是坐标，而不是移动距离，所以真正移动到的坐标需要用ul原本的坐标加上这个距离
            sliderPurpose = sliderSource + distance + focus.offsetWidth;
            // 将ul移动这个距离
            slider.style.transform = 'translateX(' + sliderPurpose + 'px)';
            // console.log(slider.style.transform);
            e.preventDefault();//阻止手指滚动时屏幕的默认行为。

        })
    })
    // 手指松开，如果拖动得距离大于50，则切换到上一张或者下一张。否则不变。移动到下一张或上一张幻灯片，这个要写在start外面，否则会触发.
    focus.addEventListener('touchend', function () {
        if (Math.abs(distance) > 50) {
            if (distance <= 0) {
                num++;
            } else {
                num--;
            }
        }
        // console.log(num);
        sliderPurpose = -(num - 1) * focus.offsetWidth;
        slider.style.transform = 'translateX(' + sliderPurpose + 'px)';
        slider.style.transition = 'all 1s';
    })

    var nav = document.querySelector('nav');
    var back = document.querySelector('.back');
    // 当页面滚动到一定高度时，显示返回顶部按钮
    document.addEventListener('scroll', function () {

        if (window.pageYOffset >= nav.offsetTop) {
            back.style.display = 'block';
            console.log(window.pageYOffset)

        } else {
            // 必须添加消失，否则顶部图标会一直都在
            back.style.display = 'none';
        }
        // console.log(1);
    })
    back.addEventListener('click', function () {
        window.scroll(0, 0);
        // window.style.transition = "all 1s";
    })
})
