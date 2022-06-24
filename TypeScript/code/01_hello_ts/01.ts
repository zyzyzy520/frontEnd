let str: string | number = 1;
str = '张三'

//既可以是字符串数组，也可以是数字数组
let arr: string[] | number[] = [1, 2, 3, 4];
arr = ['a', 'b', 'c']

let arr1: (string | number)[] = [1, 2, 3, 'a'];
let arr2: Array<string | number> = [1, 2, 3, 'a'];


// 普通函数声明
function add(num1: number, num2: number): number {
    return num1 + num2
}

// 箭头函数声明
const add2 = (num1: number, num2: number): number => {
    return num1 + num2;
}


type FuncType = (num1: number, num2: number) => number
//类型兼容性，所以即使add3缺少参数，不会在编译阶段报错，会在执行阶段报错
const add3: FuncType = () => {
    return 123;
}

const add4: FuncType = (num1: number, num2: number) => {
    return num1 + num2;
}
console.log(str, arr, arr1, arr2, add(1, 2), add2(1, 2), add3(), add4(1, 2));