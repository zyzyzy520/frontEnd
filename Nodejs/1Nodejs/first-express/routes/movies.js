var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getMovies', function (req, res, next) {
    console.log('成功进入获取电影列表接口后端');
    res.send({
        data,
        status
    });
});

module.exports = router;
