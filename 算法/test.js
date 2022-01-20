let nums = [1, 3, 1, 2, 2, 3], target = 4;
let left = 0, right = nums.length - 1, ans = [];
//先排序
nums = nums.sort(function (a, b) {
    if (a - b > 0) return 1;
    else if (a - b < 0) return -1;
    else return 0;
})
while (left < right) {
    let leftVal = nums[left], rightVal = nums[right];
    if (leftVal + rightVal == target) {
        ans.push([leftVal, rightVal]);
        left++, right--;
    }
    else if (leftVal + rightVal > target) right--;
    else left++;
}
console.log(ans);