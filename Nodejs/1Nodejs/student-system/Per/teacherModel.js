// 引入modelConfig里配置好的teacherModel

// 最好用解构赋值，因为只需要暴露对象中的一个函数
const { teacherModel } = require('./modelConfig')

// 将函数暴露给服务层
// 1.添加老师
module.exports.modelAdd = async (teaInfo) => {
    const result = teacherModel.create(teaInfo);
    return result;
}

// 2.渲染老师复选框
module.exports.modelInfo = async () => {
    const result = teacherModel.find();
    return result;
}