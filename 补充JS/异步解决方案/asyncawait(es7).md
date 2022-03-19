# async/await

## 1. async

async：用于定义一个异步函数，`在普通函数前加一个async`。**`异步函数的返回值是一个Promise对象`**

异步函数返回Promise对象，**`设置的返回值会放在Promise对象里`**。`没有设置返回值，就返回空的Promise对象`

**`async function里面没有await时，和普通函数没有区别`**，只不过返回的是Promise对象

`要使用，一定要调用`

``` javascript
async function fn() {
    // return 1;
}
console.log(fn());
//Promise { undefined }
```

## 2.**await**

一般用于**`等待一个Promise对象`**，实际上就是**`等待一个异步处理结果`**

**`Promise对象的异步处理结果通过resolve丢出，await用于接收resolve丢出的结果`**

**`await命令后面是一个 Promise 对象`**，`返回该对象的结果(resolve丢出的结果)`。如果不是 Promise 对象，就直接返回对应的值。另一种情况是，await命令后面是一个thenable对象（即定义then方法的对象），那么await会将其等同于 Promise 对象。

**`await会阻止async函数后面语句的执行。`**

await一定要放在async函数里

``` javascript
const p = new Promise(function (resolve, reject) {
    resolve(100);
})

async function getp() {
    const result = await p;
    console.log(result);
    // return result;
}

getp();

//返回值也是Promise对象，要拿也得等
const p = new Promise(function (resolve, reject) {
    resolve(100);
})

async function getp() {
    //result接收Promise对象p丢出的结果100
    const result = await p;
    console.log(result);
    return result;
}

async function getN() {
    let res = await getp();
    console.log(res);  //100
}
getN();
```

### 2.1 await 其它

**`await也可以接收除了Promise实例resolve丢出的值以外的其它返回值`**

尽管`await foo()`注意是**`foo()`**执行。`尽管foo是一个普通函数，但await仍然会被认为是一个异步函数，阻碍后面的执行`。此外吗，注意**`await foo()会先执行foo()`**在等待foo()函数的返回值中，阻塞后面的代码。

![img](https://api2.mubu.com/v3/document_image/26c476de-d862-4849-bfe4-33cc567d89b7-10071129.jpg)

- `bar()`执行异步函数bar，遇到await压入任务队列里，await阻碍后面代码的执行。
- `console.log(200)`，同步任务，`直接输出200`
- 同步代码执行完毕，执行异步代码
- `const data = await foo()`，data接收到foo函数的返回值100
- console.log(data)，`输出100`

## 3.执行顺序

![image-20220205201251613](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220205201251613.png)

- `const data = main()`，执行异步函数main，函数体内第一行代码就是`await`，会阻碍后面代码的执行，所以data得到的是空的Promise对象Promise {}。
- 接着执行`console.log(data)`，这是同步代码，`输出Promise {pending}(还在执行中)`
- 然后执行异步函数`console.log(data)`，data接收到Promise实例传递过来的'hello'，因此`输出hello`
- 并返回，但已无用，同步代码已经执行完毕



``` javascript
function foo() {
    console.log("1");
    return "2";
}
async function bar() {
    console.log("3");
    return Promise.resolve("4");
}

async function main() {
    console.log("5");
    const v1 = await foo();
    console.log(v1);
    const v2 = await bar();
    console.log(v2);
}

main();
console.log("6");

//5 1 6 2 3 4
```

- `main()`执行异步函数main，函数体内`console.log(5)`，所以**`第一个输出5`**。然后对于`const v1 = await foo()`，会先执行foo()函数，foo函数内部`console.log(1)`，所以**`第二个输出1`**，**`在等待foo函数的返回值中作为异步代码停滞，并阻塞后面的代码`**
- 因此紧接着执行同步代码`console.log("6")`，所以**`第三个输出6`**
- 同步代码执行完毕后，执行异步代码
- `const v1 = await foo()`接收到了返回值2，`console.log(v1)`，所以**`第四个输出2`**。
- `const v2 = await bar()`**，`尽管bar是async异步函数，但仍然会先执行bar函数`**，bar函数体内`console.log(3)`，**`所以第五个输出3`**。然后await等待bar函数的返回结果Promise对象，因为没有其它同步代码了，所以执行该异步代码，V2接收到promise对象丢出的4，所以最后`console.log(v2)`，**`最后输出4`**

 

## 4.本质

- async/await是语法糖，`用async标记的函数，在其内部遇到await标记的逻辑时，会暂时返回，不执行后续的逻辑`，`等await内部的逻辑处理完毕后，再继续走await后面的逻辑`，这个方式，其实就是es6定义的`generator`函数。即`async与await将标记的函数转换成了生成器`。
- async/await是通过`将函数变为一个生成器函数`，并`使用自动执行函数来执行他`，`在执行过程中，有意地让生成的迭代器放到promise的then中`，即异步完成后才执行，从而达到的同步效果。

### 

## 5.注意事项

### 5.1 await其它

如果await后面不是promise对象是函数，则必须是`await otherTest()`，不能是`await otherTest`

``` javascript
async function test() {
    console.log('test start');
    await otherTest();
    console.log('test end');
}
function otherTest() {
    console.log('otherTest');
}
test();
console.log('after test');
```

