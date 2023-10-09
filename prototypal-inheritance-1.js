var person = {
  firstname: "Default",
  lastname: "Default",
  getFullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  firstname: "John",
  lastname: "Doe",
};

john.__proto__ = person;
// Object.setPrototypeOf(john, person);
// console.log(Object.getPrototypeOf(john));

console.log(john.getFullname());
console.log(john.firstname);

var jane = {
  firstname: "Jane",
};
jane.__proto__ = person;
console.log(jane.getFullname());
