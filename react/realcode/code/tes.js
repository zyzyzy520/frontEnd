let s = "BabA";
let arr = s.split("");

function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}
// 1.首先实现忽略大小写的排序
//根据ASCII码进行排序，比较的时候都转换成小写的ASCII码
function quickSort(arr, left, right) {
    if (left > right) return;
    //跳过其他字符
    let i = left;
    //得到小写字符的ASCII码值
    let staCh = arr[right].toLowerCase().charCodeAt();

    //到right之前，i是已排好序区间，j是未排好序区间
    for (let j = left; j < right; j++) {
        if (arr[j].toLowerCase().charCodeAt() <= staCh) {
            swap(arr, i, j);
            i++;
        }
    }
    //最后i的位置就是标准字符放入的位置
    swap(arr, i, right);
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
}
// quickSort(arr, 0, arr.length - 1);
// console.log(arr.join(''));
// console.log("a".toLowerCase().charCodeAt())

arr = arr.sort(function (a, b) {
    if (a.toLowerCase().charCodeAt() > b.toLowerCase().charCodeAt()) return 1;
    else if (a.toLowerCase().charCodeAt() < b.toLowerCase().charCodeAt()) return -1;
    else return 0;
})
console.log(arr.join(''));