# this

## 1. this指向什么

在全局作用域下，我们可以认为this就是指向的window

``` javascript
console.log(this); // window

var name = "why";
console.log(this.name); // why
console.log(window.name); // why
```

但是，开发中很少直接在全局作用域下去使用this，通常都是在函数中使用。

1. 函数在调用时，JavaScript会默认给this绑定一个值；
2. this的绑定和定义的位置（编写的位置）没有关系；
3. `this的绑定和调用方式以及调用的位置有关系`；
4. this是在`运行时被绑定`的；`this就是在函数调用时被绑定的一个对象`，我们就需要知道它在不同的场景下的绑定规则即可。
   

## 2. this绑定规则

### 2.1. 默认绑定

默认绑定的情况为`独立函数调用`。（独立的函数调用可以理解成**`函数没有被绑定到某个对象上进行调用`**）

### 案例一：普通函数调用

该函数直接被调用，并没有进行任何的对象关联；
这种独立的函数调用会使用默认绑定，通常默认绑定时，函数中的this指向全局对象（window）；

``` javascript
function foo() {
  console.log(this); // window
}
foo();
```

### 案例二：函数调用链（一个函数又调用另外一个函数）

所有的函数调用都没有被绑定到某个对象上；

``` javascript
// 2.案例二:
function test1() {
  console.log(this); // window
  test2();
}

function test2() {
  console.log(this); // window
  test3()
}

function test3() {
  console.log(this); // window
}
test1();

```

### 案例三：将函数作为参数，传入到另一个函数中

``` javascript
function foo(func) {
  func()
}

function bar() {
  console.log(this); // window
}

foo(bar);
```

我们对案例进行一些修改，考虑一下打印结果是否会发生变化：

``` javascript
function foo(func) {
  func()
}

var obj = {
  name: "why",
  bar: function() {
    console.log(this); // window
  }
}

foo(obj.bar);
```

这里的结果依然是window，为什么呢？
原因非常简单，**`在真正函数调用的位置，并没有进行任何的对象绑定，只是一个独立函数的调用；`**



### 2.2. 隐式绑定

另外一种比较常见的调用方式`是通过某个对象进行调用的`：也就是**`它的调用位置中，是通过某个对象发起的函数调用`**。

### 案例一：通过对象调用函数

`foo的调用位置是obj.foo()方式进行调用`的
那么foo调用时`this会隐式的被绑定到obj对象上`

``` javascript
function foo() {
  console.log(this); // obj对象
}

var obj = {
  name: "why",
  foo: foo
}

obj.foo();
```

### 案例二：案例一的变化

我们通过obj2又引用了obj1对象，再通过obj1对象调用foo函数；
那么foo调用的位置上其实还是obj1被绑定了this；

``` javascript
function foo() {
  console.log(this); // obj1对象
}

var obj1 = {
  name: "obj1",
  foo: foo
}

var obj2 = {
  name: "obj2",
  obj1: obj1
}

obj2.obj1.foo();

```

### 案例三：隐式丢失

结果最终是window，为什么是window呢？
因为`foo最终被调用的位置是bar，而bar在进行调用时没有绑定任何的对象`，也就没有形成隐式绑定；
相当于是一种默认绑定；

``` javascript
function foo() {
  console.log(this);
}

var obj1 = {
  name: "obj1",
  foo: foo
}

// 讲obj1的foo赋值给bar
var bar = obj1.foo;
bar();

```



### 2.3. 显示绑定

隐式绑定有一个前提条件：

- `必须在调用的对象内部有一个对函数的引用`（比如一个属性）；
- 如果没有这样的引用，在进行调用时，会报找不到该函数的错误；
- 正是通过这个引用，间接的将this绑定到了这个对象上；

如果我们不希望在 对象内部 包含这个函数的引用，同时又希望在这个对象上进行强制调用，该怎么做呢？

- JavaScript所有的函数都可以使用`call和apply`方法（这个和Prototype有关）。
- 它们两个的区别这里不再展开；
- 其实非常简单，第一个参数是相同的，后面的参数，apply为数组，call为参数列表；
- 这两个函数的第一个参数都要求是一个对象，这个对象的作用是什么呢？就是给this准备的。
- 在调用这个函数时，会将this绑定到这个传入的对象上。
- 因为上面的过程，我们`明确的绑定了this指向的对象，所以称之为 显示绑定`。

#### 2.3.1. 通过call或者apply绑定this对象

显示绑定后，this就会明确的指向绑定的对象

