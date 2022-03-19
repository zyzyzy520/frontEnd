var name = 'global';
var obj = {
    name: 'local',
    foo: function () {
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();  //相当于new Father()
/*
    obj.foo = function(){this.name ='foo'} this指向window
    但是bar仍然会绑定上bar.name = 'foo'。
    因为new会调用构造函数.apply，这样this
    又被绑定回去了
*/
setTimeout(function () {
    console.log(window.name);
}, 0);
console.log(bar.name);

var bar3 = bar2 = bar;
/*
    bar与bar2与bar3均指向对象{name: foo}

*/
bar2.name = 'foo2';
/*
    将对象改为{name: foo2}
*/
console.log(bar3.name);


// foo  foo2 global]



setTimeout(() => console.log('a'));
Promise.resolve().then(  //p1
    () => console.log('b');
    ).then(        //p2
        () => Promise.resolve('c').then( //p3
            (data) => {
                setTimeout(() => console.log('d'));
                console.log('f');
                return data;
            }
        )
    ).then(data => console.log(data)); //p4

/*
    1.执行全局宏任务，将定时器1放入宏任务队列中，p1放入微任务队列中
    2.清空微任务队列，执行p1
    ---执行onFulfilled回调函数,打印b
    ---将微任务p2放入微任务队列中
    3.清空微任务队列，执行p2
    ---执行onFulfilled回调函数
    --将微任务p3压入微任务队列中
    4.清空微任务队列，执行p3
    ---执行onFulfiiled回调函数
    ---将定时器2放入宏任务队列中
    ---打印f
    ---返回data，then函数里返回data，相当于时返回一个resolve(data)的promise对象
    ---将微任务p4压入微任务队列中
    5.执行微任务p4
    ---打印上一个promise对象resolve的data(c)
    6.执行完所有微任务，执行宏任务定时器1
    ---打印a
    7.执行宏任务定时器2
    ---打印d

*/
//b f c a d

let params = []
while (line = readline()) {
    params.push(line);
}
//第一行是m和n
let [m, n] = params[0].split(' ').map(element => parseInt(element));
//数组后面都是矩阵，将数组中的每个字符串分割成数组，在对数组进行map，返回parseInt形式
let matrix = params.slice(1).map(element => element.split(' ').map(element => parseInt(element)));
//第一行只可能从左边到达
for (let j = 1; j < n; j++) matrix[0][j] += matrix[0][j - 1]
//第一列只可能从上方到达
for (let i = 1; i < m; i++) matrix[i][0] += matrix[i - 1][0]

for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1])
    }
}
console.log(matrix[m - 1][n - 1]);