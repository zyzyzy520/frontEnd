const fs = require('fs');

// fs.mkdir('./a', err => {
//     if (err) {
//         console.log('创建文件夹失败', err);
//     } else {
//         console.log('创建文件夹成功');
//     }
// })

try {
    fs.mkdirSync('./a/b');
    console.log('创建文件夹成功');
} catch (error) {
    console.log('创建文件夹失败');
}