## 1.类型“Element”上不存在属性“offsetTop”

- 因为ts默认用的是Element，需要声明为`HTMLElement`

  ``` typescript
  let top = <HTMLImageElement>document.querySelector('.Top');
  let _offsetTop = top.offsetTop
  ```

- 或是下面这样

  ``` typescript
  let top = document.querySelector('.Top') as HTMLElement;
  let _offsetTop = top.offsetTop
  ```

  