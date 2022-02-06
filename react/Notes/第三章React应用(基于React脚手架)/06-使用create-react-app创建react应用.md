#  使用create-react-app创建react应用

## 1. react脚手架

1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目

   - 包含了所有需要的配置（语法检查、jsx编译、devServer…）

   -  下载好了所有相关的依赖

   -  可以直接运行一个简单效果

1.  react提供了一个用于创建react项目的`脚手架库`: `create-react-app`
2.  项目的整体技术架构为:  react + webpack + es6 + eslint
3. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

## 2.创建项目并启动

第**`一`**步，全局安装：`npm i -g create-react-app`

第**`二`**步，`切换到想创建项目的目录`，使用命令：`create-react-app hello-react`

第**`三`**步，进入项目文件夹：`cd hello-react`

第**`四`**步，启动项目：npm/yarn start

## 3.react脚手架项目结构

除public和src文件夹以外的其它文件不要动

### 3.1 	public ---- 静态资源文件夹

1. ​		favicon.icon ------ 网站页签图标

2. ​		**`index.html--------主页面`**

   ![image-20220205095318979](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220205095318979.png)

3. ​		logo192.png ------- logo图

4. ​		logo512.png ------- logo图

5. ​		manifest.json ----- 应用加壳的配置文件

6. ​		robots.txt -------- 爬虫协议文件

### 3.2 src ---- 源码文件夹

![image-20220203132142877](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220203132142877.png)

1. App.css -------- App组件的样式

2. **`App.js---------App组件`**

   - 以后写的所有功能组件都是放在App根组件里，都是App的后代

   ![image-20220203133255285](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220203133255285.png)

   ![image-20220203133313061](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220203133313061.png)

3. App.test.js ---- 用于给App做测试

4. index.css ------ 样式

5. **`index.js------入口文件`**	

   - 以后写的所有功能组件都是放在App根组件里，都是App的后代

   ![image-20220203132257104](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220203132257104.png)

   ![image-20220203132311429](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220203132311429.png)

6. logo.svg ------- logo图

7. reportWebVitals.js

​			--- 页面性能分析文件(需要web-vitals库的支持)

1. setupTests.js

​			---- 组件单元测试的文件(需要jest-dom库的支持)

### 3.3 补充

在index.js里，底层会帮我们获取index.html里的真实容器标签`root`可以修改名称，最好别改

App.js也可以修改名称，最好不改

App.js里的根组件也可也修改名称，最好不改。

![image-20220205095720136](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220205095720136.png)