// Асинхронность
// JavaScript однопоточный. Одна операция выполняется за одну единицу времени.

// Структура:

/* 
    Ядро (ECMAScript)
    - типы данных (String, Number, Boolean, Object ...)
    - инструкции (if(){...}, for(){...}...)
    - ключевые зарезервированные слова(new, switch, var, ...)
    - операторы (+, -, =...)
    - объекты
    - регулярные выражения(/[a|b]/)

    WebAPIs:
    - DOM
    - setTimeout / setInterval
    - Event Loop
    - AJAX (XMLHttpRequest)
    - nsvigator
    - localeStorage
    - ...
*/

// pinger(num, period)

// const pinger = (num, period) => {
//     const interval = setInterval(() => {
//         console.log('Ping')
//     }, period)

//     setTimeout(() => {
//         clearInterval(interval)
//     }, num * period)
// }

// pinger(5, 1000)



// const pinger = (num, period) => {
//     let i = num
//     console.log('Ping')
//     const interval = setInterval(() => {
//         if(--i > 0) {
//             console.log('Ping')  
//         } else {
//             clearInterval(interval)
//         }  
//     }, period)
// }

// pinger(5, 1000)


// Event Loop

// const main = () => {
//     console.log('Hi')
//     setTimeout(function cb() {
//         console.log('there')
//     }, 5000)
//     console.log('JSConfEU')
// }

// main()

// Весь асинхронный код всегда выполняется после синхронного

// const main = () => {
//     console.log('Hi')
//     setTimeout(function cb() {
//         console.log('there')
//     }, 0)
//     console.log('JSConfEU')
// }

// main() // Тот же результат