## 1.load和Domcotendload区别

``` javascript
  window.addEventListener("load", function () {   //添加load事件
       console.log("load执行");
   }, false);

   window.addEventListener("DOMContentLoaded", function () {  //添加DOMContentLoaded事件
       console.log("domContentLoad执行");
   }, false)
```

load和DOMContentLoaded的作用就是`当页面加载完成的时候执行函数体`，但他们执行的时间点是不一样的。

- `load`是的在`页面所有文件加载完成后执行`
- `DomContentLoad`是`Dom加载完成后执行`，`不必等待样式脚本和图片等外部文件加载`