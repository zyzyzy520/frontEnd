function divide(nums, left, right) {
    // 分到只剩一个后，返回
    if (left <= right) return;
    let mid = parseInt(left + (right - left) / 2);
    // 首先进行divide
    divide(nums, left, mid);
    divide(nums, mid + 1, right);
    // 然后进行conquer，[left,mid]是已经排好序的，[mid + 1, right]也是排好序的，相当于是合并两个排序数组
    let lpointer = left, rPointer = mid + 1, arr = new Array();
    while (lpointer <= mid && rPointer <= right) {
        if (nums[lpointer] < nums[rPointer]) {
            arr.push(nums[lpointer]), lpointer++;
        } else {
            arr.push(nums[rPointer]), rPointer++;
        }
    }
    // 相当于是处理合并两个数组时，有一个数组还有剩余的情况
    while (lpointer <= mid) {
        arr.push(nums[lpointer]), lpointer++;
    }
    while (rPointer <= right) {
        arr.push(nums[rPointer]), rPointer++;
    }

    // 将排好序的arr赋值给nums[left,right]
    for (let i = right; i >= left; i--) {
        nums[i] = arr.pop();
    }
}
return nums;