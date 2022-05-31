async function async1() {
    console.log('async1 start'); //2.输出async1 start
    await async2()              //3.执行async2()，并等待返回结果
    console.log('async end');  //10.输出async end
}
async function async2() {
    return new Promise((resolve, reject) => {
        console.log('async2 start'); //4.输出async2 start
        resolve()                    //5.micro = [then1]
    }).then(res => {
        console.log('async2 end');     //9.执行then1，输出async2 end
    })
}

async1() //1.执行async1

new Promise(resolve => {
    console.log('Promise');     //6.输出Promise
    resolve()
}).then(res => {                //7.micro = [then1, then2];
    console.log('Promise end'); //11.输出Promise end
})

console.log('script end');      //8. 输出script end

/*
async1 start
async2 start
Promise
script end
async2 end
async end
Promise end
*/

// async function fn() {
//     console.log('async1 start');
//     await new Promise((resolve, reject) => {
//         console.log(1);
//         resolve()
//     })
//     console.log('async1 end');
// }
// fn()

// new Promise((resolve, rerject) => {
//     console.log('Promise1')
//     resolve();
// }).then(res => {
//     console.log('Promise2')
// })


// async function async1() {
//     console.log('async1 start'); //2.输出async1 start
//     await async2()              //3.执行async2()，并等待返回结果
//     console.log('async end');  //10.输出async end
// }
// function async2() {
//     console.log('async2')
// }
// async1() //1.执行async1

// new Promise(resolve => {
//     console.log('Promise');     //6.输出Promise
//     resolve()
// }).then(res => {                //7.micro = [then1, then2];
//     console.log('Promise end'); //11.输出Promise end
// })

// console.log('script end');      //8. 输出script end