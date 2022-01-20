// 数据库集合的相关配置
// 1. 定义数据集合的解构：定义出数据集合中数据有哪些属性，属性值得类型
const { Schema, model } = require('mongoose');
const moment = require('moment');
// 配置studentModel
const studentSchema = new Schema({
    name: String,
    age: String,
    sex: String,
    time: {
        type: String,
        // 只要不进行设置，默认插入数据库的值
        default: moment().format('YYYY-MM-DD')
    },
    // 用于关联class集合
    classID: {
        type: Schema.Types.ObjectId,
        // ref 用于设置要关联的集合的模型名称，也就是model()的第一个参数
        ref: 'classModel'
    },
    imageName: String
}, { versionKey: false });
// model的名称,配置的Schema,数据库集合的名称
const studentModel = model('studentModel', studentSchema, 'student')

// 配置classModel
const classSchema = new Schema({
    className: String,
    teacherIDs: [{
        type: Schema.Types.ObjectId,
        ref: 'teacherModel'
    }]
}, { versionKey: false })

const classModel = model('classModel', classSchema, 'class');

// 配置teacherModel
const teacherSchema = new Schema({
    teaName: String
}, { versionKey: false })

const teacherModel = model('teacherModel', teacherSchema, 'teacher');

const userSchema = new Schema({
    userName: String,
    passWord: String
}, { versionKey: false });
// 2. 定义数据集合得模型，将schema和数据库中得集合关联起来
// model('模型名称', 项目定义得schema，数据库中得集合名称);如果数据库中没有该集合吗，会创建
const userModel = model('userModel', userSchema, 'users');

module.exports = {
    studentModel,
    classModel,
    teacherModel,
    userModel
}
