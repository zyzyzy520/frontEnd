## http模块

### 引入http模块

- ``` javascript
  const http = require('http');
  ```

### 创建服务器

- ``` javascript
  const app = http.createServer((req, res) => {
      //响应体
      res.write('hello');
      //响应结束
      res.end();
  })
  ```

- `request(req)`：请求对象，包含了请求相关的数据和方法等

- `response(res)`：响应对象，包含了响应相关的数据和方法等

### 为服务器设置端口并启动

- 通过`每台计算机独有的IP`，可以`访问计算机`；如果我们还想找到计算机中的某一个应用程序，需要知道`应用程序对应的端口`
- `端口（0~65535）`一般设置到`3000以上`，3000以下可能被使用。
- `listen`可以设置回调函数，比如显示提示信息
- `http协议默认端口80`，访问百度时，不用输入端口号，因为服务器用的默认端口

``` javascript
app.listen(3000,()=>{
    console.log('3000端口设置成功')
});
//将服务器设置到3000端口，并启动
```

### 访问服务器

- `电脑IP地址：端口地址`

### 一般应用

- `write`函数里，可以直接写html代码，函数可以解析。

``` javascript
const app = http.createServer((req, res) => {
	//读取想要响应给用户的文件，并把内容传给write
    fs.readFile('./zhihu.html', 'utf-8', (err, data) => {
        //write会解析内容里的html代码，接收的参数必须是字符串
        res.write(data);
        res.end();
    })
})
//end不能写在外面，因为里面的回调函数是异步的，将end放在外面的话，会先执行end同步函数。
```



