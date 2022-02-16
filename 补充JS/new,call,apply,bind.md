# 

![image-20220123100902919](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220123100902919.png)

- **`call`**和**`apply`**都会`改变this指向`，并`执行函数`，`将函数结果返回`。不同之处是，**`call`**函数的`参数是10,20,30`这样的形a式，**`apply`**函数的`参数是数组形式`。
- **`bind`**`不会执行函数`，会`将改变了this后的函数返回`



## 1. this

1. **`普通函数`**指向`函数的调用者`：有个简便的方法就是`看函数前面有没有点，如果有点，那么就指向点前面的那个值`;
2. **`箭头函数`**指向函数所在的所用域：注意理解作用域，只有函数的`{}`构成作用域，对象的`{}`以及 `if(){}`都不构成作用域。`如果被函数包裹，箭头函数的this和外层函数的this一致；没有被函数包裹，那么箭头函数的this指向window`



### 1.1 `普通函数`调用

#### 1.1.1 默认绑定

``` javascript
var a = 'luckyStar';
function foo() {
    console.log(this.a);
}
foo();
// luckyStar
```

foo()直接调用非严格模式下是this是指向 window上的，严格模式 this 指向的是undefined;



#### 1.1.2 隐式绑定

``` javascript
var a = 'luckyStar';
var obj = {
    a: 'litterStar',
    foo() {
        console.log(this.a);
    }
}
obj.foo(); // ①
// litterStar

var bar = obj.foo;  // bar = function(){console.log(this.a)}
bar(); // ②
// luckyStar

setTimeout(obj.foo, 100); // ③
// luckyStar
```

位置①，obj.foo()，是`obj通过`.`运算符调用了 foo()`，foo()函数体内的this指向调用者obj，因此console.log(this.a)输出obj.a = litterStar

位置②，是把 obj.foo赋值给了 bar，实际上是`把 foo函数赋值给了bar`, bar() 调用的时候，`没有调用者`，所以使用的是默认绑定规则。 

位置③，是把 obj.foo赋值给了 setTimeout的回调函数，实际上调用的还是foo函数，`调用的时候，没有调用者`，所以使用的是默认绑定规则。



#### 1.1.3 显式绑定

``` javascript
function foo() {
    console.log(this.name);
}
const obj = {
    name: 'litterStar'
}
const bar = function() {
    foo.call(obj);
}
bar();
// litterStar
```

使用 call，apply可以显式修改 this的指向。bar()调用bar函数，bar函数体内，执行foo()函数，并把foo函数的this改为obj。foo()函数函数体内，打印this.name，相当于打印obj.name。也就是打印'litterStar'



#### 1.1.4 new 绑定

``` javascript
function Foo(name) {
    this.name = name;
}
var luckyStar = new Foo('luckyStar');
luckyStar.name;
// luckyStar
```

要解释上面的结果就要从 **`new`** 的过程说起了

1. 创建一个新的`空对象 obj`
2. `将新对象的的原型指向当前函数的原型`
3. `新创建的对象绑定到当前this`上
4. 如果没有返回其他对象，就返回 obj，否则返回其他对象

``` javascript
function myNew(constructor, ...args) {
    // 1.创建一个空的对象
    let obj = {};
    // 2.让对象的proto指针和构造器的prototype指针指向同一个对象。将构造器的prototype中存储的地址给proto，使得可以指向同一个对象
    obj._proto_ = constructor.prototype;
    // 3. 调用构造函数，改变this，绑定对象的属性
    let result = constructor.apply(obj, args);
    // 4. 如果构造函数没有返回其它对象，就返回构造好的对象
    return result == undefined ? obj : result;
}
// 首先设置好测试构造函数和对象
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let Ash = myNew(Person, 'Ash', 23);
console.log(Ash.name, Ash.age);
```



#### 1.1.5 箭头函数调用

``` javascript
const obj = {
    name: 'litterStar',
    say() {
        console.log(this.name);
    },
    read: () => {
        console.log(this.name);
    }
}
obj.say(); // litterStar
obj.read(); // undefined
```

**`箭头函数中其实没有 this 绑定`**，因为箭头函数中this指向函数所在的所用域。箭头函数不能作为构造函数





## 2. call，apply，bind

call，apply，bind 这三个函数是 Function原型上的方法 `Function.prototype.call()`，`Function.prototype.apply`，`Function.prototype.bind()`，所有的函数都是 `Funciton` 的实例，因此`所有的函数可以调用call，apply，bind 这三个方法。`

### 2.1 call

call有两个作用，第一个可以**`调用函数`**，第二个可以**`改变函数内的this指向`**。**`只是在这一次fn.call改变，后续调用fn()，this还是原来的this`**

``` javascript
fn.call(thisArg, arg1, arg2,....)
```

-  `thisArg`：在 fn 函数运行时`指定的 this 值`，想要改变指向的接收对象
-  `arg1，arg2`：传递的`其他参数`
-  `返回值就是函数的返回值`，因为它就是调用函数 

