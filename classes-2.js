// function Person2() {
//     this.firstname = 'Alicea';
// }

// let me2 = Person2();
// console.log(me2);

class Person {
    firstname;

    constructor(name) {
        this.firstname = name;
    }

    greet() {
        return 'Hello ' + this.firstname;
    }
}

class Tony extends Person {
    // this call the Person constructor fn
    constructor() {
        super('Tony Kross');
    }

    greet() {
        let greeting = super.greet();
        return greeting + ' i am an Alemen Crack';
    }

    meet() {
        return 'Nice to meet you';
    }
}

let me = new Tony();
console.log(me.meet());
console.log(me.greet());

// let he = new Person('Someone');
// console.log(me.meet());

// console.log(Object.is(Person.prototype, me.__proto__.__proto__)); // true
// console.log(Object.is(Tony.prototype.__proto__, Person.prototype)); // true

