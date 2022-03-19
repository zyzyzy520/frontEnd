let goodsValue = 65;
let value = [4, 50, 30, 20, 5];
getMin(goodsValue, value);
function getMin(goodsValue, value) {
    let dp = new Array(value.length + 1).fill(0).map(Element => {
        return new Array(goodsValue + 1).fill(0);
    })

    //dp[i][j]表示前i张代金券凑够商品价值j的最少张数
    // 初始化，当没有代金券时，无论如何也凑不齐所以是false
    for (let j = 0; j <= goodsValue; j++) dp[0][j] = 'impossible';
    // 当要凑的商品价格为0时，无论有多少种代金券，不取就好
    for (let i = 0; i <= value.length; i++) dp[i][0] = 0;

    // 针对第i -1张代金券，需要做goodsvalue个决策来保证最佳
    for (i = 1; i <= value.length; i++) {
        for (j = 1; j <= goodsValue; j++) {
            if (value[i - 1] > goodsValue) {
                // 该代金券价值比物品价值大，肯定不能取，凑够该商品代金券的数量由前面决定
                dp[i][j] = dp[i - 1][j]
            } else {
                // 可以将代金券放入，但是放几张不确定，所以针对每一种情况进行讨论
                dp[i][j] = dp[i - 1][j]  //先是不放入
                for (k = 1; k <= parseInt(j / value[i - 1]); k++) {
                    if (dp[i][j] != 'impossible' && dp[i - 1][j - k * value[i - 1]] != 'impossible') {
                        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - k * value[i - 1]] + k);
                    } else if (dp[i][j] == 'impossible' && dp[i - 1][j - k * value[i - 1]] != 'impossible') {
                        dp[i][j] = dp[i - 1][j - k * value[i - 1]] + k
                    }

                }
            }
        }
    }
    console.log(dp[value.length][goodsValue]);
}
