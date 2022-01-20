const fs = require('fs');

try {
    const status = fs.statSync('./a');
    if (status.isFile) {
        console.log('是文件');
    } else {
        console.log('是文件夹');
    }
} catch (err) {
    console.log('文件或者文件夹不存在');
}