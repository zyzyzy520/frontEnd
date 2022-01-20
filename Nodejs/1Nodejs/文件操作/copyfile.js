const fs = require('fs');

// 异步
fs.copyFile('./te.txt', './test.txt', err => {
    if (err) {
        console.log('复制失败');
    } else {
        console.log('复制成功');
    }
})
// 同步
try {
    fs.copyFileSync('./1.txt', './test.txt');
    console.log('复制成功');
} catch (err) {
    console.log('复制出错', err);
}