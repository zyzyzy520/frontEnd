# Promise

## 1.执行顺序

``` javascript
// * promise
function foo() {
  console.log(1)
  setTimeout(() => {
    console.log(2)
  }, 0)
  new Promise(() => console.log(3))
  console.log(4)
}

foo()
//1 3 4 2
```

- `foo()`执行foo函数
- 函数体内
  - `console.log(1)`同步任务，立马`输出1`
  - `setTimeout`异步任务，压入任务队列中
  - `new Promise`，立马执行里面函数体的内容`console.log(3)`。`输出3`
  - `console.log(4)`同步任务，立马输出`4`
  - 同步任务执行完毕，执行异步任务`setTimeOut`，输出`2`

## 2.

请问以下JS代码在Node环境下的输出顺序是？

``` javascript
Promise.resolve()
.then(() => {
  console.log('p1');
})
.then(() => {
  console.log('p2');
})
process.nextTick(() => {
  console.log('n1');
  process.nextTick(() => {
    console.log('n2');
  })
})

//
```

Node 中的“微任务(microtasks)其实是一个统称，包含了两部分：

- process.nextTick() 注册的回调 （nextTick task queue）
- promise.then() 注册的回调 （promise task queue）

Node 在执行微任务时， 会优先执行 nextTick task queue 中的任务，执行完之后会接着执行 promise task queue 中的任务。所以如果 process.nextTick 的回调与 promise.then 的回调都处于主线程或事件循环中的同一阶段， **`process.nextTick 的回调要优先于 promise.then 的回调执行`**。
