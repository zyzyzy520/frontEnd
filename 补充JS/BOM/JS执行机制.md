## 1.单线程模型

**`JavaScript语言的一大特点就是单线程`**，也就是说，`同一时间只能做一件事，前面的任务没做完，后面的任务只能等着`。

### 1.1 为什么JavaScript是单线程的呢?

这主要与JavaScript用途有关。它的主要用途是`与用户互动`，以及`操作DOM`。如果JavaScript是多线程的，会带来很多复杂的问题，假如 JavaScript有A和B两个线程，A线程在DOM节点上添加了内容，B线程删除了这个节点，应该是哪个为准呢? 所以，为了避免复杂性，所以设计成了单线程。



## 2.浏览器下的JavaScript

### 2.1 浏览器的内核是多进程的

- brower进程（主进程）

- - 负责浏览器的页面展示，与用户交互。如前进，后退
  - 页面的前进，后退
  - 负责页面的管理，创建和销毁其他进程

- GPU进程

- - 3D渲染

- 插件进程

- - 每种类型的插件对应一个进程，仅当使用该插件时才能创建

- 浏览器渲染进程（浏览器内核）

- - `GUI渲染进程`

  - - `DOM解析， CSS解析，生成渲染树`

  - `js引擎线程`

  - - `执行Js代码`

  - 事件触发

  - 异步HTTP请求线程

  - 定时触发器线程

可以看到 js引擎是浏览器渲染进程的一个线程。



### 2.2 浏览器内核中线程之间的关系

- `GUI渲染线程和JS引擎线程互斥`

- - js是可以操作DOM的，如果在修改这些元素的同时渲染页面（js线程和ui线程同时运行），那么渲染线程前后获得的元素数据可能就不一致了。

- `JS阻塞页面加载`

- - js如果执行时间过长就会阻塞页面



### 2.3 浏览器是多进程的优点

- 默认新开 一个 tab 页面 新建 一个进程,所以单个 tab 页面崩溃不会影响到整个浏览器。
- 第三方插件崩溃也不会影响到整个浏览器。
- 多进程可以充分利用现代 CPU 多核的优势。
- 方便使用沙盒模型隔离插件等进程,提高浏览器的稳定性。



### 2.4 进程和线程又是什么呢

**`进程（process）`**和**`线程（thread）`**是操作系统的基本概念。

- `进程`是 `CPU 资源分配的最小单位`（是能`拥有资源和独立运行的最小单位`）。
- `线程`是` CPU 调度的最小单位`（是`建立在进程基础上的一次程序运行单位`）。

由于每个进程至少要做一件事,所以`一个进程至少有一个线程`。系统会给每个进程分配独立的内存,因此进程有它独立的资源。`同一进程内的各个线程之间共享该进程的内存空间（包括代码段,数据集,堆等）`。进程可以理解为一个工厂不不同车间，相互独立。线程是车间里的工人，可以自己做自己的事情,也可以相互配合做同一件事情。



## 3. **同步和异步**

为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程。于是，JS 中出现了`同步`和`异步`。

他们的`本质区别`： 这条流水线上各个`流程的执行顺序不同`。

### 3.1 同步

前一个任务结束后再执行后一个任务，`程序的执行顺序与任务的排列顺序是一致的、同步的`

### 3.2 **同步任务**

`同步任务都在主线程上执行`，形成一个**`执行栈`**。

