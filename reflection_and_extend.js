var extend = function (keysFunc, undefinedOnly) {
  return function (obj) {
    var length = arguments.length;

    if (length < 2 || obj == null) return obj;

    for (var index = 1; index < length; index++) {
      var source = arguments[index];
      var keys = keysFunc(source);
      var l = keys.length;

      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!undefinedOnly || obj[key] === void 0) {
          obj[key] = source[key];
        }
      }
    }

    return obj;
  };
};

var person = {
  firstname: "Default",
  lastname: "Default",
  age: "22",
};

var valp = {
  role: "Software Engineer",
  city: "Riohacha",
  country: "Colombia",
};

var sayHello = function () {
  console.log(arguments);
  console.log("Hello");
};
sayHello("hola", 2);
