

// 测试用例
const tree = [
    {
        id: 1,
        children: [{ id: 2 }, { id: 3 }]
    },
    {
        id: 5,
        children: [
            { id: 6 },
            { id: 7, children: [{ id: 10 }] }
        ]
    }
];

//对每一个树进行DFS找到想要寻找的id
let target = 10, targetPath = [];

let treeCount = tree.length
for (let i = 0; i < treeCount; i++) {
    let res = DFS(tree[i], targetPath);
    if (res == true) {
        console.log(targetPath);
        break
    }
}

function DFS(node, path) {
    // 看当前节点是就是目标节点
    if (node.id == target) {
        path.push(node.id);
        return true;
    }
    // 不是，看是否有孩子，继续向下查找
    // 如果没有。说明该条路径走到尽头了但还是没有找到，返回false
    if (node.children == undefined) return false;
    else {
        // 有孩子，将当前节点压入路径
        path.push(node.id);
        let flag;
        // 遍历所有孩子，对每个孩子进行DFS
        for (let i = 0; i < node.children.length; i++) {
            flag = DFS(node.children[i], path)
            if (flag) break;
        }
        if (flag) return true;
        else path.pop();
    }
}