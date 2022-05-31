//args剩余参数，是一个数组,[[1,2,3]]
Function.prototype.myApply = function (thisArg, ...args) {
    //如果没有输入this参数，默认为window
    if (thisArg == null || thisArg == undefined) thisArg = window;
    // 利用函数的this指向调用者的方法改变this指向。myApply的调用者是函数，所以myApply里的this指向函数
    thisArg.fn = this;
    let res = null;
    if (args.length == 0) {
        res = thisArg.fn()
    } else {
        res = thisArg.fn(...args[0]);
    }
    delete thisArg.fn;
    return res;
}

//args剩余参数，是一个数组, args=[1, 2, 3]
Function.prototype.myCall = function (thisArg, ...args) {
    // 如果没输入this变量或者输入为null，默认为window
    if (thisArg == null || thisArg == undefined) thisArg = window;
    thisArg.fn = this;
    let res = thisArg.fn(...args)
    delete thisArg.fn;
    return res;
}

//
Function.prototype.myBind = function (thisArg, ...args) {
    let fn = this;
    return function (..._args) {
        let res = fn.apply(thisArg, [...args, ..._args])
        return res;
    }
}

let obj = {
    name: 'obj'
}
let test = {
    name: 'test',
    fnc: function (a, b, c, d, e, f) {
        console.log(this.name);
        console.log(a + b + c);
        console.log(d + e + f)
    }
}
test.fnc()
test.fnc.myApply(obj, [1, 2, 3])
test.fnc.myCall(obj, 1, 2, 3)
let newfn = test.fnc.myBind(obj, 1, 2, 3);
newfn(4, 5, 6);

console.log('-------------------------------');

function deepClone(oriObj) {
    // 判断是简单类型还是引用类型
    if (typeof oriObj == 'object') {
        //判断是不是数组
        let copyObj = Array.isArray(oriObj) ? [] : {}
        for (let i in oriObj) {
            copyObj[i] = deepClone(oriObj[i]);
        }
        return copyObj;
    } else {
        return oriObj
    }
}

let oriObj = {
    name: 'abc',
    friends: [{
        name: 'Ash',
        friends: [{
            name: 'ZHOU'
        }, {
            name: 'Yu'
        }]
    }, {
        name: 'Liu'
    }]
}
console.log(deepClone(oriObj))

console.log('-------------------');;

// 1.节流
function throttle(fn, delay) {
    let timer = null;
    return function (...args) {
        // 如果阀门被打开了，说明到时间了，才能开启定时器
        if (timer == null) {
            timer = setTimeout(() => {
                // 执行函数，关闭阀门
                fn.apply(this, args);
                timer = null;
            }, delay)
        }
    }
}

// 2.防抖
function debounce(fn, delay, immediate) {
    let timer = null;
    return function (...args) {
        // 清除之前的定时器
        if (timer) clearTimeout(timer)
        // 判断是否要立即执行
        if (immediate && !timer) {
            fn.apply(this, args);
        }
        // 开启新的定时器
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

console.log('-------------------')

// 函数柯里化
function curry(fn, ...args) {
    // 判断函数需要的参数的长度和能给的参数长度的大小
    if (fn.length <= args.length) {
        return fn.apply(this, args);
    } else {
        return function (..._args) {
            return curry(fn, ...args, ..._args);
        }
    }
}
function sum1(a, b, c) {
    return a + b + c;
}
let sum = curry(sum1);
console.log(sum(1, 2, 3));
console.log(sum(1)(2)(3));
console.log(sum(1, 2)(3))
console.log(sum(1)(2, 3))


console.log('-------------')

function myInstanceof(L, R) {
    while (L != null) {
        if (L.__proto__ == R.prototype) return true;
        L = L.__proto__;
    }
    return false;
}

let arr = [];

console.log(myInstanceof(arr, Number))