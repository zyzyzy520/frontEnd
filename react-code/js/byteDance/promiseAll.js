Promise.myall = function (promises) {
    //返回一个Promise实例
    return new Promise((resolve, reject) => {
        //记录发了多少个promise
        let promiseCount = 0;
        let result = [];
        for (let i = 0; i < promises.length; i++) {
            // promises[i]可能不是Promise类型，可能不存在then方法，中间如果出错,直接返回错误
            Promise.resolve(promises[i])
                .then(res => {
                    promiseCount++;
                    // 注意这是赋值应该用下标去赋值而不是用push，因为毕竟是异步的，哪个promise先完成还不一定
                    result[i] = res;
                    if (promiseCount === promises.length) {
                        return resolve(result);
                    }
                }, (err) => {
                    return reject(err);
                }
                )
        }
    })
}

Promise.myrace = function (promises) {
    //返回一个Promise对象
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then(res => {
                    return resolve(res);
                }, (err) => {
                    return reject(err);
                }
                )
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

Promise.all([p1, p2]).then((result) => {
    console.log(result)               //['成功了', 'success']
}).catch((error) => {
    console.log(error)
})

Promise.myall = (promises) => {
    // 返回一个promise实例
    return new Promise((resolve, reject) => {
        // 记录
        let promiseCount = 0;
        let result = []
        //遍历promise，每个发出
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then((res) => {
                    //得到结果马上压入数组中
                    result[i] = res, promiseCount++;
                    if (promiseCount == promises.length) {
                        return resolve(result);
                    }
                }, (err) => {
                    //发现错误，马上发出
                    return reject(err)
                })
        }
    })
}

Promise.myrace = function (promises) {
    //返回一个promise对象
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then((res) => {
                    //只要有一个收到结果，马上发出
                    return resolve(res);
                }, (err) => {
                    return reject(err);
                })
        }
    })
}


Promise.prototype.myall = function (promises, limit) {
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