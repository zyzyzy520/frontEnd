# Yarn包管理器

## Yarn包管理器工具

由facebook、google一起开发的一款js包管理工具，yarn的提出弥补了npm的一些缺陷

## npm的特点

1. `下载非常慢`，一般开发者都需要配置淘宝镜像
2. 同一个项目安装包的`版本无法保证统一`。package.json文件中版本号不固定，`~4.5.0`表示目前安装的版本是4.5.x，可能后续会更新导致x产生变化。我们在不同的时间运行这个项目可能就会出现依赖包版本不一致导致项目报错。
3. 下载报错的问题。`下载过程中如果遇到包错误，会继续下载其他包`。导致不好定位是哪个包出现问题

## yarn的特点

1. 快速性。Yarn会将下载后的包缓存起来，以后若在别的项目用到该包，无需再去仓库下载。且yarn利用并行下载的方式，达到最快的效率。
2. 安全性。在执行代码之前，yarn会校验我们的每一个包是否完整
3. 可靠性。保证安装运行在不同的系统上面无差异。使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。只要引入更新了一个模块，yarn都在yarn.lock文件中记录
4. 像npm一样，yarn使用本地缓存。与npm不同的是，`yarn无需互联网连接就能安装本地缓存的依赖项`，它提供了离线模式。这个功能在2012年的npm项目中就被提出来过，但一直没有实现.
5. 并行安装：无论 npm 还是 Yarn 在执行包的安装时，都会执行一系列任务。npm是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。而 Yarn 是`同步执行所有任务`，提高了性能。
6. 安装**版本统一**：为了防止拉取到不同的版本，Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，Yarn 就会创建或更新）yarn.lock 这个文件

## yarn的下载

- 通过npm安装

``` bash
npm install yarn -g
yarn --version
```

- 查看yarn的配置

``` bash
yarn config list
```

- 配置淘宝镜像。yarn的镜像、node-sass的镜像

``` bash
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass.binary_site http://cdn.npm.taobao.org/dist/node-sas -g
```

## yarn的常用命令

### 1.项目初始化

``` bash
yarn init -y
```

- 会生成package.json

### 2.添加依赖

``` bash
yarn add
yarn add package_name
yarn add package_name@version
```

- 第一行用于使用别人的项目的时候，下载别人项目的所有依赖包
- 第二三行用于自己写项目时，下载需要的包

### 3.移除依赖

``` bash
yarn remove package_name
```

- 用于移除不需要得到包

### 4.常用命令

![image-20220106132015172](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220106132015172.png)