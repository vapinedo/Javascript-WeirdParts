// var firstname = "Valp";

var person = {
  firstname: "Default",
  lastname: "Default",
  greet: function () {
    // return "Hi " + firstname; // Hi Valp
    return "Hi " + this.firstname; // Hi Default
  },
};

// console.log(person.greet());

var valp = Object.create(person);
console.log(Object.getPrototypeOf(valp));
