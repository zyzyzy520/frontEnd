let num = [['A', 'B'], ['a', 'b'], ['1', '2']]

let ans = []
backTraverse([], 0);
console.log(ans);
function backTraverse(arr, index) {
    //每一个子数组都选择了一个
    if (arr.length == num.length) {
        ans.push(arr.join(''));
        return;
    }

    //对每一个子数组进行选择
    let choices = num[index];
    for (let i = 0; i < choices.length; i++) {
        // 重复的跳过
        if (i > 0 && choices[i] == choices[i - 1]) continue;
        arr.push(choices[i]);
        // 该子数组选完，下一个子数组选
        backTraverse(arr, index + 1);
        arr.pop(choices[i]);
    }
}