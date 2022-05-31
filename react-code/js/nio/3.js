const obj = {
    nio: {
        xpev: {
            li: {
                k: 1,
                b: 4,
            }
        },
        byd: 2,
        tsla: 3,
    }

};

/*  要求转成
 const obj = {
     'nio_xprev_li': 1,
     'nio_byd': 2,
     'nio_tsla': 3
 }*/
let n1 = {}
// 递归
for (let key in obj) {
    dfs(obj[key], key);
}
function dfs(node, path) {
    //当走到不是对象的时候，说明到头了，加入路径
    if (typeof node != 'object') {
        n1[path] = node;
        return;
    } else {
        for (let key in node) {
            dfs(node[key], path + '_' + key);
        }
    }

}
console.log(n1);
