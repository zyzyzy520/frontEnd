var express = require("express");
var router = express.Router();

// 二级路径匹配
/* GET users listing. */
router.post("/get_req", function (req, res, next) {
  console.log(req.body);
  // 返回给浏览器的响应
  setTimeout(() => {
    res.send(JSON.stringify({ name: "Ash", age: 12 }));
  }, 3000);
});

module.exports = router;
