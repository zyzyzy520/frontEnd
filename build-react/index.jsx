// 1.这里的children用扩展运算符，是因为不知道有多少个孩子
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,  // 2.扩展运算符，复制所有属性
            children: children.map((element) => {
                return typeof element == "object" ? element : createTextElement(element);
            }) //4. 因为孩子可能是string或者number原始值，所以要对每个孩子进行判断， 如果不是对象调用函数生成对象。
        }
    }
}

//3. 将原始值也变为对象，类型固定，且不可能会有孩子，属性中包含节点值
function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }

}

const Didact = {
    createElement
}

/** @jsx Didact.createElement */
const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
)