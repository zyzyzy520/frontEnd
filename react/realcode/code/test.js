let s = "abcdaefaghji"
let hash = {};//记录字符和字符出现的次数
let left = 0, right = 0, max = 0;
while (right < s.length) {
    //将当前right指向的字符移动到滑动窗口内
    let ch = s[right];
    if (hash[ch] == undefined) hash[ch] = 1;
    else hash[ch]++;
    right++;
    //判断加入后，会否导致滑动窗口收缩
    while (hash[ch] > 2) {
        let out = s[left];
        hash[out]--;
        left++;
    }
    // 更新滑动窗口的长度
    max = max > (right - left) ? max : (right - left);

}
console.log(max);