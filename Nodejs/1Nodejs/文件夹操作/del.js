const fs = require('fs');

// fs.rmdir('./a/b', err => {
//     if (err) {
//         console.log('删除文件夹失败');
//     } else {
//         console.log('删除文件夹成功');
//     }
// })

try {
    fs.rmdirSync('./a');
    console.log('删除文件夹成功', a);
} catch (err) {
    console.log('删除文件夹失败');
}
