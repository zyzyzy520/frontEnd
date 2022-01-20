const fs = require('fs');

// 异步
fs.writeFile('./tes.txt', 'Hello', function (err) {
    if (err) {
        console.log('写入失败');
    } else {
        console.log('写入成功');
    }
})

// 同步
try {
    fs.writeFileSync('./te.txt', 'World');
    console.log('写入成功');
} catch (error) {
    console.log('写入失败');
}