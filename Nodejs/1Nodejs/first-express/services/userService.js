// 接受从表现层传来的参数，进行处理，并通过module.exports暴露函数，使得表现层可以调用
// 每个js文件都默认通过model.exports暴露函数，这是一个对象，在这个对象上设置一个login属性，这个属性是一个函数
const { modelLogin, modelCompare, modelReg } = require('../Per/userModel/model')
module.exports.serviceLogin = async function (userInfo) {
    // 这个函数需要实现将用户信息传给持久层，让持久层查询数据库，返回数据
    // 然后再处理返回数据，modelLogin是异步函数，所以要等待
    const results = await modelLogin(userInfo);

    // 根据持久层返回的不同数据进行判断
    if (results.length == 1) {
        // 查找到了，返回对应对象
        return {
            message: '登录成功！',
            status: 1
        }
    } else {
        return {
            message: '登录失败，请检查信息是否输入有误',
            status: 0
        }
    }
}

// 比较，要暴露出去的compare属性，是一个函数
module.exports.serviceCompare = async function (userName) {
    // 注意别漏掉await，异步函数，否则会出现问题
    const results = await modelCompare(userName);
    // 如果返回的数组长度=0，则说明没有重复的
    if (results.length == 0) {
        return {
            message: '用户名没有重复，可以注册！',
            status: 1
        }
    } else {
        return {
            message: '用户名重复，不能注册',
            status: 0
        }
    }
}

// 注册,要暴露出去的serviceReg是一个函数
module.exports.serviceReg = async function (userInfo) {
    // 将userInfo传递给数据库插入
    const results = await modelReg(userInfo);
    // 返回的对象如果是空，会被隐式转换为false
    if (results) {
        return {
            message: '注册成功!',
            status: 1,
        }
    } else {
        return {
            message: '注册失败',
            status: 0
        }
    }
}