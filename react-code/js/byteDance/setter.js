let obj = {
    year: 2011,
    a: 1
}
let temp = null;
Object.defineProperty(obj, '_year', {
    get: function () {
        return temp;
    },
    set: function (newValue) {
        temp = newValue * 2;
    }
})

obj._year = 2022;
console.log(obj._year);