![img](https://api2.mubu.com/v3/document_image/0c459d0a-e6ad-4e5c-b59a-5855ccb2b805-10071129.jpg)

### 3.3 异步

**`做这件事的同时，你还可以去处理其他事情`。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜**

### 3.4 异步任务

- **`JS 的异步是通过回调函数实现的。`**
- 一般而言，异步任务有以下三种类型:
- 1、普通事件，如 click、resize 等
- 2、资源加载，如 load、error 等
- 3、`定时器`，包括 setInterval、setTimeout 等
- **`异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）。`**

![img](https://api2.mubu.com/v3/document_image/5eca12b1-38aa-4797-9fa1-6f0b212d1232-10071129.jpg)



## 4. **JS 执行机制**

先执行执行栈中的同步任务，再执行任务队列中的异步任务。回调函数放入任务队列

1. `先执行执行栈中的同步任务`。

![img](https://api2.mubu.com/v3/document_image/0c459d0a-e6ad-4e5c-b59a-5855ccb2b805-10071129.jpg)

2. `异步任务（回调函数）放入任务队列中`。

![img](https://api2.mubu.com/v3/document_image/5eca12b1-38aa-4797-9fa1-6f0b212d1232-10071129.jpg)

3. 一旦`执行栈中的所有同步任务执行完毕`，系统就会`按次序读取任务队列中的异步任务`，于是被`读取的异步任务结束等待状态，进入执行栈，开始执行`。



## 5. JS 执行机制图解

![img](https://api2.mubu.com/v3/document_image/396c852c-f88f-41a4-8ae5-e4baaba87c14-10071129.jpg)

### 5.1 事件循环

**`不是一开始就把回调函数放入任务队列中，而是将事件交给异步处理程序处理，一旦触发事件或者倒计时时间到，再放入任务队列中。而主线程执行完毕后，反复查询任务队列，将新的任务放入主线程`**



### 5.2 例子

![img](https://api2.mubu.com/v3/document_image/dac86732-405a-4b41-96ea-8831c842d3ae-10071129.jpg)

`打印1`后，`将点击事件交给异步进程处理`，一旦`点击触发事件`，异步进程处理程序就`把fn放入任务队列`中

![img](https://api2.mubu.com/v3/document_image/ca49b68a-4ba1-46c3-9c25-a32eccd15e15-10071129.jpg)

`打印2`后，`将计时器交给异步进程处理`，`一旦3秒时间到`，就`把fn放入任务队列`中



## 6.微任务(Microtasks)、宏任务(task)

##### `微任务和宏任务皆为异步任务`，它们都属于一个队列，主要区别在于他们的执行顺序，Event Loop的走向和取值

面对一段代码，`整体script作为第一个宏任务进入主线程,执行完同步任务后，清空微任务队列；然后再执行一个宏任务，看微任务队列是否为空`，如果不为空，清空微任务队列，再执行一个宏任务如此循环

<img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/14/164974fa4b42e4af~tplv-t2oaga2asx-watermark.awebp" alt="cmd-markdown-logo" style="zoom: 50%;" />



### 6.1 微任务(Microtasks)

- 发起者: `JS引擎`      
- 事件：`Promise`、MutaionObserver、`process.nextTick（Node.js）`      
- 运行：**`先运行`**



###  6.2 宏任务(task)

- 发起者：`宿主（Node、浏览器）`
- 事件：`script(整体代码)`、`setTimeout`、`setInterval`、setImmediate(Node.js 环境)、UI事件、I/O（Node.js）
- 运行：**`后运行`**



### 6.3 例子

``` javascript
Promise.resolve().then(()=>{
  console.log('Promise1')  
  setTimeout(()=>{
    console.log('setTimeout2')
  },0)
})

setTimeout(()=>{
  console.log('setTimeout1')
  Promise.resolve().then(()=>{
    console.log('Promise2')    
  })
},0)


/*
Promise和setTimeout1会先分别被放入微任务队列和宏任务队列中。
执行栈(宏任务)的同步任务执行完毕，会去 microtasks queues 找 清空 microtasks queues ，输出Promise1，同时会生成一个异步任务 setTimeout2，放入宏任务队列中
去宏任务队列查看此时队列是 setTimeout1 在 setTimeout2 之前，所以输出 setTimeout1。同时会生成Promise2的一个 microtasks ，放入 microtasks queues 中，接着又是一个循环，去清空 microtasks queues ，输出 Promise2
清空完 microtasks queues ，就又会去宏任务队列取一个，这回取的是 setTimeout2

*/
```

``` javascript
console.log('1');

setTimeout(function () {    //setTimeout1
    console.log('2');
    process.nextTick(function () { //process2
        console.log('3');
    })
    new Promise(function (resolve) { //promise2
        console.log('4');
        resolve();
    }).then(function () {
        console.log('5')
    })
})
process.nextTick(function () {   //process1
    console.log('6');
})
new Promise(function (resolve) {  //promise1
    console.log('7');
    resolve();
}).then(function () {
    console.log('8')
})

setTimeout(function () {    //setTimeout2
    console.log('9');
    process.nextTick(function () { //process3
        console.log('10');
    })
    new Promise(function (resolve) {    //promise3
        console.log('11');
        resolve();
    }).then(function () {
        console.log('12')
    })
})


/*
1.执行同步代码，输出1（promise.then才是异步）
2.将setTimeout1放入宏任务队列中tasks=[setTimeout1]
3.将process1放入微任务队列中microtasks=[process1]
4.执行同步代码，输出7（promise.then才是异步）
5.将promise1放入微任务队列中microtasks=[process1, promise1]
6.将setTimeout2放入宏任务队列中tasks=[setTimeout1, setTimeout2]
7. 先将当前的微任务队列microtasks=[process1, promise1]清空
    --7.1 执行process1，输出6
    --7.2 执行promise1，输出8
8. 执行一个宏任务setTimeout1
    --8.1执行同步代码输出2
    --8.2将process2放入微任务队列中，此时microtasks=[process2]
    --8.3执行同步代码输出4
    --8.4将promise2放入微任务队列中，此时microtasks=[process2, promise2]
9. 此时微任务队列不为空，清空微任务队列microtasks=[process2, promise2]
    --9.1 执行process2，输出3
    --9.2 执行promise2，输出5
10. 执行下一个宏任务setTimeout2
    --10.1执行同步代码，输出9
    --10.2将process3放入微任务队列中，此时microtasks=[process3]
    --10.3执行同步代码，输出11
    --10.4将promise3放入为任务队列中，此时microtasks=[process3, promise3]
11. 此时微任务队列不为空，清空微任务队列microtasks=[process3, promise3]
    --11.1 执行process3，输出10
    --11.2 执行promise3，输出12


1 7 6 8 2 4 3 5 9 11 10 12
*/
```

