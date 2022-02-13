# delete

> **`用来删除一个对象的属性。实际上是将属性值置为undefined`**
>
> **`换句话说如果前面没有.，就是找window；有.就找.前面的对象`**



## 1.语法

``` javascript
delete expression
```

[expression](https://so.csdn.net/so/search?q=express&spm=1001.2101.3001.7020) 应该是一个对象的属性,例如

``` javascript
delete object.property
delete object['property']
//如果或只有一个，换句话说如果前面没有.，就是找window；有.就找.前面的对象
delete object; //默认就是删除window.object
```

如果expression不是一个对象的属性，那么delete则不会起任何作用

## 2.返回值

在严格模式下，如果属性是一个不可删除的属性，删除是会抛出异常，非严格模式下返回`false`,其他情况返回`true`.



## 3.注意事项

### 3.1 `可以删除没有声明直接赋值的全局变量量，但不可以删除声明了的变量`。

`全局变量其实是global对象(window)的属性。`

在全局作用域下，var 声明的会挂载到window对象上，但已经是已显示状态。

``` javascript

x = 10;
var y = 20;

delete x; //true;   实际上相当于是delete window.x
delete y; //false	实际上相当于是delete window.y
```



### 3.2 内置对象的内置属性不能被删除，用户自定义的属性可以被删除。

`delete obj`等价于`delete window.obj`，在全局作用域里，有一个隐式变量obj声明，因此obj会被挂载到window对象上，所以可以删除

`delete obj1`等价于`delete window.obj1`，在全局作用域里，有一个var obj1声明，因此obj1会被挂载到window对象上，但是是显示声明，所以不能删除

`delete z`等价于`delete window.z`，在全局作用域里，并没有z的声明，虽然在fn函数里声明了z，但它是局部变量，并不会被挂载到window上，且函数执行完毕就被立即删除了。

``` javascript

obj = {

    h : 10
}

var obj1 = {
    h: 10
}

delete Math.PI; // false
delte obj.h; //true
delete obj; //ture ,obj 是全局变量的属性，而不是变量。

delete obj1.h;//true
delete obj1; //false 全局显示变量不能被删除


function fn(){

    var z = 10;

    delete z; //false
    //z是局部变量，不能被删除，delete只能删除对象的属性。
}

delete fn; //false
//fn 相当于是一个匿名变量，所以也不能被删除。
```



### 3.3`可以删除没有声明直接赋值的全局函数，但不可已删除声明了的全局函数`。

`只有隐式的函数表达式声明可以删除，其它两种声明都绑定在了window对象上，但是不可以删除`

``` javascript
function fn1(){
}
fn2 = function(){
    
}
var fn3 = function(){
    
}

console.log(delete fn1); //false
//fn1 相当于是一个匿名变量，所以也不能被删除。
console.log(delete fn2); //true
console.log(delete fn3); //false
```



### 3.4 不能删除一个对象从原型继承而来的属性，但是可以直接从原型上删掉它；

**`delete只能删除自己的属性，不能删除通过原型链找到的属性`**

``` javascript

function foo(){}
foo.prototype.name = 'zhangsan';

var f = new foo();

//delete只能删除自己的属性，不能删除继承来的属性
delete f.name; // false 

console.log(f.name);//zhangsan

delete foo.prototype.name; // true

console.log(f.name); // undefined
```



## 4.删除数组元素

可以通过索引将数组元素删除，实际上是置为undeined，但其实还在

**`实际上，数组里的索引与对应的值也是作为，数组对象属性和属性值存在的`**

``` javascript

var arr = [1,3,4,6,73,2];
delete arr[2];

console.log(arr.length); // 6
console.log(arr[2]); //undefiend
consoel.log(arr); //[ 1, 3, , 6, 73, 2 ]
```

