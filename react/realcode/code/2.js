let intervals = [[1, 3], [5, 10], [2, 6], [15, 18]];
// quickSort
function quickSort(intervals, left, right) {
    if (left > right) return;
    let i = left, j = left;
    let sta = intervals[right][0];
    let exc = intervals[right];
    for (let j = left; j < right; j++) {
        if (intervals[j][0] < sta) {
            let tem = intervals[j];
            intervals[j] = intervals[i];
            intervals[i++] = tem;
        }
    }
    intervals[right] = intervals[i];
    intervals[i] = exc;
    quickSort(intervals, left, i - 1);
    quickSort(intervals, i + 1, right);
}
quickSort(intervals, 0, intervals.length - 1);
console.log(intervals)
//用栈来存储答案
let stack = [];
stack.push(intervals[0]);
// let top = stack.pop();
// let s1 = top[0];
// console.log(s1);
for (let i = 1; i < intervals.length; i++) {
    // 将每个区间和栈顶区间进行比较
    let top = stack.pop();
    //let [s1, e1] = top;
    let s1 = top[0], e1 = top[1];
    let [s2, e2] = intervals[i];
    if (s1 <= s2 && s2 <= e1 && e1 <= e2) stack.push([s1, e2]);
    else if (s2 <= s1 && s1 <= e2 && e2 <= e1) stack.push([s2, e1]);
    else if (s1 <= s2 && e2 <= e1) stack.push([s1, e1]);
    else if (s2 <= s1 && e2 >= e1) stack.push([s2, e2]);
    else {
        stack.push([s1, e1]), stack.push([s2, e2]);
    }
}
console.log(stack);