function fn(...args) {
    const add = function (..._args) {
        return fn(...args, ..._args);
    }
    add.getValue = function () {
        console.log(addfn(...args));
    }
    return add;
}
function addfn(...args) {
    return args.reduce((pre, cur) => pre + cur)
}
var f1 = fn(1, 2, 3);
f1.getValue()

var f2 = fn(1)(2, 3)
f2.getValue();

var f3 = fn(1)(2)(3)(4)
f3.getValue()