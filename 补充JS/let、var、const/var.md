## 1. var特殊声明

``` javascript
var a = b = 1;
```

上述等价于**` var a,b=1,a=b`**

即 a和b都为1， **`一个是隐式声明 b = 1，无视作用域`**；另外一个用var声明，具有函数和和全局作用域



## 2. 变量提升

### 变量预解析（变量提升），仅针对var声明的变量

- 变量提升： `变量的声明`会被提升到`当前作用域的最上面`，变量的`赋值不会提升`。
- **`注意作用域包括全局作用域和函数作用域，不包括块级作用域`**

### 函数预解析（函数提升）

- 函数提升： `函数的声明`会被提升到`当前作用域的最上面`，但是`不会调用函数`。

> **`当遇到函数和变量同名且都会被提升的情况，函数声明优先级比较高，因此变量声明会被函数声明所覆盖，但是可以重新赋值。`**



``` javascript
alert(a);//输出：function a(){ alert('我是函数') }
function a(){ alert('我是函数') }//
var a = '我是变量';
alert(a);   //输出：'我是变量'
```

function声明的优先级比var声明高，也就意味着当两个同名变量同时被function和var声明时，function声明会覆盖var声明



``` javascript
function test(arg){
    console.log(arg);  
    var arg = 'hello'; 
    function arg(){
    console.log('hello world') 
    }
    console.log(arg);  
}
test('hi');

/*
    function test(arg = hi){
        var arg
        function arg(){};    
        console.log(arg); //function arg(){}
        arg = 'hello';
        console.log(arg) // hello
    }
    test('hi')
*/
```

这是因为当`函数执行的时候`,首先会形成一个`新的私有的作用域`，然后依次按照如下的步骤执行：

- 如果**`有形参，先给形参赋值`**
- 进行私有作用域中的**`预解释`**，函数声明优先级比变量声明高，最后后者会被前者所覆盖，**`但是可以重新赋值`**
- **`私有作用域中的代码从上到下执行`**
