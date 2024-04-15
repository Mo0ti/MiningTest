let tg = window.Telegram.WebApp;

 if (tg.WebAppUser && tg.WebAppUser.username) {
        tg.showAlert(Добро пожаловать, @${tg.WebAppUser.username}.);
    } else {
        tg.showAlert(Добро пожаловать, пользователь без имени.);
    };

tg.expand();
