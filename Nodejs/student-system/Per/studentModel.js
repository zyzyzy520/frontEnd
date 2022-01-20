// 持久层，与数据库打交道
// 引入集合配置，这样才能操作数据库，这个studentModel就包含了所有增删改查的函数
const { studentModel } = require('./modelConfig')

// 1.得到数据库所有信息，用于渲染列表，因为会用到param里面的pageSize和pageIndex，所以用解构赋值
// param = {pageSize:XX, pageIndex:XX};
module.exports.modelInfo = async ({ pageSize, pageIndex }) => {
    // param是一个对象,例如{age:22}
    // 精确查询，返回的是对象数组
    const results = await studentModel
        .find()
        .populate({
            path: 'classID',
            populate: {
                path: 'teacherIDs'
            }
        })
        .limit(parseInt(pageSize))  //limit设置请求的数据条数，参数必须是整数类型
        .skip(pageSize * pageIndex)  //跳过数据的条数
        ;
    // console.log(results);
    // 模糊查询
    // 注意,对象的属性名如果是变量一定要加[]
    // const results = await studentModel.find({
    //     [param.searchType]: {
    //         $regex: param.searchInfo, $options: '$i'
    //     }
    // });

    // 获取总的数据条数
    const dataTotal = await studentModel.countDocuments();
    // 计算总页数(最后一页)。因为是从0开始所以无需，+1
    const pageCount = Math.ceil(dataTotal / pageSize) - 1;
    // results是对象数组
    return {
        results,
        pageCount,
        dataTotal
    };
}
// param = {searchType: XX, searchInfo: xx, pageSize:XX,pageIndex:xx}
module.exports.modelSearch = async ({ searchInfo, searchType, pageSize, pageIndex }) => {
    // 实现查询功能的分页效果
    // 1.获取查询得到的数据的总条数
    const dataTotal = (await studentModel.find({
        [searchType]: {
            $regex: searchInfo, $options: '$i'
        }
    })
        .populate({
            path: 'classID',
            populate: {
                path: 'teacherIDs'
            }
        })).length;

    // 2.获取查询数据,要实现分页效果
    const results = await studentModel.find({
        [searchType]: {
            $regex: searchInfo, $options: '$i'
        }
    })
        .populate({
            path: 'classID',
            populate: {
                path: 'teacherIDs'
            }
        })
        .limit(parseInt(pageSize))  //limit设置请求的数据条数，参数必须是整数类型
        .skip(pageSize * pageIndex)  //跳过数据的条数
        ;
    // 计算总页数(最后一页)。因为是从0开始所以无需，+1
    const pageCount = Math.ceil(dataTotal / pageSize) - 1;
    return {
        results,
        dataTotal,
        pageCount
    }
}
// 2.向数据库添加信息
module.exports.modelAdd = async (addInfo) => {
    const result = await studentModel.create(addInfo);
    return result;
}

// 3.删除信息
module.exports.modelDel = async (id) => {
    const result = await studentModel.deleteOne(id);//id={_id}
    return result;
}

// 4.更新信息
// upInfo = {_id:xx, name:XX, age:xx, sex:XX};
// 利用结构赋值 {_id:_id, name:name, age:age, sex:sex} = upinfo = {_ia:xx, name:xx, age:xx, sex:xx};
// 利用结构赋值 {_id, name, age, sex} = upinfo = {_ia:xx, name:xx, age:xx, sex:xx};
module.exports.modelUp = async (_id, name, age, sex) => {
    // const _id = upInfo._id;
    // const name = upInfo.name;
    // const age = upInfo.age;
    // const sex = upInfo.sex;
    // 注意解构赋值，一定要是key和value都一样才行，可以先写完整版，在删除
    const results = await studentModel.updateOne({ _id }, { name, age, sex });
    return results;
}