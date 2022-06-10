// 1.这里的children用扩展运算符，是因为不知道有多少个孩子
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,  // 1.1 扩展运算符，复制所有属性
            children: children.map((element) => {
                return typeof element == "object" ? element : createTextElement(element);
            }) // 1.2 因为孩子可能是string或者number原始值，所以要对每个孩子进行判断， 如果不是对象调用函数生成对象。
        }
    }
}

// 2.将原始值也变为对象，类型固定，且不可能会有孩子，属性中包含节点值
function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }

}

// 3. render 函数，将createElement生成的对象，转换成真正的节点并进行渲染到界面上
function render(element, container) {
    // 3.1 对element进行解构
    const { type, props } = element;
    console.log(type, props);
    // 3.2 如果element是文字或者数字等普通元素，那么直接将值添加到container
    if (type === "TEXT_ELEMENT") {
        container.innerHTML = props.nodeValue
    } else {
        // 3.3 如果elemnt是需要创建的标签节点，那么根据element生成真正的对象，添加到container节点里
        let node = document.createElement(type);
        // 3.5 遍历属性，给节点添加属性
        for (let key in props) {
            if (key === "children") {
                // 3.6 如果是孩子，则需要将孩子渲染到节点里
                // 3.6.1 获取孩子节点数组
                let children = props[key];
                // 3.6.2 遍历孩子节点数组(每个孩子节点也是对象)，依次创建并渲染
                children.forEach(child => {
                    render(child, node);
                });
            } else {
                // 3.7 如果不是孩子属性，则将属性绑定到节点上
                node[key] = props[key];
            }
        }
        console.log(node);
        // 3.8 将创建好的节点渲染到容器里
        container.appendChild(node);
    }

}
const Didact = {
    createElement,
    render
}

/** @jsx Didact.createElement */
const element = (
    <div id="foo">
        <h1>foo1</h1>
        <h2>foo2</h2>
    </div>
)

const root = document.getElementById('root');
Didact.render(element, root);