![image](https://api2.mubu.com/v3/document_image/dd36c14e-4d9b-4249-af5c-36b644081c6a-10071129.jpg)

### 2.2 apply

apply有两个作用，第一个可以**`调用函数`**，第二个可以**`改变函数内的this指向`**。

在调用函数的时候可以将一个数组默认的转换为一个参数列表([param1,param2,param3] 转换为 param1,param2,param3)

``` javascript
fn.apply(thisArg, [argsArray])
```

-  `thisArg`：在fun函数运行时`指定的 this 值`
- `argsArray`：**`传递的值，必须包含在数组里面`**，**`apply在调用函数，给函数传递参数的时候会将参数数组默认的转换为一个参数列表([argsArray] 转换为 arg1,arg2,arg3)`**
- `返回值就是函数的返回值`，因为它就是调用函数 

arguments = [name, age]。利用apply调用Person类后，传过去的是name,age

![img](https://api2.mubu.com/v3/document_image/b43a7504-3337-4f74-b0c1-3b842fec7000-10071129.jpg)



### 2.3 bind

bind() 方法**`不会调用函数`**。但是**`能改变函数内部this指向`**

``` javascript
fn.bind(thisArg, arg1, arg2,...)
```

-  `thisArg`：在 fun 函数运行时`指定的 this 值`
- 🧶`arg1，arg2`：传递的其他参数。如果**`只是想在原函数的基础上改变this指向，这个不用传`**。
  - ![img](https://api2.mubu.com/v3/document_image/d316f084-91f2-4d66-8bb0-9e8af5f4b05c-10071129.jpg)
- 返回`由指定的 this 值和初始化参数改造的原函数拷贝`
- 因此当我们`只是想改变 this 指向，并且不想调用这个函数的时候`，可以使用 bind



> 调用bind，就会返回一个**`新的函数`**。这个函数里面的`this就指向bind的第一个参数`，同时**`this后面的参数是预置的参数`**。调用该新的函数时，再传递的参数会放到**`预置的参数后`**一起传递进新函数。

``` javascript
this.value = 2
var foo = {
    value: 1
};
var bar = function(name, age, school) {
  console.log(name) // 'An'
  console.log(age) // 22
  console.log(school) // '家里蹲大学'
}
var result = bar.bind(foo, 'An') //预置了第一个参数为'An'
result(22, '家里蹲大学') //这个参数会和预置的参数合并到一起放入bar中
```



### 2.4 总结

#### 2.4.1 相同点

call，apply，bind 这三个方法的`第一个参数(必选)，都是this`。如果你使用的时候不关心 this是谁的话，`可以直接设置为 null`，函数的this指向window



#### 2.4.2 不同点

- 函数调用 `call，apply`方法时，`返回的是调用函数的返回值`。
- 而`bind`是`返回一个新的函数`，你需要再加一个小括号来调用。
- call和apply的区别就是，`call`接受的是`一系列参数`，而`apply接受的是一个数组`。

但是有了 ES6引入的 `...`展开运算符，其实很多情况下使用 call和apply没有什么太大的区别。



## 3.手写apply、call、bind

### 3.1 call

实现一个call：

- 如果不指定this，则默认指向window
- 将函数设置为对象的属性
- 指定this到函数并传入给定参数执行函数
- 执行&删除这个函数，返回函数执行结果

关键代码：**`thisArg.fn = this;`**myCall函数里的this指向myCall的调用者(想改变this的函数foo)，因此把foo函数绑定在了想要修改的this(obj)属性上，这样通过thisArg.fn = this 就意味着obj.fn = foo，所以obj.fn = function(a, b, c){console.log(this.name,a,b,c)}。这样obj.fn和foo都指向了同一个函数，thisArg.fn()等价于obj.fn()，`函数体的this指向调用者obj`，这样就能成功改变this了。

``` javascript
// 1.首先函数要绑定到Function.prototype上，这样任何函数都可以使用，因为任意函数都是Function的实例
Function.prototype.myCall = function (thisArg, ...args) {
    // 2. 指定this为null，也指向window
    // if (thisArg == null) thisArg = window
    thisArg = thisArg || window
    // 3.将调用call的函数设置为this对象的属性，这样通过thisArg.XX调用函数，因为函数中的this指向调用者，从而可以使得函数的this指向thisArg
    // myCall函数的this指向调用者，也就是想要改变this指向的函数foo。我们把foo绑定在thisArg的属性上
    thisArg.fn = this;
    // 5.args是获取剩余的参数，值是一个数组。注意要分情况，可能没有参数，可能有参数;args=[1,2,3]，通过thisArg调用函数，并传递参数。这里对数组进行解构
    let result;
    if (args.length != 0) {
        result = thisArg.fn(...args);
    } else {
        result = thisArg.fn();
    }

    // 6.删除函数，返回调用结果
    delete thisArg.fn;
    return result
}


function foo(a, b, c) {
    console.log(this.name, a, b, c);
    return a + b + c
}
const obj = {
    name: 'litterStar'
}
const bar = function () {
    console.log(foo.myCall(obj, 1, 2, 3));
}
bar();
```



### 3.2 apply

 ``` javascript
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
 ```



### 3.3 bind

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

``` javascript
// 1. 首先要绑定到Fucntion.prototype上，这样所有函数都可以调用\
// 2. 在函数参数里的...args表示剩余参数，是一个伪数组，args = [arg1, arg2, ...]
Function.prototype.myBind = function (thisArg, ...args) {
    // 2. 不能再通过绑定到thisArg属性上了，因为后面会删除，这样再次调用就没了，所以用一个变量来存储this，形成闭包。这样thisArg会一直保存，使得后面直接调用返回的函数的时候，仍能够找到新的this-thisArg和预置的参数args
    // foo函数通过.运算符调用myBind，所以myBind里的this指向foo函数
    const fn = this;

    return function () {
        // 3.通过apply，改变this指向并调用函数
        let result = fn.apply(thisArg, [...args, ...arguments]);
        return result;
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
```



### 3.4 总结

本质上，call和apply都是通过给传入对象设定一个属性即指针，让这个指针指向函数，从而`通过thisArg.fn调用，让thisArg通过.运算符调用了函数，使得函数里的this指向了thisArg`

bind利用了`闭包和js模块内的apply`

