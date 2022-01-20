// 内置对象是通过model.exports暴露对象，调用用变量来接，才可以使用里面的方法
// 最好直接在这里引入，放在function里面的话，每调用一次递归就会用到一次。
const fs = require('fs');
function rmDir(path) {
    try {
        // 利用fs.stat(dir_name).isFile()判断是文件还是文件夹
        // 注意isFile是判断是否是文件
        let status = fs.statSync(path).isFile();
        if (status) {
            // 如果是文件直接删除
            fs.unlinkSync(path);
            console.log(`删除${path}成功`);
        } else {
            // 如果是文件夹，读取里面的内容
            let data = fs.readdirSync(path);
            // 遍历文件夹里的内容，清空
            data.forEach(item => {
                // 判断item是文件还是文件夹
                // 如果是文件，直接删除
                // 如果是文件夹，继续读取里面的内容
                // 同样的操作，使用递归，使用模板字符串组合成路径，因为item都只是文件的名称不是路径
                // 使用模板字符串比较方便引入变量
                rmDir(`${path}/${item}`);
            })
            // 删完了所有子文件和子文件夹，删除自身
            fs.rmdirSync(path);
            console.log(`删除${path}成功`);
        }
    } catch (error) {
        console.log(path, error);
        console.log('删除文件失败，请检查文件是否存在');
    }

}
rmDir('./data');

// const fs = require('fs');
// fs.unlinkSync("./data/b/d.js");