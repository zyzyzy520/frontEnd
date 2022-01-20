//有两个 背包
//有一堆物品，其体积和对应价值
//状态有三个：物品，背包1，背包2；
//物品的选择有三个：不放、放入背包1、放入背包2；
let M1 = 7, M2 = 11;
let wt = [1, 2];
let val = [8, 6];

//dp[i][j][k]表示前i个物品，在背包1容量为j，背包2容量为k时，能取得的最大价值
let dp = new Array(wt.length + 1).fill(0).map(Element => {
    return new Array(M1 + 1).fill(0).map(Element => {
        return new Array(M2 + 1).fill(0);
    })
})

//初始化，当物品数量为0时，最大价值为0；
//当两个背包容量都为0时，最大价值也为0

for (let i = 1; i <= wt.length; i++) {
    for (let j = 0; j <= M1; j++) {
        for (let k = 0; k <= M2; k++) {
            if (j - wt[i - 1] < 0 && k - wt[i - 1] < 0) {
                //两个背包都放不下该物品，就是前[i-1]个物品的最大价值
                dp[i][j][k] = dp[i - 1][j][k];
                //以下情况时1号背包能装或者二号背包能装或者都能装
            } else if (j - wt[i - 1] >= 0 && k - wt[i - 1] >= 0) {
                //都装的下，取最大的
                dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - wt[i - 1]][k] + val[i - 1], dp[i - 1][j][k - wt[i - 1]] + val[i - 1]);
            } else if (j - wt[i - 1] < 0 && k - wt[i - 1] >= 0) {
                //只有二号背包能装下
                dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j][k - wt[i - 1]] + val[i - 1]);
            } else if (j - wt[i - 1] >= 0 && k - wt[i - 1] < 0) {
                //只有一号背包能装下
                dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - wt[i - 1]][k] + val[i - 1]);
            }
        }
    }
}
console.log(dp[wt.length][M1][M2]);
