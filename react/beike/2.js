let n = parseInt(readline())
let goal = readline();
let matrix = []
while (line = readline()) {
    matrix.push(line.split(''));
}
let count = 0
//dfs
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (matrix[i][j] == goal[0]) {
            //           看从左到右是不是
            let flag = true;
            for (let k = 0; k < goal.length; k++) {
                if (j + k >= n || matrix[i][j + k] != goal[k]) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) count++;
            flag = true;
            //从上到下是不是
            for (let k = 0; k < goal.length; k++) {
                if (i + k >= n || matrix[i + k][j] != goal[k]) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) count++;
        }
    }
}
if (goal.length == 1) {
    console.log(count / 2);
} else {
    console.log(count);
}
