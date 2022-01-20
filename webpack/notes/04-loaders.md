# loaders转换器

由于` webpack 自身只能打包 JS 代码`，也就意味着，当我们的项目里面，`使用了 css、less、sass、jsx 等浏览器不能识别的代码时`，webpack 默认是`不能对这些代码进行处理`。所以这个时候，我们就需要在 webpack 中引入一些其他的工具。而这些工具，我们就称之为 “loaders”。

## 步骤

1. 下载转换需要的其它包loaders
2. 撰写配置规则

## loaders 的基本配置 

所有 loaders 的配置，都是在 `module.rules` 的数组中进行配置：

``` javascript
module: {
    rules: [
		{
            test: 需要转换的文件的正则表达式,
            use: [用到的转换器]
        },
        {配置规则}
    ]
}
```

注意是`rules`

## `css` 打包配置

### 下载 loaders

``` bash
npm i style-loader css-loader -D
```

### 配置 loaders

- `i`表示大小写均可
- `style-loader`要放在`css-loader`前面
- **`/\.css$/i`**因为'.'有特殊用途，所以`需要转义`。匹配`以.css或者.CSS结尾的文件`

``` javascript
module: {
    rules: [
        // 打包 css
        {
            // test 用于配置当前打包规则要匹配的文件名
            test: /\.css$/i,
            // use 用于配置当前打包规则所使用的 loader
            use: ['style-loader', 'css-loader']
        }
    ]
}
```

## `less` 打包配置

### 下载 loaders

``` bash
npm i less less-loader -D
```

### 配置  loaders

- **`exlude`**：`不查找哪个文件夹`，提高匹配效率。`webpack`根据`test提供的正则表达式`在`全局进行匹配`，而`exclude`就是表示`跳过哪些部分`。属性值也是正则表达式

``` javascript
{
    test: /\.less$/i,
    use: ['style-loader', 'css-loader', 'less-loader'],
    exclude: /node_modules/,
}
```

## `scss`打包配置

### 下载 loaders

``` bash
npm i node-sass sass-loader -D

npm i node-sass -D --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ 
```

### 配置  loaders

``` javascript
{
    test: /\.scss/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    exclude: /node_modules/,
}
```

