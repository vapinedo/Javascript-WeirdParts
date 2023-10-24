class Person {
    firstname;

    constructor(name) {
        this.firstname = name;
    }

    greet() {
        return 'Hello ' + this.firstname;
    }

    static residence = 'Earth';

    static goodMorning() {
        return 'Good Morning ' + this.firstname;
    }
}

let person = new Person('Tony');
console.log(Person.goodMorning());
console.log(Person.residence);
