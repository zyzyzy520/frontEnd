const expressJWT = require('express-jwt');
const { TOKEN_KEY } = require('./const')
const jwtAuth = expressJWT({
    secret: TOKEN_KEY,   //登录成功后设置token时配置的密钥字符串
    algorithms: ['HS256'], //设置jwt的 算法为HS256。
    credentialsRequired: false, //对于没有token的请求不进行解析
}).unless({
    // 用于配置不需要验证token的路径，ajax请求的url，这个文件会被app.js引用
    path: ['/users/login', '/users/register', '/users/compare']
});

module.exports = { jwtAuth };