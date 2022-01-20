// let arr = [0, 1, 2, 1];
// function quickSort(arr, left, right) {
//     if (left > right) return;
//     // i是小于等于arr[right]的区间
//     let i = left, standard = arr[right];
//     // j遍历区间，如果arr[j]小于standard，就将其放入i区间，然后i++
//     for (let j = left; j <= right - 1; j++) {
//         if (arr[j] <= standard) {
//             let tem = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tem;
//             i++;
//         }
//     }
//     // 最后i指向的数放入arr[right]，arr[right]放入arr[i]
//     let tem = arr[i];
//     arr[i] = standard;
//     arr[right] = tem;
//     quickSort(arr, left, i - 1);
//     quickSort(arr, i + 1, right);
// }
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);


var MedianFinder = function () {
    // 存储数据
    this.arr = new Array();
};


MedianFinder.prototype.addNum = function (num) {
    this.arr.push(num);
    return;
};


MedianFinder.prototype.findMedian = function () {
    // 对数组排序
    this.arr = this.arr.sort(function (a, b) {
        if (a - b > 0) return 1;
        else if (a - b < 0) return - 1;
        else return 0;
    })
    if (this.arr.length % 2 == 0) {
        // 偶数个数
        let index = parseInt((this.arr.length - 1) / 2);
        return (this.arr[index] + this.arr[index + 1]) / 2;
    } else {
        // 奇数个数
        let index = (this.arr.length - 1) / 2;
        return this.arr[index];
    }
};


var obj = new MedianFinder()
obj.addNum(1)
obj.addNum(2)
var param_2 = obj.findMedian()
console.log(param_2)