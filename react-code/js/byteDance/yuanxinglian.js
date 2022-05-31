function Father() {

}
console.log(Father.__proto__ == Function.prototype)
console.log(Function.prototype.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__ == null)
console.log(Father.prototype.__proto__ == Object.prototype)