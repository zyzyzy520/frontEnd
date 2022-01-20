//let arr, signalNum, days, signals = [],lineIndex = 0;
// console.log(signals);
const [signalNum, days] = readline().split(' ').map(n => parseInt(n));
const signals = readline().split(' ').map(n => parseInt(n));
// 小于这个，最大的音符没法跑
//let min = Math.max(...signals);
let min = 1;
// 一天跑完所有音符
let max = 0;
for (let i = 0; i < signals.length; i++) {
    max += signals[i];
}

// 开始二分搜索
let left = min, right = max;

// console.log(isOK(min - 1));
while (left <= right) {
    //let middle = parseInt(left + (right - left) / 2);
    let middle = Math.floor(left + (right - left) / 2);
    let flag = isOK(middle);
    //console.log(middle)
    // 其实是找满足条件的最左边元素
    if (flag && (middle == min || !isOK(middle - 1))) {
        console.log(middle - 1);
        break;
    } else if (!flag) left = middle + 1;
    else right = middle - 1;
}

function isOK(speed) {
    let signalsWeight = 0, index = 0, total = 1;
    while (index < signals.length) {
        // 在该分钟内，仍能跑该音符，将该音符加入
        if (signalsWeight + signals[index] <= speed) {
            signalsWeight += signals[index], index++;
            // 最后一个可以装进去，不用单独成堆，会导致少算一堆，跳过了else
            if (index == signals.length) break;
        }
        else {
            //在该分钟跑不完该音符，该音符放入下一分钟
            // console.log(signals[index])
            total++, signalsWeight = 0;

        }

    }
    // console.log(total);
    if (total > days) return false;
    else return true;
}

