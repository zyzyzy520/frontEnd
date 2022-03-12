setTimeout(() => {   //定时器1
    console.log(3);

    // 在执行宏任务时加入宏任务，加入的宏任务会在下个tick执行
    setTimeout(() => { //定时器3
        console.log(8);
    });

    // 在执行宏任务时加入微任务，当前宏任务执行完成后，立即执行该微任务
    new Promise(resolve => {
        resolve();
        console.log(4);
    }).then(() => { //then2
        console.log(6);
    });

    // 在执行宏任务时加入宏任务，加入的宏任务会在下个tick执行
    setTimeout(() => {  //定时器4
        console.log(9);
    });

    console.log(5);
});

setTimeout(() => { //定时器二
    console.log(7);
});

new Promise(resolve => {
    resolve();
    console.log(1);
}).then(() => {
    console.log(2);
});


/*
执行宏任务script代码
    1.将定时器1放入宏任务队列中，Task = [定时器1]
    2.将定时器2放入宏任务队列中，Task = [定时器1，定时器2]
    3.执行Promise
        ---执行同步代码console.log(1),打印1
        ---将then1压入微任务队列中, microTask = [then1]
第一个宏任务script代码执行完毕，检查微任务队列，不为空，清空微任务队列microTask
    1.执行微任务then1
        ---执行同步代码console.log(2)，打印2
微任务队列已空，从宏任务队列中取出一个宏任务定时器1执行，取出后的宏任务队列为Task = [定时器2]
    1.执行宏任务定时器1
        ---执行同步代码，console.log(3)，打印3
        ---将定时器3压入宏任务队列中，Task = [定时器2，定时器3]
        ---执行Promise
            ------执行同步代码console.log(4)，打印4
            ------将微任务then2压入为人微任务队列中，microTask = [then2]
        ---将定时器4压入宏任务队列中，Task = [定时器2，定时器3，定时器4]
        ---执行同步代码，console.log(5)，打印5
第二个宏任务执行完毕，检查微任务队列，不为空，清空微任务队列microTask
    1.执行微任务then2
        ---执行同步代码，console.log(6)，打印6
微任务队列已空，从宏任务队列中，取出一个宏任务定时器2执行，取出后的红任务队列为Task=[定时器3，定时器4]，微任务队列microTask=[]
    1.执行宏任务定时器2
        ---执行同步代码.console.log(7)， 打印7
第三个宏任务队列执行完毕，检查微任务队列，为空。
从宏任务队列中取出一个宏任务定时器3执行，取出后的红任务队列为Task=[定时器4]，微任务队列microTask=[]
    1.执行宏任务定时器3
        ---执行同步代码console.log(8)，打印8
第四个宏任务队列执行完毕，检查微任务队列，为空。
从宏任务队列中取出一个宏任务定时器4执行，取出后的红任务队列为Task=[]，微任务队列microTask=[]
    1.执行宏任务定时器4
        ---执行同步代码console.log(9)，打印9
        1 2 3 4 5 6 7 8 9
 */