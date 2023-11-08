var g = G$("John", "Deo");

$("#login").click(function () {
  var language = $("#lang").val();
  $(".logindiv").hide();
  var person = G$("Adham", "Hamdy");
  person.setLanguage(language).HTMLGreeting("#greeting", true).log();
});
