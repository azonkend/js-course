// Массивы

//===============================================================================================//

// Вывод длины массива
// const numbers = [11, 22, 33, 55, 66]
// const numberOfElements = numbers.length
// console.log(numberOfElements)

//===============================================================================================//

// Счёт в массиве начинается с нуля
// const numbers = [11, 22, 33, 55, 66]
// console.log(`Element #1: ${numbers[1]}`)
// console.log(`Element #0: ${numbers[0]}`)

//===============================================================================================//

// Доступ к последнему эл. массива
// const numbers = [11, 22, 33, 55, 66]
// console.log(`Element last: ${numbers[numbers.length - 1]}`) 
// console.log(numbers.at(-1))

//===============================================================================================//

//[11, 22, 33, 55, 66] => [length, first element, last element]
// function getArrayBound(arr) {
//     // Проверка массив или не массив(возвращает true или false)
//     if (!Array.isArray(arr)) {
//         // После return выполнение не идёт
//         return null
//     }
//     return [arr.length, arr[0] ,arr[arr.length - 1]]
// }

// const numbers = [11, 22, 33, 55, 66]
// const arrayBound = getArrayBound(numbers)
// console.log(arrayBound)

//===============================================================================================//

// Перебор массива
// const numbers = [11, 22, 33, 55, 66]

// let sumOfNumbers = 0
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
//     sumOfNumbers += numbers[i]
// }

// console.log(`Result: ${sumOfNumbers}`)

// function sum(numbers) {
//     let sumOfNumbers = 0

//     for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
//     sumOfNumbers += numbers[i]
//     }

//     return sumOfNumbers
// }

// const sumOfElements = sum(numbers)

// console.log(`Result: ${sumOfElements}`)

//===============================================================================================//

// Передача элементов по ссылке
// const numbers = [11, 22, 33, 55, 66]
// const arr = numbers
// arr[2] = 1000
// console.log(arr)

//===============================================================================================//

// Методы массивов .pop(), .push(), .shift(), .unshift()
// const people = ['Tom', 'Ann', 'Bob']
// people[people.length] = 'Jack'
// people.unshift('Jack', 'John') // Добавляет элементы в начало
// people.push('Jack', 'John') // Добавляет элементы в конец
// people.pop('Jack', 'John') // Удаляет элементы в конце(можно получить эл в конце) 
// people.shift('Jack', 'John') // Удаляет элементы в начале(можно получить эл в начале)
// console.log(people)

//===============================================================================================//

// from, to => [n% 3 === 0]

// function getSpecialNumbers(from, to) {
//     let specialNumbers = []

//     for(let i = from; i <= to; i++) {
//         if(i % 3 === 0) {
//             specialNumbers.push(i)
//         }
//     }
//     return specialNumbers
// }

// const specialNumbers = getSpecialNumbers(10, 30)
// console.log(specialNumbers)

//===============================================================================================//

// spread и деструктуризация 

// const numbers = [11, 22, 33, 55, 66]
// const a = numbers[0]
// const b = numbers[1]
// console.log(a, b)

// const numbers = [11, 22, 33, 55, 66]
// const [a, b, c, d, e, f] = numbers
// console.log(a, b ,d)

// Используем деструктуризацию на фруктах
// const fruits = ["яблоко", "банан", "вишня"]
// const [fruit1, fruit2] = fruits;
// console.log(fruit1); // "яблоко"
// console.log(fruit2); // "банан"

// Можно пропустить элемент с помощью запятых
// const fruits = ["яблоко", "банан", "вишня"]
// const [first, , third] = fruits
// console.log(third)
// console.log(first)

// Оператор ... позволяет получить все остальные эл. массива
// Он всегда должен быть в конце массива

// const numbers = [11, 22, 33, 55, 66]
// // const [a, b, ...rest] = numbers
// // console.log(a, b, rest)
// // console.log(a, b, [1, 2, 3, ...rest, 6, 7])

