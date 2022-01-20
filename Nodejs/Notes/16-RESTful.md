## 定义

- RESTful 中的 `REST`，不是“rest”，是 Respresentational State Transfer 的缩写，翻译过来理解为“`表现层状态转换`”，其实就是一种`接口设计风格`。简单来说，就是换一种`新的风格`去`设置前后端连接的 URL 和请求类型`。

- 在 RESTful 的设计风格里，“用 `URL` 来描述`资源`，用`请求类型`来描述`操作`”。

```  bash
获取学生:
GET  /students/getStudents ---原本方式
GET  /students ---RESTful方式

新增学生
POST  /students/addStudents
POST  /students
```

## HTTP `请求类型`

在 RESTful 中，建议使用以下`四种请求类型`来描述`对资源的操作`：

1. GET：`获取`资源
2. POST：`新增`资源
3. DELETE：`删除`资源
4. PUT：`修改`资源

如果传递的`数据中有一个唯一值(_id)`，会将`id放到url`中（根据id查询获取学生信息）

``` bash
获取学生
GET  /students
根据id获取一个学生
GET  /students/001

新增学生
POST  /students

删除学生
DELETE  /students

修改学生
PUT  /students
```

- 若 URL没有放数据，二级路径不写

``` javascript
router.delete('/', async function(req, res, next){
   	..... 
});

```

- 若URL放置了数据，二级路径不能为空，`/:任意字符`进行匹配，`获取url上的数据`，需要通过`req.params`

``` javascript
router.get('/:_id', async function(req, res, next){
    const data = req.params
})
```



## 返回值

RESTful 中建议，`后端返回给前端`的数据，必须是一个`对象`，对象中`包含关于当前这次请求描述信息`：

```js
{
    message: '学生数据获取成功',
}
```

对象中还需要包含一个`状态码`，用来表示当前请求的状态：

```
GET: 200（表示操作成功）
PUT: 200（表示操作成功）
POST: 201（表示生成了新的资源）
DELETE: 204（表示资源已经不存在）
```

