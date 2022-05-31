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



## 2. Map 与 WeakMap

传统的对象本质上也是键值对的集合，但是键只能是字符串。Map就是为了解决这个问题，它也是键值对的集合，但是`对于Map来说`，`各种类型的值都可以作为键`。

`WeakMap只接收对象作为键名`。其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。`它的键名所引用的对象都是弱引用`，即`垃圾回收机制不将该引用考虑在内`。因此，`只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存`。也就是说，`一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用`。

WeakMap相对于Map，没有遍历操作，也没有size属性。在 Weak Map 的值中存储对象会阻止垃圾回收，即使该对象的其他引用已全都被移除。



## 3. for of 和 for in

自己一般是在遍历对象的时候用for in，遍历数组的时候用for of。

for in 循环出的是对象中的键，for of循环处的是值。

如果用for in遍历数组，且这个数组绑定了自定义属性，for in也会遍历出来。for of不能遍历普通的对象，要配合Object.keys()才能遍历对象。