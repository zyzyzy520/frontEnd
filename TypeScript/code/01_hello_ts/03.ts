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