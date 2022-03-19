let p2 = new Promise((resolve, reject) => {
    resolve('2')
}).then((data) => {
    return data;
    // resolve(data);
}).then((data) => {
    console.log(data);
})
console.log(p2)

setTimeout(() => console.log('a'));
Promise.resolve().then(  //p1
    () => console.log('b')
).then(        //p2
    () => Promise.resolve('c').then( //p3
        (data) => {
            setTimeout(() => console.log('d'));
            console.log('f');
            return data;
        }
    )
).then(data => console.log(data)); //p4