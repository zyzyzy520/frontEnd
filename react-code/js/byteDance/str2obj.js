//input ["a","b","c","d","e","f","g"]

//output {"a":{"b":{"c":{"d":{"e":{"f":"g"}}}}}}

let arr = ["a", "b", "c", "d", "e", "f", "g"];

console.log(createObj(arr, 0).a.b.c);
function createObj(arr, left) {
    if (left == arr.length - 1) {
        return arr[left];
    }
    let obj = {}
    obj[arr[left]] = createObj(arr, left + 1);
    return obj;
}