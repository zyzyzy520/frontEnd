//dp[i][j][k]表示将i个盘从第j个柱子移动到第k个柱子所需要的最小移动次数
let dp = new Array(3 + 1).fill(0).map((element) => {
    return new Array(3 + 1).fill(0).map(element => {
        return new Array(3 + 1).fill(0);
    })
})

//当没有盘子或者没有柱子的时候，最小移动次数肯定为0
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        for (let k = 1; k <= 3; k++) {
            if (j == k) continue;
            // 将前i-1个盘移动到除j和k之外的另一个柱子，因为三个柱子之和一直为6，所以可以用6-j-k得到另一根柱子
            // 然后将第i个盘从j柱子移动到k柱子
            // 最后再将前i-1个盘从6-j-k柱子移动到k柱子
            dp[i][j][k] = dp[i - 1][j][6 - j - k] + 1 + dp[i - 1][6 - j - k][k]
        }
    }
}
for (let j = 1; j <= 3; j++) {
    let ans = []
    for (let k = 1; k <= 3; k++) {
        ans.push(dp[3][j][k]);
    }
    console.log(ans);
}