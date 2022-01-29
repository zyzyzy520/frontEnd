class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        console.log(1);
        super(name, age);
        this.grade = grade;
    }
}


let zhou = new Student('zhou', 23, 100);