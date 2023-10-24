class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname || 'Default';
        this.lastname = lastname || 'Default';
        this.age = age || 22;
    }

    getFullName() {
        console.log(this.firstname + ' ' + this.lastname);
    }
}

class Employee extends Person {
    greet() {
        console.log('Hi, i am an employee');
    }
}

let person = new Person('Jim', 'Morgan', 33);
let employee_1 = new Employee('Frontend Developer', 'Medellin');

console.log(Employee.prototype.__proto__);
console.log(employee_1.__proto__.__proto__);
console.log(Object.is(Employee.prototype, employee_1.__proto__))
console.log(Object.is(employee_1.__proto__.__proto__, Person.prototype));
