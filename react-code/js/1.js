

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

let target = 10
// 遍历树，对每一个节点开始,从每一棵树的根节点开始查找
for (let i = 0; i < tree.length; i++) {
    let path = []
    let flag = dfs(tree[i], target, path);
    if (flag) {
        console.log(path);
        break;
    }
}
function dfs(node, target, path) {
    //空对象直接返回
    if (node == null) return false;
    // 如果找到节点
    if (node.id == target) {
        path.push(node.id);
        return true;
    }
    // 看节点是否还有孩子，没有，说明到了叶子节点直接返回
    if (node.children == undefined) return false;
    // 遍历孩子节点，进行dfs
    path.push(node.id);
    for (let i = 0; i < node.children.length; i++) {
        // 只要有一个找到了直接返回
        let flag = dfs(node.children[i], target, path);
        if (flag) return true;
    }
    // 都没找到，进入这里就是这棵树没有结果
    path.pop();
    return false;

}














// let goal = 10;
// function DFS(node, path) {
//     // 找到目标，返回
//     if (node.id == goal) {
//         path.push(node.id)
//         return true;
//     }
//     // 如果该节点没有子节点，而该节点又不是目标
//     if (node.children == undefined) return false;
//     path.push(node.id);
//     // 遍历children，进行递归查找
//     let flag = false;
//     for (let i = 0; i < node.children.length; i++) {
//         flag = DFS(node.children[i], path);
//         // 只要有一条路径找到了返回true
//         if (flag) break;
//     }
//     if (flag) return true;
//     else {
//         // 遍历了节点的所有儿子都找不到，说明这个节点肯定不在路径上
//         path.pop();
//         return false;
//     }
// }

// // 遍历树，对每一个树节点进行DFS
// for (let i = 0; i < tree.length; i++) {
//     let path = []
//     if (DFS(tree[i], path)) {
//         console.log(path);
//     }
// }

















// //对每一个树进行DFS找到想要寻找的id
// let target = 10, targetPath = [];

// let treeCount = tree.length
// for (let i = 0; i < treeCount; i++) {
//     let res = DFS(tree[i], targetPath);
//     if (res == true) {
//         console.log(targetPath);
//         break
//     }
// }

// function DFS(node, path) {
//     // 看当前节点是就是目标节点
//     if (node.id == target) {
//         path.push(node.id);
//         return true;
//     }
//     // 不是，看是否有孩子，继续向下查找
//     // 如果没有。说明该条路径走到尽头了但还是没有找到，返回false
//     if (node.children == undefined) return false;
//     else {
//         // 有孩子，将当前节点压入路径
//         path.push(node.id);
//         let flag;
//         // 遍历所有孩子，对每个孩子进行DFS
//         for (let i = 0; i < node.children.length; i++) {
//             flag = DFS(node.children[i], path)
//             if (flag) break;
//         }
//         if (flag) return true;
//         else path.pop();
//     }
// }