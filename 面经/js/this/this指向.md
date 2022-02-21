# this指向

## 1.普通函数调用

``` javascript
window.name = 'window';
var obj = {
    name:'obj',
    show_name:function (){
        console.log(this.name); //obj
        function fn (){
            console.log(this.name); //window
        }
        fn();
    },
}
obj.show_name();  // window
```

- obj对象有一个属性show_name，属性值是一个函数；

- `obj.show_name()`调用obj对象里的show_name函数，执行函数体函数里的this指向调用者obj，所以第一个`console.log(this.name)`指向obj

- 然后又`在show_name函数的内部定义了一个函数fn`，并调用。

- fn函数里的this也指向调用者，**`可以看到fn()前方并没有.，所以其调用者是windows`**，fn函数里的this指向windows

  

  

  ``` javascript
  var uname = "window";
  var object = {
      uname: "object",
      fun: function(){
          console.log(this.uname);
          return function(){
              console.log(this.uname)
          }
      }
  }
  object.fun()();
  ```

  - object对象上有一个属性fun，属性值是一个函数；
  - `object.fun()`，object调用fun属性函数，函数体内`console.log(this.uname)`，fun函数里的`this指向调用者object`，所以`输出"object"`并返回函数。
  - `object.fun()()`执行返回的普通函数，但是这个函数并不是通过object调用的，等价于`let fn = object.fun(); fn()`；函数体内`console.log(this.uname)`，函数里的this指向调用者，前面没有.，所以调用者就是window，所以`输出"window"`

## 2.箭头函数调用



``` javascript
const obj = { name: '张三'}
function fn(){
    console.log(this);
    return () => {
        console.log(this);
    }
}
const resFn = fn.call(obj);
resFn();
```

重点就是：**`箭头函数的this是在要去定义的作用域找，如果箭头函数定义在函数里，箭头函数的this指向和定义函数一致；否则箭头函数的this指向window。`**

- **`call`**和**`apply`**都会`改变this指向`，并**`执行函数`**，`将函数结果返回`
- fn.call(obj)，会`执行fn函数`，并将fn函数里的`this指向改为obj`。在函数体内部，首先执行`console.log(this)`，因为call修改了this指向，所以这里的`控制台输出是obj`；然后`返回箭头函数`，只是返回，并不会执行
- resFn变量接收到返回的箭头函数，resFn()执行箭头函数，这里的箭头函数在定义时被fn函数包裹，所以箭头函数的this和fn函数的this一致。而fn函数里的this已经被改成了obj。因此这里的`console.log(this)`，`控制台输出的是obj`



## 3. call

该代码在浏览器中执行，`输出的日志结果`是什么？

``` javascript
var obj = {};
obj.log = console.log;
// obj.log = console.log = function (参数){
//		在控制台打印参数
//}
obj.log.call(console,this);
```

- `var obj = {};`声明了一个空对象obj
- `obj.log = console.log;`给`obj绑定一个属性log`，**`让这个指针和console.log指向同一个函数`**，这个函数用于控制台打印输出。（这可以从平时console.log(123)，控制台打印123看出来）。**`console.log是js内置的，用于理解和标识，在控制台打印参数的函数，给编码人员一个途径调用它`**
- `obj.log.call(console,this);`首先难点：`作为参数的this是在全局上下文中的，所以是window`。所以代码等价于**`obj.log.call(console,window);`**。调用该函数，并且将该函数的this指针指向console，向函数传递参数window。**<u>`函数立马在控制台打印参数window`</u>**
- **`函数内的this指代console，但是打印的是从外面传进去的this对象，也就是window！`**



## 4. setTimeout

``` html
执行以下程序，要求当用户点击按钮1秒后禁用按钮，以下选项的做法，不符合要求的是（）

<button>点击</button>

<script>

    var btn = document.querySelector('button');

</script>
```

``` javascript
A.
btn.onclick = function(){

var that = this;

setTimeout(function(){that.disabled = true;},1000)

}

/*
btn.onclick = function(){ //1.点击鼠标后，将该回调函数压入队列中等待执行

var that = this;  //2.该函数的this指向调用者btn，btn通过点击调用。因此变量that指向btn

setTimeout(function(){that.disabled = true;},1000) 

}
	//3.windows通过.运算符调用setTimeout，setTimeout内部是通过apply为回调函数绑定了this对象，并且绑定的是全局对象。
		然后在1s后将回调函数压入队列中，等待执行
		执行时，回调函数的作用域内没有that，于是向外层找，在外层函数中找到了that，that指向btn。
		所以设置btn的属性disabled为true
	
该设置方式可以成功
*/
```

``` javascript
B.
btn.onclick = function(){

setTimeout(function(){this.disabled = true;},1000)

}

/*
btn.onclick = function(){ //1.点击鼠标后，将该回调函数压入队列中等待执行

setTimeout(function(){this.disabled = true;},1000)

}
	//2.windows通过.运算符调用setTimeout，setTimeout内部是通过apply为回调函数绑定了this对象，并且绑定的是全局对象。
		然后在1s后将回调函数压入队列中，等待执行
		执行时，回调函数this指向window，所以没法设置btn的disabled属性为true
	
该设置方式失败
*/
```

``` javascript
C.
btn.onclick = function(){

setTimeout(()=>{

this.disabled = true;

},1000)

}
/*
btn.onclick = function(){ //1.点击鼠标后，将该回调函数压入队列中等待执行

setTimeout(()=>{

this.disabled = true;

},1000)

}
	//2.windows通过.运算符调用setTimeout，setTimeout内部是通过apply为回调函数绑定了this对象，并且绑定的是全局对象。但是这里的回调函数是肩头函数和，所以没法为其绑定this对象。
		然后在1s后将回调函数压入队列中，等待执行
		执行时，回调函数是箭头函数，箭头函数的this由定义函数时的上下文指定。可以看到箭头函数被外层函数包裹，外层函数this指向btn，所以箭头函数里的this指向btn，所以可以设置btn的disabled属性为true
	
该设置方式可以成功
*/
```

``` javascript
D.
btn.onclick = function(){

setTimeout(function(){this.disabled = true;}.bind(this),1000)

}

/*
btn.onclick = function(){ //1.点击鼠标后，将该回调函数压入队列中等待执行

setTimeout(function(){this.disabled = true;}.bind(this),1000)

}
	//2.windows通过.运算符调用setTimeout，setTimeout内部是通过apply为回调函数绑定了this对象，并且绑定的是全局对象。但是这里强制用bind函数给其重新绑定了this，bind里的this是btn.onclick回调函数的this，这个this指向btn。因此setTimeout的回调函数里的this指向被修改为了btn
		然后在1s后将回调函数压入队列中，等待执行
		执行时，回调函数的this已经被修改成了btn，所以可以设置成功
	
该设置方式可以成功
*/
```

