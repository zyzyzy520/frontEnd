var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

let users = [
	{ userName: 'Ash', passWord: '123' },
	{ userName: 'Vi', passWord: '123' }
];
// 引入服务层暴露的函数
const { serviceLogin, serviceCompare, serviceReg } = require('../services/userService')
const { getMd5 } = require('../utils/crypto');
const { hashSync } = require('bcrypt');
const { TOKEN_KEY } = require('../utils/const');
/* GET users listing. */
// 登录验证
router.post('/login', async function (req, res, next) {
	// 接收前端发过来的数据对象，这里的userInfo是对象
	const userInfo = req.body;
	// userInfo.passWord = getMd5(userInfo.passWord);
	// 传递给服务层, serviceLogin是异步函数，所以需要await
	const results = await serviceLogin(userInfo);
	res.send(results);
});

// 是否登录
router.get('/isLogin', async (req, res, next) => {
	// 1.获取token，从请求头获取
	const headersToken = req.get('Authorization');
	const token = headersToken.split(' ')[1];
	// 2.解码token，拿到用户信息
	const { userName } = jwt.verify(token, TOKEN_KEY);
	res.send({
		message: '身份认证成功',
		status: 1,
		data: userName
	})
})
// 注册验证用户名
router.post('/compare', async function (req, res, next) {
	// find的参数需要的是对象,所以无需解构,直接将对象传递即可
	const userName = req.body;
	// 调用函数
	const results = await serviceCompare(userName);
	res.send(results);
});

// 注册
router.post('/register', async function (req, res, next) {
	console.log('成功进入注册接口后端');
	const userInfo = req.body;
	// 将密码加密
	// userInfo.passWord = getMd5(userInfo.passWord);
	userInfo.passWord = hashSync(userInfo.passWord, 10);
	const results = await serviceReg(userInfo);
	res.send(results);
})

module.exports = router;
