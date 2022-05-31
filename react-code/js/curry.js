// args是剩余参数，本质是一个数组
function curry(fn, ...args) {
    // 判断函数的参数是否比args的长度小
    if (fn.length <= args.length) return fn(...args)
    else {
        return function (..._args) {
            return curry(fn, ...args, ..._args);
        }
    }
}

function sum1(a, b, c) {
    return a + b + c
}
const sum = curry(sum1);

console.log(sum(1, 2, 3));
console.log(sum(1)(2)(3));
console.log(sum(1, 2)(3));
console.log(sum(1)(2, 3))

function change(o) {
    o.url = 'xxxx1';
    o = new Object();
    o.url = 'xxxx2'
}
let o = new Object();
change(o)
console.log(o.url)


function changeWord(word) {
    if (word >= 'a' && word <= 'z') return word.toUpperCase();
    else if (word >= 'A' && word <= 'Z') return word.toLowerCase();
}

console.log(changeWord('h'));
console.log(changeWord('M'))


var obj = { x: 1, y: { z: 2 } }
var obj2 = obj   //obj2和obj指向同一个对象{ x: 1, y: { z: 2 } }
var obj3 = obj2.y // obj3 指向对象{ z: 2 }
obj.y = 3       //obj和obj2指向的对象修改为{ x: 1, y: 3 }
obj3.x = 1      //obj3 指向对象{ x: 1, z: 2 }
obj2.x = 2      //obj和obj2指向的对象修改为{ x: 2, y: 3 }
obj3.x = 3      //obj3 指向对象{ x: 3, z: 2 }
console.log(obj, obj2, obj3)

// { x: 2, y: 3 } { x: 2, y: 3 } { x: 3, z: 2 }

var obj = { x: 1, y: { z: 2 } }
var obj2 = obj   //obj2和obj指向同一个对象{ x: 1, y: { z: 2 } }
var obj3 = obj2.y // obj3 指向对象{ z: 2 }
obj3.z = 3
console.log(obj, obj2, obj3)

//{ x: 1, y: { z: 3 } } { x: 1, y: { z: 3 } } { z: 3 }

let arr = [1, 2, 3]
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(arr.constructor == Array);
console.log(Object.prototype.toString.apply(arr) == '[object Array]')

var name = 'zhang'
function fn(name) {
    console.log(name) //undefined
}
fn()


let num = new Number(1);
console.log(num instanceof Number)

let a = null;
console.log(Object.prototype.toString.apply(a));