# devServer

该属性主要针对`开发过程`中的`服务器`的设置。

启动服务器后，无需每次修改代码后，进行`npx webpack`打包，然后再刷新页面。`保存后`，`服务器会自动打包`	，然后`刷新页面`。

## 下载 webpack-dev-server

``` bash
npm i webpack-dev-server -D
```

## 配置启动命令

在 **`package.json`** 文件中的 `script` 属性(启动命令)中添加以下代码：

``` js
"scripts": {
    "dev": "webpack-dev-server"
},
```

## 启动服务器

```` bash
npm run dev
````

启动过程中，可能会出现以下报错：

```` bash
 Cannot find module 'webpack-cli/bin/config-yargs'
````

![image-20201228163349032](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/jianglan/20201228163349.png)

该报错的原因是由于 `webpack-cli@^4.3.0 ` 的版本与 `webpack-dev-server@^3.11.0` 版本冲突，需要将 `webpack-cli` 的版本`降低`为 3.x 的版本：

```` bash
npm uninstall webpack-cli
npm i webpack-cli@3 -D
````

低版本下载完成后，重新执行启动命令 `npm run dev` 启动服务器。

注意：该`服务器打包后的代码`是**`保存在内存中`**的，浏览器访问代码时也是直接访问内存中打包好的代码。在确认没问题，想要上线时，在使用`npx webpack`进行打包即可拿到代码。

## 其他配置

其实没必要设置属性

- open：启动服务器时会自动打开浏览器
- hot：热加载，不刷新页面自动更新

``` javascript
devServer: {
    open: true,
    hot: true,
    // ....
}
```

