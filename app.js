var tg = window.Telegram.WebApp;

tg.expand();

(function($){
$(function() {
  var userName = tg.WebAppUser.username;
  var mes = `hello ${userName}, how are you doing`;
  tg.showAlert(mes);
}
}(jQuery));

//(function($){
//tg.showAlert(`Добро пожаловать, ${tg.WebAppUser.username}.`);
//}(jQuery));
