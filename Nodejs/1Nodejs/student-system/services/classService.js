// class服务层

// 引入持久层暴露的函数
const { modelAdd, modelGetAll } = require('../Per/classModel')
// 新增班级
module.exports.serviceAdd = async (addInfo) => {
    // 将参数传递给持久层
    const result = await modelAdd(addInfo);
    if (result._id) {
        return {
            message: '新增成功',
            status: 1
        }
    } else {
        return {
            message: '新增失败',
            status: 0
        }
    }
}

// 获取全部
module.exports.serviceGetAll = async () => {
    // 获取到的result是数组对象
    const result = await modelGetAll();
    if (result.length > 0) {
        return {
            message: '获取全部数据成功',
            status: 1,
            data: result
        }
    } else {
        return {
            message: '获取失败',
            status: 0
        }
    }
}