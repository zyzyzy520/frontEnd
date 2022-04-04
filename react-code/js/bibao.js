console.log('aaa');  //1.输出

setTimeout(() => console.log('t1'), 0); //2.放入宏任务队列中
(async () => {
    console.log(111); //3.立即执行函数，输出111   
    await console.log(222); //4.先执行222， 然后阻塞后面的代码，放入微任务中
    console.log(333); //6.输出333
    setTimeout(() => console.log('t2'), 0); //7.将定时器压入宏任务中
})().then(() => {  //8.将微任务压入队列中
    console.log(444); //9.清空微任务，输出444
});

console.log('bbb');  //5.输出bbb

/*
marco = [time1,]
micro = [await]
aaa
111
222
bbb
//清空微任务，await;marco = [time1,timer2] micro = []
333
//marco = [time1,time2] micro = [then]
// 清空微任务 then
444
// 微任务没有，执行宏任务
t1
t2
*/