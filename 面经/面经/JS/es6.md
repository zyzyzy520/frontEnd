## 1.es6新特性

**1. let const**

**2. 模块字符串``**，${变量名}

**3. 解构**

**4. 函数的参数默认值**

``` javascript
// ES6；
function printText(text = 'default') {
    console.log(text);
}
```

**5. 箭头函数**

**6. for of**

- for of遍历的是键值对中的`值`
- for in遍历的是键值对中的`键`

**7. class类**

**8. 导入导出**

- 导入improt
- 导出export default

**9. promise**

``` javascript
  <script>
    new Promise((resolve,reject) => {
      setTimeout(function() {
        resolve('成功了！')
      },1000)
      // reject("失败了，wuwu")
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  </script>
```

**10. Symbol**

**11. Set集合**