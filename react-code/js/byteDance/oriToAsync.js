function original() {
    console.log('这是一个普通函数')
    return 1;
}

function createAsync(fn) {
    return Promise.resolve(fn).then((fn) => fn())
}
createAsync(original).then((val) => console.log(val));
console.log('同步代码')