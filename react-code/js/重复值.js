let arr = [1, 3, 14, 5, 2, 9, 4, 0, -2]
// // 1.哈希表

// // 遍历数组，如果哈希表里没有该数字，将数字加入哈希表。有就意味着该数字重复
// let hash = {}
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (hash[num] == undefined) hash[num] = 1;
//     else {
//         console.log(num + '重复了');
//         break;
//     }
// }
// console.log('没有重复')

// // 2.排序

// // 对arr排序，然后进行遍历，如果该数字和后面一位数字相等，说明出现重复数字

function quickSort(nums, left, right) {
    // 越界，结束，一定要有，否则死循环
    if (left > right) return;
    //i记录小于sta的2区间
    let i = left, sta = nums[right];
    // j指针遍历区间
    for (let j = left; j < right; j++) {
        if (nums[j] < sta) {
            // 将nums[i]和nums[j]进行交换，然后移动i指针
            let tem = nums[i];
            nums[i] = nums[j];
            nums[j] = tem;
            i++;
        }
    }
    // 最后结束时i指针的位置就是sta应当在的位置，同时要先将nums[i]移动到right
    nums[right] = nums[i];
    nums[i] = sta;

    // 一次只能确定sta的具体位置，对sta的左右两端进行处理
    quickSort(nums, left, i - 1);
    quickSort(nums, i + 1, right);
}

quickSort(arr, 0, arr.length - 1)
console.log(arr);
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
        console.log(arr[i] + '重复');
        break;
    }
}
console.log('没有重复')

// // 3.indexOf和lastIndexOf

// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (arr.indexOf(num) != arr.lastIndexOf(num)) {
//         console.log(num + '重复了');
//         break;
//     }
// }

// 4. set
// let arrSet = new Set(arr);
// if (arrSet.size == arr.length) {
//     console.log('没有重复');
// } else {
//     console.log('重复了')
// }