``` javascript
function foo() {
  console.log(this);
}

foo.call(window); // window
foo.call({name: "why"}); // {name: "why"}
foo.call(123); // Number对象,存放时123
```

#### 2.3.2. bind函数

希望`一个函数总是显示的绑定到一个对象上`

``` javascript
function foo() {
  console.log(this);
}

var obj = {
  name: "why"
}

var bar = foo.bind(obj);

bar(); // obj对象
bar(); // obj对象
bar(); // obj对象
```

#### 2.3.3. 内置函数

有些时候，我们会调用一些JavaScript的内置函数，或者一些第三方库中的内置函数。

这些`内置函数会要求我们传入另外一个函数`；
`我们自己并不会显示的调用这些函数，而是JavaScript内部或者第三方库内部会帮助我们执行`；
这些函数中的this又是如何绑定的呢？

#### 案例一：setTimeout

setTimeout中会传入一个函数，这个函数中的this通常是window

``` javascript
setTimeout(function() {
  console.log(this); // window
}, 1000)
```

为什么这里是window呢？

- 这个和setTimeout源码的内部调用有关；
- `setTimeout内部是通过apply进行绑定的this对象，并且绑定的是全局对象`；



两种改变setTimeout中回调函数this的方法

``` javascript
//法一：箭头函数
btn.onclick = function(){

setTimeout(()=>{

this.disabled = true;

},1000)

}

//法二：bind,不能用apply和call，使用的话就是函数的执行结果作为回调，回调这里需要放的是函数
btn.onclick = function(){

setTimeout(function(){this.disabled = true;}.bind(this),1000)

}
```

#### 案例二：数组的forEach

数组有一个高阶函数forEach，用于函数的遍历：

在forEach中传入的函数打印的也是Window对象；
这是因为`默认情况下传入的函数是自动调用函数`（默认绑定）

``` javascript
var names = ["abc", "cba", "nba"];
names.forEach(function(item) {
  console.log(this); // 三次window
}); 
// 相当于三次 fn() fn() fn()  fn是回调函数

```

我们是否可以改变该函数的this指向呢？

