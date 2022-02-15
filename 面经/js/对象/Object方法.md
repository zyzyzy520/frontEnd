## 1. Object()

> Objecy()**`会根据传入的值的类型返回相应的基本包装类型的实例`**

请问以下两次检测对象constructor是否拥有属性名1的结果分别是什么？

``` javascript
1 in Object(1.0).constructor;
Number[1] = 123;
1 in Object(1.0).constructor;
```

- `Object(1.0)`返回一个原始值为1.0的Number对象，其构造函数时Number函数对象
- 因此`Object(1.0).constructor指回Number对象`
- 而`1 in Object(1.0).constructor`就表示判断`Number对象里有没有1这个属性，没有，所以返回false`
- `Number[1] = 123`给Number对象添加属性1，值为123
- 而`1 in Object(1.0).constructor`就表示判断`Number对象里有没有1这个属性，有，所以返回true`