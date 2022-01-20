let str = "abasds*##__Abd*";
let ans = [];
for (let i = 0; i < str.length; i++) {
    if (str[i] == '*') {
        // *号，且数组不为空
        if (ans.length != 0) ans.pop();
    } else if (str[i] == '#') {
        if (ans.length != 0) ans.push(ans[ans.length - 1]);
    } else if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
        //大写字母，转换成小写字母
        ans.push(str[i].toUpperCase());
    } else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
        //小写字母，转换成大写字母
        ans.push(str[i].toLowerCase());
    } else {
        ans.push(str[i]);
    }
}
console.log(ans.join(''));
console.log("a".charCodeAt());
console.log("z".charCodeAt());
console.log("A".charCodeAt());
console.log("Z".charCodeAt());