var express = require('express');
const { data } = require('jquery');
var router = express.Router();

const { moveFiles, deleteFiles } = require('../utils/handleFiles')
// 利用解构赋值引入服务层暴露的完成各个功能的函数，并不一定要全部接收暴露的函数，根据个人需要输入对应名字接收
const { serviceInfo, serviceAdd, serviceDel, serviceUp } = require('../services/studentService.js')
// 1.将数据库现存数据给前端，前端展示
router.get('/fetch', async function (req, res, next) {
    const param = req.query;  //不设置data，传递过来的就是空对象
    const results = await serviceInfo(param);
    // 给前端响应
    res.send(results)

});

// 2.得到前端传来的信息，加入数据库中
router.post('/add', async function (req, res, next) {
    // 获取前端数据,body不加括号，获取到的就是data对象
    const addInfo = req.body;
    const result = await serviceAdd(addInfo);
    if (result.status && req.body.imageName) {
        moveFiles({
            fromPath: './public/preview',
            toPath: './public/images',
            filename: req.body.imageName
        })
        deleteFiles('./public/preview')
    }
    res.send(result);
});

// 3.收到前端传过来的id，根据name在数据库中删除对应数据
router.post('/del', async function (req, res, next) {
    // 传过来的data是一个对象，所以可以用解构赋值接收，
    // req.body可以接收前端传过来的数据。
    const id = req.body;//req.body = {_id}
    const result = await serviceDel(id);
    res.send(result);

});

// 4.收到前端传递过来的信息，根据_id在数据库中找到对应数据项并更新信息
router.post('/update', async (req, res, next) => {
    const upInfo = req.body;
    const results = await serviceUp(upInfo);
    res.send(results);
})
module.exports = router;
