let str = readline();
let ans = [], i = 1;
let cha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//.1全部首字母大写
let tem = [];
tem.push(str[0].toUpperCase());
for (let i = 1; i < str.length;) {
    if (str[i] == "_" || str[i] == "-") {
        tem.push(str[i + 1].toUpperCase()), i += 2;
    } else {
        tem.push(str[i]), i++;
    }
}
ans.push(tem.join(''));
//2.第一个单词首字母小写
tem[0] = str[0].toLowerCase();
ans.push(tem.join(''));
//3.单词全部小写，下划线连接
let temp2 = [];
for (let i = 0; i < tem.length; i++) {
    //大写字母
    if (cha.indexOf(tem[i]) != -1) {
        temp2.push('_' + tem[i].toLowerCase());
    } else {
        temp2.push(tem[i]);
    }
}
ans.push(temp2.join(''));
ans.push(temp2.join('').split('_').join(('-')));
console.log(ans.join(' '));