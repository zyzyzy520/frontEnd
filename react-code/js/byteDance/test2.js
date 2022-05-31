let num = [1]

let ans = [];
backTraverse([], num, ans);
console.log(ans);
function backTraverse(arr, num, ans) {
    if (arr.length == num.length) {
        ans.push([...arr]);
        return;
    }
    //进行选择
    for (let i = 0; i < num.length; i++) {
        //路径里已经有该元素
        if (arr.indexOf(num[i]) != -1) continue;
        arr.push(num[i]);
        backTraverse(arr, num, ans);
        arr.pop();
    }
}