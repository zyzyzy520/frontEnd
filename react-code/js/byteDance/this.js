var a = function () { this.b = 3 }
var c = new a()  //1.c是a的实例对象，new：生成一个新对象，新对象的__proto__=构造函数的prototype。然后调用a.apply(obj)，所以obj.b = 3, 然后返回obj，
//所以c = {b ：3}

a.prototype.b = 10 //2. a的原型链上有个属性b：10

var b = 7           //3.定义变量b =7，var声明，window.b = 7

a()                 //4.执行函数，函数里的this指向window，window.b = 3
console.log(b)      //5.全局变量中的b已经被修改，所以是3
console.log(c.b)    //6.输出3
/*
浏览器 3 3
js： 7 3
*/

function Father(name, age) {
    this.name = name;
    this.age = age;
}
let zhou = new Father('abc', 12);