// Работа с датами

// Способы создания даты

/* 
    const today = new Date()
    const date1 = new Date('December 17, 1995 03:24:00')
    const date3 = new Date(949363322003)
    const date4 = new Date(1995, 11, 17, 3, 24, 0) 
*/

// Работа с компонентами даты

/* 
    new Date(year, mounthIndex, [day, [hours, [minutes, [seconds, [milliseconds]]]]])

    .getFullYear()
    .getMonth()
    .getDate()
    .getHours()
    .getMinutes()
    .getSeconds()
    .getMilliseconds()

    .setFullYear()
    .setMonth()
    .setDate()
    .setHours()
    .setMinutes()
    .setSeconds()
    .setMilliseconds()

    .getUTCFullYear()
    .getUTCMonth()
    .getUTCDate()
    .getUTCHours()
    .getUTCMinutes()
    .getUTCSeconds()
    .getUTCMilliseconds()

    .setUTCFullYear()
    .setUTCMonth()
    .setUTCDate()
    .setUTCHours()
    .setUTCMinutes()
    .setUTCSeconds()
    .setUTCMilliseconds()
*/














// Работа с датами в JavaScript
//================================================================================================//

// 📌 Объект Date - основной инструмент для работы с датами и временем в JavaScript.
// Создание даты можно выполнить разными способами:

const today = new Date(); // Текущая дата и время
const date1 = new Date('December 17, 1995 03:24:00'); // Указанная дата в текстовом формате
const date2 = new Date(949363322003); // Дата из количества миллисекунд с 1970 года (UNIX timestamp)
const date3 = new Date(1995, 11, 17, 3, 24, 0); // Дата с указанными компонентами (год, месяц, день, часы, минуты, секунды)

// 📝 Примечание: месяцы нумеруются с 0, поэтому 11 = декабрь!
//================================================================================================//

// 📌 Получение и установка компонентов даты

let date = new Date(2025, 4, 21, 15, 39); // 21 мая 2025 года, 15:39

console.log(date.getFullYear()); // Получение года (2025)
console.log(date.getMonth()); // Получение месяца (4, т.е. май)
console.log(date.getDate()); // Получение дня месяца (21)
console.log(date.getHours()); // Получение часов (15)
console.log(date.getMinutes()); // Получение минут (39)
console.log(date.getSeconds()); // Получение секунд
console.log(date.getMilliseconds()); // Получение миллисекунд

// Установка новых значений
date.setFullYear(2030);
date.setMonth(0); // Январь
date.setDate(1);
date.setHours(10);
date.setMinutes(0);

console.log(date); // 1 января 2030 года, 10:00
//================================================================================================//

// 📌 Автоисправление дат
// Если установить некорректное значение, объект Date автоматически его скорректирует.

let incorrectDate = new Date(2025, 3, 35); // 35 апреля 2025?
console.log(incorrectDate); // Ой! Это уже 5 мая 2025! 😲

// Аналогично, если выставить отрицательное значение:
let negativeDate = new Date(2025, 0, -5); // -5 января?
console.log(negativeDate); // Получится 26 декабря 2024!
//================================================================================================//

// 📌 Сравнение дат

let d1 = new Date(2025, 0, 1);
let d2 = new Date(2025, 0, 2);

console.log(d1 > d2); // false
console.log(d1 < d2); // true

// Сравнивать можно и по разнице в миллисекундах
console.log(d2 - d1); // Разница в миллисекундах (один день)
//================================================================================================//

// 📌 Часовые пояса и методы UTC

console.log(date.getTimezoneOffset()); // Разница в минутах между локальным временем и UTC

// Методы UTC позволяют получить дату/время по Гринвичу (UTC+0):
console.log(date.getUTCFullYear()); 
console.log(date.getUTCMonth()); 
console.log(date.getUTCDate()); 
console.log(date.getUTCHours()); 

//================================================================================================//

// 🏁 Итог:
// - `Date` помогает работать с датой и временем.
// - Месяцы считаются с 0!
// - Можно легко изменять дату и получать её компоненты.
// - Автоисправление поможет избежать ошибок.
// - Даты можно сравнивать и вычислять разницу.
// - Часовые пояса играют важную роль.

