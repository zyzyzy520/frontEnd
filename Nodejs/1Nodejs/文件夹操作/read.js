const fs = require('fs');


try {
    fs.mkdirSync('./a/e');
    // 读取到的内容会返回
    const data = fs.readdirSync('./a');
    console.log('读取成功', data);
} catch (error) {
    console.log('读取失败', error);
}
