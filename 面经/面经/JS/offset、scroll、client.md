## 1. 元素`偏移量offset`

### 1.1 offsetTop, offsetLeft

获得元素距离`带有定位父元素`的位置，绝对相对均可。如果`没有父亲或者父亲没有定位，则以body为准`

- element.offsetTop：返回元素相对带有定位父元素上方的偏移
- element.offsetLeft：返回元素相对带有定位父元素左边框的偏移



### 1.2 offsetWidth, offsetHeight

获得`元素自身的大小（宽度高度）`

- element.offsetWidth：返回自身`包括padding、边框、内容区的宽度`，返回数值`不带单位`
- element.offsetHeight：返回自身`包括padding、边框、内容区的高度`，返回数值`不带单位`



### 1.3 offsetParent，parentNode

获得元素`带有定位的父级`元素

- element.offsetParent：返回该元素`带有定位的父级元素`，如果`父级都没有定位，则返回body`。

- element.parentNode：返回父亲，是`最近的一级父亲，不管父亲有没有定位`。

  ![img](https://api2.mubu.com/v3/document_image/3cdd1b9d-d1be-4d9b-b1e7-3862ec424880-10071129.jpg)



## 2. 元素`可视区 client `系列

![img](https://api2.mubu.com/v3/document_image/2aa6af18-45eb-45d5-8334-5722ed7dbae4-10071129.jpg)

![img](https://api2.mubu.com/v3/document_image/6d5e35f1-0c21-45cc-a8be-b5fe3138c034-10071129.jpg)



## 3.元素`滚动 scroll` 系列

document.documentElement.scrollTop ： 可以得到浏览器被卷去的上侧距离

![img](https://api2.mubu.com/v3/document_image/a2845a0c-37be-4350-ab49-65313ac1ef21-10071129.jpg)

![img](https://api2.mubu.com/v3/document_image/985cc439-b238-44ec-98ea-30b16c5c7cb4-10071129.jpg)





## 4. 其它API

``` javascript
Element.getBoundingClientRect() 方法返回元素的大小及其相对于浏览器视口的位置。

    // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
    let rect = item.getBoundingClientRect()
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      item.src = item.dataset.src
      item.removeAttribute('data-src')
    }
```



