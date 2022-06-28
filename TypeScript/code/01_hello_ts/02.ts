export { }
type ObjType = {
    username?: string,
    age: number,
    run: FuncType
    // run: () => string 可以指定返回值类型
    // run: Function 无法指定返回值类型
    // run(): string可以指定返回值类型
}
type FuncType = (num1: number, num2: number) => number;
let person = {
    age: 32,
    run: (num1: number, num2: number) => {
        return num1 + num2;
    }

}

interface IPeople {
    username?: string,
    age?: number,
    run?: () => void
}

let p1: IPeople = {
    username: '123',
    age: 12
}
console.log(person.run(1, 2));
console.log(p1)


interface IPoint2D {
    x: number,
    y: number
}

interface IPoint3D extends IPoint2D {
    z: number
}

let p4: IPoint3D = {
    x: 1,
    y: 1,
    z: 1
}

let position: [string, number] = ['1', 1]

// 创建枚举, Up ->0, Down ->1, Left ->2, Right ->3
enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

// 使用枚举类型
function changeDirection2(direction: Direction2) {
    console.log(direction) //打印0
}

//应传入枚举Direction成员的任意一个
//直接通过点(.)语法访问枚举的成员
changeDirection2(Direction2.Up);