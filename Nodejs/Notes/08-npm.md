# npm

npm，`包管理器`，`代码仓库`。它是随着 Node.js 安装时一并安装好的，不需要单独安装。

通过 `npm -v` 来查看对应的版本号。


## 作用

1. 用户可以从 npm 服务器上去`下载`别人上的`第三方代码`；
2. 用户可以将`自己写的代码上传`到 npm 服务器上；

## 使用

### 设置淘宝镜像

```bash
//在国内使用npm最好设置淘宝镜像，因为npm在外网
npm config set registry https://registry.npm.taobao.org
```

### 下载

---下载后，可以直接`require('包名称')`。不需要`require('../node_modules/包名称')`

1. `局部`下载，指将指定包下载到当前项目所在根目录：

```bash
npm install 包名称
# 简写
npm i 包名称
```

- 通过npm下载的所有包，都会放到`node_modules`文件中	
- 下载成功的第三方包，在后端中，都可以通过`require('包名称')`引入使用

1. `全局`下载，指将指定包下载到了 C 盘中：

```bash
npm i -g 包名称
```

3. 根据 `package.json `下载

```bash
npm i 
```

- 在使用`别人的项目`时，要下载别人项目用到的`依赖包`，这些依赖包的名称和版本都在`package.json`文件中。

### 卸载

```bash
npm uninstall 包名称
npm uninstall -g 包名称
```

## package.json

在项目根目录执行 `npm init` 或者 `npm init -y` 命令对项目进行初始化，生成 package.json 文件。`不需要手动更新`，初始化后，项目有什么变动，`package.json`文件会自动更新。

![image-20211017192613465](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211017192613465.png) 

- `main`：`入口`文件
- `dependencies`：`依赖`文件

## npm管理项目流程

### 自己写项目

#### 1.项目初始化

- ​	`npm init`生成`package.json`文件。记录项目的基本信息，版本号，依赖包，入口文件等等。
- `package.json`文件也会随着项目的改动自动更新

#### 2.下载/卸载项目依赖的包

``` bash
npm install/i 包名称
npm uninstall 包名称
npm uninstall -g 包名称
```

- 一般将自己的项目上传时，不会上传依赖包

### 下载别人的项目

- `npm i`安装运行别人项目所需的依赖包

## 备注

### npm --save

- npm 5.0.0 之前，有 --save 参数才会把模块写入到 packages.json。现在已经是内置参数，不用额外写了。
