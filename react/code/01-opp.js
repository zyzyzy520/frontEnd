class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.have = function (a, b) {
            console.log(a + b);
        }
    }
    showID() {
        return this.id;
    }
    setID(num) {
        if (typeof num == "number" && num < 100) this.id = num;
    }
}

const Li = new Student(1, 'LI');
Li.setID(2)
// console.log(Li.showID());

class MiddleStudent extends Student {
    constructor(id, name) {
        super(id, name);
        this.type = "middle";
    }
}

const Zhou = new MiddleStudent(2, 'Zhou');;
// console.log(Zhou.id);

function Cat() {
    let showName = function () {
        console.log(1);
    }
}
const Doggy = new Cat();
// Doggy.showName()

const opp = {
    sayhi: function () {
        console.log("该对象的this指向", this);
    }
}
// opp.sayhi();

function Dog() { }
Dog.prototype.sayHi = function () {
    console.log('该构造函数的this指向' + this);
}
const fil = new Dog();
fil.sayHi();