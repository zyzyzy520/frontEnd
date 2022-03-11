# React脚手架搭建

脚手架: 用来帮助程序员快速创建一个基于库的模板项目，react工程，也是基于webpack。

1.  包含了所有需要的配置
2. 指定好了所有的依赖(react.development等等无需单独下载)
3. 可以直接安装/编译/运行一个简单效果

react提供了一个用于创建react项目的脚手架库: **`create-react-app `**

1. 项目的整体技术架构为: `react + webpack + es6 + eslint `
2. 使用**`脚手架开发的项目的特点`**: 模块化, 组件化, 工程化

## 1**create-react-app**脚手架

> 脚手架只是用于创建项目搭个大概框架，项目创建完毕后就无用了

### 1. 1`全局安装`脚手架工具

``` bash
//全局安装脚手架工具 
npm install -g create-react-app 
//使用脚手架工具创建项目 
create-react-app reactdemo
```

使用全局安装的方式来创建脚手架工具，这种方式一旦使用，那后续就可以使用本地的脚手架来创建项目。但是需要注意，`脚手架工具一旦更新后，全局安装的工具需要自己更新一下`

### 1.2 `npx临时安装`脚手架

``` bash
npx create-react-app reactdemo
```

使用npx来创建脚手架工具，会`临时安装` create-react-app工具 ,当`项目创建完毕后`，会`立即删除` create-react-app 工具,这种方式创建项目可能会慢一些，但是你`能保证你使用的是最新的脚手架工具来创建项目`

### 1.3 yarn包管理安装脚手架

``` bash
//全局安装脚手架工具 
yarn add create-react-app 
//使用脚手架工具创建项目 
create-react-app reactdemo
```

## 2.创建完项目后的一些信息

![image-20220115103905568](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220115103905568.png)

`npm/yarn start`：启动项目命令，这个命令也是在项目package.json文件中配置的信息(**`要进入项目再启动`**)

`npm/yarn build`：项目做完后，打包

`npm/yarn test`：测试当前项目

npm/yarn eject：在react中 react-scripts 是 create-react-app 的一个核心包，一些脚本和工具的默认配置都集成在里面，比如webpack配置文件，babel的配置文件等等信息。eject 命令执行后会将封装在 create-react-app 中的配置全部反编译到当前项目，这样用户就能完全取得 webpack 文件的控制权。

> 不管是哪种方式安装的脚手架，使用两种命令启动都能启动

## 3.创建完项目后的目录

### 3.1目录介绍

![image-20220115111555742](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220115111555742.png)

- node_modules:`项目依赖包`的文件夹

- public：存放`静态资源文件`的目录
  - index.html：当前项目默认模板文件

- src：`源代码`的存放位置

  - index.js：项目的`入口文件`

  - app.js：项目的`根组件`，相当于vue中的app.vue 文件

- gitignore：git提交的时候，配置需要忽略的文件

### 3.2需要删除的文件

1. 删除默认样式

##### public文件夹内

![image-20220115112027443](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220115112027443.png)

##### src文件夹内

![image-20220115111953030](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220115111953030.png)

1. `删除`留下文件里对删除文件的`引用`

2. `删除index.js`里的`严格模式`

   - 记得删完后严格模式后，加逗号。`<APP />，`

   ![image-20220115112301726](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220115112301726.png)

3. 删除`app.js`里的`样式`

![image-20220115112521800](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220115112521800.png)

![image-20220115112546234](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220115112546234.png)

### 3.3需要添加的文件夹

> 方便后面编程需要

- public放样式 
- src放操作代码

![image-20220115112741873](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220115112741873.png)



## 4. 脚手架的服务器

脚手架底层会通过devServer开启本地服务器

![image-20220310165054560](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220310165054560.png)

而`向本地服务器请求文件，都是从public文件夹下寻找`

![image-20220310165135772](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220310165135772.png)

`请求的资源找不到时，会将public/index.html作为响应`。
