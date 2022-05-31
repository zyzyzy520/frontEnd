// 例如：
const arr = [[1, 2, 3], [4, 5], [6]]
// 输出
const result = [[1, 4, 6], [1, 5, 6], [2, 4, 6]]

let ans = [];
backTraverse([], 0);
console.log(ans);
function backTraverse(sum, index) {
    if (sum.length == arr.length) {
        //每一个子数组都选出了一个元素
        ans.push([...sum]);
        return;
    }

    //拿到目前要进行选择的数组
    let choices = arr[index];
    for (let i = 0; i < choices.length; i++) {
        //进行选择
        sum.push(choices[i]);
        //让下一个数组选择一个
        backTraverse(sum, index + 1);
        //弹出当前选择，方便进入下一个分支
        sum.pop();
    }
}