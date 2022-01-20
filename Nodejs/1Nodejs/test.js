let arr = [0, 1, 2, 3];
const sum = arr.reduce((prev, cur, index) => {
    console.log(prev, cur, index);
    return cur * 2;
})
console.log(arr, sum);