<!-- jsx语法会将输入的简便形式转换为createElement函数，并调用，最终生成的是一个对象 -->
1. function createElement(type, props, ...children)函数
---作用：生成包含节点信息的对象。
---输入：createElement("div", null, a, b)
---输出：{
            "type": "div",
            "props": { "children": [a, b] }
        }

2. 因为children中可能是string或者number这也的原始值，我们统一设置成对象。保证所有生成的节点均是对象。因此需要一个function createTextElement(text)
---作用：即使是原始值，也生成对象，方便后续代码的统一
---输入：createTextElement("a")
---输出：{
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: "a",
            children: []
        }
}

3. 用自己写的createElement函数替换掉React.createElement，这样写jsx语法时，就可以调用自己的函数

<!-- render负责将createElement生成的对象，转换成真正的节点并进行渲染到界面上 -->
<!-- 注意，要添加babel，babel才能将jsx语法转换。同时要告诉babel使用自己的函数 -->
4. function render()
    ---4.1 render()，先只关心添加节点到DOM，不关心调用render删除或更新。
        ---输入：render(element, container) 
        ---输出：无输出，将element对象转换成真实的节点并渲染到真实DOM：container里

5. 并发模式实现
    ---问题：一旦开始render，整个过程是不能被中断的，如果这个时候渲染树过大，可能会一直阻塞主线程。即使这个时候浏览器需要做优先级更高的事情，也需要等待整个
            渲染过程完成。
    ---改进：将整render过程分为几个小模块，一旦一个模块完成后。就会让浏览器暂时中断render过程去做优先级更高的事情
    ---5.1 requestIdleCallback(workLoop)
        ----一旦主线程空闲，浏览器就会调用requestIdleCallback这个函数
    ---5.2 function workLoop(deadline)，主线程空闲就继续整个work loop
        ---输入：deadline，这个参数由requestIdleCallback提供，通过这个参数我们可以知道在浏览器主线程被占用之前还剩多少之前我们可以使用
        ---输出：无
    ---5.3 function performUnitOfWork(nextUnitOfWork)这个函数用于执行当前的模块，并返回下一个模块

<!-- 
例子  
Didact.render(
  <div>
    <h1>
      <p />
      <a />
    </h1>
    <h2 />
  </div>,
  container
)
 -->
 <!-- fiber样式
    element：createElement创建的对象
    const newFiber = {
        //元素的类型
        type: element.type,
        //元素的属性
        props: element.props,
        //元素的父亲fiber
        parent: fiber,
        //元素的真实节点
        dom: null
    }
  -->
6. Fibers
    ---问题：划分模块以及调度模块的具体实现
    ---6.1 引入fiber
        ----一个fiber就是一个元素(标签)，一个fiber就是一个划分的小模块
        ----每一个fiber内部，会连接自己的第一个儿子节点child，下一个兄弟节点sibling，以及自己的父亲节点parent
    ---6.2 修改5中的render函数，完善performUnitOfWork函数
        ----function render(element, container) 
            -----作用：为根节点创建fiber(例子中的div)，并将其作为nextUnitOfWork的初始值。剩下的事情交给function performUnitOfWork解决
        ----function performUnitOfWork(nextUnitOfWork)
            -----作用：为nextUnitOfWork对应的fiber元素节点渲染到DOM；为nextUnitOfWork对应的fiber元素节点的子节点创建fibers；设定下一个工作模块即更新nextUnitOfWork
            -----如何设定下一个工作模块即更新nextUnitOfWork？(递归过程)
                ------如果当前nextUnitOfWork对应的fiber元素节点有子节点，那么将子节点fiber作为下一个nextUnitOfWork
                ------如果当前nextUnitOfWork对应的fiber元素节点没有子节点，那么将下一个兄弟节点sibling fiber作为下一个nextUnitOfWork
                ------如果当前nextUnitOfWork对应的fiber元素节点既没有子节点也没有兄弟节点，那么返回该元素节点的父节点parent，寻找父亲节点的兄弟节点。重复该过程直到最终返回根节点，一旦到达根节点，也就说明所有节点已经被渲染完毕了。也即完成了渲染render操作
    ---6.3 将5中的render函数提取为一个新的函数
        ----function createDOM(fiber)
            -----作用：根据fiber对象，生成元素节点并添加属性
            -----输入：元素fiber对象
            -----输出：根据对象生成的真实对象。
    ----6.4 render函数实现
        ----function render(element, container)
            -----作用：生成根节点初始化fiber对象
            -----输入：createElement创建好的对象，渲染页面的根节点
            -----输出：无输出。设置好nextUnitOfWork的初始值，即第一个fiber根节点
    ----6.5 performUnitOfWork函数实现
        ----function performUnitOfWork(fiber)
            -----作用：将nextUnitOfWork对应的fiber元素节点渲染到DOM；为nextUnitOfWork对应的fiber元素节点的子节点创建fibers；设定下一个工作模块即更新nextUnitOfWork
            -----输入：当前nextUnitOfWork对应的fiber
            ----
