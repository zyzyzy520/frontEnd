let strCount = 5, operation = 1;
let str = 'hhhhh';
let strArr = str.split('');
// console.log(strArr);
if (operation == 1) {
    // 加密:每次取出n/2的字符，插入空字符串种
    let newStrArr = [];
    while (strArr.length != 0) {
        let n = Math.ceil(strArr.length / 2);
        newStrArr.push(strArr.splice(n - 1, 1)[0]);
    }
    console.log(newStrArr.join(''))
} else if (operation == 2) {
    // 解密
    let newStrArr = [];
    if (strCount % 2 == 0) {
        // 长度为偶数
        while (strArr.length != 0) {
            newStrArr.unshift(strArr.splice(0, 1)[0]);
            newStrArr.push(strArr.splice(0, 1)[0]);
        }
    } else {
        newStrArr.unshift(strArr.splice(0, 1)[0]);
        while (strArr.length != 0) {
            newStrArr.unshift(strArr.splice(0, 1)[0]);
            newStrArr.push(strArr.splice(0, 1)[0]);
        }
    }
    console.log(newStrArr.join(''));
}