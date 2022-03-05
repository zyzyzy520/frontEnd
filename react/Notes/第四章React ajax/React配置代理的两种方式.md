解决跨域：请求发送到同源的服务器上，同源服务器再向目标服务器进行转发

1. form表单跨域提交请求，不会受到限制。

``` html
  <form action="http://localhost:5000/students">
    <input type="submit" value="Click on">
  </form>
```

1. 服务器接收了请求，也作出了响应，但是被AJAX引擎拦截

``` javascript
export default class App extends React.Component {
  render() {
    return (
      <button onClick={this.sendRequest}> 点击我，发送请求</button>
    )
  }
  sendRequest = () => {
    axios({
      url: "http://localhost:5000/students",
      method: 'GET'
    }).then(
      response => { console.log('成功了', response) },
      error => { console.log('失败了', error) }
    )
  }
}
```

![image-20220304150351903](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220304150351903.png)

## 1.方法一

## 

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：`不能配置多个代理`。
3. 工作方式：上述方式配置代理，当`请求了3000不存在的资源时(在public文件夹下没有)，那么该请求会转发给5000` （优先匹配前端资源）
4. 在react中，public文件夹是localhost:3000的根目录，注意发送请求

![image-20220304152257295](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220304152257295.png)



## 2.方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const { createProxyMiddleware } = require('http-proxy-middleware')
   
   //1.配置多个代理
   module.exports = function (app) {
       app.use(
           createProxyMiddleware('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
               target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
               changeOrigin: true, //控制服务器接收到的请求头中host字段的值
               /*
                   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
                   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
                   changeOrigin默认值为false，但我们一般将changeOrigin值设为true
               */
               pathRewrite: { '^/api1': '' } //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
           }),
           createProxyMiddleware('/api2', {
               target: 'http://localhost:5001',
               changeOrigin: true,
               pathRewrite: { '^/api2': '' }
           })
       )
   }
   
   
   // 2.配置一个代理 
   module.exports = function (app) {
       app.use(
           //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)，要用新方法
          	createProxyMiddleware('/api1', {
               target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
               changeOrigin: true, //控制服务器接收到的请求头中host字段的值
               /*
                   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
                   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
                   changeOrigin默认值为false，但我们一般将changeOrigin值设为true，向服务器撒谎我就是和你同源的
               */
               pathRewrite: { '^/api1': '' } //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)，否则交给服务器的是/api1/students，但实际上只需要要/students
           })
       )
   }
   
   
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。
