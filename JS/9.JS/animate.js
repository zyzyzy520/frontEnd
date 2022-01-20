function animate(obj, target, callback) {
    // clearInterval(obj.timer);
    var steps;
    if (!obj.timer) {
        obj.timer = setInterval(function () {
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                delete obj.timer;
                // 要判断是否加了回调函数
                if (callback) {
                    callback();
                }
            }
            // 因为步长是变化的，所以肯定写在定时器内部。
            steps = (target - obj.offsetLeft) / 10;
            steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps);
            obj.style.left = obj.offsetLeft + steps + 'px';
        }, 15)
    }

}