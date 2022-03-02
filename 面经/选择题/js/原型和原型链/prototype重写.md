# prototype重写

> **`重点就是理解，实例是在new的时候。实例的proto和其构造函数的prototype指向同一个对象`**

## 1.

``` javascript
let A = function() {}
A.prototype.a = 1;
let B = new A();
A.prototype = {
  b: 2,
  c: 3
}
let C = new A();
A.prototype.d = 4;
console.log(B.a);
console.log(B.b);
console.log(C.c);
console.log(C.d);
```

- `let A = function() {}` 声明了一个函数对象，A是一个构造函数
- `A.prototype.a = 1;`给A.prototype指向的对象{}添加了一个属性a, {a: 1};
- `let B = new A();` **`B是A的实例， B._proto_指针和A.prototype指向同一个对象{a: 1};`**
- `A.prototype = {b: 2,c: 3};``改变了A.prototype指针的指向，指向一个新的对象{b: 2,c: 3}`;
- `let C = new A();` **`C是A的实例， C._proto_指针和A.prototype指向同一个对象{b: 2,c: 3};`**
- `A.prototype.d = 4;``给A.prototype指向的对象{b: 2,c: 3}添加了一个属性d, {b: 2,c: 3, d: 4}`;
- C._proto_和A.prototype指向{b: 2,c: 3, d: 4}
- B._proto_指向{a: 1}
- 1 undefined 3 4(实例都没有属性，但可以通过proto找到)
- **`最好画个图，别空想`**
- 

