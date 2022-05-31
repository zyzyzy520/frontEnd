let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (key of Object.keys(obj)) {
    console.log(obj[key])
}