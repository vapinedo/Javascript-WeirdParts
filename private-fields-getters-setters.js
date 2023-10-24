class Person {
    #firstname;
    #lastname;

    constructor(fname, lname) {
        this.#firstname = fname;
        this.#lastname = lname;
    }

    greet() {
        return 'Hello ' + this.#firstname + ': ' + this.#getPersonInfo().id;
    }

    get fname() {
        return this.#firstname;
    }

    set fname(name) {
        this.#firstname = name;
    }

    #getPersonInfo() {
        return { id: 1 };
    }
}

let person = new Person('Tony', 'Kroos');
console.log(person.greet());