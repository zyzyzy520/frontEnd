//拿到测试数据的数量
const T = parseInt(readline())
for (let i = 1; i <= T; i++) {
    //一组一组的读取数据
    //先读取红薯数量，和背包体积
    let [amount, weight] = readline().split(' ').map(element => parseInt(element));
    // 再读取红薯的体积
    let goodsWeight = readline().split(' ').map(element => parseInt(element));
    // 装入背包的物品总体积不超过weight，求最多能装几个物品
    let dp = new Array(amount + 1).fill(0).map(element => {
        return new Array(weight + 1).fill(0);
    })
    // 初始化：当红薯数量为0时，背包最多装0个物品；当背包容量为0，能装0个物品
    for (let i = 1; i <= amount; i++) {
        for (let j = 1; j <= weight; j++) {
            if (goodsWeight[i - 1] <= j) {
                // 在不装这个红薯时，能装到的最多数量，和装了它能装到的最大数量进行比较。取较大的那个
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - goodsWeight[i - 1]] + 1);
            } else {
                // 红薯已经 超过背包容量，只能不装它
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    console.log(dp[amount][weight]);
}