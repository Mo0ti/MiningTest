var tg = window.Telegram.WebApp;

tg.expand();

(function($){
tg.showAlert("Добро пожаловать, @${tg.WebAppUser.username}.");
}(jQuery));
