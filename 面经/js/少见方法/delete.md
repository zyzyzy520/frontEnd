## 1.

请问以下JS代码的执行结果是什么？

``` javascript
let a = 1;
let obj = {
  x: 1
}
delete a;
delete obj.x;
delete 2;
console.log(a);
console.log(obj.x);
console.log(2);

/*
	let a, obj;
	a = 1;
	obj = {x:1};
	delete a; //1.等价于delete window.a，但是全局并没有window.a，所以无作用
	delete obj.x //2.删除obj对象里的x属性，因此obj = {}
	delete a //3.等价于delete window.2，但是全局没有window.2，所以无作用
	console.log(a);  // 4.打印全局作用域下的变量a，用let声明的a，不会被挂载到window上，但存在于全局作用域下，打印 1
	console.log(obj.x); // 5.obj={}，没有x属性，所以打印undefined
	console.log(2);		// 6.直接输出数字2
*/
```

