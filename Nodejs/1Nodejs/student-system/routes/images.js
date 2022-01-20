var express = require('express');
var router = express.Router();

//引入handleFiles.js文件暴露出来的图片处理
const { uploadFiles } = require('../utils/handleFiles');

// 把预览头像移动到预览文件夹
router.post('/preview', function (req, res, next) {
    const preview = uploadFiles({
        path: './public/preview', //上传预览图片成功后`图片存储在系统中的路径`，注意这个路径是`相对于app.js`而言的
        key: 'file',  //与前端`formData对象的fieldname`匹配，即`formData.append()方法的第一个参数`
        size: 10000   //图片最大限制，单位是kb
    })
    preview(req, res, (err) => {
        if (err) {
            console.log('图片上传失败')
        } else {
            console.log('图片上传成功', req.files);
            res.send({
                status: 1,
                data: req.files[0].filename
            })
        }
    })
});

module.exports = router;
