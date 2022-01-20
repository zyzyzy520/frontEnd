const fs = require('fs');
const path = require('path');
// 将对应文件移动到新的新的文件夹下，oldpath是当前文件的绝对路径，newPath是新文件夹相对于当前文件的绝对路径
// 我们需要做的是查看新的路径的各个文件夹是否存在，不存在就创建
function moveDir(oldPath, newPath) {
    let des = path.join(newPath, path.basename(oldPath));
    console.log(des);
    let arrDir = newPath.split('/');
    console.log(arrDir);
    // 遍历narrDir里的文件名称，判断文件是否存在，没有就创建
    let dirName = arrDir[0]; //'../'
    for (let i = 1; i < arrDir.length; i++) {
        // 路径一定是累加的，组合起来，创建文件夹和判断文件夹是否存在都必须是绝对路径。
        dirName = path.join(dirName, arrDir[i]);
        console.log(dirName);
        // 判断文件夹是否存在，一般情况下，只要找到一个不存在的文件夹，那么后面的文件夹都不会存在
        try {
            fs.accessSync(dirName);
            console.log('该文件(夹)存在');
        } catch (error) {
            console.log('该文件(夹)不存在');
            fs.mkdirSync(dirName);
        }
    }
    console.log(oldPath, des);
    // 创建完所有文件夹后，移动文件
    try {
        fs.renameSync(oldPath, des);
    } catch (error) {
        console.log('移动文件失败');
    }

}

moveDir('./01.js', '../02-Nodejs/a/b');