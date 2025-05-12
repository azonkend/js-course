// Var
/* 
    var - всплывает, это часто приводит к непредсказуемому результату.
    var не имеет блочной области видимости, только функцилнальную. "то неудобно и может привести к 
    непредвиденному результату.
*/

// var a = 17
// if (a) {
//     var a = 1
//     console.log(a)// 1
// }
// console.log(a)// 1


// var greeting = 'Hello'
// function sayHi() {
//     greeting = 'Hi'
//     console.log(greeting)
//     // Если удалить блок if то результат будет Hi и Hi
//     if (false) {
//         var greeting
//     }
// }

// sayHi()
// console.log(greeting)


// Массив функций
// var arr = []

// for (var i = 0; i < 10; i++) {
//     arr[i] = function() {
//         return i
//     }
// }
// console.log(arr[2]()) // Результат всегда будет 10, т.к. var i всплыла наверх