// 服务层
// 从表现层接收参数，向持久层传递参数，对返回结果进行逻辑处理，向表现层返回

// 引入持久层，利用解构赋值得到各个功能需要的持久层暴露的函数
const { modelInfo, modelAdd, modelDel, modelSearch, modelUp } = require('../Per/studentModel');
// 1.展示列表，不需要接收参数
// 注意，是module.exports
module.exports.serviceInfo = async (param) => {
    if (param.searchType) {
        // 进入if是条件查询
        const results = await modelSearch(param);
        return {
            message: 'Success!',
            status: 1,
            data: results
        }
    } else {
        // 进入else是获取全部学生列表
        try {
            const results = await modelInfo(param);
            return {
                message: 'Success！',
                status: 1,
                data: results
            }
        } catch (err) {
            console.log('error', err);
            return {
                message: '学生数据获取失败',
                status: 0
            }
        }
    }
    // try {
    //     const results = await modelInfo(param);
    //     return {
    //         message: 'Success！',
    //         status: 1,
    //         data: results
    //     }
    // } catch (err) {
    //     console.log('error', err);
    //     return {
    //         message: '学生数据获取失败',
    //         status: 0
    //     }
    // }
}

// 2.新增学生信息
module.exports.serviceAdd = async (addInfo) => {
    const result = await modelAdd(addInfo);
    // 返回的对象不为空
    if (result) {
        return {
            message: '新增学生成功！',
            status: 1
        }
    } else {
        return {
            message: '新增学生失败!',
            status: 0
        }
    }
}

// 3.删除学生信息
module.exports.serviceDel = async (id) => {
    const result = await modelDel(id); //id={_id}
    if (result.deletedCount == 1) {
        return {
            message: '删除成功！',
            status: 1
        }
    } else {
        return {
            message: '删除失败！',
            status: 0
        }
    }
}

// 4.更新学生信息
module.exports.serviceUp = async (upInfo) => {
    // 测试了下，如果_id不在数据库里系统会报错
    try {
        const results = await modelUp(upInfo);
        return {
            message: '更新成功！',
            status: 1
        }

    } catch (error) {
        console.log(error);
        return {
            message: '更新失败!',
            status: 0
        }

    }
}