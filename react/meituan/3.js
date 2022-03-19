
let n = 3, k = 6;
let initial = [0]
for (let i = 1; i <= n; i++) {
    initial = magicBox(initial);
    // console.log(initial)
}
console.log(initial[k - 1])
function magicBox(arr) {
    // 1.首先计算A+1
    let a1 = arr.map(Element => Element + 1)
    // 2.然后计算A+2
    let a2 = arr.map(Element => Element + 2)
    // 3.进行拼接
    return a1.concat(arr, a2)
}