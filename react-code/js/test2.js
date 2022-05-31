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