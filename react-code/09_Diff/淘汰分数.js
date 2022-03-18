let para = []
while (line = readline()) {
    para.push(line);
}
let [totalPeople, m, n] = para[0].split(' ').map(element => parseInt(element));
let scores = para[1].split(' ').map(element => parseInt(element));
scores.sort(function (a, b) {
    if (a - b > 0) return 1;
    else if (a - b < 0) return -1;
    else return 0;
})
// 要满足小于level的数至少有m个，因为淘汰的人数是小于等于level，所以level应该至少为scores[m - 1]
// 要满足大于level的数至少有m个，因为晋级的人数是大于level，所以level最多为scores[totalPeople - m - 1]
for (let i = scores[m - 1]; i <= scores[totalPeople - m - 1]; i++) {
    // 统计淘汰人数
    let disCard = 0
    for (let j = 0; j < totalPeople; j++) {
        if (scores[j] <= i) disCard++;
        else break;
    }
    // 统计晋级人数
    let promotion = 0;
    for (let j = totalPeople - 1; j >= 0; j--) {
        if (scores[j] > i) promotion++;
        else break;
    }
    if (disCard >= m && disCard <= n && promotion >= m && promotion <= n) {
        console.log(i);
        break;
    }
}