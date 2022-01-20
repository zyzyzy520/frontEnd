// 对由服务层传过来的数据对数据库进行操作，返回操作结果。
// 将函数暴露给服务层，使其可以调用

const { userModel } = require('../modelConfig');

module.exports.modelLogin = async function (userInfo) {
    // 首先查询数据库中是否存在该条数据，传过来的userInfo对象就是用户输入的数组，所以可以直接查询
    // 考虑到find是异步函数，所以需要await，同时需要改成async函数
    const results = await userModel.find(userInfo);
    // 将查到的结果返回
    return results;
}

module.exports.modelCompare = async function (userName) {
    const results = await userModel.find(userName);
    console.log(results);
    return results;
}

module.exports.modelReg = async function (userInfo) {
    // 传递过来的userInfo实际是一个对象，所以可以直接使用
    const results = await userModel.create(userInfo);
    return results;
}