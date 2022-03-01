# ES6前端模块化

## 1.暴露和引入

如果只是要引入别的js文件，import './a.js'即可，但如果要`使用别的文件的变量`或者`函数`就得暴露和引入(必须暴露后引入才能使用，否则无效)

### 1.1 在一个 JS 文件中通过 `export` 暴露数据出去；

1. 在要暴露的变量命名语句前加export

   ![img](https://api2.mubu.com/v3/document_image/3a215f76-65a7-468c-90d1-40f4519fc7e6-10071129.jpg)

2. 引入**`import {对应的变量名} from '相对路径'`**（`变量名必须一样！！！`）

   ![img](https://api2.mubu.com/v3/document_image/96853723-5a16-4d40-925a-7a60e09839dc-10071129.jpg)

3.  如果在引入时，发现有**`变量冲突`**现象，需进行**`重命名`**。将引入的变量，重新命名为另外一个变量名称

   ![img](https://api2.mubu.com/v3/document_image/06a67a4c-43e9-4350-bd7e-087946ea4fc3-10071129.jpg)

### 1.2 在一个JS文件中通过`export default`暴露数据出去

如果在一个 JS 文件中，`只暴露一个对象，数据放进对象里`，还可以通过 **`export default`** 来进行暴露。a与foo是对象属性名称可以随意取，后面的a与foo是属性值，一定与代码定义的变量名一样。

![img](https://api2.mubu.com/v3/document_image/ea050dce-08e2-4d2c-b9c0-9e4841ee10fd-10071129.jpg)

另一个文件在 **`import 任意变量命名 from XX.js `**来接收暴露的数据（任意变量代表对象）。当然也可以解构赋值

![img](https://api2.mubu.com/v3/document_image/0cc15c84-0783-4b5f-94c2-190156fee3ca-10071129.jpg)

如果`只暴露一条数据`，可以直接`export default 需要暴露的变量名称`，另一个文件**`import 任意变量命名 from XX.js `**接收，**`这里的变量可以直接使用`**