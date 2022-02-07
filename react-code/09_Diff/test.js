/**
 * 1. 编写一个将字符串转换成数组的函数
 * 
 * parse()
 * 
 * input:
 * '[]'
 * '[1, 2, 3]'
 * '[1, 2, [3, 4], 5]'
 * 
 * output:
 * []
 * [1, 2, 3]
 * [1, 2, [3, 4], 5]
 */
const parse = (str) => {
    // 准备一个栈存放数组
    let stackArr = [], sum = 0;

    // 遍历字符串
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '[') {
            // 生成一个新的数组，压入栈中
            let newArr = new Array();
            stackArr.push(newArr);
        } else if (str[i] == ']') {
            // 因为]前面的最后一位数字后面是没有，的，所以需要在这里压入最后一位数字
            // 或者[1, [2,6,8,[12,13,14]], [3, 4], 5]， ]前面有多个],
            if (str[i - 1] != ']') stackArr[stackArr.length - 1].push(sum), sum = 0;

            // 弹出栈顶数组
            let arr = stackArr.pop();
            // 因为有可能正好是最外层的数组,最后一个].,所以需要先判断栈里面是否还有数组
            if (stackArr.length != 0) {
                // 然后将该数组压入当前栈顶的数组，因为是其一个元素
                stackArr[stackArr.length - 1].push(arr);
            } else {
                return arr;
            }
            // [ 1, 2, [ 3, 4 ], 0, 5 ] 处理逗号在]后面的情况

        } else if (str[i] == ',' && str[i - 1] != ']') {
            // console.log(sum);
            // 说明计算出了一个完整的数字，压入栈顶数组中，并且将sum 清0，进行下一轮计算
            stackArr[stackArr.length - 1].push(sum), sum = 0;
        } else if (str[i] >= '0' && str[i] <= '9') {
            // 数字，累乘计算
            sum = sum * 10 + parseInt(str[i]);
        }
    }
}
console.log(parse('[1, [2,6,8,[12,13,14]], [3, [2,1000,21], 4], 5]'));

