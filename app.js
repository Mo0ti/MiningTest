let tg = window.Telegram.WebApp;

tg.expand();

tg.showAlert(`Добро пожаловать, @${tg.WebAppInitData.user.username}.`);
