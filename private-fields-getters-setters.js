class Person {
    #firstname;
    #lastname;

    constructor(fname, lname) {
        this.#firstname = fname;
        this.#lastname = lname;
    }

    greet() {
        return 'Hello ' + this.#firstname;
    }

    get fname() {
        return this.#firstname;
    }

    set fname(name) {
        this.#firstname = name;
    }
}

let person = new Person('Tony', 'Kroos');
console.log(person.greet());
console.log(person.fname);
person.fname = 'Gary';
console.log(person.greet());
