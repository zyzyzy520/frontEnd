// 连接mongoDB
// 1.引入mongoose
const mongoose = require('mongoose');
// 2.需要连接的数据库的地址，如果要连接别人电脑上的数据库的地址，将localhost换成别的IP地址即可
// 如果没有数据库，会自动创建
const dbURL = 'mongodb://localhost:27017/web';
// 3.建立连接,附加参数在第一次运行后会有提示，复制粘贴即可
mongoose.connect(dbURL);
// 4.设立项目与数据库连接成功的触发事件
mongoose.connection.on('connected', function () {
    console.log(dbURL + '数据库连接成功')
});