let gas = [1, 2, 3, 4, 5]
let cost = [3, 4, 5, 1, 2]
//循环数组
function isOK(i) {
    // 邮箱里的剩余汽油
    let remain = 0;
    //从第i号加油站出发
    for (let j = i; j <= gas.length + i; j++) {
        //如果到达出发时的加油站，
        if (j == gas.length + i) return true;
        //加上当前加油站提供的油
        remain += gas[j % gas.length];
        console.log(remain);
        //判断能否到达下一个加油站
        if (remain < cost[j % cost.length]) {
            // console.log(j, remain);
            return false;
        }

        //能到达，进入下一个加油站
        remain -= cost[j % cost.length];
    }
}
// for(let i = 0; i < gas.length; i++){
//     //验证从当前加油站出发能否回到该加油站
// }
console.log(isOK(2))