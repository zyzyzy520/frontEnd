let goodsCount = 3;
let goodsPrice = [5, 22, 8]
let cutPrice = [5, 8, 7]
let rulesCount = 2;
let c = [15, 22];
let d = [1, 4];

//2.计算商品总价
let goodsPrice_prefixSum = new Array(goodsCount).fill(0)
goodsPrice_prefixSum[0] = goodsPrice[0]
for (let i = 1; i < goodsCount; i++) {
    goodsPrice_prefixSum[i] = goodsPrice[i] + goodsPrice_prefixSum[i - 1];
}
//3.计算累计折扣，根据前缀和来计算
let cutPrice_prefixSum = new Array(goodsCount).fill(0)
cutPrice_prefixSum[0] = cutPrice[0]
for (let i = 1; i < goodsCount; i++) {
    cutPrice_prefixSum[i] = cutPrice[i] + cutPrice_prefixSum[i - 1];
}

//4.计算累计满减，利用前缀和
let rulesPrice = new Array(goodsCount).fill(0)
let pointer1 = 0, pointer2 = 0;
let prevCount = c[pointer2];
while (pointer1 < goodsCount) {
    if (goodsPrice_prefixSum[pointer1] < c[pointer2]) {
        rulesPrice[pointer1] = goodsPrice_prefixSum[pointer1], pointer1++;
    } else {
        //找到能拿到的最低折扣
        while (pointer2 < rulesCount && goodsPrice_prefixSum[pointer1] >= c[pointer2]) {
            prevCount = d[pointer2], pointer2++;
        }
        rulesPrice[pointer1] = goodsPrice_prefixSum[pointer1] - prevCount, pointer1++;
    }
}

console.log(goodsPrice_prefixSum, cutPrice_prefixSum, rulesPrice);