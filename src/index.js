// Подключаем переменные среды (логин-пароль от базы данных и т. д.) из файла .env 
require("dotenv").config();

// Создаем веб сервер
const express = require("express");
const app = express();

// Настройка движка представлений (HTML шаблонов)
const hbs = require("hbs");
const { statusNameHelper, statusClassHelper, statusIconHelper } = require("./model/status");
hbs.registerHelper('statusName', statusNameHelper);
hbs.registerHelper('statusClass', statusClassHelper);
hbs.registerHelper('statusIcon', statusIconHelper);
app.set("view engine", "hbs");
app.set("views", require("path").join(__dirname, "view"))

// Доп. настройки для парсинга параметров (см. req.body в controllers/index.js)
app.use(express.json())
app.use(express.urlencoded())

// Заявляем об использовании контроллера и всех его маршрутов
app.use(require("./controllers"));

// Запускаем веб сервер на порту 3000 (порт можно менять) 
app.listen(3000, () => 
    console.log("Программа запущена на порте 3000 и доступна по ссылке http://localhost:3000/ в браузере!")
)
