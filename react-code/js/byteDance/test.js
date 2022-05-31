let num = [1, 1, 2]
num.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
})
let visited = new Array(num.length).fill(false), ans = [];
visited[0] = true;
backTraverse([], 0, ans);
console.log(ans);
//2.进行回溯
function backTraverse(arr, index, ans) {
    //找到一个完整的排列
    if (arr.length == num.length) {
        ans.push([...arr]);
        return;
    }

    //进行选择 
    for (let i = 0; i < num.length; i++) {
        //跳过自己本身
        if (i == index) continue;
        //如果当前的数和前面的数一样，且前面的数未被访问，访问该数一定重复，跳过
        if (i > 0 && num[i] == num[i - 1] && visited[i - 1] == false) {
            console.log(index, i, visited)
            continue;
        }
        arr.push(num[i]), visited[i] == true;
        backTraverse(arr, i, ans);
        arr.pop(), visited[i] == false;
    }
}