// function swap(arr) {
//     const [start, ...rest] = arr
//     return [...rest, start]
// }
// console.log(swap(numbers))

//===============================================================================================//

// Перебор массива с помощью цикла for of
// function sum(numbers) {
//     let sumOfNumbers = 0
//     for(let num of numbers) {
//         sumOfNumbers += num
//     }
//     return sumOfNumbers
// }
// const numbers = [11, 22, 33, 55, 66]
// const sumOfElements = sum(numbers)
// console.log(`Result: ${sumOfElements}`)




























































































// 📌 Массивы в JavaScript

//===============================================================================================//
// 🔹 Создание массива и его длина

const numbers = [11, 22, 33, 55, 66];

console.log(numbers.length); // 5 (количество элементов)

//===============================================================================================//
// 🔹 Доступ к элементам массива (индексация начинается с 0)

console.log(numbers[0]); // 11 (первый элемент)
console.log(numbers[1]); // 22 (второй элемент)
console.log(numbers[numbers.length - 1]); // 66 (последний элемент)
console.log(numbers.at(-1)); // 66 (альтернативный способ)

//===============================================================================================//
// 🔹 Проверка, является ли значение массивом

console.log(Array.isArray(numbers)); // true

//===============================================================================================//
// 🔹 Функция для получения длины, первого и последнего элемента

function getArrayBound(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}

console.log(getArrayBound(numbers)); // [5, 11, 66]

//===============================================================================================//
// 🔹 Перебор массива с использованием for

let sumOfNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
}

console.log(`Result: ${sumOfNumbers}`); // 187

// 📌 Функция для вычисления суммы элементов массива
function sum(arr) {
    let sumOfNumbers = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfNumbers += arr[i];
    }
    return sumOfNumbers;
}

console.log(`Result: ${sum(numbers)}`); // 187

//===============================================================================================//
// 🔹 Передача массива по ссылке (изменения затрагивают оригинальный массив)

const arr = numbers;
arr[2] = 1000; // Модифицируем третий элемент

console.log(numbers); // [11, 22, 1000, 55, 66] (изменился оригинал)

//===============================================================================================//
// 🔹 Основные методы массивов

const people = ['Tom', 'Ann', 'Bob'];

people.push('Jack');     // Добавить в конец
people.unshift('John');  // Добавить в начало
people.pop();            // Удалить последний элемент
people.shift();          // Удалить первый элемент

console.log(people); // [ 'Tom', 'Ann', 'Bob' ]

//===============================================================================================//
// 🔹 Поиск чисел, кратных 3

function getSpecialNumbers(from, to) {
    let specialNumbers = [];
    for (let i = from; i <= to; i++) {
        if (i % 3 === 0) {
            specialNumbers.push(i);
        }
    }
    return specialNumbers;
}

console.log(getSpecialNumbers(10, 30)); // [12, 15, 18, 21, 24, 27, 30]

//===============================================================================================//
// 🔹 Оператор spread и деструктуризация массива
const numbersArr =  [11, 22, 33, 55, 66]
const [a, b, ...rest] = numbersArr;

console.log(a, b, rest); // 11 22 [33, 55, 66]

// 📌 Функция swap: перемещение первого элемента массива в конец
function swap(arr) {
    const [first, ...rest] = arr;
    return [...rest, first];
}

console.log(swap(numbersArr)); // [22, 33, 55, 66, 11]

//===============================================================================================//
// 🔹 Перебор массива с использованием for..of

function sumWithForOf(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

console.log(`Result: ${sumWithForOf(numbersArr)}`); // 187

//===============================================================================================//
// 🎯 Итог:
// ✅ Массивы индексируются с 0, последний элемент доступен через `length - 1` или `.at(-1)`.
// ✅ `Array.isArray()` проверяет, является ли значение массивом.
// ✅ Методы `push`, `pop`, `shift`, `unshift` управляют элементами массива.
// ✅ Spread `...` помогает деструктурировать и копировать массивы.
// ✅ Массив передается **по ссылке**, а не по значению.

