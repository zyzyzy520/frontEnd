

const p = new Promise((resolve, reject) => {
    resolve('Hello World');
})

async function getIt() {
    const msg = await p;
    console.log(msg);
}
getIt();