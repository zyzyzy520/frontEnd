# webpack的默认配置

webpack `默认`只能对 ` JS 文件`进行打包处理。

## webpack 的默认配置

webpack 默认配置了三个属性：

1. 打包的入口文件：`src/index.js`
2. 打包的出口文件：`dist/main.js`
3. 打包的模式：`production`

## 更改默认配置

webpack 的配置文件是项目根目录中的 `webpack.config.js` 文件，当我们执行打包命令 

``` bash
npx webpack
```

webpack会自动去查找  `webpack.config.js` 文件并使用其中的配置信息来进行打包。

  `webpack.config.js` 文件需要自己**`手动去创建`**；必须放在**`根目录`**下

### 打包的入口文件

``` javascript
module.exports = {
    // entry：配置打包入口文件地址
    entry: './src/home.js'
}
```

### 打包的出口文件

- 将出口文件所在的`文件`和`文件名本身分开修改`

- path模块用于对`输入的路径字符串`进行处理

- **`_dirname`**是全局对象，用于获取**`当前文件(项目)所在目录`**的`绝对路径`

- **`path.resolve`**方法用于拼接`当前文件目录的绝对路径`

  ``` javascript
  path.resolve('a', 'b')   转换为a/b
  ```

- `_dirname`：`项目根目录`所在的`绝对路径`； `'dist'`：`出口文件所在的文件夹`的名称
- `filename`：`出口文件的名称`

``` javascript
const path = require('path');
module.exports = {
    // output：配置打包出口文件
    output: {
        // 打包出口文件夹的路径（绝对路径）
        path: path.resolve(__dirname, 'dist'),
        // 打包出口文件的文件名
        filename: 'index.js'
    }
}
```

### 打包的模式

- webpack 的打包模式分为两种：`development`（开发模式）、`production`（生产模式）

- `development`：只是将代码编译成浏览器可以识别的语言
- `production`：删掉了注释，对代码进行了压缩

```js
module.exports = {
    mode: 'development'
}
```

