## 数组对象的方法

### 1.`arr.reduce(callback,[initialValue])`

为数组中的每一个元素依次执行`回调函数`，不包括数组中被删除或从未被赋值的元素，接受四个参数：`初始值（或者上一次回调函数的返回值）`，`当前元素值`，`当前索引`，`调用 reduce 的数组`。

##### callback（执行数组中每个值的`函数`，包含`四个参数`）

- ```
      1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
      2、currentValue （数组中当前被处理的元素）
      3、index （当前元素在数组中的索引）
      4、array （调用 reduce 的数组）
  ```

##### initialValue （作为`第一次调用 callback` 的`第一个参数`。）

##### 例子

``` javascript
var arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);

打印结果：
1 2 1
3 3 2
6 4 3
[1, 2, 3, 4] 10
```

``` javascript
var  arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
}，0) //注意这里设置了初始值
console.log(arr, sum);

0 1 0
1 2 1
3 3 2
6 4 3
[1,2,3,4] 10
```

##### 总结

- 如果`没有提供initialValue`，`reduce` 会`从索引1`的地方开始执行 callback 方法，跳过索引0，索引0作为初始值prev。如果提供`initialValue`，从`索引0`开始。
- 遍历到`最后一个元素`时，其`返回值`给`接收的元素`
- `cur`始终是遍历的`数组元素`，`index`是数组元素的`索引`，`prev`是`返回值`(初始值未设置，prev就是索引0元素)

### 2. `arr.map(element =>{})`

- return的东西组成一个新数组
- `参数 只有一个`可以`省略括号`
- `函数体只有一个return`，可以`省略return和{}`

## 回调函数理解

- 函数可以作为参数使用，如果一个函数作为参数，这个函数可以叫`回调函数`
- 只要是看到一个`函数作为参数`使用，就是`回调函数`

## 单选框的设定

- 单选框`name要统一`，每个选项`设定不同的value值`，用于`传递选项的信息`。

- 获取时，为单选框设置独特的name名称，获取到的是唯一选项的value

  ``` javascript
  <input type="radio" name="addSex" value="Male">男
  <input type="radio"name="addSex" value="Female">女<br>
              let sex = $("input[name='addSex']:checked").val();
  ```

## 解构赋值的参数不足

- `const {schema} = require('mongoose')`
- 暴露的对象中有多个键值对，`只匹配一个`也是可以的

## 对象的属性名是变量

- 当`对象的属性名是变量`的时候

``` javascript
//不能使用data.变量名
//可以使用data[变量名]
data = {
    [searchType]: 123,
}
```

## javascript得到二维数组长度

- 行的长度

``` javascript
Array.length
```

- 列的长度

``` javascript
Array[0].length
```

## 让0.9和1都统一到0

``` javascript
Math.ceil(num) - 1;
```

## 获取下拉框选择改变事件

``` javascript

$('下拉框选择器').change(function () {
})
```

