// function isHui(s, i, j) {
//     while (i <= j) {
//         if (s[i] != s[j]) return false;
//         i++, j--;
//     }
//     return true;
// }
// let s = "cbbd", max = 0, maxStr = "";
// for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//         // isHUI
//         if (s[j] == s[i]) {
//             if (isHui(s, i, j) && max < j - i + 1) {
//                 max = j - i + 1;
//                 maxStr = s.slice(i, j + 1);
//             }
//         }
//     }
// }
// console.log(maxStr);
let s = "ac";
let max = 0, maxStr = ""
//遍历字符串，以每个字符为中心向外扩散得到最长以其为中心的最长回文子串
for (let i = 0; i < s.length; i++) {
    //两种情况，奇数，为中心扩散，参数是索引
    isHui(i, i);
    isHui(i, i + 1);
}
function isHui(left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        left--, right++;
    }
    if (right - left - 1 > max) {
        max = right - left - 1;
        // slice左边取到，右边取不到
        maxStr = s.slice(left + 1, right);
    }
}
console.log(maxStr);