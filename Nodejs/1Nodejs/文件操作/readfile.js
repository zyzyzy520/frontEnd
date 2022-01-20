// 导入文件模块
// 用一个对象接收引入模块返回的module.exports
const fs = require('fs');

// 异步
fs.readFile('./test.txt', 'utf-8', function (error, data) {
    if (error) {
        console.log('读取失败');
    } else {
        console.log('读取到的内容是', data);
    }
})

// 异步
try {
    // 如果该语句出现系统错误，就会被捕捉到执行catch里面的语句；没有出现系统错误，就继续顺序执行try里的语句
    const data = fs.readFileSync('./tes.txt', 'utf-8');
    console.log(data);
} catch (error) {
    console.log('读取失败');
}
