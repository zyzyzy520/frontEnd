const http = require('http');
const fs = require('fs');
const app = http.createServer((req, res) => {
    fs.readFile('./zhihu.html', 'utf-8', (err, data) => {
        // console.log(typeof data);
        res.write(data);
        res.end();
    })

})

app.listen(3000, function () {
    console.log('3000端口设置成功');
});