(function (global, $) {
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  var supportedLangs = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  var formalGreetings = {
    en: "Greetins",
    es: "Saludos",
  };

  var logMessages = {
    en: "Logged in",
    es: "Inició Sesión",
  };

  Greetr.prototype = {
    fullName: function () {
      return this.firstname + " " + this.lastname;
    },
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },
    greeting: function () {
      return greetings[this.language] + " " + this.firstname + "!";
    },
    formalGreeting: function () {
      return formalGreetings[this.language] + " " + this.fullName();
    },
    greet: function (formal) {
      var msg;

      // if undefined or null, then it will be coerced to false
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // so, makes the method chainable
      return this;
    },
  };

  Greetr.init = function (firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
  };

  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
