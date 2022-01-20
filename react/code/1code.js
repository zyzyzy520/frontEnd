let bossX = [1, 2, 5], bossY = [1, 3, 3], index = 0, workerX = 5, workerY = 5, numBoss = 3;
let hash = new Set();
for (let i = 0; i < bossX.length; i++) {
    hash.add(bossX[i] + ',' + bossY[i]);
}
// let times = 0;
// let visited = new Array(workerX + 1).fill(0).map(element => {
//     return new Array(workerY + 1).fill(0);
// });
// for (let i = 0; i < bossX.length; i++) {
//     visited[bossX[i]][bossY[i]] = 1;
// }
// function DFS(x, y) {
//     //超出边界，直接返回
//     if (x < 0 || x > workerX || y < 0 || y > workerY || visited[x][y] == 1) return;
//     //走到办公处，办公处不用计入已访问。
//     if (x == workerX && y == workerY) {
//         times++;
//         return;
//     }
//     //visited[x][y] == 1;
//     DFS(x + 1, y);
//     DFS(x, y + 1)
// }
// DFS(0, 0)
// console.log(times);


// let workerX, workerY, index = 0, numBoss, bossX = [], bossY = [];
// while(line = readline()){
//     let arr = line.split(' ');
//     if(index == 0){
//         workerX = parseInt(arr[0]), workerY = parseInt(arr[1]), numBoss = parseInt(arr[2]);
//     }else{
//         bossX.push(parseInt(arr[0])), bossY.push(parseInt(arr[1]));
//     }
//     index++;
// }
// let dp = new Array(workerX + 1).fill(0).map(element => {
//     return new Array(workerY + 1).fill(0);
// });

let dp = new Array(workerX + 1).fill(0).map(element => {
    return new Array(workerY + 1).fill(0);
});
//for (let i = 1; i <= workerY; i++) dp[0][i] = '1';
//for (let i = 1; i <= workerX; i++) dp[i][0] = '1';
//for (let i = 0; i < numBoss; i++) dp[bossX[i]][bossY[i]] = '0';
let flagX = 0, flagY = 0;

for (let i = 0; i <= workerX; i++) {
    for (let k = 0; k <= workerY; k++) {
        if (hash.has(i + ',' + k)) {
            console.log(i, k);
            dp[i][k] = 0;
            if (i == 0) flagX = 1;
            if (k == 0) flagY = 1;
        }
        //else if(i == 0 && k == 0) dp[i][k] = '1';
        // else if(i == 0 && flagX == 0) dp[i][k] = dp[i][k - 1];
        // else if(k == 0 && flagY == 0) dp[i][k] = dp[i - 1][k];
        else if (i == 0 && flagX == 0 || k == 0 && flagY == 0) dp[i][k] = 1;
        else if (i == 0 && flagX == 1 || k == 0 && flagY == 1) dp[i][k] = 0;
        else {
            //dp[i][k] = add(dp[i - 1][k], dp[i][k - 1]);
            dp[i][k] = dp[i - 1][k] + dp[i][k - 1];
        }
    }
}
console.log(dp);
console.log(dp[workerX][workerY]);
// console.log(bossX.indexOf(1), bossY.indexOf(3));

function sumBigNumber(a, b) {
    var res = '',
        temp = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || temp) {
        temp += ~~a.pop() + ~~b.pop();
        res = (temp % 10) + res;
        temp = temp > 9;
    }
    return res.replace(/^0+/, '');
}

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
