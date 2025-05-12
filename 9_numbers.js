// Числа

//===============================================================================================//

/* 
    const price = 5.95
    const amount = 3
    const total = 5.95 * 3 // 17.85

    const a = Infinity
    const b = -Infinity
    const c = NaN
    const d = -0
    const e = 0 

    const hexNumber = 0x11 // 17
    const octalNumber = 0o11 // 9
    const binaryNumber = 0b11 // 3

    const distance = 1.7e5 // 170000
    const space = 1.7e-5 // 0.000017
*/

//===============================================================================================//

// Операции с числами

/* 
    Унарный плюс приводит любое значение к числу
    typeof +'17' // 'number'

    Математические операции с числами приводят другие аргументы к числам
    17 - '1' // 16

    Математические операции со значениями, которые нельзя привести у числу вернут NaN
    17 - undefined // NaN
*/

//===============================================================================================//

// Методы

// console.log(Number.isNaN('text')) // false
// console.log(isNaN('text')) // true
// console.log(isNaN(NaN)) // true
// console.log(Number.isNaN(NaN)) // true

// console.log(Number.isFinite('17')) // false
// console.log(isFinite('17')) // true

// console.log(parseInt(' 17.17text')) // 17
// console.log(Number.parseInt(' 17.17text')) // 17
// console.log(Number.parseInt('seventeen')) // NaN

// console.log(parseFloat(' 17.17text')) // 17.17
// console.log(Number.parseFloat(' 17.17text')) // 17.17
// console.log(Number.parseFloat('seventeen')) // NaN

// console.log(Number.isInteger(17)) // true
// console.log(Number.isInteger(17.0)) // true
// console.log(Number.isInteger(17.17)) // false
// console.log(Number.isInteger('17')) // false
// console.log(Number.isInteger(Infinity)) // false
// console.log(Number.isInteger(NaN)) // false
// console.log(Number.isInteger(undefined)) // false
// console.log(Number.isInteger(null)) // false


// const parseArray = arr => arr
//     .map(el => Number.parseFloat(el))

// const elementList = [4, 5.6, '   5.7kl', null, NaN, Infinity, undefined]
// console.log(parseArray(elementList))

/*
    В JavaScript (как и в большинстве языков программирования) числа с плавающей точкой представляются в формате IEEE 754, 
    который использует двоичную систему для хранения чисел. Однако не все десятичные дроби могут быть точно выражены в 
    двоичном формате, что приводит к небольшим неточностям при выполнении арифметических операций.
*/

// console.log(0.1 + 0.2) // 0.30000000000000004

// Двоичное представление чисел Числа 0.1 и 0.2 не могут быть точно выражены в двоичной системе. 
// Например, десятичное число 0.1 в двоичной системе записывается как бесконечная дробь:
// 0.1 (десятичное) = 0.00011001100110011001100110011001100... (двоичное)

// Решение проблемы:

// Метод .toFixed(n): округляет число до указанного количества знаков после запятой, например:
// console.log((0.1 + 0.2).toFixed(1)) // 0.3

// Метод Number.EPSILON: помогает избежать ошибок округления при сравнении чисел:
// console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) // true

// Библиотеки для работы с точной арифметикой: например, big.js или decimal.js

//===============================================================================================//

// Объект Math

// console.log(Math.ceil(17.17))
// console.log(Math.floor(17.71))
// console.log(Math.round(-17.5))
// console.log(Math.trunc(-17.5))
// console.log(Math.abs(-17)) // 17 (абсолютное значение числа)
// console.log(Math.max(5, 7, 17, 1))
// console.log(Math.min(6, 7, 1, -4))
// console.log(Math.pow(3, 4)) // 81 (возведение в степень) 
// console.log(Math.sqrt(9)) // 3

/* 
    Math.E	≈ 2.718281828459045	Число Эйлера (основание натурального логарифма)
    Math.PI	≈ 3.141592653589793	Число Пи (отношение длины окружности к её диаметру)
    Math.SQRT2	≈ 1.4142135623730951	Квадратный корень из 2
    Math.SQRT1_2	≈ 0.7071067811865476	Квадратный корень из 1/2
    Math.LN2	≈ 0.6931471805599453	Натуральный логарифм числа 2
    Math.LN10	≈ 2.302585092994046	Натуральный логарифм числа 10
    Math.LOG2E	≈ 1.4426950408889634	Двоичный логарифм числа e
    Math.LOG10E	≈ 0.4342944819032518	Десятичный логарифм числа e
*/
// Эти константы используются в различных математических операциях и встроенных функциях JavaScript. Например:
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.sqrt(16)); // 4
// console.log(Math.log(Math.E)); // 1

//===============================================================================================//

// Округление

// До целого:
// Math.ceil(17.17)
// Math.floor(17.71)
// Math.round(-17.5)
// Math.trunc(-17.5)

// До n-ного знака после запятой
// 1 Умножить и потом разделить
// Math.PI // 3.141592653589793
// Math.round((Math.PI * 1000)) / 1000 // 3.142

// 2 .toFixed(n)
// Math.PI.toFixed(3) // "3.142" (Возвращает строку)

// const multiRound = num =>
//     [
//      Math.round(num), 
//      Math.floor(num), 
//      Math.ceil(num), 
//      Math.trunc(num),
//     ]

// console.log(multiRound(17.1))


// const multiRound = num =>
//     [
//      Math.round(num * 100) / 100, 
//      Math.floor(num * 100) / 100, 
//      Math.ceil(num * 100) / 100, 
//      Math.trunc(num * 100) / 100,
//      num.toFixed(2)
//     ]

// console.log(multiRound(Math.PI))

//===============================================================================================//

// Безопасные числа

/* 
    В JavaScript безопасные числа — это те числа, которые могут быть точно представлены в виде числа типа Number, 
    не теряя точности. Диапазон безопасных чисел ограничен значениями от -2 в 53 степени +1 до 2 в 53 степени -1, 
    так как в JavaScript числа типа Number представляются согласно стандарту IEEE 754.
*/

// Для проверки, является ли число безопасным, используется свойство Number.isSafeInteger()
// console.log(Number.isSafeInteger(9007199254740991)); // true
// console.log(Number.isSafeInteger(9007199254740992)); // false

// Если вам нужно работать с числами, выходящими за пределы безопасного диапазона, 
// стоит использовать тип данных BigInt, который позволяет работать с числами произвольной точности:
// const bigNumber = BigInt("9007199254740993");
// console.log(bigNumber + 2n); // 9007199254740995n

/* 
    Безопасные числа важны, когда вы работаете с математическими расчетами или данными, 
    где точность имеет критическое значение, например, в финансовых приложениях.
*/



















// function findAverage(array) {
//     let sum = 0
//     for(let i = 0; i < array.length; i++) {
//         sum += array[i] / array.length
//     }
//     return sum
// }

// const findAverage = array => {
//     return array.reduce((acc, num) => acc + num / array.length, 0)
// }
    
// const array = ['1', '2', '3', '4', '5']
// console.log(findAverage(array))
