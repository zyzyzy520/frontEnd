const fs = require('fs');


const arr = fs.readdirSync('./a');
if (arr.length != 0) {
    console.log('文件夹不为空，请检查文件夹里的内容，在删除');
} else {
    fs.rmdirSync('./a');
}