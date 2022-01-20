// 引入持久层函数
const { modelAdd, modelInfo } = require('../Per/teacherModel')

// 表现层要将从数据库得到的数据进行处理，然后返回给表现层，使得表现层可以直接响应给前端
// 暴露出去的是module.exports = {serviceAdd:function(){}  }
// 1.添加老师
module.exports.serviceAdd = async (teaInfo) => {
    const result = await modelAdd(teaInfo);
    // 插入成功返回的对象中，有_id这个属性
    if (result._id) {
        return {
            message: '新增教师成功!',
            status: 1
        }
    } else {
        return {
            message: '新增教师失败!',
            statues: 0
        }
    }
}

// 2.渲染老师复选框
module.exports.serviceInfo = async () => {
    const result = await modelInfo();
    // 返回result，用于渲染,result是对象数组
    if (result.length != 0) {
        return {
            message: '获取老师成功!',
            status: 1,
            data: result
        }
    } else {
        return {
            message: '获取老师失败!',
            status: 0
        }
    }
}