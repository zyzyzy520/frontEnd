let arr = [1, 1, 2, 3, 3, 4, 4, 5, 5]
//相同的数异或为0，0和一个数是该数自身
let res = arr.reduce((prev, cur) => prev ^ cur);

console.log(res);