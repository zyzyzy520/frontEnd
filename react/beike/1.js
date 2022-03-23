let l = 1, r = 20;
let count = 0
for (let j = l; j <= r; j++) {
    let str = j.toString();
    let s = 0;
    //         console.log(str);
    for (let k = 0; k < str.length; k++) {
        s += parseInt(str[k]);
    }
    console.log(j, s);
    if (j % s == 1) count++;
}
console.log(count);


let count = 0;
for (let i = 0; i < n; i++) {
    //针对每一行开始匹配
    let str = matrix[i];
    for (let j = 0; j < str.length; j++) {
        if (str[j] == goal[0]) {
            //开始匹配验证
            let index = j, flag = true;
            for (let k = 0; k < goal.length; k++) {
                if (str[index] == goal[k]) {
                    index++;
                } else {
                    flag = false;
                    break;
                }
            }
            if (flag == true) count++;
        }
    }
}
for (let i = 0; i < n; i++) {
    //针对每一列开始匹配
    let str = matrix[i];
    for (let j = 0; j < str.length; j++) {
        if (str[j] == goal[0]) {
            //开始匹配验证
            let index = j, flag = true;
            for (let k = 0; k < goal.length; k++) {
                if (str[index] == goal[k]) {
                    index++;
                } else {
                    flag = false;
                    break;
                }
            }
            if (flag == true) count++;
        }
    }
}
console.log(count);