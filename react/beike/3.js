let t = parseInt(readline());
for (let i = 1; i <= t; i++) {
    let [l, r] = readline().split(' ').map(element => parseInt(element));
    let count = 0
    for (let j = l; j <= r; j++) {
        let str = j.toString();
        let s = 0;
        //         console.log(str);
        for (let k = 0; k < str.length; k++) {
            s += parseInt(str[k]);
        }
        if (j % s == 1) count++;
    }
    console.log(count);
}