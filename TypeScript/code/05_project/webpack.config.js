//引入node.js中的path模块，用于配置webpack的路径
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//提取css的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    optimization: {
        minimize: false // 关闭代码压缩，可选
    },
    //指定入口文件
    entry: "./src/index.ts",

    devtool: "inline-source-map",

    devServer: {
        contentBase: './dist'
    },
    //指定打包的出口文件
    output: {
        //出口文件所在目录
        path: path.resolve(__dirname, "dist"),
        //出口文件的名称
        filename: "bundle.js",
        // 告诉webpack不使用箭头函数。因为虽然在后面使用了babel兼容了低版本浏览器，使得代码里的箭头函数被转换成了普通函数。但是webpack在打包的时候最外层有个箭头函数，这个没法被转化，所以需要使用以下代码
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    //配置babel
                    {
                        //指定加载器
                        loader: "babel-loader",
                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        "targets": {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        // 指定corejs的版本，例如低版本的ie浏览器是没有promise的，有了corejs，它会自己生成代码来完成promise的功能
                                        "corejs": "3",
                                        // 使用corejs的方式，"useage"表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    // 注意ts-loader要在后面，在后面的loader会先被执行。先使用ts-loader将ts代码转化为js，再通过babel将js代码进行低版本转化，使其可以兼容低版本浏览器
                    {
                        loader: "ts-loader",

                    }
                ],
                exclude: /node_modules/
            },
            {
                // 设置less文件
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    //引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        //兼容低版本浏览器
                                        "postcss-preset-env",
                                        {
                                            //兼容3个版本的浏览器
                                            browsers: 'last 3 version'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'TS测试',
            template: "./src/index.html" //自己设置的参考模板html
        }),
        new MiniCssExtractPlugin({
            // 实际上该文件所在的位置是dist/css/style.css
            filename: './css/style.css'
        })
    ],
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js']
    }

}