# Webpack基本介绍

## 1.创建项目

创建一个空目录（不要单独的 webpack 命名）作为项目根目录，在命令行中执行以下命令来对项目进行初始化，生成 `package.json` 文件：(用脚手架会自动生成package.json文件)

``` bash
npm init -y
```

### 创建项目文件

在项目根目录中创建一个  `src/index.js` 文件进行测试。

## 2. 下载 webpack

在项目中执行以下命令局部安装 webpack 相关工具：

``` bash
npm i webpack webpack-cli -D
```

因为只是在开发项目的时候需要用到这个包，所以是 -D，上传到服务器的时候会删掉

## 3. 执行 webpack

可以通过以下命令，让 webpack 对项目代码进行转换：

``` bash
npx webpack
```

## 4.小结

通过以上一个小的例子，我们可以总结出 webpack 的几个功能：

1. 能够`将浏览无法识别的 JS 代码，转换为浏览器能够识别的代码语法`；(例如es11,es12浏览器可能无法识别)
2. 能够`将多个 JS 文件合并成一个JS 文件`；
3. 能够`将 JS 代码进行压缩`，`删除不必要的空格、换行`等。

## 5.注意事项

1. 在`webpack` ,  `import语句`没法使用`解构赋值`

   ``` javascript
   //import {message} from "./a.js"
   import message from "./a.js"
   
   //console.log(message)
   console.log(message.message);
   ```

   

2. 
