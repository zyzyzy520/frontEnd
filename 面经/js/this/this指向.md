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

