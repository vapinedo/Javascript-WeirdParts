var a = new Number(3);
console.log(Object.getPrototypeOf(a));

var nombre = new String("Victor");
console.log(nombre.indexOf("V"));

console.log(new String("Hola").length);
console.log(String.prototype);

// extends functionality to built-in function constructors
String.prototype.isLengthGreatherThan = function (limit) {
  return this.length > limit;
};

console.log("Jim".isLengthGreatherThan(22));
