// 用于计算scoreArr内比m小的和比m大的各有多少
function cal(m) {

}
let n = 6, x = 2, y = 3;
let str = '1 2 3 4 5 6';


scoreArr = str.split(' ').map(Element => parseInt(Element));

// 1.对scoreArr进行排序
scoreArr.sort(function (a, b) {
    if (a - b > 0) return 1;
    else if (a - b < 0) return -1;
    else return 0;
})

// 2.m肯定为scoreArr的最小值和最大值之间
let min = scoreArr[0], max = scoreArr[scoreArr.length - 1];
