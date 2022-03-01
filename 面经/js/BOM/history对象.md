## 1.

当用户打开一个网页时，想一直停留在当前打开的页面，禁止页面前进和后退，以下正确的是（   ）

``` javascript
A. window.history.forward(1);
B. window.history.back(1);
C. window.history.go(-1);
D. window.history.forward(-1);

/*
A. window.history.forward(1);  //等价于window.history.forward();  表示前进一页
B. window.history.back(1);		//等价于window.history.back();		表示后退一页
C. window.history.go(-1);		//后退一页
D. window.history.forward(-1);  //等价于 window.history.forward();   表示前进一页
```

首先对window.history.back和window.history.forward设置参数是无效的，只表示`后退一页和前进一页`

现在已经打开了一个新的网站，这个网站可以后退，不可以前进（因为不是通过后退打开的）。在这样的情况下，执行ABCD四个选项，当执行A或D的时候，由于网站是新打开的，无法前进，所以执行history.forward(1)和history.forward(-1)方法都不起作用，而执行B或C的时候，都会回退至上一个网站，所以答案是AD