// 数据库集合的相关配置
// 1. 定义数据集合的解构：定义出数据集合中数据有哪些属性，属性值得类型
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: String,
    passWord: String
}, { versionKey: false });
// 2. 定义数据集合得模型，将schema和数据库中得集合关联起来
// model('模型名称', 项目定义得schema，数据库中得集合名称);如果数据库中没有该集合吗，会创建
const userModel = model('userModel', userSchema, 'users');
//可以暴露出多个模型，各自利用解构赋值调自己需要的函数
module.exports = {
    userModel
}