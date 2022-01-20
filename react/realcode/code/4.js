let s = "bcabc"
let ans = [];
// hash表记录字符，和字符上一次出现的位置
for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ans.indexOf(ch) == -1) {
        ans.push(ch);
    }
    else {
        // 出现重复字符，读取其所在位置
        let index = ans.indexOf(ch);
        //比较其与后一个数的ASCII值，如果比后一个字母的ASCII值大，要后面的字符(删除字符，高位变化)；比后一个字母得到ASCII值小，要该字符
        if (ans[index].charCodeAt() > ans[index + 1].charCodeAt()) {
            ans = (ans.slice(0, index).join('') + ans.slice(index + 1, ans.length) + ch).split('')
        }
    }
}
console.log(ans);
var arr = [];
for (var i = 0; i < nums.length; i++) {
    if (arr.indexOf(nums[i]) != -1) return [arr.indexOf(nums[i]), i];
    else arr.push(target - nums[i]);
}