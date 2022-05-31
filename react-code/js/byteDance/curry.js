

// - 闭包+函数柯里化问题
// var f1 = fn(1, 2, 3)
// f1.getValue()//6

// var f2 = fn(1)(2, 3)
// f2.getValue()//6

// var f3 = fn(1)(2)(3)(4)//不知道调用次数
// f3.getValue()//10

// function fn(...arg) {

// }
//1.函数参数固定
// function curry(fn, ...args) {
//     if (fn.length <= args.length) {
//         return {
//             sumof: function () { return fn(...args) }
//         };
//     } else return function (..._args) {
//         return curry(fn, ..._args, ...args);
//     }
// }
// function add1(a, b, c) {
//     return a + b + c
// }
// let add = curry(add1)
// console.log(add(1, 2, 3).sumof())
// console.log(add(1)(2)(3).sumof())
// console.log(add(1, 2)(3).sumof())

//函数参数不固定

// const add = (...args) => {

//     const fn = function (...addition) {
//         let concatArgs = args.concat(addition);
//         return add(...concatArgs);
//     }
//     fn.sumOf = function () {
//         console.log(addFn(args));
//     }
//     return fn;
// }
// const addFn = (args) => {
//     return args.reduce((p, c) => p + c, 0);
// };
// add(1, 2, 3).sumOf()
// add(1)(2)(3).sumOf()
// add(1, 2)(3).sumOf()
// add(4, 5)(1)(2, 3).sumOf()
// add(1, 1)(3)(6).sumOf()





