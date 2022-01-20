## 作用

- 获取当前系统的时间。在将数据插入数据库的时候，自动获取系统时间，并加入数据库中

## 包的安装

``` bash
npm i moment
```

## 对后端schema的配置设置好默认时间

- 引入暴露出来的对象
- 调用方法，`format`用于设置插入数据库的`时间格式`，有多种。注意`从分钟开始使用小写`

``` javascript
const moment = require('moment');
// 配置studentModel
const studentSchema = new Schema({
    name: String,
    age: String,
    sex: String,
    time: {
        type: String,
        // 只要不进行设置，默认插入数据库的值
        default: moment().format('YYYY-MM-DD')
        //default: moment().format('YYYY年MM月DD日')
        //default: moment().format('YYYY/MM/DD HH:mm')
    },
    // 用于关联class集合
    classID: {
        type: Schema.Types.ObjectId,
        // ref 用于设置要关联的集合的模型名称，也就是model()的第一个参数
        ref: 'classModel'
    },
    imageName: String
}, { versionKey: false });
```

