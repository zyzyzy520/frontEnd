// 找到两个有序数组的 第k个数
let arr1 = [1, 2]
let arr2 = [3, 4];

function findKthNumebr(k, arr1, arr1Left, arr1Right, arr2, arr2Left, arr2Right) {
    // 有一个数组已经排除掉了所有元素
    if (arr1Left > arr1Right) return arr2[arr2Left + k - 1];
    if (arr2Left > arr2Right) return arr1[arr1Left + k - 1];

    // k = 1时，找第1个数，返回小的那个
    if (k == 1) {
        return Math.min(arr1[arr1Left], arr2[arr2Left])
    }

    // 有可能有一个数组已经排除到了没有第k/2个数了，取三者中小的那个
    let floorK = Math.min(parseInt(k / 2), arr2Right - arr2Left + 1, arr1Right - arr1Left + 1);


    // 比较两个数在当前范围里的中第floorK个数的大小
    if (arr1[arr1Left + floorK - 1] >= arr2[arr2Left + floorK - 1]) {
        // arr1[k/2] > arr2[k/2]，arr2[left，arr1Left + floorK - 1]都可以淘汰
        // 找剩下数组元素的第k - (floork - 1 - left + 1)的数
        return findKthNumebr(k - floorK, arr1, arr1Left, arr1Right, arr2, arr2Left + floorK, arr2Right);
    } else {
        return findKthNumebr(k - floorK, arr1, arr1Left + floorK, arr1Right, arr2, arr2Left, arr2Right);
    }
}

console.log(findKthNumebr(3, arr1, 0, arr1.length - 1, arr2, 0, arr2.length - 1));