![在这里插入图片描述](https://img-blog.csdnimg.cn/a5a61c51c7e24ffea20585d90f43aad0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6aG66aOO5oqV6ZmN5LiT5a62,size_18,color_FFFFFF,t_70,g_se,x_16)

``` javascript
var names = ["abc", "cba", "nba"];
var obj = {name: "why"};
names.forEach(function(item) {
  console.log(this); // 三次obj对象
}, obj);
```



#### 案例三：div的点击

``` javascript
var box = document.querySelector(".box");
box.onclick = function() {
  console.log(this); // box对象
}
```

获取元素节点，并且监听点击：

- 在点击事件的回调中，this指向谁呢？box对象；
- 这是因为`在发生点击时，执行传入的回调函数被调用时，会将box对象绑定到该函数中`；



### 2.4. new绑定

JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字。

使用new关键字来调用函数时，会执行如下的操作：

1. 创建一个全新的对象；
2. 这个新对象会被执行Prototype连接；
3. 这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）；
4. 如果函数没有返回其他对象，表达式会返回这个新对象；

``` javascript
// 创建Person
function Person(name) {
  console.log(this); // Person {}
  this.name = name; // Person {name: "why"}
}

var p = new Person("why");
console.log(p);

```



### 2.5. 规则优先级

new绑定 > 显示绑定（bind）> 隐式绑定 > 默认绑定



## 3. this规则之外

### 3.1 ES6箭头函数

`箭头函数并不绑定this对象`，那么this引用就`会从上层作用域中找到对应的this`

``` javascript
var obj = {
  data: [],
  getData: function() {
    setTimeout(() => {
      // 模拟获取到的数据
      var res = ["abc", "cba", "nba"];
      this.data.push(...res);
    }, 1000);
  }
}

obj.getData();

```

思考：如果getData也是一个箭头函数，那么setTimeout中的回调函数中的this指向谁呢？

- 答案是window；
- 依然是不断的从上层作用域找，那么找到了全局作用域；
- 在全局作用域内，this代表的就是window

``` javascript
var obj = {
  data: [],
  getData: () => {
    setTimeout(() => {
      console.log(this); // window
    }, 1000);
  }
}

obj.getData();

```



## 4. 案例

### 案例一

``` javascript
var name = 'window'
var person1 = {
    name: 'person1',
    foo1: function () {
        console.log(this.name)
    },
    foo2: () => console.log(this.name),
    foo3: function () {
        return function () {
            console.log(this.name)
        }
    },
    foo4: function () {
        return () => {
            console.log(this.name)
        }
    }
}

var person2 = { name: 'person2' }

person1.foo3()();  
person1.foo3.call(person2)(); 
person1.foo3().call(person2); 

person1.foo4()();  
person1.foo4.call(person2)(); 
person1.foo4().call(person2); 

/*
person1.foo3()();  //window，person1.foo3()，person1通过.运算符调用foo3函数，得到返回的函数，然后再对返回的普通函数进行直接调用，所以返回函数里的							this指向window

person1.foo3.call(person2)(); //window， person1.foo3.call(person2)，person1通过.运算符调用foo3函数并将foo3函数里的this指向改为person2，得									到返回的函数然后再对返回的普通函数进行直接调用，所以返回函数里的this指向window。虽然foo3里的this被改变，但是普通								  函数的this由调用者决定，返回函数是直接调用，所以this指向window

person1.foo3().call(person2); //person2，person1.foo3()，person1通过.运算符调用foo3函数，得到返回的函数，然后再对返回的普通函数进行调用并利用									call将返回函数里的this改为person2，所以返回函数里的this指向person2


person1.foo4()();  //person1，person1.foo4()，person1通过.运算符调用foo4函数，所以foo4的this指向person1，得到返回的函数，这里返回的函数是箭头函					   数。然后再对返回的箭头函数进行直接调用。箭头函数的this指向与上下文有关。返回的箭头函数被foo4包裹，所以其this指向与foo4的this指					向一致，所以箭头函数的this指向person1

person1.foo4.call(person2)(); //person2，person1.foo4.call(person2)，person1通过.运算符调用foo4函数并将foo4函数里的this指向改为person2，到								   返回的函数，这里返回的函数是箭头函数。然后再对返回的箭头函数进行直接调用。箭头函数的this指向与上下文有关。返回的箭头									函数被foo4包裹，所以其this指向与foo4的this指向一致，所以箭头函数的this指向person2

person1.foo4().call(person2); //person1，person1.foo4()，person1通过.运算符调用foo4函数，所以foo4的this指向person1，得到返回的函数，这里返回									的函数是箭头函数。然后再对返回的箭头函数进行调用，注意apply和bind以及call对箭头函数无效，并不能改变箭头函数里的									this。箭头函数的this始终只与与上下文有关。返回的箭头函数被foo4包裹，所以其this指向与foo4的this指向一致，所以箭头								函数的this指向person1

*/
```



### 案例二

``` javascript
var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1()
person1.foo1.call(person2)

person1.foo2()
person1.foo2.call(person2)

person1.foo3()()
person1.foo3.call(person2)()
person1.foo3().call(person2)

person1.foo4()()
person1.foo4.call(person2)()
person1.foo4().call(person2)

/*
person1.foo1()     // person1
person1.foo1.call(person2)  //person2

person1.foo2()     //person1，foo2是箭头函数，其this只与上下文环境有关，其被构造函数包裹，所以this指向与构造函数里的this一致，指向person1
person1.foo2.call(person2) //person1

person1.foo3()()   //window
person1.foo3.call(person2)()  //window
person1.foo3().call(person2)   //person2

person1.foo4()()   //person1
person1.foo4.call(person2)() //person2
person1.foo4().call(person2) //person1


*/

```



### 案例三

``` javascript
var name = 'window'
function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()
person1.obj.foo1.call(person2)()
person1.obj.foo1().call(person2)

person1.obj.foo2()()
person1.obj.foo2.call(person2)()
person1.obj.foo2().call(person2)

/*
// obj.foo1()返回一个函数
// 这个函数在全局作用于下直接执行（默认绑定）
person1.obj.foo1()() // window
// 最终还是拿到一个返回的函数（虽然多了一步call的绑定）
// 这个函数在全局作用于下直接执行（默认绑定）
person1.obj.foo1.call(person2)() // window
person1.obj.foo1().call(person2) // person2

// 拿到foo2()的返回值，是一个箭头函数
// 箭头函数在执行时找上层作用域下的this，就是obj
person1.obj.foo2()() // obj
// foo2()的返回值，依然是箭头函数，但是在执行foo2时绑定了person2
// 箭头函数在执行时找上层作用域下的this，找到的是person2
person1.obj.foo2.call(person2)() // person2
// foo2()的返回值，依然是箭头函数
// 箭头函数通过call调用是不会绑定this，所以找上层作用域下的this是obj
person1.obj.foo2().call(person2) // obj



*/
```

