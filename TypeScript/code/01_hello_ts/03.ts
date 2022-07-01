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

function id2<T>(value: T[]): T[] {
    console.log(value.length)   //此处会报错
    return value
}

id2([1, 2, 3, 4]);

interface ILength {
    length: number
}

let arr3: ILength = [1, 2, 3];
console.log(arr3, arr3.length);

interface IdFunc<T> {
    id: (value: T) => T,
    ids: () => T[]
}

let obj: IdFunc<number> = {
    id: (value) => {
        return value
    },
    ids: () => {
        return [1, 2, 3, 4]
    }
}