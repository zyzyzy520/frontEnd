const fs = require('fs');

// 模板字符串
let a = 1;
let str = `I got a
${a};
`;
// 异步
fs.appendFile('./appendfile.txt', str, err => {
    if (err) {
        console.log('追加失败', err);
    } else {
        console.log('追加成功');
    }
})