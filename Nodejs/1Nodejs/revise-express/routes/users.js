var express = require('express');
var router = express.Router();

let dataBase = [
  { userName: 'Ash', userPw: '123' },
  { userName: 'Vi', userPw: '123' }
]

// post/get是用户提交请求的方法
// req是用户发送请求，包含发送请求的数据
// res用于响应，返回给用户数据
router.post('/login', function (req, res, next) {
  // 查找数据库中有没有输入用户名和对应正确的密码。
  // 获取用户发送请求时的data对象 req.body
  const { userName, userPw } = req.body;
  let isExist = dataBase.some((currentValue) => {
    return currentValue['userName'] == userName && currentValue['userPw'] == userPw;
  })
  if (isExist) {
    // 如果找到了对应用户名和密码，返回登录成功信息
    res.send({
      message: '登录成功',
      status: 1
    })
  } else {
    res.send({
      message: '输入信息有误，登陆失败',
      status: 0
    })
  }
});

router.post('/compare', function (req, res, next) {
  // 查找数据库中有没有重复的用户名
  // 获取用户发送请求时的data对象 req.body
  const { userName } = req.body;
  console.log(req.body);
  let isExist = dataBase.some((currentValue) => {
    return currentValue['userName'] == userName;
  })
  if (isExist) {
    // 如果找到了对应用户名和密码，返回登录成功信息
    res.send({
      message: '用户名重复，请更换',
      status: 0
    })
  } else {
    res.send({
      message: '用户名输入正确',
      status: 1
    })
  }
});

router.post('/register', function (req, res, next) {
  // 查找数据库中有没有输入用户名和对应正确的密码。
  // 获取用户发送请求时的data对象 req.body
  const { userName, userPw } = req.body;
  dataBase.push({ userName, userPw })
  // 响应值既可以是对象也可以是数组
  res.send(dataBase);
});


module.exports = router;
