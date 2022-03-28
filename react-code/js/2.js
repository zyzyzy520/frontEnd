
// 1.防抖  
function debounce(fn, delay, immediate) {
    let timer = null;
    return function (...args) {  //这里最好别用箭头函数，this不稳地
        // 清除之前的定时器
        if (timer) {
            clearTimeout(timer);
        }

        // 判断是否要立即执行
        if (immediate && !timer) {
            fn.apply(this, delay)
        }

        // 开启新的定时器
        timer = setTimeout(() => {
            fn.apply(this, delay);
        }, delay)
    }
}

// 2.节流
function throttle(fn, delay) {
    let timer = null;
    return function (...args) {
        // 如果timer不存在才进入逻辑
        if (timer == null) {
            // 开启定时器，关闭阀门
            timer = setTimeout(() => {
                fn.apply(this, args);
                // 到时间执行完毕，关闭阀门，
                timer = null
            }, delay)
        }
    }
}