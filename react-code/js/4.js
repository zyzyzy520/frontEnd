function change(str) {
    if (str >= 'a' && str <= 'z') {
        return str.toUpperCase();
    } else if (str >= 'A' && str <= 'Z') {
        return str.toLowerCase();
    } else {
        return false;
    }
}
console.log(change('B'));


setTimeout(() => {          //1.将定时器1放入宏任务中，marco = [timer1]
    new Promise(res => {    //4.没有微任务，取出宏任务timer1执行，现在的宏任务队列[timer2]
        console.log(2);     //5. 打印2
        res();              //6. resolve()
    }).then(() => {         //7.将then加入微任务中 micro = [then1]
        console.log(1);    //9.清空微任务队列，执行then1，打印1
    });
    console.log(4);         //8. 打印4
}, 0);
setTimeout(() => {      //2.将定时器2放入宏任务中，marco = [timer1, timer2]
    console.log(3);     //10. 微任务队列已经清空，取出宏任务timer2执行，打印3
});
console.log(5);         //3. 执行同步代码，打印5

/*
    5 2 4 1 3
*/


