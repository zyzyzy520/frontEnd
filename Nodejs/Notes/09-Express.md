#  Express

- express是一个基于node.js的服务端框架。

## Express 应用生成器工具

- 名称：`express-generator`。它的作用是，可以帮助开发者`快速创建一个express项目`

### 安装

以下命令只需要执行一次：全局安装，可能会多次用到

在不同项目中可能会多次用到

```bash
npm i -g express-generator
```

## Express项目初始化

### 1.创建项目

通过`express-generator`来快速创建Express项目。在终端中定位到需要创建项目的目录：

```bash
express students-system
//会自动在目录下创建students-system文件夹
```

### 2.进入项目根目录

```bash
cd students-system
```

### 3.下载express项目依赖包

```bash
npm i 
```

### 4.启动项目

```bash
npm start
```

### 5.访问项目

在浏览器中通过 `localhost:3000` 访问项目的默认欢迎界面。自己通过端口访问自己电脑上的应用程序，可以用`localhost`替换IP地址

### 更改启动命令

将 app.js 文件中的最后一行代码替换为以下代码：

```js
app.listen(3000, () => console.log('3000 端口启动成功'));
```

更改后的启动命令为：`node app.js`。不用插件，保存文件后，输入此命令。

如果不更改，使用原来的，需要再按下Y

### nodemon 插件

nodemon 插件可以帮助我们自动重启服务器。只要`保存文件就会自动重启`。但在`一开始要启动项目`。使用此插件的`基础是先要更改启动命令`。

注意`前端页面改变`，仍然要`刷新页面`

**安装**

```bash
npm i -g nodemon
```

**启动项目**

只需在刚启动项目的时候执行这行代码，然后刷新页面即可

```bash
nodemon app.js
```

## Express初始化项目各个文件夹的意义

![image-20211017211701343](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211017211701343.png)

### 1.`bin`

- 创建服务器的文件，不要使用

### 2. `node_modules`

- 存放通过`npm`下载的第三方包(包括后面补充的)

### 3. `public`

- 存放前端代码
- public文件名不能改变，里面的文件的名称可以更改
- ![image-20211017212128429](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211017212128429.png)

### 4.`routes`

- 接收前端发送的请求，并处理
- 里面的文件名称是`一级路径名称`，用于app.js路由

### 5.views

- 后端写页面

  #### jade引擎

  - 传统是用户访问页面，发送请求时，再渲染数据

  - jade是后端提前渲染好数据，发送请求时，直接将页面发送给前端

    ![image-20211018095711027](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211018095711027.png)

### 6.package.json

![image-20211018095750619](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211018095750619.png)

- scripts：`配置项目启动的命令`，服务器写在 bin/www文件里
- ~：只要`兼容`后面数字的版本就可下载

### 7. app.js

- 服务器的`详细配置`，服务器的`入口文件`

## 补充

### 1. 实际开发里public内容

![image-20211017212304971](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211017212304971.png)

- localhost:3000会定位到这个`public`文件夹，完整的路径名应该是`localhost:3000/XX.html`
- 端口号后没有写文件名localhost:3000，默认是`localhost:3000/index.html`
- 如果没有`index.html`文件，或者没有完整路径名。就会express设置的默认内容

### 2.package.json文件里的依赖包与实际的依赖包有出入

![image-20211017212651075](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211017212651075.png)

- `express`自身还会有很多其它依赖包

### 3.前端，服务器 ，数据库的关系

![image-20211018100807394](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211018100807394.png)





