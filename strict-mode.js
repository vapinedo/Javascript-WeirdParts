"use strict";

// var person;

// persom = {};
// console.log(persom);

function sum(a, b) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
sum(3, 4);
