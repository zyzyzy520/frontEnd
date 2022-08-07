var express = require("express");
var router = express.Router();

// 二级路径匹配
/* GET users listing. */
router.put("/get_req", function (req, res, next) {
  const person = [
    {
      name: "Ash",
      age: 23,
    },
    { name: "Ryann", age: 23 },
  ];
  res.send(JSON.stringify(person));
});

module.exports = router;
