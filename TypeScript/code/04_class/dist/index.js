"use strict";
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.name = name;
        this.id = id;
    }
    get myid() {
        return this.id;
    }
    set myid(newID) {
        this.id = newID;
    }
}
let Ash = new Person('Ash', 123);
Ash.myid = 456;
console.log(Ash.myid);
let p;
p = {
    name: 'avc',
    age: 123,
    sayHi() {
        console.log(123);
        return 1;
    }
};
p.sayHi();
