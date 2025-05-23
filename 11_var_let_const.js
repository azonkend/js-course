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











// 📌 Объявление переменных через var

//===============================================================================================//
// 🔹 Что такое var?
// `var` имеет **функциональную область видимости**, но **не блочную**, что может привести к неожиданным результатам.
// `var` подвержена **всплытию** (hoisting), поэтому можно использовать до объявления.

//===============================================================================================//
// 🔹 Проблема с областью видимости

var a = 17;
if (a) {
    var a = 1; // Переменная `a` перезаписывается внутри блока `if`
    console.log(a); // 1
}
console.log(a); // 1 (значение изменилось, хотя блок `if` завершился)

//===============================================================================================//
// 🔹 Всплытие (Hoisting) и неопределенные значения

var greeting = "Hello";
function sayHi() {
    greeting = "Hi";
    console.log(greeting);
    if (false) {
        var greeting; // Объявление всплывает, но не инициализируется
    }
}

sayHi();
console.log(greeting); // "Hi" (глобальная переменная изменена)

//===============================================================================================//
// 🔹 Ошибка с массивом функций

var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        return i;
    };
}

console.log(arr[2]()); // 10 (все функции запоминают ссылку на одно и то же `i`)

// 📌 Решение: Использование `let` для блочной области видимости
let arrFixed = [];
for (let i = 0; i < 10; i++) {
    arrFixed[i] = function () {
        return i;
    };
}

console.log(arrFixed[2]()); // 2 (каждая функция сохраняет свое значение `i`)

//===============================================================================================//
// 🔹 Почему лучше использовать let и const?
// ✅ `let` имеет **блочную область видимости**, а не функциональную.
// ✅ `const` предотвращает изменение значения переменной.
// ✅ Избегает проблем с **всплытием** и неожиданными изменениями значений.

//===============================================================================================//
// 🎯 Итог:
// ✅ `var` всплывает и имеет **функциональную** область видимости.
// ✅ Может **перезаписывать** переменные даже вне блока, что приводит к ошибкам.
// ✅ В большинстве случаев **лучше использовать `let` или `const`**.



// 📌 Объявление переменных через let и const

//===============================================================================================//
// 🔹 Что такое let?
// `let` имеет **блочную область видимости**, что предотвращает неожиданные изменения переменных.
// **Не всплывает** (hoisting без инициализации), поэтому нельзя использовать до объявления.

console.log(x); // ReferenceError: Cannot access 'x' before initialization  
let x = 10;

//===============================================================================================//
// 🔹 Что такое const?
// `const` также имеет **блочную область видимости**.
// Значение переменной, объявленной через `const`, **нельзя изменить** после инициализации.

const PI = 3.14;  
PI = 3.1415; // TypeError: Assignment to constant variable.

//===============================================================================================//
// 🔹 Блочная область видимости let и const

if (true) {  
    let a = 5;  
    const b = 10;  
    console.log(a, b); // 5, 10  
}  
console.log(a, b); // ReferenceError: a is not defined  

// ✅ Переменные `a` и `b` существуют **только внутри блока if**.

//===============================================================================================//
// 🔹 Всплытие (Hoisting) let и const
// Объявления `let` и `const` **всплывают**, но остаются в **"мертвой зоне"** до инициализации.

console.log(foo); // ReferenceError  
let foo = "Hello";

//===============================================================================================//
// 🔹 Ошибка с const и изменяемыми объектами

const user = { name: "Alice" };  
user.name = "Bob"; // ✅ Работает! (изменение свойства)  
user = { name: "Charlie" }; // ❌ TypeError (переназначение объекта)  

// ✅ `const` предотвращает **переназначение**, но **не изменение свойств** объекта.

//===============================================================================================//
// 🔹 Почему let и const лучше, чем var?
// ✅ **Блочная область видимости** предотвращает неожиданные изменения.
// ✅ **Отсутствие всплытия** исключает ошибки.
// ✅ **`const` защищает неизменяемые значения**.

//===============================================================================================//
// 🎯 Итог:
// ✅ `let` и `const` имеют **блочную** область видимости.
// ✅ `const` предотвращает **переназначение** переменной.
// ✅ **Лучше использовать `let` и `const` вместо `var`**.