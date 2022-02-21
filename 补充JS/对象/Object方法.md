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



## 2.Object.assign(target,source1,source2....)

主要的用途是用来**`合并多个JavaScript的对象`**。

**`第一个参数是目标对象`**，**`后面的都是源对象`**，assign方法`将多个原对象的属性和方法都合并到了目标对象上`面，如果在这个过程中出现同名的属性（方法），`后合并的属性（方法）会覆盖之前的同名属性（方法）`。**`返回修改后的目标对象，目标对象也已经被改变`**

所以它接收的`第一个参数（目标）应该是对象`，如果`不是对象`的话，它会`在内部转换成对象`，所以如果碰到了`null或者undefined`这种不能转换成对象的值的话，assign就会`报错`。但是如果`源对象的参数位置`，接收到了`无法转换为对象的参数`的话，`会忽略`这个源对象参数。

``` javascript
var target  = {a : 1}; //目标对象
var source1 = {b : 2}; //源对象1
var source2 = {c : 3}; //源对象2
var source3 = {c : 4}; //源对象3，和source2中的对象有同名属性c
Object.assign(target,source1,source2,source3);
//结果如下：
//{a:1,b:2,c:4}
```

这里要看一个例子：

``` javascript
const v1 = 'abc';
const v2 = true;
const v3 = 10;
 
const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

首先，第一个参数位置接收到的是对象，所以不会报错，其次，由于**`字符串转换成对象时，会将字符串中每个字符作为一个属性`**，所以，abc三个字符作为“0”，“1”，“2”三个属性被合并了进去，但是`布尔值和数值在转换对象时虽然也成功了，但是属性都是不可枚举`的，所以属性没有被成功合并进去。在这里需要记住 “**`assign不会合并不可枚举的属性`**”

``` javascript
Object(true) // {[[PrimitiveValue]]: true}
Object(10)  //  {[[PrimitiveValue]]: 10}
Object('abc') // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
```

同样，Object.assign拷贝的属性是有限制的，**`只会拷贝对象本身的属性（不会拷贝继承属性）`**，也**`不会拷贝不可枚举的属性`**。但是属性名为Symbol值的属性，是可以被Object.assign拷贝的。
如果assign只接收到了一个对象作为参数的话，就是说没有源对象要合并到目标对象上，那会原样把目标对象返回。

### 2.1 知识要点

1. Object.assign进行的拷贝是`浅拷贝`。也就是说，如果拷贝过来的属性的值是对象等复合属性，那么只能`拷贝过来一个引用`

   ``` javascript
   const obj1 = {a: {b: 1}};
   const obj2 = Object.assign({}, obj1); // obj2 = {a:{b:1}}
    
   obj1.a.b = 2;
   obj2.a.b // 2
   ```

   由于是浅拷贝，所以属性a的内部有任何变化，都会在目标对象上呈现出来。

2. asd 
