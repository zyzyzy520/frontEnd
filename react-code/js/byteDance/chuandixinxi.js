let n = 5, relation = [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]], k = 3
let hash = {};
for (let i = 0; i < relation.length; i++) {
    let player1 = relation[i][0], player2 = relation[i][1];
    if (hash[player1] == undefined) {
        hash[player1] = [player2];
    } else {
        hash[player1].push(player2);
    }
}
let times = 0;
backTraverse([0], 0);
console.log(times);
function backTraverse(path, lastPlayer) {
    if (path.length == k + 1) {
        if (path[path.length - 1] == n - 1) times++;
        return;
    }

    let choices = hash[lastPlayer];

    if (choices == undefined) return;
    for (let i = 0; i < choices.length; i++) {
        path.push(choices[i]);
        console.log(path, choices[i])
        backTraverse(path, choices[i]);
        path.pop();
    }

}