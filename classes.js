class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class Employee extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
    this.role = "Developer";
    this.gender = "Male";
  }
}

var employee_1 = new Employee("Peter", "Pan");

console.log(employee_1.firstname + " " + employee_1.lastname);
