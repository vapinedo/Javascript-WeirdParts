var person2 = {
    firstname: "Jaime",
    lastname: "Ortega"
};

var person = {
    firstname: "Jim",
    lastname: "Morgan",
    getFullName: (function() {
        return this.firstname + " " + this.lastname;
    }.call(person2))
}
 
// var logName = function() {
//     console.log("Hola", this.getFullName());
// }.bind(person);

// logName();

console.log(((person.getFullName)));