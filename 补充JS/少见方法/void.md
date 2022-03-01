``` javascript
void expression
```

对给定的表达式进行求值，忽略计算结果，然后返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

``` javascript
console.log(void(0));			//undefined
console.log(void 1);			//undefined
console.log(void (1 + 2));		//undefined
```

