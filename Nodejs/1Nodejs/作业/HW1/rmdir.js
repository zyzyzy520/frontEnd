function rmDir(path) {
    const fs = require('fs');
    try {
        // 只要读取的文件夹里有文件，直接删除，如果有文件夹就压入堆栈中，因为得先把文件夹里的子文件和子文件夹删除，才能删外面的。然后弹栈删除，
        // FS提供的删除函数，只能删空文件夹
        const stack = new Array();
        // 遍历到的文件夹的指针
        let left = 0;
        do {
            let data = fs.readdirSync(path);
            // 遍历读取到的文件名，如果是文件，直接删除
            for (let i = 0; i < data.length; i++) {
                // 只要文件名里包含"."就说明是文件.直接删除
                if (data[i].indexOf('.') != -1) {
                    fs.unlinkSync('./' + data[i]);
                }
            }
            // 只要堆栈里的长度不为0，就说明还有文件没删除
        } while (stack.length != 0)

        // stack.push()
        console.log(data);
    } catch (error) {
        // 读取文件就出现问题，说明文件不存在
        console.log('删除文件失败，文件不存在');
    }
}

rmDir('./data');