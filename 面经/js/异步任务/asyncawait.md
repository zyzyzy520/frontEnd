# async/await

## 1.async函数返回结果

async：用于定义一个异步函数，`在普通函数前加一个async`。**`异步函数的返回值是一个Promise对象`**

**`设置的返回值会放在Promise对象里`**。`没有设置返回值，就返回空的Promise对象`

``` javascript
// * async / await
async function myFun() {
  return 1;
}

console.log(myFun());
// Promise{1}

// * async / await
async function myFun() {
    return { a: 1 };
}

console.log(myFun());
  // Promise {{a:1}}
```

- 执行异步函数myFun()
- 函数体内
  - 只有`return 1`，所以async将1放进Promise对象里，并返回
- 打印出来就是`Promise{1}`

- **`即使返回的是对象，也是把对象整个放在Promise{}里返回`**