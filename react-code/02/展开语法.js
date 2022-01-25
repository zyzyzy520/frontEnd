let arr = [1, 2, 3];
// console.log(...arr); //拆包 1 2 3

let obj = {
    name: 'zhou',
    age: 12,
    sex: 'girl'
}
// console.log(...obj) //报错

function open(...params) {
    console.log('该函数的参数', params);
}
// open(1, 2, 3); //[1,2,3]
// open([1, 2, 3]); //[[1,2,3]]

// let arr2 = [...arr];
// console.log('克隆的数组arr2为', arr2);

let cloneObj = { ...obj };
// console.log('克隆后的对象cloneObj为：', cloneObj);

let arr1 = [1, 2, 3, 4];
let arr2 = ['zhou', 'yu', 'how'];
let arr3 = ['hello', 'hi', 'good'];

// let mergedObj1 = [...arr1, ...arr2, ...arr3];
// console.log('合并后的数组为', mergedObj1);//[1, 2, 3, 4, 'zhou', 'yu', 'how', 'hello', 'hi', 'good']
// let mergedObj2 = [0, ...arr2, 'sho'];
// console.log(mergedObj2)


let obj1 = {
    name: 'zhou',
    age: 12,
    sex: 'girl'
}
let obj2 = {
    grade: 100,
    stage: 0
}
let mergedObj1 = { ...obj1, ...obj2 };
console.log(mergedObj1);
let mergedObj2 = { b: 2, ...obj1, a: 1 }
console.log(mergedObj2);