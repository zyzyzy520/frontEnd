

let node = {
    value: 10,
    child: {
        value: 11,
        child: {
            value: 12,
            child: {
                value: 13,
                child: {
                    value: 14,
                    child: {
                        value: 15
                    }
                }
            }

        }

    }
}
let ans = []
function dfs(obj, ans) {
    for (k in obj) {
        // 如果是value直接压入ans数组中
        if (k == 'value') ans.push(obj[k]);
        else {
            // 如果是child，不断进行dfs
            dfs(obj[k], ans);
        }
    }
}
dfs(node, ans);
console.log(ans);