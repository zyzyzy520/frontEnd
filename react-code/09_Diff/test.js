let Person = {}
let temp = null
Object.defineProperty(Person, 'name', {
    get: function () {
        return temp
    },
    set: function (val) {
        temp = val
    }
})
console.log(Person.name(213));