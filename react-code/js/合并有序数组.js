
function mergeTwoArray(arr1, arr2) {
    // 新建一个数组存储有序数组
    let arr3 = [];

    // 两个指针进行对比
    let pointer1 = 0, pointer2 = 0;
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            arr3.push(arr1[pointer1]), pointer1++;
        } else {
            arr3.push(arr2[pointer2]), pointer2++;
        }
    }

    // 判断哪个指针没走完
    while (pointer1 < arr1.length) {
        arr3.push(arr1[pointer1]), pointer1++;
    }
    while (pointer2 < arr2.length) {
        arr3.push(arr2[pointer2]), pointer2++;
    }
    return arr3;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [];
console.log(mergeTwoArray(arr1, arr2))