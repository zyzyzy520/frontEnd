Promise.myall = function (promises, limit) {
    return new Promise((resolve, reject) => {
        let result = [];//存储结果
        let promiseCount = 0;
        let executingCount = 0;
        for (let i = 0; i < promises.length; i++) {
            if (executingCount < limit) {
                executingCount++;
                Promise.resolve(promises[i])
                    .then((res) => {
                        result[i] = res, promiseCount++, executingCount--;
                        //所有promise都发送完毕
                        if (promiseCount == promises.length) {
                            return resolve(result)
                        }
                    }, (err) => {
                        return reject(err);
                    })

            }
        }
    })
}
let p1 = new Promise((resolve, reject) => {
    resolve('成功了')
})

let p2 = new Promise((resolve, reject) => {
    resolve('success')
})

let p3 = Promise.reject('失败')

Promise.myall([p1, p2], 3).then((result) => {
    console.log(result)               //['成功了', 'success']
}).catch((error) => {
    console.log(error)
})

