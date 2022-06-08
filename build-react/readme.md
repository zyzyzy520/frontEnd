1. createElement(type, props, ...children)函数
---输入：createElement("div", null, a, b)
---输出：{
            "type": "div",
            "props": { "children": [a, b] }
        }

2. 因为children中可能是string或者number这也的原始值，我们统一设置成对象。保证自身和后代均是对象。因此需要一个createTextElement(text)
---输入：createTextElement("a")
---输出：{
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: "a",
            children: []
        }
}

3. 用自己写的createElement函数替换掉React.createElement，这样写jsx语法时，就可以调用自己的函数

4. render()