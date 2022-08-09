## 1、折叠

- 有些时候在编辑器里会出现无法折叠的情况。添加以下代码一定可以强制折叠

``` js
//#region
xxxxx
//#endregion
```

- 例如想折叠以下代码，但是只能按照作用域进行折叠，也就是说折叠xx，和yy。但想要xx和yy都一起折叠，这个时候只能用region

  - ``` js
    function xx {
        
    }
    
    function yy {
        
    }
    ```

  - 
