const fs = require('fs');

// fs.rename('./te.txt', './abc.txt', err => {
//     if (err) {
//         console.log('重命名失败', err);
//     } else {
//         console.log('重命名成功');
//     }
// })

try {
    fs.renameSync('./tes.txt', './move/abc.txt');
    console.log('文件重命名成功');
} catch (error) {
    console.log('文件重命名失败');
}
