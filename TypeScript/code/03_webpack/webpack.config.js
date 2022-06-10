// 1. 引入node.js中的path模块
const path = require('path');
// 2. 引入自动创建html的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 3.引入自动删除目录的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 2. 所有配置都写到module.exports里
module.exports = {
    // 3.入口文件：里面是多个需要打包的文件
    entry: './src/index.ts',
    // 4.出口文件
    output: {
        // 出口文件所在的文件夹的绝对路径
        path: path.resolve(__dirname, 'dist'),
        // 出口文件的名称
        filename: 'bundle.js',
        // 关闭箭头函数
        environment: {
            arrowFunction: false
        }
    },
    mode: 'production',
    module: {
        // 5.webpack只能打包js代码，打包其它的需要loaders的帮助
        rules: [
            {
                // 要应用该loader的文件的正则表达式
                test: /\.ts$/i,
                // 用到的loader
                use: [{
                    // 配置loader
                    loader: 'babel-loader',
                    //设置babel
                    options: {
                        // 设置预定义的环境
                        presets: [
                            [
                                // 指定环境插件
                                "@babel/preset-env",
                                // 配置信息
                                {
                                    // 要兼容的目标浏览器
                                    "targets": {
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    // 指定corejs版本
                                    "corejs": "3",
                                    // 使用corejs的方式，"useage"表示按需加载
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                    // ts-loader要在后面
                    'ts-loader'],
                // 不用进行查找的文件，提高效率
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}