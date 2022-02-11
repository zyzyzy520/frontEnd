# 执行上下文

## 1. 什么是执行上下文

执行上下文就是当前 `JavaScript 代码被解析和执行时所在环境`的抽象概念

## 2. 执行上下文的类型

1. **`全局`**执行上下文： 
   - 这是默认的、最基础的执行上下文。`不在任何函数中的代码都位于全局执行上下文中`。它做了两件事：
     1. **`创建一个全局对象`**，在浏览器中这个全局对象就是 window 对象。
     2. **`将 this 指针指向这个全局对象`**。`一个程序中只能存在一个全局执行上下文`。
2. **`函数`**执行上下文： 
   - 每次**`调用函数`**时，都会`为该函数创建一个新的执行上下文`。
   - `每个函数都拥有自己的执行上下文`，但是只有在**`函数被调用的时候才会被创建`**。
   - 一个程序中可以存在任意数量的函数执行上下文。每当一个新的执行上下文被创建，它都会按照特定的顺序执行一系列步骤，具体过程将在本文后面讨论。
3. Eval 函数执行上下文： 
   - 运行在 eval 函数中的代码也获得了自己的执行上下文，但由于 Javascript 开发人员不常用 eval 函数，所以在这里不再讨论。

## 3. 执行上下文的生命周期

执行上下文的生命周期包括三个阶段：**`创建阶段→执行阶段→回收阶段`**，本文重点介绍创建阶段。

### 3.1 创建阶段(预解析)

当函数被调用，但未执行任何其内部代码之前，会做以下三件事：

1. **`创建变量对象`**：首先`初始化函数的参数arguments`，`提升函数声明和变量声明`。下文会详细说明。
2. **`创建作用域链`**（Scope Chain）：在执行期上下文的创建阶段，`作用域链是在变量对象之后创建的`。`作用域链本身包含变量对象`。`作用域链用于解析变量`。当被要求解析变量时，JavaScript 始终`从代码嵌套的最内层开始，如果最内层没有找到变量，就会跳转到上一层父作用域中查找，直到找到该变量`。
3. **`确定this指向`**：包括多种情况，下文会详细说明

> 在一段 `JS 脚本执行之前`，要先**`解析代码`**（所以说 JS 是解释执行的脚本语言），解析的时候会**`先创建一个全局执行上下文环境`，**先把**`代码中即将执行的变量、函数声明都拿出来`**。`变量先暂时赋值为undefined，函数则先声明好可使用`。这一步做完了，然后再开始正式执行程序。



> 另外，一个函数在执行之前，也会创建一个函数执行上下文环境，跟全局上下文差不多，不过 函数执行上下文中会多出this arguments和函数的参数。



### 3.2 执行阶段

执行变量赋值、代码执行



### 3.3 回收阶段

执行上下文出栈等待虚拟机回收执行上下文



## 4. 变量提升和this指向的细节

### 4.1 变量声明提升和函数提升

### 变量预解析（变量提升）

- 变量提升： `变量的声明`会被提升到`当前作用域的最上面`，变量的`赋值不会提升`。

### 函数预解析（函数提升）

- 函数提升： `函数的声明`会被提升到`当前作用域的最上面`，但是`不会调用函数`。

> **`当遇到函数和变量同名且都会被提升的情况，函数声明优先级比较高，因此变量声明会被函数声明所覆盖，但是可以重新赋值。`**



``` javascript
alert(a);//输出：function a(){ alert('我是函数') }
function a(){ alert('我是函数') }//
var a = '我是变量';
alert(a);   //输出：'我是变量'
```

function声明的优先级比var声明高，也就意味着当两个同名变量同时被function和var声明时，function声明会覆盖var声明



``` javascript
function test(arg){
    console.log(arg);  
    var arg = 'hello'; 
    function arg(){
    console.log('hello world') 
    }
    console.log(arg);  
}
test('hi');

/*
    function test(arg = hi){
        var arg
        function arg(){};    
        console.log(arg); //function arg(){}
        arg = 'hello';
        console.log(arg) // hello
    }
    test('hi')
*/
```

这是因为当`函数执行的时候`,首先会形成一个`新的私有的作用域`，然后依次按照如下的步骤执行：

- 如果**`有形参，先给形参赋值`**
- 进行私有作用域中的**`预解释`**，函数声明优先级比变量声明高，最后后者会被前者所覆盖，**`但是可以重新赋值`**
- **`私有作用域中的代码从上到下执行`**

## 5.`this指向`

``` javascript
function Cat(){
    let showName = function(){
        console.log(1);
    }
    return this
}
console.log(Cat());
```

- `this`指向`调用者`，在`浏览器中运行`，Cat()实际上为`window.Cat()`，因此`this指向window对象`，打印出来是window对象；在`Node.js`环境下运行时，`this指向全局对象global`

- `属性和方法定义均不会用到let`，因此showName就是一个定义到Cat构造函数里的普通函数。可以看到实例化对象无法调用该普通方法。

``` javascript
function Cat() {
    let showName = function () {
        console.log(1);
    }
}
const Doggy = new Cat();
Doggy.showName()
```

![image-20220102174652770](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220102174652770.png)

### 5.1 `普通函数`调用

- `this指向window对象/global对象`。在`浏览器`中调用普通函数，省略了`window`；`Node.js`中，省略了全局对象`global`

``` javascript
function opp(){
    console.log('该函数this指向' + this);
}
opp() // 实际上是window.opp();
```

### 5.2 `对象方法`调用

- this指向`对象`

``` javascript
const opp = {
    sayhi: function () {
        console.log("该对象的this指向", this);
    }
}
opp.sayhi();
```

![image-20220102175410811](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220102175410811.png)

### 5.3 `构造函数`调用

- this指向`实例化对象`，new对象。`原型对象里面的方法this也指向调用它的实例对象`

```  javascript
function Dog(){}
Dog.prototype.sayHi = function(){
    console.log('该构造函数的this指向' + this);
}
const fil = new Dog();
fil.sayHi();
```

### 5.4 绑定事件函数

- this指向`事件绑定的对象`

``` javascript
        let btn = document.querySelector('#btn');
        btn.addEventListener('click', function () {
            console.log('该点击事件的this指向' + this);
        })
```

![image-20220102180125348](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220102180125348.png)

### 5.5 定时器函数

- this指向`window`，实际上省略了window，`window.setTimeout()`

``` javascript
        setTimeout(function () {
            console.log('定时器的this指向' + this);
        }, 3000);
```

![image-20220102180335395](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220102180335395.png)

### 6. 立即执行函数

- this指向`window`

``` javascript
        (function () {
            console.log('立即执行函数的this指向' + this);
        })();
```



![image-20220102180606747](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220102180606747.png)

## 