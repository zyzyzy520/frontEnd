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



``` javascript
```

