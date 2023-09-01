// const greet = function(name) {
//     console.log("Hi " + name);
// }("Dan");
// console.log(greet);

(function(name) {
    console.log(arguments[0]);
    console.log(...arguments);
    console.log("Hello " + name);
}("Valp", [1,2,3], {apellido: "Pinedo"})); 
