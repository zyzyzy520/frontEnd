## 1.

下面表达式的结果是：

``` javascript
void();
```

```javascript
void 0;//undefined
void (0);//undefined 
void (2+3); //undefined
void(); //SyntaxError 语法错误。把void当做函数使用了，但是此时void并没有定义。

```

void 执行后面表达式的值，但是返回undefined。