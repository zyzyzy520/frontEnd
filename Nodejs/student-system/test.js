function Bu(num) {
    num = num.toString(2).split('')
    if (num[0] == '-') {
        num.shift();
        // 负数
        for (let i = num.length; i < 32; i++) num.unshift('0');
        for (let i = 0; i < 32; i++) num[i] = 1 - parseInt(num[i]);
        let one = new Array(31).fill(0);
        one.push(1);
        console.log(one);
        // num = sum(num, one);
    } else {
        // 正数
        for (let i = num.length; i < 32; i++) num.unshift('0');
        console.log(num);
    }
    return num;
}
// console.log(Bu(-1));
Bu(-1)