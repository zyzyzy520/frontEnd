const fs = require('fs');

// fs.unlink('./test.txt', err => {
//     if (err) {
//         console.log('删除失败');
//     } else {
//         console.log('删除成功');
//     }
// });

try {
    fs.unlinkSync('./test.txt');
    console.log('删除成功');
} catch (error) {
    console.log('删除失败');
}