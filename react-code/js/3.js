
// function change(o) {  //将实参o的值复制一份给形参o，此时形参o和实参o存储的都是同一个对象的地址，指向的是同一个对象。
//     o.url = 'xxxx1'  //给对象添加属性url：xxx1
//     o = new Object()    //让形参o指向另外一个对象，那么实参o指向的对象就不会受到影响
//     o.url = 'xxxx2'
// }
// let o = new Object();
// change(o)
// console.log(o)  ///xxx1


// async function async1() {
//     console.log('async1 start')  //4. 打印async1 start
//     await async2()               //5. 执行async2， 并阻碍后续执行，将该任务加入微任务队列中，micro = [async1]
//     console.log('async1 end')
// }

// async function async2() {
//     console.log('async2')       //6. 打印async2
// }

// console.log('script start') //1. 打印script start
// setTimeout(function () {    //2. 开启定时器，将定时器1 加入宏任务队列中 marco = [time1]
//     console.log('setTimeout')
// }, 0)
// async1();                   //3.执行函数async1
// new Promise(function (resolve) {  //7.执行promise
//     console.log('promise1');     //8. 打印promise1
//     resolve();
// }).then(function () {           //9. 将该任务加入微任务队列中[async1, then1]
//     console.log('promise2')
// })
// console.log('script end');    //10.打印script end

/*
    11. 清空微任务队列
        async1:  打印async1 end
        then1: 打印promise2
    12.拿出一个宏任务执行
        time1: 打印setTimeout
*/
/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/
Function.prototype.myBind = function (thisArg, ...args) {
    let fn = this;
    return function () {
        let res = fn.apply(thisArg, [...args, ...arguments]);
        return res;
    }
}
// 写验证函数
function foo(a, b, c) {
    console.log(this.name);
    return a + b + c;
}

let obj = {
    name: 'Hello'
}

let fn = foo.myBind(obj, 1);
console.log(fn(2, 3));
console.log(fn(2, 4));