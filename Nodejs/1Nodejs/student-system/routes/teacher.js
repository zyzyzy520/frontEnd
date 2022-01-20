var express = require('express');
var router = express.Router();

// 引入服务层暴露的函数,用serviceAdd名称匹配暴露出来的对象里的serviceAdd名称，并且赋值给serviceAdd变量
const { serviceAdd, serviceInfo } = require('../services/teacherService')

// 1.新增老师
router.post('/add', async function (req, res, next) {
    const teaInfo = req.body;
    const result = await serviceAdd(teaInfo);
    res.send(result);
});

// 2.渲染老师复选框
router.get('/fetch', async function (req, res, next) {
    const result = await serviceInfo()
    res.send(result);
})
module.exports = router;
