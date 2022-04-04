## 1.box-sizing: `content-box`(默认情况)

在默认情况下，设置的`width`和`height`属性都是指**`元素内容（content box）的高度和宽度`**。

如果这个元素设置了`border`或`padding`的话，会撑大盒子，那么整个元素的高度和宽度就是：

``` javascript
totalWidth = border-left + padding-left + width + padding-right + border-right
totalHeight = border-top + padding-top + height + padding-bottom + border-bottom
```



## 2.box-sizing: `border-box`

设置的`width`和`height`属性值就是**`针对整个元素，包括了border，padding，和元素内容`**

```javascript
contentWidth = width - padding-left - padding-right - border-left - border-right
contentHeight = height - padding-top - padding-bottom - border-top - border-bottom
```

