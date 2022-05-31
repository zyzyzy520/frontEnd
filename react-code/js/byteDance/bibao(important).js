/*
坑1：fucntion里面的a优先找的是形参a
坑2：i用的var定义，因此在后续调用result[]()的时候，函数内部是没有i的，往外找，用的是同一个i，已经是全局i = 3
坑3：三个函数内部都没有sum，用的是同一个sum，前一个函数修改了sum，后一个用的就是修改后的sum
*/

var result = []
var a = 3
var sum = 0
function foo(a) {
    var i = 0
    for (; i < 3; i++) {
        result[i] = function () { //result[0] = function(){sum += i*a; console.log(sum)}
            //result[1] = function(){sum += i*a; console.log(sum)}
            //result[2] = function(){sum += i*a}
            sum += i * a
            console.log(sum)
        }
    }
}
foo(1)  //1.执行foo函数
result[0]() //3
result[1]() //6
result[2]() //9