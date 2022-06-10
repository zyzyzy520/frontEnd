<!-- jsx语法会将输入的简便形式转换为createElement函数，并调用，最终生成的是一个对象 -->
1. createElement(type, props, ...children)函数
---输入：createElement("div", null, a, b)
---输出：{
            "type": "div",
            "props": { "children": [a, b] }
        }

2. 因为children中可能是string或者number这也的原始值，我们统一设置成对象。保证所有生成的节点均是对象。因此需要一个createTextElement(text)
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
4. render()
    ---4.1 render()，先只关心添加节点到DOM，不关心调用render删除或更新。
        ---输入：render(element, container) 
        ---输出：无输出，将element对象转换成真实的节点并渲染到真实DOM：container里