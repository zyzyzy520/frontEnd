function Cat() {
    let showName = function () {
        console.log(1);
    }
    return this;
}

//定义在Cat类上的属性，类属性只能通过Cat类名来访问
Cat.showName = function () { console.log(2) }
//在Cat类的原型上定义方法showName，对象都可以共享。
Cat.prototype.showName = function () { console.log(3); }
var showName = function () { console.log(4); }
function showName() { console.log(5); }

// 1.调用直接定义在类上的方法
Cat.showName();
// 2.定义在原型上的方法，对象也可以访问
let smallCat = new Cat();
smallCat.showName();