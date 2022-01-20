### path模块

#### 1.1引入

- path模块是对`输入的路径字符串`进行处理；不会创建或者对文件夹有任何改动

```javascript
const path = require('path');
```

#### 1.2方法

##### 1.2.1` _dirname`

- 全局对象，用于获取`当前文件所在目录`的`绝对路径`

``` javascript
console.log(__dirname);
```

![image-20211014181421203](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211014181421203.png)

##### 1.2.2`_filename`

- 全局对象，用于获取`当前文件`的`绝对路径`

```javascript
console.log(__filename);
```

![image-20211014181539599](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211014181539599.png)

``` javascript
const myPath = "H:\\前端\\Nodejs\\1Nodejs\\path模块\\The1.js";
```



##### 1.2.3`basename`

- `模块对象.basename('输入的路径名称')`
- 获取给定路径的`最后一部分，`
- 如果路径`结尾是文件`，获取`文件包含扩展名的完整名称`；如果路径`结尾是文件夹`，获取`文件夹名称`

``` javascript
console.log(path.basename(myPath));
```

![image-20211014183521737](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211014183521737.png)

##### 1.2.4`dirname`

- `模块对象.dirname('输入的路径名称')`
- 获取给定路径中`除去最后一部分`的`其他部分`
- 即使最后一部分是文件夹，最终获取到的也是上一级目录

``` javascript
console.log(path.dirname(myPath));
```

![image-20211014183828303](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211014183828303.png)

##### 1.2.5`extname`

- `模块对象.extname('输入的路径名称')`

- 获取给定路径中`最后文件`的`后缀名(扩展名)`
- 如果最后是`文件夹`，则返回`空`

``` javascript
console.log(path.extname(myPath));
```

![image-20211014184159453](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211014184159453.png)

##### 1.2.6 `join`

- `模块对象.join('','','')`
- 拼接`当前文件目录下`的`相对路径`
- 其实就是将字符用`\`组合起来

``` javascript
console.log(path.join('a', 'bd', 'The.js'));
```

![image-20211014190310032](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211014190310032.png)

##### 1.2.7`resolve`

- `模块对象.resolve('','','')`
- 拼接`当前文件目录下`的`绝对路径`

``` javascript
console.log(path.resolve('a', 'b', 'The.js'));
```

![image-20211014190448504](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211014190448504.png)

##### 1.2.8`parse`

- `模块对象.parse('输入的路径名称')`
- `拆分`输入的`路径名称`
- 返回：根目录，文件/文件夹上一级目录，当前文件/文件夹，扩展名，文件/文件夹名称

``` javascript
console.log(path.parse(myPath));
```

![image-20211014191112235](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211014191112235.png)

