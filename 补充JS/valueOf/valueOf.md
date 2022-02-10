# valueOf

valueOf方法**`返回指定对象的原始值`**，如果对象存在原始值，那么返回原始值；如果对象是复合值，则返回对象本身。

## 1.字符串类型

**`直接原始值返回`**；

``` javascript
'1'.valueOf(); // '1'
''.valueOf(); // ''
'abc'.valueOf(); // 'abc'
```

## 2.布尔值类型

**`直接原始值返回`**

``` javascript
true.valueOf(); // true
false.valueOf(); // false
```

## 3.数值类型

- 对于整数来说，**`直接调用valueOf方法会报错`**，因为`整数后面的点会被识别为小数点`，**`加个括号`**就好。
- **`浮点数直接原值返回`**；
- **`NaN、Infinity、-Infinity原值返回`**；

``` javascript
0.valueOf(); // Uncaught SyntaxError: Invalid or unexpected token
(0).valueOf(); // 0
 
1.23.valueOf(); // 1.23
 
NaN.valueOf(); // NaN
Infinity.valueOf(); // Infinity
-Infinity.valueOf(); // -Infinity
```



## 4. undefined和null

由Object后面的每个对象继承，所以**`undefined和null没有toString()方法`**，直接调用会报错哦。

``` javascript
undefined.valueOf(); // 错误
null.valueOf(); // 错误
```



## 5.复合类型的对象，返回原对象。

1. 对象Object类型；

   ``` javascript
   {}.valueOf() // 报错，Uncaught SyntaxError: Unexpected token '.'
   ({}).valueOf() // {}
   ({a:1}).valueOf(); //{ a: 1 }
   ```

   

2. 函数Function类型；

   ``` javascript
   // 自定义函数
   function func(){
       console.log('text');
   }
   func.valueOf(); /* function func(){
                         console.log('text');
                     }
                   */
   // 原生函数
   Object.valueOf() // Object() { [native code] }
   Function.valueOf() // Function() { [native code] }
   ```

   

3. 数组Array类型；

   ``` javascript
   [].valueOf(); // []
   [1, 2, 3].valueOf(); // [1, 2, 3]
    
   Array.valueOf(); //  Array() { [native code] }
   ```

   

4. 时间Date类型；

   ``` javascript
   Date(); // "Mon Jun 22 2020 17:51:31 GMT+0800 (中国标准时间)"
   Date().valueOf(); // "Mon Jun 22 2020 17:51:31 GMT+0800 (中国标准时间)"
    
   Date.valueOf(); // Date() { [native code] }
   ```

   

5. 正则RegExp类型返回原正则对象

   ``` javascript
   /xyz/i.valueOf(); // /xyz/i
    
   RegExp.valueOf(); // RegExp() { [native code] }
   ```

   

6. 错误Error类型

``` javascript
Error.valueOf(); // Error() { [native code] }
```