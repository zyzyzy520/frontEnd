const fs = require('fs');

try {
    fs.accessSync('./a');
    console.log('该文件(夹)存在');
} catch (err) {
    console.log('该文件(夹)不存在')
}