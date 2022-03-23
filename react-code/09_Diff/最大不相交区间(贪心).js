let N = 10, intervals = [[-5, 1], [-10, 7], [-8, 4], [-2, -1], [-7, -6], [0, 7], [-8, -7], [3, 9], [-9, -4], [-3, -3]];
/*1.首先将区间根据右端点的大小进行排序*/
intervals.sort(function (a, b) {
    if (a[1] - b[1] > 0) return 1;
    else if (a[1] - b[1] < 0) return -1;
    else return 0
})

// 2.选择第一个点，记录点数
let point = intervals[0][1], amount = 1;

//   3. 从第二个区间开始进行遍历，进行点的更新和点数的记录
for (let i = 1; i < N; i++) {
    if (intervals[i][0] <= point) continue;
    point = intervals[i][1], amount++;
}
console.log(amount)