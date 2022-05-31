// new Promise(function (resolve) {  //7.执行promise
//     console.log('promise1');     //8. 打印promise1
//     resolve();
// }).then(function () {           //9. 将该任务加入微任务队列中[async1, then1]
//     console.log('promise2')
// })
// console.log('script end');    //10.打印script end

setTimeout(function () {  //marco = [timer1]
    console.log(1)
}, 0);
new Promise(function executor(resolve) {
    console.log(2);   //2.输出2
    for (var i = 0; i < 10000; i++) {
        i == 9999 && resolve();
    }
    console.log(3);   // 3.输出3
}).then(function () {  //4. micro = [then1]
    console.log(4);
});
console.log(5);  //5. 输出5


// 2 3 5 4 1




var a = 1
var oA = () => {
    console.log(this.a)
}
obj = {
    a: 10,
    b: function () {
        console.log(this.a);
    }
}
var c = obj.b
oA()  //1
obj.b() //10
c()  //1

