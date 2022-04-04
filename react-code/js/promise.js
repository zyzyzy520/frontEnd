let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success1')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('failed')
    }, 500)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success3')
    }, 500)
})

Promise.race([p1, p2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)  // 打开的是 'failed'
})

Promise.race([p1, p3]).then((result) => {
    console.log(result)  //打开的是'success3'
}, (error) => {
    console.log(error);
})
p2.finally(() => {
    console.log('finally')
})