# plugins插件

## plugins 插件基本配置

``` javascript
module.exports = {
    plugins:[...]
}
```

1. 下载插件
2. 引入插件
3. 进行配置使用
4. 标注注意事项

## `html-webpack-plugin`

将 webpack中`entry`配置的相关入口打包好的代码，插入到该插件提供的`template`或者`templateContent`配置项指定的html文件，并在此基础上生成一个html文件，具体插入方式是将样式`link`插入到`head`元素中，`script`插入到`head`或者`body`中。 就是将`通过entry打包好的js、css代码(出口文件)与template给的html代码结合`，生成一个`新的html文件`(这个`新的html文件也会和打包出口js在同一目录下`)

### 下载

``` bash
npm i html-webpack-plugin -D
```

### `引入`

在配置文件`webpack.config.js`中引入

``` javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

### 配置使用

- **`HtmlWebpackPlugin`**是一个``构造函数`，

``` javascript
module.exports = {
    // 插件配置
    plugins: [
		new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
```

### 备注

- 这个插件比较好的地方是，相比于`手动`在index.html中引入打包好的出口文件，`一旦修改了webpack.config.js里出口文件路径的配置`，就`需要手动在index.html里修改引入路径`。而这个插件会帮助index.html引入出口文件，只不过是生成了一个新的html文件 ，并且将该文件和出口文件放在了同一个目录下

## clean-webpack-plugin

### 下载

``` bash
npm i clean-webpack-plugin -D
```

### 引用

注意这里用到了`解构`

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
```

### 配置使用

``` javascript
module.exports = {
    // 插件配置
    plugins: [
		new CleanWebpackPlugin()
    ]
}
```

### 备注

- 在出口文件所在的目录中，包含了打包好的出口文件和index.html。而如果我们修改了比如出口文件的名称，那原来名称的文件就需要被删除，这个插件作用就在这里。
- 删除`出口文件所在目录下`，`未被引用的文件`。

## mini-css-extract-plugin

### 下载

``` bash
npm i mini-css-extract-plugin -D
```

### 引用

``` javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
```

### 配置使用

``` javascript
module.exports = {
    module: {
        rules: [
            // 打包 css
            {
                // test 用于配置当前打包规则要匹配的文件名
                test: /\.css$/i,
                // use 用于配置当前打包规则所使用的 loader
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                // exclude 用于配置 webpack 不需要解析的文件名 
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 实际上该文件所在的位置是dist/css/style.css
            filename: './css/style.css'
        })
    ]
}
```

### 备注

- **`目的`**是在打包时，将css、less、scss文件统一引入到入口文件里，方便webpack进行统一打包。但是打包完成后，不想要都在一个出口文件js里，想要把css分离出来。

- `修改打包css规则使用的loader`，将`style-loader`替换成插件的loader`MiniCssExtractPlugin.loader`。从而将统一打包生成文件里的css分离。同时也可以将该插件的loader替换掉打包less、scss规则使用的loader。这样转换后的less代码、scss代码都会在style.css里
- **`filename`**可以不设置，不设置的话，默认就在出口文件所在根目录下生成另外一个css文件；设置的话，就会按照路径进行生成，注意这里是`filename`，是`精确到文件名`的`相对于出口文件所在文件夹dist`的路径
