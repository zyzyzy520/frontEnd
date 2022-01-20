let workerX, workerY, index = 0, numBoss, bossX = [], bossY = [], hash = new Set();
while (line = readline()) {
    let arr = line.split(' ');
    if (index == 0) {
        workerX = parseInt(arr[0]), workerY = parseInt(arr[1]), numBoss = parseInt(arr[2]);
    } else {
        hash.add(arr[0] + ',' + arr[1]);
    }
    index++;
}
let dp = new Array(workerX + 1).fill('0').map(element => {
    return new Array(workerY + 1).fill('0');
});
//for (let i = 1; i <= workerY; i++) dp[0][i] = '1';
//for (let i = 1; i <= workerX; i++) dp[i][0] = '1';
//for (let i = 0; i < numBoss; i++) dp[bossX[i]][bossY[i]] = '0';
let flagX = 0, flagY = 0;
for (let i = 0; i <= workerX; i++) {
    for (let k = 0; k <= workerY; k++) {
        if (hash.has(i + ',' + k)) {
            dp[i][k] = '0';
            if (i == 0) flagX = '1';
            if (k == 0) flagY = '1';
        }
        //else if(i == 0 && k == 0) dp[i][k] = '1';
        // else if(i == 0 && flagX == 0) dp[i][k] = dp[i][k - 1];
        // else if(k == 0 && flagY == 0) dp[i][k] = dp[i - 1][k];
        else if (i == 0 && flagX == 0 || k == 0 && flagY == 0) dp[i][k] = '1';
        else if (i == 0 && flagX == 1 || k == 0 && flagY == 1) dp[i][k] = '0';
        else {
            dp[i][k] = add(dp[i - 1][k], dp[i][k - 1]);
            //dp[i][k] = dp[i - 1][k] + dp[i][k - 1];
        }
    }
}
console.log(dp[workerX][workerY]);

// 加法运算
function add(a, b) {
    let res = "";
    let temp = 0;
    let aArr = a.split("");
    let bArr = b.split("");
    while (aArr.length || bArr.length || temp) {
        temp += ~~aArr.pop() + ~~bArr.pop();
        res = temp % 10 + res;
        temp = Math.floor(temp / 10);
    }
    return res;
}
