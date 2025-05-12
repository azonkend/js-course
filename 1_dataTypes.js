// Типы данных

//===============================================================================================//

// Примитивные (Примитивы - значения, передаются по значению, неизменяемы)
// Number - 1156, 3.14, 1e6, NaN
// String - "Hello", 'Hello', `Hello`, "Hello World"
// Boolean - true, false
// Null - null
// Undefined - undefined
// Symbol - Symbol('id')

//===============================================================================================//

//Ссылочные (Объект - совокупность значений, передаются по ссылке, изменяемы)
// Object - {}, {name: 'John', age: 30}, new Date(), new RegExp...
// Array - [], [1, 2, 3]
// Function - function() {}

// const obj = {number: 1, text: 'bbb'}
// console.log(typeof obj) 

// const arr = [1, 2, 3]
// console.log(typeof arr) 

// const func = () => console.log("Hello")
// console.log(typeof func) 

// let regex = /[a-z]/g
// console.log(typeof regex) 

// console.log(typeof null) // 
// console.log(typeof Symbol('Hello')) // 
// console.log(typeof undefined) // 
// console.log(typeof 17) // 
// console.log(typeof 17.17) // 
// console.log(typeof '17') // 
// console.log(typeof "17") // 
// console.log(typeof "I'm a string") // 
// console.log(typeof true) // 
// console.log(typeof false) // 

//===============================================================================================//

// Передача по значению
// const goodNumber = 17
// let anotherNumber = goodNumber
// anotherNumber = 77

// console.log(goodNumber)
// console.log(anotherNumber)

//===============================================================================================//

// Передача по ссылке
// const house = {
//     height: 5,
//     numberOfWindows: 10
// }
// const anotherHouse = house
// anotherHouse.numberOfWindows = 7

// console.log(house.numberOfWindows)
// console.log(anotherHouse.numberOfWindows)


















































// 📌 Типы данных в JavaScript

//===============================================================================================//
// 🔹 Примитивные типы данных
// Примитивные типы хранятся в памяти непосредственно как значения. Они неизменяемы (immutable)
// и передаются **по значению** (создается копия при присваивании).

// 1️⃣ Number - Числовой тип данных. Включает целые и дробные числа, а также специальные значения.
let integer = 42;       // Целое число
let float = 3.14;       // Дробное число
let exponential = 1e6;  // Экспоненциальная форма записи числа (1 * 10^6)
let nanExample = NaN;   // "Not a Number" (результат некорректной математической операции)

console.log(typeof integer);    // "number"
console.log(typeof float);      // "number"
console.log(typeof nanExample); // "number" (! NaN тоже относится к числовому типу)

// 2️⃣ String - Строковый тип данных, используется для текстовых значений.
let singleQuotes = 'Hello';   // Одинарные кавычки
let doubleQuotes = "Hello";   // Двойные кавычки
let backticks = `Hello`;      // Косые кавычки (шаблонные строки)

console.log(typeof singleQuotes); // "string"

// 3️⃣ Boolean - Логические значения: true (истина) и false (ложь).
let isJavaScriptFun = true;
let isSkyPurple = false;

console.log(typeof isJavaScriptFun); // "boolean"

// 4️⃣ Null - Специальное значение, представляющее "отсутствие объекта".
let emptyValue = null;
console.log(typeof emptyValue); // ⚠️ "object" (особенность JavaScript)

// 5️⃣ Undefined - Значение, которое получает переменная при отсутствии инициализации.
let notDefined;
console.log(typeof notDefined); // "undefined"

// 6️⃣ Symbol - Уникальные идентификаторы, полезны для создания приватных свойств объектов.
let uniqueId = Symbol('id');
console.log(typeof uniqueId); // "symbol"

//===============================================================================================//
// 🔹 Ссылочные типы данных
// Эти типы данных являются **изменяемыми (mutable)** и передаются **по ссылке**,
// то есть при присваивании передается не копия, а ссылка на один и тот же объект.

// 1️⃣ Object - Объекты представляют собой коллекцию пар "ключ-значение".
let person = {
    name: 'Alice',
    age: 25,
    isStudent: false
};
console.log(typeof person); // "object"

// 2️⃣ Array - Массивы — это упорядоченные коллекции элементов.
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // "object" (хотя это массив, typeof вернет "object")

// 3️⃣ Function - Функции тоже являются объектами в JavaScript.
function greet() {
    console.log("Привет!");
}
console.log(typeof greet); // "function"

// 4️⃣ RegExp - Регулярные выражения для работы со строками.
let regex = /[a-z]/g;
console.log(typeof regex); // "object"

//===============================================================================================//
// 🔎 Проверка типа данных с помощью typeof
console.log(typeof null);           // ⚠️ "object" (особенность JavaScript)
console.log(typeof Symbol('Hello'));// "symbol"
console.log(typeof undefined);      // "undefined"
console.log(typeof 17);             // "number"
console.log(typeof 'JavaScript');   // "string"
console.log(typeof true);           // "boolean"

//===============================================================================================//
// ✨ Разница между передачей **по значению** и **по ссылке**

// 📌 Примитивные типы передаются **по значению** (копируются).
let a = 10;
let b = a; // b получает КОПИЮ значения a
b = 20;    // Меняем b, но a остается прежним

console.log(a); // 10 (не изменился)
console.log(b); // 20 (новая копия)

// 📌 Объекты передаются **по ссылке** (изменения затрагивают оригинал).
let car = {
    brand: 'Toyota',
    color: 'red'
};
let anotherCar = car; // anotherCar ссылается на тот же объект car
anotherCar.color = 'blue'; // Изменение повлияет на оригинальный объект

console.log(car.color);       // "blue" (изменилось в оригинале)
console.log(anotherCar.color);// "blue" (потому что обе переменные указывают на один объект)

//===============================================================================================//
// 🎯 Итог:
// ✅ Примитивные типы — неизменяемые, передаются по **значению**.
// ✅ Ссылочные типы — изменяемые, передаются **по ссылке**.
