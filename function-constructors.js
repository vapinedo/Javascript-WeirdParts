function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

var jim = new Person("Jim", "Morgan");
var eva = new Person("Eva", "Smith");

console.log(jim);
console.log(eva);
console.log(jim.getFullName());

// adding features to prototype on fly, just later ( arrow function does not work )
Person.prototype.getFirstname = function () {
  return this.firstname;
};

console.log(jim.getFirstname());
console.log(eva.getFirstname());
