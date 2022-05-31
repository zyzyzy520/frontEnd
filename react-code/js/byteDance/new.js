function myNew(fn, ...args) {
    // 1.声明一个空对象
    let obj = {};
    // 2.原型绑定
    obj.__proto__ = fn.prototype;
    // 3.调用fn，利用apply改变this
    let res = fn.apply(obj, args);
    // 4.判断结果是否为对象，是对象返回，不是对象烦恼会声明的对象
    if (typeof res == 'object') return res;
    else return obj;
}

function Father(name, age) {
    this.name = name;
    this.age = age;
}

let son = myNew(Father, 'zhou', 12)
console.log(son.name, son.age)