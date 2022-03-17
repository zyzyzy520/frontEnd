// Twosum

let nums = [-4, -1, -1, 0, 1, 2, 2], target = 1;

let left = 1, right = nums.length - 1, ans = [];

while (left < right) {
    if (nums[left] + nums[right] == target) {
        ans.push([nums[left], nums[right]]), left++, right--;
        // 有可能存在重复元素，例如例子中的-1和2，要跳过重复元素
        while (nums[left] == nums[left - 1]) left++;
        while (nums[right] == nums[right + 1]) right--;
        // 可能存在多种情况，所以不能直接跳出循环
    } else if (nums[left] + nums[right] > target) right--;
    else if (nums[left] + nums[right] < target) left++;
}
console.log(ans, left, right);