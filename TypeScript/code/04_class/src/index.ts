class Person {
    constructor(public name: string, private id: number) {
        this.name = name;
        this.id = id;
    }

    get myid() {
        return this.id;
    }

    set myid(newID: number) {
        this.id = newID;
    }
}

let Ash = new Person('Ash', 123);
Ash.myid = 456
console.log(Ash.myid);

interface personAttr {
    name: string,
    age: number,
    sayHi(): number;
}

let p: personAttr;

p = {
    name: 'avc',
    age: 123,
    sayHi() {
        console.log(123);
        return 1;
    }
}
p.sayHi()