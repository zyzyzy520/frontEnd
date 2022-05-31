function fn(...args) {
    const add = function (..._args) {
        return fn(...args, ..._args);
    }
    add.getValue = function () {
        console.log(addFn(...args));
    }
    return add;
}
function addFn(...args) {
    return args.reduce((prev, cur) => prev + cur);
}
var f1 = fn(1, 2, 3);
f1.getValue()

var f2 = fn(1)(2, 3)
f2.getValue();

var f3 = fn(1)(2)(3)(4)
f3.getValue()