let para = []
while (line = readline()) {
    para.push(line);
}
let m = parseInt(para[0]);
let str = para[1].split(' ').map(element => parseInt(element));
str.sort(function (a, b) {
    if (a - b > 0) return 1;
    else if (a - b < 0) return -1;
    else return 0;
})
let total = 0;
for (let i = 1; i <= m; i++) {
    total += Math.abs(str[i - 1] - i);
}
console.log(total)