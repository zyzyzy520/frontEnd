// 1.方法一定要放在Function.prototype，这样所有函数都可以调用
// 在定义函数时...arg表示剩余参数，形成一个伪数组，相当于是[arg1, arg2,...]。但是不具有伪数组的方法
Function.prototype.myApply = function (thisArg, ...arg) {
    // 2.如果传递过来的thisArg是null，让其指向window
    thisArg = thisArg || window
    // 3.myApply的调用者是函数foo，所以myApply函数里的this指向调用者函数foo，给thisArg里面的一个属性指针也指向这个函数，这样thisArg就可以通过.运算符调用foo函数，从而改变foo函数里的this指针
    thisArg.fn = this;
    // 4.拿到数组参数，函数有可能有参数，有可能没有参数，要进行判断
    // 5.调用函数，传递参数，注意result的声明不要放里面，形成块级作用域，结束就没有了
    let result;
    if (arg.length != 0) {
        // 将伪数组进行解构,arg = [[1,2,3]], arg[0]拿到参数数组，再解构
        result = thisArg.fn(...arg[0]);
    } else {
        // arg = []
        result = thisArg.fn();
    }

    // 6.删除属性，因为thisArg本来是没有这个属性的
    delete thisArg.fn;
    // 7.返回函数执行值
    return result;
}



// 首先写验证函数
function foo(a, b, c) {
    console.log(this.name);
    return a + b + c;
}
// 想要绑定的this对象
let obj = {
    name: 'Hello'
}
// 调用自己写的apply，注意参数得是数组
// foo函数自身时没有myApply这个属性的，其通过proto找到其构造函数Function.prototype指向的对象，里面有
console.log(foo.myApply(obj, [1, 2, 3]));