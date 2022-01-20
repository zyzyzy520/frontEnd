// 班级操作
var express = require('express');
var router = express.Router();

// 利用解构赋值，调用服务层暴露的函数，进行操作
// 服务层model.exports = {serviceAdd:function,}
// 左边的serviceAdd与右边的serviceAdd匹配，并将function给serviceAdd。根据对象的简化写法，可以只写一个serviceAdd
const { serviceAdd, serviceGetAll } = require('../services/classService');
/* 新增班级 */
router.post('/add', async function (req, res, next) {
    const result = await serviceAdd(req.body);
    res.send(result);
});

// 显示所有班级到所属班级中
router.get('/getAll', async function (req, res, next) {
    const result = await serviceGetAll();
    res.send(result);
})
module.exports = router;
