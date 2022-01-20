## 基本概念

数据库(database)，用于数据的管理

- 关系型数据库：MySQL
- 非关系型数据库：MongoDB

## 使用

- 在`命令行`中操作MongoDB

- `可视化图形工具中`操作MongoDB

- 通过`后端代码`操作MongoDB

### 1.在`命令行`中操作MongoDB

找到MongoDB安装包中bin目录下的`mongo.exe`文件，双击打开

MongoDB服务器

![image-20211201154518234](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211201154518234.png)

#### 常用命令

##### 1. 查看当前MongoDB`服务器中所有的数据库`

```bash
show dbs
```

##### 2.查看`当前指向的数据库`

```bash
db
```

##### 3.`新建/切换数据库`

```bash
use 数据库名称
```

##### 4.`查看当前数据库所有的集合`

```bash
show collections
```

##### 5.往集合中`添加数据`（如果该集合`不存在，则会自动创建`该集合） 

```bash
db.集合名称.insert({name: '张三', age: '20', gender:'男'})
```

##### 6.查看`某个集合中所有的数据`

```bash
db.集合名称.find()
db.集合名称.find().pretty() 另外一种排列形式
```

### 2.`可视化图形工具中`操作MongoDB

- navicat

![image-20211201163530523](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211201163530523.png)

- localhost_27017:

  ---`mongoDB服务器`所在的`本地IP地址`和`端口号27017`

- web06:

  ---数据库名称

- students：

  ---集合名称

![image-20211201163834527](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211201163834527.png)

- 新建集合只要点击`save`，然后输入集合名称即可。

![image-20211201164225671](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211201164225671.png)

- 对于新建集合的第一组数据，需要手打

![image-20211201164252898](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211201164252898.png)

- 点亮颜色显示图片

### 3.通过`后端代码`操作MongoDB

#### 3.1`mongoose`插件

- mongoose是Nodejs提供的一个便捷操作MongoDB的库

#### 3.2下载

```bash
npm i mongoose --save
```

#### 3.3`连接mongodb`

- 将`express后端项目`与`mongodb服务器的某一个数据库`连接起来
- 考虑到希望在启动项目时，就连接mongodb服务器。所以将连接代码写在`app.js`里

```javascript
// 连接mongoDB
// 1.引入mongoose
const mongoose = require('mongoose');
// 2.需要连接的数据库的地址，如果要连接别人电脑上的数据库的地址，将localhost换成别的IP地址即可
// 如果没有数据库，会自动创建
const dbURL = 'mongodb://localhost:27017/web';
// 3.建立连接,附加参数在第一次运行后会有提示，复制粘贴即可
mongoose.connect(dbURL);
// 4.连接成功后的触发事件
mongoose.connection.on('connected', function () {
  console.log(dbURL + '数据库连接成功')
});

```

#### 3.4 数据库集合相关配置

- 这一部分要写在`后端对数据的操作`那一个JS
- 当数据库连接成功之后，就可以开始操作数据库中的集合了
- 在首次操作之前，`每一个集合都要进行一次配置`

##### 3.4.1 配置数据`集合的结构`

- 定义出集合中数据`有哪些属性`，`属性值是什么类型`。
- 文档默认最后会有一个字段"__v"，这个字段表示该文档是否是刚刚创建的，如果是则字段"__v"的值为0，一般选择禁用
- 设置数据库集合的结构，如果有对象，要详细标注对象里的数据类型

``` javascript
// 数据库集合的相关配置
// 1. 定义数据集合的解构：定义出数据集合中数据有哪些属性，属性值得类型
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: String,
    passWord: String，
    info: {
    	height: String,
    	weight: String
}
}, { versionKey: false });
```

- 可以为每个属性`设置默认值`，`插入集合中的对象不包含该属性时，就会插入这个默认值`。

![image-20211208112019721](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211208112019721.png)

##### 3.4.2 配置数据集合模型

- 将上一步中的`schema集合结构和数据库中得集合关联`起来，得到一个数据模型

- 如果数据库中没有相关联得集合，model会按照schema创建
- 所有关于数据集合中`数据操作的方法`，都是`数据模型`对象提供的

``` javascript
// model('模型名称', 项目定义得schema，数据库中得集合名称);如果数据库中没有该集合，会创建

const userModel = model('userModel', userSchema, 'users');
```

