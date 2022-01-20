// 引入第三方包
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入自己写的模块，完整路径名一般都是自己写的模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');

// 将连接数据库的函数，写在持久层，但是在项目一启动时就调用
require('./Per/connectDB')

// 生成对象
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));   // 日志记录
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  // 处理cookie
app.use(express.static(path.join(__dirname, 'public')));

// 匹配一级路径，可以添加，相应的要在引入模块中加入对应模块
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);

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
// 更改项目的启动命令
app.listen(3000, () => {
  console.log('3000端口启动成功');
})