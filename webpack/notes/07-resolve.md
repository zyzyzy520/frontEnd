# resolve

如果入口文件里有导入语句，`且未带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。`如果没有该属性可能导致无法导入文件

``` javascript
module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    }
}
```

