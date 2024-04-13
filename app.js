let tg = window.Telegram.WebApp;

tg.expand();

tg.showConfirm(`Добро пожаловать, @${tg.WebAppUser.username}.`);
