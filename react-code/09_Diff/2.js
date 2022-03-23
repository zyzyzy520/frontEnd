//得到牛牛数量
let n = parseInt(readline());
let XL = [];
while (line = readline()) {
    //对字符串进行处理，得到整数
    let a = line.split(' ').map(element => parseInt(element));
    // 得到区间
    XL.push([a[0] - a[1], a[0] + a[1]]);
}

//对XL进行排序
XL.sort(function (a, b) {
    if (a[0] - b[0] > 0) return 1;
    else if (a[0] - b[0] < 0) return -1;
    else return 0;
})
let count = 0, max = 0
backTraverse(0, -Math.pow(10, 9))
console.log(max);
function backTraverse(index, boundary) {
    for (let i = index; i < n; i++) {
        if (XL[i][0] > boundary) {
            count++;
            max = Math.max(max, count);
            backTraverse(i + 1, XL[i][1]);
            count--;
        }
    }
}





let t = readline();
while (line = readline()) {
    let n = parseInt(line.split(' ')[0])
    let m = parseInt(line.split(' ')[1])
    getPaths(n, m);
}
function getPaths(n, m) {
    let direction = [[1, 0], [0, 1], [0, -1]];
    let sum = 0;
    let visited = new Array(n).fill(0).map(() => {
        return new Array(m).fill(0);
    })
    function backTraverse(x, y) {
        //如果超出边界，或者格子已经被访问则直接返回
        //console.log(x,y)
        if (x > n || x < 1 || y > m || y < 1 || visited[x - 1][y - 1] == 1) return;
        if (x == n && y == m) {
            sum++;
            return;
        }
        visited[x - 1][y - 1] = 1
        for (let i = 0; i < 3; i++) {
            backTraverse(x + direction[i][0], y + direction[i][1])
        }
        visited[x - 1][y - 1] = 0;
    }
    backTraverse(1, 1)
    console.log(sum % (Math.pow(10, 9) + 7))
}