var express = require("express");
var router = express.Router();

// 二级路径匹配
/* GET users listing. */
router.get("/", function (req, res, next) {
  // 返回给浏览器的响应
  res.send("respond with a resource");
});

module.exports = router;
