//args是剩余参数
Function.prototype.myapply = function (thisArg, ...args) {
    if (thisArg == null || thisArg == undefined) thisArg = window;
    //通过调用的方式，改变this
    thisArg.fn = this;
    let res = null;
    //没传参数
    if (args.length == 0) {
        res = thisArg.fn();
    } else {
        //传了参数
        res = thisArg.fn(...args[0]);
    }
    delete thisArg.fn;
    return res;
}

//[1,2,34]
Function.prototype.myCall = function (thisArg, ...args) {
    if (thisArg == null || thisArg == undefined) thisArg = window;
    //通过调用的方式改变this
    thisArg.fn = this;
    let res = thisArg.fn(...args);
    delete thisArg.fn;
    return res;
}

Function.prototype.myBind = function (thisArg, ...args) {
    let fn = this;
    return function (..._args) {
        return fn.apply(thisArg, [...args, ..._args])
    }
}


function deepClone(oriObj, map = new WeakMap()) {
    //判断是什么类型
    if (typeof oriObj == 'object') {
        let cloneObj = Array.isArray(oriObj) ? [] : {};
        if (map.has(oriObj)) return map.get(oriObj);
        for (let key in oriObj) {
            cloneObj[key] = deepClone(oriObj[key]);
        }
        map.set(oriObj, cloneObj);
        return cloneObj;
    } else {
        //普通类型直接返回即可
        return oriObj
    }
}

//节流，在触发后开始计时，不论后面再次触发多少次都不会重新计时，直到时间截止，
function throttle(fn, delay) {
    let timer = null
    return function (...args) {
        //判断阀门是否关闭
        if (timer == null) {
            //关闭阀门
            timer = setTimeout(() => {
                fn.apply(this, args);
                //开启阀门
                timer = null;
            }, delay)
        }
    }

}

//防抖，触发后开始计时，如果再次触发重新计时，时间到开始执行
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        //清除之前的定时器
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}

function fn(...args) {
    const add = function (..._args) {
        return fn(...args, ..._args)
    }
    add.getValue = function () {
        let res = addfn(...args);
        console.log(res);
    }
    return add;
}
function addfn(...args) {
    return args.reduce((cur, pre) => cur + pre);
}
var f1 = fn(1, 2, 3);
f1.getValue()

var f2 = fn(1)(2, 3)
f2.getValue();

var f3 = fn(1)(2)(3)(4)
f3.getValue()


function sum(...args) {
    if (args.length == 0) return 0;
    return function (..._args) {
        if (_args.length == 0) {
            return addfn(...args);
        } else {
            return sum(..._args, ...args);
        }
    }
}
console.log(sum(12)(3)(4)(7, 5)())
console.log(sum())