var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { jwtAuth } = require('./utils/jwt');

// 配置一级路径
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/students')
var classRouter = require('./routes/class');
var teacherRouter = require('./routes/teacher')
var imagesRouter = require('./routes/images');
// 连接mongoDB
require('./Per/connectDB');

var app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
  target: 'http://localhost:3001', // 目标服务器的地址
  changeOrigin: true,
  pathRewrite: {// /api/users/login
    '^/api': '/'
  }
}

app.use('/api', createProxyMiddleware(options));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 验证token，如果不通过，请求直接报错，在一级路由前进行

app.use(jwtAuth);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentRouter);
app.use('/class', classRouter);
app.use('/teacher', teacherRouter);
app.use('/images', imagesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
app.listen(3000, () => console.log('3000 端口启动成功'));