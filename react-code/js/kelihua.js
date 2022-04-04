// function sum(A) {
//     return function (B) {
//         return function (C) {
//             console.log(A + B + C);
//         }
//     }
// }

// sum(1)(2)(3)

// args是剩余参数，是一个数组
function curry(fn, ...args) {
    // 判断fn的参数长度，和args长度大小
    if (fn.length <= args.length) {
        // args是数组，进行参数分解
        return fn(...args)
    } else {
        return function (..._args) {
            return curry(fn, ..._args, ...args);
        }
    }
}
function sum1(a, b, c) {
    return a + b + c
}
let sum = curry(sum1);
console.log(sum(1)(2)(3))