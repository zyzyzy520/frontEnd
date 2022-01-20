// let arr = ["duk", "Test", "hupu", "Best", "Mub"];
let arr = ["dad", "bood", "bada", "Admin", "A ", "Good", "aete", "cc", "Ko", "Beta", "Could "];

function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}
//按照首字母的ASCII值进行排序，统一用小写的ASCII码值
function quickSort(arr, left, right) {
    if (left > right) return;

    let i = left;
    let chAscii = arr[right][0].toLowerCase().charCodeAt();

    //用j指针遍历区间，找到比chAscii小的，就放到前面
    for (let j = left; j < right; j++) {
        if (arr[j][0].toLowerCase().charCodeAt() < chAscii) {
            swap(arr, i, j);
            i++;
        }
    }
    //最后i指针指向的，就是right的位置
    swap(arr, i, right);
    //对左右区间进行递归调用
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);

}
quickSort(arr, 0, arr.length - 1);
console.log(arr);