export { }
type custom_obj = {
    name: string,
    age: number,
    sex: string
}
type custom_obj2 = {
    name: string,
    age: number
}

let p1: custom_obj = {
    name: 'Ash',
    age: 21,
    sex: 'female'
}
let p2: custom_obj2 = p1

console.log(p2);

// 1. 直接声明函数
function id<T>(value: T): T {
    return value
}

// 2. 先定义函数的类型，再声明函数 
type CustomFunc = <T>(value: T, value2?: T) => T
let func: CustomFunc = (value) => {
    return value
}
let num: string = func<string>("123")
console.log(num);

let num1 = id(10);
let str1 = id('123');

console.log(num1)