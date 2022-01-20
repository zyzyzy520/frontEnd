// 引入classModel,对数据库进行操作
const { classModel } = require('./modelConfig');

// 新增班级
module.exports.modelAdd = async (addInfo) => {
    console.log(addInfo);
    const result = await classModel.create(addInfo);
    return result
}

// 获取全部班级
module.exports.modelGetAll = async () => {
    const result = await classModel.find();
    return result;
}