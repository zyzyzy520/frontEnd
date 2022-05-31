Array.prototype.copy = function () {
    //this指向数组
    return this.concat(this);
}

let arr = [1, 2, 3, 4, 5];
console.log(arr.copy());