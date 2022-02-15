> **`代码里有var，一定要注意变量提升`**

## 1.作用域

以下代码执行的结果

``` javascript
for(var i=0;i<3;++i){
    setTimeout(function(){
        console.log(i)；
    },100);
}
```

每一次for循环的时候，settimeout都执行一次，但是里面的函数没有被执行，而是被放到了任务队列里面，等待执行，for循环了3次，就放了3次，当主线程执行完成后，才进入任务队列里面执行。

而要执行的函数内部没有变量i，所以要去外层找，var 定义的变量i，位于全局作用域只有一个，循环结束后值为3，所以打印三次3



## 2.声明

执行以下程序，输出结果为（）

``` javascript
function fn(){ var a = b = 1; }
fn();
console.log(b);...①
console.log(a);...②

/*
	function fn(){var a = b = 1;} //1. var a = b = 1,相当于是 var a = 1; b =1。 a变量用var声明的，具有函数作用域，函数执行完毕，就被销毁了。变量b是通过隐式声明的，没有作用域，所以全局都有它
	fn();
	console.log(b); //2. 变量b是通过隐式声明的，没有作用域，所以全局都有它, 输出1
	consoel.log(a); //3. a变量用var声明的，具有函数作用域，函数执行完毕，就被销毁了。因此抛出异常
*/
```

注意这里是抛出异常，而不是undefined



## 3.变量提升

执行以下代码，输出的a值为（）

``` javascript
if(! "a" in window){
    var a = 1;
}
alert(a);

/*
	var a; //1.虽然var a = 1在块级作用域中，但var声明的变量无视块级作用域，只看函数作用域和全局作用域，所以全局作用域有一个变量a
				并且 var 声明的变量会被绑定到window上，所以目前window = {a: undefined}
	if(! "a" in window){  //2. 这个语句判断window对象上有没有属性a，没有才进入if语句内部；有，跳过。因为变量提升，所以windows有a这个属性，所以跳过
								if{}之间的代码
	}
	alert(a); //3. 弹出全局作用域下的a，所以是undefined
*/
```



请问以下JS代码输出的结果是什么？

``` javascript
function f(x) {
  console.log(x);
  var x = 200;
  console.log(x);
  }
f(a = 100);
console.log(a);

/*
	function f(x){  //2.形参x复制实参a的值，为100
		var x;		//3.函数内变量与形参同名，被形参覆盖
		console.log(x); //4.打印形参x，打印100
		x = 200;    //4.形参x = 200
		console.log(x); // 5.打印形参x，打印200；
	}
	f(a = 100) //1.定义了一个全局变量a并赋值a =100,然后将实参a传给函数f，调用f函数
	console.log(a) //6.打印全局变量a，打印100
*/
```

