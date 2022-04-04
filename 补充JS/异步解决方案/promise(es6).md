# Promise 

Promise是一个`构造函数`，`参数是函数`

## 1.Promise 实例状态

### 1.1 实例的状态不受外界影响 （3种状态）

- Pending状态（进行中）
- Fulfilled状态（已成功）
- Rejected状态（已失败）

### 1.2 `一旦状态改变就不会再变` （两种状态改变：成功或失败）

- Pending -> Fulfilled
- Pending -> Rejected

``` javascript
let p1 = new Promise((resolve, reject) => {
  resolve(100);
  reject(200); // 这里不会执行，因为执行完 resolve(100) 后实例的状态已经从pending改为fulfilled了
});
console.dir(p1); // 状态为 fulfilled，值为 100 
```

## 2. 创建实例的语法格式

``` javascript
var promise = new Promise(function(resolve, reject){
    // ... some code
    
    if (/* 异步操作成功 */) {
        resolve(value);
    } else {
        reject(error);
    }
})
```

​	Promise构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们**`是两个函数`**，由JavaScript引擎提供，不用自己部署。
  `resolve作用是将Promise对象状态由“未完成”变为“成功”`，也就是`Pending -> Fulfilled`，在`异步操作成功时调用`，`并将异步操作的结果作为参数(自己设定)传递出去`；而`reject函数则是将Promise对象状态由“未完成”变为“失败”`，也就是`Pending -> Rejected`，`在异步操作失败时调用`，并`将异步操作的结果作为参数传递出去`。

## 3. then

Promise实例生成后，可用`then`方法分别**`指定两种状态回调参数`**。then 方法可以接受**`两个回调函数(自己写)`**作为参数：

1. **`Promise对象状态改为Resolved时调用 （必选）`**
2. Promise对象状态改为Rejected时调用 （可选，可省略）

``` javascript
promise.then(onFulfilled, onRejected)
```



- onFulfilled方法表示状态从pending ---> fullfilled所执行的方法
- onRejected表示状态从pending ---->  rejected所执行的方法
- 为了实现`链式调用`，`then方法必须返回一个promise`

### 3.1 使用格式

第一个回调函数的参数，是resolve方法传递的；第二个回调函数的参数，是reject方法传递的。

`p.then(function(传递的参数){},function(){})`

``` javascript
let p1 = new Promise((resolve, reject) => {
  resolve(100);
});
let p2 = p1.then(res=>{
  console.log(res); // 100
}, rej=>{
  console.log(rej)
});

```

### 3.2 小总结

- `Promise是一个构造函数`，	Promise构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们**`是两个函数`**，由JavaScript引擎提供，不用自己部署。new Promise里面写异步代码，异步代码执行成功，调用resolve；失败调用reject
- 先new promise返回一个对象p，p里调用resolve后，会执行p.then(function(){},function(){})的第一个函数。
- `如果有参数需要传递则resolve(参数)，p.then(function(参数){})`
- 如果有多个嵌套，将then里的代码再new 给promise，在执行完毕或成功后，调用resolve并返回。用一个变量接收，再调用该变量的then方法。

## 4.执行顺序

``` javascript
let promise = new Promise(function (resolve, reject) {
    console.log("AAA");
    resolve();
    console.log('DDD');
});
promise.then(() => console.log("BBB"));
console.log("CCC")

// AAA
// DDD
// CCC
// BBB
```

执行后，我们发现输出顺序总是 `AAA -> CCC -> BBB`。表明，在Promise新建后会立即执行参数上的函数，所以`首先输出 AAA`，执行resolve方法传递参数，resolve也是同步任务，因此`紧接着输出'DDD'`。然后，**`then方法是异步任务，指定的回调函数将在当前脚本所有同步任务执行完后才会执行`**，所以`BBB 最后输出`。



``` javascript
let promise = new Promise(function(resolve, reject){
    console.log("1");
    resolve();
});
setTimeout(()=>console.log("2"), 0);
promise.then(() => console.log("3"));
console.log("4");

// 1
// 4
// 3
// 2
```

可以看到，结果输出顺序总是：`1 -> 4 -> 3 -> 2`。1与4的顺序不必再说(**`先执行同步任务，再执行异步任务`**)，而2与3`先输出Promise的then，而后输出定时器任务`。原因则是**`Promise属于JavaScript引擎内部任务`**，而**`setTimeout则是浏览器API`**，而**`引擎内部任务优先级高于浏览器API任务`**，所以有此结果。



## 5.Promise.all()

- **Promise.all可以`将多个Promise实例包装成一个新的Promise实例`。同时，成功和失败的返回值是不同的，`成功的时候返回的是一个结果数组`，而`失败的时候则返回最先被reject失败状态的值`。**
- 需要特别注意的是，**`Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的`**，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。
- 参数：Promise实例组成的数组
- 返回值：新的Promise实例

``` javascript
let p1 = new Promise((resolve, reject) => {
    resolve('成功了')
})

let p2 = new Promise((resolve, reject) => {
    resolve('success')
})

let p3 = Promise.reject('失败')

Promise.all([p1, p2]).then((result) => {
    console.log(result)               //['成功了', 'success']
}).catch((error) => {
    console.log(error)
})

Promise.all([p1, p3, p2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)      // 失败了，打出 '失败'
})

Promise.all([p1, p3, p2]).then((result) => {
    console.log(result)
}, (error) => {
    console.log(error);
})     // 失败了，打出 '失败'

```



## 6.Promise.race()

- Promise.race就是赛跑的意思，意思就是说，**`Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态`**。
- 参数：Promise实例组成的数组
- 返回值：新的Promise实例

``` javascript
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success1')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('failed')
    }, 500)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success3')
    }, 500)
})

Promise.race([p1, p2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)  // 打开的是 'failed'
})

Promise.race([p1, p3]).then((result) => {
    console.log(result)  //打开的是'success3'
}, (error) => {
    console.log(error);
})
```

