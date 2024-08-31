// Импортируем модуль moment
const moment = require('moment');

// Получаем текущую дату и время
const now = moment();

// Форматируем дату и время
console.log("Формат 1 (DD-MM-YYYY):", now.format('DD-MM-YYYY'));
console.log("Формат 2 (MMM Do YY):", now.format('MMM Do YY'));
console.log("Формат 3 (dddd):", now.format('dddd'));