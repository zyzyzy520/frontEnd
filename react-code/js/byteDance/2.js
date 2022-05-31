new Promise((resolve, reject) => {
    reject(1);
    console.log(6);
}).catch(() => {
    console.log(2);
}).then(() => console.log(3), (v) => console.log(v))
    .then(() => console.log(1))

console.log(5);

// 6 5 2 3