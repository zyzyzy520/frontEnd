## 1. 创建Object对象实例的方法

### 1.1 new构造函数法

``` javascript
var person = new Object();
person.name = 'jeck';
person.age = 28;
```

### 1.2 对象字面量

这种方式直接通过`花括号将对象的属性包起来`，使用`key/value`的方式创建对象属性，每个属性之间用逗号隔开。如果是最后一个属性，后面就不要加逗号。

``` javascript
var person = {
	name:'jeck',
	age:28
}
```



### 1.3 Object()方法

`Object`构造函数可以不加 `new`当变通函数执行，这样可以`将任意值做为参数转为对象`，通常用于保证某一值必须是一个对象，如果参数为空（null 或 undefined）,Object()返回一个空对象。

``` javascript
var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);

obj instanceof Object // true
```

**`如果参数为原始数据类型，,Object()返回该数据的包装对象。`**根据传入的值的类型返回相应的基本包装类型的实例

``` javascript
var obj = Object(1);  // obj: Number {1}，原始值为1的Number对象  等价于 new Number(1)
obj instanceof Object // true
obj instanceof Number // true

var obj = Object('foo'); // obj: String {'foo'}，原始值为foo的String对象 等价于 new String('foo')
obj instanceof Object // true
obj instanceof String // true

var obj = Object(true);  // obj: Boolean {true}，原始值为true的Boolean对象 等价于 new Boolean(true)
obj instanceof Object // true
obj instanceof Boolean // true
```

如果参数是一个对象，则直接返回该对象，不转换。 可能用Object()方法判断是不是一个javascript 对象

``` javascript
function isObject(value){
	return value == Object(value);//相等value就是一个对象
}
```

