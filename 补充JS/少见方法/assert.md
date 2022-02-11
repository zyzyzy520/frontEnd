assert()函数是一个调试中经常使用的断言工具函数,他是控制台对象console的一个方法。**`Assert主要用来测试一些逻辑判断是否成立`**。在具备调试工具的浏览器上（比如google浏览器），都可以使用console.assert()来实现一些调试功能。



assert方法有`2个参数`，其中一个是**`逻辑表达式，也就是我们进行判断的语句`**，第二个参数是**`一个字符串`**，**`当第一个参数的逻辑结果为false 的时候输出该语句，一般我们设置为出错语句`**。

![img](https://iknow-pic.cdn.bcebos.com/b999a9014c086e060b7b09b104087bf40bd1cb7c?x-bce-process%3Dimage%2Fresize%2Cm_lfit%2Cw_600%2Ch_800%2Climit_1%2Fquality%2Cq_85%2Fformat%2Cf_jpg)

可以看到testAssert的长度实际上是11，但是断言语句是判断为不为10，根据上面的介绍，浏览器的控制台应该会输出后面的字符串语句，我们看看效果，如下图所示：

![img](https://iknow-pic.cdn.bcebos.com/77094b36acaf2eddcd567f138b1001e9380193a0?x-bce-process%3Dimage%2Fresize%2Cm_lfit%2Cw_600%2Ch_800%2Climit_1%2Fquality%2Cq_85%2Fformat%2Cf_jpg)

然后我们修改源码，将判断改为11，看输出效果：

![img](https://iknow-pic.cdn.bcebos.com/c9fcc3cec3fdfc035048d242d23f8794a4c22613?x-bce-process%3Dimage%2Fresize%2Cm_lfit%2Cw_600%2Ch_800%2Climit_1%2Fquality%2Cq_85%2Fformat%2Cf_jpg)

**`正确的逻辑语句，不会输出错误提示`**，应正了上面的理论解释。