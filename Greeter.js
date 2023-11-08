(function (global, $) {
  var Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };

  var supportedLanguages = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Holla",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  var logMessages = {
    en: "Logged in",
    es: "Registrado",
  };

  Greeter.prototype = {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    validate() {
      if (supportedLanguages.indexOf(this.language) === -1)
        throw "Invalid language";
    },
    greeting() {
      return greetings[this.language] + " " + this.firstName + "!";
    },
    formalGreeting() {
      return formalGreetings[this.language] + ", " + this.fullName();
    },
    greet(formal) {
      var message;
      if (formal) message = this.formalGreeting();
      else message = this.greeting();
      if (console) console.log(message);
      return this;
    },
    log() {
      if (console)
        console.log(logMessages[this.language] + ": " + this.fullName());
      return this;
    },
    setLanguage(language) {
      this.language = language;
      this.validate();
      return this;
    },
    HTMLGreeting(selector, formal) {
      if (!$) throw "jQuery not loaded";
      if (!selector) throw "Missing jQuery selector";
      var message;
      if (formal) message = this.formalGreeting();
      else message = this.greeting();
      $(selector).html(message);
      return this;
    },
  };

  Greeter.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
    self.validate();
  };

  Greeter.init.prototype = Greeter.prototype;

  global.G$ = global.Greeter = Greeter;
})(window, jQuery);
