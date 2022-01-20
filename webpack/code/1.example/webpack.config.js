const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/home.js',
    output: {
        // 打包出口文件目录的路径
        path: path.resolve(__dirname, 'per'),
        filename: 'index_new.js'
    },
    mode: 'development',
    module: {
        rules: [
            // 打包CSS
            {
                // test写要转换的文件的正则表达式，比如css文件不止一个
                test: /\.css$/i,
                // use表示用哪些转换器
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // 打包less
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/
            },
            // 打包scss
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/style.css'
        })
    ],
    devServer: {
        open: true,
        hot: true,
        // ....
    }
}