##### 3.4.3 操作数据

1. 查询、查找

   ---这个查询是`异步函数`，有可能出现还没找到对应数据，但就需要对results赋值的情况，所以需要使用`await`，得到了结果再赋值。使用了await，就必须使用`async`

   ---返回的是一个数组，`查找到`了，返回`对应数组`；`没有查到`，返回`空数组`

   ---需要的`参数是一个对象`。

   ---如果传递的`参数是一个空对象`，也是`查询所有`

   ---`find只查当前的集合`

   - 按`条件查询`

   ``` javascript
   //两个都要匹配
   const results = await userModel.find({ userName:'123', passWord:'123' });
   
   //只匹配一个
   const result = await userModel.find({userName:'123'});
   ```

   - **查询`所有数据`**

   ``` javascript
   const results = await userModel.find();
   ```

   - **模糊查询**

     ---`[param.searchType]`表示根据哪个属性查询，`{}`是正则匹配`param.searchInfo`是输入的不完整的查找信息，`$options: '$i'`是大小写一起匹配没有区别

   ``` javascript
       const results = await studentModel.find({
           [param.searchType]: {
               $regex: param.searchInfo, $options: '$i'
           }
       })
   ```

   - **关联查询**

   ---主要是在`studentModel`上查找，也就是在student集合上查找获取数据。但在student集合中，有一个属性`classID`是和别的集合(class)关联的，

   ---`mongoose`提供了对应的函数`populate`，参数是`与别的集合关联的属性在student集合内的名称`，而classID我们在配置model时，就给了它的`ref`参考的model，因此通过这个可以找到关联的集合。

   ---返回值是`student集合里对应的信息`，但是`在classID部分是一个对象`，这个对象是在class集合里，根据`classID查找到的整条数据`

   ``` javascript
   studentsModel.find().populate('classID')
   ```

   ![image-20211207234012534](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211207234012534.png)

   - 关联嵌套查询

     ---student集合里有一个属性classID，`classID和class集合关联`，从而得到class集合对应的每条数据

     ---class集合内又有一个属性teacherIDs, `teacherIDs和teacher集合关联`，从而可以得到teacher集合 对应的每条数据。

   ```javascript
   const results = await studentModel
       .find()
       .populate({
           path: 'classID',
           populate: {
               path: 'teacherIDs'
           }
       });
   console.log(results);
   ```

   - 分页限制查询

     --- `limit`设置`请求`的数据条数

     ---`skip`设置`跳过`的数据条数

   ``` javascript
       const results = await studentModel
           .find()
           .populate({
               path: 'classID',
               populate: {
                   path: 'teacherIDs'
               }
           })
           .limit(parseInt(pageSize))  //limit设置请求的数据条数，参数必须是整数类型
           .skip(pageSize * pageIndex)  //跳过数据的条数
           ;
       console.log(results);
   ```

   

2. 新增

   ---名字要和数据库里的`匹配`

   ---返回的是插入成功后的对象

   ``` javascript
   userModel.create({userName:'123', passWord:'123'})
   ```

   

3. 删除:

   ---`参数是对象`

   ---返回的是`{deletedCount: 1}`

   ---key要和数据库里的匹配

   ```javascript
   //删除数据库中第一个userName为'zhangsan'的表项
   userModel.deleteOne({userName: 'zhangsan'})
   //删除数据库中所有userName为'zhangsan'的表项
   userModel.deleteMany({userName: 'zhangsan'})
   ```

   ![image-20211203194943958](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211203194943958.png)

4. 修改

   ---第一个参数用于找到需要修改的数据所在的 位置

   ---第二个参数是要修改的内容

   ``` javascript
   userModel.updateOne({_id: 1}, {userName: 'list', password: '123'});
   ```

   

5. 获取数据总条数

   --返回的是总条数

   ``` javascript
   await studentModel.countDocuments();
   ```

   

   

5. 注意事项

   ---以上所有的方法都是`异步方法`，且这些方法`返回值`都是`Promise`对象，因此需要通过`await`去等待操作结果

   ``` javascript
   router.post('/login', async function(req, res, next){
       const result = await userModel.find({userName:'123'});
   })
   ```

   
