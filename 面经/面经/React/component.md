## 1.Pure component

- Pure Components`在props与state不改变时`(在input不变时)不会重复渲染（会得出相同的结果）， 因此提高了运行速度。因此`shouldComponentUpdate周期函数不再被需要，因为本身这个周期函数的原理就是对比现在和之前的props或者state是否发生改变从而判断是否重新渲染`，Pure Component本身的特点代替了这个功能。
- 此时props与state的对比是`浅比较`（Shallow Compared）。因此Pure Components不能够使用嵌套式[数据结构](https://www.zhihu.com/search?q=数据结构&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"379197285"})（nested data structure）。