// Telegram WebApp API доступна глобально
const tg = window.Telegram.WebApp;

tg.expand(); // расширить окно
tg.ready(); // мини-приложение готово

document.getElementById("greeting").innerText = "Привет из Mini App!";