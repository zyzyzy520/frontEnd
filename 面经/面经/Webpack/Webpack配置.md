## 1. Webpack是什么？

在实际项目开发中，`有很多的代码是浏览器不能识别`的，所以这个时候，我们就`借助webpack`，帮我们`把各种浏览器不能识别的代码都转换为浏览器能够识别的代码`。

**`webpack`** 在进行打包时，会`找到入口 JS 文件`，以该文件为`起点`， 找到`该文件中所有依赖的模块`，`统一进行打包`处理。



## 2.Webpack的配置

配置是一个对象。

默认配置属性有三个，入口文件地址entry（字符串），出口文件地址output（对象，两个属性，一个是文件夹的绝对路径，一个是文件名称），打包模式production（字符串，两种值，开发者模式development，生产模式production）



## 3. loaders转换器

由于` webpack 自身只能打包 JS 代码`，当我们的项目里面，`使用了 css、less、sass、jsx 等浏览器不能识别的代码时`，webpack 默认是`不能对这些代码进行处理`。所以这个时候，我们就需要在 webpack 中引入 “loaders”。

首先要下载转换需要的其它包loaders

然后撰写配置规则

- 所有 loaders 的配置规则，都写在 `module.rules`中，module.rules`是一个数组`，里面的`数组元素对应一个loaders的配置`
- `每一个loader的配置规则是一个对象`。有`两个属性test和rules`，`test`是一个字符串，配置`当前打包规则要匹配的文件名`，`rules`是一个数组，描述`用到的loaders`。

`css-loader` 来处理 css，但是单靠 css-loader 是没有办法将样式加载到页面上。这个时候，我们需要再安装一个 `style-loader` 来完成这个功能style-loader 就是将处理好的 css 通过 style 标签的形式添加到页面上

## 4. plugins 插件

插件都配置在plugins属性里，属性值是一个数组，每一个数组元素对应一个plugin.**插件（Plugin）可以贯穿 Webpack 打包的生命周期，执行不同的任务**

比如clean-webpack-plugin。我们修改了出口文件的名称，原本的文件就得删除，这个插件的作用就是删除`出口文件所在目录下`，`未被引用的文件`

mini-css-extract-plugin，将CSS文件分离

## 5.devServer

该属性主要针对`开发过程`中的`服务器`的设置



## 6. loaders和plugins的区别

由于` webpack 自身只能打包 JS 代码`，也就意味着，当我们的项目里面，`使用了 css、less、sass、jsx 等浏览器不能识别的代码时`，webpack 默认是`不能对这些代码进行处理`。所以这个时候，我们就需要在 webpack 中引入一些其他的工具。而这些工具，我们就称之为 “loaders”。

plugins更像是辅助的工具，比如我们需要将打包好的代码，将css分离出来就可以用到插件。不是必须的。
